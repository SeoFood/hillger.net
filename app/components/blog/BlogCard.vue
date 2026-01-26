<script setup lang="ts">
interface Props {
  title: string
  description: string
  date: string
  slug: string
}

defineProps<Props>()

const localePath = useLocalePath()

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <NuxtLink :to="localePath(`/blog/${slug}`)" class="blog-card">
    <time class="blog-card__date mono">{{ formatDate(date) }}</time>
    <h3 class="blog-card__title">{{ title }}</h3>
    <p class="blog-card__description">{{ description }}</p>
  </NuxtLink>
</template>

<style scoped>
.blog-card {
  display: block;
  padding: var(--space-6);
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  transition: all var(--transition-fast);
}

.blog-card:hover {
  border-color: var(--color-accent);
  box-shadow: var(--shadow-glow);
  transform: translateY(-2px);
}

.blog-card__date {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.blog-card__title {
  font-size: var(--text-lg);
  color: var(--color-text-primary);
  margin-top: var(--space-2);
  margin-bottom: var(--space-3);
  transition: color var(--transition-fast);
}

.blog-card:hover .blog-card__title {
  color: var(--color-accent);
}

.blog-card__description {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
}
</style>
