import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <div className="sidebarContainer">
        {/* Danh mục sản phẩm */}
        <div className="block">
          <h4>DANH MỤC SẢN PHẨM</h4>
          <div className="sidebarCategories">
            <Link to="#">Thiết Bị Âm Thanh và Phụ Kiên</Link>
            <Link to="#">Thiết Bị Chơi Game và Phụ Kiện</Link>
            <Link to="#">Thiết Bị Đeo Thông Minh và Phụ Kiện</Link>
            <Link to="#">Thiết Bị Thông Minh và Linh Kiện Điện</Link>
            <Link to="#">Phụ Kiện Điện Thoại và Máy Tính Bản</Link>
            <Link to="#">Phụ Kiện Máy Tinh và Laptop</Link>
          </div>
        </div>
        {/* Nơi bán */}
        <div
          className="block"
          style={{ borderTop: "1px solid rgb(247, 247, 247)" }}
        >
          <h4>Nơi bán</h4>
          <div className="sidebarLocation">
            <label>
              <input type="checkbox" />
              <div>Ho Chí Minh</div>
            </label>
            <label>
              <input type="checkbox" />
              <div>Hà Nội</div>
            </label>
            <label>
              <input type="checkbox" />
              <div>Ninh Bình</div>
            </label>
            <label>
              <input type="checkbox" />
              <div>Đà Nẵng</div>
            </label>
            <label>
              <input type="checkbox" />
              <div>Đồng Nai</div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;