const sidebar = require("./sidebar.js");
module.exports = {
  // 网站标题
  title: "刘謀的博客",
  description: "莫愁前路无知己,天下谁人不识君",
  dest: "dist", // 打包路径
  base: "/Mou_Blog/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  // 插件
  plugins: [
    ["vuepress-plugin-code-copy", true],
    ["@vuepress/medium-zoom"],
    [
      "@vuepress/pwa", // 更新刷新插件
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新",
        },
      },
    ],
    // 复制弹窗
    [
      "vuepress-plugin-nuggets-style-copy",
      {
        copyText: "复制代码",
        tip: {
          content: "复制成功!",
        },
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    // 默认模式
    mode: "auto",
    // 顶部导航链接
    nav: [
      {
        text: "主页",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "时间线",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "笔记",
        icon: "reco-message",
        items: [
          {
            text: "前端",
            link: "/docs/前端/",
          },
          {
            text: "数据库",
            link: "/docs/数据库/",
          },
        ],
      },
      {
        text: "关于我",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/liuzhiyan5",
            icon: "reco-github",
          },
        ],
      },
    ],
    // 侧边栏
    sidebar: sidebar,
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "文档",
      },
      tag: {
        location: 3,
        text: "",
      },
    },
    // 友情链接
    friendLink: [
      {
        title: "午后南杂",
        desc: "Enjoy when you can, and endure when you must.",
        email: "1156743527@qq.com",
        link: "https://www.recoluan.com",
      },
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        avatar:
          "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com",
      },
      {
        title: "Silence-dream",
        desc: "白月初",
        avatar: "https://avatars.githubusercontent.com/u/42824008?v=4",
        link: "https://github.com/Silence-dream",
      }
    ],
    huawei: true,
    logo: "/logo.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "謀 LIU",
    authorAvatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201701%2F24%2F20170124004459_aCT53.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636678295&t=9efac6a99f32ad96b38df9c8f91b58c9",
    record: "xxxx",
    startYear: "2019",
    // 备案
    record: "ICP 备案文案",
    recordLink: "ICP 备案指向链接",
    cyberSecurityRecord: "公安部",
    cyberSecurityLink:
      "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh",
    subSidebar: "auto", //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
  },
  markdown: {
    lineNumbers: true,
  },
};
