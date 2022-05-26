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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-axios */ \"./node_modules/vue-axios/dist/vue-axios.esm.min.js\");\n\n\n\n\n\nconst store = (0,vuex__WEBPACK_IMPORTED_MODULE_4__.createStore)({\n  state() {\n    return {};\n  }\n\n});\nconst app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\napp.use(store);\n\nfunction getCsrfToken() {\n  return document.cookie.match(\"(^|;)\\\\s*\" + \"csrftoken\" + \"\\\\s*=\\\\s*([^;]+)\")?.pop();\n}\n\napp.use(vue_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (axios__WEBPACK_IMPORTED_MODULE_2___default()));\napp.axios.defaults.baseURL = \"http://127.0.0.1:8000/\";\napp.axios.defaults.headers.post['X-CSRFToken'] = getCsrfToken();\napp.axios.defaults.headers.post['Content-Type'] = \"application/json\";\napp.axios.defaults.headers.post['Accept'] = \"application/json\";\napp.mount('#app');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBOztBQUxBO0FBUUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvbWFpbi5qcz9mYmVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQXBwfSBmcm9tICd2dWUnXG5pbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tICd2dWV4J1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgVnVlQXhpb3MgZnJvbSAndnVlLWF4aW9zJ1xuXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoe1xuICAgIHN0YXRlKCkge1xuICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgIH1cbiAgICB9XG59KVxuXG5jb25zdCBhcHAgPSBjcmVhdGVBcHAoQXBwKVxuXG5hcHAudXNlKHN0b3JlKVxuXG5mdW5jdGlvbiBnZXRDc3JmVG9rZW4oKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNvb2tpZS5tYXRjaChcIihefDspXFxcXHMqXCIgKyBcImNzcmZ0b2tlblwiICsgXCJcXFxccyo9XFxcXHMqKFteO10rKVwiKT8ucG9wKClcbn1cblxuYXBwLnVzZShWdWVBeGlvcywgYXhpb3MpXG5hcHAuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL1wiO1xuYXBwLmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnWC1DU1JGVG9rZW4nXSA9IGdldENzcmZUb2tlbigpXG5hcHAuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydDb250ZW50LVR5cGUnXSA9IFwiYXBwbGljYXRpb24vanNvblwiXG5hcHAuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydBY2NlcHQnXSA9IFwiYXBwbGljYXRpb24vanNvblwiXG5hcHAubW91bnQoJyNhcHAnKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "918ee510e1fdd124"; }
/******/ }();
/******/ 
/******/ }
);