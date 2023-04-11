import ContentWritingHeroSection from "@/components/ContentWriting/ContentWritingHeroSection";
import Footer from "@/components/footer";
import Header from "@/components/header/Header";
import CommonServices from "@/components/servicesComponent/CommonServices";
import ContactUs from "@/components/servicesComponent/ContactUs";
import React from "react";

const ContentWriting = () => {
  return (
    <div>
      <Header />
      <ContentWritingHeroSection />
      <CommonServices />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default ContentWriting;
