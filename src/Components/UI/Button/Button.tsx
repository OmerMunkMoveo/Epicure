import React from 'react'
import lock from '../../../Images/Icons/lock.svg'
import circle from '../../../Images/Icons/circle.svg'
import doubleArrow from '../../../Images/Icons/double_arrow.svg'


const Button = (props: any) => {


    return (
        <button className={props.className}>
            {props.className !== 'text_button' && <>
                <div className="lock_icon">
                    <img className="lock" src={lock} alt="lock"/>
                    <img className="circle" src={circle} alt="circle"/>
                </div>
                {props.children}
            </>
            }

            {props.className === 'text_button' &&
                <>
                    <div className="text">
                        {props.children}
                    </div>
                    <img src={doubleArrow} alt="arrow"/>
                </>
            }
        </button>
    )
}

export default Button
