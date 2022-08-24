import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header">
      {["lg"].map((expand) => (
        <div className="mainNavbar">
          <Container>
            <Navbar key={expand} expand={expand} className="navBar mb-3">
              <Container fluid>
                <Navbar.Brand className="navBrand" href="/landingpage">
                  Binar Car Rental
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Binar Car Rental</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3 gap-3">
                      <Nav.Link className="colornavbar" href="/landingpage/#ourServices">
                        Our Services
                      </Nav.Link>
                      <Nav.Link className="colornavbar" href="/landingpage/#whyUs">
                        Why Us
                      </Nav.Link>
                      <Nav.Link className="colornavbar" href="/landingpage/#testimonial">
                        Testimonial
                      </Nav.Link>
                      <Nav.Link className="colornavbar" href="/landingpage/#faq">
                        FAQ
                      </Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          </Container>
        </div>
      ))}
    </div>
  );
};

export default Header;
