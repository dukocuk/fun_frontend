import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Pexels from "../img/Pexels.png";
import Picture from "../img/Picture.png";
import { HiOutlinePlayCircle } from "react-icons/hi2";

export default function FirstBody() {
  return (
    <Container className="firstBody">
      <Col>
        <h1
          className="display-4 font-weight-bold"
          style={{ fontWeight: "700" }}
        >
          Collectible Sneakers
        </h1>
        <div style={{ marginTop: "2rem" }}></div>
        <span>
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet.
        </span>
        <div style={{ marginTop: "2rem" }}></div>
        <Button className="btnA">Sign up now</Button>
        <Button className="btnB">
          <HiOutlinePlayCircle style={{ paddingRight: "5px" }} size={20} />
          Watch demo
        </Button>
      </Col>
      <Col>
        <Container style={{ position: "relative" }} className="shoe">
          <Image src={Picture} thumbnail className="background-image"></Image>
          <Image src={Pexels} thumbnail className="foreground-image"></Image>
        </Container>
      </Col>
    </Container>
  );
}
