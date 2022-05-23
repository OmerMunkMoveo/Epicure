import React from 'react';
import Header from "../Header/Header";
import Restaurants from "../Restaurants/Restaurants";
import Dishes from "../Dishes/Dishes";
import Icons from "../Icons/Icons";
import ChefOfTheWeek from "../Chef/ChefOfTheWeek";
import AboutUs from "../AboutUs/AboutUs";

const HomePage = () =>{

    return(
        <>
            <Header></Header>
            <Restaurants group="most popular" homePage></Restaurants>
            {/*<Dishes></Dishes>*/}
            {/*<Icons></Icons>*/}
            {/*<ChefOfTheWeek chef="yossi shitrit"></ChefOfTheWeek>*/}
            {/*<AboutUs></AboutUs>*/}
        </>
    )
}
export default HomePage
