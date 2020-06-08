import Head from 'next/head';
import { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Top from '../components/home-page/Top';
import Online from '../components/home-page/Online';
import Hello from '../components/home-page/Hello';
import ColorPicker from '../components/demo/ColorPicker';
import FontPicker from '../components/demo/FontPicker';

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>Nicola Moore | Counselling and Psychotherapy</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
                <link
                    href='https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300;400;600&family=Josefin+Sans:wght@100;200;400;600&family=Merriweather+Sans:wght@300;400&display=swap'
                    rel='stylesheet'
                />
            </Head>

            <main>
                <Header />
                <Top />
                <Online />
                <Hello />
                <Footer />
                <ColorPicker />
                <FontPicker />
            </main>
        </Fragment>
    );
}
