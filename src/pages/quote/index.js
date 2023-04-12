import PricingFeatures from "@/components/QuoteComponents/PricingFeatures";
import QuoteAbout from "@/components/QuoteComponents/QuoteAbout";
import QuoteBannerLayout from "@/components/QuoteComponents/QuoteBennerLayout";
import QuoteHeader from "@/components/QuoteComponents/QuoteHeader";

const index = () => {
  return (
    <>
      <QuoteHeader />
      <QuoteAbout />
      <QuoteBannerLayout />
      <PricingFeatures />
    </>
  );
};

export default index;
