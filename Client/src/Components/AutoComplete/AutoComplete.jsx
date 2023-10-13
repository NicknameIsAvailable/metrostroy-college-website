import React, {useEffect, useState} from 'react';
import "./AutoComplete.css";

const AutoComplete = ({ setInput, array, value }) => {
    const [isSelectVisible, setIsSelectVisible] = useState(false);

    const uniqArray = [...new Set(array)];

    useEffect(() => {
        if (value !== "") setIsSelectVisible(true)
        else setIsSelectVisible(false)
    }, [value]);

    const handleClick = (item) => {
        setIsSelectVisible(false);
        setInput(item);
    }

    if (isSelectVisible) {
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
