<script setup lang="ts">
const route = useRoute()
const isDeskOrbit = computed(() => route.path === '/deskorbit' || route.path.startsWith('/deskorbit/'))

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Person',
            '@id': 'https://www.hillger.net/#person',
            name: 'Marco Hillger',
            givenName: 'Marco',
            familyName: 'Hillger',
            jobTitle: 'Senior Fullstack Developer',
            description: 'Senior Fullstack Developer mit 17+ Jahren Erfahrung in E-Commerce, Produktionsautomatisierung und skalierbaren Web-Architekturen.',
            image: 'https://www.hillger.net/avatar.jpg',
            url: 'https://www.hillger.net',
            sameAs: [
              'https://www.linkedin.com/in/marco-hillger',
              'https://github.com/SeoFood',
              'https://x.com/SeoFood',
              'https://www.reddit.com/user/SeoFood/',
            ],
            knowsAbout: [
              'Laravel', 'Vue.js', 'TypeScript', 'PHP', 'Node.js',
              'E-Commerce', 'REST APIs', 'GraphQL', 'Docker', 'MySQL',
            ],
            alumniOf: {
              '@type': 'EducationalOrganization',
              name: 'SRH Hochschule Berlin',
            },
          },
          {
            '@type': 'WebSite',
            '@id': 'https://www.hillger.net/#website',
            url: 'https://www.hillger.net',
            name: 'Marco Hillger | Senior Fullstack Developer',
            description: 'Portfolio von Marco Hillger - Senior Fullstack Developer',
            publisher: { '@id': 'https://www.hillger.net/#person' },
            inLanguage: ['de-DE', 'en-US'],
          },
        ],
      }),
    },
  ],
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader v-if="!isDeskOrbit" />
    <main class="flex-1">
      <NuxtPage />
    </main>
  </div>
</template>
