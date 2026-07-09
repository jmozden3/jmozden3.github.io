---
layout: default
title: "2026 World Cup Live Updates"
date: 2026-06-11 09:00:00 -0500
categories: sports
tags: [sports, soccer]
permalink: /worldcup/
live: true   # shows a pulsing "● Live" pill on the Blog page; remove/false when the tournament ends
excerpt: "Following the 2026 World Cup as it happens"
image: https://jmozden3.github.io/assets/images/usmnt-goal-hug.png
---

<!-- Fonts (Inter / Archivo / Space Mono) are loaded site-wide in _layouts/default.html -->

<style>
  /* ---- tokens (same values as the preview) ---- */
  :root{
    --pitch:#08201b; --pitch-2:#0c2a22; --turf:#15613f; --turf-line:#7fdcab;
    --chalk:#f4f8f3; --paper:#fafbfa; --ink:#0d211c; --ink-soft:#46584f;
    --accent:#ff4332; --accent-ink:#c8261a; --blue:#2f6bff; --gold:#e4b14c;
    --line:#e2e7e2; --radius:14px; --maxw:1080px;
  }
  .wcl *{box-sizing:border-box;margin:0;padding:0}
  .wcl{font-family:'Inter',system-ui,sans-serif;color:var(--ink);background:var(--paper);line-height:1.65;-webkit-font-smoothing:antialiased}
  .wcl h1,.wcl h2,.wcl h3{font-family:'Archivo',sans-serif;line-height:1.04;letter-spacing:-.02em}
  .wcl p{margin:0 0 1rem}
  .wcl a{color:var(--accent-ink)}
  .wcl .wrap{max-width:var(--maxw);margin:0 auto;padding:0 24px}
  .eyebrow{font-family:'Space Mono',monospace;font-size:.78rem;letter-spacing:.04em;text-transform:uppercase;color:var(--accent-ink);font-weight:700}
  .eyebrow .num{color:var(--ink-soft)}
  @media (prefers-reduced-motion:reduce){.wcl *{transition:none!important;animation:none!important}}

  /* ---- header band ---- */
  .wcl-hero{background:radial-gradient(120% 120% at 80% -10%,var(--pitch-2),var(--pitch) 60%);color:var(--chalk);padding:54px 0 30px}
  .wcl-hero .eyebrow{color:#ff8c7f}
  .wcl-hero h1{font-size:clamp(2rem,6vw,3.4rem);font-weight:900;text-transform:uppercase;margin:.4rem 0 .6rem;max-width:18ch}
  .wcl-hero p.sub{color:#cfe0d7;max-width:52ch;font-size:1.05rem;margin:0}
  .wcl-next{font-family:'Space Mono',monospace;font-size:.8rem;color:#9fc4b3;margin-top:18px}
  .wcl-next b{color:var(--chalk)}
  /* evergreen "start here" link to the tournament preview — pinned in the hero so it
     never scrolls away into the dated stream below */
  .wcl-pinned{margin-top:16px}
  .wcl-pinned a{display:inline-flex;align-items:center;gap:8px;font-family:'Space Mono',monospace;font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.03em;color:var(--chalk);text-decoration:none;background:rgba(255,255,255,.06);border:1px solid rgba(127,220,171,.28);border-left:3px solid var(--accent);border-radius:999px;padding:9px 16px;transition:all .18s}
  .wcl-pinned a:hover{background:rgba(255,255,255,.12);border-color:var(--accent)}
  .wcl-pinned .pin{font-size:.9rem}

  /* ---- scores panel (yesterday / today live / collapsible all) ---- */
  .wcl-scores{background:var(--pitch-2);border-top:1px solid rgba(127,220,171,.16)}
  .wcl-scores .wrap{padding-top:16px;padding-bottom:16px}
  .wcl-scores-inner{display:flex;flex-direction:column;gap:12px}
  .score-day{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap}
  .wcl-scores .lbl{font-family:'Space Mono',monospace;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#9fc4b3;min-width:76px}
  .live-flag{color:var(--accent);margin-left:8px}
  .score-row{display:flex;gap:8px;flex-wrap:wrap}
  .score-chip{font-family:'Space Mono',monospace;font-size:.82rem;color:var(--chalk);background:rgba(255,255,255,.06);border:1px solid rgba(127,220,171,.18);border-radius:999px;padding:6px 12px;white-space:nowrap}
  .score-chip i{font-style:normal;color:#9fc4b3;margin-left:4px}
  .score-chip.live{border-color:rgba(255,67,50,.55)}
  .score-chip.live i{color:#ff8c7f}
  .score-chip .dot{display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--accent);margin-right:6px;vertical-align:middle;animation:wcpulse 1.4s ease-in-out infinite}
  @keyframes wcpulse{0%,100%{opacity:1}50%{opacity:.25}}
  /* 🦅 easter egg: USA-win chips are clickable */
  .score-chip.usa-win{cursor:pointer}
  .score-chip.usa-win:hover{border-color:rgba(255,255,255,.45)}
  .wc-eagle{position:fixed;left:0;top:42%;z-index:9999;font-size:56px;line-height:1;white-space:nowrap;pointer-events:none;will-change:transform;filter:drop-shadow(0 8px 10px rgba(0,0,0,.3));animation:wc-fly 2.4s ease-in-out forwards}
  .wc-eagle .bird{display:inline-block;transform:scaleX(-1)}  /* face the direction of travel */
  .wc-eagle .ball{display:inline-block;font-size:34px;margin-left:-8px;vertical-align:super;animation:wc-spin .5s linear infinite}
  @keyframes wc-fly{
    0%{transform:translateX(-30vw) translateY(0)}
    20%{transform:translateX(5vw) translateY(-9vh)}
    40%{transform:translateX(30vw) translateY(7vh)}
    60%{transform:translateX(55vw) translateY(-7vh)}
    80%{transform:translateX(80vw) translateY(6vh)}
    100%{transform:translateX(125vw) translateY(-3vh)}
  }
  @keyframes wc-spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}
  .score-empty{font-family:'Space Mono',monospace;font-size:.76rem;color:#6f8c7e}
  /* collapsible full schedule — tucked away, doesn't dominate the strip */
  .score-all{border-top:1px solid rgba(127,220,171,.16);padding-top:12px}
  .score-all summary{font-family:'Space Mono',monospace;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#9fc4b3;cursor:pointer;list-style:none}
  .score-all summary::-webkit-details-marker{display:none}
  .score-all summary::before{content:'\25B8  ';color:var(--accent)}
  .score-all[open] summary::before{content:'\25BE  '}
  .score-all-body{padding-top:14px;display:flex;flex-direction:column;gap:12px}
  .score-all-day{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap}
  .score-all-day .d{font-family:'Space Mono',monospace;font-size:.7rem;text-transform:uppercase;color:#6f8c7e;min-width:76px}

  /* ---- filter toolbar (non-sticky; scrolls away with the page) ---- */
  .wcl-bar{background:var(--paper);border-bottom:1px solid var(--line)}
  .wcl-bar .wrap{display:flex;align-items:center;gap:8px;flex-wrap:wrap;padding-top:14px;padding-bottom:14px}
  .wc-pill{font-family:'Space Mono',monospace;font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.02em;cursor:pointer;border:1px solid var(--line);background:#fff;color:var(--ink-soft);padding:8px 15px;border-radius:999px;transition:all .18s}
  .wc-pill:hover{border-color:var(--accent);color:var(--accent-ink)}
  .wc-pill.on{background:var(--accent);border-color:var(--accent);color:#fff}
  .wc-count{font-family:'Space Mono',monospace;font-size:.72rem;color:var(--ink-soft);margin-left:auto}

  /* ---- the stream ---- */
  .wcl-stream{padding:30px 0 80px}
  .wc-entry{border-bottom:1px solid var(--line);padding:26px 0}
  .wc-entry:first-child{padding-top:6px}
  .wc-entry-meta{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:12px}
  .wc-time{font-family:'Space Mono',monospace;font-size:.74rem;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.03em}
  .chip{font-family:'Space Mono',monospace;font-size:.66rem;font-weight:700;text-transform:uppercase;letter-spacing:.03em;padding:3px 9px;border-radius:999px}
  .chip.usmnt{background:rgba(47,107,255,.12);color:#1b3a8a;border:1px solid rgba(47,107,255,.3)}
  .chip.tournament{background:rgba(21,97,63,.12);color:#0d4a2e;border:1px solid rgba(21,97,63,.32)}
  .chip.offpitch{background:rgba(228,177,76,.2);color:#7a5512;border:1px solid rgba(228,177,76,.5)}
  .wc-entry h3{font-size:1.5rem;text-transform:uppercase;margin:0 0 8px}
  .wc-entry p{font-size:1.02rem}
  .wc-entry p:last-child{margin-bottom:0}

  /* ---- reused treatments from the preview ---- */
  .translate{border-left:4px solid var(--blue);background:#f1f5ff;border-radius:0 12px 12px 0;padding:14px 18px;margin:6px 0 0;font-size:.98rem}
  .translate b{font-family:'Space Mono',monospace;font-size:.74rem;text-transform:uppercase;letter-spacing:.04em;color:var(--blue);display:block;margin-bottom:4px}
  .prediction{background:radial-gradient(120% 140% at 85% -20%,var(--pitch-2),var(--pitch) 65%);color:var(--chalk);border:1px solid rgba(127,220,171,.25);border-left:5px solid var(--accent);border-radius:var(--radius);padding:22px 24px;margin:6px 0 0}
  .prediction .pl{font-family:'Space Mono',monospace;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#ff8c7f;display:block;margin-bottom:8px}
  .prediction .pbig{font-family:'Archivo';font-weight:900;font-size:clamp(1.4rem,4vw,2rem);text-transform:uppercase;line-height:1.05;margin:0 0 10px}
  .prediction .pbig em{font-style:normal;color:var(--accent)}
  .prediction p{color:#cfe0d7;font-size:.96rem;margin:0}
  .match{display:flex;align-items:center;gap:16px;background:#fff;border:1px solid var(--line);border-left:4px solid var(--accent);border-radius:12px;padding:14px 18px;margin-top:6px}
  .match .score{font-family:'Archivo';font-weight:900;font-size:1.2rem;text-transform:uppercase}
  .match .tag{font-family:'Space Mono',monospace;font-size:.72rem;color:var(--ink-soft);margin-left:auto}
  /* "add to calendar" button — accent pill, overrides the default .wcl a link color */
  .wcl a.wc-cal{display:inline-flex;align-items:center;gap:8px;font-family:'Space Mono',monospace;font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.03em;color:#fff;text-decoration:none;background:var(--accent);border-radius:999px;padding:9px 16px;margin-top:4px;transition:all .18s}
  .wcl a.wc-cal:hover{background:var(--accent-ink)}

  /* ---- long-form extras: lists, photo grid, responsive video embeds ---- */
  .wc-entry ul{margin:0 0 1rem;padding-left:1.2em;list-style:disc}
  .wc-entry ol{margin:0 0 1rem;padding-left:2.2em;list-style:decimal}
  .wc-entry li{font-size:1.02rem;margin:0 0 .45rem}
  .wc-shots{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:18px 0 0}
  @media(max-width:640px){.wc-shots{grid-template-columns:1fr}}
  .wc-shot img{width:100%;aspect-ratio:4/5;object-fit:cover;border-radius:12px;border:1px solid var(--line);display:block}
  .wc-shot figcaption{font-family:'Space Mono',monospace;font-size:.7rem;color:var(--ink-soft);margin-top:6px;line-height:1.45}
  /* single landscape photo (e.g. a TV set shot) — full width, wide aspect */
  .wc-shot-wide{margin:18px 0 0}
  .wc-shot-wide img{aspect-ratio:16/9}
  /* full-bleed diagram (e.g. the knockout bracket): show the WHOLE image, no crop */
  .wc-bracket img{width:100%;height:auto;aspect-ratio:auto;object-fit:contain}
  .wc-video{position:relative;padding-bottom:56.25%;height:0;margin:18px 0 0;border-radius:12px;overflow:hidden;border:1px solid var(--line)}
  .wc-video iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
  /* two embeds side by side — stacks on narrow screens so they don't get cramped */
  .wc-videos{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:18px 0 0}
  @media(max-width:640px){.wc-videos{grid-template-columns:1fr}}
  .wc-videos .wc-video{margin:0}
  .wc-videos figure{margin:0}
  .wc-videos figcaption{font-family:'Space Mono',monospace;font-size:.7rem;color:var(--ink-soft);margin-top:6px;line-height:1.45}

  /* ---- simple bar chart: all-time World Cup top scorers ---- */
  .wc-chart{margin:18px 0 0;border:1px solid var(--line);border-radius:var(--radius);padding:18px 18px 14px;background:#fff}
  .wc-chart-title{font-family:'Space Mono',monospace;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--ink-soft);margin:0 0 14px}
  .wc-scorers{display:flex;flex-direction:column;gap:11px}
  .wc-scorer{display:grid;grid-template-columns:150px 1fr;gap:12px;align-items:center}
  .wc-scorer .who{font-family:'Space Mono',monospace;font-size:.72rem;line-height:1.3;color:var(--ink-soft)}
  .wc-scorer .who b{font-family:'Inter',sans-serif;font-weight:700;font-size:.92rem;color:var(--ink);display:block}
  .wc-bar{position:relative;background:#eef2ee;border-radius:8px;height:32px;overflow:hidden}
  .wc-bar .fill{position:absolute;inset:0 auto 0 0;min-width:34px;background:linear-gradient(90deg,var(--turf),#1f7a4f);border-radius:8px;display:flex;align-items:center;justify-content:flex-end;padding:0 10px;color:#fff;font-family:'Archivo',sans-serif;font-weight:900;font-size:.95rem}
  .wc-scorer.active .fill{background:linear-gradient(90deg,var(--accent),var(--accent-ink))}
  .wc-chart-legend{font-family:'Space Mono',monospace;font-size:.68rem;color:var(--ink-soft);margin:14px 0 0;display:flex;gap:16px;flex-wrap:wrap}
  .wc-chart-legend .key{display:inline-flex;align-items:center;gap:6px}
  .wc-chart-legend .sw{width:12px;height:12px;border-radius:3px;display:inline-block}
  .wc-chart-legend .sw.active{background:var(--accent)}
  .wc-chart-legend .sw.retired{background:var(--turf)}
  @media(max-width:560px){.wc-scorer{grid-template-columns:118px 1fr;gap:8px}.wc-scorer .who b{font-size:.82rem}}
</style>

<div class="wcl">

<!-- ===== HEADER ===== -->
<header class="wcl-hero">
  <div class="wrap">
    <span class="eyebrow">// Running log</span>
    <h1>The World Cup, as it happens</h1>
    <p class="sub">Some takes as the tournament goes along. Will provide extra emphasis on USMNT analysis. Feel free to use the filter buttons below!</p>
    <p class="wcl-next" id="wc-next-line">Next USMNT match in <b id="wc-next">—</b> · USA vs Belgium, Jul 6 · 8:00 PM ET</p>
    <p class="wcl-pinned"><a href="/sports/2026/06/10/wc-preview.html"><span class="pin">⚽</span> Start here: my full World Cup preview →</a></p>
  </div>
</header>

<!-- ===== SCORES PANEL (today live + yesterday + collapsible all) ===== -->
<!-- Renders instantly from _data/scores.json, then overlays live data from ESPN's
     free scoreboard endpoint (polled client-side; see the script at the bottom). -->
<div class="wcl-scores">
  <div class="wrap wcl-scores-inner">
    <div class="score-day">
      <span class="lbl">Today<span class="live-flag" id="wc-live-flag" hidden>● Live</span></span>
      <div class="score-row" id="wc-today-row"></div>
    </div>
    <div class="score-day">
      <span class="lbl">Yesterday</span>
      <div class="score-row" id="wc-yesterday-row"></div>
    </div>
    <details class="score-all">
      <summary>Click here to see all results so far</summary>
      <div class="score-all-body" id="wc-all-body"></div>
    </details>
  </div>
</div>

<!-- ===== FILTER BAR ===== -->
<div class="wcl-bar">
  <div class="wrap">
    <button class="wc-pill on" data-filter="all">All</button>
    <button class="wc-pill" data-filter="usmnt">USMNT</button>
    <button class="wc-pill" data-filter="tournament">Around the tournament</button>
    <button class="wc-pill" data-filter="offpitch">Off the pitch</button>
    <span class="wc-count" id="wc-count"></span>
  </div>
</div>

<!-- ===== THE STREAM =====
     Newest first. Entries auto-sort by their data-time (ISO 8601, ET) on load, so
     you can paste a new <article> anywhere — just give it a correct data-time.
     Need a layout? Copy one from the TEMPLATE GALLERY in the comment block below. -->
<div class="wcl-stream">
  <div class="wrap">

    <!-- Around the tournament: France look unstoppable vs. Morocco -->
    <article class="wc-entry" data-tags="tournament" data-time="2026-07-09T17:29">
      <div class="wc-entry-meta">
        <span class="wc-time">Jul 9 · 5:29 PM</span>
        <span class="chip tournament">Around the tournament</span>
      </div>
      <p>Writing in from a cool little soccer bar while watching France vs. Morocco.</p>
      <p><b>France is probably the best World Cup team I've ever seen, and I have a hard time finding anyone that could stop them.</b></p>
      <p>Truly, they have so much starting talent&hellip;but not only that, I think they have purpose in their play. They go forward with purpose, cross with purpose, pass around with purpose. Even when they played Paraguay in a 1&ndash;0 win, they showed purpose and intent in their ability to not get sucked into the dark arts and shithousery Paraguay were trying to deploy.</p>
      <p>I saw this team in person. More than anything else I've listed, this team has stamina and depth. They have so many world class players coming off the bench, and in the hot summer heat of the U.S., that matters. I find it difficult to think of any team that can stop them on their way to a third World Cup win.</p>
    </article>

    <!-- USMNT: reflective thoughts after the Belgium loss -->
    <article class="wc-entry" data-tags="usmnt" data-time="2026-07-09T16:59">
      <div class="wc-entry-meta">
        <span class="wc-time">Jul 9 · 4:59 PM</span>
        <span class="chip usmnt">USMNT</span>
      </div>
      <h3>USMNT loss to Belgium thoughts</h3>
      <p>I needed to take a day off after such a heartbreaking loss. I still don't think I have all my thoughts fully fleshed out after this one, and I don't think I'll have them for awhile. So this is still some of the semi-raw emotion coming out of that game.</p>
      <p>At the end of the day, I think that was one of the most disappointing losses I've ever witnessed. It's probably second to the infamous <a href="https://www.youtube.com/watch?v=_gjDuuV-JwE" target="_blank" rel="noopener">Trinidad and Tobago loss</a>. And I've watched a lot of USMNT losses for the 15+ years I've been following them.</p>
      <p>They say one of the biggest contributors to frustration or stress is the misalignment of expectation and reality, and that pretty much sums up this game for people who knew what this team <em>could've</em> accomplished. This was the best team we've had in a long time. A great manager. Home court. It was all adding up to us beating a European team &mdash; a team that has knocked us out previously, no less &mdash; in the round of 16 and moving onto the quarterfinals and stacking up against a true contender. We could've surpassed expectations and proven to ball-knowers that we are here and we are here to stay.</p>
      <p>Instead, it ends like it always does &mdash; a loss in the round of 16 to whatever team we come up against. Not only that, but we simply did not show up to play. There would've been honor in going down swinging. We didn't even do that. Flat out, we fucking sucked.</p>
      <p>There's a LOT of reasons why we lost. Mistakes across the pitch. Little offense. An all time goalkeeper gaffe. If I had to sum it up, it would be this: Belgium played a little better than they have all tournament, and we played A LOT WORSE than we played this whole tournament.</p>
      <p>It's hard to blame the tactics when I thought this was the worst player performance I've seen in some time. EVERY player played poorly, except <em>maybe</em> Balogun and <em>maybe</em> Tillman. Pulisic and Dest played HORRIBLY. Players were constantly just giving the ball away, running into defenders or just playing bad passes. We looked like a team that just lacked focus and lacked the mentality to meet the moment. There's no shame in losing&hellip;but there is shame in how we did it.</p>
      <p>Much will be made about the Balogun suspension being overturned and the political intervention involved. For most of the tournament, the US was humming and was a home team that many people were getting behind. A lot of that changed when the suspension was overturned &mdash; which to many was seen as a form of US favoritism and arrogance &mdash; and the USMNT, regardless of the fact the players had nothing to do with this, yet again became the team people wanted to root against.</p>
      <p>Frankly, I don't know if this had anything to do with how bad we looked, and I don't know if I care. Hindsight is 20/20. Did it make a difference in our attitude and mentality? Probably. Could I have seen a different outcome if we were riding the anger of a bad call in the first place and we rally behind an inspired performance, with the rest of the world rooting alongside us, instead of against us? I don't know, maybe. But what I do know is that none of this would matter if we just showed up when it mattered most. And the hard part is simple &mdash; we just didn't.</p>
      <p>It'll be awhile before I get over this one. It is just such a colossal miss for this team and this sport in this country. However, as is my nature, I don't want to end on a bad note here. Two of my best friends, non-soccer fans (or at least casual fans&hellip;one of them roots for Everton so while his head might be in the wrong place, his heart isn't) got into the World Cup this year, and mentioned they could see themselves continuing to be interested over time. At least one of them said he is watching more soccer movies. I'll take what I can get.</p>
      <p>Whether that is true for the country or not&hellip;only time will tell. I surely hope so. The vibes leading up to that last game were so good, and I can only hope they help carry the interest of this sport and this team past the tournament.</p>
      <p>We missed a great opportunity to make a statement in the tournament. I hope we didn't miss the opportunity to grow soccer as well. My gut says we didn't&hellip;it'll just take some time to recognize that.</p>
    </article>

    <!-- USMNT: eliminated by Belgium in the round of 16 -->
    <article class="wc-entry" data-tags="usmnt" data-time="2026-07-06T22:01">
      <div class="wc-entry-meta">
        <span class="wc-time">Jul 6 · 10:01 PM</span>
        <span class="chip usmnt">USMNT</span>
      </div>
      <h3>Pain</h3>
      <p>"It's the hope that kills you"</p>
    </article>

    <!-- USMNT: Balogun red card suspension lifted ahead of Belgium -->
    <article class="wc-entry" data-tags="usmnt" data-time="2026-07-06T00:10">
      <div class="wc-entry-meta">
        <span class="wc-time">Jul 6 · 12:10 AM</span>
        <span class="chip usmnt">USMNT</span>
      </div>
      <h3>BALOGUN RED CARD SUSPENSION LIFTED!</h3>
      <p>In a shocking turn of events, the red card suspension for Flo Balogun has been LIFTED for next game. Specifically, his suspension has been delayed a year, so he can serve it during some meaningless game next year, and he is now allowed to play against Belgium in the round of 16.</p>
      <p>This is an unprecedented move, and likely would not have happened if not for some level of US political intervention. At least we think. I don't know if we'll ever get the full and transparent story, but this seems to happen either to big players or for big nations. <a href="https://www.foxsports.com/stories/soccer/cristiano-ronaldo-folarin-balogun-red-card-suspension" target="_blank" rel="noopener">Something of the sort happened to Ronaldo not too long ago.</a></p>
      <p>Many people will have opinions. You will see and hear them leading up to the game and probably afterward too. All I can say is that they're probably all correct.</p>
      <p>Belgium have every right to be mad about this decision, as under normal circumstances it probably wouldn't have happened. The USMNT have every right to believe it's the right choice, since a large majority of people agree the red card was a really bad call in the first place. It helps the US because they have their best striker back and it hurts them because they lose the goodwill of many people. It helps Belgium because it'll fire them up and hurts them because the US are stronger for it. Whatever opinion you have, you are likely valid in said opinion. The only thing most people can agree on is the process &mdash; from the red card decision in the first place to now the overturning of the suspension &mdash; has been murky at best.</p>
      <p>In the end, while a controversial call, the game on the field is the only thing that matters. Time will likely wash away the commotion surrounding this decision, but won't wash away the result. The goal remains the same &mdash; beat Belgium and push us through to the quarterfinals.</p>
    </article>

    <!-- Around the tournament: round of 32 wraps up, R16 preview -->
    <article class="wc-entry" data-tags="tournament" data-time="2026-07-04T14:49">
      <div class="wc-entry-meta">
        <span class="wc-time">Jul 4 · 2:49 PM</span>
        <span class="chip tournament">Around the tournament</span>
      </div>
      <h3>To the round of 16 we go</h3>
      <p>First and foremost, happy July 4th!! Belgium are lucky they aren't playing us today, because the USA is undefeated on Independence Day. <a href="https://www.youtube.com/watch?v=Bemyn03pxdM" target="_blank" rel="noopener">Neva lost!</a></p>
      <p>The first stage of the knockout rounds are over and we're into the round of 16! Overall, I thought this was an absolutely thrilling slate of soccer games. You had giants like Germany go down in penalties, DR Congo taking England to the brink, Cabo Verde pulling off a near miracle against Argentina, and all three co-hosts going through, amongst other great results.</p>
      <p>10 of the 16 games were decided by 1 goal or less. 5 games went to added extra time. 3 went to penalties. Overall, I was pleasantly surprised at the level of competition and drama in this round. This is the first time we've had a round of 32 in a World Cup (typically went straight to the R16), which could've led to some cakewalk / uncompetitive games. While there were a few of those (see: Spain–Austria, France–Sweden), we otherwise had awesome matches all over.</p>
      <p>Looking forward, we are down from the 48 teams to begin the tournament to the final 16. A few matches to look forward to:</p>
      <ul>
        <li><b>USA vs. Belgium (7/6 @ 8pm EST):</b> Of COURSE the number one game to look forward to is the USMNT! Even without our best player this tournament, Flo Balogun, we have a decent shot of knocking off the Belgians. Getting to the quarterfinals would be a HUGE result for us.</li>
        <li><b>Mexico vs. England (7/5 @ 8pm EST):</b> Absolutely cracking game incoming. Typically, England would be a strong favorite, but this game is being played at Estadio Azteca in Mexico City, the cathedral stadium of world soccer. This game will be loud, physical, and played at a high altitude that favors the Mexicans.</li>
        <li><b>Spain vs. Portugal (7/6 @ 3pm EST):</b> The Iberian Derby! While Spain is favored, this is still the FIFA ranking 3 vs. 7 teams facing off. Lots of great history between these two nations, and two of the three co-hosts of the 2030 World Cup (along with Morocco).</li>
        <li><b>Brazil vs. Norway (7/5 @ 4pm EST):</b> I had Brazil on upset alert last round against Japan and I have them on upset alert vs. Norway, too. Norway's attack has just looked deadly and they seem to be clicking more than Brazil. Vini Jr. vs. Haaland should be epic.</li>
      </ul>
      <p>See below for all matchups in the round of 16.</p>
      <figure class="wc-shot wc-bracket">
        <img src="{{ '/assets/images/round-of-16.jpeg' | relative_url }}" alt="All 2026 World Cup round of 16 matchups" loading="lazy">
      </figure>
    </article>

    <!-- USMNT: favorite moment so far — Poch singing Country Roads -->
    <article class="wc-entry" data-tags="usmnt" data-time="2026-07-02T10:30">
      <div class="wc-entry-meta">
        <span class="wc-time">Jul 2 · 10:30 AM</span>
        <span class="chip usmnt">USMNT</span>
      </div>
      <h3>My favorite moment so far</h3>
      <p>No matter what happens, I'll never forget the all-time good vibes of Pochettino singing Country Roads after this World Cup. Truly an all-time moment for me, and hopefully an all-time moment for the USA.</p>
      <figure class="wc-shot" style="max-width:440px;margin-inline:auto">
        <img src="{{ '/assets/images/poch-singing.jpeg' | relative_url }}" alt="Mauricio Pochettino singing Country Roads with the USMNT" loading="lazy">
        <figcaption><a href="https://x.com/FOXSports/status/2072508357852983446" target="_blank" rel="noopener">Watch Poch sing Country Roads →</a></figcaption>
      </figure>
    </article>

    <!-- Around the tournament: all three co-hosts reach the R16 -->
    <article class="wc-entry" data-tags="tournament" data-time="2026-07-02T09:30">
      <div class="wc-entry-meta">
        <span class="wc-time">Jul 2 · 9:30 AM</span>
        <span class="chip tournament">Around the tournament</span>
      </div>
      <h3>Co-hosts still hostin'!</h3>
      <p>All three co-hosts — USA, Mexico, and Canada — have moved on to the Round of 16. All three have actually looked pretty good in doing so. The World Cup is better when co-hosts do well, and I'm happy to see everyone progressing, even if it does mean reluctantly rooting for Mexico at times. Next up: Canada v Morocco, Mexico v England, and USA v Belgium. While unlikely, it's not impossible all three move on to the Round of 8. I would give Mexico in Mexico City and USA in Seattle the best chances of those 3.</p>
    </article>

    <!-- USMNT: instant reaction — beat Bosnia & Herzegovina to reach the R16 -->
    <article class="wc-entry" data-tags="usmnt" data-time="2026-07-01T22:14">
      <div class="wc-entry-meta">
        <span class="wc-time">Jul 1 · 10:14 PM</span>
        <span class="chip usmnt">USMNT</span>
      </div>
      <h3>Instant reaction — USMNT defeat Bosnia and Herzegovina to move on to the Round of 16! Vamos USA!</h3>
      <p>Cue Country Roads, which has become a song symbolic with the winning ways of the USMNT this tournament.</p>
      <p>The USA beat BIH 2&ndash;0 tonight in San Francisco, even doing so while going down to 10 men in the 64th minute after an <em>extremely controversial</em> red card sent off Flo Balogun. In many ways, this win was emblematic of the other wins the US has had this tournament: creative, decisive, and in control. In other ways, this game was very unique: for the first time all World Cup, the US was truly tested through the way they had to dig in with only ten men. Not only did they pass that test, but they did it with flying colors, doubling their lead down a man in the 82nd minute off of Malik Tillman's free kick. That free kick took so much pressure off this team defending a one-goal lead, and it's a moment I'm not sure teams of the past would've capitalized on. This is the USMNT's first win against a European side in 10 attempts, and our first knockout round win since 2002.</p>
      <p>The red card is the one true blemish on this game, and the only thing truly taking away from the otherwise impeccable vibes of this victory. While maybe we didn't have as many shots on goal as we would've ultimately wanted, we looked in control all game, with talented players living up to their potential.</p>
      <p>Balogun was utterly dominant until he was sent off. He had the BIH defense seeing fits, and had one goal called back for offside before finding the net right before halftime. In my opinion, Flo has been our best player this tournament and a striker that the USA has sorely needed in this World Cup and World Cups of past. With his red card, he will not be able to play the next game against Belgium on Monday.</p>
      <p>The red card and Flo's one game suspension is something that we will need to get over, but right now, I'm going to bitch a little bit about it. In real time, there was no call for a foul by either player, meaning at game pace, the ref did not see a reason to issue any sort of card. The tackle, while quite nasty, was without malicious intent and happened only because the defender came in with his leg at the very last second. Additionally, we saw the SAME <a href="https://www.youtube.com/watch?v=xHKoOiWE8Wg" target="_blank" rel="noopener">exact type of tackle from Messi</a> earlier in this tournament, yet he was given no penalty. My issue primarily comes from the use of VAR here — for VAR checks, <em>"in general, slow motion replays should only be used for facts&hellip; normal speed should be used for 'intensity of an offence.'"</em> At normal speed, this looks like a yellow. In slow motion, of course it looks like a red. To have nothing called originally, only to get signaled over to VAR and then deliver a card based on slow motion, is really frustrating, and will be something that has repercussions into the rest of this tournament.</p>
      <p>Groveling aside, we look forward to Monday, where we will face off against Belgium in the Round of 16 — who we lost to 2&ndash;1 back in 2014 after a <a href="https://www.youtube.com/watch?v=nyDS6hLJXmM" target="_blank" rel="noopener">famously amazing performance by Tim Howard</a>. The teams are much different since then. Belgium, while still strong, is nothing like their 2014 team, in which their "golden generation" of talent were all in their prime. On the contrary, we now have the team of youth and prime, and have every ability to take it to Belgium in this game.</p>
      <p>Two things can be true — Flo Balogun's absence really hurts our chances to win this game, as he has been incredible this tournament so far; however, we can still win this game given our form, confidence, and depth at that position.</p>
      <p>Tonight's win was so important because you get to extend the American party — every W is another ~5 days of our country talking about soccer, of young fans watching us play on the biggest stage and dreaming of growing up to be one of those players.</p>
      <p>Mark your calendars now, because arguably the biggest game in USMNT history is about to happen on Monday. I truly mean it when I say that. Teams of USA's past have had the grit to compete, but often fizzled out against more talented opponents. Teams of recent memory (think 2022) were really talented but young, inexperienced, and not battle tested. This team combines the grit of old with the skill of new. It's our best players in their prime looking to prove something to the world.</p>
      <p><a class="wc-cal" href="{{ '/assets/usmnt-belgium.ics' | relative_url }}">🗓 Add USA v Belgium to your calendar</a></p>
      <p>We've met expectations, if not exceeded them, based on "vibes" alone. Monday gives us the chance, on home soil, to beat a good European team and declare to the world that we have arrived as a soccer nation. Vamos USA, and make us proud. LFG.</p>
      <div class="wc-video">
        <iframe src="https://www.youtube.com/embed/NuuMIICMQxo" title="USA 2–0 Bosnia and Herzegovina — highlights" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </article>

    <!-- Around the tournament: contenders check-in entering the knockouts -->
    <article class="wc-entry" data-tags="tournament" data-time="2026-06-29T08:16">
      <div class="wc-entry-meta">
        <span class="wc-time">Jun 29 · 8:16 AM</span>
        <span class="chip tournament">Around the tournament</span>
      </div>
      <h3>Checking in on the contenders</h3>
      <p>As we enter the knockout rounds, checking in on some of the tournament contenders.</p>
      <ul>
        <li><b>Above the rest: France (1A) and Argentina (1B).</b> The finalists of 2022 still look like the best teams in 2026. I would not be surprised to see a rematch again this year. Given what I've seen so far, I would favor France in another epic matchup.</li>
        <li><b>Slightly underwhelming but still dangerous: England and Spain.</b> I don't think we've seen either fully kick into form yet, but there have been spurts of greatness from both sides in group play. On a good day, both of these teams can beat anyone. Let's just see if they can get into that highest gear. I have more faith in Spain to do that than England, but seeing as England are my pick to win it all, I would hope they prove me wrong.</li>
        <li><b>Expect the unexpected: Germany, Portugal, and Brazil.</b> Brazil has won two of their games 3&ndash;0. Germany put 7 goals past Curaçao and beat a good Ivory Coast team at the death. Portugal put up 5 against Uzbekistan. Even so, I would say all these teams remain unconvincing against better competition, and I wouldn't be surprised if any of these teams made it to the semi-finals OR lost in the round of 16 or earlier.</li>
        <li><b>Co-hosts having fun: USMNT, Mexico, Canada.</b> Canada won their first knockout and is in the round of 16. Mexico have a tough schedule but are at home until the quarterfinals. And the USMNT are in great form looking to make the quarters as well. Hopefully all these teams can go far.</li>
      </ul>
    </article>

    <!-- Around the tournament: knockout stage begins, bracket + round-of-32 watch -->
    <article class="wc-entry" data-tags="tournament" data-time="2026-06-28T12:00">
      <div class="wc-entry-meta">
        <span class="wc-time">Jun 28 · 12:00 PM</span>
        <span class="chip tournament">Around the tournament</span>
      </div>
      <h3>The knockout stage has begun</h3>
      <p>The group stage is over and we have officially entered the knockout rounds. Every game from here on out is win or go home. You can see an image of how the playoff bracket looks below.</p>
      <figure class="wc-shot wc-bracket">
        <img src="{{ '/assets/images/knockout-bracket.jpeg' | relative_url }}" alt="2026 World Cup knockout-stage bracket" loading="lazy">
      </figure>
      <p>A few round of 32 games that look mighty tasty:</p>
      <ul>
        <li><b>Brazil vs. Japan (6/29):</b> Traditional powerhouse Brazil looking to return to former glory coming up against one of the most fun teams of the tournament, Japan. Don't be surprised to see a Japan upset here.</li>
        <li><b>Morocco vs. Netherlands (6/30):</b> A clash of two of the tournament's strongest sides, sitting right next to each other in the FIFA world rankings at 6th and 7th. On paper, one of the most evenly matched ties of the round.</li>
        <li><b>Mexico vs. Ecuador (6/30):</b> Mexico's reward for winning all 3 group games? A matchup against Ecuador who, while they did underperform during group play, are a very strong defensive side.</li>
        <li><b>Portugal vs. Croatia (7/2):</b> Two 40+ year old legends of the game come up against each other as Ronaldo and Portugal take on Modrić and Croatia.</li>
      </ul>
      <p>A few other brief observations&hellip;</p>
      <ul>
        <li>World Cup holders Argentina have a favorable path to the semi-final, with Colombia likely their stiffest test in the quarter-finals. I do not see many chances for an upset here and would be shocked if we didn't see them in the final four.</li>
        <li>Looking ahead, if both England and Mexico win their first knockout games, a R16 matchup between the two of them in Mexico City would be must-see TV.</li>
        <li>The USA have a moderately favorable draw. They should be favored in their first knockout game (Bosnia Herz.), about a coin flip in their next (Belgium or Senegal), and underdogs in the quarters (probably Spain). Going past the R16 would be a huge deal for us.</li>
      </ul>
    </article>

    <!-- USMNT: dead-rubber loss to Turkey closes out group play -->
    <article class="wc-entry" data-tags="usmnt" data-time="2026-06-26T09:30">
      <div class="wc-entry-meta">
        <span class="wc-time">Jun 26 · 9:30 AM</span>
        <span class="chip usmnt">USMNT</span>
      </div>
      <h3>USMNT lose to Turkey, but mission accomplished</h3>
      <p>Last night wrapped up the last game of the USMNT group play, as the USMNT lost to Turkey 2&ndash;3 in a packed SoFi Stadium. As I mentioned in a previous post, before this game both teams were already locked into their final group standings &mdash; the US as first in the group and Turkey as last (and eliminated from the tournament) &mdash; so this game was a "dead rubber" match&hellip;meaningless from an outcome perspective.</p>
      <p>Pochettino did what I hoped he would do, which was a near-full turnover of the roster. Only one usual starter, Weston McKennie, started in this game, while the rest of the starters were usually bench players. While it sucks the USMNT did lose &mdash; on the last kick of the game, for that matter &mdash; my verdict remains that this was still "mission accomplished": we got to rest everyone that needed a rest, Pulisic got some playing time after coming back from injury, we got to see some of our squad depth in action, and most importantly, no one got seriously injured. The USMNT put themselves in the wonderful position of being able to play a meaningless match, and although it wasn't the outcome we would've hoped for, the meaningless result was, in and of itself, the win.</p>
      <p>On the game itself &mdash; to speak the obvious, there is a clear gap in quality between our starting 11 and our backup 11, especially in the defensive half. This game further emphasized the importance of Tyler Adams, our defensive midfielder who not only is incredibly skilled, but also does a great job at keeping the defense organized, something I thought was missing from our team last night. Additionally, this game was a good reminder of the drop off specifically amongst our center backs, who were not the best last night. Injuries in this tournament to Tim Ream or especially Chris Richards, our starting center backs, would be very bad.</p>
      <p>Otherwise, I thought Gio Reyna played pretty well and I could see him getting more playing time in the tournament. Sebastian Berhalter was also pretty good with a goal and an assist. Tim Weah, who I'm a fan of, played very poorly, but I'm sure he will have better days.</p>
      <p>All in all, an exciting, if not super high quality game that will be shortly forgotten. Come Wednesday when the USMNT play in their first knockout game against Bosnia and Herzegovina, this loss will be but a distant memory. I think homefield advantage is particularly helpful here, because even though we might've lost a little momentum (not even entirely sure that is the case) with a meaningless L, that stadium will be going absolutely bonkers come game time. Surely all the momentum will be back with us leading up to kickoff.</p>
      <div class="wc-video">
        <iframe src="https://www.youtube.com/embed/7JJLMyKBG90" title="USA 2–3 Turkey — highlights" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </article>

    <!-- Around the tournament: Messi sets the all-time WC scoring record -->
    <article class="wc-entry" data-tags="tournament" data-time="2026-06-23T07:28">
      <div class="wc-entry-meta">
        <span class="wc-time">Jun 23 · 7:28 AM</span>
        <span class="chip tournament">Around the tournament</span>
      </div>
      <h3>History made! And history incoming?</h3>
      <p>With two goals against Austria, Lionel Messi is now the official all-time leading World Cup goal scorer with 18, passing the previous record holder Miroslav Klose's 16. Crazily enough, Mbappé, with two goals himself against Iraq, now brings his total to 16, right behind Messi. Mbappé is 12 years younger than Messi, and surely at this pace will surpass Messi in due time — perhaps even this World Cup.</p>
      <div class="wc-chart">
        <p class="wc-chart-title">All-time World Cup top scorers · goals (matches played)</p>
        <div class="wc-scorers">
          <div class="wc-scorer active">
            <div class="who"><b>🇦🇷 Messi</b><span>28 matches</span></div>
            <div class="wc-bar"><span class="fill" style="width:100%">18</span></div>
          </div>
          <div class="wc-scorer active">
            <div class="who"><b>🇫🇷 Mbappé</b><span>16 matches</span></div>
            <div class="wc-bar"><span class="fill" style="width:88.9%">16</span></div>
          </div>
          <div class="wc-scorer">
            <div class="who"><b>🇩🇪 Klose</b><span>24 matches</span></div>
            <div class="wc-bar"><span class="fill" style="width:88.9%">16</span></div>
          </div>
          <div class="wc-scorer">
            <div class="who"><b>🇧🇷 Ronaldo</b><span>19 matches</span></div>
            <div class="wc-bar"><span class="fill" style="width:83.3%">15</span></div>
          </div>
          <div class="wc-scorer">
            <div class="who"><b>🇩🇪 Gerd Müller</b><span>13 matches</span></div>
            <div class="wc-bar"><span class="fill" style="width:77.8%">14</span></div>
          </div>
          <div class="wc-scorer">
            <div class="who"><b>🇫🇷 Fontaine</b><span>6 matches</span></div>
            <div class="wc-bar"><span class="fill" style="width:72.2%">13</span></div>
          </div>
          <div class="wc-scorer">
            <div class="who"><b>🇧🇷 Pelé</b><span>14 matches</span></div>
            <div class="wc-bar"><span class="fill" style="width:66.7%">12</span></div>
          </div>
        </div>
        <p class="wc-chart-legend">
          <span class="key"><span class="sw active"></span> Still active</span>
          <span class="key"><span class="sw retired"></span> Retired</span>
        </p>
      </div>
    </article>

    <!-- USMNT: the knockout path is setting up nicely -->
    <article class="wc-entry" data-tags="usmnt" data-time="2026-06-22T10:19">
      <div class="wc-entry-meta">
        <span class="wc-time">Jun 22 · 10:19 AM</span>
        <span class="chip usmnt">USMNT</span>
      </div>
      <p>With Belgium drawing Iran and Egypt beating New Zealand yesterday, the USMNT's path to the quarterfinals (final 8) is actually setting up quite nicely. As I said in my previous post, you never really know your path until it's finalized, but the most likely outcome at this point is playing Bosnia and Herzegovina in the round of 32 and then Egypt in the round of 16. While both teams could pose problems, that is a tastier setup than many other teams would have to the final 8.</p>
      <figure class="wc-shot wc-shot-wide">
        <img src="{{ '/assets/images/usmnt-knockout-path-possibility.png' | relative_url }}" alt="A possible USMNT knockout path to the quarterfinals" loading="lazy">
      </figure>
    </article>

    <!-- USMNT: the ceiling for this team -->
    <article class="wc-entry" data-tags="usmnt" data-time="2026-06-22T11:00">
      <div class="wc-entry-meta">
        <span class="wc-time">Jun 22 · 11:00 AM</span>
        <span class="chip usmnt">USMNT</span>
      </div>
      <h3>USMNT ceiling</h3>
      <p>When someone asks me the ceiling for this USMNT, it basically to me comes down to the first time we play France, Spain, Argentina, or England. I think those teams are a class above the rest in this tournament and would be very tough for the USMNT to beat. Any other team, however, including the likes of Brazil, Germany, the Netherlands, etc., I think we could absolutely beat. Won't always mean we're favored, but would definitely have a fighting chance.</p>
      <p>So my guess is that we go as we can until going up against one of those big boys. While you never know how the bracket shakes out, that seems like the elite eight — we might run into someone like Spain. But the beauty is you might never know… one of them could be upset by someone else, or even us on the right day. The point is that we've looked more dangerous than ever before, and I'm sure many teams would NOT want to be going up against us right now, especially as co-hosts with home field advantage.</p>
    </article>

    <!-- Around the tournament: my five favorite games so far -->
    <article class="wc-entry" data-tags="tournament" data-time="2026-06-20T16:30">
      <div class="wc-entry-meta">
        <span class="wc-time">Jun 20 · 4:30 PM</span>
        <span class="chip tournament">Around the tournament</span>
      </div>
      <h3>Favorite games so far</h3>
      <p>In no particular order:</p>
      <ol>
        <li><a href="https://youtu.be/r8SvHZxALQs" target="_blank" rel="noopener">Netherlands vs. Japan</a></li>
        <li><a href="https://youtu.be/memCfdob60w" target="_blank" rel="noopener">Iran vs. New Zealand</a></li>
        <li><a href="https://youtu.be/ynqGWHJPkuQ" target="_blank" rel="noopener">England vs. Croatia</a></li>
        <li><a href="https://youtu.be/BXD1_mhODBU" target="_blank" rel="noopener">USA vs. Paraguay</a></li>
        <li><a href="https://youtu.be/n3JDGlOwMJ4" target="_blank" rel="noopener">France vs. Senegal</a></li>
      </ol>
      <p>OK, I'm a bit biased — I'm a USMNT fan, so USA smashing Paraguay was always making the list, and I saw France vs. Senegal in person. But both were still great games!!</p>
    </article>

    <!-- Off the pitch: The Athletic's World Cup coverage -->
    <article class="wc-entry" data-tags="offpitch" data-time="2026-06-20T14:00">
      <div class="wc-entry-meta">
        <span class="wc-time">Jun 20 · 2:00 PM</span>
        <span class="chip offpitch">Off the pitch</span>
      </div>
      <p>The Athletic has had incredible coverage leading up to and during the World Cup. Between YouTube, Podcasts, the App, and more, it has been my favorite place for everything World Cup. I would really recommend subscribing for anyone that wants to lean more into the tournament.</p>
      <p>It was a nice touch that for a few weeks ahead of the World Cup, every time you opened the app there was a countdown to the beginning of the WC. Sometimes it felt like the US and NYC weren't hyping up the World Cup enough — that was a fun little way to be reminded every single day of the massive event coming up.</p>
    </article>

    <!-- Around the tournament: Australia beat Türkiye, raising the stakes for Friday -->
    <article class="wc-entry" data-tags="usmnt" data-time="2026-06-14T09:00">
      <div class="wc-entry-meta">
        <span class="wc-time">Jun 14 · 9:00 AM</span>
        <span class="chip usmnt">USMNT</span>
      </div>
      <div class="match">
        <span class="score">AUS 2–0 TÜR</span>
        <span class="tag">Group D</span>
      </div>
      <p>With Australia's 2–0 win over Türkiye, all of a sudden the USMNT–Australia game on Friday gets a lot more interesting. I thought the USMNT and Türkiye were the two best teams in this group, but an Australia performance like that means we'll get treated to some better soccer that I would've initially expected. The US need to come with the same intensity they brought against Paraguay. You won't want to miss this clash between the two top teams in the group right now.</p>
      <p><a class="wc-cal" href="{{ '/assets/usmnt-australia.ics' | relative_url }}">🗓 Add USA v Australia to your calendar</a></p>
    </article>

    <!-- USMNT: Group D won outright after Paraguay beat Türkiye -->
    <article class="wc-entry" data-tags="usmnt" data-time="2026-06-20T01:30">
      <div class="wc-entry-meta">
        <span class="wc-time">Jun 20 · 1:30 AM</span>
        <span class="chip usmnt">USMNT</span>
      </div>
      <h3>Group D winners! USA!</h3>
      <p>With Paraguay beating Türkiye last night / early this morning, the USA has officially won Group D! We last won our World Cup group in 2010, advancing on 5 points through three games. We already have 6 points in two games.</p>
      <p>Already winning the group puts us in an interesting, advantageous position. Effectively, <strong>it means the next game means nothing to us.</strong> Win, lose, or draw, we still advance FIRST out of the group. Türkiye, our last group stage opponent, on the other hand, also has nothing to lose — but that's because they've already been eliminated from the tournament.</p>
      <p>So what is the USMNT to do? Well, for starters, you continue to rest Christian Pulisic, who was out last game with an injury. You also DON'T play Tyler Adams, Flo Balogun, Antonee Robinson, and Chris Richards. That is because they each have a yellow card. The way the rules work for this WC tournament is that if you pick up two yellow cards, even if they are in separate games, you cannot play the next game; however, the yellow cards are "erased" after the group stages. So if one of those players played the third group stage game and got a yellow card, they would not be able to play the round of 32. By not playing next game, all of that resets.</p>
      <p>As for the rest of the team… this is like in football when it's week 18 and you've already locked in your playoff spot. Do you start your starters so they don't get rusty, or rest them? In my opinion, you rest them, and I would start ENTIRELY backups for this game against Türkiye. It's debatable of course, but I think the risk of getting a starter injured outweighs the benefit of playing them so they don't "get rusty." Besides, it's likely you wouldn't play them the entire 90 minutes anyway.</p>
      <p>Regardless, enjoy a fun and interesting match against Türkiye for our final group stage match. Remember, the outcome doesn't matter to us — we already won our group. So in that case, maybe our manager Pochettino gets a little weird with the formation and tactics. We'll find out soon.</p>
      <p>All in all, the best outcome through two games we could've asked for.</p>
    </article>

    <!-- USMNT long-form: USA 2–0 Australia, second straight win -->
    <article class="wc-entry" data-tags="usmnt" data-time="2026-06-19T17:45">
      <div class="wc-entry-meta">
        <span class="wc-time">Jun 19 · 5:45 PM</span>
        <span class="chip usmnt">USMNT</span>
      </div>
      <h3>USA beats Australia 2–0 — LET'S GOOOO</h3>
      <div class="match">
        <span class="score">USA 2–0 AUS</span>
        <span class="tag">Group D · matchday 2</span>
      </div>
      <p>The US beat Australia in front of a raucous crowd at Lumen Stadium (aka Seattle Stadium) today, giving the USMNT 6 points and their second win in two games. The last time the USMNT won two group stage games was in 1930.</p>
      <p>A few thoughts about the game itself — while this game wasn't as entertaining as US vs. Paraguay, in my mind, it was still as dominant. We scored 2 goals in the first half, and while there were a few nervy moments in the second half, we looked to be mostly in control the entire game. Australia plays in a 5–4–1, meaning they have a LOT of defenders and are comfortable not having possession. They will sit back, defend, and then look for an opportunity to counterattack. When a team like us goes up two goals in the first half, it kind of messes up Australia's game plan.</p>
      <p>In the second half, we were more than fine soaking up some pressure and playing the game out. From a tactical perspective, we did just about everything you could've wanted the team to do — we were organized, compact, and prevented Australia from ever really being dangerous. All in all, it was a dominant effort.</p>
      <p>I've gotten this far without even mentioning the fact we won comfortably without our best player, Christian Pulisic. We will absolutely need him for the later games against better teams, but the fact we could easily dispatch of an inferior opponent without him goes to show the growth of this team over the past few years. I would've been extremely nervous without him in the past against ANY team — this time around, I actually felt ok going into it. That goes to show the level of chemistry and talent we're playing with this time around.</p>
      <p>This is the best two-game stretch we've played in recent history (if not ever) and it couldn't come at a better time. We're winning in multiple ways — we ran up the score on a Paraguay team that played more open, and scored a few early and locked down on defense against another really defensive team.</p>
      <p>If you weren't excited before, you should be now. Legends like Landon Donovan and Clint Dempsey are openly talking about how incredible this team looks, which is how you know something special is brewing. Start believing USA… it could be a great ride.</p>
      <div class="wc-shots">
        <figure class="wc-shot">
          <img src="{{ '/assets/images/USMNT-AUS-Legends.jpeg' | relative_url }}" alt="Me and Christina watching the USMNT at Legends in Manhattan" loading="lazy">
          <figcaption>Me and Christina watched the game at Legends in Manhattan, which was a proper soccer bar</figcaption>
        </figure>
        <figure class="wc-shot">
          <img src="{{ '/assets/images/USMNT-AUS-biking-home.jpeg' | relative_url }}" alt="Me biking home after the USMNT win over Australia" loading="lazy">
          <figcaption>Me biking home after the game, full of life and bliss</figcaption>
        </figure>
      </div>
    </article>

    <!-- Around the tournament: England look the part, vindicating the preview pick -->
    <article class="wc-entry" data-tags="tournament" data-time="2026-06-17T19:00">
      <div class="wc-entry-meta">
        <span class="wc-time">Jun 17 · 7:00 PM</span>
        <span class="chip tournament">Around the tournament</span>
      </div>
      <p>Is there a lot of tournament to go? Yes. Do I feel good about my prediction that England would win it all since they are transitioning their team to run through their best player Harry Kane, who did absolutely everything in the win against Croatia? Yes, I do.</p>
      <p><a href="/sports/2026/06/10/wc-preview.html">My preview prediction before the world cup</a>:</p>
      <div class="prediction">
        <span class="pl">// My pick to win it all</span>
        <p class="pbig">It's coming home: <em>England.</em></p>
        <p>The smart money would be on France or Spain, but something tells me it's finally coming home for England. Their best player, Harry Kane, is in the form of his life, and they have the talent and coach to make it happen.</p>
      </div>
    </article>

    <!-- Around the tournament: the superstars all delivered on the same matchday -->
    <article class="wc-entry" data-tags="tournament" data-time="2026-06-17T10:10">
      <div class="wc-entry-meta">
        <span class="wc-time">Jun 17 · 10:10 AM</span>
        <span class="chip tournament">Around the tournament</span>
      </div>
      <p>Yesterday's matchday had all the brightest stars on center stage, and they all delivered. Mbappé scored <a href="https://www.youtube.com/watch?v=2AQGEqU9biI" target="_blank" rel="noopener">two</a> — in the process becoming France's all-time leading World Cup goalscorer — Haaland scored <a href="https://www.youtube.com/watch?v=pk_d-aFnZ0c" target="_blank" rel="noopener">two</a>, and then, as if he needed to remind everyone who the hell he is, Messi scored <a href="https://www.youtube.com/watch?v=7M3IPdkAfM4" target="_blank" rel="noopener">THREE</a>!</p>
      <p>With that hat trick, Messi has officially tied Miroslav Klose for the most World Cup goals ever, at 16. And at this rate, who would dare doubt that he breaks the record before this campaign is done?</p>
    </article>

    <!-- Off the pitch: the NBC studio crew isn't clicking -->
    <article class="wc-entry" data-tags="offpitch" data-time="2026-06-16T09:05">
      <div class="wc-entry-meta">
        <span class="wc-time">Jun 16 · 9:05 AM</span>
        <span class="chip offpitch">Off the pitch</span>
      </div>
      <p>This crew of Rebecca Lowe, Zlatan, Thierry Henry, and Alexi Lalas just isn't clicking super well in my opinion. Rebecca is always great, but Zlatan, for as much as I love his personality, is just not good at this (at least not yet). Thierry looks disengaged and is a lot better when he has better analysts around him, like he <a href="https://youtu.be/OT-pl47XZLE" target="_blank" rel="noopener">does for Champions League coverage</a>.</p>
      <p>And Alexi Lalas... my god... has been poisoning my ears for years. The WOAT.</p>
    </article>

    <!-- Off the pitch: ITV's NYC skyline set -->
    <article class="wc-entry" data-tags="offpitch" data-time="2026-06-16T09:38">
      <div class="wc-entry-meta">
        <span class="wc-time">Jun 16 · 9:38 AM</span>
        <span class="chip offpitch">Off the pitch</span>
      </div>
      <p>I'm not sure how ITV got this hook up but this set is absolutely beautiful with the NYC skyline backdrop. Only the best for Roy, Gary, and my boy Big Ange.</p>
      <figure class="wc-shot wc-shot-wide">
        <img src="{{ '/assets/images/ITV-WC-set.png' | relative_url }}" alt="ITV's World Cup studio set with the downtown NYC skyline as a backdrop" loading="lazy">
      </figure>
    </article>

    <!-- Around the tournament: dark horses to follow — Japan & Sweden -->
    <article class="wc-entry" data-tags="tournament" data-time="2026-06-15T10:14">
      <div class="wc-entry-meta">
        <span class="wc-time">Jun 15 · 10:14 AM</span>
        <span class="chip tournament">Around the tournament</span>
      </div>
      <h3>Two teams to watch — Japan and Sweden</h3>
      <p>If you don't have allegiance to any of teams (beside the USMNT, of course!) two fun teams to follow might be Japan and surprisingly Sweden, both from Group F.</p>
      <p>Japan played a really strong game and tied 2–2 against a Dutch side that went ahead two times in the game. Japan are interesting in the perspective that they are quite flexible — in the game, they showed their ability to both defend compactly but also open up and go into attack mode. It's not common that teams can do both well — typically, teams will have an "identity" they stick to. Since Japan is flexible, that will make them dangerous if they make the knockout rounds since they can play against any style. Of all the early "dark horses," they have looked the best to me. Also, look how fresh those away jerseys are:</p>
      <figure class="wc-shot wc-shot-wide">
        <img src="{{ '/assets/images/japan_2026_away_jersey.jpg' | relative_url }}" alt="Japan's 2026 World Cup away jersey" loading="lazy">
      </figure>
      <p>Sweden might not be as good as Japan but they were fun to watch. They beat up on an inferior opponent in Tunisia, but they had a few rocket goals and are quite entertaining at the very least. They don't need a lot of possession, so it'll be interesting to see how they play against other teams; however, when they do get it, they are big, physical, and have two really good strikers always looking to put shots on goal. I don't expect them to go super far, but I do expect them to be fun to watch.</p>
      <div class="wc-videos">
        <figure>
          <div class="wc-video">
            <iframe src="https://www.youtube.com/embed/m7sQP_AZ5vM" title="Netherlands v Japan — highlights" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <figcaption>Netherlands 2–2 Japan — highlights</figcaption>
        </figure>
        <figure>
          <div class="wc-video">
            <iframe src="https://www.youtube.com/embed/MWsgrEPIni4" title="Sweden v Tunisia — highlights" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <figcaption>Sweden v Tunisia — highlights</figcaption>
        </figure>
      </div>
    </article>

    <!-- USMNT long-form: USA 4–1 Paraguay -->
    <article class="wc-entry" data-tags="usmnt" id="usa-paraguay-breakdown" data-time="2026-06-13T11:00">
      <div class="wc-entry-meta">
        <span class="wc-time">Jun 13 · 11:00 AM</span>
        <span class="chip usmnt">USMNT</span>
      </div>
      <h3>USA–Paraguay: the best I've ever seen us play</h3>
      <div class="match">
        <span class="score">USA 4–1 PAR</span>
        <span class="tag">Group D · matchday 1</span>
      </div>
      <p>Let me start with this — that was some of the BEST soccer I've ever seen the USMNT play.</p>
      <p>Typically, the great USMNT teams of the past have gotten points off grit and effort — <a href="https://www.youtube.com/watch?v=H99a2DYyRAo" target="_blank" rel="noopener">0–0</a> draws, <a href="https://www.youtube.com/watch?v=TNl7ZcnDB0Q" target="_blank" rel="noopener">1–0</a> wins, where maybe we didn't have the most possession but we put in strong showings that embodied our spirit of being incredibly physical, if sometimes lacking true quality. So much of our game under the previous coach was: grab an early goal, then sit back and defend, doing our best not to concede instead of chasing more.</p>
      <p>This game was different because I've never seen us outright DOMINATE another team like that — our possession, our attacking sequences so full of conviction and purpose. Especially in the first half, whenever we had the ball we were direct and always threatening Paraguay. Whenever we lost it, we immediately jumped and pressed, trying to win it straight back.</p>
      <p>The goals were great, too. It was important to get up early on a defensive team like Paraguay, who are very good at sitting back, defending, and waiting for their chance to strike on the counter. The first goal was fortunate, but it showcased why Pulisic is so important to this team. Notice how he ATTACKS those two defenders — players who can go at defenders in one-on-one (or even one-on-two!) situations are crucial. It all starts with him splitting them. <a href="https://youtu.be/BXD1_mhODBU?t=22" target="_blank" rel="noopener">(Watch the goal →)</a></p>
      <p>Goals 2 and 3 came from Flo Balogun, who had really strong finishing on both — especially the third, with his weaker left foot into the top bin. My goodness. Traditionally the USMNT hasn't had the best strikers in recent years, so having one who can capitalize on his chances is extremely promising.</p>
      <p>The fourth goal was gravy on top, but it came from a player with so much potential who's been in poor form lately. Gio Reyna needed a confidence boost, and that was about as good of one as you can get. What an awesome shot.</p>
      <p>Other quick notes from the game:</p>
      <ul>
        <li>I loved that someone got a yellow card for flopping. That's exactly what we're trying to get out of the game.</li>
        <li>The only way this could've gone better was a clean sheet — but I didn't see anything structurally wrong with the defense. Just Richards and Ream not marking super tightly and the ball bouncing around.</li>
        <li>It was good to see Chris Richards play all 90. Given he was an injury worry coming into the World Cup, that was promising.</li>
        <li>It's really important to win your first game in the world cup, and this result sets us up well to get out of our group and into the knockout rounds</li>
        <li>That was just so much fun. I'm so glad I got to watch.</li>
      </ul>
      <div class="prediction">
        <span class="pl">// The takeaway</span>
        <p class="pbig">Style points <em>matter.</em></p>
        <p>I still worry about what more quality teams might do to our defense, but this game was extremely promising and gives me real hope we can make a run. We dominated a weaker (yet still good!) opponent, and we did it in style. Style points DO matter when you're trying to change the culture of a country — you want awesome highlights kids can watch and go "I want to be like that." Winning, above all, helps that the most.</p>
      </div>
      <p>The full highlights, if you want to watch:</p>
      <div class="wc-video">
        <iframe src="https://www.youtube.com/embed/BXD1_mhODBU" title="USA 4–1 Paraguay — highlights" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div class="wc-shots">
        <figure class="wc-shot">
          <img src="{{ '/assets/images/USMNT-slainte-1.jpeg' | relative_url }}" alt="The crowd watching the USMNT at Sláinte in Manhattan, under World Cup bunting" loading="lazy">
          <figcaption>Me and Tina in our US soccer jerseys</figcaption>
        </figure>
        <figure class="wc-shot">
          <img src="{{ '/assets/images/USMNT-slainte-2.jpeg' | relative_url }}" alt="Christina and me in our USMNT jerseys" loading="lazy">
          <figcaption>The atmosphere at Sláinte, Manhattan.</figcaption>
        </figure>
        <figure class="wc-shot">
          <img src="{{ '/assets/images/usmnt-2014-chicago-game.jpeg' | relative_url }}" alt="2014 USMNT watch-party crowd selfie in USA gear" loading="lazy">
          <figcaption>Throwback: 2014, the night we beat Ghana <a href="https://www.youtube.com/watch?v=5Pp_sK5snmc" target="_blank" rel="noopener">2–1</a>.</figcaption>
        </figure>
      </div>
    </article>

  </div>
</div>

<!-- ============================================================================
     TEMPLATE GALLERY — none of this renders (the whole block is an HTML comment).
     Copy any <article> below up into the stream and edit it.

     Every entry needs:
       data-time="YYYY-MM-DDTHH:MM"   ISO 8601, Eastern — drives the newest-first sort
       data-tags="usmnt" | "tournament" | "offpitch" | ""   drives the filter pills
       a matching <span class="wc-time"> label you write by hand

     === 1) Match recap with score card  (data-tags="tournament") ===
     <article class="wc-entry" data-tags="tournament" data-time="2026-06-14T11:05">
       <div class="wc-entry-meta">
         <span class="wc-time">Jun 14 · 11:05 AM</span>
         <span class="chip tournament">Around the tournament</span>
       </div>
       <h3>Get on the Japan bandwagon</h3>
       <p>End to end, four goals, and Japan playing without a hint of fear. If you needed a second team to adopt, this was your audition tape.</p>
       <div class="match">
         <span class="score">NED 2–2 JPN</span>
         <span class="tag">Group F · matchday 1</span>
       </div>
     </article>

     === 2) Prediction / bold-call box  (data-tags="usmnt") ===
     <article class="wc-entry" data-tags="usmnt" data-time="2026-06-14T09:30">
       <div class="wc-entry-meta">
         <span class="wc-time">Jun 14 · 9:30 AM</span>
         <span class="chip usmnt">USMNT</span>
       </div>
       <div class="prediction">
         <span class="pl">// Calling it</span>
         <p class="pbig">Friday just got <em>bigger.</em></p>
         <p>After the Paraguay result, USA–Australia stopped being a tune-up and became the game that basically decides the group. Win it and we're through with a match to spare.</p>
       </div>
     </article>

     === 3) Hot take / blue translate box  (data-tags="tournament") ===
     <article class="wc-entry" data-tags="tournament" data-time="2026-06-13T19:20">
       <div class="wc-entry-meta">
         <span class="wc-time">Jun 13 · 7:20 PM</span>
         <span class="chip tournament">Around the tournament</span>
       </div>
       <div class="translate">
         <b>Germany watch</b>
         Sharp going forward — Musiala was a problem all night. But that back line got turned twice and got away with it. Better teams won't be so forgiving.
       </div>
     </article>

     === 4) Long-form USMNT breakdown + prediction verdict  (data-tags="usmnt") ===
     <article class="wc-entry" data-tags="usmnt" id="usa-paraguay-breakdown" data-time="2026-06-13T14:15">
       <div class="wc-entry-meta">
         <span class="wc-time">Jun 13 · 2:15 PM</span>
         <span class="chip usmnt">USMNT</span>
       </div>
       <h3>USA–Paraguay: the full breakdown</h3>
       <p>We got the result, but the performance is more interesting than the 4–1 suggests. Pochettino's back three held up better than I expected, and the wing-backs — Robinson and Dest — were the story, pinning Paraguay deep for long stretches and turning our two fastest players into a constant outlet.</p>
       <p>The worry is the same one from the preview: we went flat for fifteen minutes after the second goal and nearly handed it back. Against Türkiye's attacking talent, a lull like that gets punished.</p>
       <div class="prediction">
         <span class="pl">// Still holding</span>
         <p class="pbig">Quarterfinals are <em>still on the table.</em></p>
         <p>One good performance doesn't change the call, but it doesn't hurt it either. Win the group and the bracket opens up.</p>
       </div>
     </article>

     === 5) Off the pitch — plain note  (data-tags="offpitch") ===
     <article class="wc-entry" data-tags="offpitch" data-time="2026-06-13T08:00">
       <div class="wc-entry-meta">
         <span class="wc-time">Jun 13 · 8:00 AM</span>
         <span class="chip offpitch">Off the pitch</span>
       </div>
       <p>I'll die on this hill: the hydration breaks kill every ounce of momentum and exist mostly to sell ads. Just play the game.</p>
     </article>

     === 6) Untagged one-off — only shows under the "All" filter  (data-tags="") ===
     <article class="wc-entry" data-tags="" data-time="2026-06-12T20:40">
       <div class="wc-entry-meta">
         <span class="wc-time">Jun 12 · 8:40 PM</span>
       </div>
       <p>Brief interlude from your regularly scheduled soccer: the Knicks won last night, and I am somehow watching more sports this month than ever. Back to it.</p>
     </article>
============================================================================ -->

<!-- ===== SCORES DATA: sourced from _data/scores.json, refreshed by .github/workflows/scores.yml ===== -->
<script type="application/json" id="wc-scores-data">{{ site.data.scores | jsonify }}</script>

</div>

<script>
(function(){
  /* ---- tag filter (same idea as the preview's setPhase toggle) ---- */
  var pills = [].slice.call(document.querySelectorAll('.wc-pill'));
  var entries = [].slice.call(document.querySelectorAll('.wc-entry'));
  var count = document.getElementById('wc-count');

  /* keep the stream in reverse-chronological order (newest first) regardless of how
     entries are pasted into the HTML — sort by data-time (ISO strings sort by date). */
  (function(){
    var stream = entries.length && entries[0].parentNode;
    if (!stream) return;
    entries.slice().sort(function(a,b){
      return (b.getAttribute('data-time') || '').localeCompare(a.getAttribute('data-time') || '');
    }).forEach(function(e){ stream.appendChild(e); });
  })();
  function apply(tag){
    pills.forEach(function(p){ p.classList.toggle('on', p.dataset.filter === tag); });
    var shown = 0;
    entries.forEach(function(e){
      var tags = (e.getAttribute('data-tags') || '').trim().split(/\s+/);
      var vis = tag === 'all' || tags.indexOf(tag) > -1;
      e.style.display = vis ? '' : 'none';
      if (vis) shown++;
    });
    if (count) count.textContent = shown + (shown === 1 ? ' entry' : ' entries');
  }
  pills.forEach(function(p){ p.addEventListener('click', function(){ apply(p.dataset.filter); }); });
  apply('all');

  /* ---- scores panel: today (live) + yesterday + collapsible all ----
     Strategy: render immediately from the committed _data/scores.json so there's
     no blank flash, then overlay genuinely live data from ESPN's free, no-key
     scoreboard endpoint (CORS-open). Polling happens in the visitor's browser —
     zero GitHub Actions compute — and only runs while a match is live/upcoming
     today, pausing when the tab is hidden. If ESPN is ever unreachable we just
     keep showing the static data. */
  (function(){
    var POLL_MS = 60000;
    var ESPN = 'https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard';
    var todayRow = document.getElementById('wc-today-row');
    var yestRow  = document.getElementById('wc-yesterday-row');
    var allBody  = document.getElementById('wc-all-body');
    var liveFlag = document.getElementById('wc-live-flag');
    if (!todayRow) return;

    /* Everything is bucketed and displayed in US Eastern (ET), regardless of the
       visitor's timezone, and keyed off each match's KICKOFF INSTANT — so a game
       that starts late-night ET (early-morning UTC) stays on its ET calendar day
       instead of bleeding into the previous/next day. */
    var TZ = 'America/New_York';
    var _dayFmt = new Intl.DateTimeFormat('en-US', {timeZone:TZ, year:'numeric', month:'2-digit', day:'2-digit'});
    function estDay(d){ var p={}; _dayFmt.formatToParts(d).forEach(function(x){ p[x.type]=x.value; }); return p.year+'-'+p.month+'-'+p.day; }
    function addDays(str, n){ var p=str.split('-'); var dt=new Date(Date.UTC(+p[0],+p[1]-1,+p[2])); dt.setUTCDate(dt.getUTCDate()+n); return dt.toISOString().slice(0,10); }
    /* A "matchday" runs from MATCHDAY_START_ET to the same hour the next morning, so a
       late-night kickoff (midnight / 1 AM ET) stays grouped with the evening slate it
       belongs to instead of jumping to the next calendar day. Safe because no WC match
       kicks off between midnight and noon ET — the cutoff sits in a dead zone, so it
       only ever rolls back genuine late games, never misfiles a daytime one. */
    var MATCHDAY_START_ET = 6;                // 6 AM ET — games before this count as the prior day
    function matchDay(d){ return estDay(new Date(d.getTime() - MATCHDAY_START_ET*3600000)); }
    var todayKey = matchDay(new Date());      // current matchday, 'YYYY-MM-DD'
    var yestKey  = addDays(todayKey, -1);
    var tomKey   = addDays(todayKey, 1);
    function ymd(str){ return str.replace(/-/g, ''); }          // 'YYYY-MM-DD' -> 'YYYYMMDD' for ESPN's dates param
    function esc(s){ return String(s == null ? '' : s).replace(/[&<>]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;'}[c]; }); }
    var _timeFmt = new Intl.DateTimeFormat('en-US', {timeZone:TZ, hour:'numeric', minute:'2-digit'});
    function fmtTime(d){ try { return _timeFmt.format(d) + ' ET'; } catch(e){ return ''; } }
    var _dayLabelFmt = new Intl.DateTimeFormat('en-US', {timeZone:TZ, weekday:'short', month:'short', day:'numeric'});
    function fmtDay(d){ try { return _dayLabelFmt.format(d); } catch(e){ return ''; } }

    /* --- normalize the two data sources into one shape --- */
    function normStatic(m){
      return {
        when: new Date(m.date + 'T00:00:00'),
        key: m.date,                          // fallback data has no kickoff time; trust its published matchday date
        home: m.homeCode || m.home, away: m.awayCode || m.away,
        homeScore: m.homeScore, awayScore: m.awayScore,
        state: m.status === 'FT' ? 'post' : 'pre',
        clock: 'FT', kickoff: m.kickoff
      };
    }
    function normEspn(ev){
      var c = (ev.competitions && ev.competitions[0]) || {};
      var cs = c.competitors || [];
      var h = cs[0] || {}, a = cs[1] || {};
      for (var i=0;i<cs.length;i++){ if (cs[i].homeAway === 'home') h = cs[i]; if (cs[i].homeAway === 'away') a = cs[i]; }
      var t = (c.status && c.status.type) || {};
      var when = new Date(ev.date);
      function sc(x){ return (x.score == null || x.score === '') ? null : +x.score; }
      function nm(x){ var tm = x.team || {}; return tm.abbreviation || tm.shortDisplayName || tm.displayName || '?'; }
      return {
        when: when, key: matchDay(when),      // bucket by ET matchday of the kickoff instant
        home: nm(h), away: nm(a),
        homeScore: sc(h), awayScore: sc(a),
        state: t.state || 'pre',                 // 'pre' | 'in' | 'post'
        clock: (c.status && c.status.displayClock) || t.shortDetail || '',
        kickoff: null
      };
    }

    // 🦅 easter egg: true when the USA has more goals (a win at FT, or leading live)
    function usaWon(m){
      if (m.homeScore == null || m.awayScore == null) return false;
      if (m.home === 'USA' && m.homeScore > m.awayScore) return true;
      if (m.away === 'USA' && m.awayScore > m.homeScore) return true;
      return false;
    }
    function chip(m){
      var hs = m.homeScore == null ? 0 : m.homeScore;
      var as = m.awayScore == null ? 0 : m.awayScore;
      var egg = usaWon(m) ? ' usa-win" title="🦅' : '';   // closes class attr, adds a title hint
      if (m.state === 'in'){
        return '<span class="score-chip live' + egg + '"><span class="dot"></span>' + esc(m.home) + ' ' + hs + '–' + as + ' ' + esc(m.away) + ' <i>' + esc(m.clock || 'LIVE') + '</i></span>';
      }
      if (m.state === 'post'){
        return '<span class="score-chip' + egg + '">' + esc(m.home) + ' ' + hs + '–' + as + ' ' + esc(m.away) + ' <i>FT</i></span>';
      }
      var t = m.kickoff || (m.when && fmtTime(m.when)) || 'soon';
      return '<span class="score-chip">' + esc(m.home) + ' v ' + esc(m.away) + ' <i>' + esc(t) + '</i></span>';
    }
    function row(el, list, emptyMsg){
      el.innerHTML = list.length ? list.map(chip).join('') : '<span class="score-empty">' + emptyMsg + '</span>';
    }

    function buckets(list){
      var t = [], y = [];
      list.forEach(function(m){ if (m.key === todayKey) t.push(m); else if (m.key === yestKey) y.push(m); });
      function byWhen(a,b){ return a.when - b.when; }
      t.sort(byWhen); y.sort(byWhen);
      return { today: t, yest: y };
    }

    function renderDays(b){
      row(todayRow, b.today, 'No matches today');
      row(yestRow, b.yest, 'No matches');
      liveFlag.hidden = !b.today.some(function(m){ return m.state === 'in'; });
    }

    /* --- completed results only, grouped by date, newest first, in the collapsed
       <details>. Unplayed matches are intentionally excluded (they'd also surface
       meaningless knockout-bracket placeholders like "1A"/"W73"). --- */
    function renderAll(staticMatches){
      var byDay = {}, order = [];
      staticMatches.map(normStatic).filter(function(m){ return m.state === 'post'; }).forEach(function(m){
        var iso = m.key;
        if (!byDay[iso]){ byDay[iso] = []; order.push(iso); }
        byDay[iso].push(m);
      });
      order.sort().reverse();   // most recent matchday first
      allBody.innerHTML = order.map(function(iso){
        return '<div class="score-all-day"><span class="d">' + esc(fmtDay(new Date(iso + 'T12:00:00Z'))) +
               '</span><div class="score-row">' + byDay[iso].map(chip).join('') + '</div></div>';
      }).join('') || '<span class="score-empty">No results yet</span>';
    }

    /* --- bootstrap from static data (instant) --- */
    var staticMatches = [];
    try { staticMatches = (JSON.parse(document.getElementById('wc-scores-data').textContent).matches) || []; } catch(e){}
    var staticB = buckets(staticMatches.map(normStatic));
    renderDays(staticB);
    renderAll(staticMatches);

    /* --- 🦅 easter egg: click a USA-win chip and an eagle (with a spinning ball)
       soars across the screen. Event delegation on the stable row containers, so it
       keeps working after the live re-renders swap their innerHTML. --- */
    function flyEagle(){
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      var prev = document.querySelector('.wc-eagle'); if (prev) prev.remove();
      var e = document.createElement('div');
      e.className = 'wc-eagle';
      e.setAttribute('aria-hidden', 'true');
      e.innerHTML = '<span class="bird">🦅</span><span class="ball">⚽</span>';
      document.body.appendChild(e);
      e.addEventListener('animationend', function(){ e.remove(); });
      setTimeout(function(){ if (e.parentNode) e.remove(); }, 4000); // safety net
    }
    [todayRow, yestRow, allBody].forEach(function(el){
      el.addEventListener('click', function(ev){
        var t = ev.target.closest && ev.target.closest('.usa-win');
        if (t) flyEagle();
      });
    });

    /* --- overlay live ESPN data, polite polling --- */
    var pollTimer = null;
    function maybeSchedule(todayList){
      var active = todayList.some(function(m){ return m.state === 'in' || m.state === 'pre'; });
      if (active && !pollTimer) pollTimer = setInterval(tick, POLL_MS);
      else if (!active && pollTimer){ clearInterval(pollTimer); pollTimer = null; }
    }
    function tick(){ if (!document.hidden) refresh(); }
    function refresh(){
      fetch(ESPN + '?dates=' + ymd(yestKey) + '-' + ymd(tomKey))
        .then(function(r){ if (!r.ok) throw new Error(r.status); return r.json(); })
        .then(function(j){
          var b = buckets(((j && j.events) || []).map(normEspn));
          // keep static for a day ESPN returned nothing for, so we never blank it out
          if (!b.today.length) b.today = staticB.today;
          if (!b.yest.length)  b.yest  = staticB.yest;
          renderDays(b);
          maybeSchedule(b.today);
        })
        .catch(function(){ maybeSchedule(staticB.today); }); // ESPN down: keep static, retry if today still open
    }
    document.addEventListener('visibilitychange', function(){ if (!document.hidden) refresh(); });
    refresh();
  })();

  /* ---- countdown to USA's next match (reuses the preview's countdown trick) ----
     SINGLE SOURCE OF TRUTH — update only NEXT_USMNT below after each USMNT game.
       • Known next game : set opponent + kickoff (ISO 8601 w/ ET offset) + dateLabel.
       • Date not set yet : set kickoff to null  -> the line reads "... TBD".
                            (e.g. a knockout opponent/time we don't know yet)
       • USA eliminated  : set eliminated to true -> the whole line is removed. */
  var NEXT_USMNT = {
    opponent : 'USA vs Belgium',
    kickoff  : '2026-07-06T20:00:00-04:00', // null when unknown -> shows TBD
    dateLabel: 'Jul 6 · 8:00 PM ET',
    eliminated: true                         // true -> hide the line entirely
  };
  (function(){
    var line = document.getElementById('wc-next-line');
    var el   = document.getElementById('wc-next');
    if (!line || !el) return;

    if (NEXT_USMNT.eliminated) { line.remove(); return; }

    // No confirmed date yet -> TBD, no live countdown.
    if (!NEXT_USMNT.kickoff) {
      line.innerHTML = 'Next USMNT match · ' + NEXT_USMNT.opponent + ' · TBD';
      return;
    }

    line.innerHTML = 'Next USMNT match in <b id="wc-next">—</b> · ' +
                     NEXT_USMNT.opponent + ' · ' + NEXT_USMNT.dateLabel;
    el = document.getElementById('wc-next');
    var target = new Date(NEXT_USMNT.kickoff).getTime();
    function tick(){
      var d = target - Date.now();
      if (d < 0) { el.textContent = 'now'; return; }
      var days = Math.floor(d / 864e5), h = Math.floor(d % 864e5 / 36e5);
      el.textContent = days + 'd ' + h + 'h';
    }
    tick(); setInterval(tick, 60000);
  })();
})();
</script>
