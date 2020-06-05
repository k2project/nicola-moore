import React from 'react';
import Input from '../demo/Input';

export default function Top() {
    return (
        <section className='home-top'>
            <img src='/imgs/bg_home_2.2.png' alt='' className='top-rel' />
            <div>
                <img
                    src='/imgs/bg_home_3.2_left.png'
                    alt=''
                    className='top-rel'
                />
                <img
                    src='/imgs/bg_home_3.2_right.png'
                    alt=''
                    className='top-abs'
                />
                <div className='top-abs top-strapline'>
                    {/* <p className='title'>Are you ok?</p> */}
                    <Input init='Not fitting in?' />
                    <h2>Find out how to be YOU and be HAPPY.</h2>
                    <p>Counselling &amp; Psychotherapy with Nicola.</p>
                </div>
            </div>
            <img src='/imgs/bg_home_4.2.png' alt='' className='top-rel' />
        </section>
    );
}
