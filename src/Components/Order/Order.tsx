import React from 'react'
import Card from "../UI/Card/Card";
import ILS from '../../Images/Icons/ils.svg'

const Order = () => {

    return (
        <Card className="card row order">
            <img src="/Images/Dishes/pad_ki_mao_2.png" alt=""/>
            <Card className="card column order_text">
                <div className="order_text_primary">
                    1x pad ki mao
                </div>
                <div className="order_text_secondary">
                    White bread | Less spicy
                </div>

                <div className="order_price">
                    <div className="order_text_price">
                        <img src={ILS} alt="shekel"/> <div>65</div>
                    </div>
                </div>


            </Card>
        </Card>
    )
}

export default Order
