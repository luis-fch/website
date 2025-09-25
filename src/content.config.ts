import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{mdx,md}", base: "./src/data/blog" }),
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

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{mdx,md}", base: "./src/data/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published_date: z.coerce.date(),
    repo_url: z.string().url().optional(),
    tags: z.array(z.string()).optional(),
  })
});

export const collections = { blog, projects };