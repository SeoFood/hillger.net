<script setup lang="ts">
const { t } = useI18n()

const positions = [
  { key: 'valuemedia', year: '2024' },
  { key: 'seofood', year: '2013' },
  { key: 'finanzen', year: '2006' },
]
</script>

<template>
  <section id="experience" class="timeline">
    <div class="container">
      <h2 class="timeline__title">{{ t('experience.title') }}</h2>

      <div class="timeline__items">
        <div
          v-for="(position, index) in positions"
          :key="position.key"
          class="timeline__item"
        >
          <div class="timeline__year mono">{{ position.year }}</div>
          <div class="timeline__marker">
            <div class="timeline__dot"></div>
            <div v-if="index < positions.length - 1" class="timeline__line"></div>
          </div>
          <div class="timeline__content">
            <h3 class="timeline__company">{{ t(`experience.positions.${position.key}.company`) }}</h3>
            <p class="timeline__role mono">{{ t(`experience.positions.${position.key}.role`) }}</p>
            <p class="timeline__period">{{ t(`experience.positions.${position.key}.period`) }}</p>
            <p class="timeline__description">{{ t(`experience.positions.${position.key}.description`) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline__title {
  margin-bottom: var(--space-12);
}

.timeline__items {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.timeline__item {
  display: grid;
  grid-template-columns: 60px 24px 1fr;
  gap: var(--space-4);
  align-items: start;
}

@media (min-width: 768px) {
  .timeline__item {
    grid-template-columns: 100px 40px 1fr;
    gap: var(--space-6);
  }
}

.timeline__year {
  font-size: var(--text-sm);
  color: var(--color-accent);
  text-align: right;
  padding-top: var(--space-1);
}

.timeline__marker {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline__dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--color-bg-primary);
  border: 2px solid var(--color-accent);
  flex-shrink: 0;
}

.timeline__line {
  width: 2px;
  flex: 1;
  min-height: 60px;
  background: linear-gradient(
    to bottom,
    var(--color-accent),
    var(--color-border)
  );
  margin-top: var(--space-2);
}

.timeline__content {
  padding-bottom: var(--space-4);
}

.timeline__company {
  font-size: var(--text-lg);
  margin-bottom: var(--space-1);
}

.timeline__role {
  font-size: var(--text-sm);
  color: var(--color-accent);
  margin-bottom: var(--space-1);
}

.timeline__period {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--space-3);
}

.timeline__description {
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
}
</style>
