import Button from "../UI/Button/Button";
import {Link} from "react-router-dom";

const UserPage = (props: any) => {

    return(
        <div className="user_page header">
            <h1>
                Welcome back {props.user.firstName} {props.user.lastName}
            </h1>
            <h2>Order History</h2>
            <span onClick={async()=>{
                await props.setIsLogged(false)
                await props.setToken(null)
            }}><Link style={{textDecoration:"none"}} to={'/'}><Button className="primary_button">LOG OUT</Button></Link></span>
        </div>
    )
}

export default UserPage
