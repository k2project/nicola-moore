// Site-wide SEO settings. See _documentation/seo-and-search-console.md.

export const SITE_PROD_URL = 'https://www.nicolamooretherapy.co.uk';

// Canonical base for every absolute URL (canonical, og:url, sitemap, JSON-LD).
// NEXT_PUBLIC_SITE_URL can override it, e.g. for a staging domain.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || SITE_PROD_URL)
    .trim()
    .replace(/\/+$/, '');

export const SITE_NAME = 'Nicola Moore Counselling & Psychotherapy';

// Appended to every page title except the home page, which sets its own.
export const TITLE_SUFFIX = 'Nicola Moore Psychotherapy';

export const CONTACT_EMAIL = 'nicolajmoore@outlook.com';

// Only the production build may be indexed. Set in next.config.mjs from the
// Cloudflare build branch, so preview builds output noindex.
export const IS_INDEXABLE = process.env.SITE_INDEXABLE !== 'false';

// Google Search Console "HTML tag" token, set as a Cloudflare build variable.
export const GOOGLE_SITE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION;

export const DEFAULT_OG_IMAGE = {
    url: '/opengraph.jpg',
    width: 1200,
    height: 630,
    alt: 'Nicola Moore, psychotherapist',
};

// Every indexable page. Used by the sitemap (scripts/seo-files.mjs).
export const SITEMAP_PAGES = [
    { path: '/', changefreq: 'monthly', priority: 1 },
    { path: '/about', changefreq: 'yearly', priority: 0.8 },
    { path: '/therapy', changefreq: 'yearly', priority: 0.8 },
];

export const absoluteUrl = (path = '/') =>
    /^https?:\/\//.test(path) ? path : `${SITE_URL}${path === '/' ? '' : path}`;
