<script setup lang="ts">
const { locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const isMenuOpen = ref(false)

const otherLocale = computed(() => {
  return locale.value === 'de' ? 'en' : 'de'
})

const otherLocaleName = computed(() => {
  return locale.value === 'de' ? 'EN' : 'DE'
})

// Generate anchor links that work from any page
function anchorLink(hash: string) {
  return `${localePath('/')}#${hash}`
}

function closeMenu() {
  isMenuOpen.value = false
}

// Close menu on route change
watch(() => route.fullPath, () => {
  closeMenu()
})
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-[10px] border-b border-border">
    <div class="container flex items-center justify-between h-16">
      <NuxtLink :to="localePath('/')" class="font-display text-lg font-semibold text-text-primary tracking-wide transition-colors duration-fast hover:text-accent">
        <span class="text-accent">&lt;</span>M.H.<span class="text-accent">/&gt;</span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex gap-8">
        <NuxtLink :to="anchorLink('project')" class="text-sm text-text-secondary transition-colors duration-fast hover:text-text-primary">{{ $t('nav.project') }}</NuxtLink>
        <NuxtLink :to="anchorLink('experience')" class="text-sm text-text-secondary transition-colors duration-fast hover:text-text-primary">{{ $t('nav.experience') }}</NuxtLink>
        <NuxtLink :to="anchorLink('stack')" class="text-sm text-text-secondary transition-colors duration-fast hover:text-text-primary">{{ $t('nav.stack') }}</NuxtLink>
        <NuxtLink :to="localePath('/blog')" class="text-sm text-text-secondary transition-colors duration-fast hover:text-text-primary">{{ $t('nav.blog') }}</NuxtLink>
        <NuxtLink :to="anchorLink('contact')" class="text-sm text-text-secondary transition-colors duration-fast hover:text-text-primary">{{ $t('nav.contact') }}</NuxtLink>
      </nav>

      <div class="flex items-center gap-4">
        <NuxtLink
          :to="localePath('/', otherLocale)"
          class="font-display text-sm text-text-secondary px-2 py-1 border border-border rounded transition-all duration-fast hover:text-text-primary hover:border-border-hover"
          :aria-label="`Switch to ${otherLocaleName}`"
        >
          {{ otherLocaleName }}
        </NuxtLink>

        <a
          href="https://github.com/SeoFood"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden md:flex items-center justify-center text-text-secondary transition-colors duration-fast hover:text-text-primary"
          aria-label="GitHub Profile"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>

        <!-- Burger Button (Mobile) -->
        <button
          class="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          :aria-label="isMenuOpen ? 'Menü schließen' : 'Menü öffnen'"
          :aria-expanded="isMenuOpen"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span
            class="w-5 h-0.5 bg-text-primary transition-all duration-200"
            :class="isMenuOpen ? 'rotate-45 translate-y-2' : ''"
          />
          <span
            class="w-5 h-0.5 bg-text-primary transition-all duration-200"
            :class="isMenuOpen ? 'opacity-0' : ''"
          />
          <span
            class="w-5 h-0.5 bg-text-primary transition-all duration-200"
            :class="isMenuOpen ? '-rotate-45 -translate-y-2' : ''"
          />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="menu">
      <nav
        v-if="isMenuOpen"
        class="md:hidden absolute top-16 left-0 right-0 bg-bg-primary/95 backdrop-blur-[10px] border-b border-border"
      >
        <div class="container py-6 flex flex-col gap-4">
          <NuxtLink
            :to="anchorLink('project')"
            class="text-base text-text-secondary transition-colors duration-fast hover:text-text-primary py-2"
            @click="closeMenu"
          >
            {{ $t('nav.project') }}
          </NuxtLink>
          <NuxtLink
            :to="anchorLink('experience')"
            class="text-base text-text-secondary transition-colors duration-fast hover:text-text-primary py-2"
            @click="closeMenu"
          >
            {{ $t('nav.experience') }}
          </NuxtLink>
          <NuxtLink
            :to="anchorLink('stack')"
            class="text-base text-text-secondary transition-colors duration-fast hover:text-text-primary py-2"
            @click="closeMenu"
          >
            {{ $t('nav.stack') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/blog')"
            class="text-base text-text-secondary transition-colors duration-fast hover:text-text-primary py-2"
            @click="closeMenu"
          >
            {{ $t('nav.blog') }}
          </NuxtLink>
          <NuxtLink
            :to="anchorLink('contact')"
            class="text-base text-text-secondary transition-colors duration-fast hover:text-text-primary py-2"
            @click="closeMenu"
          >
            {{ $t('nav.contact') }}
          </NuxtLink>

          <div class="flex items-center gap-4 pt-4 border-t border-border mt-2">
            <a
              href="https://github.com/SeoFood"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center text-text-secondary transition-colors duration-fast hover:text-text-primary"
              aria-label="GitHub Profile"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: all 0.2s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
