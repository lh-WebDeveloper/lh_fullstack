function Archiver() {
    var value = null;
    // archive n. 档案
    var archive = [];
    Object.defineProperty(this, 'num', {
        get: function() {
            console.log('执行了get操作')
            return value;
        },
        set: function (newValue) {
            console.log('执行了set操作')
            value = newValue;
            archive.push({val: value})
        }
    })
    this.getArchive = function() { return archive; };
}
var arc = new Archiver();  // 实例
arc.num // get操作
arc.num = 11; // 执行了 set 操作
arc.num = 13; // 执行了 set 操作
console.log(arc.getArchive()); // [{ val: 11 }, { val: 13 }]