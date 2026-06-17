#!/usr/bin/env node
/*
 * Build _data/scores.json from the free, no-API-key openfootball World Cup 2026
 * dataset (https://github.com/openfootball/worldcup.json).
 *
 * Defensive by design: the source publishes group-stage fixtures before the
 * knockout rows exist, team fields may be strings OR { name, code } objects, and
 * scores are absent until a match is played. We never assume a fixed match count
 * (e.g. 104) and we refuse to overwrite scores.json with empty data.
 *
 * Output shape (matches what /worldcup/ reads via {{ site.data.scores | jsonify }}):
 *   { "updated": ISO, "matches": [ { date, home, away, homeScore, awayScore,
 *     status, kickoff?, group?, homeCode?, awayCode? } ] }
 */
import { writeFile, readFile } from 'node:fs/promises';

const SOURCE = process.env.SCORES_SOURCE_URL ||
  'https://raw.githubusercontent.com/openfootball/worldcup.json/master/2026/worldcup.json';
const OUT = process.env.SCORES_OUT || '_data/scores.json';

// FIFA 3-letter codes for the 48 finalists, keyed by the names openfootball uses.
// These match ESPN's abbreviations, so the static results list and the live (ESPN)
// strip render identical codes. Knockout placeholders (1A, W73, …) have no entry and
// fall back to their label — they only ever appear in unplayed matches.
const CODE = {
  'Algeria':'ALG','Argentina':'ARG','Australia':'AUS','Austria':'AUT','Belgium':'BEL',
  'Bosnia & Herzegovina':'BIH','Brazil':'BRA','Canada':'CAN','Cape Verde':'CPV',
  'Colombia':'COL','Croatia':'CRO','Curaçao':'CUW','Czech Republic':'CZE','DR Congo':'COD',
  'Ecuador':'ECU','Egypt':'EGY','England':'ENG','France':'FRA','Germany':'GER','Ghana':'GHA',
  'Haiti':'HAI','Iran':'IRN','Iraq':'IRQ','Ivory Coast':'CIV','Japan':'JPN','Jordan':'JOR',
  'Mexico':'MEX','Morocco':'MAR','Netherlands':'NED','New Zealand':'NZL','Norway':'NOR',
  'Panama':'PAN','Paraguay':'PAR','Portugal':'POR','Qatar':'QAT','Saudi Arabia':'KSA',
  'Scotland':'SCO','Senegal':'SEN','South Africa':'RSA','South Korea':'KOR','Spain':'ESP',
  'Sweden':'SWE','Switzerland':'SUI','Tunisia':'TUN','Turkey':'TUR','USA':'USA',
  'Uruguay':'URU','Uzbekistan':'UZB',
};

function teamName(t) {
  if (t == null) return null;
  if (typeof t === 'string') return t.trim() || null;
  return (t.name || t.code || '').trim() || null;
}
function teamCode(t) {
  return t && typeof t === 'object' && t.code ? String(t.code).trim() : null;
}
function groupOf(match, round) {
  const raw = match.group || round?.group || round?.name || '';
  const m = String(raw).match(/Group\s+([A-L])\b/i);
  return m ? m[1].toUpperCase() : undefined;
}

function mapMatches(data) {
  const rounds = Array.isArray(data?.rounds) ? data.rounds
    : Array.isArray(data?.matches) ? [{ matches: data.matches }]
    : [];
  const out = [];
  for (const round of rounds) {
    const matches = Array.isArray(round?.matches) ? round.matches : [];
    for (const mt of matches) {
      const home = teamName(mt.team1);
      const away = teamName(mt.team2);
      if (!home || !away) continue; // skip rows without both teams

      const ft = mt.score && Array.isArray(mt.score.ft) ? mt.score.ft : null;
      const played = ft && ft.length === 2 && ft[0] != null && ft[1] != null;

      const entry = {
        date: mt.date || null,
        home,
        away,
        homeScore: played ? ft[0] : null,
        awayScore: played ? ft[1] : null,
        status: played ? 'FT' : 'scheduled',
      };
      const hc = teamCode(mt.team1) || CODE[home];
      const ac = teamCode(mt.team2) || CODE[away];
      if (hc) entry.homeCode = hc;
      if (ac) entry.awayCode = ac;
      if (!played && mt.time) entry.kickoff = mt.time;
      const g = groupOf(mt, round);
      if (g) entry.group = g;
      out.push(entry);
    }
  }
  out.sort((a, b) => String(a.date).localeCompare(String(b.date)));
  return out;
}

async function readPrevMatches() {
  try {
    return JSON.parse(await readFile(OUT, 'utf8')).matches ?? null;
  } catch {
    return null;
  }
}

async function main() {
  const res = await fetch(SOURCE, { headers: { 'User-Agent': 'wc-scores-bot' } });
  if (!res.ok) throw new Error(`fetch failed: ${res.status} ${res.statusText} (${SOURCE})`);
  const data = await res.json();

  const matches = mapMatches(data);
  if (!matches.length) {
    throw new Error('parsed 0 matches — refusing to overwrite scores.json with empty data');
  }

  // Only rewrite when the fixtures/scores actually changed, so the timestamp
  // alone never churns a commit (and a fresh Pages build) every few hours.
  const prev = await readPrevMatches();
  if (prev && JSON.stringify(prev) === JSON.stringify(matches)) {
    console.log(`no change — ${matches.length} matches unchanged, leaving ${OUT} as-is`);
    return;
  }

  const payload = { updated: new Date().toISOString(), matches };
  await writeFile(OUT, JSON.stringify(payload, null, 2) + '\n');
  console.log(`wrote ${OUT} with ${matches.length} matches`);
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
