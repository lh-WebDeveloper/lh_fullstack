import React, { Component,Fragment} from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
import axios from 'axios'
import Boss from './Boss'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
class Xiaojiejie extends Component {
    //在某一时刻,可以自动执行的函数
    constructor(props){
        super(props)
        this.state={
            inputValue:'',
            list:['基础按摩','精油推背']
        }
    }
    componentDidMount(){
        axios.post('https://web-api.juejin.cn/post/6936053970884362277')
        .then((res)=>{console.log('axios 获取数据成功'+JSON.stringify(res))})
        .catch((error)=>{console.log('axios 获取数据失败'+error)})
    }
    // componentWillMount(){
    //     console.log('componentWillMount----组件挂载前')
    // }
    // componentDidMount(){
    //     console.log('componentDidMount----组件挂载完成')
    // }
    // shouldComponentUpdate(){
    //     console.log('1-shouldComponentUpdate')
    //     return true
    // }
    // componentWillUpdate(){
    //     console.log('2-componentWillUpdate')
    // }
    // componentDidUpdate(){
    //     console.log('4-componentDidUpdate')
    // }
    // componentWillReceiveProps(){
    //     console.log('5-componentWillReceiveProps')
    // }
    render() { 
        console.log('3-render-----组件挂载中')
        return ( 
            <Fragment>
                <div>
                    <label htmlFor="jspang">增加服务:</label>
                    <input id="jspang"
                    className="input" 
                    value={this.state.inputValue}
                    onChange={this.inputChange.bind(this)}
                    ref={(input)=>{this.input=input}}/>
                    <button onClick={this.addList.bind(this)}>增加服务</button></div>
                <ul ref={(ul)=>{this.ul=ul}}>
                    <TransitionGroup>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <CSSTransition timeout={2000} classNames='boss-text' 
                                appear={true} unmountOnExit key={index+item}>
                                <XiaojiejieItem key={index+item} content={item} 
                                index={index} list={this.state.list}
                                deleteItem={this.deleteItem.bind(this)}/>
                                </CSSTransition>
                            )
                        })
                    }
                    </TransitionGroup>
                </ul>
                <Boss/>
            </Fragment>
         );
    }
    inputChange(e){
    //    console.log(this)
    this.setState({
        inputValue:this.input.value
    })
    }
    //增加列表
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        },()=>{
            console.log(this.ul.querySelectorAll('li').length)
        })
       
    }
    //删除列表项
    deleteItem(index){
        let list=this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
}
export default Xiaojiejie;

// npm install axios 
// npm install -g axios 
// npm install -save axios 
// npm install -save-dev axios  dev