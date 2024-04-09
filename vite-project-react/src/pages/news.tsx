// src\pages\home.jsx
import { Button } from "antd";
import "../assets/css/index.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
function News() {
  const navigate = useNavigate();
  return (
    <div className="p-home">
      <Header title="news" info={()=>{console.log('info:news')}}/>
      <h1>News Page</h1>
      <div className="ipt-con">
        <Button onClick={() => navigate("/login")}>返回登录</Button>
      </div>
    </div>
  );
}

export default News;
