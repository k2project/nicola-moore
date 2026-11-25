import Script from 'next/script';

// GA4 measurement ID (e.g. G-XXXXXXXXXX). Set NEXT_PUBLIC_GA_ID at build time;
// when it is missing, no analytics code is loaded.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function GoogleAnalytics() {
    if (!GA_ID) return null;

    // GA4's enhanced measurement records client-side navigations
    // (browser history changes) as page views, so no router hook is needed.
    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy='afterInteractive'
            />
            <Script id='ga4-init' strategy='afterInteractive'>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_ID}');
                `}
            </Script>
        </>
    );
}
