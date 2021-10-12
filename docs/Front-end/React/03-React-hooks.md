---
title: React-hooks
date: 2021-06-10
tags:
  - React
---

## 什么是 hooks?

*Hook* 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

我们先来看一个例子,这是传统的 class 组件的

```jsx
import React from "react";

class index extends React.component {
  state = {
    msg: "你好",
  };
  updateMsg = () => {
    this.setState({
      msg: "真好",
    });
  };
  render() {
    <div>
      <span>{this.state.msg}</span>
      <button onClick={this.updateMsg}>点击修改值</button>
    </div>;
  }
}
export default index;
```

将上面的例子转换成 hooks 的写法

```jsx
import { useState } from "react";
function index() {
  let [msg,setMsg] = useState("你好)
  return (
    <div>
      <span>{msg}</span>
      <button onClick={()=>updateMsg("真好")}>点击修改值</button>
    </div>
  );
}
```

仔细感受一下异同

## 解决的问题

- 在组件之间复用状态逻辑很难,可能要用到render props和高阶组件，React 需要为共享状态逻辑提供更好的原生途径，Hook 使你在无需修改组件结构的情况下复用状态逻辑
- 复杂组件变得难以理解，Hook 将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据）
- 难以理解的 class,包括难以捉摸的`this`

## 注意事项

- 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
- 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用

## hooks 规则校验插件

[eslint-plugin-react-hooks - npm (npmjs.com)](https://www.npmjs.com/package/eslint-plugin-react-hooks)

```js
// 你的 ESLint 配置
{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "warn" // 检查 effect 的依赖
  }
}
```



## useState 声明状态和设置状态

state 只在组件首次渲染的时候被创建。在下一次重新渲染时，useState 返回给我们当前的 state。

```jsx
import React, { useState } from "react";

function UseState() {
  //  [state, setState]
  // 创建一个名为 count 的 state 并且设置初始化的值为 0,通过 setCount(值) 来修改 count 的值
  let [count, setCount] = useState(0);

  return (
    <div className="use-state" style={{ border: "1px solid pink" }}>
      <h1>这里是 UseState 组件</h1>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>点击累加</button>
    </div>
  );
}

export default UseState;
```



## useReducer 替代useState

- useState 的替代方案。它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法
- 在某些场景下，useReducer 会比 useState 更适用，例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等

```jsx
import React, { useReducer } from "react";

const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "sub":
      return { count: state.count - 1 };
    default:
      return { ...state };
  }
}
export default function UseReducer() {
  // reducer 函数返回值  initialState 初始化值
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>useReducer</h1>
      <span>{state.count}</span>
      <br />
      <button onClick={() => dispatch({ type: "add" })}>+</button>
      <button onClick={() => dispatch({ type: "sub" })}>-</button>
    </div>
  );
}
```

惰性初始化

```jsx {17,1-3}
function init() {
  return initialState;
}
const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "sub":
      return { count: state.count - 1 };
    default:
      return { ...state };
  }
}
export default function UseReducer() {
  // reducer 函数返回值  initialState 初始化值
  const [state, dispatch] = useReducer(reducer, initialState, init);

  return (
    <div>
      <h1>useReducer</h1>
      <span>{state.count}</span>
      <br />
      <button onClick={() => dispatch({ type: "add" })}>+</button>
      <button onClick={() => dispatch({ type: "sub" })}>-</button>
    </div>
  );
}
```



## useContext 跨越关系的传值

- 接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值
- 当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定
- 当组件上层最近的 <MyContext.Provider> 更新时，该 Hook 会触发重渲染，并使用最新传递给 MyContext provider 的 context value 值
- useContext(MyContext) 相当于 class 组件中的 `static contextType = MyContext` 或者 `<MyContext.Consumer>`
- useContext(MyContext) 只是让你能够读取 context 的值以及订阅 context 的变化。你仍然需要在上层组件树中使用 <MyContext.Provider> 来为下层组件提供 context



```jsx
import React, { useContext } from "react";
// 1
const MsgContext = React.createContext("你好");
export default function UseContext() {
  return (
    <div>
      <h1>useContext</h1>
      {/* 2 */}
      <MsgContext.Provider value={"你好"}>
        <Son></Son>
      </MsgContext.Provider>
    </div>
  );
}

function Son() {
  // 3
  const context = useContext(MsgContext);
  return (
    <div>
      <h1>子组件</h1>
      {/* 4 */}
      <span>{context}</span>
    </div>
  );
}
```



## useEffect 模拟生命周期函数

跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途

```jsx
import { useState, useEffect } from "react";

const UseEffect = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    // componentDidMont
    console.log("数据渲染了");
    // componentDidUpdate
    console.log("数据更新了");
    // componentWillUmount
    return () => {
      console.log("组件卸载了");
    };
  });
  return (
    <div className="use-state" style={{ border: "1px solid pink" }}>
      <h1>这里是 UseEffect 组件</h1>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>点击累加</button>
    </div>
  );
};

export default UseEffect;
```

useEffect 会在每次渲染都执行.默认情况下，它在第一次渲染之后和每次更新之后都会执行。React 保证了每次运行 effect 的同时，DOM 都已经更新完毕。

### useEffect 监听 state 的变化

如同 vue 里面的 watch 一样 react hooks 也提供了监听变量变化的功能

```jsx
import { useState, useEffect } from "react";

const UseEffect = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    // componentDidMont
    console.log("数据渲染了");
    // componentDidUpdate
    console.log("数据更新了");
    // componentWillUmount
    return () => {
      console.log("组件卸载了");
    };
  });
  // 监听 count 更新
  useEffect(() => {
    console.log("count 更新了", count);
  }, [count]);

  return (
    <div className="use-state" style={{ border: "1px solid pink" }}>
      <h1>这里是 UseEffect 组件</h1>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>点击累加</button>
    </div>
  );
};

export default UseEffect;
```

###  useEffect 模拟 componentDidMount

```jsx
  useEffect(() => {
    console.log("UseEffect.jsx 初始化");
    // 没有监听的 state 
  }, []);
```

### useEffect 模拟 componentDidUpdate

```jsx
  useEffect(() => {
    console.log("UseEffect.jsx conut数据变化了");
  }, [count]);
  useEffect(() => {
    console.log("UseEffect.jsx 数据变化了");
  }, );
```

### useEffect 模拟 componentWillUnmount

```jsx
import React, { useState, useEffect } from "react";

export default function UseEffect() {
  let [count, setCount] = useState(0);
  let [flag, setFlag] = useState(true);

  return (
    <div>
      <h1>useEffect</h1>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>点击累加</button>
      <button onClick={() => setFlag(!flag)}>显示/隐藏</button>
      {flag && <Son></Son>}
    </div>
  );
}

function Son() {
  useEffect(() => {
    return () => {
      console.log("useEffect.jsx 组件卸载了");
    };
  },[]);
  return (
    <div>
      <h1>子组件</h1>
    </div>
  );
}
```

## useRef 获取 Dom 元素

- useRef 返回一个可变的 ref 对象，其 `.current` 属性被初始化为传入的参数（initialValue）
- 返回的 ref 对象在组件的整个生命周期内保持不变

```jsx
import React, { useRef } from "react";

export default function UseRec() {
  const h1Ref = useRef();
  const test = () => {
    console.dir(h1Ref.current);
    h1Ref.current.innerText = "useRef 被修改了";
  };
  return (
    <div>
      <h1 ref={h1Ref}>useRef</h1>
      <button onClick={test}>获取 h1</button>
    </div>
  );
}
```

### ref 转发 让父元素可以使用子元素的ref

```jsx
import React, { forwardRef, useRef } from "react";
const ForwardRef = () => {
  return (
    <div>
      <h1>ForwardRef</h1>
      <Father></Father>
    </div>
  );
};
const Father = () => {
  let inputRef = useRef();
  const changeInputValue = () => {
    inputRef.current.value = "Hello";
  };
  return (
    <div>
      <button onClick={changeInputValue}>我是 Father </button>
      <Son ref={inputRef}></Son>
    </div>
  );
};
const Son = forwardRef((props, ref) => {
  // let inputRef = useRef();
  const changeInputValue = () => {
    ref.current.value = "Hello";
  };
  return (
    <div>
      <input type="text" ref={ref} />
      <button onClick={changeInputValue}>我是 Son </button>
    </div>
  );
});

export default ForwardRef;
```

