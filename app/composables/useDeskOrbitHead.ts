import type { DeskOrbitLanguage, DeskOrbitPage } from '~/data/deskorbit'
import { deskOrbitConfig, deskOrbitLanguages, deskOrbitPath } from '~/data/deskorbit'

export function useDeskOrbitHead(
  language: Ref<DeskOrbitLanguage> | ComputedRef<DeskOrbitLanguage>,
  page: DeskOrbitPage,
  meta: ComputedRef<{ title: string; description: string }>,
) {
  const canonicalPath = computed(() => deskOrbitPath(language.value, page))
  const canonicalUrl = computed(() => `https://www.hillger.net${canonicalPath.value}`)
  const locale = computed(() => deskOrbitLanguages.find(item => item.code === language.value)?.locale ?? 'de-DE')
  const imageUrl = computed(() => `https://www.hillger.net/deskorbit/${language.value}/mac.webp`)

  useSeoMeta({
    title: () => meta.value.title,
    description: () => meta.value.description,
    ogType: 'website',
    ogTitle: () => meta.value.title,
    ogDescription: () => meta.value.description,
    ogUrl: () => canonicalUrl.value,
    ogImage: () => imageUrl.value,
    ogSiteName: 'Marco Hillger',
    ogLocale: () => locale.value.replace('-', '_'),
    twitterCard: 'summary_large_image',
    twitterTitle: () => meta.value.title,
    twitterDescription: () => meta.value.description,
    twitterImage: () => imageUrl.value,
  })

  useHead(() => ({
    htmlAttrs: { lang: locale.value },
    meta: [{ name: 'theme-color', content: '#07111f' }],
    link: [
      { rel: 'canonical', href: canonicalUrl.value },
      ...deskOrbitLanguages.map(item => ({
        rel: 'alternate',
        hreflang: item.locale,
        href: `https://www.hillger.net${deskOrbitPath(item.code, page)}`,
      })),
      { rel: 'alternate', hreflang: 'x-default', href: `https://www.hillger.net${deskOrbitPath('de', page)}` },
    ],
    script: page === 'product'
      ? [{
          key: 'deskorbit-software-application',
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'DeskOrbit',
            applicationCategory: 'UtilitiesApplication',
            operatingSystem: 'iOS 18+, iPadOS 18+, macOS 14+, watchOS 11+',
            description: meta.value.description,
            url: canonicalUrl.value,
            author: { '@type': 'Person', name: deskOrbitConfig.owner },
            copyrightHolder: { '@type': 'Person', name: deskOrbitConfig.owner },
            inLanguage: deskOrbitLanguages.map(item => item.locale),
          }),
        }]
      : [],
  }))
}
