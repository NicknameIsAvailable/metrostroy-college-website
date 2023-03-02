import React, {useState} from 'react';
import "./Alert.css";
import {ReactComponent as CloseIcon} from "../../Icons/CloseIconBlack.svg";

const Alert = (props) => {
    const [mouseOver, setMouseOver] = useState(false);
    const [isOpen, setIsOpen] = useState(props.saveNotation);

    if (isOpen) {
        setTimeout(() => {setIsOpen(false)}, 10000)
    }

    return (
        <div className="Alert"
             onMouseOver={() => setMouseOver(true)}
             onMouseOut={() => setMouseOver(false)}
             style={isOpen ? {right: "32px"} : {right: "-400px"}}
        >
            <div className="icon">

                {mouseOver ?
                    <CloseIcon onClick={() => setIsOpen(false)}/>
                :
                    props.icon
                }
            </div>
            {props.content}
        </div>
    );
};

export default Alert;