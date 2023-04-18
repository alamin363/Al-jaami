import HeroSection from "@/components/servicesComponent/HeroSection";
import CommonServices from "@/components/servicesComponent/CommonServices";
import ContactUs from "@/components/servicesComponent/ContactUs";

import BannerLayoutThree from "@/components/DesignServiceComponents/BannerLayoutThree";
import BrochureSection from "@/components/DesignServiceComponents/BrochureSection";
import ServicePagetitle from "@/components/DesignServiceComponents/ServicePagetitle";
import BannerLayout from "@/components/bannerLayout/BannerLayout";

const WebDevelopment = () => {
  let value = {
    webDeveloper: true,
    graphicDesign: false,
    contentWriting: false,
  };
  return (
    <>
      {/* <HeroSection />
      <CommonServices value={value}/>
      <ContactUs /> */}
      <ServicePagetitle />
      <BrochureSection />
      <BannerLayoutThree />
      <BannerLayout />
    </>
  );
};

export default WebDevelopment;
