import React from "react";
import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom";
const SewaMobil = () => {
  return (
    <div className="d-flex mt-5 align-items-center justify-content-center">
    <Container className="bg-primary text-center text-white">
      <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quisquam tempore, corrupti quod ipsum quasi veritatis nam earum iure. Earum ut sed nostrum commodi cupiditate suscipit
        porro corporis molestias optio.
      </p>
      <Link to="/carimobil">
        <Button >Mulai Sewa Mobil</Button>
      </Link>
    </Container>
    </div>
  );
};

export default SewaMobil;
