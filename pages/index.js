import Head from 'next/head';
import { Fragment, useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Top from '../components/Top';
import Online from '../components/home-page/Online';
import Hello from '../components/home-page/Hello';
import imagesLoaded from 'imagesloaded';

export default function Home() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        imagesLoaded('#top', () => {
            setLoading(false);
        });
    });
    return (
        <Fragment>
            <Head>
                <title>Nicola Moore | Counselling and Psychotherapy</title>
            </Head>

            <main>
                <Header />
                <Top>
                    <div className='top-title'>time for change</div>
                    <div className='top-subtitle'>Could we talk about it?</div>
                    <h2 className='top-desc'>
                        Counselling &amp; Psychotherapy with Nicola.
                    </h2>
                </Top>
                {!loading && (
                    <Fragment>
                        <Online />
                        <Hello />
                        <Footer contact />
                    </Fragment>
                )}
            </main>
        </Fragment>
    );
}
