import "../Login.css";
import React, { useState } from "react";
import { message } from "antd";
import axios from "axios";
// import md5 from "md5";
import bcrypt from "bcryptjs"; 
import { useNavigate } from "react-router-dom";
const LoginURL = "https://tiki.loca.lt/api/v1/auth/login";

function Login() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUsername] = useState("");
  const [passWord, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const body = {
      username: userName,
      password: passWord,
    };
  
    const res = axios
 
      .post(LoginURL, body, {})
      .then((res) => {
        message.success("Đăng nhập thành công", 2.0);
        localStorage.setItem(
          "userInfo",
          JSON.stringify(res?.data?.results["object"])
        );
        // setIsModalOpen(false);
        navigate("/");
      })
      .catch((error) => {
        message.error("Thông tin tài khoản mật khẩu không chính xác", 2.0);
      });
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     // Sử dụng bcryptjs để hash mật khẩu trước khi gửi lên server
  //     const hashedPassword = await bcrypt.hash(passWord, 10);

  //     const body = {
  //       username: userName,
  //       password: hashedPassword,
  //     };

  //     const res = await axios.post(LoginURL, body, {});
      
  //     message.success("Đăng nhập thành công", 2.0);
  //     localStorage.setItem(
  //       "userInfo",
  //       JSON.stringify(res?.data?.results["object"])
  //     );
  //     navigate("/");
  //   } catch (error) {
  //     message.error("Thông tin tài khoản mật khẩu không chính xác", 2.0);
  //   }
  // };
  
  return (
    <div className="body">
      <div className="cotainer">
        <form name="loginForm" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              name="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder="Username"
              required={true}
            />
            <i className="bx bxs-user" />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              required={true}
            />
            <i className="bx bxs-lock-alt" />
          </div>
          <div className="remember-fogot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit" className="btn" name="submit" value="Submit">
            Login
          </button>
          <div className="register-link">
            <p>
              Don't have an account?{" "}
              <a href="http://localhost:3000/register">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;

// import "../Login.css";
// import React, { useState } from "react";
// import { message } from "antd";
// import bcrypt from "bcryptjs";  // Import thư viện bcryptjs
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const LoginURL = "https://tiki.loca.lt/api/v1/auth/login";

// function Login() {
//   const [userName, setUsername] = useState("");
//   const [passWord, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       // Sử dụng bcryptjs để hash mật khẩu trước khi gửi lên server
//       const hashedPassword = bcrypt.hashSync(passWord, 10);

//       const body = {
//         username: userName,
//         password: hashedPassword,
//       };

//       const res = await axios.post(LoginURL, body, {});

//       message.success("Đăng nhập thành công", 2.0);
//       localStorage.setItem(
//         "userInfo",
//         JSON.stringify(res?.data?.results["object"])
//       );
//       navigate("/");
//     } catch (error) {
//       message.error("Thông tin tài khoản mật khẩu không chính xác", 2.0);
//     }
//   };

//   return (
//     <div className="body">
//       <div className="cotainer">
//         <form name="loginForm" onSubmit={handleSubmit}>
//           <h1>Login</h1>
//           <div className="input-box">
//             <input
//               type="text"
//               name="username"
//               onChange={(e) => {
//                 setUsername(e.target.value);
//               }}
//               placeholder="Username"
//               required={true}
//             />
//             <i className="bx bxs-user" />
//           </div>
//           <div className="input-box">
//             <input
//               type="password"
//               name="password"
//               onChange={(e) => {
//                 setPassword(e.target.value);
//               }}
//               placeholder="Password"
//               required={true}
//             />
//             <i className="bx bxs-lock-alt" />
//           </div>
//           <div className="remember-fogot">
//             <label>
//               <input type="checkbox" />
//               Remember me
//             </label>
//             <a href="#">Forgot password?</a>
//           </div>
//           <button type="submit" className="btn" name="submit" value="Submit">
//             Login
//           </button>
//           <div className="register-link">
//             <p>
//               Don't have an account?{" "}
//               <a href="http://localhost:3000/register">Register</a>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
