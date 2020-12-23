# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

# vant 前端框架 + 工厂API
- 云开发 来了
  云端直接数据储存
  vant 负责界面
  数据操作的小程序 云端的mongodb 数据库 ，是可视化的
- 怎么操作数据？
  1.如何把数据读出来
  2.如何把数据界面做好看

  - block 承载指令
  - wx:for wx:key 优化
  - 尊重用户隐私
    用户的头像、昵称...得到用户的认可
    open-type="getUserInFo"
    等用户来决定
