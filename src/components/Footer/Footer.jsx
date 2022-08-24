import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <Container className="footer">
      <Row>
        <Col className="textfooter" lg="3" md="3" sm="3">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </Col>
        <Col className="textfooter" lg="3" md="3" sm="3">
          <Link to="/landingpage/#ourServices">
            Our Services
            <br />
          </Link>
          <Link to="/landingpage/#whyUs">
            Why Us
            <br />
          </Link>
          <Link to="/landingpage/#testimonial">
            Testimonial
            <br />
          </Link>
          <Link to="/landingpage/#faq">FAQ</Link>
        </Col>
        <Col className="icon" lg="3" md="3" sm="3">
          <p className="textfooter">Connect With Us</p>
          <i class="ri-facebook-line"></i> <i class="ri-instagram-line"></i> <i class="ri-twitter-line"></i> <i class="ri-mail-line"></i> <i class="ri-twitch-line"></i>
        </Col>
        <Col className="textfooter" lg="3" md="3" sm="3">
          <p>Copyright Binar 2022</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
