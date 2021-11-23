---
title: 基础Hook
date: 2021-06-18
tags:
  - React
---

## 什么是 Hook

Hook 是 React 16.8 的新增特性。它可以让你在使用函数组件时，能够用到生命周期等其他 react 特性。

## 为什么需要学习 Hook

类组件的问题: 1.令人头疼的 this 管理，容易引入难以追踪的 Bug 2.生命周期的划分并不符合 “内聚性” 原则，例如 setInterval 和 clearInterval 这种具有强关联的逻辑被拆分在不同的生命周期方法中 3.组件复用（数据共享或功能复用）的困局，从早期的 Mixin，到高阶组件（HOC），再到 Render Props，始终没有一个清晰直观又便于维护的组件复用方案

正因为以上问题，所以出现了 Hook。

## 如何使用 Hook

Hook 的使用我们无需安装任何第三方库，因为它就是 React 的一部分
Hook 只能在函数组件中使用，不能在类组件、或者函数组件之外的地方使用
Hook 只能在函数最外层调用，不要在循环、条件判断或者子函数中调用

## useState

```jsx
import { useState } from "react";
function App() {
  // state是初始化数据，setState是对state数据进行修改。跟一开始学是一样的
  // 不一样在于，代码量少了，也更加清晰简单
  const [state, setState] = useState(0);
  // useState(可以随意类型)，[state, setState]=>名字也可以随心，不过最好有依据
  const [nameState, setNameState] = useState("曹操");
  const [peopleState, setPeopleState] = useState({ id: 1, name: "张三" });
  const [listState, setListState] = useState([
    { id: 1, name: "张三" },
    { id: 2, name: "李四" },
  ]);

  // 加1
  const handleAdd = () => {
    // 一个是+1，那如果出现多个呢？其实不用测试通过之前的基础也知道
    // setState是异步方法，因此不能叠加，只会走最后一次
    // 那如果我硬要实现这个效果呢？
    setState(state + 1);
    setState(state + 1);
    setState(state + 1);

    // setState中有一个回调函数，可以通过此来实现
    // 成功实现，监听到上一级最新的state
    setState((state) => state + 1);
    setState((state) => state + 1);
    setState((state) => state + 1);
  };

  // 减1
  const handleCut = () => {
    setState(state - 1);
  };

  return (
    <div>
      <h2>{state}</h2>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleCut}>-</button>
    </div>
  );
}

export default App;
```

## useEffect

第一个参数：可以让你在当前渲染结束后执行一些副作用

```jsx
// App.jsx
import { useState, useEffect } from "react";
import Home from "./components/Home/index";

function App() {
  const [state, setState] = useState(0);
  const [flagState, setFlagState] = useState(true);

  // 合并了类组件中的一些特性，如生命周期函数
  // 但我们一般不这样称呼这个方法，而是称它为'副作用'
  // useEffect可以让你在当前渲染结束后执行一些副作用
  // 经过测试，初次渲染会走，数据发生了修改也会走....
  // useEffect()有两个参数，第一个是回调函数，也就是副作用
  // 初次渲染、数据发生改变回进入此方法
  useEffect(() => {
    console.log("App组件渲染成功");
    console.log("或");
    console.log("App组件数据更改");
  });

  // 加1
  const handleAdd = () => {
    setState(state + 1);
  };

  // 减1
  const handleCut = () => {
    setState(state - 1);
  };

  // 卸载
  const handleDel = () => {
    setFlagState(!flagState);
  };

  return (
    <div>
      <h2>{state}</h2>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleCut}>-</button>
      <button onClick={handleDel}>点击卸载Home</button>
      {flagState && <Home></Home>}
    </div>
  );
}

export default App;
```

```jsx
// home.jsx
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    console.log("Home组件被渲染");

    // 当组件被卸载时，会进入return
    return () => {
      console.log("Home组件被卸载");
    };
  });

  return (
    <div>
      <h3>Home组件</h3>
    </div>
  );
}

export default Home;
```

第二个参数：依赖

```jsx
// App.jsx
import { useState, useEffect } from "react";
import Home from "./components/Home/index";

function App() {
  const [state, setState] = useState(0);
  const [flagState, setFlagState] = useState(true);

  // 如果没有第二参数，即依赖，那么只要数据发生了改变就会进入方法中
  // 如果传入的是一个空数组，那么就代表不依赖任何值，则永远都不需要重复执行
  // 如此说一下，如果没有传入依赖，我的理解为依赖于所有，所以会不断执行
  useEffect(() => {
    console.log("1.进来了一次");
  }, []);

  // 定义了state为依赖项，那么只有当state发生改变时会进来
  useEffect(() => {
    console.log("2.因为state发生了改变，所以进来了...");
  }, [state]);

  // 注：外部依赖不能用作依赖项
  useEffect(() => {
    console.log("3.试一下");
  }, [window.a]);

  // 加1
  const handleAdd = () => {
    setState(state + 1);
  };

  // 减1
  const handleCut = () => {
    setState(state - 1);
  };

  // 卸载
  const handleDel = () => {
    setFlagState(!flagState);
  };

  return (
    <div>
      <h2>{state}</h2>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleCut}>-</button>
      <button onClick={handleDel}>点击卸载Home</button>
      {flagState && <Home></Home>}
    </div>
  );
}

export default App;
```

## useContext

接收一个 context 对象（`React.createContext` 的返回值）并返回该 context 的当前值。

```js
// util.js
import React from "react";

const myContext = React.createContext();

export default myContext;
```

```jsx
// App.jsx
import Home from "./components/Home";
// 引入上下文
import myContext from "./util";

function App() {
  return (
    <myContext.Provider value={{ name: "曹操" }}>
      <h2>App组件</h2>
      <Home></Home>
    </myContext.Provider>
  );
}

export default App;
```

```jsx
// home.jsx
import { useContext } from "react";
import myContext from "../../util";

function Home() {
  const { name } = useContext(myContext);

  return (
    <div>
      <h3>Home组件</h3>
      <p>来自App组件的内容：{name}</p>
    </div>
  );
}

export default Home;
```
