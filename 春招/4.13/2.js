// 题目地址
// https://www.nowcoder.com/practice/9f3231a991af4f55b95579b44b7a01ba?tpId=295&tqId=23269&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj


function minNumberInRotateArray(rotateArray)
{
//     return Math.min(...rotateArray) //直接使用Math方法

        // rotateArray.sort((a,b)=>a-b) //先排序 直接取第一个数
        // return rotateArray[0]
    
    // for(let i=0;i<rotateArray.length;i++){ //遍历比较前后
    //     if(rotateArray[i]>rotateArray[i+1]){
    //         return rotateArray[i+1]
    //     }
    // }
    // return rotateArray[0]
}
module.exports = {
    minNumberInRotateArray : minNumberInRotateArray
};