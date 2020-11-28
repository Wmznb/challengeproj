const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      wx.switchTab({
        url: '../main/main',
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        }) 
        wx.switchTab({
        url: '../zhuye/zhuye',
      })
      }
     
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          console.log(res)
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
          wx.switchTab({
        url: '../main/main',
      })
        }
      })
      // wx.request({
      //   url: 'http://localhost:8088/user/add', 
      //   data: {
      //     openid: '',
      //     nickName: 'app.globalData.userInfo.nickname',
      //     avatarurl:''
      //   },
      //   header: {
      //     'content-type': 'application/json' // 默认值
      //   },
      //   success (res) {
      //     console.log(res.data)
      //   }
      // })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    // wx.request({
    //   // url: 'http://localhost:8088/user/add/'+app.globalData.userInfo.nickName, 
    //   url: 'http://localhost:8088/user/add', 
    //   method:'post',
    //   data: {
    //      nickName: app.globalData.userInfo.nickName,
    //      gender: app.globalData.userInfo.gender,
    //      avatarUrl:app.globalData.userInfo.avatarUrl,
    //      openid:app.globalData.openid
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success (res) {
    //     console.log(res.data) 
    //      app.globalData.id=res.data
    //      console.log(app.globalData.id)
    //   }
    // })
    wx.switchTab({
    url: '../zhuye/zhuye',
   })
  }
})

