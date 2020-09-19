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
                    <div className='top-title'>
                        A <span>step</span> forward
                    </div>
                    <h2 className='top-desc'>
                        Counselling &amp; psychotherapy with Nicola Moore
                    </h2>
                    {/* <div className='top-subtitle'>A step forward.</div> */}
                </Top>
                <Counselling />
                <FAQ />
                <Fees />
                <Footer />
            </main>
        </Fragment>
    );
}
