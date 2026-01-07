<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="background">
    <div class="container">
      <div class="background__grid">
        <div class="background__item">
          <h3 class="background__title mono">{{ t('background.education.title') }}</h3>
          <p class="background__degree">{{ t('background.education.degree') }}</p>
          <p class="background__school">{{ t('background.education.school') }}</p>
          <span class="background__period mono">{{ t('background.education.period') }}</span>
        </div>

        <div class="background__item">
          <h3 class="background__title mono">{{ t('background.languages.title') }}</h3>
          <div class="background__languages">
            <div class="background__language">
              <span class="background__lang-name">{{ t('background.languages.german.name') }}</span>
              <span class="background__lang-level">{{ t('background.languages.german.level') }}</span>
            </div>
            <div class="background__language">
              <span class="background__lang-name">{{ t('background.languages.english.name') }}</span>
              <span class="background__lang-level">{{ t('background.languages.english.level') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.background {
  background: var(--color-bg-secondary);
}

.background__grid {
  display: grid;
  gap: var(--space-8);
}

@media (min-width: 768px) {
  .background__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-12);
  }
}

.background__item {
  padding: var(--space-6);
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  border-radius: 8px;
}

.background__title {
  font-size: var(--text-xs);
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-4);
}

.background__degree {
  font-size: var(--text-base);
  color: var(--color-text-primary);
  font-weight: 500;
  margin-bottom: var(--space-1);
}

.background__school {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2);
}

.background__period {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
}

.background__languages {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.background__language {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.background__lang-name {
  font-size: var(--text-base);
  color: var(--color-text-primary);
}

.background__lang-level {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}
</style>
