import SecondaryNav from "@/components/AboutComponents/SecondaryNav";
import Awards from "@/components/AwardsComponent/Awards";
import BannerLayout from "@/components/AwardsComponent/BannerLayout";
import HeroSection from "@/components/AwardsComponent/HeroSection";
import { Loaders } from "@/components/Loader/Loader";
import Header from "@/components/header/Header";
import React from "react";

const index = () => {
  return (
    <>
  
      <HeroSection />
      <SecondaryNav />
      <Awards />
      <BannerLayout />
    </>
  );
};

export default index;
