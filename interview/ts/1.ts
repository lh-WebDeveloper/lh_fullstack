type FunctionProps={
    //onSomething 函数 参数加返回值
    a:number
    onSomething:()=>void;
    //input num 
    onChange:(id:number)=>void;
    //@types/react 泛型如何 去做这件事?
    onClick(event:React.MouseEvent<HTMLButtonElement>)
}

//T 类型一个占位
type Dog<T>={name:string,type:T}
const dog:Dog<number>={name:'lh',type:21}
React.MouseEvent<HTMLButtonElement>

interface Props{

}
const Item:React.FC<Props>=(props)=>(
    return(
        <div></div>
    )
)