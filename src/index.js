import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/app/App'
import store from './components/redux/store'
// import { BrowserRouter } from 'react-router-dom'
// import store from './redux/store'

// console.log(store)
// ReactDOM.render(<App />, document.getElementById('root'))
// function render() {
ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
)
// }
// render()
// store.subscribe(render)
// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// )
