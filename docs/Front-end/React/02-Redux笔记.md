---
title: Redux 笔记
date: 2021-05-07
tags:
  - React
---

## Redux

和 vuex 一样为了解决组件之间的通信问题而使用的架构

## 设计思想

- Web 应用是一个状态机，视图与状态是一一对应的。
- 所有的状态，保存在一个对象里面。



## Redux核心理念

    1. 通过store来保存数据
    2. 通过action来修改数据 
    3. 通过reducer将store和action串联起来 reducer(state=initialState) {}

```
                      -------------
          --------->  | Component |  ---------
         |            -------------           |
         |                                    ⬇
  -------------       -------------       -------------
  |   Store   | <---- |  Reducer  | <---- |  Action   |
  -------------       -------------       -------------

```





## API

### createStore 存数据的地方

`createStore`方法还可以接受第二个参数，表示 State 的最初状态。这通常是服务器给出的。

```jsx {11}
const redux = require("redux");
// 定义数据
const initialState = {
  count: 0,
  list: [1, 3, 4, 2, 3],
};
function fn(state = initialState) {
  return state;
}
// 创建 Store
const store = redux.createStore(fn);
// 获取数据
console.log(store.getState()); // { count: 0, list: [ 1, 3, 4, 2, 3 ] }
```



### State 对象包含所有数据

如果想得到某个时点的数据，就要对 Store 生成快照。这种时点的数据集合，就叫做 State。

当前时刻的 State，可以通过`store.getState()`拿到。

Redux 规定， 一个 State 对应一个 View。只要 State 相同，View 就相同。你知道 State，就知道 View 是什么样，反之亦然。

### Action 修改 State 数据

State 的变化，会导致 View 的变化。但是，用户接触不到 State，只能接触到 View。所以，State 的变化必须是 View 导致的。Action 就是 View 发出的通知，表示 State 应该要发生变化了。

Action 是一个对象。其中的 <font style="color:red">type</font>  属性是必须的，表示 Action 的名称。其他属性可以自由设置，社区有一个[规范](https://github.com/acdlite/flux-standard-action)可以参考。

```js
const action = {
  type: 'ADD_TODO',
  msg: 'Hello Redux'
};
```

### Store.dispatch() 发送 Action

```js
const action = {
  type: "ADD_TODO",
  msg: "Hello Redux",
};

store.dispatch(action);
```

### Reducer 接收新的 state 并且返回它

Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。

```js
const redux = require("redux");
// 定义数据
const initialState = {
  count: 0,
  list: [1, 3, 4, 2, 3],
};
function fn(state = initialState, action) {
  // 这里接收到新的 action
  console.log(action);
  switch (action.type) {
    case "ADD_TODO":
      state.msg = action.msg;
      return state;
    default:
      return state;
  }
}
// 创建 Store
const store = redux.createStore(fn);
// 获取数据
// console.log(store.getState()); // { count: 0, list: [ 1, 3, 4, 2, 3 ] }

const action = {
  type: "ADD_TODO",
  msg: "Hello Redux",
};
// 派发 action
store.dispatch(action);
console.log(store.getState());
// { type: '@@redux/INITu.8.s.4.e.9' }
//{ type: 'ADD_TODO', msg: 'Hello Redux' }
//{ count: 0, list: [ 1, 3, 4, 2, 3 ], msg: 'Hello Redux' }
```

### store.Subscribe  监听数据变化

```js {23-26}
const redux = require("redux");
// 定义数据
const initialState = {
  count: 0,
  list: [1, 3, 4, 2, 3],
};
function fn(state = initialState, action) {
  // 这里接收到新的 action
  console.log(action);
  switch (action.type) {
    case "ADD_TODO":
      state.msg = action.msg;
      return state;
    default:
      return state;
  }
}
// 创建 Store
const store = redux.createStore(fn);
// 获取数据
// console.log(store.getState()); // { count: 0, list: [ 1, 3, 4, 2, 3 ] }

// 监听 state 变化
store.subscribe(() => {
  console.log("变化了");
});
const action = {
  type: "ADD_TODO",
  msg: "Hello Redux",
};
// 派发 action
store.dispatch(action);
console.log(store.getState());
```





`store.subscribe`方法返回一个函数，调用这个函数就可以解除监听。

```js
let unsubscribe = store.subscribe(() =>
	console.log(store.getState())
);
unsubscribe();
```



## 总结

- 通过 redux.createStore() 创建 store
- 通过 store.dispatch(action) 修改 state 里面的值
- 通过 reducer(state,action) 函数返回 state 值

```js
// 1.引入 redux 包
const redux = require("redux");

const defaultState = {
  msg: "hello redux",
};

// 2.创建 stote
const store = redux.createStore(reducer);

// 3.创建 reducer 初始化数据
function reducer(state = defaultState, action) {
  console.log("我被触发了");
  switch (action.type) {
    case "ADD":
      return { ...state, age: action.age };
    default:
      return state;
  }
}

// 4. 调用 action 修改 state
let action = {
  type: "ADD",
  age: 18,
};
// 调用完成之后会触发 reducer
store.dispatch(action);
// 5. 查看 state 是否修改
console.log(store.getState());
```



## react-redux 的使用

### 文档

[Getting Started with React Redux | React Redux (react-redux.js.org)](https://react-redux.js.org/introduction/getting-started)

### 基本使用

- Provider 这个组件能够使你整个 app 都能获取到 store 中的数据
- connect 这个方法能够使组件跟 store 来进行关联



index.jsx

```jsx
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById("root")
);
```



store.js

```js
import {
  createStore
} from 'redux'

// 1.创建初始化 状态
const initialState = {
  name: 'zhangsan',
  age: 19
}

export const action = {
  type: "ADD"
}

// 3.创建reducer函数
export const reducer = (state = initialState, action) => {
  // console.log(action)
  // console.log(state)
  switch (action.type) {
    case "ADD":
      state.age++
      return state
    default:
      return state;
  }
}

let store = createStore(reducer);

export default store;
```



app.jsx

```jsx
import "./App.css";
import { connect } from "react-redux";
import store, { action } from "./store";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
    this.unsubscribe = null;
  }

  componentDidMount() {
    // 监听数据变化
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        ...store.getState(),
      });
    });
  }
  // 组件销毁停止监听
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.age}</h1>
        <button onClick={this.props.onClick}>点击增加年龄</button>
        <button onClick={this.unsubscribe}>停止监听</button>
      </div>
    );
  }
}

// 传入 state 获取 store 里面的值
// 这个单词翻译过来就是把state映射到props中去 ,其实也就是把Redux中的数据映射到React中的props中去。
const mapStateToProps = (state) => {
  console.log(state);
  return {
    name: state.name,
    age: state.age,
  };
};
// 这个单词翻译过来就是就是把各种dispatch也变成了props让你可以直接使用;
const mapDispatchToProps = (dispatch) => {
  // 默认传递参数就是dispatch
  return {
    onClick: () => {
      dispatch(action);
    },
  };
};

// connect(mapStateToProps, mapDispatchToProps)(MyComponent)
export default connect(mapStateToProps, mapDispatchToProps)(App);
```

## redux-thunk

- 让 action 支持异步请求数据



### 使用

store.js

```js
import {
  createStore,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk';
// 添加中间件即可
let store = createStore(reducer, applyMiddleware(thunk))
```

### 案例

index.jsx

```jsx
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

```

App.jsx

```jsx
import "./App.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import { asyncAction, promiseAction } from "./store";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.msg}</h1>
        <button onClick={this.props.msgUpdate}>点击修改值</button>
        <h1>{this.props.async}</h1>
        <button onClick={this.props.msgAsync}>异步修改值使用 thunk</button>
        <button onClick={this.props.msgAsync2}>异步修改值不使用 thunk</button>
        <button onClick={this.props.msgAsync3}>异步修改值使用 promise</button>
      </div>
    );
  }
}

let mapState = (state) => {
  return {
    msg: state.msg,
    async: state.async,
  };
};
let mapDispatch = (dispatch) => {
  return {
    msgUpdate() {
      dispatch({
        type: "MSG",
        msg: "你好",
      });
    },
    // redux-thunk
    msgAsync() {
      dispatch(asyncAction);
    },
    // 不使用 redux-thunk
    msgAsync2() {
      fetch("http://localhost:8000/hello")
        .then((res) => res.json())
        .then((res) => {
          dispatch({
            type: "ASYNC",
            async: res.msg,
          });
        });
    },
    // promise redux-thunk
    msgAsync3() {
      dispatch(promiseAction);
    },
  };
};

export default connect(mapState, mapDispatch)(App);

```



store

```js
import {
  createStore,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk';
let defaultState = {
  msg: "123",
  async: "异步"
}

function reducer(state = defaultState, action) {
  console.log(action)
  switch (action.type) {
    case "MSG":
      return {
        ...state, msg: action.msg
      }
      case "ASYNC":
        return {
          ...state, async :action.async
        }
        default:
          return state
  }
}

export const asyncAction = function (dispatch) {
  fetch("http://localhost:8000/hello")
    .then((res) => res.json())
    .then((res) => {
      dispatch({
        type: "ASYNC",
        async: res.msg,
      });
    });
}
export const promiseAction = async function (dispatch) {
  let data = await (await fetch("http://localhost:8000/hello")).json()
  dispatch({
    type: "ASYNC",
    async: data.msg,
  });
}

// let store = createStore(reducer)
let store = createStore(reducer, applyMiddleware(thunk))

export default store
```



