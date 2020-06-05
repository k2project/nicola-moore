import Head from 'next/head';
import { Fragment } from 'react';
import Header from '../components/Header';
import Top from '../components/home-page/Top';
import Online from '../components/home-page/Online';
import Hello from '../components/home-page/Hello';

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>Nicola Moore | Counselling and Psychotherapy</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <main>
                <Header />
                <Top />
                <Online />
                <Hello />
            </main>
        </Fragment>
    );
}
