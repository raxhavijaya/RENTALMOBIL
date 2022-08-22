import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import CariMobil from "../pages/CariMobil";
import DetailMobil from "../pages/DetailMobil";
import NotFound from "../pages/NotFound";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/landingpage" />} />
      <Route path="/landingpage" element={<LandingPage />} />
      <Route path="/carimobil" element={<CariMobil />} />
      <Route path="/detailmobil/:id" element={<DetailMobil />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
