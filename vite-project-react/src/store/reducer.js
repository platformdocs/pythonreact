// src\store\reducer.js
// 初始化数据和接受触发action的数据;
import * as constant from "./constant";
import { combineReducers } from "redux";

// 初始默认的state
const defaultState = {
  myData: null,
  isLogin: false,
  AppToken: null,
};

const reducer = (state = defaultState, action) => {
  // 由于state是引用型，不能直接修改，否则是监测不到state发生变化的。因此需要先复制一份进行修改，然后再返回新的state。
  let newState = Object.assign({}, state);
  switch (action.type) {
    case constant.SET_DATA:
      newState.myData = action.payload;
      return newState;
    case constant.SET_LOGIN:
      newState.isLogin = action.payload;
    case constant.APP_TOKEN:
      //在这里可以做一下额外处理，如：本地缓存
      console.log("reducer.js:", newState, action.data);
      if (action.data) {
        sessionStorage.setItem(constant.APP_TOKEN, action.data);
        newState.AppToken = action.data;
      } else {
        sessionStorage.removeItem(constant.APP_TOKEN);
        newState.AppToken = null;
      }
      return newState;
    // break;
    default:
      return state;
  }
};

// export default reducer;

//如果有多个，可以合拼在一起导出
export const reducers = combineReducers({ reducer });
