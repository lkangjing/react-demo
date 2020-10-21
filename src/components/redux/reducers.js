import { ADD_COMMENT, DEL_COMMENT, UPDATE_COMMENT } from './actions-types'

const initComments = []
export function comments(state = initComments, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [action.data, ...state]
    case DEL_COMMENT:
      return state.filter((comment, index) => {
        return index !== action.data
      })
    case UPDATE_COMMENT:
      return action.data
    default:
      return state
  }
}
