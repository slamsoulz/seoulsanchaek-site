import { getCollection } from 'astro:content';

export interface Review {
  src: string;
  date: string;
  label: string;
}

export async function getReviews(): Promise<Review[]> {
  const entries = await getCollection('reviews');
  return entries
    .sort((a, b) => b.data.date.localeCompare(a.data.date))
    .map((entry) => ({
      src: entry.data.image,
      date: entry.data.date,
      label: entry.data.label,
    }));
}
