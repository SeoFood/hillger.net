<script setup lang="ts">
const { t, locale } = useI18n()

const { data: posts } = await useAsyncData(`blog-${locale.value}`, () =>
  queryCollection('blog')
    .where('lang', '=', locale.value)
    .where('published', '=', true)
    .order('date', 'DESC')
    .all()
)

useSeoMeta({
  title: `${t('blog.title')} | Marco Hillger`,
  description: t('blog.description'),
})
</script>

<template>
  <main class="blog">
    <div class="container">
      <h1 class="blog__title">{{ t('blog.title') }}</h1>

      <div v-if="posts && posts.length > 0" class="blog__grid">
        <BlogCard
          v-for="post in posts"
          :key="post.path"
          :title="post.title"
          :description="post.description"
          :date="post.date"
          :slug="post.slug"
        />
      </div>

      <p v-else class="blog__empty">
        {{ t('blog.empty') }}
      </p>
    </div>
  </main>
</template>

<style scoped>
.blog {
  padding-top: calc(64px + var(--space-16));
  padding-bottom: var(--space-16);
  min-height: 100vh;
}

.blog__title {
  margin-bottom: var(--space-12);
}

.blog__grid {
  display: grid;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .blog__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .blog__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.blog__empty {
  color: var(--color-text-secondary);
  font-size: var(--text-lg);
}
</style>
