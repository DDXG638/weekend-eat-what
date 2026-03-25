// detail.ts - 菜品详情页逻辑
import { dishes, Dish } from '../../data/dishes';

interface PageData {
  dish: Dish | null;
}

Page({
  data: {
    dish: null
  } as PageData,

  onLoad(options: { id: string }) {
    const dishId = options.id;
    // 从数据中获取菜品详情
    const dish = dishes.find(d => d.id === dishId);

    if (dish) {
      this.setData({ dish });
    } else {
      wx.showToast({ title: '菜品不存在', icon: 'none' });
      setTimeout(() => {
        wx.navigateBack();
      }, 1500);
    }
  },

  onTutorialTap(e: { currentTarget: { dataset: { url: string } } }) {
    const url = e.currentTarget.dataset.url;
    // TODO: 第一版先展示提示，后期实现跳转功能
    wx.showModal({
      title: '提示',
      content: '点击上方视频封面可跳转到对应平台查看完整教程',
      showCancel: false,
      confirmText: '知道了'
    });
  }
});