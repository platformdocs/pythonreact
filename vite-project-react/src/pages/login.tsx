// src\pages\login.jsx
import reactLogo from "../assets/react.svg";
import "../assets/css/index.css";
import { Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="p-login">
      <img src={reactLogo} alt="" className="logo" />
      <div className="ipt-con">
        <Input placeholder="账号"></Input>
      </div>
      <div className="ipt-con">
        <Input.Password placeholder="密码"></Input.Password>
      </div>
      <div className="ipt-con">
        <Button
          type="primary"
          block={true}
          onClick={() => {
            navigate("/home");
          }}
        >
          登录
        </Button>
      </div>
    </div>
  );
}

export default Login;
