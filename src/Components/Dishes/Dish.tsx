import React from 'react'
import Card from "../UI/Card/Card";
import ILS from '../../Images/Icons/ils.svg'
import Spicy from '../../Images/Icons/spicy.svg';
import Vegitarian from '../../Images/Icons/vegitarian.svg'
import Vegan from "../../Images/Icons/vegan.svg"

const Dish = (props: any) => {
    const str1 = 'Spicy';

    const SPICY = Spicy
    const VEGITARIAN = Vegitarian
    const VEGAN = Vegan

    return (
        <Card className={`card column ${props.className}`}>
            <img className="dish_image" src={`/Images/Dishes/${props.data.img}.png`} alt="smoked_pizza"/>
            <div className="dish_info">
                <div className="dish_text">
                    <div className="dish_text_primary">
                        {props.data.name}
                    </div>
                    <div className="dish_text_secondary">
                        {props.data.description}
                    </div>
                </div>
                <div className="dish_props">
                    {Object.keys(props.data.properties).map((keyName:string, i: number) => {
                        console.log(String(props.data.properties[keyName]).toUpperCase())
                        return(
                            <img key={i} src={eval(String(props.data.properties[keyName]).toUpperCase())}
                                 alt={eval(String(props.data.properties[keyName]).toUpperCase())}/>
                        )
                    })}
                </div>
                <div className="dish_price">
                    <hr className="dish_line"/>
                    <div className="dish_text_price">
                        <img src={ILS} alt='shekel'/>{props.data.price}
                    </div>
                    <hr className="dish_line"/>
                </div>

            </div>
        </Card>

    )
}

export default Dish
