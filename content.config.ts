import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        lang: z.enum(['de', 'en']),
        slug: z.string(),
        published: z.boolean().default(true),
      }),
    }),
  },
})
