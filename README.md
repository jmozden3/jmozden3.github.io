# My website

My personal site — [joemozden.com](https://joemozden.com). It's a Jekyll site hosted on GitHub Pages. Mostly notes-to-self here so I don't have to relearn this every time.

## How it deploys

Push to `main` and GitHub Pages builds and deploys it automatically. There's no separate deploy step — the live site is whatever's on `main`. Give it a minute or two after pushing.

## Running it locally (preview before pushing)

Always preview locally before pushing, because **VS Code's built-in Markdown preview lies** — it uses a different engine than GitHub Pages, doesn't run Liquid or my inline JS, and mangles raw HTML in posts. The only preview I trust is a real Jekyll build:

```
cd C:\Users\jmozd\Documents\projects\my-website
bundle exec jekyll serve --livereload
```

Then open http://localhost:4000. It auto-refreshes when I save. `Ctrl+C` to stop.

This matches the live site exactly because the `Gemfile` is pinned to the `github-pages` gem (same Jekyll/Kramdown versions GitHub runs).

**First-time / "bundle: command not found":** Ruby's installed at `C:\Ruby33-x64`. If a terminal can't find `bundle`, it was opened before Ruby got installed — just open a fresh terminal. One-time gem install: `bundle install`.

## A couple of gotchas worth remembering

- **Raw HTML in posts:** keep block elements (`<div>`, `<article>`, comments) flush at column 0, with blank lines only *between* them — never a blank line followed by indented HTML, or Kramdown turns it into a literal code block. The World Cup posts are the example to copy.
- **World Cup scores** (`/worldcup/`) pull from `_data/scores.json`, which a GitHub Action (`.github/workflows/scores.yml`) refreshes on a schedule. I don't edit that file by hand.

## Subscriptions & analytics

- **Email subscribers (Buttondown, username `joemozden`):** the subscribe form lives in `_includes/subscribe.html` (shown on `/` and `/blog/`) and posts straight to Buttondown, which stores subscribers and handles unsubscribes. When a push to `main` **adds** a new file to `_posts/`, the `notify-subscribers.yml` Action waits for the post to appear in the live `feed.xml`, then emails all subscribers via the Buttondown API (`BUTTONDOWN_API_KEY` repo secret). Editing an existing post never sends an email — only genuinely new files do. To test or re-send manually: Actions → "Email subscribers about new posts" → Run workflow (creates a draft unless "send" is checked). Subscriber list / sent emails: buttondown.com dashboard.
- **Analytics (GoatCounter):** one script tag in `_layouts/default.html` covers every page. Dashboard: [joemozden.goatcounter.com](https://joemozden.goatcounter.com). It ignores localhost, so local previews don't pollute stats.
- The `url:` in `_config.yml` must stay `https://joemozden.com` (matching `CNAME`) — the feed, SEO tags, and subscriber emails all build absolute links from it.
