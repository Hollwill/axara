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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-axios */ \"./node_modules/vue-axios/dist/vue-axios.esm.min.js\");\n\n\n\n\nconst app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\nfunction getCsrfToken() {\n  return document.cookie.match(\"(^|;)\\\\s*\" + \"csrftoken\" + \"\\\\s*=\\\\s*([^;]+)\")?.pop();\n}\n\napp.use(vue_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (axios__WEBPACK_IMPORTED_MODULE_2___default()));\napp.axios.defaults.baseURL = \"http://127.0.0.1:8000/\";\napp.axios.defaults.headers.post['X-CSRFToken'] = getCsrfToken();\napp.axios.defaults.headers.post['Content-Type'] = \"application/json\";\napp.axios.defaults.headers.post['Accept'] = \"application/json\";\napp.mount('#app');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9tYWluLmpzP2ZiZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVBcHAsfSBmcm9tICd2dWUnXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnZ1ZSdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBWdWVBeGlvcyBmcm9tICd2dWUtYXhpb3MnXG5cblxuY29uc3QgYXBwID1jcmVhdGVBcHAoQXBwKVxuXG5mdW5jdGlvbiBnZXRDc3JmVG9rZW4oKSB7XG4gIHJldHVybiBkb2N1bWVudC5jb29raWUubWF0Y2goXCIoXnw7KVxcXFxzKlwiICsgXCJjc3JmdG9rZW5cIiArIFwiXFxcXHMqPVxcXFxzKihbXjtdKylcIik/LnBvcCgpXG59XG5cbmFwcC51c2UoVnVlQXhpb3MsIGF4aW9zKVxuYXBwLmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9cIjtcbmFwcC5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ1gtQ1NSRlRva2VuJ10gPSBnZXRDc3JmVG9rZW4oKVxuYXBwLmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnQ29udGVudC1UeXBlJ10gPSBcImFwcGxpY2F0aW9uL2pzb25cIlxuYXBwLmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnQWNjZXB0J10gPSBcImFwcGxpY2F0aW9uL2pzb25cIlxuYXBwLm1vdW50KCcjYXBwJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "7598dedf35a5b4ed"; }
/******/ }();
/******/ 
/******/ }
);