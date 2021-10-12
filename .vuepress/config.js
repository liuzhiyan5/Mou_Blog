const sidebar = require("./sidebar.js");
module.exports = {
  // 网站标题
  title: "白月初的博客",
  description: "正因你我生于繁华,弥足之花方显珍贵",
  dest: "dist", // 打包路径
  base: "/blog/",
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
    // 黑暗模式
    mode: "dark",
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
        text: "文档",
        icon: "reco-message",
        items: [
          {
            text: "vuepress-reco",
            link: "/docs/theme-reco/",
          },
          {
            text: "前端",
            link: "/docs/Front-end/",
          },
          {
            text: "笔记杂项",
            link: "/docs/笔记杂项/",
          },
        ],
      },
      {
        text: "关于我",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/Silence-dream",
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
        text: "分类",
      },
      tag: {
        location: 3,
        text: "标签",
      },
    },
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
    ],
    huawei: true,
    logo: "/logo.gif",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "Silence-dream ",
    authorAvatar: "https://avatars.githubusercontent.com/u/42824008?v=4",
    record: "xxxx",
    startYear: "2017",
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
