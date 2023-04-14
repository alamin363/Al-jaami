import AppDevelopMentComponentHeroSection from "@/components/AppDevelopMentComponent/AppDevelopMentComponentHeroSection";
import AppDevelopmentMainCard from "@/components/AppDevelopMentComponent/AppDevelopmentMainCard";
import { Loaders } from "@/components/Loader/Loader";
import Footer from "@/components/footer";
import Header from "@/components/header/Header";
import ContactUs from "@/components/servicesComponent/ContactUs";
import React from "react";

const index = () => {
  return (
    <div>
      <Header />
      <AppDevelopMentComponentHeroSection />
      <AppDevelopmentMainCard />
      <ContactUs />
    </div>
  );
};

export default index;
