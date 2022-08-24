import React from "react";
import { Container, Row, Col } from "reactstrap";

const WhyUs = () => {
  return (
    <div id="whyUs" className="whyuss d-flex">
      <Container className="whyuscontainer">
        <h1>Why Us?</h1>
        <h6 className="mt-3">Mengapa harus pilih Binar Car Rental?</h6>
        <Row className="cardsection mt-5">
          <Col lg="3" md="3" sm="3" className="whyussection mb-3">
            <i class="bgicon1 ri-thumb-up-line"></i>
            <h5 className="mt-3">Mobil Lengkap</h5>
            <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
          </Col>
          <Col lg="3" md="3" sm="3" className="whyussection mb-3">
            <i class="bgicon2 ri-price-tag-3-line"></i>
            <h5 className="mt-3">Harga Murah</h5>
            <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
          </Col>
          <Col lg="3" md="3" sm="3" className="whyussection mb-3">
            <i class="bgicon3 ri-time-line"></i>
            <h5 className="mt-3">Layanan 24 Jam</h5>
            <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
          </Col>
          <Col lg="3" md="3" sm="3" className="whyussection mb-3">
            <i class="bgicon4 ri-award-line"></i>
            <h5 className="mt-3">Sopir Profesional</h5>
            <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyUs;
