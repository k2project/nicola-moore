# SEO AND SEARCH CONSOLE

## Overview

The site's search setup lives in code: page metadata, structured data, `robots.txt` and `sitemap.xml`. Two steps are manual: verifying the site in **Google Search Console** and submitting the sitemap. Both are described below.

- **Canonical URL / base:** `https://www.nicolamooretherapy.co.uk` (`SITE_PROD_URL` in `data/seo.js`). You can override it with the `NEXT_PUBLIC_SITE_URL` build variable.
- **Only production is indexable.** Cloudflare Workers Builds sets `WORKERS_CI_BRANCH`. A build of any branch other than `master` (or `PRODUCTION_BRANCH` if set) outputs `noindex, nofollow`, and its `robots.txt` blocks everything. Local builds (no `WORKERS_CI_BRANCH`) are indexable. `SITE_INDEXABLE=true|false` overrides the check.
- **Search Console verification** uses the `GOOGLE_SITE_VERIFICATION` build variable. The `<meta name="google-site-verification">` tag is only output when it is set.

The site is a static export (`output: 'export'`), so every value above is fixed at **build time**. After changing a variable in Cloudflare, run a new build.

## Files

| File | Purpose |
| --- | --- |
| `data/seo.js` | Site URL, name, title suffix, `IS_INDEXABLE`, `GOOGLE_SITE_VERIFICATION`, default share image, and `SITEMAP_PAGES` (the pages listed in the sitemap). |
| `components/seo/Seo.js` | Per-page `<head>` tags: title, description, canonical, robots, verification, Open Graph and Twitter card. Every page renders one. |
| `components/seo/JsonLd.js` | Safely renders schema.org JSON-LD (escapes `<`). Always add structured data through this component. |
| `utils/structured-data.js` | JSON-LD builders: `siteJsonLd()` (Person + ProfessionalService + WebSite, on every page via `_app.js`) and `faqJsonLd()` (FAQPage on `/therapy`). |
| `utils/plain-text.js` | Flattens JSX (FAQ answers) to plain text for JSON-LD. |
| `pages/_document.js` | `<html lang="en-GB">`, favicons and theme colour. |
| `pages/_app.js` | Viewport tag and site-wide JSON-LD. |
| `pages/404.js` | Not-found page (`noindex`). Cloudflare serves it with a 404 status (`not_found_handling` in `wrangler.jsonc`). |
| `scripts/indexable.mjs` | Decides whether the build is the indexable production build. |
| `scripts/seo-files.mjs` | Runs after `next build` (`postbuild`) and writes `out/robots.txt` and `out/sitemap.xml`. |
| `next.config.mjs` | Passes `SITE_INDEXABLE` and `GOOGLE_SITE_VERIFICATION` into the pages at build time. |
| `public/opengraph.jpg` | Default link-preview image (1200×630). |
| `public/icon.svg`, `favicon.ico`, `apple-touch-icon.png` | Favicons. |

### Adding a page

1. Render `<Seo title='Page name' description='…' path='/page-path' />` at the top of the page. The ` | Nicola Moore Psychotherapy` suffix is added automatically.
2. Keep the full title under 60 characters and the description between 50 and 160.
3. Give the page exactly one `<h1>`.
4. Add the route to `SITEMAP_PAGES` in `data/seo.js`.

## Checking tags

After `npm run build`, open `out/<page>.html` and check the `<head>`, or after deploying:

```bash
curl -s https://www.nicolamooretherapy.co.uk/about | grep -oE '<(title|meta|link)[^>]*>'
curl -s https://www.nicolamooretherapy.co.uk/robots.txt
curl -s https://www.nicolamooretherapy.co.uk/sitemap.xml
```

- Structured data: [Rich Results Test](https://search.google.com/test/rich-results) and [Schema Markup Validator](https://validator.schema.org).
- Link previews: [opengraph.xyz](https://www.opengraph.xyz), the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) or LinkedIn Post Inspector. Facebook and LinkedIn cache previews, so re-scrape after a change.

## Cloudflare build variables

Set them in **Workers & Pages → nicola-moore-app → Settings → Build → Variables and secrets**. They are **build** variables, not runtime ones.

| Variable | Value | Needed? |
| --- | --- | --- |
| `GOOGLE_SITE_VERIFICATION` | The Search Console token (see below) | For verification |
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID (`G-…`) | For analytics |
| `PRODUCTION_BRANCH` | Only if production isn't built from `master` | Rarely |
| `NEXT_PUBLIC_SITE_URL` | Only to point canonicals at another domain | Rarely |

## Domain: one canonical host

The canonical host is `www`. Add both `nicolamooretherapy.co.uk` and `www.nicolamooretherapy.co.uk` as custom domains on the Worker, then redirect the bare domain to `www`:

**Rules → Redirect Rules → Create rule → template "Redirect from root to WWW"** (301, keep the path and query string).

Also turn on **SSL/TLS → Edge Certificates → Always Use HTTPS**.

## Search Console verification

### Why verify

Verification doesn't change rankings by itself. It gives access to **Google Search Console**, which lets you:

- submit the sitemap and ask Google to index new or changed pages;
- see the searches the site appears for, with impressions, clicks and average position (GA4 doesn't have this data);
- get alerts about crawl errors, 404s, mobile problems and Core Web Vitals;
- check that Google reads the canonical URLs, meta tags and structured data;
- get security and manual-action notices, and temporarily remove URLs.

Do the steps below **after the SEO code is live in production**.

### 1. Get the token

1. Go to [search.google.com/search-console](https://search.google.com/search-console) and sign in with the Google account that owns the GA4 property.
2. Choose **Add property → URL prefix** and enter `https://www.nicolamooretherapy.co.uk/` (with `www`).
3. Under **Other verification methods**, choose **HTML tag**. Google shows:
   ```html
   <meta name="google-site-verification" content="AbC123xyz..." />
   ```
4. Copy **only the `content` value**. Leave the dialog open.

### 2. Add the token to Cloudflare

1. Add the `GOOGLE_SITE_VERIFICATION` build variable with the token (see [Cloudflare build variables](#cloudflare-build-variables)).
2. Trigger a new production build: push to `master`, or **Deployments → Retry build** on the latest one.

### 3. Check, then verify

```bash
curl -s https://www.nicolamooretherapy.co.uk | grep -o '<meta name="google-site-verification"[^>]*>'
```

If the tag is printed, click **Verify** in Search Console.

**Keep the variable after verifying.** Google re-checks the tag from time to time, and verification is lost if the tag disappears.

### Alternative: Domain property (DNS)

The domain is on Cloudflare DNS, so you can choose **Domain** instead of URL prefix and verify with the TXT record Google gives you (**DNS → Records → Add record → TXT**). One property then covers `www`, the bare domain, `http` and `https`, and `GOOGLE_SITE_VERIFICATION` isn't needed.

## Sitemap submission

1. Check `https://www.nicolamooretherapy.co.uk/sitemap.xml` is live and uses the `www` domain.
2. In the verified Search Console property, open **Sitemaps**, enter `sitemap.xml` and click **Submit**.
3. The status should become **Success** with 3 discovered URLs. The first read can take from minutes to a day.

You don't need to resubmit after changes. Google re-reads the sitemap, and `robots.txt` points to it.

## Link Search Console to GA4 (optional)

Linking puts Search Console data (queries, organic landing pages) into GA4.

- **From GA4:** **Admin → Product links → Search Console links → Link**, pick the property and the web stream.
- **From Search Console** (if the GA4 screen errors): **Settings → Associations → Associate → Google Analytics property**.

Then publish the reports: **Reports → Library → Search Console collection → ⋮ → Publish**. Data takes 24–48 hours to appear.

## Troubleshooting

| Problem | Check |
| --- | --- |
| Verification fails | Is `GOOGLE_SITE_VERIFICATION` set as a **build** variable, and was a new build run afterwards? Does the `curl` above print the tag? |
| Production shows `noindex` | Is production built from `master`? If not, set `PRODUCTION_BRANCH`. Check `out/robots.txt` in the build log output. |
| Canonicals or sitemap use the wrong domain | `NEXT_PUBLIC_SITE_URL` must be unset or `https://www.nicolamooretherapy.co.uk`. |
| A preview URL shows up in Google | Previews output `noindex`. Request removal in Search Console (**Removals**). |
| Share preview shows an old image or title | Re-scrape with the Facebook Sharing Debugger or LinkedIn Post Inspector. |
