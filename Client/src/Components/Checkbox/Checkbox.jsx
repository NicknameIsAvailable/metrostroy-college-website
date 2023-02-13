import React, {useState} from 'react';
import "./Checkbox.css";

const Checkbox = (props) => {
    const [active, setActive] = useState(true);

    return (
        <div
            className={active ? "Checkbox" : "Checkbox active"}
            onClick={() => {setActive(!active)}}
        >
            <h3>{props.content}</h3>
        </div>
    );
};

export default Checkbox;