---
title: Redux的基本使用
date: 2021-06-09
tags:
  - React
---

## Redux 核心理念

    1. 通过store来保存数据
    2. 通过action来修改数据
    3. 通过reducer将store和action串联起来 reducer(state=initialState) {}

```shell
                      -------------
          --------->  | Component |  ---------
         |            -------------           |
         |                                    ⬇
  -------------       -------------       -------------
  |   Store   | <---- |  Reducer  | <---- |  Action   |
  -------------       -------------       -------------

```

## Redux 简单运用

效果：点击按钮，使得数字加 1

```jsx
// App.jsx
import React from "react";
import store from "./store";
import { addNumber } from "./action";

class App extends React.Component {
  state = store.getState();

  componentDidMount() {
    // 类似vue中的catch，能够监听到数据是否发生了改变，然后将数据重新渲染到页面上
    store.subscribe(() => {
      // console.log(store.getState());
      this.setState({
        number: store.getState().number,
      });
    });
  }

  aa = (num) => {
    // 一开始我有一个问题
    // 这里是调用了action里面的方法，但是在store并没有引入这个文件，那么这个addNumber是怎么来的
    // 那么这里我们要知道这个store是什么我们返回到store.js
    store.dispatch(addNumber(num));
  };

  render() {
    return (
      <div>
        <h3>{this.state.number}</h3>
        {/* 实现点击按钮之后让数字加1 */}
        <button
          onClick={() => {
            this.aa(this.state.number);
          }}
        >
          点我++
        </button>
      </div>
    );
  }
}

export default App;
```

```js
// store.js
import { createStore } from "redux";
// 初始化数据
const initialState = {
  number: 1,
};

// 创建reducer函数，目的是为了将store和action串联起来
// state=initialState 这个是语法写法，必须要这样写
// 页面的新数据或者旧数据的更改来源于reducer
function reducer(state = initialState, action) {
  // console.log(action)
  switch (action.type) {
    case "AAAAA":
      return {
        number: action.math,
      };

    default:
      return state;
  }
}

const store = createStore(reducer);
// store其实就是reducer函数，里面有一大堆的属性，其中就包括了dispath、getState....
// 那么根据属性就可以知道，当我们调用了dispath方法，那么进去之后便为action形参
// 因此在函数reducer中就能够得到addNumber的原因
// console.log(store)

export default store;
```

```js
// action.js
// 创建action方法
export const addNumber = (num) => {
  // console.log(num)
  return {
    type: "AAAAA",
    math: ++num,
  };
};
```
