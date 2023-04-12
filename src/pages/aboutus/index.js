import AboutBannerLayout from "@/components/AboutComponents/AboutBannerLayout";
import AboutLayout from "@/components/AboutComponents/AboutLayout";
import Challenge from "@/components/AboutComponents/Challange";
import History from "@/components/AboutComponents/History";
import SecondaryNav from "@/components/AboutComponents/SecondaryNav";
import Testimonials from "@/components/AboutComponents/Testimonials";
const About = () => {
  return (
    <div>
      <Challenge />
      <SecondaryNav />
      <AboutLayout />
      <History />
      <Testimonials />
      <AboutBannerLayout />
    </div>
  );
};

export default About;
