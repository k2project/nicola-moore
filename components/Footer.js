import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <ul aria-label='footer website navigation'>
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
    );
}
