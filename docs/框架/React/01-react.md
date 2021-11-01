---
title: React介绍
date: 2021-05-07
tags:
  - React
---

## 虚拟 DOM 和真实 DOM

虚拟 DOM 是用普通 js 对象来描述 DOM 结构。

```html
<body>
  <div id="app">
    <div class="example">例子</div>
  </div>

  <script>
    // 虚拟DOM和真实DOM
    // 虚拟DOM概念是随着React的诞生而诞生，那么虚拟DOM是什么？
    // 就拿上面的整个div来做个例子，用虚拟DOM表达：
    let test = {
      nodeName: "div",
      props: {
        id: "app",
      },
      children: [
        {
          nodeName: "div",
          props: {
            className: "example",
          },
          content: "例子",
        },
      ],
    };
    // test 相当于
    // <div id="app">
    //     <div class="example">例子</div>
    // </div>
    // 这就是虚拟DOM，作用就是提高了浏览器计算DOM的效率

    // 那么真实DOM就是浏览器上可以看见的DOM元素，也就是所谓的
    // 用标签组成的页面
  </script>
</body>
```

## React 基本使用

这可以说是 React 基本使用的基本原理，可是实际上的用处不大，因为代码量大且不清晰，理解就好。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="../lib/react.development.js"></script>
    <script src="../lib/react-dom.development.js"></script>
    <title>Document</title>
  </head>

  <body>
    <div id="app"></div>

    <script>
      // React基本使用
      // 第一步，创建虚拟DOM => React.createElement(标签的名字, 标签的属性,标签的内容)
      // 如果当你写了这些内容，跳转到浏览器没起效果，首先看一下引入了react的包没有
      // 这个创建虚拟DOM，其实就相当于前面所讲的虚拟DOM用对象来表达，效果一样

      // 第一种：当没有标签的属性的时候，填null
      let test = React.createElement("span", null, "例子1");

      // 第二种：有标签的属性
      // 注：1.标签的属性要用小驼峰命名规则
      // 2.当给标签属性添加class类名的时候，不能单纯用class，
      // 浏览器会出报Invalid DOM property `class`. Did you mean `className`?错误
      // 那么此时就修改为className即可
      let click = () => {
        alert("例子2");
      };
      // 当然在标签内部可以插入标签
      let inTest1 = React.createElement("div", null, "内部例子");

      // 如果标签内容不止文本，直接在后面‘,’添加即可
      let test1 = React.createElement(
        "div",
        { title: "例子2", onClick: click, className: "example" },
        "例子2",
        inTest1
      );

      // 第二步，将虚拟DOM渲染到真实页面上
      // ReactDOM.render(虚拟dom, 挂载到哪个元素上)
      // 注：如果多次调用render()方法，不会出现渲染多个dom元素，而是不断更新，仅此而已
      ReactDOM.render(test, document.getElementById("app"));
      ReactDOM.render(test1, document.getElementById("app"));
    </script>
  </body>
</html>
```

## JSX 语法

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="../lib/react.development.js"></script>
    <script src="../lib/react-dom.development.js"></script>
    <script src="../lib/babel.min.js"></script>
    <title>Document</title>
  </head>

  <body>
    <div id="app"></div>

    <script type="text/babel">
      // JSX语法
      // 要使用JSX语法，首先要引入babel包，然后在script标签中
      // 添加 type="text/babel" 属性

      // 首先是前面所写的代码
      // 如果你要在标签内容内添加标签，会非常的不方便，而且不好
      let test = React.createElement("span", null, "例子1");
      ReactDOM.render(test, document.querySelector("#app"));

      // 那么转换一下思想，既然React.createElement()是添加dom元素，那么是否可以手动写呢？
      let testFinish = <div>实现想法</div>;
      ReactDOM.render(testFinish, document.querySelector("#app")); // OK

      // 那么接下来就可以说一下，如何用JSX语法，其实道理跟上边差不多
      // 直接返回一个标签内容，想干什么就直接写，这样看来
      // 很直观的，用起来就比那个React.createElement()要舒服得多
      function Test1() {
        return (
          <div>
            <span>哈哈哈哈</span>
          </div>
        );
      }
      ReactDOM.render(<Test1 />, document.querySelector("#app"));

      // 那么接下来就有个问题，重要
      // 既然都不需要用到React.createElement()，那么这个包是不是可以不用了
      // 这是不行的，很简单，可以直接把这个包注释了试一下
      // 报错，React is not defined
      // <script src="../lib/react.development.js" /> => 创建虚拟DOM
      // <script src="../lib/react-dom.development.js" /> => 渲染虚拟dom到页面上
      // 这两个东西缺一不可，首先就要创建，后渲染
    </script>
  </body>
</html>
```

## JSX 中使用表达式

在 JSX 中只要看到{}就会当做 JS 解析（执行里面的 JS 代码），所以无论是绑定属性、还是绑定类名、还是绑定样式、只需要将字符串改为{}，然后再通过 JS 动态获取, 动态绑定即可。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="../lib/react.development.js"></script>
    <script src="../lib/react-dom.development.js"></script>
    <script src="../lib/babel.min.js"></script>
    <title>Document</title>
    <style>
      p {
        padding: 0;
        margin: 0;
      }
    </style>
  </head>

  <body>
    <div id="app"></div>

    <script type="text/babel">
      // JSX中使用表达式
      // 注：在{}中不能出现语句，比如if判断、for循环...
      // OK指能显示；ON指不能显示
      let num = 3;
      let arr = [1, 2, 3, 4];
      let False = false + "";
      function Test() {
        // 原本的undefined、true等是不能显示，但是你可以转换成字符串形式，这样在页面上也能显示
        return (
          <div>
            <p>{num}→OK</p>
            <p>{1 + 3}→OK</p>
            <p>{"  "}→ON</p>
            <p>{[]}→ON</p>
            <p>{[].toString()}→ON</p>
            <p>{[1, 2, 3]}→OK</p>
            <p>{arr[1] * arr[3]}→OK</p>
            <p>{undefined}→ON</p>
            <p>{undefined + ""}→ON</p>
            <p>{false}→ON</p>
            <p>{False}→OK</p>
            <p>{1 == 2 ? "等于" : "不等于"}→OK</p>
          </div>
        );
      }
      ReactDOM.render(<Test />, document.querySelector("#app"));
    </script>
  </body>
</html>
```

## JSX 中的条件渲染

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="../lib/react.development.js"></script>
    <script src="../lib/react-dom.development.js"></script>
    <script src="../lib/babel.min.js"></script>
    <title>Document</title>
  </head>

  <body>
    <div id="app"></div>

    <script type="text/babel">
      // JSX中的条件渲染
      let flag = true;
      // if/else判断
      function Test() {
        if (1 === 1) {
          return <div>等于</div>;
        } else {
          return <div>不等于</div>;
        }
      }

      // 三元运算符
      function Test() {
        return 1 === 2 ? <div>等于</div> : <div>不等于</div>;
      }

      // && 和 ||，只举&&的例子也差不多
      function Test() {
        // 只要前面为false直接跳出&&判断
        return flag && <div>false</div>;
      }

      ReactDOM.render(<Test />, document.querySelector("#app"));
    </script>
  </body>
</html>
```

## JSX 中的列表渲染

```html
<body>
  <div id="app"></div>

  <script type="text/babel">
    // JSX中的列表渲染
    let list = ["曹操", "曹阿瞒", "曹贼"];

    function Test() {
      // 注意，这里遍历其实是可以用forEach和map方法
      // 但是，forEach是没有返回值的，而虚拟DOM是需要返回值来显示到页面
      // 因此，forEach不起作用，但是遍历效果是执行的
      return (
        <ul>
          {list.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      );
    }

    ReactDOM.render(<Test />, document.querySelector("#app"));
  </script>
</body>
```

## JSX 中绑定属性

```html
<body>
  <div id="app"></div>

  <script type="text/babel">
    // JSX中绑定属性
    // 第一种：绑定普通属性
    let message = "谁人不想当曹操";
    function Test() {
      return (
        <div>
          <span title={message}></span>
          <input type="text" value={message} />
        </div>
      );
    }

    // 第二种：绑定样式
    // 注：这里要用{{}}并且里面的属性名要用小驼峰命名
    function Test() {
      return <div style={{ fontSize: "100px" }}>曹操</div>;
    }

    ReactDOM.render(<Test />, document.querySelector("#app"));
  </script>
</body>
```
