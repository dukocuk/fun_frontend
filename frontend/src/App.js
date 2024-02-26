import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./containers/Header";
import FirstBody from "./containers/FirstBody";
import SecondBody from "./containers/SecondBody";
import ThirdBody from "./containers/ThirdBody";
import FourthBody from "./containers/FourthBody";
import FifthBody from "./containers/FifthBody";
import SixthBody from "./containers/SixthBody";
import { useRef } from "react";

export default function App() {
  // Create an array of refs for the sections

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
      <FifthBody />
      <SixthBody />
    </div>
  );
}
