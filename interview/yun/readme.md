# 当你有了一台服务器后,看到页面前发生了什么？
# 当你有了一台服务器后,可以干什么
docker 一台物理主机 虚拟出来很多的云服务器
- ip
    浏览器域名或IP访问,https
    centos 7.6？ web 服务器
    Nginx 是一个高性能的HTPP和反向代理的web服务器
- putty 远程 SSH 链接 华为云的服务器
    root password
- web 服务 Ngnix 安装
 安装nginx的依赖
     yum -y install gcc  gcc-c++ autoconf pcre-devel make automake
     yum -y install wget httpd-tools vim
     yum list | grep ngnix
     yum install ngnix
     ngnix -v
     ngnix 启动服务器
     ngnix -s stop