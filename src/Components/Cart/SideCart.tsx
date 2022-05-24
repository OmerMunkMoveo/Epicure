import React from "react"
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import CART from "../../Images/Icons/cart.svg"

const SideCart = (props: any) => {


    return (
        <>
            <Modal toggleShow={props.sideCartToggle} className="modal side_cart">
                <img src={CART} alt="cart"/>
                <p>
                    your bag is empty
                </p>
                <Button className="secondary_button">order history</Button>

            </Modal>
        </>
    )
}

export default SideCart
