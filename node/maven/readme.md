- 全栈 node + ts
- 数据库
    端口通信 3306 -> 3000
    node  fs http 比较复杂

- mvc 
    数据库 ->Model -> Controller -> Router(API)
    post 
    someone ->http ->req(url) ->router -> controller
    ->model ->mysql2(翻译官)

-posts add
    controller -> restful 路径
    mysql post POST /posts
    - router 在哪里?
    - controller 
    - model service 

- 单点入口


CREATE TABLE `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


- mysql 先建表 后操作 关系型数据库 SQL
    mongodb 先上车 后补票 文件型数据库 NOSQL