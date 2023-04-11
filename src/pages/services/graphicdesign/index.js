import GraphicHeroSection from "@/components/GraphicsDesign/HeroSection";
import Footer from "@/components/footer";
import Header from "@/components/header/Header";
import CommonServices from "@/components/servicesComponent/CommonServices";
import ContactUs from "@/components/servicesComponent/ContactUs";
import React from "react";

const index = () => {
  return (
    <div>
      <Header />
      <GraphicHeroSection />
      <CommonServices />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default index;
