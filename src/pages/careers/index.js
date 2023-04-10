import History from "@/components/AboutComponents/History";
import SecondaryNav from "@/components/AboutComponents/SecondaryNav";
import Careers from "@/components/CareersComponents/Careers";
import HeroSection from "@/components/CareersComponents/HeroSection";
import Footer from "@/components/footer";
import Header from "@/components/header";

const index = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <SecondaryNav />
      <Careers />
      <History />
      <Footer />
    </div>
  );
};

export default index;
