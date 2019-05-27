import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <div className='navContainer'>
            <div className='logoContainer'>
                <h1 className='brandLogo'>Start Bookstrap</h1>
            </div>
            <div className='desktopNav'>
                <ul>
                    <li>SERVICES</li>
                    <li>PORTFOLIO</li>
                    <li>ABOUT</li>
                    <li>TEAM</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            <div className='mobileNav'>
                <button>
                    <div className='mobileLine'></div>
                    <div className='mobileLine'></div>
                    <div className='mobileLine'></div>
                </button>
            </div>
        </div>
    );
}


export default Nav;
