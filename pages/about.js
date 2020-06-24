import Head from 'next/head';
import Link from 'next/link';
import { Fragment, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Top from '../components/Top';

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
                <Top>
                    <div className='top-title'>the connection</div>
                    <div className='top-subtitle'>It's nice meeting you!</div>
                    <h2 className='top-desc'>
                        Counselling &amp; Psychotherapy with Nicola.
                    </h2>
                </Top>
                <section className='nicola'>
                    <div className='section-img'>
                        <div className='cover cover--white'></div>
                        <div className='section-stripline'>
                            <span className='color--theme'>Nicola </span>Moore
                            <p>Qualified and Registered Psychotherapist</p>
                        </div>
                    </div>
                    <div className='section-text bg--theme bg--secondary-dark'>
                        <h2 className='section-title'>
                            WHO AM I AND CAN I HELP YOU?
                        </h2>
                        <p>
                            I am a fully qualified Psychotherapist and hold a
                            Postgraduate Diploma in Psychodynamic Theory and
                            Practice from WPF, a highly regarded training
                            institution here in London that combines academic
                            study of theory alongside clinical experience.
                        </p>

                        <p>
                            Aside from my private practice, I have worked within
                            the NHS and not-for-profit charities where I have
                            seen a diverse group of service users. In addition I
                            have extensive experience as a forensic
                            psychotherapist working with clients in a secure
                            setting.
                        </p>
                        <p>
                            I believe in the importance of continuing my
                            professional development and regularly attend
                            workshops and seminars to develop skills based on
                            the practice of both classic psychoanalytic theories
                            and more contemporary variations practices.
                        </p>
                        <p>
                            Before working in this field I had a career in
                            creative businesses and I am particularly interested
                            in how a creative sensibility affects us both
                            personally and within the commercial world.
                        </p>

                        <ul
                            aria-labelledby='membership'
                            className='professional-bodies'
                        >
                            <li>
                                <img
                                    src='/imgs/ukcplogo.png'
                                    alt='UK Council
                                for Psychotherapy member'
                                />
                            </li>
                            <li>
                                <img
                                    src='/imgs/fpc.png'
                                    alt='FPC (the graduate body of WPF) member'
                                />
                            </li>
                            <li>
                                <img
                                    src='/imgs/bpclogo.png'
                                    alt='British Psychoanalytic
                                Council member'
                                />
                            </li>
                        </ul>

                        <p id='membership'>
                            <strong>
                                I am a registered member of the UKCP (UK Council
                                for Psychotherapy), BPC (British Psychoanalytic
                                Council) and FPC (the graduate body of WPF) and
                                I comply with their professional ethical codes.
                            </strong>
                        </p>
                    </div>
                </section>
                <section className='section-text'>
                    <h2 className='section-title'>
                        HOW AND WHAT CAN I HELP WITH?
                    </h2>

                    <p>
                        A key part of therapy is the development of a strong
                        alliance between us so that you can fully make use of
                        the therapeutic process, that puts emphasis on the
                        exploration of early parts of your life, key carers and
                        their role and significance to you. It can feel a bit
                        odd talking to a stranger about such intimate matters
                        but it is also this unique angle that becomes a very
                        particular relationship and provides real opportunity
                        for the shift within you; it is very different to
                        friendship.
                    </p>
                    <p>
                        I respect that you might need to talk about issues that
                        are deeply personal – indeed this might be the first
                        time they are ever spoken of – and there will be painful
                        events and difficult emotion to feel. Our aim will be to
                        help you understand yourself differently and to relieve
                        the symptoms that trouble and inhibit you.
                    </p>
                    <p>
                        Amongst the many different issues I have experience in,
                        I can help with anxiety, depressed mood, anger, trauma,
                        relationship dissatisfaction, attachment issues, grief,
                        body dysmorphia, issues with sexuality and gender, low
                        self-esteem and self-identity. I approach you and your
                        world with an open mind and without judgement where all
                        aspects of human expression can be discussed. I welcome
                        adults of all race, colour, religion, sexuality and
                        gender orientation.
                    </p>

                    <p>
                        <strong>
                            Together we can explore the issues that might inform
                            us, help us make links within your life and thus
                            move towards a different view which gives you
                            options that you felt you never had; this is the
                            change you are seeking.
                        </strong>
                    </p>
                    <div className='btn-box'>
                        <Link href='/therapy'>
                            <a className='btn btn--theme'>More about therapy</a>
                        </Link>
                        <Link href='/therapy#faq'>
                            <a className='btn btn--theme'>FAQ</a>
                        </Link>
                    </div>
                </section>
                <section className='section-text bg--white'>
                    <h2 className='section-title'>WHERE DO WE START?</h2>

                    <p>
                        It’s very common to want to ‘shop around’ and meet more
                        than one therapist – talking with me has to feel that
                        there is potential to develop this special therapeutic
                        relationship. Once you have made contact (please use the
                        contact form below), I ususally suggest we have a brief
                        phone call to ascertain if I can offer you the right
                        support and if so, we meet to have an{' '}
                        <Link href='/therapy#initial_consultation'>
                            <a>initial consultation.</a>
                        </Link>{' '}
                        If speaking with me then doesn’t feel right for you, I
                        do not take it personally and encourage you to seek help
                        elsewhere with someone you feel is better suited.
                    </p>

                    <div className='btn-box'>
                        <Link href='/therapy#fees'>
                            <a className='btn btn--theme'>Fees</a>
                        </Link>
                        <Link href='/#contact'>
                            <a className='btn btn--theme'>Contact me</a>
                        </Link>
                    </div>
                </section>
                <Footer />
            </main>
        </Fragment>
    );
}
