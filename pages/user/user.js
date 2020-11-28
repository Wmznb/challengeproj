const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
userInfo:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getTabBar().init();
    this.setData({
      userInfo:app.globalData.userInfo
    })
  },

})