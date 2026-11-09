/* Interacciones globales: header, menú móvil, animaciones de entrada, newsletter. */
(function () {
  const header = document.getElementById("site-header");
  const onScroll = () => header.classList.toggle("is-solid", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Menú móvil
  const burger = document.getElementById("burger");
  const panel = document.getElementById("offcanvas");
  const scrim = document.getElementById("scrim");
  const setMenu = open => {
    panel.classList.toggle("is-open", open);
    scrim.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  };
  burger.addEventListener("click", () => setMenu(true));
  document.getElementById("offclose").addEventListener("click", () => setMenu(false));
  scrim.addEventListener("click", () => setMenu(false));
  panel.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

  document.getElementById("year").textContent = new Date().getFullYear();

  // Newsletter (todos los formularios con data-newsletter)
  document.querySelectorAll("form[data-newsletter]").forEach(form => {
    form.addEventListener("submit", async e => {
      e.preventDefault();
      const msg = form.querySelector(".form-msg");
      const email = form.email.value.trim();
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        msg.textContent = "Revisá el email, parece incompleto.";
        return;
      }
      try {
        const r = await window.SemillaAPI.subscribe(email);
        msg.textContent = r.mode === "mailto"
          ? "Se abrió tu correo con el mensaje listo para enviar."
          : "¡Listo! Te sumamos a la lista.";
        if (r.mode === "firebase") form.reset();
      } catch (err) {
        console.error(err);
        msg.textContent = "No pudimos registrarte ahora. Probá de nuevo en un rato.";
      }
    });
  });

  // Reveal on scroll
  const els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
  } else {
    els.forEach(el => el.classList.add("is-in"));
  }
})();

/* Helpers compartidos para renderizar artículos */
window.SemillaUI = (function () {
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const catName = k => (window.SEMILLA_CATEGORIAS || {})[k] || k;
  const fmtDate = iso => {
    const d = new Date(iso + "T12:00:00");
    return isNaN(d) ? "" : d.toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" });
  };
  const url = a => `articulo.html?slug=${encodeURIComponent(a.slug)}`;
  const media = a => a.imagen ? `<img src="${esc(a.imagen)}" alt="" loading="lazy">` : "";

  function card(a) {
    return `
    <article class="card reveal">
      <a class="card__media cat-${esc(a.categoria)}" href="${url(a)}" tabindex="-1" aria-hidden="true">
        ${media(a)}
        <span class="badge">${esc(catName(a.categoria))}</span>
      </a>
      <div class="card__body">
        <div class="card__meta"><span>${esc(fmtDate(a.fecha))}</span><span>${esc(a.lectura)} min</span>${a.ejemplo ? '<span class="badge badge--ghost">Ejemplo</span>' : ""}</div>
        <h3 class="card__title"><a href="${url(a)}">${esc(a.titulo)}</a></h3>
        <p class="card__excerpt">${esc(a.bajada)}</p>
        <a class="link-arrow" href="${url(a)}">Leer nota →</a>
      </div>
    </article>`;
  }

  function featured(a) {
    return `
    <article class="featured reveal">
      <div class="featured__media cat-${esc(a.categoria)}">${media(a)}</div>
      <div class="featured__body">
        <span class="badge badge--gold" style="align-self:flex-start">Destacado · ${esc(catName(a.categoria))}</span>
        <h2><a href="${url(a)}">${esc(a.titulo)}</a></h2>
        <p>${esc(a.bajada)}</p>
        <div class="card__meta"><span>${esc(fmtDate(a.fecha))}</span><span>${esc(a.lectura)} min de lectura</span></div>
        <a class="btn" style="align-self:flex-start" href="${url(a)}">Leer nota</a>
      </div>
    </article>`;
  }

  return { esc, catName, fmtDate, url, card, featured };
})();
