# Estructura de Imágenes - Portfolio Carla

Este documento explica la nueva organización de imágenes del portfolio, donde cada proyecto tiene **3 tipos de imágenes diferentes**.

## 📁 Estructura Organizacional

```
public/images/
├── homebanking-provincia/
│   ├── card.png                     # Imagen para el grid principal
│   ├── cover.png                    # Imagen principal de la página de detalle
│   ├── detail-01.jpg                # Imagen adicional 1
│   └── detail-02.jpg                # Imagen adicional 2
├── limansky-ml/
│   ├── card.png                     # Imagen para el grid principal
│   ├── cover.png                    # Imagen principal de la página de detalle
│   ├── detail-01.jpg                # Imagen adicional 1
│   └── detail-02.jpg                # Imagen adicional 2
├── limansky-serta/
│   ├── card.png                     # Imagen para el grid principal
│   ├── cover.png                    # Imagen principal de la página de detalle
│   └── detail-01.jpg                # Imagen adicional 1
├── parfumerie-beauty/
│   ├── card.webp                    # Imagen para el grid principal
│   ├── cover.webp                   # Imagen principal de la página de detalle
│   ├── detail-01.jpg                # Imagen adicional 1
│   └── detail-02.jpg                # Imagen adicional 2
├── ojo-emergente/
│   ├── card.png                     # Imagen para el grid principal
│   ├── cover.png                    # Imagen principal de la página de detalle
│   ├── detail-01.jpg                # Imagen adicional 1
│   └── detail-02.jpg                # Imagen adicional 2
├── parfumerie-bff/
│   ├── card.png                     # Imagen para el grid principal
│   ├── cover.png                    # Imagen principal de la página de detalle
│   ├── detail-01.jpg                # Imagen adicional 1
│   └── detail-02.jpg                # Imagen adicional 2
├── bafici/
│   ├── card.jpg                     # Imagen para el grid principal
│   ├── cover.jpg                    # Imagen principal de la página de detalle
│   ├── detail-01.jpg                # Imagen adicional 1
│   └── detail-02.jpg                # Imagen adicional 2
├── tools/
│   ├── ai.png                       # Icono Adobe Illustrator
│   ├── ps.png                       # Icono Adobe Photoshop
│   ├── ae.png                       # Icono Adobe After Effects
│   ├── pr.png                       # Icono Adobe Premiere
│   ├── id.png                       # Icono Adobe InDesign
│   └── fg.png                       # Icono Figma
└── [archivos individuales]
    ├── sobre-mi.jpg                 # Imagen para página "Sobre mí"
    ├── placeholder-campaign.jpg     # Placeholder para campañas
    ├── placeholder-ml.jpg           # Placeholder para MercadoLibre
    └── limansky-espumeria-animacion.png
```

## 🎯 Tipos de Imágenes

### 📱 **Card Image** (Grid Principal)
- **Nombre:** `card.{ext}`
- **Formatos:** `.png`, `.jpg`, `.webp`
- **Uso:** Imagen que se muestra en el grid principal de proyectos
- **Dimensiones recomendadas:** Variable según size del proyecto
- **Optimización:** Debe ser liviana para carga rápida del grid

### 🖼️ **Cover Image** (Página de Detalle)
- **Nombre:** `cover.{ext}`
- **Formatos:** `.png`, `.jpg`, `.webp`
- **Uso:** Imagen principal que se muestra en la página de detalle del proyecto
- **Dimensiones recomendadas:** 1200x800px (3:2)
- **Calidad:** Alta resolución para mostrar detalles del proyecto

### 🛠️ **Tool Icons** (Herramientas)
- **Nombres:** `{tool}.png` (ej: `ai.png`, `ps.png`)
- **Formatos:** `.png` preferido para transparencia
- **Uso:** Iconos de herramientas mostrados en páginas de detalle
- **Dimensiones:** 64x64px o 128x128px
- **Fondo:** Transparente (PNG con alpha)

### 📸 **Detail Images** (Galería)
- **Nombres:** `detail-01.{ext}`, `detail-02.{ext}`, etc.
- **Formatos:** `.png`, `.jpg`, `.webp`
- **Uso:** Imágenes adicionales que se muestran debajo del cover
- **Dimensiones:** 1920x1080px (16:9) para landscape
- **Cantidad:** 1-3 imágenes por proyecto

## 🔄 Flujo de Visualización

```
1. Usuario ve Grid Principal
   └── Muestra: card.{ext}
   
2. Usuario hace clic en proyecto
   └── Navega a página de detalle
   
3. Página de detalle muestra:
   ├── cover.{ext} (imagen principal)
   ├── detail-01.{ext} (imagen adicional 1)
   ├── detail-02.{ext} (imagen adicional 2)
   └── detail-03.{ext} (imagen adicional 3, opcional)
```

## 🎨 Beneficios de esta Estructura

### ✅ **Flexibilidad Visual**
- Diferentes imágenes para diferentes contextos
- Card optimizada para grid responsive
- Cover optimizada para mostrar detalles del proyecto

### ✅ **Performance Optimizada**
- Card images más livianas para carga rápida del grid
- Cover images de alta calidad solo cuando es necesario
- Lazy loading eficiente por tipo de imagen

### ✅ **Experiencia de Usuario**
- Grid principal rápido y atractivo
- Página de detalle rica en contenido visual
- Progresión natural de información

## 📝 Convenciones de Nombres

### Imagen Card (Grid)
- **Nombre:** `card.{ext}`
- **Formatos:** `.png`, `.jpg`, `.webp`
- **Uso:** Grid principal de proyectos
- **Peso objetivo:** < 200KB

### Imagen Cover (Detalle)
- **Nombre:** `cover.{ext}`
- **Formatos:** `.png`, `.jpg`, `.webp`
- **Uso:** Imagen principal de la página de detalle
- **Peso objetivo:** < 500KB

### Imágenes Adicionales (Galería)
- **Nombres:** `detail-01.{ext}`, `detail-02.{ext}`, etc.
- **Formatos:** `.png`, `.jpg`, `.webp`
- **Uso:** Galería en página de detalle
- **Peso objetivo:** < 800KB por imagen

## 🔧 Cómo Agregar Nuevas Imágenes

### Para un Proyecto Existente:
1. **Card:** Reemplazar `card.{ext}` con imagen optimizada para grid
2. **Cover:** Reemplazar `cover.{ext}` con imagen principal del detalle
3. **Details:** Agregar `detail-XX.{ext}` según sea necesario

### Para un Proyecto Nuevo:
1. Crear carpeta: `public/images/{nuevo-project-id}/`
2. Agregar imágenes:
   - `card.{ext}` (obligatorio)
   - `cover.{ext}` (obligatorio)
   - `detail-01.{ext}`, `detail-02.{ext}` (opcional)
3. Actualizar `src/data/proyectos.js` con:
   ```javascript
   {
     id: 'nuevo-proyecto',
     image: '/images/nuevo-proyecto/card.{ext}',
     cover: '/images/nuevo-proyecto/cover.{ext}',
     gallery: ['/images/nuevo-proyecto/detail-01.{ext}'],
     // ... resto de propiedades
   }
   ```

## 📊 Mapeo Actual de Proyectos

| ID del Proyecto | Card Image | Cover Image | Detail Images |
|----------------|------------|-------------|---------------|
| `homebanking-provincia` | `card.png` | `cover.png` | `detail-01.jpg`, `detail-02.jpg` |
| `limansky-ml` | `card.png` | `cover.png` | `detail-01.jpg`, `detail-02.jpg` |
| `limansky-serta` | `card.png` | `cover.png` | `detail-01.jpg` |
| `parfumerie-beauty` | `card.webp` | `cover.webp` | `detail-01.jpg`, `detail-02.jpg` |
| `ojo-emergente` | `card.png` | `cover.png` | `detail-01.jpg`, `detail-02.jpg` |
| `parfumerie-bff` | `card.png` | `cover.png` | `detail-01.jpg`, `detail-02.jpg` |
| `bafici` | `card.jpg` | `cover.jpg` | `detail-01.jpg`, `detail-02.jpg` |

## 🎨 Especificaciones de Imágenes

### Card Images (Grid)
- **Dimensiones:** Variable según layout del proyecto
- **Peso máximo:** 200KB
- **Formatos:** PNG, JPG, WebP
- **Optimización:** Compresión alta, enfoque en carga rápida

### Cover Images (Detalle)
- **Dimensiones:** 1200x800px (3:2) recomendado
- **Peso máximo:** 500KB
- **Formatos:** PNG, JPG, WebP
- **Calidad:** 80-90% para JPG, enfoque en mostrar detalles

### Detail Images (Galería)
- **Dimensiones:** 1920x1080px (16:9) para landscape
- **Peso máximo:** 800KB por imagen
- **Formatos:** PNG, JPG, WebP
- **Calidad:** Alta resolución para mostrar proceso/detalles

## ⚠️ Notas Importantes

1. **Card vs Cover:** Ahora son imágenes diferentes con propósitos distintos
2. **Retrocompatibilidad:** El sistema sigue funcionando si solo existe `cover`
3. **Performance:** Cards deben ser más livianas que covers
4. **SEO:** Usar alt text descriptivo en ambos tipos de imagen

## 🔧 Troubleshooting

### Card no se muestra en el grid:
1. Verificar que existe `card.{ext}` en la carpeta del proyecto
2. Confirmar que `image` en `proyectos.js` apunta a la card
3. Revisar extensión del archivo

### Cover no se muestra en detalle:
1. Verificar que existe `cover.{ext}` en la carpeta del proyecto
2. Confirmar que `cover` en `proyectos.js` apunta al archivo correcto
3. Limpiar cache del navegador

---

**Última actualización:** Enero 2025  
**Estructura actualizada:** Sistema de 3 tipos de imágenes implementado
