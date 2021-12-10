(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{657:function(s,e,n){"use strict";n.r(e);var a=n(4),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"less"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#less"}},[s._v("#")]),s._v(" less")]),s._v(" "),n("h4",{attrs:{id:"less-介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#less-介绍"}},[s._v("#")]),s._v(" less 介绍")]),s._v(" "),n("blockquote",[n("p",[s._v("less 是什么?")])]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("less是一个CSS预处理器，可以为网站启用可自定义，可管理和可重用的样式表。 less是一种动态样式表语言，扩展了CSS的功能。\nCSS预处理器是一种脚本语言，可扩展CSS并将其编译为常规CSS语法，以便可以通过Web浏览器读取。\n它提供诸如函数变量，， mixins 和操作等功能，可以构建动态CSS。本质上，LESS 包含一套自定义的语法及一个解析器。\n")])])]),n("blockquote",[n("p",[s._v("为什么要使用 less?")])]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("less轻松地生成可在浏览器中工作的CSS。(sass less stylus)\nless使您能够使用嵌套编写更干净，组织良好的代码。通过使用变量可以更快地实现维护。\nless使您能够通过在规则集中引用它们来轻松地重用整个类。\nless提供使用操作，使得编码更快并节省时间。\n")])])]),n("h4",{attrs:{id:"less-安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#less-安装"}},[s._v("#")]),s._v(" less 安装")]),s._v(" "),n("blockquote",[n("p",[s._v("安装步骤:")])]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("第一步: 安装node (node就是没有dom的javascript node是开发后台应用程序的)  node -v\n\n第二步: 在命令提示符下运行以下命令: npm(node package manage) install(安装) -g(global) less\n        如果你看到了如下的结果\n        `-- less@2.6.1\n          +-- errno@0.1.4\n          | `-- prr@0.0.0\n          +-- graceful-fs@4.1.3\n          +-- image-size@0.4.0\n          +-- mime@1.3.4\n          +-- mkdirp@0.5.1\n          | `-- minimist@0.0.8\n          +-- promise@7.1.1\n          | `-- asap@2.0.3\n          +-- request@2.69.0\n          | +-- aws-sign2@0.6.0\n          | +-- aws4@1.3.2\n          | | `-- lru-cache@4.0.0\n          | |   +-- pseudomap@1.0.2\n          | |   `-- yallist@2.0.0\n          | +-- bl@1.0.3\n          | | `-- readable-stream@2.0.6\n          | |   +-- core-util-is@1.0.2\n          | |   +-- inherits@2.0.1\n          | |   +-- isarray@1.0.0\n          | |   +-- process-nextick-args@1.0.6\n          | |   +-- string_decoder@0.10.31\n          | |   `-- util-deprecate@1.0.2\n          | +-- caseless@0.11.0\n          | +-- combined-stream@1.0.5\n          | | `-- delayed-stream@1.0.0\n          | +-- extend@3.0.0\n          | +-- forever-agent@0.6.1\n          | +-- form-data@1.0.0-rc4\n          | | `-- async@1.5.2\n          | +-- har-validator@2.0.6\n          | | +-- chalk@1.1.1\n          | | | +-- ansi-styles@2.2.0\n          | | | | `-- color-convert@1.0.0\n          | | | +-- escape-string-regexp@1.0.5\n          | | | +-- has-ansi@2.0.0\n          | | | | `-- ansi-regex@2.0.0\n          | | | +-- strip-ansi@3.0.1\n          | | | `-- supports-color@2.0.0\n          | | +-- commander@2.9.0\n          | | | `-- graceful-readlink@1.0.1\n          | | +-- is-my-json-valid@2.13.1\n          | | | +-- generate-function@2.0.0\n          | | | +-- generate-object-property@1.2.0\n          | | | | `-- is-property@1.0.2\n          | | | +-- jsonpointer@2.0.0\n          | | | `-- xtend@4.0.1\n          | | `-- pinkie-promise@2.0.0\n          | |   `-- pinkie@2.0.4\n          | +-- hawk@3.1.3\n          | | +-- boom@2.10.1\n          | | +-- cryptiles@2.0.5\n          | | +-- hoek@2.16.3\n          | | `-- sntp@1.0.9\n          | +-- http-signature@1.1.1\n          | | +-- assert-plus@0.2.0\n          | | +-- jsprim@1.2.2\n          | | | +-- extsprintf@1.0.2\n          | | | +-- json-schema@0.2.2\n          | | | `-- verror@1.3.6\n          | | `-- sshpk@1.7.4\n          | |   +-- asn1@0.2.3\n          | |   +-- dashdash@1.13.0\n          | |   | `-- assert-plus@1.0.0\n          | |   +-- ecc-jsbn@0.1.1\n          | |   +-- jodid25519@1.0.2\n          | |   +-- jsbn@0.1.0\n          | |   `-- tweetnacl@0.14.1\n          | +-- is-typedarray@1.0.0\n          | +-- isstream@0.1.2\n          | +-- json-stringify-safe@5.0.1\n          | +-- mime-types@2.1.10\n          | | `-- mime-db@1.22.0\n          | +-- node-uuid@1.4.7\n          | +-- oauth-sign@0.8.1\n          | +-- qs@6.0.2\n          | +-- stringstream@0.0.5\n          | +-- tough-cookie@2.2.2\n          | `-- tunnel-agent@0.4.2\n          `-- source-map@0.5.3\n第三步: 如果出现类似的上面的结果 代表less安装成功了。 用一个命令: lessc -v;\n")])])]),n("h4",{attrs:{id:"less-编译-css"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#less-编译-css"}},[s._v("#")]),s._v(" less 编译 css")]),s._v(" "),n("blockquote",[n("p",[s._v("第一种方法("),n("strong",[s._v("命令行")]),s._v("): 在 less 文件夹下打开命令行窗口 输入命令:"),n("strong",[s._v("lessc path/xxx.less path/xxx.css")])])]),s._v(" "),n("blockquote",[n("p",[s._v("第二种方法("),n("strong",[s._v("webstorm")]),s._v("): 找到 webstorm 中的 文件(file)> 设置(setting) > 工具(Tools) > File Watchers 对话框 中的'+'号 选择 less 前提是必须安装 node 和 less")])]),s._v(" "),n("blockquote",[n("p",[s._v("第三种方法("),n("strong",[s._v("vscode")]),s._v("): 在 vscode 中安装 Easy Less 然后在文件中创建 less 文件即可")])]),s._v(" "),n("blockquote",[n("p",[s._v("第四种方法("),n("em",[s._v("Koala")]),s._v("): 专门把 less 编译成 css 的软件 (如果用 koala 软件 则不再需要使用安装 less) sass")])]),s._v(" "),n("h4",{attrs:{id:"less-语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#less-语法"}},[s._v("#")]),s._v(" less 语法")]),s._v(" "),n("blockquote",[n("p",[s._v("变量")])]),s._v(" "),n("p",[s._v("格式: @变量名: 值")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("body {\n  background-color:#ccc;\n}\n\nmain {\n  color:#ccc;\n  background-color:#fff;\n  font-size:24px;\n  padding:20px 30px 40px 50px;\n}\naside {\n  font-size:24px;\n  margin:20px 30px 40px 50px;\n}\n")])])]),n("blockquote",[n("p",[s._v("嵌套规则")])]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v(".container h1 {\n  font-size: 25px;\n  color: #E45456;\n}\n\n.container p {\n  font-size: 25px;\n  color: #3C7949;\n}\n\n.container .myclass h1 {\n  font-size: 25px;\n  color: #E45456;\n}\n.container .myclass p {\n  font-size: 25px;\n  color: #3C7949;\n}\n")])])]),n("blockquote",[n("p",[s._v("父选择器")])]),s._v(" "),n("p",[s._v("格式: & 代表父选择器 > 代表直接子元素选择器\na {\ncolor:yellowgreen;\n}\na:link {"),n("br"),s._v("\ncolor: black;"),n("br"),s._v("\n}"),n("br"),s._v("\na:visited {"),n("br"),s._v("\ncolor:blue;"),n("br"),s._v("\n}"),n("br"),s._v("\na:hover {"),n("br"),s._v("\ncolor: orange;"),n("br"),s._v("\n}"),n("br"),s._v("\na:active {"),n("br"),s._v("\ncolor: pink;"),n("br"),s._v("\n}")]),s._v(" "),n("blockquote",[n("p",[s._v("四则运算(+ - * /)")])]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v(".myclass {\n  font-size: 20px;\n  color: green;\n}\n")])])]),n("blockquote",[n("p",[s._v("注释")])]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("// 没有注释的代码是不好的   // 静默注释\n\n/* 注释应当解释为什么 而不是 是什么。可以选择性的解释如何做 如果代码特别令人困惑的话*/\n")])])]),n("blockquote",[n("p",[s._v("混合器(无参 有参无默认值 有参有默认值)")])]),s._v(" "),n("p",[s._v("格式: .混合器的名字(参数) {}\na {\ncolor:yellowgreen;\n}\na:link {"),n("br"),s._v("\ncolor: black;"),n("br"),s._v("\n}"),n("br"),s._v("\na:visited {"),n("br"),s._v("\ncolor:blue;"),n("br"),s._v("\n}"),n("br"),s._v("\na:hover {"),n("br"),s._v("\ncolor: orange;"),n("br"),s._v("\n}"),n("br"),s._v("\na:active {"),n("br"),s._v("\ncolor: pink;"),n("br"),s._v("\n}")]),s._v(" "),n("blockquote",[n("p",[s._v("继承(扩展)")])]),s._v(" "),n("p",[s._v("格式: &:extend(选择器)\nmain {\ncolor:#ccc;\nbackground-color:#fff;\nfont-size:24px;\npadding:20px 30px 40px 50px;\n}\naside {\nfont-size:24px;\nmargin:20px 30px 40px 50px;\n}")]),s._v(" "),n("blockquote",[n("p",[s._v("导入其他 less 文件")])]),s._v(" "),n("h2",{attrs:{id:"import-src-单一职责原则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#import-src-单一职责原则"}},[s._v("#")]),s._v(' @import "src" 单一职责原则')]),s._v(" "),n("h2",{attrs:{id:"什么是媒体查询"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是媒体查询"}},[s._v("#")]),s._v(" 什么是媒体查询")]),s._v(" "),n("ul",[n("li",[s._v("媒体查询是 CSS3 的中一个强大的工具。它是包含媒体类型以及零或多个检查特定媒体特征条件的表达式。\n表达式描述了媒体特征, 最终会被解析为 true 或 false.如果是 true 那么会执行 如果是 false 就不会执行了.\n要做响应式(媒体查询) 还要做 rem 布局(需要用到媒体查询)\n通过不同的判别条件识别不同的设备 以给该设备应用不同的样式")])]),s._v(" "),n("h2",{attrs:{id:"如何使用媒体查询"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何使用媒体查询"}},[s._v("#")]),s._v(" 如何使用媒体查询")]),s._v(" "),n("ul",[n("li",[s._v("link 标签中的 CSS 媒体查询\n用 link 方式引入的时候 media 属性中 放着媒体查询的条件 如果条件成立 那么应用该样式表\n"),n("link",{attrs:{rel:"stylesheet",href:"./link-ipone5.css",media:"screen and (width: 320px)"}})]),s._v(" "),n("li",[s._v("样式表中的@media 关键字引入 CSS 媒体查询\n@media 条件 {\n在该条件成立的时候 应用的样式\n}")])]),s._v(" "),n("h2",{attrs:{id:"媒体特性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#媒体特性"}},[s._v("#")]),s._v(" 媒体特性")]),s._v(" "),n("ul",[n("li",[s._v("width 视口的宽度")]),s._v(" "),n("li",[s._v("height 视口的高度")]),s._v(" "),n("li",[s._v("device-width 设备屏幕宽度")]),s._v(" "),n("li",[s._v("device-height 设备屏幕高度")]),s._v(" "),n("li",[s._v("orientation 横屏竖屏\n"),n("ul",[n("li",[s._v("portrait （纵向）")]),s._v(" "),n("li",[s._v("landscape（横向）")])])])]),s._v(" "),n("h2",{attrs:{id:"如何解决媒体查询的兼容性问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何解决媒体查询的兼容性问题"}},[s._v("#")]),s._v(" 如何解决媒体查询的兼容性问题")]),s._v(" "),n("p",[s._v("Respond.js 是一个极小的增强 Web 浏览器的 JavaScript 库，使得原本不支持 CSS 媒体查询的浏览器能够支持它们。该脚本循环遍历页面上的所有 CSS 引用，并使用媒体查询分析 CSS 规则。然后，该脚本会监控浏览器宽度变化，添加或删除与 CSS 中媒体查询匹配的样式。最终结果是，能够在原本不支持的浏览器上运行媒体查询。")]),s._v(" "),n("h2",{attrs:{id:"rem-布局-移动端主流"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rem-布局-移动端主流"}},[s._v("#")]),s._v(" rem 布局(移动端主流)")]),s._v(" "),n("h4",{attrs:{id:"相对单位-rem-和-em"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#相对单位-rem-和-em"}},[s._v("#")]),s._v(" 相对单位 rem 和 em")]),s._v(" "),n("blockquote",[n("p",[s._v("em")])]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("em是一个相对长度单位。当使用em单位时，像素值将是em值乘以使用em单位的元素的字体大小。(如果使用em单位的元素没有直观的font-size,那么就在计算样式中查找)\n")])])]),n("blockquote",[n("p",[s._v("rem")])]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("rem也是一个相对长度单位。只不过r(root)em它相对的不再是自己的font-size.当使用 rem 单位，他们转化为像素大小取决于页面根元素的字体大小，即 html 元素的字体大小。根元素字体大小乘以你 rem 值。\n")])])]),n("h4",{attrs:{id:"rem-布局项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rem-布局项目"}},[s._v("#")]),s._v(" rem 布局项目")]),s._v(" "),n("blockquote",[n("p",[s._v("项目背景")])]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("随着市场的的需求，在我们的生活中出现了各种各样不同尺寸屏幕的手机,以致于让开发者在开发移动端页面的时候碰到了一个难题--如何把设计图按照不同的屏幕的大小按比例高度的还原。以往我们所用的技术有固定宽度布局、百分比布局等等。但是以上两种布局方式都存在这样那样的问题。因此需要通过这个项目来练习rem布局。rem布局同时也是现在主流的适配移动端页面的主要方式。\n")])])]),n("blockquote",[n("p",[s._v("业务分析")])]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("K2H:\n  1.首先进入第一张图。第一张图有两个添加区域分别为:全场优惠和优惠券。\n  2.当用户点击全场优惠时。进入第三张图。添加全场优惠券的信息\n  3.当你点击规则说明。则会弹出遮罩层 用来说明一些规则。点击我知道了。遮罩隐藏\n  4.在第三张图中点击保存。则该页面回到第二张图。显示全场优惠券。\n")])])]),n("blockquote",[n("p",[s._v("所用技术")])]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("CSS预处理器--less\n媒体查询\nrem\n")])])]),n("blockquote",[n("p",[s._v("项目结构搭建")])]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("1 严重影响到用户的功能了\n2 已经影响到用户功能了 需要下一次产品迭代修复\n3 bug不影响功能 可以延期修复\n4 bug可以不修复或延期修复\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);