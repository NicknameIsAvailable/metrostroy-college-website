import React, {useState} from 'react';
import "./RadioButton.css";
import axios from "../../../../axios";

const RadioButton = (props) => {

    const [checked, setChecked] = useState(true);

    const handleChange = async () => {
        axios({
            method: 'post',
            url: "/?action=search",
            headers: { 'content-type': 'application/json' },
            body: {
                "search": props.search,
                "valueRadioButton": props.path
            },
        })
            .then(result => {
                console.log(result)
            })
            .catch(error => this.setState({ error: error.message }));
    }

    return (
        <div className={"radio-button"}
             onClick={handleChange}
        >
            <input type="radio"
                   id="auditory-choice"
                   name="choice"
                   value="по аудитории"
                   checked={checked} onChange={() => setChecked(!checked)}
            />
            <label htmlFor="auditory-choice">
                <p>{props.content}</p>
            </label>
        </div>
    );
};

export default RadioButton;