import React, {useState} from 'react';
import "./DropDownList.css";

const DropDownList = (props) => {
    const [open, setOpen] = useState(false);
    const [chosenVariant, setChosenVariant] = useState()

    const variants = props.variants;

    return (
        <div className="DropDownList">
            <div className="title" onClick={() => setOpen(!open)}>
                <h3>
                    {chosenVariant || props.title}
                </h3>
            </div>

            <ul className="variants-list" style={
                open ? {position: "absolute"} : {display: "none"}}>
                {variants.map(variant =>
                    <ol className="variant" onClick={() => {
                        setChosenVariant(variant);
                        setOpen(!open);
                    }}>
                        <h4>{variant}</h4>
                    </ol>
                )}
            </ul>
        </div>
    );
};

export default DropDownList;