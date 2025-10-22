# Sistema Tipográfico - Helvetica Neue

Este documento detalla la implementación de Helvetica Neue como tipografía principal y única del Portfolio de Carla.

## 📁 Estructura de Fuentes

```
public/fonts/
├── HelveticaNeueUltraLight.otf     # Ultra Light (100)
├── HelveticaNeueThin.otf           # Thin (200)
├── HelveticaNeueLight.otf          # Light (300)
├── HelveticaNeueRoman.otf          # Regular (400)
├── HelveticaNeueItalic.ttf         # Regular Italic (400)
├── HelveticaNeueMedium.otf         # Medium (500)
├── HelveticaNeueBold.otf           # Bold (700)
├── HelveticaNeueBoldItalic.otf     # Bold Italic (700)
├── HelveticaNeueHeavy.otf          # Heavy (800)
├── HelveticaNeueBlack.otf          # Black (900)
└── HelveticaNeueBlackItalic.otf    # Black Italic (900)
```

## 🎨 Mapeo de Pesos Tipográficos

| Archivo | Font Weight | Tailwind Class | Uso Recomendado |
|---------|-------------|----------------|-----------------|
| UltraLight.otf | 100 | `font-thin` | Texto decorativo, elementos ligeros |
| Thin.otf | 200 | `font-extralight` | Subtítulos, texto secundario |
| Light.otf | 300 | `font-light` | Párrafos largos, descripción |
| Roman.otf | 400 | `font-normal` | Texto principal, cuerpo |
| Medium.otf | 500 | `font-medium` | Subtítulos, énfasis moderado |
| Bold.otf | 700 | `font-bold` | Títulos, encabezados |
| Heavy.otf | 800 | `font-extrabold` | Títulos principales |
| Black.otf | 900 | `font-black` | Headlines, impacto máximo |

## 🛠️ Configuración Técnica

### @font-face Declarations
Todas las variantes están definidas en `src/index.css` con:
- `font-display: swap` para optimización de carga
- Formatos OpenType (.otf) y TrueType (.ttf)
- Pesos específicos mapeados correctamente

### Tailwind CSS Configuration
```javascript
// tailwind.config.js
fontFamily: {
  sans: ['Helvetica Neue', 'system-ui', '-apple-system', 'sans-serif'],
  display: ['Helvetica Neue', 'system-ui', '-apple-system', 'sans-serif'],
}
```

### CSS Application
```css
body, h1, h2, h3, h4, h5, h6 {
  font-family: 'Helvetica Neue', system-ui, -apple-system, sans-serif;
}
```

## 📱 Jerarquía Tipográfica Recomendada

### Headlines (H1)
```html
<h1 class="text-6xl font-black">Título Principal</h1>
<h1 class="text-5xl font-extrabold">Título Sección</h1>
```

### Subtítulos (H2-H3)
```html
<h2 class="text-4xl font-bold">Subtítulo</h2>
<h3 class="text-2xl font-medium">Subtítulo Menor</h3>
```

### Texto Cuerpo
```html
<p class="text-base font-normal">Párrafo principal</p>
<p class="text-sm font-light">Texto secundario</p>
```

### Elementos UI
```html
<button class="font-medium">Botón</button>
<span class="text-xs font-normal uppercase tracking-wide">Labels</span>
```

## 🎯 Aplicación en el Portfolio

### Componentes Actualizados
- **Navbar**: Logo y enlaces con Helvetica Neue
- **Hero Section**: Títulos con variantes Bold/Black
- **Proyectos**: Información con Regular/Medium
- **Detalle**: Jerarquía completa implementada

### Fallback System
```css
font-family: 'Helvetica Neue', system-ui, -apple-system, sans-serif;
```
- **Helvetica Neue**: Fuente principal personalizada
- **system-ui**: Fuente del sistema (macOS/iOS usa Helvetica)
- **-apple-system**: Específico para dispositivos Apple
- **sans-serif**: Fallback genérico

## ⚡ Performance Optimizations

### Font Loading Strategy
- `font-display: swap` para evitar FOIT (Flash of Invisible Text)
- Fuentes servidas localmente (sin dependencias externas)
- Carga bajo demanda por peso necesario

### File Optimization
- Usar solo las variantes necesarias en producción
- Considerar subset de caracteres si es necesario
- Compresión Gzip automática por el servidor

## 🔄 Migración Completada

### Removido
- ❌ Google Fonts (Inter, Playfair Display, Dancing Script)
- ❌ Enlaces externos a fuentes
- ❌ `font-cursive` references

### Implementado
- ✅ Sistema Helvetica Neue completo
- ✅ 11 variantes tipográficas
- ✅ Configuración Tailwind actualizada
- ✅ CSS base modificado
- ✅ Fallbacks apropiados

## 📝 Uso en el Código

### Clases Tailwind Disponibles
```css
font-thin        /* 100 - UltraLight */
font-extralight  /* 200 - Thin */
font-light       /* 300 - Light */
font-normal      /* 400 - Roman */
font-medium      /* 500 - Medium */
font-semibold    /* 600 - Fallback a Medium */
font-bold        /* 700 - Bold */
font-extrabold   /* 800 - Heavy */
font-black       /* 900 - Black */
```

### Combinaciones Recomendadas
```html
<!-- Headlines impactantes -->
<h1 class="text-7xl font-black tracking-tight">

<!-- Títulos de sección -->
<h2 class="text-4xl font-bold">

<!-- Subtítulos -->
<h3 class="text-xl font-medium">

<!-- Texto principal -->
<p class="text-base font-normal leading-relaxed">

<!-- Texto secundario -->
<p class="text-sm font-light text-gray-600">

<!-- Labels y UI -->
<span class="text-xs font-medium uppercase tracking-wider">
```

## 🚀 Testing

Para verificar que las fuentes funcionan correctamente:

1. **Inspeccionar elementos** en DevTools
2. **Verificar en Network tab** que las fuentes se cargan
3. **Probar en diferentes dispositivos** y navegadores
4. **Validar fallbacks** deshabilitando fuentes personalizadas

## 📱 Responsive Typography

Las fuentes se escalan automáticamente con las clases responsive de Tailwind:

```html
<h1 class="text-4xl md:text-6xl lg:text-8xl font-black">
  Título Responsive
</h1>
```

---

**Helvetica Neue** ahora es la tipografía única y principal del portfolio, proporcionando una identidad visual cohesiva y profesional en todo el proyecto.
