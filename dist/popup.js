/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/popup/popup.css":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/popup/popup.css ***!
  \*********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* width */\n:root {\n  --primary-color: #101820ff;\n  --secondary-color: #050709fe;\n  --table-header: rgb(0, 0, 0);\n  --table-header-text: white;\n  --text-color: #ffffff;\n  --secondry-text-color: black;\n  /* --font-family: Verdana, Geneva, Tahoma, sans-serif; */\n  --font-family: Verdana, sans-serif;\n  --font-size-input: 15px;\n}\n\n::-webkit-scrollbar {\n  width: 5px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: none;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: rgb(255, 255, 255);\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: rgba(50, 51, 50, 0.809);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  /* box-sizing: border-box; */\n  font-family: var(--font-family);\n}\n\nbutton:hover,\nbutton:focus {\n  opacity: 0.75;\n}\n\ninput {\n  outline: none;\n  border: none;\n  height: 40px;\n  width: 30%;\n  padding: 1px 5px;\n  font-family: var(--font-family);\n  font-size: var(--font-size-input);\n  letter-spacing: 1px;\n  border-radius: 3px;\n}\n\n#inp_key {\n  width: 20%;\n  color: var(--secondry-text-color);\n}\n\n#inp_val {\n  width: 60%;\n  color: var(--secondry-text-color);\n}\n\nbody {\n  margin: 0.6rem;\n  background-color: var(--primary-color);\n  color: var(--text-color);\n  width: 700px;\n  display: flex;\n  margin: 2px;\n  /* justify-content: space-around; */\n  flex-direction: column;\n  overflow-x: hidden;\n}\n\n.headerrow {\n  padding: 0.1rem 2rem 0.5rem 0rem;\n  display: flex;\n  /* justify-content: space-between; */\n  align-items: center;\n  border-bottom: 2px outset rgba(255, 255, 255, 0.323);\n}\n\n.hide {\n  display: none;\n}\n\n.headerow {\n  display: inline;\n  font-size: medium;\n}\n\n.logo {\n  width: 150px;\n  height: 50px;\n  margin: 15px;\n}\n\n.inputrow {\n  width: 100%;\n  padding: 1rem 2rem 1.5rem 0rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\nsvg {\n  display: none;\n}\n\n.tablistcont {\n  max-height: 400px;\n  min-height: 400px;\n  /* Adjust the max height as needed */\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n\n#tablist {\n  font-family: var(--font-family);\n  /* border-collapse: collapse; */\n  width: 100%;\n  table-layout: fixed;\n  /* Ensure fixed table layout */\n}\n\n#tablist .table_val,\n#tablist th,\n#tablist .table_key {\n  /* border-right: 0.5px inset #ddd; */\n  padding: 10px 15px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-size: var(--font-size-input);\n}\n#tablist th {\n  border-bottom: 0.5px inset #ddd;\n}\n#tablist tr:nth-child(even) {\n  background-color: var(--secondary-color);\n  color: var(--text-color);\n}\n\n#tablist tr:nth-child(odd) {\n  background-color: var(--primary-color);\n  color: var(--text-color);\n}\n\n#tablist tr:hover {\n  filter: invert(0.1);\n}\n\n#tablist th {\n  text-align: start;\n  background-color: var(--table-header);\n  color: var(--text-color);\n}\n\n.addBtn {\n  -webkit-appearance: button;\n     -moz-appearance: button;\n          appearance: button;\n  background-color: #1652f0;\n  border: 1px solid #1652f0;\n  border-radius: 4px;\n  box-sizing: border-box;\n  color: var(--text-color);\n  cursor: pointer;\n  font-family: var(--font-family);\n  font-size: 16px;\n  line-height: 1.15;\n  overflow: visible;\n  padding: 12px 16px;\n  position: relative;\n  text-align: center;\n  text-transform: none;\n  transition: all 80ms ease-in-out;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  min-width: 80px;\n}\n\n.addBtn:disabled {\n  opacity: 0.5;\n}\n\n.addBtn:focus {\n  outline: 0;\n}\n\n.addBtn:hover {\n  background-color: #0a46e4;\n  border-color: #0a46e4;\n}\n\n.addBtn:active {\n  background-color: #0039d7;\n  border-color: #0039d7;\n}\n\n/* MODAL FOR EXISTING KEY */\n.modal {\n  height: 100%;\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  padding-top: 20px;\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  background-color: rgba(0, 0, 0, 0.4);\n  font-family: var(--font-family);\n}\n\n.modal-content img {\n  max-width: 100px;\n}\n\n.modal-content {\n  background: var(--primary-color);\n  padding: 24px;\n  box-sizing: border-box;\n  border-radius: 10px 8px 10px 8px;\n  text-align: center;\n  margin: 0 auto;\n  width: 90%;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  font-family: var(--font-family);\n}\n\n.modal-content p {\n  font-size: 16px;\n  padding: 4px;\n  box-sizing: border-box;\n  color: var(--text-color);\n}\n\n.buttons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  box-sizing: border-box;\n}\n\n.buttons button {\n  padding: 8px 2px;\n  flex: 0.25;\n  border-radius: 10px;\n  border: 2px solid #49181e;\n  color: #fff;\n  font-size: 16px;\n  text-shadow: 1px 2px 3px #000000;\n  cursor: pointer;\n}\n\n.buttons button#closeAlert {\n  background: linear-gradient(#ced869, #536d1b);\n  margin-top: 2px;\n}\n\n.buttons button#updateBtn {\n  background: linear-gradient(#ea7079, #891a1a);\n  margin-top: 2px;\n}\n\n.fade-in {\n  animation: fadeIn ease 0.5s;\n  -webkit-animation: fadeIn ease 0.5s;\n  -moz-animation: fadeIn ease 0.5s;\n  -o-animation: fadeIn ease 0.5s;\n  -ms-animation: fadeIn ease 0.5s;\n}\n", "",{"version":3,"sources":["webpack://./src/popup/popup.css"],"names":[],"mappings":"AAAA,UAAU;AACV;EACE,0BAA0B;EAC1B,4BAA4B;EAC5B,4BAA4B;EAC5B,0BAA0B;EAC1B,qBAAqB;EACrB,4BAA4B;EAC5B,wDAAwD;EACxD,kCAAkC;EAClC,uBAAuB;AACzB;;AAEA;EACE,UAAU;AACZ;;AAEA,UAAU;AACV;EACE,gBAAgB;AAClB;;AAEA,WAAW;AACX;EACE,8BAA8B;AAChC;;AAEA,oBAAoB;AACpB;EACE,mCAAmC;AACrC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,4BAA4B;EAC5B,+BAA+B;AACjC;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,UAAU;EACV,gBAAgB;EAChB,+BAA+B;EAC/B,iCAAiC;EACjC,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,iCAAiC;AACnC;;AAEA;EACE,UAAU;EACV,iCAAiC;AACnC;;AAEA;EACE,cAAc;EACd,sCAAsC;EACtC,wBAAwB;EACxB,YAAY;EACZ,aAAa;EACb,WAAW;EACX,mCAAmC;EACnC,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,gCAAgC;EAChC,aAAa;EACb,oCAAoC;EACpC,mBAAmB;EACnB,oDAAoD;AACtD;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,WAAW;EACX,8BAA8B;EAC9B,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,oCAAoC;EACpC,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,+BAA+B;EAC/B,+BAA+B;EAC/B,WAAW;EACX,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;;;EAGE,oCAAoC;EACpC,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;EACvB,iCAAiC;AACnC;AACA;EACE,+BAA+B;AACjC;AACA;EACE,wCAAwC;EACxC,wBAAwB;AAC1B;;AAEA;EACE,sCAAsC;EACtC,wBAAwB;AAC1B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,qCAAqC;EACrC,wBAAwB;AAC1B;;AAEA;EACE,0BAAkB;KAAlB,uBAAkB;UAAlB,kBAAkB;EAClB,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;EAClB,sBAAsB;EACtB,wBAAwB;EACxB,eAAe;EACf,+BAA+B;EAC/B,eAAe;EACf,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,oBAAoB;EACpB,gCAAgC;EAChC,sBAAiB;GAAjB,qBAAiB;OAAjB,iBAAiB;EACjB,yBAAyB;EACzB,0BAA0B;EAC1B,0BAAkB;EAAlB,uBAAkB;EAAlB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA,2BAA2B;AAC3B;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,UAAU;EACV,OAAO;EACP,MAAM;EACN,WAAW;EACX,iBAAiB;EACjB,kCAA0B;UAA1B,0BAA0B;EAC1B,oCAAoC;EACpC,+BAA+B;AACjC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gCAAgC;EAChC,aAAa;EACb,sBAAsB;EACtB,gCAAgC;EAChC,kBAAkB;EAClB,cAAc;EACd,UAAU;EACV,2CAA2C;EAC3C,+BAA+B;AACjC;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,sBAAsB;EACtB,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,mBAAmB;EACnB,yBAAyB;EACzB,WAAW;EACX,eAAe;EACf,gCAAgC;EAChC,eAAe;AACjB;;AAEA;EACE,6CAA6C;EAC7C,eAAe;AACjB;;AAEA;EACE,6CAA6C;EAC7C,eAAe;AACjB;;AAEA;EACE,2BAA2B;EAC3B,mCAAmC;EACnC,gCAAgC;EAChC,8BAA8B;EAC9B,+BAA+B;AACjC","sourcesContent":["/* width */\n:root {\n  --primary-color: #101820ff;\n  --secondary-color: #050709fe;\n  --table-header: rgb(0, 0, 0);\n  --table-header-text: white;\n  --text-color: #ffffff;\n  --secondry-text-color: black;\n  /* --font-family: Verdana, Geneva, Tahoma, sans-serif; */\n  --font-family: Verdana, sans-serif;\n  --font-size-input: 15px;\n}\n\n::-webkit-scrollbar {\n  width: 5px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: none;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: rgb(255, 255, 255);\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: rgba(50, 51, 50, 0.809);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  /* box-sizing: border-box; */\n  font-family: var(--font-family);\n}\n\nbutton:hover,\nbutton:focus {\n  opacity: 0.75;\n}\n\ninput {\n  outline: none;\n  border: none;\n  height: 40px;\n  width: 30%;\n  padding: 1px 5px;\n  font-family: var(--font-family);\n  font-size: var(--font-size-input);\n  letter-spacing: 1px;\n  border-radius: 3px;\n}\n\n#inp_key {\n  width: 20%;\n  color: var(--secondry-text-color);\n}\n\n#inp_val {\n  width: 60%;\n  color: var(--secondry-text-color);\n}\n\nbody {\n  margin: 0.6rem;\n  background-color: var(--primary-color);\n  color: var(--text-color);\n  width: 700px;\n  display: flex;\n  margin: 2px;\n  /* justify-content: space-around; */\n  flex-direction: column;\n  overflow-x: hidden;\n}\n\n.headerrow {\n  padding: 0.1rem 2rem 0.5rem 0rem;\n  display: flex;\n  /* justify-content: space-between; */\n  align-items: center;\n  border-bottom: 2px outset rgba(255, 255, 255, 0.323);\n}\n\n.hide {\n  display: none;\n}\n\n.headerow {\n  display: inline;\n  font-size: medium;\n}\n\n.logo {\n  width: 150px;\n  height: 50px;\n  margin: 15px;\n}\n\n.inputrow {\n  width: 100%;\n  padding: 1rem 2rem 1.5rem 0rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\nsvg {\n  display: none;\n}\n\n.tablistcont {\n  max-height: 400px;\n  min-height: 400px;\n  /* Adjust the max height as needed */\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n\n#tablist {\n  font-family: var(--font-family);\n  /* border-collapse: collapse; */\n  width: 100%;\n  table-layout: fixed;\n  /* Ensure fixed table layout */\n}\n\n#tablist .table_val,\n#tablist th,\n#tablist .table_key {\n  /* border-right: 0.5px inset #ddd; */\n  padding: 10px 15px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-size: var(--font-size-input);\n}\n#tablist th {\n  border-bottom: 0.5px inset #ddd;\n}\n#tablist tr:nth-child(even) {\n  background-color: var(--secondary-color);\n  color: var(--text-color);\n}\n\n#tablist tr:nth-child(odd) {\n  background-color: var(--primary-color);\n  color: var(--text-color);\n}\n\n#tablist tr:hover {\n  filter: invert(0.1);\n}\n\n#tablist th {\n  text-align: start;\n  background-color: var(--table-header);\n  color: var(--text-color);\n}\n\n.addBtn {\n  appearance: button;\n  background-color: #1652f0;\n  border: 1px solid #1652f0;\n  border-radius: 4px;\n  box-sizing: border-box;\n  color: var(--text-color);\n  cursor: pointer;\n  font-family: var(--font-family);\n  font-size: 16px;\n  line-height: 1.15;\n  overflow: visible;\n  padding: 12px 16px;\n  position: relative;\n  text-align: center;\n  text-transform: none;\n  transition: all 80ms ease-in-out;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  width: fit-content;\n  min-width: 80px;\n}\n\n.addBtn:disabled {\n  opacity: 0.5;\n}\n\n.addBtn:focus {\n  outline: 0;\n}\n\n.addBtn:hover {\n  background-color: #0a46e4;\n  border-color: #0a46e4;\n}\n\n.addBtn:active {\n  background-color: #0039d7;\n  border-color: #0039d7;\n}\n\n/* MODAL FOR EXISTING KEY */\n.modal {\n  height: 100%;\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  padding-top: 20px;\n  backdrop-filter: blur(5px);\n  background-color: rgba(0, 0, 0, 0.4);\n  font-family: var(--font-family);\n}\n\n.modal-content img {\n  max-width: 100px;\n}\n\n.modal-content {\n  background: var(--primary-color);\n  padding: 24px;\n  box-sizing: border-box;\n  border-radius: 10px 8px 10px 8px;\n  text-align: center;\n  margin: 0 auto;\n  width: 90%;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  font-family: var(--font-family);\n}\n\n.modal-content p {\n  font-size: 16px;\n  padding: 4px;\n  box-sizing: border-box;\n  color: var(--text-color);\n}\n\n.buttons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  box-sizing: border-box;\n}\n\n.buttons button {\n  padding: 8px 2px;\n  flex: 0.25;\n  border-radius: 10px;\n  border: 2px solid #49181e;\n  color: #fff;\n  font-size: 16px;\n  text-shadow: 1px 2px 3px #000000;\n  cursor: pointer;\n}\n\n.buttons button#closeAlert {\n  background: linear-gradient(#ced869, #536d1b);\n  margin-top: 2px;\n}\n\n.buttons button#updateBtn {\n  background: linear-gradient(#ea7079, #891a1a);\n  margin-top: 2px;\n}\n\n.fade-in {\n  animation: fadeIn ease 0.5s;\n  -webkit-animation: fadeIn ease 0.5s;\n  -moz-animation: fadeIn ease 0.5s;\n  -o-animation: fadeIn ease 0.5s;\n  -ms-animation: fadeIn ease 0.5s;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/popup/popup.css":
/*!*****************************!*\
  !*** ./src/popup/popup.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_popup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./popup.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/popup/popup.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/CustomIcon/CustomIcon.tsx":
/*!**************************************************!*\
  !*** ./src/components/CustomIcon/CustomIcon.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomIcon": () => (/* binding */ CustomIcon),
/* harmony export */   "SelectImage": () => (/* binding */ SelectImage),
/* harmony export */   "SelectSVG": () => (/* binding */ SelectSVG)
/* harmony export */ });
// Define a map of image names to their corresponding URLs
const imageMap = {
    menu: "images/menu.png",
    email: "images/gmail.png",
    name: "images/name.png",
    address: "images/address.png",
    location: "images/location.png",
    gender: "images/gender.png",
    linkedin: "images/linkedin.png",
    github: "images/github.png",
    website: "images/website.png",
    leetcode: "images/leetcode.png",
    codechef: "images/codechef.png",
    codeforces: "images/codeforces.png",
    sex: "images/gender.png",
    school: "images/school.png",
    facebook: "images/facebook.png",
    instagram: "images/instagram.png",
    twitter: "images/twitter.png",
    help_img1: "images/help_img1.png",
    // Add more mappings as needed
};
const svgMap = {
    delete: "svgs/delete.svg",
    view: "svgs/view.svg",
    update: "svgs/update.svg",
    // Add more mappings as needed
};
// CustomIcon component takes an 'imageName' prop and returns the corresponding image component
const CustomIcon = (imageName) => {
    // Check if the imageName exists in the imageMap
    if (imageMap.hasOwnProperty(imageName)) {
        // If yes, return the image component with the corresponding URL
        return imageMap[imageName];
    }
    else {
        // If imageName doesn't match any entry in the imageMap, return null or handle accordingly
        return null; // You can also throw an error or provide a default image
    }
};
const synonymWord = (key) => {
    if (key.includes("school") ||
        key.includes("university") ||
        key.includes("college") ||
        key.includes("graduation")) {
        key += " school university college graduation";
    }
    return key;
};
const SelectImage = (key) => {
    key = synonymWord(key);
    const imageKeys = Object.keys(imageMap);
    const matchingKey = imageKeys.find((imageKey) => key.toLowerCase().includes(imageKey));
    if (matchingKey) {
        return imageMap[matchingKey];
    }
    else {
        return `https://api.dicebear.com/8.x/bottts-neutral/svg?seed=${key}`; // No matching key found in imageMap
    }
};
const SelectSVG = (key) => {
    key = synonymWord(key);
    const imageKeys = Object.keys(svgMap);
    const matchingKey = imageKeys.find((imageKey) => key.toLowerCase().includes(imageKey));
    if (matchingKey) {
        return svgMap[matchingKey];
    }
    else {
        return false; // No matching key found in imageMap
    }
};


/***/ }),

/***/ "./src/components/Help/Help.tsx":
/*!**************************************!*\
  !*** ./src/components/Help/Help.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomIcon_CustomIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CustomIcon/CustomIcon */ "./src/components/CustomIcon/CustomIcon.tsx");


const Help = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "container mx-auto" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-base mt-4" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-2xl font-bold mt-1" }, "Why QuickFill? \uD83D\uDE80"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-sm " }, "Have you ever been bogged down by those never-ending, monotonous forms that seem to go on forever? \uD83D\uDE29 Imagine having to repeatedly input the same information day in and day out! \uD83D\uDE2B That's where we swoop in to save the day! \uD83E\uDDB8\u200D\u2642\uFE0F With QuickFill, you just need to enter your information once, and the next time you visit any website, boom! \uD83C\uDF89 Fill up those forms in a flash with just one click! \uD83D\uDCA5 No more hassle, no more repetitive typing. \uD83D\uDE0E It's like magic, but better! \u2728 And guess what? We don't save your info; it stays right on your local device, safe and sound. \uD83D\uDD12 Your privacy? Consider it our top priority! \uD83D\uDC4D")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-2xl font-bold mt-4" }, "\uD83E\uDD14 Wondering how it works? Check below! \uD83D\uDEE0\uFE0F"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex items-center" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: (0,_CustomIcon_CustomIcon__WEBPACK_IMPORTED_MODULE_1__.SelectImage)("help_img1.png"), className: "w-80 border-2 border-white border-solid" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "ml-2" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-xs" }, "right click to open context menu press on QuickFill"))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-sm mt-4 mb-8" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "1) \uD83D\uDEE0\uFE0F Click \"Enable Suggestion\" to receive customized suggestions based on your input (Key, Value).")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-sm mt-4" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "mb-2" }, "2) \uD83D\uDE80 AutoFill: Automatically detects and fills in appropriate information using a single click."),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
                            "Mac: ",
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "font-bold" }, "CMD + SHIFT + L")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
                            "Windows: ",
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "font-bold" }, "CTRL + SHIFT + L"))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-sm mt-4" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "mb-2" }, "3) \uD83D\uDEE0\uFE0F Click \"Show Password\" to show the password as sometimes website doesn't provide option with show."),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
                            "Mac: ",
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "font-bold" }, "CMD + SHIFT + P")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
                            "Windows: ",
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "font-bold" }, "CTRL + SHIFT + P"))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Help);


/***/ }),

/***/ "./src/components/Home/AlertModal.tsx":
/*!********************************************!*\
  !*** ./src/components/Home/AlertModal.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AlertModal = ({ alertMessage, handleCloseAlert, handleUpdateBtnClick, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, alertMessage && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "customAlert", className: "modal", style: { display: "block" } },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "modal-content" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { id: "alertMessage" }, alertMessage)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "buttons" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { id: "closeAlert", onClick: handleCloseAlert }, "Close"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { id: "updateBtn", onClick: handleUpdateBtnClick }, "Update"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertModal);


/***/ }),

/***/ "./src/components/Home/Home.tsx":
/*!**************************************!*\
  !*** ./src/components/Home/Home.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomIcon_CustomIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CustomIcon/CustomIcon */ "./src/components/CustomIcon/CustomIcon.tsx");
/* harmony import */ var _AlertModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AlertModal */ "./src/components/Home/AlertModal.tsx");
/* harmony import */ var _UpdateModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UpdateModal */ "./src/components/Home/UpdateModal.tsx");
/* harmony import */ var _ViewModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ViewModal */ "./src/components/Home/ViewModal.tsx");





const Home = () => {
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    const [inpKey, setInpKey] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [inpVal, setInpVal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [alertMessage, setAlertMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [selectedKey, setSelectedKey] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [view, setView] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [updateView, setUpdateView] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        loadTableData();
    }, []);
    const loadTableData = () => {
        chrome.storage.local.get("myData", (result) => {
            const storedData = result.myData;
            if (storedData) {
                setData(storedData);
            }
        });
    };
    const adjustBracketSpacing = () => {
        console.log(inpKey);
        if (inpKey.indexOf("(") !== -1 && inpKey.indexOf("(") !== 0) {
            setInpKey(inpKey.replace("(", " ("));
        }
        // Add space after closing parenthesis if not already there
        if (inpKey.lastIndexOf(")") !== -1 &&
            inpKey.lastIndexOf(")") !== inpKey.length - 1) {
            setInpKey(inpKey.replace(")", ") "));
        }
        console.log(inpKey);
        setInpKey(inpKey);
    };
    const handleAddBtnClick = () => {
        if (inpKey.trim().length === 0 || inpVal.trim().length === 0) {
            setAlertMessage("Please enter something in both fields");
            return;
        }
        const keyExists = Object.keys(data).some((key) => key.toLowerCase() === inpKey.toLowerCase());
        if (keyExists) {
            setAlertMessage("Key already exists. Please enter a different key or update the existing key");
            return;
        }
        adjustBracketSpacing;
        const newData = Object.assign(Object.assign({}, data), { [inpKey]: inpVal });
        setData(newData);
        chrome.storage.local.set({ myData: newData }, () => {
            console.log("Data stored.");
        });
        setInpKey("");
        setInpVal("");
        setAlertMessage("");
    };
    const handleUpdateBtnClick = () => {
        adjustBracketSpacing;
        const newData = Object.assign(Object.assign({}, data), { [inpKey.toLowerCase()]: inpVal });
        setData(newData);
        chrome.storage.local.set({ myData: newData }, () => {
            console.log("Data stored.");
        });
        setInpKey("");
        setInpVal("");
        setAlertMessage("");
        setAlertMessage("");
    };
    const handleCloseAlert = () => {
        setAlertMessage("");
        setView(null);
        setUpdateView(null);
    };
    const handleDeleteClick = (keyToDelete) => {
        const newData = Object.assign({}, data);
        delete newData[keyToDelete];
        setData(newData);
        chrome.storage.local.set({ myData: newData }, () => {
            console.log("Key-value pair deleted.");
        });
    };
    const handleUpdate = (newKey, newValue) => {
        const newData = Object.assign({}, data);
        delete newData[selectedKey];
        newData[newKey] = newValue;
        setData(newData);
        chrome.storage.local.set({ myData: newData }, () => {
            console.log("Key-value pair updated.");
        });
        setUpdateView(null);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        alertMessage && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AlertModal__WEBPACK_IMPORTED_MODULE_2__["default"], { alertMessage: alertMessage, handleCloseAlert: handleCloseAlert, handleUpdateBtnClick: handleUpdateBtnClick })),
        updateView && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UpdateModal__WEBPACK_IMPORTED_MODULE_3__["default"], { keyValue: updateView, handleCloseAlert: handleCloseAlert, handleUpdate: handleUpdate })),
        view && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ViewModal__WEBPACK_IMPORTED_MODULE_4__["default"], { keyValue: view, handleCloseAlert: handleCloseAlert })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "inputrow" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", id: "inp_key", placeholder: "KEY", value: inpKey, onChange: (e) => setInpKey(e.target.value), autoComplete: "off" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", id: "inp_val", placeholder: "VALUE", value: inpVal, onChange: (e) => setInpVal(e.target.value), autoComplete: "off" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "addBtn", onClick: handleAddBtnClick }, "Submit")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "tablistcont" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "" }, "Hint: Add more and more words for acurate results"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", { id: "tablist" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "firstLine" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "header_key" },
                            "KEY",
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { style: { fontSize: "11px", fontWeight: "100" } }, "(might be name of form fields etc)")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "header_val" },
                            "VALUE",
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { style: { fontSize: "11px", fontWeight: "100" } }, "(might be value correponding to that field)")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "header_val", style: { width: "15%" } }))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", { className: "tbody" }, Object.entries(data).map(([key, value]) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { key: key },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "table_key flex items-center gap-4" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,_CustomIcon_CustomIcon__WEBPACK_IMPORTED_MODULE_1__.SelectImage)(key) ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: (0,_CustomIcon_CustomIcon__WEBPACK_IMPORTED_MODULE_1__.SelectImage)(key), alt: "", className: "w-6" })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: "default.png", alt: "", className: "w-6" }))),
                        key),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "table_val" }, value),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "table_val flex gap-2" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: (0,_CustomIcon_CustomIcon__WEBPACK_IMPORTED_MODULE_1__.SelectSVG)("view"), alt: "Action", className: "w-6 cursor-pointer", onClick: () => setView([key, value]) }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: (0,_CustomIcon_CustomIcon__WEBPACK_IMPORTED_MODULE_1__.SelectSVG)("update"), alt: "Action", className: "w-6 cursor-pointer", onClick: () => {
                                setSelectedKey(key);
                                setUpdateView([key, value]);
                            } }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: (0,_CustomIcon_CustomIcon__WEBPACK_IMPORTED_MODULE_1__.SelectSVG)("delete"), alt: "Action", className: "w-6 cursor-pointer", onClick: () => handleDeleteClick(key) }))))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ }),

/***/ "./src/components/Home/UpdateModal.tsx":
/*!*********************************************!*\
  !*** ./src/components/Home/UpdateModal.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const UpdateModal = ({ keyValue, handleCloseAlert, handleUpdate, }) => {
    const [key, setKey] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(keyValue[0]);
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(keyValue[1]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "customAlert", className: "modal", style: { display: "block" } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "modal-content flex flex-col gap-4 text-black" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", placeholder: "KEY", value: key, onChange: (e) => setKey(e.target.value), autoComplete: "off", className: "min-w-full" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", placeholder: "VALUE", value: value, onChange: (e) => setValue(e.target.value), autoComplete: "off", className: "min-w-full" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "buttons" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { id: "closeAlert", onClick: handleCloseAlert }, "Close"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { id: "updateBtn", onClick: () => handleUpdate(key, value) }, "Update")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateModal);


/***/ }),

/***/ "./src/components/Home/ViewModal.tsx":
/*!*******************************************!*\
  !*** ./src/components/Home/ViewModal.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ViewModal = ({ keyValue, handleCloseAlert }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "customAlert", className: "modal", style: { display: "block" } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "modal-content" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { id: "alertMessage" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "KEY:"),
                    " ",
                    keyValue[0]),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { id: "alertMessage overflow-auto\t" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "VALUE:"),
                    " ",
                    keyValue[1])),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "buttons" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { id: "closeAlert", onClick: handleCloseAlert }, "Close")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewModal);


/***/ }),

/***/ "./src/components/Navbar/Navbar.tsx":
/*!******************************************!*\
  !*** ./src/components/Navbar/Navbar.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");


const Navbar = ({ setActiveTab, activeTab }) => {
    const [isClicked, setIsClicked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("home");
    const handleClick = (val) => {
        setIsClicked(val);
    };
    const handleExportData = () => {
        chrome.storage.local.get("myData", (result) => {
            const data = result.myData;
            if (data) {
                const dataStr = JSON.stringify(data);
                const blob = new Blob([dataStr], { type: "application/json" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "myData.json";
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }
        });
    };
    const handleImportData = (e) => {
        const file = e.target.files[0];
        if (!file)
            return;
        const reader = new FileReader();
        reader.onload = (event) => {
            const importedData = JSON.parse(event.target.result);
            chrome.storage.local.set({ myData: importedData });
        };
        reader.readAsText(file);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex justify-between headerrow text-2lg" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex items-center" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: "images/display_icon.png", alt: "logo", className: "logo" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "flex justify-center gap-6" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, { to: "/" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: `py-2 px-3 rounded cursor-pointer ${isClicked == "home" ? "bg-blue-700" : ""}`, onClick: () => handleClick("home") }, "Home"))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, { to: "/support" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: `py-2 px-3 rounded cursor-pointer ${isClicked == "support" ? "bg-blue-700" : ""}`, onClick: () => handleClick("support") }, "Support"))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, { to: "/help" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: `py-2 px-3 rounded cursor-pointer ${isClicked == "help" ? "bg-blue-700" : ""}`, onClick: () => handleClick("help") }, "Help"))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: `py-2 px-3 rounded cursor-pointer ${isClicked == "help" ? "bg-blue-700" : ""}`, onClick: handleExportData }, "Export")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { htmlFor: "importFile", className: "py-2 px-3 rounded cursor-pointer bg-blue-700 text-white" },
                        "Import",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { id: "importFile", type: "file", accept: ".json", style: { display: "none" }, onChange: handleImportData }))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ }),

/***/ "./src/components/Support/Support.tsx":
/*!********************************************!*\
  !*** ./src/components/Support/Support.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomIcon_CustomIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CustomIcon/CustomIcon */ "./src/components/CustomIcon/CustomIcon.tsx");


const Support = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "container mx-auto py-2" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { className: "text-2xl font-semibold mb-4" }, "Follow Us"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex items-center mt-6" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: (0,_CustomIcon_CustomIcon__WEBPACK_IMPORTED_MODULE_1__.SelectImage)("linkedin"), className: "w-10" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "ml-2" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: "font-semibold", href: "https://www.linkedin.com/in/neel-mehta-71857b1bb/", target: "blank" }, "LinkedIn"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-sm text-gray-100" }, "Follow me on LinkedIn for updates and news."))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex items-center mt-12" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: (0,_CustomIcon_CustomIcon__WEBPACK_IMPORTED_MODULE_1__.SelectImage)("email"), className: "w-10" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "ml-2" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-semibold" }, "Email"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-sm text-gray-100" }, "Contact us via email for inquiries and support."))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Support);


/***/ }),

/***/ "./src/popup/index.tsx":
/*!*****************************!*\
  !*** ./src/popup/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _assets_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/tailwind.css */ "./src/assets/tailwind.css");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup */ "./src/popup/popup.tsx");




function init() {
    const appContainer = document.createElement("div");
    document.body.appendChild(appContainer);
    if (!appContainer) {
        throw new Error("Can not find AppContainer");
    }
    const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(appContainer);
    root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_popup__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}
init();


/***/ }),

/***/ "./src/popup/popup.tsx":
/*!*****************************!*\
  !*** ./src/popup/popup.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _popup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.css */ "./src/popup/popup.css");
/* harmony import */ var _components_Home_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home/Home */ "./src/components/Home/Home.tsx");
/* harmony import */ var _components_Support_Support__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Support/Support */ "./src/components/Support/Support.tsx");
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar/Navbar */ "./src/components/Navbar/Navbar.tsx");
/* harmony import */ var _components_Help_Help__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Help/Help */ "./src/components/Help/Help.tsx");
/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase.js */ "./src/firebase.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








const Popup = () => {
    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Home");
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    chrome.identity.getProfileUserInfo(
    //@ts-ignore
    { accountStatus: "ANY" }, function (userInfo) {
        setEmail(userInfo.email);
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        // Function to fetch user email and save to Firestore
        const fetchAndSaveEmail = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                // Fetch user email using Chrome identity API
                if (email && email.length > 4) {
                    // Check if email already exists in Firestore
                    const querySnapshot = yield _firebase_js__WEBPACK_IMPORTED_MODULE_6__.db.users.where("email", "==", email)
                        .get();
                    if (querySnapshot.empty) {
                        // Email doesn't exist, so add it to Firestore
                        yield _firebase_js__WEBPACK_IMPORTED_MODULE_6__.db.users.add({
                            email: email,
                            createdAt: _firebase_js__WEBPACK_IMPORTED_MODULE_6__.db.getCurrentTimestamp(),
                        });
                    }
                }
            }
            catch (error) {
                console.error("Error fetching or saving email:", error);
            }
        });
        // Call the function to fetch and save email
        fetchAndSaveEmail();
    }, [email]); // Run once on component mount
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.HashRouter, null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], { setActiveTab: setActiveTab, activeTab: activeTab }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Routes, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: "/", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Home_Home__WEBPACK_IMPORTED_MODULE_2__["default"], null) }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: "/support", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Support_Support__WEBPACK_IMPORTED_MODULE_3__["default"], null) }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: "/help", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Help_Help__WEBPACK_IMPORTED_MODULE_5__["default"], null) }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);


/***/ }),

/***/ "./src/firebase.js":
/*!*************************!*\
  !*** ./src/firebase.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auth": () => (/* binding */ auth),
/* harmony export */   "db": () => (/* binding */ db),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "provider": () => (/* binding */ provider),
/* harmony export */   "storage": () => (/* binding */ storage)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/esm/index.esm.js");
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/analytics */ "./node_modules/firebase/analytics/dist/esm/index.esm.js");
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/app */ "./node_modules/firebase/compat/app/dist/esm/index.esm.js");
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/auth */ "./node_modules/firebase/compat/auth/dist/esm/index.esm.js");
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/compat/firestore */ "./node_modules/firebase/compat/firestore/dist/esm/index.esm.js");
/* harmony import */ var firebase_compat_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/compat/storage */ "./node_modules/firebase/compat/storage/dist/esm/index.esm.js");
// Import the functions you need from the SDKs you need







// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__["default"].initializeApp({
  apiKey: "AIzaSyDBVX12EBgHjOKzgLc6GUfFrk_fNQ1XABA",
  authDomain: "thequickkfill.firebaseapp.com",
  projectId: "thequickkfill",
  storageBucket: "thequickkfill.appspot.com",
  messagingSenderId: "906579170869",
  appId: "1:906579170869:web:4f30f55789920a96d1037c",
  measurementId: "G-F1FM8XFZX1",
});
const firestore = app.firestore();

const db = {
  users: firestore.collection("users"),
  subscription: firestore.collection("subscriptions"),
  getCurrentTimestamp: firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore.FieldValue.serverTimestamp,
  formatDoc: (doc) => {
    return { id: doc.id, ...doc.data() };
  },
};

const auth = app.auth();
const provider = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__["default"].auth.GoogleAuthProvider();
const storage = app.storage();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"popup": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkQuickFill"] = self["webpackChunkQuickFill"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-b53f7e","vendors-node_modules_react-router-dom_index_js","vendors-node_modules_firebase_analytics_dist_esm_index_esm_js-node_modules_firebase_app_dist_-f49b7d","src_assets_tailwind_css"], () => (__webpack_require__("./src/popup/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=popup.js.map