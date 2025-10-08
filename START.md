# 🚀 INICIO RÁPIDO - LEE ESTO PRIMERO

**Bienvenido al Portfolio de Carla Lucero**

Este es un proyecto React + Vite + Tailwind CSS listo para personalizar y publicar.

---

## ⚡ 3 Pasos para Ver el Portfolio

### 1️⃣ Instalar Dependencias
```bash
cd "C:\Users\Alan\Desktop\Portafolio Carla"
npm install
```
*Esto tomará 1-2 minutos. Solo se hace una vez.*

### 2️⃣ Iniciar Servidor de Desarrollo
```bash
npm run dev
```
*El servidor iniciará en http://localhost:5173*

### 3️⃣ Abrir en el Navegador
Abre tu navegador y ve a: **http://localhost:5173**

**¡Listo! Ya estás viendo el portfolio.**

---

## 📝 ¿Qué Hacer Ahora?

### Opción A: Solo Quiero Ver el Portfolio
✅ Ya lo hiciste. Navega por el sitio y explora las secciones.

### Opción B: Quiero Personalizarlo
📖 Lee **[CUSTOMIZATION.md](./CUSTOMIZATION.md)** - Guía paso a paso (30 min)

Cambios básicos que puedes hacer en menos de 10 minutos:
1. **Colores**: Edita `tailwind.config.js` líneas 10-14
2. **Nombre**: Edita `src/sections/Hero.jsx` línea 18
3. **Email**: Edita `src/sections/Contact.jsx` línea 150

### Opción C: Quiero Publicarlo Online
🚀 Lee **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Instrucciones para Netlify/Vercel

La forma más rápida (5 minutos):
1. `npm run build`
2. Ve a [netlify.com/drop](https://netlify.com/drop)
3. Arrastra la carpeta `dist`
4. ¡Listo!

---

## 📂 Estructura del Proyecto

```
📁 Portafolio Carla/
├── 📄 README.md              ← Documentación completa
├── 📄 CUSTOMIZATION.md       ← Guía de personalización ⭐
├── 📄 DEPLOYMENT.md          ← Guía de publicación ⭐
├── 📄 IMAGES.md              ← Especificaciones de imágenes
├── 📄 CHANGELOG.md           ← Historial de versiones
├── 📄 START.md               ← Este archivo (léelo primero)
│
├── 📁 public/
│   └── 📁 images/            ← PON TUS IMÁGENES AQUÍ 🖼️
│
├── 📁 src/
│   ├── 📁 components/        ← Componentes reutilizables
│   ├── 📁 sections/          ← Secciones del portfolio
│   ├── 📄 App.jsx            ← Componente principal
│   └── 📄 index.css          ← Estilos globales
│
└── 📄 package.json           ← Dependencias del proyecto
```

---

## 🎨 Archivos Importantes para Personalizar

| Archivo | Qué Cambiar | Prioridad |
|---------|-------------|-----------|
| `tailwind.config.js` | Colores de marca | 🔴 Alta |
| `src/sections/Hero.jsx` | Nombre y tagline | 🔴 Alta |
| `src/sections/Contact.jsx` | Email y redes | 🔴 Alta |
| `src/sections/Branding.jsx` | Proyectos de branding | 🟡 Media |
| `src/sections/Campaigns.jsx` | Campañas | 🟡 Media |
| `src/sections/Retail.jsx` | Proyectos retail | 🟡 Media |
| `src/sections/UXUI.jsx` | Proyectos UX/UI | 🟡 Media |
| `public/images/` | Todas las imágenes | 🟢 Baja* |

*Baja prioridad porque puedes usar placeholders temporales

---

## 🆘 Problemas Comunes

### "npm: command not found"
**Solución:** Necesitas instalar Node.js
- Descarga de [nodejs.org](https://nodejs.org/)
- Instala la versión LTS (recomendada)
- Reinicia tu terminal
- Intenta de nuevo

### "Las imágenes no se ven"
**Normal:** Son placeholders. Lee [IMAGES.md](./IMAGES.md) para agregar las tuyas.

### "Error al instalar dependencias"
**Solución:**
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### "El sitio no se ve bien"
**Solución:** Asegúrate de que el servidor esté corriendo con `npm run dev`

---

## 📚 Documentación Completa

Lee estos archivos en orden según tus necesidades:

1. **START.md** (este archivo) ← Estás aquí ✅
2. **[CUSTOMIZATION.md](./CUSTOMIZATION.md)** ← Para personalizar
3. **[IMAGES.md](./IMAGES.md)** ← Para agregar imágenes
4. **[DEPLOYMENT.md](./DEPLOYMENT.md)** ← Para publicar
5. **[README.md](./README.md)** ← Documentación técnica completa

---

## 🎯 Checklist de Tareas

Usa esto como guía de lo que necesitas hacer:

### Fase 1: Setup Inicial (5 min)
- [ ] Instalar dependencias (`npm install`)
- [ ] Iniciar servidor (`npm run dev`)
- [ ] Verificar que carga en el navegador

### Fase 2: Personalización Básica (30 min)
- [ ] Cambiar colores en `tailwind.config.js`
- [ ] Actualizar nombre en Hero
- [ ] Actualizar email en Contacto
- [ ] Actualizar redes sociales

### Fase 3: Contenido (2-4 horas)
- [ ] Agregar proyectos de Branding
- [ ] Agregar campañas
- [ ] Agregar proyectos Retail
- [ ] Agregar proyectos UX/UI
- [ ] Actualizar herramientas
- [ ] Revisar meta tags en `index.html`

### Fase 4: Imágenes (tiempo variable)
- [ ] Optimizar imágenes reales
- [ ] Colocar en `public/images/`
- [ ] Verificar que todas cargan

### Fase 5: Deploy (15 min)
- [ ] Build del proyecto (`npm run build`)
- [ ] Publicar en Netlify/Vercel
- [ ] Configurar dominio (opcional)
- [ ] Testing final

---

## 💡 Tips Finales

- **No te abrumes:** Puedes personalizar poco a poco
- **Usa placeholders:** No necesitas todas las imágenes desde el inicio
- **Prueba frecuentemente:** Guarda y refresca el navegador para ver cambios
- **Git es tu amigo:** Haz commits frecuentes de tus cambios
- **Pide ayuda:** Si te trabas, consulta la documentación o busca en Google

---

## 📞 Recursos de Ayuda

- **Documentación local:** Todos los archivos .md en este proyecto
- **Tailwind CSS:** [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **React:** [react.dev](https://react.dev/)
- **Vite:** [vitejs.dev](https://vitejs.dev/)
- **Stack Overflow:** Para preguntas técnicas específicas

---

## 🎉 ¡Estás List@!

**Siguiente paso sugerido:**  
Lee [CUSTOMIZATION.md](./CUSTOMIZATION.md) para empezar a personalizar el portfolio.

**¿Preguntas?**  
Revisa README.md para documentación completa.

---

**¡Éxito con tu portfolio! 🚀✨**

*Última actualización: Enero 2025*
