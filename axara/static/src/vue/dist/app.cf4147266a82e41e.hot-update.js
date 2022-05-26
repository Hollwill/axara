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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-axios */ \"./node_modules/vue-axios/dist/vue-axios.esm.min.js\");\n/* harmony import */ var _formkit_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @formkit/vue */ \"./node_modules/@formkit/vue/dist/index.mjs\");\n\n\n\n\n\n\nconst app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\nfunction getCsrfToken() {\n  return document.cookie.match(\"(^|;)\\\\s*\" + \"csrftoken\" + \"\\\\s*=\\\\s*([^;]+)\")?.pop();\n}\n\napp.use(_formkit_vue__WEBPACK_IMPORTED_MODULE_4__.defaultConfig, _formkit_vue__WEBPACK_IMPORTED_MODULE_4__.plugin);\napp.use(vue_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (axios__WEBPACK_IMPORTED_MODULE_2___default()));\napp.axios.defaults.baseURL = \"http://127.0.0.1:8000/\";\napp.axios.defaults.headers.post['X-CSRFToken'] = getCsrfToken();\napp.axios.defaults.headers.post['Content-Type'] = \"application/json\";\napp.axios.defaults.headers.post['Accept'] = \"application/json\";\nconst store = (0,vuex__WEBPACK_IMPORTED_MODULE_5__.createStore)({\n  state() {\n    return {\n      cart: []\n    };\n  },\n\n  actions: {\n    async fetchCart({\n      commit\n    }) {\n      try {\n        const response = await app.axios.get('cart/get_cart');\n        commit('SET_CART', response.data);\n      } catch (error) {\n        console.log(error);\n      }\n    },\n\n    async cartItemAction({\n      commit,\n      state\n    }, payload) {\n      let index, action;\n      [index, action] = payload;\n      let action_urls = {\n        'add': 'add_quantity',\n        'sub': 'sub_quantity',\n        'del': 'remove_from_cart'\n      };\n      let url = 'cart/' + action_urls[action];\n      let response = await app.axios.post(url, {\n        product_variant_id: state.cart[index].product_variant.id,\n        size: state.cart[index].size\n      });\n\n      if (response.statusText === 'OK') {\n        switch (action) {\n          case 'add':\n            commit('INCREMENT_CART_ITEM', index);\n            break;\n\n          case 'sub':\n            commit('SUBSTRACT_CART_ITEM', index);\n            break;\n\n          case 'del':\n            commit('DELETE_CART_ITEM', index);\n        }\n      }\n    }\n\n  },\n  mutations: {\n    SET_CART(state, responseData) {\n      state.cart = responseData.cart;\n    },\n\n    INCREMENT_CART_ITEM(state, index) {\n      state.cart[index].quantity += 1;\n    },\n\n    SUBSTRACT_CART_ITEM(state, index) {\n      let quantity = state.cart[index].quantity;\n\n      if (quantity === 1) {\n        state.cart.splice(index, 1);\n      } else {\n        state.cart[index].quantity -= 1;\n      }\n    },\n\n    DELETE_CART_ITEM(state, index) {\n      state.cart.splice(index, 1);\n    }\n\n  }\n});\napp.use(store);\napp.mount('#app');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUdBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUdBOztBQWpDQTtBQW9DQTtBQUNBO0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQWxCQTtBQTFDQTtBQStEQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvbWFpbi5qcz9mYmVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQXBwfSBmcm9tICd2dWUnXG5pbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tICd2dWV4J1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgVnVlQXhpb3MgZnJvbSAndnVlLWF4aW9zJ1xuaW1wb3J0IHsgcGx1Z2luLCBkZWZhdWx0Q29uZmlnIH0gZnJvbSAnQGZvcm1raXQvdnVlJ1xuXG5jb25zdCBhcHAgPSBjcmVhdGVBcHAoQXBwKVxuXG5cbmZ1bmN0aW9uIGdldENzcmZUb2tlbigpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY29va2llLm1hdGNoKFwiKF58OylcXFxccypcIiArIFwiY3NyZnRva2VuXCIgKyBcIlxcXFxzKj1cXFxccyooW147XSspXCIpPy5wb3AoKVxufVxuYXBwLnVzZShkZWZhdWx0Q29uZmlnLCBwbHVnaW4pXG5hcHAudXNlKFZ1ZUF4aW9zLCBheGlvcylcbmFwcC5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvXCI7XG5hcHAuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydYLUNTUkZUb2tlbiddID0gZ2V0Q3NyZlRva2VuKClcbmFwcC5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ0NvbnRlbnQtVHlwZSddID0gXCJhcHBsaWNhdGlvbi9qc29uXCJcbmFwcC5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ0FjY2VwdCddID0gXCJhcHBsaWNhdGlvbi9qc29uXCJcblxuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHtcbiAgICBzdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNhcnQ6IFtdXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgYXN5bmMgZmV0Y2hDYXJ0KHtjb21taXR9KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBwLmF4aW9zLmdldCgnY2FydC9nZXRfY2FydCcpXG4gICAgICAgICAgICAgICAgY29tbWl0KCdTRVRfQ0FSVCcsIHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBjYXJ0SXRlbUFjdGlvbih7Y29tbWl0LCBzdGF0ZX0sIHBheWxvYWQpIHtcbiAgICAgICAgICAgIGxldCBpbmRleCwgYWN0aW9uXG4gICAgICAgICAgICBbaW5kZXgsIGFjdGlvbl0gPSBwYXlsb2FkXG4gICAgICAgICAgICBsZXQgYWN0aW9uX3VybHMgPSB7J2FkZCc6ICdhZGRfcXVhbnRpdHknLCAnc3ViJzogJ3N1Yl9xdWFudGl0eScsICdkZWwnOiAncmVtb3ZlX2Zyb21fY2FydCd9XG5cbiAgICAgICAgICAgIGxldCB1cmwgPSAnY2FydC8nICsgYWN0aW9uX3VybHNbYWN0aW9uXVxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXBwLmF4aW9zLnBvc3QodXJsLCB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdF92YXJpYW50X2lkOiBzdGF0ZS5jYXJ0W2luZGV4XS5wcm9kdWN0X3ZhcmlhbnQuaWQsXG4gICAgICAgICAgICAgICAgc2l6ZTogc3RhdGUuY2FydFtpbmRleF0uc2l6ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNUZXh0ID09PSAnT0snKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYWRkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1pdCgnSU5DUkVNRU5UX0NBUlRfSVRFTScsIGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3ViJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1pdCgnU1VCU1RSQUNUX0NBUlRfSVRFTScsIGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGVsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1pdCgnREVMRVRFX0NBUlRfSVRFTScsIGluZGV4KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cblxuICAgIH0sXG4gICAgbXV0YXRpb25zOiB7XG4gICAgICAgIFNFVF9DQVJUKHN0YXRlLCByZXNwb25zZURhdGEpIHtcblxuICAgICAgICAgICAgc3RhdGUuY2FydCA9IHJlc3BvbnNlRGF0YS5jYXJ0XG4gICAgICAgIH0sXG4gICAgICAgIElOQ1JFTUVOVF9DQVJUX0lURU0oc3RhdGUsIGluZGV4KSB7XG4gICAgICAgICAgICBzdGF0ZS5jYXJ0W2luZGV4XS5xdWFudGl0eSArPSAxXG4gICAgICAgIH0sXG4gICAgICAgIFNVQlNUUkFDVF9DQVJUX0lURU0oc3RhdGUsIGluZGV4KSB7XG4gICAgICAgICAgICBsZXQgcXVhbnRpdHkgPSBzdGF0ZS5jYXJ0W2luZGV4XS5xdWFudGl0eVxuICAgICAgICAgICAgaWYgKHF1YW50aXR5ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUuY2FydC5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXRlLmNhcnRbaW5kZXhdLnF1YW50aXR5IC09IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgREVMRVRFX0NBUlRfSVRFTShzdGF0ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHN0YXRlLmNhcnQuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICB9XG4gICAgfVxufSlcbmFwcC51c2Uoc3RvcmUpXG5hcHAubW91bnQoJyNhcHAnKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "b4cb0abbf2ac5ec8"; }
/******/ }();
/******/ 
/******/ }
);