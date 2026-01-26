<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="bg-bg-secondary">
    <div class="container">
      <div class="grid gap-8 md:grid-cols-2 md:gap-12">
        <div class="p-6 bg-bg-tertiary border border-border rounded-lg">
          <h3 class="font-display text-xs text-accent uppercase tracking-widest mb-4">{{ t('background.education.title') }}</h3>
          <p class="text-base text-text-primary font-medium mb-1">{{ t('background.education.degree') }}</p>
          <p class="text-sm text-text-secondary mb-2">{{ t('background.education.school') }}</p>
          <span class="font-display text-xs text-text-muted">{{ t('background.education.period') }}</span>
        </div>

        <div class="p-6 bg-bg-tertiary border border-border rounded-lg">
          <h3 class="font-display text-xs text-accent uppercase tracking-widest mb-4">{{ t('background.languages.title') }}</h3>
          <div class="flex flex-col gap-3">
            <div class="flex justify-between items-center">
              <span class="text-base text-text-primary">{{ t('background.languages.german.name') }}</span>
              <span class="text-sm text-text-muted">{{ t('background.languages.german.level') }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-base text-text-primary">{{ t('background.languages.english.name') }}</span>
              <span class="text-sm text-text-muted">{{ t('background.languages.english.level') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
