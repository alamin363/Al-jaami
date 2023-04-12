import ContactFrom from "@/components/ContactComponents/ContactFrom";
import ContactHeroSection from "@/components/ContactComponents/ContactHeroSection";
import Location from "@/components/ContactComponents/Location";
import Footer from "@/components/footer";
import Header from "@/components/header/Header";
import React from "react";

const index = () => {
  return (
    <div>
      <Header />
      <ContactHeroSection />
      <Location />
      <ContactFrom />
      <Footer />
    </div>
  );
};

export default index;
