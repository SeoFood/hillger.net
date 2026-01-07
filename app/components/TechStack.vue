<script setup lang="ts">
const { t } = useI18n()

const stack = {
  frontend: ['TypeScript', 'JavaScript', 'Vue.js', 'HTML', 'CSS'],
  backend: ['Laravel', 'PHP', 'Node.js', 'MySQL', 'SQL'],
  apis: ['REST', 'GraphQL', 'Webhooks', 'Event-driven'],
  devops: ['Docker', 'CI/CD', 'AWS', 'Git', 'Linux'],
  ecommerce: ['Shopify', 'Custom Shopsysteme'],
}
</script>

<template>
  <section id="stack" class="stack">
    <div class="container">
      <h2 class="stack__title">{{ t('stack.title') }}</h2>

      <div class="stack__grid">
        <div
          v-for="(items, category) in stack"
          :key="category"
          class="stack__category"
        >
          <h3 class="stack__category-title mono">
            {{ t(`stack.categories.${category}`) }}
          </h3>
          <div class="stack__items">
            <span
              v-for="item in items"
              :key="item"
              class="stack__item mono"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stack {
  background: var(--color-bg-secondary);
}

.stack__title {
  margin-bottom: var(--space-12);
}

.stack__grid {
  display: grid;
  gap: var(--space-8);
}

@media (min-width: 768px) {
  .stack__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .stack__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.stack__category {
  padding: var(--space-6);
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  border-radius: 8px;
}

.stack__category-title {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-4);
}

.stack__items {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.stack__item {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  padding: var(--space-1) var(--space-3);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  transition: all var(--transition-fast);
  cursor: default;
}

.stack__item:hover {
  color: var(--color-text-primary);
  border-color: var(--color-accent);
  box-shadow: var(--shadow-glow);
}
</style>
