# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

"周末吃什么"是一个面向上班族的微信小程序，主要提供菜品推荐服务。目标用户是周末想自己动手做饭但不知道做什么的人群。

当前阶段：方案打磨期，UI设计和部分前端代码已生成。

## 技术栈

- **前端**：微信小程序原生开发
- **语言**：TypeScript
- **样式**：Scss
- **数据**：前端本地JSON（MVP阶段）

## 目录结构

``` Plain Text
├── docs/
│   ├── project.md       # 项目完整方案文档
│   ├── project-mvp.md  # MVP阶段方案文档
│   └── UI_DESIGN.md    # UI设计说明
├── CLAUDE.md            # 本文件
└── miniprogram/
    ├── project.config.json  # 微信开发者工具配置
    ├── package.json     # 项目依赖
    ├── sitemap.json     # 微信小程序 sitemap 配置
    └── miniprogram/
        ├── app.ts       # 小程序入口
        ├── app.json     # 小程序配置
        ├── app.scss     # 全局样式（颜色变量、间距等）
        ├── data/
        │   └── dishes.ts # 菜品数据（冷启动6道菜）
        ├── pages/
        │   ├── index/   # 首页
        │   │   ├── index.wxml
        │   │   ├── index.scss
        │   │   ├── index.ts
        │   │   └── index.json
        │   └── detail/  # 菜品详情页
        │       ├── detail.wxml
        │       ├── detail.scss
        │       ├── detail.ts
        │       └── detail.json
        └── utils/
            └── util.ts  # 工具函数
            └── constants.ts  # 地区、菜系、口味 等常量数据
```

## 当前实现状态

MVP阶段，详见 [project-mvp.md](./docs/project-mvp.md)

## 开发规范

### UI框架

- 项目引入 [weui-miniprogram](https://wechat-miniprogram.github.io/weui/docs/quickstart.html) 组件库，后续开发优先使用组件库提供的组件
- 图标优先使用 weui-miniprogram 的 [Icon组件](https://wechat-miniprogram.github.io/weui/docs/icon.html)

### 样式规范

- 使用 `.scss` 文件编写样式（而非 `.wxss`）
- className 命名采用 BEM 方式，例如：`block__element--modifier`

## 设计规范

详见 [docs/UI_DESIGN.md](./docs/UI_DESIGN.md)

配色方案（温暖治愈风格）：

- 背景：#FAF6F1（米白）
- 主色：#E07A3E（焦糖橙）
- 辅助色：#D4A373（奶茶棕）

平台标识颜色：

- B站：#FB7299
- 小红书：#FE2C55
- 抖音：#242424

## 文档更新规范

每次有改动后都要考虑是否需要更新文档，并进行文档更新。

文档主要涉及如下几个文件：

- CLAUDE.md
- docs/*.md
