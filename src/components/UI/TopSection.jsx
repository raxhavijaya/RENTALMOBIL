import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import {Image} from "react-bootstrap";
import { Link } from "react-router-dom";
import mercedes from "../../assets/images/mercedes.png";

const TopSection = (showSection) => {
  return (
    <div className="topSection" disable={showSection}>
      <Container>
        <Row>
          <Col className="topLeft" lg="6" md="6" sm="6">
            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam</p>
            <Link to="/carimobil">
              <Button>Mulai Sewa Mobil</Button>
            </Link>
          </Col>

          <Col className="topRight d-flex" lg="6" md="6" sm="6">
            <Image src={mercedes} alt="Mercedes" className="mercedes fluid d-flex align-items-center justify-content-center" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopSection;
