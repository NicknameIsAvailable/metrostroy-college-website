import {ReactComponent as CloseIcon} from "../../Icons/CloseIconWhite.svg";
import "./BurgerMenu.css";

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
            style={open ? {right: 0} : {right: "-1800px"}}
        >
            <div className="header">
                    <button
                        className="back-button"
                        onClick={() => setOpen(!open)}>
                        <CloseIcon
                           className="back-button__icon"
                        />
                    </button>
            </div>

            <div className="links">
                <a className="visible1000 Link" onClick={() => setOpen(!open)} href="https://colm.spb.ru/information-about-">сведения об образовательной организации</a>
                <a className="visible1600 Link" href="https://colm.spb.ru/methodical-work">методическая работа</a>
                <a className="visible720 Link" href="https://colm.spb.ru/driving-school">автошкола</a>
                <a className="visible1600 Link" href="https://colm.spb.ru/educational-work">воспитательная работа</a>
                <a className="visible1600 Link" href="https://colm.spb.ru/workshops">мастерские / федеральный грант</a>
            </div>
        </div>
    );
};

export default BurgerMenu;