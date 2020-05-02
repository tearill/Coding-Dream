import React, { useEffect } from 'react';
import * as actionTypes from './store/actionCreators';
import { } from './style';
import { connect } from "react-redux";

function Recommend(props) {
  console.log(props.bannerList, '\\\\\\\\\\\\')
  const { bannerList } = props;
  const { getBannerDataDispatch } = props;

  useEffect(() => {
    if(!bannerList.size){
      getBannerDataDispatch();
    }
  }, [])

  const bannerListJS = bannerList ? bannerList.toJS() : [];
  console.log(bannerListJS, 'bannerList')

  return (
    <div>
      {/* <Slider bannerList={bannerListJS}></Slider> */}

    </div>
  );
}

// 映射 Redux 全局的 state 到组件的 props 上
const mapStateToProps = (state) => ({
  // 不要再这里将数据 toJS,不然每次 diff 比对 props 的时候都是不一样的引用，还是导致不必要的重渲染, 属于滥用 immutable
  bannerList: state.getIn(['recommend', 'bannerList'])
})
// 映射 dispatch 到 props 上
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend));
