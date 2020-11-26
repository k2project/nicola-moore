import React from 'react';

export default function Top({ children }) {
    return (
        <section className='top' id='top'>

           
             <div className='top-strapline'>{children}</div>
            
            <img
                src='/imgs/bg_home_4.2.2.png'
                alt=''
                className='desktop'
            /> 
            <img
                src='/imgs/bg_home_2.2.2.png'
                alt=''
                className='desktop'
            />
            <img src='/imgs/tablet_top.png' alt='' className='mobile' />

            <img src='/imgs/tablet_btm.png' alt='' className='mobile'/>
        </section>
    );
}
