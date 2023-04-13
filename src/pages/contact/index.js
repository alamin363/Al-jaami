import ContactFrom from "@/components/ContactComponents/ContactFrom";
import ContactHeroSection from "@/components/ContactComponents/ContactHeroSection";
import Location from "@/components/ContactComponents/Location";
import Header from "@/components/header/Header";


const index = () => {
  return (
    <div>
    <Header />
      <ContactHeroSection />
      <Location />
      <ContactFrom />
    </div>
  );
};

export default index;
