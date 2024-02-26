import {
  Container,
  Row,
  Col,
  Image,
  Card,
  CardBody,
  Button,
} from "react-bootstrap";
import Slider from "react-slick";
import { PiArrowCircleLeftThin } from "react-icons/pi";
import { PiArrowCircleRightThin } from "react-icons/pi";
import Elec from "../img/Elec.png";
import Shell from "../img/Shell.png";
import N from "../img/N.png";
import Wave from "../img/Wave.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState, useRef } from "react";

export default function FifthBody() {
  const settings = {
    dots: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const cardsData = [
    {
      id: 1,
      title: "kontrastr",
      description:
        "Amet morbi enim sodales quis dui, in habitant pharetra.Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.",
      src: Elec,
      profileImg: "https://xsgames.co/randomusers/assets/avatars/female/20.jpg",
      jobTitle: "Product Designer",
      name: "Jamilyn Ruiz",
    },
    {
      id: 2,
      title: "Zoomer",
      description:
        "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
      src: Elec,
      profileImg: "https://xsgames.co/randomusers/assets/avatars/female/19.jpg",
      jobTitle: "Team Lead",
      name: "Alvin O'Moore",
    },
    {
      id: 3,
      title: "Shell",
      description:
        "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
      src: Shell,
      profileImg: "https://xsgames.co/randomusers/assets/avatars/female/14.jpg",
      jobTitle: "Co-founder",
      name: "Cliff Cole",
    },
    {
      id: 4,
      title: "ArtVenue",
      description:
        "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
      src: N,
      profileImg: "https://xsgames.co/randomusers/assets/avatars/female/16.jpg",
      jobTitle: "Manager",
      name: "Fredrika Foster",
    },
    {
      id: 5,
      title: "Wave",
      description:
        "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
      src: Wave,
      profileImg: "https://xsgames.co/randomusers/assets/avatars/female/76.jpg",
      jobTitle: "CEO",
      name: "Barrie Duncan",
    },
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
              style={{ marginTop: "-60px", cursor: "pointer" }}
              className="btnB"
              onClick={previous}
            />
            <PiArrowCircleRightThin
              size={60}
              style={{ marginTop: "-60px", cursor: "pointer" }}
              className="btnB"
              onClick={next}
            />
          </Container>
        </Row>
        <Row>
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {cardsData.map((cards) => (
              <Col key={cards.id}>
                <div
                  style={{
                    position: "relative",
                    marginBottom: "18px",
                    overflow: "visible", // Ensure overflow of cards
                  }}
                >
                  <Card
                    style={{
                      backgroundColor: "#fffcf2",
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
                        height: "18rem",
                        position: "absolute",
                      }}
                      fluid="true"
                    >
                      <Container
                        style={{
                          backgroundColor: "#ffffff",
                          marginBottom: "40px",
                          width: "18rem",
                          height: "20em",
                          borderRadius: "20px",
                        }}
                        className="shadow-sm p-3 mb-5 bg-white"
                      >
                        <CardBody>
                          <Container
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "10px",
                            }}
                          >
                            <Image src={cards.src}></Image>
                            <Card.Title>{cards.title}</Card.Title>
                          </Container>
                          <Card.Text>{cards.description}</Card.Text>
                          <Row>
                            <Col md={2}>
                              <Image
                                src={cards.profileImg}
                                roundedCircle
                                style={{
                                  width: "3rem",
                                  height: "3rem",
                                }}
                              ></Image>
                            </Col>
                            <Col style={{ textAlign: "center" }}>
                              <Card.Subtitle>{cards.name}</Card.Subtitle>
                              <Card.Text>{cards.jobTitle}</Card.Text>
                            </Col>
                          </Row>
                        </CardBody>
                      </Container>
                    </Card.ImgOverlay>
                  </Card>
                </div>
              </Col>
            ))}
          </Slider>
        </Row>
      </Container>
    </Container>
  );
}
