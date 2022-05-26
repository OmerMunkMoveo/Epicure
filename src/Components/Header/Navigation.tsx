import React, {useRef, useState} from 'react'
import LOGO from '../../Images/Icons/epicure_logo.svg'
import CART from '../../Images/Icons/cart.svg'
import SEARCH from '../../Images/Icons/search.svg'
import USER from '../../Images/Icons/user.svg'
import MOBILE_MENU from '../../Images/Icons/mobile_menu.svg'
import CLOSE from '../../Images/Icons/close.svg'
import Input from "../UI/Input/Input";
import {NavLink} from "react-router-dom";

const Navigation = (props: any) => {

    const [showSearch, setShowSearch] = useState<boolean>(false);

    const mobileMenuRef = useRef<any>()
    console.log(props.activePage)

    return (
        <>
            <div className="navbar_background"></div>
            <nav className="navbar">
                <div className="left_nav">
                    <img className='mobile_menu_button' src={MOBILE_MENU} alt='mobile menu'
                         onClick={() => {
                             mobileMenuRef.current.style.height = '50%';
                             mobileMenuRef.current.style.zIndex = '11';
                             mobileMenuRef.current.style.opacity = '1';
                             mobileMenuRef.current.style.color = 'black';
                             mobileMenuRef.current.style.pointerEvents = 'auto';


                         }}/>
                    <NavLink to='' onClick={()=>{props.setActivePage('home_page')}} className="main_link">
                        <img src={LOGO} alt="epicure logo"/>
                        <div className='main_link_text'>epicure</div>
                    </NavLink>
                    <NavLink to='/restaurants' onClick={()=>{props.setActivePage('restaurants')}}
                             className={`secondary_link ${props.activePage === 'restaurants' ? 'active_link' : ''}`}>
                        restaurants
                    </NavLink>
                    <NavLink to='/chefs' onClick={()=>{props.setActivePage('chefs')}}
                             className={`secondary_link ${props.activePage === 'chefs' ? 'active_link' : ''}`}>
                        chefs
                    </NavLink>
                </div>

                <div className="right_nav">
                    {showSearch && <Input onBlur={() => {
                        setShowSearch((prevShowSearch) => !prevShowSearch)
                    }} focus={true} className="search_bar" type="text"
                                          placeholder="Search for restaurant cuisine, chef"></Input>}
                    <a onClick={() => {
                        setShowSearch((prevShowSearch) => !prevShowSearch)
                    }}>

                        <img className="search_logo" src={SEARCH} alt="search"/>
                    </a>
                    <NavLink to='/user'>
                        <img src={USER} alt="user"/>
                    </NavLink>
                    <a onClick={props.sideCartToggle}>
                        <img src={CART} alt="cart"/>

                    </a>

                </div>
            </nav>

            <nav ref={mobileMenuRef} className='mobile_overlay_menu'>
                <img onClick={() => {
                    mobileMenuRef.current.style.height = '0';
                    mobileMenuRef.current.style.zIndex = '0';
                    mobileMenuRef.current.style.opacity = '0';
                    mobileMenuRef.current.style.color = 'white';
                    mobileMenuRef.current.style.pointerEvents = 'none';
                }} src={CLOSE} alt="close mobile menu" width='20px'/>
                <div className='mobile_menu_section'>
                    <a><NavLink to='/restaurants'>restaurants</NavLink> </a>
                    <a>chefs</a>
                </div>

                <hr className="mobile_menu_line"/>

                <div className='mobile_menu_section'>
                    <a>contact us</a>
                    <NavLink to='/terms_of_use'>terms of use</NavLink>
                    <NavLink to='/privacy_policy'>privacy policy</NavLink>
                </div>

            </nav>
        </>


    )
}

export default Navigation
