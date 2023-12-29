import React from "react";

const Banner = () => {
  return (
    <div className="banner-container">
      {/* Phần Bên Trái */}
      <div className="banner-left">
        <img
          src="https://i.pinimg.com/originals/9b/dc/dc/9bdcdc85fe2185425d1f8c2a9ed19073.png"
          alt="Main Banner"
        />
      </div>

      {/* Phần Bên Phải */}
      <div className="banner-right">
        <img src="img/banner1.jpg" alt="Sub Banner" />
      </div>
    </div>
  );
};

export default Banner;