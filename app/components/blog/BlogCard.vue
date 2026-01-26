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
  <NuxtLink :to="localePath(`/blog/${slug}`)" class="block p-6 bg-bg-tertiary border border-border rounded-lg transition-all duration-fast hover:border-accent hover:shadow-glow hover:-translate-y-0.5 group">
    <time class="font-display text-xs text-text-muted uppercase tracking-wide">{{ formatDate(date) }}</time>
    <h3 class="text-lg text-text-primary mt-2 mb-3 transition-colors duration-fast group-hover:text-accent">{{ title }}</h3>
    <p class="text-sm text-text-secondary leading-relaxed">{{ description }}</p>
  </NuxtLink>
</template>
