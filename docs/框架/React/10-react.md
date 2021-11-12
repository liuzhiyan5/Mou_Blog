---
title: defaultValue和全选单选
date: 2021-05-25
tags:
  - React
---

## defaultValue

```jsx
// defaultValue
import React from "react";

class App extends React.Component {
  state = {
    name: "曹贼",
    defaultName: "曹操",
  };

  handleText = (e) => {
    // console.log(e.target.value);
    this.setState({
      name: e.target.value,
    });
  };

  handleClick = () => {
    this.setState({
      defaultName: "曹阿瞒",
    });
  };

  render() {
    return (
      <div>
        {/* 如果在input标签内，如果写了value属性，那么就必须需要onChange，或者readOnly */}
        {/* 否则浏览器就会报错，谨记！！ */}
        <input type="text" value={this.state.name} onChange={this.handleText} />
        <br />
        <input
          type="text"
          defaultValue={this.state.defaultName}
          key={this.state.defaultName}
        />
        {this.state.defaultName}
        {/* 当我设置了点击按钮，如果给value属性的input修改值，这是可以做到的 */}
        {/* 若要给defaultValue属性修改，无法显示成功，因为根据显示证明，我的值是修改成功的 */}
        {/* 因为在一般情况下，defaultValue代表默认值，只会在初始化时执行 */}
        {/* 如果要对defaultValue进行修改，要加上key值 */}
        <button onClick={this.handleClick}>点击改变defaultName的值</button>
      </div>
    );
  }
}

export default App;
```

## 全选单选

```jsx
import React from "react";

class App extends React.Component {
  state = {
    allFlag: false,
    List: [
      { id: 1, flag: false },
      { id: 2, flag: false },
      { id: 3, flag: false },
      { id: 4, flag: false },
    ],
  };

  handleAllClick = (e) => {
    // console.log(e.target.id);
    if (e.target.name === "全选") {
      let arr = this.state.List;
      arr.forEach((ele) => {
        ele.flag = e.target.checked;
      });

      this.setState({
        allFlag: e.target.checked,
        List: arr,
      });
    } else if (e.target.name === "单选") {
      let allChecked = true;
      let arr = this.state.List;

      arr.forEach((ele) => {
        if (ele.id === Number(e.target.id)) {
          ele.flag = e.target.checked;
        }
        if (ele.flag === false) {
          allChecked = false;
        }
      });

      this.setState({
        allFlag: allChecked,
        List: arr,
      });
    }
  };

  render() {
    return (
      <div>
        <label htmlFor="">
          全选：
          <input
            name="全选"
            type="checkbox"
            checked={this.state.allFlag}
            onChange={this.handleAllClick}
          />
        </label>
        <br />
        {this.state.List.map((item) => (
          <input
            name="单选"
            type="checkbox"
            checked={item.flag}
            key={item.id}
            id={item.id}
            onChange={this.handleAllClick}
          />
        ))}
      </div>
    );
  }
}

export default App;
```

## 参考文档

[如何修改 input 的 defaultValue](https://blog.csdn.net/qq_33988065/article/details/111868699)
