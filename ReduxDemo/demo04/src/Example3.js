import React, { Component } from 'react';
class Eample3 extends Component {
    constructor(props) {
        super(props);
        this.state = { count:0 }
    }
    componentDidMount(){
        console.log(`ComponentDidMount=>You clicked ${this.state.count} times`)
    }
    componentDidUpdate(){
        console.log(`componentDidUpdate=>You clicked ${this.state.count} times`)
    }
    render() { 
        return ( 
            <div>
                <p>You clicked {this.state.count}times</p>
                <button onClick={this.addCount.bind(this)}>Click me</button>
            </div>
         );
    }
    addCount(){
        this.setState({count:this.state.count+1})
    }
}
export default Eample3;