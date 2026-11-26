import Seo from '../components/seo/Seo';
import { Fragment } from 'react';
import SkipToMainContentLink from '../components/SkipToMainContentLink';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Top from '../components/Top';
import FAQ from '../components/therapy/FAQ';
import Fees from '../components/therapy/Fees';
import Counselling from '../components/therapy/Counselling';
import JsonLd from '../components/seo/JsonLd';
import { faqs } from '../components/therapy/faqs';
import { faqJsonLd } from '../utils/structured-data';

export default function Therapy() {
    return (
        <Fragment>
            <Seo
                title='Therapy, Fees & FAQs'
                description='What counselling and psychotherapy involve, fees (£50 initial consultation, £85 per session), health insurers accepted and answers to common questions.'
                path='/therapy'
            />
            <JsonLd id='faq' data={faqJsonLd(faqs)} />

            <SkipToMainContentLink />
            <Header />
            <Top>
                <div className='top-title'>
                    A <span>step</span> forward
                </div>
                <h1 className='top-desc'>
                    Counselling &amp; psychotherapy with Nicola Moore
                </h1>
            </Top>
            <main id='main'>
                <Counselling />
                <FAQ />
                <Fees />
            </main>
            <Footer />
        </Fragment>
    );
}
