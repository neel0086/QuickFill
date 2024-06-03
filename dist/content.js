/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/contentScript/content.css":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/contentScript/content.css ***!
  \*******************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/* Add some basic styling to the suggestion dropdown */\n:root {\n  --primary-color: #101820ff;\n  --secondary-color: #050709fe;\n  --table-header: rgb(0, 0, 0);\n  --text-color: #ffffff;\n  --secondry-text-color: #101820ff;\n  --font-family: Verdana, Geneva, Tahoma, sans-serif;\n  --font-size-input: 15px;\n}\n.suggestion-dropdown {\n  position: absolute;\n  background-color: var(--primary-color);\n  min-width: 160px;\n  box-shadow: 18px 18px 20px 0px rgba(0, 0, 0, 0.2);\n  color: var(--text-color);\n  border-radius: 2px;\n  z-index: 100000000000;\n}\n\n.suggestion-item {\n  padding: 10px 15px;\n  cursor: pointer;\n  font-family: var(--font-family);\n  font-size: 15px;\n}\n\n.suggestion-item:hover,\n.selected {\n  background-color: #989898b6;\n}\n.suggestion-dropdown:not(:empty)::after {\n  border-bottom: 15px solid var(--secondary-color);\n  border-left: 15px solid transparent;\n  border-right: 15px solid transparent;\n  content: \"\";\n  height: 0;\n  left: 10%;\n  margin-left: -15px;\n  margin-top: -15px;\n  position: absolute;\n  top: 0;\n  width: 0;\n  z-index: 1;\n}\n/* //////////////////////////////////////////////////////////////////////////////////// */\n.suggestion-list {\n  position: absolute;\n  justify-content: space-around;\n  margin: 3px;\n  /* background-color: var(--primary-color); */\n  min-width: 50%;\n  max-width: inherit;\n  color: var(--text-color);\n  z-index: 100000000000;\n  background: rgba(91, 89, 89, 0.25);\n  backdrop-filter: blur(3px);\n  -webkit-backdrop-filter: blur(3px);\n  border-radius: 2px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n}\n\n.suggestion-item-list {\n  width: 100%;\n  padding: 10px;\n  cursor: pointer;\n  font-family: var(--font-family);\n  color: var(--secondary-color);\n  font-size: 15px;\n}\n\n.suggestion-item-list:hover,\n.selected {\n  background: rgba(91, 89, 89, 0.25);\n  backdrop-filter: blur(3px);\n  -webkit-backdrop-filter: blur(3px);\n}\n", "",{"version":3,"sources":["webpack://./src/contentScript/content.css"],"names":[],"mappings":"AAAA,sDAAsD;AACtD;EACE,0BAA0B;EAC1B,4BAA4B;EAC5B,4BAA4B;EAC5B,qBAAqB;EACrB,gCAAgC;EAChC,kDAAkD;EAClD,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB,sCAAsC;EACtC,gBAAgB;EAChB,iDAAiD;EACjD,wBAAwB;EACxB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,+BAA+B;EAC/B,eAAe;AACjB;;AAEA;;EAEE,2BAA2B;AAC7B;AACA;EACE,gDAAgD;EAChD,mCAAmC;EACnC,oCAAoC;EACpC,WAAW;EACX,SAAS;EACT,SAAS;EACT,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,UAAU;AACZ;AACA,yFAAyF;AACzF;EACE,kBAAkB;EAClB,6BAA6B;EAC7B,WAAW;EACX,4CAA4C;EAC5C,cAAc;EACd,kBAAkB;EAClB,wBAAwB;EACxB,qBAAqB;EACrB,kCAAkC;EAClC,0BAA0B;EAC1B,kCAAkC;EAClC,kBAAkB;EAClB,2CAA2C;AAC7C;;AAEA;EACE,WAAW;EACX,aAAa;EACb,eAAe;EACf,+BAA+B;EAC/B,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;;EAEE,kCAAkC;EAClC,0BAA0B;EAC1B,kCAAkC;AACpC","sourcesContent":["/* Add some basic styling to the suggestion dropdown */\n:root {\n  --primary-color: #101820ff;\n  --secondary-color: #050709fe;\n  --table-header: rgb(0, 0, 0);\n  --text-color: #ffffff;\n  --secondry-text-color: #101820ff;\n  --font-family: Verdana, Geneva, Tahoma, sans-serif;\n  --font-size-input: 15px;\n}\n.suggestion-dropdown {\n  position: absolute;\n  background-color: var(--primary-color);\n  min-width: 160px;\n  box-shadow: 18px 18px 20px 0px rgba(0, 0, 0, 0.2);\n  color: var(--text-color);\n  border-radius: 2px;\n  z-index: 100000000000;\n}\n\n.suggestion-item {\n  padding: 10px 15px;\n  cursor: pointer;\n  font-family: var(--font-family);\n  font-size: 15px;\n}\n\n.suggestion-item:hover,\n.selected {\n  background-color: #989898b6;\n}\n.suggestion-dropdown:not(:empty)::after {\n  border-bottom: 15px solid var(--secondary-color);\n  border-left: 15px solid transparent;\n  border-right: 15px solid transparent;\n  content: \"\";\n  height: 0;\n  left: 10%;\n  margin-left: -15px;\n  margin-top: -15px;\n  position: absolute;\n  top: 0;\n  width: 0;\n  z-index: 1;\n}\n/* //////////////////////////////////////////////////////////////////////////////////// */\n.suggestion-list {\n  position: absolute;\n  justify-content: space-around;\n  margin: 3px;\n  /* background-color: var(--primary-color); */\n  min-width: 50%;\n  max-width: inherit;\n  color: var(--text-color);\n  z-index: 100000000000;\n  background: rgba(91, 89, 89, 0.25);\n  backdrop-filter: blur(3px);\n  -webkit-backdrop-filter: blur(3px);\n  border-radius: 2px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n}\n\n.suggestion-item-list {\n  width: 100%;\n  padding: 10px;\n  cursor: pointer;\n  font-family: var(--font-family);\n  color: var(--secondary-color);\n  font-size: 15px;\n}\n\n.suggestion-item-list:hover,\n.selected {\n  background: rgba(91, 89, 89, 0.25);\n  backdrop-filter: blur(3px);\n  -webkit-backdrop-filter: blur(3px);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/contentScript/content.css":
/*!***************************************!*\
  !*** ./src/contentScript/content.css ***!
  \***************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_content_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./content.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/contentScript/content.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_content_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_content_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_content_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_content_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./src/contentScript/content.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.css */ "./src/contentScript/content.css");


var dropdownIndex = -1;
var executed = true;
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  var inputFields = document.querySelectorAll(
    "input[type='text'], input[type='email'], input[type='password']"
  );

  // TRIGGER INPUT EVENT
  function triggerTypingEvent(input) {
    // Dispatch typing event

    // Clear the input field's value
    input.value += "";

    // Dispatch input event
    var typingEvent = new Event("input", {
      bubbles: true,
      cancelable: true,
    });
    input.dispatchEvent(typingEvent);
  }

  function keyCleaning(keys) {
    let keyCleaned = keys.replace(/[()]/g, "").trim();

    // Split keys into subsets based on "comma", "or", "and", etc.
    let keySubsets = keyCleaned
      .split(/\s*(?:,|\bor\b|\band\b)\s*/)
      .map((subset) => subset.trim());
    return keySubsets;
  }

  function splitIntoWords(keySubsets) {
    let keyWords = [];
    // Split each subset into individual words
    keySubsets.forEach((subset) => {
      let words = subset.split(/\s+/).filter((word) => word.trim() !== "");
      if (words.length > 0) {
        keyWords.push(words);
      }
    });
    return keyWords;
  }

  function caclulateLengthPoints(keyWords, placeholderWords) {
    const lengthPoints = [];
    for (let i = 0; i < placeholderWords.length; i++) {
      let count = 0; // Initialize a counter for placeholder words in the current array

      // Iterate through each word in the current array
      for (let j = 0; j < placeholderWords[i].length; j++) {
        // Convert the keys word to lowercase for case insensitivity
        let placeholderWord = placeholderWords[i][j].toLowerCase();

        // Iterate through each placeholder word
        for (let k = 0; k < keyWords.length; k++) {
          // Convert the placeholder word to lowercase for case insensitivity
          let keyWord = keyWords[k].toLowerCase();

          // Check if the current keys word matches the placeholder word
          if (keyWord === placeholderWord) {
            count++; // Increment the counter if they match
            break; // Break out of the loop since we found a match
          }
        }
      }

      // Push the count to the result array
      lengthPoints.push(count);
    }
    return lengthPoints;
  }

  function calculateIndexPoints(keyWords, placeholderWords) {
    const indexPoints = [];

    for (let i = 0; i < placeholderWords.length; i++) {
      let indexPoint = 0; // Initialize index points for the current placeholder word

      // Iterate through each word in the placeholder
      for (let j = 0; j < placeholderWords[i].length; j++) {
        // Convert the placeholder word to lowercase for case insensitivity
        let placeholderWord = placeholderWords[i][j].toLowerCase();

        // Iterate through each keyword
        for (let k = 0; k < keyWords.length; k++) {
          // Convert the keyword to lowercase for case insensitivity
          let keyword = keyWords[k].toLowerCase();

          // Check if the current keyword matches the placeholder word
          if (keyword === placeholderWord) {
            // Calculate the index points based on the index of the keyword in the placeholder
            indexPoint += j + 1; // Add 1 because index starts from 0
            break; // Break out of the loop since we found a match
          }
        }
      }

      // Push the index points to the result array
      indexPoints.push(indexPoint);
    }

    return indexPoints;
  }

  function findHighestIndexPoints(lengthPoints) {
    const highestIndexes = {};

    // Iterate over each column (keyword)
    for (let column = 0; column < lengthPoints[0].length; column++) {
      let highestValue = 0; // Initialize highest value for the current column
      let keysWithHighestValue = []; // Initialize keys with highest value for the current column

      // Iterate over each row (placeholder word) in the current column
      for (let row = 0; row < lengthPoints.length; row++) {
        const indexPoint = lengthPoints[row][column];

        // If the current index point is greater than the highest value so far,
        // update the highest value and reset keysWithHighestValue array
        if (indexPoint > highestValue) {
          highestValue = indexPoint;
          keysWithHighestValue = [row]; // Start with a new array for the highest value
        } else if (indexPoint != 0 && indexPoint === highestValue) {
          keysWithHighestValue.push(row); // Add the current key to keysWithHighestValue array
        }
      }

      // If keysWithHighestValue is not empty, store it in highestIndexes with column as key
      if (keysWithHighestValue.length > 0) {
        highestIndexes[column] = keysWithHighestValue; // Convert array to comma-separated string
      }
    }

    return highestIndexes;
  }

  function findMinimumIndexPoints(indexPoints, suggestedWords) {
    const result = {};

    // Iterate over each key (row) in suggestedWords
    for (const key in suggestedWords) {
      // Initialize minimum index point to positive infinity and column index to -1
      let minIndexPoint = Infinity;
      let minColumnIndex = -1;

      // Iterate over each column in the array of indexes for the current row
      suggestedWords[key].forEach((column) => {
        const indexPoint = indexPoints[column][key]; // Get the index point for the current row and column

        // Update minIndexPoint and minColumnIndex if the current index point is less than the current minimum
        if (indexPoint < minIndexPoint) {
          minIndexPoint = indexPoint;
          minColumnIndex = column;
        }
      });

      // Store the column index with the minimum index point for the current row in the result object
      result[key] = minColumnIndex;
    }

    return result;
  }
  function suggestValue(suggestedWordTemp1, keySubsets, valueSet, placeholder) {
    const values = Object.entries(suggestedWordTemp1)
      .sort(([rowIndex1, columnIndex1], [rowIndex2, columnIndex2]) => {
        // Sort by rowIndex if "and" is present in placeholder
        if (placeholder.includes("and")) {
          return rowIndex1 - rowIndex2;
        }
        // Sort by keywords[rowIndex] if "or" or comma is present in placeholder
        else if (placeholder.includes("or") || placeholder.includes(",")) {
          return keySubsets[columnIndex1][0].localeCompare(
            keySubsets[columnIndex2][0]
          );
        }
        // Otherwise, no sorting required
        else {
          return 0;
        }
      })
      .map(([rowIndex, columnIndex]) => valueSet[columnIndex]);

    // If placeholder contains "or", return a single value from possible values
    if (placeholder.includes("or")) {
      return values[0]; // Return the first value
    }
    // If placeholder contains "and", return all values separated by a comma
    else if (placeholder.includes("and")) {
      return values.join(", ");
    }
    // If neither "or" nor "and" is present, return all values separated by a comma
    else {
      return values.join(", ");
    }
  }

  function placeHolderCheck(keys, placeholder, input) {
    //KeyCleaning
    const keySubsets = [];
    const valueSet = [];
    for (const key in keys) {
      const temp = keyCleaning(key);
      valueSet.push(keys[key]);
      keySubsets.push(temp);
    }

    //Differentiate words with multiple meanings
    const keyWords = [];
    keySubsets.forEach((subset) => {
      keyWords.push(splitIntoWords(subset));
    });

    //placeHolderCleaning
    const placeholderSubsets = keyCleaning(placeholder);
    //Differentiate words with multiple meanings
    const placeholderWords = splitIntoWords(placeholderSubsets);

    // const lengthPoints = {};
    // // return possible words
    const lengthPoints = [];
    keyWords.forEach((keyWord) => {
      lengthPoints.push(caclulateLengthPoints(keyWord[0], placeholderWords));
    });
    const indexPoints = [];
    keyWords.forEach((keyWord) => {
      indexPoints.push(calculateIndexPoints(keyWord[0], placeholderWords));
    });
    const suggestedWordTemp = findHighestIndexPoints(lengthPoints);
    const suggestedWordTemp1 = findMinimumIndexPoints(
      indexPoints,
      suggestedWordTemp
    );
    const suggestedResult = suggestValue(
      suggestedWordTemp1,
      keySubsets,
      valueSet,
      placeholder
    );
    if (suggestedResult) {
      input.value = suggestedResult;
      triggerTypingEvent(input);
    }
    return;

    // const indexPoints = caclulateIndexPoints(keyWords, placeholderWords);
  }

  if ("suggestions" in message) {
    inputFields.forEach(function (input) {
      input.setAttribute("autocomplete", "off");
      input.addEventListener("input", function () {
        var searchKey = input.value.toLowerCase();
        var temp = [];

        // Find the suggestions that match the current value
        var keys = message.suggestions;
        for (const subKey in keys) {
          if (String(keys[subKey]).toLowerCase().includes(searchKey)) {
            temp.push(keys[subKey]);
          }
        }

        // Remove previously appended dropdown (if any)
        var prevDropdown = input.parentNode.querySelector(
          ".suggestion-dropdown"
        );
        if (prevDropdown) {
          prevDropdown.remove();
        }

        // Display the suggestions as a dropdown
        var dropdown = document.createElement("div");
        dropdown.classList.add("suggestion-dropdown");

        dropdown.style.position = "absolute";
        dropdown.style.top = input.offsetTop + input.offsetHeight + 20 + "px";
        dropdown.style.left = input.offsetLeft + "px";

        temp.forEach(function (suggestion) {
          var suggestionItem = document.createElement("div");
          suggestionItem.classList.add("suggestion-item");
          suggestionItem.textContent = suggestion;
          dropdown.appendChild(suggestionItem);

          suggestionItem.addEventListener("click", function () {
            input.value = suggestion;
            dropdown.parentNode.removeChild(dropdown);
            triggerTypingEvent(input); // Trigger typing event
          });
        });
        input.parentNode.appendChild(dropdown);
      });

      input.addEventListener("keyup", function (event) {
        event.preventDefault();
        var dropdown = input.parentNode.querySelector(".suggestion-dropdown");
        if (dropdown) {
          var suggestionItems = dropdown.querySelectorAll(".suggestion-item");
          if (event.keyCode === 40) {
            // down arrow
            event.preventDefault();
            if (
              dropdownIndex >= 0 &&
              dropdownIndex < suggestionItems.length &&
              suggestionItems[dropdownIndex].classList.contains("selected")
            ) {
              suggestionItems[dropdownIndex].classList.remove("selected");
            }
            dropdownIndex++;
            if (dropdownIndex < suggestionItems.length) {
              suggestionItems[dropdownIndex].classList.add("selected");
              input.value = suggestionItems[dropdownIndex].textContent;
            } else {
              dropdownIndex = 0;
              suggestionItems[dropdownIndex].classList.add("selected");
              input.value = suggestionItems[dropdownIndex].textContent;
            }
          } else if (event.keyCode === 38) {
            // up arrow
            event.preventDefault();
            if (
              dropdownIndex >= 0 &&
              dropdownIndex < suggestionItems.length &&
              suggestionItems[dropdownIndex].classList.contains("selected")
            ) {
              suggestionItems[dropdownIndex].classList.remove("selected");
            }
            dropdownIndex--;
            if (dropdownIndex >= 0) {
              suggestionItems[dropdownIndex].classList.add("selected");
              input.value = suggestionItems[dropdownIndex].textContent;
            } else {
              dropdownIndex = suggestionItems.length - 1;
              suggestionItems[dropdownIndex].classList.add("selected");
              input.value = suggestionItems[dropdownIndex].textContent;
            }
          } else if (event.keyCode === 13) {
            // enter keys
            event.stopPropagation();
            event.preventDefault();
            if (dropdownIndex >= 0) {
              input.value = suggestionItems[dropdownIndex].textContent;
              dropdown.parentNode.removeChild(dropdown);
              triggerTypingEvent(input); // Trigger typing event
            }
          }
        }
      });
    });
    // Hide the suggestion dropdown when the user clicks outside of it
    document.addEventListener("click", function (event) {
      var dropdowns = document.querySelectorAll(".suggestion-dropdown");
      dropdowns.forEach(function (dropdown) {
        if (!dropdown.contains(event.target)) {
          dropdown.parentNode.removeChild(dropdown);
        }
      });
    });
  } else if ("quickfill" in message) {
    var keys = message.quickfill;
    inputFields.forEach(function (input) {
      var inputName = input.getAttribute("name");
      var placeholder =
        input.getAttribute("placeholder") || input.getAttribute("aria-label");
      var label =
        document.querySelector('label[for="' + input.name + '"]') ||
        document.querySelector('label[for="' + input.id + '"]');
      var lowerLabelText = label?.textContent.trim().toLowerCase();

      // Check if the placeholder attribute is present
      if (placeholder && placeholder.length > 4) {
        placeHolderCheck(keys, placeholder, input);
      } else if (lowerLabelText) {
        placeHolderCheck(keys, lowerLabelText, input);
      } else if (inputName) {
        placeHolderCheck(keys, inputName, input);
      }
    });
  } else if ("showPassword" in message) {
    var keys = message.showPassword;
    inputFields.forEach(function (input) {
      var inputType = input.getAttribute("type");
      if (inputType === "password") {
        input.type = "text";
      }
    });
  } else {
    inputFields.forEach(function (input) {
      input.setAttribute("autocomplete", "on");
      input.removeEventListener("input", input.inputHandler);
      input.removeEventListener("keyup", input.keyupHandler);
      var dropdowns = document.querySelectorAll(".suggestion-dropdown");

      dropdowns.forEach(function (dropdown) {
        dropdown.style.display = "none";
        dropdown.remove();
      });
    });
  }
});

// ------------------FUTURE SCOPE--------------------------------------//

// function displayOptions(input, possibilities) {
//   var existingDropdown = document.querySelector(".suggestion-list");
//   // Create a dropdown container
//   var dropdown = document.createElement("div");
//   dropdown.classList.add("suggestion-list");

//   dropdown.style.position = "absolute";
//   dropdown.style.top = input.offsetTop + "px";
//   dropdown.style.left = input.offsetLeft + "px";
//   dropdown.style.display = "flex";
//   possibilities.forEach(function (suggestion) {
//     var suggestionItem = document.createElement("div");
//     suggestionItem.classList.add("suggestion-item-list");
//     suggestionItem.textContent = suggestion;
//     dropdown.appendChild(suggestionItem);

//     suggestionItem.addEventListener("click", function () {
//       input.value = suggestion;
//       input.parentNode.removeChild(dropdown);
//       triggerTypingEvent(input); // Trigger typing event
//     });
//   });
//   input.parentNode.appendChild(dropdown);
// }

})();

/******/ })()
;
//# sourceMappingURL=content.js.map