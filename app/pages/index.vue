<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('meta.title'),
  meta: [
    { name: 'description', content: t('meta.description') },
  ],
})
</script>

<template>
  <div class="page">
    <TheHero />
    <CaseStudy />
    <ExperienceTimeline />
    <Background />
    <TechStack />
    <Interests />
    <TheFooter />
  </div>
</template>

<style scoped>
.page {
  /* Sections stack naturally */
}
</style>
