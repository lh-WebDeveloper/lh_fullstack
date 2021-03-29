'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async list(){
    const {ctx}=this;
    ctx.body='<h1>技术胖Blog开发</h1>'
  }
}

module.exports = HomeController;


// GET(SELECT) ： 从服务端取出资源，可以同时取出一项或者多项。
// POST(CREATE) ：在服务器新建一个资源。
// PUT(UPDATE) ：在服务器更新资源（客户端提供改变后的完整资源）。
// DELETE(DELETE) ：从服务器删除资源。
