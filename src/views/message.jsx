import React, { Component } from 'react';
import { NavLink, Route } from "react-router-dom";
import MsgInfo from './msgInfo'
class message extends Component {
  state={
    messages:[]
  }
  componentDidMount(){
    const messages = [
      {id:1,title:"message1"},
      {id:2,title:"message2"},
      {id:3,title:"message3"}
    ]
    setTimeout(() => {
      this.setState({
        messages
      })
    }, 1000);
  }
  checkClick=(id)=>{
    this.props.history.push(`/home/message/msginfo/${id}`)
  }
  goback=()=>{
    this.props.history.goBack()
  }
  forword=()=>{
    this.props.history.goForward()
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.messages.map((msg,index)=>{
              return <li key={index}>
                <NavLink to={`/home/message/msginfo/${msg.id}`}>{msg.title}</NavLink> &nbsp;&nbsp;<button onClick={()=>{this.checkClick(msg.id)}}>查看</button>
              </li>
            })
          }
        </ul>
        <p>
          <button onClick={this.goback}>后退</button>
          <button onClick={this.forword}>前进</button>
        </p>
        <Route path="/home/message/msginfo/:index" component={MsgInfo}/>
      </div>
    );
  }
}

export default message;