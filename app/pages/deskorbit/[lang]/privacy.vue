<script setup lang="ts">
import { isDeskOrbitLanguage } from '~/data/deskorbit'

defineI18nRoute(false)

const route = useRoute()
const language = computed(() => {
  const value = Array.isArray(route.params.lang) ? route.params.lang[0] : route.params.lang
  if (!isDeskOrbitLanguage(value) || value === 'de') {
    throw createError({ statusCode: 404, statusMessage: 'Page not found' })
  }
  return value
})
</script>

<template>
  <DeskOrbitPrivacyPage :language="language" />
</template>
