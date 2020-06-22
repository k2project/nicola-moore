import Head from 'next/head';
import { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Top from '../components/Top';

export default function About() {
    return (
        <Fragment>
            <Head>
                <title>
                    About Nicola Moore | Counselling and Psychotherapy
                </title>
            </Head>

            <main>
                <Header />
                <Top>
                    <div className='top-title'>the connection</div>
                    <div className='top-subtitle'>It's great meeting you!</div>
                    <h2 className='top-desc'>
                        Counselling &amp; Psychotherapy with Nicola.
                    </h2>
                </Top>
                <Footer />
            </main>
        </Fragment>
    );
}
