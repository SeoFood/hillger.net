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

// Share functionality
const copied = ref(false)

const postUrl = computed(() => {
  if (import.meta.client) {
    return window.location.href
  }
  return `https://hillger.net${route.fullPath}`
})

const shareText = computed(() => {
  return `${post.value?.title} von @SeoFood`
})

const shareLinks = computed(() => ({
  x: `https://x.com/intent/tweet?text=${encodeURIComponent(shareText.value)}&url=${encodeURIComponent(postUrl.value)}`,
  bluesky: `https://bsky.app/intent/compose?text=${encodeURIComponent(`${post.value?.title}\n\n${postUrl.value}`)}`,
  linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl.value)}`,
  mastodon: `https://mastodonshare.com/?text=${encodeURIComponent(shareText.value)}&url=${encodeURIComponent(postUrl.value)}`,
}))

async function copyLink() {
  try {
    await navigator.clipboard.writeText(postUrl.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}
</script>

<template>
  <main class="pt-[calc(64px+3rem)] pb-16 min-h-screen">
    <article class="container max-w-3xl">
      <header class="mb-10">
        <NuxtLink :to="localePath('/blog')" class="inline-block text-sm text-text-secondary mb-6 transition-colors duration-fast hover:text-accent">
          &larr; {{ t('blog.backToList') }}
        </NuxtLink>
        <time class="block font-display text-xs text-text-muted uppercase tracking-wide mb-3">{{ formatDate(post.date) }}</time>
        <h1 class="text-3xl md:text-4xl leading-tight">{{ post.title }}</h1>
      </header>

      <div class="prose">
        <ContentRenderer :value="post" />
      </div>

      <!-- Share Section -->
      <div class="mt-12 pt-8 border-t border-border">
        <p class="font-display text-xs text-text-muted uppercase tracking-wide mb-4">{{ t('blog.share') }}</p>
        <div class="flex flex-wrap gap-3">
          <!-- X (Twitter) -->
          <a
            :href="shareLinks.x"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-4 py-2 bg-bg-secondary border border-border rounded-lg text-sm text-text-secondary transition-all duration-fast hover:border-accent hover:text-text-primary"
            aria-label="Share on X"
          >
            <Icon name="simple-icons:x" class="w-4 h-4" />
            <span>X</span>
          </a>

          <!-- Bluesky -->
          <a
            :href="shareLinks.bluesky"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-4 py-2 bg-bg-secondary border border-border rounded-lg text-sm text-text-secondary transition-all duration-fast hover:border-accent hover:text-text-primary"
            aria-label="Share on Bluesky"
          >
            <Icon name="simple-icons:bluesky" class="w-4 h-4" />
            <span>Bluesky</span>
          </a>

          <!-- LinkedIn -->
          <a
            :href="shareLinks.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-4 py-2 bg-bg-secondary border border-border rounded-lg text-sm text-text-secondary transition-all duration-fast hover:border-accent hover:text-text-primary"
            aria-label="Share on LinkedIn"
          >
            <Icon name="simple-icons:linkedin" class="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <!-- Mastodon -->
          <a
            :href="shareLinks.mastodon"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-4 py-2 bg-bg-secondary border border-border rounded-lg text-sm text-text-secondary transition-all duration-fast hover:border-accent hover:text-text-primary"
            aria-label="Share on Mastodon"
          >
            <Icon name="simple-icons:mastodon" class="w-4 h-4" />
            <span>Mastodon</span>
          </a>

          <!-- Copy Link -->
          <button
            class="flex items-center gap-2 px-4 py-2 bg-bg-secondary border border-border rounded-lg text-sm text-text-secondary transition-all duration-fast hover:border-accent hover:text-text-primary"
            :class="{ 'border-accent text-accent': copied }"
            @click="copyLink"
          >
            <Icon :name="copied ? 'heroicons:check' : 'heroicons:link'" class="w-4 h-4" />
            <span>{{ copied ? t('blog.copied') : t('blog.copyLink') }}</span>
          </button>
        </div>
      </div>
    </article>
  </main>
</template>

<style>
.prose {
  @apply text-text-secondary leading-loose;
}

.prose h2 {
  @apply font-body text-2xl text-text-primary mt-10 mb-4;
}

.prose h3 {
  @apply font-body text-xl text-text-primary mt-8 mb-3;
}

.prose p {
  @apply mb-4;
}

.prose a {
  @apply text-accent underline underline-offset-2;
}

.prose a:hover {
  @apply text-text-primary;
}

.prose strong {
  @apply text-text-primary font-semibold;
}

.prose code {
  @apply font-display text-[0.9em] bg-bg-tertiary px-1.5 py-0.5 rounded;
}

.prose pre {
  @apply bg-bg-tertiary border border-border rounded-lg p-4 overflow-x-auto mb-6;
}

.prose pre code {
  @apply bg-transparent p-0;
}

.prose ul {
  @apply mb-4 pl-6 list-disc;
}

.prose ol {
  @apply mb-4 pl-6 list-decimal;
}

.prose li {
  @apply mb-2;
}

.prose blockquote {
  @apply border-l-[3px] border-accent pl-4 my-6 text-text-secondary italic;
}
</style>
