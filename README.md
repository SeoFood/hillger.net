# hillger.net

Personal portfolio website for Marco Hillger, Senior Fullstack Developer with 17+ years of experience in E-Commerce and production automation.

**Live**: [hillger.net](https://hillger.net)

## Tech Stack

- **Framework**: Nuxt 4 (Vue 3, TypeScript)
- **Package Manager**: bun
- **Styling**: Custom CSS Design System
- **i18n**: German (default) / English
- **Hosting**: Vercel (Static Generation)

## Setup

```bash
# Install dependencies
bun install

# Start dev server (http://localhost:3000)
bun dev

# Build for production
bun build

# Preview production build
bun preview
```

## Project Structure

```
app/
├── app.vue                 # Root component
├── assets/css/             # Design system (variables, base styles)
├── components/
│   ├── TheHeader.vue       # Fixed navigation header
│   ├── TheHero.vue         # Hero section with avatar
│   ├── CaseStudy.vue       # SeoFood project showcase
│   ├── ExperienceTimeline.vue
│   ├── Background.vue      # Education & Languages
│   ├── TechStack.vue       # Technology categories
│   ├── Interests.vue       # Home Automation & Networking
│   └── TheFooter.vue       # Contact links
├── pages/
│   └── index.vue           # Main page
i18n/
├── de.json                 # German translations
├── en.json                 # English translations
public/
├── avatar.jpg              # Profile photo
├── favicon.ico             # Favicons
└── site.webmanifest        # PWA manifest
```

## Design

**Aesthetic**: "Engineered Precision" - dark theme with blueprint-inspired grid background

- **Colors**: Anthracite (#0a0a0f), Off-white (#f4f1eb), Copper accent (#c9a66b)
- **Typography**: JetBrains Mono (display) + IBM Plex Sans (body)

## Links

- **Website**: [hillger.net](https://hillger.net)
- **GitHub**: [github.com/SeoFood](https://github.com/SeoFood)
- **LinkedIn**: [linkedin.com/in/marco-hillger](https://linkedin.com/in/marco-hillger)
