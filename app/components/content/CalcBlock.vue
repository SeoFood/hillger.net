<script setup lang="ts">
interface Section {
  label: string
  lines: string[]
}

defineProps<{
  title: string
  sections: Section[]
  result?: string
}>()
</script>

<template>
  <div class="my-8 bg-bg-tertiary border-l-3 border-accent rounded-r-lg overflow-hidden">
    <!-- Header -->
    <div class="px-4 py-2.5 bg-accent/10 border-b border-border">
      <h4 class="font-display text-sm font-semibold text-text-primary m-0">{{ title }}</h4>
    </div>

    <!-- Sections -->
    <div class="px-4 py-4 space-y-5">
      <div v-for="(section, index) in sections" :key="index">
        <p class="font-display text-xs text-text-muted uppercase tracking-wide mb-2">{{ section.label }}</p>
        <div class="leading-snug">
          <p
            v-for="(line, lineIndex) in section.lines"
            :key="lineIndex"
            class="font-display text-xs text-text-secondary m-0"
          >
            {{ line }}
          </p>
        </div>
      </div>

      <!-- Result -->
      <div v-if="result" class="pt-3 border-t border-border">
        <p class="font-display text-sm font-semibold text-accent m-0">{{ result }}</p>
      </div>
    </div>
  </div>
</template>
