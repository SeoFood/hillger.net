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
  <main class="pt-[calc(64px+4rem)] pb-16 min-h-screen">
    <div class="container">
      <h1 class="mb-12">{{ t('blog.title') }}</h1>

      <div v-if="posts && posts.length > 0" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <BlogCard
          v-for="post in posts"
          :key="post.path"
          :title="post.title"
          :description="post.description"
          :date="post.date"
          :slug="post.slug"
        />
      </div>

      <p v-else class="text-text-secondary text-lg">
        {{ t('blog.empty') }}
      </p>
    </div>
  </main>
</template>
