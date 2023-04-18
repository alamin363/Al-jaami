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
        title="Web Application"
        description="Your brand is more than just a logo or a catchy slogan. It's an identity representing your business, values, and personality."
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
        style={{
          marginTop: "-650px",
        }}
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
