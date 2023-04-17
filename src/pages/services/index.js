import MyMainServices from "@/components/MainServicesComponents/MyMainServices";
import MyServices from "@/components/MainServicesComponents/MyServices";
import HeroSection from "@/components/MainServicesComponents/HeroSection";
import CompletedProject from "@/components/MainServicesComponents/CompletedProject";
import Header from "@/components/header/Header";
import EmployeesTraining from "@/components/MainServicesComponents/employeesTraining";

const Services = () => {
  return (
    <>
  
      <HeroSection />
      <MyMainServices />
      <MyServices />
      <EmployeesTraining />
      <CompletedProject />
    </>
  );
};

export default Services;
