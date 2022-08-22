import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Image } from "react-bootstrap";
import happygirl from "../../assets/images/happygirl.png"
import "remixicon/fonts/remixicon.css";

const OurServices = () => {
  return (
    <div id="ourServices">
      <Container>
        <Row>
          <Col className="topRight d-flex" lg="6" md="6" sm="6">
            <Image src={happygirl} alt="Happy Girl" className="happygirl " />
          </Col>
          <Col className="topLeft" lg="6" md="6" sm="6">
            <h1>Best Car Rental for any kind for trip in (Lokasimu)</h1>
            <p>
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <i class="ri-check-fill"> Sewa Mobil Dengan Supir di Bali 12 Jam</i>
            <br />
            <i class="ri-check-fill"> Sewa Mobil Lepas Kunci di Bali 24 Jam</i>
            <br />
            <i class="ri-check-fill"> Sewa Mobil Jangka Panjang Bulanan</i>
            <br />
            <i class="ri-check-fill"> Gratis Antar - Jemput Mobil di Bandara</i>
            <br />
            <i class="ri-check-fill"> Layanan Airport Transfer / Drop In Out</i>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurServices;
