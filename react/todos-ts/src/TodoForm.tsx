import React from 'react';
import axios from './api/axios';
// 1. props resfreshTodos
// 2. React.FC
// 3. change数据时的约定。React.Chage<HTMLInputElement>
interface Props {
    resfreshTodos: () => void
}

const TodoForm : React.FC<Props> = ({resfreshTodos}) => {
    const [name, setName] = React.useState('')
    const onchange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const onSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTodo = {
            id: Math.random(),
            name,
            done: false
        }
        if(name.trim()) {
            axios('/api/add', newTodo)
            resfreshTodos()
            setName('')
        }
    }
    return (
       <form className="todo-form" onSubmit={onSubmit}>
           <input 
             className="todos-input"
             value={name}
             onChange={onchange}
             placeholder='请输入待办事项'
            />
            <button type="submit">新增</button>
       </form>
    )
}
export default TodoForm;