import {useState} from "react";
import Button from "../../UI/Button/Button";
import axios from "axios";
import {serverURL} from "../../../utils/urls";
import {toast} from "react-toastify";

const Signup = (props:any) =>{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')




    const signUp = () =>{
        axios.post(`${serverURL}/users/signup`, {
            email: email,
            password: password,
            passwordConfirm: passwordConfirm,
            firstName : firstName,
            lastName: lastName,
            phoneNumber : phoneNumber,
            address: address
        }).then((res)=>{
            if(res.status === 201){
                props.setToken(res.data.token)
                console.log(res.data.token)
            }else{
                console.log(res)
            }

        }).catch((err)=>{
            if(err.response.data.message.errors.firstName){
                toast(err.response.data.message.errors.firstName.message)
            }
            if(err.response.data.message.errors.lastName){
                toast(err.response.data.message.errors.lastName.message)
            }
            if(err.response.data.message.errors.email){
                toast(err.response.data.message.errors.email.message)
            }
            if(err.response.data.message.errors.address){
                toast(err.response.data.message.errors.address.address)
            }
            if(err.response.data.message.errors.password){
                toast(err.response.data.message.errors.password.message)
            }
            if(err.response.data.message.errors.passwordConfirm){
                toast(err.response.data.message.errors.passwordConfirm.message)
            }

            if(err.response.data.message.errors.phoneNumber){
                toast(err.response.data.message.errors.phoneNumber.message)
            }

        })

    }

    return (
        <div className="sign_up">
            <h1>
                Join Epicure
            </h1>
            <label>Email</label>
            <input type="email" value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
            <label>Password</label>
            <input type="password" value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
            <label>Confirm Password</label>
            <input type="password" value={passwordConfirm} onChange={(event)=>{setPasswordConfirm(event.target.value)}}/>
            <label>First Name</label>
            <input type="text" value={firstName} onChange={(event)=>{setFirstName(event.target.value)}}/>
            <label>Last Name</label>
            <input type="text" value={lastName} onChange={(event)=>{setLastName(event.target.value)}}/>
            <label>Phone Number</label>
            <input type="text" value={phoneNumber} onChange={(event)=>{setPhoneNumber(event.target.value)}}/>
            <label>Address</label>
            <input type="text" value={address} onChange={(event)=>{setAddress(event.target.value)}}/>
            <span onClick={()=>signUp()} ><Button className="primary_button">SIGN UP</Button></span>


        </div>


    )
}
export default Signup
