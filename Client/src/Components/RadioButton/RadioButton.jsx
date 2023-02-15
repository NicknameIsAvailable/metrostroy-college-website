import React, {useState} from 'react';

const RadioButton = (props) => {
    const [checked, setChecked] = useState(false)

    return (
        <label className="radio-button">
            <input
                type="radio"
                name="radio"
                value={props.value}
                checked={checked}
                onChange={() => setChecked(!checked)}
            />
            {props.value}
        </label>
    );
};

export default RadioButton;