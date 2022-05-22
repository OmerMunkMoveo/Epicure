import React from 'react'
import Card from "../UI/Card/Card";
import {NavLink} from "react-router-dom";

const Footer = () =>{

    return(
        <footer>

        <Card className='card row footer'>
            <a className='footer_link'>
                contact us
            </a>
            <NavLink to='/terms_of_use' className='footer_link'>
                terms of use
            </NavLink>
            <NavLink to='privacy_policy' className='footer_link'>
                privacy policy
            </NavLink>
        </Card>
        </footer>

    )
}

export default Footer
