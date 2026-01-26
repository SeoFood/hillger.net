// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@vueuse/nuxt',
  ],

  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark',
          langs: ['typescript', 'javascript', 'vue', 'html', 'css', 'json', 'bash', 'php', 'yaml', 'markdown'],
        },
      },
    },
  },

  site: {
    url: 'https://hillger.net',
  },

  css: ['~/assets/css/base.css'],

  i18n: {
    locales: [
      { code: 'de', language: 'de-DE', name: 'Deutsch', file: 'de.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
    ],
    defaultLocale: 'de',
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: '../i18n',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      fallbackLocale: 'de',
    },
  },

  fonts: {
    defaults: {
      preload: true,
    },
    families: [
      {
        name: 'JetBrains Mono',
        provider: 'google',
        weights: [400, 500, 600],
      },
      {
        name: 'IBM Plex Sans',
        provider: 'google',
        weights: [400, 500, 600],
      },
    ],
  },

  app: {
    head: {
      title: 'Marco Hillger | Senior Fullstack Developer',
      style: [
        {
          innerHTML: 'html,body{background:#0a0a0f;color:#f4f1eb}',
        },
      ],
      meta: [
        { name: 'description', content: 'Senior Fullstack Developer mit 17+ Jahren Erfahrung. E-Commerce, Produktionsautomatisierung, skalierbare Web-Architekturen.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0a0a0f' },
        // Open Graph
        { property: 'og:type', content: 'profile' },
        { property: 'og:title', content: 'Marco Hillger | Senior Fullstack Developer' },
        { property: 'og:description', content: 'Senior Fullstack Developer mit 17+ Jahren Erfahrung. E-Commerce, Produktionsautomatisierung, skalierbare Web-Architekturen.' },
        { property: 'og:image', content: 'https://hillger.net/og-image.png' },
        { property: 'og:url', content: 'https://hillger.net' },
        { property: 'og:site_name', content: 'Marco Hillger' },
        { property: 'og:locale', content: 'de_DE' },
        { property: 'og:locale:alternate', content: 'en_US' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@SeoFood' },
        { name: 'twitter:creator', content: '@SeoFood' },
        { name: 'twitter:title', content: 'Marco Hillger | Senior Fullstack Developer' },
        { name: 'twitter:description', content: 'Senior Fullstack Developer mit 17+ Jahren Erfahrung. E-Commerce, Produktionsautomatisierung, skalierbare Web-Architekturen.' },
        { name: 'twitter:image', content: 'https://hillger.net/og-image.png' },
        // Profile
        { property: 'profile:first_name', content: 'Marco' },
        { property: 'profile:last_name', content: 'Hillger' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      htmlAttrs: {
        lang: 'de',
      },
    },
  },

  nitro: {
    preset: 'vercel-static',
  },
})
