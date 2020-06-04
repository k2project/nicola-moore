import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>Nicola Moore | Counselling and Psychotherapy</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <main>
                <header className='bg-theme home-header'>
                    <img src='/imgs/bg_top.png' alt='' className='bg-top' />
                    <nav>
                        <ul>
                            <li>
                                <Link href='/about'>
                                    <a>Get to know me</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/therapy'>
                                    <a>What's therapy about?</a>
                                </Link>
                            </li>
                            <li>
                                <a href='#'>Reaching out</a>
                            </li>
                        </ul>
                    </nav>
                    <div className='title'>
                        <h1>Just be YOU!</h1>
                        <h2>
                            Counselling &amp; Psychotherapy with Nicola Moore.
                        </h2>
                    </div>
                </header>
            </main>
        </Fragment>
    );
}
