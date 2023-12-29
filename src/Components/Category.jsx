import React from "react";

function CategoryComponent() {
  const arrayItem2 = [
    {
      nameItem: "Thời Trang Nam",
      image: "img/ao.png",
    },
    {
      nameItem: "Điện Thoại & Phụ Kiện",
      image: "img/dt.png",
    },
    {
      nameItem: "Thiết Bị Điện Tử",
      image: "img/tv.png",
    },
    {
      nameItem: "Máy Tính & laptop",
      image: "img/laptop.png",
    },
    {
      nameItem: "Máy Ảnh & Máy Quay Phim",
      image: "img/may-anh.png",
    },
    {
      nameItem: "Đồng Hồ",
      image: "img/clock.png",
    },
    {
      nameItem: "Giày Dép Nam",
      image: "img/giay.png",
    },
    {
      nameItem: "Thiết Bị Điện Gia Dụng",
      image: "img/am-nuoc.png",
    },
    {
      nameItem: "Thể Thao & Du Lịch",
      image: "img/ball.png",
    },
    {
      nameItem: "Ô Tô & Xe Máy & Xe Đạp",
      image: "img/xe-may.png",
    },
    {
      nameItem: "Thời Trang Nữ",
      image: "img/ao-nu.png",
    },
    {
      nameItem: "Mẹ & Bé",
      image: "img/nôi.png",
    },
    {
      nameItem: "Nhà Cửa & Đời Sống",
      image: "img/nồi.png",
    },
    {
      nameItem: "Sắc Đẹp",
      image: "img/son-phấn.png",
    },
    {
      nameItem: "Sức Khỏe",
      image: "img/sức-khỏe.png",
    },
    {
      nameItem: "Giày dép Nữ",
      image: "img/giày-nữ.png",
    },
    {
      nameItem: "Túi Ví Nữ",
      image: "img/túi-nữ.png",
    },
    {
      nameItem: "Phụ Kiện & Trang Sức Nữ",
      image: "img/trang-sức.png",
    },
    {
      nameItem: "Bách Hóa Online",
      image: "img/bách hóa.png",
    },
    {
      nameItem: "Nhà Sách Online",
      image: "img/nhà sách.png",
    },
  ];

  const Category = () => {
    return (
      <div className="category-container">
        <div className="category">
          <div className="category-main">
            <h2 className="title">Danh Mục</h2>
            {/* phần item */}
            <div className="menu">
              {arrayItem2.map((item1, i) => (
                <div className="menu-item active" key={i}>
                  <img src={item1.image} alt="Tiki" />
                  <div className="tab-text">{item1.nameItem}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <Category/>;
}

export default CategoryComponent;