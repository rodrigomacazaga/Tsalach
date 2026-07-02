# Inversión Tsalach 2026 — Micrositio de inversión

Micrositio de análisis para inversionistas sobre una oportunidad de adquisición y desarrollo
inmobiliario en Querétaro. Presenta la composición del paquete, escenarios financieros, comparables
de mercado, proyección de absorción, riesgos y checklist de due diligence.

> **Aviso.** Todas las cifras corresponden a un **modelo preliminar sujeto a validación** legal,
> técnica, fiscal, comercial y financiera. El sitio **no** constituye oferta pública de valores ni
> garantía de rendimiento.

## Stack

- **Vite + React + TypeScript** — sitio estático, despliegue simple.
- **Tailwind CSS** — estilos utilitarios, diseño mobile-first.
- **Recharts** — gráficas responsivas.
- **Framer Motion** — animaciones sutiles (respetan `prefers-reduced-motion`).

## 1. Correr localmente

Requisitos: **Node.js 20+** y npm.

```bash
npm install     # instala dependencias
npm run dev     # servidor de desarrollo (http://localhost:5173)
```

## 2. Build de producción

```bash
npm run build   # genera la carpeta dist/
npm run preview # previsualiza el build localmente
```

El comando `build` corre `tsc -b` (chequeo de tipos) y luego `vite build`.

## 3. Desplegar en Netlify

El proyecto incluye `netlify.toml` ya configurado. Hay dos caminos:

### Opción A — Conectar el repositorio (recomendado)

1. En [Netlify](https://app.netlify.com/) elige **Add new site → Import an existing project**.
2. Conecta el repositorio de Git.
3. Netlify detecta la configuración de `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy. Netlify asignará un dominio tipo `https://inversion-tsalach-2026.netlify.app`
   (puedes personalizar el subdominio en **Site settings → Domain management**).

### Opción B — Deploy manual (arrastrar y soltar)

```bash
npm run build
```

Arrastra la carpeta `dist/` a la zona de deploy de Netlify.

## 4. Cómo cambiar las imágenes

Las imágenes son **marcadores conceptuales SVG** (componente `src/components/ImagePlaceholder.tsx`)
para no aparentar que el desarrollo ya está construido.

Para usar fotos reales (libres de derechos o propias):

1. Coloca la imagen en `public/` (p. ej. `public/queretaro-vialidad.jpg`).
2. Sustituye el componente `<ImagePlaceholder ... />` por un `<img>` con la misma proporción:

```tsx
<img
  src="/queretaro-vialidad.jpg"
  alt="Descripción real y precisa de la imagen"
  loading="lazy"
  className="aspect-[4/3] w-full rounded-2xl object-cover"
/>
```

> Usa `alt` descriptivo (accesibilidad + SEO) y **no** uses imágenes que hagan parecer construido el
> desarrollo si no existe evidencia.

## 5. Cómo cambiar el número de WhatsApp

Edita la constante en `src/data/content.ts`:

```ts
export const WHATSAPP_NUMBER = 'REEMPLAZAR_NUMERO' // ej. "5214421234567"
export const CONTACT_EMAIL = 'REEMPLAZAR_CORREO@ejemplo.com'
```

Formato del número: **código de país + número, sin `+`, espacios ni guiones**
(México: `52` + `1` + LADA + número).

## 6. Cómo cambiar los datos financieros

**Todos** los datos viven en un único archivo: **`src/data/content.ts`**. Ahí encontrarás:

- `DEAL` — cifras maestras (inversión, superficie, precio/m², potencial de deptos.).
- `assets` — composición del paquete (tabla y gráfica de pastel).
- `paymentPlan` — estructura de pago (timeline).
- `scenarios` — los tres escenarios (conservador, base, expansivo) con su desglose.
- `comparables` / `pricePerM2Data` — mercado y comparables.
- `absorptionScenarios` / `absorptionChartData` — proyección de absorción.
- `risks`, `dueDiligence`, `faqs`, `thesis`, `roadmap` — secciones de contenido.

Al editar los objetos, las tablas y gráficas se actualizan automáticamente. Las gráficas derivan de
estos mismos datos (ver `scenarioChartData`, `assetChartData`, etc.), por lo que se mantienen
consistentes.

> Se usa la superficie corregida de **4,280.86 m²** para los 17 lotes unifamiliares.

## 7. Cómo conectar el formulario con Netlify Forms

El formulario ya está listo para **Netlify Forms**:

- `index.html` contiene un formulario **oculto** llamado `contacto` con todos los campos. Netlify lo
  detecta durante el build (necesario porque el formulario visible se renderiza con React/JS).
- El formulario visible (`src/components/Contact.tsx`) envía por AJAX (`fetch`) a `"/"` con el
  `form-name=contacto`, e incluye un honeypot anti-spam (`bot-field`).

Una vez desplegado en Netlify:

1. Ve a **Site → Forms**; verás el formulario `contacto` recibiendo envíos.
2. Configura notificaciones en **Forms → Settings and usage → Form notifications**
   (por correo, Slack o webhook).

Si prefieres otro backend (p. ej. tu API o un servicio de correo), reemplaza la función
`handleSubmit` en `src/components/Contact.tsx`.

## Estructura del proyecto

```
.
├── index.html                 # HTML raíz + metadata SEO/OG + form oculto Netlify
├── netlify.toml               # build, redirects SPA y headers
├── public/                    # favicon.svg, og-image.svg (y tus imágenes)
├── src/
│   ├── main.tsx               # punto de entrada React
│   ├── App.tsx                # composición de secciones
│   ├── index.css              # Tailwind + estilos base
│   ├── data/
│   │   └── content.ts         # 🔑 TODA la data editable (finanzas, textos, config)
│   └── components/
│       ├── Navbar.tsx         # menú sticky + hamburguesa móvil
│       ├── Hero.tsx           # + MetricCards
│       ├── SectionHeader.tsx  # encabezados de sección
│       ├── ExecutiveSummary.tsx
│       ├── Location.tsx
│       ├── AssetComposition.tsx
│       ├── PaymentTimeline.tsx
│       ├── Scenarios.tsx      # tabs de escenarios + gráficas
│       ├── Market.tsx         # comparables + precio/m²
│       ├── Absorption.tsx
│       ├── InvestmentThesis.tsx
│       ├── Timeline.tsx       # cronograma por fases
│       ├── RiskMatrix.tsx
│       ├── DueDiligenceChecklist.tsx
│       ├── FAQ.tsx
│       ├── Contact.tsx        # formulario Netlify Forms + WhatsApp
│       ├── Footer.tsx
│       ├── ImagePlaceholder.tsx
│       ├── Icon.tsx
│       └── charts/            # componentes Recharts + tema compartido
└── README.md
```

## Accesibilidad y performance

- HTML semántico, `alt` descriptivos, foco visible para teclado.
- Respeta `prefers-reduced-motion`.
- Code-splitting de `recharts` y `framer-motion` (ver `vite.config.ts`).
- Imágenes conceptuales en SVG (ligeras); usa `loading="lazy"` al añadir fotos reales.

---

**Confidencial.** Información para análisis preliminar de inversión.
