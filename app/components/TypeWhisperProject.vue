<script setup lang="ts">
const { t } = useI18n()

const highlightKeys = ['item1', 'item2', 'item3']
</script>

<template>
  <section>
    <div class="container">
      <span class="inline-block font-display text-xs text-accent uppercase tracking-widest mb-4">{{ t('typeWhisper.label') }}</span>
      <h2 class="mb-6">{{ t('typeWhisper.headline') }}</h2>
      <p class="text-lg mb-16 max-w-2xl">{{ t('typeWhisper.intro') }}</p>

      <div class="grid gap-6 mb-16 md:grid-cols-3">
        <!-- On-Device Transkription -->
        <div class="flex flex-col bg-bg-tertiary border border-border rounded-lg p-6 transition-all duration-base hover:border-accent hover:shadow-glow">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-7 h-7 text-accent shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-full h-full" aria-hidden="true">
                <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
                <path d="M19 10v2a7 7 0 01-14 0v-2" />
                <path d="M12 19v4" />
                <path d="M8 23h8" />
              </svg>
            </div>
            <h3 class="text-lg">{{ t('typeWhisper.systems.transcription.title') }}</h3>
          </div>
          <p class="text-sm mb-4 leading-relaxed">{{ t('typeWhisper.systems.transcription.description') }}</p>
          <span class="font-display text-xs text-text-muted mt-auto pt-3">{{ t('typeWhisper.systems.transcription.tech') }}</span>
        </div>

        <!-- KI-Textverarbeitung -->
        <div class="flex flex-col bg-bg-tertiary border border-border rounded-lg p-6 transition-all duration-base hover:border-accent hover:shadow-glow">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-7 h-7 text-accent shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-full h-full" aria-hidden="true">
                <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
                <path d="M5 19l1 3 1-3 3-1-3-1-1-3-1 3-3 1 3 1z" />
                <path d="M19 13l.75 2.25L22 16l-2.25.75L19 19l-.75-2.25L16 16l2.25-.75L19 13z" />
              </svg>
            </div>
            <h3 class="text-lg">{{ t('typeWhisper.systems.processing.title') }}</h3>
          </div>
          <p class="text-sm mb-4 leading-relaxed">{{ t('typeWhisper.systems.processing.description') }}</p>
          <span class="font-display text-xs text-text-muted mt-auto pt-3">{{ t('typeWhisper.systems.processing.tech') }}</span>
        </div>

        <!-- Systemintegration -->
        <div class="flex flex-col bg-bg-tertiary border border-border rounded-lg p-6 transition-all duration-base hover:border-accent hover:shadow-glow">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-7 h-7 text-accent shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-full h-full" aria-hidden="true">
                <path d="M4 17l6-6-6-6" />
                <path d="M12 19h8" />
              </svg>
            </div>
            <h3 class="text-lg">{{ t('typeWhisper.systems.integration.title') }}</h3>
          </div>
          <p class="text-sm mb-4 leading-relaxed">{{ t('typeWhisper.systems.integration.description') }}</p>
          <span class="font-display text-xs text-text-muted mt-auto pt-3">{{ t('typeWhisper.systems.integration.tech') }}</span>
        </div>
      </div>

      <div class="bg-bg-tertiary border border-border rounded-lg p-8 mb-16 text-center">
        <h3 class="font-display text-sm text-text-muted uppercase tracking-widest mb-6">{{ t('typeWhisper.architecture.title') }}</h3>
        <div class="flex flex-col items-center gap-2 md:flex-row md:justify-center md:flex-wrap">
          <div class="flex flex-col items-center gap-1 px-4 py-3 bg-bg-primary border border-border rounded min-w-[100px] w-full max-w-[200px] md:w-auto md:max-w-none">
            <span class="font-display text-sm text-text-primary font-medium">{{ t('typeWhisper.architecture.steps.input.label') }}</span>
            <span class="font-display text-xs text-accent">{{ t('typeWhisper.architecture.steps.input.tech') }}</span>
          </div>
          <span class="text-accent text-lg rotate-90 md:rotate-0">→</span>
          <div class="flex flex-col items-center gap-1 px-4 py-3 bg-bg-primary border border-border rounded min-w-[100px] w-full max-w-[200px] md:w-auto md:max-w-none">
            <span class="font-display text-sm text-text-primary font-medium">{{ t('typeWhisper.architecture.steps.ml.label') }}</span>
            <span class="font-display text-xs text-accent">{{ t('typeWhisper.architecture.steps.ml.tech') }}</span>
          </div>
          <span class="text-accent text-lg rotate-90 md:rotate-0">→</span>
          <div class="flex flex-col items-center gap-1 px-4 py-3 bg-bg-primary border border-border rounded min-w-[100px] w-full max-w-[200px] md:w-auto md:max-w-none">
            <span class="font-display text-sm text-text-primary font-medium">{{ t('typeWhisper.architecture.steps.llm.label') }}</span>
            <span class="font-display text-xs text-accent">{{ t('typeWhisper.architecture.steps.llm.tech') }}</span>
          </div>
          <span class="text-accent text-lg rotate-90 md:rotate-0">→</span>
          <div class="flex flex-col items-center gap-1 px-4 py-3 bg-bg-primary border border-border rounded min-w-[100px] w-full max-w-[200px] md:w-auto md:max-w-none">
            <span class="font-display text-sm text-text-primary font-medium">{{ t('typeWhisper.architecture.steps.output.label') }}</span>
            <span class="font-display text-xs text-accent">{{ t('typeWhisper.architecture.steps.output.tech') }}</span>
          </div>
        </div>
      </div>

      <div class="mb-16">
        <h3 class="text-xl mb-6">{{ t('typeWhisper.highlights.title') }}</h3>
        <ul class="list-none">
          <li v-for="key in highlightKeys" :key="key" class="flex items-start gap-3 text-text-secondary mb-3">
            <span class="text-accent shrink-0 mt-0.5">▸</span>
            {{ t(`typeWhisper.highlights.${key}`) }}
          </li>
        </ul>
      </div>

      <div class="flex flex-wrap gap-4">
        <a
          href="https://www.typewhisper.com"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 font-display text-sm text-text-primary px-5 py-2.5 border border-border rounded transition-all duration-base hover:border-accent hover:shadow-glow"
        >
          {{ t('typeWhisper.links.website') }}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-4 h-4" aria-hidden="true">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            <path d="M15 3h6v6" />
            <path d="M10 14L21 3" />
          </svg>
        </a>
        <a
          href="https://github.com/TypeWhisper"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 font-display text-sm text-text-primary px-5 py-2.5 border border-border rounded transition-all duration-base hover:border-accent hover:shadow-glow"
        >
          {{ t('typeWhisper.links.github') }}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
