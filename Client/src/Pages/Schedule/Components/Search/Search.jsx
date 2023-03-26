import React, {useState} from 'react';
import "./Search.css"
import DropDownList from "../DropDownList/DropDownList";
import {ReactComponent as SearchIcon} from "../../../../Icons/SearchIconWhite.svg";
import {ReactComponent as Burger} from "../../../../Icons/Burger.svg";
import {ReactComponent as CloseIcon} from "../../../../Icons/CloseIconBlack.svg";
import AutoComplete from "../../../../Components/AutoComplete/AutoComplete";

const Search = (props) => {
    const setInputs = props.setInputs;
    const inputs = props.inputs;
    const radioInputs = props.radioInputs;
    const setRadioInputs = props.setRadioInputs;
    const locationInputs = props.locationInputs;
    const search = props.search;
    const arraySchedule = props.arraySchedule;

    const [modalOpen, setModalOpen] = useState(false);

    const setTeacherSearching = props.setTeacherSearching;

    const filteredSchedule = [
        ...arraySchedule.map(item => item.groupNumber),
        ...arraySchedule.map(item => item.teacherFirst),
        ...arraySchedule.map(item => item.teacherSecond)
    ].filter(item => {
        return item.toLowerCase().includes(inputs.toLowerCase());
    })

    if (Number(inputs)) {
        setRadioInputs("Group");
    } else {
        setRadioInputs("Teacher");
    }

    return (
        <div className="Search">
            <form className="search-block" onSubmit={async (e) => {
                e.preventDefault();
                if (radioInputs === "Teacher") {
                    setTeacherSearching(true);
                } else {
                    await search(inputs, radioInputs, locationInputs)
                }
            }}>
                    <input placeholder="поиск" className="search no-outline" type="text" value={inputs} onChange={e => {
                        setInputs(e.target.value);
                        console.log(Number(inputs))
                        if (radioInputs === '') {
                            setRadioInputs("Group")
                        }
                    }}/>
                    <AutoComplete
                        array={filteredSchedule}
                        value={inputs}
                        input={inputs}
                        setInput={setInputs}
                    />
                    <button type="submit" className="search-button">
                        <SearchIcon/>
                    </button>
                <DropDownList
                    className="button"
                    search={search}
                    inputs={inputs}
                    radioInputs={radioInputs}
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                    locationInputs={locationInputs}
                />
                </form>
        </div>
    );
};

export default Search;