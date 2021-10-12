//侧边栏
module.exports = {
  // 文档
  "/docs/Front-end/": [
    "",
    {
      title: "Vue",
      path: "/docs/Front-end/Vue/",
      children: ["Vue/01-Vue2", "Vue/02-Vue3"],
    },
    {
      title: "TypeScript",
      path: "/docs/Front-end/TypeScript/",
      children: ["TypeScript/01.笔记"],
    },
    {
      title: "React",
      path: "/docs/Front-end/React/",
      children: ["React/01-React笔记", "React/02-Redux笔记"],
    },
  ],
  "/docs/笔记杂项/": [
    "",
    // {
    //   title: "2021.04.01月考题",
    //   path: "/docs/笔记杂项/2021.04.01月考题/",
    //   children: ["2021.04.01月考题/01.简答题"],
    // },
  ],
};