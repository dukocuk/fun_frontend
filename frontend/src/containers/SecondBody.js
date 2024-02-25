import { Container, Row, Col } from "react-bootstrap";
import { Tunnel, Trophy, Tv, IconoirProvider } from "iconoir-react";

export default function SecondBody() {
  return (
    <Container style={{ paddingBottom: "60px" }}>
      <Row className="secondBody">
        <Col>
          <Container>
            <IconoirProvider
              iconProps={{
                //color: "#AAAAAA",
                strokeWidth: 1,
                width: "3em",
                height: "3em",
                color: "#78350f",
              }}
            >
              <Trophy iconprops={{ width: "4em", height: "4em" }} />
            </IconoirProvider>
            <h3>Nibh viverra</h3>
            <span>
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.{" "}
            </span>
          </Container>
        </Col>
        <Col>
          <Container>
            <IconoirProvider
              iconProps={{
                //color: "#AAAAAA",
                strokeWidth: 1,
                width: "3em",
                height: "3em",
                color: "#78350f",
              }}
            >
              <Tunnel iconprops={{ width: "4em", height: "4em" }} />
            </IconoirProvider>
            <h3>Cursus amet</h3>
            <span>
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.{" "}
            </span>
          </Container>
        </Col>
        <Col>
          {" "}
          <Container>
            <IconoirProvider
              iconProps={{
                //color: "#AAAAAA",
                strokeWidth: 1,
                width: "3em",
                height: "3em",
                color: "#78350f",
              }}
            >
              <Tv iconprops={{ width: "4em", height: "4em" }} />
            </IconoirProvider>
            <h3>Ipsum fermentum</h3>
            <span>
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.{" "}
            </span>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
