import React from "react";
import Navbar from "../compoment/navbar";
import Footer from "../compoment/footer";

function defautLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default defautLayout;
