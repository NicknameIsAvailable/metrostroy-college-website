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
                open ? {
                    position: "absolute",
                    top: "56px",
                    opacity: 1
                } : {
                    display: "none",
                    opacity: 0
                }}>
                {variants.map(variant =>
                    <ol className="variant" onClick={() => {
                        setChosenVariant(variant);
                        setOpen(!open);
                    }}>
                        <h3>{variant}</h3>
                    </ol>
                )}
            </ul>
        </div>
    );
};

export default DropDownList;