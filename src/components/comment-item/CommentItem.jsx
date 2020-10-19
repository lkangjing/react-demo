import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './commentitem.css'

class CommentItem extends Component {

  static propTypes = {
    comment:PropTypes.object.isRequired,
    delComment:PropTypes.func.isRequired,
    index:PropTypes.number.isRequired
  }
  del = ()=>{
    console.log("del");
    this.props.delComment(this.props.index)
  }
  render() {
    const {comment} = this.props
    return (
      <div className="item">
        <div className="itemtitle">
          <p className="itemname">{comment.username}说：</p>
          <button onClick={this.del}>删除</button>
        </div>
        <p className="itemcontent">{comment.msg}</p>
      </div>
    );
  }
}

export default CommentItem;