import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactForm() {
    const [trap, setTrap] = useState(null);
    const [name, setName] = useState('');
    const [details, setDetails] = useState('');

    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const validateEmail = (str) => details.includes('@');

    const mobRegex = /^[+]?(\d+([- ])?)*$/;
    const validateMobile = (str) => mobRegex.test(str);

    const setFocusToInput = () => {
        if (!error) return;
        document.getElementById(error.link).focus();
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        if (trap) return;

        if (!name) {
            document.getElementById('name').focus();
            return setError({ link: 'name', text: '* Name is required.' });
        }
        if (!details) {
            document.getElementById('details').focus();
            return setError({
                link: 'details',
                text: '* Email or mobile is required.',
            });
        }

        if (!validateEmail(details) && !validateMobile(details)) {
            document.getElementById('details').focus();
            return setError({
                link: 'details',
                text:
                    'Please provide either a valid email address or a mobile in digital format with optional country code eg. +44 . Alternatively, send me an email at njmoore63@outlook.com . ',
            });
        }

        const isEmail = details.includes('@');

        try {
            const response = await fetch('/api/mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email: isEmail ? details : null,
                    mobile: isEmail ? null : details,
                }),
            });

            setName('');
            setDetails('');

            setMessage({
                text: 'Message sent successfully.',
                status: 'success',
            });
            setTimeout(() => {
                setMessage(null);
            }, 5000);
        } catch (error) {
            setMessage({
                text:
                    'We are sorry but we were unable to send your message. Please contact Nicola directly on njmoore63@outlook.com.',
                status: 'error',
            });
            console.log(error);
        }
    };
    return (
        <div className='bg--secondary-light txt-center'>
            <section className='contact' id='contact'>
                <div>
                    <h2 className='section-title'>Request a session.</h2>
                    <p>
                        Please send me a message via the provided form and I
                        will get back to you as soon as I can.
                    </p>
                    <ul aria-label='social media links'>
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
                        <input
                            type='text'
                            id='name'
                            autoComplete='off'
                            className={name ? 'filled' : ''}
                            onChange={(e) => {
                                setName(e.target.value);
                                setError(null);
                            }}
                            value={name}
                        />
                        <label htmlFor='details'>Email/Mobile*</label>
                        <input
                            type='text'
                            id='details'
                            autoComplete='off'
                            className={details ? 'filled' : ''}
                            onChange={(e) => {
                                setDetails(e.target.value);
                                setError(null);
                            }}
                            value={details}
                        />

                        <input
                            type='email'
                            id='honeyTrap'
                            className='honeyTrap'
                            aria-hidden='true'
                            tabIndex='-1'
                            onChange={(e) => setTrap(e.target.value)}
                        />
                        <button
                            type='submit'
                            className='btn btn--theme'
                            disabled={error}
                        >
                            Send
                        </button>

                        {error && (
                            <p className='error'>
                                <Link href={`/#${error.link}`}>
                                    <a role='alert' onClick={setFocusToInput}>
                                        {error.text}
                                    </a>
                                </Link>
                            </p>
                        )}
                    </form>
                </div>
                <img
                    src='/imgs/ppl_online.png'
                    alt=''
                    className='contact-drawing'
                />
            </section>
            {message && (
                <div className={`message ${message.status && message.status}`}>
                    <p role='alert'>{message.text && message.text}</p>
                    <button onClick={() => setMessage(null)} className='close'>
                        &times;
                    </button>
                </div>
            )}
        </div>
    );
}
