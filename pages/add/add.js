// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        list:['']
  },
   addlist(){
    this.data.list.push('')
    this.setData({
      list:this.data.list
    })
  } ,
  submit(){
    wx.showToast({
      title: '提交成功',
    })
    wx.switchTab({
      url: '../zhuye/zhuye',
    })
  }
})