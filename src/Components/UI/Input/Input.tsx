import React, {useEffect, useRef, useState} from 'react'
import CLOSE from '../../../Images/Icons/close.svg'



const Input = (props: any) => {
    const [label, setLabel] = useState<string>('');
    const inputRef = useRef<any>()

    useEffect(()=>{
        if(props.focus){
            inputRef.current.focus();
        }
    },[])


    return(
        <label className={props.className}>
            <label htmlFor={props.id}>
                {label}
            </label>
            <div className="header">
                <img src={CLOSE} alt="close"/>
                <h1>search</h1>
            </div>
            <input ref={inputRef}  onBlurCapture={props.onBlur} type={props.type} id={props.id} placeholder={props.placeholder} name={props.name} onFocus={()=>{setLabel(props.label)}}
                   onBlur={()=>{setLabel('')}}/>
            {props.className === 'check_box' && <span className="checkmark"></span>}
            {props.className === 'radio' && <span className="radio_check"></span>}
        </label>
    )
}

export default Input
