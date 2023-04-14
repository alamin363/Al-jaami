import { Loaders } from "@/components/Loader/Loader";
import PricingFeatures from "@/components/QuoteComponents/PricingFeatures";
import QuoteAbout from "@/components/QuoteComponents/QuoteAbout";
import QuoteBannerLayout from "@/components/QuoteComponents/QuoteBennerLayout";
import QuoteHeader from "@/components/QuoteComponents/QuoteHeader";
import Header from "@/components/header/Header";

const index = () => {
  return (
    <>
    <Loaders />
    <Header />
      <QuoteHeader />
      <QuoteAbout />
      <QuoteBannerLayout />
      <PricingFeatures />
    </>
  );
};

export default index;
