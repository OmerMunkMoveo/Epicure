import React, {useEffect, useState} from 'react';
import Restaurant from "./Restaurant";
import Card from "../UI/Card/Card";
import axios from "axios";
import Button from "../UI/Button/Button";

const epochMonth: number = 86400000;

const Restaurants = (props: any) => {
    const now = Date.now();
    const [restaurants, setRestaurants] = useState<any>();
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
    return (
        <section style={{width: '100%'}}>
            <Card
                className={`card column ${props.homePage ? 'restaurants_section' : 'chef_of_the_week_restaurants_section'}`}>
                <div className="header">
                    <h2>
                        {props.homePage ? 'popular restaurants in epicure' : (props.chef ?
                            `${props.chef?.name}'s restaurants` : '')}
                    </h2>
                </div>
                <Card
                    className={`card row ${props.homePage ? 'restaurants_card' : 'chef_of_the_week_restaurants_card'}`}>
                    {props.homePage || props.chef ? restaurants : <ul>{restaurants}</ul>}

                </Card>
                {(props.homePage || props.chef) && <div className="all_button">
                    <Button className="text_button">all restaurants</Button>
                </div>}
            </Card>
        </section>
    )
}
export default Restaurants
