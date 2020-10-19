import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './commentadd.css'

class CommentAdd extends Component {
  static propTypes = {
    addComments:PropTypes.func.isRequired
  }
  state = {
    username:"",
    msg:""
  }
  submit = ()=>{
    let obj = this.state
    this.props.addComments(obj)
    this.setState({
      username:"",
      msg:""
    })
  }
  inputChange = (e)=>{
    let username = e.target.value
    this.setState({
      username
    })
  }

  textareaChange = (e)=>{
    let msg = e.target.value
    this.setState({
      msg
    })
  }

  render() {
    return (
      <div className="addConent">
        用户名：<input type="text" className="input" value={this.state.username} onChange={this.inputChange}/>
        内容：<textarea  cols="30" rows="10" className="textarea" value={this.state.msg} onChange={this.textareaChange}></textarea>
        <button onClick={this.submit}>提交</button>
      </div>
    );
  }
}

export default CommentAdd;