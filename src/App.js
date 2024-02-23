import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./containers/Header";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Pexels from "./img/Pexels.png";
import Picture from "./img/Picture.png";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div
        style={{
          position: "relative",
          backgroundColor: "#fffbeb",
          zIndex: -1,
        }}
      >
        <Container className="firstBody">
          <Col>
            <Container>
              <h1>Collectible Sneakers</h1>
              <span>
                Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
                suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
                ultrices amet.
              </span>
              <br></br>
              <Button className="btnA">Sign up now</Button>
              <i class="bi bi-play-circle"></i>Watch demo
              <Button className="btnB"></Button>
            </Container>
          </Col>
          <Col>
            <Container style={{ position: "relative" }}>
              <Image
                src={Picture}
                thumbnail
                className="background-image"
              ></Image>
              <Image
                src={Pexels}
                thumbnail
                style={{
                  marginTop: "-3rem",
                  backgroundColor: "transparent",
                  border: "none",
                  zIndex: 1,
                }}
              ></Image>
            </Container>
          </Col>
        </Container>
      </div>
    </div>
  );
}
