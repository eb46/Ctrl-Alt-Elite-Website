import React from 'react';
import './Banner.scss';

function Banner () {

    return(
        <div className="banner">
            <div className="banner-message">
                <p>Impactful storytelling through design</p>
            </div>
            <div className="schedule-form">
                <div>
                    <p>
                        Schedule a free design consultation
                    </p>
                    <form>
                        <label for="email">Email address</label>
                        <input className="input-field" type="text" />
                        <div className="submit-button-div">
                            <input className="submit-button" type="submit" value="Schedule Now" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Banner