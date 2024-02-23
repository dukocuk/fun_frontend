import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar expand="lg" className="navB">
      <Container>
        <Navbar.Brand href="#" style={{ fontWeight: "bold", color: "#78350f" }}>
          Collers
        </Navbar.Brand>
        <div className="ms-auto" style={{ paddingRight: "2rem" }}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Products</Nav.Link>
              <Nav.Link href="#pricing">Solutions</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#pricing">Resources</Nav.Link>
              <Nav.Link href="#pricing">Log In</Nav.Link>
              <Button className="btn btnA">Sign up</Button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}
