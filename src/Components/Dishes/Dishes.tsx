import React, {useEffect, useState} from "react";
import Dish from "./Dish";
import Card from "../UI/Card/Card";
import axios from "axios"
import Button from "../UI/Button/Button";
import {serverURL} from "../../utils/urls";


const Dishes = (props: any) => {
    const [dishes, setDishes] = useState<typeof Dish[] | JSX.Element[]>();


    // const getAllDishes = () => {
    //     axios.get("MockData/AllDishes.json").then((res: any) => {
    //         const result = res.data
    //         const rendered: typeof Dish[] | JSX.Element[]= Object.keys(result).map((keyName: string, i: number) => {
    //             return (
    //
    //                 <Dish key={i} data={result[keyName]}
    //                       className={'dish_signature'}></Dish>
    //             )
    //         })
    //         setDishes(rendered)
    //     })
    // }

    const getSignatureDishes = () => {
        axios.get(`${serverURL}/dishes`).then((res: any) => {
            const result = res.data.data
            console.log(result)
            const rendered: typeof Dish[] | JSX.Element[]= result.map((dish: any, i: number) => {
                console.log(result[i])
                return (
                    <Dish key={i} data={result[i]}
                          className={'dish_signature'}></Dish>
                )
            })
            setDishes(rendered)
        })
    }


    useEffect(() => {
        if (props.group === "signature"){
            getSignatureDishes()
        }

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
