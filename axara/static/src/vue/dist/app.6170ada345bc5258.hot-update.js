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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-axios */ \"./node_modules/vue-axios/dist/vue-axios.esm.min.js\");\n\n\n\n\n\nconst app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\nfunction getCsrfToken() {\n  return document.cookie.match(\"(^|;)\\\\s*\" + \"csrftoken\" + \"\\\\s*=\\\\s*([^;]+)\")?.pop();\n}\n\napp.use(vue_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (axios__WEBPACK_IMPORTED_MODULE_2___default()));\napp.axios.defaults.baseURL = \"http://127.0.0.1:8000/\";\napp.axios.defaults.headers.post['X-CSRFToken'] = getCsrfToken();\napp.axios.defaults.headers.post['Content-Type'] = \"application/json\";\napp.axios.defaults.headers.post['Accept'] = \"application/json\";\nconst store = (0,vuex__WEBPACK_IMPORTED_MODULE_4__.createStore)({\n  state() {\n    return {\n      cart_items: []\n    };\n  },\n\n  actions: {\n    async fetchCart({\n      commit\n    }) {\n      try {\n        const data = app.axios.get();\n      } catch (error) {\n        console.log(error);\n      }\n    }\n\n  }\n});\napp.use(store);\napp.mount('#app');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVBBO0FBTkE7QUFnQkE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL21haW4uanM/ZmJlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUFwcH0gZnJvbSAndnVlJ1xuaW1wb3J0IHtjcmVhdGVTdG9yZX0gZnJvbSAndnVleCdcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAudnVlJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IFZ1ZUF4aW9zIGZyb20gJ3Z1ZS1heGlvcydcblxuXG5jb25zdCBhcHAgPSBjcmVhdGVBcHAoQXBwKVxuXG5cblxuZnVuY3Rpb24gZ2V0Q3NyZlRva2VuKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jb29raWUubWF0Y2goXCIoXnw7KVxcXFxzKlwiICsgXCJjc3JmdG9rZW5cIiArIFwiXFxcXHMqPVxcXFxzKihbXjtdKylcIik/LnBvcCgpXG59XG5cbmFwcC51c2UoVnVlQXhpb3MsIGF4aW9zKVxuYXBwLmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9cIjtcbmFwcC5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ1gtQ1NSRlRva2VuJ10gPSBnZXRDc3JmVG9rZW4oKVxuYXBwLmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnQ29udGVudC1UeXBlJ10gPSBcImFwcGxpY2F0aW9uL2pzb25cIlxuYXBwLmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnQWNjZXB0J10gPSBcImFwcGxpY2F0aW9uL2pzb25cIlxuXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoe1xuICAgIHN0YXRlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2FydF9pdGVtczogW11cbiAgICAgICAgfVxuICAgIH0sXG4gICAgYWN0aW9uczoge1xuICAgICAgICBhc3luYyBmZXRjaENhcnQoe2NvbW1pdH0pIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGFwcC5heGlvcy5nZXQoKVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pXG5hcHAudXNlKHN0b3JlKVxuYXBwLm1vdW50KCcjYXBwJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "35ce5fcbae89bc2f"; }
/******/ }();
/******/ 
/******/ }
);