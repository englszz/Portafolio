import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({
    pattern: '**/*.mdx',
    base: './src/features/blog/content',
  }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z
        .object({
          url: z.string(),
          alt: z.string(),
        })
        .optional(),
      tags: z.array(z.string()).optional(),
      relatedPosts: z.array(reference('blog')),
      readingTimeMinutes: z.number().optional(),
      isDraft: z.boolean(),
      lang: z.enum(['es', 'en']).optional().default('es'),
    }),
});

export const collections = {
  blog: blogCollection,
};
