import Footer from "@/components/footer";
import Header from "@/components/header/Header";
import React from "react";

export const metadata = {
  title: {
    default: "Al jaami Technology",
    template: "%s | Al jaami Technology",
  },
  description: "",
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
