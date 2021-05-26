let target = {
    _bar: 'foo',
    _prop: 'bar',
    prop: 'baz'
};

let handler = {
    ownKeys(target) {
        return Reflect.ownKeys(target).filter(key => key[0] !== '_');
        // 过滤一下  过滤下滑线的不要
    }
};
let proxy = new Proxy(target, handler);
for (let key of Object.keys(proxy)) {
  console.log(target[key]);
}