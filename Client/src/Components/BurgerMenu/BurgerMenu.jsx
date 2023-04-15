import {ReactComponent as CloseIcon} from "../../Icons/CloseIconWhite.svg";
import "./BurgerMenu.css";
import {Link} from "react-router-dom";

const BurgerMenu = (props) => {
    const open = props.open;
    const setOpen = props.setOpen;

    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
            setOpen(false);
        }
    });

    return (
        <div
            className="BurgerMenu"
            style={open ? {right: 0} : {transform: "translateX(200%)"}}
        >

            <button
                className="back-button"
                onClick={() => setOpen(!open)}>
                <CloseIcon
                    className="back-button__icon"
                />
            </button>

            <div className="links">
                <h3 onClick={() => setOpen(false)}><Link to="/teachers" className="Link">Список преподавателей</Link></h3>
                <h3 onClick={() => setOpen(false)}><Link to="/schedule" className="Link">Расписание</Link></h3>
                <h3 onClick={() => setOpen(false)}><a className="visible1000 Link" onClick={() => setOpen(!open)} href="https://colm.spb.ru/information-about-">сведения об образовательной организации</a></h3>
                <h3 onClick={() => setOpen(false)}><a className="visible1600 Link" href="https://colm.spb.ru/methodical-work">методическая работа</a></h3>
                <h3 onClick={() => setOpen(false)}><a className="visible720 Link" href="https://colm.spb.ru/driving-school">автошкола</a></h3>
                <h3 onClick={() => setOpen(false)}><a className="visible1600 Link" href="https://colm.spb.ru/educational-work">воспитательная работа</a></h3>
                <h3 onClick={() => setOpen(false)}><a className="visible1600 Link" href="https://colm.spb.ru/workshops">мастерские / федеральный грант</a></h3>
            </div>
        </div>
    );
};

export default BurgerMenu;