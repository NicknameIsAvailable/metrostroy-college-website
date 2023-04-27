import React from 'react';
import "./AutoComplete.css";

const AutoComplete = (props) => {

    const setInput = props.setInput;
    const value = props.value;
    const isVisible = props.isVisible;
    const array = props.array;

    const filteredArray = array.filter(item => {
        return item.toLowerCase().includes(value?.toLowerCase());
    });

    console.log("filter", filteredArray)

    const uniqArray = filteredArray?.reduce((a,b) => {
        if (a.indexOf(b) < 0 ) a.push(b);
        return a;
    }, []);

    if (isVisible) {
        return (
            value ?
                <ul className="auto-complete">
                    {uniqArray.map(item =>
                        <li
                            className="auto-complete__item"
                            onClick={() => {
                                setInput(item)
                            }}
                        >
                            {item}
                        </li>
                    )}
                </ul>
                :
                ""
        );
    }
};

export default AutoComplete;