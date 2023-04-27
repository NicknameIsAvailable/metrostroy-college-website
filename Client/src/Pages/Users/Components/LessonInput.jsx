import React from 'react';
import AutoComplete from "../../../Components/AutoComplete/AutoComplete";

const LessonInput = (props) => {
    const name = props.name;
    const setValue = props.setValue;
    const value = props.value;
    const isValueFocus = props.isValueFocus;
    const setIsValueFocus = props.setIsValueFocus;
    const array = props.array;

    return (
        <div>
            <input
                type="text"
                placeholder={name}
                className="no-outline underlined-input"
                onChange={e => setValue(e.target.value)}
                value={value}
                onFocus={() => setIsValueFocus(true)}
                onBlur={() => setIsValueFocus(false)}
            />
            <AutoComplete
                isVisible={value !== "" && isValueFocus}
                array={array}
                value={value}
                setInput={setValue}
            />
        </div>
    );
};

export default LessonInput;