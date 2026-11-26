import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang='en-GB'>
            <Head>
                <link rel='icon' href='/favicon.ico' sizes='32x32' />
                <link rel='icon' href='/icon.svg' type='image/svg+xml' />
                <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
                <meta name='theme-color' content='#88e2ce' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
