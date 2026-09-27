import type { APIRoute } from 'astro';
import { site } from '../config/site';

export const prerender = true;

export const GET: APIRoute = ({ site: astroSite }) => {
  const lines = site.indexable
    ? [
        'User-agent: *',
        'Allow: /',
        ...(astroSite ? [`Sitemap: ${new URL('/sitemap-index.xml', astroSite).href}`] : []),
      ]
    : [
        'User-agent: *',
        'Disallow: /',
      ];

  return new Response(`${lines.join('\n')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
