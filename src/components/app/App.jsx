import React, { Component } from 'react';
import CommentAdd from '../comment-add/CommentAdd'
import CommentList from '../comment-list/CommentList'
import './app.css'

class App extends Component {

   state={
      comments:[
        {username:"Tom",msg:"React 挺好的"},
        {username:"Jack",msg:"React 有点难"}
      ]
   }

  addComments = (comment) => {
    let comments = this.state.comments
    comments.unshift(comment)
    this.setState({
      comments
    })
  }
  formatIncome = (row) => {
    return row
      .toString()
      .replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
  }
  delComment = (index) =>{
    console.log("app del",index);
    let {comments} = this.state
    comments.splice(index,1)
    this.setState({
      comments
    })
  }

  render() {
    const {comments} = this.state
    return (
      <div>
        <h1 className="ptitle">react组件</h1>
        <div className="mainContent">
          <CommentAdd addComments={this.addComments}/>
          <CommentList comments={comments} delComment={this.delComment}/>
        </div>
        <p>測試數據：{this.formatIncome(100.01)}</p>
      </div>
    );
  }
}

export default App;