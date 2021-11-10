---
title: React脚手架及组件
date: 2021-05-10
tags:
  - React
---

## React 脚手架创建

1.前提是要安装 Node 2.在命令行中执行: npx create-react-app 项目名称 3.注意：项目的名称只能是英文, 并且只能是小写字母
如果出现了多个单词, 那么我们需要通过\_-来连接. myName->my_name->my-name

## React 的组件

将组件放入 components 文件夹中，目的是为了更好的分类文件和功能

### 函数组件

```js
// index.js
// import React from 'react';
import ReactDOM from "react-dom";

import Finish from "./components/Test";

ReactDOM.render(<Finish str="嘻嘻" />, document.getElementById("root"));
```

```jsx
// 函数组件
// 函数式组件也被称为无状态组件
// Fragment相当于是一个不占位的标签，用来解决放置多个兄弟标签，会有波浪线的问题
import { Fragment } from "react";

function Finish(props) {
  // 当给函数组件传值的时候，是不能给传入的值进行修改
  // 这个数据是静态数据，因此当前这个组件就是无状态组件
  props.str = "宁愿我负天下人"; // 报错

  // 无状态组件还有一个特点，当你给事件打印this，是没有这个this的
  // 返回值是undefined
  const inputChange = () => {
    console.log(this);
  };

  return (
    <Fragment>
      <div>曹操</div>
      <input type="text" value={props.str} onChange={inputChange} />
    </Fragment>
  );
}

export default Finish;
```

### 类组件

```jsx
// 类组件
// 类组件 也被成为有状态组件
import React from "react";

// 通过类的方式定义组件，我们需要继承React.Component。
// 继承了React.Component，会有生命周期和this
class Finish extends React.Component {
  name;
  // 在继承类里面的constructor必须要写super()
  // 就算不写，当你this父类里面的属性的时候，会显示报错，叫你添加super()这代码
  // 当我们给类组件传值的时候，像函数组件是不能对其进行修改的，但是类组件可以
  constructor(props) {
    super();
    this.name = "曹操";
    // 每个组件里面可以传递参数，但是传递的参数是不能修改的。
    // 如果在组件内部修改修改参数，那么就需要使用到组件状态state
    this.state = {
      age: props.age,
    };
  }

  // 更推荐用setState()的方法修改状态
  click = () => {
    // state里面的属性是不能够直接修改的
    // this.state.age = 20 // ON，不要直接改变状态，请使用setState()
    this.setState({
      age: 20,
    });
  };

  // 如果要给事件对象传值，react不像vue直接在方法后加()，说明
  handleClick1(value) {
    console.log(value);
  }
  handleClick2(value) {
    console.log(value);
  }
  handleClick3(value) {
    console.log(value);
  }

  // 内部需要一个render函数，render函数是React.Component的方法
  // 类组件会默认调用render函数，但是不会默认添加render函数并return一个能渲染的值。
  render() {
    return (
      <div onClick={this.click}>
        这是类组件
        {/* 这种方法也可以传值，可是当渲染页面的那一刻，这个事件也被触发了，不好 */}
        <p onClick={this.handleClick1(this.name)}>错误示范</p>
        {/* 下面两种传参方法用哪一种都可以，主要看个人喜好 */}
        {/* react事件传值的其中之一种方法 */}
        <p
          onClick={() => {
            this.handleClick2(this.name);
          }}
        >
          回调传参
        </p>
        {/* react事件传值的其中之一种方法 */}
        <p onClick={this.handleClick3.bind(this, this.name)}>bind传参</p>
      </div>
    );
  }
}

export default Finish;
```

```js
// import React from 'react';
import ReactDOM from "react-dom";

import Finish from "./components/Test";

ReactDOM.render(
  // 注：在index.js输出的标签名不能用小驼峰的命名，这会导致编译器会认为
  // 这是react自带的组件，所以要用大驼峰的命名规则
  // <finish />,
  <Finish age="30" />,
  document.getElementById("root")
);
```

## 参考文档

[react 组件之组件的状态，state](https://blog.csdn.net/qq_41499782/article/details/113828681)
