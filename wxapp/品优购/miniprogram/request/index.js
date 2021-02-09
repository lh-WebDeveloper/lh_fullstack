//同时发送异步代码的次数
let ajaxTimes=0
export const request=(params)=>{
    //判断url中是否带有/my/ 请求的是私有的路径 带上header token
    let header={...params.header};
    if(params.url.includes("/my/")){
        //拼接header 带上token
        header["Anthorization"]=wx.getStorageSync("token");
    }
    ajaxTimes++;
    //显示加载中 效果
    wx.showLoading({
        title: '加载中',
        mask: true
    });
    //定义公共的url
    //url:"https://api-hmugo-web.itheima.net/api/public/v1/categories"
    const baseUrl="https://api-hmugo-web.itheima.net/api/public/v1";
    return new Promise((reslove,reject)=>{
        wx.request({
            ...params,
            header:header,
            url:baseUrl+params.url,
            success:(result)=>{
                reslove(result.data.message);
            },
            fail:(err)=>{
                reject(err);
            },
            complete:()=>{
                ajaxTimes--;
                if(ajaxTimes===0){
                //关闭正在等待的图标
                wx.hideLoading();
                }
            }
        });
    })
}