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
  <section id="stack" class="bg-bg-secondary">
    <div class="container">
      <h2 class="mb-12">{{ t('stack.title') }}</h2>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(items, category) in stack"
          :key="category"
          class="p-6 bg-bg-tertiary border border-border rounded-lg"
        >
          <h3 class="font-display text-xs text-text-muted uppercase tracking-widest mb-4">
            {{ t(`stack.categories.${category}`) }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="item in items"
              :key="item"
              class="font-display text-sm text-text-secondary px-3 py-1 bg-bg-primary border border-border rounded transition-all duration-fast cursor-default hover:text-text-primary hover:border-accent hover:shadow-glow"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
