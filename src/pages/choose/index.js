import SecondaryNav from "@/components/AboutComponents/SecondaryNav";
import BannerLayout from "@/components/chooseComponent/BannerLayout";
import Business from "@/components/chooseComponent/Business";
import Easy from "@/components/chooseComponent/Easy";
import Serves from "@/components/chooseComponent/Serves";
import React from "react";

const index = () => {
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

export default index;
