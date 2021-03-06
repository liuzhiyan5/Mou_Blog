---
title: 清除浏览器默认样式、复合选择器、元素的显示模式、CSS背景属性
date: 2019-11-07
tags:
  - HTML
---

## 清除浏览器默认样式

其实浏览器的默认样式是固定的，我们作为开发者每次手动清除浏览器默认样式
但是，其实很多开发者已经进行了总结，清除浏览器默认样式的所有代码,拿到代码
每次只要引入该代码，就可以清除浏览器默认样式了，不需要每次自己写。
http://nec.netease.com/framework/css-reset.html

### 为什么大家不用通配符来清除浏览器默认样式?

因为通配符的作用是找到页面中的所有标签并清除浏览器默认样式，
这样效率很低，导致页面性能低，所以我们宁可一个个的去清除有必要清除的
绝不做宁可错杀不可放过的事情

## 复合选择器

- 后代选择器 标志是空格 作用是: 选择到所有的后代元素 并给后代元素添加样式
- 子代选择器 标志是 > 作用是: 选择到所有的亲儿子元素 并给指定的亲儿子添加样式
- 并集选择器 标志是 , 作用是: 给一组拥有相同样式的元素添加样式
- 伪类选择器 标志是 : 作用是: 特殊选择元素(:first-child :last-child) 特殊效果(:hover)

## 元素的显示模式

### 块级元素

- 举例: div h1-h6 p ul ol li table

- 特点: 独占一行 可以设置宽高外边距内边距 默认宽度是父元素的 100%

- 注意: 文字类的块元素不能套其他块元素

### 行内元素

- 举例: span a strong i b small

- 特点: 一行显示多个 没有宽高没有上下 padding 和 margin 默认宽度就是内容的宽度 行内元素只能嵌套文本或其他行内元素

- 注意: 链接内不能再放链接 a 链接特殊情况，不过为了不出问题 建议大家把 a 标签转换为块元素

### 行内块元素

- 举例: img input td

- 特点: 一行显示多个 有宽高上下 padding 和 margin 默认宽度就是内容的宽度

- 注意: 不需要管嵌套 因为 img 是单标签 input 是单标签 没有嵌套这一说

- 如何去除行内块之间的距离? 给行内块元素的父元素添加一句 css 代码: font-size: 0;

### 显示模式的转换

- 其他转为块 display: block
- 其他转为行内 display: inline
- 其他转化为行内块 display: inline-block

`注意: 所有人在进行模式转换的时候 请把display作为第一个属性`

## CSS 背景属性

### 背景颜色 background-color

- transparent 完全透明
- rgba(红色,绿色,蓝色,透明度) 0-1 0 为完全透明 1 为完全不透明
