---
title: React组件的生命周期和render-props
date: 2021-05-12
tags:
  - React
---

## 组件的生命周期

### 挂载阶段

**constructor =>** **render => componentDidMount => 结束**

```jsx
// 挂载阶段
// 当将组件挂载到页面的同时，这三种方法或函数会被执行
// 执行顺序有先后
import React from "react";

class Finish extends React.Component {
  state = {
    aa: 1,
  };
  // 创建组件时最先执行
  // 作用：1.初始化state   2.为事件处理程序绑定this
  constructor() {
    super();
    console.log("1.创建组件时最先执行");
  }

  // 组件挂载(完成DOM渲染)后
  // 作用：1.操作DOM  2.请求数据
  componentDidMount = () => {
    console.log(
      "3.进行依赖于DOM节点的初始化，如需通过网络请求获取数据，此处是实例化请求的好地方"
    );
  };

  // 每次组件渲染都会触发
  // 当检测到状态发生了改变，render就会被执行，因此就会再次加载
  // 注意：在render内不能够使用setState，因为用了就相当于发生了状态改变，那么就会无限死循环
  render() {
    console.log("2.挂载阶段期间然后进入render");
    this.setState({
      aa: 3,
    }); // ON，报错：超过最大更新深度。

    // 那么是否可以改变种想法，进行判断，以此控制，不会超过更新深度
    if (this.state.aa === 1) {
      this.setState({
        aa: 3,
      });
    } // ON，虽然页面能够成功渲染，但是仍然有报错。
    // 在现有状态转换期间（例如在`render`中）无法更新。渲染方法应该纯粹是props和state的函数。
    // 因此，我们能够得出一个结论，在render函数中，最好不要使用setState方法。

    return <div>主组件</div>;
  }
}

export default Finish;
```

### 更新阶段

**render =>** **componentDidUpdate => 结束**

```jsx
// 更新阶段
// 不像挂载阶段，在刚页面渲染的时候就被执行
// 更新阶段的执行，是当组件数据状态发生改变的时候监听到了，然后执行
import React from "react";

class Finish extends React.Component {
  state = {
    name: "主组件",
    count: 1,
  };

  // 监听，若state状态发生了变化，就会进入此函数
  // 在componentDidUpdate不能够直接使用setState，因为会发生超过更新深度的报错
  // 但是它又不像render一样，直接不能用了，它能够通过条件判断，来控制setState的执行次数
  componentDidUpdate(prevProps, prevState) {
    console.log("OK，状态发生了变化，因此我执行了");
    // 返回的是props数据
    console.log(prevProps);

    // 返回的是更新之前的状态
    console.log(prevState);

    // console.log(this.state.count);
    let num = this.state.count;

    if (this.state.count <= 4) {
      this.setState({
        count: ++num,
      });
    } // OK，没有发生任何报错
  }

  // 点击改变名字
  handleClick = () => {
    this.setState({
      name: "新的主组件",
    });
  };

  render() {
    console.log("不用说，在更新阶段，只有render会在挂载就被执行");

    return <div onClick={this.handleClick}>{this.state.name}</div>;
  }
}

export default Finish;
```

### **卸载阶段**

**componentWillUnmount => 结束**

```jsx
// 卸载阶段
import React from "react";

import Experiment from "../Test1/index";

class Finish extends React.Component {
  state = {
    name: "主组件",
    count: 1,
    flag: false,
  };

  // 点击让实验组件消失
  handleClick = () => {
    console.log(11);
    this.setState({
      flag: true,
    });
  };

  render() {
    console.log("不用说，在更新阶段，只有render会在挂载就被执行");

    return (
      <div>
        <div onClick={this.handleClick}>{this.state.name}</div>
        {/* 注意，这里的组件消失，不是单纯的让他消失，加个什么display:none */}
        <Experiment class={this.state.flag}></Experiment>
        {/* 而是真正的在DOM中销毁了，只有这样才能触发componentWillUnmount方法 */}
        {this.state.flag || <Experiment></Experiment>}
      </div>
    );
  }
}

export default Finish;
```

```jsx
// 实验类组件
import React from "react";
import "./index.css";

class Experiment extends React.Component {
  componentWillUnmount() {
    console.log("实验类组件消失");
  }

  render() {
    return <div className={this.props.class ? "action" : ""}>实验类组件</div>;
    return <div>实验类组件</div>;
  }
}

export default Experiment;
```

```css
.action {
  display: none;
}
```

## render-props

最初写法

缺陷：当有两个或以上的组件需要用到当前功能组件中的功能时，无法复用这组件的功能，要重新再写一遍，这样会比较麻烦

```jsx
import React from "react";
import Features from "../Test1/index";

class Finish extends React.Component {
  render() {
    return (
      <div>
        <Features></Features>
      </div>
    );
  }
}

export default Finish;
```

```jsx
// 功能组件
import React from "react";
import "./index.css";

class Features extends React.Component {
  state = {
    x: "",
    y: "",
  };

  // 更新阶段的方法
  componentDidMount() {
    // 原生的事件函数
    // window.addEventListener("事件的类型","事件触发后调用的函数","布尔值用于描述事件是冒泡还是捕获")
    window.addEventListener("mousemove", this.fn);
  }

  fn = (e) => {
    // console.log(e);
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  render() {
    return (
      <div>
        功能组件 ({this.state.x})---({this.state.y})
      </div>
    );
  }
}

export default Features;
```

第一种写法：将功能内容和虚拟 DOM 分开，将回调函数写在标签上

```jsx
// render-props——第一种写法
import React from "react";
import Features from "../Test1/index";

class Finish extends React.Component {
  render() {
    return (
      <div>
        {/* 将功能组件中的虚拟DOM放入在自定义的标签中 */}
        {/* 类似于子传父的写法，注，render不是规定的，可以是其他名字 */}
        {/* 但是这种写法也有一种问题，不是很美观，直接在标签上写了回调函数，不是很好 */}
        <Features
          render={(value) => (
            <div>
              功能组件 ({value.x})---({value.y})
            </div>
          )}
        ></Features>
      </div>
    );
  }
}

export default Finish;
```

```jsx
// 功能组件
import React from "react";
import "./index.css";

class Features extends React.Component {
  state = {
    x: "",
    y: "",
  };

  // 更新阶段的方法
  componentDidMount() {
    // 原生的事件函数
    // window.addEventListener("事件的类型","事件触发后调用的函数","布尔值用于描述事件是冒泡还是捕获")
    window.addEventListener("mousemove", this.fn);
  }

  fn = (e) => {
    // console.log(e);
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  render() {
    // 这里相当于，将主组件的
    // (value) => (
    //   <div>
    //     功能组件 ({this.state.x})---({this.state.y})
    //   </div>
    // )
    // 放到了这里，然后传参是this.state
    return this.props.render(this.state);
  }
}

export default Features;
```

第二种写法：将功能内容和虚拟 DOM 分开，将回调函数写在标签内

```jsx
// render-props——第二种写法
import React from "react";
import Features from "../Test1/index";

class Finish extends React.Component {
  render() {
    return (
      <div>
        {/* 将回调函数写在标签内部 */}
        {/* 更好更美观，推荐 */}
        <Features>
          {(value) => (
            <div>
              功能组件 ({value.x})---({value.y})
            </div>
          )}
        </Features>
      </div>
    );
  }
}

export default Finish;
```

```jsx
// 功能组件
import React from "react";
import "./index.css";

class Features extends React.Component {
  state = {
    x: "",
    y: "",
  };

  // 更新阶段的方法
  componentDidMount() {
    // 原生的事件函数
    // window.addEventListener("事件的类型","事件触发后调用的函数","布尔值用于描述事件是冒泡还是捕获")
    window.addEventListener("mousemove", this.fn);
  }

  fn = (e) => {
    // console.log(e);
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  render() {
    // 如果用的是第二种写法，那么在这里的引用就必须是children，这是默认的
    return this.props.children(this.state);
  }
}

export default Features;
```
