import React, {useState} from 'react';
import "./StrangeError.css";

const StrangeError = () => {

    const [errorHappened, setErrorHappened] = useState(false);

    const errorVariants = [
        "база упала",
        "сервер дудосят",
        "сервер сгорел",
        "слишком много людей зашло",
        "кто-то не умеет пользоваться редактором расписаний",
        "фронтендер не умеет кодить",
        "бэкендер не умеет кодить",
        "вы попытались сломать сайт",
        "эээ... уу... ээээ аа...",
        "произошел троллинг",
        "кто-то закоммитил баг в прод",
    ]

    setTimeout(() => setErrorHappened(true), 30000)

    return (
        <div
            style={errorHappened ? {opacity: 1} : {opacity: 0}}
            className="strange-error"
        >
            <p>Произошло что-то странное...</p>
            <p>А может {errorVariants[Math.floor(Math.random() * errorVariants.length)]}?</p>
            <p>Попробуйте перезагрузить страницу</p>
        </div>
    );
};

export default StrangeError;