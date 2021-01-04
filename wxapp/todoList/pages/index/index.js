//index.js
//获取应用实例
const app = getApp()
const utils = require('../../utils/util');


Page({
  data: {
    todos: [{
      id: 1609401854644,
      text: '看完三本书',
      status: '0'
    },{
      id: 1609401859644,
      text: '考过六级',
      status: '1'
    }],
    addShow: false,
    focus: false,
    status: '1',
    addText: '',
    userInfo: {},
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  setInput(e) {
    this.setData({
      addText: e.detail.value
    })
  },
  addTodoHide() {
    this.setData({
      addShow: false, // 电影拉幕一样出来表单
      focus: false
    })
  },
  addTodoShow() {
    this.setData({
      addShow: true, // 电影拉幕一样出来表单
      focus: true
    })
  },
  addTodo: function(){
    const todo ={text:this.data.addText, status: 0, id:new Date().getTime()}
    this.setData({
      todos:[...this.data.todos,todo],
      addShow: false
    })
    //加一条todo {text:'买一部手机',status:0}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log(utils.formatTime(new Date()));
  },
  showStatus(e) {
    let status = e.currentTarget.dataset.status;
    this.setData({
      status
    })
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
