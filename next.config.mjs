import { isIndexableBuild } from './scripts/indexable.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Fully static site: `next build` writes plain HTML/CSS/JS to ./out,
    // which Cloudflare serves as static assets (see wrangler.jsonc).
    output: 'export',

    // Build-time values inlined into the pages (server and client match).
    env: {
        SITE_INDEXABLE: String(isIndexableBuild()),
        GOOGLE_SITE_VERIFICATION: process.env.GOOGLE_SITE_VERIFICATION || '',
    },
};

export default nextConfig;
