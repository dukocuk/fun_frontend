import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import { Cart, FramePlusIn, IconoirProvider } from "iconoir-react";
import firstPic from "../img/1.png";
import secondPic from "../img/2.png";
import thirdPic from "../img/3.png";

const thirdBodyBtn = {
  backgroundColor: "transparent",
  borderColor: "white",
  display: "flex",
  minWidth: "100%",
  width: "100%",
  justifyContent: "center",
};

export default function ThirdBody() {
  return (
    <Container
      fluid="true"
      style={{
        backgroundColor: "#0f172a",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <Container
        style={{
          backgroundColor: "#0f172a",
          paddingTop: "40px",
        }}
      >
        <Row
          style={{
            backgroundColor: "#0f172a",
            paddingTop: "40px",
          }}
          className="thirdBody"
        >
          <Col>
            <h1 style={{ color: "white" }}>The best of the best</h1>
          </Col>
          <Col style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              style={{
                borderColor: "white",
                backgroundColor: "transparent",
                marginRight: "7rem",
                paddingRight: "4rem",
                paddingLeft: "4rem",
              }}
            >
              Sign up now
            </Button>
          </Col>
        </Row>
        <Row
          style={{
            backgroundColor: "#0f172a",
            paddingTop: "40px",
            paddingBottom: "40px",
          }}
        >
          <Col className="thirdBody">
            <Card
              style={{
                width: "22rem",
                backgroundColor: "#0f172a",
                color: "#FFF",
              }}
            >
              <Card.Img variant="top" src={firstPic} />
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>
                  Egestas elit dui scelerisque ut eu purus aliquam vitae
                  habitasse.
                </Card.Text>

                <Button style={thirdBodyBtn}>
                  {" "}
                  <IconoirProvider
                    iconProps={{
                      //color: "#AAAAAA",
                      strokeWidth: 1,
                      width: "25px",
                      height: "25px",
                    }}
                  >
                    <Cart style={{ paddingRight: "10px" }} />
                  </IconoirProvider>
                  Buy now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="thirdBody">
            <Card
              style={{
                width: "22rem",
                backgroundColor: "#0f172a",
                color: "#FFF",
              }}
            >
              <Card.Img variant="top" src={secondPic} />
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>
                  Egestas elit dui scelerisque ut eu purus aliquam vitae
                  habitasse.
                </Card.Text>

                <Button style={thirdBodyBtn}>
                  {" "}
                  <IconoirProvider
                    iconProps={{
                      //color: "#AAAAAA",
                      strokeWidth: 1,
                      width: "25px",
                      height: "25px",
                    }}
                  >
                    <Cart style={{ paddingRight: "10px" }} />
                  </IconoirProvider>
                  Buy now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="thirdBody">
            <Card
              style={{
                width: "22rem",
                backgroundColor: "#0f172a",
                color: "#FFF",
              }}
            >
              <Card.Img variant="top" src={thirdPic} />
              <Card.Body className="thirdBody">
                <Card.Title>Title</Card.Title>
                <Card.Text>
                  Egestas elit dui scelerisque ut eu purus aliquam vitae
                  habitasse.
                </Card.Text>

                <Button style={thirdBodyBtn}>
                  {" "}
                  <IconoirProvider
                    iconProps={{
                      strokeWidth: 1,
                      width: "25px",
                      height: "25px",
                    }}
                  >
                    <Cart style={{ paddingRight: "10px" }} />
                  </IconoirProvider>
                  Buy now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
