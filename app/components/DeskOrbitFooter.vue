<script setup lang="ts">
import type { DeskOrbitLanguage } from '~/data/deskorbit'
import { deskOrbitConfig, deskOrbitPath } from '~/data/deskorbit'

defineProps<{
  language: DeskOrbitLanguage
  copy: { product: string; privacy: string; support: string; legal: string }
}>()
</script>

<template>
  <footer class="do-footer">
    <div class="do-shell do-footer__grid">
      <div class="do-footer__brand">
        <img src="/deskorbit/icon.webp" alt="" width="48" height="48">
        <div>
          <strong>DeskOrbit</strong>
          <span>{{ deskOrbitConfig.copyright }}</span>
        </div>
      </div>

      <nav aria-label="DeskOrbit">
        <NuxtLink :to="deskOrbitPath(language)">{{ copy.product }}</NuxtLink>
        <NuxtLink :to="`${deskOrbitPath(language)}#support`">{{ copy.support }}</NuxtLink>
        <NuxtLink :to="deskOrbitPath(language, 'privacy')">{{ copy.privacy }}</NuxtLink>
      </nav>

      <div class="do-footer__legal">
        <span>{{ copy.legal }}</span>
        <strong>{{ deskOrbitConfig.owner }}</strong>
        <a :href="`mailto:${deskOrbitConfig.contact}`">{{ deskOrbitConfig.contact }}</a>
        <span>{{ deskOrbitConfig.bundleId }}</span>
      </div>
    </div>
  </footer>
</template>
