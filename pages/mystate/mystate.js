// pages/mystate/mystate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tablist:['未完成','已完成'],
    TabCur: 0,
    scrollLeft:0,
    show:true
  },
  tabSelect(e) {
    console.log(e)
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
    this.setData({
    show:!this.data.show  
    })
  },
  change(){
    wx.switchTab({
      url: '../zhuye/zhuye',
    })
  }
})