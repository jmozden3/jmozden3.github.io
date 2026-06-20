---
layout: default
title: "2026 World Cup Preview"
date: 2026-06-10 12:00:00 -0500
categories: sports
tags: [sports, soccer]
excerpt: "Getting you ready for the biggest sporting event in the world"
image: https://jmozden3.github.io/assets/images/USMNT-scaled.jpg
---

<style>
  :root{
    --pitch:#08201b;          /* stadium night */
    --pitch-2:#0c2a22;
    --turf:#15613f;           /* mown grass */
    --turf-line:#7fdcab;
    --chalk:#f4f8f3;          /* pitch lines / light text */
    --paper:#fafbfa;          /* page bg */
    --ink:#0d211c;            /* near-black green */
    --ink-soft:#46584f;
    --accent:#ff4332;         /* kit red — energy */
    --accent-ink:#c8261a;
    --blue:#2f6bff;           /* away kit blue */
    --gold:#e4b14c;           /* trophy */
    --line:#e2e7e2;
    --radius:14px;
    --maxw:1080px;
  }
  .wcg *{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  .wcg{
    font-family:'Inter',system-ui,sans-serif;
    color:var(--ink);background:var(--paper);
    line-height:1.65;-webkit-font-smoothing:antialiased;
  }
  @media (prefers-reduced-motion:reduce){
    html{scroll-behavior:auto}
    .wcg *{transition:none!important;animation:none!important}
  }

  /* ---------- type ---------- */
  .wcg h1,.wcg h2,.wcg h3{font-family:'Archivo',sans-serif;line-height:1.02;letter-spacing:-.02em}
  .eyebrow{
    font-family:'Space Mono',monospace;font-size:.78rem;letter-spacing:.04em;
    text-transform:uppercase;color:var(--accent-ink);font-weight:700;
  }
  .eyebrow .num{color:var(--ink-soft)}
  .wcg p{margin:0 0 1rem}
  .wcg a{color:var(--accent-ink)}

  /* ---------- layout ---------- */
  .wrap{max-width:var(--maxw);margin:0 auto;padding:0 24px}
  .wcg section{padding:84px 0;border-bottom:1px solid var(--line);scroll-margin-top:84px}
  @media(max-width:768px){.wcg section{scroll-margin-top:150px}}
  .sec-head{max-width:680px;margin-bottom:34px}
  .sec-head h2{font-size:clamp(2rem,5vw,3.1rem);font-weight:900;margin:.35rem 0 .5rem;text-transform:uppercase}
  .sec-head p.lede{font-size:1.12rem;color:var(--ink-soft)}

  /* ---------- nav ---------- */

  /* ---------- table of contents (non-sticky) ---------- */
  .toc-wrap{padding-top:44px;padding-bottom:44px}
  .toc{background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:24px 26px}
  .toc-head{
    font-family:'Space Mono',monospace;font-size:.78rem;letter-spacing:.04em;
    text-transform:uppercase;color:var(--accent-ink);font-weight:700;display:block;margin-bottom:16px;
  }
  .toc-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}
  @media(max-width:680px){.toc-grid{grid-template-columns:1fr}}
  .toc-item{
    display:flex;align-items:baseline;gap:12px;text-decoration:none;color:var(--ink);
    border:1px solid transparent;border-radius:10px;padding:10px 12px;transition:all .15s;
  }
  .toc-item:hover,.toc-item:focus-visible{border-color:var(--accent);background:rgba(255,67,50,.04);transform:translateX(3px);outline:none}
  .toc-item .tn{font-family:'Space Mono',monospace;font-size:.8rem;font-weight:700;color:var(--accent-ink);min-width:1.6em}
  .toc-item .tt{font-family:'Archivo',sans-serif;font-weight:700;font-size:1rem;text-transform:uppercase;letter-spacing:-.01em;line-height:1.2}

  /* ---------- hero ---------- */
  .hero{
    background:radial-gradient(120% 120% at 80% -10%,var(--pitch-2),var(--pitch) 60%);
    color:var(--chalk);border-bottom:none;position:relative;overflow:hidden;
    padding:96px 0 104px;
  }
  .hero::after{ /* faint pitch lines */
    content:"";position:absolute;inset:0;opacity:.10;pointer-events:none;
    background:
      linear-gradient(transparent 49.6%,var(--turf-line) 49.6%,var(--turf-line) 50.4%,transparent 50.4%),
      radial-gradient(circle at 50% 50%,transparent 118px,var(--turf-line) 118px,var(--turf-line) 121px,transparent 121px);
  }
  .hero .eyebrow{color:#ff8c7f}
  .hero h1{
    font-size:clamp(2.7rem,8vw,5.6rem);font-weight:900;text-transform:uppercase;
    margin:.5rem 0 1rem;max-width:13ch;
  }
  .hero h1 em{font-style:normal;color:var(--accent)}
  .hero p.sub{font-size:1.2rem;max-width:46ch;color:#cfe0d7;margin-bottom:30px}
  .stamp{
    display:inline-flex;gap:18px;align-items:center;flex-wrap:wrap;
    font-family:'Space Mono',monospace;font-size:.82rem;color:#9fc4b3;
    border:1px solid rgba(127,220,171,.3);border-radius:999px;padding:10px 20px;
  }
  .stamp b{color:var(--chalk)}
  .countdown{display:flex;gap:14px;margin-top:34px;flex-wrap:wrap}
  .cd-box{background:rgba(255,255,255,.06);border:1px solid rgba(127,220,171,.18);border-radius:12px;padding:12px 16px;min-width:74px;text-align:center}
  .cd-box .n{font-family:'Archivo';font-weight:900;font-size:2rem;display:block;line-height:1}
  .cd-box .l{font-family:'Space Mono',monospace;font-size:.64rem;text-transform:uppercase;color:#9fc4b3;letter-spacing:.08em}

  /* ---------- draft callout (where Joe writes) ---------- */
  .draft{
    border:1.5px dashed var(--accent);border-radius:var(--radius);
    background:rgba(255,67,50,.045);padding:20px 22px;margin:8px 0 4px;
  }
  .draft .tag{
    font-family:'Space Mono',monospace;font-size:.72rem;font-weight:700;color:var(--accent-ink);
    text-transform:uppercase;letter-spacing:.04em;display:block;margin-bottom:8px;
  }
  .draft .angle{font-weight:600;margin-bottom:6px}
  .draft ul{margin:6px 0 0 18px;color:var(--ink-soft);font-size:.94rem}
  .draft li{margin-bottom:3px}

  /* ---------- clean callout (finished content) ---------- */
  .callout{background:#f4f7f4;border:1px solid var(--line);border-radius:var(--radius);padding:22px 24px;margin:8px 0 4px}
  .callout > ul{margin:0 0 0 18px;color:var(--ink);font-size:.96rem}
  .callout li{margin-bottom:7px}
  .callout ul ul{margin-top:6px;margin-left:22px}
  .callout-dark{background:rgba(255,255,255,.06);border:1px solid rgba(127,220,171,.2);border-radius:12px;padding:18px 20px;margin-top:18px}
  .callout-dark a{color:#ff8c7f}

  /* ---------- my-prediction verdict box ---------- */
  .prediction{
    background:radial-gradient(120% 140% at 85% -20%,var(--pitch-2),var(--pitch) 65%);
    color:var(--chalk);border:1px solid rgba(127,220,171,.25);border-left:5px solid var(--accent);
    border-radius:var(--radius);padding:24px 26px;margin-top:30px;
  }
  .prediction .pl{font-family:'Space Mono',monospace;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#ff8c7f;display:block;margin-bottom:8px}
  .prediction .pbig{font-family:'Archivo';font-weight:900;font-size:clamp(1.5rem,4.4vw,2.15rem);text-transform:uppercase;line-height:1.04;margin:0 0 10px}
  .prediction .pbig em{font-style:normal;color:var(--accent)}
  .prediction p{color:#cfe0d7;font-size:.98rem;margin:0}

  /* ---------- "in american terms" device ---------- */
  .translate{
    border-left:4px solid var(--blue);background:#f1f5ff;border-radius:0 12px 12px 0;
    padding:14px 18px;margin:18px 0;font-size:.97rem;
  }
  .translate b{font-family:'Space Mono',monospace;font-size:.74rem;text-transform:uppercase;letter-spacing:.04em;color:var(--blue);display:block;margin-bottom:4px}

  /* ---------- format cards ---------- */
  .grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
  @media(max-width:760px){.grid-3{grid-template-columns:1fr}}
  .card{background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:22px}
  .card .big{font-family:'Archivo';font-weight:900;font-size:2.4rem;color:var(--accent-ink);line-height:1}
  .card h3{font-size:1.05rem;margin:6px 0 4px;text-transform:uppercase;letter-spacing:-.01em}
  .card p{font-size:.92rem;color:var(--ink-soft);margin:0}

  /* ---------- bracket graphic ---------- */
  .bracket{margin:26px 0 4px}
  .bracket img{width:100%;height:auto;display:block;border:1px solid var(--line);border-radius:var(--radius);background:#0d0d0d}
  .bracket figcaption{font-family:'Space Mono',monospace;font-size:.74rem;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.03em;margin-top:10px;text-align:center}

  /* ---------- FORMATION PITCH (signature) ---------- */
  .pitch-section{background:linear-gradient(180deg,var(--pitch),var(--pitch-2));color:var(--chalk);border-bottom:none}
  .pitch-section .eyebrow{color:#ff8c7f}
  .pitch-section h2{color:var(--chalk)}
  .pitch-section .lede{color:#cfe0d7}
  .toggle{display:inline-flex;background:rgba(255,255,255,.07);border:1px solid rgba(127,220,171,.25);border-radius:999px;padding:5px;margin:6px 0 26px;gap:4px}
  .toggle button{
    font-family:'Space Mono',monospace;font-size:.82rem;font-weight:700;cursor:pointer;
    border:0;background:transparent;color:#cfe0d7;padding:9px 18px;border-radius:999px;transition:all .25s;text-transform:uppercase;letter-spacing:.02em;
  }
  .toggle button.on{background:var(--accent);color:#fff}
  .pitch-stage{display:grid;grid-template-columns:1.1fr .9fr;gap:30px;align-items:start}
  @media(max-width:820px){.pitch-stage{grid-template-columns:1fr}}
  .pitch{
    position:relative;width:100%;aspect-ratio:7/9;max-width:480px;margin:0 auto;
    background:
      repeating-linear-gradient(0deg,#167045 0 11.11%,#13603c 11.11% 22.22%);
    border:2px solid rgba(244,248,243,.55);border-radius:10px;overflow:hidden;
  }
  .pitch .lines{position:absolute;inset:0;pointer-events:none}
  .pitch .lines i{position:absolute;border:2px solid rgba(244,248,243,.55)}
  .l-mid{top:50%;left:0;right:0;border-width:2px 0 0 0!important}
  .l-circle{top:50%;left:50%;width:88px;height:88px;border-radius:50%;transform:translate(-50%,-50%)}
  .l-boxT{top:-2px;left:50%;width:46%;height:15%;transform:translateX(-50%)}
  .l-boxB{bottom:-2px;left:50%;width:46%;height:15%;transform:translateX(-50%)}
  .l-6T{top:-2px;left:50%;width:24%;height:7%;transform:translateX(-50%)}
  .l-6B{bottom:-2px;left:50%;width:24%;height:7%;transform:translateX(-50%)}
  .player{
    position:absolute;transform:translate(-50%,-50%);transition:top .75s cubic-bezier(.6,.05,.2,1),left .75s cubic-bezier(.6,.05,.2,1),opacity .35s ease;
    display:flex;flex-direction:column;align-items:center;cursor:pointer;width:64px;z-index:2;
  }
  .player .dot{
    width:30px;height:30px;border-radius:50%;background:var(--accent);border:2px solid #fff;
    box-shadow:0 2px 6px rgba(0,0,0,.4);transition:transform .2s,background .3s;
  }
  .player.gk .dot{background:var(--gold)}
  .player .nm{font-family:'Space Mono',monospace;font-size:.62rem;margin-top:3px;color:#fff;background:rgba(8,32,27,.7);padding:1px 5px;border-radius:4px;white-space:nowrap;font-weight:700}
  .player:hover,.player:focus-visible{z-index:20}
  .player:hover .dot,.player:focus-visible .dot{transform:scale(1.2)}
  /* ---- spotlight (strength / weakness) ---- */
  .player.dim{opacity:.2}
  .player.spot-strength .dot{box-shadow:0 0 0 4px rgba(52,199,89,.6),0 0 20px 5px rgba(52,199,89,.55);animation:spotPulseG 1.6s ease-in-out infinite}
  .player.spot-weakness .dot{box-shadow:0 0 0 4px rgba(255,176,32,.65),0 0 20px 5px rgba(255,176,32,.55);animation:spotPulseW 1.6s ease-in-out infinite}
  @keyframes spotPulseG{0%,100%{box-shadow:0 0 0 3px rgba(52,199,89,.5),0 0 14px 3px rgba(52,199,89,.5)}50%{box-shadow:0 0 0 6px rgba(52,199,89,.7),0 0 26px 7px rgba(52,199,89,.65)}}
  @keyframes spotPulseW{0%,100%{box-shadow:0 0 0 3px rgba(255,176,32,.55),0 0 14px 3px rgba(255,176,32,.5)}50%{box-shadow:0 0 0 6px rgba(255,176,32,.75),0 0 26px 7px rgba(255,176,32,.65)}}
  .spotlight{margin-top:16px}
  .spotlight .sp-label{font-family:'Space Mono',monospace;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#9fc4b3;display:block;margin-bottom:9px}
  .sp-btns{display:flex;gap:10px;flex-wrap:wrap}
  .sp-btn{font-family:'Space Mono',monospace;font-size:.8rem;font-weight:700;cursor:pointer;border:1px solid rgba(127,220,171,.32);background:rgba(255,255,255,.06);color:#cfe0d7;padding:9px 16px;border-radius:999px;transition:all .2s;text-transform:uppercase;letter-spacing:.02em}
  .sp-btn:hover{border-color:#fff;color:#fff}
  .sp-btn.strength.on{background:#34c759;border-color:#34c759;color:#04270f}
  .sp-btn.weakness.on{background:#ffb020;border-color:#ffb020;color:#3a2600}
  .sp-excerpt{margin:14px 0 0;font-size:.95rem;color:#e8f1ec}
  .sp-excerpt:empty{display:none}
  .player:focus-visible{outline:2px solid var(--gold);outline-offset:4px;border-radius:8px}
  .ptip{
    position:absolute;bottom:calc(100% + 8px);left:50%;transform:translateX(-50%);
    background:#fff;color:var(--ink);border-radius:8px;padding:8px 10px;width:150px;
    font-size:.74rem;line-height:1.4;box-shadow:0 6px 18px rgba(0,0,0,.25);
    opacity:0;visibility:hidden;transition:opacity .18s;z-index:5;pointer-events:none;
  }
  .ptip b{display:block;font-size:.82rem;font-family:'Archivo';font-weight:800}
  .ptip .club{color:var(--ink-soft)}
  .ptip .role{color:var(--accent-ink);font-family:'Space Mono',monospace;font-size:.66rem;text-transform:uppercase;margin-top:3px;display:block}
  .player:hover .ptip,.player:focus-visible .ptip{opacity:1;visibility:visible}
  .pitch-info h3{font-family:'Archivo';font-weight:900;font-size:1.5rem;text-transform:uppercase;color:var(--chalk)}
  .pitch-info .shape-name{font-family:'Space Mono',monospace;color:var(--gold);font-weight:700;letter-spacing:.05em}
  .pitch-info p{color:#cfe0d7;font-size:.96rem}
  .pitch-note{font-size:.78rem;color:#7fa392;font-style:italic;margin-top:14px}

  /* ---------- team explorer ---------- */
  .teams-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px}
  .team-chip{
    background:#fff;border:1px solid var(--line);border-radius:12px;padding:16px 14px;cursor:pointer;
    text-align:left;font-family:inherit;transition:transform .15s,box-shadow .15s,border-color .15s;
    display:flex;flex-direction:column;height:100%;
  }
  .team-chip:hover{transform:translateY(-3px);box-shadow:0 8px 20px rgba(13,33,28,.1);border-color:var(--accent)}
  .team-chip:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
  .team-chip .flag{font-size:1.7rem;line-height:1;height:1.7rem}
  .team-chip .tn{font-family:'Archivo';font-weight:800;font-size:1.02rem;margin-top:8px;text-transform:uppercase;line-height:1.12}
  .team-chip .meta{font-family:'Space Mono',monospace;font-size:.68rem;color:var(--ink-soft);text-transform:uppercase;margin-top:auto;padding-top:10px}
  .team-chip .fav{color:var(--gold)}
  /* modal */
  .modal-bg{position:fixed;inset:0;background:rgba(8,32,27,.6);backdrop-filter:blur(3px);display:none;align-items:center;justify-content:center;z-index:100;padding:20px}
  .modal-bg.open{display:flex}
  .modal{background:#fff;border-radius:18px;max-width:520px;width:100%;max-height:86vh;overflow:auto;padding:30px;position:relative}
  .modal .x{position:absolute;top:16px;right:16px;border:0;background:var(--paper);width:34px;height:34px;border-radius:50%;font-size:1.1rem;cursor:pointer;color:var(--ink)}
  .modal .m-flag{font-size:3rem;line-height:1}
  .modal h3{font-family:'Archivo';font-weight:900;font-size:2rem;text-transform:uppercase;margin:6px 0 2px}
  .modal .m-meta{font-family:'Space Mono',monospace;font-size:.78rem;color:var(--ink-soft);text-transform:uppercase;margin-bottom:16px}
  .modal .m-section{margin-top:14px}
  .modal .m-section .lbl{font-family:'Space Mono',monospace;font-size:.7rem;font-weight:700;text-transform:uppercase;color:var(--accent-ink);letter-spacing:.04em}
  .modal .m-section p{font-size:.96rem;margin:3px 0 0}
  .modal .ai-tag{display:inline-block;font-family:'Space Mono',monospace;font-size:.66rem;background:var(--paper);border:1px solid var(--line);border-radius:6px;padding:3px 8px;color:var(--ink-soft);margin-top:18px}

  /* ---------- watch cards ---------- */
  .match{display:flex;align-items:center;gap:16px;background:#fff;border:1px solid var(--line);border-left:4px solid var(--accent);border-radius:12px;padding:16px 20px;margin-bottom:12px}
  .match .date{font-family:'Space Mono',monospace;font-weight:700;color:var(--accent-ink);min-width:88px;font-size:.85rem}
  .match .vs{font-family:'Archivo';font-weight:800;font-size:1.15rem;text-transform:uppercase;flex:1}
  .match .where{font-family:'Space Mono',monospace;font-size:.76rem;color:var(--ink-soft);text-align:right}
  .neutral{font-size:.94rem;color:var(--ink-soft)}
  .neutral b{color:var(--ink)}

  /* ---------- starter pack ---------- */
  .pack{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
  @media(max-width:760px){.pack{grid-template-columns:1fr}}
  .pack .card .lbl{font-family:'Space Mono',monospace;font-size:.7rem;text-transform:uppercase;color:var(--accent-ink);font-weight:700}

  /* ---------- find-your-team quiz ---------- */
  .quiz{margin-top:42px;background:#fff;border:1px solid var(--line);border-radius:18px;padding:30px;max-width:640px}
  .quiz-head .eyebrow{display:block;margin-bottom:6px}
  .quiz-head h3{font-family:'Archivo';font-weight:900;font-size:1.6rem;text-transform:uppercase;margin:2px 0 4px}
  .quiz-head>p{color:var(--ink-soft);font-size:.96rem;margin-bottom:18px}
  .quiz-progress{font-family:'Space Mono',monospace;font-size:.72rem;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.04em;margin-bottom:12px}
  .quiz-q{font-family:'Archivo';font-weight:800;font-size:1.3rem;margin:6px 0 16px}
  .quiz-opts{display:grid;gap:10px}
  .quiz-opt{font-family:inherit;text-align:left;background:var(--paper);border:1.5px solid var(--line);border-radius:12px;padding:14px 16px;font-size:1rem;font-weight:500;cursor:pointer;transition:all .15s;color:var(--ink)}
  .quiz-opt:hover{border-color:var(--accent);background:rgba(255,67,50,.05);transform:translateX(3px)}
  .quiz-opt:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
  .quiz-back{margin-top:14px;background:none;border:0;color:var(--ink-soft);font-family:'Space Mono',monospace;font-size:.74rem;text-transform:uppercase;letter-spacing:.04em;cursor:pointer}
  .quiz-back:hover{color:var(--accent-ink)}
  .quiz-result{text-align:center}
  .quiz-result .qr-flag{font-size:4rem;line-height:1}
  .quiz-result .qr-pre{font-family:'Space Mono',monospace;font-size:.74rem;text-transform:uppercase;color:var(--accent-ink);letter-spacing:.05em}
  .quiz-result h3{font-family:'Archivo';font-weight:900;font-size:2.4rem;text-transform:uppercase;margin:4px 0}
  .quiz-result .qr-meta{font-family:'Space Mono',monospace;font-size:.74rem;color:var(--ink-soft);text-transform:uppercase;margin-bottom:10px}
  .quiz-result .qr-why{color:var(--ink-soft);max-width:48ch;margin:0 auto 22px}
  .quiz-btns{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}
  .quiz-btn{font-family:'Space Mono',monospace;font-weight:700;font-size:.82rem;text-transform:uppercase;letter-spacing:.02em;border-radius:999px;padding:11px 22px;cursor:pointer;border:1.5px solid var(--accent)}
  .quiz-btn.primary{background:var(--accent);color:#fff}
  .quiz-btn.ghost{background:transparent;color:var(--accent-ink)}
  .qr-alt{margin-top:18px;font-size:.84rem;color:var(--ink-soft)}
  .qr-alt button{background:none;border:0;color:var(--accent-ink);cursor:pointer;font:inherit;text-decoration:underline;padding:0}

</style>


<div class="wcg">
<!-- ================= HERO ================= -->
<header class="hero" id="top">
  <div class="wrap">
    <span class="eyebrow">// A novice American's guide</span>
    <h1>The World Cup is here. Let's get you <em>up to speed.</em></h1>
    <p class="sub">No soccer knowledge required. How it works, where the US stands, and what to watch.</p>
    <div class="stamp">
      <span>🏟️ First game: <b>Mexico vs South Africa</b> · Mexico City — <b>Thu, Jun 11 · 3pm ET</b></span>
    </div>
    <div class="countdown" id="countdown" aria-label="Countdown to the first game of the World Cup"></div>
  </div>
</header>

<!-- ================= TABLE OF CONTENTS ================= -->
<nav class="toc-wrap wrap" aria-label="Table of contents">
  <div class="toc">
    <span class="toc-head">// On this page</span>
    <div class="toc-grid">
      <a class="toc-item" href="#why"><span class="tn">01</span><span class="tt">Why you should care</span></a>
      <a class="toc-item" href="#how"><span class="tn">02</span><span class="tt">How this whole thing works</span></a>
      <a class="toc-item" href="#basics"><span class="tn">03</span><span class="tt">Soccer in five minutes</span></a>
      <a class="toc-item" href="#lineup"><span class="tn">04</span><span class="tt">How the US lines up</span></a>
      <a class="toc-item" href="#usa"><span class="tn">05</span><span class="tt">Team USA</span></a>
      <a class="toc-item" href="#favorites"><span class="tn">06</span><span class="tt">Who's going to win this</span></a>
      <a class="toc-item" href="#storylines"><span class="tn">07</span><span class="tt">Storylines</span></a>
      <a class="toc-item" href="#scout"><span class="tn">08</span><span class="tt">Scout any team</span></a>
      <a class="toc-item" href="#watch"><span class="tn">09</span><span class="tt">Where &amp; when to watch</span></a>
      <a class="toc-item" href="#pack"><span class="tn">10</span><span class="tt">Your bandwagon starter pack</span></a>
    </div>
  </div>
</nav>

<!-- ================= 01 WHY CARE ================= -->
<section id="why">
  <div class="wrap">
    <div class="sec-head">
      <span class="eyebrow"><span class="num">// 01</span> &nbsp;Why you should care</span>
      <h2>The biggest sporting event in the world, in our backyard</h2>
      <p class="lede">First men's World Cup on US soil since 1994 — and it'll be the largest in history.</p>
    </div>
    <div class="grid-3" style="margin-bottom:26px">
      <div class="card"><span class="big">48</span><h3>Teams</h3><p>Up from 32 — the biggest field the tournament has ever had.</p></div>
      <div class="card"><span class="big">104</span><h3>Matches</h3><p>Across the US, Canada and Mexico — the first three-nation World Cup.</p></div>
      <div class="card"><span class="big">39</span><h3>Days</h3><p>June 11 to the July 19 final at MetLife Stadium (aka New York New Jersey Stadium).</p></div>
    </div>

    <p>It's here. It's finally here. As a lifelong soccer fan, my favorite time of year is when this country comes together to care, or at least pretend to care, about soccer - specifically for the U.S. Men's National Team (commonly referred to as the USMNT). And to make things even better, this time around, IT'S ON HOME SOIL!</p>
    <p>Whether this country wants to admit it or not, this is the largest sporting event in the world. The 2022 World Cup final drew around 1.5 billion viewers worldwide (!!!), roughly 12x the ~125 million who watched this year's Super Bowl here in the US.</p>
    <p>You don't have to have grown up with the sport or been a diehard fan - all bandwagoners welcome. The World Cup is more than soccer team vs. soccer team - it's country vs country and culture vs. culture. It's a celebration of both unity and national pride, and there's something uniquely patriotic about rooting for the US to kick everyone else's ass (will that happen? TBD). It's the one time everyone from every state can come together to support one team.</p>
    <p> With that in mind, let me walk you through what to expect and how best to watch over the next 39 days. You're part of a huge moment in history - it's time to get on board!</p>
  </div>
</section>

<!-- ================= 02 HOW IT WORKS ================= -->
<section id="how">
  <div class="wrap">
    <div class="sec-head">
      <span class="eyebrow"><span class="num">// 02</span> &nbsp;How this whole thing works</span>
      <h2>Group stage games, then a knockout bracket</h2>
      <p class="lede">A slightly different version of a familiar format</p>
    </div>
    <div class="grid-3" style="margin-bottom:8px">
      <div class="card"><span class="big">12</span><h3>Groups of 4</h3><p>Everyone plays the other three teams in their group once. Win = 3 points, draw = 1, lose = 0. Groups are named Group A through Group L.</p></div>
      <div class="card"><span class="big">Top 2</span><h3>+ 8 best 3rds</h3><p>Previously, it was just the top two teams from each group advance. Now, it's top two plus the eight best third-place teams.</p></div>
      <div class="card"><span class="big">32 Teams</span><h3>Then sudden death</h3><p>After group play, 48 whittles down to 32. The 32 teams are now in the knockout stage, and one loss sends you home.</p></div>
    </div>
    <div class="translate">
      <b> Long Story Short </b>
      The group stage is round-robin pool play; the knockout round is single-elimination. That's why this tournament is so intense - happens once every four years, and one bad game can mean the end of the road until 2030.
    </div>

    <p>The USMNT are in group D, along with Paraguay, Australia, and Turkey. If the US wins all three games, that will be 9 points and a guaranteed first place finish in the group. A win, tie, and loss will get you four points. Etc. Etc. 
      Tiebreakers are determined on head to head result, then head to head goal difference, then a few more things that we don't usually have to get into.
    </p>
    <p>In previous world cups, since only the top two teams of each group advanced, 4 points would be cutting it pretty close. With this new format of also having two-thirds of the third-place teams advance, 3 points is <em>probably</em> enough to advance, but it of course depends on how the other results turn out.
      A win and a draw, or better, going into the final game of the group stage would be a good position to be in.</p>
    <p>After those three guaranteed group games, if you qualify, you enter the knockouts. From there, it's single elimination on out. It's a little confusing on who plays whom in the knockout stage, but the graphic below can help.</p>
    <p>Overall, there are mixed feelings about the new format. Soccer, like every other sport, continues to grow, and FIFA claims that going from 32 -> 48 teams gives more countries the opportunity to play on the biggest stage. 
      Critics argue that it devalues the group games and that we will see more lopsided victories. Honestly, it's very similar to the <a href="https://www.youtube.com/watch?v=r1NfJFgWNRA" target="_blank" rel="noopener">CFP expansion talk</a>, and just like that conversation, this doesn't really stop at this first expansion...it's a matter of if 48 makes sense, or if they will eventually expand to <a href="https://www.espn.com/soccer/story/_/id/46361972/world-cup-2030-fifa-conmebol-leaders-discuss-64-team-expansion" target="_blank" rel="noopener">64 teams in the future</a>.</p>

    <figure class="bracket">
      <img src="/assets/images/wc-knockout-bracket.jpeg" alt="2026 World Cup knockout bracket from the Round of 32 through the final, showing how group winners, runners-up, and the eight best third-place teams are paired.">
      <figcaption>The 2026 knockout bracket — how the 32 survivors are paired from the Round of 32 to the final.</figcaption>
    </figure>
  </div>
</section>

<!-- ================= 03 SOCCER BASICS ================= -->
<section id="basics">
  <div class="wrap">
    <div class="sec-head">
      <span class="eyebrow"><span class="num">// 03</span> &nbsp;Soccer in five minutes</span>
      <h2>Some soccer basics to know</h2>
      <p class="lede">Enough to follow the lineup below and understand what you're watching a bit better</p>
    </div>
    <div class="callout">

      <ul>
        <li>There are eleven players on the field at a time. When you hear about formations, start from the back; so a team playing a 4-4-2 means four defenders, four midfielders, and two attackers. The goalie is never counted.</li>
        <li>Better teams will look to control the ball more and find openings through lots of passing, whereas weaker teams might look to play stout defense then counterattack.</li>
        <li>Typically, in world cup games, many teams will play 'pragmatic' soccer, meaning not take as many risks. This is because the stakes are so high.</li>
        <li>45 minutes per half (with 3 min. hydration breaks each half that double as ads), 15 minute half time, and typically 5-8 minutes of 'extra time' once the 90 minutes are up. The game ends on the ref's whistle, not when the clock hits an exact time </li>
        <li>Attacking third means the area of the field where teams focus their offensive play, typically near the opponent's goal. It's quite literally if the pitch was divided into three equal parts horizontally, it's the part closest to the opponent's goal. Defensive third is the opposite.</li>
        <li>Terms to know:
            <ul>
                <li>Press: when a team constantly pressures another team when they have the ball. Strong tactic but cannot do it forever (exhausing). Like full-court pressing in basketball.</li>
                <li>VAR: virtual assistant referee. It's like the replay box for officials.</li>
                <li>Fullback means left and right defenders. Centerbacks are central defenders. Wingers are outside midfielders (run a lot) and strikers are pure attackers at the top.</li>
                <li>A '9' means a striker. A '10' is usually your best player. A '6' is your defensive midfielder. You can look for those numbers on the pitch - numbers typically do mean something in soccer.</li>
            </ul>
        </li>
      </ul>
    </div>
  </div>
</section>

<!-- ================= 04 FORMATION (SIGNATURE) ================= -->
<section id="lineup" class="pitch-section">
  <div class="wrap">
    <div class="sec-head">
      <span class="eyebrow"><span class="num">// 04</span> &nbsp;How the US lines up</span>
      <h2>One team, two shapes</h2>
      <p class="lede" style="color:#fff">Modern teams don't stand still. Flip the toggle to see how the same eleven players spread out to attack get compact to defend.</p>
      
    </div>
    <div class="toggle" role="tablist" aria-label="Formation phase">
      <button id="btn-attack" class="on" role="tab" aria-selected="true" onclick="setPhase('attack')">In possession</button>
      <button id="btn-defense" role="tab" aria-selected="false" onclick="setPhase('defense')">Out of possession</button>
    </div>
    <div class="pitch-stage">
      <div class="pitch" id="pitch" aria-label="Interactive US formation">
        <div class="lines">
          <i class="l-mid"></i><i class="l-circle"></i>
          <i class="l-boxT"></i><i class="l-boxB"></i><i class="l-6T"></i><i class="l-6B"></i>
        </div>
        <!-- players injected by JS -->
      </div>
      <div class="pitch-info">
        <h3 id="shape-title">Attacking shape</h3>
        <p class="shape-name" id="shape-formation">3-4-2-1</p>
        <p id="shape-desc">Pochettino's (the manager) side builds out from the back with brave passing - this means we like passing up FROM the back, as compared to something like having a defender boot it up the field and try and get possession from there. From that end, look for defenders to pass short a decent amount, even when we're close to our own goal. Positionally, a defender like Freeman tucks in to make a back three in the center. The wing-backs like Robinson and Dest (two of our fastest players) fly up the sides of the pitch, and Pulisic (our best player) drifts into central pockets to spark quick combinations. Tap or hover any player to see who they are.</p>
        <p class="pitch-note" id="pitch-note">A simplified look at how the projected XI shifts shape. Exact starters firm up right before kickoff.</p>
        <div class="callout-dark">
          <p> The main takeaway is this, regardless of the specific formations: in attack, we usually go from 4 defenders to 3, letting fast players run up and down on the outside of the field, while our best attackers drift into the middle and find space in the attacking third. On defense, we get more organized and compact near our goal.</p>
          <div class="spotlight">
            <span class="sp-label">Spotlight a unit — see it on the pitch</span>
            <div class="sp-btns" role="group" aria-label="Highlight team strength or weakness">
              <button class="sp-btn strength" id="sp-strength" aria-pressed="false" onclick="spotlight('strength')">🟢 Our strength</button>
              <button class="sp-btn weakness" id="sp-weakness" aria-pressed="false" onclick="spotlight('weakness')">🔻 Our weakness</button>
            </div>
            <p class="sp-excerpt" id="sp-excerpt" aria-live="polite"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ================= 05 TEAM USA ================= -->
<section id="usa">
  <div class="wrap">
    <div class="sec-head">
      <span class="eyebrow"><span class="num">// 05</span> &nbsp;Team USA</span>
      <h2>Where the USMNT actually stands</h2>
      <p class="lede">A talented young side with a famous coach, home-field advantage, and one big question mark.</p>
    </div>
    <div class="grid-3" style="margin-bottom:22px">
      <div class="card"><span class="big">R16</span><h3>The expectation</h3><p>Escaping a winnable Group D is the realistic baseline.</p></div>
      <div class="card"><span class="big">SF</span><h3>The dream</h3><p>The semifinals would be the best US run since 1930.</p></div>
      <div class="card"><span class="big">#16</span><h3>FIFA rank</h3><p>Highest in their group, but no top-100 player in the world.</p></div>
    </div>
    <div class="translate">
      <b> A Group D Summary </b>
      <div id="usa-analogy">
        <p>No game in our group will be a pushover, but all are winnable. Paraguay and Australia are <em>slightly</em> inferior opponents that will play more defensive against us, looking for quick counterattacks. Turkey stack up more evenly and should be a good and exciting game, since both teams have attacking talent. Since Turkey is our last group game, if we beat the other two, we are in great position to get to the knockouts regardless of that outcome.</p>
      </div>
    </div>
    <p>This is the most talented USMNT roster I've seen in my lifetime. We have players playing all over the top-flights of Europe, and 2 years ago we brought in one of the most successful and recognized managers in world soccer, Mauricio Pochettino.</p>
    <p>If this group can bring it all together and excel in this tournament is the question. 2 years ago during Copa America ('mini-WC' tournament for just north and south america), the USMNT crashed out in the group stage, losing to inferior opponents.</p>
    <p>Since then and leading up to the World Cup, it hasn't always been great. It's taken a while for Pochettino to really form this team, but in the past few weeks, they have started looking like the best version of themselves. A 3-2 win over Senegal two weeks ago showed their attacking prowess, and although they lost 1-2 to Germany last week, there were plenty of bright spots that showed we could hang with some of the best.</p>
    <p>The USMNT faces opposing expectations — American optimism and being on home-soil pushes the expectations up, while it's rather easy for other big-soccer nations to dunk on American soccer culture and our team and say we will perform poorly and get bounced early. We are in between the two.</p>
    <p>If I was a betting man, I would guess we get to the round of 16 before losing. We should be favored, or at least even money, in every game leading up until that point, unless we somehow get third in our group and go against a really strong first-place team in the round of 32. Not getting out of the group would be an absolute disaster.</p>
    <p>All that said, part of me feels like we can really reach the quarterfinals, which would be an outstanding result. Home world cup teams typically perform better, and I think we have really rounded into form as of late and are mentally prepared for the weight of this world cup. With a world-class coach, a talented group of players, and playing in front of home crowds, anything is possible. Here's to the 'American Optimist' in me hoping for the best.</p>

    <div class="prediction">
      <span class="pl">// My prediction</span>
      <p class="pbig">A run to the <em>quarterfinals.</em></p>
      <p>The Round of 16 is the realistic floor — anything less would be an underachievement. But with home crowds, a world-class coach in Pochettino, and a team finally rounding into form, I think this group makes the quarterfinals: our deepest run since 2002, and a moment that could change how this country sees the sport.</p>
    </div>
  </div>
</section>

<!-- ================= 06 FAVORITES ================= -->
<section id="favorites">
  <div class="wrap">
    <div class="sec-head">
      <span class="eyebrow"><span class="num">// 06</span> &nbsp;Who's going to win this</span>
      <h2>The Teams</h2>
      <p class="lede">A handful of countries have a real shot, while others are a long shot. Here's some of the key teams going in.</p>
    </div>
    <div class="translate">
      <b>Co-favorites</b>
      <p><b>Spain 🇪🇸</b> — Winners of Euro 2024, and play selfless, fluid soccer. <i>Player to watch: Lamine Yamal.</i></p>
      <p style="margin-bottom:0"><b>France 🇫🇷</b> — Winners of WC 2018 and runners-up in 2022. Incredible attacking talent — their bench players alone could make a decent starting team. <i>Player to watch: Kylian Mbappé.</i></p>
    </div>
    <div class="translate">
      <b>Next tier down — but still contenders</b>
      <p><b>England 🇬🇧</b> — An incredibly talented squad with some of the best players in the world. They typically just haven't lived up to the potential, but that could change this year. <i>Player to watch: Harry Kane.</i></p>
      <p><b>Portugal 🇵🇹</b> — The most talented midfield in the competition, and Cristiano Ronaldo's last ride. <i>Player to watch: Bruno Fernandes.</i></p>
      <p><b>Argentina 🇦🇷</b> — Winners of the World Cup in 2022. Being slept on because the team is a bit older and less Messi-reliant, but still one of the best teams in the world.</p>
      <p><b>Germany 🇩🇪</b> — A typical World Cup powerhouse, but they've been bounced in the group stage in the past two tournaments. Looking to bounce back this year with a very solid defense. <i>Player to watch: Jamal Musiala.</i></p>
      <p style="margin-bottom:0"><b>Brazil 🇧🇷</b> — Another World Cup powerhouse that hasn't gotten there in the past few decades. They just brought in a new coach, Carlo Ancelotti, who basically wins everywhere he goes. <i>Player to watch: Vinícius (Vini) Jr.</i></p>
    </div>
    <div class="translate">
      <b>Dark horses</b>
      <p><b>Senegal 🇸🇳</b> — Controversial losers of the AFCON Cup (they won, but the win was voided on paper), with plenty of core talent at the end of their prime looking to make a deep run.</p>
      <p><b>Norway 🇳🇴</b> — Some of the best players they've ever had, and they were devastating in qualifying, racking up goals left and right. <i>Player to watch: Erling Haaland.</i></p>
      <p style="margin-bottom:0"><b>Ecuador 🇪🇨</b> — Sneakily one of the best teams in qualifying, having lost only once in their new coach's 19-game tenure (7W, 11D, 1L). They play incredible defense but will need some inspiration on the attacking side.</p>
    </div>
    <div class="translate">
      <b>Mr. Irrelevant</b>
      <p style="margin-bottom:0"><b>Curaçao 🇨🇼</b> — To their country, these players are anything but! Unfortunately, they have the worst odds to win the whole thing, sitting at 2500:1. Feeling lucky?</p>
    </div>
    <p style="margin-top:18px">Of course any team can theoretically win the whole thing, but these are a few to focus on. There are plenty of other contenders to check out (Morocco, Netherlands, Belgium, and more) in the sections below.</p>

    <div class="prediction">
      <span class="pl">// My pick to win it all</span>
      <p class="pbig">It's coming home: <em>England.</em></p>
      <p>The smart money would be on France or Spain, but something tells me it's finally coming home for England. Their best player, Harry Kane, is in the form of his life, and they have the talent and coach to make it happen.</p>
    </div>
  </div>
</section>

<!-- ================= 07 STORYLINES ================= -->
<section id="storylines">
  <div class="wrap">
    <div class="sec-head">
      <span class="eyebrow"><span class="num">// 07</span> &nbsp;Storylines</span>
      <h2>What to follow even with no team</h2>
    </div>
    <div class="translate">
      <b>Old guard vs. new wave</b>
      <p style="margin-bottom:0">The last-dance generation of Messi (38, Argentina) and Ronaldo (41, Portugal) takes on the new wave of Yamal (18, Spain), Mbappé (27, France), and Haaland (25, Norway).</p>
    </div>
    <div class="translate">
      <b>The conditions</b>
      <p style="margin-bottom:0">Heat, altitude, and large travel distances (newsflash: North America is large!) will play a part in this World Cup. Teams who manage that best will have the advantage.</p>
    </div>
    <div class="translate">
      <b>Expect the unexpected</b>
      <p style="margin-bottom:0">You can ALWAYS expect something weird to happen in a World Cup: Saudi Arabia beat Argentina in the last World Cup, Ivory Coast beat France last week, and the last time the World Cup was played on U.S. soil, Sweden and Bulgaria made the semifinals!</p>
    </div>
    <div class="translate">
      <b>The foreign-coach curse</b>
      <p style="margin-bottom:0">Fun fact: no foreign-born coach has ever won a World Cup. Will that change this year with Tuchel (German) leading England, Carlo Ancelotti (Italian) leading Brazil, or even Pochettino (Argentinian) leading the USMNT?!</p>
    </div>
    <div class="translate">
      <b>A USMNT family subplot</b>
      <p style="margin-bottom:0">A few years back, USMNT legend Claudio Reyna publicly spatted with USMNT coach Greg Berhalter because he felt Greg wasn't giving his son, Gio Reyna, enough playing time. Greg — for more reasons than just that — was ultimately fired in 2024. Now Greg's son Sebastian and Gio Reyna both play for the USMNT, and all seems to be fine among them.</p>
    </div>
  </div>
</section>

<!-- ================= 08 SCOUT A TEAM (INTERACTIVE) ================= -->
<section id="scout">
  <div class="wrap">
    <div class="sec-head">
      <span class="eyebrow"><span class="num">// 08</span> &nbsp;Scout any team</span>
      <h2>Pick a team, get the rundown</h2>
      <p class="lede">Tap any badge for a quick scouting report — who they are, how they play, and who to watch.</p>
    </div>
    <div class="teams-grid" id="teams-grid"></div>
    <p class="neutral" style="margin-top:18px;font-size:.84rem">
      <b>All 48 teams, ordered by group (A–L).</b> Tap any badge for its scouting report.
    </p>

    <!-- team picker quiz -->
    <div class="quiz" id="quiz">
      <div class="quiz-head">
        <span class="eyebrow"><span class="num">// bonus</span> &nbsp;Find your team</span>
        <h3>No one to root for? Take the quiz.</h3>
        <p>Answer four quick questions and I'll match you with a team to adopt for the next month.</p>
      </div>
      <div id="quiz-body"></div>
    </div>
  </div>
</section>

<!-- ================= 09 WATCH ================= -->
<section id="watch">
  <div class="wrap">
    <div class="sec-head">
      <span class="eyebrow"><span class="num">// 09</span> &nbsp;Where &amp; when to watch</span>
      <h2>Your USMNT viewing plan</h2>
      <p class="lede">All three group games — times in ET. English on Fox/FS1, Spanish on Telemundo.</p>
    </div>
    <div class="match"><span class="date">Fri Jun 12<br>9:00 PM ET</span><span class="vs">USA vs Paraguay</span><span class="where">SoFi Stadium, LA<br>FOX</span></div>
    <div class="match"><span class="date">Fri Jun 19<br>3:00 PM ET</span><span class="vs">USA vs Australia</span><span class="where">Lumen Field, Seattle</span></div>
    <div class="match"><span class="date">Thu Jun 25<br>10:00 PM ET</span><span class="vs">USA vs Türkiye</span><span class="where">SoFi Stadium, LA<br>FOX</span></div>
    <div class="translate" style="margin-top:20px">
      <b>📺 Neutral games worth your time</b>
      Brazil vs Morocco (Jun 13) · Colombia vs Portugal (Jun 27, Miami) · France vs Senegal (Jun 16) · Uruguay vs Spain (Jun 26).
    </div>
  </div>
</section>

<!-- ================= 10 STARTER PACK ================= -->
<section id="pack" style="border-bottom:none">
  <div class="wrap">
    <div class="sec-head">
      <span class="eyebrow"><span class="num">// 10</span> &nbsp;Your bandwagon starter pack</span>
      <h2>You're ready. Go enjoy it.</h2>
    </div>
    <div class="pack">
      <div class="card"><span class="lbl">One date</span><h3 style="margin-top:6px">Fri, Jun 12</h3><p>USA's opener vs Paraguay, 9pm ET. Circle it.</p></div>
      <div class="card"><span class="lbl">One player</span><h3 style="margin-top:6px">Christian Pulisic</h3><p>The US captain and your easiest name to know.</p></div>
      <div class="card"><span class="lbl">One thing to know</span><h3 style="margin-top:6px">Home-Field Tournament</h3><p> This is our first world cup since 1994, and will likely be our last until many years from now. </p></div>
    </div>
    <div style="margin-top:22px">
      <p>Back in 2023, I <a href="https://medium.com/p/17ba14b415de" target="_blank" rel="noopener">wrote</a> that there hasn't been a better time to be a fan of United States soccer. Here is an excerpt from that piece:</p>
      <div class="translate">
        <b>From that 2023 piece</b>
        <p style="margin-bottom:0;font-style:italic">"Frankly, all this momentum and the surge in US soccer's popularity leads us straight to the big event — the 2026 World Cup on American soil. Hosting the World Cup for the first time since 1994, we have a much stronger team, increased popularity, and higher expectations. While 2026 seems like a while away, nations are already gearing up for the greatest month of sport in three years' time."</p>
      </div>
      <p>Well, the time has come, and I wasn't joking around: it has all led to this. Every practice and every game has led to this event, with this team, on this home soil.</p>
      <p style="margin-bottom:0">Last time we played a World Cup at home, the <a href="https://www.nytimes.com/athletic/7343638/2026/06/09/usmnt-1994-charlie-davies-world-cup/" target="_blank" rel="noopener">1994 team</a> changed how this country viewed this sport. This team can have the same impact. It's time for us as a nation to gather together and support this team for the next month, because who knows — we could be changing the course of soccer in this country forever.</p>
    </div>
  </div>
</section>

<!-- ================= MODAL ================= -->
<div class="modal-bg" id="modal-bg" onclick="if(event.target===this)closeModal()">
  <div class="modal" role="dialog" aria-modal="true" aria-labelledby="m-name">
    <button class="x" onclick="closeModal()" aria-label="Close">✕</button>
    <div class="m-flag" id="m-flag"></div>
    <h3 id="m-name"></h3>
    <div class="m-meta" id="m-meta"></div>
    <div class="m-section"><span class="lbl">The rundown</span><p id="m-blurb"></p></div>
    <div class="m-section"><span class="lbl">How they play</span><p id="m-style"></p></div>
    <div class="m-section"><span class="lbl">Watch</span><p id="m-star"></p></div>
    <span class="ai-tag">⚡ AI-generated scouting report</span>
  </div>
</div>

</div>

<script>
/* ---------- countdown to the first game of the WC (Mexico, Mexico City — Jun 11 2026) ---------- */
(function(){
  var target=new Date('2026-06-11T15:00:00-04:00').getTime();
  var el=document.getElementById('countdown');
  function tick(){
    var d=target-Date.now();
    if(d<0){el.innerHTML='<div class="cd-box"><span class="n">🟢</span><span class="l">Kickoff!</span></div>';return;}
    var days=Math.floor(d/864e5),h=Math.floor(d%864e5/36e5),m=Math.floor(d%36e5/6e4),s=Math.floor(d%6e4/1e3);
    var b=function(n,l){return '<div class="cd-box"><span class="n">'+n+'</span><span class="l">'+l+'</span></div>';};
    el.innerHTML=b(days,'days')+b(h,'hrs')+b(m,'min')+b(s,'sec');
  }
  tick();setInterval(tick,1000);
})();

/* ---------- formation data ---------- */
var SQUAD={
  freese:{name:'Matt Freese',club:'NYCFC',gk:true},
  ream:{name:'Tim Ream',club:'Charlotte FC'},
  richards:{name:'Chris Richards',club:'Crystal Palace'},
  freeman:{name:'Alex Freeman',club:'Orlando City'},
  arobinson:{name:'Antonee Robinson',club:'Fulham'},
  dest:{name:'Sergiño Dest',club:'PSV'},
  adams:{name:'Tyler Adams',club:'Bournemouth'},
  tillman:{name:'Malik Tillman',club:'Bayer Leverkusen'},
  pulisic:{name:'Christian Pulisic',club:'AC Milan'},
  mckennie:{name:'Weston McKennie',club:'Juventus'},
  balogun:{name:'Folarin Balogun',club:'Monaco'}
};
/* x,y are % on the pitch (y: 0=attacking end / opponent goal, 100=own goal) */
var SHAPES={
  attack:{
    title:'Attacking shape',formation:'3-4-2-1',
    desc:"Pochettino's (the manager) side builds out from the back with brave passing - this means we like passing up FROM the back, as compared to something like having a defender boot it up the field and try and get possession from there. From that end, look for defenders to pass short a decent amount, even when we're close to our own goal. Positionally, a defender like Freeman tucks in to make a back three in the center. The wing-backs like Robinson and Dest (two of our fastest players) fly up the sides of the pitch, and Pulisic (our best player) drifts into central pockets to spark quick combinations. Tap or hover any player to see who they are.",
    pos:{
      freese:[50,93,'Goalkeeper'],
      ream:[28,75,'Left center-back'],richards:[50,77,'Center-back'],freeman:[72,75,'Right center-back'],
      arobinson:[12,52,'Left wing-back'],dest:[88,52,'Right wing-back'],
      adams:[40,60,'Deep midfield (anchor)'],tillman:[60,55,'Central midfield'],
      pulisic:[34,33,'Attacking mid (free role)'],mckennie:[66,31,'Attacking mid (late runs)'],
      balogun:[50,14,'Striker']
    }
  },
  defense:{
    title:'Defensive block',formation:'4-4-2',
    desc:"When they lose the ball, the formation is a bit simpler. The USMNT compresses into two tight banks of four and sits deeper, daring you to break them down. Notice the wing-backs drop into the back line and the shape gets narrow. Sometimes, players will occasionally drift out of this position in order to press the opposition and try and regain possession, but generally, this shape is all about being compact and organized to make it hard for opponents to find space in the attacking third.",
    pos:{
      freese:[50,94,'Goalkeeper'],
      arobinson:[16,80,'Left-back'],ream:[39,83,'Center-back'],richards:[61,83,'Center-back'],freeman:[84,80,'Right-back'],
      pulisic:[18,58,'Left midfield'],adams:[40,62,'Central midfield'],tillman:[60,62,'Central midfield'],dest:[82,58,'Right midfield'],
      balogun:[40,34,'Striker'],mckennie:[60,34,'Second striker (counter)']
    }
  }
};

var pitch=document.getElementById('pitch');
/* build player nodes once */
Object.keys(SQUAD).forEach(function(id){
  var p=SQUAD[id];
  var el=document.createElement('div');
  el.className='player'+(p.gk?' gk':'');el.id='pl-'+id;el.tabIndex=0;
  var last=p.name.split(' ').slice(-1)[0];
  el.innerHTML='<div class="ptip"><b>'+p.name+'</b><span class="club">'+p.club+'</span><span class="role" id="role-'+id+'"></span></div><div class="dot"></div><div class="nm">'+last+'</div>';
  pitch.appendChild(el);
});

function setPhase(phase){
  var s=SHAPES[phase];
  Object.keys(s.pos).forEach(function(id){
    var el=document.getElementById('pl-'+id);
    var c=s.pos[id];
    el.style.left=c[0]+'%';el.style.top=c[1]+'%';
    document.getElementById('role-'+id).textContent=c[2];
  });
  document.getElementById('shape-title').textContent=s.title;
  document.getElementById('shape-formation').textContent=s.formation;
  document.getElementById('shape-desc').textContent=s.desc;
  document.getElementById('btn-attack').classList.toggle('on',phase==='attack');
  document.getElementById('btn-defense').classList.toggle('on',phase==='defense');
  document.getElementById('btn-attack').setAttribute('aria-selected',phase==='attack');
  document.getElementById('btn-defense').setAttribute('aria-selected',phase==='defense');
}
setPhase('attack');

/* ---------- spotlight: strength / weakness ---------- */
var SPOT={
  strength:{
    ids:['pulisic','arobinson','dest','mckennie','balogun'],
    html:"<b>Our strength — the attacking core.</b> Pulisic, Robinson, Dest, and McKennie are all very talented players, and Balogun is the best striker we've had in some time."
  },
  weakness:{
    ids:['freese','ream','richards'],
    html:"<b>Our weakness — the spine at the back.</b> Our two center backs and our goalkeeper. Richards is banged-up, and while Ream has served the team well, he is 38, well past a player's prime. Freese is decent, but nothing exceptional (unlike some USMNT keepers of the past, including <a href=\"https://www.reddit.com/r/classicsoccer/comments/1lpknmc/goalkeeper_tim_howards_record_16_saves_for_the/\" target=\"_blank\" rel=\"noopener noreferrer\">Tim Howard's record 16 saves</a>)."
  }
};
var activeSpot=null;
function spotlight(type){
  if(activeSpot===type){clearSpot();return;}
  activeSpot=type;
  var ids=SPOT[type].ids;
  Object.keys(SQUAD).forEach(function(id){
    var el=document.getElementById('pl-'+id);
    el.classList.remove('dim','spot-strength','spot-weakness');
    if(ids.indexOf(id)>=0){el.classList.add('spot-'+type);}
    else{el.classList.add('dim');}
  });
  document.getElementById('sp-strength').classList.toggle('on',type==='strength');
  document.getElementById('sp-weakness').classList.toggle('on',type==='weakness');
  document.getElementById('sp-strength').setAttribute('aria-pressed',type==='strength');
  document.getElementById('sp-weakness').setAttribute('aria-pressed',type==='weakness');
  document.getElementById('sp-excerpt').innerHTML=SPOT[type].html;
}
function clearSpot(){
  activeSpot=null;
  Object.keys(SQUAD).forEach(function(id){
    document.getElementById('pl-'+id).classList.remove('dim','spot-strength','spot-weakness');
  });
  ['sp-strength','sp-weakness'].forEach(function(bid){
    var b=document.getElementById(bid);b.classList.remove('on');b.setAttribute('aria-pressed','false');
  });
  document.getElementById('sp-excerpt').innerHTML='';
}

/* ---------- team explorer data (all 48 teams, grouped A-L) ---------- */
var TEAMS=[
  {id:'mex',name:'Mexico',flag:'🇲🇽',meta:'Group A',
   blurb:"Co-hosts riding huge home crowds across three iconic stadiums. El Tri reach the knockout rounds almost every time, but haven't gotten past the Round of 16 since 1986 — home soil is their best shot to finally break the curse.",
   style:"Technical and possession-minded, lifted by deafening, partisan home support.",
   star:"Striker Santiago Giménez and midfield anchor Edson Álvarez.",
   tags:{play:'balanced',tier:'contender',region:'concacaf',vibe:'winner',star:false}},
  {id:'rsa',name:'South Africa',flag:'🇿🇦',meta:'Group A',
   blurb:"Back at the World Cup for the first time since they hosted in 2010. A young, fearless side that surprised plenty of people to win their qualifying group.",
   style:"Quick, high-energy, and unafraid to push forward.",
   star:"A pacey, youthful core with a few seasoned leaders.",
   tags:{play:'attack',tier:'dark',region:'africa',vibe:'underdog',star:false}},
  {id:'kor',name:'South Korea',flag:'🇰🇷',meta:'Group A',
   blurb:"Asia's most reliable World Cup side, reaching the Round of 16 in 2022. They go as far as their world-class captain can carry them.",
   style:"Disciplined and organized, built to spring their stars on the counter.",
   star:"Son Heung-min, the talismanic captain and one of the game's best.",
   tags:{play:'balanced',tier:'dark',region:'asia',vibe:'mid',star:true}},
  {id:'cze',name:'Czechia',flag:'🇨🇿',meta:'Group A',
   blurb:"A solid, organized European side back on the big stage. Never flashy, always a tough out.",
   style:"Structured and physical, with a real threat from set pieces.",
   star:"Striker Patrik Schick, a clinical finisher when fit.",
   tags:{play:'defense',tier:'dark',region:'europe',vibe:'mid',star:false}},

  {id:'can',name:'Canada',flag:'🇨🇦',meta:'Group B',
   blurb:"Co-hosts and a genuinely exciting young team after announcing themselves in 2022. Real pace, real talent, and — for the first time — real expectations at home.",
   style:"Fast, direct, and athletic, lethal on the counter.",
   star:"Bayern Munich flyer Alphonso Davies and striker Jonathan David.",
   tags:{play:'attack',tier:'dark',region:'concacaf',vibe:'rising',star:true}},
  {id:'bih',name:'Bosnia & Herzegovina',flag:'🇧🇦',meta:'Group B',
   blurb:"Back at the World Cup for the first time since 2014, leaning on grit and a couple of quality attackers.",
   style:"Compact and direct, dangerous from set pieces and quick transitions.",
   star:"Veteran striker Edin Džeko, still leading the line.",
   tags:{play:'balanced',tier:'longshot',region:'europe',vibe:'underdog',star:false}},
  {id:'qat',name:'Qatar',flag:'🇶🇦',meta:'Group B',
   blurb:"The 2022 hosts return, this time qualifying on merit — a sign of how far their program has come. Recent Asian champions.",
   style:"Patient and technical, comfortable keeping the ball.",
   star:"Playmaker Akram Afif, a multiple-time Asian Player of the Year.",
   tags:{play:'balanced',tier:'longshot',region:'asia',vibe:'underdog',star:false}},
  {id:'sui',name:'Switzerland',flag:'🇨🇭',meta:'Group B',
   blurb:"The dependable Swiss are a tournament fixture who quietly reach knockout rounds and trouble giants — they knocked out France in 2021.",
   style:"Organized, balanced, and very hard to beat.",
   star:"Captain Granit Xhaka conducting midfield.",
   tags:{play:'balanced',tier:'contender',region:'europe',vibe:'mid',star:false}},

  {id:'bra',name:'Brazil',flag:'🇧🇷',meta:'Group C',
   blurb:"The most successful nation in World Cup history (five titles) and a real contender, now under serial winner Carlo Ancelotti. Chasing a first crown since 2002 and a return to their joyful best.",
   style:"Flair, pace, and individual brilliance all over the field.",
   star:"Vinícius Júnior, plus a seemingly endless conveyor belt of attackers.",
   tags:{play:'attack',tier:'fav',region:'samerica',vibe:'winner',star:true}},
  {id:'mar',name:'Morocco',flag:'🇲🇦',meta:'Group C',
   blurb:"The team that stunned the world by reaching the 2022 semifinals — the first African nation ever to do so — and it was no fluke. A deep, battle-tested squad.",
   style:"Brilliantly organized at the back, lethal on the counter.",
   star:"Right-back Achraf Hakimi, one of the best in the world at his position.",
   tags:{play:'balanced',tier:'contender',region:'africa',vibe:'rising',star:false}},
  {id:'hai',name:'Haiti',flag:'🇭🇹',meta:'Group C',
   blurb:"A genuine fairy tale: Haiti's first World Cup since 1974, and the first Caribbean nation ever to reach two. They topped a tough group over Costa Rica and Honduras to get here.",
   style:"Sit deep, defend in numbers, and strike on the break.",
   star:"Forward Duckens Nazon supplies the goal threat.",
   tags:{play:'defense',tier:'longshot',region:'concacaf',vibe:'underdog',star:false}},
  {id:'sco',name:'Scotland',flag:'🇬🇧',meta:'Group C',
   blurb:"Back at a World Cup for the first time since 1998, bringing what might be the best traveling fans on earth. Spirited and never easy to play against.",
   style:"Hard-running, physical, and well-drilled.",
   star:"Liverpool's Andy Robertson and midfielder Scott McTominay.",
   tags:{play:'balanced',tier:'dark',region:'europe',vibe:'underdog',star:false}},

  {id:'usa',name:'USA',flag:'🇺🇸',meta:'Group D',
   blurb:"The co-hosts and the story every American will follow. A talented young group under a famous coach, playing at home for the first time since 1994 — a winnable group, sky-high hopes, and one shaky area at the back.",
   style:"Builds from the back and presses high with the ball; drops into a compact 4-4-2 block without it.",
   star:"Captain Christian Pulisic, the talisman (AC Milan).",
   tags:{play:'balanced',tier:'dark',region:'concacaf',vibe:'rising',star:true}},
  {id:'par',name:'Paraguay',flag:'🇵🇾',meta:'Group D',
   blurb:"The group's dark horse. Coach Gustavo Alfaro built a stubborn, disciplined side that beat Argentina, Brazil and Uruguay on the road to qualifying.",
   style:"Defense-first: absorb pressure, then counter fast and direct. Exactly the kind of opponent that can frustrate the US.",
   star:"Julio Enciso, a fearless, shot-happy forward (Strasbourg).",
   tags:{play:'defense',tier:'longshot',region:'samerica',vibe:'underdog',star:false}},
  {id:'aus',name:'Australia',flag:'🇦🇺',meta:'Group D',
   blurb:"Organized, physical, and hard to beat — the Socceroos ground out big results in Asian qualifying and rarely beat themselves.",
   style:"Sit deep in a compact block that springs into a 3-4-3, dangerous via wing-backs and set pieces.",
   star:"A young striker leading the line after some veteran injuries.",
   tags:{play:'defense',tier:'longshot',region:'asia',vibe:'underdog',star:false}},
  {id:'tur',name:'Türkiye',flag:'🇹🇷',meta:'Group D',
   blurb:"Back at a World Cup for the first time since 2002, and genuinely fun to watch — fluid, creative, and loaded with attacking talent. The US's toughest group test.",
   style:"Builds with a back three and rotates creative players freely; no fixed striker.",
   star:"Real Madrid playmaker Arda Güler; Çalhanoğlu is lethal on set pieces.",
   tags:{play:'attack',tier:'dark',region:'europe',vibe:'rising',star:false}},

  {id:'ger',name:'Germany',flag:'🇩🇪',meta:'Group E',
   blurb:"A four-time champion and tournament heavyweight — but with plenty to prove after group-stage exits in both 2018 and 2022.",
   style:"Possession and control, behind a rebuilt, more solid defense.",
   star:"Florian Wirtz and Jamal Musiala pulling the strings.",
   tags:{play:'balanced',tier:'contender',region:'europe',vibe:'winner',star:false}},
  {id:'cur',name:'Curaçao',flag:'🇨🇼',meta:'Group E',
   blurb:"The story of the tournament: a Caribbean island of roughly 185,000 people, the smallest nation ever to reach a World Cup. Their roster is built from Dutch-developed talent and steered by 78-year-old coaching legend Dick Advocaat.",
   style:"Surprisingly tidy — a possession-based 4-3-3 that builds from the back.",
   star:"A squad of Dutch-system pros punching wildly above their weight.",
   tags:{play:'balanced',tier:'longshot',region:'concacaf',vibe:'underdog',star:false}},
  {id:'civ',name:'Ivory Coast',flag:'🇨🇮',meta:'Group E',
   blurb:"Reigning African champions with an athletic, talented squad full of top-European talent. A real dark-horse threat.",
   style:"Powerful and direct, strong through the spine.",
   star:"A deep core of Premier League and European regulars.",
   tags:{play:'balanced',tier:'dark',region:'africa',vibe:'mid',star:false}},
  {id:'ecu',name:'Ecuador',flag:'🇪🇨',meta:'Group E',
   blurb:"Quietly one of the best defensive teams in the field — they conceded almost nothing in South American qualifying. Young, physical, and tough to break down.",
   style:"Rock-solid at the back; they just need a spark up top.",
   star:"Chelsea midfielder Moisés Caicedo anchoring everything.",
   tags:{play:'defense',tier:'dark',region:'samerica',vibe:'mid',star:false}},

  {id:'ned',name:'Netherlands',flag:'🇳🇱',meta:'Group F',
   blurb:"Three-time runners-up and always a contender, the Dutch bring elite talent and a winning pedigree.",
   style:"Technical and structured, comfortable controlling a game.",
   star:"Captain Virgil van Dijk marshalling the defense.",
   tags:{play:'balanced',tier:'contender',region:'europe',vibe:'winner',star:false}},
  {id:'jpn',name:'Japan',flag:'🇯🇵',meta:'Group F',
   blurb:"Asia's standard-bearer and a popular dark-horse pick — they beat Germany and Spain in 2022 and have only improved since.",
   style:"Quick, technical, and superbly coached; they press and pass with real confidence.",
   star:"A deep group of players starring across Europe.",
   tags:{play:'attack',tier:'dark',region:'asia',vibe:'rising',star:false}},
  {id:'swe',name:'Sweden',flag:'🇸🇪',meta:'Group F',
   blurb:"Back at the World Cup with a genuinely frightening attack led by two of Europe's deadliest strikers.",
   style:"Direct and dangerous, built to score in bunches.",
   star:"Alexander Isak and Viktor Gyökeres up top.",
   tags:{play:'attack',tier:'dark',region:'europe',vibe:'mid',star:true}},
  {id:'tun',name:'Tunisia',flag:'🇹🇳',meta:'Group F',
   blurb:"A familiar, well-drilled North African presence at the World Cup, always organized and disciplined.",
   style:"Compact and defensive; tough to break down.",
   star:"A solid collective rather than one headline name.",
   tags:{play:'defense',tier:'longshot',region:'africa',vibe:'underdog',star:false}},

  {id:'bel',name:'Belgium',flag:'🇧🇪',meta:'Group G',
   blurb:"The famed 'Golden Generation' is aging but still dangerous, with world-class quality in midfield and attack.",
   style:"Possession and creativity, built around elite playmakers.",
   star:"Kevin De Bruyne, one of the finest midfielders of his era.",
   tags:{play:'attack',tier:'contender',region:'europe',vibe:'winner',star:true}},
  {id:'egy',name:'Egypt',flag:'🇪🇬',meta:'Group G',
   blurb:"The Pharaohs ride one of the planet's best forwards back to the World Cup — as he goes, so go their hopes.",
   style:"Compact and defensive, built to feed their superstar in transition.",
   star:"Mohamed Salah, Liverpool's talisman.",
   tags:{play:'balanced',tier:'dark',region:'africa',vibe:'mid',star:true}},
  {id:'irn',name:'Iran',flag:'🇮🇷',meta:'Group G',
   blurb:"Asia's most consistent qualifier — experienced, organized, and always a tough group-stage out.",
   style:"A deep defensive block and quick counters.",
   star:"Forward Mehdi Taremi leading the line.",
   tags:{play:'defense',tier:'longshot',region:'asia',vibe:'mid',star:false}},
  {id:'nzl',name:'New Zealand',flag:'🇳🇿',meta:'Group G',
   blurb:"The lone team from Oceania, famous for going unbeaten (three draws) at the 2010 World Cup before going home. Back for more.",
   style:"Big, physical, and organized; very dangerous in the air.",
   star:"Nottingham Forest striker Chris Wood.",
   tags:{play:'defense',tier:'longshot',region:'oceania',vibe:'underdog',star:false}},

  {id:'esp',name:'Spain',flag:'🇪🇸',meta:'Group H',
   blurb:"The favorite and reigning European champions, Spain win by monopolizing the ball and suffocating opponents — now with a generational teenager pulling the strings.",
   style:"Total control: endless possession, quick passing, relentless pressure.",
   star:"Lamine Yamal, already among the world's very best at 18.",
   tags:{play:'attack',tier:'fav',region:'europe',vibe:'winner',star:true}},
  {id:'cpv',name:'Cape Verde',flag:'🇨🇻',meta:'Group H',
   blurb:"A fairy tale: the tiny island nation's first-ever World Cup, sealed by a shock win over Cameroon. Led by beloved hometown coach 'Bubista'.",
   style:"A tidy 4-2-3-1 with a fast, position-swapping attack.",
   star:"Striker Dailon Livramento, scorer of the biggest goals in the country's history.",
   tags:{play:'balanced',tier:'longshot',region:'africa',vibe:'underdog',star:false}},
  {id:'ksa',name:'Saudi Arabia',flag:'🇸🇦',meta:'Group H',
   blurb:"The team that famously shocked eventual champions Argentina in 2022. Never count out the Green Falcons on the big stage.",
   style:"Energetic pressing and quick, vertical attacks.",
   star:"Veteran playmaker Salem Al-Dawsari.",
   tags:{play:'balanced',tier:'longshot',region:'asia',vibe:'underdog',star:false}},
  {id:'uru',name:'Uruguay',flag:'🇺🇾',meta:'Group H',
   blurb:"Two-time champions with a competitive streak far bigger than their size, now blending grizzled veterans with exciting youth under Marcelo Bielsa.",
   style:"Intense, aggressive, and tactically bold under a famously eccentric coach.",
   star:"Darwin Núñez and Federico Valverde headline a strong core.",
   tags:{play:'balanced',tier:'contender',region:'samerica',vibe:'winner',star:false}},

  {id:'fra',name:'France',flag:'🇫🇷',meta:'Group I',
   blurb:"Co-favorites with arguably the deepest, scariest squad in the tournament — 2018 champions and 2022 runners-up, built to go all the way again.",
   style:"Devastating in transition, with pace and finishing everywhere.",
   star:"Kylian Mbappé, one of the best players on the planet.",
   tags:{play:'attack',tier:'fav',region:'europe',vibe:'winner',star:true}},
  {id:'sen',name:'Senegal',flag:'🇸🇳',meta:'Group I',
   blurb:"One of Africa's powerhouses, stacked with Premier League talent and recent continental pedigree. A trendy dark-horse pick to go deep.",
   style:"Athletic, powerful, and quick in transition.",
   star:"A deep, physical squad led by forward Nicolas Jackson.",
   tags:{play:'balanced',tier:'dark',region:'africa',vibe:'rising',star:false}},
  {id:'irq',name:'Iraq',flag:'🇮🇶',meta:'Group I',
   blurb:"Back at the World Cup for the first time since 1986, bringing passion and a hard-working, defensive identity.",
   style:"Disciplined, compact, and combative.",
   star:"A spirited collective rather than a single headliner.",
   tags:{play:'defense',tier:'longshot',region:'asia',vibe:'underdog',star:false}},
  {id:'nor',name:'Norway',flag:'🇳🇴',meta:'Group I',
   blurb:"Back at the World Cup for the first time since 1998 — and worth the wait, with one of the most fearsome attacks in the field after a goal-soaked qualifying run.",
   style:"Direct and ruthless, built to feed two elite attackers.",
   star:"Erling Haaland, plus playmaker Martin Ødegaard.",
   tags:{play:'attack',tier:'dark',region:'europe',vibe:'rising',star:true}},

  {id:'arg',name:'Argentina',flag:'🇦🇷',meta:'Group J',
   blurb:"The reigning champions, blending battle-tested winners with Lionel Messi in what's almost certainly his final World Cup.",
   style:"Experienced, ruthless, and clutch — they know how to win the tight ones.",
   star:"Lionel Messi (38), with Lautaro Martínez and Julián Álvarez.",
   tags:{play:'balanced',tier:'fav',region:'samerica',vibe:'winner',star:true}},
  {id:'alg',name:'Algeria',flag:'🇩🇿',meta:'Group J',
   blurb:"A talented, technical side back among the elite and eager to make up for missing the 2022 tournament.",
   style:"Possession-minded with creative flair in the final third.",
   star:"In-form forward Mohamed Amoura.",
   tags:{play:'attack',tier:'dark',region:'africa',vibe:'mid',star:false}},
  {id:'aut',name:'Austria',flag:'🇦🇹',meta:'Group J',
   blurb:"A well-coached, intense European side back among the contenders and capable of troubling anyone.",
   style:"High-pressing and aggressive, built on energy and structure.",
   star:"Midfield orchestrator Marcel Sabitzer.",
   tags:{play:'balanced',tier:'dark',region:'europe',vibe:'mid',star:false}},
  {id:'jor',name:'Jordan',flag:'🇯🇴',meta:'Group J',
   blurb:"A historic first-ever World Cup for Jordan, riding the momentum of a breakout run to the 2024 Asian Cup final.",
   style:"Organized and counter-attacking, with growing belief.",
   star:"Creative spark Mousa Al-Taamari.",
   tags:{play:'defense',tier:'longshot',region:'asia',vibe:'underdog',star:false}},

  {id:'por',name:'Portugal',flag:'🇵🇹',meta:'Group K',
   blurb:"A genuine contender with maybe the deepest midfield in the tournament — and Cristiano Ronaldo's farewell World Cup at 41.",
   style:"Dangerous and direct, brimming with attacking quality and width.",
   star:"Bruno Fernandes pulls the strings; Ronaldo chases one last fairy tale.",
   tags:{play:'attack',tier:'contender',region:'europe',vibe:'winner',star:true}},
  {id:'cod',name:'DR Congo',flag:'🇨🇩',meta:'Group K',
   blurb:"Back at the World Cup for the first time since 1974 (as Zaire) — one of African football's sleeping giants finally returning to the big stage.",
   style:"Athletic and physical, strong in transition.",
   star:"A deep pool of France-developed talent.",
   tags:{play:'balanced',tier:'longshot',region:'africa',vibe:'underdog',star:false}},
  {id:'uzb',name:'Uzbekistan',flag:'🇺🇿',meta:'Group K',
   blurb:"A first-ever World Cup for the football-mad nation of 36 million after years of near-misses — now coached by 2006 World Cup-winning captain Fabio Cannavaro.",
   style:"Built to be hard to beat: organized, compact, defensively minded.",
   star:"A talented young core finally on the world stage.",
   tags:{play:'defense',tier:'longshot',region:'asia',vibe:'underdog',star:false}},
  {id:'col',name:'Colombia',flag:'🇨🇴',meta:'Group K',
   blurb:"A real dark horse loaded with flair and one of the world's best playmakers; they impressed at recent Copa Américas.",
   style:"Technical, expressive, and dangerous in the final third.",
   star:"James Rodríguez conducting, with pace all around him.",
   tags:{play:'attack',tier:'dark',region:'samerica',vibe:'rising',star:true}},

  {id:'eng',name:'England',flag:'🇬🇧',meta:'Group L',
   blurb:"Perennial contenders carrying decades of 'is this finally the year?' — stacked with talent and now coached by Thomas Tuchel.",
   style:"Deep, athletic, and pragmatic; the question is whether they trust their attackers and loosen up.",
   star:"Captain Harry Kane, one of the game's great goalscorers.",
   tags:{play:'balanced',tier:'fav',region:'europe',vibe:'winner',star:true}},
  {id:'cro',name:'Croatia',flag:'🇭🇷',meta:'Group L',
   blurb:"The great overachievers — a 2018 final and a 2022 semifinal on the back of a golden midfield, even as that generation ages.",
   style:"Masterful midfield control and game management.",
   star:"The evergreen Luka Modrić, still orchestrating.",
   tags:{play:'balanced',tier:'contender',region:'europe',vibe:'winner',star:false}},
  {id:'gha',name:'Ghana',flag:'🇬🇭',meta:'Group L',
   blurb:"One of Africa's most storied sides, back and chasing redemption after a group-stage exit in 2022.",
   style:"Athletic and quick, dangerous on the break.",
   star:"A young, energetic core with Premier League experience.",
   tags:{play:'balanced',tier:'dark',region:'africa',vibe:'mid',star:false}},
  {id:'pan',name:'Panama',flag:'🇵🇦',meta:'Group L',
   blurb:"A plucky CONCACAF side at just their second World Cup, growing fast and unafraid of bigger names.",
   style:"Hard-working, organized, and physical.",
   star:"A tight-knit, experienced regional core.",
   tags:{play:'defense',tier:'longshot',region:'concacaf',vibe:'underdog',star:false}}
];

var grid=document.getElementById('teams-grid');
TEAMS.forEach(function(t,i){
  var b=document.createElement('button');
  b.className='team-chip';b.onclick=function(){openModal(i)};
  b.innerHTML='<div class="flag">'+t.flag+'</div><div class="tn">'+t.name+'</div><div class="meta">'+t.meta+'</div>';
  grid.appendChild(b);
});

function openModal(i){
  var t=TEAMS[i];
  document.getElementById('m-flag').textContent=t.flag;
  document.getElementById('m-name').textContent=t.name;
  document.getElementById('m-meta').textContent=t.meta;
  document.getElementById('m-blurb').textContent=t.blurb;
  document.getElementById('m-style').textContent=t.style;
  document.getElementById('m-star').textContent=t.star;
  document.getElementById('modal-bg').classList.add('open');
}
function closeModal(){document.getElementById('modal-bg').classList.remove('open');}
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeModal();});

/* ---------- find-your-team quiz ---------- */
function openTeamById(id){
  for(var i=0;i<TEAMS.length;i++){ if(TEAMS[i].id===id){ openModal(i); return; } }
}
var QUIZ=[
  {key:'play',q:'What kind of soccer do you want to watch?',opts:[
    {label:'⚡ Attacking fireworks',val:'attack'},
    {label:'🛡️ Rock-solid defense & grit',val:'defense'},
    {label:'⚖️ A bit of both',val:'balanced'}]},
  {key:'vibe',q:'Pick your storyline:',opts:[
    {label:'👑 A heavyweight favorite chasing glory',val:'fav'},
    {label:'📈 A rising team on the up',val:'rising'},
    {label:'🐎 A plucky underdog with nothing to lose',val:'underdog'}]},
  {key:'star',q:'Star power or team effort?',opts:[
    {label:'🌟 One must-watch superstar',val:'star'},
    {label:'🤝 A true collective',val:'team'}]},
  {key:'region',q:'Any part of the world calling your name?',opts:[
    {label:'🇪🇺 Europe',val:'europe'},
    {label:'🌎 South America',val:'samerica'},
    {label:'🌍 Africa',val:'africa'},
    {label:'🌏 Asia / Oceania',val:'asiaoc'},
    {label:'🏟️ North America',val:'concacaf'},
    {label:'🎲 Surprise me',val:'any'}]}
];
var quizStep=0, quizAns={};
function renderQuiz(){
  var body=document.getElementById('quiz-body');
  if(quizStep>=QUIZ.length){ showQuizResult(); return; }
  var qq=QUIZ[quizStep];
  var h='<div class="quiz-progress">Question '+(quizStep+1)+' of '+QUIZ.length+'</div>';
  h+='<div class="quiz-q">'+qq.q+'</div><div class="quiz-opts">';
  for(var i=0;i<qq.opts.length;i++){
    h+='<button class="quiz-opt" onclick="answerQuiz(\''+qq.key+'\',\''+qq.opts[i].val+'\')">'+qq.opts[i].label+'</button>';
  }
  h+='</div>';
  if(quizStep>0){ h+='<button class="quiz-back" onclick="quizBack()">← back</button>'; }
  body.innerHTML=h;
}
function answerQuiz(k,v){ quizAns[k]=v; quizStep++; renderQuiz(); }
function quizBack(){ if(quizStep>0){ quizStep--; } renderQuiz(); }
function restartQuiz(){ quizStep=0; quizAns={}; renderQuiz(); }
function regionMatch(r,ans){ if(ans==='any')return true; if(ans==='asiaoc')return r==='asia'||r==='oceania'; return r===ans; }
function scoreTeam(t){
  var s=0;
  if(quizAns.play && t.tags.play===quizAns.play) s+=3;
  if(quizAns.vibe){
    if(quizAns.vibe==='fav' && (t.tags.tier==='fav'||t.tags.tier==='contender')) s+=3;
    if(quizAns.vibe==='rising' && (t.tags.vibe==='rising'||t.tags.tier==='dark')) s+=3;
    if(quizAns.vibe==='underdog' && (t.tags.vibe==='underdog'||t.tags.tier==='longshot')) s+=3;
  }
  if(quizAns.star){ if(quizAns.star==='star' && t.tags.star) s+=3; if(quizAns.star==='team' && !t.tags.star) s+=2; }
  return s;
}
function showQuizResult(){
  var pool=TEAMS.filter(function(t){return regionMatch(t.tags.region,quizAns.region);});
  if(!pool.length) pool=TEAMS.slice();
  var scored=pool.map(function(t){return {t:t,s:scoreTeam(t)+Math.random()};});
  scored.sort(function(a,b){return b.s-a.s;});
  var pick=scored[0].t, alt=scored[1]?scored[1].t:null;
  var html='<div class="quiz-result">'
    +'<div class="qr-flag">'+pick.flag+'</div>'
    +'<div class="qr-pre">Your team to root for</div>'
    +'<h3>'+pick.name+'</h3>'
    +'<div class="qr-meta">'+pick.meta+'</div>'
    +'<p class="qr-why">'+pick.blurb+'</p>'
    +'<div class="quiz-btns">'
    +'<button class="quiz-btn primary" onclick="openTeamById(\''+pick.id+'\')">See full scouting report</button>'
    +'<button class="quiz-btn ghost" onclick="restartQuiz()">Retake quiz</button>'
    +'</div>';
  if(alt){ html+='<div class="qr-alt">Not feeling it? You also matched well with <button onclick="openTeamById(\''+alt.id+'\')">'+alt.name+'</button>.</div>'; }
  html+='</div>';
  document.getElementById('quiz-body').innerHTML=html;
}
renderQuiz();
</script>
