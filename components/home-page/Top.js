import React from 'react';
import Link from 'next/link';
import Input from '../demo/Input';

export default function Top() {
    return (
        <section className='home-top'>
            <div>
                <img
                    src='/imgs/bg_home_1_left.png'
                    alt=''
                    className='top-rel'
                />
                <img
                    src='/imgs/bg_home_1_right.png'
                    alt=''
                    className='top-abs'
                />
                <nav className='top-abs'>
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
            </div>
            <img src='/imgs/bg_home_2.png' alt='' className='top-rel' />
            <div>
                <img
                    src='/imgs/bg_home_3_left.png'
                    alt=''
                    className='top-rel'
                />
                <img
                    src='/imgs/bg_home_3_right.png'
                    alt=''
                    className='top-abs'
                />
                <div className='top-abs top-strapline'>
                    {/* <p className='title'>Are you ok?</p> */}
                    <Input init='How are YOU?' />
                    <h2>Counselling &amp; Psychotherapy with Nicola Moore.</h2>
                </div>
            </div>
            <img src='/imgs/bg_home_4.png' alt='' className='top-rel' />
        </section>
    );
}
