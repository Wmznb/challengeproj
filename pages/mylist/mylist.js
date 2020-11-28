// pages/mylist/mylist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  toShow(){
    wx.navigateTo({
      url: '../show_random_challenge/index',
    })
  }
})