import Seo from '../components/seo/Seo';
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
            <Seo
                title='Qualified UKCP Psychotherapist'
                description='Nicola Moore is a qualified psychodynamic psychotherapist (UKCP, FPC) in London, helping with anxiety, depression, trauma, grief, relationships and more.'
                path='/about'
            />
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
