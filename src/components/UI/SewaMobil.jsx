import React from "react";
import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom";
const SewaMobil = () => {
  return (
    <div className="sewamobil d-flex align-items-center justify-content-center">
      <Container className="sewamobilcontainer text-center text-white">
        <h1 className="mb-2">Sewa Mobil di (Lokasimu) Sekarang</h1>
        <p className="mb-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quisquam tempore, corrupti quod ipsum quasi veritatis nam earum iure. Earum ut sed nostrum commodi cupiditate suscipit
          porro corporis molestias optio.
        </p>
        <Link to="/carimobil">
          <Button className="btn">Mulai Sewa Mobil</Button>
        </Link>
      </Container>
    </div>
  );
};

export default SewaMobil;
