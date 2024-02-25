import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";

export default function FourthBody() {
  return (
    <Container
      fluid="true"
      style={{
        backgroundColor: "#fffcf2",
        paddingTop: "40px",
      }}
    >
      <Row>
        <Card
          fluid="true"
          border="dark"
          style={{
            backgroundColor: "#fffcf2",
            paddingTop: "40px",
            width: "18rem",
          }}
        >
          <Container style={{ textAlign: "center" }}>
            <Card.Title className="display-2">Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Container>
        </Card>
      </Row>
    </Container>
  );
}
