import Head from 'next/head';
import {
    DEFAULT_OG_IMAGE,
    GOOGLE_SITE_VERIFICATION,
    IS_INDEXABLE,
    SITE_NAME,
    TITLE_SUFFIX,
    absoluteUrl,
} from '../../data/seo';

// Per-page <head> SEO tags: title, description, canonical, robots and matching
// Open Graph / Twitter tags. Every page renders exactly one <Seo>.
//
// - `title` is the page name; " | Nicola Moore Psychotherapy" is appended
//   unless `fullTitle` is set (the home page uses its own full title).
// - `path` is the page's route ("/about"); it builds the canonical and og:url.
// - Keep titles under 60 characters and descriptions within 50–160.
export default function Seo({
    title,
    fullTitle = false,
    description,
    path,
    image = DEFAULT_OG_IMAGE,
    noindex = false,
}) {
    const pageTitle = fullTitle ? title : `${title} | ${TITLE_SUFFIX}`;
    const url = absoluteUrl(path);
    const imageUrl = absoluteUrl(image.url);
    const indexable = IS_INDEXABLE && !noindex;

    return (
        <Head>
            <title>{pageTitle}</title>
            <meta name='description' content={description} />
            {!noindex && <link rel='canonical' href={url} />}
            <meta
                name='robots'
                content={indexable ? 'index, follow' : 'noindex, nofollow'}
            />
            {GOOGLE_SITE_VERIFICATION && (
                <meta
                    name='google-site-verification'
                    content={GOOGLE_SITE_VERIFICATION}
                />
            )}

            <meta property='og:type' content='website' />
            <meta property='og:site_name' content={SITE_NAME} />
            <meta property='og:locale' content='en_GB' />
            <meta property='og:url' content={url} />
            <meta property='og:title' content={pageTitle} />
            <meta property='og:description' content={description} />
            <meta property='og:image' content={imageUrl} />
            <meta property='og:image:width' content={String(image.width)} />
            <meta property='og:image:height' content={String(image.height)} />
            <meta property='og:image:alt' content={image.alt} />

            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:title' content={pageTitle} />
            <meta name='twitter:description' content={description} />
            <meta name='twitter:image' content={imageUrl} />
            <meta name='twitter:image:alt' content={image.alt} />
        </Head>
    );
}
