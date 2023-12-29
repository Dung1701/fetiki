import React, { useState } from "react";
import HeaderComponent from "../Components/Header";
import BodyComponent from "../Components/Body";
import FooterComponent from "../Components/Footer";
import BannerComponent from "../Components/Banner";
import CategoryComponent from "../Components/Category";
import CategoryBar from "../Components/CategoryBar";
// import {
//   UserOutlined,
//   EyeInvisibleOutlined,
//   EyeTwoTone,
// } from "@ant-design/icons";
import { message } from "antd";
import axios from "axios";
// import md5 from "md5";
const LoginURL = "https://tiki.loca.lt/api/v1/auth/login";

// const userData = {
//   userName: "dung",
//   passWord: "123",
// };
  

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUsername] = useState("");
  const [passWord, setPassword] = useState("");
  console.log(userName);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    //login
    // if (userName === "admin" && passWord === "123456") {
    //   message.success("Chúc Mừng Đăng nhập thành công", 1.0);
    // } else {
    //   message.error("lêu Lêu Đăng nhập thất bại", 2.0);
    // }
    // setIsModalOpen(false);
    console.log(userName, passWord);
    try {
      const body = {
        username: userName,
        password: passWord,
      };
      const res = await axios.post(LoginURL, body);
      console.log(res);
      if (res) {
        message.success("Đăng nhập thành công", 2.0);
        localStorage.setItem(
          "userInfo",
          JSON.stringify(res?.data?.results["object"])
        );
        setIsModalOpen(false);
      } else {
        message.error("Đăng nhập thất bại", 2.0);
      }
    } catch (error) {}
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSignUp = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {/* Phần Header */}

  {/* isModalOpen={showModal} */}
      <CategoryBar />

      {/* Phần banner */}
      <BannerComponent />

      {/* Phần Main */}
      <BodyComponent />

      {/* phần danh mục */}
      <CategoryComponent />

      {/* Phần Footer */}
      {/* <FooterComponent /> */}

      {/* <Modal
        okText="Đăng nhập"
        cancelText="Hủy"
        title="Đăng nhập"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          placeholder="Tài Khoản"
          prefix={<UserOutlined />}
        />

        <div style={{ margin: "25px 0" }}></div>

        <Space style={{ width: "100%" }} direction="vertical">
          <Input.Password
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            placeholder="Mật Khẩu"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Space>
      </Modal> */}
    </>
  );
};

export default Home;