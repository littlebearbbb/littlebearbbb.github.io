import type { Category, Locale } from "../types";

export const categoryLabels: Record<Category, Record<Locale, string>> = {
  coding: {
    zh: "编程",
    en: "Coding"
  },
  games: {
    zh: "游戏",
    en: "Games"
  },
  world: {
    zh: "世界发现",
    en: "World Discovery"
  },
  notes: {
    zh: "日志与笔记",
    en: "Logs & Notes"
  },
  projects: {
    zh: "项目",
    en: "Projects"
  }
};
