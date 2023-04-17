import Footer from "@/components/footer";
import Header from "@/components/header/Header";
import React from "react";

export const metadata = {
  title: "Al jaami",
  description: " all",
};
const MainLayout = ({ children }) => {
  return (
    <div className="royal_preloader">
      <div className="wrapper">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
