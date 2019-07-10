//category.js
const app = getApp()

Page({
  data: {
    category: [
      { name: '热门推荐', id: 'hot' },
      { name: '手机数码', id: 'phone' },
      { name: '家用电器', id: 'tv' },
      { name: '美妆护肤', id: 'mm' },
      { name: '家用电器', id: 'elec' },
      { name: '路由', id: 'router' },
      { name: '智能', id: 'smart' },
      { name: '儿童', id: 'kids' },
      { name: '灯具', id: 'lignts' },
      { name: '电源', id: 'adapter' },
      { name: '耳机', id: 'headset' },
      { name: '音箱', id: 'voicebox' },
      { name: '生活', id: 'life' },
      { name: '服务', id: 'service' },
      { name: '耳机', id: 'headset' },
      { name: '音箱', id: 'voicebox' },
      { name: '生活', id: 'life' },
      { name: '服务', id: 'service' },
      { name: '母婴童装', id: 'card' }
    ],
    currentIndex: 0,
    toView: 'hot',
    goods: []
  },
  //事件处理函数
  bindViewTap: function (e) {
    const currentTarget = e.currentTarget
    const currentIndex = currentTarget ? currentTarget.dataset.index : 0
    this.setData({
      toView: currentTarget.dataset.id,
      currentIndex
    })
  },
  onLoad: function () {
    this.setData({
      goods: app.globalData.category
    })
  }
})
