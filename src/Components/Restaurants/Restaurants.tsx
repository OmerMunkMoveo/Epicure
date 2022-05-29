import React, {useEffect, useRef, useState} from 'react';
import Restaurant from "./Restaurant";
import Card from "../UI/Card/Card";
import axios from "axios";
import Button from "../UI/Button/Button";
import Slider from "react-slick";
import useWindowDimensions from "../../Hooks/useWindowDimensions";


const epochMonth: number = 86400000;

const Restaurants = (props: any) => {

    const now = Date.now();

    const {width, height} = useWindowDimensions();
    const [restaurants, setRestaurants] = useState<any>();
    const [carouselSlidesToShow, setCarouselSlidesToShow] = useState(1);



    useEffect(() => {

        if (props.group === "most popular") {
            getPopularRestaurant();
        } else if (props.chef) {
            getChefRestaurants();
        } else if (props.group === 'all') {
            getAllRestaurant();
        } else if (props.group === "new") {
            getNewRestaurant();
        }
    }, [props.group, props.chef])

    useEffect(()=>{
        if (width > 600){
            setCarouselSlidesToShow(3)
        } else {
            setCarouselSlidesToShow(1)
        }
    },[width])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: carouselSlidesToShow,
        slidesToScroll: 1
    }






    let sliderRef = useRef<any>();

    const getAllRestaurant = () => {
        axios.get("MockData/AllRestaurants.json").then((res: any) => {
            const result = res.data
            const rendered = Object.keys(result).map((keyName: any, i: any) => {
                return (<li>
                        <Restaurant key={i} data={result[keyName]}
                                    className="restaurant_chef"></Restaurant></li>
                )
            })
            setRestaurants(rendered)
        })
    }
    const getNewRestaurant = () => {
        axios.get("MockData/AllRestaurants.json").then((res: any) => {
            const result = res.data
            const rendered = Object.keys(result).map((keyName: any, i: any) => {
                if ((now - epochMonth) < Date.parse(result[keyName].opened)) {
                    return (<li>
                            <Restaurant key={i} data={result[keyName]}
                                        className="restaurant_chef"></Restaurant></li>
                    )
                }
            })
            setRestaurants(rendered)
        })
    }
    const getPopularRestaurant = () => {
        axios.get("MockData/AllRestaurants.json").then((res: any) => {
            const result = res.data
            const rendered = Object.keys(result).map((keyName: any, i: any) => {
                if (result[keyName].popular === "true") {
                    return (
                        <li><Restaurant key={i} data={result[keyName]}
                                        className="restaurant_chef"></Restaurant></li>
                    )
                }
            })
            setRestaurants(rendered)
        })
    }
    const getChefRestaurants = () => {
        axios.get("MockData/AllRestaurants.json").then((res: any) => {
            const result = res.data
            const rendered = Object.keys(result).map((keyName: any, i: any) => {
                if (Object.values(props.chef.restaurants).includes(result[keyName].name)) {
                    return (
                        <Restaurant key={i} data={result[keyName]}
                                    className="restaurant"></Restaurant>
                    )
                }
            })
            setRestaurants(rendered)
        })
    }


    if (props.carousel) {
        return (
            <section>
                <Card className="restaurants_section">
                    <div className="header helper_header_align_center" >
                        <h2>
                            {props.homePage ? 'popular restaurants in epicure' : (props.chef ?
                                `${props.chef?.name}'s restaurants` : '')}
                        </h2>
                    </div>
                    <div className="helper_div_sides">
                        <Slider
                            ref={sliderRef}
                            className="card row"
                            autoplay={true}
                            centerMode={true}
                            autoplaySpeed={3000}
                            {...settings}>
                            {restaurants}
                        </Slider>
                    </div>

                </Card>
            </section>
        )
    } else {
        return (
            <section
                className="helper_section_width_100">
                <Card
                    className={`card column ${!props.chef ? 'restaurants_section' : 'chef_of_the_week_restaurants_section'} ${props.className}`}>
                    <div className="header">
                        <h2>
                            {props.homePage ? 'popular restaurants in epicure' : (props.chef ?
                                `${props.chef?.name}'s restaurants` : '')}
                        </h2>
                    </div>
                    <Card
                        className={`card row ${!props.chef ? 'restaurants_card' : 'chef_of_the_week_restaurants_card'} ${props.className}`}>
                        {props.homePage || props.chef ? restaurants : <ul>{restaurants}</ul>}
                    </Card>
                    {(props.homePage || props.chef) && <div className="all_button">
                        <Button className="text_button">all restaurants</Button>
                    </div>}
                </Card>
            </section>
        )
    }
}
export default Restaurants
