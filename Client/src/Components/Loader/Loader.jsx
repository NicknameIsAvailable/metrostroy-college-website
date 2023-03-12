import {useState} from "react";
import "./Loader.css";

const Loader = (props) => {
    const loading = props.loading;

    const [visible, setVisible] = useState(true);
    const [display, setDisplay] = useState("flex")

    if (!loading) {
        setTimeout(() => setVisible(false), 300)
        setTimeout(() => setDisplay("none"), 600)
    }

    return (
        <div
            className="loader__background"
            style={
                visible ? {
                    opacity: "1",
                    display: display
                } : {
                    opacity: "0",
                    display: display
                }
            }
        >
            <svg className="spinner" viewBox="0 0 50 50">
                <circle className="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
            </svg>
            <h2>Загрузка...</h2>
        </div>
    );
};

export default Loader;