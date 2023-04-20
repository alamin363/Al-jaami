import BannerLayoutThree from "@/components/DesignServiceComponents/BannerLayoutThree";
import ServicePagetitle from "@/components/itWebServicesComponents/ServicePagetitle";
import BannerLayout from "@/components/bannerLayout/BannerLayout";
import GraphicsDesignMainSection from "@/components/servicesComponents/GraphicsDesign/GraphicsDesignMainSection";


const index = () => {
  return (
    <>
      {/* <GraphicHeroSection />
      <CommonServices value={value}/>
      <ContactUs /> */}
      <ServicePagetitle />
      <GraphicsDesignMainSection />
      <BannerLayoutThree />
      <BannerLayout />
    </>
  );
};

export default index;
