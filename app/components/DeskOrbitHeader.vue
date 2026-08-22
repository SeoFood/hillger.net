<script setup lang="ts">
import type { DeskOrbitLanguage, DeskOrbitPage } from '~/data/deskorbit'
import { deskOrbitLanguages, deskOrbitPath } from '~/data/deskorbit'

const props = defineProps<{
  language: DeskOrbitLanguage
  page: DeskOrbitPage
  languageLabel: string
  homeLabel: string
  nav: { features: string; pricing: string; support: string; privacy: string }
}>()
</script>

<template>
  <header class="do-header">
    <div class="do-shell do-header__inner">
      <NuxtLink to="/" class="do-home-link" :aria-label="homeLabel">
        <span aria-hidden="true">M.H.</span>
      </NuxtLink>

      <NuxtLink :to="deskOrbitPath(language)" class="do-brand" aria-label="DeskOrbit">
        <img src="/deskorbit/icon.webp" alt="" width="40" height="40">
        <span>DeskOrbit</span>
      </NuxtLink>

      <nav class="do-primary-nav" aria-label="DeskOrbit">
        <template v-if="page === 'product'">
          <a href="#features">{{ nav.features }}</a>
          <a href="#pricing">{{ nav.pricing }}</a>
          <a href="#support">{{ nav.support }}</a>
        </template>
        <NuxtLink :to="deskOrbitPath(language, 'privacy')" :aria-current="page === 'privacy' ? 'page' : undefined">
          {{ nav.privacy }}
        </NuxtLink>
      </nav>

      <nav class="do-language-nav" :aria-label="languageLabel">
        <NuxtLink
          v-for="item in deskOrbitLanguages"
          :key="item.code"
          :to="deskOrbitPath(item.code, page)"
          :lang="item.locale"
          :hreflang="item.locale"
          :aria-current="item.code === language ? 'page' : undefined"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
