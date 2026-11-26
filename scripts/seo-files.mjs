// Writes robots.txt and sitemap.xml into the static export (./out).
// Runs after `next build` (npm "postbuild"). Preview builds (SITE_INDEXABLE
// = "false", set in next.config.mjs) get a robots.txt that blocks everything.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { SITEMAP_PAGES, absoluteUrl } from '../data/seo.js';
import { isIndexableBuild } from './indexable.mjs';

const OUT_DIR = 'out';
const today = new Date().toISOString().slice(0, 10);

const robots = isIndexableBuild()
    ? `User-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl('/sitemap.xml')}\n`
    : 'User-agent: *\nDisallow: /\n';

const urls = SITEMAP_PAGES.map(
    ({ path, changefreq, priority }) => `  <url>
    <loc>${absoluteUrl(path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync(join(OUT_DIR, 'robots.txt'), robots);
writeFileSync(join(OUT_DIR, 'sitemap.xml'), sitemap);
console.log(
    `SEO files written: robots.txt (${isIndexableBuild() ? 'indexable' : 'noindex'}), sitemap.xml (${SITEMAP_PAGES.length} URLs)`,
);
