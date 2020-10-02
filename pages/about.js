import Head from 'next/head';
import { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SkipToMainContentLink from '../components/SkipToMainContentLink';
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
                <meta
                    name='description'
                    content='I am a fully qualified Psychotherapist (registered with UKCP and FPC). I help with anxiety, depressed mood, anger, trauma, relationship dissatisfaction, attachment issues, grief, body dysmorphia, issues with sexuality and gender, low self-esteem and self-identity, and more. I have worked within the NHS and charities seeing a diverse group of service users.'
                />
                <meta
                    name='keywords'
                    content='Nicola More, Counselling, Psychotherapy, Psychoterapist, qualified, trained, experienced, ukcp therapist '
                />
                <meta name='author' content='@_k2project' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                <meta
                    property='og:title'
                    content='About Nicola Moore | Counselling and Psychotherapy'
                />
                <meta
                    property='og:url'
                    content='http://www.nicolamooretherapy.co.uk/about'
                />
                <meta property='og:type' content='website' />
                <meta
                    property='og:description'
                    content='I am a fully qualified Psychotherapist (registered with UKCP and FPC). I help with anxiety, depressed mood, anger, trauma, relationship dissatisfaction, attachment issues, grief, body dysmorphia, issues with sexuality and gender, low self-esteem and self-identity, and more. I have worked within the NHS and charities seeing a diverse group of service users.'
                />
                <meta
                    property='og:image'
                    content='http://www.nicolamooretherapy.co.uk/nicola_moore_small.png'
                />
            </Head>
            <SkipToMainContentLink />
            <Header />
            <main>
                <Qualifications />
                <Expertise />
                <Start />
            </main>
            <Footer />
        </Fragment>
    );
}
