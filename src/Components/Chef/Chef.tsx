import React, {useEffect, useState} from 'react';
import Card from "../UI/Card/Card";
import axios from "axios";
import Dish from "../Dishes/Dish";
import {Chef as ChefModel} from "../../Interfaces/Chef" ;

const Chef = (props: any) => {


    const [chef, setChef] = useState<ChefModel>();


    const getChef = () => {
        axios.get("MockData/AllChefs.json").then((res: any) => {
            const result = res.data
            // console.log(result[1].name)
            // console.log(props.chef)
            // console.log(props.chef === result[1].name)
            let i: number = 1;
            while (result[i] !== undefined){
                if (result[i].name === props.chef){
                    const chefToRender: ChefModel = {
                        name: result[i].name,
                        description: result[i].description,
                        img: result[i].img,
                        restaurants: result[i].restaurants
                    }
                    setChef(chefToRender)
                    props.setChef(chefToRender)
                }
                i++;
            }
        })
    }


    useEffect(() => {
        getChef();

    }, [])

    return(
        <Card className="card chef">
        <img src={`Images/Chefs/${chef?.img}`} alt="chef"/>
            <div className="chef_name">
                {chef?.name}
            </div>
        </Card>
    )
}

export default Chef
