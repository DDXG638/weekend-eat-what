# 周末吃什么 MVP 方案

## MVP 第一版方案

### 1. 菜品推荐逻辑

- **推荐算法**：用户输入地区+菜系+口味 → tag标签匹配
- **时令季节**：根据当前时间判断，冬季优先推荐羊肉、萝卜等
- **热度**：MVP和前期可以先不判断热度
- **用户偏好收集**：小程序首页有一个填写偏好的入口，用户首次使用时引导点击入口，然后在一个浮层上填写地区、菜系、口味等信息
- **冷启动数据量**：人工收录30道菜

### 2. 菜品数据模型

```typescript
interface Dish {
  id: string;
  name: string;           // 菜品名称
  coverImage: string;     // 封面图
  description: string;    // 文案描述
  cuisine: string;        // 菜系
  taste: string;          // 口味
  difficulty: string;     // 难度
  cookTime: string;       // 烹饪时间
  ingredients: string[];  // 食材
  tutorials: Tutorial[];  // 教程列表
  tags: string[];         // 标签：川菜、湘菜、口味重、麻辣等
  season?: string;        // 时令
  heatScore?: number;     // 热度分数（后期使用）
}

interface Tutorial {
  platform: 'bilibili' | 'xiaohongshu' | 'douyin';
  title: string;
  url: string;
  coverImage: string;     // 视频封面图
}
```

### 3. 内容跳转问题

- 使用方案A：展示视频封面图+标题+第三方平台标识
- 第一版MVP可以先不上跳转功能，只展示信息让用户知道去哪看
- 注明"来源于XX平台"，风险较小
- 版权说明：只跳转展示第三方平台公开视频，不会在小程序中提取视频内容展示；只展示视频封面图+标题+平台logo

### 4. 搜索/浏览功能

- 前期不需要按菜系和口味浏览
- 需要搜索功能，根据菜品的name和description字段进行模糊匹配

### 5. 技术架构

- **前端**：微信小程序原生开发，TypeScript + Scss
- **后端**：第一版MVP不需要后端服务，使用纯前端+本地数据
- **数据存储**：菜品数据放前端本地JSON，后期放在后端数据库
- **数据更新**：每次发版更新（更新小程序）

### 6. 用户偏好选项

- **地区**：只精确到省份，如"广东省"、"四川省"
- **菜系**：川菜、粤菜、湘菜、鲁菜、闽菜、浙菜、苏菜、徽菜、东北菜、西餐、日料、韩餐
- **口味**：清淡、微辣、中辣、重辣、酸、甜、苦、咸...

详见 [constants.ts](../miniprogram/miniprogram/utils/constants.ts)

### 7. 首页设计

- 偏好填写入口（浮层）
- 推荐菜品列表（双列瀑布流布局）
- 搜索入口

### 8. 数据管理与扩展性

- **数据更新**：每次发版更新（更新小程序），后期数据通过服务器获取
- **扩展性考虑**：
  - 数据结构设计时考虑后端API格式
  - 用户偏好数据预留用户ID字段（即使前期不登录）

## 当前实现状态

- `miniprogram/miniprogram/app.ts/json/scss`：小程序入口和配置
- `miniprogram/miniprogram/data/dishes.ts`：本地菜品数据（6道菜）
- `miniprogram/miniprogram/pages/index`：首页，包含搜索栏、瀑布流菜品列表、偏好设置浮层、推荐算法
- `miniprogram/miniprogram/pages/detail`：菜品详情页，包含封面、信息卡片、描述、食材标签、教程列表
