import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tours = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tours' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['car', 'walking', 'airport']),
    categoryLabel: z.string(),
    order: z.number(),
    capacity: z.string(),
    summary: z.string(),
    highlight: z.string(),
    tiers: z.array(z.object({
      label: z.string(),
      duration: z.string(),
      price: z.string(),
    })),
  }),
});

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reviews' }),
  schema: z.object({
    label: z.string(),
    date: z.string(),
    image: z.string(),
  }),
});

export const collections = { tours, reviews };
