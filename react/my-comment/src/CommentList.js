import React, {Component} from 'react';
import './CommentList.css';
import Comment from './Comment';
export default class CommentList extends Component{
    render(){
        return(
            <div>
                CommentList
               {/*  //react 是原滋原味的js */}
                {
                    this.props.comments.map(comment =><Comment comment={comment}/>)
                }
            </div>
        )
    }
}