<script setup lang="ts">
const { t } = useI18n()

const systems = ['shop', 'wms', 'automation']
const highlightKeys = ['item1', 'item2', 'item3']
</script>

<template>
  <section id="project" class="bg-bg-secondary">
    <div class="container">
      <span class="inline-block font-display text-xs text-accent uppercase tracking-widest mb-4">{{ t('caseStudy.label') }}</span>
      <h2 class="mb-6">{{ t('caseStudy.headline') }}</h2>
      <p class="text-lg mb-16 max-w-2xl">{{ t('caseStudy.intro') }}</p>

      <div class="grid gap-6 mb-16 md:grid-cols-3">
        <!-- Shop -->
        <div class="flex flex-col bg-bg-tertiary border border-border rounded-lg p-6 transition-all duration-base hover:border-accent hover:shadow-glow">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-7 h-7 text-accent shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-full h-full">
                <path d="M3 9h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                <path d="M3 9l2.45-4.9A2 2 0 017.24 3h9.52a2 2 0 011.79 1.1L21 9"/>
                <path d="M12 3v6"/>
              </svg>
            </div>
            <h3 class="text-lg">{{ t('caseStudy.systems.shop.title') }}</h3>
          </div>
          <p class="text-sm mb-4 leading-relaxed">{{ t('caseStudy.systems.shop.description') }}</p>
          <span class="font-display text-xs text-text-muted mt-auto pt-3">{{ t('caseStudy.systems.shop.tech') }}</span>
        </div>

        <!-- WawiFood -->
        <div class="flex flex-col bg-bg-tertiary border border-border rounded-lg p-6 transition-all duration-base hover:border-accent hover:shadow-glow">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-7 h-7 text-accent shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-full h-full">
                <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
              </svg>
            </div>
            <h3 class="text-lg">{{ t('caseStudy.systems.wms.title') }}</h3>
          </div>
          <p class="text-sm mb-4 leading-relaxed">{{ t('caseStudy.systems.wms.description') }}</p>
          <span class="font-display text-xs text-text-muted mt-auto pt-3">{{ t('caseStudy.systems.wms.tech') }}</span>
        </div>

        <!-- Gravur -->
        <div class="flex flex-col bg-bg-tertiary border border-border rounded-lg p-6 transition-all duration-base hover:border-accent hover:shadow-glow">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-7 h-7 text-accent shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-full h-full">
                <path d="M6 3h12l4 6-10 12L2 9l4-6z"/>
                <path d="M2 9h20"/>
                <path d="M10 9l2 12 2-12"/>
                <path d="M6 3l4 6"/>
                <path d="M18 3l-4 6"/>
              </svg>
            </div>
            <h3 class="text-lg">{{ t('caseStudy.systems.automation.title') }}</h3>
          </div>
          <p class="text-sm mb-4 leading-relaxed">{{ t('caseStudy.systems.automation.description') }}</p>
          <span class="font-display text-xs text-text-muted mt-auto pt-3">{{ t('caseStudy.systems.automation.tech') }}</span>
        </div>
      </div>

      <div class="bg-bg-tertiary border border-border rounded-lg p-8 mb-16 text-center">
        <h3 class="font-display text-sm text-text-muted uppercase tracking-widest mb-6">{{ t('caseStudy.architecture.title') }}</h3>
        <div class="flex flex-col items-center gap-2 md:flex-row md:justify-center md:flex-wrap">
          <div class="flex flex-col items-center gap-1 px-4 py-3 bg-bg-primary border border-border rounded min-w-[100px] w-full max-w-[200px] md:w-auto md:max-w-none">
            <span class="font-display text-sm text-text-primary font-medium">Shop</span>
            <span class="font-display text-xs text-accent">Laravel + Vue.js</span>
          </div>
          <span class="text-accent text-lg rotate-90 md:rotate-0">→</span>
          <div class="flex flex-col items-center gap-1 px-4 py-3 bg-bg-primary border border-border rounded min-w-[100px] w-full max-w-[200px] md:w-auto md:max-w-none">
            <span class="font-display text-sm text-text-primary font-medium">REST API</span>
            <span class="font-display text-xs text-accent">JSON / Webhooks</span>
          </div>
          <span class="text-accent text-lg rotate-90 md:rotate-0">→</span>
          <div class="flex flex-col items-center gap-1 px-4 py-3 bg-bg-primary border border-border rounded min-w-[100px] w-full max-w-[200px] md:w-auto md:max-w-none">
            <span class="font-display text-sm text-text-primary font-medium">WawiFood</span>
            <span class="font-display text-xs text-accent">Laravel + MySQL</span>
          </div>
          <span class="text-accent text-lg rotate-90 md:rotate-0">→</span>
          <div class="flex flex-col items-center gap-1 px-4 py-3 bg-bg-primary border border-border rounded min-w-[100px] w-full max-w-[200px] md:w-auto md:max-w-none">
            <span class="font-display text-sm text-text-primary font-medium">PDF</span>
            <span class="font-display text-xs text-accent">Druckertreiber</span>
          </div>
          <span class="text-accent text-lg rotate-90 md:rotate-0">→</span>
          <div class="flex flex-col items-center gap-1 px-4 py-3 bg-bg-primary border border-border rounded min-w-[100px] w-full max-w-[200px] md:w-auto md:max-w-none">
            <span class="font-display text-sm text-text-primary font-medium">{{ t('caseStudy.architecture.engraving') }}</span>
            <span class="font-display text-xs text-accent">Laser / CNC</span>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl mb-6">{{ t('caseStudy.highlights.title') }}</h3>
        <ul class="list-none">
          <li v-for="key in highlightKeys" :key="key" class="flex items-start gap-3 text-text-secondary mb-3">
            <span class="text-accent shrink-0 mt-0.5">▸</span>
            {{ t(`caseStudy.highlights.${key}`) }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
