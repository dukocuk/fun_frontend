import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Card,
  CardBody,
} from "react-bootstrap";
import Slider from "react-slick";
import { PiArrowCircleLeftThin } from "react-icons/pi";
import { PiArrowCircleRightThin } from "react-icons/pi";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FifthBody() {
  const settings = {
    dots: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const cardsData = [
    { id: 1, title: "Card 1", description: "Description for Card 1" },
    { id: 2, title: "Card 2", description: "Description for Card 2" },
    { id: 3, title: "Card 3", description: "Description for Card 3" },
    { id: 3, title: "Card 4", description: "Description for Card 4" },
    { id: 3, title: "Card 5", description: "Description for Card 5" },
    { id: 3, title: "Card 6", description: "Description for Card 6" },
  ];

  return (
    <Container
      fluid="true"
      style={{
        backgroundColor: "#fffcf2",
        paddingTop: "60px",
      }}
    >
      <Container>
        <Row>
          <h1 className="display-4">Because they love us</h1>
          <Container className="d-flex justify-content-end">
            <PiArrowCircleLeftThin
              size={60}
              style={{ marginTop: "-60px" }}
              className="btnB"
            />
            <PiArrowCircleRightThin
              size={60}
              style={{ marginTop: "-60px" }}
              className="btnB"
            />
          </Container>
        </Row>
        <Row>
          <Slider {...settings}>
            {cardsData.map((cards) => (
              <Col key={cards.id}>
                <Card
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "40px",
                    width: "100%",
                    height: "20rem",
                    borderRadius: "20px",
                    border: "none",
                    marginTop: "18px",
                    position: "relative",
                  }}
                >
                  <Card.Img /> {/* Hidden image */}
                  <Card.ImgOverlay
                    style={{
                      backgroundColor: "#fde68a",
                      borderRadius: "0",
                    }}
                    fluid
                  >
                    <Container
                      style={{
                        backgroundColor: "#ffffff",
                        marginBottom: "-40px",
                        width: "18rem",
                        height: "18rem",
                        borderRadius: "20px",
                        border: "none",
                      }}
                    >
                      <CardBody>
                        <div className="container">
                          <Card.Title>{cards.title}</Card.Title>
                          <Card.Text>{cards.description}</Card.Text>
                        </div>
                      </CardBody>
                    </Container>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            ))}
          </Slider>
        </Row>
      </Container>
    </Container>
  );
}
