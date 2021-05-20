webpackHotUpdate("main",{

/***/ "./src/lib/video/createPlugin.tsx":
/*!****************************************!*\
  !*** ./src/lib/video/createPlugin.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _default_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default/settings */ "./src/lib/video/default/settings.tsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/*
 * This file is part of ORY Editor.
 *
 * ORY Editor is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ORY Editor is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ORY Editor.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @license LGPL-3.0
 * @copyright 2016-2018 Aeneas Rekkas
 * @author Aeneas Rekkas <aeneas+oss@aeneas.io>
 *
 */



var createPlugin = function createPlugin(settings) {
  var mergedSettings = _objectSpread(_objectSpread({}, _default_settings__WEBPACK_IMPORTED_MODULE_1__["defaultSettings"]), settings);

  var _Renderer = mergedSettings.Renderer,
      Controls = mergedSettings.Controls,
      rest = _objectWithoutProperties(mergedSettings, ["Renderer", "Controls"]);

  return {
    Renderer: function Renderer(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Renderer, _extends({}, rest, props));
    },
    controls: {
      type: 'custom',
      Component: function Component(props) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Controls, _extends({}, props, rest));
      }
    },
    id: 'ory/editor/core/content/video',
    version: 1,
    icon: mergedSettings.icon,
    title: mergedSettings.translations.pluginName,
    description: mergedSettings.translations.pluginDescription
  };
};

var _default = createPlugin;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(createPlugin, "createPlugin", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\video\\createPlugin.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\video\\createPlugin.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3ZpZGVvL2NyZWF0ZVBsdWdpbi50c3giXSwibmFtZXMiOlsiY3JlYXRlUGx1Z2luIiwic2V0dGluZ3MiLCJtZXJnZWRTZXR0aW5ncyIsImRlZmF1bHRTZXR0aW5ncyIsIlJlbmRlcmVyIiwiQ29udHJvbHMiLCJyZXN0IiwicHJvcHMiLCJjb250cm9scyIsInR5cGUiLCJDb21wb25lbnQiLCJpZCIsInZlcnNpb24iLCJpY29uIiwidGl0bGUiLCJ0cmFuc2xhdGlvbnMiLCJwbHVnaW5OYW1lIiwiZGVzY3JpcHRpb24iLCJwbHVnaW5EZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBOztBQUdBLElBQU1BLFlBRXFCLEdBQUcsU0FGeEJBLFlBRXdCLENBQUFDLFFBQVEsRUFBSTtBQUN4QyxNQUFNQyxjQUFjLG1DQUFRQyxpRUFBUixHQUE0QkYsUUFBNUIsQ0FBcEI7O0FBQ0EsTUFBUUcsU0FBUixHQUF3Q0YsY0FBeEMsQ0FBUUUsUUFBUjtBQUFBLE1BQWtCQyxRQUFsQixHQUF3Q0gsY0FBeEMsQ0FBa0JHLFFBQWxCO0FBQUEsTUFBK0JDLElBQS9CLDRCQUF3Q0osY0FBeEM7O0FBQ0EsU0FBTztBQUNMRSxZQUFRLEVBQUUsa0JBQUFHLEtBQUs7QUFBQSwwQkFBSSxvREFBQyxTQUFELGVBQWNELElBQWQsRUFBd0JDLEtBQXhCLEVBQUo7QUFBQSxLQURWO0FBRUxDLFlBQVEsRUFBRTtBQUNSQyxVQUFJLEVBQUUsUUFERTtBQUVSQyxlQUFTLEVBQUUsbUJBQUFILEtBQUs7QUFBQSw0QkFBSSxvREFBQyxRQUFELGVBQWNBLEtBQWQsRUFBeUJELElBQXpCLEVBQUo7QUFBQTtBQUZSLEtBRkw7QUFNTEssTUFBRSxFQUFFLCtCQU5DO0FBT0xDLFdBQU8sRUFBRSxDQVBKO0FBUUxDLFFBQUksRUFBRVgsY0FBYyxDQUFDVyxJQVJoQjtBQVNMQyxTQUFLLEVBQUVaLGNBQWMsQ0FBQ2EsWUFBZixDQUE0QkMsVUFUOUI7QUFVTEMsZUFBVyxFQUFFZixjQUFjLENBQUNhLFlBQWYsQ0FBNEJHO0FBVnBDLEdBQVA7QUFZRCxDQWpCRDs7ZUFtQmVsQixZO0FBQUE7Ozs7Ozs7Ozs7MEJBbkJUQSxZIiwiZmlsZSI6ImIzMGQ1MGEtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgT1JZIEVkaXRvci5cclxuICpcclxuICogT1JZIEVkaXRvciBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XHJcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxyXG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxyXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxyXG4gKlxyXG4gKiBPUlkgRWRpdG9yIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXHJcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXHJcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcclxuICogR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxyXG4gKiBhbG9uZyB3aXRoIE9SWSBFZGl0b3IuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXHJcbiAqXHJcbiAqIEBsaWNlbnNlIExHUEwtMy4wXHJcbiAqIEBjb3B5cmlnaHQgMjAxNi0yMDE4IEFlbmVhcyBSZWtrYXNcclxuICogQGF1dGhvciBBZW5lYXMgUmVra2FzIDxhZW5lYXMrb3NzQGFlbmVhcy5pbz5cclxuICpcclxuICovXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBWaWRlb1NldHRpbmdzIH0gZnJvbSAnLi90eXBlcy9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IFZpZGVvU3RhdGUgfSBmcm9tICcuL3R5cGVzL3N0YXRlJztcclxuaW1wb3J0IHsgZGVmYXVsdFNldHRpbmdzIH0gZnJvbSAnLi9kZWZhdWx0L3NldHRpbmdzJztcclxuaW1wb3J0IHsgQ2VsbFBsdWdpbiB9IGZyb20gJ0ByZWFjdC1wYWdlL2VkaXRvcic7XHJcblxyXG5jb25zdCBjcmVhdGVQbHVnaW46IChcclxuICBzZXR0aW5nczogVmlkZW9TZXR0aW5nc1xyXG4pID0+IENlbGxQbHVnaW48VmlkZW9TdGF0ZT4gPSBzZXR0aW5ncyA9PiB7XHJcbiAgY29uc3QgbWVyZ2VkU2V0dGluZ3MgPSB7IC4uLmRlZmF1bHRTZXR0aW5ncywgLi4uc2V0dGluZ3MgfTtcclxuICBjb25zdCB7IFJlbmRlcmVyLCBDb250cm9scywgLi4ucmVzdCB9ID0gbWVyZ2VkU2V0dGluZ3M7XHJcbiAgcmV0dXJuIHtcclxuICAgIFJlbmRlcmVyOiBwcm9wcyA9PiA8UmVuZGVyZXIgey4uLnJlc3R9IHsuLi5wcm9wc30gLz4sXHJcbiAgICBjb250cm9sczoge1xyXG4gICAgICB0eXBlOiAnY3VzdG9tJyxcclxuICAgICAgQ29tcG9uZW50OiBwcm9wcyA9PiA8Q29udHJvbHMgey4uLnByb3BzfSB7Li4ucmVzdH0gLz4sXHJcbiAgICB9LFxyXG4gICAgaWQ6ICdvcnkvZWRpdG9yL2NvcmUvY29udGVudC92aWRlbycsXHJcbiAgICB2ZXJzaW9uOiAxLFxyXG4gICAgaWNvbjogbWVyZ2VkU2V0dGluZ3MuaWNvbixcclxuICAgIHRpdGxlOiBtZXJnZWRTZXR0aW5ncy50cmFuc2xhdGlvbnMucGx1Z2luTmFtZSxcclxuICAgIGRlc2NyaXB0aW9uOiBtZXJnZWRTZXR0aW5ncy50cmFuc2xhdGlvbnMucGx1Z2luRGVzY3JpcHRpb24sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBsdWdpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==