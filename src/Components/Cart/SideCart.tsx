import React from "react"
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import CART from "../../Images/Icons/cart.svg"
import ConfettiTest from "../ConfettiTest";

const SideCart = (props: any) => {



    return (
        <>
            <Modal active={props.showCart} toggleShow={props.sideCartToggle}
                   className={`modal side_cart ${props.showCart ? 'show_cart' : 'hide_cart'}`}>
                <img src={CART} alt="cart"/>
                <p>
                    your bag is empty
                </p>
                <Button className="secondary_button">order history</Button>
                <ConfettiTest/>

            </Modal>
        </>
    )
}

export default SideCart
