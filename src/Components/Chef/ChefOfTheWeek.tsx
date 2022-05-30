import React, {useState} from "react";
import Card from "../UI/Card/Card";
import Chef from "./Chef";
import Restaurants from "../Restaurants/Restaurants";
import {Chef as ChefModel} from "../../Interfaces/Chef";

const ChefOfTheWeek = (props: any) => {
    const [chef, setChef] = useState<ChefModel>();


    return (
        <Card className="card column chef_of_the_week_section">
            <div className="header">
                <h2>
                    chef of the week:
                </h2>
            </div>
            <Card className="card row chef_of_the_week_info">
                <div className="chef_of_the_week_image">

                <Chef setChef={setChef} chef={props.chef} ></Chef>
                </div>
                <div className="body_text">
                    Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades,
                    including running the kitchen in his first restaurant, the fondly-remembered Violet, located in
                    Moshav Udim. Shitrit's creativity and culinary acumen born of long experience are expressed in the
                    every detail of each and every dish.
                </div>
            </Card>
            <Restaurants chef={chef}></Restaurants>
        </Card>
    )
}

export default ChefOfTheWeek
