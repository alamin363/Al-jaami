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
import useTitle from "@/components/hooks/useTitle";

export const metadata = {
  title: {
    default: "Al jaami Technology",
    template: "%s | Al jaami Technology",
  },
};
const Home = () => {
  useTitle("");
  return (
    <>
      <Sliders />
      <About />
      <Loaders />
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
