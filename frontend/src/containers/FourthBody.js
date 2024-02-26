import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import desktopPic from "../img/Desktop.png";
import Rectangle from "../img/Rectangle.png";
import gc from "../img/gc.png";
import bc from "../img/bc.png";
import RectangleSmallBrown from "../img/RectangleSmallBrown.png";
import RectangleSmallPurple from "../img/RectangleSmallPurple.png";
import RectangleBigPink from "../img/RectangleBigPink.png";
import { IoMdCheckmark } from "react-icons/io";
import { Stage, Layer, Rect, Text, Circle, Line } from "react-konva";

export default function FourthBody() {
  return (
    <Container
      fluid="true"
      style={{
        backgroundColor: "#fffcf2",
        paddingTop: "40px",
      }}
    >
      <Container>
        <Row className="fourthBody">
          <Card
            fluid="true"
            style={{
              backgroundColor: "#ffffff",
              paddingTop: "40px",
              width: "100%",
              height: "20rem",
              borderRadius: "20px",
            }}
            className="shadow-lg p-3 mb-5 bg-white"
          >
            <Col className="d-flex justify-content-end">
              <Card.Img
                variant="top"
                src={Rectangle}
                style={{
                  width: 400,
                  height: 400,
                  zIndex: -0,
                  transform: "rotate(0deg)",
                  top: -80,
                  left: 330,
                  position: "relative",
                }}
              />
              <Card.Img
                variant="top"
                src={gc}
                style={{
                  width: 60,
                  height: 60,
                  zIndex: 2,
                  transform: "rotate(0deg)",
                  top: 200,
                  left: 0,
                  position: "relative",
                }}
              />
              <Card.Img
                variant="top"
                src={bc}
                style={{
                  width: 45,
                  height: 45,
                  zIndex: 2,
                  transform: "rotate(0deg)",
                  top: -60,
                  left: 190,
                  position: "relative",
                }}
              />
              <Card.Img
                variant="top"
                src={RectangleSmallBrown}
                style={{
                  width: 55,
                  height: 55,
                  zIndex: 1,
                  transform: "rotate(0deg)",
                  top: 20,
                  left: -150,
                  position: "relative",
                }}
              />
              <Card.Img
                variant="top"
                src={RectangleSmallPurple}
                style={{
                  width: 45,
                  height: 45,
                  zIndex: 1,
                  transform: "rotate(0deg)",
                  top: 220,
                  left: 50,
                  position: "relative",
                }}
              />
              <Card.Img
                variant="top"
                src={RectangleBigPink}
                style={{
                  width: 45 * 3,
                  height: 45 * 3,
                  zIndex: 1,
                  transform: "rotate(0deg)",
                  top: 180,
                  left: 40,
                  position: "relative",
                }}
              />
              <Card.Img
                variant="top"
                src={desktopPic}
                style={{
                  width: 400,
                  height: 280,
                  zIndex: 1,
                  position: "absolute",
                }}
              />
            </Col>

            <Card.ImgOverlay>
              <Col>
                <Card.Title className="display-4">Why join us</Card.Title>
                <Card.Text>
                  <IoMdCheckmark color="#15803d" />
                  Est et in pharetra magna adipiscing ornare aliquam.
                  <br />
                  <IoMdCheckmark color="#15803d" />
                  Tellus arcu sed consequat ac velit ut eu blandit.
                  <br />
                  <IoMdCheckmark color="#15803d" />
                  Ullamcorper ornare in et egestas dolor orci.
                </Card.Text>
                <Button className="btnC">Sign up now</Button>
              </Col>
            </Card.ImgOverlay>
          </Card>
        </Row>
      </Container>
    </Container>
  );
}
