import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// mock data danh mục sản phẩm
const categories = [
  { url: "/Categories/Dochoimebe", title: "Đồ chơi - Mẹ & Bé" },
  { url: "/Categories/Diengiadung", title: "Điện Gia Dụng" },
  { url: "/Categories/Dienthoaimaytinhbang", title: "Điện Thoại - Máy Tính Bảng" },
  { url: "/Categories/Lamdepsuckhoe", title: "Làm đẹp - Sức khỏe" },
  { url: "/Categories/Balovali", title: "Balo và Vali" },
  { url: "/Categories/Laptop", title: "Laptop - Máy vi tinh - Linh kiện" },
  { url: "/Categories/Trangsuc", title: "Đồng hồ - Trang Sức" },
  { url: "/Categories/Dientudienlanh", title: "Điện tử - Điện lạnh" },
  { url: "/Categories/Mayquay", title: "Máy Ảnh - Máy Quay Phim" },
  { url: "/Categories/Thoitrangnu", title: "Thời Trang nữ" },
  { url: "/Categories/Thoitrangnam", title: "Thời Trang nam" },
  { url: "/Categories/Nhasach", title: "Nhà Sách Tiki" },
];


const CategoryBar = () => {
  
  return (
    <div className="categoryBarContainer">
      <div className="categoryBarContent">
        {categories.map((category) => (
          <Link to={category.url} className="item">
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;