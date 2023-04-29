import MyMainServices from "@/components/MainServicesComponents/MyMainServices";
import MyServices from "@/components/MainServicesComponents/MyServices";
import HeroSection from "@/components/MainServicesComponents/HeroSection";
import CompletedProject from "@/components/MainServicesComponents/CompletedProject";
import EmployeesTraining from "@/components/MainServicesComponents/employeesTraining";
import useTitle from "@/components/hooks/useTitle";

const Services = () => {
  useTitle("services");
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
