import React from 'react';
import Link from 'next/link';

export default function Hello() {
    return (
        <section className='hello'>
            <div className='section-img'>
                <div className='cover cover--white'></div>
                <div className='section-stripline'>
                    <span className='color--theme'>Change</span>{' '}
                    <span className='nonbreakable'>your life!</span>
                    <p>
                        It’s not always easy but it starts with this very first
                        step.
                    </p>
                </div>
            </div>
            <div className='section-text bg--theme'>
                <h2 className='section-title'>
                    <b className='color--white'>HELLO!</b> I'M NICOLA.
                </h2>
                <p>
                    Thank you for visiting my website. If you are here, you may
                    have reached a point of needing some help.
                </p>

                <p>
                    Remember, you are not alone, even though you may feel it at
                    times. You need and deserve the best support. I have worked
                    with people with a diverse range of life stories and I will
                    listen to you with an open mind. My extensive experience in
                    working with adults of all ages and backgrounds has shown me
                    that therapy really can bring about positive change and help
                    you to direct more effectively the course of your life.
                </p>

                <p>
                    <strong>
                        Make that first step and we will work out the next one
                        together.
                    </strong>
                </p>
                <div className='btn-box'>
                    <Link href='/about'>
                        <a className='btn'>More about me</a>
                    </Link>
                    <Link href='/therapy'>
                        <a className='btn'>What's therapy about?</a>
                    </Link>
                </div>
            </div>
        </section>
    );
}
