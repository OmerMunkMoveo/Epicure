import React, {useEffect, useState} from 'react';
import './App.css';
import './Styles/Style.css'
import {serverURL} from "./utils/urls";

import Navigation from "./Components/Header/Navigation";
import Footer from "./Components/Footer/Footer";
import SideCart from "./Components/Cart/SideCart";
import {Route, Routes} from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import RestaurantsPage from "./Components/Restaurants/RestaurantsPage";
import axios from "axios";
import Login from "./Components/User/Login/Login";
import Signup from "./Components/User/Signup/Signup";
import UserPage from "./Components/User/UserPage";
import {toast} from "react-toastify";

function App() {

    const [showSideCart, setShowSideCart] = useState<boolean>(false);
    const [activePage, setActivePage] = useState<string>('home_page');
    const [cartFirstClick, setCartFirstClick] = useState<boolean>();
    const [isLogged, setIsLogged] = useState<boolean>()
    const [token, setToken] = useState<any>()
    const [user, setUser] = useState<any>()
    const [showLoginModal, setShowLoginModal] = useState<boolean>(false)

    const notifyOut = () => toast.warn('Logged Out!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const toggleShowLoginModal = () => {
        setShowLoginModal(prevState => !prevState)
    }


    const toggleShowSideCart = () => {
        if (!cartFirstClick) {
            setCartFirstClick(pervState => !pervState)
        }

        setShowSideCart(prevState => !prevState)

    }

    const handleToken = async(givenToken:any) =>{
        await setToken(givenToken)
        await window.localStorage.setItem('token', givenToken)
        if(givenToken === null){
            await console.log('a')
            await notifyOut()
            await console.log('b')
            await window.localStorage.removeItem('token');


        }
    }

    const getUser = () => {
        const localToken = window.localStorage.getItem('token')
        axios.post(`${serverURL}/users/check_token`, {token: localToken}).then((res) => {
            if (res.status === 200) {
                setUser(res.data.user)
                setIsLogged(true)
            } else if (res.status === 400) {
                setUser(null)
                setIsLogged(false)
            }
        })
    }

    useEffect(() => {
        getUser()
    }, [token])

    return (
        <>
            <Navigation isLogged={isLogged} toggleShowLoginModal={toggleShowLoginModal} activePage={activePage}
                        setActivePage={setActivePage}
                        sideCartToggle={toggleShowSideCart}></Navigation>
            <Login setIsLogged={setIsLogged} setToken={handleToken} show={showLoginModal} toggleShowLoginModal={toggleShowLoginModal}></Login>
            <Routes>
                <Route path='' element={<HomePage/>}/>
                <Route path='/restaurants' element={<RestaurantsPage/>}/>
                {/*<Route path='/restaurants' element={<h1><br/><br/>Restaurant's Section</h1>}/>*/}
                <Route path='/chefs' element={<h1><br/><br/>Chef's Section</h1>}/>
                <Route path='/user' element={<UserPage user={user} setIsLogged={setIsLogged} setToken={handleToken}/>}/>
                <Route path='/terms_of_use' element={<h1><br/><br/>Terms of use Section</h1>}/>
                <Route path='/privacy_policy' element={<h1><br/><br/>Privacy policy Section</h1>}/>
                <Route path='sign_up' element={<Signup setToken={setToken}></Signup>}/>
            </Routes>



            <Footer></Footer>
            {cartFirstClick && < SideCart showCart={showSideCart} sideCartToggle={toggleShowSideCart}></SideCart>}

        </>
    );
}

export default App;



