# 什么是跨域？浏览器如何拦截响应？如何解决？
浏览器遵循同源政策(scheme(协议)、host(主机)和port(端口)都相同则为同源)。非同源站点有这样一些限制:
- 不能读取和修改对方的 DOM
- 不读访问对方的 Cookie、IndexDB 和 LocalStorage
- 限制 XMLHttpRequest 请求。(后面的话题着重围绕这个)
当浏览器向目标 URI 发 Ajax 请求时，只要当前 URL 和目标 URL 不同源，则产生跨域，被称为跨域请求。


# 解决方案
# CORS
CORS 其实是 W3C 的一个标准，全称是跨域资源共享。它需要浏览器和服务器的共同支持，
具体来说，非 IE 和 IE10 以上支持CORS，服务器需要附加特定的响应头，后面具体拆解。不过在弄清楚 CORS 的原理之前，
我们需要清楚两个概念: 简单请求和非简单请求。

# JSONP
虽然XMLHttpRequest对象遵循同源政策，但是script标签不一样，它可以通过 src 填上目标地址从而发出 GET 请求，
实现跨域请求并拿到响应。这也就是 JSONP 的原理

# Nginx
Nginx 是一种高性能的反向代理服务器，可以用来轻松解决跨域问题。
Nginx 相当于起了一个跳板机，这个跳板机的域名也是client.com，让客户端首先访问 client.com/api，
这当然没有跨域，然后 Nginx 服务器作为反向代理，将请求转发给server.com，当响应返回时又将响应给到客户端，这就完成整个跨域请求的过程。


# postMessage，

# WebSocket