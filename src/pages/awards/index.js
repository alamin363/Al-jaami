import SecondaryNav from "@/components/AboutComponents/SecondaryNav";
import Awards from "@/components/AwardsComponent/Awards";
import BannerLayout from "@/components/AwardsComponent/BannerLayout";
import HeroSection from "@/components/AwardsComponent/HeroSection";
import { Loaders } from "@/components/Loader/Loader";
import Header from "@/components/header/Header";
import useTitle from "@/components/hooks/useTitle";
import React from "react";

const Index = () => {
  useTitle("Awards");
  return (
    <>
      <HeroSection />
      <SecondaryNav />
      <Awards />
      <BannerLayout />
    </>
  );
};

export default Index;
