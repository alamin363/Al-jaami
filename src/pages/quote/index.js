import PricingFeatures from "@/components/QuoteComponents/PricingFeatures";
import QuoteAbout from "@/components/QuoteComponents/QuoteAbout";
import QuoteBannerLayout from "@/components/QuoteComponents/QuoteBennerLayout";
import QuoteHeader from "@/components/QuoteComponents/QuoteHeader";
import Footer from "@/components/footer";
import Header from "@/components/header/Header";
import React from "react";

const index = () => {
  return (
    <>
      <Header />
      <QuoteHeader />
      <QuoteAbout />
      <QuoteBannerLayout />
      <PricingFeatures />
      <Footer />
    </>
  );
};

export default index;
