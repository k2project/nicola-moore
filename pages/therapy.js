import Head from 'next/head';
import { Fragment } from 'react';
import SkipToMainContentLink from '../components/SkipToMainContentLink';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Top from '../components/Top';
import FAQ from '../components/therapy/FAQ';
import Fees from '../components/therapy/Fees';
import Counselling from '../components/therapy/Counselling';

export default function Therapy() {
    return (
        <Fragment>
            <Head>
                <title>Counselling and Psychotherapy with Nicola Moore</title>
                <meta
                    name='description'
                    content='Find out what the psychotherapy is about. Faq. Consultations fees.'
                />
                <meta
                    name='keywords'
                    content='Nicola More, Counselling, Psychotherapy, Psychoterapist, fees, faq '
                />
                <meta name='author' content='@_k2project' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                <meta
                    property='og:title'
                    content='Counselling and Psychotherapy with Nicola Moore'
                />
                <meta
                    property='og:url'
                    content='https://www.nicolamooretherapy.co.uk/therapy'
                />
                <meta property='og:type' content='website' />
                <meta
                    property='og:description'
                    content='Find out what the psychotherapy is about. Faq. Consultations fees.'
                />
                <meta
                    property='og:image'
                    content='https://www.nicolamooretherapy.co.uk/imgs/nicola_moore_small.png'
                />
                <script
                    async
                    src='https://www.googletagmanager.com/gtag/js?id=UA-180574978-1'
                ></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-180574978-1');
        `,
                    }}
                />
            </Head>

            <SkipToMainContentLink />
            <Header />
            <Top>
                <div className='top-title'>
                    A <span>step</span> forward
                </div>
                <h2 className='top-desc'>
                    Counselling &amp; psychotherapy with Nicola Moore
                </h2>
            </Top>
            <main id='main'>
                <Counselling />
                <FAQ />
                <Fees />
            </main>
            <Footer />
        </Fragment>
    );
}
