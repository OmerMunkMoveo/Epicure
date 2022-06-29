import React, {useEffect, useState} from "react";
import Card from "../UI/Card/Card";
import Chef from "./Chef";
import {Chef as ChefModel} from "../../Interfaces/Chef";
import axios from "axios";
import {serverURL} from "../../utils/urls";

const ChefOfTheWeek = () => {
    const [chef, setChef] = useState<any>();
    const getChef = () => {
        axios.get(`${serverURL}/chefs/chef_of_the_week`).then((res: any) => {
            const result = res.data.data.chef
            console.log(result)

            const chefToRender: ChefModel = {
                name: result.name,
                description: result.description,
                img: result.img,
                chefOfTheWeek: result.chefOfTheWeek
            }
            setChef(chefToRender)


        }).catch((err) => {
            console.log(err)
        })
    }

    // getChef()
    useEffect(() => {
        getChef();

    }, [])

    return (
        <Card className="card column chef_of_the_week_section">
            <div className="header">
                <h2>
                    chef of the week:
                </h2>
            </div>
            <Card className="card row chef_of_the_week_info">
                <div className="chef_of_the_week_image">
                    {chef &&<Chef chef={chef}></Chef>}
                </div>
                <div className="body_text">
                    {chef && chef.description}
                </div>
            </Card>
            {/*<Restaurants chef={chef}></Restaurants>*/}
        </Card>
    )
}

export default ChefOfTheWeek
