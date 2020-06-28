import Head from 'next/head';
import { Fragment } from 'react';
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
            </Head>

            <main>
                <Header />
                <Top>
                    {/* step forward */}
                    <div className='top-title'>the therapy</div>
                    <div className='top-subtitle'>A step forward.</div>
                    {/* <div className='top-subtitle'>Working together</div> */}
                    <h2 className='top-desc'>
                        Counselling &amp; Psychotherapy with Nicola.
                    </h2>
                </Top>
                <Counselling />
                <FAQ />
                <Fees />
                <Footer />
            </main>
        </Fragment>
    );
}
