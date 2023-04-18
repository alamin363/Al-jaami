import GraphicHeroSection from "@/components/GraphicsDesign/HeroSection";
import Footer from "@/components/footer";
import Header from "@/components/header/Header";
import CommonServices from "@/components/servicesComponent/CommonServices";
import ContactUs from "@/components/servicesComponent/ContactUs";
import BannerLayoutThree from "@/components/DesignServiceComponents/BannerLayoutThree";
import BrochureSection from "@/components/DesignServiceComponents/BrochureSection";
import ServicePagetitle from "@/components/itWebServicesComponents/ServicePagetitle";
import BannerLayout from "@/components/bannerLayout/BannerLayout";

const index = () => {
  let value = {
    webDeveloper: false,
    graphicDesign: true,
    contentWriting: false,
  };
  return (
    <>
      {/* <GraphicHeroSection />
      <CommonServices value={value}/>
      <ContactUs /> */}
      <ServicePagetitle />
      <BrochureSection />
      <BannerLayoutThree />
      <BannerLayout />
    </>
  );
};

export default index;
