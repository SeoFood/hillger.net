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
    <div id="projects" class="scroll-mt-20">
      <TypeWhisperProject />
      <CaseStudy />
    </div>
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
