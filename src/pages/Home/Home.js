import Sliders from "@/components/slider";
import About from "@/components/about";
import OurServices from "@/components/ourservicess";
import Features from "@/components/Features/Features";
import Banner from "@/components/Banner/Banner";
import MultimediaService from "@/components/multimediaService/MultimediaService";
import BannerLayout from "@/components/bannerLayout/BannerLayout";
import Header from "@/components/header/Header";
import Tab2 from "@/components/Tabs/Tab2";
import { Loaders } from "@/components/Loader/Loader";
import RoyalLoader from "@/components/Loader/RoyalLoader";
const Home = () => {
  return (
    <>
      <Loaders />
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
