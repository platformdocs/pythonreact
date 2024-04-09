// src\store\index.js
// 整合处理创建createStore;
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
// const {thunkMiddleware} = require('redux-thunk');
import { reducers } from "./reducer";
// import { configureStore } from '@reduxjs/toolkit'

// 这里让项目支持浏览器插件Redux DevTool
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducers, enhancer);
// const store = configureStore(reducers, enhancer);

export default store;
