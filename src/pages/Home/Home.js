import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Sliders from "@/components/slider";
import About from "@/components/about";
import OurServices from "@/components/ourservicess";
import Features from "@/components/Features/Features";
import Banner from "@/components/Banner/Banner";
import MultimediaService from "@/components/multimediaService/MultimediaService";
const Home = () => {
  return (
    <>
      <Navbar />
      <Sliders />
      <About />
      <OurServices />
      <Features />
      <Banner />
      <MultimediaService />
      <Footer />
    </>
  )
}

export default Home