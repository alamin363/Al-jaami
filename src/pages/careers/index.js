import History from "@/components/AboutComponents/History";
import SecondaryNav from "@/components/AboutComponents/SecondaryNav";
import Careers from "@/components/CareersComponents/Careers";
import HeroSection from "@/components/CareersComponents/HeroSection";
import Header from "@/components/header/Header";

const index = () => {
  return (
    <>
    <Header />
      <HeroSection />
      <SecondaryNav />
      <Careers />
      <History />
    </>
  );
};

export default index;
