---
title: Scss
date: 2019-12-16
tags:
  - HTML
---

## 移动 Web

### css 扩展语言

#### 为什么要学习 css 扩展语言

#### CSS 扩展语言

- sass(预处理语言)

  - 2007 年 ruby 开发的 开始的时候名字叫 sass 采用的是缩进式语法 后续进行了更新 采用了 css 的花括号的语法 名字 scss (LibSass c++开发的 node-sass)

- less(预处理语言)

- stylus(预处理语言)

- postcss(后处理语言) -- 专门来补充兼容性代码的处理器

#### sass 的编译

- 1.vscode 实时编译插件 Live Sass Compiler

- 2.在 vscode 的状态栏右下角有一个 watch sass 点一下就自动编译了

#### 注释

- 静默注释:不会被编译到 css 中 静默注释是给开发者看的

- 注释 /\*\*/ 多行注释 css 中的注释 会被编译到 css 文件中

#### 变量

- 语法: \$变量名: 变量值; `提示: 变量名希望使用小驼峰命名法`

- 作用: 方便设计修改设计方案 让前端修改页面的配色方案

```scss
$white: #f5f5f5;
$normalBorder: 1px solid #ff0000;
$blockCenter: 0 auto;
```

#### 嵌套

- 作用: 减少代码 增加代码的层次关系

```scss
.flash-title-button {
  float: right;
  margin-top: calc((62px - 24px) / 2);
  width: 71px;
  height: 24px;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;

  a {
    float: left;
    width: 34px;
    height: 22px;
    text-align: center;
  }

  a:first-child {
    border-right: $normalBorder;
  }

  i {
    line-height: 22px;
    font-size: 16px;
    color: #b0b2ba;
  }

  a:hover i {
    color: #fe7000;
  }
}
```

#### 父级选择器

- 这个东西能解决什么问题 这个东西用在哪

- 这个东西是什么

- 这个东西怎么用

- 这个东西用的时候有啥注意点

- 实验一下

#### 群组选择器

```scss
// .container h1, .container h2, .container h3 { margin-bottom: .8em }

.container {
  h1,
  h2,
  h3 {
    margin-bottom: 20px;
  }
}
```

#### 子组合选择器和同层组合选择器：>、+和~;

- `>` 代表 直接子代选择器
- `+` 代表 某个元素（除了自己）后面的一个兄弟元素
- `~` 代表 某个元素（除了自己）后面的所有兄弟元素

#### 导入 Sass 文件

- 没有下划线的会被编译 有下划线的不会被编译的
- 语法: @import "sass 的文件名"

#### 混合器(mixins)

- 作用: 混合器像函数一样 封装的是一段具有具体功能的代码 在需要的时候调用

- 定义: @mixin 混合器的名字(形参:默认值,...) { 具体某个功能的代码 }

- 调用: 选择器 { @include 混合器的名字(实参) }

#### 继承

- 作用: 就是减少写代码的另外一种方式 继承用的好 可以大量的减少代码

- 语法: @extend 选择器的名字

- 注意: 继承是一把双刃剑 用的好 可以极大的减少代码 用的不好 会出现冗余代码
