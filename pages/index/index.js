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
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    appNav: [
      { src: '/images/index/nav-sock-icon.png', url: '', label: '休闲零食' },
      { src: '/images/index/nav-oil-icon.png', url: '', label: '粮油超市' },
      { src: '/images/index/nav-wine-icon.png', url: '', label: '中外名酒' },
      { src: '/images/index/nav-food-icon.png', url: '', label: '进口食品' },
      { src: '/images/index/nav-fresh-icon.png', url: '', label: '服饰生鲜' }
    ],
    appLike: [
      { _id: '1', img: 'https://img10.360buyimg.com/mobilecms/s372x372_jfs/t1/39453/10/6038/140553/5ccfd282Eab533ce4/2af4426ac99d0e67.jpg!q70.dpg.webp', title: '春夏新款女鞋小清新休闲百搭平底韩版小白鞋女学生帆布鞋女', price: '70' },
      { _id: '2', img: 'https://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/27435/24/14994/193823/5cabf682E3355f9ef/53d701976fb586e4.jpg!q70.dpg.webp', title: '稻草人(MEXICAN)行李箱 20英寸密码锁拉杆箱 静音万向轮登机箱', price: '242.1' },
      { _id: '3', img: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/15824/15/11551/128700/5c91ac2dEb2615e40/12c68d898e8e6944.jpg!q70.dpg.webp', title: '博超2019年新款运动健身包 干湿分离训练包黑色TTH3062', price: '159' },
      { _id: '4', img: 'https://img10.360buyimg.com/mobilecms/s372x372_jfs/t1/35650/20/9173/90573/5cef8fd3E88aed528/ea4aca9014d7af21.jpg!q70.dpg.webp', title: '小米（MI）路由器4A 1200M双频无线速率 四天线穿墙 APP远程控制 防蹭网 双频合一 稳定高速 家用路由器', price: '119' }
    ]
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
