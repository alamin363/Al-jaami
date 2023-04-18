import SecondaryNav from "@/components/AboutComponents/SecondaryNav";
import ContextAPI from "@/components/ContextAPI/ContextAPI";
import PricingFeatures from "@/components/QuoteComponents/PricingFeatures";
import BannerSlider from "@/components/bannerLayout/bannerSlider/bannerSlider";
import ServicesCarousel from "@/components/servicesCarosel";
import CommonBannerLayouttwo from "@/components/servicesComponent/WebsiteDeveloperCommonComponents/CommonBannerLayouttwo";
import CommonPortfolioGridSection from "@/components/servicesComponent/WebsiteDeveloperCommonComponents/CommonPortfolioGridSection";
import CommonSolutionBannerLayoutOne from "@/components/servicesComponent/WebsiteDeveloperCommonComponents/CommonSolutionBannerLayoutOne";
import PricingContent from "@/components/servicesComponent/WebsiteDeveloperCommonComponents/PricingContent";
import PortfolioSlider from "@/components/servicesComponent/WebsiteDeveloperCommonComponents/Slider/PortfolioSlider";
import SolutionClient from "@/components/servicesComponent/WebsiteDeveloperCommonComponents/SolutionClient";
import WebDeveloperLayout from "@/components/servicesComponent/WebsiteDeveloperCommonComponents/SolutionsLayoutThree";
import { WebDesignHeroSection } from "@/components/servicesComponent/WebsiteDeveloperCommonComponents/WebDesignHeroSection";

const index = () => {
  return (
    <>
      <WebDesignHeroSection
        title="Website Design"
        description="Our website design service is about crafting a digital home for your business that stands out, engages visitors, and drives conversions."
        servicesName="Website Design"
        className="webDesign-hero-bg-image"
      />
      <SecondaryNav />
      <WebDeveloperLayout />
      <SolutionClient />
      <CommonBannerLayouttwo />
      <CommonPortfolioGridSection />
      
       {/* <PortfolioSlider /> */}
      {/* not completed checking */}
      <div
        className="checking"
        // style={{
        //   marginTop: "-650px",
        // }}
      >
        <ContextAPI>
          <PricingContent />
        </ContextAPI>
      </div>
      <CommonSolutionBannerLayoutOne />
      <PricingFeatures />
    </>
  );
};

export default index;
