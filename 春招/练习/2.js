function findOrder( n ,  skillRel ) {
    // write code here
    const newArr = skillRel.sort((a,b)=> a[1] - b[1]);

    const fn =(index,arr)=>{
        for(let i = 0;i<n;i++){
            if(!arr.includes(newArr[i][index])){
                arr.push(newArr[i][index])
            }
        }
        return arr;
    }
    const arr = [];
   return  fn(0,fn(1,arr));
}
// [1,0] 表示 1技能依赖于0技能，[2,1]技能依赖1技能依次类推，需要把学的技能顺序输出
const skillRel = [[1,0],[2,1],[3,1],[3,2]];
console.log(findOrder(4,skillRel)) // 0,1,2,3 