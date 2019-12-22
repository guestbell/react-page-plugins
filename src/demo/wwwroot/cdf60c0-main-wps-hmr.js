webpackHotUpdate("main",{

/***/ "./src/lib/common/constants/SlateConstants.ts":
/*!****************************************************!*\
  !*** ./src/lib/common/constants/SlateConstants.ts ***!
  \****************************************************/
/*! exports provided: SLATE_VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLATE_VERSION", function() { return SLATE_VERSION; });
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var SLATE_VERSION = 1;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SLATE_VERSION, "SLATE_VERSION", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\constants\\SlateConstants.ts");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/lib/slate/createPlugin.tsx":
/*!****************************************!*\
  !*** ./src/lib/slate/createPlugin.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component */ "./src/lib/slate/Component/index.tsx");
/* harmony import */ var _default_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default/settings */ "./src/lib/slate/default/settings.tsx");
/* harmony import */ var _react_page_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-page/core */ "./node_modules/@react-page/core/lib-es/index.js");
/* harmony import */ var _common_constants_SlateConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/constants/SlateConstants */ "./src/lib/common/constants/SlateConstants.ts");
/* harmony import */ var _common_components_slateEditor_slateEmptyValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/components/slateEditor/slateEmptyValue */ "./src/lib/common/components/slateEditor/slateEmptyValue.ts");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







var Subject = Object(_react_page_core__WEBPACK_IMPORTED_MODULE_3__["lazyLoad"])(function () {
  return __webpack_require__.e(/*! import() */ 34).then(__webpack_require__.t.bind(null, /*! @material-ui/icons/Subject */ "./node_modules/@material-ui/icons/Subject.js", 7));
});

var createPlugin = function createPlugin(settings) {
  var mergedSettings = _objectSpread({}, _default_settings__WEBPACK_IMPORTED_MODULE_2__["defaultSettings"], {}, settings);

  var WrappedComponent = function WrappedComponent(props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Component__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, props, mergedSettings));
  };

  return {
    Component: WrappedComponent,
    name: 'ory/editor/core/content/slate',
    version: '0.0.3',
    IconComponent: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Subject, null),
    text: mergedSettings.translations.pluginName,
    description: mergedSettings.translations.pluginDescription,
    createInitialState: function createInitialState() {
      return {
        version: _common_constants_SlateConstants__WEBPACK_IMPORTED_MODULE_4__["SLATE_VERSION"],
        value: Object(_common_components_slateEditor_slateEmptyValue__WEBPACK_IMPORTED_MODULE_5__["slateEmptyValue"])()
      };
    }
  };
};

var _default = createPlugin;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Subject, "Subject", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\createPlugin.tsx");
  reactHotLoader.register(createPlugin, "createPlugin", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\createPlugin.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\createPlugin.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbW1vbi9jb25zdGFudHMvU2xhdGVDb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zbGF0ZS9jcmVhdGVQbHVnaW4udHN4Il0sIm5hbWVzIjpbIlNMQVRFX1ZFUlNJT04iLCJTdWJqZWN0IiwibGF6eUxvYWQiLCJjcmVhdGVQbHVnaW4iLCJzZXR0aW5ncyIsIm1lcmdlZFNldHRpbmdzIiwiZGVmYXVsdFNldHRpbmdzIiwiV3JhcHBlZENvbXBvbmVudCIsInByb3BzIiwiQ29tcG9uZW50IiwibmFtZSIsInZlcnNpb24iLCJJY29uQ29tcG9uZW50IiwidGV4dCIsInRyYW5zbGF0aW9ucyIsInBsdWdpbk5hbWUiLCJkZXNjcmlwdGlvbiIsInBsdWdpbkRlc2NyaXB0aW9uIiwiY3JlYXRlSW5pdGlhbFN0YXRlIiwidmFsdWUiLCJzbGF0ZUVtcHR5VmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLGFBQWEsR0FBRyxDQUF0Qjs7Ozs7Ozs7OzswQkFBTUEsYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FiO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1DLE9BQU8sR0FBR0MsaUVBQVEsQ0FBQztBQUFBLFNBQU0scUtBQU47QUFBQSxDQUFELENBQXhCOztBQUVBLElBQU1DLFlBRThCLEdBQUcsU0FGakNBLFlBRWlDLENBQUFDLFFBQVEsRUFBSTtBQUNqRCxNQUFNQyxjQUFjLHFCQUFRQyxpRUFBUixNQUE0QkYsUUFBNUIsQ0FBcEI7O0FBQ0EsTUFBTUcsZ0JBQXVDLEdBQUcsU0FBMUNBLGdCQUEwQyxDQUFBQyxLQUFLO0FBQUEsV0FDbkQsb0RBQUMsa0RBQUQsZUFBV0EsS0FBWCxFQUFzQkgsY0FBdEIsRUFEbUQ7QUFBQSxHQUFyRDs7QUFHQSxTQUFPO0FBQ0xJLGFBQVMsRUFBRUYsZ0JBRE47QUFFTEcsUUFBSSxFQUFFLCtCQUZEO0FBR0xDLFdBQU8sRUFBRSxPQUhKO0FBSUxDLGlCQUFhLEVBQUUsb0RBQUMsT0FBRCxPQUpWO0FBS0xDLFFBQUksRUFBRVIsY0FBYyxDQUFDUyxZQUFmLENBQTRCQyxVQUw3QjtBQU1MQyxlQUFXLEVBQUVYLGNBQWMsQ0FBQ1MsWUFBZixDQUE0QkcsaUJBTnBDO0FBT0xDLHNCQUFrQixFQUFFO0FBQUEsYUFBTztBQUN6QlAsZUFBTyxFQUFFWCw4RUFEZ0I7QUFFekJtQixhQUFLLEVBQUVDLHNHQUFlO0FBRkcsT0FBUDtBQUFBO0FBUGYsR0FBUDtBQVlELENBbkJEOztlQXFCZWpCLFk7QUFBQTs7Ozs7Ozs7OzswQkF2QlRGLE87MEJBRUFFLFkiLCJmaWxlIjoiY2RmNjBjMC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgU0xBVEVfVkVSU0lPTiA9IDE7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IENvbnRlbnRQbHVnaW5Db25maWcgfSBmcm9tICdAcmVhY3QtcGFnZS9jb3JlL2xpYi9zZXJ2aWNlL3BsdWdpbi9jbGFzc2VzJztcclxuaW1wb3J0IFNsYXRlIGZyb20gJy4vQ29tcG9uZW50JztcclxuaW1wb3J0IHsgU2xhdGVTZXR0aW5ncyB9IGZyb20gJy4vdHlwZXMvc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBTbGF0ZVByb3BzIH0gZnJvbSAnLi90eXBlcy9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTbGF0ZVN0YXRlIH0gZnJvbSAnLi90eXBlcy9zdGF0ZSc7XHJcbmltcG9ydCB7IGRlZmF1bHRTZXR0aW5ncyB9IGZyb20gJy4vZGVmYXVsdC9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IGxhenlMb2FkIH0gZnJvbSAnQHJlYWN0LXBhZ2UvY29yZSc7XHJcbmltcG9ydCB7IFNMQVRFX1ZFUlNJT04gfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzL1NsYXRlQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgc2xhdGVFbXB0eVZhbHVlIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvc2xhdGVFZGl0b3Ivc2xhdGVFbXB0eVZhbHVlJztcclxuXHJcbmNvbnN0IFN1YmplY3QgPSBsYXp5TG9hZCgoKSA9PiBpbXBvcnQoJ0BtYXRlcmlhbC11aS9pY29ucy9TdWJqZWN0JykpO1xyXG5cclxuY29uc3QgY3JlYXRlUGx1Z2luOiAoXHJcbiAgc2V0dGluZ3M6IFNsYXRlU2V0dGluZ3NcclxuKSA9PiBDb250ZW50UGx1Z2luQ29uZmlnPFNsYXRlU3RhdGU+ID0gc2V0dGluZ3MgPT4ge1xyXG4gIGNvbnN0IG1lcmdlZFNldHRpbmdzID0geyAuLi5kZWZhdWx0U2V0dGluZ3MsIC4uLnNldHRpbmdzIH07XHJcbiAgY29uc3QgV3JhcHBlZENvbXBvbmVudDogUmVhY3QuU0ZDPFNsYXRlUHJvcHM+ID0gcHJvcHMgPT4gKFxyXG4gICAgPFNsYXRlIHsuLi5wcm9wc30gey4uLm1lcmdlZFNldHRpbmdzfSAvPlxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIENvbXBvbmVudDogV3JhcHBlZENvbXBvbmVudCxcclxuICAgIG5hbWU6ICdvcnkvZWRpdG9yL2NvcmUvY29udGVudC9zbGF0ZScsXHJcbiAgICB2ZXJzaW9uOiAnMC4wLjMnLFxyXG4gICAgSWNvbkNvbXBvbmVudDogPFN1YmplY3QgLz4sXHJcbiAgICB0ZXh0OiBtZXJnZWRTZXR0aW5ncy50cmFuc2xhdGlvbnMucGx1Z2luTmFtZSxcclxuICAgIGRlc2NyaXB0aW9uOiBtZXJnZWRTZXR0aW5ncy50cmFuc2xhdGlvbnMucGx1Z2luRGVzY3JpcHRpb24sXHJcbiAgICBjcmVhdGVJbml0aWFsU3RhdGU6ICgpID0+ICh7XHJcbiAgICAgIHZlcnNpb246IFNMQVRFX1ZFUlNJT04sXHJcbiAgICAgIHZhbHVlOiBzbGF0ZUVtcHR5VmFsdWUoKSxcclxuICAgIH0pLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQbHVnaW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=