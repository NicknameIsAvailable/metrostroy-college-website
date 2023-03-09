import React, {useState} from 'react';
import "./DropDownList.css";

const DropDownList = (props) => {
    const addresses = props.addresses;
    const search = props.search;
    const inputs = props.inputs;
    const radioInputs = props.radioInputs;
    const locationInputs = props.locationInputs;

    const [modalOpen, setModalOpen] = useState(false);
    const [chosenVariant, setChosenVariant] = useState();

    return (
        <div className="DropDownList">
            <div className="title" onClick={() => setModalOpen(!modalOpen)}>
                <h3>
                    {chosenVariant || "Площадка"}
                </h3>
            </div>

            <ul className="variants-list" style={
                modalOpen ? {
                    position: "absolute",
                    top: "56px",
                    left: "-3px",
                } : {
                    display: "none",
                }}>
                {addresses.map((variant, index) =>
                    <ol className="variant" onClick={async () => {
                        setChosenVariant(variant);
                        console.log(locationInputs);
                        await search(inputs, radioInputs, index + 1);
                        setModalOpen(!modalOpen);
                    }}>
                        <h3>{variant}</h3>
                    </ol>
                )}
            </ul>
        </div>
    );
};

export default DropDownList;