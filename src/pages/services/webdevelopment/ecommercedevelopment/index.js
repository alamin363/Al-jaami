import SecondaryNav from "@/components/AboutComponents/SecondaryNav";
import ContextAPI from "@/components/ContextAPI/ContextAPI";
import PricingFeatures from "@/components/QuoteComponents/PricingFeatures";
import CommonBannerLayouttwo from "@/components/servicesComponent/WebsiteDeveloperCommonComponents/CommonBannerLayouttwo";
import CommonPortfolioGridSection from "@/components/servicesComponent/WebsiteDeveloperCommonComponents/CommonPortfolioGridSection";
import CommonSolutionBannerLayoutOne from "@/components/servicesComponent/WebsiteDeveloperCommonComponents/CommonSolutionBannerLayoutOne";
import PricingContent from "@/components/servicesComponent/WebsiteDeveloperCommonComponents/PricingContent";
import SolutionClient from "@/components/servicesComponent/WebsiteDeveloperCommonComponents/SolutionClient";
import WebDeveloperLayout from "@/components/servicesComponent/WebsiteDeveloperCommonComponents/SolutionsLayoutThree";
import { WebDesignHeroSection } from "@/components/servicesComponent/WebsiteDeveloperCommonComponents/WebDesignHeroSection";

const index = () => {
  return (
    <>
      <WebDesignHeroSection
        title="Ecommerce Development"
        description="Our website design service is about crafting a digital home for your business that stands out, engages visitors, and drives conversions."
        servicesName="Website Design"
        className="webDesign-hero-bg-image"
      />
      <SecondaryNav />
      <WebDeveloperLayout />
      <SolutionClient />
      <CommonBannerLayouttwo />
      <CommonPortfolioGridSection />
      {/* not completed checking */}
      <div
        className="checking"
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
