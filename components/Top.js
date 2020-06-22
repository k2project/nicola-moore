import React, { Children } from 'react';
import Input from './demo/Input';

export default function Top({ children }) {
    return (
        <section className='top'>
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
                <div className='top-abs top-strapline'>{children}</div>
            </div>
            <img src='/imgs/bg_home_4.2.png' alt='' className='top-rel' />
        </section>
    );
}
