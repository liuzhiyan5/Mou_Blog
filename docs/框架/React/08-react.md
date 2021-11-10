---
title: React 路由
date: 2021-05-20
tags:
  - React
---

首先先进入官网查看，链接在下方，有三种打包工具，不过在下面例子中用的是 `webpack` 的方法。

用 `npm` 下载命令：`npm install react-router-dom`

用 `yarn` 下载命令：`yarn add react-router-dom`

## 基本使用

### 原生实现路由

```jsx
// 原生实现路由
// App.jsx
import React from "react";
import Home from "./components/Home/index";
import About from "./components/About/index";

class App extends React.Component {
  state = {
    flag: true,
  };

  handleClick = (bool) => {
    this.setState({
      flag: bool,
    });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick(true)}>Home组件</button>
        <button onClick={() => this.handleClick(false)}>About组件</button>

        {this.state.flag ? <Home /> : <About />}
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
  render() {
    return <div>About组件</div>;
  }
}

export default About;
```

```jsx
// Home.jsx
import React from "react";

class Home extends React.Component {
  render() {
    return <div>Home组件</div>;
  }
}

export default Home;
```

### React 路由的基本使用

```jsx
// React路由的基本使用
// App.jsx
import React from "react";
// 做出一个最简单的路由，仅仅只需要这三四个
// BrowserRouter/HashRouter，Link，Route，Switch
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  HashRouter,
} from "react-router-dom";
import Home from "./components/Home/index";
import About from "./components/About/index";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* 与HTML5历史记录API差不多，跳转组件的按钮，要用此组件包裹 */}
        {/* BrowserRouter得到的网址写法：http://localhost:3000/ */}
        {/* HashRouter得到的网址写法：http://localhost:3000/#/ */}
        {/* 注意，经过测试如果是使用BrowserRouter，可以不需要使用Switch，也不会有问题 */}
        <BrowserRouter>
          <Link to="/home">Home组件</Link>
          <Link to="/about">About组件</Link>

          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
        </BrowserRouter>
        <br />
        {/* 但如果使用HashRouter，如果不使用Switch，那么就都会被显示在页面上 */}
        {/* exact属性，意义是精确匹配，那怎么用呢？ */}
        {/* 注意下面的写法，路由匹配的机制 */}
        {/* 举个例子，如果路由的‘/home’，那么匹配到的就是'/'和'/home' */}
        {/* 看下面的代码，如果我写匹配'/'的路由，但如果我点击about，匹配到的依然是'/' */}
        {/* 如果我将/about发在最前面，那么效果就能够正确显示，但是总不能每次都这样吧 */}
        {/* 因此，exact的作用就发挥出来了，就可以精确的匹配必须是完全相同路由的才能够显示 */}
        <HashRouter>
          <Link to="/home">Home组件</Link>
          <Link to="/about">About组件</Link>

          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
        </HashRouter>

        {/* 再提一句，这里的Link相当于vue中的router-link */}
        {/* Route相当于vue中的router-view */}
      </div>
    );
  }
}

export default App;
```

### NavLink 和 Link 的区别及使用

```jsx
// NavLink和Link的区别及使用
// App.jsx
import React from "react";
import { NavLink, Link, Route, Switch, HashRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/index";
import About from "./components/About/index";

class App extends React.Component {
  render() {
    return (
      // 如果要页面切换，用Link的话，页面就不会被重新加载，只是组件被加载了
      // 而NavLink的作用就在于能够给当前组件传样式
      // 当然Link也可以传样式
      // NavLink还有很多特有的属性，如：activeClassName、activeStyle...
      // 未完全理解，待续
      <div>
        <HashRouter>
          <Link to="/home">Home组件</Link>
          <NavLink to="/about" activeClassName="selected">
            About组件
          </NavLink>

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

```css
.selected {
  color: skyblue;
}
```

### 重定向

```jsx
// 重定向
// App.jsx
import React from "react";
import { Link, Route, Switch, HashRouter } from "react-router-dom";
import Home from "./components/Home/index";
import Login from "./components/Login/index";

class App extends React.Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Link to="/home">Home</Link>
          <Link to="/login">Login</Link>

          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
```

```jsx
// Login.jsx
import React from "react";

class About extends React.Component {
  render() {
    return <div>登陆</div>;
  }
}

export default About;
```

```jsx
// Home.jsx
import React from "react";
import { Redirect } from "react-router-dom";

class Home extends React.Component {
  state = {
    flag: false,
  };

  render() {
    return this.state.flag ? <div>主页</div> : <Redirect to="/login" />;
  }
}

export default Home;
```

### 嵌套路由

```jsx
// 嵌套路由
// App.jsx
import React from "react";
import {
  NavLink,
  Link,
  Route,
  Switch,
  HashRouter,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home/index";
import About from "./components/About/index";
import Other from "./components/Other/index";

class App extends React.Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Link to="/home">Home组件</Link>
          <NavLink to="/about" activeClassName="selected">
            About组件
          </NavLink>
          <Link to="/other">other</Link>

          {/* 注意：如果用嵌套路由，在父组件中的Route不能用exact */}
          {/* 但是为什么呢？我改变了一下引入组件的写法，console了一下，一下就了解了 */}
          {/* 当我点击home组件，就会进入打印出11，再点击组件1，就会打印22,11,22 */}
          {/* 那么最后就会成功得到Son组件，这是没有严格模式下的 */}
          {/* 可如果加了严格模式，执行11,22没问题，可是走完，会再次进入父组件的循环中 */}
          {/* 那么这里就会出问题，因为加了严格模式，/home进不去了，没有循环可进了 */}
          {/* 为了验证，我的想法是否正确，我在最后加个重定向，当进不去任何循环时，执行最后一个 */}
          {/* 正解，理解正确，结论当嵌套路由时，不要加exact */}
          <Switch>
            <Route path="/home">
              {() => {
                console.log(11);
                return <Home></Home>;
              }}
            </Route>
            <Route path="/about" component={About}></Route>
            <Route path="/other" component={Other}></Route>
            <Redirect to="/other"></Redirect>
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
import { Link, Route, Switch, HashRouter } from "react-router-dom";

const Son = () => {
  return <div>我是一</div>;
};

const Son1 = () => {
  return <div>我是二</div>;
};

class Home extends React.Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Link to="/home/son">儿子组件一</Link>
          <Link to="/home/son1">儿子组件二</Link>

          <Switch>
            <Route exact path="/home/son" component={Son}>
              {() => {
                console.log(22);
                return <Son></Son>;
              }}
            </Route>
            <Route exact path="/home/son1" component={Son1}></Route>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default Home;
```

### Hash 模式手动跳转

```jsx
// Hash模式手动跳转
// About.jsx
import React from "react";

class About extends React.Component {
  // 跳转到other组件
  handleClick = () => {
    window.location.hash = "/other";
  };

  render() {
    return <div onClick={this.handleClick}>About组件</div>;
  }
}

export default About;
```

### history 模式手动跳转

```jsx
// history模式手动跳转
// About.jsx
import React from "react";

class About extends React.Component {
  // 跳转到other组件
  handleClick = () => {
    this.props.history.push("/other");
  };

  render() {
    return <div onClick={this.handleClick}>About组件</div>;
  }
}

export default About;
```

## 参考文档

[react 路由官方文档](https://reactrouter.com/web/guides/quick-start)

[react 的路由中的 switch 和 exact 的使用](https://www.cnblogs.com/yesu/p/10929646.html)
