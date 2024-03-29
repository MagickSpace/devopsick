import { defineCollection, z } from 'astro:content'
import { getCollection } from 'astro:content'
import { CATEGORIES } from '@/data/categories'

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      metaTitle: z.string().max(80).optional(),
      metaDescription: z.string().optional(),
      heroImage: image().optional(),
      categories: z.enum(CATEGORIES).optional(),
      tags: z.array(z.string()).optional(),
      draft: z.boolean().default(false),
      title: z.string(),
      description: z.string(),
      coverImage: z.string().optional(),
      category: z.string().optional(),
      lang: z.string().optional(),
      // Transform string to Date object
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
    }),
})

const docs = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.string().optional(),
  }),
})

const guides = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.string().optional(),
    published: z.boolean().default(true),
    featured: z.boolean().default(false),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
  }),
})

export const collections = { blog, docs, guides }

export async function getBlogPosts() {
  const posts = await getCollection('blog')

  return posts.map((post) => {
    const blog_slug = post.slug.split('/')[0]
    return {
      ...post,
      blog_slug,
    }
  })
}

export async function getGuidesLang() {
  const guides = await getCollection('guides')

  return guides.map((guides) => {
    const guides_slug = guides.slug.split('/')[0]
    return {
      ...guides,
      guides_slug,
    }
  })
}
