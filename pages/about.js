import Head from 'next/head';
import { Fragment } from 'react';

export default function About() {
    return (
        <Fragment>
            <Head>
                <title>Nicola Moore | Counselling and Psychotherapy</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <main>
                <h1 className='title'> About </h1>
            </main>
        </Fragment>
    );
}
