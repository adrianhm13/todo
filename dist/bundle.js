/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Class"] = factory();
	else
		root["Class"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n*, ::after, ::before {\\n    box-sizing: border-box;\\n}\\nhtml, body {\\n    width: 100vw;\\n    min-height: 100vh;\\n    margin: 0px;\\n    padding: 0px;\\n}\\n.content{\\n    display: flex;\\n    flex-direction: row;\\n    min-height: 100vh;\\n    min-width: 100vh;\\n}\\n.left-nav{\\n    display: flex;\\n    flex-direction: column;\\n    width: 15%;\\n    height: 100vh;\\n    background-color: #232B32;\\n    justify-content: space-between;\\n    align-items: stretch;\\n    z-index: 1;\\n    box-shadow: 2px 0 30px -4px rgba(10, 10, 10, 0.3);\\n}\\n.left-nav h3{\\n    font-family: 'Roboto', sans-serif;\\n    font-weight: 500;\\n    font-size: 25px;\\n    cursor: default;\\n    margin: 10px;\\n    color: white;\\n}\\n.left-nav .input-text{\\n    color: black;\\n}\\n  \\n.h-divider-shadow {\\n    width: 100%;\\n    overflow: hidden;\\n    height: 20px;\\n  }\\n  \\n.h-divider-shadow:after {\\n    content: '';\\n    display: block;\\n    margin: -25px auto 0;\\n    width: 100%;\\n    height: 25px;\\n    border-radius: 125px/12px;\\n    box-shadow: 0 0 3px rgb(99, 99, 99);\\n  }\\n.task-calendar{\\n    display: flex;\\n}\\n.projects-container{\\n    display: flex;\\n    flex-grow: 1;\\n    flex-direction:column;\\n    justify-content: center;\\n    align-items: center;\\n    width: 100%;\\n    max-height: 50%;\\n}\\n.add-projects{\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    align-items: center;\\n    gap: 25px;\\n    margin-top: 10px;\\n    margin-bottom: 10px;\\n}\\n.add-projects .input-text{\\n    width: 70%;\\n    padding: 10px;\\n    font-family: 'Roboto', sans-serif;\\n    font-size: 13px;\\n    color:rgb(151, 151, 151);\\n    resize: none;\\n    border: 1px solid rgb(209, 209, 209)\\n}\\n.add-projects .input-text:hover{\\n    transition: border-color 0.3s ease-in-out;\\n    border: 1px solid rgb(136, 136, 136);\\n}\\n.add-projects .input-text:focus{\\n    outline: none;\\n    border: 1px solid rgb(34, 34, 34);\\n}\\n.left-nav .projects-container .add-projects span{\\n    cursor: pointer;\\n    font-size: 30px;\\n    color: #f3722c;\\n    transition-duration: 0.8s;\\n}\\n.left-nav .projects-container .add-projects span:hover{\\n    transform: rotate(180deg);\\n    -webkit-transform: rotate(180deg);\\n    color: #ac5221;\\n}\\n.list-projects{\\n    margin-top: 20px;\\n    height: 70%;\\n    width: 100%;\\n    overflow-y:auto;\\n}\\n.project{\\n    padding-right: 15px;\\n    padding-left: 15px;\\n    height: 50px;\\n    width: 100%;\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-between;\\n    align-items: center;\\n    transition: 0.5s;\\n}\\n.project:hover{\\n    background-color: #e9ecef;\\n    cursor: pointer;\\n}\\n\\n.project h4{\\n    font-size: 15px;\\n    font-family: 'Roboto', sans-serif;\\n    font-weight: 300;\\n\\n    margin: 0;\\n    color: white;\\n    transition: 0.5s;\\n}\\n.project:hover h4{\\n    color: black;\\n}\\n.project .buttons-project{\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    align-items: center;\\n    gap: 10px;\\n}\\n.circle-task {\\n    height: 25px;\\n    width: 25px;\\n    background-color: #bbb;\\n    border-radius: 50%;\\n    display: inline-block;\\n}\\n.circle-task p {\\n    color: white;\\n    font-family: 'Roboto', sans-serif;\\n    font-size: 12px;\\n    font-weight: 500;\\n    text-align: center;\\n    line-height: 25px;\\n    margin: 0;\\n}\\n.project .delete-project{\\n    cursor: pointer;\\n    height: 20px;\\n    line-height: 25px;\\n    color: #c9184a;\\n    transition-duration: 0.2s;\\n}\\n.project .delete-project:hover{\\n    color: #a1153d;\\n    transform: scale(1.2);\\n    -webkit-transform: scale(1.2);\\n}\\n.project .add-task{\\n    cursor: pointer;\\n    height: 20px;\\n    line-height: 25px;\\n    color: #1ec918;\\n    transition-duration: 0.2s;\\n}\\n.project .add-task:hover{\\n    color: #1b740f;\\n    transform: scale(1.2);\\n    -webkit-transform: scale(1.2);\\n}\\n.project .edit-project-btn{\\n    cursor: pointer;\\n    height: 20px;\\n    line-height: 25px;\\n    color: #575757;\\n    transition-duration: 0.2s;\\n}\\n.project .edit-project-btn:hover{\\n    color: #646464;\\n    transform: scale(1.2);\\n    -webkit-transform: scale(1.2);\\n}\\n.right-content {\\n    width: 100%;\\n    height: 100vh;\\n    background-color: #495867;\\n}\\n.task-content{\\n    width: 100%;\\n    height: 100vh;\\n    display: flex;\\n    flex-direction: column;\\n}\\n.task-title {\\n    margin-top: 50px;\\n    width: 100%;\\n    display: flex;\\n    justify-content: center;\\n    gap: 25px;\\n}\\n.task-title h2 {\\n    font-family: 'Roboto', sans-serif;\\n    font-size: 30px;\\n    font-weight: 500;\\n    color: whitesmoke;\\n}\\n.task-title span {\\n\\n}\\n.rounded{\\n    border-style: none;\\n    width: 100%;\\n    border-top: 1px solid rgb(235, 235, 235);\\n}\\n /* The Modal (background) */\\n .modal-edit-project-name {\\n    transition: opacity 0.5s, visibility 0.5s;\\n    opacity: 0;\\n    visibility: hidden;\\n    position: fixed; /* Stay in place */\\n    z-index: 2; /* Sit on top */\\n    left: 0;\\n    top: 0;\\n    width: 100%; /* Full width */\\n    height: 100%; /* Full height */\\n    overflow: auto; /* Enable scroll if needed */\\n    background-color: rgb(0,0,0); /* Fallback color */\\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\\n  }\\n  \\n  /* Modal Content/Box */\\n  .modal-edit-project-name-content {\\n    background-color: #3d3d3d;\\n    margin: 25% auto; /* 15% from the top and centered */\\n    padding: 20px;\\n    border: 1px solid #888;\\n    width: 25%;\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n    justify-content: center;\\n    gap: 25px;\\n  }\\n  \\n  /* The Close Button */\\n  .close {\\n    color: #aaa;\\n    font-size: 28px;\\n    font-weight: bold;\\n    transition: 0.3s;\\n  }\\n\\n.close:hover,\\n.close:focus {\\n    color: rgb(32, 32, 32);\\n    text-decoration: none;\\n    cursor: pointer;\\n  } \\n/*Submit button for renaming project*/\\n.submit-rename-project{\\n    color: rgb(29, 158, 29);\\n    font-size: 25px;\\n    transition: 0.3s;\\n} \\n.submit-rename-project:hover,\\n.submit-rename-project:focus {\\n    color:rgb(24, 131, 24);\\n    cursor: pointer;\\n}\\n/*Input for rename project */\\n.modal-edit-project-name-content input{\\n    width: 70%;\\n    padding: 10px;\\n    font-family: 'Roboto', sans-serif;\\n    font-size: 13px;\\n    color:rgb(151, 151, 151);\\n    resize: none;\\n    border: 1px solid rgb(209, 209, 209)\\n}\\n.modal-edit-project-name-content input:hover{\\n    transition: border-color 0.3s ease-in-out;\\n    border: 1px solid rgb(136, 136, 136);\\n}\\n.modal-edit-project-name-content input:focus{\\n    outline: none;\\n    border: 1px solid rgb(34, 34, 34);\\n}\\n\\n/*List tasks classes (being populated) */\\n\\n.grid-list-tasks{\\n    display: grid;\\n    flex-grow: 1;\\n    padding: 25px;\\n    overflow-y: auto;\\n    grid-template-columns: repeat(6, minmax(calc(16% - 1rem), 1fr));\\n    gap: 1em;\\n}\\n.grid-list-tasks-child{\\n    background-color: rgba(0, 0, 0, 0.212);\\n    height: 250px;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: flex-start;\\n    align-items: center;\\n    padding: 12px;\\n    gap: 12px;\\n}\\n.grid-list-tasks-content{\\n    flex-grow: 1;\\n}\\n.grid-list-tasks-child h3{\\n    font-family: 'Roboto', sans-serif;\\n    color: whitesmoke;\\n    font-weight: 500;\\n    font-size: 22px;\\n    padding: 0;\\n    margin: 0;\\n}\\n.grid-list-tasks-child input,textarea{\\n    width: 95%;\\n    padding: 10px;\\n    font-family: 'Roboto', sans-serif;\\n    font-size: 13px;\\n    color:rgb(151, 151, 151);\\n    resize: none;\\n    border: 1px solid rgb(209, 209, 209)\\n}\\n.grid-list-tasks-child input:hover,textarea:hover{\\n    transition: border-color 0.3s ease-in-out;\\n    border: 1px solid rgb(136, 136, 136);\\n}\\n.grid-list-tasks-child input:focus,textarea:focus{\\n    outline: none;\\n    border: 1px solid rgb(34, 34, 34);\\n}\\n.grid-list-tasks-child span{\\n    margin-top: 10px;\\n    cursor: pointer;\\n    color: whitesmoke;\\n    font-size: 25px;\\n    transition: 0.5s;\\n}\\n.grid-list-tasks-child span:hover{\\n    color: rgb(173, 173, 173);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Class/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://Class/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://Class/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://Class/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Class/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://Class/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://Class/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://Class/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://Class/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://Class/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/create-project.js":
/*!*******************************!*\
  !*** ./src/create-project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _create_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-task.js */ \"./src/create-task.js\");\n/* harmony import */ var _handler_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handler-project.js */ \"./src/handler-project.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render.js */ \"./src/render.js\");\n\n\n\n\nclass Project {\n    constructor(name) {\n        this.projectName = name\n        this.listTasks = [];\n        _handler_project_js__WEBPACK_IMPORTED_MODULE_1__.projectController.addProject(this);\n        console.log(this.infoProject)\n    }\n    createTask(title, description, dueDate, priority, project){\n        event.stopPropagation();\n        console.log(\"ahae\")\n        let task = new _create_task_js__WEBPACK_IMPORTED_MODULE_0__.addTask(title, description, dueDate, priority, project)\n        this.listTasks.push(task);\n    }\n    set changeProjectName(newName){\n        this.projectName = newName;\n        _render_js__WEBPACK_IMPORTED_MODULE_2__.Render.renderProjects();\n    }\n    get nameProject(){\n        return this.projectName;\n    }\n    get infoProject(){\n        console.log(`The project it's: ${this.nameProject}, with the quantity of: ${this.listTasks.length}, tasks`)\n    }\n}\n\n\n\n//# sourceURL=webpack://Class/./src/create-project.js?");

/***/ }),

/***/ "./src/create-task.js":
/*!****************************!*\
  !*** ./src/create-task.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask)\n/* harmony export */ });\n/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub.js */ \"./src/pubsub.js\");\n\n\nclass addTask {\n    constructor(title, description, dueDate, priority){\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n    }\n    get infoTask() {\n        console.log(`${this.title} it's a task with the description: ${this.description} with a due date of: ${this.dueDate}, with a ${this.priority}`)\n    }\n    get infoDescription() {\n        const desc = this.description;\n        return desc;\n    }\n    set changeTitle(newTitle) {\n        this.title = newTitle;\n    }\n    set changeDescription(newDescription) {\n        this.description = newDescription;\n    }\n\n}\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://Class/./src/create-task.js?");

/***/ }),

/***/ "./src/handler-project.js":
/*!********************************!*\
  !*** ./src/handler-project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectController\": () => (/* binding */ projectController)\n/* harmony export */ });\n/* harmony import */ var _create_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-project.js */ \"./src/create-project.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./src/render.js\");\n\n\n\n//Class to handle projects\n\nclass ProjectController {\n    constructor() {\n        this.projectList = []\n    }\n    get infoProjectList(){return this.projectList}\n\n    addProject = (Project) => {\n        console.log(\"Project added to controller\")\n        this.projectList.push(Project)\n        _render_js__WEBPACK_IMPORTED_MODULE_1__.Render.renderProjects();\n        console.log(`\"Array with all the projects: \" + ${JSON.stringify(this.projectList)}`);\n    }\n    removeProject = (id) => {\n        event.stopPropagation();\n        console.log(\"Removing project\");\n        this.projectList.splice(id, 1);\n        _render_js__WEBPACK_IMPORTED_MODULE_1__.Render.renderProjects();\n    }\n}\n\nconst projectController = new ProjectController\n\n\n\n//# sourceURL=webpack://Class/./src/handler-project.js?");

/***/ }),

/***/ "./src/handler-task.js":
/*!*****************************!*\
  !*** ./src/handler-task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TaskController\": () => (/* binding */ TaskController)\n/* harmony export */ });\n/* harmony import */ var _handler_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handler-project */ \"./src/handler-project.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n//Module pattern for handling tasks\n\n\n\n\nclass TaskController {\n    static createTaskTemplate(gridList, i){\n        const divTemplate = document.createElement('div');\n        divTemplate.classList.add('grid-list-tasks-child')\n\n        const inputNameTask = document.createElement('input');\n        inputNameTask.type = \"text\";\n        inputNameTask.value = \"Task's title\";\n        inputNameTask.onclick = function () {this.select()};\n\n        const inputDescriptionTask = document.createElement('textarea');\n        inputDescriptionTask.value = \"Write the task's description\";\n        inputDescriptionTask.onclick = function () {this.select()};\n\n        const inputDate = document.createElement('input');\n        inputDate.type = \"date\";\n        inputDate.valueAsDate = new Date();\n\n        const submitInfo = document.createElement('span');\n        submitInfo.setAttribute('class', \"fas fa-plus\");\n        submitInfo.addEventListener('click', () => {this.getInfoInputs(inputNameTask, inputDescriptionTask, i)})\n\n        gridList.appendChild(divTemplate);\n        divTemplate.appendChild(inputNameTask);\n        divTemplate.appendChild(inputDescriptionTask);\n        divTemplate.appendChild(inputDate);\n        divTemplate.appendChild(submitInfo);\n    }\n    static getInfoInputs(inputNameTask, inputDescriptionTask, i){\n        const taskTitle = inputNameTask.value;\n        const descriptionTask = inputDescriptionTask.value;\n        console.log(`Task's title: ${taskTitle}, description task: ${descriptionTask}`)\n        _handler_project__WEBPACK_IMPORTED_MODULE_0__.projectController.projectList[i].createTask(taskTitle, descriptionTask);\n        _render__WEBPACK_IMPORTED_MODULE_1__.Render.renderProjects();\n        _render__WEBPACK_IMPORTED_MODULE_1__.Render.renderTasks(i);\n    }\n    static taskContentTemplate(i, j){\n        const gridList = document.getElementById('show-list-tasks');\n\n        const divTemplate = document.createElement('div');\n        divTemplate.classList.add('grid-list-tasks-child');\n        divTemplate.id = j\n\n        const titleTask = document.createElement('h3');\n        titleTask.textContent = _handler_project__WEBPACK_IMPORTED_MODULE_0__.projectController.projectList[i].listTasks[j].title;\n        titleTask.classList.add('grid-list-tasks-content')\n\n        const descriptionTask = document.createElement('p');\n        descriptionTask.textContent = _handler_project__WEBPACK_IMPORTED_MODULE_0__.projectController.projectList[i].listTasks[j].description;\n        descriptionTask.classList.add('grid-list-tasks-content');\n        gridList.appendChild(divTemplate);\n        divTemplate.appendChild(titleTask);\n        divTemplate.appendChild(descriptionTask);\n    }\n}\n\n\n\n//# sourceURL=webpack://Class/./src/handler-task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _create_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-task.js */ \"./src/create-task.js\");\n/* harmony import */ var _create_project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-project.js */ \"./src/create-project.js\");\n/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pubsub.js */ \"./src/pubsub.js\");\n/* harmony import */ var _handler_task_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handler-task.js */ \"./src/handler-task.js\");\n/* harmony import */ var _handler_project_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handler-project.js */ \"./src/handler-project.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./render.js */ \"./src/render.js\");\n\n\n\n\n\n\n\n\n\nwindow.addTask = _create_task_js__WEBPACK_IMPORTED_MODULE_1__.addTask;\nwindow.Project = _create_project_js__WEBPACK_IMPORTED_MODULE_2__.Project;\nwindow.projectController = _handler_project_js__WEBPACK_IMPORTED_MODULE_5__.projectController;\nwindow.events = _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.events;\nwindow.Render = _render_js__WEBPACK_IMPORTED_MODULE_6__.Render;\n\nlet task1 = new _create_task_js__WEBPACK_IMPORTED_MODULE_1__.addTask('Arreglar ropa', 'Poner ropa en el armario y colocarla', 'Hoy', 'Alta', 'Cosas del hogar')\n\n_render_js__WEBPACK_IMPORTED_MODULE_6__.Render.getButtons();\ntask1.infoTask;\n\n//# sourceURL=webpack://Class/./src/index.js?");

/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"events\": () => (/* binding */ events)\n/* harmony export */ });\nvar events = {\n    events: {},\n    on: function (eventName, fn) {\n      this.events[eventName] = this.events[eventName] || [];\n      this.events[eventName].push(fn);\n    },\n    off: function(eventName, fn) {\n      if (this.events[eventName]) {\n        for (var i = 0; i < this.events[eventName].length; i++) {\n          if (this.events[eventName][i] === fn) {\n            this.events[eventName].splice(i, 1);\n            break;\n          }\n        };\n      }\n    },\n    emit: function (eventName, data) {\n      if (this.events[eventName]) {\n        this.events[eventName].forEach(function(fn) {\n          fn(data);\n        });\n      }\n    }\n  };\n\n  \n\n//# sourceURL=webpack://Class/./src/pubsub.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Render\": () => (/* binding */ Render)\n/* harmony export */ });\n/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-project */ \"./src/create-project.js\");\n/* harmony import */ var _handler_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handler-project */ \"./src/handler-project.js\");\n/* harmony import */ var _handler_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handler-task */ \"./src/handler-task.js\");\n\n\n\n\nclass Render {\n    static renderProjects() {\n\n        const projectList = this.projectList\n        console.log(this.projectList);\n        this.clearProjectsDOM()\n\n        for (let i = 0; i < projectList.length; i++) {\n            this.populateListProject(i);\n        }\n    }\n    static renderTasks(i){\n        this.populateSingleProjectContent(i);\n    }\n    static clearProjectsDOM() {\n        const titleProject = document.getElementById('title-project-task');\n        titleProject.textContent = \"Keep your tasks organized!\"\n        this.projectsDOM.innerHTML = \"\";\n    }\n    static get projectsDOM() {\n        const divProjects = document.getElementById('listProjects')\n        return divProjects;\n    }\n    static get projectList() {\n        const projectList = _handler_project__WEBPACK_IMPORTED_MODULE_1__.projectController.infoProjectList\n        return projectList\n    }\n    static getButtons() {\n        console.log('Getting buttons and inputs');\n\n        const btnAddProject = document.getElementById('addProject');\n        btnAddProject.addEventListener('click', this.getInfoNewProject)\n    }\n    static getInfoNewProject() {\n        const inputNameProject = document.getElementById('inputNameProject');\n        const nameProject = inputNameProject.value\n        inputNameProject.value = \"New project's name\";\n\n        if (Render.checkDuplicateNameProject(nameProject) == true || nameProject == false) {\n            alert(\"This name it's being used, or it's empty\");\n        } else {\n            const project = new _create_project__WEBPACK_IMPORTED_MODULE_0__.Project(nameProject);\n        }\n    }\n    static checkDuplicateNameProject(nameProject) {\n        const projectList = _handler_project__WEBPACK_IMPORTED_MODULE_1__.projectController.infoProjectList\n        let test = projectList.some(element => element.projectName == nameProject)\n        return test;\n    }\n    static populateListProject(i) {\n        const projectDiv = document.createElement('div');\n        projectDiv.id = i;\n        projectDiv.classList.add('project')\n\n        this.projectsDOM.appendChild(projectDiv);\n\n        projectDiv.addEventListener('click', () => { this.populateSingleProjectContent(i) })\n\n        this.populateSingleProjectNav(projectDiv, i);\n    }\n    static populateSingleProjectNav(projectDiv, i) {\n        const projectList = this.projectList\n\n        const titleProject = document.createElement('h4');\n        titleProject.innerHTML = projectList[i].projectName;\n\n        const divButtons = document.createElement('div');\n        divButtons.classList.add('buttons-project');\n\n        const circleTasks = document.createElement('div');\n        circleTasks.classList.add('circle-task')\n\n        const numberCircleTasks = document.createElement('p');\n        numberCircleTasks.textContent = projectList[i].listTasks.length\n\n        const deleteProject = document.createElement('span')\n        deleteProject.setAttribute('class', 'fas fa-trash')\n        deleteProject.addEventListener('click', () => { _handler_project__WEBPACK_IMPORTED_MODULE_1__.projectController.removeProject(i) })\n        deleteProject.classList.add('delete-project')\n\n        const addTask = document.createElement('span');\n        addTask.addEventListener('click', () => { this.addTaskClicked(i) })\n        addTask.setAttribute('class', \"fas fa-plus\");\n        addTask.classList.add('add-task')\n\n        const editProjectBtn = document.createElement('span');\n        editProjectBtn.id = i\n        editProjectBtn.addEventListener('click', () => {this.createModalEditProjectName(editProjectBtn, i)})\n        editProjectBtn.setAttribute('class', \"fas fa-pen\")\n        editProjectBtn.classList.add('edit-project-btn');\n\n\n\n        projectDiv.appendChild(titleProject);\n        projectDiv.appendChild(divButtons);\n        divButtons.appendChild(circleTasks);\n        circleTasks.appendChild(numberCircleTasks);\n        divButtons.appendChild(addTask)\n        divButtons.appendChild(editProjectBtn);\n        divButtons.appendChild(deleteProject);\n    }\n    static addTaskClicked(i) {\n        event.stopPropagation();\n        this.populateSingleProjectContent(i)\n    }\n    static populateSingleProjectContent(i) {\n        const divMainListTasks = document.getElementById('populate-list-task');\n\n        const titleProject = document.getElementById('title-project-task');\n        titleProject.textContent = this.projectList[i].nameProject\n\n        const checkShowListTasks = document.getElementById('show-list-tasks'); //Look if there it's an instance, if so, delete and get ready to populate again\n        if(checkShowListTasks != undefined){\n            checkShowListTasks.remove();\n        }\n        const showListTasks = document.createElement('div');\n        showListTasks.id = \"show-list-tasks\";\n        showListTasks.classList.add('grid-list-tasks');\n\n        divMainListTasks.appendChild(showListTasks);\n        _handler_task__WEBPACK_IMPORTED_MODULE_2__.TaskController.createTaskTemplate(showListTasks, i)\n\n        const tasksProject = _handler_project__WEBPACK_IMPORTED_MODULE_1__.projectController.projectList[i].listTasks\n        for (let j = 0; j < tasksProject.length; j++) {\n            _handler_task__WEBPACK_IMPORTED_MODULE_2__.TaskController.taskContentTemplate(i, j);\n        }\n    }\n    static showPopupEditProjecName(i) {\n        this.createModalEditProjectName()\n    }\n    static createModalEditProjectName(editProjectBtn, i) {\n\n        // const content = document.getElementById('content')\n        // const modal = document.createElement('div');\n        // modal.id = \"modal-rename-project\"\n        // modal.classList.add('modal-edit-project-name');\n\n        // const modalContent = document.createElement('div')\n        // modalContent.classList.add('modal-edit-project-name-content');\n\n\n        // const closeModal = document.createElement('span');\n        // closeModal.classList.add('close');\n        // closeModal.innerHTML = \"&times;\"\n\n        // //Input for renaming the project\n        // const inputRenameProject = document.createElement('input');\n        // inputRenameProject.type = \"text\";\n        // inputRenameProject.value = projectController.projectList[i].projectName;\n        // inputRenameProject.onclick = function() {this.select()};\n\n        // const submitRename = document.createElement('span');\n        // submitRename.setAttribute('class', 'fas fa-check');\n        // submitRename.classList.add('submit-rename-project');\n\n        // content.appendChild(modal);\n        // modal.appendChild(modalContent);\n        // modalContent.appendChild(closeModal);\n        // modalContent.appendChild(inputRenameProject);\n        // modalContent.appendChild(submitRename);\n        const modal = document.getElementById('modal-rename-project')\n        event.stopPropagation();\n        modal.style.visibility = \"visible\";\n        modal.style.opacity = \"1\";\n\n        const closeModal = document.getElementById('close-modal')\n        const inputRenameProject = document.getElementById('input-rename-project');\n        const submitRename = document.getElementById('submit-rename-project')\n\n        inputRenameProject.value = _handler_project__WEBPACK_IMPORTED_MODULE_1__.projectController.projectList[i].projectName;\n        // When the user clicks on the button, open the modal\n        editProjectBtn.onclick = function () {\n\n        }\n\n        // When the user clicks on <span> (x), close the modal\n        closeModal.onclick = function () {\n            modal.style.visibility = \"hidden\";\n            modal.style.opacity = \"0\";\n        }\n\n        //When the user clicks submit span, close the modal and execute the renaming\n        submitRename.onclick = function () {\n            let nameProject = inputRenameProject.value;\n            if (Render.checkDuplicateNameProject(nameProject) == true || nameProject == false) {\n                alert(\"This name it's being used, or it's empty\");\n            } else {\n                modal.style.visibility = \"hidden\";\n                modal.style.opacity = \"0\";\n                _handler_project__WEBPACK_IMPORTED_MODULE_1__.projectController.projectList[i].changeProjectName = nameProject;\n            }\n        }\n        //When user click input, autoselect text\n        inputRenameProject.onclick = function () {\n            this.select();\n        }\n        // When the user clicks anywhere outside of the modal, close it\n        window.onclick = function (event) {\n            if (event.target == modal) {\n                modal.style.visibility = \"hidden\";\n                modal.style.opacity = \"0\";\n            }\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack://Class/./src/render.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});