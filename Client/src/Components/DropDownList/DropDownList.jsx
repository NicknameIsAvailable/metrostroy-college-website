import React from 'react';
import "./DropDownList.css";

const DropDownList = (props) => {

    if (props.array) {
        return (
            <div>
                <label htmlFor={props.value}>
                    {props.value}
                </label>
                <br/>
                <select name={props.value} id={props.value} onChange={(event) => props.setValue(event.target.value)}>
                    <option value="">Пустое поле</option>
                    {props.array.reduce((a,b) => {
                        if (a.indexOf(b) < 0 ) a.push(b);
                        return a;
                    }, []).map((item, index) =>
                        <option key={index} value={item}>{item}</option>
                    )}
                </select>
            </div>
        );
    } else {
        return null;
    }
};

export default DropDownList;