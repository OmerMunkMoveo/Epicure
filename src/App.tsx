import React, {useState} from 'react';
import './App.css';
import './Styles/Style.css'

import Navigation from "./Components/Header/Navigation";
import Footer from "./Components/Footer/Footer";
import SideCart from "./Components/Cart/SideCart";
import {Route, Routes} from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
// import RestaurantsPage from "./Components/Restaurants/RestaurantsPage";

function App() {

    const [showSideCart, setShowSideCart] = useState<boolean>(false);
    const [activePage, setActivePage] = useState<string>('home_page');
    const [cartFirstClick, setCartFirstClick] = useState<boolean>();


    const toggleShowSideCart = () => {
        if (!cartFirstClick) {
            setCartFirstClick(pervState => !pervState)
        }

        setShowSideCart(prevState => !prevState)

    }

    console.log(activePage)
    return (
        <>
            <Navigation activePage={activePage} setActivePage={setActivePage}
                        sideCartToggle={toggleShowSideCart}></Navigation>
            <Routes>
                <Route path='' element={<HomePage/>}/>
                {/*<Route path='/restaurants' element={<RestaurantsPage/>}/>*/}
                <Route path='/restaurants' element={<h1><br/><br/>Restaurant's Section</h1>}/>
                <Route path='/chefs' element={<h1><br/><br/>Chef's Section</h1>}/>
                <Route path='/user' element={<h1><br/><br/>User's Section</h1>}/>
                <Route path='/terms_of_use' element={<h1><br/><br/>Terms of use Section</h1>}/>
                <Route path='/privacy_policy' element={<h1><br/><br/>Privacy policy Section</h1>}/>
            </Routes>
            <Footer></Footer>
            {cartFirstClick && < SideCart showCart={showSideCart} sideCartToggle={toggleShowSideCart}></SideCart>}

        </>
    );
}

export default App;



