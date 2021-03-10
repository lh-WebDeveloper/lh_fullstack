import React, { Component } from 'react';
import PropTypes from 'prop-types';
class XiaojiejieItem extends Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    //组件第一次存在于dom中,函数是不会被执行
    //如果已经存在于dom中,函数才会被执行
    // componentWillReceiveProps(){
    //     console.log('child-componentWillReceiveProps')
    // }
    // componentWillUnmount(){
    //     console.log('child-componentWillUnmount')
    // }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content!==this.props.content){
            return true
        }else{
            return false 
        }
    }
    render() { 
        console.log('child-render')
        return ( 
            <li onClick={this.handleClick}>
            {this.props.avname}为你服务-{this.props.content}</li>
         );
    }
    handleClick(){
        //this.props.list=[]
        this.props.deleteItem(this.props.index)
    }
}
XiaojiejieItem.propTypes={
    avname:PropTypes.string.isRequired,
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}
XiaojiejieItem.defaultProps={
    avname:'松鼠'
}
export default XiaojiejieItem;