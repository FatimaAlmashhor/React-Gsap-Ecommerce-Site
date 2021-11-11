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

    const [menuHover, setmenuHover] = useState(1)

    useEffect(() => {
        if (menuState.state === 'close') {
            menuFedeOut(backCover, frontCover);
        }
        else if (menuState.state === 'open') {
            menuFedeIn(backCover, frontCover);
        }
    }, [menuState])

    const handleHoverMenu = (value) => {
        setmenuHover(value);
        sideInImage(images)
        console.log('animation');
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
                            onMouseEnter={() => handleHoverMenu(1)}
                            className='menu-items_item active'>Home</li>
                        <li
                            onMouseEnter={() => handleHoverMenu(2)}
                            className='menu-items_item '>About Us</li>
                        <li
                            onMouseEnter={() => handleHoverMenu(3)}
                            className='menu-items_item '>Contanct Us</li>
                    </ul>
                    <div className='menu-images-center'>
                        <div
                            ref={(e) => (images = e)}
                            className='image-warpper' style={{

                            }}>
                            {menuHover === 1 ?
                                (<img

                                    className='image'
                                    src={homeImage} alt="-for-menu" />) :
                                menuHover === 2 ?
                                    (<img

                                        className='image'
                                        src={aboutImage} alt="-for-menu" />) :
                                    (<img

                                        className='image'
                                        src={contactImage} alt="-for-menu" />)}
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
