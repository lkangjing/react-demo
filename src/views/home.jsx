import React, { Component } from 'react';
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import News from './news'
import Messages from './message'
class home extends Component {
  render() {
    return (
      <div>
        <h2>home 组件</h2>
        <div>
          <NavLink to="/home/news">news</NavLink>
          <NavLink to="/home/message">message</NavLink>
        </div>
        <Switch>
          <Route path="/home/news" component={News}/> 
          <Route path="/home/message" component={Messages}/> 
          <Redirect to="/home/news"/>
        </Switch>
      </div>
    );
  }
}

export default home;