/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// gets Lat & Lon and then puts it into API call for weather data\nasync function returnWeatherData(location) {\n  try {\n    const apiCall = await fetch(\n      `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=98658d9bf9aba83345eb8033cc9dbe20`,\n      {\n        mode: \"cors\",\n      }\n    );\n    const response = await apiCall.json();\n    const { lat } = response[0];\n    const { lon } = response[0];\n    const weather = await fetch(\n      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts&units=imperial&appid=98658d9bf9aba83345eb8033cc9dbe20`,\n      {\n        mode: \"cors\",\n      }\n    );\n    const json = await weather.json();\n      return json;\n  } catch (error) {\n    console.log(\"that place doesn't exist\", error);\n  }\n    return null;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (returnWeatherData);\n\n\n//# sourceURL=webpack://project-weather-app/./src/api.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"firstLetterUppercase\": () => (/* binding */ firstLetterUppercase),\n/* harmony export */   \"setCurrentLocation\": () => (/* binding */ setCurrentLocation),\n/* harmony export */   \"setCurrentTemperature\": () => (/* binding */ setCurrentTemperature)\n/* harmony export */ });\n/* harmony import */ var date_fns_tz_formatInTimeZone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns-tz/formatInTimeZone */ \"./node_modules/date-fns-tz/formatInTimeZone/index.js\");\n/* harmony import */ var date_fns_tz_formatInTimeZone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns_tz_formatInTimeZone__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// import all pictures at once, found on stackoverflow\nfunction importAll(r) {\n  const images = {};\n  r.keys().map((item) => {\n    images[item.replace(\"./\", \"\")] = r(item);\n  });\n  return images;\n}\n\nconst images = importAll(\n  __webpack_require__(\"./src/images sync \\\\.(png%7Cjpe?g%7Csvg)$\")\n);\n\n// capitlizes every first letter of a word ie: san francisco => San Francisco\nfunction firstLetterUppercase(string) {\n  return string\n    .split(\" \")\n    .map((word) => word[0].toUpperCase() + word.substring(1))\n    .join(\" \");\n}\n\nfunction setCurrentLocation(location, timezone, description) {\n  const currentLocation = document.querySelector(\"#currentLocation\");\n  const currentDate = document.querySelector(\"#currentDate\");\n  const currentWeather = document.querySelector(\"#currentWeather\");\n  currentLocation.textContent = firstLetterUppercase(location);\n  currentDate.textContent = `${date_fns_tz_formatInTimeZone__WEBPACK_IMPORTED_MODULE_0___default()(\n    new Date(),\n    timezone,\n    \"eeee hh:mm a\"\n  )}`;\n  currentWeather.textContent = description;\n}\n\nfunction setCurrentTemperature(\n  id,\n  temperature,\n  precipitation,\n  humidity,\n  windSpeed\n) {\n  const icon = document.querySelector(\".iconWrapper\").querySelector(\"img\");\n  const temp = document.querySelector(\"#temp\");\n  const rain = document.querySelector(\"#precipitation\");\n  const humid = document.querySelector(\"#humidity\");\n  const wind = document.querySelector(\"#wind\");\n  icon.src = images[`${id}.png`];\n  temp.textContent = Math.round(temperature);\n    rain.textContent = `${precipitation  }%`;\n    humid.textContent = `${humidity  }%`;\n  wind.textContent = `${windSpeed} mph`;\n}\n\n\n\n\n//# sourceURL=webpack://project-weather-app/./src/dom.js?");

/***/ }),

/***/ "./src/images sync \\.(png%7Cjpe?g%7Csvg)$":
/*!**************************************************************!*\
  !*** ./src/images/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./01d.png\": \"./src/images/01d.png\",\n\t\"./01n.png\": \"./src/images/01n.png\",\n\t\"./02d.png\": \"./src/images/02d.png\",\n\t\"./02n.png\": \"./src/images/02n.png\",\n\t\"./03d.png\": \"./src/images/03d.png\",\n\t\"./03n.png\": \"./src/images/03n.png\",\n\t\"./04d.png\": \"./src/images/04d.png\",\n\t\"./04n.png\": \"./src/images/04n.png\",\n\t\"./09d.png\": \"./src/images/09d.png\",\n\t\"./09n.png\": \"./src/images/09n.png\",\n\t\"./10d.png\": \"./src/images/10d.png\",\n\t\"./10n.png\": \"./src/images/10n.png\",\n\t\"./11d.png\": \"./src/images/11d.png\",\n\t\"./11n.png\": \"./src/images/11n.png\",\n\t\"./13d.png\": \"./src/images/13d.png\",\n\t\"./13n.png\": \"./src/images/13n.png\",\n\t\"./50d.png\": \"./src/images/50d.png\",\n\t\"./50n.png\": \"./src/images/50n.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/images sync \\\\.(png%7Cjpe?g%7Csvg)$\";\n\n//# sourceURL=webpack://project-weather-app/./src/images/_sync_nonrecursive_\\.(png%257Cjpe?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\n\n// lets user search location for weather\nconst form = document.querySelector(\"#form\");\nconst search = document.querySelector(\"#search\");\nform.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const userInput = search.value.toLowerCase();\n  (0,_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(userInput).then((response) => {\n    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.setCurrentLocation)(\n      userInput,\n      response.timezone,\n      response.current.weather[0].description\n    );\n    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.setCurrentTemperature)(\n      response.current.weather[0].icon,\n      response.current.temp,\n      response.hourly[0].pop,\n      response.current.humidity,\n      response.current.wind_speed\n    );\n  });\n});\n\nfunction defaultPage() {\n  (0,_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Seoul\").then((response) => {\n    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.setCurrentLocation)(\n      \"Seuol\",\n      response.timezone,\n      response.current.weather[0].description\n    );\n    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.setCurrentTemperature)(\n      response.current.weather[0].icon,\n      response.current.temp,\n      response.hourly[0].pop,\n      response.current.humidity,\n      response.current.wind_speed\n    );\n  });\n}\ndefaultPage();\n\n\n//# sourceURL=webpack://project-weather-app/./src/index.js?");

/***/ }),

/***/ "./src/images/01d.png":
/*!****************************!*\
  !*** ./src/images/01d.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/21d0166d556b45f9d0fb.png\";\n\n//# sourceURL=webpack://project-weather-app/./src/images/01d.png?");

/***/ }),

/***/ "./src/images/01n.png":
/*!****************************!*\
  !*** ./src/images/01n.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/2dea4f0c50e2c8b7319a.png\";\n\n//# sourceURL=webpack://project-weather-app/./src/images/01n.png?");

/***/ }),

/***/ "./src/images/02d.png":
/*!****************************!*\
  !*** ./src/images/02d.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/7eb74c4e0a99eebd4f9f.png\";\n\n//# sourceURL=webpack://project-weather-app/./src/images/02d.png?");

/***/ }),

/***/ "./src/images/02n.png":
/*!****************************!*\
  !*** ./src/images/02n.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/3b2e3426e30cdc516b3d.png\";\n\n//# sourceURL=webpack://project-weather-app/./src/images/02n.png?");

/***/ }),

/***/ "./src/images/03d.png":
/*!****************************!*\
  !*** ./src/images/03d.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/826d0111ad3d4fb9d6ef.png\";\n\n//# sourceURL=webpack://project-weather-app/./src/images/03d.png?");

/***/ }),

/***/ "./src/images/03n.png":
/*!****************************!*\
  !*** ./src/images/03n.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/826d0111ad3d4fb9d6ef.png\";\n\n//# sourceURL=webpack://project-weather-app/./src/images/03n.png?");

/***/ }),

/***/ "./src/images/04d.png":
/*!****************************!*\
  !*** ./src/images/04d.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/e6663ab6322a5eaec1d6.png\";\n\n//# sourceURL=webpack://project-weather-app/./src/images/04d.png?");

/***/ }),

/***/ "./src/images/04n.png":
/*!****************************!*\
  !*** ./src/images/04n.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/e6663ab6322a5eaec1d6.png\";\n\n//# sourceURL=webpack://project-weather-app/./src/images/04n.png?");

/***/ }),

/***/ "./src/images/09d.png":
/*!****************************!*\
  !*** ./src/images/09d.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/e78c8c56627e697f1174.png\";\n\n//# sourceURL=webpack://project-weather-app/./src/images/09d.png?");

/***/ }),

/***/ "./src/images/09n.png":
/*!****************************!*\
  !*** ./src/images/09n.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/e78c8c56627e697f1174.png\";\n\n//# sourceURL=webpack://project-weather-app/./src/images/09n.png?");

/***/ }),

/***/ "./src/images/10d.png":
/*!****************************!*\
  !*** ./src/images/10d.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/eaa6309e7e00f8a46060.png\";\n\n//# sourceURL=webpack://project-weather-app/./src/images/10d.png?");

/***/ }),

/***/ "./src/images/10n.png":
/*!****************************!*\
  !*** ./src/images/10n.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/1ce578ca0edbed3e8867.png\";\n\n//# sourceURL=webpack://project-weather-app/./src/images/10n.png?");

/***/ }),

/***/ "./src/images/11d.png":
/*!****************************!*\
  !*** ./src/images/11d.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/fb274bd2c737e393f248.png\";\n\n//# sourceURL=webpack://project-weather-app/./src/images/11d.png?");

/***/ }),

/***/ "./src/images/11n.png":
/*!****************************!*\
  !*** ./src/images/11n.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/fb274bd2c737e393f248.png\";\n\n//# sourceURL=webpack://project-weather-app/./src/images/11n.png?");

/***/ }),

/***/ "./src/images/13d.png":
/*!****************************!*\
  !*** ./src/images/13d.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/b3004cf8bc60dbb89df3.png\";\n\n//# sourceURL=webpack://project-weather-app/./src/images/13d.png?");

/***/ }),

/***/ "./src/images/13n.png":
/*!****************************!*\
  !*** ./src/images/13n.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/b3004cf8bc60dbb89df3.png\";\n\n//# sourceURL=webpack://project-weather-app/./src/images/13n.png?");

/***/ }),

/***/ "./src/images/50d.png":
/*!****************************!*\
  !*** ./src/images/50d.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/85ba87958a828a21ba4b.png\";\n\n//# sourceURL=webpack://project-weather-app/./src/images/50d.png?");

/***/ }),

/***/ "./src/images/50n.png":
/*!****************************!*\
  !*** ./src/images/50n.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/85ba87958a828a21ba4b.png\";\n\n//# sourceURL=webpack://project-weather-app/./src/images/50n.png?");

/***/ }),

/***/ "./node_modules/date-fns-tz/formatInTimeZone/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns-tz/formatInTimeZone/index.js ***!
  \************************************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/ericchi/repos/Project-Weather-App/node_modules/date-fns-tz/formatInTimeZone/index.js'\");\n\n//# sourceURL=webpack://project-weather-app/./node_modules/date-fns-tz/formatInTimeZone/index.js?");

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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