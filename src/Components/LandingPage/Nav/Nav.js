import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss'

import logo from '../../../Assets/Logo/CtrlAltElite-Logo.svg'

function Nav () {
    
    return (
        <div className="nav">
            <img src={logo} className="logo" />
            <div className="nav-links">
                <Link>
                    <a>Portfolio</a>
                </Link>
                <Link>
                    <a>About</a>
                </Link>
                <Link>
                    <a>Team</a>
                </Link>
            </div>
        </div>
    )
}

export default Nav