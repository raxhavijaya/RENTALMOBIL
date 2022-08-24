import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TopSection from "../components/UI/TopSection";
import WhyUs from "../components/UI/WhyUs";
import Testimonial from "../components/UI/Testimonial";
import OurServices from "../components/UI/OurServices";
import SewaMobil from "../components/UI/SewaMobil";
import FAQ from "../components/UI/FAQ";

const LandingPage = () => {
  return (
    <div className="landingpage">
      <Header />
      <TopSection />
      <OurServices />
      <WhyUs />
      <Testimonial />
      <SewaMobil />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;
