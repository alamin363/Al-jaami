import MyMainServices from "@/components/MainServicesComponents/MyMainServices";
import Footer from "@/components/footer";
import Header from "@/components/header/Header";
import CommonServices from "@/components/servicesComponent/CommonServices";
import ContactUs from "@/components/servicesComponent/ContactUs";
import MyServices from "@/components/MainServicesComponents/MyServices";
import HeroSection from "@/components/MainServicesComponents/HeroSection";
import CompletedProject from "@/components/MainServicesComponents/CompletedProject";

const Services = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <MyMainServices />
      <MyServices />
      <CompletedProject />
      <Footer />
    </div>
  );
};

export default Services;
