import React, {useState} from 'react';
import "./Search.css"
import DropDownList from "../DropDownList/DropDownList";
import {ReactComponent as SearchIcon} from "../../../../Icons/SearchIconWhite.svg";
import {ReactComponent as Burger} from "../../../../Icons/Burger.svg";
import {ReactComponent as CloseIcon} from "../../../../Icons/CloseIconBlack.svg";

const Search = (props) => {
    const setInputs = props.setInputs;
    const inputs = props.inputs;
    const radioInputs = props.radioInputs;
    const setRadioInputs = props.setRadioInputs;
    const locationInputs = props.locationInputs;
    const search = props.search;
    const changeRadioInputs = props.changeRadioInputs;

    const [burgerOpen, setBurgerOpen] = useState(false);

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="Search">
            <div className="search-block">
                <input placeholder="поиск" className="search no-outline" type="text" onChange={e => {
                    setInputs(e.target.value);
                    if (radioInputs === '') {
                        setRadioInputs("Group")
                    }
                }}/>
                <button className="search-button" onClick={async () => {
                    await search(inputs, radioInputs, locationInputs)
                }}>
                    <SearchIcon/>
                </button>
                <button className="search-burger" onClick={() => setBurgerOpen(!burgerOpen)}>
                    {!burgerOpen ?
                        <Burger/>
                        :
                        <CloseIcon/>
                    }
                </button>
            </div>

        <div className="search__buttons" style={!burgerOpen ? {display: "none"} : {display: "flex"}}>
            <DropDownList
                className="button"
                search={search}
                inputs={inputs}
                radioInputs={radioInputs}
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                locationInputs={locationInputs}
            />

            <label className="radio-button button">
                <input
                    type="radio"
                    name="radio"
                    checked
                    value="Group"
                    onChange={changeRadioInputs}
                />
                По группе
            </label>

            <label className="radio-button button">
                <input
                    type="radio"
                    name="radio"
                    value="Teacher"
                    onChange={changeRadioInputs}
                />
                По преподавателю
            </label>
        </div>
        </div>
    );
};

export default Search;