# 🚀 Guía de Deployment

Instrucciones detalladas para publicar tu portfolio en diferentes plataformas.

---

## 📋 Pre-requisitos

Antes de hacer deploy, asegúrate de:

1. **Build local exitoso:**
```bash
npm run build
```

2. **Preview funcional:**
```bash
npm run preview
```

3. **Sin errores en consola** del navegador (F12)

4. **Imágenes optimizadas** (ver IMAGES.md)

5. **Contenido actualizado** (nombre, email, proyectos)

---

## 🌐 Opción 1: Netlify (Recomendado)

**Pros:** Gratis, rápido, SSL automático, dominio incluido  
**Ideal para:** Principiantes y proyectos personales

### Método A: Drag & Drop (Más fácil)

1. **Construir el proyecto:**
```bash
npm run build
```

2. **Ir a** [app.netlify.com/drop](https://app.netlify.com/drop)

3. **Crear cuenta** (GitHub, email, etc.)

4. **Arrastrar carpeta `dist/`** a la zona de drop

5. **¡Listo!** Netlify te dará una URL tipo `random-name-123.netlify.app`

### Método B: Git (Recomendado para actualizaciones)

1. **Inicializar Git** (si no lo hiciste):
```bash
git init
git add .
git commit -m "Initial commit"
```

2. **Crear repositorio en GitHub:**
   - Ve a [github.com/new](https://github.com/new)
   - Crea repositorio público o privado
   - Copia la URL

3. **Conectar y pushear:**
```bash
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git branch -M main
git push -u origin main
```

4. **Importar en Netlify:**
   - Ir a [app.netlify.com](https://app.netlify.com)
   - "Add new site" → "Import an existing project"
   - Conectar con GitHub
   - Seleccionar tu repositorio
   - Build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Deploy!

5. **Actualizaciones automáticas:**
   - Cada push a `main` actualiza el sitio automáticamente

### Configurar dominio personalizado en Netlify

1. **Comprar dominio** (Namecheap, GoDaddy, etc.)

2. **En Netlify:** 
   - Site settings → Domain management
   - "Add custom domain"
   - Ingresar tu dominio: `tudominio.com`

3. **Configurar DNS:**
   - En tu proveedor de dominio
   - Agregar estos registros:
     ```
     Type: A
     Name: @
     Value: 75.2.60.5
     
     Type: CNAME
     Name: www
     Value: TU-SITIO.netlify.app
     ```

4. **Esperar propagación** (2-48 horas)

5. **SSL automático** se activa en Netlify

---

## ▲ Opción 2: Vercel

**Pros:** Muy rápido, edge network, analytics incluidos  
**Ideal para:** Desarrolladores, proyectos con Next.js (aunque funciona con Vite)

### Método A: CLI

1. **Instalar Vercel CLI:**
```bash
npm i -g vercel
```

2. **Login:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel
```

4. **Seguir prompts:**
   - Set up and deploy? `Y`
   - Scope: (tu cuenta)
   - Link to existing project? `N`
   - Project name: `carla-portfolio`
   - Directory: `./`
   - Want to override settings? `N`

5. **Deploy a producción:**
```bash
vercel --prod
```

### Método B: Git Integration

1. **Pushear a GitHub** (ver método Git de Netlify)

2. **Importar en Vercel:**
   - Ir a [vercel.com/new](https://vercel.com/new)
   - "Import Git Repository"
   - Seleccionar tu repo
   - Framework Preset: `Vite`
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Deploy!

### Dominio personalizado en Vercel

1. **En Vercel:**
   - Ir a tu proyecto
   - Settings → Domains
   - "Add domain"
   - Ingresar `tudominio.com`

2. **Configurar DNS:**
   - Seguir instrucciones de Vercel
   - Agregar registro A o CNAME según indique

---

## 🐙 Opción 3: GitHub Pages

**Pros:** Totalmente gratis, integración con GitHub  
**Contras:** Más pasos, URL es `usuario.github.io/repo`

### Setup

1. **Instalar gh-pages:**
```bash
npm install -D gh-pages
```

2. **Actualizar `package.json`:**
```json
{
  "homepage": "https://TU_USUARIO.github.io/TU_REPO",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Actualizar `vite.config.js`:**
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/TU_REPO/', // Agregar esta línea
})
```

4. **Deploy:**
```bash
npm run deploy
```

5. **Configurar en GitHub:**
   - Ir a tu repositorio
   - Settings → Pages
   - Source: `gh-pages` branch
   - Folder: `/ (root)`
   - Save

6. **Esperar 1-2 minutos**, tu sitio estará en:
   `https://TU_USUARIO.github.io/TU_REPO`

### Dominio personalizado en GitHub Pages

1. **Agregar archivo `CNAME` en `/public`:**
```
tudominio.com
```

2. **Rebuild y deploy:**
```bash
npm run deploy
```

3. **En GitHub:**
   - Settings → Pages → Custom domain
   - Ingresar `tudominio.com`
   - Save

4. **Configurar DNS en tu proveedor:**
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: TU_USUARIO.github.io
   ```

---

## 🔧 Opción 4: Render

**Pros:** Free tier, fácil setup, buena documentación  

1. **Pushear a GitHub** (ver método anterior)

2. **Ir a** [render.com](https://render.com)

3. **New Static Site**

4. **Conectar repo de GitHub**

5. **Configuración:**
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`

6. **Create Static Site**

---

## 🌍 Opción 5: Cloudflare Pages

**Pros:** Red global, muy rápido, generoso free tier

1. **Ir a** [pages.cloudflare.com](https://pages.cloudflare.com)

2. **Crear cuenta** con GitHub

3. **Create a project**

4. **Conectar repositorio**

5. **Build settings:**
   - Framework preset: `None`
   - Build command: `npm run build`
   - Build output: `dist`

6. **Save and Deploy**

---

## ✅ Post-Deployment Checklist

Después de hacer deploy, verifica:

- [ ] El sitio carga sin errores
- [ ] Todas las imágenes se ven
- [ ] Los links funcionan
- [ ] El formulario responde (aunque sea simulado)
- [ ] Responsive funciona en móvil
- [ ] SEO meta tags están presentes (inspeccionar HTML)
- [ ] Console sin errores (F12)
- [ ] Performance en [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Preview en redes sociales con [OpenGraph](https://www.opengraph.xyz/)

---

## 🔍 Testing de Performance

### Google PageSpeed Insights

1. Ir a [pagespeed.web.dev](https://pagespeed.web.dev/)
2. Ingresar tu URL
3. Objetivo: Score > 90 en todas las métricas
4. Si hay issues, optimizar imágenes y assets

### GTmetrix

1. Ir a [gtmetrix.com](https://gtmetrix.com/)
2. Analizar tu sitio
3. Ver recomendaciones de optimización

---

## 🐛 Troubleshooting

### "Las imágenes no cargan en producción"

**Problema:** Rutas incorrectas

**Solución:**
- Verifica que uses rutas absolutas: `/images/archivo.jpg`
- NO uses rutas relativas: `./images/archivo.jpg`
- Las imágenes deben estar en `public/images/`

### "404 al recargar la página"

**Problema:** SPA routing

**Solución en Netlify:**
Crear `public/_redirects`:
```
/*    /index.html   200
```

**Solución en Vercel:**
Crear `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

### "Build falla en la plataforma"

**Soluciones:**
1. Verifica que `npm run build` funcione localmente
2. Revisa versión de Node (usar 18+ recomendado)
3. Borra `node_modules` y reinstala: `rm -rf node_modules && npm install`
4. Revisa logs de error en la plataforma

### "CSS/Estilos no se aplican"

**Problema:** PostCSS o Tailwind no configurado

**Solución:**
- Verifica que `tailwind.config.js` exista
- Verifica que `postcss.config.js` exista
- Rebuild: `npm run build`

---

## 📊 Analytics (Opcional)

### Google Analytics

1. **Crear cuenta** en [analytics.google.com](https://analytics.google.com)

2. **Obtener ID de medición** (G-XXXXXXXXXX)

3. **Agregar a `index.html`** antes de `</head>`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Plausible Analytics (Alternativa privacy-friendly)

1. Cuenta en [plausible.io](https://plausible.io)
2. Agregar snippet al `index.html`

---

## 🔐 HTTPS / SSL

**Buenas noticias:** Todas las plataformas mencionadas incluyen SSL gratis automáticamente.

- ✅ Netlify: SSL automático
- ✅ Vercel: SSL automático
- ✅ GitHub Pages: SSL automático
- ✅ Cloudflare: SSL automático
- ✅ Render: SSL automático

No necesitas hacer nada, tu sitio estará en HTTPS.

---

## 🔄 Actualizaciones Continuas

### Con Git (Recomendado)

1. **Hacer cambios** en tu código local
2. **Commit:**
```bash
git add .
git commit -m "Descripción del cambio"
```
3. **Push:**
```bash
git push origin main
```
4. **Deploy automático** en Netlify/Vercel

### Sin Git (Manual)

1. **Build:**
```bash
npm run build
```
2. **Re-deploy** en la plataforma (drag & drop o CLI)

---

## 💰 Costos

| Plataforma | Free Tier | Límites | Ideal para |
|------------|-----------|---------|------------|
| **Netlify** | ✅ Generoso | 100GB/mes, 300 min build | Portfolio personal |
| **Vercel** | ✅ Excelente | 100GB/mes, unlimited bandwidth | Cualquier proyecto |
| **GitHub Pages** | ✅ Ilimitado | 1GB repo, 100GB/mes | Proyectos open source |
| **Cloudflare Pages** | ✅ Muy generoso | 500 builds/mes | Proyectos con tráfico |
| **Render** | ✅ Básico | 100GB/mes | Proyectos simples |

**Recomendación:** Netlify o Vercel para mejor experiencia sin costo.

---

## 📞 Soporte

Si tienes problemas:

1. **Netlify:** [docs.netlify.com](https://docs.netlify.com)
2. **Vercel:** [vercel.com/docs](https://vercel.com/docs)
3. **GitHub Pages:** [docs.github.com/pages](https://docs.github.com/pages)

---

**¡Tu portfolio está listo para el mundo! 🌍✨**
