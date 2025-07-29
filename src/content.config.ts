// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    published_date: z.coerce.date(),
    updated_date: z.coerce.date().optional(),
    reading_time: z.coerce.number().optional(),
    tags: z.array(z.string()).optional(),
  })
});



// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog };