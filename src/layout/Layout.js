import React from "react";
// import HeaderComponent from "../Components/Header";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Routers from "../router";
import CategoryBar from "../Components/CategoryBar";
export default function Layout() {
  return (
    <>
      <Header />
      {/* <CategoryBar /> */}
      <div>
        <Routers />
      </div>

      <Footer />
      {/* <HeaderComponent /> */}
    </>
  );
}
