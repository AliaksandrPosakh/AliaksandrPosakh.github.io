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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data/questions.js":
/*!*******************************!*\
  !*** ./src/data/questions.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\r\n    {question: 'вычислите значение: 14 / 2 =',\r\n     answer: 7,\r\n    },\r\n    {question: 'вычислите значение: 64 / 4 =',\r\n     answer: 16,\r\n    },\r\n    {question: 'вычислите значение: 15 * 5 =',\r\n     answer: 75,\r\n    },\r\n    {question: 'вычислите значение: 16 * 3 =',\r\n     answer: 48,\r\n    },\r\n    {question: 'вычислите значение: 19 + 57 =',\r\n     answer: 76,\r\n    },\r\n    {question: 'вычислите значение: 28 + 36 =',\r\n     answer: 64,\r\n    },\r\n    {question: 'вычислите значение: 35 - 17 =',\r\n     answer: 18,\r\n    },\r\n    {question: 'вычислите значение: 79 - 23 =',\r\n     answer: 56,\r\n    },\r\n    {question: 'продолжите ряд: 14, 16, 18, ?',\r\n     answer: 20,\r\n    },\r\n    {question: 'продолжите ряд: 34, 31, 28, ?',\r\n     answer: 25,\r\n    },\r\n    {question: 'переведите: apple',\r\n     answer: 'яблоко',\r\n    },\r\n    {question: 'переведите: street',\r\n     answer: 'улица',\r\n    },\r\n    {question: 'переведите: monday',\r\n     answer: 'понедельник',\r\n    },\r\n    {question: 'переведите: brother',\r\n     answer: 'брат',\r\n    },\r\n    {question: 'переведите: window',\r\n     answer: 'окно',\r\n    },\r\n    {question: 'переведите: summer',\r\n     answer: 'лето',\r\n    },\r\n]);\r\n\n\n//# sourceURL=webpack:///./src/data/questions.js?");

/***/ }),

/***/ "./src/enemy/enemy.js":
/*!****************************!*\
  !*** ./src/enemy/enemy.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Enemy; });\nclass Enemy  {\r\n    constructor(canvas) {\r\n        this.x = 1100;\r\n        this.y = 730;\r\n        this.dx = -3;\r\n        this.dy = 3;\r\n        this.img = new Image();\r\n        this.canvas = canvas;\r\n    }\r\n    head() {\r\n        this.canvas.drawImage(this.img,0,0);\r\n        this.canvas.beginPath();\r\n        this.canvas.arc(1200, 700, 30, 0, 2 * Math.PI);\r\n        this.canvas.lineWidth = 8;\r\n        this.canvas.strokeStyle = \"red\";\r\n        this.canvas.lineCap = \"round\";\r\n        this.canvas.stroke();\r\n    }\r\n    \r\n    face() {\r\n        this.canvas.beginPath();\r\n        this.canvas.lineWidth = 5;\r\n        this.canvas.arc(1190, 695, 3, 0, 2 * Math.PI);\r\n        this.canvas.stroke();\r\n        this.canvas.beginPath();\r\n        this.canvas.arc(1210, 695, 3, 0, 2 * Math.PI);\r\n        this.canvas.stroke();\r\n        this.canvas.beginPath();\r\n        this.canvas.arc(1200, 695, 20, Math.PI*0.75, Math.PI*0.25 ,Math.PI, false);\r\n        this.canvas.stroke();\r\n    }\r\n\r\n    drawBody() {\r\n        this.canvas.beginPath();\r\n        this.canvas.moveTo(1200, 730);\r\n        this.canvas.lineTo(1200,830);\r\n        this.canvas.stroke();\r\n    }\r\n\r\n    drawLeftLeg() {\r\n        this.canvas.beginPath();\r\n        this.canvas.moveTo(1200,830);\r\n        this.canvas.lineTo(1160,930);\r\n        this.canvas.stroke();\r\n    }\r\n\r\n    drawRightLeg() {\r\n        this.canvas.beginPath();\r\n        this.canvas.moveTo(1200,830);\r\n        this.canvas.lineTo(1240,930);\r\n        this.canvas.stroke();\r\n    }\r\n\r\n    drawLeftHand() {\r\n        this.canvas.beginPath();\r\n        this.canvas.moveTo(1200,760);\r\n        this.canvas.lineTo(1160,820);\r\n        this.canvas.stroke();\r\n    }\r\n\r\n    drawSword() {\r\n        this.canvas.beginPath();\r\n        this.canvas.moveTo(1160,820);\r\n        this.canvas.lineWidth = 8;\r\n        this.canvas.strokeStyle = \"red\";\r\n        this.canvas.lineCap = \"round\";\r\n        this.canvas.lineTo(this.x,this.y);\r\n        this.canvas.stroke();\r\n    }\r\n\r\n    // enemyHeals() {\r\n    //     secondPlayer.beginPath();\r\n    //     secondPlayer.moveTo(1100, 200);\r\n    //     secondPlayer.lineTo(1300,200);\r\n    //     secondPlayer.lineWidth = 50;\r\n    //     secondPlayer.strokeStyle = \"gold\";\r\n    //     secondPlayer.lineCap = \"round\";\r\n    //     secondPlayer.font = \"40px solid\";\r\n    //     secondPlayer.fillText('ENEMY', 1130, 170);\r\n    //     secondPlayer.stroke();\r\n    // }\r\n\r\n    drawRightHand() {\r\n        this.canvas.beginPath();\r\n        this.canvas.moveTo(1200,760);\r\n        this.canvas.lineTo(1240,820);\r\n        this.canvas.stroke();\r\n    }\r\n    drawPlayer() {\r\n        // this.enemyHeals();\r\n        this.head();\r\n        this.drawBody();\r\n        this.drawLeftLeg();\r\n        this.drawRightLeg();\r\n        this.drawRightHand();\r\n        this.drawLeftHand();\r\n        this.face();\r\n        this.drawSword();\r\n        \r\n        \r\n    }\r\n    swing() {\r\n        const intervalId = setInterval(() => {\r\n            this.canvas.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n            this.drawPlayer();\r\n            this.x += this.dx;\r\n            this.y += this.dy;\r\n            if (this.x < 1100 && this.y > 750) {\r\n                clearInterval(intervalId);\r\n            }\r\n        }, 30);\r\n  \r\n        \r\n    }\r\n}\r\n// const Enemy = new Enemy();\r\n// Enemy.swing();\r\n\r\n// let interval2 = setInterval(Enemy.swing.bind(Enemy), 30);\n\n//# sourceURL=webpack:///./src/enemy/enemy.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/canvas */ \"./src/utils/canvas.js\");\n/* harmony import */ var _utils_questions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/questions */ \"./src/utils/questions.js\");\n/* harmony import */ var _user_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/user */ \"./src/user/user.js\");\n/* harmony import */ var _enemy_enemy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enemy/enemy */ \"./src/enemy/enemy.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst canvasList = Object(_utils_canvas__WEBPACK_IMPORTED_MODULE_0__[\"drawCanvasBlocks\"])();\r\n\r\nconst user = new _user_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"](canvasList.userCanvas);\r\nconst enemy = new _enemy_enemy__WEBPACK_IMPORTED_MODULE_3__[\"default\"](canvasList.enemyCanvas);\r\n\r\nuser.drawPlayer();\r\nenemy.drawPlayer();\r\n\r\nconst questionForm = Object(_utils_questions__WEBPACK_IMPORTED_MODULE_1__[\"getTaskWindow\"])();\r\n\r\ndocument.body.appendChild(questionForm);\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/user/user.js":
/*!**************************!*\
  !*** ./src/user/user.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return User; });\n/* harmony import */ var _utils_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/observable */ \"./src/utils/observable.js\");\n// import Heals from './app';\r\n\r\n\r\nclass User  {\r\n    constructor(canvas) {\r\n        this.x = 400;\r\n        this.y = 730;\r\n        this.dx = 3;\r\n        this.dy = 3;\r\n        this.img = new Image();\r\n        this.canvas = canvas;\r\n        this.observable = Object(_utils_observable__WEBPACK_IMPORTED_MODULE_0__[\"getObservable\"])();\r\n        this.observable.on('Player:swing', this.swing.bind(this));\r\n    }\r\n\r\n    head() {\r\n        this.canvas.drawImage(this.img,0,0);\r\n        this.canvas.beginPath();\r\n        this.canvas.arc(300, 700, 30, 0, 2 * Math.PI);\r\n        this.canvas.lineWidth = 8;\r\n        this.canvas.strokeStyle = \"darkgreen\";\r\n        this.canvas.lineCap = \"round\";\r\n        this.canvas.stroke();\r\n    }\r\n\r\n    face() {\r\n        this.canvas.beginPath();\r\n        this.canvas.lineWidth = 5;\r\n        this.canvas.arc(290, 695, 3, 0, 2 * Math.PI);\r\n        this.canvas.stroke();\r\n        this.canvas.beginPath();\r\n        this.canvas.arc(310, 695, 3, 0, 2 * Math.PI);\r\n        this.canvas.stroke();\r\n        this.canvas.beginPath();\r\n        this.canvas.arc(300, 695, 20, Math.PI*0.75, Math.PI*0.25 ,Math.PI, false);\r\n        this.canvas.stroke();\r\n    }\r\n\r\n    drawBody() {\r\n        this.canvas.beginPath();\r\n        this.canvas.moveTo(300, 730);\r\n        this.canvas.lineTo(300,830);\r\n        this.canvas.stroke();\r\n    }\r\n\r\n    drawLeftLeg() {\r\n        this.canvas.beginPath();\r\n        this.canvas.moveTo(300,830);\r\n        this.canvas.lineTo(260,930);\r\n        this.canvas.stroke();\r\n    }\r\n\r\n    drawRightLeg() {\r\n        this.canvas.beginPath();\r\n        this.canvas.moveTo(300,830);\r\n        this.canvas.lineTo(340,930);\r\n        this.canvas.stroke();\r\n    }\r\n\r\n    drawLeftHand() {\r\n        this.canvas.beginPath();\r\n        this.canvas.moveTo(300,760);\r\n        this.canvas.lineTo(260,820);\r\n        this.canvas.stroke();\r\n    }\r\n\r\n    drawRightHand() {\r\n        this.canvas.beginPath();\r\n        this.canvas.moveTo(300,760);\r\n        this.canvas.lineTo(340,820);\r\n        this.canvas.stroke();\r\n    }\r\n\r\n    drawSword() {\r\n        this.canvas.beginPath();\r\n        this.canvas.moveTo(340,820);\r\n        this.canvas.lineWidth = 8;\r\n        this.canvas.strokeStyle = \"darkgreen\";\r\n        this.canvas.lineCap = \"round\";\r\n        this.canvas.lineTo(this.x, this.y);\r\n        this.canvas.stroke();\r\n    }\r\n\r\n    // youHeals() {\r\n    //     firstPlayer.beginPath();\r\n    //     firstPlayer.moveTo(200, 200);\r\n    //     firstPlayer.lineTo(400,200);\r\n    //     firstPlayer.lineWidth = 50;\r\n    //     firstPlayer.strokeStyle = \"gold\";\r\n    //     firstPlayer.lineCap = \"round\";\r\n    //     firstPlayer.font = \"40px solid\";\r\n    //     firstPlayer.fillText('YOU', 240, 170);\r\n    //     firstPlayer.stroke();\r\n    // }\r\n\r\n    swing() {        \r\n        const intervalId = setInterval(() => {\r\n            this.canvas.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n            this.drawPlayer();\r\n            this.x += this.dx;\r\n            this.y += this.dy;\r\n            if (this.x > 420 && this.y > 750) {\r\n                    \r\n                clearInterval(intervalId);\r\n            }\r\n        }, 30);\r\n    }\r\n    \r\n    drawPlayer() {\r\n        // this.youHels();\r\n        this.head();\r\n        this.drawBody();\r\n        this.drawLeftLeg();\r\n        this.drawRightLeg();\r\n        this.drawRightHand();\r\n        this.drawLeftHand();\r\n        this.face();\r\n        this.drawSword();\r\n        \r\n    }\r\n\r\n\r\n\r\n}\r\n\r\n// const user = new User();\r\n// user.swing();\r\n// let youHeals = new Heals(200, 200, 400, 200, 50, 'gold', 'round', '40px solid', 'YOU', 240, 170);\r\n// youHeals.drawHeals();\r\n// let enemyHeals = new Heals(1100, 200, 1300, 200, 50, 'gold', 'round', '40px solid', 'ENEMY', 1130, 170);\r\n// enemyHeals.drawHeals();\r\n\r\n// let interval = setInterval(user.swing.bind(user), 30);\n\n//# sourceURL=webpack:///./src/user/user.js?");

/***/ }),

/***/ "./src/utils/canvas.js":
/*!*****************************!*\
  !*** ./src/utils/canvas.js ***!
  \*****************************/
/*! exports provided: drawCanvasBlocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawCanvasBlocks\", function() { return drawCanvasBlocks; });\nfunction drawCanvasBlocks() {\r\n    let canvas = document.createElement(\"canvas\");\r\n    canvas.className = \"canvasWindow\";\r\n    let ctx = canvas.getContext(\"2d\");\r\n    canvas.width = 1920;\r\n    canvas.height = 1080;\r\n    document.body.appendChild(canvas);\r\n\r\n    let canvasPlayer1 = document.createElement(\"canvas\");\r\n    let userCanvas = canvas.getContext(\"2d\");\r\n    canvasPlayer1.className = \"canvasPlayer1\";\r\n    canvasPlayer1.width = 250;\r\n    canvasPlayer1.height = 450;\r\n    document.body.appendChild(canvasPlayer1);\r\n\r\n    let canvasPlayer2 = document.createElement(\"canvas\");\r\n    let enemyCanvas = canvas.getContext(\"2d\");\r\n    canvasPlayer2.className = \"canvasPlayer2\";\r\n    canvasPlayer2.width = 250;\r\n    canvasPlayer2.height = 450;\r\n    document.body.appendChild(canvasPlayer2);\r\n\r\n    return {\r\n        userCanvas,\r\n        enemyCanvas\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/utils/canvas.js?");

/***/ }),

/***/ "./src/utils/observable.js":
/*!*********************************!*\
  !*** ./src/utils/observable.js ***!
  \*********************************/
/*! exports provided: getObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getObservable\", function() { return getObservable; });\nclass Observable {\r\n    constructor() {\r\n      this.listeners = {};\r\n    }\r\n  \r\n    trigger(event, ...data) {\r\n      const eventListeners = (this.listeners[event] || []).map(handler => handler);\r\n  \r\n      // eslint-disable-next-line no-console\r\n      console.log('trigger', event);\r\n  \r\n      eventListeners.forEach((handler) => {\r\n        if (typeof handler === 'function') handler(...data);\r\n      });\r\n    }\r\n  \r\n    on(event, handler) {\r\n      // eslint-disable-next-line no-console\r\n      console.log('on', event);\r\n  \r\n      this.listeners[event] = (this.listeners[event] || []);\r\n      this.listeners[event].push(handler);\r\n    }\r\n  \r\n    off(event, handler) {\r\n      if (!handler) delete this.listeners[event];\r\n      const handlerIndex = (this.listeners[event] || []).indexOf(handler);\r\n      if (handlerIndex >= 0) {\r\n        this.listeners[event].splice(handlerIndex, 1);\r\n      }\r\n    }\r\n  \r\n    once(event, handler) {\r\n      const observable = this;\r\n      const onceHandler = (...arg) => {\r\n        handler.apply(observable, arg);\r\n        observable.off(event, onceHandler);\r\n      };\r\n      observable.on(event, onceHandler);\r\n    }\r\n  }\r\n\r\n  let observableInstance;\r\n\r\n  function getObservable() {\r\n    if (!observableInstance) {\r\n        observableInstance = new Observable();\r\n    }\r\n    return observableInstance;\r\n  }\n\n//# sourceURL=webpack:///./src/utils/observable.js?");

/***/ }),

/***/ "./src/utils/questions.js":
/*!********************************!*\
  !*** ./src/utils/questions.js ***!
  \********************************/
/*! exports provided: getTaskWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTaskWindow\", function() { return getTaskWindow; });\n/* harmony import */ var _data_questions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/questions */ \"./src/data/questions.js\");\n/* harmony import */ var _utils_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/observable */ \"./src/utils/observable.js\");\n\r\n\r\n\r\nfunction randomChoiceQuestion(min, max) {\r\n    let rand = min + Math.random() * (max - min +1);\r\n    rand = Math.floor(rand);\r\n    return _data_questions__WEBPACK_IMPORTED_MODULE_0__[\"default\"][rand];\r\n}\r\n\r\nfunction getTaskWindow() {\r\n    const {question, answer} = randomChoiceQuestion(0, _data_questions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length - 1);\r\n\r\n    let form = document.createElement(\"div\");\r\n    form.id = \"windowTask\";\r\n    let input = document.createElement(\"input\");\r\n    input.id = \"answer\";\r\n    input.type = 'text';\r\n\r\n    let questionText = document.createElement(\"p\");\r\n    questionText.innerHTML = question;\r\n\r\n    const button = document.createElement(\"button\");\r\n    button.textContent = 'press me!'\r\n\r\n    const observable = Object(_utils_observable__WEBPACK_IMPORTED_MODULE_1__[\"getObservable\"])();\r\n\r\n    button.addEventListener('click', () => {\r\n        if(input.value == answer) {\r\n            console.log('true');\r\n            observable.trigger('Player:swing');\r\n        } else {\r\n            console.log('false');\r\n        }\r\n    });\r\n\r\n    form.appendChild(questionText);\r\n    form.appendChild(input);\r\n    form.appendChild(button);\r\n\r\n    return form;\r\n}\n\n//# sourceURL=webpack:///./src/utils/questions.js?");

/***/ })

/******/ });