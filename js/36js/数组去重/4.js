let arr = [12,1,12,3,1,88,66,9,66];
    function unique(ary) {
        return ary.filter(function(item,index,a){
            return ary.indexOf(item)===index;
        })
    }
    console.log(unique(arr));

