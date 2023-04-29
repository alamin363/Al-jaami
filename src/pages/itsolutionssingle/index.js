import PricingFeatures from "@/components/QuoteComponents/PricingFeatures";
import Business from "@/components/chooseComponent/Business";
import useTitle from "@/components/hooks/useTitle";
import ItSecondaryNav from "@/components/itsolutionssingleComponents/ItSecondaryNav";
import ItsolutionsSingleHeroSection from "@/components/itsolutionssingleComponents/ItsolutionsSingleHeroSection";
import OurTrustedClients from "@/components/itsolutionssingleComponents/OurTrustedClients";
import Overview from "@/components/itsolutionssingleComponents/Overview";
import CommonSolutionBannerLayoutOne from "@/components/servicesComponent/WebsiteDeveloperCommonComponents/CommonSolutionBannerLayoutOne";
import React, { useRef } from "react";

const Index = () => {
  const OverviewRef = useRef(null);
  const WorksRef = useRef(null);
  const QuoteRef = useRef(null);
  useTitle("It Solution");
  return (
    <>
      <ItsolutionsSingleHeroSection />
      <ItSecondaryNav
        OverviewRef={OverviewRef}
        WorksRef={WorksRef}
        QuoteRef={QuoteRef}
      />
      <Overview OverviewRef={OverviewRef} />
      <OurTrustedClients />
      <Business WorksRef={WorksRef} />
      <CommonSolutionBannerLayoutOne Ref={QuoteRef} />
      <PricingFeatures />
    </>
  );
};

export default Index;
