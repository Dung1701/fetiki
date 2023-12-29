import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="ThongTin">
        {/* Hỗ trợ */}
        <div className="item HoTro">
          <h4>Hỗ trợ khách hàng</h4>
          <ul className="DanhSach">
            <li>
              Hotline:{" "}
              <a href="#!">
                <b>1900-6035</b>
              </a>
              <br /> (1000 đ/phút, 8-21h kể cả T7, CN)
            </li>
            <a href="https://hotro.tiki.vn/s/?_gl=1*1rtr2i0*_ga*Mzc2OTA2OTguMTcwMTc1OTk2MQ..*_ga_S9GLR1RQFJ*MTcwMTc2NTYyMi4yLjEuMTcwMTc2NjE2OS40MS4wLjA.">
              <li>Các câu hỏi thường gặp</li>
            </a>
            <a href="https://tiki.vn/lien-he/gui-yeu-cau">
              <li>Gửi yêu cầu hỗ trợ</li>
            </a>
            <li>Hướng dẫn đặt hàng</li>
            <li>Phương thức vận chuyển</li>
            <li>Chính sách đổi trả</li>
            <li>Hướng dẫn trả góp</li>
            <li>Chính sách hàng nhập khẩu</li>
            <li>Hỗ trợ khách hàng: hotro@tiki.vn</li>
            <li>Báo lỗi bảo mật: security@tiki.vn</li>
          </ul>
        </div>
        {/* Về Tiki*/}
        <div className="item VeTiki">
          <h4>Về Tiki</h4>
          <ul className="DanhSach">
            <li>Giới thiệu Tiki</li>
            <li>Tuyển dụng</li>
            <li>Chính sách bảo mật thanh toán</li>
            <li>Chính sách bảo mật thông tin cá nhân</li>
            <li>Chính sách giải quyết khiếu nại</li>
            <li>Điều khoản sử dụng</li>
            <li>Giới thiệu Tiki Xu</li>
            <li>Tiếp thị liên kết cùng Tiki</li>
            <li>Bán hàng doanh nghiệp</li>
            <li>Điều kiện vận chuyển</li>
          </ul>
        </div>
        {/* Hợp tác*/}
        <div className="item HopTac">
          <h4>Hợp tác và liên kết</h4>
          <ul className="DanhSach">
            <li>Quy chế hoạt động Sàn GDTMĐT</li>
            <li>Bán hàng cùng Tiki</li>
          </ul>
          <h4 className="sub-title">Chứng nhận bởi</h4>
          <div className="chungNhan">
            <a
              href="https://hotro.tiki.vn/s/?_gl=1*1jox2y4*_ga*MTgwODA0MTU0NS4xNzAwNjM2MTQ0*_ga_S9GLR1RQFJ*MTcwMTE1MzYwOS40LjEuMTcwMTE1NDE5OS41Ny4wLjA."
              target="_blank" rel="noreferrer"
            >
              <img
                width={32}
                src="http://online.gov.vn/Home/WebDetails/21193?AspxAutoDetectCookieSupport=1"
                alt="444"
              />
            </a>
            <a
              href="http://online.gov.vn/Home/WebDetails/21193"
              target="_blank" rel="noreferrer"   
            >
              <img
                width={83}
                src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg"
                alt="1111"
              />
              
            </a>
          </div>
        </div>
        {/* Thanh toán*/}
        <div className="item ThanhToan">
          <h4>Phương thức thanh toán</h4>
          <div className="PhuongThuc">
            <img src="img/thanhtoan.png"
            alt="44"
            />
          </div>
          <h4 className="sub-title">Dịch vụ giao hàng</h4>
          <div className="GiaoHang">
            <a href="https://www.tikinow.vn/?src=footer" target="_blank"  rel="noreferrer">
              <img src="img/TikiNow.png"
              alt="55" 
              />
            </a>
          </div>
        </div>
        {/* Kết nối */}
        <div className="item KetNoi">
          <h4>Kết nối với chúng tôi</h4>
          <div className="MangXaHoi">
            <a href="https://www.facebook.com/tiki.vn/" target="_blank" rel="noreferrer">
              <img width="32px" src="img/fb.png"
              alt="222" />
            </a>
            <a href="https://www.youtube.com/user/TikiVBlog" target="_blank" rel="noreferrer">
              <img width="32px" src="img/youtube.png" 
              alt="333"/>
            </a>
            <a href="https://zalo.me/589673439383195103" target="_blank" rel="noreferrer">
              <img width="32px" src="img/zalo.png" 
              alt="000"/>
            </a>
          </div>
          <h4 className="sub-title">Tải ứng dụng trên điện thoại</h4>
          <div className="MangXaHoi">
            <img width="80px" height="80px" src="img/qrcode.png" 
            alt=" 888"/>
            <div className="TaiVe">
              <a
                href="https://apps.apple.com/vn/app/tiki-shopping-fast-shipping/id958100553"
                target="_blank"
                rel="noreferrer"
              >
                <img src="img/appstore.png" width={122} 
                alt="00"/>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=vn.tiki.app.tikiandroid"
                target="_blank"
                rel="noreferrer"
              >
                <img src="img/playstore.png" width={122}
                alt="33" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Địa chỉ */}
      <hr className="VachNgan" />
      <div className="DiaChi">
        <p>
          Trụ sở chính: Tòa nhà Viettel, Số 285, đường Cách Mạng Tháng 8, phường
          12, quận 10, Thành phố Hồ Chí Minh
        </p>
        <p>
          Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và
          nhận hàng trực tiếp tại văn phòng hoặc trung tâm xử lý đơn hàng
        </p>
        <p>
          Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu
          tư Thành phố Hồ Chí Minh cấp lần đầu ngày 06/01/2010 và sửa đổi lần
          thứ 23 ngày 14/02/2022
        </p>
        <p>© 2022 - Bản quyền của Công ty TNHH TiKi</p>
      </div>
    </footer>
  );
};

export default Footer;