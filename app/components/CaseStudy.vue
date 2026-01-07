<script setup lang="ts">
const { t } = useI18n()

const systems = ['shop', 'wms', 'automation']
const highlightKeys = ['item1', 'item2', 'item3']
</script>

<template>
  <section id="project" class="case-study">
    <div class="container">
      <span class="case-study__label mono">{{ t('caseStudy.label') }}</span>
      <h2 class="case-study__headline">{{ t('caseStudy.headline') }}</h2>
      <p class="case-study__intro">{{ t('caseStudy.intro') }}</p>

      <div class="case-study__systems">
        <!-- Shop -->
        <div class="system-card">
          <div class="system-card__header">
            <div class="system-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M3 9h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                <path d="M3 9l2.45-4.9A2 2 0 017.24 3h9.52a2 2 0 011.79 1.1L21 9"/>
                <path d="M12 3v6"/>
              </svg>
            </div>
            <h3 class="system-card__title">{{ t('caseStudy.systems.shop.title') }}</h3>
          </div>
          <p class="system-card__description">{{ t('caseStudy.systems.shop.description') }}</p>
          <span class="system-card__tech mono">{{ t('caseStudy.systems.shop.tech') }}</span>
        </div>

        <!-- WawiFood -->
        <div class="system-card">
          <div class="system-card__header">
            <div class="system-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
              </svg>
            </div>
            <h3 class="system-card__title">{{ t('caseStudy.systems.wms.title') }}</h3>
          </div>
          <p class="system-card__description">{{ t('caseStudy.systems.wms.description') }}</p>
          <span class="system-card__tech mono">{{ t('caseStudy.systems.wms.tech') }}</span>
        </div>

        <!-- Gravur -->
        <div class="system-card">
          <div class="system-card__header">
            <div class="system-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M6 3h12l4 6-10 12L2 9l4-6z"/>
                <path d="M2 9h20"/>
                <path d="M10 9l2 12 2-12"/>
                <path d="M6 3l4 6"/>
                <path d="M18 3l-4 6"/>
              </svg>
            </div>
            <h3 class="system-card__title">{{ t('caseStudy.systems.automation.title') }}</h3>
          </div>
          <p class="system-card__description">{{ t('caseStudy.systems.automation.description') }}</p>
          <span class="system-card__tech mono">{{ t('caseStudy.systems.automation.tech') }}</span>
        </div>
      </div>

      <div class="case-study__architecture">
        <h3 class="architecture__title mono">{{ t('caseStudy.architecture.title') }}</h3>
        <div class="architecture__flow">
          <div class="architecture__node">
            <span class="architecture__node-name">Shop</span>
            <span class="architecture__node-tech">Laravel + Vue.js</span>
          </div>
          <span class="architecture__connector">→</span>
          <div class="architecture__node">
            <span class="architecture__node-name">REST API</span>
            <span class="architecture__node-tech">JSON / Webhooks</span>
          </div>
          <span class="architecture__connector">→</span>
          <div class="architecture__node">
            <span class="architecture__node-name">WawiFood</span>
            <span class="architecture__node-tech">Laravel + MySQL</span>
          </div>
          <span class="architecture__connector">→</span>
          <div class="architecture__node">
            <span class="architecture__node-name">PDF</span>
            <span class="architecture__node-tech">Druckertreiber</span>
          </div>
          <span class="architecture__connector">→</span>
          <div class="architecture__node">
            <span class="architecture__node-name">{{ t('caseStudy.architecture.engraving') }}</span>
            <span class="architecture__node-tech">Laser / CNC</span>
          </div>
        </div>
      </div>

      <div class="case-study__highlights">
        <h3 class="highlights__title">{{ t('caseStudy.highlights.title') }}</h3>
        <ul class="highlights__list">
          <li v-for="key in highlightKeys" :key="key" class="highlights__item">
            <span class="highlights__bullet accent">▸</span>
            {{ t(`caseStudy.highlights.${key}`) }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.case-study {
  background: var(--color-bg-secondary);
}

.case-study__label {
  display: inline-block;
  font-size: var(--text-xs);
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-4);
}

.case-study__headline {
  margin-bottom: var(--space-6);
}

.case-study__intro {
  font-size: var(--text-lg);
  margin-bottom: var(--space-16);
  max-width: 700px;
}

/* System Cards */
.case-study__systems {
  display: grid;
  gap: var(--space-6);
  margin-bottom: var(--space-16);
}

@media (min-width: 768px) {
  .case-study__systems {
    grid-template-columns: repeat(3, 1fr);
  }
}

.system-card {
  display: flex;
  flex-direction: column;
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: var(--space-6);
  transition: all var(--transition-base);
}

.system-card:hover {
  border-color: var(--color-accent);
  box-shadow: var(--shadow-glow);
}

.system-card__header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-3);
}

.system-card__icon {
  width: 28px;
  height: 28px;
  color: var(--color-accent);
  flex-shrink: 0;
}

.system-card__icon svg {
  width: 100%;
  height: 100%;
}

.system-card__title {
  font-size: var(--text-lg);
}

.system-card__description {
  font-size: var(--text-sm);
  margin-bottom: var(--space-4);
  line-height: var(--leading-relaxed);
}

.system-card__tech {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  margin-top: auto;
  padding-top: var(--space-3);
}

/* Architecture */
.case-study__architecture {
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: var(--space-8);
  margin-bottom: var(--space-16);
  text-align: center;
}

.architecture__title {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-6);
}

.architecture__flow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
}

@media (min-width: 768px) {
  .architecture__flow {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
}

.architecture__node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-3) var(--space-4);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  min-width: 100px;
  width: 100%;
  max-width: 200px;
}

@media (min-width: 768px) {
  .architecture__node {
    width: auto;
    max-width: none;
  }
}

.architecture__node-name {
  font-family: var(--font-display);
  font-size: var(--text-sm);
  color: var(--color-text-primary);
  font-weight: 500;
}

.architecture__node-tech {
  font-family: var(--font-display);
  font-size: var(--text-xs);
  color: var(--color-accent);
}

.architecture__connector {
  color: var(--color-accent);
  font-size: var(--text-lg);
  transform: rotate(90deg);
}

@media (min-width: 768px) {
  .architecture__connector {
    transform: rotate(0deg);
  }
}

/* Highlights */
.highlights__title {
  font-size: var(--text-xl);
  margin-bottom: var(--space-6);
}

.highlights__list {
  list-style: none;
}

.highlights__item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-3);
}

.highlights__bullet {
  flex-shrink: 0;
  margin-top: 2px;
}
</style>
