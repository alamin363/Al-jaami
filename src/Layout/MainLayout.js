import Footer from "@/components/footer";
import Header from "@/components/header/Header";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div class="royal_preloader">
      <div class="wrapper">

        {children}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
