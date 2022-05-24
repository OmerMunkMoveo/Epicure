import React, {useRef} from 'react';
import Header from "../Header/Header";
import Restaurants from "../Restaurants/Restaurants";
import Dishes from "../Dishes/Dishes";
import Icons from "../Icons/Icons";
import ChefOfTheWeek from "../Chef/ChefOfTheWeek";
import AboutUs from "../AboutUs/AboutUs";
import {AnimationOnScroll} from "react-animation-on-scroll";

const HomePage = () => {

    return (
        <>
            <Header></Header>
            <AnimationOnScroll animateIn="animate__bounceInLeft" animateOut="animate__bounceOutRight">
                <Restaurants group="most popular" homePage></Restaurants>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__rotateInDownLeft">
                <Dishes></Dishes>

            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__headShake">
                <Icons></Icons>

            </AnimationOnScroll>

            <ChefOfTheWeek chef="yossi shitrit"></ChefOfTheWeek>
            <AboutUs></AboutUs>
        </>
    )
}
export default HomePage
