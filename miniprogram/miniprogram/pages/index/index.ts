// index.ts
import { dishes, Dish } from '../../data/dishes';

// 获取应用实例
const app = getApp<IAppOption>()

interface PageData {
  dishList: Dish[];
  showPrefModal: boolean;
  selectedRegion: string;
  selectedCuisines: string[];
  selectedTastes: string[];
}

// 推荐算法：根据用户偏好筛选并排序菜品
function recommendDishes(cuisines: string[], tastes: string[]): Dish[] {
  if (cuisines.length === 0 && tastes.length === 0) {
    return dishes;
  }

  const matchedDishes = dishes.filter(dish => {
    const cuisineMatch = cuisines.length === 0 || cuisines.includes(dish.cuisine);
    const tasteMatch = tastes.length === 0 || tastes.includes(dish.taste) || dish.tags.some(tag => tastes.includes(tag));
    return cuisineMatch || tasteMatch;
  });

  if (matchedDishes.length === 0) {
    return dishes;
  }

  matchedDishes.sort((a, b) => {
    let scoreA = 0;
    let scoreB = 0;

    if (cuisines.includes(a.cuisine)) scoreA += 2;
    if (cuisines.includes(b.cuisine)) scoreB += 2;

    if (tastes.includes(a.taste)) scoreA += 1;
    if (tastes.includes(b.taste)) scoreB += 1;

    a.tags.forEach(tag => { if (tastes.includes(tag)) scoreA += 0.5; });
    b.tags.forEach(tag => { if (tastes.includes(tag)) scoreB += 0.5; });

    return scoreB - scoreA;
  });

  return matchedDishes;
}

Page({
  data: {
    dishList: [] as Dish[],
    showPrefModal: false,
    selectedRegion: '',
    selectedCuisines: [] as string[],
    selectedTastes: [] as string[],
  } as PageData,

  onLoad() {
    // 检查用户是否已有偏好设置
    const userPref = wx.getStorageSync('userPreference');
    if (!userPref) {
      this.setData({
        showPrefModal: true,
        dishList: dishes,
      });
    } else {
      const selectedCuisines = userPref.cuisines || [];
      const selectedTastes = userPref.tastes || [];
      const recommendedDishes = recommendDishes(selectedCuisines, selectedTastes);

      this.setData({
        selectedRegion: userPref.region || '',
        selectedCuisines,
        selectedTastes,
        dishList: recommendedDishes,
      });
    }
  },

  onSearchTap() {
    wx.showToast({ title: '搜索功能开发中', icon: 'none' });
  },

  onPrefBtnTap() {
    this.setData({ showPrefModal: true });
  },

  onClosePrefModal() {
    this.setData({ showPrefModal: false });
  },

  onSavePref(e: { detail: { region: string; cuisines: string[]; tastes: string[] } }) {
    const { region, cuisines: selectedCuisines, tastes: selectedTastes } = e.detail;

    if (!region || selectedCuisines.length === 0) {
      wx.showToast({ title: '请完善偏好信息', icon: 'none' });
      return;
    }

    // 保存用户偏好
    wx.setStorageSync('userPreference', {
      region,
      cuisines: selectedCuisines,
      tastes: selectedTastes
    });

    // 更新页面数据
    this.setData({
      showPrefModal: false,
      selectedRegion: region,
      selectedCuisines,
      selectedTastes
    });

    // 根据偏好推荐菜品
    const recommendedDishes = recommendDishes(selectedCuisines, selectedTastes);
    this.setData({ dishList: recommendedDishes });

    wx.showToast({ title: '偏好已保存', icon: 'success' });
  },

  onDishTap(e: { currentTarget: { dataset: { id: string } } }) {
    const dishId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${dishId}`
    });
  }
});