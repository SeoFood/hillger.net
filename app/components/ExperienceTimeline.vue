<script setup lang="ts">
const { t } = useI18n()

const positions = [
  { key: 'valuemedia', year: '2024' },
  { key: 'seofood', year: '2013' },
  { key: 'finanzen', year: '2006' },
]
</script>

<template>
  <section id="experience">
    <div class="container">
      <h2 class="mb-12">{{ t('experience.title') }}</h2>

      <div class="flex flex-col gap-8">
        <div
          v-for="(position, index) in positions"
          :key="position.key"
          class="grid grid-cols-[60px_24px_1fr] gap-4 items-start md:grid-cols-[100px_40px_1fr] md:gap-6"
        >
          <div class="font-display text-sm text-accent text-right pt-1">{{ position.year }}</div>
          <div class="flex flex-col items-center">
            <div class="w-3 h-3 rounded-full bg-bg-primary border-2 border-accent shrink-0"></div>
            <div
              v-if="index < positions.length - 1"
              class="w-0.5 flex-1 min-h-[60px] mt-2"
              style="background: linear-gradient(to bottom, #c9a66b, rgba(244, 241, 235, 0.1))"
            ></div>
          </div>
          <div class="pb-4">
            <h3 class="text-lg mb-1">{{ t(`experience.positions.${position.key}.company`) }}</h3>
            <p class="font-display text-sm text-accent mb-1">{{ t(`experience.positions.${position.key}.role`) }}</p>
            <p class="text-sm text-text-muted mb-3">{{ t(`experience.positions.${position.key}.period`) }}</p>
            <p class="text-sm leading-relaxed">{{ t(`experience.positions.${position.key}.description`) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
