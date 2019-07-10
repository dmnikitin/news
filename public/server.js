/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/*! exports provided: instances, headers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"instances\", function() { return instances; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"headers\", function() { return headers; });\nvar instances = [{\n  name: 'top',\n  id: 1\n}, {\n  name: 'belarus-minsk',\n  id: 2\n}, {\n  name: 'sports-nhl-nba-soccer',\n  id: 3\n}, {\n  name: 'entertainment-trends',\n  id: 4\n}, {\n  name: 'technology-science',\n  id: 5\n}];\nvar headers = ['top news.', 'belarus.', 'sports.', 'trends.', 'tech.'];\n\n\n//# sourceURL=webpack:///./src/data/data.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/index */ \"./src/shared/index.js\");\n/* harmony import */ var _shared_components_newsbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/components/newsbox */ \"./src/shared/components/newsbox.js\");\n\n\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(cors__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"]('public'));\ndotenv__WEBPACK_IMPORTED_MODULE_4___default.a.config();\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({\n  extended: true\n})); // const API_KEY = process.env['API_KEY'];\n\nvar API_KEY = 'db60dec64ae84f489e81d19e7e4b6b65';\nvar port = Object({\"API_KEY\":undefined}).PORT || 8080; // const [API_KEY] = process.env;\n\nvar url;\napp.get('/', function (req, res) {\n  var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_6__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_shared_index__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null));\n  res.send(\"\\n    <!DOCTYPE html>\\n    <html>\\n      <head>\\n       <meta charset=\\\"utf-8\\\">\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\">\\n        <link rel=\\\"stylesheet\\\" href=\\\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\\\">\\n        <link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"/bundle.css\\\">\\n        <link href=\\\"https://fonts.googleapis.com/css?family=Indie+Flower\\\" rel=\\\"stylesheet\\\">\\n        <title>news</title>\\n      </head>\\n      <body>\\n        <div id=\\\"App\\\">\".concat(markup, \"</div>\\n        <script type=\\\"text/javascript\\\" src=\\\"/bundle.js\\\"></script>\\n      </body>\\n    </html>\\n  \"));\n});\napp.get('/:link', function (req, res) {\n  var link = req.params.link;\n  var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_6__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"StaticRouter\"], {\n    location: req.url\n  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_shared_components_newsbox__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    value: link\n  })));\n  res.send(\"\\n        <!DOCTYPE html>\\n        <html>\\n          <head>\\n           <meta charset=\\\"utf-8\\\">\\n            <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\">\\n            <link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"/bundle.css\\\">\\n            <link rel=\\\"stylesheet\\\" href=\\\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\\\">\\n            <link href=\\\"https://fonts.googleapis.com/css?family=Indie+Flower\\\" rel=\\\"stylesheet\\\">\\n            <script>window.LINK = \".concat(JSON.stringify({\n    link: link\n  }), \"</script>\\n            <title>news</title>\\n          </head>\\n          <body>\\n            <div id=\\\"App\\\">\").concat(markup, \"</div>\\n            <script type=\\\"text/javascript\\\" src=\\\"/bundle.js\\\"></script>\\n          </body>\\n        </html>\\n  \"));\n});\napp.post(/.*/, function (req, res) {\n  url = req.originalUrl === '/top' ? \"https://newsapi.org/v2/top-headlines?country=us&page=\".concat(req.body.page, \"&pageSize=10&apiKey=\").concat(API_KEY) : \"https://newsapi.org/v2/everything?q=\".concat(req.originalUrl, \"&language=en&sortBy=popularity&page=\").concat(req.body.page, \"&pageSize=10&apiKey=\").concat(API_KEY);\n  node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(url).then(function (response) {\n    if (response.ok) {\n      return response.json();\n    }\n\n    throw new Error('failed');\n  }, function (networkError) {\n    return console.log(networkError.message);\n  }).then(function (jsonResponse) {\n    return res.json(jsonResponse);\n  });\n});\napp.listen(port, function () {\n  return console.log(\"Listening on http://localhost:\".concat(port, \"/\"));\n});\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/components/article.js":
/*!******************************************!*\
  !*** ./src/shared/components/article.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardActions */ \"@material-ui/core/CardActions\");\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Icon */ \"@material-ui/core/Icon\");\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nvar styles = {\n  card: {\n    maxWidth: '100%',\n    height: 'auto',\n    marginBottom: 30,\n    backgroundSize: 'cover',\n    backgroundPosition: 'center center',\n    display: 'inline-block'\n  },\n  heading: {\n    overflow: 'hidden'\n  },\n  buttons: {\n    color: 'black',\n    fontSize: 18,\n    minHeight: '40px',\n    maxHeight: '40px'\n  },\n  span: {\n    alignItems: 'center',\n    fontStyle: 'italic',\n    fontSize: '15px'\n  },\n  p: {\n    marginTop: '10px'\n  },\n  content: {\n    display: 'grid'\n  }\n};\n\nfunction Article(props) {\n  var classes = props.classes,\n      item = props.item;\n  var share = \"https://twitter.com/intent/tweet?text=\".concat(item.title);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    className: classes.card\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: item.urlToImage,\n    alt: \"\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    className: classes.heading,\n    gutterBottom: true,\n    variant: \"headline\",\n    component: \"h2\"\n  }, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    className: classes.span,\n    component: \"span\"\n  }, \"by\", item.source.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    className: classes.p,\n    component: \"p\"\n  }, item.description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    className: classes.buttons\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    className: classes.button\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    target: \"_blank\",\n    rel: \"noopener noreferrer\",\n    href: share\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_9___default.a, {\n    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(classes.icon, 'fa fa-twitter')\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    size: \"small\",\n    color: \"primary\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    target: \"_blank\",\n    rel: \"noopener noreferrer\",\n    href: item.url\n  }, \"Learn More\"))));\n}\n\nArticle.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Object).isRequired,\n  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    urlToImage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    source: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Object)\n  }).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])(styles)(Article));\n\n//# sourceURL=webpack:///./src/shared/components/article.js?");

/***/ }),

/***/ "./src/shared/components/articlesList.js":
/*!***********************************************!*\
  !*** ./src/shared/components/articlesList.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/shared/components/footer.js\");\n/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article */ \"./src/shared/components/article.js\");\n\n\n\n\n\nvar List = function List(_ref) {\n  var list = _ref.list;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"list\"\n  }, list.map(function (item) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_article__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: item.publishedAt,\n      item: item\n    });\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n};\n\nList.propTypes = {\n  list: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Array).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);\n\n//# sourceURL=webpack:///./src/shared/components/articlesList.js?");

/***/ }),

/***/ "./src/shared/components/footer.js":
/*!*****************************************!*\
  !*** ./src/shared/components/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Footer = function Footer() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"articles-footer\"\n  }, \"powered by \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://newsapi.org/\"\n  }, \"NewsAPI.org\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./src/shared/components/footer.js?");

/***/ }),

/***/ "./src/shared/components/newsbox.js":
/*!******************************************!*\
  !*** ./src/shared/components/newsbox.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _articlesList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articlesList */ \"./src/shared/components/articlesList.js\");\n/* harmony import */ var _unmountHOC__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unmountHOC */ \"./src/shared/components/unmountHOC.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar pathname = typeof window !== 'undefined' ? window.location.pathname.replace('/', '') : null;\n\nvar NewsBox =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(NewsBox, _Component);\n\n  function NewsBox() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, NewsBox);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NewsBox)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      page: 1,\n      isLoading: false,\n      articles: []\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"onScroll\", function () {\n      var element = document.documentElement;\n      var scrollTop = element && element.scrollTop || document.body.scrollTop;\n      var scrollHeight = element && element.scrollHeight || document.body.scrollHeight;\n      var clientHeight = element.clientHeight || window.innerHeight;\n      var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;\n      if (scrolledToBottom) _this.loadData();\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"loadData\", function () {\n      var value = _this.props.value;\n      var _this$state = _this.state,\n          page = _this$state.page,\n          articles = _this$state.articles;\n\n      _this.setState({\n        isLoading: true\n      });\n\n      setTimeout(function () {\n        var myInit = {\n          method: 'POST',\n          body: \"value=\".concat(value, \"&page=\").concat(page),\n          headers: {\n            'Content-Type': 'application/x-www-form-urlencoded',\n            'X-Requested-With': 'XMLHttpRequest'\n          }\n        };\n        fetch(\"/\".concat(value || pathname), myInit).then(function (response) {\n          if (response.ok) {\n            return response.clone().json();\n          }\n\n          throw new Error('failed');\n        }, function (networkError) {\n          return console.log(networkError.message);\n        }).then(function (jsonResponse) {\n          return _this.setState({\n            articles: _toConsumableArray(new Set([].concat(_toConsumableArray(articles), _toConsumableArray(jsonResponse.articles.filter(function (e) {\n              return e.urlToImage;\n            }))))),\n            page: page + 1,\n            isLoading: false\n          });\n        })[\"catch\"](function (e) {\n          return console.log(e.message);\n        });\n      }, 1000);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"componentDidMount\", function () {\n      _this.loadData();\n\n      window.addEventListener('scroll', _this.onScroll, false);\n\n      _this.setState({\n        scrolled: true\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"componentWillUnmount\", function () {\n      window.removeEventListener('scroll', _this.onScroll, false);\n    });\n\n    return _this;\n  }\n\n  _createClass(NewsBox, [{\n    key: \"render\",\n    value: function render() {\n      var banner;\n      var heading;\n      var value = this.props.value;\n      var _this$state2 = this.state,\n          articles = _this$state2.articles,\n          isLoading = _this$state2.isLoading;\n\n      switch (value || pathname) {\n        case 'top':\n          banner = 'source-banner-0';\n          heading = 'Top news';\n          break;\n\n        case 'belarus-minsk':\n          banner = 'source-banner-1';\n          heading = 'Belarus news';\n          break;\n\n        case 'sports-nhl-nba-soccer':\n          banner = 'source-banner-2';\n          heading = 'Sports news';\n          break;\n\n        case 'entertainment-trends':\n          banner = 'source-banner-3';\n          heading = 'Top trends';\n          break;\n\n        case 'technology-science':\n          banner = 'source-banner-4';\n          heading = 'Tech news';\n          break;\n\n        default:\n          banner = 'source-banner-0';\n          heading = \"selected: \".concat(pathname || value);\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"newsbox\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: banner\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        alt: \"\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, heading)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_articlesList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        list: articles\n      }), isLoading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"data-loading\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n        className: \"fa fa-refresh fa-spin\"\n      })));\n    }\n  }]);\n\n  return NewsBox;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n_defineProperty(NewsBox, \"propTypes\", {\n  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_unmountHOC__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(NewsBox));\n\n//# sourceURL=webpack:///./src/shared/components/newsbox.js?");

/***/ }),

/***/ "./src/shared/components/sourcesbox.js":
/*!*********************************************!*\
  !*** ./src/shared/components/sourcesbox.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SourcesBox; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/shared/components/footer.js\");\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/data */ \"./src/data/data.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar styles = {\n  container: {\n    display: 'flex',\n    flexWrap: 'wrap'\n  },\n  textField: {\n    width: '100%',\n    margin: 0\n  },\n  h2: {\n    fontFamily: 'Indie Flower',\n    fontWeight: 'normal',\n    height: '50px',\n    textAlign: 'center',\n    margin: 0\n  }\n};\n\nvar SourcesBox =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(SourcesBox, _Component);\n\n  function SourcesBox() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, SourcesBox);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SourcesBox)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      value: ''\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleChange\", function (event) {\n      return _this.setState({\n        value: event.target.value\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleSubmit\", function (e) {\n      e.preventDefault();\n\n      _this.loadData();\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"loadData\", function () {\n      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"/\".concat(_this.state.value);\n\n      if (typeof window !== 'undefined') {\n        window.location.href = url;\n      }\n    });\n\n    return _this;\n  }\n\n  _createClass(SourcesBox, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var value = this.state.value;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n        style: styles.h2\n      }, \" Get the latest articles by selected topics! \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"source-box\"\n      }, _data_data__WEBPACK_IMPORTED_MODULE_3__[\"instances\"].map(function (e, index) {\n        var link = \"/\".concat(e.name);\n        var className = \"source-instance-\".concat(index);\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n          type: \"button\",\n          className: className,\n          key: e.id,\n          onClick: function onClick() {\n            return _this2.loadData(link);\n          }\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, _data_data__WEBPACK_IMPORTED_MODULE_3__[\"headers\"][index]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"bg-image-blur\"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n          alt: \"\"\n        }));\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n        onSubmit: this.handleSubmit\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        value: value,\n        onChange: this.handleChange,\n        id: \"filled-search\",\n        label: \"Or search for your very own topic!\",\n        type: \"search\",\n        style: styles.textField,\n        margin: \"normal\",\n        variant: \"filled\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n    }\n  }]);\n\n  return SourcesBox;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/shared/components/sourcesbox.js?");

/***/ }),

/***/ "./src/shared/components/unmountHOC.js":
/*!*********************************************!*\
  !*** ./src/shared/components/unmountHOC.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return unmountHOC; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nfunction unmountHOC(WrappedComponent) {\n  var _temp;\n\n  return _temp =\n  /*#__PURE__*/\n  function (_Component) {\n    _inherits(_temp, _Component);\n\n    function _temp() {\n      var _getPrototypeOf2;\n\n      var _this;\n\n      _classCallCheck(this, _temp);\n\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_temp)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n      _defineProperty(_assertThisInitialized(_this), \"state\", {\n        mounted: false\n      });\n\n      _defineProperty(_assertThisInitialized(_this), \"componentGracefulUnmount\", function () {\n        _this.setState({\n          mounted: false\n        });\n\n        window.removeEventListener('beforeunload', _this.componentGracefulUnmount);\n      });\n\n      _defineProperty(_assertThisInitialized(_this), \"componentWillMount\", function () {\n        return _this.setState({\n          mounted: true\n        });\n      });\n\n      _defineProperty(_assertThisInitialized(_this), \"componentDidMount\", function () {\n        return window.addEventListener('beforeunload', _this.componentGracefulUnmount);\n      });\n\n      _defineProperty(_assertThisInitialized(_this), \"componentWillUnmount\", function () {\n        return _this.componentGracefulUnmount();\n      });\n\n      return _this;\n    }\n\n    _createClass(_temp, [{\n      key: \"render\",\n      value: function render() {\n        var mounted = this.state.mounted;\n\n        if (mounted) {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, this.props);\n        }\n\n        return null;\n      }\n    }]);\n\n    return _temp;\n  }(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]), _temp;\n}\n\n//# sourceURL=webpack:///./src/shared/components/unmountHOC.js?");

/***/ }),

/***/ "./src/shared/index.js":
/*!*****************************!*\
  !*** ./src/shared/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_newsbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/newsbox */ \"./src/shared/components/newsbox.js\");\n/* harmony import */ var _components_sourcesbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sourcesbox */ \"./src/shared/components/sourcesbox.js\");\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sass/styles.scss */ \"./src/shared/sass/styles.scss\");\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sass_styles_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction App(props) {\n  var selected = props.selected;\n  var path;\n  if (selected) path = \"/\".concat(selected);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"main\"\n  }, !path ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_sourcesbox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_newsbox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    value: selected\n  })));\n}\nApp.propTypes = {\n  selected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n\n//# sourceURL=webpack:///./src/shared/index.js?");

/***/ }),

/***/ "./src/shared/sass/styles.scss":
/*!*************************************!*\
  !*** ./src/shared/sass/styles.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/shared/sass/styles.scss?");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Button%22?");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Card\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Card%22?");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardActions\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardActions%22?");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardContent\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardContent%22?");

/***/ }),

/***/ "@material-ui/core/Icon":
/*!*****************************************!*\
  !*** external "@material-ui/core/Icon" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Icon\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Icon%22?");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/TextField\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/TextField%22?");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Typography%22?");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/styles%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");\n\n//# sourceURL=webpack:///external_%22node-fetch%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

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

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });