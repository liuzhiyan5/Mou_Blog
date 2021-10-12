---
title: React 笔记
date: 2021-05-07
tags:
  - React
---

[[toc]]

## React 介绍

用于构建用户界面的 JavaScript 库

### 声明式

React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据改变时 React 能有效地更新并正确地渲染组件。

以声明式编写 UI，可以让你的代码更加可靠，且方便调试。

### 组件化

创建拥有各自状态的组件，再由这些组件构成更加复杂的 UI。

组件逻辑使用 JavaScript 编写而非模板，因此你可以轻松地在应用中传递数据，并使得状态与 DOM 分离。

### 一次学习，随处编写

无论你现在正在使用什么技术栈，你都可以随时引入 React 来开发新特性，而不需要重写现有代码。

React 还可以使用 Node 进行服务器渲染，或使用 [React Native](https://reactnative.dev/) 开发原生移动应用。

## React 初体验

### 使用 React 的 2 种方式

1.自行配置
1.1 https://zh-hans.reactjs.org/docs/add-react-to-a-website.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>

  <body>
    <div id="root"></div>
    <!-- 注意引用顺序 -->
    <script src="lib/react.development.js"></script>
    <script src="lib/react-dom.development.js"></script>
    <script src="lib/babel.min.js"></script>

    <!-- type 一定要写成 babel 让浏览器知道需要 babel 转义-->
    <script type="text/babel">
      let VDOM = <h1>hello,React</h1>;
      ReactDOM.render(VDOM, document.getElementById("root"));
    </script>
  </body>
</html>
```

2.通过脚手架自动配置
2.1 https://zh-hans.reactjs.org/docs/create-a-new-react-app.html

## 虚拟 DOM 和真实 DOM

1.虚拟 DOM 是相对于浏览器所渲染出来的真实 DOM 的 2.虚拟 DOM 就是使用 JS 对象来表示页面上的真实 DOM

### 如何创建虚拟 DOM

createElement 通过 React.createElement()方法
该方法接收三个参数:
第一个参数: 需要创建的元素类型或组件
第二个参数: 被创建出来的元素拥有的属性
第三个参数: 被创建出来的元素拥有的内容(可以是多个)
https://zh-hans.reactjs.org/docs/react-api.html#

### 如何通过虚拟 DOM 渲染真实 DOM 到浏览器

通过 ReactDOM.render()方法
该方法接收三个参数
第一个参数: 被渲染的虚拟 DOM
第二个参数: 要渲染到哪个元素中
第三个参数: 渲染或更新完成后的回调函数
https://zh-hans.reactjs.org/docs/react-dom.html#render

### render 方法的注意点

多次渲染，后渲染会覆盖先渲染的
render 方法一次只能渲染一个元素/组件

### createElement 方法注意点

可以添加 3 个以上参数，后续参数都会作为当前创建元素内容处理

### 案例

```html {14}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>

  <body>
    <div id="root"></div>
    <!-- 注意引用顺序 -->
    <script src="lib/react.development.js"></script>
    <script src="lib/react-dom.development.js"></script>

    <script type="text/javascript">
      // 创建虚拟 DOM
      let VDOM = React.createElement("h1", { id: "title" }, "hello,React");
      // 渲染虚拟 DOM
      ReactDOM.render(VDOM, document.getElementById("root"));
    </script>
  </body>
</html>
```

![image-20210507154406002](https://gitee.com/qianshilei/test/raw/master/img/image-20210507154406002.png)

## React 中的 JSX 语法

### 为什么需要 JSX

如果结构比较简单还好，但是如果结构比较复杂，就比较难以下手
所以大牛们就发明了 JSX, 专门用来编写 React 中的页面结构

举一个简单的例子

需求 :　使用　 React 虚拟 DOM 创建一个 div 里面包含一个 span 里面包含一个 a 标签,a 标签里面写上 hello,React

#### 如果用 js 的写法

```html {14,21-29}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>

  <body>
    <div id="root"></div>
    <!-- 注意引用顺序 -->
    <script src="lib/react.development.js"></script>
    <script src="lib/react-dom.development.js"></script>

    <script type="text/javascript">
      // 创建虚拟 DOM
      // let VDOM = React.createElement(
      //   "h1",
      //   { id: "title" },
      //   "<span><a>hello,React</a></span>" // 我们发现直接写span是无效的
      // );
      let VDOM = React.createElement(
        "h1",
        { id: "title" },
        React.createElement(
          "span",
          null,
          React.createElement("a", null, "hello,React") // 如果还需要写更多的子标签那么就会启动无限套娃技术相当不友好
        )
      );
      // 渲染虚拟 DOM
      ReactDOM.render(VDOM, document.getElementById("root"));
    </script>
  </body>
</html>
```

#### 使用 JSX 写法

```html {14,16-22}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>

  <body>
    <div id="root"></div>
    <!-- 注意引用顺序 -->
    <script src="lib/react.development.js"></script>
    <script src="lib/react-dom.development.js"></script>
    <script src="lib/babel.min.js"></script>
    <script type="text/babel">
      // 创建虚拟 DOM
      let VDOM = ( // 这样就避免了难看的无限套娃,方便理解
        <h1>
          <span>
            <a>hello,React</a>
          </span>
        </h1>
      );

      // 渲染虚拟 DOM
      ReactDOM.render(VDOM, document.getElementById("root"));
    </script>
  </body>
</html>
```

### JSX 是什么？

JSX 是一个看起来很像 XML 的 JavaScript 语法扩展

### 为什么要使用 JSX

使用 JSX 使得我们在 React 中编写页面结构更为简单、灵活
JSX 是类型安全的， 在编译过程中就能发现错误
JSX 执行更快， 因为它在编译为 JavaScript 代码后进行优化
防止 XSS 注入攻击

https://zh-hans.reactjs.org/docs/introducing-jsx.html

### JSX 的本质

浏览器只认识 JS 不认识 JSX，所以我们编写的 JSX 代码是无法在浏览器中执行的
为了解决这个问题，我们需要使用 babel 将 JSX 转换成 JS，也就是转换成 React.createElement()

https://zh-hans.reactjs.org/docs/react-without-jsx.html
https://babeljs.io/repl/

### 如何将 JSX 转换成 JS?

导入 babel.js
在 script 标签上添加 type="text/babel"

### JSX 中使用表达式

在 JSX 中只要看到 { } 就会当做 JS 解析(执行里面的 JS 代码)
所以无论是绑定属性,还是绑定类名,还是绑定样式, 只需要将字符串改为{}
然后再通过 JS 动态获取, 动态绑定即可
注意：{} 中，不能出现语句！！！ if() {} / for() {} / switch...

以下嵌入的内容不会被显示出来 [] true false null undefined
如果想显示上面的内容，那么就必须转换成字符串，但是对于空数组而言，即使转换成字符串，也不能显示

```jsx
// const name = 'jack'
// const h1 = <div>{name}</div>
// const h1 = <div>{19}</div>
// const h1 = <div>{true + ''}</div>
// const h1 = <div>{1 + 3 + 7 + 9}</div>
// const h1 = <div>{['red', 'yellogreen', 'pink']}</div>
// const h1 = <div>{['red', 'yellogreen', 'pink'].join('')}</div>
// const h1 = <div>{Math.random() > 0.5 ? '大于' : '小于等于'}</div>
```

### JSX 使用条件渲染

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>

  <body>
    <div id="root"></div>
    <!-- 注意引用顺序 -->
    <script src="lib/react.development.js"></script>
    <script src="lib/react-dom.development.js"></script>
    <script src="lib/babel.min.js"></script>
    <script type="text/babel">
      function VDOM() {
        flag = false;
        if (flag) {
          return <h1>我是flag=true</h1>;
        } else {
          return <h1>我是flag=false</h1>;
        }
      }

      // 渲染虚拟 DOM
      ReactDOM.render(<VDOM />, document.getElementById("root"));
    </script>
  </body>
</html>
```

### JSX 中的列表渲染

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>

  <body>
    <div id="root"></div>
    <!-- 注意引用顺序 -->
    <script src="lib/react.development.js"></script>
    <script src="lib/react-dom.development.js"></script>
    <script src="lib/babel.min.js"></script>
    <script type="text/babel">
      function VDOM() {
        const numbers = [1, 2, 3, 4, 5];
        const listItems = numbers.map((number) => (
          <li key={number}>{number}</li>
        ));
        return listItems;
      }

      // 渲染虚拟 DOM
      ReactDOM.render(<VDOM />, document.getElementById("root"));
    </script>
  </body>
</html>
```

#### key

key 帮助 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识

一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的字符串

### JSX 中的绑定属性

1.JSX 绑定内容
在 JSX 中只要看到{} 就会当作 js 解析(执行里面的 js 代码)
所以无论是绑定属性，还是绑定类名，还是绑定样式，只要将字符串改为{}
然后再通过 JS 动态获取，动态绑定即可

2.绑定普通属性

```html
<p title="我是标题">我是段落</p>
<p title="{message}">我是段落</p>
```

3.绑定类名(className)
由于 JSX 本质是转换成 JS 代码, 而在 JS 中 class 有特殊含义, 所以不能使用
同理可证, 但凡是属性名称是 JS 关键字的都不能直接使用

4.绑定样式(style)
由于样式是键值对形式的, 所以在 JSX 中如果想要动态绑定样式
必须将样式放到一个对象中, 并且所有以-连接的样式名称都要转换成驼峰命名

```jsx
<p style={{ color: "red", fontSize: "50px" }}>绑定样式</p>
```

### JSX 语法总结

#### jsx 语法规则

 1.定义虚拟 DOM 时，不要写引号。

 2.标签中混入 JS 表达式时要用{}。

 3.样式的类名指定不要用 class，要用 className。

 4.内联样式，要用 style={  { key:value }  }的形式去写。

 5.只有一个根标签

 6.标签必须闭合

 7.标签首字母

 (1).若小写字母开头，则将该标签转为 html 中同名元素，若 html 中无该标签对应的同名元素，则报错。

 (2).若大写字母开头，react 就去渲染对应的组件，若组件没有定义，则报错。

#### 区分：【js 语句(代码)】与【js 表达式】

 1.表达式：<span style="color:red">一个表达式会产生一个值</span>，可以放在任何一个需要值的地方

 下面这些都是表达式：

 (1). a

 (2). a+b

 (3). demo(1)

 (4). arr.map()

 (5). function test () {}

 2.语句(代码)：

 下面这些都是语句(代码)：

 (1).if(){}

 (2).for(){}

 (3).switch(){case:xxxx}



## 受控组件

在 HTML 中，表单元素（如`<input>`、 `<textarea>` 和 `<select>`）之类的表单元素通常自己维护 state，并根据用户输入进行更新。

对于受控组件来说，输入的值始终由 React 的 state 驱动。

## 非受控组件

说明:对于某一个表单元素,借助于 ref，使用原生 DOM 方式来获取表单元素值的这样的元素叫做非受控组件
ref的作用:获取 DOM 或组件

```jsx
import React from "react";

class Refcom extends React.Component {
  constructor() {
    super();
    // 通过 React.createRef 创建 ref 对象
    this.txt = React.createRef();
  }

  fn = () => {
    // 输出 ref 对象
    console.log(this.txt);
  };
  render() {
    return (
      <React.Fragment>
        <div style={{ background: "pink", marginBottom: "20px" }}>
          <h1>ref 获取 node</h1>
          <input
            type="text"
            /* 绑定 ref  */
            ref={this.txt}
            /* 点击输出 ref 对象 */
            onClick={this.fn}
            placeholder="点击我"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Refcom;
```

![image-20210510201119630](https://gitee.com/qianshilei/test/raw/master/img/image-20210510201119630.png)





## 获取 Dom 元素

React 中通过 ref 获取 Dom 元素

### 何时使用 Refs

下面是几个适合使用 refs 的情况：

- 管理焦点，文本选择或媒体播放。
- 触发强制动画。
- 集成第三方 DOM 库。

React 会在组件挂载时给 `current` 属性传入 DOM 元素，并在组件卸载时传入 `null` 值。`ref` 会在 `componentDidMount` 或 `componentDidUpdate` 生命周期钩子触发前更新。

一个简单的使用案例

```jsx
function App(){
    let divInput = useRef();
    // class 组件使用 createRef() 创建
	const getDivRef = () =>{
        console.log(divInput);
    }
    return (
        <div ref={divInput}>
			<button onClick={getDivRef}>点击获取 ref</button>
		</div>)
}
```

### Refs 转发

为什么要转发?我们先来看一个需求.

1. 定义一个组件 Father,一个组件 Son.
2. 在 Son 组件里面定义一个 input和button,点击button会出现 input 里面会出现 Hello (通过操作 Dom 的方式).
3. 在 Father 组件里面定义一个 button 操作 Son 里面的 input 出现 Hello.

步骤一 : 实现子组件点击安装 input  出现 Hello

```jsx {20,24}
import React, { forwardRef, useRef } from "react";
const ForwardRef = () => {
  return (
    <div>
      <Father></Father>
    </div>
  );
};
const Father = () => {
  return (
    <div>
      <button>我是 Father </button>
      <Son></Son>
    </div>
  );
};
const Son = () => {
  let inputRef = useRef();
  const changeInputValue = () => {
    inputRef.current.value = "Hello";
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={changeInputValue}>我是 Son </button>
    </div>
  );
};

export default ForwardRef;
```

步骤二 : 实现父组件点击安装 input  出现 Hello

```jsx {10,15}
import React, { forwardRef, useRef } from "react";
const ForwardRef = () => {
  return (
    <div>
      <Father></Father>
    </div>
  );
};
const Father = () => {
  let inputRef = useRef();
  return (
    <div>
      <button>我是 Father </button>
      {/* 报错:Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()? */}
      <Son ref={inputRef}></Son>
    </div>
  );
};
const Son = () => {
  let inputRef = useRef();
  const changeInputValue = () => {
    inputRef.current.value = "Hello";
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={changeInputValue}>我是 Son </button>
    </div>
  );
};

export default ForwardRef;
```

我们可能会想当然的直接给 Son 组件添加 ref 但是 React 会报错,此时就需要使用 Refs 转发,使用的 APi 为 React.forwardRef

```jsx {10-13,23-25}
import React, { forwardRef, useRef } from "react";
const ForwardRef = () => {
  return (
    <div>
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



## 组件

- 可以将UI切分成一些独立的、可复用的部件，这样你就只需专注于构建每一个单独的部件
- 组件从概念上类似于 JavaScript 函数。它接受任意的入参（即 “props”），并返回用于描述页面展示内容的 React 元素

### 组件的渲染

- React元素不但可以是DOM标签，还可以是用户自定义的组件
- 当 React 元素为用户自定义组件时，它会将 JSX 所接收的属性（attributes）转换为单个对象传递给组件，这个对象被称之为 `props`
- 组件名称必须以大写字母开头
- 组件必须在使用的时候定义或引用它
- 组件的返回值只能有一个根元素



### 定义函数组件

```jsx
import React from "react";

export default function Function() {
  return <div>这是函数组件</div>;
}
```

### 定义类组件

```jsx
import React, { Component } from "react";

export default class Class extends Component {
  render() {
    return <div>这是类组件</div>;
  }
}
```



## 状态 state

- 组件的数据来源有两个地方，分别是属性对象和状态对象
- 属性是父组件传递过来的(默认属性，属性校验)
- 状态是自己内部的,改变状态唯一的方式就是`setState`
- 属性和状态的变化都会影响视图更新

```jsx {13}
import React, { Component } from "react";

export default class State extends Component {
  state = {
    msg: "你好",
  };
  render() {
    return (
      <div>
        <div>{this.state.msg}</div>
        <button
          onClick={() =>
            // 状态是自己内部的,改变状态唯一的方式就是`setState`
            this.setState({
              msg: "我被更新了",
            })
          }
        >
          点我更新数据
        </button>
      </div>
    );
  }
}
```

### State 的更新可能是异步的

- 出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用
- 因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态
- 可以让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数

```jsx
import React, { Component } from "react";
// 实现累加点击按钮数字加2
export default class AsyncState extends Component {
  state = {
    conut: 0,
  };
  update = () => {
    this.setState({
      conut: this.state.conut + 1,
    });
    this.setState({
      conut: this.state.conut + 1,
    });
    console.log("AsyncState.jsx   conut 的值是--", this.state.conut);
  };
  update2 = () => {
    this.setState((state) => {
      return {
        conut: state.conut + 1,
      };
    });
    this.setState((state) => {
      return {
        conut: state.conut + 1,
      };
    });
    console.log("AsyncState.jsx   conut 的值是--", this.state.conut);
  };
  render() {
    return (
      <div>
        <h1>{this.state.conut}</h1>
        <span>请看控制器</span>
        <button onClick={this.update}>点我累加</button>
        <button onClick={this.update2}>点我累加2</button>
      </div>
    );
  }
}
```

## 事件处理

- React 事件的命名采用小驼峰式（camelCase），而不是纯小写。
- 使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串
- 你不能通过返回 `false` 的方式阻止默认行为。你必须显式的使用`preventDefault`

```jsx
import React, { Component } from "react";

export default class HandlingEvents extends Component {
  state = {
    msg: "1",
  };
  test = (e) => {
    e.preventDefault();
    console.log(e);
  };
  render() {
    return (
      <div>
        <h1>事件处理</h1>
        <a href="//www.baidu.com" onClick={(e) => this.test(e)}>
          阻止默认行为
        </a>
        <button onClick={(e) => this.test(e)}>点击</button>
      </div>
    );
  }
}
```

### this 

你必须谨慎对待 JSX 回调函数中的 this,可以使用:

- 公共属性(箭头函数)
- 匿名函数
- bind进行绑定



```jsx {18-20}
import React, { Component } from "react";

export default class HandlingEvents extends Component {
  state = {
    msg: "1",
  };
  test = (e) => {
    e.preventDefault();
    console.log(e);
  };
  render() {
    return (
      <div>
        <h1>事件处理</h1>
        <a href="//www.baidu.com" onClick={(e) => this.test(e)}>
          阻止默认行为
        </a>
        <button onClick={(e) => this.test(e)}>箭头函数点击</button>
        <button onClick={this.test}>普通调用函数点击</button>
        <button onClick={this.test.bind(this)}>bind点击</button>
      </div>
    );
  }
```



## 组件通信

### 父子通信-class 组件

1. 在 class 中的 state 定义变量
2. 在子组件的标签上面写入 key=value 的形式
3. 子组件中通过 this.props.key 获取值



### 父子通信-function 组件

1. 在 class 中的 state 定义变量
2. 在子组件的标签上面写入 key=value 的形式
3. 在函数组件的形参位置写上 props
4. 通过 props.key 获取父组件传过来的值

### 父子传参案例

- Father

```jsx
import React from "react";
import "./index.css";
import { Soncom, Soncom2 } from "../Soncom/index";
class Fathercom extends React.Component {
  state = {
    name: "刘德华",
  };
  render() {
    return (
      <div className="father">
        <h1>父子传参</h1>
        {/* class 子组件 */}
        <Soncom cname={this.state.name}></Soncom>
        {/* function 子组件 */}
        <Soncom2 cname="张学友"></Soncom2>
      </div>
    );
  }
}

export default Fathercom;
```

- Son
```jsx
   import React from "react";
   import "./index.css";
   export class Soncom extends React.Component {
     // 设置 class 子组件的参数的默认值
     static defaultProps = {
       age: 90,
     };
     render() {
       return (
         <div className="son">
           <h1>子组件</h1>
           <div>class 子组件传参</div>
           <span>
             传递的参数-----{this.props.cname}年龄{this.props.age}
           </span>
         </div>
       );
     }
   }
   
   export const Soncom2 = (props) => {
     const fn = () => {
       console.dir(Soncom2);
     };
   
     return (
       <div className="son2">
         <h1>子组件</h1>
         <div>function 子组件传参</div>
         <span>
           传递的参数----{props.cname}年龄{props.age}
         </span>
         <button onClick={fn}>测试</button>
       </div>
     );
   };
   // 设置 function 子组件的参数的默认值
   Soncom2.defaultProps = {
     age: 10,
   };
   // export default Soncom
```

![image-20210510202129212](https://gitee.com/qianshilei/test/raw/master/img/image-20210510202129212.png)



### 子父传参

1. 父组件里面定义一个函数 fn
2. 在子组件的标签上面写入 key=fn 的形式
3. 子组件里面定义一个函数 fns
4. 子组件调用 fns 方法,方法体内通过 this.props.key(传入的参数) 调用父组件的方法,完成传参

- Father

```jsx
import React from "react";
import "./index.css";
import { Soncom } from "../Soncom/index";
class Fathercom extends React.Component {
  state = {
    name: "刘德华",
  };

  Fatherfn(age) {
    console.log(age);
  }

  render() {
    return (
      <div className="father">
        {/* class 子组件 */}
        <Soncom cname={this.state.name} Fatherfn={this.Fatherfn}></Soncom>
      </div>
    );
  }
}

export default Fathercom;
```

- son

```jsx
import React from "react";
import "./index.css";
export class Soncom extends React.Component {
  // 设置 class 子组件的参数的默认值
  static defaultProps = {
    age: 90,
  };
  Sonfn = () => {
    this.props.Fatherfn("son子里面的" + this.props.age);
  };
  render() {
    return (
      <div className="son">
        <h1>子组件</h1>
        <div>class 子组件传参</div>
        <span>
          传递的参数-----{this.props.cname}年龄{this.props.age}
        </span>
        <button onClick={this.Sonfn}>子父传参</button>
      </div>
    );
  }
}
// export default Soncom
```



### 组件的props的数据类型的限制

 * 通过 [propTypes](https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html#proptypes)
 * npm install prop-types
 * 函数组件类组件

```jsx
class Person{
  static propTypes = {
    son: propTypes.string
  }
}
```

## Context(上下文)

- 在某些场景下，你想在整个组件树中传递数据，但却不想手动地在每一层传递属性。你可以直接在 React 中使用强大的`context`API解决上述问题
- 在一个典型的 React 应用中，数据是通过 props 属性自上而下（由父及子）进行传递的，但这种做法对于某些类型的属性而言是极其繁琐的（例如：地区偏好，UI 主题），这些属性是应用程序中许多组件都需要的。Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props

![contextapi](https://gitee.com/qianshilei/test/raw/master/img/contextapi.gif)

```jsx
import React, { Component } from "react";

let ContextMsg = React.createContext("你好");
export default class Context extends Component {
  render() {
    return (
      <ContextMsg.Consumer>
        {(value) => (
          <div>
            <h1>{value}</h1>
            <Son msg={value}></Son>
          </div>
        )}
      </ContextMsg.Consumer>
    );
  }
}

function Son(props) {
  return (
    <div>
      <h1>子组件</h1>
      <span>{props.msg}</span>
    </div>
  );
}
```





## 组件的生命周期

[生命周期演示网址)](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

![image-20210517181121093](https://gitee.com/qianshilei/test/raw/master/img/image-20210517181121093.png)

### 什么是生命周期

* 组件的生命周期:组件从被创建到挂载到页面中运行，再到组件不用时卸载的过程
* 意义:组件的生命周期有助于理解组件的运行方式、完成更复杂的组件功能、分析组件错误原因等 
* 生命周期的每个阶段总是伴随着一些方法调用，这些方法就是生命周期的钩子函数。
* 钩子函数的作用:为开发人员在不同阶段操作组件提供了时机。
* 只有 类组件 才有生命周期。

#### 创建时(挂载阶段)

执行时机:组件创建时(页面加载时) 
执行顺序: constructor() --> render() --> componentDidMount
函数的作用: 
        constructor()函数: 创建组件时最先执行 作用是: 1.初始化state 2.为事件处理程序绑定this
        render()函数: 每次组件渲染都会触发 作用: 渲染UI(注意: 不能调用setState())
        componentDidMount 组件挂载(完成DOM渲染)后， 作用: 1.发送网络请求 2.DOM操作

#### 更新时(更新阶段)

执行时机: 1.setState() 2.forceUpdate() 3.组件接收到新的props
说明: 以上三者任意一种变化，组件就会重新渲染
执行顺序: render() --> componentDidUpdate()
函数的作用:
    render： 每次组件渲染都会触发 作用:渲染UI(与挂载阶段是同一render)
    componentDidUpdate: 组件更新(完成DOM渲染)后，作用: 1.发送网络请求 2.DOM操作 注意: 如果要setState()必须放在一个if条件中

#### 卸载时(卸载阶段)

执行时机:组件从页面中消失
函数的作用: componentWillUnmount 当组件卸载(从页面中消失)时触发 作用:执行清理工作(比如:清理定时器等)

## shouldComponentUpdate

作用 : 当指定的值发生变化的时候才更新值

- 当一个组件的props或state变更，React会将最新返回的元素与之前渲染的元素进行对比，以此决定是否有必要更新真实的 DOM，当它们不相同时 React 会更新该 DOM
- 如果渲染的组件非常多时可以通过覆盖生命周期方法 shouldComponentUpdate 来进行优化
- shouldComponentUpdate 方法会在重新渲染前被触发。其默认实现是返回 true,如果组件不需要更新，可以在shouldComponentUpdate中返回 false 来跳过整个渲染过程。其包括该组件的 render 调用以及之后的操作

```jsx
import React, { Component } from "react";

export default class ShouldComponentUpdate extends Component {
  state = {
    count: 0,
  };
  add = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  // 返回 false 会阻止 组件更新
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count < 2) {
      return false;
    } else {
      return true;
    }
  }
  componentDidUpdate() {
    console.log("ShouldComponentUpdate.jsx 组件更新了");
  }
  render() {
    return (
      <div>
        <h1>ShouldComponentUpdate</h1>
        <div>
          <span>{this.state.count}</span>
          <button onClick={this.add}>点击更新</button>
        </div>
      </div>
    );
  }
}
```





## render-props和高阶组件

### React组件复用概述

 思考:如果两个组件中的部分功能相似或相同，该如何处理?  处理方式:复用相似的功能(联想函数封装)
 复用什么?1. state 2. 操作state的方法 (组件状态逻辑 )  两种方式:1. render props模式 2. 高阶组件(HOC)
 注意:这两种方式不是新的API，而是利用React自身特点的编码技巧，演化而成的固定模式(写法)

### render props 模式

 思路:将要复用的state和操作state的方法封装到一个组件中
 问题1:如何拿到该组件中复用的state?
 在使用组件时，添加一个值为函数的prop，通过 函数参数 来获取(需要组件内部实现) 
 问题2:如何渲染任意的UI?
 使用该函数的返回值作为要渲染的UI内容(需要组件内部实现)


### render props 模式

使用步骤
1.创建Mouse组件，在组件中提供复用的状态逻辑代码(1. 状态 2. 操作状态的方法)
2.将要复用的状态作为 props.render(state) 方法的参数，暴露到组件外部
3.使用 props.render() 的返回值作为要渲染的内容

APP.jsx

```jsx
import React, { Component } from 'react'
import Mouse from '../Mouse'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 写法一 */}
        <Mouse wdnmd={(mouse)=>(<div>{mouse.x}---{mouse.y}</div>)}></Mouse>
        {/* 写法二 */}
        {/* <Mouse>
          {(mouse)=>(<div>{mouse.x}---{mouse.y}</div>)}
        </Mouse> */}
      </div>
    )
  }
}
```

Mouse.jsx

```jsx
import React from "react"

class Mouse extends React.Component {
  // 需求: 完成坐标显示
  
  state = {
    x: 0,
    y: 0
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.fn)
  }

  fn = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  render() {
    // 写法一
    return this.props.wdnmd(this.state)
    // 写法二
    // return this.props.children(this.state)
  }
}


export default Mouse
```



### 演示Mouse组件的复用

Mouse组件负责:封装复用的状态逻辑代码(1. 状态 2. 操作状态的方法)  状态:鼠标坐标(x, y)
 操作状态的方法:鼠标移动事件
 传入的render prop负责:使用复用的状态来渲染UI结构


### children代替render属性

 注意:并不是该模式叫 render props 就必须使用名为render的prop，实际上可以使用任意名称的prop  把prop是一个函数并且告诉组件要渲染什么内容的技术叫做:render props模式
 推荐:使用 children 代替 render 属性



### 高阶组件

#### 什么是高阶组件(higher order component)

- 高阶组件：实际上就是一个函数，这个函数能够接受一个参数组件，然后，返回一个增强后的组件
- 参数组件：就是需要被包装的组件
- 返回的组件：增强后的组件，这个组件中就是通过 props 来接收到复用的状态逻辑的

#### 高阶组件的封装



```jsx
import React from "react";
const WidthMouse = (Params) => {
  class Mouse extends React.Component {
    state = {
      x: 0,
      y: 0,
    };

    componentDidMount() {
      window.addEventListener("mousemove", this.fn);
    }

    fn = (e) => {
      this.setState({
        x: e.clientX,
        y: e.clientY,
      });
    };

    render() {
      // return <Params x={this.state.x} y={this.state.y}></Params>
      return <Params {...this.state}></Params>;
    }
  }
  // Mouse.displayName=Params.name
  // console.dir(Mouse);
  return Mouse;
};

export default WidthMouse;

// 创建一个组件(函数组件)
const Position = (props) => {
  return (
    <div>
      <p>
        {props.x}--{props.y}
      </p>
    </div>
  );
};
/* 包装一下 */
let a = WidthMouse(Position);
```

#### 给高阶组件添加 displayName

- displayName：用于设置 react-dev-tools （浏览器中的react插件） 中组件的展示名称
- 注意：该属性仅仅用于设置展示名称，并不会对组件功能产生影响，所以，如果不想在 react-dev-tools 中进行区分，实际上，可以省略该设置。



```jsx
const withMouse = (WrappedComponent) => {
  class Mouse extends React.Component {
    ...
  }

  // 给高阶组件设置名称，将来在 react-dev-tools 工具中，能够区分到底是哪一个高阶组件包装的组件
  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
  }
  Mouse.displayName = `WithMouse${getDisplayName(WrappedComponent)}`

  return Mouse
}
```

#### 给高阶组件传递属性

- 推荐：在高阶组件中，将高阶组件接收到的 props 一起传递给被包装的组件；这样，才能在 被包装 组件中获取到传递的额外属性。
- 目的：防止 props 丢失问题

```jsx
...
class Mouse extends React.Component {
    state = {
      x: 0,
      y: 0,
    };

    componentDidMount() {
      window.addEventListener("mousemove", this.fn);
    }

    fn = (e) => {
      this.setState({
        x: e.clientX,
        y: e.clientY,
      });
    };

    render() {
        // 多写上一句 ...this.props
      return <Params {...this.state} {...this.props}></Params>;
    }
  }
```

## setState()的说明

#### 更新数据

1.setState() 是异步更新数据的
2.注意:使用该语法时，后面的 setState() 不要依赖于前面的 setState()
3.可以多次调用 setState() ，只会触发一次重新渲染



```jsx
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Father extends React.Component {
  state = {
    count: 0,
  };

  fn=() => {
    // 多次调用 setState 只会执行一次渲染
    this.setState({
      count:1
    })
    this.setState({
      count:2
    })
    this.setState({
      count:3
    })
  }
  render() {
    console.log("渲染")
    return (
    <div id="Father">
      <h1>Father</h1>
      <span>{this.state.count}</span>
      <button onClick={this.fn}>点击Father按钮 ++</button>
    </div>
    );
  }
}
```

#### 推荐语法

1.推荐:使用 setState((state, props) => {}) 语法
2.参数state:表示最新的state
3.参数props:表示最新的props

```jsx {11-16}
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Father extends React.Component {
  state = {
    count: 0,
  };

  fn=() => {
    this.setState((newstate,newprops)=>{
      // newstate.count++
      return {
      count: newstate.count+1
      }
    })

  }
  render() {
    console.log("渲染",this.state.count)
    return (
    <div id="Father">
      <h1>Father</h1>
      <span>{this.state.count}</span>
      <button onClick={this.fn}>点击Father按钮 ++</button>
    </div>
    );
  }
}
```

#### 第二个参数

1.场景:在状态更新(页面完成重新渲染)后立即执行某个操作 
2.语法: setState(updater[, callback])

```jsx {16-19}
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Father extends React.Component {
  state = {
    count: 0,
  };

  fn = () => {
    this.setState((newstate, newprops) => {
      // newstate.count++
      return {
        count: newstate.count + 1,
      };
    },()=>{
      console.log("setState 执行后立即执行")
    });
    console.log("我比 setState 打印得还要快呢");
  };
  render() {
    console.log("渲染", this.state.count);
    return (
      <div id="Father">
        <h1>Father</h1>
        <span>{this.state.count}</span>
        <button onClick={this.fn}>点击Father按钮 ++</button>
      </div>
    );
  }
}
```

## 组件更新机制

 setState() 的两个作用: 1. 修改 state 2. 更新组件(UI)
 过程:父组件重新渲染时，也会重新渲染子组件。但只会渲染当前组件子树(当前组件及其所有子组件)

## 组件性能优化

### 减轻state

 减轻 state:只存储跟组件渲染相关的数据(比如:count / 列表数据 / loading 等) 
 注意:不用做渲染的数据不要放在 state 中，比如定时器 id等
 对于这种需要在多个方法中用到的数据，应该放在 this 中

```js
class Hello extends Component { componentDidMount() {
// timerId存储到this中，而不是state中 this.timerId = setInterval(() => {}, 2000)
}
componentWillUnmount() {
clearInterval(this.timerId) }
render() { ... } }

```

### 避免不必要的重新渲染

 组件更新机制:父组件更新会引起子组件也被更新，这种思路很清晰
 问题:子组件没有任何变化时也会重新渲染
 如何避免不必要的重新渲染呢?
 解决方式:使用钩子函数 shouldComponentUpdate(nextProps, nextState)
 作用:通过返回值决定该组件是否重新渲染，返回 true 表示重新渲染，false 表示不重新渲染
 触发时机:更新阶段的钩子函数，组件重新渲染前执行 (shouldComponentUpdate  render)

```js
class Hello extends Component {
shouldComponentUpdate() {
// 根据条件，决定是否重新渲染组件 return false
}
  render() {...}
}
```

### 纯组件(类组件)

 纯组件:PureComponent 与 React.Component 功能相似
 区别:PureComponent 内部自动实现了 shouldComponentUpdate 钩子，不需要手动比较
 原理:纯组件内部通过分别 对比 前后两次 props 和 state 的值，来决定是否重新渲染组件

 说明:纯组件内部的对比是 shallow compare(浅层对比)
 对于值类型来说:比较两个值是否相同(直接赋值即可，没有坑)
 注意:state 或 props 中属性值为引用类型时，应该创建新数据，不要直接修改原数据!(示例)

```js
class Hello extends React.PureComponent { 
  render() {
      return (
        <div>纯组件</div> 
      )
  } 
}
```



### 函数组件的优化

1.函数组件没有继承关系--> class A extends React.Component 没有这样的东西  不能用 pureComponent来优化
2.没有生命周期方法 --> shouldComponentUpdate() 不能用

解决方案: React.memo()高阶组件来优化函数组件

```jsx
import React, {PureComponent} from 'react';

class ClassPure extends PureComponent {
  state={
    msg:"hello 纯组件"
  }
  render() {
    return (
        <div>
          {this.state.msg}
          <span>测试</span>
        </div>
    );
  }
}
```





## 将某元素或组件渲染到父组件以外的标签上

[Portals – React (reactjs.org)](https://zh-hans.reactjs.org/docs/portals.html)

```jsx
import React, {Component} from 'react';
import ReactDOM from "react-dom";
class Portal extends Component {
  render() {
    const Portal=<div>Portal</div>
    // 将标签渲染到 html 里面的指定元素内
    return ReactDOM.createPortal(Portal,document.getElementById("app"))
  }
}
```



## Fragment 占位标签

[Fragments – React (reactjs.org)](https://zh-hans.reactjs.org/docs/fragments.html)

```html
<React.Fragment></React.Fragment>
<Fragment></Fragment>
<></>
```

```jsx
class Index extends Component {
  render() {
    return (
        <React.Fragment>
          Fragment
        </React.Fragment>
    );
  }
}
```



## StrictMode 严格模式

作用: 开启严格模式，提示 代码中的过时的属性或方法 可能存在的问题

```jsx
class Index extends Component {
  render() {
    return (
        <React.StrictMode>
			<div>严格模式</div>
        </React.StrictMode>
    );
  }
}
```

## CSS模块化

- 把xxxx.css 改成 xxxx.module.css

- 把xxxx.module.css引入到对应的组件中 import xxxxStyle from "./xxxx.module.css"

- 在组件中使用   

  - ```html
    <p className={xxxxStyle.类名}>Hello World</p>
    ```



index.module.css

```css
.hello span{
  color: hotpink;
}
```

index.jsx 

```jsx {8}
import React, {Component} from 'react';
import ModuleStyle from "./index.module.css";

class Index extends Component {
  render() {
    return (
        <div>
          <h1 className={ModuleStyle.hello}>
            <span>css 模块化</span>
          </h1>
        </div>
    );
  }
}

export default Index;
```



## css in js

### styled-component 包的基本使用

使用styled-component
1.安装styled-component
2.在你要使用styled-component的组件中 引入这个包
3.使用 const 组件名称 = styled.标签名`和以前一样的写样式`
4.在render函数中的html结构中使用组件名称

```jsx {4-10}
import React from "react";
import styled from "styled-components";
// 创建一个 div组件里面的样式是
const Div = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: green;
  opacity: ${(props) => props.opacity};
  transition: all 3s;
`;
class App extends React.Component {
  // div的初始状态
  state = {
    width: "0px",
    height: "0px",
    opacity: 0,
  };

  // div的改变后的状态
  btnClick = () => {
    this.setState({
      width: "60px",
      height: "60px",
      opacity: 1,
    });
  };

  render() {
    return (
      <div className="one">
        <Div {...this.state}></Div>
        <button onClick={this.btnClick}>按钮</button>
      </div>
    );
  }
}

export default App;
```



#### 样式继承

```jsx
const Div = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: green;
  opacity: ${(props) => props.opacity};
  transition: all 3s;
`;

// 继承样式
const Button = styled(Div)`
	background-color: skyblue;
`
```



## 动画

[React Transition Group (reactcommunity.org)](http://reactcommunity.org/react-transition-group/transition)

### CSSTransition 包的使用

1.安装插件npm install react-transition-group --save
2.在使用过渡效果的组件中导入 import { CSSTransition } from "react-transition-group"
3.使用导入的CSSTransition组件把需要过渡的标签包起来
4.书写过渡的样式 xxx-enter代表进入动画执行之前绑定的类名 xxx-enter-active代表进入动画执行中绑定的类名 xxx-enter-done代表进入动画执行完绑定的类名 别忘了在active写transition属性
5.设置CSSTransition的属性 in属性(触发动画进入或退出的状态)  classNames属性(告诉react-transition-group 类的前缀是什么)  timeout属性(动画运行多久 退出  一定要大于等于transition的时间)



index.css

```css
/* xxx-enter 进入动画执行之前绑定的类名 */
/* xxx-enter-active 进入动画执行中绑定的类名 */
/* xxx-enter-done 进入动画执行完绑定的类名 */

.box-enter {
  /* xxx-enter 进入动画执行之前绑定的类名 */
  width: 0px;
  height: 0px;
  opacity: 0;
  background-color: burlywood;
}

.box-enter-active {
  /* xxx-enter-active 进入动画执行中绑定的类名 */
  width: 100px;
  height: 100px;
  opacity: 1;
  background-color: burlywood;
  transition: all 3s;
}

.box-enter-done {
  /* xxx-enter-active 进入动画执行中绑定的类名 */
  width: 100px;
  height: 100px;
  opacity: 1;
  background-color: burlywood;
}

/* 动画退出执行的动画 */
.box-exit {
  /* xxx-exit 退出动画执行之前绑定的类名 */
  width: 100px;
  height: 100px;
  opacity: 1;
  background-color: skyblue;
}

.box-exit-active {
  /* xxx-exit-active 退出动画执行中绑定的类名 */
  width: 10px;
  height: 10px;
  opacity: 0.5;
  background-color: red;
  transition: all 3s;
}

.box-exit-done {
  /* xxx-exit-active 退出动画执行完绑定的类名 */
  width: 0px;
  height: 0px;
  opacity: 0;
}
```





index.jsx

```jsx
import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import "./index.css";
// CSSTransition有三个状态：
// + appear: 初始
//   + enter : 进入
//     + exit；: 退出
// 当组件第一次加载时候会自动查找
//   - appear / -appear - active / -appear - done
// 当组件显示时会自动查找
//   - enter / -enter - active / -enter - done
// 当组件退出时会自动查找
//   - exit / -exit - active / -exit - done
export default class index extends Component {
  state = {
    isShow: false,
  };
  fn = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
  render() {
    return (
      <React.Fragment>
        <div id="two">
          <CSSTransition
            in={this.state.isShow}
            classNames="box"
            timeout={3000}
            // 动画加载的时候才显示 dom 元素
            unmountOnExit
          >
            <div></div>
          </CSSTransition>
          <button onClick={this.fn}>点击显示动画</button>
        </div>
      </React.Fragment>
    );
  }
}
```



### SwitchTransition切换动画

```jsx
// 使用SwitchTransition的过程
// 1.导入SwitchTransition
// 2.使用SwitchTransition包裹CSSTransition
// 3.注意: 以前在CSSTransition中用的属性in 现在用的key
// 4.写变化的样式 出来 进去  类名的前缀classNames
// 5.timeout 时间

class App extends React.Component{
    render(){
      <SwitchTransition>
        <CSSTransition key={this.state.flag} classNames="box" timeout={1000}>
          <button onClick={this.btnClick}>{this.state.flag ? "Hello,World" : "GoodBye,World"}</button>
        </CSSTransition>
      </SwitchTransition>
    }
}
```



## 路由

### 如何在React中安装路由

```shell
npm install react-router-dom
```

[文档地址](https://reactrouter.com/web)

### 基本使用

#### 常用组件的说明

- BrowserRouter 组件：用来包裹整个React应用，整个应用中只需要使用一次即可。

- Link 组件：最终会生成一个 a 标签，通过 to 属性指定 pathname（history /） 或 hash（哈希模式 #）

- Route 组件：用来配置路由规则和要展示的组件
  - path 属性：配置路由规则
  - component 属性：指定当前路由规则匹配时要展示的组件
  - Route 组件放在哪，组件内容就展示在哪。并且每一个路由都是一个单独的 Route 组件。

- react-router4 之前, 所有路由代码都是统一放到 react-router 中管理的
  - react-router4 开始, 拆分为了两个包 react-router-dom 和 react-router-native
    + react-router-dom 在浏览器中使用路由
    + react-router-native 在原生应用中使用路由

- BrowserRouter history模式使用的是H5的特性, 所以兼容性会比HashRouter hash模式差一些
  - 在企业开发中如果不需要兼容低级
    版本浏览器, 建议使用BrowserRouter如果需要兼容低级版本浏览器, 那么只能使用 HashRouter
- 无论是 Link 还是 Route 都只能放到 BrowserRouter 和 HashRouter 中才有效



#### 路由的执行过程

- 1 当点击 Link （a标签）的时候，就会修改浏览器中的 pathname
- 2 只要 浏览器地址栏中的 pathname 发生改变，React 路由就会监听到这个改变
- 3 React 路由监听到 pathname 改变后，就会遍历所有 Route 组件，分别使用 Route 组件中的 path 路由规则，与当前的 浏览器地址栏中的pathname进行匹配
- 4 只要匹配成功，就会把当前 Route 对应的组件，展示在页面中

- 注意：匹配时，不是找到第一个匹配的路由就停下来了。而是： 所有的 Route 都会进行匹配，只要匹配就会展示该组件。
  - 也就是说：在一个页面中，可以有多个 Route 同时被匹配

#### 路由的使用-案例



<iframe src="https://codesandbox.io/embed/react-router-6cj3u?fontsize=14&module=%2Fsrc%2FApp.jsx&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-router"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>


#### 路由传参



<iframe src="https://codesandbox.io/embed/react-router-params-2wdtu?fontsize=14&hidenavigation=0&module=%2Fsrc%2FApp.jsx&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-router- params"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>


#### 路由嵌套-子路由

<iframe src="https://codesandbox.io/embed/react-router-nesting-ziluyou-f8ukn?fontsize=14&module=%2Fsrc%2FApp.jsx&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-router-nesting-子路由"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
#### react-router-config 统一路由管理

为了像 vue-router 一样方便的管理路由所以需要这样一个插件

部分源码展示

```jsx
import React from "react";
import { Switch, Route } from "react-router";

function renderRoutes(routes, extraProps = {}, switchProps = {}) {
  return routes  (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={props =>
            route.render ? (
              route.render({ ...props, ...extraProps, route: route })
            ) : (
              <route.component {...props} {...extraProps} route={route} />
            )
          }
        />
      ))}
    </Switch>
  ) : null;
}

export default renderRoutes;

```



## 总结

[元素渲染 – React (docschina.org)](https://react.docschina.org/docs/rendering-elements.html)

- React 元素是[不可变对象](https://en.wikipedia.org/wiki/Immutable_object)。一旦被创建，你就无法更改它的子元素或者属性。一个元素就像电影的单帧：它代表了某个特定时刻的 UI。

- React DOM 只会更新实际改变了的内容

- 组件名称必须以大写字母开头。

  React 会将以小写字母开头的组件视为原生 DOM 标签

- 正确地使用 State [State & 生命周期 – React (docschina.org)](https://react.docschina.org/docs/state-and-lifecycle.html)

  - 不要直接修改 State,而是应该使用 `setState()`
  - State 的更新可能是异步的

  - 数据是向下流动的

- 事件默认行为
  
  - React 不能通过返回 false 来阻止默认行为必须显现的调用 preventDefault
- React 里面的事件对象是合成事件 [事件处理 – React (docschina.org)](https://react.docschina.org/docs/handling-events.html)
- 事件处理程序传递参数

```jsx
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
//上述两种方式是等价的

在这两种情况下，React 的事件对象 e 会被作为第二个参数传递。如果通过箭头函数的方式，事件对象必须显式的进行传递，而通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。
```



- 事件回调函数

```jsx
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // 此语法确保 `handleClick` 内的 `this` 已被绑定。
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}
// 此语法问题在于每次渲染 LoggingButton 时都会创建不同的回调函数。在大多数情况下，这没什么问题，但如果该回调函数作为 prop 传入子组件时，这些组件可能会进行额外的重新渲染。我们通常建议在构造器中绑定或使用 class fields 语法来避免这类性能问题。
```

- 在[受控组件](https://react.docschina.org/docs/forms.html#controlled-components)上指定 value 的 prop 会阻止用户更改输入。如果你指定了 `value`，但输入仍可编辑，则可能是你意外地将`value` 设置为 `undefined` 或 `null`。
