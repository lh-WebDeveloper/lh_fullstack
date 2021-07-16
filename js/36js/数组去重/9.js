let arr = [12,1,12,3,1,88,66,9,66];
function unique(ary) {
        let newAry = [];
        let len = ary.length;
        for(let i=0;i<len;i++){
            let cur = ary[i];
            if(!newAry.includes(cur)){
                newAry.push(cur);
            }
        }
        return newAry;
    }
    console.log(unique(arr));
