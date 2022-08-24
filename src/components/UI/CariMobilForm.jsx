import React, { useState } from "react";
import { FormGroup, Form, Button, Label, Input, Container, Row, Col } from "reactstrap";

const CariMobilForm = ({ cars, setFilteredCars, disableForm }) => {
  const [formName, setFormName] = useState("");
  const [formCategory, setFormCategory] = useState("");
  const [formPrice, setFormPrice] = useState("");
  const [formStatus, setFormStatus] = useState(false);

  const handleSubmit = (e) => {
    const isPriceMatched = (price) => {
      return (price < 400000 && formPrice === "LESS_400") || (price >= 400000 && price <= 600000 && formPrice === "400-600") || (price > 600000 && formPrice === "GREATER_600");
    };

    const filteredData = cars.filter(
      (car) =>
        (!formName || car.name.toLowerCase().includes(formName.toLowerCase())) &&
        (!formCategory || car.category === formCategory) &&
        (!formPrice || isPriceMatched(car.price)) &&
        (!formStatus || car.status === formStatus)
    );
    setFilteredCars(filteredData);
    e.preventDefault();
  };
  return (
    <Container className="form">
      <Row>
        <h1>Pencarianmu</h1>
        <Col>
          <Form className="d-flex justify-content-between align-items-center">
            <FormGroup>
              <Label for="name">Nama Mobil</Label>
              <Input id="name" type="text" placeholder="Masukkan nama/tipe mobil" onChange={(e) => setFormName(e.target.value)} disabled={disableForm}></Input>
            </FormGroup>
            <FormGroup>
              <Label for="category">Kategori</Label>
              <Input id="category" type="select" placeholder="Masukkan masukkan kapasitas mobil" onChange={(e) => setFormCategory(e.target.value)} disabled={disableForm}>
                <option defaultChecked value="">
                  Masukkan kapasistas mobil
                </option>
                <option value={"2 - 4 orang"}>2 - 4 orang</option>
                <option value={"4 - 6 orang"}>4 - 6 orang</option>
                <option value={"6 - 8 orang"}>6 - 8 orang</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="price">Harga</Label>
              <Input id="price" type="select" placeholder="Masukkan Harga Sewa per Hari" onChange={(e) => setFormPrice(e.target.value)} disabled={disableForm}>
                <option defaultChecked value="">
                  Masukkan Harga Sewa per Hari
                </option>
                <option value={"LESS_400"}>&lt;Rp. 400.000</option>
                <option value={"400-600"}>Rp. 400.000 - Rp.600.000</option>
                <option value={"GREATER_600"}>&gt;Rp. 600.000</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="status">Status</Label>
              <Input id="status" type="select" placeholder="Status" onChange={(e) => setFormStatus(e.target.value === "true" ? true : false)} disabled={disableForm}>
                <option defaultChecked value="">
                  Pilih status
                </option>
                <option value={true}>Disewa</option>
                <option value={false}>Available</option>
              </Input>
            </FormGroup>
            <Button type="submit" disabled={disableForm} onClick={handleSubmit}>
              CariMobil
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default CariMobilForm;
