/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Load */ \"./src/modules/Load.js\");\n/* harmony import */ var _modules_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Home */ \"./src/modules/Home.js\");\n/* harmony import */ var _modules_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Menu */ \"./src/modules/Menu.js\");\n/* harmony import */ var _modules_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Contact */ \"./src/modules/Contact.js\");\n\r\n\r\n\r\n\r\n\r\nconst createLinkEvent = () => {\r\n  document.getElementById('home').addEventListener('click', _modules_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n  document.getElementById('menu').addEventListener('click', _modules_Menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n  document.getElementById('contact').addEventListener('click', _modules_Contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n};\r\n\r\ninit();\r\n\r\nfunction init() {\r\n  (0,_modules_Load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  (0,_modules_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  createLinkEvent();\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/Contact.js":
/*!********************************!*\
  !*** ./src/modules/Contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createContact = () => {\r\n  const contact = document.createElement('div');\r\n  contact.innerHTML = `<h1 class=\"contact-title\">Contact Us</h1>\r\n    <p class=\"contact-info\">jabustarde.com</p>`;\r\n  return contact;\r\n};\r\n\r\nconst Contact = () => {\r\n  document.querySelector('section').innerHTML = '';\r\n  const content = document.querySelector('section');\r\n  content.innerHTML = '';\r\n  content.appendChild(createContact());\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/Contact.js?");

/***/ }),

/***/ "./src/modules/Home.js":
/*!*****************************!*\
  !*** ./src/modules/Home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createHome = () => {\r\n  const home = document.createElement('div');\r\n  home.innerHTML = `<div class=\"hero-img\">\r\n                        <img src=\"../src/assets/77003921.svg\" alt=\"\" />\r\n                    </div>\r\n                    <div class=\"hero-headline\">\r\n                        <h1>SUSHIMAN</h1>\r\n                        <h3>\r\n                        We wish to assure you, that Sushi Place will offer the best sushi\r\n                        dishes made from the highest quality products. Our aim is to serve\r\n                        fresh and delicious food to our customers. Our menu will consist of\r\n                        sushi dishes, desserts, hot and cold beverages and soft drinks. We\r\n                        plan to hire an experienced sushi chef, which will definitely be a\r\n                        strong advantage of our restaurant business. We are aware of the\r\n                        fact that sushi industry has become a highly competitive field over\r\n                        the past few years, that is why we want our business to stand out\r\n                        from the rest. We strongly believe, that Sushi Place and its finest\r\n                        sushi dishes will attract customers and make them want to come back\r\n                        for more.\r\n                        </h3>\r\n                    </div>`;\r\n  return home;\r\n};\r\n\r\nconst Home = () => {\r\n  document.querySelector('section').innerHTML = '';\r\n  const content = document.querySelector('section');\r\n  content.innerHTML = '';\r\n  content.appendChild(createHome());\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/Home.js?");

/***/ }),

/***/ "./src/modules/Load.js":
/*!*****************************!*\
  !*** ./src/modules/Load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createNavs = () => {\r\n  const navs = document.createElement('nav');\r\n  navs.innerHTML = `<ul>\r\n                        <li>\r\n                            <a id=\"home\" >Home</a>\r\n                        </li>\r\n                        <li>\r\n                            <a id=\"menu\" >Menu</a>\r\n                        </li>\r\n                        <li>\r\n                            <a id=\"contact\">Contact</a>\r\n                        </li>\r\n                    </ul>`;\r\n  return navs;\r\n};\r\n\r\nconst createMain = () => {\r\n  const main = document.createElement('section');\r\n  return main;\r\n};\r\n\r\nconst createFooter = () => {\r\n  const footer = document.createElement('footer');\r\n  footer.innerHTML = `<span><a href=\"https://github.com/jhonangeloB\">jhonangelob</a></span>`;\r\n  return footer;\r\n};\r\n\r\nconst Load = () => {\r\n  const content = document.getElementById('content');\r\n  content.appendChild(createNavs());\r\n  content.appendChild(createMain());\r\n  content.appendChild(createFooter());\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Load);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/Load.js?");

/***/ }),

/***/ "./src/modules/Menu.js":
/*!*****************************!*\
  !*** ./src/modules/Menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet menus = [\r\n  {\r\n    name: 'Dragon Roll',\r\n    desc: 'Tempura shrimp, cucumber, crab meat, avocado, tobiko and choice of salmon, white tuna ,bbq eel or avocado on top ',\r\n  },\r\n  {\r\n    name: 'Sushi Roll',\r\n    desc: 'Tempura shrimp, cucumber, crab meat, avocado, tobiko and choice of salmon, white tuna ,bbq eel or avocado on top ',\r\n  },\r\n  {\r\n    name: 'Tide Roll',\r\n    desc: 'Tempura shrimp, cucumber, crab meat, avocado, tobiko and choice of salmon, white tuna ,bbq eel or avocado on top ',\r\n  },\r\n];\r\n\r\nconst createMenu = () => {\r\n  const menu = document.createElement('div');\r\n  const title = document.createElement('h1');\r\n  title.classList.add('card-menu-title');\r\n  title.textContent = 'AFFORDABLE TAKE-OUT SUSHI';\r\n  menu.appendChild(title);\r\n  const cardMenu = document.createElement('div');\r\n  cardMenu.classList.add('card-menu');\r\n  menus.map((menu) => {\r\n    const x = document.createElement('div');\r\n    x.classList.add('card');\r\n    x.innerHTML = `<img src=\"../src/assets/image_processing20220701-24597-1ka7b6g.jpg\" alt=\"\"/>\r\n                        <h3 class=\"item-name\">${menu.name}</h3>\r\n                        <p class=\"item-ingredients\">\r\n                        ${menu.desc}\r\n                        </p>`;\r\n    cardMenu.appendChild(x);\r\n  });\r\n  menu.appendChild(cardMenu);\r\n  return menu;\r\n};\r\n\r\nconst Menu = () => {\r\n  document.querySelector('section').innerHTML = '';\r\n  const content = document.querySelector('section');\r\n  content.appendChild(createMenu());\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/Menu.js?");

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
/******/ 			// no module.id needed
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
/******/ })()
;