import type { APIRoute } from 'astro';

export const prerender = true;

const PUBLIC_PATHS = [
  '/',
  '/farmers/',
  '/product/',
  '/trust/',
  '/company/',
  '/investors/',
  '/contact/',
] as const;

const escapeXml = (value: string) =>
  value.replace(/[<>&'"]/g, (char) => ({
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    "'": '&apos;',
    '"': '&quot;',
  })[char] ?? char);

export const GET: APIRoute = ({ site }) => {
  const urls = site
    ? PUBLIC_PATHS.map((path) => `  <url><loc>${escapeXml(new URL(path, site).href)}</loc></url>`).join('\n')
    : '';

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>',
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
