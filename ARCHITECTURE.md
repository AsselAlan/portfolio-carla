# 🏗️ Arquitectura del Proyecto

Guía visual de la estructura de componentes y flujo de datos del portfolio.

---

## 📊 Jerarquía de Componentes

```
App.jsx
│
├── Navbar (fixed)
│   ├── Logo "CL"
│   ├── Nav Items (7)
│   └── Mobile Menu Button
│
├── main
│   │
│   ├── Hero
│   │   ├── Título + Tagline
│   │   ├── Descripción
│   │   ├── CTAs (2 botones)
│   │   └── Stats (3 métricas)
│   │
│   ├── Branding
│   │   ├── SectionHeader
│   │   ├── GalleryGrid
│   │   │   └── Card (x6)
│   │   │       ├── Imagen
│   │   │       ├── Título
│   │   │       ├── Descripción
│   │   │       └── Tags
│   │   ├── Button "Ver más"
│   │   └── Modal (condicional)
│   │
│   ├── Campaigns
│   │   ├── SectionHeader
│   │   ├── Grid
│   │   │   └── CaseCard (x3)
│   │   │       ├── Key Visual
│   │   │       ├── Título + Descripción
│   │   │       ├── Deliverables List
│   │   │       ├── Mini Thumbnails
│   │   │       └── Tags
│   │   └── Process Card
│   │       └── Steps (x3)
│   │
│   ├── Retail
│   │   ├── SectionHeader
│   │   ├── Tabs Navigation (x3)
│   │   ├── Grid (dinámico)
│   │   │   └── MLCard (variable)
│   │   │       ├── Imagen
│   │   │       ├── Type Badge
│   │   │       ├── Título + Descripción
│   │   │       └── Checklist UX
│   │   └── UX Note Card
│   │
│   ├── UXUI
│   │   ├── SectionHeader
│   │   ├── Projects List (x3)
│   │   │   └── Card
│   │   │       ├── Contenido (izq)
│   │   │       │   ├── Título
│   │   │       │   ├── Descripción
│   │   │       │   └── Link Prototipo
│   │   │       └── Screenshots (der)
│   │   │           └── Image (x3)
│   │   └── Handoff Card
│   │       └── Deliverables List
│   │
│   ├── Tools
│   │   ├── SectionHeader (center)
│   │   ├── Main Tools Grid
│   │   │   └── ToolBadge (x6)
│   │   │       ├── Icon
│   │   │       ├── Nombre
│   │   │       └── Level Bars
│   │   ├── Other Tools Grid
│   │   │   └── ToolBadge (x4)
│   │   └── Skills Card
│   │       └── Badge Pills (x6)
│   │
│   └── Contact
│       ├── SectionHeader (center)
│       ├── Form Card
│       │   ├── Input: Nombre
│       │   ├── Input: Email
│       │   ├── Textarea: Mensaje
│       │   ├── Button: Enviar
│       │   └── Mailto Link
│       └── Social Links (x3)
│
└── Footer
    ├── Brand Info
    ├── Quick Links
    ├── Contact Info
    └── Social Media
```

---

## 🔄 Flujo de Navegación

```
Usuario entra → Hero
                 ↓
         [Click "Ver trabajos"]
                 ↓
              Branding
                 ↓
         [Scroll / Nav click]
                 ↓
              Campañas
                 ↓
         [Scroll / Nav click]
                 ↓
               Retail
                 ↓
         [Tabs: Fichas / Carruseles / Landing]
                 ↓
         [Scroll / Nav click]
                 ↓
               UX/UI
                 ↓
         [Click "Abrir prototipo" → Figma]
                 ↓
         [Scroll / Nav click]
                 ↓
            Herramientas
                 ↓
         [Scroll / Nav click]
                 ↓
             Contacto
                 ↓
    [Formulario → Email / Redes]
```

---

## 🧩 Componentes Reutilizables

### Base Components

| Componente | Props | Uso | Ubicación |
|------------|-------|-----|-----------|
| **Navbar** | - | Fixed top navigation | `/components/Navbar.jsx` |
| **SectionHeader** | title, subtitle, align | Section titles | `/components/SectionHeader.jsx` |
| **Card** | children, className, hover, onClick | Base card wrapper | `/components/Card.jsx` |
| **Modal** | isOpen, onClose, children, title | Lightbox/dialogs | `/components/Modal.jsx` |
| **Footer** | - | Site footer | `/components/Footer.jsx` |

### Specialized Components

| Componente | Props | Uso | Ubicación |
|------------|-------|-----|-----------|
| **CaseCard** | image, title, description, tags, keyVisual, deliverables, gif | Campaign showcases | `/components/CaseCard.jsx` |
| **MLCard** | title, description, image, checklist, type | Retail projects | `/components/MLCard.jsx` |
| **ToolBadge** | name, level, icon | Tool proficiency | `/components/ToolBadge.jsx` |

---

## 🎨 Sistema de Diseño

### Color Tokens

```javascript
// tailwind.config.js
colors: {
  brand: {
    primary: '#FFB300',    // Yellow - CTAs, accents
    secondary: '#1C1C1E',  // Dark - Text, headers
    accent: '#E83E8C',     // Pink - Links, highlights
  },
  neutral: {
    light: '#FAFAFA',      // Background
    mid: '#B8B8B8',        // Secondary text
    dark: '#2B2B2B',       // Primary text
  },
  feedback: {
    success: '#28A745',    // Success states
    error: '#DC3545',      // Error states
    warning: '#FFC107',    // Warning states
    info: '#0D6EFD',       // Info states
  },
}
```

### Tipografía

```javascript
fontFamily: {
  sans: ['Inter'],       // Body text
  display: ['Playfair Display'],  // Headings
}

// Escala de tamaños
text-sm    → 14px
text-base  → 16px
text-lg    → 18px
text-xl    → 20px
text-2xl   → 24px
text-3xl   → 30px
text-4xl   → 36px
text-5xl   → 48px
text-6xl   → 60px
text-7xl   → 72px
```

### Espaciado

```javascript
// Padding/Margin en secciones
section-padding → py-16 md:py-24 lg:py-32

// Contenedores
container-custom → max-w-7xl mx-auto px-4 sm:px-6 lg:px-8

// Gaps en grids
gap-4 → 16px
gap-6 → 24px
gap-8 → 32px
```

### Componentes de Estilo

```css
/* index.css */

.btn-primary {
  /* Botón principal amarillo */
}

.btn-secondary {
  /* Botón outline rosa */
}

.card-base {
  /* Card blanca con sombra */
}

.link-accent {
  /* Link rosa con underline */
}
```

---

## 📱 Responsive Breakpoints

```javascript
// Tailwind default breakpoints
sm:  640px   // Tablet pequeña
md:  768px   // Tablet
lg:  1024px  // Desktop pequeño
xl:  1280px  // Desktop
2xl: 1536px  // Desktop grande

// Uso común en el proyecto:
grid-cols-1           // Mobile (< 640px)
sm:grid-cols-2        // Tablet pequeña (≥ 640px)
lg:grid-cols-3        // Desktop pequeño (≥ 1024px)
```

---

## 🔌 Data Flow

### Estado Local (useState)

```javascript
// Branding.jsx
showAll → Controla grid expandido
selectedProject → Modal de proyecto seleccionado

// Retail.jsx
activeTab → Tab activa (fichas/carousels/landing)

// Contact.jsx
formData → Datos del formulario
errors → Errores de validación
submitted → Estado de envío
```

### Props Drilling

```
App.jsx (no state)
  ↓
Sections (local state)
  ↓
Components (props)
```

**Nota:** No se usa Context API ni Redux porque el estado es local y simple.

---

## 🎯 Patrones de Diseño Utilizados

### 1. **Composición de Componentes**
```javascript
<Card>
  <Content />
</Card>
```

### 2. **Render Props**
```javascript
{items.map((item) => (
  <Card key={item.id} {...item} />
))}
```

### 3. **Controlled Components**
```javascript
<input 
  value={formData.name}
  onChange={handleChange}
/>
```

### 4. **Conditional Rendering**
```javascript
{submitted ? <SuccessMessage /> : <Form />}
```

---

## 🛠️ Build Process

```
Source Code (src/)
      ↓
   [Vite Build]
      ↓
  Transpile JSX → JS (Babel)
  Process CSS → Tailwind (PostCSS)
  Bundle Assets (Rollup)
  Optimize Images
      ↓
   dist/
   ├── index.html
   ├── assets/
   │   ├── index-[hash].js
   │   └── index-[hash].css
   └── images/
```

---

## 📦 Dependencias Clave

### Production
```json
{
  "react": "^18.3.1",         // UI library
  "react-dom": "^18.3.1"      // DOM renderer
}
```

### Development
```json
{
  "vite": "^5.3.1",           // Build tool
  "tailwindcss": "^3.4.4",    // CSS framework
  "postcss": "^8.4.38",       // CSS processor
  "autoprefixer": "^10.4.19"  // CSS vendor prefixes
}
```

---

## 🔒 Best Practices Implementadas

✅ **Accesibilidad**
- ARIA labels en elementos interactivos
- Alt text descriptivo en imágenes
- Focus visible en navegación
- Contraste WCAG AA

✅ **Performance**
- Lazy loading de imágenes
- Code splitting por ruta (potencial)
- Assets optimizados
- CSS purging en producción

✅ **SEO**
- Meta tags completos
- Open Graph tags
- Semantic HTML5
- Sitemap generado (opcional)

✅ **Code Quality**
- Componentes reutilizables
- Nombres descriptivos
- Comentarios donde necesario
- Estructura organizada

✅ **User Experience**
- Smooth scroll
- Feedback visual en interacciones
- Responsive design
- Estados de loading/error

---

## 🔄 Ciclo de Desarrollo

```
1. Editar código (src/)
       ↓
2. Vite Hot Reload (automático)
       ↓
3. Ver cambios en navegador
       ↓
4. Iterar
       ↓
5. npm run build (cuando esté listo)
       ↓
6. Deploy a Netlify/Vercel
```

---

## 📝 Convenciones de Código

### Nombres de Archivos
- Componentes: `PascalCase.jsx`
- Estilos: `kebab-case.css`
- Config: `kebab-case.js`

### Nombres de Variables
- React components: `PascalCase`
- Functions: `camelCase`
- Constants: `UPPER_SNAKE_CASE`
- Props: `camelCase`

### Estructura de Componentes
```javascript
// 1. Imports
import { useState } from 'react';
import Component from './Component';

// 2. Component Definition
const MyComponent = ({ prop1, prop2 }) => {
  // 3. State
  const [state, setState] = useState(initial);
  
  // 4. Effects
  useEffect(() => {}, []);
  
  // 5. Handlers
  const handleClick = () => {};
  
  // 6. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

// 7. Export
export default MyComponent;
```

---

**Para más detalles técnicos, consulta los archivos individuales de cada componente.**
