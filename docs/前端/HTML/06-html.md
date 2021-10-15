---
title: 项目搭建、布局代码、结构伪类
date: 2019-11-14
tags:
  - HTML
---

## 项目搭建

- 项目名称
  - 首页文件 index.html `index.html 是固定写法 只要是首页就写index.html`
  - css 文件夹 `这里放的是css文件，必须是自己写的`
  - lib 文件夹 `意思是library 库 只要是第三方的库都放在这里 无论是css库还是js库`
  - img 文件夹 `意思是image 图片 只要是很长时间在网页中不变的图片都放在这里`
  - upload 文件夹 `意思是上传的图片 这里的图片一定是用户上传的`
  - fonts 文件夹 `是放新字体的 还有字体图标库里的字体文件的(5种 ttf eot woff woff2 svg)`
  - video 文件夹 `用来放视频`

### favicon 制作和使用

- 先准备一张方形图片 图片大小不能超过 500k
- 进入 http://www.bitbug.net/
- 上传图片 选择尺寸 点击生成 ico 图标 然后会自动下载
- 把格式为.ico 的图片放在项目的根目录(项目文件夹里面)
- 在`首页`的 head 标签引入 快捷方式为: link:favicon

### TDK 搜索引擎优化

- title: 网页标题 title 具有不可替代性，是我们内页的第一个重要标签，是搜索引擎了解网页的入口和对网页主题归属的最佳判断点。
  - 格式: 网站名(产品名)-网站的介绍(尽量不要超过 30 个汉字)
- description: 网站描述 简要说明我们网站主要是做什么的。
- keywords: keywords 是页面关键词，是搜索引擎的关注点之一。 keywords 最好限制为 6~8 个关键词，关键词之间用英文逗号隔开，采用 关键词 1,关键词 2 的形式。

## 布局代码

### 第一部分: 顶部导航

#### 布局分析

HTML 代码：

```html
<!-- 1.顶部导航 -->
<div class="topnav">
  <div class="container">
    <div class="topnav-left">
      <a href="#">登录</a>
      <a href="#">注册</a>
      <a href="#">
        <img src="./upload/topnav-left.gif" alt="" />
      </a>
    </div>
    <ul class="topnav-right">
      <li><a href="#">我的订单</a></li>
      <li><a href="#">帮助中心</a></li>
      <li><span>我的游侠客</span></li>
      <li><a href="">手机APP</a></li>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
    </ul>
  </div>
</div>
```

样式引入代码：

```html
<!-- 注意: 一定要先引入 重置样式 再引入公共样式 最后引入某个页面的样式    -->
<link rel="stylesheet" href="./lib/reset/reset.css" />
<link rel="stylesheet" href="./css/common.css" />
<link rel="stylesheet" href="./css/index.css" />
```

## 结构伪类

### 元素:first-child

选中第一个子元素

### 元素:last-child

选中最后一个子元素

### 元素:nth-child(表达式)

选中第`表达式`个子元素

- 普通数字 2 3 8 11 110
- 取偶数个元素 2n
- 取奇数个元素 2n+1 2n-1
- 取前几个元素 -n+几

### 元素:nth-last-child()

倒着数第`表达式`个子元素
和 nth-child(表达式类似)
