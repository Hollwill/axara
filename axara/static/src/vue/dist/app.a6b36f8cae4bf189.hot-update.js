"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdatefrontend"]("app",{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-axios */ \"./node_modules/vue-axios/dist/vue-axios.esm.min.js\");\n\n\n\n\n\nconst app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\nfunction getCsrfToken() {\n  return document.cookie.match(\"(^|;)\\\\s*\" + \"csrftoken\" + \"\\\\s*=\\\\s*([^;]+)\")?.pop();\n}\n\napp.use(vue_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (axios__WEBPACK_IMPORTED_MODULE_2___default()));\napp.axios.defaults.baseURL = \"http://127.0.0.1:8000/\";\napp.axios.defaults.headers.post['X-CSRFToken'] = getCsrfToken();\napp.axios.defaults.headers.post['Content-Type'] = \"application/json\";\napp.axios.defaults.headers.post['Accept'] = \"application/json\";\nconst store = (0,vuex__WEBPACK_IMPORTED_MODULE_4__.createStore)({\n  state() {\n    return {\n      cart: []\n    };\n  },\n\n  actions: {\n    async fetchCart({\n      commit\n    }) {\n      try {\n        const response = app.axios.get('cart/get_cart');\n        commit('SET_CART', response.data);\n      } catch (error) {\n        console.log(error);\n      }\n    }\n\n  },\n  mutations: {\n    SET_CART(state, responseData) {\n      console.log(responseData);\n      state.cart = responseData.cart;\n    }\n\n  }\n});\napp.use(store);\napp.mount('#app');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUpBO0FBaEJBO0FBdUJBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9tYWluLmpzP2ZiZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVBcHB9IGZyb20gJ3Z1ZSdcbmltcG9ydCB7Y3JlYXRlU3RvcmV9IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnZ1ZSdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBWdWVBeGlvcyBmcm9tICd2dWUtYXhpb3MnXG5cblxuY29uc3QgYXBwID0gY3JlYXRlQXBwKEFwcClcblxuXG5cbmZ1bmN0aW9uIGdldENzcmZUb2tlbigpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY29va2llLm1hdGNoKFwiKF58OylcXFxccypcIiArIFwiY3NyZnRva2VuXCIgKyBcIlxcXFxzKj1cXFxccyooW147XSspXCIpPy5wb3AoKVxufVxuXG5hcHAudXNlKFZ1ZUF4aW9zLCBheGlvcylcbmFwcC5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvXCI7XG5hcHAuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydYLUNTUkZUb2tlbiddID0gZ2V0Q3NyZlRva2VuKClcbmFwcC5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ0NvbnRlbnQtVHlwZSddID0gXCJhcHBsaWNhdGlvbi9qc29uXCJcbmFwcC5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ0FjY2VwdCddID0gXCJhcHBsaWNhdGlvbi9qc29uXCJcblxuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHtcbiAgICBzdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNhcnQ6IFtdXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgYXN5bmMgZmV0Y2hDYXJ0KHtjb21taXR9KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXBwLmF4aW9zLmdldCgnY2FydC9nZXRfY2FydCcpXG4gICAgICAgICAgICAgICAgY29tbWl0KCdTRVRfQ0FSVCcsIHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtdXRhdGlvbnM6IHtcbiAgICAgICAgU0VUX0NBUlQoc3RhdGUsIHJlc3BvbnNlRGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKVxuICAgICAgICAgICAgc3RhdGUuY2FydCA9IHJlc3BvbnNlRGF0YS5jYXJ0XG4gICAgICAgIH1cbiAgICB9XG59KVxuYXBwLnVzZShzdG9yZSlcbmFwcC5tb3VudCgnI2FwcCcpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "e3f4b066057a643b"; }
/******/ }();
/******/ 
/******/ }
);