import BannerLayoutThree from "@/components/DesignServiceComponents/BannerLayoutThree";
import BrochureSection from "@/components/DesignServiceComponents/BrochureSection";
import ServicePagetitle from "@/components/DesignServiceComponents/ServicePagetitle";
import BannerLayout from "@/components/bannerLayout/BannerLayout";

const index = () => {
  return (
    <>
      <ServicePagetitle />
      <BrochureSection />
      <BannerLayoutThree />
      <BannerLayout />
    </>
  );
};

export default index;