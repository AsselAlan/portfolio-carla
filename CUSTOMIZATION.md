# 🎨 Guía Rápida de Personalización

Esta guía te llevará paso a paso para personalizar el portfolio con tu información en menos de 30 minutos.

## ⚡ Inicio Rápido (5 minutos)

### 1. Instalar el proyecto
```bash
cd "C:\Users\Alan\Desktop\Portafolio Carla"
npm install
npm run dev
```

Abre `http://localhost:5173` en tu navegador.

---

## 🎨 Cambios Visuales Principales (10 minutos)

### Paso 1: Cambiar los colores de marca

**Archivo:** `tailwind.config.js`

```javascript
colors: {
  brand: {
    primary: '#TU_COLOR_PRINCIPAL',    // ej: #FF6B6B
    secondary: '#TU_COLOR_SECUNDARIO', // ej: #2C3E50
    accent: '#TU_COLOR_ACENTO',        // ej: #4ECDC4
  },
}
```

**¿Cómo elegir colores?**
- Usa [Coolors.co](https://coolors.co/) para generar paletas
- Extrae colores de tu logo con [ImageColorPicker](https://imagecolorpicker.com/)
- Prueba combinaciones con [Adobe Color](https://color.adobe.com/)

### Paso 2: Cambiar tipografías (Opcional)

**Archivo:** `index.html` - línea 25

Busca otras fuentes en [Google Fonts](https://fonts.google.com/):

```html
<link href="https://fonts.googleapis.com/css2?family=TU_FUENTE:wght@300;400;600;700&display=swap" rel="stylesheet">
```

Luego actualiza en `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Tu Fuente Sans', 'system-ui', 'sans-serif'],
  display: ['Tu Fuente Display', 'serif'],
},
```

---

## ✏️ Cambios de Contenido (15 minutos)

### Paso 1: Información personal

**Archivo:** `src/sections/Hero.jsx`

```javascript
// Línea 18-22
<h1>TU NOMBRE</h1>
<p>Tu tagline profesional aquí</p>

// Línea 25
<p>Tu descripción breve</p>

// Línea 38-52 (opcional: cambiar estadísticas)
<p className="text-3xl">5+</p>
<p className="text-sm">Años de experiencia</p>
```

### Paso 2: Datos de contacto

**Archivo:** `src/sections/Contact.jsx`

```javascript
// Línea 150-152
<a href="mailto:TU@EMAIL.com">
  TU@EMAIL.com
</a>

// Línea 161-164 (Redes sociales)
href="https://instagram.com/TU_USUARIO"
href="https://behance.net/TU_USUARIO"
href="https://linkedin.com/in/TU_USUARIO"
```

**Archivo:** `src/components/Footer.jsx`

```javascript
// Línea 35-41
<a href="mailto:TU@EMAIL.com">
<a href="tel:+54_TU_TELEFONO">

// Línea 55-67 (Redes en footer)
href="https://instagram.com/TU_USUARIO"
```

### Paso 3: SEO y Metadatos

**Archivo:** `index.html`

```html
<!-- Línea 8 -->
<title>Tu Nombre — Portfolio 2025</title>

<!-- Línea 9 -->
<meta name="description" content="Tu descripción profesional aquí" />

<!-- Línea 14-16 (Open Graph para redes sociales) -->
<meta property="og:title" content="Tu Nombre — Portfolio 2025" />
<meta property="og:url" content="https://tudominio.com" />
```

---

## 📸 Agregar tus Imágenes (Según disponibilidad)

### Opción A: Tienes las imágenes listas

1. **Coloca** todas tus imágenes en `public/images/`
2. **Renombra** según la [guía IMAGES.md](./IMAGES.md)
3. **Refresca** el navegador

### Opción B: Aún no tienes las imágenes

Usa placeholders temporales mientras preparas el contenido:

**Archivo:** Cualquier sección donde necesites placeholders

```javascript
// En lugar de:
image: '/images/branding_01.jpg'

// Usa temporalmente:
image: 'https://picsum.photos/1200/900?random=1'
```

**Generadores de placeholders:**
- `https://picsum.photos/ANCHO/ALTO?random=NUMERO`
- `https://placehold.co/ANCHOxALTO/FFB300/1C1C1E?text=Tu+Proyecto`

---

## 📝 Actualizar Proyectos

### Branding

**Archivo:** `src/sections/Branding.jsx` - línea 8

```javascript
const brandingProjects = [
  {
    id: 1,
    title: 'Nombre de Tu Proyecto',
    description: 'Descripción breve (máximo 2 líneas)',
    image: '/images/TU_IMAGEN.jpg',
    tags: ['Tag1', 'Tag2'],
  },
  // Agrega más proyectos...
];
```

**Tips:**
- Máximo 3 tags por proyecto
- Descripción: 80-120 caracteres
- Usa tags consistentes entre proyectos

### Campañas

**Archivo:** `src/sections/Campaigns.jsx` - línea 6

```javascript
const campaigns = [
  {
    id: 1,
    title: 'Nombre de Tu Campaña',
    description: 'Breve descripción del proyecto',
    keyVisual: '/images/TU_KV.jpg',
    gif: '/images/TU_ANIMACION.gif', // Opcional
    deliverables: [
      'Qué hiciste punto 1',
      'Qué hiciste punto 2',
      'Qué hiciste punto 3'
    ],
    tags: ['Tag1', 'Tag2', 'Tag3']
  },
  // Más campañas...
];
```

### Retail

**Archivo:** `src/sections/Retail.jsx` - línea 8

```javascript
const retailProjects = {
  fichas: [
    {
      id: 1,
      title: 'Nombre Ficha',
      description: 'Descripción',
      image: '/images/TU_FICHA.jpg',
      checklist: [
        'Característica UX 1',
        'Característica UX 2',
      ],
      type: 'ficha' // o 'carousel' o 'landing'
    },
  ],
  // ... repite para carousels y landing
};
```

### UX/UI

**Archivo:** `src/sections/UXUI.jsx` - línea 6

```javascript
const uxProjects = [
  {
    id: 1,
    title: 'Nombre del Proyecto',
    description: 'Descripción del flujo',
    screens: [
      '/images/PANTALLA_1.jpg',
      '/images/PANTALLA_2.jpg',
      '/images/PANTALLA_3.jpg'
    ],
    prototypeUrl: 'https://figma.com/proto/TU-LINK-AQUI'
  },
];
```

### Herramientas

**Archivo:** `src/sections/Tools.jsx` - línea 6

```javascript
const tools = {
  design: [
    { name: 'Photoshop', level: 5 },  // level: 1-5
    { name: 'Illustrator', level: 5 },
    // Agrega o quita herramientas...
  ],
  other: [
    // Herramientas complementarias
  ]
};
```

---

## 🚀 Deploy en 5 minutos

### Opción 1: Netlify (Recomendado)

1. Crea cuenta en [netlify.com](https://netlify.com)
2. Arrastra la carpeta del proyecto a Netlify Drop
3. ¡Listo! Tu sitio está online

### Opción 2: Vercel

1. Instala Vercel CLI: `npm i -g vercel`
2. En la terminal: `vercel`
3. Sigue las instrucciones

### Dominio personalizado (Opcional)

- Compra dominio en [Namecheap](https://namecheap.com) o [GoDaddy](https://godaddy.com)
- Conecta en configuración de Netlify/Vercel
- Espera propagación DNS (2-48 horas)

---

## ✅ Checklist Final

Antes de publicar, verifica:

- [ ] Todos los colores actualizados
- [ ] Nombre y tagline personalizados
- [ ] Email y teléfono correctos
- [ ] Links de redes sociales funcionando
- [ ] Al menos 3-4 proyectos por sección con contenido real
- [ ] Imágenes optimizadas (< 500KB cada una)
- [ ] Probado en móvil (responsive)
- [ ] Links a prototipos Figma funcionando
- [ ] Meta tags y SEO actualizados
- [ ] Favicon personalizado

---

## 🆘 Problemas Comunes

### "Las imágenes no se ven"
- Verifica que estén en `public/images/`
- Confirma que el nombre coincida exactamente
- Asegúrate que la ruta empiece con `/` → `/images/archivo.jpg`

### "Los colores no cambiaron"
- Reinicia el servidor: `Ctrl+C` y luego `npm run dev`
- Limpia caché del navegador: `Ctrl+Shift+R`

### "El sitio se ve mal en móvil"
- Todos los componentes son responsive por defecto
- Prueba con DevTools (F12) en modo responsive
- Verifica que no hayas modificado clases de Tailwind

### "El formulario de contacto no envía"
- Es una simulación. Para emails reales:
  - Usa [Formspree](https://formspree.io/) (gratis)
  - O [EmailJS](https://emailjs.com/)
  - Sigue sus tutoriales de integración

---

## 📚 Recursos Útiles

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev/)
- [Vite Docs](https://vitejs.dev/)
- [Figma](https://figma.com) - Para mockups y prototipos
- [Canva](https://canva.com) - Para diseño rápido

---

## 💬 ¿Preguntas?

Si te atascas:
1. Revisa el [README.md](./README.md) completo
2. Consulta [IMAGES.md](./IMAGES.md) para imágenes
3. Busca el error en Google (99% ya está resuelto)
4. Pregunta en comunidades: Reddit r/webdev, Stack Overflow

---

**¡Éxito con tu portfolio! 🚀✨**
