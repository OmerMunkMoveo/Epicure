import React, {useState} from 'react'
import Card from "../UI/Card/Card";
import ILS from '../../Images/Icons/ils.svg'
import Spicy from '../../Images/Icons/spicy.svg';
import Vegitarian from '../../Images/Icons/vegitarian.svg'
import Vegan from "../../Images/Icons/vegan.svg"
import {Dish as DishModel} from "../../Interfaces/Dish"


const Dish = (props: any) => {

    const dishToRender: DishModel = {
        name: props.data.name,
        description: props.data.description,
        img: props.data.img,
        price: props.data.price,
        properties: {
            ...props.data.properties
        }
    }

    const [dish, setDish] = useState<DishModel>(dishToRender);



    const SPICY = Spicy
    const VEGITARIAN = Vegitarian
    const VEGAN = Vegan

    return (
        <Card className={`card column ${props.className}`}>
            <img className="dish_image" src={`/Images/Dishes/${dish.img}.png`} alt="smoked_pizza"/>
            <div className="dish_info">
                <div className="dish_text">
                    <div className="dish_text_primary">
                        {dish.name}
                    </div>
                    <div className="dish_text_secondary">
                        {dish.description}
                    </div>
                </div>
                <div className="dish_props">
                    {Object.keys(dish.properties).map((keyName:any, i: number) => {
                        console.log(keyName, i)
                        return(
                            <img key={i} src={eval(String(dish.properties[keyName]).toUpperCase())}
                                 alt={eval(String(dish.properties[keyName]).toUpperCase())}/>
                        )
                    })}
                </div>
                <div className="dish_price">
                    <hr className="dish_line"/>
                    <div className="dish_text_price">
                        <img src={ILS} alt='shekel'/>{dish.price}
                    </div>
                    <hr className="dish_line"/>
                </div>

            </div>
        </Card>

    )
}

export default Dish
