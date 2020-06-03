import Head from 'next/head';
import { Fragment } from 'react';

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>Nicola Moore | Counselling and Psychotherapy</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <main>
                <h1 className='title'>Nicola Moore</h1>
            </main>
        </Fragment>
    );
}
