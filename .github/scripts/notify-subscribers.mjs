// Emails Buttondown subscribers about newly added posts.
//
// Usage: node .github/scripts/notify-subscribers.mjs <post-path> [<post-path> ...]
// Env:   BUTTONDOWN_API_KEY (required)
//        SEND_MODE = "send" | "draft"  (default "send"; "draft" creates a
//                    Buttondown draft instead of emailing — used for dry runs)
//
// For each post file this waits until the post shows up in the live feed.xml
// (which doubles as "the Pages deploy finished"), takes the canonical URL from
// the feed entry, and creates a Buttondown email with the post's title/excerpt.

import { readFileSync } from "node:fs";
import { basename } from "node:path";

const SITE = "https://joemozden.com";
const FEED_URL = `${SITE}/feed.xml`;
const API_URL = "https://api.buttondown.com/v1/emails";
const POLL_INTERVAL_MS = 30_000;
const POLL_TIMEOUT_MS = 15 * 60_000; // Pages deploys usually land in 1-3 min

const apiKey = process.env.BUTTONDOWN_API_KEY;
if (!apiKey) {
  console.error("BUTTONDOWN_API_KEY is not set.");
  process.exit(1);
}
const sendMode = process.env.SEND_MODE === "draft" ? "draft" : "send";

const postPaths = process.argv.slice(2);
if (postPaths.length === 0) {
  console.log("No post paths given — nothing to do.");
  process.exit(0);
}

// --- Front matter -----------------------------------------------------------

function parseFrontMatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const fm = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^(\w[\w-]*):\s*(.*)$/);
    if (!kv) continue;
    let value = kv[2].trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    fm[kv[1]] = value;
  }
  return fm;
}

// --- Feed matching -----------------------------------------------------------

function feedEntries(xml) {
  const entries = [];
  for (const block of xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)) {
    const entry = block[1];
    const link = entry.match(/<link[^>]*href="([^"]+)"/)?.[1] ?? "";
    const title =
      entry.match(/<title[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/)?.[1]?.trim() ?? "";
    entries.push({ link, title });
  }
  return entries;
}

function matcherFor(postPath, fm) {
  const file = basename(postPath);
  const parts = file.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)\.(md|markdown|html)$/);
  const datePath = parts ? `/${parts[1]}/${parts[2]}/${parts[3]}/${parts[4]}` : null;
  const permalink = fm.permalink ? fm.permalink.replace(/\/+$/, "") : null;

  return (entry) => {
    const link = entry.link.replace(/\/+$/, "");
    if (permalink && link.endsWith(permalink)) return true;
    if (datePath && (link.endsWith(datePath) || link.endsWith(`${datePath}.html`))) return true;
    return fm.title != null && entry.title === fm.title;
  };
}

async function waitForFeedEntry(postPath, fm) {
  const matches = matcherFor(postPath, fm);
  const deadline = Date.now() + POLL_TIMEOUT_MS;
  for (;;) {
    try {
      const res = await fetch(FEED_URL, { headers: { "cache-control": "no-cache" } });
      if (res.ok) {
        const entry = feedEntries(await res.text()).find(matches);
        if (entry) return entry;
      }
    } catch (err) {
      console.log(`Feed fetch failed (${err.message}), retrying...`);
    }
    if (Date.now() > deadline) return null;
    console.log(`Post not in ${FEED_URL} yet — waiting ${POLL_INTERVAL_MS / 1000}s...`);
    await new Promise((r) => setTimeout(r, POLL_INTERVAL_MS));
  }
}

// --- Buttondown --------------------------------------------------------------

async function createEmail(fm, url) {
  const excerpt = fm.excerpt || "I just published a new post.";
  const body = [
    excerpt,
    "",
    `[Read the full post →](${url})`,
  ].join("\n");

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Token ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      subject: fm.title,
      body,
      status: sendMode === "send" ? "about_to_send" : "draft",
    }),
  });

  if (!res.ok) {
    throw new Error(`Buttondown API ${res.status}: ${await res.text()}`);
  }
}

// --- Main --------------------------------------------------------------------

let failed = false;
for (const postPath of postPaths) {
  console.log(`\nProcessing ${postPath}`);
  let fm;
  try {
    fm = parseFrontMatter(readFileSync(postPath, "utf8"));
  } catch (err) {
    console.error(`Could not read ${postPath}: ${err.message}`);
    failed = true;
    continue;
  }
  if (!fm.title) {
    console.error(`No title in front matter of ${postPath} — skipping.`);
    failed = true;
    continue;
  }

  const entry = await waitForFeedEntry(postPath, fm);
  if (!entry) {
    console.error(
      `Timed out waiting for "${fm.title}" to appear in ${FEED_URL}. ` +
        "No email sent. Re-run manually via workflow_dispatch once the site is live.",
    );
    failed = true;
    continue;
  }

  console.log(`Found in feed: ${entry.link}`);
  await createEmail(fm, entry.link);
  console.log(
    sendMode === "send"
      ? `Sent "${fm.title}" to subscribers.`
      : `Created Buttondown draft for "${fm.title}" (dry run — nothing sent).`,
  );
}

process.exit(failed ? 1 : 0);
