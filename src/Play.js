import { Link } from "react-router-dom";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
function Play() {
  return (
    <div>
      <Link className="play--link" to={"/"}>
        <p>Return to Homepage</p>
      </Link>
      <Cards />
      <Footer />
    </div>
  );
}

export default Play;
