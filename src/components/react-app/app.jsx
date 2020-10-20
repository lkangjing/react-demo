import React, { Component } from 'react'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
import Home from '../../views/home'
import About from '../../views/about'
import './app.css'
class app extends Component {
  componentDidMount() {
    console.log(
      `%c
     .___           __    
     ________   __| _/   ______ |  | __
     \\___   /  / __ |   /  ___/ |  |/ /
      /    /  / /_/ |   \\___ \\  |    < 
     /_____ \\ \\____ |  /____  > |__|_ \\
           \\/      \\/       \\/       \\/
    `,
      'color:#2d8cf0'
    )
  }
  render() {
    return (
      <div>
        <h2>react-router Demo</h2>
        <div className="routerContent">
          <div className="routerLeft">
            <NavLink
              className="routerlink"
              to="/home"
              activeClassName="activeclass"
            >
              Home
            </NavLink>
            <NavLink
              className="routerlink"
              to="/about"
              activeClassName="activeclass"
            >
              About
            </NavLink>
          </div>
          <div className="routerRight">
            <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Redirect to="/home"></Redirect>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default app
