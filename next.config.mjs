/** @type {import('next').NextConfig} */
const nextConfig = {
    // Fully static site: `next build` writes plain HTML/CSS/JS to ./out,
    // which Cloudflare serves as static assets (see wrangler.jsonc).
    output: 'export',
};

export default nextConfig;
