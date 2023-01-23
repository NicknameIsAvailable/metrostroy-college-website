import Header from "./Components/Header/Header";
import styles from "./App.css";
import Slider from "./Components/Slider/Slider";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className={styles.App}>
        <Header/>
        <Slider/>

        <Footer/>
    </div>
  );
}

export default App;
