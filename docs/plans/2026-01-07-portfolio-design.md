# Portfolio Website Design - hillger.net

## Zusammenfassung

Persönliche Portfolio-Webseite für Marco Hillger als Referenz für Bewerbungen.
Senior Fullstack Developer mit 17+ Jahren Erfahrung, Schwerpunkt E-Commerce & Produktionsautomatisierung.

## Ästhetische Richtung: "Engineered Precision"

Technische Präzision mit menschlicher Wärme - das Design spiegelt die Arbeit wider:
Produktionsautomatisierung, Maschinensteuerung, Echtzeit-Systeme.

### Farbschema

- **Background**: Tiefes Anthrazit `#0a0a0f`
- **Text Primary**: Warmes Off-White `#f4f1eb`
- **Text Secondary**: `#8a8a8a`
- **Akzent**: Kupfer/Bronze `#c9a66b`

### Typografie

- **Display/Headlines**: JetBrains Mono (technisch, charaktervoll)
- **Body**: IBM Plex Sans (lesbar, modern, nicht generisch)

### Visuelle Details

- Subtiles Blueprint-Raster im Hintergrund
- Minimale, präzise Animationen ("einrastend", nicht floatend)
- Dark Mode als Default

## Seitenstruktur

Single Page mit Sektionen, smooth scroll:

### 1. Header (fixed)
- Logo/Initialen "M.H."
- Sprachwechsel DE/EN
- GitHub-Link

### 2. Hero (viewport height)
- Name: Marco Hillger
- Titel: Senior Fullstack Developer
- Tagline: "Ich baue Systeme, die Produktion mit E-Commerce verbinden."
- CTA: Scroll zum Projekt

### 3. SeoFood Case Study (Hauptfokus)
- Headline: "11 Jahre. Ein System. Alles selbst gebaut."
- Drei Bereiche: Shopsystem (Vue.js), WMS (Laravel), Produktion (REST APIs)
- Animiertes Architektur-Diagramm: Shop → API → WMS → Maschinen → Drucker

### 4. Erfahrung (Timeline)
- 2024: valuemedia - E-Commerce Shopify
- 2013: SeoFood - Gründer & Lead Dev
- 2006: finanzen Group - Senior Developer

### 5. Tech Stack
- Grid-Layout, Monospace
- TypeScript, Vue.js, Laravel, Node.js, Docker, AWS, GraphQL, MySQL
- Hover: Kupfer-Glow-Effekt

### 6. Kontakt
- E-Mail: marco@seofood.de
- LinkedIn, GitHub Links

## Technische Umsetzung

### Stack
- **Framework**: Nuxt.js 3
- **Styling**: CSS (keine UI-Library)
- **i18n**: @nuxtjs/i18n (DE default, EN unter /en)
- **Deployment**: Vercel (Static Generation)

### Projektstruktur

```
hillger.net/
├── nuxt.config.ts
├── app.vue
├── assets/
│   ├── css/
│   │   ├── variables.css
│   │   └── base.css
│   └── fonts/
├── components/
│   ├── TheHeader.vue
│   ├── TheHero.vue
│   ├── CaseStudy.vue
│   ├── ArchitectureDiagram.vue
│   ├── Timeline.vue
│   ├── TechStack.vue
│   └── TheFooter.vue
├── composables/
│   └── useLocale.ts
├── i18n/
│   ├── de.json
│   └── en.json
├── pages/
│   └── index.vue
└── public/
    └── favicon.ico
```

### Nuxt-Module
- `@nuxtjs/i18n` - Mehrsprachigkeit
- `@nuxt/fonts` - Font-Loading
- `@vueuse/nuxt` - Utilities (Intersection Observer)

### Performance-Ziele
- Lighthouse Score: 95+
- Fonts vorgeladen
- Kritisches CSS inline
- Statisch generiert (minimaler JS-Footprint)

## Sprachen

- **Deutsch**: Default (/)
- **Englisch**: /en

Fokus auf deutschen Content, englische Version als Option.
