import React from "react";
import CariMobilForm from "../components/UI/CariMobilForm";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "reactstrap";
import Header from "../components/Header/Header";
import TopSection from "../components/UI/TopSection";
import Footer from "../components/Footer/Footer";

const CariMobil = () => {
  const [car, setCar] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const controller = new AbortController();

  const loadCar = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("https://bootcamp-rent-car.herokuapp.com/admin/car/", {
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
    <div className="page">
      <Header />
      <TopSection showSection={false} />
      <CariMobilForm cars={car} setFilteredCars={setFilteredCars} disableForm={false} />
      {!loading ? (
        <Container className="">
          <Row>
            {filteredCars.length &&
              filteredCars.map((icar, index) => (
                <Col className="gap-3 mt-3 mb-3" lg="4" md="4" sm="4">
                  <div className="card carList" key={index}>
                    <div className="text-center">
                      <img className="card-img imgCar" src={icar.image} alt="Car" />
                    </div>
                    <div className="card-body">
                      <p className="card-title">{icar.name}</p>
                      <p className="card-text">{icar.price} / hari</p>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt quo asperiores, sapiente, velit possimus quam iste nobis vel pariatur dicta debitis natus? Sequi impedit
                        numquam fugiat voluptates ex eos quibusdam?
                      </p>
                      <Link to={`/detailmobil/${icar.id}`}>
                        <Button className="btn">Pilih mobil</Button>
                      </Link>
                    </div>
                  </div>
                </Col>
              ))}
          </Row>
        </Container>
      ) : (
        <h2>
          <i class="ri-loader-line"></i>
        </h2>
      )}
      <Footer />
    </div>
  );
};

export default CariMobil;
