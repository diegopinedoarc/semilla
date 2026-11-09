/* Detalle de una nota: articulo.html?slug=... */
(async function () {
  const UI = window.SemillaUI;
  const slug = new URLSearchParams(location.search).get("slug");
  const head = document.getElementById("a-head");
  const body = document.getElementById("a-body");
  const rel = document.getElementById("related");

  const all = await window.SemillaAPI.getArticles();
  const a = all.find(x => x.slug === slug);

  if (!a) {
    document.title = "Nota no encontrada | SEMILLA";
    head.innerHTML = `<span class="eyebrow">Actualidad</span><h1>No encontramos esa nota</h1><p class="lead">Puede que el enlace esté incompleto o que la nota ya no esté disponible.</p>`;
    body.innerHTML = `<a class="btn btn--dark" href="actualidad.html">Volver a Actualidad</a>`;
    return;
  }

  document.title = `${a.titulo} | SEMILLA`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.content = a.bajada;

  head.innerHTML = `
    <a class="eyebrow" href="actualidad.html?cat=${UI.esc(a.categoria)}">${UI.esc(UI.catName(a.categoria))}</a>
    <h1>${UI.esc(a.titulo)}</h1>
    <p class="lead">${UI.esc(a.bajada)}</p>
    <div class="card__meta" style="color:rgba(255,255,255,.65);margin-top:22px">
      <span>${UI.esc(UI.fmtDate(a.fecha))}</span><span>${UI.esc(a.lectura)} min de lectura</span><span>Por ${UI.esc(a.autor || "SEMILLA")}</span>
    </div>`;

  const html = (a.cuerpo || []).map(p => p.startsWith("## ") ? `<h2>${UI.esc(p.slice(3))}</h2>` : `<p>${UI.esc(p)}</p>`).join("");
  body.innerHTML =
    (a.ejemplo ? `<div class="notice">Contenido de ejemplo: reemplazar por la nota real.</div>` : "") + html;

  const others = all.filter(x => x.slug !== a.slug);
  const same = others.filter(x => x.categoria === a.categoria);
  const picks = [...same, ...others.filter(x => x.categoria !== a.categoria)].slice(0, 3);
  rel.innerHTML = picks.map(UI.card).join("");
  document.querySelectorAll(".reveal").forEach(el => el.classList.add("is-in"));

  document.getElementById("copy").addEventListener("click", async e => {
    try { await navigator.clipboard.writeText(location.href); e.target.textContent = "Enlace copiado ✓"; }
    catch { e.target.textContent = "Copiá el enlace desde la barra"; }
  });
})();
