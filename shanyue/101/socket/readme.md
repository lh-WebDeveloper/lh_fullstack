1. 安装node 的开发框架,express MVC
    - 引入express require('express')
    - app = express()中小应用适合用node
    - http服务 简单,传输完成就断开的 简单协议
    - app.get('/',(req,res)=>{
        res.send('')
        })
    - 101 协议的跳转? 比较复杂,聊天室 websocket
    不要断开,我要一直保持链接,websocket
    - app.listen(:port)
    - 101在ws应用场景下,服务器用socket.io(封装了websocket的实现),
    客户端主动的申请切换协议 101
    - socket.io在服务器端启用后,他会提供/socket.io.js/socket.io.js
    - 客户端n:1服务器 io()