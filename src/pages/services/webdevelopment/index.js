import HeroSection from "@/components/servicesComponent/HeroSection";
import CommonServices from "@/components/servicesComponent/CommonServices";
import ContactUs from "@/components/servicesComponent/ContactUs";
import Header from "@/components/header/Header";
const WebDevelopment = () => {
  let value = {
    webDeveloper: true,
    graphicDesign: false,
    contentWriting: false,
  };
  return (
    <div>
      <Header />
      <HeroSection />
      <CommonServices value={value}/>
      <ContactUs />
    </div>
  );
};

export default WebDevelopment;
