import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Files live in <collection>/<lang>/<slug>.md. The same <slug> in both
// language folders is treated as a translation pair.

const writing = defineCollection({
  loader: glob({ pattern: '{en,pt}/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    // 'post' = blog, 'note' = reviews of books, travel and culture
    category: z.enum(['post', 'note']).default('post'),
    draft: z.boolean().default(false),
    // old URLs that should keep working
    aliases: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '{en,pt}/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    kind: z.string(),
    summary: z.string(),
    epigraph: z.string().optional(),
    status: z.string().optional(),
    stack: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    order: z.number().default(99),
    featured: z.boolean().default(false),
    primary: z.boolean().default(false),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    pdf: z.string().optional(),
    aliases: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing, projects };
