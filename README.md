---
home: true
heroText: 博客
tagline: 正因你我生于繁华,弥足之花方显珍贵
# 首页按钮
actionText: 巅峰之路
actionLink: /docs/Front-end/Vue/
lang: zh-cn
# 首页图
# heroImage: /hero.png
# heroImageStyle:
#   {
#     maxWidth: "600px",
#     width: "100%",
#     display: block,
#     margin: "9rem auto 2rem",
#     background: "#fff",
#     borderRadius: "1rem",
#   }
bgImageStyle: { height: "450px" }
# isShowTitleInHome: false
# footer: 11111111
features:
  - title: Yesterday
    details: 开发一款看着开心、写着顺手的 vuepress 博客主题
  - title: Today
    details: 希望帮助更多的人花更多的时间在内容创作上，而不是博客搭建上
  - title: Tomorrow
    details: 希望更多的爱好者能够参与进来，帮助这个主题更好的成长
---

<script>
    export default {
  mounted() {
    (function () {
      var playWords = [
          "富强",
          "民主",
          "文明",
          "和谐",
          "自由",
          "平等",
          "公正",
          "法制",
          "爱国",
          "敬业",
          "诚信",
          "友善",
        ], // 点击展示的词库
        colors = ["#ff4545", "#3eff00","#e9b3e9","#ffdb9e"], // 颜色库
        wordIdx = Math.floor(Math.random() * playWords.length); // 随机取词下标
      document.body.addEventListener("click", function (e) {
        // 监听点击事件
        if (e.target.tagName == "A") {
          // a标签
          return;
        }
        var x = e.pageX,
          y = e.pageY, // 获取点击位置
          span = document.createElement("span"); // 创建展示playWords的span

        span.textContent = playWords[wordIdx];
        wordIdx = (wordIdx + 1) % playWords.length;
        var color = colors[Math.floor(Math.random() * colors.length)]; // 随机取色
        span.style.cssText = [
          "z-index: 9999; position: absolute; top: ",
          y - 20,
          "px; left: ",
          x,
          "px; font-weight: bold; color: ",
          color,
        ].join("");
        document.body.appendChild(span);
        renderWords(span);
      });

      function renderWords(el) {
        var i = 0,
          top = parseInt(el.style.top);

        var playTimer = setInterval(function () {
          if (i > 180) {
            clearInterval(playTimer);
            el.parentNode.removeChild(el);
          } else {
            i += 3;
            el.style.top = top - i + "px";
            el.style.opacity = (180 - i) / 180;
          }
        }, 16.7);
      }
    })();
  },
    };
</script>



