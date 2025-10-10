import React, { useState } from 'react';

export default function ContactForm() {
    const [message, setMessage] = useState(null);

    const email = 'nicolajmoore@outlook.com';

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setMessage({
                text: 'Email address copied to clipboard successfully!',
                status: 'success',
            });
            setTimeout(() => setMessage(null), 5000);
        } catch (err) {
            setMessage({
                text: 'Failed to copy email.',
                status: 'error',
            });
            setTimeout(() => setMessage(null), 5000);
        }
    };

    return (
        <div className='bg--secondary-light txt-center'>
            <section className='contact' id='contact'>
                <div>
                    <h2 className='section-title'>Request a session.</h2>
                    <p>
                        Please send me a message with your preferred contact
                        details to{' '}
                        <strong className='color--theme'>{email}</strong> <br />
                        and I will get back to you as soon as I can.
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

                <div className='actions'>
                    <div className='btn-box'>
                        <a href={`mailto:${email}`} className='btn btn--theme'>
                            Send from your Mailbox
                        </a>

                        {/* ✅ Replaced Link with button for copy functionality */}
                        <button
                            onClick={copyToClipboard}
                            className='btn btn--theme'
                            type='button'
                        >
                            Copy my email to clipboard
                        </button>
                    </div>
                </div>

                <img
                    src='/imgs/ppl_online.png'
                    alt=''
                    className='contact-drawing'
                />
            </section>

            {message && (
                <div className={`message ${message.status || ''}`}>
                    <p role='alert'>{message.text}</p>
                    <button onClick={() => setMessage(null)} className='close'>
                        &times;
                    </button>
                </div>
            )}
        </div>
    );
}
