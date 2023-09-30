import React, {useEffect, useState} from 'react';
import "./Search.css"
import AutoComplete from "../../../../Components/AutoComplete/AutoComplete";
import axios from "../../../../axios";

const Search = (props) => {
    const setInputs = props.setInputs;
    const inputs = props.inputs;
    const radioInputs = props.radioInputs;
    const setRadioInputs = props.setRadioInputs;
    const arraySchedule = props.arraySchedule;
    const setTeacherSearching = props.setTeacherSearching;
    const search = props.search;

    const [locations, setLocations] = useState([]);

    const getAllLocations = async () => {
        try {
            const data = await axios.post("/selectListLocations.php")
            setLocations(data.data.locations)
        } catch (e) {
            alert('Не удалось получить площадки')
            console.log(e)
        }
    }


    useEffect(() => {
        console.log("Член")
        getAllLocations()
    }, []);

    const filteredSchedule = [
        ...arraySchedule.map(item => item.groupNumber),
        ...arraySchedule.map(item => item.teacherFirst),
        ...arraySchedule.map(item => item.teacherSecond)
    ].filter(item => {
        return item?.toLowerCase().includes(inputs.toLowerCase());
    });

    if (Number(inputs)) {
        setRadioInputs("Group");
    } else {
        setRadioInputs("Teacher");
    }

    const [isAutoCompleteVisible, setIsAutoCompleteVisible] = useState(false);

    return (
        <div className="Search">
            <form className="search-block" onSubmit={async (e) => {
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
                    isVisible={inputs.length >= 3}
                    array={filteredSchedule}
                    value={inputs}
                    setInput={setInputs}
                />

                <div>
                    <select className="search" name="Площадка" id="Площадка">
                        {locations.map((location, index) =>
                            <option onClick={async () => {
                                await search(location.id);
                            }} value={location.id}>{location.name}</option>
                        )}
                    </select>
                </div>
            </form>
        </div>
    );
};

export default Search;