import React, {useEffect, useRef, useState} from 'react'


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
            <input ref={inputRef}  onBlurCapture={props.onBlur} type={props.type} id={props.id} placeholder={props.placeholder} name={props.name} onFocus={()=>{setLabel(props.label)}}
                   onBlur={()=>{setLabel('')}}/>
            {props.className === 'check_box' && <span className="checkmark"></span>}
            {props.className === 'radio' && <span className="radio_check"></span>}
        </label>
    )
}

export default Input
