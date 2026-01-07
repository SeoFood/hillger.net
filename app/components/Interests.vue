<script setup lang="ts">
const { t } = useI18n()

const interests = [
  { key: 'homeAutomation' },
  { key: 'networking' },
]
</script>

<template>
  <section id="interests" class="interests">
    <div class="container">
      <span class="interests__label mono">{{ t('interests.label') }}</span>
      <h2 class="interests__title">{{ t('interests.title') }}</h2>

      <div class="interests__grid">
        <!-- Home Automation -->
        <div class="interest-card">
          <div class="interest-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
              <path d="M9 22V12h6v10"/>
            </svg>
          </div>
          <div class="interest-card__content">
            <h3 class="interest-card__title">{{ t('interests.items.homeAutomation.title') }}</h3>
            <p class="interest-card__description">{{ t('interests.items.homeAutomation.description') }}</p>
            <span class="interest-card__tech mono">{{ t('interests.items.homeAutomation.tech') }}</span>
          </div>
        </div>

        <!-- Networking -->
        <div class="interest-card">
          <div class="interest-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 2a3 3 0 00-3 3v1H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-4V5a3 3 0 00-3-3z"/>
              <path d="M8 12h8"/>
              <path d="M8 16h8"/>
              <circle cx="12" cy="5" r="1"/>
            </svg>
          </div>
          <div class="interest-card__content">
            <h3 class="interest-card__title">{{ t('interests.items.networking.title') }}</h3>
            <p class="interest-card__description">{{ t('interests.items.networking.description') }}</p>
            <span class="interest-card__tech mono">{{ t('interests.items.networking.tech') }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.interests__label {
  display: inline-block;
  font-size: var(--text-xs);
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-4);
}

.interests__title {
  margin-bottom: var(--space-8);
}

.interests__grid {
  display: grid;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .interests__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.interest-card {
  display: flex;
  gap: var(--space-4);
  padding: var(--space-6);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  transition: all var(--transition-base);
}

.interest-card:hover {
  border-color: var(--color-accent);
  box-shadow: var(--shadow-glow);
}

.interest-card__icon {
  width: 32px;
  height: 32px;
  color: var(--color-accent);
  flex-shrink: 0;
}

.interest-card__icon svg {
  width: 100%;
  height: 100%;
}

.interest-card__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.interest-card__title {
  font-size: var(--text-lg);
}

.interest-card__description {
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
}

.interest-card__tech {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  margin-top: var(--space-2);
}
</style>
