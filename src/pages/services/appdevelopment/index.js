import AppDevelopMentComponentHeroSection from "@/components/AppDevelopMentComponent/AppDevelopMentComponentHeroSection";
import AppDevelopmentMainCard from "@/components/AppDevelopMentComponent/AppDevelopmentMainCard";
import useTitle from "@/components/hooks/useTitle";
import ContactUs from "@/components/servicesComponent/ContactUs";
import React from "react";

const Index = () => {
  useTitle("App Development");
  return (
    <>
      <AppDevelopMentComponentHeroSection />
      <AppDevelopmentMainCard />
      <ContactUs />
    </>
  );
};

export default Index;
