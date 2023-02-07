import React, {useState} from 'react';
import "./Checkbox.css";
import axios from "../../axios";

const Checkbox = (props) => {
    const [active, setActive] = useState(true);

    if (active) {
        axios.post(`?action=${props.path}`).then(
            response => {
                console.log(response.data)
                console.log("Работает")
            }
        )
    }

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