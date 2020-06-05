import React from 'react';
import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <h1>
                nicola<span className='color--theme'>moore</span>
            </h1>
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
        </header>
    );
}
