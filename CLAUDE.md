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

```
├── project.md           # 项目方案文档
├── CLAUDE.md            # 本文件
└── miniprogram/
    ├── UI_DESIGN.md     # UI设计说明
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
```

## 当前实现状态

- `miniprogram/miniprogram/app.ts/json/scss`：小程序入口和配置
- `miniprogram/miniprogram/data/dishes.ts`：本地菜品数据（6道菜）
- `miniprogram/miniprogram/pages/index`：首页，包含搜索栏、瀑布流菜品列表、偏好设置浮层、推荐算法
- `miniprogram/miniprogram/pages/detail`：菜品详情页，包含封面、信息卡片、描述、食材标签、教程列表

## 待完成

1. ~~创建 `miniprogram/miniprogram/app.ts` 入口文件~~ ✅
2. ~~创建 `miniprogram/miniprogram/app.json` 配置文件~~ ✅
3. ~~创建 `miniprogram/project.config.json` 微信开发者工具配置~~ ✅
4. ~~创建 `miniprogram/sitemap.json` 配置文件~~ ✅
5. ~~完善首页和详情页逻辑（推荐算法、数据绑定）~~ ✅
6. ~~创建本地菜品数据 `miniprogram/miniprogram/data/dishes.ts`~~ ✅
7. 图标资源：使用 weui-miniprogram 的 Icon 组件，无需额外图标文件
8. 配置微信小程序跳转功能（后期）

## 开发规范

### UI框架
- 项目引入 [weui-miniprogram](https://wechat-miniprogram.github.io/weui/docs/quickstart.html) 组件库，后续开发优先使用组件库提供的组件
- 图标优先使用 weui-miniprogram 的 [Icon组件](https://wechat-miniprogram.github.io/weui/docs/icon.html)

### 样式规范
- 使用 `.scss` 文件编写样式（而非 `.wxss`）
- className 命名采用 BEM 方式，例如：`block__element--modifier`

### 目录结构调整说明
- 样式文件后缀需从 `.wxss` 改为 `.scss`

## 设计规范

配色方案（温暖治愈风格）：
- 背景：#FAF6F1（米白）
- 主色：#E07A3E（焦糖橙）
- 辅助色：#D4A373（奶茶棕）

平台标识颜色：
- B站：#FB7299
- 小红书：#FE2C55
- 抖音：#242424