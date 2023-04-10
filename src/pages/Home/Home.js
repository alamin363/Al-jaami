import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Sliders from "@/components/slider";
import About from "@/components/about";
import OurServices from "@/components/ourservicess";
import Features from "@/components/Features/Features";
import Banner from "@/components/Banner/Banner";
import MultimediaService from "@/components/multimediaService/MultimediaService";
import Technologies from "@/components/Technologies/Technologies";
// import Header from "@/components/header/";
import BannerLayout from "@/components/bannerLayout/BannerLayout";

import Tab2 from "@/components/Tabs/Tab2";
import Tabs from "@/components/Tabs/Tabs";
import Header from "@/components/header/Header";
const Home = () => {
  return (
    <>
      <Header />
      {/* <Navbar /> */}
      <Sliders />
      <About />
      <OurServices />
      <Features />
      <Banner />
      <MultimediaService />
      {/* <Technologies /> */}
      {/* <Tab2 /> */}
      <BannerLayout />
      <Tabs />
      <Footer />
    </>
  );
};

export default Home;
