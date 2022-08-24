import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import CariMobilForm from "../components/UI/CariMobilForm";
import { Container, Row, Col } from "reactstrap";
import Footer from "../components/Footer/Footer";

const DetailMobil = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});
  const [loading, setLoading] = useState(false);
  const controller = new AbortController();
  const loadCar = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`, {
        signal: controller.signal,
      });
      setCar(data);
    } catch (error) {
      console.log(error);
      controller.abort();
    }
    setLoading(false);
  };

  useEffect(() => {
    loadCar();
  }, []);

  return (
    <>
      <Header />
      <CariMobilForm disableForm={true} />
      <Container className="mt-5">
        <Row className="d-flex justify-content-between">
          <Col className="detail" lg="6" md="6" sm="6">
            <h5>Tentang Paket</h5>
            <h5>Include</h5>
            <ul>
              <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
              <li>Sudah termasuk bensin selama 12 jam</li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk pajak</li>
            </ul>
            <h5>Exclude</h5>
            <ul>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
            <h5>Refund, Reschedule, Overtime</h5>
            <ul>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
          </Col>
          <Col className="detail " lg="5" md="5" sm="5">
            {!loading ? (
              <div className="">
                <div className="text-center">
                  <img className="imgCar" src={car.image} alt="Car" />
                </div>
                <p className="carname">{car.name}</p>
                <p>
                  <i class="ri-group-line"></i> {car.category}
                </p>
                <p className="carprice">Total {car.price}</p>
              </div>
            ) : (
              <h2>
                <i class="ri-loader-line"></i>
              </h2>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default DetailMobil;
