import React from 'react';
import Card from "../UI/Card/Card";
import LOGO from '../../Images/Icons/epicure_logo_text.svg'
import APP_STORE from '../../Images/Icons/app_store.svg'
import GOOGLE_PLAY from '../../Images/Icons/google_play.svg'

const AboutUs = () => {

    return (
        <Card className="card column about_us_section">
            <div className="header">
                <h2>
                    about us:
                </h2>
            </div>
            <Card className="card row about_us_content">

                <div className="body_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non
                eu ipsum. Cras porta malesuada eros, eget blandit
                turpis suscipit at. Vestibulum sed massa in magna sodales porta. Vivamus elit urna,
                dignissim a vestibulum.
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
                eu ipsum. Cras porta malesuada eros.
                </div>
                <div className="header">
                    <h2>
                        about us:
                    </h2>
                </div>
                <Card className="card row about_us_links_mobile">
                    <img src={APP_STORE} alt="download on the app store"/>
                    <img src={GOOGLE_PLAY} alt="get in on google play"/>
                </Card>
                <img src={LOGO} alt='logo'/>
            </Card>
            <Card className="card row about_us_links">
                <img src={APP_STORE} alt="download on the app store"/>
                <img src={GOOGLE_PLAY} alt="get in on google play"/>
            </Card>
        </Card>
    )
}

export default AboutUs
