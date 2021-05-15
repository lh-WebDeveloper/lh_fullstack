import React, {useState, useEffect } from 'react';
import classNames from 'classnames';
import TodoForm from './TodoForm';
import axios from './api/axios';
// 类型的声明
// ts + react  类型检测来自哪里
// 1. 内置
// 2. npm i @type/react
// 3. Prop  State  type interface 自定义类型  models
//    Todo   Todos   Promise<Todo>
type Todo = {
  id: number
  name: string
  done: boolean
}
// 多添加一个数据类型称为 (元组)
type Todos = Todo[];
const App : React.FC = () => {
  const [todos,setTodos] = useState<Todos>([]);
  const  onToggleTodo = (todo:Todo)=>{

  }
  const resfreshTodos = ()=>{
    // todos
    axios<Todos>('/api/todos').then(setTodos) // axios将数据返回并将data交给setTodos
    // axios<Todos>  接受一个类型的参数, 高级的类型使用。
    // setTodos是接受带了Todos的数据
  }
  useEffect(() => {
    resfreshTodos()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <TodoForm resfreshTodos={resfreshTodos} />
        <ul>
          {
            todos.map((todo, index) => (
              <li
                key={index}
                className={classNames({done: todo.done})}
                onClick={() => onToggleTodo(todo)}
                >
                  {todo.name}
              </li>
            ))
          }
        </ul>
      </header>
    </div>
  )
}
export default App;
