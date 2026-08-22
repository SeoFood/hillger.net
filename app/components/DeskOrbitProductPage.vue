<script setup lang="ts">
import type { DeskOrbitLanguage } from '~/data/deskorbit'
import { deskOrbitConfig, deskOrbitProductCopy, deskOrbitPath } from '~/data/deskorbit'

const props = defineProps<{ language: DeskOrbitLanguage }>()
const language = toRef(props, 'language')
const copy = computed(() => deskOrbitProductCopy[language.value])
const imageRoot = computed(() => `/deskorbit/${language.value}`)

useDeskOrbitHead(language, 'product', computed(() => copy.value.meta))
</script>

<template>
  <div class="deskorbit-page">
    <a class="do-skip-link" href="#deskorbit-main">{{ copy.skipLabel }}</a>
    <DeskOrbitHeader
      :language="language"
      page="product"
      :language-label="copy.languageLabel"
      :home-label="copy.homeLabel"
      :nav="copy.nav"
    />

    <main id="deskorbit-main">
      <section class="do-hero">
        <div class="do-shell do-hero__grid">
          <div class="do-hero__copy">
            <p class="do-eyebrow">{{ copy.hero.eyebrow }}</p>
            <h1>{{ copy.hero.title }}</h1>
            <p class="do-hero__lead">{{ copy.hero.lead }}</p>

            <div class="do-hero__actions">
              <a
                v-if="deskOrbitConfig.appStoreAvailable"
                class="do-button do-button--primary"
                :href="deskOrbitConfig.appStoreUrl"
                rel="noopener noreferrer"
              >
                {{ copy.hero.comingSoon }}
                <Icon name="heroicons:arrow-up-right" aria-hidden="true" />
              </a>
              <span
                v-else
                class="do-button do-button--primary do-button--disabled"
                aria-disabled="true"
                :data-future-app-store-url="deskOrbitConfig.appStoreUrl"
              >
                {{ copy.hero.comingSoon }}
              </span>
              <a class="do-button do-button--secondary" href="#support">{{ copy.hero.supportCta }}</a>
            </div>

            <p class="do-hero__availability">{{ copy.hero.availability }}</p>
            <div class="do-platforms" aria-label="Apple platforms">
              <span><Icon name="simple-icons:apple" aria-hidden="true" /> {{ copy.hero.devices }}</span>
            </div>
          </div>

          <div class="do-orbit">
            <div class="do-orbit__ring" aria-hidden="true" />
            <figure class="do-device do-device--mac">
              <img :src="`${imageRoot}/mac.webp`" :alt="copy.hero.imageAlt.mac" width="1100" height="688" fetchpriority="high">
            </figure>
            <figure class="do-device do-device--ipad">
              <img :src="`${imageRoot}/ipad.webp`" :alt="copy.hero.imageAlt.ipad" width="600" height="800">
            </figure>
            <figure class="do-device do-device--iphone">
              <img :src="`${imageRoot}/iphone.webp`" :alt="copy.hero.imageAlt.iphone" width="420" height="912">
            </figure>
            <figure class="do-device do-device--watch">
              <img :src="`${imageRoot}/watch.webp`" :alt="copy.hero.imageAlt.watch" width="250" height="298">
            </figure>
          </div>
        </div>
      </section>

      <div class="do-proof">
        <div class="do-shell do-proof__inner">
          <span v-for="item in copy.proof" :key="item">
            <Icon name="heroicons:check-circle" aria-hidden="true" />
            {{ item }}
          </span>
        </div>
      </div>

      <section class="do-section do-control-section">
        <div class="do-shell do-two-column">
          <div class="do-section-copy">
            <p class="do-eyebrow">{{ copy.control.eyebrow }}</p>
            <h2>{{ copy.control.title }}</h2>
            <p>{{ copy.control.text }}</p>
          </div>

          <div class="do-controller" aria-hidden="true">
            <div class="do-controller__top">
              <div>
                <span>{{ copy.control.liveLabel }}</span>
                <strong>{{ copy.control.liveValue }}</strong>
              </div>
              <span class="do-status"><i />{{ copy.control.status }}</span>
            </div>
            <div class="do-controller__positions">
              <span v-for="position in copy.control.positions" :key="position">{{ position }}</span>
            </div>
            <div class="do-controller__manual">
              <span><Icon name="heroicons:arrow-down" />{{ copy.control.down }}</span>
              <span><Icon name="heroicons:arrow-up" />{{ copy.control.up }}</span>
              <span class="do-controller__stop"><i />{{ copy.control.stop }}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="do-section do-section--muted">
        <div class="do-shell">
          <div class="do-section-heading">
            <p class="do-eyebrow">{{ copy.features.eyebrow }}</p>
            <h2>{{ copy.features.title }}</h2>
            <p>{{ copy.features.intro }}</p>
          </div>
          <div class="do-feature-grid">
            <article v-for="feature in copy.features.items" :key="feature.title" class="do-feature-card">
              <div class="do-feature-card__icon"><Icon :name="feature.icon" aria-hidden="true" /></div>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="do-section do-safety-section">
        <div class="do-shell do-safety">
          <div class="do-section-copy">
            <p class="do-eyebrow">{{ copy.safety.eyebrow }}</p>
            <h2>{{ copy.safety.title }}</h2>
            <p>{{ copy.safety.intro }}</p>
            <p class="do-safety__note"><Icon name="heroicons:hand-raised" aria-hidden="true" />{{ copy.safety.note }}</p>
          </div>
          <ol class="do-safety__list">
            <li v-for="(point, index) in copy.safety.points" :key="point">
              <span>{{ String(index + 1).padStart(2, '0') }}</span>
              <p>{{ point }}</p>
            </li>
          </ol>
        </div>
      </section>

      <section id="pricing" class="do-section do-section--muted">
        <div class="do-shell">
          <div class="do-section-heading">
            <p class="do-eyebrow">{{ copy.pricing.eyebrow }}</p>
            <h2>{{ copy.pricing.title }}</h2>
            <p>{{ copy.pricing.intro }}</p>
          </div>

          <div class="do-price-cards">
            <article class="do-price-card">
              <div class="do-price-card__header">
                <h3>{{ copy.pricing.free.name }}</h3>
                <strong>{{ copy.pricing.free.price }}</strong>
              </div>
              <ul>
                <li v-for="item in copy.pricing.free.items" :key="item"><Icon name="heroicons:check" aria-hidden="true" />{{ item }}</li>
              </ul>
            </article>
            <article class="do-price-card do-price-card--pro">
              <span class="do-price-card__badge">{{ copy.pricing.pro.badge }}</span>
              <div class="do-price-card__header">
                <h3>{{ copy.pricing.pro.name }}</h3>
                <strong>{{ copy.pricing.pro.price }}</strong>
              </div>
              <ul>
                <li v-for="item in copy.pricing.pro.items" :key="item"><Icon name="heroicons:check" aria-hidden="true" />{{ item }}</li>
              </ul>
            </article>
          </div>

          <div class="do-comparison">
            <table>
              <thead>
                <tr><th scope="col">{{ copy.pricing.featureLabel }}</th><th scope="col">{{ copy.pricing.free.name }}</th><th scope="col">Pro</th></tr>
              </thead>
              <tbody>
                <tr v-for="row in copy.pricing.rows" :key="row.feature">
                  <th scope="row">{{ row.feature }}</th><td>{{ row.free }}</td><td>{{ row.pro }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="do-price-notes"><p>{{ copy.pricing.note }}</p><p>{{ copy.pricing.family }}</p></div>
        </div>
      </section>

      <section class="do-section do-privacy-summary">
        <div class="do-shell do-privacy-summary__grid">
          <div class="do-section-copy">
            <p class="do-eyebrow">{{ copy.privacy.eyebrow }}</p>
            <h2>{{ copy.privacy.title }}</h2>
            <p>{{ copy.privacy.text }}</p>
            <NuxtLink :to="deskOrbitPath(language, 'privacy')" class="do-text-link">
              {{ copy.privacy.link }} <Icon name="heroicons:arrow-right" aria-hidden="true" />
            </NuxtLink>
          </div>
          <ul class="do-privacy-points">
            <li v-for="point in copy.privacy.points" :key="point"><Icon name="heroicons:lock-closed" aria-hidden="true" />{{ point }}</li>
          </ul>
        </div>
      </section>

      <section id="support" class="do-section do-section--muted">
        <div class="do-shell">
          <div class="do-section-heading">
            <p class="do-eyebrow">{{ copy.support.eyebrow }}</p>
            <h2>{{ copy.support.title }}</h2>
            <p>{{ copy.support.intro }}</p>
          </div>

          <div class="do-support-grid">
            <article v-for="item in copy.support.items" :key="item.title" class="do-support-card">
              <h3>{{ item.title }}</h3>
              <p v-for="paragraph in item.paragraphs" :key="paragraph">{{ paragraph }}</p>
            </article>
          </div>

          <div class="do-contact-card">
            <div>
              <h3>{{ copy.support.contactTitle }}</h3>
              <p>{{ copy.support.contactText }}</p>
            </div>
            <a class="do-button do-button--primary" :href="`mailto:${deskOrbitConfig.contact}`">
              <Icon name="heroicons:envelope" aria-hidden="true" />{{ copy.support.contactCta }}
            </a>
          </div>
        </div>
      </section>

      <section class="do-section do-compatibility">
        <div class="do-shell do-compatibility__grid">
          <div>
            <p class="do-eyebrow">DeskOrbit 1.0</p>
            <h2>{{ copy.compatibility.title }}</h2>
            <p>{{ copy.compatibility.text }}</p>
          </div>
          <div>
            <ul>
              <li v-for="platform in copy.compatibility.platforms" :key="platform"><Icon name="simple-icons:apple" aria-hidden="true" />{{ platform }}</li>
            </ul>
            <p class="do-compatibility__independence">{{ copy.compatibility.independence }}</p>
          </div>
        </div>
      </section>
    </main>

    <DeskOrbitFooter :language="language" :copy="copy.footer" />
  </div>
</template>
