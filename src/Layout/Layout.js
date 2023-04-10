import Footer from "@/components/footer";
import Header from "@/components/header/Header";
import React from "react";

export const Layout = ({ children }) => {
  return (
    <div className="container-fluid w-100 mr-auto">
      <main>{children}</main>
    </div>
  );
};
