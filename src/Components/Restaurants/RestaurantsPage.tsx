import React, {useState} from 'react';
import Card from "../UI/Card/Card";
import ARROW from "../../Images/Icons/down_arrow.svg"
import Restaurants from "./Restaurants";

const RestaurantsPage = () => {
    const [restaurantsView, setRestaurantsView] = useState<string>('all');
    const [restaurantsPriceFilter, setRestaurantsPriceFilter] = useState<string>()
    const [restaurantsDistanceFilter, setRestaurantsDistanceFilter] = useState<number>()
    const [restaurantsRatingFilter, setRestaurantsRatingFilter] = useState<number>()
    const views = ['all', 'new', 'most popular', 'open now', 'map view'];


    return (
        <Card className="card column restaurants_page">
            <div className="restaurants_view">
                {views.map((view: string, i: number) => {
                    return (
                        <a key={i} onClick={() => {
                            setRestaurantsView(view)
                        }} style={{fontWeight: restaurantsView === view ? '400' : '200'}}> {view}</a>
                    )
                })}

            </div>
            <div className="restaurants_filter">
                <a>price range <img src={ARROW} alt="arrow down"/> </a>
                <a>distance <img src={ARROW} alt="arrow down"/> </a>
                <a>rating <img src={ARROW} alt="arrow down"/> </a>
            </div>
            <Restaurants group={restaurantsView} className="all_restaurants"></Restaurants>

        </Card>
    )
}
//379 236
export default RestaurantsPage
