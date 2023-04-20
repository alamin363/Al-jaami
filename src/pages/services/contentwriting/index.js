import ContentWritingHeroSection from "@/components/ContentWriting/ContentWritingHeroSection";
import Footer from "@/components/footer";
import Header from "@/components/header/Header";
import CommonServices from "@/components/servicesComponent/CommonServices";
import ContactUs from "@/components/servicesComponent/ContactUs";

import BannerLayoutThree from "@/components/DesignServiceComponents/BannerLayoutThree";
import BrochureSection from "@/components/DesignServiceComponents/BrochureSection";
import ServicePagetitle from "@/components/SellingPlatfromComponents/ServicePagetitle";
import BannerLayout from "@/components/bannerLayout/BannerLayout";
import ContentWritingMainSection from "@/components/servicesComponents/ContentWriting/ContentWritingMainSection";

const ContentWriting = () => {
  return (
    <>
      {/* <ContentWritingHeroSection />
      <CommonServices value={value} />
      <ContactUs /> */}
      <ServicePagetitle />
      <ContentWritingMainSection />
      <BannerLayoutThree />
      <BannerLayout />
    </>
  );
};

export default ContentWriting;
