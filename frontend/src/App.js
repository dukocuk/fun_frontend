import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./containers/Header";
import FirstBody from "./containers/FirstBody";
import SecondBody from "./containers/SecondBody";
import ThirdBody from "./containers/ThirdBody";
import FourthBody from "./containers/FourthBody";
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div
        fluid="true"
        style={{
          position: "relative",
          backgroundColor: "#fffbeb",
          marginTop: "0rem",
        }}
        className="triangle"
      >
        <FirstBody />
        <SecondBody />
      </div>
      <ThirdBody />
      <FourthBody />
    </div>
  );
}
