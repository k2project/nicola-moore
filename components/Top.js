import React from 'react';

export default function Top({ children }) {
    return (
        <section className='top' id='top'>
            <img
                src='/imgs/bg_home_2.2.png'
                alt=''
                className='top-rel desktop'
                id="imgTop1"
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
       
                <img src='/imgs/tablet_btm.png' alt='' className='tablet' />
            </div>
            <img
                src='/imgs/bg_home_4.2.png'
                alt=''
                className='top-rel desktop'
            />
            <div className='content top-strapline desktop'>{children}</div>
        </section>
    );
}
