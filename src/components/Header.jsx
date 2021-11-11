import React, { useRef, useEffect } from 'react'
import upperImage from '../assets/image/pexels-joy-marino-3050279.jpg';
import lowerImage from '../assets/image/pexels-johnny-edgardo-guzman-3271065.jpg';

import {
    textIntro,
    imageFedeIn
} from '../utils/animations'
function Header({ menuState }) {
    let heroTitle1 = useRef(null)
    let heroTitle2 = useRef(null)
    let coverOfImage1 = useRef(null)
    let image1 = useRef(null)
    let coverOfImage2 = useRef(null)
    let image2 = useRef(null)
    useEffect(() => {
        if (menuState.state === 'close' || menuState.state === 'init') {
            textIntro(heroTitle1, heroTitle2)
            imageFedeIn(coverOfImage1, image1);
            imageFedeIn(coverOfImage2, image2);
        }

    }, [menuState])

    return (
        <div className='header'>
            <div
                ref={(e) => (coverOfImage1 = e)}
                className='header-upper-image'>
                <img
                    ref={(e) => (image1 = e)}
                    src={upperImage} alt='headerimage' />
            </div>
            <div
                ref={e => (heroTitle1 = e)}
                className='header-big-title__upper'>
                <span className='header-big-title_content'>
                    BE ONE OF
                </span>
            </div>
            <div
                ref={e => (heroTitle2 = e)}
                className='header-big-title__lower'>
                <span className='header-big-title_content'>
                    FASHINABLE
                </span>
            </div>
            <div
                ref={e => (coverOfImage2 = e)}
                className='header-lower-image'>
                <img
                    ref={e => (image2 = e)}
                    src={lowerImage} alt='headerimage' />
            </div>
        </div>
    )
}

export default Header
