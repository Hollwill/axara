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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/OrderConfirmation.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/OrderConfirmation.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"OrderConfirmation\",\n  computed: {\n    fullPrice() {\n      return this.$store.state.fullPrice;\n    }\n\n  },\n  methods: {\n    redirectToPayment() {\n      let orderData = this.$store.state.orderForm;\n      let cartItems = this.$store.state.cart;\n      console.log(orderData);\n      console.log(cartItems);\n    }\n\n  },\n\n  mounted() {\n    this.$store.commit('UPDATE_FULL_PRICE');\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL09yZGVyQ29uZmlybWF0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsIm1hcHBpbmdzIjoiO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU5BOztBQVFBO0FBQ0E7QUFDQTs7QUFqQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL09yZGVyQ29uZmlybWF0aW9uLnZ1ZT81ODc3Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwib3JkZXItY29uZmlybWF0aW9uXCI+XHJcbiAgICA8aDMgY2xhc3M9XCJtYi0yXCI+0JjRgtC+0LPQvjwvaDM+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTJcIj5cclxuICAgICAgPHA+0KLQvtCy0LDRgNGLINC90LAg0YHRg9C80LzRgzwvcD5cclxuICAgICAgPHA+e3sgZnVsbFByaWNlIH19INGA0YPQsS48L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItMlwiPlxyXG4gICAgICA8cD7QlNC+0YHRgtCw0LLQutCwOjwvcD5cclxuICAgICAgPHA+0JHQtdGB0L/Qu9Cw0YLQvdC+PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8aDQ+0JTQvtGB0YLQsNCy0LrQsCDQuCDQvtC/0LvQsNGC0LA8L2g0PlxyXG4gICAgPHA+0J7Qv9C70LDRgtCwOiDQntC90LvQsNC50L0t0L7Qv9C70LDRgtCwPC9wPlxyXG4gICAgPGhyPlxyXG4gICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICA8aDQ+0JLRgdC10LPQvjwvaDQ+XHJcbiAgICAgIDxoND57eyBmdWxsUHJpY2UgfX0g0YDRg9CxLjwvaDQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxocj5cclxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1kYXJrIG10LTIgbWItNCB3LTEwMFwiIEBjbGljaz1cImNyZWF0ZU9yZGVyXCI+0J/QvtC00YLQstC10YDQtNC40YLRjCDQt9Cw0LrQsNC3PC9idXR0b24+XHJcblxyXG5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcIk9yZGVyQ29uZmlybWF0aW9uXCIsXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGZ1bGxQcmljZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmZ1bGxQcmljZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgcmVkaXJlY3RUb1BheW1lbnQoKSB7XHJcbiAgICAgIGxldCBvcmRlckRhdGEgPSB0aGlzLiRzdG9yZS5zdGF0ZS5vcmRlckZvcm1cclxuICAgICAgbGV0IGNhcnRJdGVtcyA9IHRoaXMuJHN0b3JlLnN0YXRlLmNhcnRcclxuICAgICAgY29uc29sZS5sb2cob3JkZXJEYXRhKVxyXG4gICAgICBjb25zb2xlLmxvZyhjYXJ0SXRlbXMpXHJcbiAgICB9XHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgdGhpcy4kc3RvcmUuY29tbWl0KCdVUERBVEVfRlVMTF9QUklDRScpXHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLm9yZGVyLWNvbmZpcm1hdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMjQ0LCAyNDQpO1xyXG59XHJcbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/OrderConfirmation.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/OrderConfirmation.vue?vue&type=template&id=25e7e923&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/OrderConfirmation.vue?vue&type=template&id=25e7e923&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-25e7e923\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\n\nconst _hoisted_1 = {\n  class: \"order-confirmation\"\n};\n\nconst _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h3\", {\n  class: \"mb-2\"\n}, \"Итого\", -1\n/* HOISTED */\n));\n\nconst _hoisted_3 = {\n  class: \"d-flex justify-content-between mb-2\"\n};\n\nconst _hoisted_4 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Товары на сумму\", -1\n/* HOISTED */\n));\n\nconst _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"d-flex justify-content-between mb-2\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Доставка:\"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Бесплатно\")], -1\n/* HOISTED */\n));\n\nconst _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h4\", null, \"Доставка и оплата\", -1\n/* HOISTED */\n));\n\nconst _hoisted_7 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Оплата: Онлайн-оплата\", -1\n/* HOISTED */\n));\n\nconst _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"hr\", null, null, -1\n/* HOISTED */\n));\n\nconst _hoisted_9 = {\n  class: \"d-flex justify-content-between\"\n};\n\nconst _hoisted_10 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h4\", null, \"Всего\", -1\n/* HOISTED */\n));\n\nconst _hoisted_11 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"hr\", null, null, -1\n/* HOISTED */\n));\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.fullPrice) + \" руб.\", 1\n  /* TEXT */\n  )]), _hoisted_5, _hoisted_6, _hoisted_7, _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h4\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.fullPrice) + \" руб.\", 1\n  /* TEXT */\n  )]), _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    type: \"submit\",\n    class: \"btn btn-dark mt-2 mb-4 w-100\",\n    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.createOrder && _ctx.createOrder(...args))\n  }, \"Подтвердить заказ\")]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9PcmRlckNvbmZpcm1hdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjVlN2U5MjMmc2NvcGVkPXRydWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBOztBQUdBO0FBQUE7QUFHQTs7QUFIQTs7QUFJQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTs7O0FBQ0E7OztBQUNBO0FBQUE7QUFBQTs7QUFHQTtBQUFBO0FBQUE7OztBQWpCQTtBQUlBO0FBQUE7QUFXQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL09yZGVyQ29uZmlybWF0aW9uLnZ1ZT81ODc3Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwib3JkZXItY29uZmlybWF0aW9uXCI+XHJcbiAgICA8aDMgY2xhc3M9XCJtYi0yXCI+0JjRgtC+0LPQvjwvaDM+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTJcIj5cclxuICAgICAgPHA+0KLQvtCy0LDRgNGLINC90LAg0YHRg9C80LzRgzwvcD5cclxuICAgICAgPHA+e3sgZnVsbFByaWNlIH19INGA0YPQsS48L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItMlwiPlxyXG4gICAgICA8cD7QlNC+0YHRgtCw0LLQutCwOjwvcD5cclxuICAgICAgPHA+0JHQtdGB0L/Qu9Cw0YLQvdC+PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8aDQ+0JTQvtGB0YLQsNCy0LrQsCDQuCDQvtC/0LvQsNGC0LA8L2g0PlxyXG4gICAgPHA+0J7Qv9C70LDRgtCwOiDQntC90LvQsNC50L0t0L7Qv9C70LDRgtCwPC9wPlxyXG4gICAgPGhyPlxyXG4gICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICA8aDQ+0JLRgdC10LPQvjwvaDQ+XHJcbiAgICAgIDxoND57eyBmdWxsUHJpY2UgfX0g0YDRg9CxLjwvaDQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxocj5cclxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1kYXJrIG10LTIgbWItNCB3LTEwMFwiIEBjbGljaz1cImNyZWF0ZU9yZGVyXCI+0J/QvtC00YLQstC10YDQtNC40YLRjCDQt9Cw0LrQsNC3PC9idXR0b24+XHJcblxyXG5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcIk9yZGVyQ29uZmlybWF0aW9uXCIsXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGZ1bGxQcmljZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmZ1bGxQcmljZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgcmVkaXJlY3RUb1BheW1lbnQoKSB7XHJcbiAgICAgIGxldCBvcmRlckRhdGEgPSB0aGlzLiRzdG9yZS5zdGF0ZS5vcmRlckZvcm1cclxuICAgICAgbGV0IGNhcnRJdGVtcyA9IHRoaXMuJHN0b3JlLnN0YXRlLmNhcnRcclxuICAgICAgY29uc29sZS5sb2cob3JkZXJEYXRhKVxyXG4gICAgICBjb25zb2xlLmxvZyhjYXJ0SXRlbXMpXHJcbiAgICB9XHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgdGhpcy4kc3RvcmUuY29tbWl0KCdVUERBVEVfRlVMTF9QUklDRScpXHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLm9yZGVyLWNvbmZpcm1hdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMjQ0LCAyNDQpO1xyXG59XHJcbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/OrderConfirmation.vue?vue&type=template&id=25e7e923&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "babd7aa47217f60d"; }
/******/ }();
/******/ 
/******/ }
);