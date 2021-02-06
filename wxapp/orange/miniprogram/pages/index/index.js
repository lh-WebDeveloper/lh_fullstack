//index.js
const app = getApp()

Page({
  data: {
    fruitInfo: [],
    offline: false, // 打烊
    isShow: false,
    noticeList: [],
    imgUrls:[
      '/images/1.jpg',
      '/images/2.png',
      '/images/3.jpg',
      '/images/4.jpg'
    ],
    duration:800,
    interval:2000,
    list:[{
      url:'/images/柑橘.png',
      name:'柑橘',
    },
    {
      url:'/images/草莓.png',
      name:'草莓',
    },
    {
      url:'/images/车厘子.png',
      name:'车厘子',
    },
    {
      url:'/images/蓝莓.png',
      name:'蓝莓',
    },
    {
      url:'/images/芒果.png',
      name:'芒果',
    },
    {
      url:'/images/苹果.png',
      name:'苹果',
    },
    {
      url:'/images/香蕉.png',
      name:'香蕉',
    },
    {
      url:'/images/雪梨.png',
      name:'雪梨',
    },
    {
      url:'/images/椰子.png',
      name:'椰子',
    },
    {
      url:'/images/樱桃.png',
      name:'樱桃',
    }
  ]
  },
  onLoad: function() {
   
  },

  onGetUserInfo: function(e) {
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },

  // 上传图片
  doUpload: function () {
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]
        
        // 上传图片
        const cloudPath = `my-image${filePath.match(/\.[^.]+?$/)[0]}`
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath
            
            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })
      },
      fail: e => {
        console.error(e)
      }
    })
  },

})
