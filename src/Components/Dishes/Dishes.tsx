import React, {useEffect, useState} from "react";
import Dish from "./Dish";
import Card from "../UI/Card/Card";
import axios from "axios"
import Button from "../UI/Button/Button";

const Dishes = () => {
    const [dishes, setDishes] = useState<any>();


    const getAllDishes = () => {
        axios.get("MockData/AllDishes.json").then((res: any) => {
            const result = res.data
            const rendered = Object.keys(result).map((keyName: any, i: any) => {
                return (
                    <Dish key={i} data={result[keyName]}
                          className={'dish_signature'}></Dish>
                )
            })
            setDishes(rendered)
        })
    }


    useEffect(() => {
        getAllDishes();

    }, [])


    return (
        <section className="helper_section_width_100">
            <Card className = "card column dishes_section">
                <div className="header">
                    <h2>
                        signature dish of:
                    </h2>
                </div>
                <Card className="card row dishes_card">
                    {dishes}
                </Card>
                <div className="all_button">
                    <Button className="text_button">all restaurants</Button>
                </div>

            </Card>
        </section>
    )


}

export default Dishes
