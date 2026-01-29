<script setup lang="ts">
interface TocLink {
  id: string
  text: string
  depth: number
}

const links = ref<TocLink[]>([])
const activeId = ref('')
let observer: IntersectionObserver | null = null

function extractHeadings() {
  const headings = document.querySelectorAll('article h2[id], article h3[id]')
  links.value = Array.from(headings).map((heading) => ({
    id: heading.id,
    text: heading.textContent?.trim() || '',
    depth: heading.tagName === 'H3' ? 3 : 2,
  }))

  // Set up intersection observer
  if (observer) observer.disconnect()

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id
        }
      })
    },
    { rootMargin: '-80px 0px -80% 0px' }
  )

  headings.forEach((heading) => {
    observer?.observe(heading)
  })
}

onMounted(() => {
  // Wait for content to render
  nextTick(() => {
    setTimeout(extractHeadings, 100)
  })
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <nav
    v-if="links.length > 0"
    class="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto"
  >
    <p class="font-display text-xs text-text-muted uppercase tracking-wide mb-3">Inhalt</p>
    <ul class="space-y-1.5 border-l border-border">
      <li
        v-for="link in links"
        :key="link.id"
        :class="link.depth === 3 ? 'pl-4' : ''"
      >
        <a
          :href="`#${link.id}`"
          class="block py-1 pl-3 -ml-px text-sm border-l-2 transition-colors duration-fast"
          :class="[
            activeId === link.id
              ? 'border-accent text-accent'
              : 'border-transparent text-text-secondary hover:text-text-primary hover:border-text-muted'
          ]"
        >
          {{ link.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>
