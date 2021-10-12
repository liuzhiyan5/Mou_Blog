---
title: Effective JavaScript 编写高质量JavaScript代码的68个有效方法
date: 2021-05-14
tags:
  - JavaScript
categories:
  - 前端
---

## JavaScript 中的浮点数

大多数编程语言都有几种数值型数据类型，但是 JavaScript 却只有一种。你可以使用 typeof 运算符查看数字的类型。不管是整数还是浮点数，JavaScript 都将它们简单地归类为数字。

```js
typeof 10 // number
typeof 10.1 // number
typeof -10.1 // number 
```

事实上，<font style="color:red">JavaScript中所有的数字都是双精度浮点数</font>。这是由[IEE 754](https://baike.baidu.com/item/IEEE%20754/3869922?fr=aladdin)标准制定的64位编码数字—即 “doubles” 。

那么 JavaScript 是如何表达整数的呢?

请先记住一个概念 : 双精度浮点数能完美地表示高达53位精度的整数,范围大小为 -2^53----2^53 的所有整数都是有效的双精度浮点数

因此，尽管 JavaScript中缺少明显的整数类型，但是完全可以进行整数运算。

大多数的算术运算符可以使用整数、实数或两者的组合进行计算。

```js
console.log(0.1 * 1.9);   // 0.19;
console.log(-10 + 11);    // 1
console.log(20 - 10);     // 10
console.log(5 / 10);      // 0.5
console.log(49 / 7);      // 7
```



然而位算术运算符比较特殊。JavaScript不会直接将操作数作为浮点数进行运算，而是会将其<font style="color:red">隐式地</font>转换为32位整数后进行运算(确切地说，它们被转换为32位大端（big-endian) 的 2 补码表示的整数)



```js
console.log(8 | 1); //9
```

看似简单的表达式实际上需要几个步骤来完成运算

如前文所述，JavaScript 的数字都是双精度浮点数。同时也可以表示为 32 位整数，即 32 位 0、1的序列。

整数 8 为 32 位二进制序列如下

00000000000000000000000000001000

我们也可以用 JavaScript 中数字类型的 toString 方法来查看

```js
// 转成二进制
(8).toString(2) // "1000"
```

整数1表示为32位二进制如下所示：
00000000000000000000000000000001



然后按照相同位只要一个为1即为1 的运算法则，那么结果就是

00000000000000000000000000001001

其结果就是

```js
// 将 1001 看成二进制，返回十进制数
ParseInt("1001",2) // 9
```

所有位运算符的工作方式都是相同的。其操作步骤为 ：

- 将操作数转换为 32 位整数
- 使用整数位模式进行运算
- 将结果转换为标准的 JavaScript 浮点数

一般情况下，JavaScript 引擎需要做一些额外的工作来进行折现转换。

因为数字是以浮点数存储的，必须将其转为整数，然后再转回浮点数。



然后我们在进行浮点数的运算的时候会发现一些不正确的结果

```js
0.1 + 0.2 // 0.30000000000000004
```

尽管64位的精度已经相当高了，但是双精度浮点数也只能表示一组有限的数字，而不能表示所有的实数集。浮点运算只能产生近似的结果，四舍五入到最接近的可表示的实数。

浮点数权衡了精度和性能。当我们关系精度的时候，要小心浮点数的局限性。一个有效的解决办法就是尽可能地采用整数值运算，因为整数在表示时不需要舍入。

### 总结

- JavaScript 的数字都是双精度的浮点数。
- JavaScript中的整数仅仅是双精度浮点数的一个子集，而不是一个单独的数据类型。
- 位运算符将数字视为 32 位的有符号整数。

## 隐式转换

算术运算符 -、*、/ 和 % 在计算之前都会尝试将其参数转换为数字。而算术符 +，既重载了数字相加，又重载了字符串连接操作。

加法运算是左结合律

null 在算术运算中不会导致失败而是隐式地转换为0

一个未定义的变量将被转换为特殊的浮点数值NaN（not a number）

无奈的是，即便是测试NaN值也是异常困难。这有两个原因。

- JavaScript遵循了IEEE浮点数标准令人头痛的要求—NaN不等于其本身

```js
let x = NaN;
x === NaN; //false
```



另外，标准的库函数 isNaN也不是很可靠，因为它带有自己的隐式强制转换，在测试其参数之前，会将参数转换为数字（isNaN函数的一个更精确的名称可能是 coercesToNaN）。如果你已经知道一个值是数字，你可以使用 isNaN函数测试它是否是NaN。

```js
isNaN(NaN); //true
```

但是对于其他绝对不是NaN，但会被强制转换为NaN的值，使用 isNaN方法是无法区分的。

```jsx
console.log(isNaN("刘德华"));           // true
console.log(isNaN(undefined));          // true
console.log(isNaN({}));                 // true
console.log(isNaN({ name: "罗老师" }));  // true
```



最后一种强制转换有时称为真值运算（truthiness）

大多数的 JavaScript值都为真值（truth），也就是能隐式地转换为true，真值运算不会隐式调用任何强制转换方法

JavaScript中有 7 个假值： false、0、-0、”“、NaN、null 和undefined

其他所有的值都为真值。

由于数字和字符串可能为假值，因此，使用真值运算检查函数参数或者对象属性是否已定义不是绝对安全的。



对象也可以被强制转换为原始值。最常见的用法是转换为字符串

```js
console.log("the Math object" + Math); //the Math object[object Math]
console.log("the JSON object" + JSON); //the JSON object[object JSON]
```

对象通过隐式地调用其自身的 toString方法转换为字符串。

```js
console.log(Math.toString());
console.log(JSON.toString());
```

### 总结

- 类型错误可能被隐式的强制转换所隐藏。
- 重载的运算符+是进行加法运算还是字符串连接操作取决于其参数类型。
- 对象通过 valueof方法强制转換为数字，通过 toString方法强制转换为字符串。
- 具有 valueof 方法的对象应该实现 toString方法，返回一个 valueof 方法产生的数字的字符串表示。
- 测试一个值是否为未定义的值，应该使用 typeof 或者与 undefined 进行比较而不是使用真值运算。

## 原始类型优于封装对象

除了对象之外，JavaScript有5个原始值类型：布尔值、数字、字符串、null 和 undefined
（令人困惑的是，对 null 类型进行 typeof操作得到的结果为“object”，然而，ECMAScript标准描述其为一个独特的类型。）同时，标准库提供了构造函数来封装布尔值、数字和字符串作为对象。你可以创建一个 String对象，该对象封装了一个字符串值。

```js
// 原始字符串
let a = "hello";
let b = "hello";
// String 对象
let c = new String("hello")
let d = new String("hello")
console.log(a === b) // true
console.log(typeof c) // object
console.log(a === c) // false
console.log(a == c) // true
console.log(c == d) // false
console.log(c === d) // false
```



String 的原型对象有一个 toUpperCase 方法,可以将字符串转换为大写.你可以对原始字符串值调用这个方法。

```js
"hi".someProperty = 17
console.log("hi".someProperty) // undefined
```

因为<font style="color:red">每次隐式封装都会产生一个新的 String对象</font>>，更新第一个封装对象并不会造成持久的影响。对原始值设置属性的确是没有意义的，但是觉察到这种行为是值得的。事实证明，这是 JavaScript隐藏类型错误的又一种情形。<font style="color:red">本来你想给一个对象设置属性，但没注意其实它是个原始值，程序只是忽略更新而继续运行。</font>这容易导致一些难以发现的错误，并且难以诊断。

### 总结

- 当做相等比较时，原始类型的封装对象与其原始值行为不一样。
- 获取和设置原始类型值的属性会隐式地创建封装对象。

## == 运算符的强制转换规则

| 参数类型1                             | 参数类型2                             | 强制转换                                                     |
| ------------------------------------- | ------------------------------------- | ------------------------------------------------------------ |
| null                                  | undefined                             | 不转换,总是返回 true                                         |
| null 或 undefined                     | 其他任何非 null 或 undefined 的类型   | 不转换,总是返回 false                                        |
| 原始类型 : string 、number 或 boolean | Date 对象                             | 将原始类型转换为数字；将Date 对象转换为原始类型（优先常识 toString 方法，再常识 valueOf 方法） |
| 原始类型 : string 、number 或 boolean | 非 Date 对象                          | 将原始类型转换为数字；将非 Date 对象转换为原始类型（优先常识 valueOf方法，再常识 toString方法） |
| 原始类型 : string 、number 或 boolean | 原始类型 : string 、number 或 boolean | 将原始类型转换为数字                                         |

### 总结

- 当参数类型不同时，== 运算符应用了一套难以理解的隐式强制转换[规则](#隐式转换)。
- 使用 === 运算符，使读者不需要涉及任何的隐式强制转換就能明白你的比较运算。
- 当比较不同类型的值时，使用你自己的显式强制转换使程序的行为更清晰。



## 视字符串为16位的代码单元序列

- JavaScript 字符串由16位的代码单元组成，而不是由 Unicode 代码点组成。
- JavaScript 使用两个代码单元表示26及其以上的 Unicode 代码点。这两个代码单元被称为代理对
- 代理对甩开了字符串元素计数，length、charAt、charCodeAt：方法以及正则表达式模式（例如“.”）受到了影响。
- 使用第三方的库编写可识别代码点的字符串操作。
- 每当你使用一个含有字符串操作的库时，你都需要查阅该库文档，看它如何处理代码点的整个范围。



## 熟练掌握闭包

我们可能经常时候闭包,但是你未发现这是闭包而已罢了

理解闭包只需要学会三个基本的事实。

第一个事实：JavaScript允许你引用在当前函数以外定义的变量。

```js {7}
function sayHi() {
  let Hi = "Hi"

  function name(name) {
    return Hi + "," + name
  }
  return name("罗老师")
}
let result = sayHi()
console.log(result) // Hi,罗老师
```

第二个事实：即使外部函数已经返回，当前函数仍然可以引用在外部函数所定义的变量。
如果这听起来让人难以置信，请记住，JavaScript的函数是第一类（first-class对象（请参阅第19条）。这意味着，你可以返回一个内部函数，并在稍后调用它。

```js {7,10-13}
function sayHi() {
  let Hi = "Hi"

  function name(name) {
    return Hi + "," + name
  }
  return name
}
let result = sayHi()
let a = result("a老师")
let b = result("b老师")
console.log(a) // Hi,罗老师
console.log(b) // Hi,罗老师
```

和第一个例子不同的是,不是在外部调用函数 sayHi 中立即调用 name("罗老师"),而是返回 name 函数本身。因此变量 a 的值是内部的 name 函数,调用变量 a 实际上是调用了 name 函数。但即使 sayHi 函数已经返回,name 函数仍然能记住 Hi 变量的值



学习闭包的第三个也是最后一个事实 : 闭包可以更新外部变量的值。

实际上,闭包存储的是外部变量的引用,而不是它们的值的副本。因此,对于任何具有访问这些外部变量的闭包,都可以进行更新。一个简单的惯用法 box 对象说明了这一切。它存储了一个可读写的内部值。

```js
function box() {
  let value = undefined;
  return {
    set:function(newValue){value=newValue},
    get:function(){return value},
    type:function(){return typeof value}
  }
}
let result = box();
console.log(result.type()) //undefined
console.log(result.get()) //undefined
result.set(100)
console.log(result.get()) // 100 
console.log(result.type()) // number
```

这个例子产生了一个包含三个闭包的对象。这三个闭包是set、get和type属性。它们都共享访问 value 变量。se t闭包更新 value 的值,随后调用 get 和 type 查看更新的结果。

### 总结 

1. Javascript 允许你引用当前函数以外定义的变量
2. 即使外部函数已经返回,当前函数仍可以引用在外部函数所定义的变量
3. 闭包可以更新外部变量的值。实际上,闭包存储的是外部变量的引用,而不是它们的值的副本

## 变量声明提升



## 进度

pdf 47