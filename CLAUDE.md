# hillger.net - Portfolio Website

## Project Overview

Personal portfolio website for Marco Hillger, Senior Fullstack Developer with 17+ years of experience.
Used as reference for job applications. Live at [hillger.net](https://hillger.net).

## Tech Stack

- **Framework**: Nuxt 4 (Vue 3, TypeScript)
- **Package Manager**: bun
- **Styling**: Custom CSS Design System (no UI library)
- **i18n**: @nuxtjs/i18n (German default, English at /en)
- **Fonts**: @nuxt/fonts (JetBrains Mono, IBM Plex Sans)
- **Deployment**: Vercel (static generation with `vercel-static` preset)

## Commands

```bash
bun dev          # Start dev server on localhost:3000
bun build        # Build for production
bun generate     # Generate static site
bun preview      # Preview production build
```

## Project Structure

```
app/
├── app.vue                    # Root component
├── assets/css/
│   ├── variables.css          # CSS custom properties (colors, spacing, typography)
│   └── base.css               # Global styles, imports variables.css
├── components/
│   ├── TheHeader.vue          # Fixed header with <M.H./> logo, nav, language switcher
│   ├── TheHero.vue            # Avatar, name, title, tagline, CTA button
│   ├── CaseStudy.vue          # SeoFood showcase with system cards & architecture diagram
│   ├── ExperienceTimeline.vue # Career timeline (valuemedia, SeoFood, finanzen Group)
│   ├── Background.vue         # Education & Languages section
│   ├── TechStack.vue          # Tech categories grid (Frontend, Backend, APIs, DevOps, E-Commerce)
│   ├── Interests.vue          # Home Automation & Networking hobbies
│   └── TheFooter.vue          # Contact section with social links
├── pages/
│   └── index.vue              # Main page composing all sections
i18n/
├── de.json                    # German translations (primary)
├── en.json                    # English translations
public/
├── avatar.jpg                 # Profile photo (used in Hero)
├── favicon.ico, favicon.svg   # Favicons from realfavicongenerator.net
└── site.webmanifest           # PWA manifest
```

## Design System

### Colors (CSS Variables)
- `--color-bg`: #0a0a0f (anthracite)
- `--color-text-primary`: #f4f1eb (off-white)
- `--color-text-secondary`: #8a8a8a
- `--color-accent`: #c9a66b (copper)
- `--color-border`: rgba(201, 166, 107, 0.15)

### Typography
- **Display/Mono**: JetBrains Mono (logo, code, highlights)
- **Body**: IBM Plex Sans (paragraphs, navigation)

### Aesthetic
"Engineered Precision" - technical, clean, professional dark theme with subtle blueprint grid background.

## Content Sections

1. **Hero**: Avatar, name "Marco Hillger", title, tagline, "Kontakt" CTA
2. **Case Study (SeoFood)**: 11-year project with 3 system cards:
   - Shop-System (custom e-commerce with live engraving preview)
   - WawiFood (WMS for inventory, orders, shipping)
   - Gravur-Automatisierung (PDF-based printer driver for engraving machines)
   - Architecture diagram showing data flow between systems
3. **Experience Timeline**: valuemedia (2024), SeoFood (2013-2024), finanzen Group (2006-2013)
4. **Background**: Education (SRH Hochschule Berlin), Languages (German native, English business)
5. **Tech Stack**: Frontend, Backend, APIs, DevOps, E-Commerce categories
6. **Interests**: Home Automation (Home Assistant), Networking (UniFi, VLANs, Firewalls)
7. **Footer/Contact**: Email, LinkedIn, GitHub, X links

## i18n Strategy

- Default locale: `de` (no prefix)
- English: `/en` prefix
- Strategy: `prefix_except_default`
- Browser detection with cookie persistence

## Responsive Design

- Mobile-first approach
- Header nav hidden on mobile (< 768px)
- Architecture diagram: vertical flow on mobile, horizontal on desktop
- Avatar: centered on mobile, left of name on desktop
- `scroll-margin-top: 80px` on sections for fixed header offset

## Deployment

- GitHub repo: [github.com/SeoFood/hillger.net](https://github.com/SeoFood/hillger.net)
- Vercel project connected to GitHub for automatic deployments
- Custom domain: hillger.net
