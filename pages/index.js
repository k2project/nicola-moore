import Seo from '../components/seo/Seo';

import { Fragment } from 'react';
import SkipToMainContentLink from '../components/SkipToMainContentLink';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Top from '../components/Top';
import Online from '../components/home-page/Online';
import Hello from '../components/home-page/Hello';
import ContactForm from '../components/home-page/ContactForm';

export default function Home() {
    return (
        <Fragment>
            <Seo
                title='Nicola Moore | Counselling & Psychotherapy in London'
                fullTitle
                description='Counselling and psychotherapy in London and online with Nicola Moore, a UKCP-registered psychotherapist. A safe place to explore your feelings and find change.'
                path='/'
            />
            <SkipToMainContentLink />
            <Header />
            <main id='main'>
                <Top>
                    <div className='top-title'>
                        time for <span>change</span>
                    </div>
                    <h1 className='top-desc'>
                        Counselling &amp; Psychotherapy with Nicola Moore
                    </h1>
                </Top>
                <Online />
                <Hello />
                <ContactForm />
            </main>
            <Footer />
        </Fragment>
    );
}
