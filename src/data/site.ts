import type { Locale } from "../types";

export const site = {
  title: "littlebearbbb / lab notes",
  url: "https://littlebearbbb.github.io",
  email: "littlebearbbb@gmail.com",
  repo: "littlebearbbb/littlebearbbb.github.io",
  description: {
    zh: "来自中国的编程、游戏与世界发现爱好者。在这里记录代码、旅程、实验和正在发生的事。",
    en: "A coding, gaming, and world-discovery enthusiast from China. This is where I share code, journeys, experiments, and what I am building."
  },
  intro: {
    zh: "我是来自中国的一个编程、游戏、世界发现爱好者。后面的内容，我会在这里慢慢分享。",
    en: "I am a coding, gaming, and world-discovery enthusiast from China. I will keep sharing the rest of the story here."
  },
  nav: {
    zh: [
      { href: "/zh/", label: "首页" },
      { href: "/zh/logs/", label: "日志" },
      { href: "/zh/projects/", label: "项目" },
      { href: "/zh/now/", label: "现在" },
      { href: "/zh/tags/", label: "标签" },
      { href: "/zh/categories/", label: "分类" },
      { href: "/zh/about/", label: "关于" }
    ],
    en: [
      { href: "/en/", label: "Home" },
      { href: "/en/logs/", label: "Logs" },
      { href: "/en/projects/", label: "Projects" },
      { href: "/en/now/", label: "Now" },
      { href: "/en/tags/", label: "Tags" },
      { href: "/en/categories/", label: "Categories" },
      { href: "/en/about/", label: "About" }
    ]
  }
} satisfies {
  title: string;
  url: string;
  email: string;
  repo: string;
  description: Record<Locale, string>;
  intro: Record<Locale, string>;
  nav: Record<Locale, { href: string; label: string }[]>;
};

export const labels = {
  zh: {
    localeName: "中文",
    switchLabel: "English",
    heroKicker: "system.boot",
    heroTitle: "A small lab for logs, code, games, and discovery.",
    heroBody:
      "偏向工程记录，也接受好奇心的漫游。这里会放编程笔记、游戏体验、折腾日志，以及我观察世界的片段。",
    latest: "最新日志",
    projects: "项目",
    now: "现在",
    tags: "标签",
    categories: "分类",
    rss: "RSS 订阅",
    commentTitle: "讨论",
    email: "联系邮箱",
    allLogs: "查看全部日志",
    readMore: "继续阅读",
    postedOn: "发布于",
    backHome: "返回首页",
    previous: "上一页",
    next: "下一页",
    pageLabel: "页码",
    coverLabel: "封面",
    noPosts: "还没有文章，第一篇日志很快就会出现。",
    relatedPosts: "相关文章",
    articleInfo: "文章信息",
    readingTags: "标签",
    publishedAt: "发布时间",
    inCategory: "分类",
    relatedPlaceholder: "随着文章增多，这里会出现同主题内容。",
    languageSwitcher: "语言切换",
    themeLight: "浅色",
    themeDark: "深色",
    themeSwitcher: "主题切换"
  },
  en: {
    localeName: "English",
    switchLabel: "中文",
    heroKicker: "system.boot",
    heroTitle: "A small lab for logs, code, games, and discovery.",
    heroBody:
      "Part engineering notebook, part curiosity map. This is where I keep coding notes, game thoughts, build logs, and fragments from the world.",
    latest: "Latest logs",
    projects: "Projects",
    now: "Now",
    tags: "Tags",
    categories: "Categories",
    rss: "RSS feed",
    commentTitle: "Discussion",
    email: "Email",
    allLogs: "Browse all logs",
    readMore: "Read more",
    postedOn: "Posted on",
    backHome: "Back home",
    previous: "Previous",
    next: "Next",
    pageLabel: "Page",
    coverLabel: "Cover",
    noPosts: "No posts yet. The first log should land soon.",
    relatedPosts: "Related posts",
    articleInfo: "Article info",
    readingTags: "Tags",
    publishedAt: "Published",
    inCategory: "Category",
    relatedPlaceholder: "Related entries will show up here as the log grows.",
    languageSwitcher: "Language switcher",
    themeLight: "Light",
    themeDark: "Dark",
    themeSwitcher: "Theme switcher"
  }
} as const;
