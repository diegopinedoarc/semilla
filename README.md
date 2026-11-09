# SEMILLA — sitio web

Sitio estático (HTML + CSS + JS, sin build). Estilo inspirado en symbiosisnature.com: hero a pantalla completa, header transparente, titulares serif, botones dorados tipo píldora.

## Estructura

```
index.html          Landing
actualidad.html     Listado de notas (destacado, filtros por tema, búsqueda)
articulo.html       Detalle de una nota (?slug=...)
proximamente.html   Placeholder de secciones aún sin construir
css/style.css       Estilos y variables (colores en :root)
js/config.js        Configuración (Firebase on/off, email de contacto)
js/data.js          Notas de EJEMPLO (reemplazar)
js/api.js           Capa de datos: local o Firestore
js/layout.js        Header y footer compartidos (menú y links en un solo lugar)
img/                Fotos (ver img/LEEME.txt)
vercel.json         URLs limpias y headers básicos
```

## Probar en local

Abrí `index.html` en el navegador, o: `npx serve .`

## Subir a GitHub y Vercel

```bash
git init
git add .
git commit -m "Primera versión del sitio SEMILLA"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/semilla.git
git push -u origin main
```

En Vercel: *Add New → Project → importar el repo*. Framework: **Other**. Sin comando de build; directorio de salida: raíz (`./`).

## Agregar una nota

Sin Firebase: sumá un objeto en `js/data.js` (campos explicados arriba del archivo).
Quitá `ejemplo: true` en las notas reales.

## Activar Firebase (opcional)

1. Proyecto en Firebase + app Web → pegar `firebaseConfig` en `js/config.js` y poner `useFirebase: true`.
2. Firestore: colección `articulos` con **ID de documento = slug** y los mismos campos de `data.js` (`cuerpo` como array de strings).
3. Reglas sugeridas:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{db}/documents {
    match /articulos/{id} { allow read: if true; allow write: if false; }
    match /suscriptores/{id} { allow create: if request.resource.data.keys().hasOnly(['email','creado']); }
  }
}
```

Sin Firebase, el formulario de suscripción abre el correo del usuario hacia `equipo@semilla.com.ar`.

## Pendiente / a completar

- Fotos reales (hero, secciones, notas).
- Links de redes sociales (hoy `#` en `js/layout.js`).
- Páginas legales (Términos y Privacidad): hoy apuntan a "próximamente".
- Teléfono y dirección: se omitieron porque en el Wix actual parecen de ejemplo.
- Resto de secciones: Campañas, Casos y entrevistas, Datos e investigación, Tendencias y alianzas, Para vos, Recursos.
# semilla
