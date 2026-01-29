<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="h-dvh flex items-center justify-center px-6 md:px-12 lg:px-24 pt-20 pb-8">
    <div class="w-full max-w-3xl">
      <div class="flex flex-col items-center text-center gap-3 mb-3 md:flex-row md:items-center md:text-left md:gap-6 md:mb-4">
        <img
          src="/avatar.jpeg"
          alt="Marco Hillger"
          width="120"
          height="120"
          fetchpriority="high"
          class="w-20 h-20 md:w-28 md:h-28 lg:w-[120px] lg:h-[120px] rounded-full object-cover border-2 md:border-[3px] border-accent shrink-0 animate-fade-in-up"
        />
        <div class="flex flex-col gap-0.5 md:gap-1">
          <h1 class="text-2xl md:text-4xl lg:text-5xl font-medium text-text-primary animate-fade-in-up" style="animation-delay: 50ms">
            {{ t('hero.greeting') }}
          </h1>
          <p class="font-display text-base md:text-lg lg:text-xl text-accent tracking-wide animate-fade-in-up" style="animation-delay: 100ms">
            {{ t('hero.title') }}
          </p>
        </div>
      </div>
      <div class="w-16 md:w-20 h-0.5 bg-accent mb-4 md:mb-6 animate-fade-in-up" style="animation-delay: 150ms"></div>
      <p class="text-lg md:text-xl lg:text-2xl text-text-secondary leading-relaxed mb-6 md:mb-10 lg:mb-12 max-w-[550px] animate-fade-in-up" style="animation-delay: 200ms">
        {{ t('hero.tagline') }}
      </p>
      <a href="#project" class="inline-flex items-center gap-2 font-display text-sm text-text-primary px-5 py-2.5 md:px-6 md:py-3 border border-border rounded transition-all duration-base hover:border-accent hover:shadow-glow group animate-fade-in-up" style="animation-delay: 300ms">
        {{ t('hero.cta') }}
        <span class="transition-transform duration-fast group-hover:translate-y-[3px]">↓</span>
      </a>
    </div>
  </section>
</template>
