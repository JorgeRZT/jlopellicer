import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Un artículo por idioma: src/content/blog/es/<slug>.md y src/content/blog/en/<slug>.md
const blog = defineCollection({
  loader: glob({ pattern: '{es,en}/**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
