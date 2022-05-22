import React, {useState} from 'react';
import './App.css';
import './Styles/Style.css'

import Navigation from "./Components/Header/Navigation";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Restaurants from "./Components/Restaurants/Restaurants";
import Dishes from "./Components/Dishes/Dishes";
import Icons from "./Components/Icons/Icons";
import ChefOfTheWeek from "./Components/Chef/ChefOfTheWeek";
import AboutUs from "./Components/AboutUs/AboutUs";
import SideCart from "./Components/Cart/SideCart";
import {Route, Routes} from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import RestaurantsPage from "./Components/Restaurants/RestaurantsPage";

function App() {

    const [showSideCart, setShowSideCart] = useState<boolean>(false);
    const toggleShowSideCart = () =>{
        setShowSideCart(prevState => !prevState)
    }

    return (
        <>
            <Navigation sideCartToggle={toggleShowSideCart}></Navigation>
            <Routes>
                <Route path='' element={<HomePage />}/>
                <Route path='/restaurants' element={<RestaurantsPage/>}/>
            </Routes>
            <Footer></Footer>
            {showSideCart && <SideCart sideCartToggle={toggleShowSideCart} ></SideCart> }

        </>
    );
}

export default App;

//#TODO: place holder , start typing from the let in the input n the headr
//todo: font weight

