webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //const Navbar = (props) => {

var Navbar = function Navbar() {
  //const { isLogin } = props
  var isLogin = false;
  return __jsx("nav", {
    className: "navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
  }, __jsx("div", {
    className: "container"
  }, __jsx("a", {
    className: "navbar-brand",
    href: "/index"
  }, "Movies"), __jsx("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarResponsive",
    "aria-controls": "navbarResponsive",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, __jsx("span", {
    className: "navbar-toggler-icon"
  })), __jsx("div", {
    className: "collapse navbar-collapse",
    id: "navbarResponsive"
  }, __jsx("ul", {
    className: "navbar-nav ml-auto"
  }, __jsx("li", {
    className: "nav-item active",
    hidden: isLogin
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, __jsx("a", {
    className: "nav-link"
  }, "Home", __jsx("span", {
    className: "sr-only"
  }, "(current)")))), __jsx("li", {
    className: "nav-item",
    hidden: isLogin
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/login"
  }, __jsx("a", {
    className: "nav-link"
  }, "Login"))), __jsx("li", {
    className: "nav-item",
    hidden: isLogin
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/signup"
  }, __jsx("a", {
    className: "nav-link"
  }, "Signup"))), __jsx("li", {
    className: "nav-item",
    hidden: isLogin
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about"
  }, __jsx("a", {
    className: "nav-link"
  }, "About"))), __jsx("li", {
    className: "nav-item",
    hidden: !isLogin
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/admin"
  }, __jsx("a", {
    className: "nav-link"
  }, "Joe Doe"))), __jsx("li", {
    className: "nav-item",
    hidden: !isLogin
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/user"
  }, __jsx("a", {
    className: "nav-link"
  }, "Logout")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=_app.js.3491ca1ad08cefcfc46c.hot-update.js.map