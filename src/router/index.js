import Home from "../Pages/Home";

import "../App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductPage from "../Pages/ProductPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Diengiadung from "../Components/Categories/Diengiadung";
import Dochoimebe from "../Components/Categories/Dochoimebe";
import Dienthoaimaytinhbang from "../Components/Categories/Dienthoaimaytinhbang";
import Lamdepsuckhoe from "../Components/Categories/Lamdepsuckhoe";
import Balovali from "../Components/Categories/Balovali";
import Laptop from "../Components/Categories/Laptop";
import Trangsuc from "../Components/Categories/Trangsuc";
import Dientudienlanh from "../Components/Categories/Dientudienlanh";
import Mayquay from "../Components/Categories/Mayquay";
import Thoitrangnu from "../Components/Categories/Thoitrangnu";
import Thoitrangnam from "../Components/Categories/Thoitrangnam";
import Nhasach from "../Components/Categories/Nhasach";
function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-page" element={<ProductPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Categories/Dochoimebe" element={<Dochoimebe />} />
      <Route path="/Categories/Diengiadung" element={<Diengiadung />} />
      <Route
        path="/Categories/Dienthoaimaytinhbang"
        element={<Dienthoaimaytinhbang />}
      />
      <Route path="/Categories/Lamdepsuckhoe" element={<Lamdepsuckhoe />} />
      <Route path="/Categories/Balovali" element={<Balovali />} />
      <Route path="/Categories/Laptop" element={<Laptop />} />
      <Route path="/Categories/Trangsuc" element={<Trangsuc />} />
      <Route path="/Categories/Dientudienlanh" element={<Dientudienlanh />} />
      <Route path="/Categories/Mayquay" element={<Mayquay />} />
      <Route path="/Categories/Thoitrangnu" element={<Thoitrangnu />} />
      <Route path="/Categories/Thoitrangnam" element={<Thoitrangnam />} />
      <Route path="/Categories/Nhasach" element={<Nhasach />} />
    </Routes>
  );
}
export default Routers;
