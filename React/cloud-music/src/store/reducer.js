// reducer 是返回状态的函数，对状态改变的约束
import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '../application/Recommend/store/index';

// 将各个模块的 reducer 汇合成为一个总的 reducer
export default combineReducers({
  // 之后开发具体功能模块的时候添加 reducer
  recommend: recommendReducer,
});
