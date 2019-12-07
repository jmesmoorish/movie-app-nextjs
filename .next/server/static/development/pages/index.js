module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: getUsers, getUserById, createUser, updateUser, deleteUser, getCategories, getMovies, createMovie, getMovieById, updateMovie, deleteMovie, getPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return getUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserById", function() { return getUserById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return getCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovies", function() { return getMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMovie", function() { return createMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovieById", function() { return getMovieById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMovie", function() { return updateMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMovie", function() { return deleteMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const BASE_URL = 'http://localhost:3000';
const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: `${BASE_URL}/api/v1`,
  timeout: 3000
});
/*const setAuthHeader = (req) => {
  const token = req ? getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt');

  if (token) {
    return { headers: {'authorization': `Bearer ${token}`}};
  }

  return undefined;
}*/

const rejectPromise = resError => {
  let error = {};

  if (resError && resError.response && resError.response.data) {
    error = resError.response.data;
  } else {
    error = resError;
  }

  return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(error);
}; // ------------ USER ACTIONS --------------


const getUsers = async () => {
  return await axiosInstance.get('/users').then(response => response.data);
};
const getUserById = async id => {
  return await axiosInstance.get(`/users/${id}`).then(response => response.data);
};
const createUser = async userData => {
  //return await axiosInstance.post('/users', userData, setAuthHeader())
  return await axiosInstance.post('/users', userData).then(response => response.data).catch(error => rejectPromise(error));
};
const updateUser = async userData => {
  //return await axiosInstance.patch(`/portfolios/${portfolioData._id}`, portfolioData, setAuthHeader())
  return await axiosInstance.patch(`/users/${userData._id}`, userData).then(response => response.data).catch(error => rejectPromise(error));
};
const deleteUser = userId => {
  //return axiosInstance.delete(`/users/${userId}`, setAuthHeader()).then(response => response.data);
  return axiosInstance.delete(`/users/${userId}`).then(response => response.data);
}; // ------------ MOVIE AND CATEGORY ACTIONS --------------

const MOVIE_DATA = [];
const CATEGORY_DATA = [{
  id: 'c-0',
  name: 'all'
}, {
  id: 'c-1',
  name: 'drama'
}, {
  id: 'c-2',
  name: 'action'
}, {
  id: 'c-3',
  name: 'adventure'
}, {
  id: 'c-4',
  name: 'historical'
}]; // 1. getCategories function
// 2. get categories in index page
// 3. provide categories to sidemenu
// 4. in sidemenu iterate categories and display them

const getCategories = () => {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_DATA); // reject('Cannot fetch data!')
    }, 50);
  });
};
const getMovies = () => {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${BASE_URL}/api/v1/movies`).then(res => res.data);
};
const createMovie = movie => {
  movie.id = Math.random().toString(36).substr(2, 5);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${BASE_URL}/api/v1/movies`, movie).then(res => res.data);
};
const getMovieById = id => {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data);
};
const updateMovie = movie => {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`${BASE_URL}/api/v1/movies/${movie.id}`, movie).then(res => res.data);
};
const deleteMovie = id => {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data);
};
const getPosts = () => {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${BASE_URL}/api/v1/posts`).then(res => res.data);
};

/***/ }),

/***/ "./components/carousel.js":
/*!********************************!*\
  !*** ./components/carousel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Carousel = props => {
  const {
    images
  } = props;
  return __jsx("div", {
    id: "carouselExampleIndicators",
    "data-ride": "carousel",
    className: "jsx-2936612483" + " " + "carousel slide my-4"
  }, __jsx("ol", {
    className: "jsx-2936612483" + " " + "carousel-indicators"
  }, images.map((image, index) => __jsx("li", {
    key: image.id,
    "data-target": "#carouselExampleIndicators",
    "data-slide-to": index,
    className: "jsx-2936612483" + " " + ((index === 0 ? 'active' : '') || "")
  }))), __jsx("div", {
    role: "listbox",
    className: "jsx-2936612483" + " " + "carousel-inner"
  }, images.map((image, index) => __jsx("div", {
    key: image.id,
    className: "jsx-2936612483" + " " + `carousel-item ${index === 0 ? 'active' : ''}`
  }, __jsx("img", {
    src: image.url,
    alt: image.name,
    className: "jsx-2936612483" + " " + "d-block img-fluid"
  })))), __jsx("a", {
    href: "#carouselExampleIndicators",
    role: "button",
    "data-slide": "prev",
    className: "jsx-2936612483" + " " + "carousel-control-prev"
  }, __jsx("span", {
    "aria-hidden": "true",
    className: "jsx-2936612483" + " " + "carousel-control-prev-icon"
  }), __jsx("span", {
    className: "jsx-2936612483" + " " + "sr-only"
  }, "Previous")), __jsx("a", {
    href: "#carouselExampleIndicators",
    role: "button",
    "data-slide": "next",
    className: "jsx-2936612483" + " " + "carousel-control-next"
  }, __jsx("span", {
    "aria-hidden": "true",
    className: "jsx-2936612483" + " " + "carousel-control-next-icon"
  }), __jsx("span", {
    className: "jsx-2936612483" + " " + "sr-only"
  }, "Next")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2936612483"
  }, ".carousel-item.jsx-2936612483{max-height:400px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGlhZ29cXERlc2t0b3BcXG1vdmllLWFwcC1uZXh0anNcXGNvbXBvbmVudHNcXGNhcm91c2VsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDa0IsQUFHNEIsaUJBQ25CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVGlhZ29cXERlc2t0b3BcXG1vdmllLWFwcC1uZXh0anNcXGNvbXBvbmVudHNcXGNhcm91c2VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuY29uc3QgQ2Fyb3VzZWwgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCB7IGltYWdlcyB9ID0gcHJvcHNcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwiY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIGNsYXNzTmFtZT1cImNhcm91c2VsIHNsaWRlIG15LTRcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiPlxuICAgICAgPG9sIGNsYXNzTmFtZT1cImNhcm91c2VsLWluZGljYXRvcnNcIj5cbiAgICAgICAgeyBpbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICBrZXk9e2ltYWdlLmlkfVxuICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCJcbiAgICAgICAgICAgICAgZGF0YS1zbGlkZS10bz17aW5kZXh9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17aW5kZXggPT09IDAgPyAnYWN0aXZlJyA6ICcnfT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA8L29sPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbm5lclwiIHJvbGU9XCJsaXN0Ym94XCI+XG4gICAgICAgIHsgaW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aW1hZ2UuaWR9IGNsYXNzTmFtZT17YGNhcm91c2VsLWl0ZW0gJHtpbmRleCA9PT0gMCA/ICdhY3RpdmUnIDogJyd9YH0+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIGltZy1mbHVpZFwiXG4gICAgICAgICAgICAgICAgc3JjPXtpbWFnZS51cmx9XG4gICAgICAgICAgICAgICAgYWx0PXtpbWFnZS5uYW1lfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxhIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtcHJldlwiIGhyZWY9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwicHJldlwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlByZXZpb3VzPC9zcGFuPlxuICAgICAgPC9hPlxuICAgICAgPGEgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XCIgaHJlZj1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJuZXh0XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TmV4dDwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNhcm91c2VsLWl0ZW0ge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFxuXG5cbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Tiago\\Desktop\\movie-app-nextjs\\components\\carousel.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ }),

/***/ "./components/modal.js":
/*!*****************************!*\
  !*** ./components/modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Modal extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "submitModal", () => {
      alert('Submitting Modal');
      this.closeModal();
    });

    this.closeButton = null;
  }

  closeModal() {
    this.closeButton.click();
  }

  render() {
    return __jsx("div", null, __jsx("button", {
      type: "button",
      className: "btn btn-primary",
      "data-toggle": "modal",
      "data-target": "#exampleModal"
    }, "Create Movie"), __jsx("div", {
      className: "modal fade",
      id: "exampleModal",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true"
    }, __jsx("div", {
      className: "modal-dialog",
      role: "document"
    }, __jsx("div", {
      className: "modal-content"
    }, __jsx("div", {
      className: "modal-header"
    }, __jsx("h5", {
      className: "modal-title",
      id: "exampleModalLabel"
    }, "Create Movie"), __jsx("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, __jsx("span", {
      "aria-hidden": "true"
    }, "\xD7"))), __jsx("div", {
      className: "modal-body"
    }, this.props.children), __jsx("div", {
      className: "modal-footer"
    }, __jsx("button", {
      ref: ele => this.closeButton = ele,
      type: "button",
      className: "btn btn-secondary",
      "data-dismiss": "modal"
    }, "Close"), this.props.hasSubmit && __jsx("button", {
      onClick: this.submitModal,
      type: "button",
      className: "btn btn-primary"
    }, "Save changes"))))));
  }

} // const Modal = (props) => {
//   let closeButton = null
//   const submitModal = () => {
//     alert('Submitting Modal')
//     closeButton.click()
//   }
//   return (
//     <div>
//       <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
//         Create Movie
//       </button>
//       <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">Create Movie</h5>
//               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               {props.children}
//             </div>
//             <div className="modal-footer">
//               <button ref={ele => closeButton = ele} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//               { props.hasSubmit &&
//                 <button onClick={submitModal} type="button" className="btn btn-primary">Save changes</button>
//               }
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./components/movieCreateForm.js":
/*!***************************************!*\
  !*** ./components/movieCreateForm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const MovieCreateform = props => {
  const {
    0: isInitialDataLoaded,
    1: setIsInitialDataLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const defaultData = {
    name: '',
    description: '',
    rating: '',
    image: '',
    cover: '',
    longDesc: ''
  };
  const formData = props.initialData ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.initialData) : defaultData;
  const {
    0: form,
    1: setform
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(formData); // useEffect(() => {
  //   if (props.initialData) {
  //     setform(props.initialData)
  //     setIsInitialDataLoaded(true)
  //   }
  // }, [isInitialDataLoaded])

  const handleChange = event => {
    const target = event.target;
    const name = target.name;
    setform(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, form, {
      [name]: target.value
    }));
  };

  const handleGenreChange = event => {
    const {
      options
    } = event.target;
    const optionsLength = options.length;
    let value = [];

    for (let i = 0; i < optionsLength; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    setform(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, form, {
      genre: value.toString()
    }));
  };

  const submitform = () => {
    props.handleFormSubmit(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, form));
  };

  return __jsx("form", null, __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "name"
  }, "Name"), __jsx("input", {
    onChange: handleChange,
    value: form.name,
    name: "name",
    type: "text",
    className: "form-control",
    id: "name",
    "aria-describedby": "emailHelp",
    placeholder: "Lord of the Rings"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "description"
  }, "Description"), __jsx("input", {
    onChange: handleChange,
    value: form.description,
    name: "description",
    type: "text",
    className: "form-control",
    id: "description",
    placeholder: "Somewhere in Middle-earth..."
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "description"
  }, "Rating"), __jsx("input", {
    onChange: handleChange,
    value: form.rating,
    name: "rating",
    type: "number",
    max: "5",
    min: "0",
    className: "form-control",
    id: "rating",
    placeholder: "3"
  }), __jsx("small", {
    id: "emailHelp",
    className: "form-text text-muted"
  }, "Max: 5, Min: 0 ")), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "image"
  }, "Image"), __jsx("input", {
    onChange: handleChange,
    value: form.image,
    name: "image",
    type: "text",
    className: "form-control",
    id: "image",
    placeholder: "http://....."
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "cover"
  }, "Cover"), __jsx("input", {
    onChange: handleChange,
    value: form.cover,
    name: "cover",
    type: "text",
    className: "form-control",
    id: "cover",
    placeholder: "http://......"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "longDesc"
  }, "Long Description"), __jsx("textarea", {
    onChange: handleChange,
    value: form.longDesc,
    name: "longDesc",
    className: "form-control",
    id: "longDesc",
    rows: "3"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "genre"
  }, "Genre"), __jsx("select", {
    onChange: handleGenreChange,
    multiple: true,
    className: "form-control",
    id: "genre"
  }, __jsx("option", null, "drama"), __jsx("option", null, "music"), __jsx("option", null, "adventure"), __jsx("option", null, "historical"), __jsx("option", null, "action"))), __jsx("button", {
    onClick: submitform,
    type: "button",
    className: "btn btn-primary"
  }, props.submitButton || 'Create'));
};

/* harmony default export */ __webpack_exports__["default"] = (MovieCreateform);

/***/ }),

/***/ "./components/movieList.js":
/*!*********************************!*\
  !*** ./components/movieList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class MovieList extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "shorten", (text, maxLength) => {
      if (text && text.length > maxLength) {
        return text.substr(0, maxLength) + '...';
      }

      return text;
    });
  }

  renderMovies(movies) {
    return movies.map(movie => __jsx("div", {
      key: movie.id,
      className: "col-lg-4 col-md-6 mb-4"
    }, __jsx("div", {
      className: "card h-100"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/movies/[id]",
      as: `/movies/${movie.id}`
    }, __jsx("a", null, __jsx("img", {
      className: "card-img-top",
      src: movie.image,
      alt: ""
    }))), __jsx("div", {
      className: "card-body"
    }, __jsx("h4", {
      className: "card-title"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/movies/[id]",
      as: `/movies/${movie.id}`
    }, __jsx("a", null, movie.name))), __jsx("div", {
      className: "movie-genre"
    }, movie.genre), __jsx("p", {
      className: "card-text"
    }, this.shorten(movie.description, 100))), __jsx("div", {
      className: "card-footer"
    }, __jsx("small", {
      className: "text-muted"
    }, movie.rating)))));
  }

  render() {
    const {
      movies
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, this.renderMovies(movies));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MovieList);

/***/ }),

/***/ "./components/sideMenu.js":
/*!********************************!*\
  !*** ./components/sideMenu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./components/modal.js");
/* harmony import */ var _movieCreateForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movieCreateForm */ "./components/movieCreateForm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./actions/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // Containment

const SideMenu = props => {
  const {
    categories
  } = props;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  let modal = null;

  const handleCreateMovie = movie => {
    Object(_actions__WEBPACK_IMPORTED_MODULE_4__["createMovie"])(movie).then(movies => {
      modal.closeModal();
      router.push('/');
    });
  };

  return __jsx("div", null, __jsx(_modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ref: ele => modal = ele,
    hasSubmit: false
  }, __jsx(_movieCreateForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handleFormSubmit: handleCreateMovie
  })), __jsx("h1", {
    className: "my-4"
  }, props.appName), __jsx("div", {
    className: "list-group"
  }, categories.map(c => __jsx("a", {
    onClick: () => props.changeCategory(c.name),
    key: c.id,
    href: "#",
    className: `list-group-item ${props.activeCategory === c.name ? 'active' : ''}`
  }, c.name))));
};

/* harmony default export */ __webpack_exports__["default"] = (SideMenu);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_sideMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/sideMenu */ "./components/sideMenu.js");
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/carousel */ "./components/carousel.js");
/* harmony import */ var _components_movieList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/movieList */ "./components/movieList.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./actions/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Home = props => {
  const {
    images,
    categories,
    movies
  } = props;
  const {
    0: filter,
    1: setFilter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('all');

  const changeCategory = category => {
    setFilter(category);
  };

  const filterMovies = movies => {
    if (filter === 'all') {
      return movies;
    }

    return movies.filter(m => {
      return m.genre && m.genre.includes(filter);
    });
  };

  return __jsx("div", null, __jsx("div", {
    className: "home-page"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-3",
    hidden: true
  }, __jsx(_components_sideMenu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    changeCategory: changeCategory,
    activeCategory: filter,
    categories: categories,
    appName: "Categories"
  })), __jsx("div", {
    className: "col-lg-12"
  }, __jsx(_components_carousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    images: images
  }), __jsx("h1", {
    hidden: true
  }, "Displaying ", filter, " movies"), __jsx("div", {
    className: "row",
    hidden: true
  }, __jsx(_components_movieList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    movies: filterMovies(movies) || []
  })))))));
};

Home.getInitialProps = async () => {
  const movies = await Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getMovies"])();
  const categories = await Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getCategories"])();
  const images = movies.map(movie => ({
    id: `image-${movie.id}`,
    url: movie.cover,
    name: movie.name
  }));
  return {
    movies,
    images,
    categories
  };
}; // class Home extends React.Component {
//   static async getInitialProps() {
//     const movies = await getMovies()
//     return {
//       movies
//     }
//   }
//   // constructor(props) {
//   //   super(props)
//   //   this.state = {
//   //     movies: [],
//   //     errorMessage: ''
//   //   }
//   // }
//   // state = {
//   //   movies: []
//   // }
//   // Called only once when componenent is mounted!
//   // async componentDidMount() {
//   //   const movies = await getMovies()
//   //   this.setState({movies})
//   // }
//   // Is called only on Client (Browser...)
//   // componentDidMount() {
//   //   getMovies()
//   //     .then((movies) => {
//   //       this.setState({movies})
//   //     })
//   //     .catch((error) => {
//   //       this.setState({errorMessage: error})
//   //     })
//   // }
//   render() {
//     const { movies } = this.props
//     return (
//       <div>
//         <Head>
//           <title>Home</title>
//           <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
//           <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
//           <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
//           <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
//         </Head>
//         <Navbar />
//         <div className="home-page">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-3">
//                 <SideMenu
//                   appName={"Movie DB"}
//                 />
//               </div>
//               <div className="col-lg-9">
//                 <Carousel />
//                 <div className="row">
//                   <MovieList movies={movies} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//         <style jsx>{`
//           .home-page {
//             padding-top: 80px;
//           }
//         `}
//         </style>
//       </div>
//     )
//   }
// }


/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tiago\Desktop\movie-app-nextjs\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map