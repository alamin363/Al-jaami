import AboutBannerLayout from "@/components/AboutComponents/AboutBannerLayout";
import SecondaryNav from "@/components/AboutComponents/SecondaryNav";
import BannerLayout from "@/components/chooseComponent/BannerLayout";
import Business from "@/components/chooseComponent/Business";
import Easy from "@/components/chooseComponent/Easy";
import Serves from "@/components/chooseComponent/Serves";
import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const index = () => {
  return (
    <div>
      <Header />
      <Easy />
      <SecondaryNav />
      <Serves />
      <Business />
      <BannerLayout />
      <Footer />
    </div>
  );
};

export default index;