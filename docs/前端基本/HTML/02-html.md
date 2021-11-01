---
title: 表格、文本样式、字体样式、伪元素
date: 2019-11-05
tags:
  - HTML
---

## 表格

### 基本表格的组成

- table 标签 用于告诉浏览器 我接下来要创建表格了
- tr 用于创建表格的行
- td 用于创建表格的列
- th 标题单元格

### 表格的属性

- border 给 table 标签和 td 添加边框
- cellspacing 设置单元格与单元格之间的距离
- cellpadding 设置内容与单元格边框的距离
- rowspan 跨行 从自己算 1 跨一行+1
- colspan 跨列 从自己算 1 跨一行+1

## 文本样式

### 字体颜色 color

- 普通的英文单词
- rgb rgb(红色,绿色,蓝色)
- 十六进制 #ff(前两个数字代表红色)ff(中间两个数字代表绿色)ff(最后两个数字代表蓝色)

### 文本对齐 text-align

- left 文字左对齐
- center 文字居中
- right 文字居右

`注意: 文字对齐 需要包含文字的盒子有可以让文字对齐的空间 如果你写的代码没有让文字出现对齐 有可能是盒子和文字的多少一样宽`

### 文本缩进(text-indent)

- xxpx
- xxem

`注意: em是一个相对长度单位 em相对的是自身的font-size大小 1em= 1*自己的font-size`

### 文本装饰 text-decoration

- none
- underline 下划线
- overline 上边线
- line-through 删除线

### 行高 line-height

- 200px 代表行高是 200px
- 200% 代表 200%\*自身的字体大小得出的像素值
- 2 代表 2\*自身的字体大小得出的像素值

`注意: 行高的作用是让文字垂直居中于盒子 让文字的行高=盒子的高度`

## 字体样式

### 字体大小 font-size

就是单位为 px 的一些字体大小

### 字体种类 font-family

"Microsoft YaHei" "SimSun"

### 字体粗细 font-weight

400(normal) 700(bold)

### 字体样式 font-style

normal(正常) italic(斜体)

## 伪元素

### 伪元素的用途

1.清除浮动 2.鼠标移入有一个遮罩

### 伪元素的用法

1.给真实元素添加 2.真实元素:before 和 真实元素:after
3.before 和 after 能不能加上全看 content 有没有写 4.给某一个标签添加 before 和 afte 只能给该标签添加一个 before 或一个 after 不能给一个标签添加多个 before 或 after
