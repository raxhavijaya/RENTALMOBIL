import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header">
      {" "}
      <div className="mainNavbar">
        <Navbar variant="light">
          <Container>
            <Navbar.Brand href="/landingpage" className="navBrand">Home</Navbar.Brand>
            <Nav className="navBar">
              <Nav.Link href="#ourServices">Our Services</Nav.Link>
              <Nav.Link href="#whyUs">Why Us</Nav.Link>
              <Nav.Link href="#testimonial">Testimonial</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
