module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"server": 0
/******/ 	};
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/route.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/models/home.js":
/*!*******************************!*\
  !*** ./client/models/home.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst initState = {\n  request: false,\n  data: undefined,\n  err: ''\n};\nconst home = {\n  state: initState,\n  epics: {\n    fetch(payload, dispatch) {\n      const {\n        response\n      } = payload || {};\n      const host = response ? response.host : '';\n      return axios__WEBPACK_IMPORTED_MODULE_0___default()({\n        method: 'get',\n        url: `${host}/api/gethome`\n      }).then(res => {\n        const resData = res.data;\n        const {\n          data\n        } = resData; // this.succ(data);\n\n        dispatch('home/succ', data);\n      }).catch(() => {\n        this.fail({\n          msg: '网络请求失败，请稍后重试'\n        });\n      });\n    }\n\n  },\n  reducers: {\n    requesting(state, payload) {\n      return {\n        request: true,\n        err: ''\n      };\n    },\n\n    succ(state, payload) {\n      return {\n        request: false,\n        err: '',\n        data: payload\n      };\n    },\n\n    fail(state, payload) {\n      return {\n        request: false,\n        err: payload.msg\n      };\n    }\n\n  }\n};\nconst _default = home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(initState, \"initState\", \"/Users/Rush/netease/cloudclass/isomorphic/client/models/home.js\");\n  reactHotLoader.register(home, \"home\", \"/Users/Rush/netease/cloudclass/isomorphic/client/models/home.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/Rush/netease/cloudclass/isomorphic/client/models/home.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/models/home.js?");

/***/ }),

/***/ "./client/models/index.js":
/*!********************************!*\
  !*** ./client/models/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./client/models/home.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ \"./client/models/list.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst _default = {\n  home: _home__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  list: _list__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/Rush/netease/cloudclass/isomorphic/client/models/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/models/index.js?");

/***/ }),

/***/ "./client/models/list.js":
/*!*******************************!*\
  !*** ./client/models/list.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst initState = {\n  request: false,\n  data: undefined,\n  err: undefined\n};\nconst list = {\n  state: initState,\n  epics: {\n    fetch(payload) {\n      const {\n        response\n      } = payload || {};\n      const host = response ? response.host : '';\n      return axios__WEBPACK_IMPORTED_MODULE_0___default()({\n        method: 'get',\n        url: `${host}/api/getlist`\n      }).then(res => {\n        const resData = res.data;\n        const {\n          data\n        } = resData;\n        this.succ(data);\n      }).catch(() => {\n        this.fail({\n          msg: '网络请求失败，请稍后重试'\n        });\n      });\n    }\n\n  },\n  reducers: {\n    requesting(state, payload) {\n      return {\n        request: true,\n        err: ''\n      };\n    },\n\n    succ(state, payload) {\n      return {\n        request: false,\n        err: '',\n        data: payload\n      };\n    },\n\n    fail(state, payload) {\n      return {\n        request: false,\n        err: payload.msg\n      };\n    }\n\n  }\n};\nconst _default = list;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(initState, \"initState\", \"/Users/Rush/netease/cloudclass/isomorphic/client/models/list.js\");\n  reactHotLoader.register(list, \"list\", \"/Users/Rush/netease/cloudclass/isomorphic/client/models/list.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/Rush/netease/cloudclass/isomorphic/client/models/list.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/models/list.js?");

/***/ }),

/***/ "./client/routeconfig.js":
/*!*******************************!*\
  !*** ./client/routeconfig.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loadable/component */ \"@loadable/component\");\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_1__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst Loading = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"m-loading\"\n}, \"\\u52A0\\u8F7D\\u4E2D...\");\n\nconst loadable = loader => _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()(loader, {\n  fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Loading, null)\n});\n\nconst Home = loadable({\n  resolved: {},\n\n  chunkName() {\n    return \"views-home\";\n  },\n\n  isReady(props) {\n    const key = this.resolve(props);\n\n    if (this.resolved[key] === false) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n\n  importAsync: () => Promise.resolve(/*! import() | views-home */).then(__webpack_require__.bind(null, /*! ./views/home */ \"./client/views/home/index.js\")),\n\n  requireAsync(props) {\n    const key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(resolved => {\n      this.resolved[key] = true;\n      return resolved;\n    });\n  },\n\n  requireSync(props) {\n    const id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n\n  resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./views/home */ \"./client/views/home/index.js\");\n    }\n\n    return eval('require.resolve')(\"./views/home\");\n  }\n\n});\nconst List = loadable({\n  resolved: {},\n\n  chunkName() {\n    return \"views-list\";\n  },\n\n  isReady(props) {\n    const key = this.resolve(props);\n\n    if (this.resolved[key] === false) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n\n  importAsync: () => Promise.resolve(/*! import() | views-list */).then(__webpack_require__.bind(null, /*! ./views/list */ \"./client/views/list/index.js\")),\n\n  requireAsync(props) {\n    const key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(resolved => {\n      this.resolved[key] = true;\n      return resolved;\n    });\n  },\n\n  requireSync(props) {\n    const id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n\n  resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./views/list */ \"./client/views/list/index.js\");\n    }\n\n    return eval('require.resolve')(\"./views/list\");\n  }\n\n});\nconst Detail = loadable({\n  resolved: {},\n\n  chunkName() {\n    return \"views-detail\";\n  },\n\n  isReady(props) {\n    const key = this.resolve(props);\n\n    if (this.resolved[key] === false) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n\n  importAsync: () => Promise.resolve(/*! import() | views-detail */).then(__webpack_require__.bind(null, /*! ./views/detail */ \"./client/views/detail/index.js\")),\n\n  requireAsync(props) {\n    const key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(resolved => {\n      this.resolved[key] = true;\n      return resolved;\n    });\n  },\n\n  requireSync(props) {\n    const id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n\n  resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./views/detail */ \"./client/views/detail/index.js\");\n    }\n\n    return eval('require.resolve')(\"./views/detail\");\n  }\n\n});\nconst config = [{\n  path: '/list',\n  exact: true,\n  component: List\n}, {\n  path: '/detail/:id',\n  exact: true,\n  component: Detail\n}, {\n  path: '/',\n  exact: true,\n  component: Home\n}];\nconst _default = config;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Loading, \"Loading\", \"/Users/Rush/netease/cloudclass/isomorphic/client/routeconfig.js\");\n  reactHotLoader.register(loadable, \"loadable\", \"/Users/Rush/netease/cloudclass/isomorphic/client/routeconfig.js\");\n  reactHotLoader.register(Home, \"Home\", \"/Users/Rush/netease/cloudclass/isomorphic/client/routeconfig.js\");\n  reactHotLoader.register(List, \"List\", \"/Users/Rush/netease/cloudclass/isomorphic/client/routeconfig.js\");\n  reactHotLoader.register(Detail, \"Detail\", \"/Users/Rush/netease/cloudclass/isomorphic/client/routeconfig.js\");\n  reactHotLoader.register(config, \"config\", \"/Users/Rush/netease/cloudclass/isomorphic/client/routeconfig.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/Rush/netease/cloudclass/isomorphic/client/routeconfig.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/routeconfig.js?");

/***/ }),

/***/ "./client/routes.js":
/*!**************************!*\
  !*** ./client/routes.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _views_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/header */ \"./client/views/header/index.js\");\n/* harmony import */ var _routeconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routeconfig */ \"./client/routeconfig.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst Approutes = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"m-cont\"\n}, Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__[\"renderRoutes\"])(_routeconfig__WEBPACK_IMPORTED_MODULE_3__[\"default\"])));\n\nconst _default = Approutes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Approutes, \"Approutes\", \"/Users/Rush/netease/cloudclass/isomorphic/client/routes.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/Rush/netease/cloudclass/isomorphic/client/routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/routes.js?");

/***/ }),

/***/ "./client/store/index.js":
/*!*******************************!*\
  !*** ./client/store/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ \"redux-logger\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models */ \"./client/models/index.js\");\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n // combineReducers({\n//     Home: homeReducer,\n//     Livelist: listReducer\n// });\n// model\n\nclass Model {\n  constructor(model, key) {\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"transEpic\", func => (payload, dispatch) => {\n      this.dispatch = dispatch;\n      return func(payload, dispatch);\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"transReducer\", item => payload => {\n      this.dispatch({\n        payload,\n        type: `${this.key}/${item}`\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"getReducers\", (state, action) => {\n      const realState = state || this.initState;\n      const {\n        type,\n        payload\n      } = action;\n      const types = type.split('/');\n\n      if (types[0] === this.key) {\n        const cur = types[1];\n        const func = this.reducers[cur];\n        return func ? func(realState, payload) : realState;\n      }\n\n      return realState;\n    });\n\n    const {\n      state: _state,\n      epics,\n      reducers\n    } = model;\n    this.initState = _state;\n    this.key = key;\n    this.reducers = {};\n    Object.keys(epics).forEach(item => {\n      this[item] = this.transEpic(epics[item].bind(this));\n    });\n    Object.keys(reducers).forEach(item => {\n      this[item] = this.transReducer(item);\n      this.reducers[item] = reducers[item].bind(this);\n    });\n  }\n\n  // @ts-ignore\n  __reactstandin__regenerateByEval(key, code) {\n    // @ts-ignore\n    this[key] = eval(code);\n  }\n\n} // 处理 models\n\n\nconst disModels = ms => {\n  const obj = {};\n  Object.keys(ms).forEach(item => {\n    obj[item] = new Model(ms[item], item);\n  });\n  return obj;\n};\n\nconst configureStore = (preloadedState = {}) => {\n  const transModels = disModels(_models__WEBPACK_IMPORTED_MODULE_3__[\"default\"]); // middleware，支持 dispatch('key/method')\n\n  const newthunk = ({\n    dispatch,\n    getState\n  }) => next => (action, args) => {\n    const actions = typeof action === 'string' && action.indexOf('/') > -1 ? action.split('/') : action;\n\n    if (Array.isArray(actions)) {\n      return transModels[actions[0]][actions[1]](args, dispatch);\n    }\n\n    return next(action);\n  }; // new reducers\n\n\n  const res = {};\n  Object.keys(transModels).forEach(item => {\n    res[item] = transModels[item].getReducers;\n  });\n  const newreduce = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])(res);\n  const applyMiddleFuncs = [newthunk];\n\n  if (true) {\n    applyMiddleFuncs.push(redux_logger__WEBPACK_IMPORTED_MODULE_2___default.a);\n  }\n\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(newreduce, preloadedState, Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(...applyMiddleFuncs));\n  return store;\n};\n\nconst _default = configureStore;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Model, \"Model\", \"/Users/Rush/netease/cloudclass/isomorphic/client/store/index.js\");\n  reactHotLoader.register(disModels, \"disModels\", \"/Users/Rush/netease/cloudclass/isomorphic/client/store/index.js\");\n  reactHotLoader.register(configureStore, \"configureStore\", \"/Users/Rush/netease/cloudclass/isomorphic/client/store/index.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/Rush/netease/cloudclass/isomorphic/client/store/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/store/index.js?");

/***/ }),

/***/ "./client/views/detail/gift.js":
/*!*************************************!*\
  !*** ./client/views/detail/gift.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"@babel/runtime/helpers/extends\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket */ \"./client/views/detail/socket.js\");\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst send = (giftId, giftName) => {\n  _socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"].next(Object(_socket__WEBPACK_IMPORTED_MODULE_2__[\"getMessage\"])({\n    type: 3,\n    content: {\n      giftId,\n      giftName,\n      userId: 4234234,\n      name: '电视发射塔',\n      number: 1\n    }\n  }));\n};\n\nconst GIFTS = [{\n  id: 3212,\n  name: '礼物1'\n}, {\n  id: 3213,\n  name: '礼物2'\n}, {\n  id: 3214,\n  name: '礼物3'\n}];\n\nconst GiftItem = props => {\n  const {\n    onClick,\n    name,\n    id\n  } = props;\n  const clk = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(() => {\n    onClick(id, name);\n  });\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n    className: \"m-detail_gf\",\n    onClick: clk\n  }, name);\n};\n\n__signature__(GiftItem, \"useCallback{clk}\");\n\nconst Gift = () => {\n  const giftNodes = GIFTS.map(item => {\n    const key = `gift_${item.id}`;\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GiftItem, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n      key: key\n    }, item, {\n      onClick: send\n    }));\n  });\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"m-detail_gfs\"\n  }, giftNodes);\n};\n\nconst _default = Gift;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(send, \"send\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/detail/gift.js\");\n  reactHotLoader.register(GIFTS, \"GIFTS\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/detail/gift.js\");\n  reactHotLoader.register(GiftItem, \"GiftItem\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/detail/gift.js\");\n  reactHotLoader.register(Gift, \"Gift\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/detail/gift.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/detail/gift.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/views/detail/gift.js?");

/***/ }),

/***/ "./client/views/detail/index.js":
/*!**************************************!*\
  !*** ./client/views/detail/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _send__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./send */ \"./client/views/detail/send.js\");\n/* harmony import */ var _notice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notice */ \"./client/views/detail/notice.js\");\n/* harmony import */ var _gift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gift */ \"./client/views/detail/gift.js\");\n/* harmony import */ var _staticgift__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staticgift */ \"./client/views/detail/staticgift.js\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.less */ \"./client/views/detail/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_5__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nconst Detail = props => {\n  const {\n    match\n  } = props;\n  console.log('=params=', match.params);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"m-detail\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"m-detail_fl\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"m-detail_vd\"\n  }, \"\\u89C6\\u9891\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gift__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_staticgift__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"m-detail_fr\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_notice__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_send__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)));\n};\n\nconst _default = Detail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Detail, \"Detail\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/detail/index.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/detail/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/views/detail/index.js?");

/***/ }),

/***/ "./client/views/detail/index.less":
/*!****************************************!*\
  !*** ./client/views/detail/index.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./client/views/detail/index.less?");

/***/ }),

/***/ "./client/views/detail/notice.js":
/*!***************************************!*\
  !*** ./client/views/detail/notice.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ \"rxjs/operators\");\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var rxjs_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs-hooks */ \"rxjs-hooks\");\n/* harmony import */ var rxjs_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_hooks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socket */ \"./client/views/detail/socket.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nconst MAX = 100;\n\nconst Notice = props => {\n  const list = Object(rxjs_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useObservable\"])(state$ => _socket__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__[\"filter\"])(v => v.type === 2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__[\"withLatestFrom\"])(state$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__[\"map\"])(([v, state]) => {\n    state.push(v);\n    const len = state.length;\n\n    if (len > MAX) {\n      state.splice(0, len - MAX);\n    }\n\n    return state.concat();\n  })), []);\n  let listnode;\n\n  if (list.length) {\n    listnode = list.map((item, n) => {\n      const key = `message_${item.id}`;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: key\n      }, item.content);\n    });\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"m-detail_ms\"\n  }, listnode);\n};\n\n__signature__(Notice, \"useObservable{list}\", () => [rxjs_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useObservable\"]]);\n\nconst _default = Notice;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(MAX, \"MAX\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/detail/notice.js\");\n  reactHotLoader.register(Notice, \"Notice\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/detail/notice.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/detail/notice.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/views/detail/notice.js?");

/***/ }),

/***/ "./client/views/detail/send.js":
/*!*************************************!*\
  !*** ./client/views/detail/send.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rxjs_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs-hooks */ \"rxjs-hooks\");\n/* harmony import */ var rxjs_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_hooks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ \"rxjs/operators\");\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socket */ \"./client/views/detail/socket.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst Send = () => {\n  const [value, setValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const changeValue = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(e => {\n    setValue(e.target.value);\n  }, []);\n  const [sendCallback] = Object(rxjs_hooks__WEBPACK_IMPORTED_MODULE_1__[\"useEventCallback\"])((event$, state$, inputs$) => event$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__[\"throttleTime\"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__[\"withLatestFrom\"])(inputs$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__[\"map\"])(eventAndInput => {\n    const [s, [val]] = eventAndInput;\n\n    if (val !== '') {\n      _socket__WEBPACK_IMPORTED_MODULE_3__[\"default\"].next(Object(_socket__WEBPACK_IMPORTED_MODULE_3__[\"getMessage\"])({\n        type: 2,\n        content: val\n      }));\n      setValue('');\n    }\n  })), '', [value]);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"m-detail_sd\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    value: value,\n    onChange: changeValue\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: sendCallback\n  }, \"\\u53D1\\u9001\"));\n};\n\n__signature__(Send, \"useState{[value, setValue]('')}\\nuseCallback{changeValue}\\nuseEventCallback{[sendCallback]}\", () => [rxjs_hooks__WEBPACK_IMPORTED_MODULE_1__[\"useEventCallback\"]]);\n\nconst _default = Send;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Send, \"Send\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/detail/send.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/detail/send.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/views/detail/send.js?");

/***/ }),

/***/ "./client/views/detail/slot.js":
/*!*************************************!*\
  !*** ./client/views/detail/slot.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-transition-group */ \"react-transition-group\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_1__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst Number = props => {\n  const {\n    number\n  } = props;\n  const numbers = String(number).split();\n  const key = `number_${number}`;\n  const numNodes = numbers.map((n, i) => {\n    const nkey = `num_${i}`;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      key: nkey,\n      className: \"m-detail_numsg\"\n    }, n);\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    key: key,\n    className: \"m-detail_num\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"m-detail_scale\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"x\"), numNodes));\n};\n\nconst Card = props => {\n  const {\n    info,\n    onExit\n  } = props;\n  const {\n    name,\n    giftName\n  } = info;\n  const exitout = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (exitout.current) {\n      window.clearTimeout(exitout.current);\n    }\n\n    exitout.current = window.setTimeout(() => {\n      if (onExit) {\n        onExit(info);\n      }\n    }, 1500);\n    return () => {\n      window.clearTimeout(exitout.current);\n      exitout.current = null;\n    };\n  }, [info.accNumber]);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"m-detail_card\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"m-detail_avatar\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"m-detail_cdf\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"m-detail_cdnm\"\n  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, `送了${giftName}`)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"m-detail_ng\"\n  }));\n};\n\n__signature__(Card, \"useRef{exitout}\\nuseEffect{}\");\n\nconst Slot = props => {\n  const {\n    info,\n    className,\n    onHide\n  } = props;\n  const [show, setShow] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (info) {\n      setShow(true);\n    }\n  }, [info]);\n  const onExit = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(() => {\n    setShow(false);\n  });\n  const onExited = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(() => {\n    setShow();\n    onHide(info);\n  }, [info]);\n  const cls = `m-detail_slot ${className || ''}`;\n  const inshow = typeof show === 'undefined' ? !!info : show;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: cls\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_1__[\"CSSTransition\"], {\n    in: inshow,\n    classNames: \"trans\",\n    timeout: 300,\n    onExited: onExited,\n    appear: true,\n    enter: true\n  }, state => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, info ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {\n    onExit: onExit,\n    key: info.unique,\n    info: info\n  }) : null, state === 'entered' && info ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Number, {\n    number: info.accNumber\n  }) : null)));\n};\n\n__signature__(Slot, \"useState{[show, setShow]}\\nuseEffect{}\\nuseCallback{onExit}\\nuseCallback{onExited}\");\n\nconst _default = Slot;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Number, \"Number\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/detail/slot.js\");\n  reactHotLoader.register(Card, \"Card\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/detail/slot.js\");\n  reactHotLoader.register(Slot, \"Slot\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/detail/slot.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/detail/slot.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/views/detail/slot.js?");

/***/ }),

/***/ "./client/views/detail/socket.js":
/*!***************************************!*\
  !*** ./client/views/detail/socket.js ***!
  \***************************************/
/*! exports provided: getMessage, gift$, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMessage\", function() { return getMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gift$\", function() { return gift$; });\n/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuidv4 */ \"uuidv4\");\n/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuidv4__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ \"rxjs\");\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ \"rxjs/operators\");\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nlet curid = 0;\nconst getMessage = option => {\n  const {\n    type,\n    content,\n    ...other\n  } = option || {};\n  curid += 1;\n  return {\n    id: Object(uuidv4__WEBPACK_IMPORTED_MODULE_0__[\"fromString\"])(String(curid)),\n    type: type || 1,\n    content: content || 'xxx进入直播间',\n    timestamp: Date.now(),\n    ...other\n  };\n};\nconst sub$$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__[\"Subject\"]();\nconst socket$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__[\"Observable\"](observer => {\n  const tvl = setInterval(() => {\n    observer.next(getMessage());\n  }, 1000);\n  return () => {\n    observer.complete();\n    clearInterval(tvl);\n  };\n});\nsocket$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__[\"filter\"])(v => v.type !== 1)).subscribe(sub$$); // 礼物\n\nconst TIME = 30 * 1000;\nconst gift$ = sub$$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__[\"filter\"])(v => v.type === 3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__[\"map\"])(v => ({ ...v,\n  ...v.content\n})), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__[\"map\"])(v => ({ ...v,\n  unique: `${v.giftId}_${v.userId}`\n})), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__[\"groupBy\"])(v => v.unique), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__[\"mergeMap\"])(group$ => {\n  const break$ = group$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__[\"debounceTime\"])(TIME));\n  return group$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__[\"window\"])(break$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__[\"mergeMap\"])($window => $window.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__[\"scan\"])((acc, cur) => ({ ...cur,\n    accNumber: cur.number + (acc.accNumber || 0)\n  }), {}))));\n}));\nconst _default = sub$$;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(curid, \"curid\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/detail/socket.js\");\n  reactHotLoader.register(getMessage, \"getMessage\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/detail/socket.js\");\n  reactHotLoader.register(sub$$, \"sub$$\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/detail/socket.js\");\n  reactHotLoader.register(socket$, \"socket$\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/detail/socket.js\");\n  reactHotLoader.register(TIME, \"TIME\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/detail/socket.js\");\n  reactHotLoader.register(gift$, \"gift$\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/detail/socket.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/detail/socket.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/views/detail/socket.js?");

/***/ }),

/***/ "./client/views/detail/staticgift.js":
/*!*******************************************!*\
  !*** ./client/views/detail/staticgift.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var use_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-constant */ \"use-constant\");\n/* harmony import */ var use_constant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(use_constant__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket */ \"./client/views/detail/socket.js\");\n/* harmony import */ var _slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slot */ \"./client/views/detail/slot.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nconst MAX_GIFTS = 2;\n\nconst completeSlots = (slots, queue) => {\n  const realSlots = slots.filter(item => !!item);\n  const wait = queue.splice(0, MAX_GIFTS - realSlots.length);\n  const newSlots = slots.map(item => item || wait.splice(0, 1)[0]);\n  return newSlots;\n};\n\nclass GiftQueue {\n  constructor(option = {}) {\n    this.cb = option.cb;\n    this.StaticQueue = [];\n    this.slots = new Array(MAX_GIFTS).fill(null);\n    this.init();\n  }\n\n  init() {\n    this.subscription = _socket__WEBPACK_IMPORTED_MODULE_2__[\"gift$\"].subscribe(v => {\n      const hasV = item => item ? item.unique === v.unique : false;\n\n      const idx = this.StaticQueue.findIndex(hasV);\n      const sidx = this.slots.findIndex(hasV);\n\n      if (idx === -1 && sidx === -1) {\n        this.StaticQueue.push(v);\n      }\n\n      if (sidx > -1) {\n        this.slots[sidx] = v;\n      }\n\n      this.slots = completeSlots(this.slots, this.StaticQueue);\n\n      if (this.cb) {\n        this.cb(this.slots);\n      }\n    });\n  }\n\n  remove(slot) {\n    const idx = this.slots.findIndex(item => item ? item.unique === slot.unique : false);\n\n    if (idx > -1) {\n      const first = this.StaticQueue.splice(0, 1);\n      this.slots[idx] = first.length > 0 ? first[0] : null;\n    }\n\n    this.slots = this.slots.concat();\n\n    if (this.cb) {\n      this.cb(this.slots);\n    }\n\n    return this.slots;\n  }\n\n  getSlots() {\n    return this.slots;\n  }\n\n  destroy() {\n    if (this.subscription) {\n      this.subscription.unsubscribe();\n    }\n  }\n\n  // @ts-ignore\n  __reactstandin__regenerateByEval(key, code) {\n    // @ts-ignore\n    this[key] = eval(code);\n  }\n\n}\n\nconst StaticGift = () => {\n  const [slots, setSlots] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const Queue = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const subcb = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(st => {\n    setSlots(st);\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (Queue.current === null) {\n      Queue.current = new GiftQueue({\n        cb: subcb\n      });\n    }\n\n    return () => Queue.current.destroy();\n  }, []);\n  const hideSlot = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(slot => {\n    Queue.current.remove(slot);\n  });\n  console.log('=slots=', slots);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"m-detail_stgift\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_slot__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    onHide: hideSlot,\n    info: slots[1]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_slot__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    onHide: hideSlot,\n    className: \"last\",\n    info: slots[0]\n  }));\n};\n\n__signature__(StaticGift, \"useState{[slots, setSlots]([])}\\nuseRef{Queue}\\nuseCallback{subcb}\\nuseEffect{}\\nuseCallback{hideSlot}\");\n\nconst _default = StaticGift;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(MAX_GIFTS, \"MAX_GIFTS\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/detail/staticgift.js\");\n  reactHotLoader.register(completeSlots, \"completeSlots\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/detail/staticgift.js\");\n  reactHotLoader.register(GiftQueue, \"GiftQueue\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/detail/staticgift.js\");\n  reactHotLoader.register(StaticGift, \"StaticGift\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/detail/staticgift.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/detail/staticgift.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/views/detail/staticgift.js?");

/***/ }),

/***/ "./client/views/header/index.js":
/*!**************************************!*\
  !*** ./client/views/header/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ \"./client/views/header/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst NavList = [{\n  path: '/',\n  title: '首页'\n}, {\n  path: '/list',\n  title: '列表'\n}];\n\nconst Header = () => {\n  const linkNode = NavList.map((item, n) => {\n    const key = `navlink_${n}`;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      className: \"m-header_li\",\n      key: key\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n      exact: true,\n      to: item.path,\n      className: \"m-header_link\",\n      activeClassName: \"m-header_sel\"\n    }, item.title));\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"m-header\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"m-header_ul\"\n  }, linkNode));\n};\n\nconst _default = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(NavList, \"NavList\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/header/index.js\");\n  reactHotLoader.register(Header, \"Header\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/header/index.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/header/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/views/header/index.js?");

/***/ }),

/***/ "./client/views/header/index.less":
/*!****************************************!*\
  !*** ./client/views/header/index.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./client/views/header/index.less?");

/***/ }),

/***/ "./client/views/home/index.js":
/*!************************************!*\
  !*** ./client/views/home/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet-async */ \"react-helmet-async\");\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ \"./client/views/home/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_3__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst HomeIndex = props => {\n  const {\n    Home,\n    dispatch\n  } = props;\n  const {\n    data\n  } = Home;\n  const {\n    text\n  } = data || {};\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (typeof data === 'undefined') {\n      dispatch('home/fetch');\n    }\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"c-home\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__[\"Helmet\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, `我是${text}`)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, `我是这个${text}`));\n};\n\n__signature__(HomeIndex, \"useEffect{}\");\n\nHomeIndex.getInitProps = (dispatch, response) => dispatch('home/fetch', {\n  response\n});\n\nconst _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(({\n  home\n}) => ({\n  Home: home\n}))(HomeIndex);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(HomeIndex, \"HomeIndex\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/home/index.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/home/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/views/home/index.js?");

/***/ }),

/***/ "./client/views/home/index.less":
/*!**************************************!*\
  !*** ./client/views/home/index.less ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./client/views/home/index.less?");

/***/ }),

/***/ "./client/views/list/index.js":
/*!************************************!*\
  !*** ./client/views/list/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet-async */ \"react-helmet-async\");\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.less */ \"./client/views/list/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_4__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nconst ListIndex = props => {\n  const {\n    Livelist,\n    dispatch\n  } = props;\n  const {\n    data\n  } = Livelist;\n  const {\n    list\n  } = data || {};\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (typeof data === 'undefined') {\n      dispatch('list/fetch');\n    }\n  }, []);\n  let listnode;\n\n  if (list && list.length) {\n    listnode = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, list.map((item, n) => {\n      const {\n        id,\n        title,\n        anchor\n      } = item;\n      const key = `list_${id}`;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n        to: `/detail/${id}`,\n        className: \"m-list_li\",\n        key: key\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"m-list_tl\"\n      }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        className: \"m-list_autr\"\n      }, \"\\u4E3B\\u64AD\\uFF1A\", anchor));\n    }));\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"m-list\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__[\"Helmet\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"\\u6211\\u662F\\u5217\\u8868\")), listnode);\n};\n\n__signature__(ListIndex, \"useEffect{}\");\n\nListIndex.getInitProps = (dispatch, response) => dispatch('list/fetch', {\n  response\n});\n\nconst _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(({\n  list\n}) => ({\n  Livelist: list\n}))(ListIndex);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(ListIndex, \"ListIndex\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/list/index.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/Rush/netease/cloudclass/isomorphic/client/views/list/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/views/list/index.js?");

/***/ }),

/***/ "./client/views/list/index.less":
/*!**************************************!*\
  !*** ./client/views/list/index.less ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./client/views/list/index.less?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./server/render.js":
/*!**************************!*\
  !*** ./server/render.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet-async */ \"react-helmet-async\");\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet_async__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @loadable/server */ \"@loadable/server\");\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client/store */ \"./client/store/index.js\");\n/* harmony import */ var _client_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../client/routes */ \"./client/routes.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\nconst getMod = comp => comp.default ? comp.default : comp;\n\nconst _default = async (matchRoute, ctx, next) => {\n  const curComp = matchRoute[0].route.component;\n  let realComp = await curComp.load();\n  realComp = getMod(realComp);\n  const store = Object(_client_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(); // 请求接口\n\n  if (realComp.getInitProps) {\n    await realComp.getInitProps(store.dispatch, {\n      host: `${ctx.protocol}://${ctx.host}`\n    });\n  }\n\n  const webExtractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_5__[\"ChunkExtractor\"]({\n    statsFile: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(__dirname, '../public/loadable-stats.json'),\n    entrypoints: ['app']\n  });\n  const context = {};\n  const helmetContext = {};\n  const jsx = webExtractor.collectChunks(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__[\"StaticRouter\"], {\n    location: ctx.url,\n    context: context\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_2__[\"HelmetProvider\"], {\n    context: helmetContext\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_client_routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null)))));\n  const html = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_4__[\"renderToString\"])(jsx);\n  const {\n    helmet\n  } = helmetContext; // 获取数据\n\n  const state = store.getState(); // console.log('=state=', state);\n\n  await ctx.render('index', {\n    title: helmet.title.toString(),\n    root: html,\n    link: webExtractor.getLinkTags(),\n    style: webExtractor.getStyleTags(),\n    script: webExtractor.getScriptTags(),\n    state: JSON.stringify(state)\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getMod, \"getMod\", \"/Users/Rush/netease/cloudclass/isomorphic/server/render.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/Rush/netease/cloudclass/isomorphic/server/render.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/render.js?");

/***/ }),

/***/ "./server/route.js":
/*!*************************!*\
  !*** ./server/route.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _client_routeconfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client/routeconfig */ \"./client/routeconfig.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./server/render.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nconst serverRoute = ({\n  clientStats,\n  serverStats\n}) => {\n  return async (ctx, next) => {\n    // server router\n    const {\n      path\n    } = ctx;\n    const matchRoute = Object(react_router_config__WEBPACK_IMPORTED_MODULE_0__[\"matchRoutes\"])(_client_routeconfig__WEBPACK_IMPORTED_MODULE_1__[\"default\"], path);\n\n    if (matchRoute && matchRoute.length > 0) {\n      await Object(_render__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(matchRoute, ctx, next);\n    }\n\n    await next();\n  };\n};\n\nconst _default = serverRoute;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(serverRoute, \"serverRoute\", \"/Users/Rush/netease/cloudclass/isomorphic/server/route.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/Rush/netease/cloudclass/isomorphic/server/route.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/route.js?");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/defineProperty\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/defineProperty%22?");

/***/ }),

/***/ "@babel/runtime/helpers/extends":
/*!*************************************************!*\
  !*** external "@babel/runtime/helpers/extends" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/extends\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/extends%22?");

/***/ }),

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@loadable/component\");\n\n//# sourceURL=webpack:///external_%22@loadable/component%22?");

/***/ }),

/***/ "@loadable/server":
/*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@loadable/server\");\n\n//# sourceURL=webpack:///external_%22@loadable/server%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet-async":
/*!*************************************!*\
  !*** external "react-helmet-async" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet-async\");\n\n//# sourceURL=webpack:///external_%22react-helmet-async%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-transition-group\");\n\n//# sourceURL=webpack:///external_%22react-transition-group%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-logger\");\n\n//# sourceURL=webpack:///external_%22redux-logger%22?");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"rxjs\");\n\n//# sourceURL=webpack:///external_%22rxjs%22?");

/***/ }),

/***/ "rxjs-hooks":
/*!*****************************!*\
  !*** external "rxjs-hooks" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"rxjs-hooks\");\n\n//# sourceURL=webpack:///external_%22rxjs-hooks%22?");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"rxjs/operators\");\n\n//# sourceURL=webpack:///external_%22rxjs/operators%22?");

/***/ }),

/***/ "use-constant":
/*!*******************************!*\
  !*** external "use-constant" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"use-constant\");\n\n//# sourceURL=webpack:///external_%22use-constant%22?");

/***/ }),

/***/ "uuidv4":
/*!*************************!*\
  !*** external "uuidv4" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuidv4\");\n\n//# sourceURL=webpack:///external_%22uuidv4%22?");

/***/ })

/******/ });