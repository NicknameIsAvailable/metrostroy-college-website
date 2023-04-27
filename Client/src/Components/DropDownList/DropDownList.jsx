import React from 'react';
import "./DropDownList.css";

const DropDownList = (props) => {

    if (props.array)
    return (
        <div>
            <label htmlFor={props.value}>
                {props.value}
            </label>
            <select name={props.value} id={props.value}>
                <option>Пустое поле</option>
                {props.array.reduce((a,b) => {
                    if (a.indexOf(b) < 0 ) a.push(b);
                    return a;
                }, []).map(item =>
                    <option onClick={() => props.setValue(item)} value={item}>{item}</option>
                )}
            </select>
        </div>
    );
};

export default DropDownList;