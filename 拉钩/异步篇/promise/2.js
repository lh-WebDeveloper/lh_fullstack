//1.获取轮播数据列表
function getBannerList(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
          resolve('轮播数据')
        },300) 
    })
  }
  //2.获取店铺列表
  function getStoreList(){
    return new Promise((resolve,reject)=>{
      setTimeout(function(){
        resolve('店铺数据')
      },500)
    })
  }
  //3.获取分类列表
  function getCategoryList(){
    return new Promise((resolve,reject)=>{
      setTimeout(function(){
        resolve('分类数据')
      },700)
    })
  }
  function initLoad(){ 
    Promise.all([getBannerList(),getStoreList(),getCategoryList()])
    .then(res=>{
      console.log(res) 
    }).catch(err=>{
      console.log(err)
    })
  }
  initLoad()
  