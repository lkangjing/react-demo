import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './commentlist.css'

import CommentItem from '../comment-item/CommentItem'

class CommentList extends Component {

  static propTypes = {
    comments:PropTypes.array.isRequired,
    delComment:PropTypes.func.isRequired
  }
  render() {
    const {comments,delComment} = this.props
    return (
      <div className="listcontent">
        <h2>评论列表</h2>
        <ul>
          {
            comments.map((item,index)=>{
              return <CommentItem comment={item} key={index} index={index} delComment={delComment}/>
            })
          }
        </ul>
      </div>
    );
  }
}  

export default CommentList;