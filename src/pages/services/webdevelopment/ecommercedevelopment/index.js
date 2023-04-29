import SecondaryNav from "@/components/AboutComponents/SecondaryNav";
import ContextAPI from "@/components/ContextAPI/ContextAPI";
import PricingFeatures from "@/components/QuoteComponents/PricingFeatures";
import useTitle from "@/components/hooks/useTitle";
import CommonSecondaryNav from "@/components/servicesComponent/CommonSecendaryNav/CommonSecendaryNav";
import CommonBannerLayouttwo from "@/components/servicesComponent/WebsiteDeveloperCommonComponents/CommonBannerLayouttwo";
import CommonPortfolioGridSection from "@/components/servicesComponent/WebsiteDeveloperCommonComponents/CommonPortfolioGridSection";
import CommonSolutionBannerLayoutOne from "@/components/servicesComponent/WebsiteDeveloperCommonComponents/CommonSolutionBannerLayoutOne";
import PricingContent from "@/components/servicesComponent/WebsiteDeveloperCommonComponents/PricingContent";
import SolutionClient from "@/components/servicesComponent/WebsiteDeveloperCommonComponents/SolutionClient";
import WebDeveloperLayout from "@/components/servicesComponent/WebsiteDeveloperCommonComponents/SolutionsLayoutThree";
import { WebDesignHeroSection } from "@/components/servicesComponent/WebsiteDeveloperCommonComponents/WebDesignHeroSection";
import { useRef } from "react";

const Index = () => {
  const OurTeamRef = useRef(null);
  const serviceRef = useRef(null);
  const StudiesRef = useRef(null);
  const PricingRef = useRef(null);
  const FutureRef = useRef(null);
  const QuestionsRef = useRef(null);
  let value = {
    webDeveloper: true,
    graphicDesign: false,
    contentWriting: false,
  };
  useTitle("Ecommerce Development");
  return (
    <>
      <WebDesignHeroSection
        title="Ecommerce Development"
        description="Our website design service is about crafting a digital home for your business that stands out, engages visitors, and drives conversions."
        servicesName="Website Design"
        className="webDesign-hero-bg-image"
      />
      <CommonSecondaryNav
        OurTeamRef={OurTeamRef}
        serviceRef={serviceRef}
        StudiesRef={StudiesRef}
        PricingRef={PricingRef}
        FutureRef={FutureRef}
        QuestionsRef={QuestionsRef}
      />
      <WebDeveloperLayout value={value} OurTeamRef={OurTeamRef} />
      <SolutionClient />
      <CommonBannerLayouttwo serviceRef={serviceRef} />
      <CommonPortfolioGridSection StudiesRef={StudiesRef} />
      {/* not completed checking */}
      <div className="checking">
        <ContextAPI>
          <PricingContent PricingRef={PricingRef} />
        </ContextAPI>
      </div>
      <CommonSolutionBannerLayoutOne FutureRef={FutureRef} />
      <PricingFeatures QuestionsRef={QuestionsRef} />
    </>
  );
};

export default Index;
