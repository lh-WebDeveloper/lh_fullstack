const Router =require('koa-router');
const requireDirectory=require('require-')
class initManager{
    static initCore(app){
        initManager.app=app
        initManager.initLoadRouters(app)
    }
    static initLoadRouters(app){
        requireDirectory(module,`${process.cwd()}/src/routes`,{
            visit: function whenLoadModule(obj) {
                if (obj instanceof Router) {
                    // 加载路由 
                    app.use(obj.routes());
                    app.use(obj.allowedMethods());
                }
            },    
        })
    }
}
modules.exports =initManager