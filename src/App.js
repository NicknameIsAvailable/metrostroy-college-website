import Header from "./Components/Header/Header";
import styles from "./App.css";
import Slider from "./Components/Slider/Slider";
import Container from "./Components/Container/Container";

function App() {
  return (
    <div className={styles.App}>
        <Header/>
        <Container>
            <Slider/>
        </Container>
    </div>
  );
}

export default App;
