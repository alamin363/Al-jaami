import { Loaders } from "@/components/Loader/Loader";
import PricingFeatures from "@/components/QuoteComponents/PricingFeatures";
import QuoteAbout from "@/components/QuoteComponents/QuoteAbout";
import QuoteHeader from "@/components/QuoteComponents/QuoteHeader";
import BannerLayout from "@/components/bannerLayout/BannerLayout";
import useTitle from "@/components/hooks/useTitle";
const Index = () => {
  useTitle("Quote");
  return (
    <>
      <QuoteHeader />
      <QuoteAbout />
      {/* <QuoteBannerLayout /> */}
      <BannerLayout />
      <PricingFeatures />
    </>
  );
};

export default Index;
