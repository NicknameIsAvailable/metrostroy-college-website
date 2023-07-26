import React from 'react';
import "./NewElementsListModal.css";

const NewElementsListModal = ({newElements, setIsNewElementsOpen, isNewElementsOpen}) => {
    return (
        <div className="background" style={!isNewElementsOpen ? {display: "none"} : {display: "flex"}}>
            <div className="new-elements__modal">
                <h2>Новые значения в БД</h2>

                <ol>
                    {newElements.map((item) =>
                        <li>
                            {item.name} - {item.value}
                        </li>
                    )}
                </ol>

                <button className="outlined-button"
                        onClick={() => setIsNewElementsOpen(false)}
                >
                    Ок
                </button>
            </div>
        </div>
    );
};

export default NewElementsListModal;