/* ==========================================================================
   Configuración del sitio.
   Para activar Firebase (artículos desde Firestore + suscripciones):
   1) Creá un proyecto en https://console.firebase.google.com y una app Web.
   2) Pegá abajo los datos de `firebaseConfig`.
   3) Poné useFirebase: true.
   Colecciones esperadas: "articulos" (ver README) y "suscriptores".
   ========================================================================== */
window.SEMILLA_CONFIG = {
  useFirebase: false,
  contactEmail: "equipo@semilla.com.ar",
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  }
};
