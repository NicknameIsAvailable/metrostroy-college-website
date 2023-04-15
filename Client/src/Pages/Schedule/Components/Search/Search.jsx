import React, {useState} from 'react';
import "./Search.css"
import AutoComplete from "../../../../Components/AutoComplete/AutoComplete";
import DropDownList from "../DropDownList/DropDownList";

const Search = (props) => {
    const setInputs = props.setInputs;
    const inputs = props.inputs;
    const radioInputs = props.radioInputs;
    const setRadioInputs = props.setRadioInputs;
    const arraySchedule = props.arraySchedule;
    const setTeacherSearching = props.setTeacherSearching;
    const search = props.search;
    const locationInputs = props.locationInputs;

    const filteredSchedule = [
        ...arraySchedule.map(item => item.groupNumber),
        ...arraySchedule.map(item => item.teacherFirst),
        ...arraySchedule.map(item => item.teacherSecond)
    ].filter(item => {
        return item.toLowerCase().includes(inputs.toLowerCase());
    });

    if (Number(inputs)) {
        setRadioInputs("Group");
    } else {
        setRadioInputs("Teacher");
    }

    const [modalOpen, setModalOpen] = useState(false);

    const [isAutoCompleteVisible, setIsAutoCompleteVisible] = useState(false);

    return (
        <div className="Search">
            <div className="search-block" onSubmit={async (e) => {
                e.preventDefault();
                if (radioInputs === "Teacher") {
                    setTeacherSearching(true);
                }

                setInputs('');
            }}>
                    <input placeholder="поиск" className="search no-outline" type="text" value={inputs} onChange={e => {
                        setInputs(e.target.value);
                        if (inputs !== '') {
                            setIsAutoCompleteVisible(true)
                        } else {
                            setIsAutoCompleteVisible(false)
                        }

                        if (radioInputs === '') {
                            setRadioInputs("Group")
                        }
                    }}/>
                    <AutoComplete
                        isVisible={isAutoCompleteVisible}
                        array={filteredSchedule}
                        value={inputs}
                        input={inputs}
                        setInput={setInputs}
                    />
                <DropDownList
                    className="button"
                    search={search}
                    inputs={inputs}
                    arraySchedule={arraySchedule}
                    radioInputs={radioInputs}
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                    locationInputs={locationInputs}
                />
            </div>
        </div>
    );
};

export default Search;