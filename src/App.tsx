import React, {useRef, useState} from 'react';
import './App.css';
import './Styles/Style.css'

import Navigation from "./Components/Header/Navigation";
import Footer from "./Components/Footer/Footer";
import SideCart from "./Components/Cart/SideCart";
import {Route, Routes} from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import RestaurantsPage from "./Components/Restaurants/RestaurantsPage";

//todo: remove inline stling
//todo: include mobile or desktop only in the second prespective
// fix the verious bugs that i have



function App() {

    const [showSideCart, setShowSideCart] = useState<boolean>(false);
    const [activePage, setActivePage] = useState<string>('home_page');
    const [cartFirstClick, setCartFirstClick] = useState<boolean>();


    const toggleShowSideCart = () =>{
        if (!cartFirstClick){
            setCartFirstClick(pervState => !pervState)
        }

        setShowSideCart(prevState => !prevState)

    }

    console.log(activePage)
    return (
        <>
            <Navigation activePage={activePage} setActivePage={setActivePage} sideCartToggle={toggleShowSideCart}></Navigation>
            <Routes>
                <Route path='' element={<HomePage />}/>
                <Route path='/restaurants' element={<RestaurantsPage/>}/>
            </Routes>
            <Footer></Footer>
            {/*{showSideCart && <SideCart ref={cartRef} sideCartToggle={toggleShowSideCart} ></SideCart> }*/}
            {cartFirstClick && < SideCart showCart={showSideCart} sideCartToggle={toggleShowSideCart} ></SideCart>}

        </>
    );
}

export default App;

//#TODO: place holder , start typing from the let in the input n the headr
//todo: font weight

