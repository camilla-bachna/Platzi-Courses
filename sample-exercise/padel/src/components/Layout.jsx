import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../assets/styles/layout/_layout.scss";

const Layout = ({ children }) => (
  <div className="global">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
