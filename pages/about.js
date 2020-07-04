import Head from 'next/head';
import { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Top from '../components/Top';
import Qualifications from '../components/about/Qualifications';
import Expertise from '../components/about/Expertise';
import Start from '../components/about/Start';

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
                <Qualifications />
                <Expertise />
                <Start />
                <Footer />
            </main>
        </Fragment>
    );
}
