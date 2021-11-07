---
title: React基础和diff算法
date: 2021-05-17
tags:
  - React
---

## 函数组件优化

学到现在，React 我们一共学了两个组件，分别是类组件和函数组件。类组件有生命周期函数，有继承关系，如果想要优化类组件，可以通过 shouldComponentUpdate 方法，也可以通过继承 PureComponent。

但是对于函数组件，它既没有生命周期函数，也没有继承关系，那么它该如何进行优化呢。

```jsx
// 函数组件优化
// 主组件
import React from "react";
import Text from "../Text/index";

class App extends React.Component {
  state = {
    num: 0,
  };

  handleClick = () => {
    this.setState({
      num: 1,
    });
  };

  render() {
    console.log("主组件渲染");
    return (
      <div>
        <div onClick={this.handleClick}>这是主组件{this.state.num}</div>
        <Text maths={this.state.num}></Text>
      </div>
    );
  }
}

export default App;
```

```jsx
// 子组件
import React from "react";

// 当使用了React.memo()方法之后，尽管主组件状态发生了改变，但是子组件是没有发生再次渲染的问题
// 那么测试一下，如果子组件的数据发生了改变会如何
// 测试正确
const Text = React.memo((props) => {
  console.log("函数组件渲染");
  return <div>这是函数子组件{props.maths}</div>;
});

export default Text;
```

## Portals

默认情况下, 所以的组件都是渲染到 root 元素中的，而 Portal 提供了一种将组件渲染到其它元素中的能力。

```jsx
// Portals
// 主组件
import React from "react";
import "./App.css";
import Text from "../Text/index";

class App extends React.Component {
  render() {
    return (
      <div className="big">
        <div className="bigIn">这是主组件</div>
        <Text></Text>
        <Text>
          <div className="Son">这是函数子组件</div>
        </Text>
      </div>
    );
  }
}

export default App;
```

```jsx
// 子组件
import React from "react";
import ReactDOM from "react-dom";

const Text = React.memo((props) => {
  // 若是这样写的话，因为受到父组件overflow: hidden的影响，子组件会被遮掩
  return <div className="Son">这是函数子组件</div>;

  // 这样写的好处就在于，组件虽然看上去仍然挂载在父组件上，但实际上，却在app上渲染
  return ReactDOM.createPortal(props.children, document.getElementById("app"));
});

export default Text;
```

```css
.big {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #000;
  overflow: hidden;
}

.bigIn {
  width: 500px;
  height: 100px;
  background-color: skyblue;
}

.Son {
  position: absolute;
  top: 100px;
  left: 600px;
  width: 200px;
  height: 200px;
  background-color: pink;
}
```

## Fragment

第一种写法：`<React.Fragment></React.Fragment>`

```jsx
// Fragment
// 主组件
import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      // 好处是不用单独定义Fragment，直接继承
      <React.Fragment>
        <div>这是主组件</div>
      </React.Fragment>
    );
  }
}

export default App;
```

```jsx
// Fragment
// 主组件
import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    list: ["曹操", "曹贼", "曹阿瞒"],
  };

  render() {
    return (
      <ul>
        {this.state.list.map((item, index) => (
          // 在标签内要有key值，虽然页面能够渲染，但是会有报错提示
          // 注意，id是不行的，规定必须是key
          <React.Fragment key={index}>
            <li>{item}</li>
          </React.Fragment>
        ))}
      </ul>
    );
  }
}

export default App;
```

第二种写法：`<Fragment></Fragment>`

```jsx
// Fragment
// 主组件
import React, { Fragment } from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      // 尽管这样写了，可是返回到调试器可以看到，这两个div并没有多一个标签包裹
      <Fragment>
        <div>这是主组件</div>
        <div>这是主组件2</div>
      </Fragment>
    );
  }
}

export default App;
```

第三种写法：`<></>`

```jsx
// Fragment
// 主组件
import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      // 但是这种写法，无法在里面加入key或children属性名
      <>
        <div>这是主组件</div>
        <div>这是主组件2</div>
      </>
    );
  }
}

export default App;
```

## Diff 算法

1.如果两棵树的根元素类型不同，React 会销毁旧树，创建新树

```jsx
// 旧树
<div>
  <Counter />
</div>

// 新树
<span>
  <Counter />
</span>

执行过程：destory Counter -> insert Counter
```

2.对于类型相同的 React DOM 元素，React 会对比两者的属性是否相同，只更新不同的属性

当处理完这个 DOM 节点，React 就会递归处理子节点。

```jsx
// 旧
<div className="before" title="stuff"></div>
// 新
<div className="after" title="stuff"></div>
只更新：className 属性

// 旧
<div style={{color: 'red', fontWeight: 'bold'}}></div>
// 新
<div style={{color: 'green', fontWeight: 'bold'}}></div>
只更新：color属性
```

3.1.当在子节点的后面添加一个节点，这时候两棵树的转化工作执行的很好

```jsx
// 旧
<ul>
  <li>first</li>
  <li>second</li>
</ul>

// 新
<ul>
  <li>third</li>
  <li>first</li>
  <li>second</li>

</ul>

执行过程：
React会匹配新旧两个<li>first</li>，匹配两个<li>second</li>，然后添加 <li>third</li> tree
```

3.2.但是如果你在开始位置插入一个元素，React 就会改变每一个子节点，而不是保持没改变状态的值不变，改变加入的值

```jsx
// 旧
<ul>
  <li>1</li>
  <li>2</li>
</ul>

// 新
<ul>
  <li>3</li>
  <li>1</li>
  <li>2</li>
</ul>

执行过程：
React将改变每一个子节点，而非保持 <li>1</li> 和 <li>2</li> 不变
```

解决方法：

```jsx
// 旧
<ul>
  <li key="2015">1</li>
  <li key="2016">2</li>
</ul>

// 新
<ul>
  <li key="2014">3</li>
  <li key="2015">1</li>
  <li key="2016">2</li>
</ul>

执行过程：
现在 React 知道带有key '2014' 的元素是新的，对于 '2015' 和 '2016' 仅仅移动位置即可
```

## 组件样式

### 行内样式

- 行内样式的优点:
  - 行内样式, 样式之间不会有冲突
  - 可以动态获取当前 state 中的状态
- 行内样式的缺点：
  - 写法上都需要使用驼峰标识
  - 某些样式没有提示
  - 大量的样式, 代码混乱
  - 某些样式无法编写(比如伪类/伪元素)

### 外链样式

将`CSS`代码写到一个单独的`CSS`文件中, 在使用的时候导入进来

- 外链样式的优点:
  - 编写简单, 有代码提示, 支持所有`CSS`语法
- 外链样式的缺点：
  - 不可以动态获取当前 state 中的状态
  - 属于全局的 css，样式之间会相互影响

```jsx
// 外链样式
import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return <div className="main">这是主组件</div>;
  }
}

export default App;
```

```css
/* App.css */
@import "../text.css";

div {
  color: skyblue;
}
```

```css
/* text.css */
.main {
  color: yellow;
}
```

### CSS 模块化

- React 的脚手架已经内置了 css modules 的配置：
  - .css/.less/.scss 等样式文件都修改成 .module.css/.module.less/.module.scss 等；
- Css Modules 优点
  - 编写简单, 有代码提示, 支持所有 CSS 语法
  - 解决了全局样式相互污染问题
- Css Modules 缺点
  - 不可以动态获取当前 state 中的状态

```jsx
// CSS模块化
import React from "react";
import AppStyle from "./App.module.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <p className={AppStyle.p}>这是主组件1</p>
        <p className={AppStyle.main}>这是主组件2</p>
      </div>
    );
  }
}

export default App;
```

```css
p {
  color: pink;
}

.main {
  color: yellowgreen;
}
```
