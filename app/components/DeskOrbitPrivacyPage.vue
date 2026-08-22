<script setup lang="ts">
import type { DeskOrbitLanguage } from '~/data/deskorbit'
import { deskOrbitConfig, deskOrbitPrivacyCopy, deskOrbitProductCopy, deskOrbitPath } from '~/data/deskorbit'

const props = defineProps<{ language: DeskOrbitLanguage }>()
const language = toRef(props, 'language')
const copy = computed(() => deskOrbitPrivacyCopy[language.value])
const productCopy = computed(() => deskOrbitProductCopy[language.value])

useDeskOrbitHead(language, 'privacy', computed(() => copy.value.meta))
</script>

<template>
  <div class="deskorbit-page deskorbit-page--privacy">
    <a class="do-skip-link" href="#deskorbit-main">{{ copy.skipLabel }}</a>
    <DeskOrbitHeader
      :language="language"
      page="privacy"
      :language-label="copy.languageLabel"
      :home-label="productCopy.homeLabel"
      :nav="productCopy.nav"
    />

    <main id="deskorbit-main">
      <section class="do-privacy-hero">
        <div class="do-shell do-privacy-hero__inner">
          <NuxtLink :to="deskOrbitPath(language)" class="do-back-link"><Icon name="heroicons:arrow-left" aria-hidden="true" />{{ copy.back }}</NuxtLink>
          <p class="do-eyebrow">{{ copy.eyebrow }}</p>
          <h1>{{ copy.title }}</h1>
          <p class="do-privacy-hero__intro">{{ copy.intro }}</p>
          <p class="do-updated"><Icon name="heroicons:calendar-days" aria-hidden="true" />{{ copy.updated }}</p>
        </div>
      </section>

      <section class="do-privacy-content">
        <div class="do-shell do-privacy-content__grid">
          <aside aria-label="DeskOrbit privacy summary">
            <div class="do-privacy-fact"><span>DeskOrbit</span><strong>{{ deskOrbitConfig.bundleId }}</strong></div>
            <div class="do-privacy-fact"><span>App Store ID</span><strong>{{ deskOrbitConfig.appStoreId }}</strong></div>
            <div class="do-privacy-fact"><span>{{ copy.footer.legal }}</span><strong>{{ deskOrbitConfig.owner }}</strong></div>
          </aside>

          <div class="do-policy">
            <article v-for="section in copy.sections" :key="section.title">
              <h2>{{ section.title }}</h2>
              <p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p>
            </article>

            <div class="do-policy-contact">
              <h2>{{ copy.contactTitle }}</h2>
              <p>{{ copy.contactText }}</p>
              <a :href="`mailto:${deskOrbitConfig.contact}`"><Icon name="heroicons:envelope" aria-hidden="true" />{{ copy.contactCta }}</a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <DeskOrbitFooter :language="language" :copy="copy.footer" />
  </div>
</template>
