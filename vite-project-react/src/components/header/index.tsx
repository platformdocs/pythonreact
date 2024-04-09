// src\components\header\index.jsx
import "../../assets/css/index.css";
import reactLogo from "../../assets/react.svg";
import { NavLink } from "react-router-dom";

function Header(props) {
    // 接收来自父组件的数据
     const { title, info } = props
     info && info()
  return (
    <div className="m-header">
      <img src={reactLogo} alt="" className="logo" />
      网站 Header:{title}
      <span>&nbsp; &gt; &nbsp;</span>
      <NavLink className="list-group-item" to="/home">
        Home
      </NavLink>
      <span>&nbsp; | &nbsp;</span>
      <NavLink className="list-group-item" to="/news">
        News
      </NavLink>
    </div>
  );
}

export default Header;
