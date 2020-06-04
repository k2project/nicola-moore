import Head from 'next/head';
import { Fragment } from 'react';
import Top from '../components/home-page/Top';
import Online from '../components/home-page/Online';

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>Nicola Moore | Counselling and Psychotherapy</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <main>
                <h1 className='sr-only'>Welcome to Nicola Moore's website.</h1>
                <Top />
                <Online />
            </main>
        </Fragment>
    );
}
