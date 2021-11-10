---
title: React基础
date: 2021-05-11
tags:
  - React
---

## 事件传参

```jsx
// 事件传参
// 在上一个笔记中的类组件中已经说明了基本的事件
// 现在就在温习一下
import React from "react";

class Finish extends React.Component {
  state = {
    name: "曹操",
  };

  handleClick1 = (value) => {
    console.log(value);
  };

  handleClick2 = (value) => {
    console.log(value);
  };

  render() {
    return (
      <div>
        <p
          onClick={() => {
            this.handleClick1(this.state.name);
          }}
        >
          用回调函数传参
        </p>
        {/* 注意：这里如果用了bind传参，那么必须要有this指向，(this, "曹贼")就有这个作用 */}
        {/* 不过经过我的测试，bind传值就算第一个参数不写this，写其他都可以成功执行事件*/}
        {/* 所以这样看，我个人还是比较喜欢用回调函数的方式传值 */}
        <p onClick={this.handleClick2.bind(this, "曹贼")}>用bind传参</p>
      </div>
    );
  }
}

export default Finish;
```

## 表单处理

### 受控组件

```jsx
// 受控组件
// 绑定一个change事件，每当表单的状态发生变化，都会被写入组件的state中，这种组件在React中被称为受控组件
// 简单来说就是如input或select标签，受到change的控制，那么就叫做受控
import React from "react";

class Finish extends React.Component {
  state = {
    name: "何人不想当曹贼",
  };

  handleChange = (e) => {
    // console.log(e.target.value)
    // 通过setState来对state状态中的属性进行修改，以此来改变输入框的value值
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <div>
        {/* 通过change事件，判断input输入框是否发生变化 */}
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Finish;
```

### 非受控组件

在大多数情况下，我们推荐使用受控组件来处理表单数据。在一个受控组件中，表单数据是由 React 组件来管理的。另一种替代方案是使用非受控组件，这时表单数据将交由 DOM 节点来处理。

```jsx
// 非受控组件
// 非受控组件就像传统的html表单输入的一样，会记住你每输入的值
// 然后通过ref来获取，但是非受控组件的功能却不如受控组件强大。
// 但因为非受控组件将真实数据储存在 DOM 节点中，所以代码量会大大的减少
// 关于ref的使用有三种方法，以下是个人认为最简单的一种
import React from "react";

class Finish extends React.Component {
  state = {
    name: "何人不想当曹贼",
  };

  constructor() {
    super();
    this.oRef = React.createRef();
  }

  handleClick = () => {
    console.log(this.oRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" defaultValue={"这是默认的value"} ref={this.oRef} />
        <button onClick={this.handleClick}>点我</button>
      </div>
    );
  }
}

export default Finish;
```

## 组件通讯

### 组件通讯介绍

组件是独立且封闭的单元，默认情况下，只能使用组件自己的数据。在组件化过程中，我们将一个完整的功能 拆分成多个组件，以更好的完成整个应用的功能。而在这个过程中，多个组件之间不可避免的要共享某些数据 。为了实现这些功能，就需要打破组件的独立封闭性，让 其与外界沟通。这个过程就是组件通讯。

插一句，现在所写的什么父传子子传父什么的，到后面其实都不需要怎么用，用处并不大，因为有插件等已经替换掉了这些所谓的传值，比如：

1.通过 context 上下文传递

2.通过 Redux 传递 (相当于 Vuex)

3.通过 Hooks 传递

那么说真的，目前敲这些代码，目的就是为了知道这些父传子子传父等的基本原理，只有打好基础，才能更好的发展学习进阶。

### 父组件传递数据给子组件

```jsx
// 父组件传递数据给子组件
// 父组件
import React from "react";
import Son from "../Test1/index";

class Father extends React.Component {
  state = {
    name: "曹贼",
    age: 30,
  };

  render() {
    return (
      <div>
        <h3>这是父组件</h3>
        {/* 这里定义了name，name子组件接收 */}
        {/* 如果是类组件就为this.props.name */}
        {/* 如果是函数组件就直接用形参获取 */}
        <Son name={"曹操"}></Son>

        {/* 那么能够传入对象吗？试一下 */}
        <Son obj={this.state}></Son>
      </div>
    );
  }
}

export default Father;
```

```jsx
// 子组件
import React from "react";

// 类组件——父传子
// 父组件传入的子组件是类组件的话，直接用this.props进行接收
class Son extends React.Component {
  render() {
    return (
      <div>
        <h4>这是子组件</h4>
        {/* 这里的name是在父组件中子组件标签内的自定义属性 */}
        <p>这是父传入的值：{this.props.name}</p>
        {/* OK */}
        <p>这是父传入的值：{this.props.obj.age}</p>
      </div>
    );
  }
}

export default Son;
```

```jsx
// 子组件

// 函数组件——父传子
// 父组件传入的子组件是函数组件的话，则是通过形参来获取
// 因为是形参所以可以不一定是props
function Son(props) {
  return (
    <div>
      <h4>这是子组件</h4>
      <p>这是从父组件获取来的值：{props.name}</p>
      {/* OK */}
      <p>这是从父组件获取来的值：{props.obj.age}</p>
    </div>
  );
}

export default Son;
```

### 子组件传递数据给父组件

```jsx
// 子组件传递数据给父组件
// 父组件
import React from "react";
import Son from "../Test1/index";

class Father extends React.Component {
  state = {
    name: "曹贼",
    age: 30,
  };

  getInSon = (value) => {
    console.log(value);
  };

  render() {
    return (
      <div>
        <h3>这是父组件</h3>
        {/* 我个人认为，无论是父传子还是子传父其实原理都一样 */}
        {/* 父传子传过去的是一个用属性名定义的属性，若是类组件，那么子组件就用this.props.属性名获取 */}
        {/* 那么在这里，只不过后面的不在是对象或字符串，而是一个函数而已 */}
        {/* 将函数传过去，同样也是通过this.props.xxx来传递参数 */}
        <Son sonToFather={this.getInSon}></Son>

        {/* 若是函数组件，那么子组件就用形参名.属性名获取 */}
        <Son sonToFather={this.getInSon}></Son>
      </div>
    );
  }
}

export default Father;
```

```jsx
// 子组件
import React from "react";

// 类组件——子传父
class Son extends React.Component {
  // 跟父传子差不多，父传子是写在虚拟DOM节点中，进行页面渲染
  // 子传父则是通过事件函数给父组件传值
  giveFather = () => {
    this.props.sonToFather("曹贼");
  };

  render() {
    return (
      <div>
        <h4>这是子组件</h4>
        <p onClick={this.giveFather}>点击这里给父组件传值</p>
      </div>
    );
  }
}

export default Son;
```

```jsx
// 子组件
import React from "react";

// 函数组件——子传父
function Son(props) {
  const giveFather = () => {
    props.sonToFather("曹贼");
  };

  return (
    <div>
      <h4>这是子组件</h4>
      <p onClick={giveFather}>点击这里给父组件传值</p>
    </div>
  );
}

export default Son;
```

### 兄弟相传

```jsx
// 兄弟相传(同一个父亲)
// 最简单的步骤就是，无论是弟弟还是哥哥，先将数据传给父亲，然后再由父亲传给另外一个孩子

// 父组件
import React from "react";
import OldBrother from "../Son/index";
import YoungBrother from "../nextSon/index";

class Father extends React.Component {
  state = {
    oldData: "",
  };

  // 接受由哥哥组件传过来的数据
  getComeOld = (value) => {
    // console.log(value);
    this.setState({
      oldData: value,
    });
  };

  render() {
    return (
      <div>
        <h2>这是父组件</h2>
        <OldBrother getComeOld={this.getComeOld}></OldBrother>
        <YoungBrother giveData={this.state.oldData}></YoungBrother>
      </div>
    );
  }
}

export default Father;
```

```jsx
// 哥哥组件
import React from "react";

class OldBrother extends React.Component {
  // 将数据传给父亲
  giveDateToFather = () => {
    this.props.getComeOld("这是来自哥哥组件的数据");
  };

  render() {
    return (
      <div onClick={this.giveDateToFather}>
        <h4>这是哥哥组件</h4>
      </div>
    );
  }
}

export default OldBrother;
```

```jsx
// 弟弟组件
import React from "react";

class YoungBrother extends React.Component {
  render() {
    return (
      <div>
        <h5>这是弟弟组件</h5>
        <b>接受来自哥哥组件的数据：{this.props.giveData}</b>
      </div>
    );
  }
}

export default YoungBrother;
```

### 祖孙传值

这是爷爷组件、父组件和子组件都在同一个 jsx 文件中的例子

```jsx
// 爷孙传值
// 如果传递数据层次太深, 一层一层的传递比较麻烦，因此可以通过使用context方法进行上下传递
// 首先先引入createContext
import { createContext } from "react";
import React from "react";
// 在createContext中有两个容器组件：
// 生产者容器组件(Provider) / 消费者容器组件(Consumer)
// 注意：Provider是给级别最高的组件用的，比如爷爷组件
// Consumer是其孙组件
const { Provider, Consumer } = createContext();

// 爷爷组件
class Grandfather extends React.Component {
  render() {
    return (
      <Provider value={"来自爷爷组件的数据"}>
        <div>
          <h2>这是爷爷组件</h2>
          <Father></Father>
        </div>
      </Provider>
    );
  }
}

// 子组件
// 这样就非常明显了，爷组件并没有通过子组件，但是也能够给孙组件传到了值
class Father extends React.Component {
  render() {
    return (
      <div>
        <h3>这是父组件</h3>
        <Son></Son>
      </div>
    );
  }
}

// 孙组件
class Son extends React.Component {
  render() {
    return (
      <div>
        <h4>这是子组件</h4>
        {/* 注意，在Consumer标签中不能够定义其他标签，而是要写一个回调函数 */}
        {/* 其返回值为一个标签，回调函数中能够获取到来自其祖先的元素 */}
        {/* 因此下面这种写法是错误的 */}
        <Consumer>
          <p>哈哈哈哈或</p>
        </Consumer>

        {/* 正确写法 */}
        <Consumer>{(data) => <p>{data}</p>}</Consumer>
      </div>
    );
  }
}

export default Grandfather;
```

将爷组件、父组件和子组件分开

```jsx
// 爷孙传值(第二种)
// 爷爷组件
import React from "react";
import Father from "../Father/index";

// 当将爷、子、孙三组件分开之后，如果在爷孙组件中分别定义Provider, Consumer
// 它仍然是不可用的，因为其虽然名字相同，但却不是一样的东西
// 因此我们要将其放入另外的js文件中然后在需要的组件中引入
// const { Provider, Consumer } = createContext(); // ON，写了也没用

// 正确写法，引入context.js(自定义的js文件)
import { Provider } from "../context";

// 爷爷组件
class Grandfather extends React.Component {
  render() {
    return (
      <Provider value={"虽然分开了但还是能接受到来自爷组件的数据"}>
        <div>
          <h2>这是爷爷组件</h2>
          <Father></Father>
        </div>
      </Provider>
    );
  }
}

export default Grandfather;
```

```jsx
// 子组件
import React from "react";
import Son from "../Son/index";

class Father extends React.Component {
  render() {
    return (
      <div>
        <h3>这是父组件</h3>
        <Son></Son>
      </div>
    );
  }
}

export default Father;
```

```jsx
// 孙组件
import React from "react";
import { Consumer } from "../context";

class Son extends React.Component {
  render() {
    return (
      <div>
        <h4>这是子组件</h4>
        <Consumer>{(data) => <p>{data}</p>}</Consumer>
      </div>
    );
  }
}

export default Son;
```

```js
// context.js
import { createContext } from "react";

const { Provider, Consumer } = createContext();

export { Provider, Consumer };
```

## 参考文档

[React ref 三种用法](https://www.jianshu.com/p/64b5840abd98)

[React 中的受控和非受控表单输入不必复杂](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/)
