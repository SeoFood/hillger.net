import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/pages/**/*.{vue,js,ts}',
    './app/layouts/**/*.{vue,js,ts}',
    './app/app.vue',
    './content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0f',
        'bg-secondary': '#12121a',
        'bg-tertiary': '#1a1a24',
        'text-primary': '#f4f1eb',
        'text-secondary': '#a8a8a8',
        'text-muted': '#6a6a6a',
        accent: '#c9a66b',
        'accent-hover': '#d4b57a',
        'accent-glow': 'rgba(201, 166, 107, 0.15)',
        border: 'rgba(244, 241, 235, 0.1)',
        'border-hover': 'rgba(244, 241, 235, 0.2)',
      },
      fontFamily: {
        display: ['JetBrains Mono', 'monospace'],
        body: ['IBM Plex Sans', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': ['3.5rem', { lineHeight: '1.2' }],
      },
      lineHeight: {
        tight: '1.2',
        normal: '1.5',
        relaxed: '1.7',
      },
      spacing: {
        '18': '4.5rem',
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        glow: '0 0 20px rgba(201, 166, 107, 0.15)',
      },
      transitionDuration: {
        fast: '150ms',
        base: '250ms',
        slow: '400ms',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.4s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
