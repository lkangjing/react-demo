import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { comments } from './reducers'

const store = createStore(comments, composeWithDevTools(applyMiddleware(thunk)))

export default store
