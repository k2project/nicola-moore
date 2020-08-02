import React, { Fragment } from 'react';
import Link from 'next/link';

export default function Footer({ contact }) {
    const sendEmail = async (e) => {
        e.preventDefault();
        try {
            let name = 'Kris';
            let email = 'kris.kopczkrzy@rabbies.com';
            await fetch('/api/mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                }),
            });
            console.log('email sent');
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Fragment>
            {contact && (
                <section className='contact bg--secondary-light' id='contact'>
                    <div>
                        <h2 className='section-title'>Request a session.</h2>
                        <p>
                            Please send me a message via the provided form and I
                            will get back to you as soon as I can.
                        </p>
                        <ul>
                            <li>
                                <a href='#'>
                                    <img
                                        src='/imgs/linkedin.png'
                                        alt='LinkedIn Account'
                                    />
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <img
                                        src='/imgs/twitter.png'
                                        alt='Twitter Account'
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <form onSubmit={sendEmail}>
                            <label htmlFor='name'>Name*</label>
                            <input type='text' id='name' autoComplete='off' />
                            <label htmlFor='contact'>Email/Mobile*</label>
                            <input
                                type='text'
                                id='contact'
                                autoComplete='off'
                            />
                            <button type='submit' className='btn btn--theme'>
                                Send
                            </button>
                        </form>
                    </div>
                    <img
                        src='/imgs/ppl_online.png'
                        alt=''
                        className='contact-drawing'
                    />
                </section>
            )}
            <footer>
                <ul aria-label='navigation'>
                    <li>
                        <Link href='/'>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/#online'>
                            <a>Online Service</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/about'>
                            <a>Therapist</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/therapy'>
                            <a>Therapy</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/therapy#fees'>
                            <a>Fees</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/therapy#faqs'>
                            <a>FAQs</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/#contact'>
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
                Nicola Moore Counselling &amp; Psychotherapy &copy;
                {new Date().getFullYear()}
            </footer>
        </Fragment>
    );
}
