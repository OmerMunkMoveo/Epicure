import React from 'react'
import Card from "../Card/Card";
import ReactDOM from "react-dom";


const Modal = (props: any) => {

    const modalRoot: HTMLElement  = document.getElementById('overlay-modal') as HTMLElement;


    return (
        <>
            {ReactDOM.createPortal(
                <>
                    <div onClick={props.toggleShow}
                         className={`overlay ${props.active ? 'active_modal' : 'inactive_modal'}`}>
                    </div>
                    <Card className={`card column modal ${props.className}`}>
                        <div className="header">
                            <h1>
                                {props.header}
                            </h1>
                        </div>
                        <div className="body_text">
                            {props.body_text}
                        </div>
                        <div>
                            {props.children}
                        </div>
                    </Card>
                </>
                , modalRoot)}
        </>
    )
}

export default Modal
