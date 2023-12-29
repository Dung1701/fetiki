import "../Register.css";
import React, { useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import md5 from "md5";
import bcrypt from "bcryptjs";
const RegisterURL = "https://tiki.loca.lt/api/v1/auth/register";

function Register() {
  const [fullName, setFullname] = useState("");
  const [userName, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passWord, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (passWord !== confirmPassword) {
  //     message.error("hai mật khẩu không giống nhau mời nhập lại");
  //     return;
  //   }

  //   try {
  //     const response = await axios.post(RegisterURL, {
  //       fullname: fullName,
  //       username: userName,
  //       email: Email,
  //       phonenumber: phoneNumber,
  //       password: md5(passWord), // Encrypting the password
  //     });
  //     console.log(response);
  //     message.success("Tạo tài khoản thành công");
  //     navigate("/login"); // Redirect to login page after successful registration
  //   } catch (error) {
  //     message.error("An error occurred during registration");
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passWord !== confirmPassword) {
      message.error("Hai mật khẩu không giống nhau, mời nhập lại");
      return;
    }

    try {
      // Sử dụng bcryptjs để hash mật khẩu trước khi gửi lên server
      const hashedPassword = bcrypt.hashSync(passWord, 10);

      const response = await axios.post(RegisterURL, {
        fullname: fullName,
        username: userName,
        email: Email,
        phonenumber: phoneNumber,
        password: hashedPassword,
        
      });
      console.log(response);
      message.success("Tạo tài khoản thành công");
      navigate("/login"); // Chuyển hướng đến trang đăng nhập sau khi đăng ký thành công
    } catch (error) {
      message.error("Đã xảy ra lỗi trong quá trình đăng ký");
    }
  };
  return (
    <div className="body1">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Registration</h1>

          <div className="input-box">
            <div className="input-field">
              <input
                type="text"
                placeholder="Full Name"
                onChange={(e) => setFullname(e.target.value)}
              />
              <i className="bx bxs-user" />
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <i className="bx bxs-user" />
            </div>
          </div>

          <div className="input-box">
            <div className="input-field">
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <i className="bx bxs-envelope" />
            </div>
            <div className="input-field">
              <input
                type="number"
                placeholder="Phone Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <i className="bx bxs-phone" />
            </div>
          </div>

          <div className="input-box">
            <div className="input-field">
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="bx bxs-lock-alt" />
            </div>
            <div className="input-field">
              <input
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <i className="bx bxs-lock-alt" />
            </div>
          </div>

          <label>
            <input type="checkbox" />I hereby declare that the above
            informationprovided is true and correct
          </label>

          <button type="submit" className="btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
export default Register;