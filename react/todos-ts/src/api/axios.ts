let todos = [
    {
        id: 1,
        name: '待办1',
        done: false
    },
    {
        id: 2,
        name: '待办2',
        done: false
    },
    {
        id: 3,
        name: '待办3',
        done: false
    }
]
type URL = '/api/todos' | '/api/toggle' | '/api/add'

const axios = <T>(url : URL, payload?: any): Promise<T> => {  // 声明什么就返回什么  ?可有可无
            // 自定义类型 类型的传值
    let data;
    switch(url) {
        case '/api/todos': {
            data = todos.slice()
            break;
        }
        case '/api/add': {
            todos.push(payload)
            break
        }
        case '/api/toggle': {
            const todo = todos.find(({id}) => id === payload)
            // payload在这个api下是传入一个id
            if(todo) {
                todo.done = !todo.done
            }
            break
        }
    }
    return Promise.resolve(data as any);
}
export default axios
