var groupAnagrams = function(strs) {
    const map =new Map();
    for(let str of strs){
        let arr=Array.from(str)
        arr.sort()
        let key = arr.toString()
        let list = map.get(key) ? map.get(key) : new Array();//从map中取到相应的数组
        list.push(str);//加入数组
        map.set(key, list);//重新设置该字符的数组
    }
    return Array.from(map.values());//map中的value转成数组
};

strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs))


var groupAnagrams = function(strs) {
    let map = new Map();
    strs.forEach((str) => {
      // 使用排序来对比
      const key = str.split("").sort().join("");
      map.has(key) ? map.get(key).push(str) : map.set(key, [str]);
    });
    
    return Array.from(map.values());
  };
strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs))