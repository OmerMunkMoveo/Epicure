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
        restaurant: props.data.restaurant.name,
        img: props.data.img,
        price: props.data.price,
        properties: props.data.properties,
        signature: props.data.signature
    }

    const [dish, setDish] = useState<DishModel>(dishToRender);



    const SPICY = Spicy
    const VEGITARIAN = Vegitarian
    const VEGAN = Vegan

    return (
        <Card className={`card column ${props.className}`}>
            <img className="dish_image" src={`/Images/Dishes/${dish.img}.png`} alt={`${dish.img}`}/>
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
                    {dish.properties && dish.properties.trim().split(',').map((property, index) => {
                        return(
                            <img key={index} src={eval(String(property).toUpperCase())}
                                 alt={eval(String(property).toUpperCase())}/>
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
