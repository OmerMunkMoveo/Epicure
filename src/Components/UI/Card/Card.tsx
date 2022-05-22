import React from "react";

const Card = (props: any) => {

    return(
        <div className={props.className}>
            {props.children}
        </div>
    )
}

export default Card
