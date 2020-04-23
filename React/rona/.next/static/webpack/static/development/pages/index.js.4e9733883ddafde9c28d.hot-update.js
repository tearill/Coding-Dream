webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./utils/useStats.js":
/*!***************************!*\
  !*** ./utils/useStats.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useStats; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 //共享状态的 useState 方法 rect hooks

function useStats(url) {
  // console.log(url);
  // from input 双向绑定新写法 
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      stats = _useState[0],
      setStats = _useState[1]; // 加载 ajax loading


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      error = _useState3[0],
      setError = _useState3[1]; // 封装 state 的处理
  // useEffect 相当于生命周期函数


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])();
  return {
    stats: stats,
    loading: loading,
    error: error
  };
}

/***/ })

})
//# sourceMappingURL=index.js.4e9733883ddafde9c28d.hot-update.js.map