import React, {useEffect, useState} from 'react'
import STAR_FILL from '../../Images/Icons/star_fill.svg'
import STAR_BLANK from '../../Images/Icons/star_blank.svg'

import Card from "../UI/Card/Card";


const Restaurant = (props: any) => {

    const [stars, setStars] = useState<any>([]);

    useEffect(() => {
        let rating: number = Number(props.data.rating);
        let stars_array: any[] = []

        for (let i = 0; i < 5; i++) {
            if (rating > 0) {
                stars_array = ([...stars_array, <img src={STAR_FILL} alt='filled star'/>])
            } else {
                stars_array = ([...stars_array, <img src={STAR_BLANK} alt='blank star'/>])
            }
            rating--;
        }
        setStars(stars_array)
    }, [])


    return (
        <Card className={`card column ${props.className}`}>
            <img src={`Images/Restaurants/${String(props.data.image)}.png`} alt="restaurant"/>
            <div className={`text_${props.className}`}>
                <p className={`text_${props.className}_primary`}>
                    {props.data.name}
                </p>

                {props.className==="restaurant_chef" &&<>
                    <p className={`text_${props.className}_secondary`}>
                        {props.data.chef.name}
                    </p>
                    <div className="stars">
                        {stars}
                    </div>
                </>}

            </div>
        </Card>


    )
}


export default Restaurant
