import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    categories: z.array(z.string()).default([]),
    summary: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { news };
