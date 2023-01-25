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

            <div className="variants-list">
                {variants.map(variant =>
                    <div className="variant">
                        <h4>{variant}</h4>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DropDownList;