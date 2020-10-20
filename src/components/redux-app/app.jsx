import React, { Component } from 'react'
import { increment, decrement } from '../../redux/actions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './app.css'
class app extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  }

  increment = () => {
    const num = this.select.value * 1
    this.props.increment(num)
  }

  decrement = () => {
    const num = this.select.value * 1
    this.props.decrement(num)
  }

  oddIncrement = () => {
    const num = this.select.value * 1
    let count = this.props.count
    if (count % 2 === 0) {
      this.props.increment(num)
    }
  }

  incrementSync = () => {
    const num = this.select.value * 1
    setTimeout(() => {
      this.props.increment(num)
    }, 1000)
  }
  render() {
    const { count } = this.props
    return (
      <div>
        <h2>click {count} times</h2>
        <div>
          <select ref={(select) => (this.select = select)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.oddIncrement}>increment if odd</button>
          <button onClick={this.incrementSync}>increment async</button>
        </div>
      </div>
    )
  }
}

export default connect((state) => ({ count: state }), { increment, decrement })(
  app
)
