import "./styles/App.css";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <p className="description">
        <b>Rules:</b> Click the Character Cards, You lose if you click the same
        one twice. Only click the same Card once.
      </p>
      <Link className="play--btn" to={"/Play"}>
        <button className="play-btn">Play</button>
      </Link>
      <Footer />
    </div>
  );
}

export default App;
