import BannerLayoutThree from "@/components/DesignServiceComponents/BannerLayoutThree";
import BrochureSection from "@/components/DesignServiceComponents/BrochureSection";
import ServicePagetitle from "@/components/SellingPlatfromComponents/ServicePagetitle";
import BannerLayout from "@/components/bannerLayout/BannerLayout";
import useTitle from "@/components/hooks/useTitle";

const Index = () => {
  useTitle("");
  return (
    <>
      <ServicePagetitle />
      <BrochureSection />
      <BannerLayoutThree />
      <BannerLayout />
    </>
  );
};

export default Index;
