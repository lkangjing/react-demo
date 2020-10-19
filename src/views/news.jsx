import React, { Component } from 'react';

class news extends Component {
  state={
    news:["00000","11111","222222"]
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.news.map((news,index)=>{
            return <li key={index}>{news}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default news;