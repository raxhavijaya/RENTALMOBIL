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
      <TopSection showSection={false}/>
      <CariMobilForm cars={car} setFilteredCars={setFilteredCars} disableForm={false} />
      <Container>
          <Col  lg='5' md='5' sm='5'>
      {!loading ? (
        <div className="grid">
          {filteredCars.length &&
            filteredCars.map((icar, index) => (
              <div className="card d-flex" key={index}>
                <p>{icar.name}</p>
                <p>{icar.price} / hari</p>
                <img src={icar.image} />
                <Link to={`/detailmobil/${icar.id}`}>
                  <Button>Pilih mobil</Button>
                </Link>
              </div>
            ))}
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
      </Col>
      </Container>
      <Footer/>
    </div>
  );
};

export default CariMobil;
