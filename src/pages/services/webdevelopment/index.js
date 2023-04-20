import HeroSection from "@/components/servicesComponent/HeroSection";
import CommonServices from "@/components/servicesComponent/CommonServices";
import ContactUs from "@/components/servicesComponent/ContactUs";

import BannerLayoutThree from "@/components/DesignServiceComponents/BannerLayoutThree";
import BrochureSection from "@/components/DesignServiceComponents/BrochureSection";
import ServicePagetitle from "@/components/DesignServiceComponents/ServicePagetitle";
import BannerLayout from "@/components/bannerLayout/BannerLayout";
import WebDevelopmentMainSection from "@/components/servicesComponents/WebDevelopent/WebDeveloperMainSection";

const WebDevelopment = () => {
  return (
    <>
      {/* <HeroSection />
      <CommonServices value={value}/>
      <ContactUs /> */}
      <ServicePagetitle />
      <WebDevelopmentMainSection />
      <BannerLayoutThree />
      <BannerLayout />
    </>
  );
};

export default WebDevelopment;
