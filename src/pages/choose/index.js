import SecondaryNav from "@/components/AboutComponents/SecondaryNav";
import { Loaders } from "@/components/Loader/Loader";
import BannerLayout from "@/components/chooseComponent/BannerLayout";
import Business from "@/components/chooseComponent/Business";
import Easy from "@/components/chooseComponent/Easy";
import Serves from "@/components/chooseComponent/Serves";
import useTitle from "@/components/hooks/useTitle";
import React from "react";

const Index = () => {
  useTitle("Choose us");
  return (
    <>
  
      <Easy />
      <SecondaryNav />
      <Serves />
      <Business />
      <BannerLayout />
    </>
  );
};

export default Index;
