# Mi Portafolio - Persona Inspired

Portafolio web interactivo construido con **Next.js 14**, **TypeScript**, **Tailwind CSS** y **Framer Motion**. Diseñado con inspiración en los estilos visuales de Persona y Danganronpa, con soporte para múltiples temas personalizables.

## ✨ Características

- **Sistema de Temas Dinámico**: Cambia entre temas predefinidos (Persona, Danganronpa, Cyberpunk, Minimal) o crea los tuyos
- **Animaciones Persona-Style**: Transiciones suaves, efectos de entrada y hover effects inspirados en videojuegos
- **Estructura Flexible**: Toda la información se gestiona mediante archivos JSON - fácil de actualizar
- **Responsivo**: Diseño totalmente adaptable a móviles, tablets y desktops
- **TypeScript**: Código seguro y bien tipado
- **CSS Variables**: Paleta de colores intercambiable sin modificar componentes

---

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

El servidor se iniciará en `http://localhost:3000`

### Build para Producción

```bash
npm run build
npm start
```

---

## 📁 Estructura del Proyecto

```
.
├── app/                          # Rutas y layout de Next.js
│   ├── layout.tsx                # Layout raíz con ThemeProvider
│   ├── page.tsx                  # Página principal
│   └── globals.css               # Estilos globales
│
├── src/
│   ├── components/               # Componentes React reutilizables
│   │   ├── HeroSection.tsx       # Sección hero (presentación)
│   │   ├── SkillsSection.tsx     # Tecnologías que dominas
│   │   ├── ProjectsSection.tsx   # Proyectos destacados
│   │   ├── DevOpsSection.tsx     # Homelab y DevOps
│   │   ├── CertificationsSection.tsx  # Certificados y cursos
│   │   ├── SocialLinksSection.tsx     # Redes sociales
│   │   ├── ThemeToggle.tsx       # Selector de temas
│   │   ├── Footer.tsx            # Pie de página
│   │   └── index.ts              # Export barrel
│   │
│   ├── config/
│   │   └── themes.ts             # Definición de temas y colores
│   │
│   ├── context/
│   │   └── ThemeContext.tsx      # Context para gestionar temas
│   │
│   ├── data/                     # Datos en formato JSON
│   │   ├── projects.json         # Proyectos
│   │   ├── skills.json           # Habilidades
│   │   ├── certifications.json   # Certificados
│   │   ├── devops.json           # Proyectos DevOps
│   │   └── social-links.json     # Enlaces a redes
│   │
│   ├── styles/
│   │   └── themes.css            # Estilos de temas con CSS variables
│   │
│   └── types/
│       └── index.ts              # Tipos TypeScript
│
├── public/                       # Archivos estáticos
│   └── images/                   # Imágenes del portafolio
│
├── package.json                  # Dependencias del proyecto
└── tsconfig.json                 # Configuración de TypeScript
```

---

## 🎨 Sistema de Temas

### Temas Predefinidos

El sistema incluye 4 temas listos para usar:

1. **Persona**: Azul oscuro con acentos cyan (por defecto)
2. **Danganronpa**: Rojo y negro con altos contrastes
3. **Cyberpunk**: Verde neón en fondo oscuro
4. **Minimal**: Blanco y negro minimalista

### Cambiar el Tema Por Defecto

Edita [src/config/themes.ts](src/config/themes.ts):

```typescript
export const DEFAULT_THEME = "persona"; // Cambia aquí
```

### Crear un Tema Personalizado

1. Abre [src/config/themes.ts](src/config/themes.ts)
2. Agrega un nuevo objeto al diccionario `THEMES`:

```typescript
export const THEMES: Record<string, Theme> = {
  // ... temas existentes ...
  miTema: {
    name: "Mi Tema",
    colors: {
      primary: "#1a1a2e",
      secondary: "#16213e",
      accent: "#00d4ff",
      background: "#0f1419",
      backgroundAlt: "#1a1f2e",
      text: "#ffffff",
      textAlt: "#c0c0c0",
      border: "#00d4ff",
      success: "#00ff88",
      warning: "#ffaa00",
      error: "#ff0055",
    },
  },
};
```

3. Agrega las variables CSS correspondientes en [src/styles/themes.css](src/styles/themes.css):

```css
[data-theme="miTema"] {
  --color-primary: #1a1a2e;
  --color-secondary: #16213e;
  /* ... resto de variables ... */
}
```

Los colores se aplicarán automáticamente al seleccionar tu tema desde el botón en la esquina superior derecha.

---

## 📝 Actualizar Contenido

Toda la información del portafolio se gestiona mediante archivos JSON en [src/data/](src/data/):

### Proyectos

Edita [src/data/projects.json](src/data/projects.json):

```json
{
  "id": "proyecto-1",
  "title": "Mi Primer Proyecto",
  "description": "Descripción corta",
  "longDescription": "Descripción detallada",
  "technologies": ["React", "Node.js"],
  "featured": true,
  "github": "https://github.com/usuario/repo",
  "demo": "https://demo-url.com"
}
```

### Habilidades

Edita [src/data/skills.json](src/data/skills.json):

```json
{
  "category": "Frontend",
  "skills": ["React", "TypeScript", "Tailwind CSS"]
}
```

### Certificaciones

Edita [src/data/certifications.json](src/data/certifications.json):

```json
{
  "id": "cert-1",
  "title": "Certificación",
  "issuer": "Plataforma",
  "date": "2026-02",
  "credentialUrl": "https://..."
}
```

### Homelab / DevOps

Edita [src/data/devops.json](src/data/devops.json):

```json
{
  "id": "devops-1",
  "name": "Mi Proyecto DevOps",
  "description": "Descripción",
  "technologies": ["Docker", "Kubernetes"],
  "status": "active" // active | planned | completed
}
```

### Redes Sociales

Edita [src/data/social-links.json](src/data/social-links.json):

```json
{
  "name": "GitHub",
  "url": "https://github.com/usuario",
  "icon": "github" // github | linkedin | twitter | email
}
```

---

## 🚀 Deployment en Homelab

### Opción 1: Next.js Standalone Server

```bash
# Build
npm run build

# Ejecutar en combinación con PM2 para mantenerlo corriendo
npm install -g pm2

# Crear archivo ecosystem.config.js
echo 'module.exports = {
  apps: [{
    name: "portfolio",
    script: "./.next/standalone/server.js",
    env: {
      NODE_ENV: "production",
      PORT: 3000
    }
  }]
};' > ecosystem.config.js

# Iniciar con PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### Opción 2: Docker

Crea un `Dockerfile`:

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY .next/standalone/ ./
COPY public ./public

EXPOSE 3000

CMD ["node", "server.js"]
```

Build y ejecuta:

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### Opción 3: Con Nginx Reverse Proxy

Configura Nginx para dirigir el tráfico a tu portafolio:

```nginx
server {
    listen 80;
    server_name tu-dominio.local;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 🎬 Animaciones

Las animaciones están implementadas con **Framer Motion**. Cada sección tiene:

- **Animaciones de entrada**: Fade + slide
- **Efectos hover**: Scale, color change, glow
- **Transiciones suaves**: Entre 300-800ms

Para personalizar las animaciones, edita los `variants` en cada componente de sección.

---

## 🛠️ Dependencias Principales

- **Next.js 14**: Framework React moderno
- **TypeScript**: Tipado seguro
- **Tailwind CSS**: Utilidades CSS
- **Framer Motion**: Animaciones fluidas
- **clsx**: Utilidad para className condicionales

---

## 📞 Contacto y Contribuciones

Este es tu portafolio personal. Personaliza libremente según tus necesidades.

---

## 📄 Licencia

Código personal - úsalo como base para tu portafolio.

---

## 💡 Tips Útiles

1. **Cambiar el título y descripción**: Edita [app/layout.tsx](app/layout.tsx) en la sección de `metadata`
2. **Agregar imágenes**: Colócalas en `public/images/` y referencia con rutas relativas
3. **Modificar estilos globales**: Edita [app/globals.css](app/globals.css)
4. **Agregar nuevas secciones**: Copia el patrón de `HeroSection.tsx` y agrega en [app/page.tsx](app/page.tsx)
5. **Estado del tema guardado**: Se almacena en `localStorage` automáticamente

---

**¡Disfruta construyendo tu portafolio!** 🚀✨
