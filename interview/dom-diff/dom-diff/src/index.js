import {createElement,render,renderDOM,diff} from './element';
//DOM ->VirtualDOM
//在内存之中创建,模拟真实DOM的层次,结点,属性,子结点
//树 递归 最后结点是文本结构时,就退出
//相同的操作 1.创建结点 2.设置属性 3.子结点
{/* <ul class="list">
    <li class="item">白敬亭</li>
    <li class="item">婷婷</li>
</ul> */}
// DOM 树的表达转换形式
let virtualDOM =createElement('ul',{
  class:'list',
},[
  createElement('li',{
    class:'item'
  },['白敬亭']),
  createElement('li',{
    class:'item'
  },['婷婷'])
])
//console.log(virtualDOM)
let virtualDOM2=createElement('ul',{
  class:'list-group'
},[
  createElement('li', {class:'item active'}, ['七里香']),
  createElement('li', {class:'item active'}, ['一千年以后']),
  createElement('li', {class:'item active'}, ['菊花台']),
]);
renderDOM(el,document.getElementById('root'));
//补丁
let patches=diff(virtualDOM,virtualDOM2);
console.log(patches);