import React, { useRef, useEffect } from 'react'
import Navbar from './Navbar';
import {
    menuFedeIn,
    menuFedeOut
} from '../utils/animations'
function Menu({ menuState, menuClick }) {
    let backCover = useRef(null);
    let frontCover = useRef(null);

    useEffect(() => {
        if (menuState.state === 'close') {
            menuFedeOut(backCover, frontCover);
        }
        else if (menuState.state === 'open') {
            menuFedeIn(backCover, frontCover);
        }
    }, [menuState])

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
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contanct Us</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu
