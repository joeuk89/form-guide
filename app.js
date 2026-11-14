(() => {
  const EX = window.EXERCISES, DAYS = window.DAYS;
  const byId = Object.fromEntries(EX.map((e) => [e.id, e]));
  const app = document.getElementById("app");
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const today = new Date().getDay();
  const todayDay = DAYS.find((d) => d.day === today);
  let selected = todayDay ? todayDay.id : "all";
  let query = "";

  const allItems = (d) => d.items.concat(d.extra ? d.extra.items : []);
  const row = (e, n, dayId) => `
    <li><a class="row${e.big ? " big" : ""}" href="#/x/${e.id}${dayId ? "?d=" + dayId : ""}">
      <span class="n">${n}</span>
      <span><b>${esc(e.name)}</b><small>${esc(e.kit)}</small></span>
      <span class="go" aria-hidden="true">&rsaquo;</span>
    </a></li>`;

  function listHtml() {
    if (query) {
      const q = query.toLowerCase();
      const hits = EX.filter((e) => (e.name + " " + e.kit + " " + e.muscles).toLowerCase().includes(q));
      return hits.length
        ? `<ul class="list">${hits.map((e, i) => row(e, i + 1)).join("")}</ul>`
        : `<p class="empty">Nothing matches "${esc(query)}".</p>`;
    }
    if (selected === "all") {
      const sorted = EX.slice().sort((a, b) => a.name.localeCompare(b.name));
      return `<div class="dayhead"><h2>All exercises</h2><p>${EX.length} movements, A to Z</p></div>
        <ul class="list">${sorted.map((e, i) => row(e, i + 1)).join("")}</ul>`;
    }
    const d = DAYS.find((x) => x.id === selected);
    let html = `<div class="dayhead"><h2>${esc(d.title)}</h2>${d.note ? `<p>${esc(d.note)}</p>` : ""}</div>
      <ul class="list">${d.items.map((id, i) => row(byId[id], i + 1, d.id)).join("")}</ul>`;
    if (d.extra) {
      html += `<p class="label">${esc(d.extra.label)}</p>
        <ul class="list">${d.extra.items.map((id, i) => row(byId[id], d.items.length + i + 1, d.id)).join("")}</ul>`;
    }
    return html;
  }

  function home() {
    document.title = "Form Guide";
    const tabs = DAYS.map((d) =>
      `<button class="tab" role="tab" data-day="${d.id}" aria-selected="${selected === d.id}">${d.short}${d.day === today ? '<span class="dot" title="Today"></span>' : ""}</button>`
    ).join("") + `<button class="tab" role="tab" data-day="all" aria-selected="${selected === "all"}">A&ndash;Z</button>`;
    const five = EX.filter((e) => e.big).map((e) => `<a href="#/x/${e.id}">${esc(e.name.replace("Overhead Press", "OHP"))}</a>`).join("");
    app.innerHTML = `
      <header class="brand"><h1>Form <span>Guide</span></h1><small>${todayDay ? "Today: " + esc(todayDay.short) : "Rest day"}</small></header>
      <input class="search" type="search" placeholder="Search exercises or muscles" aria-label="Search exercises" value="${esc(query)}">
      <p class="label">The five</p>
      <nav class="five" aria-label="The five main lifts">${five}</nav>
      <p class="label">Sessions</p>
      <div class="tabs" role="tablist">${tabs}</div>
      <div id="list">${listHtml()}</div>
      <div class="note"><p class="label">Every session</p><ul>${window.SESSION_WARMUP.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>`;
    const list = app.querySelector("#list");
    app.querySelector(".search").addEventListener("input", (ev) => { query = ev.target.value.trim(); list.innerHTML = listHtml(); });
    app.querySelector(".tabs").addEventListener("click", (ev) => {
      const b = ev.target.closest(".tab"); if (!b) return;
      selected = b.dataset.day; query = ""; app.querySelector(".search").value = "";
      app.querySelectorAll(".tab").forEach((t) => t.setAttribute("aria-selected", t === b));
      list.innerHTML = listHtml();
    });
    const sel = app.querySelector('.tab[aria-selected="true"]');
    if (sel && sel.scrollIntoView) sel.scrollIntoView({ block: "nearest", inline: "center" });
  }

  const ol = (cls, items) => `<ol class="${cls}">${items.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>`;
  const ul = (cls, items) => `<ul class="${cls}">${items.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>`;

  function exercise(id, dayId) {
    const e = byId[id];
    if (!e) return home();
    document.title = e.name + " · Form Guide";
    const d = DAYS.find((x) => x.id === dayId);
    let pager = "";
    if (d) {
      const items = allItems(d), i = items.indexOf(id);
      const prev = byId[items[i - 1]], next = byId[items[i + 1]];
      pager = `<nav class="pager" aria-label="Session order">
        ${prev ? `<a class="prev" href="#/x/${prev.id}?d=${d.id}"><small>&lsaquo; Previous</small><b>${esc(prev.name)}</b></a>` : ""}
        ${next ? `<a class="next" href="#/x/${next.id}?d=${d.id}"><small>Next &rsaquo;</small><b>${esc(next.name)}</b></a>` : ""}
      </nav>`;
    }
    app.innerHTML = `
      <div class="top"><a class="back" href="#/">&lsaquo; All sessions</a>${d ? `<span class="crumb">${esc(d.short)} &middot; ${esc(d.title)}</span>` : ""}</div>
      ${e.big ? '<span class="badge">One of the five</span>' : ""}
      <h1 class="title">${esc(e.name)}</h1>
      <p class="meta">${esc(e.kit)} &middot; ${esc(e.muscles)}</p>
      <nav class="jump" aria-label="Jump to">
        <a href="#cues" data-jump>Cues</a><a href="#warmup" data-jump>Warm-up</a><a href="#setup" data-jump>Set-up</a>
        <a href="#rep" data-jump>The rep</a><a href="#mistakes" data-jump>Mistakes</a><a href="#video" data-jump>Video</a>
      </nav>
      <section id="cues"><h2>Cues</h2>${ol("cues", e.cues)}</section>
      <section id="see"><h2>Picture this</h2><p class="see">${esc(e.see)}</p></section>
      <section id="warmup"><h2>Warm-up</h2>${ul("warm", e.warmup)}</section>
      <section id="setup"><h2>Set-up</h2>${ol("steps", e.setup)}</section>
      <section id="rep"><h2>The rep</h2>${ol("steps", e.rep)}</section>
      <section id="mistakes"><h2>Common mistakes</h2>${ul("bad", e.mistakes)}</section>
      <section id="video"><h2>Watch it</h2>
        <a class="video" href="https://youtu.be/${e.video.id}" target="_blank" rel="noopener">
          <span class="play" aria-hidden="true">&#9654;</span>
          <span><b>Form demo, ${esc(e.video.len)}</b><small>${esc(e.video.by)} on YouTube</small></span>
        </a>
      </section>
      ${pager}`;
    app.querySelectorAll("[data-jump]").forEach((a) => a.addEventListener("click", (ev) => {
      ev.preventDefault();
      document.getElementById(a.getAttribute("href").slice(1)).scrollIntoView();
    }));
    window.scrollTo(0, 0);
  }

  function route() {
    const m = location.hash.match(/^#\/x\/([a-z0-9-]+)(?:\?d=([a-z]+))?/);
    if (m) exercise(m[1], m[2]); else home();
  }
  window.addEventListener("hashchange", route);
  route();

  if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
})();
