import AboutBannerLayout from "@/components/AboutComponents/AboutBannerLayout";
import AboutLayout from "@/components/AboutComponents/AboutLayout";
import Challenge from "@/components/AboutComponents/Challange";
import History from "@/components/AboutComponents/History";
import SecondaryNav from "@/components/AboutComponents/SecondaryNav";
import Testimonials from "@/components/AboutComponents/Testimonials";
import useTitle from "@/components/hooks/useTitle";

export const metadata = {
  title: "About"
};
const About = () => {
  useTitle("About");
  return (
    <>
      <Challenge />
      <SecondaryNav />
      <AboutLayout />
      <History />
      <Testimonials />
      <AboutBannerLayout />
    </>
  );
};

export default About;
