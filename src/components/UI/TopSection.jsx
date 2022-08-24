import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import mercedes from "../../assets/images/mercedes.png";

const TopSection = (showSection) => {
  return (
    <div className="topSection mb-5" disable={showSection}>
      <Container>
        <Row className="d-flex">
          <Col className="topLeft mb-3" lg="6" md="6" sm="6">
            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam</p>
            <Link to="/carimobil">
              <Button className="btn">Mulai Sewa Mobil</Button>
            </Link>
          </Col>

          <Col className="topRight mb-3" lg="6" md="6" sm="6">
            <Image src={mercedes} alt="Mercedes" className="mercedes img-fluid fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopSection;
