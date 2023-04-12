import HeroSection from "@/components/servicesComponent/HeroSection";
import CommonServices from "@/components/servicesComponent/CommonServices";
import ContactUs from "@/components/servicesComponent/ContactUs";
import Header from "@/components/header/Header";
import Footer from "@/components/footer";
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
      <Footer />
    </div>
  );
};

export default WebDevelopment;
