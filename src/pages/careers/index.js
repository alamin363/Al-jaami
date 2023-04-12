import History from "@/components/AboutComponents/History";
import SecondaryNav from "@/components/AboutComponents/SecondaryNav";
import Careers from "@/components/CareersComponents/Careers";
import HeroSection from "@/components/CareersComponents/HeroSection";

const index = () => {
  return (
    <>
      <HeroSection />
      <SecondaryNav />
      <Careers />
      <History />
    </>
  );
};

export default index;
