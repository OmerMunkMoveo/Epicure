import React from 'react';
import Card from "../UI/Card/Card";
import SPICY from '../../Images/Icons/spicy.svg';
import VEGITARIAN from '../../Images/Icons/vegitarian.svg'
import VEGAN from "../../Images/Icons/vegan.svg"
import {AnimationOnScroll} from "react-animation-on-scroll";

const Icons = () => {

    return (
        <Card className="card column icons_section">
            <div className="header">
                <h2>
                    the meaning of our icons:
                </h2>
            </div>
            <Card className="card row icons_card">
                <AnimationOnScroll animateIn="animate__rollIn">

                    <Card className="card column icon_frame">
                        <img src={SPICY} alt="spicy"/>
                        <div className="body_text">
                            Spicy
                        </div>
                    </Card>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__rollIn">

                    <Card className="card column icon_frame">
                        <img src={VEGITARIAN} alt="vegitarian"/>
                        <div className="body_text">
                            Vegitarian
                        </div>
                    </Card>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__rollIn">

                    <Card className="card column icon_frame">
                        <img src={VEGAN} alt="vegan"/>
                        <div className="body_text">
                            Vegan
                        </div>
                    </Card>
                </AnimationOnScroll>
            </Card>

        </Card>
    )
}

export default Icons
