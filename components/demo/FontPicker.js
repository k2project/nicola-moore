import React, { useState, Fragment, useEffect } from 'react';

export default function FontPicker() {
    const fonts = [
        ['Segoe UI', 'active'],
        ['Josefin Sans'],
        ['Merriweather Sans'],
        ['Fira Sans'],
    ];
    const changeFont = (font) => {
        document.querySelector('main').classList = font
            .toLowerCase()
            .split(' ')
            .join('-');
    };
    const weights = [[100], [200], [300], [400], [500, 'active'], [600]];
    const [fontPicker, showFontPicker] = useState(false);
    const setActiveClass = (selector, target) => {
        Array.from(document.querySelectorAll(selector)).forEach((el) =>
            el.classList.remove('active')
        );
        target.parentElement.classList.add('active');
    };
    return (
        <Fragment>
            <div
                className='font-box'
                onClick={() => showFontPicker(true)}
            ></div>
            {fontPicker && (
                <ul className='font-picker'>
                    <p>
                        <b onClick={() => showFontPicker(false)}>&times;</b>
                    </p>
                    {fonts.map((font) => (
                        <li
                            key={font[0]}
                            className={font[1] ? 'font active' : 'font'}
                        >
                            <span
                                onClick={(e) => {
                                    changeFont(font[0]);
                                    setActiveClass('li.font', e.target);
                                }}
                            >
                                {font[0]}
                            </span>
                        </li>
                    ))}
                    {weights.map((weight) => (
                        <li
                            key={weight[0]}
                            className={weight[1] ? 'weight active' : 'weight'}
                        >
                            <span
                                onClick={(e) => {
                                    document.querySelector(
                                        '.home-top input'
                                    ).style.fontWeight = weight[0];
                                    setActiveClass('li.weight', e.target);
                                }}
                            >
                                {weight[0]}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </Fragment>
    );
}
