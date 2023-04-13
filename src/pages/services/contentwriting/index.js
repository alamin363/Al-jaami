import ContentWritingHeroSection from "@/components/ContentWriting/ContentWritingHeroSection";
import Footer from "@/components/footer";
import Header from "@/components/header/Header";
import CommonServices from "@/components/servicesComponent/CommonServices";
import ContactUs from "@/components/servicesComponent/ContactUs";
import React from "react";

const ContentWriting = () => {
  let value = {
    webDeveloper: false,
    graphicDesign: false,
    contentWriting: true,
  };
  return (
    <div>
    <Header />
      <ContentWritingHeroSection />
      <CommonServices value={value}/>
      <ContactUs />
    </div>
  );
};

export default ContentWriting;
