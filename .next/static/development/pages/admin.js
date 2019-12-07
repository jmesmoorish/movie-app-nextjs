(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\admin.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fadmin&absolutePagePath=C%3A%5CUsers%5CTiago%5CDesktop%5Cmovie-app-nextjs%5Cpages%5Cadmin.js!./":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fadmin&absolutePagePath=C%3A%5CUsers%5CTiago%5CDesktop%5Cmovie-app-nextjs%5Cpages%5Cadmin.js ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/admin", function() {
      var page = __webpack_require__(/*! ./pages/admin.js */ "./pages/admin.js")
      if(true) {
        module.hot.accept(/*! ./pages/admin.js */ "./pages/admin.js", function() {
          if(!next.router.components["/admin"]) return
          var updatedPage = __webpack_require__(/*! ./pages/admin.js */ "./pages/admin.js")
          next.router.update("/admin", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_129a35c7ec57967eb265 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_129a35c7ec57967eb265 */ "dll-reference dll_129a35c7ec57967eb265"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/admin.js":
/*!************************!*\
  !*** ./pages/admin.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // functional component - arrow function

var About = function About() {
  var message = '...';
  return __jsx("div", null, "Admin Page - ", message);
}; // WHEN TO USE:
// 1. for smaller components
// 2. reusable components
// 3. presentional components , patialy right, we can use HOOKS and specify state
// const About = () => {
//   const message = 'Hello World'
//   return (
//     <h1>Hello About Page - {message}</h1>
//   )
// }
// const About = () => {
//   const message = 'Hello World'
//   return React.createElement('h1', null, 'I am genereting this with createElement')
// }
// unctional component - normal function
// functional component - normal function
// function About() {
//   return (
//     <h1>Hello About Page</h1>
//   )
// }
// class About extends React.Component {
//   render() {
//     return (
//       <h1>Hello I am class component</h1>
//     )
//   }
// }


/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ 4:
/*!******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fadmin&absolutePagePath=C%3A%5CUsers%5CTiago%5CDesktop%5Cmovie-app-nextjs%5Cpages%5Cadmin.js ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fadmin&absolutePagePath=C%3A%5CUsers%5CTiago%5CDesktop%5Cmovie-app-nextjs%5Cpages%5Cadmin.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fadmin&absolutePagePath=C%3A%5CUsers%5CTiago%5CDesktop%5Cmovie-app-nextjs%5Cpages%5Cadmin.js!./");


/***/ }),

/***/ "dll-reference dll_129a35c7ec57967eb265":
/*!*******************************************!*\
  !*** external "dll_129a35c7ec57967eb265" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_129a35c7ec57967eb265;

/***/ })

},[[4,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=admin.js.map