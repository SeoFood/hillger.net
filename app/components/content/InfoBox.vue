<script setup lang="ts">
defineProps<{
  type?: 'info' | 'warning' | 'danger' | 'tip'
  title?: string
}>()

const typeConfig = {
  info: {
    icon: 'heroicons:information-circle',
    borderColor: 'border-l-blue-500',
    bgColor: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
  },
  warning: {
    icon: 'heroicons:exclamation-triangle',
    borderColor: 'border-l-amber-500',
    bgColor: 'bg-amber-500/10',
    iconColor: 'text-amber-400',
  },
  danger: {
    icon: 'heroicons:x-circle',
    borderColor: 'border-l-red-500',
    bgColor: 'bg-red-500/10',
    iconColor: 'text-red-400',
  },
  tip: {
    icon: 'heroicons:light-bulb',
    borderColor: 'border-l-green-500',
    bgColor: 'bg-green-500/10',
    iconColor: 'text-green-400',
  },
}
</script>

<template>
  <div
    class="my-6 border-l-3 rounded-r-lg overflow-hidden"
    :class="[
      typeConfig[type || 'info'].borderColor,
      typeConfig[type || 'info'].bgColor,
    ]"
  >
    <!-- Header (optional) -->
    <div
      v-if="title"
      class="flex items-center gap-2 px-4 py-2.5 border-b border-border"
    >
      <Icon
        :name="typeConfig[type || 'info'].icon"
        class="w-5 h-5 flex-shrink-0"
        :class="typeConfig[type || 'info'].iconColor"
      />
      <span class="font-display text-sm font-semibold text-text-primary">{{ title }}</span>
    </div>

    <!-- Content -->
    <div
      class="px-4 py-3"
      :class="{ 'flex items-start gap-3': !title }"
    >
      <Icon
        v-if="!title"
        :name="typeConfig[type || 'info'].icon"
        class="w-5 h-5 flex-shrink-0 mt-[5px]"
        :class="typeConfig[type || 'info'].iconColor"
      />
      <div class="prose-sm text-text-secondary [&>p]:m-0 [&>p:not(:last-child)]:mb-2 [&>ul]:m-0 [&>ul]:mt-1">
        <slot />
      </div>
    </div>
  </div>
</template>
