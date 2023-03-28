import React, {useState} from 'react';
import "./DropDownList.css";

const DropDownList = (props) => {

    const search = props.search;
    const inputs = props.inputs;
    const radioInputs = props.radioInputs;
    const locationInputs = props.locationInputs;
    const arraySchedule = props.arraySchedule;
    const modalOpen = props.modalOpen;
    const setModalOpen = props.setModalOpen;

    const addresses = arraySchedule.map(obj => obj.locationName).reduce((a,b) => {
        if (a.indexOf(b) < 0 ) a.push(b);
        return a;
    }, []);

    const variantsStyles = {
        opacity: 0,
        marginTop: "32px"
    }

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
                    display: "block",
                    variantsStyles
                } : {
                    display: "none",
                    variantsStyles
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