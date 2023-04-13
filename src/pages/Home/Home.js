import Sliders from "@/components/slider";
import About from "@/components/about";
import OurServices from "@/components/ourservicess";
import Features from "@/components/Features/Features";
import Banner from "@/components/Banner/Banner";
import MultimediaService from "@/components/multimediaService/MultimediaService";
import BannerLayout from "@/components/bannerLayout/BannerLayout";

import Tabs from "@/components/Tabs/Tabs";
import Header from "@/components/header/Header";
const Home = () => {
  return (
    <>
    <Header />
      <Sliders />
      <About />
      <OurServices />
      <Features />
      <Banner />
      <MultimediaService />
      <BannerLayout />
      <Tabs />
    </>
  );
};

export default Home;
