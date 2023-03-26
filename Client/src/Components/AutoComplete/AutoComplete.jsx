import React, {useState} from 'react';
import "./AutoComplete.css";
import login from "../../Pages/Login/Login";

const AutoComplete = (props) => {

    const input = props.input;
    const setInput = props.setInput;
    const array = props.array;
    const value = props.value;

    const uniqArray = array.reduce((a,b) => {
        if (a.indexOf(b) < 0 ) a.push(b);
        return a;
    }, []);

    return (
        value ?
        <ul className="auto-complete">
            {uniqArray.map(item =>
                <li
                    className="auto-complete__item"
                    onClick={() => {
                        setInput(item)
                        console.log(input)
                    }}
                >
                    {item}
                </li>
            )}
        </ul>
            :
            ""
    );
};

export default AutoComplete;