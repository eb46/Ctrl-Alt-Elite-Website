import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';

import Nav from '../../Components/LandingPage/Nav/Nav';
import Banner from '../../Components/LandingPage/Banner/Banner';

function LandingPage () {
    return (
        <div className="LandingPage">
            <Nav />
            <Banner />
        </div>
    )
}

export default LandingPage