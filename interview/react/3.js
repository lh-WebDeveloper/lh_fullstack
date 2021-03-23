//避免数据被修改
const {Map,fromJS} = require('immutable');//不可变数据的时候
//es6 map
let a =Map({
    select:'users',
    filter:Map({name:'Cam'})
});
//引用a  b 
let b=a.set('select','people');
console.log(a==b);

//超纲话题 
console.log(a.get('filter')===b.get('filter'));

const obj={
    count:0
}
const immutableState=fromJS(obj);
console.log(immutableState.get('count'));
const jsObj =immutableState.toJS();
jsObj.count=2;
console.log(obj);