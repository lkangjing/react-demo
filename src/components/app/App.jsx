import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentAdd from '../comment-add/CommentAdd'
import CommentList from '../comment-list/CommentList'
import './app.css'
import { connect } from 'react-redux'
import { delComment, addComments, getComments } from '../redux/actions'

class App extends Component {
  // state = {
  //   // comments:[
  //   //   {username:"Tom",msg:"React 挺好的"},
  //   //   {username:"Jack",msg:"React 有点难"}
  //   // ]
  //   comments: [],
  // }
  static props = {
    comments: PropTypes.array.isRequired,
    addComments: PropTypes.func.isRequired,
    delComment: PropTypes.func.isRequired,
    getComments: PropTypes.func.isRequired,
  }
  componentDidMount() {
    this.props.getComments()
    //模拟发请求
    // const comments = [
    //   { username: 'Tom', msg: 'React 挺好的' },
    //   { username: 'Jack', msg: 'React 有点难' },
    // ]
    // setTimeout(() => {
    //   this.setState({
    //     comments,
    //   })
    // }, 1000)
  }
  // addComments = (comment) => {
  //   let comments = this.state.comments
  //   comments.unshift(comment)
  //   this.setState({
  //     comments,
  //   })
  // }
  formatIncome = (row) => {
    return row.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  }
  // delComment = (index) => {
  //   console.log('app del', index)
  //   let { comments } = this.state
  //   comments.splice(index, 1)
  //   this.setState({
  //     comments,
  //   })
  // }

  render() {
    const { comments, addComments, delComment } = this.props
    return (
      <div>
        <h1 className="ptitle">react组件</h1>
        <div className="mainContent">
          <CommentAdd addComments={addComments} />
          <CommentList comments={comments} delComment={delComment} />
        </div>
        <p>測試數據：{this.formatIncome(100.01)}</p>
      </div>
    )
  }
}
// (state) => {
//   console.log(state)
//   return { count: state }
// },
// { increment, decrement, incrementAsync }
export default connect(
  (state) => {
    return { comments: state }
  },
  {
    addComments,
    delComment,
    getComments,
  }
)(App)
