---
title: api
date: 2020-05-28
---

# 转换原点

- transform-origin: 方位词 | 具体像素 | 百分比

# 线性渐变 linear-gradient

- 就是沿着某个方向进行颜色的渐变，可以左右上下以及对角线。

- 线性渐变的语法: background-image: linear-gradient(方向,起始色 颜色距离,终止色 颜色距离, 颜色 距离, 颜色 距离)
- to top, to bottom, to left 和 to right 这些值会被转换成角度 0 度、180 度、270 度和 90 度。其余值会被转换为一个以向顶部中央方向为起点顺时针旋转的角度。渐变线的结束点与其起点中心对称。

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .one {
        width: 300px;
        height: 300px;
        border: 1px solid;
        background-image: linear-gradient(0deg, white 25%, black 25%);
      }

      .two {
        width: 300px;
        height: 300px;
        background: linear-gradient(
            217deg,
            rgba(255, 0, 0, 0.8),
            rgba(255, 0, 0, 0) 70.71%
          ), linear-gradient(
            127deg,
            rgba(0, 255, 0, 0.8),
            rgba(0, 255, 0, 0) 70.71%
          ), linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
      }
    </style>
  </head>

  <body>
    <div class="one"></div>
    <div class="two"></div>
  </body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      div {
        width: 100px;
        height: 100px;
        /* border: 1px solid green; */
        margin: 100px auto;

        /* 有的时候 需要出现间隔明显的渐变  */
        /* 线性渐变的语法: background-image: linear-gradient(方向,起始色 颜色距离,终止色 颜色距离, 颜色 距离, 颜色 距离) */
        background: linear-gradient(
          to right,
          black 25%,
          white 25%,
          #333 50%,
          white 50%
        );
        background-size: 50px;
      }
    </style>
  </head>

  <body>
    <div></div>
  </body>
</html>
```

# 径向渐变 radial-gradient

- 语法:background-image : radial-gradient(主轴 次轴 at 圆心 X 圆心 Y，颜色 距离,颜色 距离...)

- ```css
  background-image: radial-gradient(
    shape size at position,
    start-color,
    ...,
    last-color
  );
  ```

| 值                             | 描述                                                                                                                                                                                                                                                                                                          |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _shape_                        | 确定圆的类型:<br />ellipse (默认): 指定椭圆形的径向渐变。<br />circle ：指定圆形的径向渐变                                                                                                                                                                                                                    |
| _size_                         | 定义渐变的大小，可能值：<br />farthest-corner (默认) : 指定径向渐变的半径长度为从圆心到离圆心最远的角 closest-side ：指定径向渐变的半径长度为从圆心到离圆心最近的边<br />closest-corner ： 指定径向渐变的半径长度为从圆心到离圆心最近的角<br />farthest-side ：指定径向渐变的半径长度为从圆心到离圆心最远的边 |
| _position_                     | 定义渐变的位置。可能值：<br />**center**（默认）：设置中间为径向渐变圆心的纵坐标值。<br />**top**：设置顶部为径向渐变圆心的纵坐标值。<br /> **bottom**：设置底部为径向渐变圆心的纵坐标值。                                                                                                                    |
| _start-color, ..., last-color_ | 用于指定渐变的起止颜色。                                                                                                                                                                                                                                                                                      |

# transform 属性

| 值                                                                        | 描述                                    |
| ------------------------------------------------------------------------- | --------------------------------------- |
| none                                                                      | 定义不进行转换。                        |
| matrix(_n_,_n_,_n_,_n_,_n_,_n_)                                           | 定义 2D 转换，使用六个值的矩阵。        |
| matrix3d(_n_,_n_,_n_,_n_,_n_,_n_,_n_,_n_,_n_,_n_,_n_,_n_,_n_,_n_,_n_,_n_) | 定义 3D 转换，使用 16 个值的 4x4 矩阵。 |
| translate(_x_,_y_)                                                        | 定义 2D 转换。                          |
| translate3d(_x_,_y_,_z_)                                                  | 定义 3D 转换。                          |
| translateX(_x_)                                                           | 定义转换，只是用 X 轴的值。             |
| translateY(_y_)                                                           | 定义转换，只是用 Y 轴的值。             |
| translateZ(_z_)                                                           | 定义 3D 转换，只是用 Z 轴的值。         |
| scale(_x_[,*y*]?)                                                         | 定义 2D 缩放转换。                      |
| scale3d(_x_,_y_,_z_)                                                      | 定义 3D 缩放转换。                      |
| scaleX(_x_)                                                               | 通过设置 X 轴的值来定义缩放转换。       |
| scaleY(_y_)                                                               | 通过设置 Y 轴的值来定义缩放转换。       |
| scaleZ(_z_)                                                               | 通过设置 Z 轴的值来定义 3D 缩放转换。   |
| rotate(_angle_)                                                           | 定义 2D 旋转，在参数中规定角度。        |
| rotate3d(_x_,_y_,_z_,_angle_)                                             | 定义 3D 旋转。                          |
| rotateX(_angle_)                                                          | 定义沿着 X 轴的 3D 旋转。               |
| rotateY(_angle_)                                                          | 定义沿着 Y 轴的 3D 旋转。               |
| rotateZ(_angle_)                                                          | 定义沿着 Z 轴的 3D 旋转。               |
| skew(_x-angle_,_y-angle_)                                                 | 定义沿着 X 和 Y 轴的 2D 倾斜转换。      |
| skewX(_angle_)                                                            | 定义沿着 X 轴的 2D 倾斜转换。           |
| skewY(_angle_)                                                            | 定义沿着 Y 轴的 2D 倾斜转换。           |
| perspective(_n_)                                                          | 为 3D 转换元素定义透视视图。            |
