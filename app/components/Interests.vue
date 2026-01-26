<script setup lang="ts">
const { t } = useI18n()

const interests = [
  { key: 'homeAutomation' },
  { key: 'networking' },
  { key: 'ai' },
  { key: 'travel' },
]
</script>

<template>
  <section id="interests">
    <div class="container">
      <span class="inline-block font-display text-xs text-accent uppercase tracking-widest mb-4">{{ t('interests.label') }}</span>
      <h2 class="mb-8">{{ t('interests.title') }}</h2>

      <div class="grid gap-6 md:grid-cols-2">
        <!-- Home Automation -->
        <div class="flex gap-4 p-6 bg-bg-secondary border border-border rounded-lg transition-all duration-base hover:border-accent hover:shadow-glow">
          <div class="w-8 h-8 text-accent shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-full h-full">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
              <path d="M9 22V12h6v10"/>
            </svg>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-lg">{{ t('interests.items.homeAutomation.title') }}</h3>
            <p class="text-sm leading-relaxed">{{ t('interests.items.homeAutomation.description') }}</p>
            <span class="font-display text-xs text-text-muted mt-auto pt-3">{{ t('interests.items.homeAutomation.tech') }}</span>
          </div>
        </div>

        <!-- Networking -->
        <div class="flex gap-4 p-6 bg-bg-secondary border border-border rounded-lg transition-all duration-base hover:border-accent hover:shadow-glow">
          <div class="w-8 h-8 text-accent shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-full h-full">
              <path d="M12 2a3 3 0 00-3 3v1H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-4V5a3 3 0 00-3-3z"/>
              <path d="M8 12h8"/>
              <path d="M8 16h8"/>
              <circle cx="12" cy="5" r="1"/>
            </svg>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-lg">{{ t('interests.items.networking.title') }}</h3>
            <p class="text-sm leading-relaxed">{{ t('interests.items.networking.description') }}</p>
            <span class="font-display text-xs text-text-muted mt-auto pt-3">{{ t('interests.items.networking.tech') }}</span>
          </div>
        </div>

        <!-- AI -->
        <div class="flex gap-4 p-6 bg-bg-secondary border border-border rounded-lg transition-all duration-base hover:border-accent hover:shadow-glow">
          <div class="w-8 h-8 text-accent shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-full h-full">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 2v4"/>
              <path d="M12 18v4"/>
              <path d="M4.93 4.93l2.83 2.83"/>
              <path d="M16.24 16.24l2.83 2.83"/>
              <path d="M2 12h4"/>
              <path d="M18 12h4"/>
              <path d="M4.93 19.07l2.83-2.83"/>
              <path d="M16.24 7.76l2.83-2.83"/>
            </svg>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-lg">{{ t('interests.items.ai.title') }}</h3>
            <p class="text-sm leading-relaxed">{{ t('interests.items.ai.description') }}</p>
            <span class="font-display text-xs text-text-muted mt-auto pt-3">{{ t('interests.items.ai.tech') }}</span>
          </div>
        </div>

        <!-- Travel -->
        <div class="flex gap-4 p-6 bg-bg-secondary border border-border rounded-lg transition-all duration-base hover:border-accent hover:shadow-glow">
          <div class="w-8 h-8 text-accent shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-full h-full">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20"/>
              <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
            </svg>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-lg">{{ t('interests.items.travel.title') }}</h3>
            <p class="text-sm leading-relaxed">{{ t('interests.items.travel.description') }}</p>
            <span class="font-display text-xs text-text-muted mt-auto pt-3">{{ t('interests.items.travel.tech') }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
