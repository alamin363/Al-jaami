import Footer from "@/components/footer";
import Header from "@/components/header/Header";
import React from "react";

export const metadata = {
  title: "Al jaami",
  description: " all",
};
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
