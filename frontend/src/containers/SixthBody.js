import {
  Container,
  Row,
  Col,
  ListGroup,
  Button,
  Image,
  Card,
  CardBody,
} from "react-bootstrap";
import { IoSearchOutline } from "react-icons/io5";
import { GoShieldCheck } from "react-icons/go";
import { IoRocketOutline } from "react-icons/io5";
import { SlScreenDesktop } from "react-icons/sl";
import { BiPodcast } from "react-icons/bi";
import { GiSettingsKnobs } from "react-icons/gi";

import w1 from "../img/w1.png";
import w2 from "../img/w2.png";
import w3 from "../img/w3.png";
import world from "../img/world.png";

export default function SixthBody() {
  return (
    <Container
      style={{ background: "#fffcf2", paddingTop: "160px" }}
      fluid="true"
    >
      <Container>
        <Row
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Col>
            <h1 className="display-4">Grow your collection</h1>
            <p>
              Enim neque massa porta adipiscing elit. Sem libero id faucibus
              nibh amet dictum pellentesque sed. Eu non turpis risus odio
              sapien, fames sit rhoncus. Nec magna sed interdum sit purus
              tellus. Et volutpat proin neque placerat at bibendum quam tellus.
            </p>
          </Col>
          <Col>
            <ListGroup variant="flush" style={{ width: "15%" }}>
              <Button className="btnB" style={{ textAlign: "left" }}>
                <IoSearchOutline />
                Bibendum tellus
              </Button>
              <Button className="btnB" style={{ textAlign: "left" }}>
                <GoShieldCheck />
                Cras eget
              </Button>
              <Button className="btnB" style={{ textAlign: "left" }}>
                <IoRocketOutline />
                Dolor pharetra
              </Button>
              <Button className="btnB" style={{ textAlign: "left" }}>
                <SlScreenDesktop />
                Amet, fringilla
              </Button>
              <Button className="btnB" style={{ textAlign: "left" }}>
                <BiPodcast />
                Amet nibh
              </Button>
              <Button className="btnB" style={{ textAlign: "left" }}>
                <GiSettingsKnobs />
                Sed velit
              </Button>
            </ListGroup>
          </Col>
          <Col>
            <Image
              src={w1}
              style={{
                width: "100%",
                height: "35rem",
                zIndex: 0,
                transform: "rotate(0deg)",
                top: 980,
                left: 0,
                position: "relative",
              }}
            />
            <Image
              src={w2}
              style={{
                width: "100%",
                height: "35rem",
                zIndex: 1,
                transform: "rotate(0deg)",
                top: 490,
                left: 0,
                position: "relative",
              }}
            />
            <Image
              src={w3}
              style={{
                width: "100%",
                height: "35rem",
                zIndex: 1,
                transform: "rotate(0deg)",
                top: 10,
                left: 0,
                position: "relative",
              }}
            />
          </Col>
        </Row>
        <Container style={{ backgroundColor: "#78350f" }}>
          <Image
            src={world}
            style={{
              width: "100%",
              height: "35rem",
              zIndex: 1,
              transform: "rotate(0deg)",
              top: 0,
              left: 0,
              position: "relative",
            }}
          />
        </Container>
      </Container>
    </Container>
  );
}
