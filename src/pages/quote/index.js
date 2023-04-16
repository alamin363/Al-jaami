import { Loaders } from "@/components/Loader/Loader";
import PricingFeatures from "@/components/QuoteComponents/PricingFeatures";
import QuoteAbout from "@/components/QuoteComponents/QuoteAbout";
import QuoteBannerLayout from "@/components/QuoteComponents/QuoteBennerLayout";
import QuoteHeader from "@/components/QuoteComponents/QuoteHeader";
import BannerLayout from "@/components/bannerLayout/BannerLayout";
import Header from "@/components/header/Header";

const index = () => {
  return (
    <>
    <Header />
      <QuoteHeader />
      <QuoteAbout />
      {/* <QuoteBannerLayout /> */}
      <BannerLayout />
      <PricingFeatures />
    </>
  );
};

export default index;
