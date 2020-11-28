// pages/show_random_challenge/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    cur:0,
    ColorList: [{
      title: '嫣红',
      name: 'red',
      color: '#e54d42',
     
    },
    {
      title: '桔橙',
      name: 'orange',
      color: '#f37b1d'
    },
    {
      title: '明黄',
      name: 'yellow',
      color: '#fbbd08'
    },
    {
      title: '橄榄',
      name: 'olive',
      color: '#8dc63f'
    },
    {
      title: '森绿',
      name: 'green',
      color: '#39b54a'
    },
    {
      title: '天青',
      name: 'cyan',
      color: '#1cbbb4'
    },
    {
      title: '海蓝',
      name: 'blue',
      color: '#0081ff'
    },
    {
      title: '姹紫',
      name: 'purple',
      color: '#6739b6'
    },
    {
      title: '木槿',
      name: 'mauve',
      color: '#9c26b0'
    },
    {
      title: '桃粉',
      name: 'pink',
      color: '#e03997'
    },
    {
      title: '棕褐',
      name: 'brown',
      color: '#a5673f'
    },
    {
      title: '玄灰',
      name: 'grey',
      color: '#8799a3'
    },
    {
      title: '草灰',
      name: 'gray',
      color: '#aaaaaa'
    },
    {
      title: '墨黑',
      name: 'black',
      color: '#333333'
    },
    {
      title: '雅白',
      name: 'white',
      color: '#ffffff'
    },
  ],
      list:[
        {
          content:'仰卧起坐100个',
          done_count:'20',
          doing:'10'
        },
        {
          content:'练字200个',
          done_count:'5',
          doing:'4'
        },
        {
          content:'画一幅画并发到朋友圈得到100个赞',
          done_count:'8',
          doing:'3'
        }
      ]
  },
  acc(){
    console.log("接受挑战");
   wx.switchTab({
     url: '../zhuye/zhuye',
   })
  },
  change(){ 
    console.log(this.data.cur)
       var x=this.data.cur
       if(x==this.data.list.length-1){
          this.setData({
            cur:0
          })
       }else{
         this.setData({
           cur:x+1
         })
       }
      
  }
})