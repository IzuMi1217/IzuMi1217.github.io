import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "Quanhao Chen",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "博客演示",
      description: "",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
