webpackHotUpdate("main",{

/***/ "./src/demo/ClientApp/pages/basic/Basic.tsx":
/*!**************************************************!*\
  !*** ./src/demo/ClientApp/pages/basic/Basic.tsx ***!
  \**************************************************/
/*! exports provided: Basic, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Basic", function() { return Basic; });
/* harmony import */ var _react_page_core_lib_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-page/core/lib/index.css */ "./node_modules/@react-page/core/lib/index.css");
/* harmony import */ var _react_page_core_lib_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_page_core_lib_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_page_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-page/editor */ "./node_modules/@react-page/editor/lib-es/index.js");
/* harmony import */ var _react_page_ui_lib_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-page/ui/lib/index.css */ "./node_modules/@react-page/ui/lib/index.css");
/* harmony import */ var _react_page_ui_lib_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_page_ui_lib_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contents */ "./src/demo/ClientApp/pages/basic/contents.ts");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plugins */ "./src/demo/ClientApp/pages/basic/plugins.ts");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.scss */ "./src/demo/ClientApp/pages/basic/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_common_components_slateEditor_SlateEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../lib/common/components/slateEditor/SlateEditor */ "./src/lib/common/components/slateEditor/SlateEditor.tsx");
/* harmony import */ var _lib_common_components_slateEditor_slateEmptyValue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../lib/common/components/slateEditor/slateEmptyValue */ "./src/lib/common/components/slateEditor/slateEmptyValue.ts");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

 // we also want to load the stylesheets



 // The content state







if ( true && process.env.REACT_APP_TRACE_UPDATES) {
  var _require = __webpack_require__(/*! why-did-you-update */ "./node_modules/why-did-you-update/lib/index.js"),
      whyDidYouUpdate = _require.whyDidYouUpdate;

  whyDidYouUpdate(react__WEBPACK_IMPORTED_MODULE_3__);
} // tslint:disable-next-line:no-any


var KeepStateEditor = function KeepStateEditor(_ref) {
  var value = _ref.value,
      props = _objectWithoutProperties(_ref, ["value"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__["useState"](value),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_react_page_editor__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, props, {
    value: state,
    onChange: setState
  }));
};

__signature__(KeepStateEditor, "useState{[state, setState](value)}");

var Basic = function Basic(props) {
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3__["useState"](_lib_common_components_slateEditor_slateEmptyValue__WEBPACK_IMPORTED_MODULE_8__["slateEmptyValue"]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      value = _React$useState4[0],
      setValue = _React$useState4[1];

  var onChange = function onChange(val) {
    return setValue(val.value);
  };

  return react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_lib_common_components_slateEditor_SlateEditor__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: value,
    onChange: onChange,
    placeholder: "Custom placeholder",
    label: "Slate editor",
    maxChars: 100
  }), react__WEBPACK_IMPORTED_MODULE_3__["createElement"](KeepStateEditor, {
    plugins: _plugins__WEBPACK_IMPORTED_MODULE_5__["plugins"],
    value: _contents__WEBPACK_IMPORTED_MODULE_4__["default"] // onChange={s => console.log('on change, new state', s)}

  }));
};

__signature__(Basic, "useState{[value, setValue](slateEmptyValue)}");

var _default = Basic;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(KeepStateEditor, "KeepStateEditor", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\demo\\ClientApp\\pages\\basic\\Basic.tsx");
  reactHotLoader.register(Basic, "Basic", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\demo\\ClientApp\\pages\\basic\\Basic.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\demo\\ClientApp\\pages\\basic\\Basic.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__(/*! ./../../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/lib/common/components/slateEditor/slateEmptyValue.ts":
/*!******************************************************************!*\
  !*** ./src/lib/common/components/slateEditor/slateEmptyValue.ts ***!
  \******************************************************************/
/*! exports provided: slateEmptyValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slateEmptyValue", function() { return slateEmptyValue; });
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var slateEmptyValue = [{
  type: 'paragraph',
  children: [{
    text: '',
    marks: []
  }]
}];
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(slateEmptyValue, "slateEmptyValue", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\slateEditor\\slateEmptyValue.ts");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DbGllbnRBcHAvcGFnZXMvYmFzaWMvQmFzaWMudHN4Iiwid2VicGFjazovLy8uL3NyYy9saWIvY29tbW9uL2NvbXBvbmVudHMvc2xhdGVFZGl0b3Ivc2xhdGVFbXB0eVZhbHVlLnRzIl0sIm5hbWVzIjpbInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfVFJBQ0VfVVBEQVRFUyIsInJlcXVpcmUiLCJ3aHlEaWRZb3VVcGRhdGUiLCJSZWFjdCIsIktlZXBTdGF0ZUVkaXRvciIsInZhbHVlIiwicHJvcHMiLCJzdGF0ZSIsInNldFN0YXRlIiwiQmFzaWMiLCJzbGF0ZUVtcHR5VmFsdWUiLCJzZXRWYWx1ZSIsIm9uQ2hhbmdlIiwidmFsIiwicGx1Z2lucyIsImNvbnRlbnRzIiwidHlwZSIsImNoaWxkcmVuIiwidGV4dCIsIm1hcmtzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBeUM7O0FBQ3pDO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOztBQUVBLElBQ0VBLEtBQUEsSUFDQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLHVCQUZkLEVBR0U7QUFBQSxpQkFDNEJDLG1CQUFPLENBQUMsMEVBQUQsQ0FEbkM7QUFBQSxNQUNRQyxlQURSLFlBQ1FBLGVBRFI7O0FBRUFBLGlCQUFlLENBQUNDLGtDQUFELENBQWY7QUFDRCxDLENBRUQ7OztBQUNBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBOEI7QUFBQSxNQUEzQkMsS0FBMkIsUUFBM0JBLEtBQTJCO0FBQUEsTUFBakJDLEtBQWlCOztBQUFBLHdCQUMxQkgsOENBQUEsQ0FBZUUsS0FBZixDQUQwQjtBQUFBO0FBQUEsTUFDN0NFLEtBRDZDO0FBQUEsTUFDdENDLFFBRHNDOztBQUVwRCxTQUFPLG9EQUFDLDBEQUFELGVBQVlGLEtBQVo7QUFBbUIsU0FBSyxFQUFFQyxLQUExQjtBQUFpQyxZQUFRLEVBQUVDO0FBQTNDLEtBQVA7QUFDRCxDQUhEOztjQUFNSixlOztBQVFDLElBQU1LLEtBQTJCLEdBQUcsU0FBOUJBLEtBQThCLENBQUFILEtBQUssRUFBSTtBQUFBLHlCQUN4QkgsOENBQUEsQ0FBdUJPLGtHQUF2QixDQUR3QjtBQUFBO0FBQUEsTUFDM0NMLEtBRDJDO0FBQUEsTUFDcENNLFFBRG9DOztBQUVsRCxNQUFNQyxRQUFvQyxHQUFHLFNBQXZDQSxRQUF1QyxDQUFBQyxHQUFHO0FBQUEsV0FBSUYsUUFBUSxDQUFDRSxHQUFHLENBQUNSLEtBQUwsQ0FBWjtBQUFBLEdBQWhEOztBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLG9EQUFDLHNGQUFEO0FBQ0UsU0FBSyxFQUFFQSxLQURUO0FBRUUsWUFBUSxFQUFFTyxRQUZaO0FBR0UsZUFBVyxFQUFDLG9CQUhkO0FBSUUsU0FBSyxFQUFDLGNBSlI7QUFLRSxZQUFRLEVBQUU7QUFMWixJQURGLEVBUUUsb0RBQUMsZUFBRDtBQUNFLFdBQU8sRUFBRUUsZ0RBRFg7QUFFRSxTQUFLLEVBQUVDLGlEQUZULENBR0U7O0FBSEYsSUFSRixDQURGO0FBZ0JELENBbkJNOztjQUFNTixLOztlQXFCRUEsSztBQUFBOzs7Ozs7Ozs7OzBCQTdCVEwsZTswQkFRT0ssSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJOLElBQU1DLGVBQXVCLEdBQUcsQ0FDckM7QUFDRU0sTUFBSSxFQUFFLFdBRFI7QUFFRUMsVUFBUSxFQUFFLENBQ1I7QUFDRUMsUUFBSSxFQUFFLEVBRFI7QUFFRUMsU0FBSyxFQUFFO0FBRlQsR0FEUTtBQUZaLENBRHFDLENBQWhDOzs7Ozs7Ozs7OzBCQUFNVCxlIiwiZmlsZSI6IjU0M2JiNDgtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAcmVhY3QtcGFnZS9jb3JlL2xpYi9pbmRleC5jc3MnOyAvLyB3ZSBhbHNvIHdhbnQgdG8gbG9hZCB0aGUgc3R5bGVzaGVldHNcclxuaW1wb3J0IEVkaXRvciBmcm9tICdAcmVhY3QtcGFnZS9lZGl0b3InO1xyXG5pbXBvcnQgJ0ByZWFjdC1wYWdlL3VpL2xpYi9pbmRleC5jc3MnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIFRoZSBjb250ZW50IHN0YXRlXHJcbmltcG9ydCBjb250ZW50cyBmcm9tICcuL2NvbnRlbnRzJztcclxuaW1wb3J0IHsgcGx1Z2lucyB9IGZyb20gJy4vcGx1Z2lucyc7XHJcbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XHJcbmltcG9ydCBTbGF0ZUVkaXRvciwge1xyXG4gIFNsYXRlRWRpdG9yT25DaGFuZ2VIYW5kbGVyLFxyXG59IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9jb21tb24vY29tcG9uZW50cy9zbGF0ZUVkaXRvci9TbGF0ZUVkaXRvcic7XHJcbmltcG9ydCB7IE5vZGUgfSBmcm9tICdzbGF0ZSc7XHJcbmltcG9ydCB7IHNsYXRlRW1wdHlWYWx1ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9jb21tb24vY29tcG9uZW50cy9zbGF0ZUVkaXRvci9zbGF0ZUVtcHR5VmFsdWUnO1xyXG5cclxuaWYgKFxyXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcclxuICBwcm9jZXNzLmVudi5SRUFDVF9BUFBfVFJBQ0VfVVBEQVRFU1xyXG4pIHtcclxuICBjb25zdCB7IHdoeURpZFlvdVVwZGF0ZSB9ID0gcmVxdWlyZSgnd2h5LWRpZC15b3UtdXBkYXRlJyk7XHJcbiAgd2h5RGlkWW91VXBkYXRlKFJlYWN0KTtcclxufVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG5jb25zdCBLZWVwU3RhdGVFZGl0b3IgPSAoeyB2YWx1ZSwgLi4ucHJvcHMgfTogYW55KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh2YWx1ZSk7XHJcbiAgcmV0dXJuIDxFZGl0b3Igey4uLnByb3BzfSB2YWx1ZT17c3RhdGV9IG9uQ2hhbmdlPXtzZXRTdGF0ZX0gLz47XHJcbn07XHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFzaWNQcm9wcyB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXNpY1N0YXRlIHt9XHJcblxyXG5leHBvcnQgY29uc3QgQmFzaWM6IFJlYWN0LkZDPEJhc2ljUHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGU8Tm9kZVtdPihzbGF0ZUVtcHR5VmFsdWUpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlOiBTbGF0ZUVkaXRvck9uQ2hhbmdlSGFuZGxlciA9IHZhbCA9PiBzZXRWYWx1ZSh2YWwudmFsdWUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8U2xhdGVFZGl0b3JcclxuICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiQ3VzdG9tIHBsYWNlaG9sZGVyXCJcclxuICAgICAgICBsYWJlbD1cIlNsYXRlIGVkaXRvclwiXHJcbiAgICAgICAgbWF4Q2hhcnM9ezEwMH1cclxuICAgICAgLz5cclxuICAgICAgPEtlZXBTdGF0ZUVkaXRvclxyXG4gICAgICAgIHBsdWdpbnM9e3BsdWdpbnN9XHJcbiAgICAgICAgdmFsdWU9e2NvbnRlbnRzfVxyXG4gICAgICAgIC8vIG9uQ2hhbmdlPXtzID0+IGNvbnNvbGUubG9nKCdvbiBjaGFuZ2UsIG5ldyBzdGF0ZScsIHMpfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2ljO1xyXG4iLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnc2xhdGUnO1xyXG5leHBvcnQgY29uc3Qgc2xhdGVFbXB0eVZhbHVlOiBOb2RlW10gPSBbXHJcbiAge1xyXG4gICAgdHlwZTogJ3BhcmFncmFwaCcsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgbWFya3M6IFtdLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5dO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9