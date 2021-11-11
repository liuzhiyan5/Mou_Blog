---
title: React路由传参
date: 2021-05-25
tags:
  - React
---

## 通过 URL 传参

```jsx
// 通过URL传参
// 刷新地址栏，参数依然存在，但是如果传的值过多，会导致非常的丑陋
// 了解有这个传参方法就行
// App.jsx
import React from "react";
import { HashRouter, NavLink, Route, Switch } from "react-router-dom";
import Home from "./components/Home/index";
import About from "./components/About/index";

class App extends React.Component {
  render() {
    return (
      <div>
        <HashRouter>
          <NavLink to="/home?name=zs&age=39&age=60">首页</NavLink>
          <NavLink to="/about">关于</NavLink>

          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
```

```jsx
// Home.jsx
import React from "react";

class Home extends React.Component {
  componentDidMount() {
    // 第一种获取方法，也是最原始
    // 这样可以获取到url中的数据，但是也要通过操作一系列繁琐的字符串操作来获取值
    // 非常不建议此操方法
    console.log(this.props.location.search);

    // 第二种获取防范，升级版，值得一用
    let params = new URLSearchParams(this.props.location.search);
    // 想要什么就在get里写什么
    console.log(params.get("name")); // zs
    // 但如果有多个相同名字的值，get就不管用了，明明有多个却只能打印第一个
    console.log(params.get("age")); //39
    // 因此就需要用到getAll
    console.log(params.getAll("age")); // ["39", "60"]
  }

  render() {
    return <h1>主页</h1>;
  }
}

export default Home;
```

## 通过动态路由传参

```jsx
// 通过动态路由传参
// 与通过URL传值一样，过长会导致丑陋，目标了解
// App.jsx
import React from "react";
import { HashRouter, NavLink, Route, Switch } from "react-router-dom";
import Home from "./components/Home/index";
import About from "./components/About/index";

class App extends React.Component {
  render() {
    return (
      <div>
        <HashRouter>
          <NavLink to="/home">首页</NavLink>
          <NavLink to="/about/123">关于</NavLink>

          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/about/:id" component={About}></Route>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
```

```jsx
// About.jsx
import React from "react";

class About extends React.Component {
  componentDidMount() {
    // 可以清晰查看url数据，若真不知道数据在哪，可慢慢看
    console.log(this.props);
    console.log(this.props.match.params.id); // 123
  }

  render() {
    return <h1>关于</h1>;
  }
}

export default About;
```

## 通过 NavLink 或 Link 组件的 to 属性传参

### query 传参

```jsx
// query传参
// App.jsx
import React from "react";
import { HashRouter, NavLink, Route, Switch } from "react-router-dom";
import Home from "./components/Home/index";
import About from "./components/About/index";

class App extends React.Component {
  render() {
    return (
      <div>
        <HashRouter>
          <NavLink to={{ pathname: "/home", query: { name: "曹操" } }}>
            首页
          </NavLink>
          <NavLink to="/about">关于</NavLink>

          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
```

```jsx
// Home.jsx
import React from "react";

class Home extends React.Component {
  componentDidMount() {
    // 这种方法，如果初次刷新当前路址下的页面，是无法获取到传入的数据的
    // 唯有通过点击路由跳转后来获取数据
    // 简单来说就是刷新数据消失
    console.log(this.props.location.query.name);
  }

  render() {
    return <h1>主页</h1>;
  }
}

export default Home;
```

### state 传参

```jsx
// state传参
// App.jsx
import React from "react";
import { HashRouter, NavLink, Route, Switch } from "react-router-dom";
import Home from "./components/Home/index";
import About from "./components/About/index";

class App extends React.Component {
  render() {
    return (
      <div>
        <HashRouter>
          <NavLink to={{ pathname: "/home", state: { name: "曹操" } }}>
            首页
          </NavLink>
          <NavLink to="/about">关于</NavLink>

          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
```

```jsx
// Home.jsx
import React from "react";

class Home extends React.Component {
  componentDidMount() {
    // 这种方法跟query传参一样，刷新页面数据消失
    // 不过这种传参方法比query传参好的一点在state传的参数是加密的，比query传参好用
    console.log(this.props.location.state.name);
  }

  render() {
    return <h1>主页</h1>;
  }
}

export default Home;
```

# 路由的统一管理

就是将路由封装到一个文件夹中

首先要安装一个插件 react-router-config，之后创建一个 routes 文件夹，里面再定义一个 js 文件，将路由放到里面，就跟 vue 的做法差不多

命令：npm i react-router-config 或 yarn add react-router-config

## 一级路由

```jsx
// App.jsx
import React from "react";
import routes from "./routes/index";
import { renderRoutes } from "react-router-config";
import { HashRouter, NavLink } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <HashRouter>
          <NavLink to={{ pathname: "/home", state: { name: "曹操" } }}>
            首页
          </NavLink>
          <NavLink to="/about">关于</NavLink>

          {renderRoutes(routes)}
        </HashRouter>
      </div>
    );
  }
}

export default App;
```

```js
// index.js
import Home from "../components/Home/index";
import About from "../components/About/index";

const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
];

export default routes;
```

## 嵌套路由

```jsx
// App.jsx
import React from "react";
import routes from "./routes/index";
import { renderRoutes } from "react-router-config";
import { HashRouter, NavLink } from "react-router-dom";

class App extends React.Component {
  render() {
    // console.log(routes);
    return (
      <div>
        <HashRouter>
          <NavLink to="/home">首页</NavLink>
          <NavLink to="/about">关于</NavLink>

          {/* 经过打印得知，这里的routes返回的是包含当前两个路由的数组，插件自动帮我们循环 */}
          {renderRoutes(routes)}
        </HashRouter>
      </div>
    );
  }
}

export default App;
```

```jsx
// Home.jsx
import React from "react";
import { HashRouter, NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";

class Home extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <h1>首页</h1>
        <HashRouter>
          <NavLink to="/home/my">我的</NavLink>

          {/* 经过测试，如果在二级路由或以下直接写{renderRoutes(routes)一开始浏览器就会裂开 */}
          {/* 这样的后果将会导致浏览器卡死，无法执行 */}
          {/* 因为routes最外层是来自于父级的路由，因此无法使用在当前组件中 */}
          {/* {renderRoutes(routes)} */}

          {/* 所以改变写法，发现props内有我们需要的东西 */}
          {/* 因此我们可以得出结论，我们该如何写子组件内的嵌套路由 */}
          {/* 无论是一级路由还是嵌套路由，插件所遍历的东西，外层必须是当前组件的路由 */}
          {renderRoutes(this.props.route.routes)}
        </HashRouter>
      </div>
    );
  }
}

export default Home;
```

```js
// index.js
import Home from "../components/Home/index";
import About from "../components/About/index";
import MyHome from "../components/MyHome/index";

const routes = [
  {
    path: "/home",
    component: Home,
    routes: [
      {
        path: "/home/my",
        component: MyHome,
      },
    ],
  },
  {
    path: "/about",
    component: About,
  },
];

export default routes;
```
