---
title: styled-component和React动画
date: 2021-06-01
tags:
  - React
---

## CSS in JS

先安装 styled-component 包，命令：npm i styled-component（可去 npm 官网查）

### 基本使用

```jsx
// CSS in JS基本使用1
import React from "react";
import styled from "styled-components";

const Odiv = styled.div`
  color: yellowgreen;
`;

class App extends React.Component {
  render() {
    return <Odiv>曹操</Odiv>;
  }
}

export default App;
```

```jsx
// CSS in JS基本使用2
import React from "react";
import styled from "styled-components";

// 这样你会发现这两个组件并没有使用，但是想要的效果依然能够实现
const Odiv = styled.div`
  color: yellowgreen;
`;

const Op = styled.p`
  color: pink;
`;

const OutDiv = styled.div`
  div {
    color: yellowgreen;
  }

  p {
    color: pink;
  }
`;

class App extends React.Component {
  // 可若是有多个组件呢？如果我们一个一个创建，那这个包使用的意义就不大了
  // 那么这个时候我们可以就给最外层的div定义一个组件
  render() {
    return (
      <OutDiv>
        <div>曹操</div>
        <p>曹阿瞒</p>
      </OutDiv>
    );
  }
}

export default App;
```

### 属性值传递

```jsx
// CSS in JS属性值传递
import React from "react";
import styled from "styled-components";

const Odiv = styled.div`
  color: yellowgreen;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
`;

class App extends React.Component {
  state = {
    width: "100px",
    height: "100px",
    border: "1px solid #000",
  };
  render() {
    return <Odiv {...this.state}>曹操</Odiv>;
  }
}

export default App;
```

### 样式继承

```jsx
// CSS in JS样式继承
// 第一种
import React from "react";
import styled from "styled-components";

const Op1 = styled.p`
  color: yellowgreen;
`;

// 这种写法会创建不一样的css规则
// 不仅继承了样式，也可以添加新的样式
const Op2 = styled(Op1)`
  font-size: 20px;
`;

class App extends React.Component {
  render() {
    return (
      <div>
        <Op1>曹操</Op1>
        <Op2>曹贼</Op2>
      </div>
    );
  }
}

export default App;
```

```jsx
// CSS in JS样式继承
// 第二种
import React from "react";
import styled from "styled-components";

const Op1 = styled.p`
  color: yellowgreen;
`;

// 这种写法跟样式继承有异曲同工之妙
// 可以通过withComponent()方法渲染不同的标签
const Span = Op1.withComponent("span");

class App extends React.Component {
  render() {
    return (
      <div>
        <Op1>曹操</Op1>
        <Span>曹贼</Span>
      </div>
    );
  }
}

export default App;
```

## React 动画

### 原生动画

```jsx
// 原生动画
import React from "react";
import styled from "styled-components";

const ODiv = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  opacity: ${(props) => props.opacity};
  background-color: skyblue;
  transition: all 2s;
`;

class App extends React.Component {
  state = {
    width: "0px",
    height: "0px",
    opacity: 0,
  };

  handleClick = () => {
    this.setState({
      width: "100px",
      height: "100px",
      opacity: 1,
    });
  };

  render() {
    return (
      <div>
        <ODiv {...this.state}></ODiv>
        <button onClick={this.handleClick}>点我改变</button>
      </div>
    );
  }
}

export default App;
```

### 动画组件

首先要安装 react-transition-group 包，命令：npm install react-transition-group --save

#### 使用 CSSTransition 完成变大动画

```jsx
// CSSTransition
// 这是React动画中，最常用的动画，它提供了与css相关的变化
import React from "react";
import "./App.css";
import { CSSTransition } from "react-transition-group";

class App extends React.Component {
  state = {
    flag: false,
  };

  handleClick = () => {
    this.setState({
      flag: !this.state.flag,
    });
  };

  render() {
    return (
      <div>
        {/* 如果要使用动画组件，需从安装的包中导出CSSTransition */}
        {/* 必须是用该标签将其包裹住需要进行动画的标签，只有这样才能进行动画的功能 */}
        {/* in：in值的变化决定了动画是enter还是exit，in值的变化是触发动画的扳机。 */}
        {/* 如果in是false就是exit，true就是enter */}
        {/* timeout：动画持续时间 */}
        {/* classNames：css类名 */}
        {/* unmountOnExit：当处在exit结束的状态下，如果是true则不保持状态，若是false则保持状态 */}
        <CSSTransition
          classNames="box"
          in={this.state.flag}
          timeout={2000}
          unmountOnExit={false}
        >
          <div></div>
        </CSSTransition>

        <button onClick={this.handleClick}>点我变大</button>
      </div>
    );
  }
}

export default App;
```

```css
.box-enter {
  width: 0;
  height: 0;
  opacity: 0;
}

/* 这个的作用在让需要的dom完成其样式效果 */
.box-enter-active {
  width: 100px;
  height: 100px;
  background-color: skyblue;
  opacity: 1;
  transition: all 2s;
}

/* 这个类名的意思在于，当box-enter-active页面样式完成时，保存其样式效果 */
.box-enter-done {
  width: 100px;
  height: 100px;
  background-color: skyblue;
  opacity: 1;
}

.box-exit {
  width: 100px;
  height: 100px;
  background-color: skyblue;
  opacity: 1;
}

.box-exit-active {
  width: 200px;
  height: 200px;
  background-color: yellowgreen;
  opacity: 1;
  transition: all 2s;
}

/* 跟上面意思一样，不写样式就不保持 */
.box-exit-done {
  width: 200px;
  height: 200px;
  background-color: yellowgreen;
  opacity: 1;
}
```

#### 使用 CSSTransition 实现左右渐入渐出效果

```jsx
// CSSTransition
import React from "react";
import "./App.css";
import { CSSTransition } from "react-transition-group";

class App extends React.Component {
  state = {
    flag: false,
    flag1: false,
  };

  handleClick = () => {
    this.setState({
      flag: !this.state.flag,
    });
  };
  handleClick1 = () => {
    this.setState({
      flag1: !this.state.flag1,
    });
  };

  render() {
    return (
      <div>
        {/* 两个小案例，如果用同样的flag，会同时触发 */}
        {/* 经过测试，页面渲染归页面渲染，如果不进行点击，就无法触发这个动画效果 */}
        <button onClick={this.handleClick}>简单图形渐入渐出</button>
        {/* 因为in的存在是为了判断当前是enter还是exit，所以必不可少 */}
        {/* 所以要有数据判断是true还是false */}

        {/* 第一种图形渐入渐出 */}
        <CSSTransition classNames="fade" in={this.state.flag} timeout={2000}>
          {/* 注意，动画标签内部规定有唯一的标签，若有其他则会报错 */}
          <div></div>
        </CSSTransition>

        {/* 第二种新旧图形渐入渐出 */}
        <button onClick={this.handleClick1}>新旧图形渐入渐出</button>
        {/* 效果：点击按钮，新图形进入，旧图形消失 */}
        {/* 根据上面的内容，得知，若要新旧图形切换，则需要在唯一标签中 */}
        {/* 判断，然后新旧文字切换 */}
        {/* 但是，说着简单，CSSTransition要通过点击 */}
        {/* 第一次点击flag变true触发enter；第二次点击flag变false触发exit */}
        {/* 而且旧元素无法进行保留，因此我想不到好的实现代码 */}
        {/* 会有问题，因为点击第一次的时候是新，再次点击就是旧 */}
        <CSSTransition classNames="box" in={this.state.flag1} timeout={2000}>
          <div>{this.state.flag1 ? "新" : "旧"}</div>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
```

```css
/* 第一种图形渐入渐出 */
.fade-enter {
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background-color: #000;
  transform: translateX(100%);
  margin: 20px auto;
  opacity: 0;
}

.fade-enter-active {
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background-color: #000;
  opacity: 1;
  transform: translateX(0%);
  margin: 20px auto;
  transition: all 2s;
}

.fade-enter-done {
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background-color: #000;
  opacity: 1;
  transform: translateX(0%);
  margin: 20px auto;
}

.fade-exit {
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background-color: #000;
  opacity: 1;
  transform: translateX(0%);
  margin: 20px auto;
}

.fade-exit-active {
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background-color: #000;
  opacity: 0;
  transform: translateX(-100%);
  transition: all 2s;
  margin: 20px auto;
}

.fade-exit-done {
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background-color: #000;
  opacity: 0;
  transform: translateX(0%);
  margin: 20px auto;
}

/* 第二种新旧图形渐入渐出 */
.box-enter {
  transform: translateX(0%);
  margin: 20px auto;
  opacity: 1;
}

.box-enter-active {
  transform: translateX(-100%);
  margin: 20px auto;
  opacity: 0;
  transition: all 2s;
}

.box-enter-done {
  transform: translateX(-100%);
  margin: 20px auto;
  opacity: 0;
}

.box-exit {
  transform: translateX(100%);
  margin: 20px auto;
  opacity: 0;
}

.box-exit-active {
  transform: translateX(0%);
  margin: 20px auto;
  opacity: 1;
  transition: all 2s;
}

.box-exit-done {
  transform: translateX(0%);
  margin: 20px auto;
  opacity: 1;
}
```

#### 使用 SwitchTransition 实现左右渐入渐出效果

```jsx
// SwitchTransition
// SwitchTransition有两种模式
// 1.先隐藏旧内容再展示新的内容（out-in）
// 2.先展示新内容再隐藏旧内容（in-out）
// 首先我们要注意，SwitchTransition功能的实现是需要CSSTransition的帮助的
import React from "react";
import "./App.css";
import { CSSTransition, SwitchTransition } from "react-transition-group";

class App extends React.Component {
  state = {
    flag: false,
    flag1: false,
  };

  handleClick = () => {
    this.setState({
      flag: !this.state.flag,
    });
  };
  handleClick1 = () => {
    this.setState({
      flag1: !this.state.flag1,
    });
  };

  // 如果要单纯通过CSSTransition来实现新旧交替，或许有，但我想不到解决方法
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>点我进行SwitchTransition动画</button>

        {/* 第一种out-in，默认情况下就是它 */}
        {/* 注意：如果使用SwitchTransition，在CSSTransition内是不需要使用in属性的 */}
        {/* 因为SwitchTransition就能够自动帮你识别 */}
        {/* 当渐出(消失)走样式exit；当渐入(显示)走样式enter */}
        {/* 注意：key值一定要定义，如果不用key值，就会无限循环动画 */}
        {/* key的作用就在于给新旧的标签一个唯一的名字 */}
        <SwitchTransition>
          <CSSTransition
            classNames="box"
            timeout={2000}
            key={this.state.flag ? "新" : "旧"}
          >
            <div>{this.state.flag ? "新" : "旧"}</div>
          </CSSTransition>
        </SwitchTransition>

        {/* 第二种in-out */}
        <SwitchTransition mode="in-out">
          <CSSTransition
            classNames="box"
            timeout={2000}
            key={this.state.flag1 ? "新" : "旧"}
          >
            <button onClick={this.handleClick1}>
              {this.state.flag1 ? "新" : "旧"}
            </button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    );
  }
}

export default App;
```

```css
.box-enter {
  transform: translateX(100px);
  margin: 0px auto;
  opacity: 0;
}

.box-enter-active {
  transform: translateX(0px);
  margin: 0px auto;
  opacity: 1;
  transition: all 2s;
}

.box-exit {
  transform: translateX(0px);
  margin: 0px auto;
  opacity: 1;
}

.box-exit-active {
  transform: translateX(-100px);
  margin: 0px auto;
  opacity: 0;
  transition: all 2s;
}
```

#### 使用 TransitionGroup 实现添加删除效果

```jsx
// TransitionGroup
// 如果要给多个CSSTransition添加动画，就需要用TransitionGroup来包裹
import React from "react";
import "./App.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class App extends React.Component {
  state = {
    flag: false,
    List: ["诸葛亮", "郭嘉", "司马懿"],
    nameList: ["曹操", "曹丕", "曹叡"],
  };

  handleClick = () => {
    this.setState({
      flag: !this.state.flag,
    });
  };

  handleClick1 = () => {
    this.setState({
      nameList: [...this.state.nameList, "曹贼"],
    });
  };

  handleClick2 = (value) => {
    this.setState({
      nameList: this.state.nameList.filter((ele) => ele !== value),
    });
  };

  render() {
    return (
      <div>
        {/* 不符合要求的写法 */}
        {/* 遍历出多个CSSTransition希望给其一个动画，效果是每点击一个当前一个执行该动画 */}
        {this.state.List.map((item) => (
          <CSSTransition classNames="box" timeout={2000} in={this.state.flag}>
            <div onClick={this.handleClick}>{item}</div>
          </CSSTransition>
        ))}

        <div className="interval"></div>

        {/* 但是得到的结果却是整体发生了动画效果，明显不符合要求，因此就需要TransitionGroup */}
        {/* 注意：TransitionGroup是没有定义任何动画行为，作用在于过渡 */}
        {/* 可以跨不同的列表项混合和匹配动画，主要用于遍历之后的删除添加 */}
        <TransitionGroup>
          {/* 注意此处有两点需要在意 */}
          {/* 第一点，如果不写key值，经过测试，点击当前的值，当前值会被下方快速替代，而下方的值执行动画效果 */}
          {/* 第二点，如果key值为索引值，点击当前的值，最下方的值会执行动画效果，而不是当前的值 */}
          {/* 因此key的选择非常的重要，必须是唯一值 */}
          {this.state.nameList.map((item) => (
            <CSSTransition classNames="box" timeout={2000} key={item}>
              <div onClick={() => this.handleClick2(item)}>{item}</div>
            </CSSTransition>
          ))}
          <button onClick={this.handleClick1}>点我添加新的角色</button>
        </TransitionGroup>
      </div>
    );
  }
}

export default App;
```

```css
.interval {
  width: 100%;
  height: 1px;
  background-color: yellowgreen;
  margin: 20px 0;
}

/* 样式里进行了变粗改变，就是为了区分删除了添加到底是否走了不同的样式 */
/* 得出的结论就是如果添加元素就是enter，如果是删除元素就是exit */
/* 这一点与SwitchTransition差不多 */
.box-enter {
  font-weight: 400;
  margin: 0px auto;
  opacity: 0;
}

.box-enter-active {
  font-weight: 700;
  margin: 0px auto;
  opacity: 1;
  transition: all 2s;
}

.box-enter-done {
  font-weight: 700;
  margin: 0px auto;
  opacity: 1;
  transition: all 2s;
}

.box-exit {
  margin: 0px auto;
  opacity: 1;
}

.box-exit-active {
  margin: 0px auto;
  opacity: 0;
  transition: all 2s;
}
```

## 参考文档

[Styled-components 高级实用技巧](https://juejin.cn/post/6844903668781678600)

[react 中使用动画 react-transition-group](https://www.jianshu.com/p/49fa164b938d)
