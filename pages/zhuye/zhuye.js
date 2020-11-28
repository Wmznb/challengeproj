// pages/zhuye/zhuye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ColorList: [
    {
      title: '随机',
      name: 'orange',
      color: '#f37b1d'
    },
   
    {
      title: '我的',
      name: 'olive',
      color: '#8dc63f'
    },
   
    {
      title: '好友',
      name: 'cyan',
      color: '#1cbbb4'
    },
  
    {
      title: '新增',
      name: 'grey',
      color: '#8799a3',
      icon:'plus'
    },
  ]
  },
  onShow(){
    this.getTabBar().init();
  },
  click(e){
       var x=e.currentTarget.dataset.index
       console.log(x)
      switch(x){
         case 0: wx.navigateTo({
           url: '../show_random_challenge/index',
         })
          break;
         case 1:wx.navigateTo({
          url: '../mylist/mylist',
        })
        break;
         case 2: wx.navigateTo({
           url: '../friendlist/friendlist',
         })
         break
         case 3: wx.navigateTo({
           url: '../add/add',
         })
         break
      }
     
  }
})