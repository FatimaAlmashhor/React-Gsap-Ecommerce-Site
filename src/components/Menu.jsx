import React, { useRef, useEffect, useState } from 'react'
import Navbar from './Navbar';
import homeImage from '../assets/image/pexels-pixabay-157675.jpg'
import aboutImage from '../assets/image/pexels-min-an-1163194.jpg'
import contactImage from '../assets/image/pexels-joy-marino-3050279.jpg'
import {
    menuFedeIn,
    menuFedeOut,
    sideInImage
} from '../utils/animations'
function Menu({ menuState, menuClick }) {
    let backCover = useRef(null);
    let frontCover = useRef(null);
    let images = useRef(null);

    const [menuHover, setmenuHover] = useState(homeImage)

    useEffect(() => {
        if (menuState.state === 'close') {
            menuFedeOut(backCover, frontCover);
        }
        else if (menuState.state === 'open') {
            menuFedeIn(backCover, frontCover);
        }
    }, [menuState])

    useEffect(() => {
        sideInImage(images)
        console.log('here the img ', menuHover);
        console.log('animation');
    }, [menuHover])

    const handleHoverMenu = (value) => {
        setmenuHover(value);
    }

    return (
        <div className='menu'>
            <div
                ref={(e) => (backCover = e)}
                className='menu_front-cover'
            >
            </div>
            <div
                ref={(e) => (frontCover = e)}
                className='menu_back-cover'>
                <div className='menu-list'>
                    <ul className='menu-items'>
                        <li
                            onMouseEnter={() => handleHoverMenu(homeImage)}
                            className='menu-items_item active'>Fatima ALmashhor</li>
                        <li
                            onMouseEnter={() => handleHoverMenu(aboutImage)}
                            className='menu-items_item '>Wafa</li>
                        <li
                            onMouseEnter={() => handleHoverMenu(contactImage)}
                            className='menu-items_item '>Hannen</li>
                    </ul>
                    <div className='menu-images-center'>
                        <div
                            ref={(e) => (images = e)}
                            className='image-warpper' style={{

                            }}>
                            <img
                                className='image'
                                src={menuHover} alt="-for-menu" />) :


                        </div>
                    </div>
                    <div className='menu-description'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
