<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()

const otherLocale = computed(() => {
  return locale.value === 'de' ? 'en' : 'de'
})

const otherLocaleName = computed(() => {
  return locale.value === 'de' ? 'EN' : 'DE'
})
</script>

<template>
  <header class="header">
    <div class="header__inner container">
      <NuxtLink :to="localePath('/')" class="header__logo mono">
        <span class="header__logo-bracket">&lt;</span>M.H.<span class="header__logo-bracket">/&gt;</span>
      </NuxtLink>

      <nav class="header__nav">
        <a href="#project" class="header__link">{{ $t('nav.project') }}</a>
        <a href="#experience" class="header__link">{{ $t('nav.experience') }}</a>
        <a href="#stack" class="header__link">{{ $t('nav.stack') }}</a>
        <a href="#contact" class="header__link">{{ $t('nav.contact') }}</a>
      </nav>

      <div class="header__actions">
        <NuxtLink
          :to="localePath('/', otherLocale)"
          class="header__locale mono"
          :aria-label="`Switch to ${otherLocaleName}`"
        >
          {{ otherLocaleName }}
        </NuxtLink>

        <a
          href="https://github.com/SeoFood"
          target="_blank"
          rel="noopener noreferrer"
          class="header__github"
          aria-label="GitHub Profile"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: var(--blur-bg);
  border-bottom: 1px solid var(--color-border);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.header__logo {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-text-primary);
  letter-spacing: 0.05em;
  transition: color var(--transition-fast);
}

.header__logo:hover {
  color: var(--color-accent);
}

.header__logo-bracket {
  color: var(--color-accent);
}

.header__nav {
  display: none;
  gap: var(--space-8);
}

@media (min-width: 768px) {
  .header__nav {
    display: flex;
  }
}

.header__link {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  transition: color var(--transition-fast);
}

.header__link:hover {
  color: var(--color-text-primary);
}

.header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.header__locale {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  padding: var(--space-1) var(--space-2);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  transition: all var(--transition-fast);
}

.header__locale:hover {
  color: var(--color-text-primary);
  border-color: var(--color-border-hover);
}

.header__github {
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color var(--transition-fast);
}

.header__github:hover {
  color: var(--color-text-primary);
}
</style>
