/* Header, menú móvil y footer compartidos. Editar acá para cambiarlos en todo el sitio. */
(function () {
  const cfg = window.SEMILLA_CONFIG || {};
  const page = document.body.dataset.page || "";

  const NAV = [
    { id: "actualidad", label: "Actualidad", href: "actualidad.html" },
    { id: "campanas", label: "Campañas", href: "proximamente.html?s=campanas" },
    { id: "casos", label: "Casos y entrevistas", href: "proximamente.html?s=casos" },
    { id: "datos", label: "Datos e investigación", href: "proximamente.html?s=datos" },
    { id: "tendencias", label: "Tendencias y alianzas", href: "proximamente.html?s=tendencias" }
  ];
  const PARA_VOS = [
    { label: "Empresas", href: "proximamente.html?s=empresas" },
    { label: "ONGs", href: "proximamente.html?s=ongs" },
    { label: "Profesionales", href: "proximamente.html?s=profesionales" },
    { label: "Estudiantes", href: "proximamente.html?s=estudiantes" }
  ];

  const seed = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2c4.6 3.1 6.6 7.1 6.6 11a6.6 6.6 0 0 1-13.2 0C5.4 9.1 7.4 5.1 12 2z" fill="currentColor"/><path d="M12 9v12" stroke="#0f241b" stroke-width="1.6" stroke-linecap="round"/></svg>`;
  const logo = `<a class="logo" href="index.html" aria-label="SEMILLA, inicio">${seed}<span>semilla</span></a>`;

  const link = n => `<a href="${n.href}"${n.id === page ? ' aria-current="page"' : ""}>${n.label}</a>`;

  const header = `
  <a class="skip-link" href="#contenido">Ir al contenido</a>
  <header class="site-header" id="site-header">
    <div class="wrap">
      ${logo}
      <nav class="nav" aria-label="Principal">
        ${NAV.map(link).join("")}
        <div class="nav__drop">
          <button class="nav__drop-btn" aria-haspopup="true">Para vos ▾</button>
          <div class="nav__drop-menu">${PARA_VOS.map(n => `<a href="${n.href}">${n.label}</a>`).join("")}</div>
        </div>
        <a class="btn btn--sm" href="index.html#suscribite">Suscribite</a>
      </nav>
      <button class="burger" id="burger" aria-label="Abrir menú" aria-expanded="false"><span></span><span></span></button>
    </div>
  </header>
  <div class="scrim" id="scrim"></div>
  <aside class="offcanvas" id="offcanvas" aria-label="Menú">
    <button class="offcanvas__close" id="offclose" aria-label="Cerrar menú">×</button>
    ${logo}
    ${NAV.map(link).join("")}
    <a href="#" class="sub-title" style="border:0;color:#b99a4f;font-size:1rem;font-family:var(--font-sans);letter-spacing:.15em;text-transform:uppercase;margin-top:10px">Para vos</a>
    ${PARA_VOS.map(n => `<a class="sub" href="${n.href}">${n.label}</a>`).join("")}
    <a class="btn" style="margin-top:20px;font-family:var(--font-sans);font-size:.95rem;border-bottom:1px solid var(--gold)" href="index.html#suscribite">Suscribite</a>
  </aside>`;

  const social = (label, path) =>
    `<a href="#" aria-label="${label}" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${path}</svg></a>`;

  const footer = `
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer__grid">
        <div>
          <a class="logo" href="index.html">${seed}<span>semilla</span></a>
          <p>Las ideas también se cultivan. Información que conecta, evidencia que ayuda a decidir.</p>
          <p><a href="mailto:${cfg.contactEmail || ""}">${cfg.contactEmail || ""}</a><br>Buenos Aires, Argentina</p>
          <div class="social">
            ${social("Instagram", '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/>')}
            ${social("LinkedIn", '<path d="M6 9v10M6 5.5v.01M10 19V9m0 4c0-2 1.5-4 4-4s3.5 1.6 3.5 4v6"/>')}
            ${social("YouTube", '<rect x="3" y="6" width="18" height="12" rx="4"/><path d="m10.5 9.5 4 2.5-4 2.5z" fill="currentColor"/>')}
          </div>
        </div>
        <div>
          <h4>Explorar</h4>
          <ul>
            ${NAV.map(n => `<li><a href="${n.href}">${n.label}</a></li>`).join("")}
          </ul>
        </div>
        <div>
          <h4>Recibí novedades</h4>
          <form class="form" data-newsletter novalidate>
            <div class="row">
              <input type="email" name="email" placeholder="Tu email" required aria-label="Tu email" autocomplete="email">
              <button class="btn btn--sm" type="submit">Suscribirme</button>
            </div>
            <div class="form-msg" role="status" aria-live="polite"></div>
          </form>
        </div>
      </div>
      <div class="footer__bottom">
        <span>© <span id="year"></span> SEMILLA. Todos los derechos reservados.</span>
        <nav aria-label="Legal">
          <a href="proximamente.html?s=terminos">Términos y condiciones</a>
          <a href="proximamente.html?s=privacidad">Política de privacidad</a>
        </nav>
      </div>
    </div>
  </footer>`;

  document.getElementById("site-header-slot").outerHTML = header;
  document.getElementById("site-footer-slot").outerHTML = footer;
})();
