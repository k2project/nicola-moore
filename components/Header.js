import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    if (typeof window === 'undefined') return null;
    let mql = window.matchMedia('(max-width: 480px)');
    const [isMob, setIsMob] = useState(mql.matches);

    const checkIfIsMob = () => {
        mql = window.matchMedia('(max-width: 480px)');
        setIsMob(mql.matches);
    };
    useEffect(() => {
        window.addEventListener('resize', checkIfIsMob, false);
        window.addEventListener('load', checkIfIsMob, false);
        return () => {
            window.removeEventListener('resize', checkIfIsMob, false);
            window.removeEventListener('load', checkIfIsMob, false);
        };
    }, [checkIfIsMob]);
    return (
        <header>
            <h1>
                <Link href='/'>
                    <a>
                        nicola<span className='color--theme'>moore</span>
                    </a>
                </Link>
            </h1>
            <nav>
                <ul aria-label='website main navigation'>
                    {/* {isMob && (
                        <li>
                            <Link href='/'>
                                <a>Home</a>
                            </Link>
                        </li>
                    )} */}

                    <li>
                        {!isMob && (
                            <Link href='/about'>
                                <a>Get to know me</a>
                            </Link>
                        )}
                        {isMob && (
                            <Link href='/about'>
                                <a>Therapist</a>
                            </Link>
                        )}
                    </li>
                    <li>
                        {!isMob && (
                            <Link href='/therapy'>
                                <a>What's therapy about?</a>
                            </Link>
                        )}
                        {isMob && (
                            <Link href='/therapy'>
                                <a>Therapy</a>
                            </Link>
                        )}
                    </li>
                    <li>
                        <Link href='/#contact'>
                            <a>Contact me</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
