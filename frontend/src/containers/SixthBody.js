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
import win1 from "../img/win1.png";
import win2 from "../img/win2.png";
import win3 from "../img/win3.png";
import world from "../img/world.png";

export default function SixthBody() {
  return (
    <Container
      style={{ backgroundColor: "#fffcf2", paddingTop: "120px" }}
      fluid
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
          <Col style={{ display: "flex", flexDirection: "column" }}>
            <Button className="btnD" style={{ textAlign: "left" }}>
              <IoSearchOutline style={{ marginRight: "10px" }} />
              Bibendum tellus
            </Button>
            <Button className="btnD" style={{ textAlign: "left" }}>
              <GoShieldCheck style={{ marginRight: "10px" }} />
              Cras eget
            </Button>
            <Button className="btnD" style={{ textAlign: "left" }}>
              <IoRocketOutline style={{ marginRight: "10px" }} />
              Dolor pharetra
            </Button>
            <Button className="btnD" style={{ textAlign: "left" }}>
              <SlScreenDesktop style={{ marginRight: "10px" }} />
              Amet, fringilla
            </Button>
            <Button className="btnD" style={{ textAlign: "left" }}>
              <BiPodcast style={{ marginRight: "10px" }} />
              Amet nibh
            </Button>
            <Button className="btnD" style={{ textAlign: "left" }}>
              <GiSettingsKnobs style={{ marginRight: "10px" }} />
              Sed velit
            </Button>
          </Col>
        </Row>
        <Image
          src={win1}
          style={{
            width: "70%",
            height: "35rem",
            zIndex: 1,
            transform: "rotate(0deg)",
            top: -200,
            left: 300,
            position: "relative",
          }}
        />
        <Image
          src={win2}
          style={{
            width: "70%",
            height: "35rem",
            zIndex: 2,
            transform: "rotate(0deg)",
            top: -650,
            left: 400,
            position: "relative",
          }}
        />

        <Image
          src={w1}
          style={{
            width: "100%",
            height: "35rem",
            zIndex: 0,
            transform: "rotate(0deg)",
            top: -1200,
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
            top: -1700,
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
            top: -2200,
            left: 0,
            position: "relative",
          }}
        />
        <Image
          src={world}
          style={{
            width: "100%",
            height: "35rem",
            zIndex: 1,
            transform: "rotate(0deg)",
            top: -2200,
            left: 0,
            position: "relative",
            backgroundColor: "#78350f",
          }}
        />
      </Container>
    </Container>
  );
}
