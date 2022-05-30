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
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOut="animate__zoomOutDown">
                <Restaurants carousel={true} group="most popular" homePage></Restaurants>
                {/*<Restaurants  group="most popular" homePage></Restaurants>*/}
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__animated animate__fadeInUp" animateOut="animate__zoomOutDown">
                <Dishes></Dishes>
            </AnimationOnScroll>
                <Icons></Icons>
            <AnimationOnScroll animateIn="animate__slideInRight" animateOut="animate__slideOutLeft">
                <ChefOfTheWeek chef="yossi shitrit"></ChefOfTheWeek>

            </AnimationOnScroll  >
            <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut">
                <AboutUs></AboutUs>
            </AnimationOnScroll>

        </>
    )
}
export default HomePage
