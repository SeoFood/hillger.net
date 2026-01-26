<script setup lang="ts">
const { t, locale } = useI18n()
const route = useRoute()
const localePath = useLocalePath()

const { data: post } = await useAsyncData(`blog-post-${route.params.slug}`, () =>
  queryCollection('blog')
    .where('slug', '=', route.params.slug as string)
    .where('lang', '=', locale.value)
    .where('published', '=', true)
    .first()
)

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found',
  })
}

useSeoMeta({
  title: `${post.value.title} | Marco Hillger`,
  description: post.value.description,
})

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString(locale.value === 'de' ? 'de-DE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <main class="post">
    <article class="container container--narrow">
      <header class="post__header">
        <NuxtLink :to="localePath('/blog')" class="post__back">
          &larr; {{ t('blog.backToList') }}
        </NuxtLink>
        <time class="post__date mono">{{ formatDate(post.date) }}</time>
        <h1 class="post__title">{{ post.title }}</h1>
      </header>

      <div class="post__content">
        <ContentRenderer :value="post" />
      </div>
    </article>
  </main>
</template>

<style scoped>
.post {
  padding-top: calc(64px + var(--space-12));
  padding-bottom: var(--space-16);
  min-height: 100vh;
}

.container--narrow {
  max-width: 768px;
}

.post__header {
  margin-bottom: var(--space-10);
}

.post__back {
  display: inline-block;
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-6);
  transition: color var(--transition-fast);
}

.post__back:hover {
  color: var(--color-accent);
}

.post__date {
  display: block;
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-3);
}

.post__title {
  font-size: var(--text-3xl);
  line-height: 1.2;
}

@media (min-width: 768px) {
  .post__title {
    font-size: var(--text-4xl);
  }
}

.post__content {
  color: var(--color-text-secondary);
  line-height: 1.8;
}

.post__content :deep(h2) {
  font-size: var(--text-2xl);
  color: var(--color-text-primary);
  margin-top: var(--space-10);
  margin-bottom: var(--space-4);
}

.post__content :deep(h3) {
  font-size: var(--text-xl);
  color: var(--color-text-primary);
  margin-top: var(--space-8);
  margin-bottom: var(--space-3);
}

.post__content :deep(p) {
  margin-bottom: var(--space-4);
}

.post__content :deep(a) {
  color: var(--color-accent);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.post__content :deep(a:hover) {
  color: var(--color-text-primary);
}

.post__content :deep(strong) {
  color: var(--color-text-primary);
  font-weight: 600;
}

.post__content :deep(code) {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9em;
  background: var(--color-bg-tertiary);
  padding: 0.15em 0.4em;
  border-radius: 4px;
}

.post__content :deep(pre) {
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: var(--space-4);
  overflow-x: auto;
  margin-bottom: var(--space-6);
}

.post__content :deep(pre code) {
  background: none;
  padding: 0;
}

.post__content :deep(ul),
.post__content :deep(ol) {
  margin-bottom: var(--space-4);
  padding-left: var(--space-6);
}

.post__content :deep(li) {
  margin-bottom: var(--space-2);
}

.post__content :deep(blockquote) {
  border-left: 3px solid var(--color-accent);
  padding-left: var(--space-4);
  margin: var(--space-6) 0;
  color: var(--color-text-secondary);
  font-style: italic;
}
</style>
