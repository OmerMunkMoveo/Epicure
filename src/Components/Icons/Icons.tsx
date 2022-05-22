import React from 'react';
import Card from "../UI/Card/Card";
import SPICY from '../../Images/Icons/spicy.svg';
import VEGITARIAN from '../../Images/Icons/vegitarian.svg'
import VEGAN from "../../Images/Icons/vegan.svg"

const Icons = () => {

    return(
        <Card className="card column icons_section">
            <div className="header">
                <h2>
                    the meaning of our icons:
                </h2>
            </div>
            <Card className="card row icons_card">
                <Card className="card column icon_frame">
                    <img src={SPICY} alt="spicy"/>
                    <div className="body_text">
                        Spicy
                    </div>
                </Card>
                <Card className="card column icon_frame">
                    <img src={VEGITARIAN} alt="vegitarian"/>
                    <div className="body_text">
                        Vegitarian
                    </div>
                </Card>
                <Card className="card column icon_frame">
                    <img src={VEGAN} alt="vegan"/>
                    <div className="body_text">
                        Vegan
                    </div>
                </Card>

            </Card>

        </Card>
    )
}

export default Icons
