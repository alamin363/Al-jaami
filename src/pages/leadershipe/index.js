import SecondaryNav from "@/components/AboutComponents/SecondaryNav";
import Banner from "@/components/LeaderShopeComponents/Banner";
import ContentLeader from "@/components/LeaderShopeComponents/ContentLeader";
import { Loaders } from "@/components/Loader/Loader";
import Footer from "@/components/footer";
import Header from "@/components/header/Header";

const index = () => {
  return (
    <div>
    <Header />
      <Banner />
      <SecondaryNav />
      <ContentLeader />
    </div>
  );
};

export default index;
