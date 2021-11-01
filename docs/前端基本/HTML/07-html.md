---
title: 小米首页、盒子尺寸、元素透明、阴影
date: 2019-11-26
tags:
  - HTML
---

## 小米官网

### 获取网站设计图(PSD)

- 打开chrome devtools(chrome浏览器的开发者工具)
- 按下ctrl+shift+p 等弹出输入框
- 输入 capture full size screenshot 按回车
- 等待下载

### 搭建项目

#### 克隆项目
- 在github上创建项目仓库
- 把github上的项目仓库拉取到本地 git clone 项目地址    (拉取 git pull  推项目 git push)

#### 创建项目文件及文件夹
- index.html 任何网站的首页都是这个名字
- css文件夹   把除了第三方库之外的css文件都放在css文件夹中
  - index.css是首页样式 
  - common.css 公共样式
- img文件夹   除了商品图片之外的图片 都放在img文件夹中
- upload文件夹  把商品图片都放在upload文件夹中
- js文件夹          把js文件放在js文件夹中
- lib文件夹         把第三方文件都放在这个文件夹中
- fonts文件夹       把字体文件都放在这个文件夹中(.ttf .svg .eot .woff .woff2)

#### 引入第三方库

- 浏览器默认样式 http://nec.netease.com/framework/css-reset.html

#### 项目中的CSS 

- 引入CSS 先引入重置样式 再引入公共样式 再引入页面样式

### 页面布局

#### 顶部导航 topnav

##### html结构
```html
 <!-- 1.顶部导航 -->
  <div class="topnav">
    <!-- 1.1 版心 -->
    <div class="container">
      <!-- 1.1.1 顶部导航左边 -->
      <div class="topnav-left">
        <!-- 1.1.1.1 顶部导航左边链接 -->
        <a href="#">小米商城</a>
        <!-- 1.1.1.2 顶部导航左边链接旁边竖线 -->
        <i>|</i>
        <a href="#">MIUI</a>
        <i>|</i>
        <a href="#">IoT</a>
        <i>|</i>
        <a href="#">云服务</a>
        <i>|</i>
        <a href="#">金融</a>
        <i>|</i>
        <a href="#">有品</a>
        <i>|</i>
        <a href="#">小爱开放平台 </a>
        <i>|</i>
        <a href="#">企业团购</a>
        <i>|</i>
        <a href="#">资质证照</a>
        <i>|</i>
        <a href="#">协议规则</a>
        <i>|</i>
        <a href="#">下载app</a>
        <i>|</i>
        <a href="#">Select Location</a>

      </div>
      <!-- 1.1.2 顶部导航右边 -->
      <div class="topnav-right">
        <!-- 1.1.2.1 顶部导航左边链接 -->
        <a href="">登录</a>
        <!-- 1.1.2.2 顶部导航左边链接旁边竖线 -->
        <i>|</i>
        <a href="">注册</a>
        <i>|</i>
        <a href="">消息通知</a>
        <a href="" class="cart">购物车(<span>0</span>)</a>

      </div>

    </div>

  </div>
```

##### CSS代码

```css
/* 顶部导航 */
.topnav {
  height: 40px;
  background-color: #333333;
}
/* 版心 因为版心公共样式 所以放在common.css */
/* 顶部导航左边 */
.topnav-left {
  float: left;
}
/* 顶部导航左边的链接 */
/* .topnav-left  a {
  float: left;
  color: #b0b0b0;
  line-height: 40px;
} */

.topnav-left a,
.topnav-right a {
  float: left;
  color: #b0b0b0;
  line-height: 40px;
}


/* .topnav-left  a:hover {
  color: #ffffff;
} */

.topnav-left  a:hover,
.topnav-right  a:hover{
  color: #ffffff;
}

/* 顶部导航左边的竖线 */
/* .topnav-left i {
  float: left;
  color: #423c37;
  line-height: 40px;
  margin: 0 8px;
} */

.topnav-left i,
.topnav-right i {
  float: left;
  color: #423c37;
  line-height: 40px;
  margin: 0 8px;
}

/* 顶部导航右边 */
.topnav-right {
  float: right;
}
/* 顶部导航右边的链接 */
/* .topnav-right a {
  float: left;
  color: #b0b0b0;
  line-height: 40px;
} */

/* .topnav-right a:hover {
  color: #fff;
} */

/* 顶部导航右边的竖线 */
/* .topnav-right i {
  float: left;
  color: #423c37;
  line-height: 40px;
  margin: 0 8px;
} */
/* 顶部导航右边的购物车 */
.topnav-right .cart {
  margin-left: 24px;
  width: 120px;
  height: 40px;
  background-color: #424242;
  text-align: center;
}

.topnav-right .cart:hover {
  color: #ff6700;
  background-color: #ffffff;
}
```

#### 搜索导航 searchnav

##### HTML代码
```html
 <!-- 2.搜索导航 -->
  <div class="searchnav">
    <!-- 2.1 版心 -->
    <div class="container">
      <!-- 2.1.1 logo -->
      <a href="" class="searchnav-logo">
        <img src="./img/mi-logo.png" alt="">
      </a>
      <!-- 2.1.2 tab栏 -->
      <div class="searchnav-tab">
        <a href="#">小米手机</a>
        <a href="#">Redmi红米</a>
        <a href="#">电视</a>
        <a href="#">笔记本</a>
        <a href="#">家电</a>
        <a href="#">路由器</a>
        <a href="#">智能硬件</a>
        <a href="#">服务</a>
        <a href="#">社区</a>
      </div>
      <!-- 2.1.3 搜索-->
      <div class="searchnav-search">
        <!-- 2.1.3.1 搜索输入框 -->
        <input type="text">
        <!-- 2.1.3.2 搜索按钮 -->
        <button></button>
        <!-- 2.1.3.3 热门搜索关键词 -->
        <span>小米9 Pro 5G</span><span>Redmi Note 8</span>
      </div>

    </div>

  </div>
```
##### CSS代码
```css
/* 搜索导航 */
.searchnav {
  height: 100px;
}

.searchnav-logo {
  float: left;
  width: 55px;
  height: 55px;
  background-color: #ff6700;
  padding: 3px;
  box-sizing: border-box;
  margin-top: calc((100px - 55px) / 2);
}

.searchnav-tab {
  float: left;
  height: 100px;
  margin-left: 180px;
}

.searchnav-tab a {
  float: left;
  margin:  0 10px;
  font-size: 16px;
  color: #333333;
  line-height: 100px;
}

.searchnav-search {
  float: right;
  margin-top: calc((100px - 50px) / 2);
  width: 296px;
  height: 50px;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
}

.searchnav-search input {
  float: left;
  width: calc(296px - 52px);
  box-sizing: border-box;
  padding: 8px;
  height: 100%;
  border: none;
  border-right: 1px solid  #e0e0e0;
}

.searchnav-search button {
  float: right;
  width: 50px;
  height: 48px;
  background-color: #ffffff;
  background-image: url(../img/search_icon.png);
  background-repeat: no-repeat;
  background-position: center center;
  border: none;
}

.searchnav-search-hotkeys {
  position: absolute;
  top: 50%;
  margin-top: -9px;
  right: 51px;
  height: 18px;
  line-height: 18px;
}

.searchnav-search-hotkeys span {
  margin-right: 8px;
  padding: 4px 6px;
  background-color: #eeeeee;
  color: #757575;
}

```
##### box-sizing 盒子尺寸

- 作用: 当给盒子重新添加padding border的时候 重新计算盒子的宽和高
- 应用场景: * {box-sizing: border-box}
- 属性: box-sizing
  - content-box(默认值) 盒子的真正宽度 = css中的width+padding+border
  - border-box(只要用box-sizing就用border-box)  盒子的真正大小就是css中的width和height = padding+border+可变的大小

##### :focus 只能给input用

- 请看other中的focus伪类

图片的格式（压缩图片）:

* jpeg/jpg  压缩格式 这样的图片不允许出现透明
* png png24和 png8  png可以有透明   
* gif  动图  也不允许有透明
* svg 矢量图片 就是无论图片有多大都不模糊
* webp google新出的图片压缩格式 jpg的特点 

#### 轮播图 carousel

##### HTML代码

```html
 <!-- 3.轮播图 -->
  <div class="carousel">
    <!-- 3.1 版心 -->
    <div class="container">
      <!-- 3.1.1 轮播图图片列表 ul -->
      <ul class="carousel-list">
        <!-- 3.1.1.1 轮播图图片列表项 li  -->
        <li>
          <!-- 3.1.1.1.1 轮播图图片的链接 (因为点击每张图片都能跳转) a -->
          <a href="">
            <!-- 3.1.1.1.1.1 图片 -->
            <img src="./upload/list-1.webp" alt="">
          </a>
        </li>
      </ul>

    </div>

  </div>
```

##### CSS代码

```css
/* 3.轮播图 */
/* 后代选择器 个数禁止超过三个 如果超过三个 那么页面渲染速度会变慢(页面会布局跳) */
/* 原因: 我们写选择器是从左往右写 浏览器找选择器是从右往左找 */
.carousel ul a {
  display: block;
}
```

#####  html代码 左侧列表

```html
<!-- 3.轮播图 -->
  <div class="carousel">
    <!-- 3.1 版心 -->
    <div class="container">
      <!-- 3.1.1 轮播图图片列表 ul -->
      <ul class="carousel-list">
        <!-- 3.1.1.1 轮播图图片列表项 li  -->
        <li>
          <!-- 3.1.1.1.1 轮播图图片的链接 (因为点击每张图片都能跳转) a -->
          <a href="">
            <!-- 3.1.1.1.1.1 图片 -->
            <img src="./upload/list-1.webp" alt="">
          </a>
        </li>

      </ul>
      <!-- 3.1.2 轮播图侧边栏 -->
      <div class="carousel-aside">
        <!-- 3.1.2.1 轮播图侧边栏列表项 -->
        <a href="">手机 电话卡 <i class="iconfont-arrow-right-big"></i></a>
        <a href="">电视 盒子 <i class="iconfont-arrow-right-big"></i></a>
        <a href="">笔记本 平板 <i class="iconfont-arrow-right-big"></i></a>
        <a href="">手机 电话卡 <i class="iconfont-arrow-right-big"></i></a>
        <a href="">电视 盒子 <i class="iconfont-arrow-right-big"></i></a>
        <a href="">笔记本 平板 <i class="iconfont-arrow-right-big"></i></a>
        <a href="">手机 电话卡<i class="iconfont-arrow-right-big"></i></a>
        <a href="">电视 盒子 <i class="iconfont-arrow-right-big"></i></a>
        <a href="">笔记本 平板 <i class="iconfont-arrow-right-big"></i></a>
        <a href="">笔记本 平板 <i class="iconfont-arrow-right-big"></i></a>
      </div>

      <!-- 3.1.3 左右按钮 -->
      <a href="" class="carousel-left iconfont-arrow-left-big-thin"></a>
      <a href="" class="carousel-right iconfont-arrow-right-big-thin"></a>
      <!-- 3.1.4 右下角轮播导航 -->
      <ol class="dotnav">
        <li class="active"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ol>

    </div>

  </div>
```

#####  CSS代码 左侧列表

```css
/* 3.轮播图 */
/* 后代选择器 个数禁止超过三个 如果超过三个 那么页面渲染速度会变慢(页面会布局跳) */
/* 原因: 我们写选择器是从左往右写 浏览器找选择器是从右往左找 */
.carousel {
  height: 460px;
}
.carousel-list a {
  display: block;
}

.carousel-aside {
  position: absolute;
  top: 0;
  left: 0;
  width: 234px;
  height: 460px;
  background-color: rgba(154, 153, 153,0.75);
  padding: 20px 0;
  box-sizing: border-box;
}

.carousel-aside a {
  display: block;
  padding-left: 28px;
  padding-right: 24px;
  width: 100%;
  height: 42px;
  box-sizing: border-box;
  /* 辅助代码 */
  /* border: 1px solid #fff; */
  line-height: 42px;
  font-size: 14px;
  color: #fff;
  font-weight: 700;
}

.carousel-aside a:hover {
  background-color: #ff6700;
}

.carousel-aside i {
  float: right;
  font-size: 18px;
  font-weight: 400;
 }


 /* 轮播左边按钮 */
 .carousel-left {
   position: absolute;
   top: 50%;
   margin-top: -35px;
   left: 234px;
   width: 40px;
   height: 70px;
   color: #ccc;
   font-size: 40px;
   line-height: 70px;
   /*  */
 }

 .carousel-right {
  position: absolute;
  top: 50%;
  margin-top: -35px;
  right: 0px;
  width: 40px;
  height: 70px;
  color: #ccc;
  font-size: 40px;
  line-height: 70px;
  /*  */
}

 .carousel-left:hover,
 .carousel-right:hover {
   color: #fff;
   background-color: rgba(0, 0, 0,0.75);
 }

 /* 原点导航 */
 .dotnav {
   position: absolute;
   right: 34px;
   bottom: 26px;
 }

 .dotnav li {
   float: left;
   width: 10px;
   height: 10px;
   box-sizing: border-box;
   border: 2px solid #b0b3b5;
   background-color: #8d9195;
   border-radius: 50%;
   margin: 0 2px;
 }

 .dotnav .active,
 .dotnav li:hover {
   background-color: #f3f7fb;
   border-color: #929496;
 }
```

##### 边框半径(边框圆角)

本来有八个值

```
border-radius: 左上x 右上x 右下x 左下x/左y 右上y 右下y 左下y
```

四个值

```
border-radius: 左上角x和y一样 右上角x和y一样 右下角x和y一样 左下角x和y一样
```

一个值

```css
border-radius: 一个值代表四个角统一的圆角值

正圆用: 50% 代表 元素的宽+padding+border的50%
```



#### 优惠商品 discount

##### HTML代码

```html
 <!-- 4.优惠活动 -->
  <div class="discount">
    <!-- 4.1 版心 -->
    <div class="container clearfix">
      <!-- 4.1.1 各种服务 -->
      <div class="discount-server">
        <!-- a[href="#"]*6>(img[src="./img/discount_item_$.png"])+(span{小米秒杀})* -->
        <!-- 4.1.1.1 服务链接 -->
        <a href="#">
          <img src="./img/discount_item_1.png" alt=""><span>小米秒杀</span>
        </a>
        <a href="#">
          <img src="./img/discount_item_2.png" alt=""><span>企业团购</span>
        </a>
        <a href="#">
          <img src="./img/discount_item_3.png" alt=""><span>F码通道</span>
        </a>
        <a href="#">
          <img src="./img/discount_item_4.png" alt=""><span>米粉卡</span>
        </a>
        <a href="#">
          <img src="./img/discount_item_5.png" alt=""><span>以旧换新</span>
        </a>
        <a href="#">
          <img src="./img/discount_item_6.png" alt=""><span>花费充值</span>
        </a>

      </div>
      <!-- 4.1.2 优惠商品 -->
      <a href="#" class="discount-product"><img src="./upload/discount_1.jpg" alt=""></a>
      <!-- 4.1.2 优惠商品 -->
      <a href="#" class="discount-product"><img src="./upload/discount_2.jpg" alt=""></a>
      <!-- 4.1.2 优惠商品 -->
      <a href="#" class="discount-product"><img src="./upload/discount_3.jpg" alt=""></a>
    </div>

  </div>


```

##### CSS代码

```css
/* 优惠活动 */
 .discount {
  margin-top: 14px;
  margin-bottom: 26px;
 }


 .discount-server {
   float: left;
   width: 234px;
   height: 170px;
   background-color: #5f5750;
 }

 /* 原本 半透明 移入不透明 */
 .discount-server a {
   position: relative;
   float: left;
   width: 78px;
   height: 85px;
   text-align: center;
   opacity: 0.5;
 }

 .discount-server a:before {
   content: '';
   position: absolute;
   top: 2px;
   left: 9px;
   width: 64px;
   height: 1px;
   background-color: #776d65;
 }

 .discount-server a:after {
  content: '';
  position: absolute;
  top: 9px;
  left: 3px;
  width: 1px;
  height: 70px;
  background-color: #776d65;
}

 .discount-server a:hover {
   opacity: 1;
 }

 .discount-server img {
   margin-top: 22px;
   margin-bottom: 8px;
   width: 24px;
 }

 .discount-server span {
   display: block;
   color: #fff;
 }

 .discount-product {
   float: left;
   width: 316px;
   height: 170px;
   margin-left: 15px;
 }

 /* 含义是: 既是第二个元素 又是class为discount-product */
 .discount-product:nth-child(2) {
    margin-left: 14px;
 }

 .discount-product img {
   width: 100%;
   height: 100%;
 }
```

##### 元素透明方案

* transparent 完全透明 只能用在background-color color
* 可以调整透明度 rgba  哪个属性设置  哪个属性就有透明度 background-color color border-color
* 可以调整透明度 但是只能设置给整个元素opacity 设置之后 元素中的任何子元素 任何属性都将透明

#### 小米闪购 flash

##### HTML代码

```html
<!-- 5.小米闪购 -->
  <div class="flash">
    <!-- 5.1版心 -->
    <div class="container">
      <!-- 5.1.1闪购标题 -->
      <div class="flash-title clearfix">
        <h2>小米闪购</h2>
        <div class="flash-title-button">
          <a href="">
            <i class="iconfont-arrow-left-big"></i>
          </a>
          <a href="">
            <i class="iconfont-arrow-right-big"></i>
          </a>
        </div>
      </div>
      <!-- 5.1.2闪购内容 -->
      <div class="flash-content clearfix">
        <!-- 5.1.2.1 秒杀 -->
        <div class="flash-content-seckill">
          <h3><span>00:00</span> 场</h3>
          <img src="./img/flash-content-seckill.png" alt="">
          <span class="flash-content-seckill-text">距离结束还有</span>
          <div class="flash-content-seckill-time clearfix">
            <span>00</span><small>:</small><span>28</span><small>:</small><span>41</span>
          </div>
        </div>
        <!-- 5.1.2.2 商品展示 -->
        <div class="flash-content-show">
          <a href="#" class="flash-content-show-product">
            <img src="./upload/flash_product_1.jpg" alt="">
            <h4>高品质多功能头戴耳机</h4>
            <p>我的私人KTV</p>
            <!-- ￥ 这是人民币符号 但是我们不能用字打出来 这时候就需要用到实体符号 &字母; -->
            <!-- 实体符号特别多 有一些还挺简单的 &gt; &lt;  -->
            <span class="new">27.9元</span>
            <del class="old">32.9元</del>
          </a>
          <a href="#" class="flash-content-show-product">
            <strong>5折</strong>
            <img src="./upload/flash_product_1.jpg" alt="">
            <h4>高品质多功能头戴耳机</h4>
            <p>我的私人KTV</p>
            <!-- ￥ 这是人民币符号 但是我们不能用字打出来 这时候就需要用到实体符号 &字母; -->
            <!-- 实体符号特别多 有一些还挺简单的 &gt; &lt;  -->
            <span class="new">27.9元</span>
            <del class="old">32.9元</del>
          </a>
          <a href="#" class="flash-content-show-product">
            <!-- 因为有的商品有打折促销 有的没有 因此加一个示意 -->
            <strong>1元</strong>
            <img src="./upload/flash_product_1.jpg" alt="">
            <h4>高品质多功能头戴耳机</h4>
            <p>我的私人KTV</p>
            <!-- ￥ 这是人民币符号 但是我们不能用字打出来 这时候就需要用到实体符号 &字母; -->
            <!-- 实体符号特别多 有一些还挺简单的 &gt; &lt;  -->
            <span class="new">27.9元</span>
            <del class="old">32.9元</del>
          </a>
          <a href="#" class="flash-content-show-product">
            <img src="./upload/flash_product_1.jpg" alt="">
            <h4>高品质多功能头戴耳机</h4>
            <p>我的私人KTV</p>
            <!-- ￥ 这是人民币符号 但是我们不能用字打出来 这时候就需要用到实体符号 &字母; -->
            <!-- 实体符号特别多 有一些还挺简单的 &gt; &lt;  -->
            <span class="new">27.9元</span>
            <del class="old">32.9元</del>
          </a>
        </div>
      </div>
    </div>
  </div>

```

##### CSS代码

```css
/* 5.闪购 */
 .flash {
   height: 402px;
   background-color: #f5f5f5;
   /* margin-bottom: 1000px;
   padding-bottom: 20px; */
 }

 .flash-title {
   height: 62px;
 }

 .flash-title h2 {
   float: left;
   font-size: 22px;
   line-height: 62px;
   color: #333333;
   /* lighter细体 能不能起作用全看电脑中有没有细体 */
   font-weight: lighter;
 }

 .flash-title-button {
   float: right;
   margin-top:  calc((62px - 24px) / 2);
   width: 71px; 
   height: 24px;
   border: 1px solid #e0e0e0;
   box-sizing: border-box;
 }

 .flash-title-button a {
  float: left;
  width: 34px;
  height: 22px;
  text-align: center;
 }

 .flash-title-button a:first-child {
   border-right: 1px solid #e0e0e0;
 }

 .flash-title-button  i {
   line-height: 22px;
   font-size: 16px;
   color: #b0b2ba;
 }

 .flash-title-button a:hover i {
   color: #fe7000;
 }


 .flash-content {
   height: 340px;
 }

 .flash-content-seckill {
  float: left;
  width: 234px;
  height: 100%;
  border-top: 1px solid #e53934;
  background-color: #f1eded;
  box-sizing: border-box;
  text-align: center;
 }

 .flash-content-seckill h3 {
   color: #e53934;
   font-weight: normal;
   font-size: 20px;
   margin-top: 60px;
   margin-bottom: 30px;
 }

 .flash-content-seckill-text {
   display: block;
   /* margin-top: 30px; */
   margin: 30px 0;
   font-size: 14px;
   color: #6f6d6d;
 }

 /* .flash-content-seckill-time {

 } */

 .flash-content-seckill-time span,
 .flash-content-seckill-time small {
   display: inline-block;
   font-size: 24px;
 }

 .flash-content-seckill-time span {
   width: 46px;
   height: 46px;
   background-color: #605751;
   color: #fff;
   line-height: 46px;
 }

 .flash-content-seckill-time small {
   color: #605751;
   height: 46px;
   font-weight: 700;
   margin: 0 5px;
 }

 .flash-content-show {
  float: right;
  width: calc(1226px - 234px)
 }


.flash-content-show-product {
  position: relative;
  float: left;
  margin-left: 14px;
  width: 234px;
  height: 340px;
  background-color:  rgb(255, 255, 255);
  border-top: 1px solid #2196f3;
  text-align: center;
  box-sizing: border-box;
}

.flash-content-show-product img {
  margin-top: 30px;
}

.flash-content-show-product h4 {
  font-size: 14px;
  font-weight: 400;
  color: #333;
  margin-bottom: 5px;
}
.flash-content-show-product p {
  margin-bottom: 15px;
  color: #999;
  font-size: 12px;
  
}

.flash-content-show-product .new {
  color: #ff6700;
}

.flash-content-show-product .old {
  color: #adadad;
  text-decoration: line-through;
}

.flash-content-show-product strong {
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -32px;
  width: 64px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background-color: #e13834;
  color: #fff;
}
```

#### 阴影

##### 文本阴影  text-shadow

给文字添加阴影 

```css
text-shadow: X轴偏移 Y轴偏移 模糊程度  阴影颜色

text-shadow: X轴偏移 Y轴偏移 模糊程度  阴影颜色,X轴偏移 Y轴偏移 模糊程度  阴影颜色,X轴偏移 Y轴偏移 模糊程度  阴影颜色...
```

##### 盒子阴影 box-shadow

```css
box-shadow: 水平偏移 竖直偏移 模糊程度 扩展半径(可选)  颜色  内阴影(可选的)
```

#### 广告 ad

##### HTML代码

```html
 <!-- 6.广告 -->
  <div class="ad">
    <div class="container">
      <a href="">
        <img src="./upload/ad_1.webp" alt="">
      </a>
    </div>
  </div>
```



##### CSS代码

```css
/* 6.广告 */
.ad {
  background-color: #f5f5f5;
  /* margin: 22px 0; */
  padding: 22px 0;
}
.ad a{
  display: block;
  width: 100%;
}
```



#### 手机 phone

##### HTML代码

```html
  <!-- 7.手机 -->
  <div class="phone">
    <!-- 7.1 版心 -->
    <div class="container">
      <!-- 7.1.1 手机标题 -->
      <div class="phone-title">
        <!-- 7.1.1.1 手机模块标题 -->
        <h2>小米闪购</h2>
        <!-- 7.1.1.2 查看全部按钮 -->
        <a class="phone-title-button">
          查看全部
          <i class="iconfont-arrow-right-big"></i>
        </a>
      </div>

      <!-- 7.1.2 手机内容 -->
      <div class="phone-content">
        <!-- 7.1.2.1 手机内容海报 -->
        <a href="" class="phone-left">
          <img src="./upload/phone_left_a.webp" alt="">
        </a>
        <!-- 7.1.2.2 商品展示(请查看212代码) -->
        <div class="phone-content-show">
          <a href="#" class="phone-content-show-product">
            <img src="./upload/flash_product_1.jpg" alt="">
            <h4>小米CC9 Pro</h4>
            <p>一亿像素 五摄四闪</p>
            <!-- ￥ 这是人民币符号 但是我们不能用字打出来 这时候就需要用到实体符号 &字母; -->
            <!-- 实体符号特别多 有一些还挺简单的 &gt; &lt;  -->
            <span class="new">2799元起</span>
          </a>
        </div>
      </div>

    </div>

  </div>

```

##### CSS代码

```css
/* 7.手机 */
.phone {
  background-color: #f5f5f5;
  margin-bottom: 1000px;
}

.phone-title {
  height: 58px;
  line-height: 58px;
}

.phone-title h2 {
  float: left;
  font-size: 22px;
  color: #333333;
  /* lighter细体 能不能起作用全看电脑中有没有细体 */
  font-weight: lighter;
}
.phone-title-button {
  float: right;
}

.phone-title-button i {
  background-color: #b0b0b0;
  color: #fff;
  border-radius: 50%;
  /* padding: 2px; */
  padding: 1px 0;
  padding-left: 2px
  
}

/* .phone-content-show {
  
} */

.phone--content-left {
  float: left;
}

.phone-content-show {
  float: right;
  width: calc(1226px - 234px);
}

.phone-content-show-product {
  float: left;
}


.phone-content-show-product {
  position: relative;
  top: 0;
  left: 0;
  float: left;
  margin-left: 14px;
  width: 234px;
  height: 300px;
  background-color:  rgb(255, 255, 255);
  text-align: center;
  box-sizing: border-box;
  /* all任何变化的属性 1s代表这些变化用了1秒来完成 */
  transition: all 1s;
}

.phone-content-show-product:hover {
  top: -1px;
  box-shadow: 0 10px 20px rgba(0,0,0, 0.2);
}

.phone-content-show-product:nth-child(-n+4) {
  margin-bottom: 14px;
}

.phone-content-show-product img {
  margin-top: 30px;
}

.phone-content-show-product h4 {
  font-size: 14px;
  font-weight: 400;
  color: #333;
  margin-bottom: 5px;
}
.phone-content-show-product p {
  margin-bottom: 15px;
  color: #999;
  font-size: 12px;
  
}

.phone-content-show-product .new {
  color: #ff6700;
}

.phone-content-show-product .old {
  color: #adadad;
  text-decoration: line-through;
}

.phone-content-show-product strong {
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -32px;
  width: 64px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background-color: #e13834;
  color: #fff;
}

```



#### 家电 homeapp

##### HTML代码

```html
<!-- 8.家电 -->
  <div class="homeapp">
    <!-- 8.1 版心 -->
    <div class="container">
      <!-- 8.1.1 家电标题 -->
      <div class="homeapp-title">
        <!-- 8.1.1.1 文字 -->
        <h2>家电</h2>
        <!-- 8.1.1.2 按钮 -->、
        <div class="homeapp-title-button">
          <a href="">热门</a>
          <a href="">电视影音</a>
        </div>
      </div>

      <!-- 8.1.2 家电内容 -->
      <div class="homeapp-content">
        <!-- 8.1.2.1 家电内容项 -->
        <a href="#" class="flash-content-show-product">
          <img src="./upload/homeapp_content_img_1.webp" alt="">
        </a>
        <a href="#" class="flash-content-show-product">
          <!-- 因为有的商品有打折促销 有的没有 因此加一个示意 -->
          <strong>1元</strong>
          <img src="./upload/flash_product_1.jpg" alt="">
          <h4>高品质多功能头戴耳机</h4>
          <p>我的私人KTV</p>
          <!-- ￥ 这是人民币符号 但是我们不能用字打出来 这时候就需要用到实体符号 &字母; -->
          <!-- 实体符号特别多 有一些还挺简单的 &gt; &lt;  -->
          <span class="new">27.9元</span>
          <del class="old">32.9元</del>
        </a>
        <a href="#" class="flash-content-show-product">
          <!-- 因为有的商品有打折促销 有的没有 因此加一个示意 -->
          <strong>1元</strong>
          <img src="./upload/flash_product_1.jpg" alt="">
          <h4>高品质多功能头戴耳机</h4>
          <p>我的私人KTV</p>
          <!-- ￥ 这是人民币符号 但是我们不能用字打出来 这时候就需要用到实体符号 &字母; -->
          <!-- 实体符号特别多 有一些还挺简单的 &gt; &lt;  -->
          <span class="new">27.9元</span>
          <del class="old">32.9元</del>
        </a>
        <a href="#" class="flash-content-show-product">
          <!-- 因为有的商品有打折促销 有的没有 因此加一个示意 -->
          <strong>1元</strong>
          <img src="./upload/flash_product_1.jpg" alt="">
          <h4>高品质多功能头戴耳机</h4>
          <p>我的私人KTV</p>
          <!-- ￥ 这是人民币符号 但是我们不能用字打出来 这时候就需要用到实体符号 &字母; -->
          <!-- 实体符号特别多 有一些还挺简单的 &gt; &lt;  -->
          <span class="new">27.9元</span>
          <del class="old">32.9元</del>
        </a>
        <a href="#" class="flash-content-show-product">
          <!-- 因为有的商品有打折促销 有的没有 因此加一个示意 -->
          <strong>1元</strong>
          <img src="./upload/flash_product_1.jpg" alt="">
          <h4>高品质多功能头戴耳机</h4>
          <p>我的私人KTV</p>
          <!-- ￥ 这是人民币符号 但是我们不能用字打出来 这时候就需要用到实体符号 &字母; -->
          <!-- 实体符号特别多 有一些还挺简单的 &gt; &lt;  -->
          <span class="new">27.9元</span>
          <del class="old">32.9元</del>
        </a>
        <a href="#" class="flash-content-show-product">
          <img src="./upload/homeapp_content_img_2.webp" alt="">
        </a>
        <a href="#" class="flash-content-show-product">
          <!-- 因为有的商品有打折促销 有的没有 因此加一个示意 -->
          <strong>1元</strong>
          <img src="./upload/flash_product_1.jpg" alt="">
          <h4>高品质多功能头戴耳机</h4>
          <p>我的私人KTV</p>
          <!-- ￥ 这是人民币符号 但是我们不能用字打出来 这时候就需要用到实体符号 &字母; -->
          <!-- 实体符号特别多 有一些还挺简单的 &gt; &lt;  -->
          <span class="new">27.9元</span>
          <del class="old">32.9元</del>
        </a>
        <a href="#" class="flash-content-show-product">
          <!-- 因为有的商品有打折促销 有的没有 因此加一个示意 -->
          <strong>1元</strong>
          <img src="./upload/flash_product_1.jpg" alt="">
          <h4>高品质多功能头戴耳机</h4>
          <p>我的私人KTV</p>
          <!-- ￥ 这是人民币符号 但是我们不能用字打出来 这时候就需要用到实体符号 &字母; -->
          <!-- 实体符号特别多 有一些还挺简单的 &gt; &lt;  -->
          <span class="new">27.9元</span>
          <del class="old">32.9元</del>
        </a>
        <a href="#" class="flash-content-show-product">
          <!-- 因为有的商品有打折促销 有的没有 因此加一个示意 -->
          <strong>1元</strong>
          <img src="./upload/flash_product_1.jpg" alt="">
          <h4>高品质多功能头戴耳机</h4>
          <p>我的私人KTV</p>
          <!-- ￥ 这是人民币符号 但是我们不能用字打出来 这时候就需要用到实体符号 &字母; -->
          <!-- 实体符号特别多 有一些还挺简单的 &gt; &lt;  -->
          <span class="new">27.9元</span>
          <del class="old">32.9元</del>
        </a>

        <!-- 8.1.2.2 家电内容更多 -->
        <div class="homeapp-content-more">
          <a href="">
            <div>
              <p>
                Air 13.3" 2019款
              </p>
              <span>4499起</span>
            </div>
            <img src="./upload/homeapp_content_more.webp" alt="">
          </a>
          <a href="">
            <div>
              <h3>
                浏览更多
              </h3>
              <span>热门</span>
            </div>
            <i class="iconfont-circle-arrow-right"></i>
          </a>
        </div>
      </div>

    </div>

  </div>
```

##### CSS代码

```css
/* 8.家电 */
.homeapp {
  background-color: #f5f5f5;
}

.homeapp-title {
  height: 58px;
  line-height: 58px;
}

.homeapp-title h2 {
  float: left;
  font-size: 22px;
  color: #333333;
  /* lighter细体 能不能起作用全看电脑中有没有细体 */
  font-weight: lighter;
}

.homeapp-title-button {
  float: right;
}

.homeapp-title-button a {
  font-size: 16px;
  margin-left: 32px;
}

/* 既是.homeapp-title-button a  类名又是active */
.homeapp-title-button a.active {
  padding-bottom: 5px;
  color: #ff6700;
  border-bottom: 2px solid #ff6700;
}

.homeapp-content-show-product {
  float: left;
  width: 234px;
  height: 300px;
  padding-top: 20px;
  background-color: #ffffff;
  margin-left: 14px;
  text-align: center;
  box-sizing: border-box;
}

.homeapp-content-show-product img {
  width: 160px; 
  margin-bottom: 20px;
}

.homeapp-content-show-product h4 {
  font-size: 14px;
  font-weight: 400;
  color: #333;
  margin-bottom: 5px;
}

.homeapp-content-show-product p {
  margin-bottom: 15px;
  color: #999;
  font-size: 12px;
  
}

.homeapp-content-show-product .new {
  color: #ff6700;
}

.homeapp-content-show-product .old {
  color: #adadad;
  text-decoration: line-through;
}


/* 1 6 11 16  ---> 5n+1 */
.homeapp-content-show-product:nth-child(5n+1) {
  margin-left: 0px;
  padding-top: 0px;
}

.homeapp-content-show-product:nth-child(5n+1) img {
  width: 100%;
}

.homeapp-content-show-product:nth-child(-n+5) {
  margin-bottom: 14px;
}

.homeapp-content-show-more {
  padding: 0;
  background-color: transparent;
}

.homeapp-content-show-more a {
  display: block;
  padding: 30px 0px 30px 28px;
  width: 234px;
  height: calc((300px - 14px) / 2);
  background-color: #fff;
  box-sizing: border-box;
}

.homeapp-content-show-more-text {
  float: left;
  text-align: left;
}

.homeapp-content-show-more-text p {
  width: 90px;
  font-size: 14px;
  line-height: 22px;
  color: #333333;

}

.homeapp-content-show-more-text span {
  color: #ff6700;
}

.homeapp-content-show-more img {
  float: right;
  width: 80px;
  margin-right: 18px;
}

.homeapp-content-show-more a:first-child {
 margin-bottom: 14px; 
}

.homeapp-content-show-more-text h3 {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 5px;
}

.homeapp-content-show-more-text small {
  color: #757575;
}

.homeapp-content-show-product  i {
  float: right;
  font-size: 48px;
  color: #ff6700;
  margin-top: 16px;
  margin-right: 40px;
}
```



#### 视频 video

##### HTML代码

```html
 <!-- 9.视频 -->
  <div class="video">
    <!-- 9.1版心 -->
    <div class="container">
      <!-- 9.1.1 视频标题 -->
      <div class="video-title">
        <!-- 9.1.1.1 视频标题文字 -->
        <h2>视频</h2>
        <!-- 9.1.1.2 视频查看全部 -->
        <a class="video-title-button">
          查看全部
          <i class="iconfont-arrow-right-big"></i>
        </a>
      </div>

      <!-- 9.1.2 视频内容 -->
      <div class="video-content">
        <!-- 9.1.2.1 视频内容视频项 -->
        <div class="video-content-movie">
          <!-- 9.1.2.1.1 视频内容视频项视频预览图 -->
          <img src="./upload/video_content_movie.webp" alt="">
          <!-- 9.1.2.1.2 视频内容视频项视频标题 -->
          <p>小米MIX Alpha开箱视频</p>
          <!-- 9.1.2.1.3 视频内容视频项视频播放按钮 -->
          <a href="">
            <i class="iconfont-play"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
```

##### CSS代码

```css
/* 视频 */
.video {
  background-color: #f5f5f5;
  padding-bottom: 26px;
}



.video-title {
  height: 58px;
  line-height: 58px;
}

.video-title h2 {
  float: left;
  font-size: 22px;
  color: #333333;
  /* lighter细体 能不能起作用全看电脑中有没有细体 */
  font-weight: lighter;
}
.video-title-button {
  float: right;
  font-size: 16px;
}

.video-title-button i {
  background-color: #b0b0b0;
  color: #fff;
  border-radius: 50%;
  /* padding: 2px; */
  padding: 1px 0;
  padding-left: 2px;
  font-size: 14px;
}

.video-content-movie {
  position: relative;
  float: left;
  margin-right: 14px;
  width: 296px;
  height: 285px;
  background-color: #fff;
}

.video-content-movie:last-child {
  margin-right: 0;
}

.video-content-movie img {
  width: 100%;
}

.video-content-movie p {
  text-align: center;
  margin-top: 32px;
  font-size: 14px;
}

.video-content-movie-play {
  position: absolute;
  top: 142px;
  left: 25px;
  border: 2px solid #fff;
  height: 20px;
  border-radius: 11px;
}
.video-content-movie-play:hover {
  transition: all 0.5s;
  background-color: #ff6700;
  border-color:#ff6700;
}


.video-content-movie-play i {
  color: #fff;
  font-size: 30px;
  line-height: 20px;
}

```



#### 售后 sale

##### HTML代码

```html
 <!-- 10.售后 -->
  <div class="sale">
    <!-- 10.1版心 -->
    <div class="container">
      <!-- 10.1.1 各项服务 -->
      <a href="">
        <!-- 10.1.1.1 图标 -->
        <i class="iconfont-tool"></i>
      </a>
      <!-- 10.1.1 各项服务 -->
      <a href="">
        <!-- 10.1.1.1 图标 -->
        <i class="iconfont-circle-7"></i>
      </a>
      <!-- 10.1.1 各项服务 -->
      <a href="">
        <!-- 10.1.1.1 图标 -->
        <i class="iconfont-circle-15"></i>
      </a>
      <!-- 10.1.1 各项服务 -->
      <a href="">
        <!-- 10.1.1.1 图标 -->
        <i class="iconfont-gift"></i>
      </a>
      <!-- 10.1.1 各项服务 -->
      <a href="">
        <!-- 10.1.1.1 图标 -->
        <i class="iconfont-location"></i>
      </a>
    </div>

  </div>
```

##### CSS代码

```css
/* 售后 */
.sale {
  
  height: 80px;
  background-color: #fff;
 
}

.sale .sale-main {
  height: 80px;
  padding:  27px 0;
  box-sizing: border-box ;
  border-bottom: 1px solid #e0e0e0;
}

.sale a {
  float: left;
  width: 244px;
  border-right: 1px solid #e0e0e0;
  text-align: center;
  font-size: 16px;
}

.sale i {
  font-size: 24px;
  /* 第一种 */
  /* position: relative;
  top: 6px; */
  /* 第二种 */
  vertical-align: middle;
  /* 第三种 浮动 margin-top调整 */
}


```

#### 在线客服

##### HTML代码

```html
<!-- 11. 其他 -->
  <div class="other">
    <!-- 11.1 版心 -->
    <div class="container clearfix">
      <!-- 11.1.1 其他服务 -->
      <div class="other-service clearfix">
        <!-- 11.1.1.1 其他服务项 -->
        <dl>
          <dt>帮助中心</dt>
          <dd><a href="#">账户管理</a></dd>
          <dd><a href="#">购物指南</a></dd>
          <dd><a href="#">订单操作</a></dd>
        </dl>
        <!-- 11.1.1.1 其他服务项 -->
        <dl>
          <dt>帮助中心</dt>
          <dd><a href="#">账户管理</a></dd>
          <dd><a href="#">购物指南</a></dd>
          <dd><a href="#">订单操作</a></dd>
        </dl>
        <!-- 11.1.1.1 其他服务项 -->
        <dl>
          <dt>帮助中心</dt>
          <dd><a href="#">账户管理</a></dd>
          <dd><a href="#">购物指南</a></dd>
          <dd><a href="#">订单操作</a></dd>
        </dl>
        <!-- 11.1.1.1 其他服务项 -->
        <dl>
          <dt>帮助中心</dt>
          <dd><a href="#">账户管理</a></dd>
          <dd><a href="#">购物指南</a></dd>
          <dd><a href="#">订单操作</a></dd>
        </dl>
        <!-- 11.1.1.1 其他服务项 -->
        <dl>
          <dt>帮助中心</dt>
          <dd><a href="#">账户管理</a></dd>
          <dd><a href="#">购物指南</a></dd>
          <dd><a href="#">订单操作</a></dd>
        </dl>
        <!-- 11.1.1.1 其他服务项 -->
        <dl>
          <dt>帮助中心</dt>
          <dd><a href="#">账户管理</a></dd>
          <dd><a href="#">购物指南</a></dd>
          <dd><a href="#">订单操作</a></dd>
        </dl>
      </div>

      <!-- 11.1.2 人工服务 -->
      <div class="other-person">
        <h3>400-100-5678</h3>
        <p>周一至周日 8:00-18:00 <br> (仅收市话费)</p>
        <a href=""> <i class="iconfont-message2"></i> 人工客服</a>
      </div>
    </div>

  </div>
```



##### CSS代码

```
/* 其他 */
.other {
  padding: 40px 0;
}

.other-service {
  float: left;
}

.other-service dl {
  float: left;
  margin-right: 105px;
}

.other-service dt {
  font-size: 14px;
  color: #333;
  margin-bottom: 28px;
}

.other-service dd {
  font-size: 12px;
  color: #666;
  line-height: 28px;
}

.other-service a:hover {
  color: #fe7000;
}

.other-person {
  float: right;
  padding: 0 60px;
  border-left: 1px solid #e0e0e0;
  
}

.other-person h3 {
  font-size: 22px;
  font-weight: normal;
  color: #ff6700;
  margin-bottom: 10px;
}

.other-person p {
  color: #616161;
  line-height: 18px;
  text-align: center;
}

.other-person a {
  display: block;
  width: 120px;
  height: 30px;
  margin:0 auto;
  margin-top: 20px;
  border: 1px solid #ff6700;
  line-height: 30px;
  text-align: center;
  color: #ff6700;
  box-sizing: border-box;

}

.other-person a:hover {
  transition: all 1s;
  background-color: #ff6700;
  color: #fff;
}
```



#### 底部 footer

##### HTML代码

```html
 <!-- 12.底部 -->
  <div class="footer">
    <!-- 12.1版心 -->
    <div class="container clearfix">
      <!-- 12.1.1 logo -->
      <a href="" class="footer-logo">
        <img src="./img/mi-logo.png" alt="">
      </a>
      <!-- 12.1.2 copyright  -->
      <div class="copyright">
        <!-- 12.1.2.1 链接 -->
        <p class="copyright-link">
          <a href="">小米商城 </a>
          | <a href="">MIUI </a>
          | <a href=""> 米家 </a>
          | <a href=""> 米聊 </a>
          | <a href="">多看 </a>
          | <a href="">游戏 </a>
          | <a href="">路由器 </a>
          | <a href="">米粉卡 </a>
          | <a href="">政企服务 </a>
          | <a href="">小米天猫店 </a>
          | <a href="">小米集团隐私政策 </a>
          | <a href="">小米公司儿童信息保护规则 </a>
          | <a href="">小米商城隐私政策 </a>
          | <a href="">小米商城用户协议 </a>
          | <a href="">问题反馈 </a>
          | <a href="">廉正举报 </a>
          | <a href="">诚信合规 </a>
          | <a href="">Select Location </a>
          </a>
        </p>
        <!-- 12.1.2.2 许可证 -->
        <p>
          <span>&copy;</span>
          <a href="">mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2017]1530-131号</a>
          <a href="">（京）网械平台备字（2018）第00005号 互联网药品信息服务资格证 (京) -非经营性-2014-0090 营业执照 医疗器械公告</a>
          <a href="">增值电信业务许可证 网络食品经营备案（京）【2018】WLSPJYBAHF-12 食品经营许可证</a>
          <span>违法和不良信息举报电话：185-0130-1238 知识产权侵权投诉 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</span>
        </p>

        <!-- 12.1.2.3 商标 -->
        <div>
          <img src="./img/truste.png" alt="">
          <img src="./img/v-logo-1.png" alt="">
          <img src="./img/v-logo-2.png" alt="">
          <img src="./img/v-logo-3.png" alt="">
          <img src="./img/v-logo-4.png" alt="">
        </div>
      </div>

    </div>

  </div>

```

##### CSS代码

```css
/* 底部 */
.footer {
  background-color: #fafafa;
  padding: 30px 0;
}

.footer-logo {
  float: left;
  padding: 3px;
  width: 55px;
  height: 55px;
  background-color: #ff6700;
  text-align: center;
  box-sizing: border-box;
}

.footer-copyright {
  width: calc(1226px - 55px);
  padding-left: 10px;
  float: left;
  box-sizing: border-box;
}

.footer-copyright-link,
.footer-copyright-link a{
  color: #757575;
  line-height: 18px;

}

.footer-copyright-link a:hover {

  color: #ff6700;
}

.footer-copyright-agreement span,
.footer-copyright-agreement a {
  color: #b0b0b0;
  line-height: 1.5;
}

.footer-copyright-brand {
  margin-top: 10px;
}

.footer-copyright-brand img:first-child {
  width: 85px;
}


.footer-slogan {
  margin-top: 20px;
  text-align: center;

}
```

