---
title: rem布局与真机调试
date: 2019-12-23
tags:
  - HTML
---

## 移动 Web

### 媒体查询

#### 媒体查询的作用

根据终端(媒介|媒体)的特性(网页宽高 设备宽高 横竖屏)，可以给不同的样式

#### 媒体查询的用法(not(非) and(且) or(或者))

- 不同的设备应用不同的 css 文件(优点:对于不同的设备有对应的 css 文件，代码好维护且清晰 缺点: 产生了大量的冗余代码)
  `语法: <link rel="stylesheet" type="text/css" href="css的路径" media="过滤条件" >`

- 不同的设备应用不同的 css 样式(缺点:代码不好维护且不够清晰 优点: 不会产生了大量的冗余代码)
  `语法: @media screen and (width: xxxx) and (height: xxxx) { 样式}`

  `每个单词之间用空格隔开 否则会出错`

#### 媒体特性

- html 宽 html 高
- 设备宽 设备高
- 最大宽 最大高
- 最小宽 最小高
- 横屏 竖屏

### rem 布局

#### rem

rem 是一个相对长度单位 em 相对于自己的 font-size  
 rem 相对的是 html 的 font-size

#### rem 布局原理

- 1.找一个设计图 假设 640 人为的分成 20 份 计算一分多少像素 32 像素
- 2.用 ps 量出设计图中的元素的大小 用这个大小/32 计算得到的是元素在设计图中的占了几份
- 3.适配手机 如果宽度为 320 的手机 用手机的宽度/20 得出一份是多少像素 再用刚才第二步得到的份数\*手机中一份的大小就是手机中真正占的像素

### rem 布局的插件(插件) https://www.w3cplus.com/ https://github.com/huainanhai/flexible

flexible 的作用是为了不写媒体查询 通过 js 自动检测 自动计算

- 1. 引入 flexible_css.debug.js
- 2. 引入 flexible.debug.js
- 3. 引入 css

`公式: 属性: calc(设计图量出来的尺寸rem / 设计图的宽度/10)`
