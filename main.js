/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/component/App.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/component/App.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".component-app {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  -ms-flex-wrap: wrap;\\n      flex-wrap: wrap;\\n  height: 100%;\\n}\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/component/App.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/component/Button.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/component/Button.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".component-button {\\n  display: -webkit-inline-box;\\n  display: -ms-inline-flexbox;\\n  display: inline-flex;\\n  width: 25%;\\n  -webkit-box-flex: 1;\\n      -ms-flex: 1 0 auto;\\n          flex: 1 0 auto;\\n}\\n\\n.component-button.wide {\\n  width: 50%;\\n}\\n\\n.component-button button {\\n  background-color: #e0e0e0;\\n  border: 0;\\n  font-size: 1.5rem;\\n  margin: 0 1px 0 0;\\n  -webkit-box-flex: 1;\\n      -ms-flex: 1 0 auto;\\n          flex: 1 0 auto;\\n  padding: 0;\\n}\\n\\n.component-button:last-child button {\\n  margin-right: 0;\\n}\\n\\n.component-button.orange button {\\n  background-color: #f5923e;\\n  color: white;\\n}\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/component/Button.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/component/ButtonPanel.css":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/component/ButtonPanel.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".component-button-panel {\\n  background-color: #858694;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: horizontal;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: row;\\n          flex-direction: row;\\n  -ms-flex-wrap: wrap;\\n      flex-wrap: wrap;\\n  -webkit-box-flex: 1;\\n      -ms-flex: 1 0 auto;\\n          flex: 1 0 auto;\\n}\\n\\n.component-button-panel > div {\\n  width: 100%;\\n  margin-bottom: 1px;\\n  -webkit-box-flex: 1;\\n      -ms-flex: 1 0 auto;\\n          flex: 1 0 auto;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n}\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/component/ButtonPanel.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/component/Display.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/component/Display.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".component-display {\\n  background-color: #858694;\\n  color: white;\\n  text-align: right;\\n  font-weight: 200;\\n  -webkit-box-flex: 0;\\n      -ms-flex: 0 0 auto;\\n          flex: 0 0 auto;\\n  width: 100%;\\n}\\n\\n.component-display > div {\\n  font-size: 2.5rem;\\n  padding: 0.2rem 0.7rem 0.1rem 0.5rem;\\n}\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/component/Display.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/index.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/index.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"html {\\n  height: 100%;\\n  font-size: 10px;\\n}\\n\\nbody {\\n  background-color: black;\\n  margin: 0;\\n  padding: 0;\\n  font-family: sans-serif;\\n  height: 100%;\\n}\\n\\n#root {\\n  height: 100%;\\n}\\n\\nbody .github-fork-ribbon:before {\\n  background-color: #333;\\n}\\n\\n@media screen and (max-width: 400px) {\\n  .github-fork-ribbon {\\n    display: none;\\n  }\\n}\\n\\n@media (min-width: 400px) and (min-height: 400px) {\\n  html {\\n    font-size: 20px;\\n  }\\n}\\n\\n@media (min-width: 500px) and (min-height: 500px) {\\n  html {\\n    font-size: 30px;\\n  }\\n}\\n\\n@media (min-width: 600px) and (min-height: 600px) {\\n  html {\\n    font-size: 40px;\\n  }\\n}\\n\\n@media (min-width: 800px) and (min-height: 800px) {\\n  html {\\n    font-size: 50px;\\n  }\\n}\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/index.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src");

/***/ }),

/***/ "./src/component/App.css":
/*!*******************************!*\
  !*** ./src/component/App.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src!./App.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/component/App.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/component/App.css?");

/***/ }),

/***/ "./src/component/App.js":
/*!******************************!*\
  !*** ./src/component/App.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Display */ \"./src/component/Display.js\");\n/* harmony import */ var _ButtonPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ButtonPanel */ \"./src/component/ButtonPanel.js\");\n/* harmony import */ var _logic_calculate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../logic/calculate */ \"./src/logic/calculate.js\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./App.css */ \"./src/component/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(App, _React$Component);\n\n  function App() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(App)).call.apply(_getPrototypeOf2, [this].concat(args)));\n    _this.state = {\n      total: null,\n      next: null,\n      operation: null\n    };\n\n    _this.handleClick = function (buttonName) {\n      _this.setState(Object(_logic_calculate__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_this.state, buttonName));\n    };\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"component-app\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Display__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        value: this.state.next || this.state.total || \"0\"\n      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ButtonPanel__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        clickHandler: this.handleClick\n      }));\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(App, \"App\", \"/Users/hyman/test/calculator/src/component/App.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/component/App.js?");

/***/ }),

/***/ "./src/component/Button.css":
/*!**********************************!*\
  !*** ./src/component/Button.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src!./Button.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/component/Button.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/component/Button.css?");

/***/ }),

/***/ "./src/component/Button.js":
/*!*********************************!*\
  !*** ./src/component/Button.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Button; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Button.css */ \"./src/component/Button.css\");\n/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Button_css__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\nvar Button =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Button, _React$Component);\n\n  function Button() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Button);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _this.handleClick = function () {\n      _this.props.clickHandler(_this.props.name);\n    };\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Button, [{\n    key: \"render\",\n    value: function render() {\n      var className = [\"component-button\", this.props.orange ? \"orange\" : \"\", this.props.wide ? \"wide\" : \"\"];\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: className.join(\" \").trim()\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"button\", {\n        onClick: this.handleClick\n      }, this.props.name));\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return Button;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\nButton.propTypes = {\n  name: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,\n  orange: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,\n  wide: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,\n  clickHandler: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func\n};\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Button, \"Button\", \"/Users/hyman/test/calculator/src/component/Button.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/component/Button.js?");

/***/ }),

/***/ "./src/component/ButtonPanel.css":
/*!***************************************!*\
  !*** ./src/component/ButtonPanel.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src!./ButtonPanel.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/component/ButtonPanel.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/component/ButtonPanel.css?");

/***/ }),

/***/ "./src/component/ButtonPanel.js":
/*!**************************************!*\
  !*** ./src/component/ButtonPanel.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ButtonPanel; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Button */ \"./src/component/Button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _ButtonPanel_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ButtonPanel.css */ \"./src/component/ButtonPanel.css\");\n/* harmony import */ var _ButtonPanel_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ButtonPanel_css__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nvar ButtonPanel =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ButtonPanel, _React$Component);\n\n  function ButtonPanel() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ButtonPanel);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ButtonPanel)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _this.handleClick = function (buttonName) {\n      _this.props.clickHandler(buttonName);\n    };\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ButtonPanel, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n        className: \"component-button-panel\"\n      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        name: \"AC\",\n        clickHandler: this.handleClick\n      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        name: \"+/-\",\n        clickHandler: this.handleClick\n      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        name: \"%\",\n        clickHandler: this.handleClick\n      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        name: \"\\xF7\",\n        clickHandler: this.handleClick,\n        orange: true\n      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        name: \"7\",\n        clickHandler: this.handleClick\n      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        name: \"8\",\n        clickHandler: this.handleClick\n      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        name: \"9\",\n        clickHandler: this.handleClick\n      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        name: \"x\",\n        clickHandler: this.handleClick,\n        orange: true\n      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        name: \"4\",\n        clickHandler: this.handleClick\n      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        name: \"5\",\n        clickHandler: this.handleClick\n      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        name: \"6\",\n        clickHandler: this.handleClick\n      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        name: \"-\",\n        clickHandler: this.handleClick,\n        orange: true\n      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        name: \"1\",\n        clickHandler: this.handleClick\n      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        name: \"2\",\n        clickHandler: this.handleClick\n      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        name: \"3\",\n        clickHandler: this.handleClick\n      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        name: \"+\",\n        clickHandler: this.handleClick,\n        orange: true\n      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        name: \"0\",\n        clickHandler: this.handleClick,\n        wide: true\n      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        name: \".\",\n        clickHandler: this.handleClick\n      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        name: \"=\",\n        clickHandler: this.handleClick,\n        orange: true\n      })));\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return ButtonPanel;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\nButtonPanel.propTypes = {\n  clickHandler: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func\n};\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(ButtonPanel, \"ButtonPanel\", \"/Users/hyman/test/calculator/src/component/ButtonPanel.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/component/ButtonPanel.js?");

/***/ }),

/***/ "./src/component/Display.css":
/*!***********************************!*\
  !*** ./src/component/Display.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src!./Display.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/component/Display.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/component/Display.css?");

/***/ }),

/***/ "./src/component/Display.js":
/*!**********************************!*\
  !*** ./src/component/Display.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Display; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Display_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Display.css */ \"./src/component/Display.css\");\n/* harmony import */ var _Display_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Display_css__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\nvar Display =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Display, _React$Component);\n\n  function Display() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Display);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Display).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Display, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"component-display\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", null, this.props.value));\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return Display;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\nDisplay.propTypes = {\n  value: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string\n};\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Display, \"Display\", \"/Users/hyman/test/calculator/src/component/Display.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/component/Display.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/src!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/index.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/App */ \"./src/component/App.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), document.getElementById(\"app\"));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/logic/calculate.js":
/*!********************************!*\
  !*** ./src/logic/calculate.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return calculate; });\n/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! big.js */ \"./node_modules/big.js/big.js\");\n/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _operate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operate */ \"./src/logic/operate.js\");\n/* harmony import */ var _isNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNumber */ \"./src/logic/isNumber.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n/**\n * Given a button name and a calculator data object, return an updated\n * calculator data object.\n *\n * Calculator data object contains:\n *   total:String      the running total\n *   next:String       the next number to be operated on with the total\n *   operation:String  +, -, etc.\n */\n\nfunction calculate(obj, buttonName) {\n  if (buttonName === \"AC\") {\n    return {\n      total: null,\n      next: null,\n      operation: null\n    };\n  }\n\n  if (Object(_isNumber__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(buttonName)) {\n    if (buttonName === \"0\" && obj.next === \"0\") {\n      return {};\n    } // If there is an operation, update next\n\n\n    if (obj.operation) {\n      if (obj.next) {\n        return {\n          next: obj.next + buttonName\n        };\n      }\n\n      return {\n        next: buttonName\n      };\n    } // If there is no operation, update next and clear the value\n\n\n    if (obj.next) {\n      var next = obj.next === \"0\" ? buttonName : obj.next + buttonName;\n      return {\n        next: next,\n        total: null\n      };\n    }\n\n    return {\n      next: buttonName,\n      total: null\n    };\n  }\n\n  if (buttonName === \"%\") {\n    if (obj.operation && obj.next) {\n      var result = Object(_operate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj.total, obj.next, obj.operation);\n      return {\n        total: big_js__WEBPACK_IMPORTED_MODULE_0___default()(result).div(big_js__WEBPACK_IMPORTED_MODULE_0___default()(\"100\")).toString(),\n        next: null,\n        operation: null\n      };\n    }\n\n    if (obj.next) {\n      return {\n        next: big_js__WEBPACK_IMPORTED_MODULE_0___default()(obj.next).div(big_js__WEBPACK_IMPORTED_MODULE_0___default()(\"100\")).toString()\n      };\n    }\n\n    return {};\n  }\n\n  if (buttonName === \".\") {\n    if (obj.next) {\n      // ignore a . if the next number already has one\n      if (obj.next.includes(\".\")) {\n        return {};\n      }\n\n      return {\n        next: obj.next + \".\"\n      };\n    }\n\n    return {\n      next: \"0.\"\n    };\n  }\n\n  if (buttonName === \"=\") {\n    if (obj.next && obj.operation) {\n      return {\n        total: Object(_operate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj.total, obj.next, obj.operation),\n        next: null,\n        operation: null\n      };\n    } else {\n      // '=' with no operation, nothing to do\n      return {};\n    }\n  }\n\n  if (buttonName === \"+/-\") {\n    if (obj.next) {\n      return {\n        next: (-1 * parseFloat(obj.next)).toString()\n      };\n    }\n\n    if (obj.total) {\n      return {\n        total: (-1 * parseFloat(obj.total)).toString()\n      };\n    }\n\n    return {};\n  } // Button must be an operation\n  // When the user presses an operation button without having entered\n  // a number first, do nothing.\n  // if (!obj.next && !obj.total) {\n  //   return {};\n  // }\n  // User pressed an operation button and there is an existing operation\n\n\n  if (obj.operation) {\n    return {\n      total: Object(_operate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj.total, obj.next, obj.operation),\n      next: null,\n      operation: buttonName\n    };\n  } // no operation yet, but the user typed one\n  // The user hasn't typed a number yet, just save the operation\n\n\n  if (!obj.next) {\n    return {\n      operation: buttonName\n    };\n  } // save the operation and shift 'next' into 'total'\n\n\n  return {\n    total: obj.next,\n    next: null,\n    operation: buttonName\n  };\n}\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(calculate, \"calculate\", \"/Users/hyman/test/calculator/src/logic/calculate.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/logic/calculate.js?");

/***/ }),

/***/ "./src/logic/isNumber.js":
/*!*******************************!*\
  !*** ./src/logic/isNumber.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return isNumber; });\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nfunction isNumber(item) {\n  return /[0-9]+/.test(item);\n}\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(isNumber, \"isNumber\", \"/Users/hyman/test/calculator/src/logic/isNumber.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/logic/isNumber.js?");

/***/ }),

/***/ "./src/logic/operate.js":
/*!******************************!*\
  !*** ./src/logic/operate.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return operate; });\n/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! big.js */ \"./node_modules/big.js/big.js\");\n/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_0__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\nfunction operate(numberOne, numberTwo, operation) {\n  var one = big_js__WEBPACK_IMPORTED_MODULE_0___default()(numberOne || \"0\");\n  var two = big_js__WEBPACK_IMPORTED_MODULE_0___default()(numberTwo || (operation === \"÷\" || operation === 'x' ? \"1\" : \"0\")); //If dividing or multiplying, then 1 maintains current value in cases of null\n\n  if (operation === \"+\") {\n    return one.plus(two).toString();\n  }\n\n  if (operation === \"-\") {\n    return one.minus(two).toString();\n  }\n\n  if (operation === \"x\") {\n    return one.times(two).toString();\n  }\n\n  if (operation === \"÷\") {\n    if (two === \"0\") {\n      alert(\"Divide by 0 error\");\n      return \"0\";\n    } else {\n      return one.div(two).toString();\n    }\n  }\n\n  throw Error(\"Unknown operation '\".concat(operation, \"'\"));\n}\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(operate, \"operate\", \"/Users/hyman/test/calculator/src/logic/operate.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/logic/operate.js?");

/***/ })

/******/ });