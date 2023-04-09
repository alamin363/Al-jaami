// import "@/styles/Home.module.css";
import Header from "@/components/header/Header";
import Home from "./Home/Home";
import About from "./aboutus";
import { Layout } from "@/Layout/Layout";

export default function index() {
  return (
    <Layout>
      <Home />
      <About />
      
    </Layout>
  );
}
