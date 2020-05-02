import * as actionTypes from './constants';
import { fromJS } from 'immutable'

// 状态不可改变，改变的时候返回全新的一份状态
const defaultState = fromJS({
  bannerList: []
})

console.log(defaultState, '------')

// recommend 的状态
export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_BANNER:
      console.log(action.data, '1111')
      return state.set('bannerList', action.data);
    default:
      return state;
  }
}
