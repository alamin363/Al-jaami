import ContactFrom from "@/components/ContactComponents/ContactFrom";
import ContactHeroSection from "@/components/ContactComponents/ContactHeroSection";
import Location from "@/components/ContactComponents/Location";
import { Loaders } from "@/components/Loader/Loader";
import Header from "@/components/header/Header";


const index = () => {
  return (
    <>

      <ContactHeroSection />
      <Location />
      <ContactFrom />
    </>
  );
};

export default index;
