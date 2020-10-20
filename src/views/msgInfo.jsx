import React, { Component } from 'react'

class msgInfo extends Component {
  render() {
    const allMsgs = [
      { id: 1, title: 'message1', content: '1111111111111' },
      { id: 2, title: 'message2', content: '222222222222' },
      { id: 3, title: 'message3', content: '3333333333333' },
    ]
    const { index } = this.props.match.params
    const msg = allMsgs.find((msg) => {
      return msg.id === index * 1
    })
    return (
      <div>
        <ul>
          <li>id:{msg.id}</li>
          <li>title:{msg.title}</li>
          <li>content:{msg.content}</li>
        </ul>
      </div>
    )
  }
}

export default msgInfo
