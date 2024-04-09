// import * as constants from "./constant";

/*
 *该文件专门为Count组件生成求和count_actions对象
 */

import { INCREMENT, DECREMENT, APP_TOKEN, SET_LOGIN } from "./constant";

export const incrementAction = (data) => ({ type: INCREMENT, data }); //同步action
//同步action，就是指action的返回值为Object类型的一般对象
export function decrementAction(data) {
  return {
    type: DECREMENT,
    data,
  }; //返回的是一个对象，普通数据类型，同步action，返回对象为异步
}
//异步action，就是指action的返回值为函数
//异步action中，一般都会调用同步action，异步action不是必须要用的
export const incrementAsyncAction = (data, time) => {
  return (dispatch) => {
    //返回对象为异步action
    setTimeout(() => {
      dispatch(incrementAction(data));
    }, time);
  };
};

// 更新appToken
export const UpdateAppToken = (data) => {
  return (dispatch) => {
    dispatch({
      type: APP_TOKEN,
      data: data,
    });
  };
};

export const SetLogin = (data) => {
  return (dispatch) => {
    dispatch({
      type: SET_LOGIN,
      data: data,
    });
  };
};