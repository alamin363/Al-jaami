import History from "@/components/AboutComponents/History";
import SecondaryNav from "@/components/AboutComponents/SecondaryNav";
import Careers from "@/components/CareersComponents/Careers";
import HeroSection from "@/components/CareersComponents/HeroSection";
import { Loaders } from "@/components/Loader/Loader";
import Header from "@/components/header/Header";
import useTitle from "@/components/hooks/useTitle";

const Index = () => {
  useTitle("Careers");
  return (
    <>
  
      <HeroSection />
      <SecondaryNav />
      <Careers />
      <History />
    </>
  );
};

export default Index;
