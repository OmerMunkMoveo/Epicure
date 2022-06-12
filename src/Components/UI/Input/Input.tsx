import React, {useEffect, useRef, useState} from 'react'
import CLOSE from '../../../Images/Icons/close.svg'
import SEARCH from "../../../Images/Icons/search.svg";
import axios from "axios";
import {serverURL} from "../../../utils/urls";
import {NavLink} from "react-router-dom";


const Input = (props: any) => {
    const [label, setLabel] = useState<string>('');
    const [results, setResults] = useState<any>()
    const [renderedResults, setRenderedResults] = useState<object[]>()
    const [showDropDown, setShowDropDown] = useState<any>(false)
    const inputRef = useRef<any>()

    useEffect(() => {
        if (props.focus) {
            inputRef.current.focus();
        }
    }, [])

    useEffect(() => {
        renderResults()
        toggleDropDown()
    }, [results])

    const searchAll = (event: any) => {
        //todo: debounce, consider another state to gaurd the set tiem eout
        let value = event.target.value
        axios.get(`${serverURL}/search/all/${value}`).then((res: any) => {
            setResults(res.data.data)


        })

    }

    const toggleDropDown = () => {
        if (results) {
            setShowDropDown(true)
        } else {
            setShowDropDown(false)
        }
    }

    const renderResults = () => {
        if (results) {
            let restaurants;
            let chefs;
            let dishes;
            restaurants = results.restaurants.map(
                (rest: any) =>
                    new Object({
                        display: `Restaurant: ${rest.name}`,
                        type: 'restaurant',
                        id: rest._id

                    })
            )
            chefs = results.chefs.map(
                (chef: any) =>
                    new Object({
                        display: `Chef: ${chef.name}`,
                        type: 'chef',
                        id: chef._id

                    })
            )
            dishes = results.dishes.map(
                (dish: any) =>
                    new Object({
                        display: `Dish: ${dish.name}`,
                        type: 'dish',
                        id: dish._id

                    })
            )

            const all = [...restaurants, ...chefs, ...dishes]
            setRenderedResults(all)
        }
    }


    return (
        <label className={`${props.className} wrapping_label`}>
            <label htmlFor={props.id}>
                {label}
            </label>
            <div className="header">
                <img src={CLOSE} alt="close"/>
                <h1>search</h1>
            </div>
            {props.header && <img className="search_logo" src={SEARCH} alt="search"/>}
            <input onChange={(event) => event.target.value.length > 0 ? searchAll(event) : setShowDropDown(false)}
                   ref={inputRef} onBlurCapture={props.onBlur} type={props.type} id={props.id}
                   placeholder={props.placeholder} name={props.name} onFocus={() => {
                setLabel(props.label)
            }}
                   onBlur={() => {
                       setLabel('')
                   }}/>
            {showDropDown &&
                <div className="search_dropdown">
                    <ul>
                        {renderedResults && renderedResults.map(((item: any) =>
                                <NavLink className='link' to={`/${item.type}/${item.id}`}>
                                    <li key={item.id}>{item.display}</li>
                                </NavLink>
                        )).slice(0, 7)}
                    </ul>
                </div>}
            {props.className === 'check_box' && <span className="checkmark"></span>}
            {props.className === 'radio' && <span className="radio_check"></span>}
        </label>
    )
}

export default Input
