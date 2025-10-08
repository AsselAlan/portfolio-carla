# Carla Lucero — Portfolio 2025

Landing page de portafolio minimalista, visual y responsive construida con React + Vite + Tailwind CSS.

## 🚀 Instalación

### Requisitos previos
- Node.js 18+ instalado
- npm o yarn

### Pasos para iniciar el proyecto

1. **Instalar dependencias**
```bash
npm install
```

2. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

3. **Construir para producción**
```bash
npm run build
```

Los archivos de producción se generarán en la carpeta `dist/`

4. **Vista previa de producción**
```bash
npm run preview
```

---

## 🎨 Personalización

### 1. Cambiar colores de marca

Edita los tokens de color en **`tailwind.config.js`**:

```javascript
colors: {
  brand: {
    primary: '#FFB300',    // ← Reemplazar con tu color primario
    secondary: '#1C1C1E',  // ← Reemplazar con tu color secundario
    accent: '#E83E8C',     // ← Reemplazar con tu color de acento
  },
  // ... resto de colores
}
```

También puedes editar las CSS variables en **`src/index.css`**:

```css
:root {
  --brand-primary: #FFB300;
  --brand-secondary: #1C1C1E;
  --brand-accent: #E83E8C;
  /* ... */
}
```

### 2. Agregar imágenes reales

Reemplaza los placeholders en **`public/images/`** con tus propias imágenes:

**Estructura de carpeta de imágenes:**
```
public/images/
├── hero-mockup.jpg
├── og-image.jpg (para redes sociales)
├── branding_01.jpg → branding_06.jpg
├── kv_blackfriday.jpg + .gif
├── kv_sneakers.jpg + .gif
├── kv_verano.jpg
├── ml_ficha_01.jpg → ml_ficha_02.jpg
├── ml_carousel_01.jpg → ml_carousel_02.jpg
├── ml_landing_01.jpg
├── ux_ecommerce_01.jpg → ux_ecommerce_03.jpg
├── ux_dashboard_01.jpg → ux_dashboard_03.jpg
└── ux_onboarding_01.jpg → ux_onboarding_03.jpg
```

**Formatos recomendados:**
- JPG para fotografías
- PNG para gráficos con transparencia
- GIF para animaciones cortas
- WebP para mejor performance

**Optimización:**
- Usa herramientas como [TinyPNG](https://tinypng.com/) o [Squoosh](https://squoosh.app/)
- Dimensiones máximas recomendadas: 1920x1080px
- Peso objetivo: < 500KB por imagen

### 3. Actualizar información personal

#### Hero Section (`src/sections/Hero.jsx`)
```javascript
<h1>Tu Nombre</h1>
<p>Tu tagline profesional</p>
```

#### Proyectos de Branding (`src/sections/Branding.jsx`)
Edita el array `brandingProjects` con tus proyectos:
```javascript
const brandingProjects = [
  {
    id: 1,
    title: 'Nombre del Proyecto',
    description: 'Descripción breve',
    image: '/images/tu-imagen.jpg',
    tags: ['Tag1', 'Tag2'],
  },
  // ... más proyectos
];
```

#### Campañas (`src/sections/Campaigns.jsx`)
Edita el array `campaigns`:
```javascript
const campaigns = [
  {
    id: 1,
    title: 'Nombre Campaña',
    description: 'Descripción',
    keyVisual: '/images/kv.jpg',
    gif: '/images/kv.gif',
    deliverables: ['Item 1', 'Item 2'],
    tags: ['Tag1', 'Tag2']
  }
];
```

#### Herramientas (`src/sections/Tools.jsx`)
Actualiza tu nivel de dominio (1-5) en cada herramienta:
```javascript
const tools = {
  design: [
    { name: 'Photoshop', level: 5 },
    { name: 'Illustrator', level: 5 },
    // ...
  ]
};
```

#### Contacto (`src/sections/Contact.jsx`)
Actualiza email y redes sociales:
```javascript
<a href="mailto:tu@email.com">tu@email.com</a>
```

### 4. SEO y Meta Tags

Edita **`index.html`**:

```html
<title>Tu Nombre — Portfolio 2025</title>
<meta name="description" content="Tu descripción profesional" />
<meta property="og:title" content="Tu Nombre — Portfolio 2025" />
<meta property="og:url" content="https://tudominio.com" />
```

### 5. Enlaces a prototipos y recursos externos

- **UX/UI prototipos**: Edita las URLs en `src/sections/UXUI.jsx`
```javascript
prototypeUrl: 'https://figma.com/proto/TU-URL-AQUI'
```

- **Redes sociales**: Actualiza los links en `src/sections/Contact.jsx` y `src/components/Footer.jsx`

---

## 📦 Deploy

### Netlify (Recomendado)

1. Crea una cuenta en [Netlify](https://netlify.com)
2. Conecta tu repositorio de GitHub
3. Configuración de build:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy automático al hacer push

### Vercel

1. Instala Vercel CLI: `npm i -g vercel`
2. Ejecuta: `vercel`
3. Sigue las instrucciones

### GitHub Pages

1. Instala `gh-pages`: `npm install -D gh-pages`
2. Agrega al `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```
3. Ejecuta: `npm run deploy`

---

## 📁 Estructura del Proyecto

```
carla-portfolio/
├── public/
│   └── images/          # Todas las imágenes del portfolio
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── Navbar.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── Card.jsx
│   │   ├── CaseCard.jsx
│   │   ├── MLCard.jsx
│   │   ├── ToolBadge.jsx
│   │   ├── Modal.jsx
│   │   └── Footer.jsx
│   ├── sections/        # Secciones de la página
│   │   ├── Hero.jsx
│   │   ├── Branding.jsx
│   │   ├── Campaigns.jsx
│   │   ├── Retail.jsx
│   │   ├── UXUI.jsx
│   │   ├── Tools.jsx
│   │   └── Contact.jsx
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales + Tailwind
├── index.html           # HTML base con SEO
├── tailwind.config.js   # Configuración de Tailwind
├── vite.config.js       # Configuración de Vite
└── package.json         # Dependencias
```

---

## 🎯 Características

✅ **One-page** con navegación por anclas  
✅ **Responsive** perfecto (mobile, tablet, desktop)  
✅ **Accesible** (ARIA labels, navegación con teclado, contraste)  
✅ **SEO optimizado** (meta tags, Open Graph)  
✅ **Performance** (lazy loading, optimización de imágenes)  
✅ **Animaciones suaves** (transiciones CSS)  
✅ **Tokens de color** fáciles de modificar  
✅ **Sin dependencias externas** (solo React + Tailwind)  

---

## 🛠️ Stack Tecnológico

- **Framework:** React 18
- **Build tool:** Vite 5
- **Estilos:** Tailwind CSS 3
- **Fuentes:** Google Fonts (Inter + Playfair Display)

---

## 📝 Notas Importantes

### Lighthouse Score
- El proyecto está optimizado para alcanzar ≥90 en todas las métricas
- Usa `loading="lazy"` en todas las imágenes
- Las fuentes están preconectadas para mejor performance

### Accesibilidad
- Todos los botones tienen `aria-label`
- Imágenes con `alt` descriptivo
- Navegación con teclado funcional
- Contraste de colores conforme WCAG AA

### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

---

## 🐛 Troubleshooting

**Las imágenes no se muestran:**
- Verifica que estén en `public/images/`
- Revisa que las rutas sean correctas (con `/` al inicio)

**Los colores no cambian:**
- Reinicia el servidor de desarrollo después de editar `tailwind.config.js`
- Ejecuta `npm run build` para regenerar los estilos

**El formulario no funciona:**
- Actualmente es una simulación
- Para integrarlo, usa servicios como [Formspree](https://formspree.io/) o [EmailJS](https://www.emailjs.com/)

---

## 📞 Soporte

Si necesitas ayuda con el proyecto, contacta a través de:
- Email: hola@carlalucero.com
- LinkedIn: [linkedin.com/in/carlalucero](https://linkedin.com/in/carlalucero)

---

## 📄 Licencia

Este proyecto es de uso personal para Carla Lucero. Todos los derechos reservados © 2025.

---

**¡Listo para brillar! 🌟**
