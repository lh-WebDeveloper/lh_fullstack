const express =require('express');
const app = express();
const graphqlHTTP=require('express-graphql').graphqlHTTP;
// const userSchema=require('./graphql/user/schema');
// app.use('/graphql',graphqlHTTP({
//     schema:userSchema,
//     graphiql:true
// }))
// 数据从mysql 来的 前端->graphql ->MVC ->数据库
app.listen(1514);