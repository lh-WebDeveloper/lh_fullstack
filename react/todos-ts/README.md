## 唯一性
1. symbol
2. 自增
3. 产生一个随机数
4. 时间戳
## 父子组件传入事件
React.FC<Props> = ({resfreshTodos})
## 数据传递的四种方式:
1. 父子组件
2. usecontext
3. redux
4. 发布订阅模式
## 定义类型
ts + react  类型检测?
1. 内置
2. npm i @type/react
3. Prop  State  type interface 自定义类型  models
1. type比interface更好, 可以去一个别名
```js
type Todo = {
  id: number
  name: string
  done: boolean
}
// 多添加一个数据类型称为 (元组)
type Todos = Todo[];
```
## 库的使用
1. style-components
2. moment
3. immutable
4. lodash (数组去重的)
5. better-scroll
6. axios
 
## ts 的面试题
1. 效率
2. 严格的校验
3. 强类型 风格更好


## react-hooks优势:
1. 更利于复用
2. bind(this) 没有了
3. 可以全面进行函数式编程
4. 有利于状态逻辑复用(状态共享的方式: 1. render-props, 2. higher-order components react-hooks)
看上去像 function 形式的 setState，其实这等价于依赖注入，与使用 setState 相比，这个组件是没有状态的。
**好处:**
1. 多个状态不会产生嵌套，写法还是平铺的（renderProps 可以通过 compose 解决，可不但使用略为繁琐，而且因为强制封装一个新对象而增加了实体数量）。
2. Hooks 可以引用其他 Hooks。
3. 更容易将组件的 UI 与状态分离。
