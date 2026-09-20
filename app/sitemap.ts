import type { MetadataRoute } from 'next';

import { articles } from '@/lib/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://datalogict.com';
  const routes = [
    '',
    '/research-hub',
    '/topic-finder',
    '/diagnostic',
    '/marketplace',
    '/shop',
    '/courses',
    '/membership',
    '/opportunities',
    '/experts',
    '/institutional',
    '/schools',
    '/schools/resources',
    '/services/order',
    '/blog',
  ];

  const pages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/opportunities' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${base}/blog/${article.slug}`,
    lastModified: new Date(article.publishedISO),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...pages, ...articlePages];
}
