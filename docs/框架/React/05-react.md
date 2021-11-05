---
title: React的高阶组件和组件优化
date: 2021-05-14
tags:
  - React
---

## 高阶组件

高阶组件就是一个包装了另外一个 React 组件的 React 组件。

```jsx
// 高阶组件
// 根据上一个所写的文档所写的，render-props，其实就是将功能和虚拟DOM分开了
// 组件变成了功能组件，然后在需要这个功能的组件写DOM
// 那么这个高阶组件其实就是render-props的进阶，再次封装了。
// 相对于render-props，功能更加强大了，而且也更加的美观
import React from "react";
// import ReactDOM from "react-dom";

// 注意：高阶组件的功能组件必须是函数组件，惯例是：width开头
const widthLargeFn = (SmallFn) => {
  class Features extends React.Component {
    state = {
      x: "0",
      y: "0",
    };

    componentDidMount() {
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
      // 如果按照render-props的写法，这里应该写的是this.props.children或this.props.XXX
      // 但是现在这里写的是通过函数组件传进来的形参，并非通过子传父，而是通过调用函数的方式
      // 因此，这里是由形参而形成的形参名的标签
      return <SmallFn {...this.state} {...this.props}></SmallFn>;
    }
  }

  // 这里返回的是由class类Features中的返回值，其实就是<smallFn></smallFn>
  // 然后在返回到主组件
  return Features;
};

// 原本是在代表组件的标签上定义一个回调函数，然后在里面写需要的虚拟DOM
// 但是在这不必如此，直接定义一个函数组件
const StyleDom = (value) => {
  return (
    <div>
      ({value.x})---({value.y})---{value.name}
    </div>
  );
};

const ReturnLargeFn = widthLargeFn(StyleDom);

// 那么到这里肯定有人会对于这个调来调去的高阶组件有点混淆了
// 这这么多组件到底谁先走谁后走呢？我也是理解了一段时间才搞明白了，现在慢慢理一下
// 比如，我现在在下方要进行一个父传子的方法，按照前面所写文档的内容，OK，传了个曹操
// 那么，我该如何在StyleDom函数组件中使用到呢？
// 首先我们要知道，ReturnLargeFn并非StyleDom，而是调用了widthLargeFn(StyleDom)之后返回回来的东西
// 因此第一步是先进入了widthLargeFn函数组件中，然后发现了里面有一个类组件Features，
// 第二步，进入了Features类组件，将形参SmallFn==>StyleDom，调入类的render方法中
// 在这时，才会进入到框架组件StyleDom中，得到了虚拟DOM的框架，最终返回
// 这返回的值，便是函数组件widthLargeFn的返回值
// 因此这个自定义属性name，就进入到了widthLargeFn组件中，相当于父传子给了Features
// 如果还不理解，最简单的方式就是可以console.log()试一下，看看到底数据去了哪里
class App extends React.Component {
  render() {
    return (
      <div>
        <ReturnLargeFn name={"曹操"}></ReturnLargeFn>
      </div>
    );
  }
}

export default App;
```

## setState() 的说明

一般写法，但是缺点也很明显

```jsx
// setState() 的说明
import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };

  // setState()是个异步方法，如果是个同步方法，那么最终得出的结果就不会是1，而是3
  // 下面所写的三个setState()方法，只执行了最后一个，前面两个或者说是被替换了
  // 但是我就想实现这样的效果，那怎么办呢，解决方法还是有的
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });

    this.setState({
      count: this.state.count + 1,
    });

    this.setState({
      count: this.state.count + 1,
    });

    // 在这种写法中，就算将console.log写在setState方法后面
    // 还是不能够得到更新之后的状态
    console.log(this.state.count);
  };

  render() {
    return <div onClick={this.handleClick}>点我试试---{this.state.count}</div>;
  }
}

export default App;
```

另外一种写法

```jsx
// setState() 第二种语法
import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };

  // setState()里面不再是个对象，而是一个函数，而这个函数有两个形参
  handleClick = () => {
    this.setState({
      count: 1,
    });

    // state表示最新的state，props表示最新的props
    // 解决了上一种写法无法获取到最新数据的问题，因此推荐用这种setState方法语法
    this.setState((state, props) => {
      console.log(state);
      console.log(props);
    });
  };

  render() {
    return <div onClick={this.handleClick}>点我试试---{this.state.count}</div>;
  }
}

export default App;
```

setState()的第二个参数

```jsx
// setState() 第二个参数
// 作用，当状态更新之后，立即执行之后的操作
import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };

  // 那么为什么需要这个呢，写在setState方法外面也可以啊
  // 注意，在上面讲到，setSta是异步方法，所以在外面console，有可能是在状态还没更新就输出了
  // 我们可以来尝试一下，一个22一个11，最终得到的是22先被打印
  handleClick = () => {
    this.setState(
      {
        count: 1,
      },
      () => {
        console.log(11);
      }
    );

    console.log(22);
  };

  render() {
    return <div onClick={this.handleClick}>点我试试---{this.state.count}</div>;
  }
}

export default App;
```

## 组件性能优化

### 减轻 state

只存储跟组件渲染相关的数据，不用做渲染的数据不要放在 state 中，比如定时器 id 等。对于这种需要在多个方法中用到的数据，应该放在 this 中

### 避免不必要的重新渲染

```jsx
// 避免不必要的重新渲染
// 主组件
import React from "react";
import AppSon from "../Test1/index";

class App extends React.Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState({
      count: 1,
    });
  };

  // 经过这样的传递，会发现，当主组件的状态发生了改变之后
  // 他的子组件和孙组件也会发生再次渲染的问题，哪怕他们的状态并没有改变
  // 这样对于渲染页面的计算机功能的损耗不好
  render() {
    console.log("主组件渲染");

    return (
      <div>
        <h1 onClick={this.handleClick}>主组件</h1>
        <AppSon></AppSon>
      </div>
    );
  }
}

export default App;
```

```jsx
// 子组件
import React from "react";
import AppGrandSon from "../Text2/index";

class AppSon extends React.Component {
  render() {
    console.log("主组件的儿子组件渲染");

    return (
      <div>
        <h2>主组件的儿子组件</h2>
        <AppGrandSon></AppGrandSon>
      </div>
    );
  }
}

export default AppSon;
```

```jsx
// 孙组件
import React from "react";

class AppGrandSon extends React.Component {
  render() {
    console.log("主组件的孙子组件渲染");

    return (
      <div>
        <h3>主组件的孙子组件</h3>
      </div>
    );
  }
}

export default AppGrandSon;
```

如何避免不必要的重新渲染呢？其中一种是使用钩子函数 shouldComponentUpdate(nextProps, nextState)，下面是详细步骤：

```jsx
// 子组件
import React from "react";
import AppGrandSon from "../Text2/index";

class AppSon extends React.Component {
  state = {
    flag: false,
  };

  // 当设置了钩子函数之后，它会自己判断，当前组件的状态是否发生了改变
  // 如果是false就不会重新渲染当前组件
  // 注意，当第一次渲染组件挂载的时候，是不会进入这个钩子函数的
  shouldComponentUpdate() {
    if (this.state.flag === false) {
      this.setState({
        flag: !this.state.flag,
      });
    }

    return this.state.flag;
  }

  render() {
    console.log("主组件的儿子组件渲染");

    return (
      <div>
        <h2>主组件的儿子组件</h2>
        <AppGrandSon></AppGrandSon>
      </div>
    );
  }
}

export default AppSon;
```

但是就算是用钩子函数成功解决了这个重新渲染的问题，但是仍然是需要手动来判断，还不是非常的方便，那么有没有一种方式，能够不需要自己手动判断，它自己自行就能够判断呢？

那么就需要另外一种继承类的方式了，使用 React.PureComponent，也叫作纯组件

```jsx
// 孙组件
import React from "react";

// 当使用了React.PureComponent，它自己就会判断对比前后两次state和props
// 来判断数据是否发生了改变
class AppGrandSon extends React.PureComponent {
  render() {
    console.log("主组件的孙子组件渲染");

    return (
      <div>
        <h3>主组件的孙子组件</h3>
      </div>
    );
  }
}

export default AppGrandSon;
```
