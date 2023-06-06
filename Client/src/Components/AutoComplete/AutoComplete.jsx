import React, { useState } from 'react';
import "./AutoComplete.css";

const AutoComplete = ({ setInput, array, value, isVisible }) => {
    const [isSelectVisible, setIsSelectVisible] = useState(Boolean(isVisible));

    const uniqArray = [...new Set(array)];

    const handleClick = (item) => {
        setIsSelectVisible(false);
        setInput(item);
    }

    if (value && isSelectVisible) {
        return (
            <select className="auto-complete" size="3">
                {uniqArray.map((item) => (
                    <option
                        className="auto-complete__item"
                        onClick={() => handleClick(item)}
                    >
                        {item}
                    </option>
                ))}
            </select>
        );
    }

    return null;
};

export default AutoComplete;
