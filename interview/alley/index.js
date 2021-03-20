const koa = require('koa');
const mount = require('koa-mount');
//静态文件 static ->cdn
const serve =require('koa-static');
const fs = require('fs');
const app = new koa();
console.log(__dirname+'/static');
app.use(serve(__dirname+'/static'));
//过几天css 小米官网更新了
app.use(
  mount('/', ctx => {
    ctx.body = fs.readFileSync(__dirname + '/max_count.html', 'utf-8');
  })
)
app.listen(1234)
