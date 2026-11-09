/* Actualidad: destacado + filtros por categoría + búsqueda */
(async function () {
  const UI = window.SemillaUI;
  const grid = document.getElementById("grid");
  const featuredSlot = document.getElementById("featured");
  const chipsSlot = document.getElementById("chips");
  const search = document.getElementById("q");
  const count = document.getElementById("count");

  const all = await window.SemillaAPI.getArticles();
  const cats = window.SEMILLA_CATEGORIAS;
  const params = new URLSearchParams(location.search);
  let cat = cats[params.get("cat")] ? params.get("cat") : "todas";
  let q = "";

  chipsSlot.innerHTML =
    `<button class="chip" data-cat="todas" aria-pressed="false">Todas</button>` +
    Object.entries(cats).map(([k, v]) => `<button class="chip" data-cat="${k}" aria-pressed="false">${v}</button>`).join("");

  const norm = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

  function render() {
    chipsSlot.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-pressed", String(c.dataset.cat === cat)));
    const filtered = all.filter(a =>
      (cat === "todas" || a.categoria === cat) &&
      (!q || norm(a.titulo + " " + a.bajada).includes(norm(q)))
    );

    // El destacado solo aparece en la vista sin filtros
    const showFeatured = cat === "todas" && !q;
    const feat = showFeatured ? (filtered.find(a => a.destacado) || null) : null;
    featuredSlot.innerHTML = feat ? UI.featured(feat) : "";
    const rest = feat ? filtered.filter(a => a !== feat) : filtered;

    grid.innerHTML = rest.length
      ? rest.map(UI.card).join("")
      : (feat ? "" : `<p class="empty" style="grid-column:1/-1">No encontramos notas con ese criterio.</p>`);
    count.textContent = `${filtered.length} ${filtered.length === 1 ? "nota" : "notas"}`;

    document.querySelectorAll(".reveal").forEach(el => el.classList.add("is-in"));
  }

  chipsSlot.addEventListener("click", e => {
    const b = e.target.closest(".chip");
    if (!b) return;
    cat = b.dataset.cat;
    const u = new URL(location);
    cat === "todas" ? u.searchParams.delete("cat") : u.searchParams.set("cat", cat);
    history.replaceState(null, "", u);
    render();
  });
  search.addEventListener("input", () => { q = search.value.trim(); render(); });

  render();
})();
