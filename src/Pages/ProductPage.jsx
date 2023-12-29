import React from "react";
import HeaderComponent from "../Components/Header";
import MainView from "../Components/product-page/MainView";
import Sidebar from "../Components/product-page/SideBar";
const ProductPage = () => {
  return (
    <div>
      {/* <HeaderComponent> */}
      <div className="productPageBody">
        <Sidebar />
        <MainView />
      </div>
      {/* </HeaderComponent> */}
    </div>
  );
};

export default ProductPage;