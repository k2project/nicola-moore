import Head from 'next/head';
import '../styles/styles.scss';
import GoogleAnalytics from '../components/GoogleAnalytics';
import JsonLd from '../components/seo/JsonLd';
import { siteJsonLd } from '../utils/structured-data';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                {/* viewport belongs in _app, not _document (Next.js rule) */}
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
            </Head>
            <JsonLd id='site' data={siteJsonLd()} />
            <GoogleAnalytics />
            <Component {...pageProps} />
        </>
    );
}
