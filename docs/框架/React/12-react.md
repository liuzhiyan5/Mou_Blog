---
title: Redux优化
date: 2021-06-09
tags:
  - React
---

## react-redux

优化单纯使用 redux 的点击按钮+1 效果

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  // react-redux的原理其实就是高阶组件，在此标签中传入store的作用在于
  // 因为插件并不知道你store定义在哪里，当你传进去的时候，便能够让插件知道store的位置
  // 如果不传那么虚拟DOM中便不能够渲染出store里面的初始化数据,甚至是其他操作
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
```

```jsx
// App.jsx
import React from "react";
import Home from "./components/Home";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return <Home></Home>;
  }
}

// 当没有给connect传值的时候,就相当于单纯返回出了一个App
// 具体操作可看参考文档中的 "自定义connect函数" 版块
export default connect()(App);
```

```jsx
// home.jsx
import React from "react";
import { connect } from "react-redux";
import { addNumber } from "../../action";

class Home extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <h3>{this.props.number}</h3>

        <button
          onClick={() => {
            this.props.handleAdd(this.props.number);
          }}
        >
          点我++
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  // 这里我return出去的对象，加入了一个自己定义的死数据name
  // 而这个name是没有进入到store里面的状态中，而是直接通过解构
  // 通过组件通讯传值过来了，因此打印store中的state没有name属性
  // 而在this.props却能够打印出name属性
  return {
    number: state.number,
    name: "曹操",
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch);
  return {
    handleAdd: function(num) {
      dispatch(addNumber(num));
    },
  };
};

// 若看了参考文档,知道底层原理后,就能够清晰理解这传值之后,会发生的事
// 当给connect传值之后,mapStateToProps和mapDispatchToProps两个方法的返回值会跟随到connect中
// 进行一系列转换操作之后,会通过数据通讯的方式进入Home组件中
export default connect(mapStateToProps, mapDispatchToProps)(Home);
```

## 参考文档

[React 系列十六 - Redux(二)react-redux](https://zhuanlan.zhihu.com/p/159675780)
