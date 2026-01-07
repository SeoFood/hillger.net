# hillger.net - Portfolio Website

## Project Overview

Personal portfolio website for Marco Hillger, Senior Fullstack Developer.
Used as reference for job applications.

## Tech Stack

- **Framework**: Nuxt 4 (Vue 3)
- **Package Manager**: bun
- **Styling**: Custom CSS (no UI library)
- **i18n**: @nuxtjs/i18n (German default, English at /en)
- **Deployment**: Vercel (static generation)

## Commands

```bash
bun dev          # Start dev server
bun build        # Build for production
bun generate     # Generate static site
bun preview      # Preview production build
```

## Project Structure

```
app/
├── app.vue           # Root component
├── assets/css/       # Styles (variables.css, base.css)
├── components/       # Vue components
├── composables/      # Composables
├── pages/            # Pages (index.vue)
i18n/
├── de.json           # German translations
├── en.json           # English translations
```

## Design System

- **Colors**: Dark theme with anthracite (#0a0a0f), off-white (#f4f1eb), copper accent (#c9a66b)
- **Typography**: JetBrains Mono (display), IBM Plex Sans (body)
- **Aesthetic**: "Engineered Precision" - technical, clean, professional

## Content Focus

- Main project showcase: SeoFood (11 years, custom shop system, WMS, production automation)
- Secondary: valuemedia, finanzen Group experience
- Languages: German (primary), English (secondary)
