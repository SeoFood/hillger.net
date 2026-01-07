// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/i18n',
    '@nuxt/fonts',
    '@vueuse/nuxt',
  ],

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
      meta: [
        { name: 'description', content: 'Senior Fullstack Developer mit 17+ Jahren Erfahrung. E-Commerce, Produktionsautomatisierung, skalierbare Web-Architekturen.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0a0a0f' },
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
