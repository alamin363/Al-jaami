import ContactFrom from "@/components/ContactComponents/ContactFrom";
import ContactHeroSection from "@/components/ContactComponents/ContactHeroSection";
import Location from "@/components/ContactComponents/Location";
import useTitle from "@/components/hooks/useTitle";
const Index = () => {
  useTitle("contact");
  return (
    <>
      <ContactHeroSection />
      <Location />
      <ContactFrom />
    </>
  );
};

export default Index;
