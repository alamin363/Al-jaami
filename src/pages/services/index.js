import MyMainServices from "@/components/MainServicesComponents/MyMainServices";
import MyServices from "@/components/MainServicesComponents/MyServices";
import HeroSection from "@/components/MainServicesComponents/HeroSection";
import CompletedProject from "@/components/MainServicesComponents/CompletedProject";

const Services = () => {
  return (
    <div>
      <HeroSection />
      <MyMainServices />
      <MyServices />
      <CompletedProject />
    </div>
  );
};

export default Services;
