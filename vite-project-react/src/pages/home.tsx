// src\pages\home.jsx
import { Button } from "antd";
import "../assets/css/index.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header";

import { Component } from "react";
import { UpdateAppToken } from "../store/action";
import { connect } from "react-redux";

import React, { useState, useEffect } from "react";
import request from "../utils/request";

// function Home() {
//   const navigate = useNavigate();
//   return (
//     <div className="p-home">
//       <Header title="news" info={()=>{console.log('info:news')}}/>
//       <h1>Home Page</h1>
//       <div className="ipt-con">
//         <Button onClick={() => navigate("/login")}>返回登录</Button>
//       </div>
//     </div>
//   );
// }

// export default Home;

// 在类组件中使用redux
// class NewsInClass extends Component {
//     render() {
//       console.log("props:", this.props);
//       return (
//         <div className="p-home">
//           <Header
//             title="NewsInClass"
//             info={() => {
//               console.log("info:NewsInClass");
//             }}
//           ></Header>
//           <h1>NewsInClass Page</h1>
//           <div className="ipt-con">
//             <Link to={`/login`}>
//               <Button>返回登录</Button>
//             </Link>
//           </div>
//           <div>
//             <button
//               onClick={() =>
//                 this.props.UpdateAppToken("user-token-from-class-001")
//               }
//             >
//               设置token
//             </button>
//             <button onClick={() => this.props.UpdateAppToken("")}>
//               清空token
//             </button>
  
//             <div>token值：{this.props.appToken}</div>
//           </div>
//         </div>
//       );
//     }
//   }
  
//   // 没使用store 的时候导出
//   // export default NewsInClass;
  
//   /*connect 有两个参数，
//   第一个是mapStateToProps 函数，返回是一个对象, 其实就是  store/reducer.js 文件声明导出的那些state数据
//   第二个参数mapDispatchToProps，对应就是store/action.js 的数据
//   这两个参数的数据都将映射在组件的props 上面
//   */
//   const mapStateToProps = (state) => {
//     console.log("mapStateToProps", state);
//     return {
//       appToken: state.reducer.AppToken,
//     };
//   };
//   const mapDispatchToProps = { UpdateAppToken };
//   export default connect(mapStateToProps, mapDispatchToProps)(NewsInClass);


  // 函数式组件;
  function News(props) {
    const navigate = useNavigate();
    // 例如，我的属性名叫content，那么调用其set函数时尽量命名为setContent。当然，叫别的也没问题，但不太规范
    let [movies_hot, setMovies_hot] = useState([]);
    //  函数式组件 useEffect 进行数据请求, 需要进行判断，否则会进行多次数据请求
    useEffect(() => {
      if (movies_hot.length !== 0) return;
      request
        .get("/movieOnInfoList", {
          params: {
            token: "",
          },
        })
        .then((res) => {
          console.log(res.data.movieList);
          setMovies_hot((movies_hot = res.data.movieList));
        });
    });
    function renderHotItem() {
      return movies_hot.map((item) => (
        <div key={item.id} style={{ textAlign: "left" }}>
          {item.id}--
          {item.title}
        </div>
      ));
    }
    return (
        <div className="p-home">
        {/* <Header></Header> */}
        <Header
          title="home"
          info={() => {
            console.log("info:news");
          }}
        ></Header>
        <h1>News Page</h1>
        <div className="ipt-con">
          <Button onClick={() => navigate("/login")}>返回登录</Button>
        </div>
        <div>
          <button onClick={() => props.UpdateAppToken("user-token-from-news")}>
            设置token
          </button>
          <button onClick={() => props.UpdateAppToken("")}>清空token</button>
          <div>token值：{props.appToken}</div>
          <hr />
          <h3>函数式useEffect 请求后端数据</h3>
          {renderHotItem()}
        </div>
      </div>
    );
  }
  
  // export default News;
  
  // 有store时
  /*connect 有两个参数，
  第一个是mapStateToProps 函数，返回是一个对象, 其实就是  store/reducer.js 文件声明导出的那些state数据
  第二个参数mapDispatchToProps，对应就是store/action.js 的数据
  这两个参数的数据都将映射在组件的props 上面
  */
  const mapStateToProps = (state) => {
    console.log("mapStateToProps", state);
    return {
      appToken: state.reducer.AppToken,
    };
  };
  const mapDispatchToProps = { UpdateAppToken };
  export default connect(mapStateToProps, mapDispatchToProps)(News);