import SecondaryNav from "@/components/AboutComponents/SecondaryNav";
import Banner from "@/components/LeaderShopeComponents/Banner";
import ContentLeader from "@/components/LeaderShopeComponents/ContentLeader";
import useTitle from "@/components/hooks/useTitle";

const Index = () => {
  useTitle("Leadership");
  return (
    <>
      <Banner />
      <SecondaryNav />
      <ContentLeader />
    </>
  );
};

export default Index;
