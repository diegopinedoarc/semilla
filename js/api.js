/* ==========================================================================
   Capa de datos. Hoy lee js/data.js; con Firebase activado lee Firestore.
   Las páginas solo usan getArticles(), getArticle(slug) y subscribe(email).
   ========================================================================== */
(function () {
  const cfg = window.SEMILLA_CONFIG || {};
  let fbPromise = null;

  function firebase() {
    if (!fbPromise) {
      const v = "10.14.1";
      fbPromise = Promise.all([
        import(`https://www.gstatic.com/firebasejs/${v}/firebase-app.js`),
        import(`https://www.gstatic.com/firebasejs/${v}/firebase-firestore.js`)
      ]).then(([app, fs]) => {
        const a = app.initializeApp(cfg.firebase);
        return { db: fs.getFirestore(a), fs };
      });
    }
    return fbPromise;
  }

  const byDateDesc = (a, b) => (a.fecha < b.fecha ? 1 : -1);

  async function getArticles() {
    if (cfg.useFirebase) {
      try {
        const { db, fs } = await firebase();
        const snap = await fs.getDocs(fs.query(fs.collection(db, "articulos"), fs.orderBy("fecha", "desc")));
        return snap.docs.map(d => ({ slug: d.id, ...d.data() }));
      } catch (e) {
        console.error("Firestore falló, uso datos locales:", e);
      }
    }
    return [...(window.SEMILLA_ARTICLES || [])].sort(byDateDesc);
  }

  async function getArticle(slug) {
    const all = await getArticles();
    return all.find(a => a.slug === slug) || null;
  }

  /* Suscripción: con Firebase guarda en "suscriptores"; sin Firebase abre el
     correo del usuario con un mensaje pre-armado (funciona sin backend). */
  async function subscribe(email) {
    if (cfg.useFirebase) {
      const { db, fs } = await firebase();
      await fs.addDoc(fs.collection(db, "suscriptores"), { email, creado: fs.serverTimestamp() });
      return { ok: true, mode: "firebase" };
    }
    const to = cfg.contactEmail || "equipo@semilla.com.ar";
    const subject = encodeURIComponent("Quiero suscribirme a SEMILLA");
    const body = encodeURIComponent(`Hola, quiero recibir novedades de SEMILLA en: ${email}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    return { ok: true, mode: "mailto" };
  }

  window.SemillaAPI = { getArticles, getArticle, subscribe };
})();
