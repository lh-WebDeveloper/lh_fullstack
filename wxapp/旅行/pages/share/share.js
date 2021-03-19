//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hiddenLoading:false,
   
      items: [
        {
        articles: [
            {
      contentId: 1177432,
          cover:"http://img.qunfenxiang.net/mmbiz_jpg/p3DmVud7BT91uDHavJLHt4E0eTFrEnYbtAFsAU0G8HsMFyHZHHIxMdjxC583GYkwgpOeLb4sJdYLIGicbHOEgfQ/640.jpg",
          pubdate: "2018-03-17 15:54:58",
          title: "若能走过江城春，便是人间好时节"
            },
            {
          contentId: 1176561,
      cover:"http://img.qunfenxiang.net/mmbiz_jpg/Ud80NfwCyKvIZ73ibxQxv7cdibwWtO6b7dn5Y22CeRdibw8W8ZFOaMjvVu8XpoOGVibJxO6wuFIu9vANNxINAumAAQ/640.jpg",
              pubdate: "2018-03-09 10:46:37",
              title: "带着爱情去旅行，土耳其浪漫一夏"
            },
            {
              contentId: 1161967,
          cover:"http://img.qunfenxiang.net/mmbiz_jpg/46b217EzDHSRUNXuCFT6vCGOnPM6kQQIAbZnpmSNPtg420cR2gwo28OhhxXRk3ds3SEQtge6kk2OWHwspBQrVw/640.jpg",
              pubdate: "2018-03-01 10:46:32",
              title: "尼泊尔，我还会来第二次吗？"
            },
            {
              contentId: 1177828,
        cover: "http://img.qunfenxiang.net/mmbiz_jpg/Ud80NfwCyKue9VQeQK31wkybHkFZqmkxJqTFDt6WibeNaBzz2B9tk8obEoRia6xWaTN93ep06weVbWpIGp9bUbpg/640.jpg",
              pubdate: "2018-02-27 20:46:37",
              title: "触摸埃及千年之前的古老记忆"
            }
          ],
          date: "2018-03-27"
        },
        {
          articles: [
            {
              contentId: 1175100,
      cover: "http://img.qunfenxiang.net/mmbiz_jpg/1nqIw8DWjkibVx4icIhEs9icQWSaZQQsDPNNQAeRicFOEkHJH5PMRzENICb2Ir8wAY4UnvQ71I0ZEwS7Meu7RW3FsA/640.jpg",
              pubdate: "2018-03-07 20:46:46",
              title: "这才是三月最值得去的20个地方！"
            },
            {
              contentId: 1172434,
      cover: "http://img.qunfenxiang.net/mmbiz_gif/Y75YIobUCxF4KEQpVJRJBFJgnHsfRR54CRBxvc9jKcQcYrGZ5P2HLGB6whjiccXibjQe1Aoj97mPdKPdicsZO38jg/640.jpg",
              pubdate: "2018-03-05 20:46:50",
              title: "柬埔寨除了吴哥窟，你肯定想不到还有这些绝美海岛"
            },
            {
              contentId: 1161968,
        cover: "http://img.qunfenxiang.net/mmbiz/zKBwDdu8U8GgqD60lP7Sla285rjOPmicz6qgzAObiasehwedibia04ReibRSljcbQHoOfc26NDCDUSgwFouAUvQVpDA/640.jpg",
              pubdate: "2018-03-05 15:46:18",
              title: "人间三月，唯春光与笑容不可辜负"
            },
            {
              contentId: 1161963,
    cover: "http://img.qunfenxiang.net/mmbiz_jpg/GcZR7lpfjMRGqn8gF6x7bibMxcz9aU1Ap82gDicsULGCcGXa7qsdr2aMdClBEX9r2ZLq1uibP9qibUpKevibLLTIGAg/640.jpg",
              pubdate: "2018-03-04 15:46:22",
              title: "我在烟花三月的江南，等你……"
            }
          ],
          date: "2018-03-05"
        },
        {
          articles: [
            {
              contentId: 1175110,
    cover: "http://img.qunfenxiang.net/mmbiz_png/x38FQHDHXRiceAMg3ED4NgCeZ01bwzSXXvsicVMXAFqWMGbMLrwicS6ZYbibUiaKy7ANQQt4coL4YpEFPrWvFuSEUKA/640.jpg",
              pubdate: "2018-03-02 15:46:28",
              title: "世界最大樱花园在中国！比日本大5倍，是阿里山的10倍美！"
            },
            {
              contentId: 1142849,
      cover: "http://img.qunfenxiang.net/mmbiz_jpg/03RJg1ZgickmvtBeIHI68oEKAOm5759wlFqlBcwpUcmia9wyCdy1LbqtYMg5ozKaIzefjrfrcCiaeniaeCU1TXW0Og/640.jpg",
              pubdate: "2018-02-27 10:46:39",
              title: "一个人的衰老，从不再旅行开始"
            },
            {
              contentId: 1161915,
        cover: "http://img.qunfenxiang.net/mmbiz_png/SVCwzaTqlY7IfcKg0sHrdHfK2NwmzOKKez9Z6ppdfunvIS6Wc0XFG4KRqXEov3Pibt1ibyJ08304vOQD6IIRbk2w/640.jpg",
              pubdate: "2018-02-25 20:46:48",
              title: "我想和你去看：苍山洱海，罗平花开"
            },
            {
              contentId: 1175101,
      cover: "http://img.qunfenxiang.net/mmbiz_jpg/DZZvnYibR7dJGd09V7pfkWLqF6eThYUQicN4qg71iadvsSO8vmnJsjxvE3w47MC7bWZFiaK4r20hCZY6PXsnW9QSaw/640.jpg",
              pubdate: "2018-02-21 20:46:58",
              title: "特罗姆瑟 | 通往北极的必经之路"
            }
          ],
          date: "2018-02-25"
        }
      ],
    name:'廖辉',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  showDetail(e){
       let dataset =e.currentTarget.dataset;
       let item =dataset.item;
       let contentTd =item.contentId;
       wx.navigateTo({
         url:'../detail/detail?contentId='+contentTd
       })
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    setTimeout(() =>{
        this.setData({
        hiddenLoading:true
        })
    },5000)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
