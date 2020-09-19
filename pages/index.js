import Head from 'next/head';
import { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Top from '../components/Top';
import Online from '../components/home-page/Online';
import Hello from '../components/home-page/Hello';

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>Nicola Moore | Counselling and Psychotherapy</title>

                <meta
                    name='description'
                    content='A qualified and experienced psychotherapist can offer a safe place for you to explore your feelings and work through difficult issues. With now available online therapy you can meet without the restrictions of place and time to get the help you need.'
                />
                <meta
                    name='keywords'
                    content='Nicola More, Counselling, Psychotherapy, London, online '
                />
                <meta name='author' content='@_k2project' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                <meta
                    property='og:title'
                    content='Nicola Moore | Counselling and Psychotherapy'
                />
                <meta
                    property='og:url'
                    content='http://www.nicolamooretherapy.co.uk'
                />
                <meta property='og:type' content='website' />
                <meta
                    property='og:description'
                    content='A qualified and experienced psychotherapist can offer a safe place for you to explore your feelings and work through difficult issues. With now available online therapy you can meet without the restrictions of place and time to get the help you need.'
                />
                <meta
                    property='og:image'
                    content='http://www.nicolamooretherapy.co.uk/nicola_moore_small.png'
                />
            </Head>

            <main>
                <Header />
                <Top>
                    <div className='top-title'>
                        time for <span>change</span>
                    </div>
                    <h2 className='top-desc'>
                        Counselling &amp; Psychotherapy with Nicola Moore
                    </h2>
                </Top>
                <Online />
                <Hello />
                <Footer contact />
            </main>
        </Fragment>
    );
}
