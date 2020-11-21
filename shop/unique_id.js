/**
 * 获得唯一ID
 * @author lh
 * @date 11-21
 * @retun {string}
 */
const uniqueID =() => + new Date() + '' + Math.ceil(Math.random()*1000); //类型转换
  //  let ranNum = Math.ceil(Math.random()*10000);
  //  return t+ "" + ranNum;


console.log(uniqueID());