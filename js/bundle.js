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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL21haW4uc2Nzcz8wYWEyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vc3JjL2Nzcy9tYWluLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/css/main.scss\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../css/main.scss */ \"./src/css/main.scss\");\n\nfunction getJSON(url, callback) {\n  var xhr = new XMLHttpRequest();\n  xhr.open(\"GET\", url, true);\n  xhr.onload = function (e) {\n    if (xhr.readyState === 4) {\n      if (xhr.status === 200) {\n        var res = xhr.responseText;\n        callback(JSON.parse(res));\n      } else {\n        console.error(xhr.statusText);\n      }\n    }\n  };\n  xhr.onerror = function (e) {\n    console.error(xhr.statusText);\n  };\n  xhr.send(null);\n}\n\nvar weather = void 0;\nvar input = document.getElementById('city');\nvar api = 'https://api.openweathermap.org/data/2.5/find?q=';\nvar units = '&units=metric';\nvar apiKey = '&APPID=68fd7cea66f7e82809cdf13613ac7ee1';\n\nfunction setup() {\n\n  var button = document.querySelector('#search-city');\n\n  button.addEventListener('click', function () {\n    var nameCity = input.value;\n\n    var url = api + nameCity + apiKey + units;\n\n    getJSON(url, gotData);\n  });\n}\n\nsetup();\n\nfunction gotData(data) {\n  weather = data;\n  draw();\n}\n\nfunction draw() {\n  var canvas = document.querySelector(\"#show-weather\");\n\n  if (weather) {\n\n    var temp = weather.list[0].main.temp;\n    var humidity = weather.list[0].main.humidity;\n    var ctx = canvas.getContext(\"2d\");\n\n    ctx.arc(75, 75, humidity, 0, Math.PI * 2, true);\n    ctx.fill();\n\n    ctx.arc(225, 75, temp, 0, Math.PI * 2, true);\n    ctx.fill();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJuYW1lcyI6WyJnZXRKU09OIiwidXJsIiwiY2FsbGJhY2siLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJvbmxvYWQiLCJlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlcyIsInJlc3BvbnNlVGV4dCIsIkpTT04iLCJwYXJzZSIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1c1RleHQiLCJvbmVycm9yIiwic2VuZCIsIndlYXRoZXIiLCJpbnB1dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcGkiLCJ1bml0cyIsImFwaUtleSIsInNldHVwIiwiYnV0dG9uIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJuYW1lQ2l0eSIsInZhbHVlIiwiZ290RGF0YSIsImRhdGEiLCJkcmF3IiwiY2FudmFzIiwidGVtcCIsImxpc3QiLCJtYWluIiwiaHVtaWRpdHkiLCJjdHgiLCJnZXRDb250ZXh0IiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFHQSxTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUFzQkMsUUFBdEIsRUFBZ0M7QUFDOUIsTUFBSUMsTUFBTSxJQUFJQyxjQUFKLEVBQVY7QUFDQUQsTUFBSUUsSUFBSixDQUFTLEtBQVQsRUFBZ0JKLEdBQWhCLEVBQXFCLElBQXJCO0FBQ0FFLE1BQUlHLE1BQUosR0FBYSxVQUFVQyxDQUFWLEVBQWE7QUFDeEIsUUFBSUosSUFBSUssVUFBSixLQUFtQixDQUF2QixFQUEwQjtBQUN4QixVQUFJTCxJQUFJTSxNQUFKLEtBQWUsR0FBbkIsRUFBd0I7QUFDdEIsWUFBSUMsTUFBTVAsSUFBSVEsWUFBZDtBQUNBVCxpQkFBU1UsS0FBS0MsS0FBTCxDQUFXSCxHQUFYLENBQVQ7QUFDRCxPQUhELE1BR087QUFDTEksZ0JBQVFDLEtBQVIsQ0FBY1osSUFBSWEsVUFBbEI7QUFDRDtBQUNGO0FBQ0YsR0FURDtBQVVBYixNQUFJYyxPQUFKLEdBQWMsVUFBVVYsQ0FBVixFQUFhO0FBQ3pCTyxZQUFRQyxLQUFSLENBQWNaLElBQUlhLFVBQWxCO0FBQ0QsR0FGRDtBQUdBYixNQUFJZSxJQUFKLENBQVMsSUFBVDtBQUNEOztBQUdELElBQUlDLGdCQUFKO0FBQ0EsSUFBSUMsUUFBUUMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUFaO0FBQ0EsSUFBSUMsTUFBTSxpREFBVjtBQUNBLElBQUlDLFFBQVEsZUFBWjtBQUNBLElBQUlDLFNBQVMseUNBQWI7O0FBR0EsU0FBU0MsS0FBVCxHQUFpQjs7QUFFZixNQUFJQyxTQUFTTixTQUFTTyxhQUFULENBQXVCLGNBQXZCLENBQWI7O0FBR0FELFNBQU9FLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQU07QUFDckMsUUFBSUMsV0FBV1YsTUFBTVcsS0FBckI7O0FBRUEsUUFBSTlCLE1BQU1zQixNQUFNTyxRQUFOLEdBQWlCTCxNQUFqQixHQUEwQkQsS0FBcEM7O0FBRUF4QixZQUFRQyxHQUFSLEVBQWErQixPQUFiO0FBQ0QsR0FORDtBQVFEOztBQUVETjs7QUFFQSxTQUFTTSxPQUFULENBQWlCQyxJQUFqQixFQUF1QjtBQUNyQmQsWUFBVWMsSUFBVjtBQUNBQztBQUNEOztBQUdELFNBQVNBLElBQVQsR0FBZ0I7QUFDZCxNQUFJQyxTQUFTZCxTQUFTTyxhQUFULENBQXVCLGVBQXZCLENBQWI7O0FBRUEsTUFBSVQsT0FBSixFQUFhOztBQUVYLFFBQUlpQixPQUFPakIsUUFBUWtCLElBQVIsQ0FBYSxDQUFiLEVBQWdCQyxJQUFoQixDQUFxQkYsSUFBaEM7QUFDQSxRQUFJRyxXQUFXcEIsUUFBUWtCLElBQVIsQ0FBYSxDQUFiLEVBQWdCQyxJQUFoQixDQUFxQkMsUUFBcEM7QUFDQSxRQUFJQyxNQUFNTCxPQUFPTSxVQUFQLENBQWtCLElBQWxCLENBQVY7O0FBRUFELFFBQUlFLEdBQUosQ0FBUSxFQUFSLEVBQVksRUFBWixFQUFnQkgsUUFBaEIsRUFBMEIsQ0FBMUIsRUFBNkJJLEtBQUtDLEVBQUwsR0FBVSxDQUF2QyxFQUEwQyxJQUExQztBQUNBSixRQUFJSyxJQUFKOztBQUVBTCxRQUFJRSxHQUFKLENBQVEsR0FBUixFQUFhLEVBQWIsRUFBaUJOLElBQWpCLEVBQXVCLENBQXZCLEVBQTBCTyxLQUFLQyxFQUFMLEdBQVUsQ0FBcEMsRUFBdUMsSUFBdkM7QUFDQUosUUFBSUssSUFBSjtBQUVEO0FBQ0YiLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2Nzcy9tYWluLnNjc3MnO1xuXG5cbmZ1bmN0aW9uIGdldEpTT04odXJsLCBjYWxsYmFjaykge1xuICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIHhoci5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XG4gIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICBsZXQgcmVzID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgY2FsbGJhY2soSlNPTi5wYXJzZShyZXMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoeGhyLnN0YXR1c1RleHQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoeGhyLnN0YXR1c1RleHQpO1xuICB9O1xuICB4aHIuc2VuZChudWxsKTtcbn1cblxuXG5sZXQgd2VhdGhlcjtcbmxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5Jyk7XG5sZXQgYXBpID0gJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9maW5kP3E9JztcbmxldCB1bml0cyA9ICcmdW5pdHM9bWV0cmljJztcbmxldCBhcGlLZXkgPSAnJkFQUElEPTY4ZmQ3Y2VhNjZmN2U4MjgwOWNkZjEzNjEzYWM3ZWUxJztcblxuXG5mdW5jdGlvbiBzZXR1cCgpIHtcblxuICBsZXQgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1jaXR5Jyk7XG5cblxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbGV0IG5hbWVDaXR5ID0gaW5wdXQudmFsdWU7XG5cbiAgICBsZXQgdXJsID0gYXBpICsgbmFtZUNpdHkgKyBhcGlLZXkgKyB1bml0cztcblxuICAgIGdldEpTT04odXJsLCBnb3REYXRhKVxuICB9KTtcblxufVxuXG5zZXR1cCgpO1xuXG5mdW5jdGlvbiBnb3REYXRhKGRhdGEpIHtcbiAgd2VhdGhlciA9IGRhdGE7XG4gIGRyYXcoKTtcbn1cblxuXG5mdW5jdGlvbiBkcmF3KCkge1xuICBsZXQgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaG93LXdlYXRoZXJcIik7XG5cbiAgaWYgKHdlYXRoZXIpIHtcblxuICAgIGxldCB0ZW1wID0gd2VhdGhlci5saXN0WzBdLm1haW4udGVtcDtcbiAgICBsZXQgaHVtaWRpdHkgPSB3ZWF0aGVyLmxpc3RbMF0ubWFpbi5odW1pZGl0eTtcbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIGN0eC5hcmMoNzUsIDc1LCBodW1pZGl0eSwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgIGN0eC5maWxsKCk7XG5cbiAgICBjdHguYXJjKDIyNSwgNzUsIHRlbXAsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICBjdHguZmlsbCgpO1xuXG4gIH1cbn1cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ })

/******/ });