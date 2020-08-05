import React, { Children } from 'react';
import Input from './demo/Input';

export default function Top({ children }) {
    return (
        <section className='top' id='top'>
            <img
                src='/imgs/bg_home_2.2.png'
                alt=''
                className='top-rel desktop'
            />
            <div>
                <img
                    src='/imgs/bg_home_3.2_right.png'
                    alt=''
                    className='top-rel desktop side'
                />
                <img
                    src='/imgs/bg_home_3.2_left.png'
                    alt=''
                    className='top-abs desktop side'
                />
                <img src='/imgs/tablet_top.png' alt='' className='tablet' />
                <div className='top-abs top-strapline desktop'>{children}</div>
                <img src='/imgs/tablet_btm.png' alt='' className='tablet' />
            </div>
            <img
                src='/imgs/bg_home_4.2.png'
                alt=''
                className='top-rel desktop'
            />
        </section>
    );
}
