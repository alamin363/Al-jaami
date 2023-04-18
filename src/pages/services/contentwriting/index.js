import ContentWritingHeroSection from "@/components/ContentWriting/ContentWritingHeroSection";
import Footer from "@/components/footer";
import Header from "@/components/header/Header";
import CommonServices from "@/components/servicesComponent/CommonServices";
import ContactUs from "@/components/servicesComponent/ContactUs";

import BannerLayoutThree from "@/components/DesignServiceComponents/BannerLayoutThree";
import BrochureSection from "@/components/DesignServiceComponents/BrochureSection";
import ServicePagetitle from "@/components/SellingPlatfromComponents/ServicePagetitle";
import BannerLayout from "@/components/bannerLayout/BannerLayout";

const ContentWriting = () => {
  let value = {
    webDeveloper: false,
    graphicDesign: false,
    contentWriting: true,
  };
  return (
    <>
      {/* <ContentWritingHeroSection />
      <CommonServices value={value} />
      <ContactUs /> */}
      <ServicePagetitle />
      <BrochureSection />
      <BannerLayoutThree />
      <BannerLayout />
    </>
  );
};

export default ContentWriting;
