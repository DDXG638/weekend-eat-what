// 菜品数据（冷启动数据）

export interface Tutorial {
  platform: 'bilibili' | 'xiaohongshu' | 'douyin';
  platformText: string;
  title: string;
  url: string;
  coverImage: string;
}

export interface Dish {
  id: string;
  name: string;
  coverImage: string;
  description: string;
  cuisine: string;
  taste: string;
  difficulty: string;
  cookTime: string;
  ingredients: string[];
  tutorials: Tutorial[];
  tags: string[];
  season?: string;
}

export const dishes: Dish[] = [
  {
    id: '1',
    name: '红烧肉',
    coverImage: 'https://i0.hdslb.com/bfs/archive/9804a325627f4a1cf6c4a9540cf94eb4cbff4627.jpg@672w_378h_1c_!web-search-common-cover',
    description: '红烧肉是一道经典的中式菜肴，色泽红亮，肉质软糯，入口即化，是很多人心中的家的味道。这道菜做法简单，但需要掌握好火候，才能做出入口即化的口感。',
    cuisine: '川菜',
    taste: '酱香',
    difficulty: '中等',
    cookTime: '40分钟',
    ingredients: ['五花肉', '生姜', '葱', '八角', '桂皮', '冰糖', '生抽', '老抽', '料酒', '盐'],
    tutorials: [
      {
        platform: 'bilibili',
        platformText: 'B站',
        title: '经典红烧肉做法，肥而不腻',
        url: 'https://www.bilibili.com/video/xxx',
        coverImage: 'https://i0.hdslb.com/bfs/archive/9804a325627f4a1cf6c4a9540cf94eb4cbff4627.jpg@672w_378h_1c_!web-search-common-cover'
      },
      {
        platform: 'xiaohongshu',
        platformText: '小红书',
        title: '在家做出餐厅级红烧肉',
        url: 'https://www.xiaohongshu.com/explore/xxx',
        coverImage: 'https://sns-webpic-qc.xhscdn.com/202603251543/995f13fb8d603c293c43cbf52ec2050e/1040g00831oa0i2rq4s005nlooq5g8j8qt5b4rr8!nc_n_webp_mw_1'
      }
    ],
    tags: ['下饭菜', '肉菜', '经典', '酱香']
  },
  {
    id: '2',
    name: '麻婆豆腐',
    coverImage: 'https:///i0.hdslb.com/bfs/archive/b29d52883ce8f1ce17b3d44666dfeef9be3468ba.jpg@672w_378h_1c_!web-search-common-cover',
    description: '麻婆豆腐是四川省传统名菜，属于川菜。主要原料为豆腐，辅料为蒜苗、牛肉沫等。口味麻辣，香气四溢，是下饭神器。',
    cuisine: '川菜',
    taste: '麻辣',
    difficulty: '简单',
    cookTime: '20分钟',
    ingredients: ['豆腐', '肉沫', '豆瓣酱', '花椒', '蒜', '葱', '生抽', '淀粉'],
    tutorials: [
      {
        platform: 'bilibili',
        platformText: 'B站',
        title: '正宗麻婆豆腐做法',
        url: 'https://www.bilibili.com/video/yyy',
        coverImage: 'https://i0.hdslb.com/bfs/archive/b29d52883ce8f1ce17b3d44666dfeef9be3468ba.jpg@672w_378h_1c_!web-search-common-cover'
      }
    ],
    tags: ['麻辣', '豆腐', '下饭菜', '川菜']
  },
  {
    id: '3',
    name: '清蒸鲈鱼',
    coverImage: 'https://i0.hdslb.com/bfs/archive/bff022a660f40d08204564ab7942ee5ddd9ae059.jpg@672w_378h_1c_!web-search-common-cover',
    description: '清蒸鲈鱼是一道健康美味的海鲜菜肴，鱼肉鲜嫩，清淡不油腻，保留了鱼肉的原始鲜味。',
    cuisine: '粤菜',
    taste: '清淡',
    difficulty: '中等',
    cookTime: '25分钟',
    ingredients: ['鲈鱼', '葱', '姜', '蒸鱼豉油', '料酒', '盐', '食用油'],
    tutorials: [
      {
        platform: 'xiaohongshu',
        platformText: '小红书',
        title: '零失败的清蒸鲈鱼',
        url: 'https://www.xiaohongshu.com/explore/zzz',
        coverImage: 'https://sns-webpic-qc.xhscdn.com/202603252023/755b267f010a1744d0337504c1433e4d/1040g00831seu25tt5k005na7tl14f311j3psmd8!nc_n_webp_mw_1'
      }
    ],
    tags: ['清淡', '海鲜', '健康', '粤菜']
  },
  {
    id: '4',
    name: '辣椒炒肉',
    coverImage: '//i0.hdslb.com/bfs/archive/0768faaeba22ead1189cd6b8d03b20c47ff30103.jpg@672w_378h_1c_!web-search-common-cover',
    description: '辣椒炒肉是湖南特色家常菜，香辣可口，是下饭神器。选用新鲜青椒和五花肉，简单快手。',
    cuisine: '湘菜',
    taste: '辣',
    difficulty: '简单',
    cookTime: '15分钟',
    ingredients: ['青椒', '五花肉', '蒜', '生抽', '老抽', '盐', '料酒'],
    tutorials: [
      {
        platform: 'bilibili',
        platformText: 'B站',
        title: '湖南辣椒炒肉',
        url: 'https://www.bilibili.com/video/aaa',
        coverImage: '//i0.hdslb.com/bfs/archive/0768faaeba22ead1189cd6b8d03b20c47ff30103.jpg@672w_378h_1c_!web-search-common-cover'
      }
    ],
    tags: ['下饭菜', '辣', '湘菜', '快手']
  },
  {
    id: '5',
    name: '番茄炒蛋',
    coverImage: '//i0.hdslb.com/bfs/archive/c195f63a8c0329816fc00868c65c44a654ed0b1b.jpg@672w_378h_1c_!web-search-common-cover',
    description: '番茄炒蛋是家常菜中的经典，酸甜开胃，色彩鲜艳，营养丰富，是很多人学会的第一道菜。',
    cuisine: '川菜',
    taste: '酸甜',
    difficulty: '简单',
    cookTime: '10分钟',
    ingredients: ['番茄', '鸡蛋', '葱', '盐', '糖', '番茄酱'],
    tutorials: [
      {
        platform: 'bilibili',
        platformText: 'B站',
        title: '完美的番茄炒蛋',
        url: 'https://www.bilibili.com/video/bbb',
        coverImage: '//i0.hdslb.com/bfs/archive/c195f63a8c0329816fc00868c65c44a654ed0b1b.jpg@672w_378h_1c_!web-search-common-cover'
      }
    ],
    tags: ['简单', '快手', '酸甜', '家常']
  },
  {
    id: '6',
    name: '宫保鸡丁',
    coverImage: 'https://i0.hdslb.com/bfs/archive/a441c723f09600a94d4eea67494881094ed961ae.jpg@672w_378h_1c_!web-search-common-cover',
    description: '宫保鸡丁是一道经典的川菜，鸡肉嫩滑，花生脆爽，酸甜微辣，层次丰富。',
    cuisine: '川菜',
    taste: '酸甜辣',
    difficulty: '中等',
    cookTime: '25分钟',
    ingredients: ['鸡胸肉', '花生', '干辣椒', '葱', '姜', '蒜', '醋', '糖', '酱油', '淀粉'],
    tutorials: [
      {
        platform: 'bilibili',
        platformText: 'B站',
        title: '正宗宫保鸡丁',
        url: 'https://www.bilibili.com/video/ccc',
        coverImage: 'https://i0.hdslb.com/bfs/archive/a441c723f09600a94d4eea67494881094ed961ae.jpg@672w_378h_1c_!web-search-common-cover'
      }
    ],
    tags: ['川菜', '酸甜辣', '鸡肉', '经典']
  }
];