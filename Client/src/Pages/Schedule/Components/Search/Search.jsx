import React, {useState} from 'react';
import "./Search.css"
import AutoComplete from "../../../../Components/AutoComplete/AutoComplete";

const Search = (props) => {
    const setInputs = props.setInputs;
    const inputs = props.inputs;
    const radioInputs = props.radioInputs;
    const setRadioInputs = props.setRadioInputs;
    const arraySchedule = props.arraySchedule;
    const setTeacherSearching = props.setTeacherSearching;
    const search = props.search;

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
                        isVisible={isAutoCompleteVisible}
                        array={filteredSchedule}
                        value={inputs}
                        setInput={setInputs}
                    />

                <div>
                    <select className="search" name="Площадка" id="Площадка">
                        <option>Площадка</option>
                        {arraySchedule.map(obj => obj.locationName).reduce((a,b) => {
                            if (a.indexOf(b) < 0 ) a.push(b);
                            return a;
                        }, []).map((item, index) =>
                            <option onClick={async () => {
                                await search(inputs, radioInputs, index + 1);
                            }} value={item}>{item}</option>
                        )}
                    </select>
                </div>
            </form>
        </div>
    );
};

export default Search;