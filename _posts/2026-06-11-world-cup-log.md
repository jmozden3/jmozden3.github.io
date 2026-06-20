---
layout: default
title: "World Cup 2026 Live Updates"
date: 2026-06-11 09:00:00 -0500
categories: sports
tags: [sports, soccer]
permalink: /worldcup/
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
  .wc-entry li{font-size:1.02rem;margin:0 0 .45rem}
  .wc-shots{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:18px 0 0}
  @media(max-width:640px){.wc-shots{grid-template-columns:1fr}}
  .wc-shot img{width:100%;aspect-ratio:4/5;object-fit:cover;border-radius:12px;border:1px solid var(--line);display:block}
  .wc-shot figcaption{font-family:'Space Mono',monospace;font-size:.7rem;color:var(--ink-soft);margin-top:6px;line-height:1.45}
  /* single landscape photo (e.g. a TV set shot) — full width, wide aspect */
  .wc-shot-wide{margin:18px 0 0}
  .wc-shot-wide img{aspect-ratio:16/9}
  .wc-video{position:relative;padding-bottom:56.25%;height:0;margin:18px 0 0;border-radius:12px;overflow:hidden;border:1px solid var(--line)}
  .wc-video iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
  /* two embeds side by side — stacks on narrow screens so they don't get cramped */
  .wc-videos{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:18px 0 0}
  @media(max-width:640px){.wc-videos{grid-template-columns:1fr}}
  .wc-videos .wc-video{margin:0}
  .wc-videos figure{margin:0}
  .wc-videos figcaption{font-family:'Space Mono',monospace;font-size:.7rem;color:var(--ink-soft);margin-top:6px;line-height:1.45}
</style>

<div class="wcl">

<!-- ===== HEADER ===== -->
<header class="wcl-hero">
  <div class="wrap">
    <span class="eyebrow">// Running log</span>
    <h1>The World Cup, as it happens</h1>
    <p class="sub">Some takes as the tournament goes along. Will provide extra emphasis on USMNT analysis. Feel free to use the filter buttons below!</p>
    <p class="wcl-next" id="wc-next-line">Next USMNT match in <b id="wc-next">—</b> · USA vs Türkiye, Jun 25 · 10:00 PM ET</p>
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

    <!-- Around the tournament: Australia beat Türkiye, raising the stakes for Friday -->
    <article class="wc-entry" data-tags="usmnt" data-time="2026-06-14T09:00">
      <div class="wc-entry-meta">
        <span class="wc-time">Jun 14 · 9:00 AM</span>
        <span class="chip usmnt">USMNT</span>
      </div>
      <h3>Australia win sets up a fun one with the USMNT</h3>
      <div class="match">
        <span class="score">AUS 2–0 TÜR</span>
        <span class="tag">Group D</span>
      </div>
      <p>With Australia's 2–0 win over Türkiye, all of a sudden the USMNT–Australia game on Friday gets a lot more interesting. I thought the USMNT and Türkiye were the two best teams in this group, but an Australia performance like that means we'll get treated to some better soccer that I would've initially expected. The US need to come with the same intensity they brought against Paraguay. You won't want to miss this clash between the two top teams in the group right now.</p>
      <p><a class="wc-cal" href="{{ '/assets/usmnt-australia.ics' | relative_url }}">🗓 Add USA v Australia to your calendar</a></p>
    </article>

    <!-- Around the tournament: the superstars all delivered on the same matchday -->
    <article class="wc-entry" data-tags="tournament" data-time="2026-06-17T10:10">
      <div class="wc-entry-meta">
        <span class="wc-time">Jun 17 · 10:10 AM</span>
        <span class="chip tournament">Around the tournament</span>
      </div>
      <h3>The stars all came out to play</h3>
      <p>Yesterday's matchday had all the brightest stars on center stage, and they all delivered. Mbappé scored <a href="https://www.youtube.com/watch?v=2AQGEqU9biI" target="_blank" rel="noopener">two</a> — in the process becoming France's all-time leading World Cup goalscorer — Haaland scored <a href="https://www.youtube.com/watch?v=pk_d-aFnZ0c" target="_blank" rel="noopener">two</a>, and then, as if he needed to remind everyone, Messi scored <a href="https://www.youtube.com/watch?v=7M3IPdkAfM4" target="_blank" rel="noopener">THREE</a>!</p>
      <p>With that hat trick, Messi has officially tied Miroslav Klose for the most World Cup goals ever, at 16. And at this rate, who would dare doubt that he breaks the record before this campaign is done?</p>
    </article>

    <!-- Off the pitch: the NBC studio crew isn't clicking -->
    <article class="wc-entry" data-tags="offpitch" data-time="2026-06-16T09:05">
      <div class="wc-entry-meta">
        <span class="wc-time">Jun 16 · 9:05 AM</span>
        <span class="chip offpitch">Off the pitch</span>
      </div>
      <h3>I don't really enjoy this studio crew</h3>
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
    opponent : 'USA vs Türkiye',
    kickoff  : '2026-06-25T22:00:00-04:00', // null when unknown -> shows TBD
    dateLabel: 'Jun 25 · 10:00 PM ET',
    eliminated: false                        // true -> hide the line entirely
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
