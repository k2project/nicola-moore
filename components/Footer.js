import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <ul aria-label='footer website navigation'>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/#online'>Online Service</Link>
                </li>
                <li>
                    <Link href='/about'>Therapist</Link>
                </li>
                <li>
                    <Link href='/therapy'>Therapy</Link>
                </li>
                <li>
                    <Link href='/therapy#fees'>Fees</Link>
                </li>
                <li>
                    <Link href='/therapy#faqs'>FAQs</Link>
                </li>
                <li>
                    <Link href='/#contact'>Contact</Link>
                </li>
            </ul>
            Nicola Moore Counselling &amp; Psychotherapy &copy;
            {new Date().getFullYear()}
        </footer>
    );
}
