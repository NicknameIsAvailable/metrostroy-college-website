import {ReactComponent as BackIconWhite} from "../../Icons/back.svg";
import "./BurgerMenu.css";
import Profile from "../Profile/Profile";
import {Link} from "react-router-dom";

const BurgerMenu = (props) => {
    const open = props.open;
    const setOpen = props.setOpen;

    return (
        <div
            className="BurgerMenu"
            style={open ? {right: 0} : {right: "-1000px"}}
        >
            <div className="header">
                    <div
                        className="back-button"
                        onClick={() => setOpen(!open)}>
                        <BackIconWhite
                           className="back-button__icon"
                        />
                    </div>
                    <Profile/>
            </div>

            <div className="links">
                <h3>
                    <Link
                        to="/for-students"
                        className="Link"
                        onClick={() => setOpen(!open)}
                    >
                        обучающимся
                    </Link>
                </h3>
                <h3>
                    <Link
                        to="/teachers"
                        className="Link"
                        onClick={() => setOpen(!open)}
                    >
                        преподаватели
                    </Link>
                </h3>
                <h3>
                    <Link
                        to="/auto-school"
                        className="Link"
                        onClick={() => setOpen(!open)}
                    >
                        автошкола
                    </Link>
                </h3>
                <h3>
                    <Link
                        to="/info"
                        className="Link"
                        onClick={() => setOpen(!open)}
                    >
                        сведения о колледже
                    </Link>
                </h3>
                <h3>
                    <Link
                        to="/workshops"
                        className="Link"
                        onClick={() => setOpen(!open)}
                    >
                        мастерские / федеральный грант
                    </Link>
                </h3>
                <h3>
                    <Link
                        to="/methodical-work"
                        className="Link"
                        onClick={() => setOpen(!open)}
                    >
                        методическая работа
                    </Link>
                </h3>
                <h3>
                    <Link
                        to="/mentoring"
                        className="Link"
                        onClick={() => setOpen(!open)}
                    >
                        наставничество
                    </Link>
                </h3>
                <h3>
                    <Link
                        to="/educational-work"
                        className="Link"
                        onClick={() => setOpen(!open)}
                    >
                        воспитательная работа
                    </Link>
                </h3>

            </div>
        </div>
    );
};

export default BurgerMenu;