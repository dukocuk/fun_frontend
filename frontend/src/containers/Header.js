import { Navbar, Nav, Container, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  // Function to handle scrolling to a specific section

  const handleToggleNavbar = () => {
    // Toggle the navbar state
    setNavbarOpen(!navbarOpen);

    // Scroll the page down to the position where the navbar becomes visible
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    if (!navbarOpen) {
      window.scrollBy({
        top: navbarHeight,
        behavior: "smooth", // Optional: Add smooth scrolling effect
      });
    }
  };

  return (
    <Navbar expand="lg" className="navB" sticky="top">
      <Container>
        <Navbar.Brand
          className="display-4"
          href="#"
          style={{ fontWeight: "bold", color: "#78350f", fontSize: "30px" }}
        >
          Collers
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={handleToggleNavbar}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="hamburger">
          <Nav className="ms-auto">
            <Nav.Link href="#section1Ref">Products</Nav.Link>
            <Nav.Link href="#pricing">Solutions</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">Resources</Nav.Link>
            <Nav.Link href="#pricing">Log In</Nav.Link>
            <Button className="btnA">Sign up now</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
