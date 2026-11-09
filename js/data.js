/* ==========================================================================
   Artículos de ejemplo (Actualidad).
   >>> CONTENIDO DE EJEMPLO: reemplazar por los artículos reales. <<<
   Cuando actives Firebase, este archivo deja de usarse y los artículos se
   leen de la colección "articulos" de Firestore con estos mismos campos.

   Campos:
   slug      → identificador en la URL (articulo.html?slug=...)
   categoria → leyes | sostenibilidad | ambiente | empresas
   titulo, bajada, fecha (YYYY-MM-DD), lectura (minutos), autor
   imagen    → URL o ruta (ej: "img/articulos/mi-nota.jpg"). Vacío = fondo de color.
   destacado → true para mostrarlo grande arriba
   ejemplo   → true muestra la etiqueta "Contenido de ejemplo" (borrarla en notas reales)
   cuerpo    → lista de párrafos. Los que empiezan con "## " son subtítulos.
   ========================================================================== */
window.SEMILLA_CATEGORIAS = {
  leyes: "Leyes y normativas",
  sostenibilidad: "Sostenibilidad",
  ambiente: "Medio ambiente",
  empresas: "Empresas e impacto"
};

window.SEMILLA_ARTICLES = [
  {
    slug: "ley-general-del-ambiente-principios",
    categoria: "leyes",
    titulo: "La Ley General del Ambiente: los principios que ordenan todo lo demás",
    bajada: "Prevención, precaución, progresividad: una guía rápida de los principios de la Ley 25.675 y por qué importan al comunicar o decidir.",
    fecha: "2026-11-06",
    lectura: 4,
    autor: "Equipo SEMILLA",
    imagen: "",
    destacado: true,
    ejemplo: true,
    cuerpo: [
      "La Ley General del Ambiente (25.675) fija los presupuestos mínimos para una gestión sustentable del ambiente en Argentina. Más que una lista de prohibiciones, establece principios que sirven de brújula para interpretar el resto de las normas.",
      "## Los principios, en simple",
      "Entre los principios que enumera la ley están el de prevención (actuar antes de que el daño ocurra), el precautorio (no usar la falta de certeza científica como excusa para postergar medidas), la equidad intergeneracional, la progresividad, la responsabilidad y la sustentabilidad.",
      "## Por qué le importan a quien comunica o decide",
      "Si tu organización publica afirmaciones ambientales o toma decisiones que impactan en el territorio, entender estos principios ayuda a anticipar qué se espera de ella. Este es un texto de ejemplo: reemplazalo por una nota con fuentes y enlaces a la norma completa."
    ]
  },
  {
    slug: "claims-verdes-comunicar-sin-exagerar",
    categoria: "empresas",
    titulo: "Claims verdes: cómo comunicar impacto sin exagerar",
    bajada: "Criterios prácticos para que una afirmación ambiental sea específica, verificable y fácil de respaldar.",
    fecha: "2026-11-03",
    lectura: 5,
    autor: "Equipo SEMILLA",
    imagen: "",
    destacado: false,
    ejemplo: true,
    cuerpo: [
      "Un claim verde es cualquier afirmación sobre el beneficio ambiental de un producto, servicio o empresa. Cuanto más vaga es la frase, más difícil resulta sostenerla frente a un cliente, un periodista o un regulador.",
      "## Tres preguntas antes de publicar",
      "¿Es específica? (qué mejora, respecto de qué). ¿Se puede demostrar? (con datos, certificaciones o informes accesibles). ¿Es completa? (no oculta impactos relevantes que no se mencionan).",
      "Texto de ejemplo: la idea es que esta sección se complete con la guía real y el checklist descargable."
    ]
  },
  {
    slug: "economia-circular-de-la-idea-a-la-practica",
    categoria: "sostenibilidad",
    titulo: "Economía circular: de la idea a la práctica",
    bajada: "Qué cambia cuando se diseña pensando en reparar, reutilizar y reciclar, y por dónde empezar en una organización chica.",
    fecha: "2026-10-30",
    lectura: 6,
    autor: "Equipo SEMILLA",
    imagen: "",
    destacado: false,
    ejemplo: true,
    cuerpo: [
      "La economía circular propone mantener los materiales en uso el mayor tiempo posible, en lugar del esquema lineal de extraer, producir, usar y desechar.",
      "## Por dónde empezar",
      "No hace falta rediseñar toda la empresa: se puede arrancar mapeando qué residuos se generan, cuáles tienen valor para otros y qué proveedores admiten devolución de envases o repuestos.",
      "Texto de ejemplo para completar con casos locales y entrevistas."
    ]
  },
  {
    slug: "biodiversidad-por-que-importa",
    categoria: "ambiente",
    titulo: "Biodiversidad: por qué importa en las decisiones de todos los días",
    bajada: "La variedad de especies y ecosistemas sostiene el agua, el suelo y la producción de alimentos. Una introducción para no especialistas.",
    fecha: "2026-10-27",
    lectura: 4,
    autor: "Equipo SEMILLA",
    imagen: "",
    destacado: false,
    ejemplo: true,
    cuerpo: [
      "Hablar de biodiversidad no es solo hablar de especies emblemáticas. Incluye los servicios que los ecosistemas prestan: regular el agua, polinizar cultivos, proteger los suelos.",
      "Texto de ejemplo: incorporá acá datos y fuentes verificables, y enlaces a los informes que uses."
    ]
  },
  {
    slug: "residuos-quien-es-responsable-de-que",
    categoria: "leyes",
    titulo: "Residuos: quién es responsable de qué",
    bajada: "Domiciliarios, peligrosos, industriales: el marco legal distingue tipos de residuos y obligaciones distintas para cada uno.",
    fecha: "2026-10-22",
    lectura: 5,
    autor: "Equipo SEMILLA",
    imagen: "",
    destacado: false,
    ejemplo: true,
    cuerpo: [
      "En Argentina conviven normas nacionales de presupuestos mínimos, como la 25.916 (residuos domiciliarios) y la 24.051 (residuos peligrosos), con regulaciones provinciales y municipales.",
      "Texto de ejemplo: esta nota debería detallar qué corresponde a cada jurisdicción y qué obligaciones tiene cada actor, con citas a las normas vigentes."
    ]
  },
  {
    slug: "leer-un-reporte-de-sostenibilidad",
    categoria: "sostenibilidad",
    titulo: "Cómo leer un reporte de sostenibilidad en cinco preguntas",
    bajada: "Una lista corta para separar la información sólida del marketing, pensada para estudiantes, periodistas y equipos de compras.",
    fecha: "2026-10-18",
    lectura: 5,
    autor: "Equipo SEMILLA",
    imagen: "",
    destacado: false,
    ejemplo: true,
    cuerpo: [
      "Los reportes de sostenibilidad pueden ser extensos y difíciles de comparar. Un primer filtro es preguntarse qué se mide, con qué metodología, quién lo verifica y si hay metas con plazos.",
      "Texto de ejemplo para completar con una guía paso a paso."
    ]
  }
];
