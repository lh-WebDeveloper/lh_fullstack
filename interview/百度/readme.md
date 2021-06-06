- react 性能优化
    三种方式：旧方式
    React hooks 带来了新的方式
    1. shouldComponentUpdate
    2. React.PureComponent
    3. React.memo
    4. useEffect
    5. useCallback
    6. useMemo
- 父子组件
    父组件 setState
    子组件,无辜的被更新,

    渲染不等同于更新 
    
- React组件受到 state/props的影响,默认行为是state每次发生变化组件都会重新渲染
    shouldComponentUpdate true | false 跳过更新
    render -> createElement(element) -> vdom ->{type:'div'}
    

    