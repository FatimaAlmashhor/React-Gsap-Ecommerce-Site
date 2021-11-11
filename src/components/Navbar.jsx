import React, { useRef, useEffect, useState } from 'react'
import Menu from './Menu'
function Navbar({ menuClick, menuState }) {

    return (
        <div className='navbar'>
            <div className='nav-content' style={{
                color: menuState.open === true ? 'white' : 'black'
            }}>
                <h1 className='logo'>Fashoiy</h1>
                <p className='nav-middile-text'>
                    Hear where you find the beauty
                </p>
                <p
                    className='nav-menu'
                    onClick={() => { menuClick() }}
                >Menu</p>
            </div>

        </div>
    )
}

export default Navbar
