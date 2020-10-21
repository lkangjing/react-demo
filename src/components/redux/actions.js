import { ADD_COMMENT, DEL_COMMENT, UPDATE_COMMENT } from './actions-types'

//增加评论
export const addComments = (comment) => {
  return { type: ADD_COMMENT, data: comment }
}
//删除评论
export const delComment = (comment) => {
  return { type: DEL_COMMENT, data: comment }
}
//同步更新comments
const updateComments = (comments) => {
  return { type: UPDATE_COMMENT, data: comments }
}
//异步获取数据
export const getComments = () => {
  return (dispatch) => {
    //模拟发送请求
    setTimeout(() => {
      const comments = [
        { username: 'Tom', msg: 'React 挺好的' },
        { username: 'Jack', msg: 'React 有点难' },
      ]
      //分发action
      dispatch(updateComments(comments))
    }, 1000)
  }
}
