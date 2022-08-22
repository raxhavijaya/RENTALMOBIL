import React from 'react'
import {Container, Row, Col} from 'reactstrap' 

const WhyUs = () => {
  return (
    <div id="whyUs">
        <Container>
          <h1>Why Us?</h1>
          <h6>Mengapa harus pilih Binar Car Rental?</h6>
          <Row>
            <Col lg="3" md="3" sm="3" className="gap-3">
              <i class="ri-thumb-up-line"></i>
              <h5>Mobil Lengkap</h5>
              <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
            </Col>
            <Col lg="3" md="3" sm="3" className="gap-3">
              <i class="ri-price-tag-3-line"></i>
              <h5>Harga Murah</h5>
              <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
            </Col>
            <Col lg="3" md="3" sm="3" className="gap-3">
              <i class="ri-time-line"></i>
              <h5>Layanan 24 Jam</h5>
              <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
            </Col>
            <Col lg="3" md="3" sm="3" className="gap-3">
              <i class="ri-award-line"></i>
              <h5>Sopir Profesional</h5>
              <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default WhyUs