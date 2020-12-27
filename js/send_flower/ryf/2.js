/**
 * 
 * a@author lh
 * @param {any} o 
 * @param {string} type 
 * @return boolean
 */
const isTypeof =(o,type) =>{
    // 打补丁
    if(['number','boolean','function','string'].indexOf(type)>0){
        return typeof o ===type
    }
    return Object.prototype.toString.call(o).toLowerCase().indexOf(type)>0
    //console.log('是对象')
}
//let a =[1,2,3];
//let a = () =>{}
//let a ="hello";
//let a;
let a = null;// 宁缺
// array
// null array 是有问题的
//console.log(typeof a);
console.log(isTypeof(a,'null'));