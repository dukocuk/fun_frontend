import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import desktopPic from "../img/Desktop.png";
import { IoMdCheckmark } from "react-icons/io";

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
            <div className="d-flex justify-content-end">
              <Card.Img variant="top" src={desktopPic} style={{ width: 400 }} />
            </div>
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
