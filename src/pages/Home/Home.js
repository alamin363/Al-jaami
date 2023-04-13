import Sliders from "@/components/slider";
import About from "@/components/about";
import OurServices from "@/components/ourservicess";
import Features from "@/components/Features/Features";
import Banner from "@/components/Banner/Banner";
import MultimediaService from "@/components/multimediaService/MultimediaService";
import BannerLayout from "@/components/bannerLayout/BannerLayout";
import Header from "@/components/header/Header";
import Tab2 from "@/components/Tabs/Tab2";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";
const Home = () => {
  const [pageLoading, setPageLoading] = useState(true);
  useEffect(() => {
    const time = setTimeout(() => {
      setPageLoading(false);
    }, 1000);

    return () => {
      clearTimeout(time);
    };
  }, []);

  return (
    <>
      {pageLoading && <Loader />}
      <Header />
      <Sliders />
      <About />
      <OurServices />
      <Features />
      <Banner />
      <MultimediaService />
      <Tab2 />
      <BannerLayout />
    </>
  );
};

export default Home;
