//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    appNav: [
      { src: '/images/index/nav-sock-icon.png', url: '', label: '休闲零食' },
      { src: '/images/index/nav-oil-icon.png', url: '', label: '粮油超市' },
      { src: '/images/index/nav-wine-icon.png', url: '', label: '中外名酒' },
      { src: '/images/index/nav-food-icon.png', url: '', label: '进口食品' },
      { src: '/images/index/nav-fresh-icon.png', url: '', label: '服饰生鲜' }
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  }
})
