import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Image } from "react-bootstrap";
import happygirl from "../../assets/images/happygirl.png";
import "remixicon/fonts/remixicon.css";
import elipse19 from "../../assets/images/elipse19.png";

const OurServices = () => {
  return (
    <div id="ourServices" className="mt-5 mb-5">
      <Container>
        <Row>
          <Col className="d-flex align-items-center justify-content-center mb-3" lg="6" md="6" sm="6">
            <Image src={elipse19} alt="Ellipse 19" className="img-fluid" />
            <Image src={happygirl} alt="Happy Girl" className="happygirl img-fluid rounded-circle" />
          </Col>
          <Col className="mb-3" lg="6" md="6" sm="6">
            <div className="check_icon">
              <h1>Best Car Rental for any kind for trip in (Lokasimu)</h1>
              <p className="mt-3">
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata,
                bisnis, wedding, meeting, dll.
              </p>
              <p>
                <i class="ri-check-fill"></i> Sewa Mobil Dengan Supir di Bali 12 Jam
              </p>
              <p>
                <i class="ri-check-fill"></i> Sewa Mobil Lepas Kunci di Bali 24 Jam
              </p>
              <p>
                <i class="ri-check-fill"></i> Sewa Mobil Jangka Panjang Bulanan
              </p>
              <p>
                <i class="ri-check-fill"></i> Gratis Antar - Jemput Mobil di Bandara
              </p>
              <p>
                <i class="ri-check-fill"></i> Layanan Airport Transfer / Drop In Out
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurServices;
