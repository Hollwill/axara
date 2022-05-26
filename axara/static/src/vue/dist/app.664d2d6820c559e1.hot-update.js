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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-axios */ \"./node_modules/vue-axios/dist/vue-axios.esm.min.js\");\n\n\n\n\nconst app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\nfunction getCsrfToken() {\n  return document.cookie.match(\"(^|;)\\\\s*\" + \"csrftoken\" + \"\\\\s*=\\\\s*([^;]+)\")?.pop();\n}\n\napp.use(vue_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (axios__WEBPACK_IMPORTED_MODULE_2___default()));\napp.axios.defaults.baseURL = \"http://127.0.0.1:8000/\";\napp.axios.defaults.headers.post['X-CSRFToken'] = getCsrfToken();\napp.axios.defaults.headers.post['Content-Type'] = \"application/json\", app.axios.defaults.headers.post['Accept'] = \"application/json\", app.mount('#app');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL21haW4uanM/ZmJlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUFwcCx9IGZyb20gJ3Z1ZSdcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAudnVlJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IFZ1ZUF4aW9zIGZyb20gJ3Z1ZS1heGlvcydcblxuXG5jb25zdCBhcHAgPWNyZWF0ZUFwcChBcHApXG5cbmZ1bmN0aW9uIGdldENzcmZUb2tlbigpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNvb2tpZS5tYXRjaChcIihefDspXFxcXHMqXCIgKyBcImNzcmZ0b2tlblwiICsgXCJcXFxccyo9XFxcXHMqKFteO10rKVwiKT8ucG9wKClcbn1cblxuYXBwLnVzZShWdWVBeGlvcywgYXhpb3MpXG5hcHAuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL1wiO1xuYXBwLmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnWC1DU1JGVG9rZW4nXSA9IGdldENzcmZUb2tlbigpXG5hcHAuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydDb250ZW50LVR5cGUnXSA9IFwiYXBwbGljYXRpb24vanNvblwiLFxuYXBwLmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnQWNjZXB0J10gPSBcImFwcGxpY2F0aW9uL2pzb25cIixcbmFwcC5tb3VudCgnI2FwcCcpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "d08fb8351580f789"; }
/******/ }();
/******/ 
/******/ }
);