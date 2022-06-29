import React, {useEffect, useState} from 'react';
import Card from "../UI/Card/Card";
import {Chef as ChefModel} from "../../Interfaces/Chef" ;

const Chef = (props: any) => {
    const [chef, setChef] = useState<any>(props.chef);


    return (
        <Card className="card chef">
            <img src={`Images/Chefs/${chef.img}`} alt="chef"/>
            <div className="chef_name">
                {chef.name}
            </div>

        </Card>
    )
}

export default Chef
