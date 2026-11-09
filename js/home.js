/* Landing: últimas notas de Actualidad */
(async function () {
  const slot = document.getElementById("latest");
  if (!slot) return;
  const all = await window.SemillaAPI.getArticles();
  slot.innerHTML = all.slice(0, 3).map(window.SemillaUI.card).join("");
  slot.querySelectorAll(".reveal").forEach(el => el.classList.add("is-in"));
})();
