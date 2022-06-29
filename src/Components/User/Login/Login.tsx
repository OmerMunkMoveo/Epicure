import Button from "../../UI/Button/Button";
import CLOSE from '../../../Images/Icons/close.svg';
import {useState} from "react";
import axios from "axios";
import {serverURL} from "../../../utils/urls";
import {toast} from "react-toastify";


const Login = (props: any) =>{

    const [email, setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')

    const notifyBad = () => toast.error('Details Incorrect', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const notifyGood = () => toast.success('Logged In!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const login = () =>{
        axios.post(`${serverURL}/users/login`, {
            email: email,
            password: password
        }).then((res)=>{
            if(res.status === 200){
                props.setToken(res.data.token)
                props.setIsLogged(true)
                notifyGood()
                props.toggleShowLoginModal()
            }else{
                notifyBad()
            }
        }).catch(()=>{
            notifyBad()
        })
    }

    return(
        <div className={props.show? "main_login header" : "main_login header hide_login"}>
            <button className="close" onClick={props.toggleShowLoginModal} ><img src={CLOSE} alt="close"/></button>
            <hr/>
            <h3>sign in</h3>
            <h2>to continue the order, please sign in</h2>
            <div>
                <label className={email === '' ? 'regular' : 'up'} >Email address</label>
            </div>
            <input value={email} type="email" onChange={(event)=>{setEmail(event.target.value)}}/>
            <div>
                <label className={password === '' ? 'regular' : 'up'} >Password</label>
            </div>
            <input value={password} type='password' onChange={(event)=>{setPassword(event.target.value)}}/>
            <span onClick={()=>{
                login()
            }} ><Button className="primary_button">LOGIN</Button></span>
            <Button className="text_button text_only" >Forget password?</Button>
            <div>
                <hr/>
                <div>or</div>
            </div>
            <span onClick={()=>window.location.href='/sign_up'}> <Button className="secondary_button" >SIGN UP</Button></span>
        </div>
    )
}

export default Login
