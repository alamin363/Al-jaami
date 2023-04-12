import Footer from "@/components/footer";
import Header from "@/components/header/Header";
import React from "react";

const MainLayout = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
