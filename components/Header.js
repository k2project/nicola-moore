import React from 'react';
import Link from 'next/link';

export default function Header() {
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
                        <Link href='/#contact'>
                            <a>Contact me</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
