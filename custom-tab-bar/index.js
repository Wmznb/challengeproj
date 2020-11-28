// pages/custom-tab-bar/custom-tab-bar.js
Component({
  data: {
    active: 0,
    list: [
      {
        "url": "/pages/zhuye/zhuye",
        "icon": "home-o",
        "text": "首页"
      },
      {
        "url": "/pages/user/user",
        "icon": "user-o",
        "text": "我的"
      }
    ]
    },
    methods: {
     onChange(e) {
        console.log(e,'e')
        this.setData({ active: e.detail });
        wx.switchTab({
          url: this.data.list[e.detail].url
        });
     },
     init() {
         const page = getCurrentPages().pop();
         this.setData({
        　  active: this.data.list.findIndex(item => item.url === `/${page.route}`)
         });
        }
     }
})
