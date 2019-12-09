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
/* harmony import */ var _lib_common_components_slateRenderer_SlateRenderer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../lib/common/components/slateRenderer/SlateRenderer */ "./src/lib/common/components/slateRenderer/SlateRenderer.tsx");
/* harmony import */ var _lib_common_components_slateRenderer_rules__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../lib/common/components/slateRenderer/rules */ "./src/lib/common/components/slateRenderer/rules.tsx");
/* harmony import */ var guestbell_forms_build_components_button_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! guestbell-forms/build/components/button/Button */ "./node_modules/guestbell-forms/build/components/button/Button.js");
/* harmony import */ var guestbell_forms_build_components_button_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(guestbell_forms_build_components_button_Button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_common_slateMigrations_migrations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../lib/common/slateMigrations/migrations */ "./src/lib/common/slateMigrations/migrations.ts");
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
  // tslint:disable-next-line: no-any
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3__["useState"]([{
    type: 'PARAGRAPH',
    children: [{
      text: ''
    }]
  }]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      value = _React$useState4[0],
      setValue = _React$useState4[1];

  var onChange = function onChange(val) {
    return setValue(val.value);
  };

  var resetValue = function resetValue() {
    setValue(Object(_lib_common_components_slateEditor_slateEmptyValue__WEBPACK_IMPORTED_MODULE_8__["slateEmptyValue"])());
  };

  return react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_lib_common_components_slateEditor_SlateEditor__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: value,
    onChange: onChange,
    placeholder: "Custom placeholder",
    label: "Slate editor",
    maxChars: 100,
    migrations: _lib_common_slateMigrations_migrations__WEBPACK_IMPORTED_MODULE_12__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("h3", null, "Pure render"), react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    className: "p-3"
  }, react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_lib_common_components_slateRenderer_SlateRenderer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: value,
    nodeRule: _lib_common_components_slateRenderer_rules__WEBPACK_IMPORTED_MODULE_10__["default"].nodeRule,
    textRule: _lib_common_components_slateRenderer_rules__WEBPACK_IMPORTED_MODULE_10__["default"].textRule
  })), react__WEBPACK_IMPORTED_MODULE_3__["createElement"](guestbell_forms_build_components_button_Button__WEBPACK_IMPORTED_MODULE_11__["Button"], {
    onClick: resetValue
  }, "Reset value"), react__WEBPACK_IMPORTED_MODULE_3__["createElement"](KeepStateEditor, {
    plugins: _plugins__WEBPACK_IMPORTED_MODULE_5__["plugins"],
    value: _contents__WEBPACK_IMPORTED_MODULE_4__["default"] // onChange={s => console.log('on change, new state', s)}

  }));
};

__signature__(Basic, "useState{[value, setValue]([\r\n    {\r\n      type: 'PARAGRAPH',\r\n      children: [\r\n        {\r\n          text: '',\r\n        },\r\n      ],\r\n    },\r\n  ])}");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DbGllbnRBcHAvcGFnZXMvYmFzaWMvQmFzaWMudHN4Il0sIm5hbWVzIjpbInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfVFJBQ0VfVVBEQVRFUyIsInJlcXVpcmUiLCJ3aHlEaWRZb3VVcGRhdGUiLCJSZWFjdCIsIktlZXBTdGF0ZUVkaXRvciIsInZhbHVlIiwicHJvcHMiLCJzdGF0ZSIsInNldFN0YXRlIiwiQmFzaWMiLCJ0eXBlIiwiY2hpbGRyZW4iLCJ0ZXh0Iiwic2V0VmFsdWUiLCJvbkNoYW5nZSIsInZhbCIsInJlc2V0VmFsdWUiLCJzbGF0ZUVtcHR5VmFsdWUiLCJtaWdyYXRpb25zIiwicnVsZXMiLCJub2RlUnVsZSIsInRleHRSdWxlIiwicGx1Z2lucyIsImNvbnRlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUF5Qzs7QUFDekM7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUNFQSxLQUFBLElBQ0FBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyx1QkFGZCxFQUdFO0FBQUEsaUJBQzRCQyxtQkFBTyxDQUFDLDBFQUFELENBRG5DO0FBQUEsTUFDUUMsZUFEUixZQUNRQSxlQURSOztBQUVBQSxpQkFBZSxDQUFDQyxrQ0FBRCxDQUFmO0FBQ0QsQyxDQUVEOzs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQThCO0FBQUEsTUFBM0JDLEtBQTJCLFFBQTNCQSxLQUEyQjtBQUFBLE1BQWpCQyxLQUFpQjs7QUFBQSx3QkFDMUJILDhDQUFBLENBQWVFLEtBQWYsQ0FEMEI7QUFBQTtBQUFBLE1BQzdDRSxLQUQ2QztBQUFBLE1BQ3RDQyxRQURzQzs7QUFFcEQsU0FBTyxvREFBQywwREFBRCxlQUFZRixLQUFaO0FBQW1CLFNBQUssRUFBRUMsS0FBMUI7QUFBaUMsWUFBUSxFQUFFQztBQUEzQyxLQUFQO0FBQ0QsQ0FIRDs7Y0FBTUosZTs7QUFRQyxJQUFNSyxLQUEyQixHQUFHLFNBQTlCQSxLQUE4QixDQUFBSCxLQUFLLEVBQUk7QUFDbEQ7QUFEa0QseUJBRXhCSCw4Q0FBQSxDQUFvQixDQUM1QztBQUNFTyxRQUFJLEVBQUUsV0FEUjtBQUVFQyxZQUFRLEVBQUUsQ0FDUjtBQUNFQyxVQUFJLEVBQUU7QUFEUixLQURRO0FBRlosR0FENEMsQ0FBcEIsQ0FGd0I7QUFBQTtBQUFBLE1BRTNDUCxLQUYyQztBQUFBLE1BRXBDUSxRQUZvQzs7QUFZbEQsTUFBTUMsUUFBb0MsR0FBRyxTQUF2Q0EsUUFBdUMsQ0FBQUMsR0FBRztBQUFBLFdBQUlGLFFBQVEsQ0FBQ0UsR0FBRyxDQUFDVixLQUFMLENBQVo7QUFBQSxHQUFoRDs7QUFDQSxNQUFNVyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCSCxZQUFRLENBQUNJLDBHQUFlLEVBQWhCLENBQVI7QUFDRCxHQUZEOztBQUdBLFNBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLG9EQUFDLHNGQUFEO0FBQ0UsU0FBSyxFQUFFWixLQURUO0FBRUUsWUFBUSxFQUFFUyxRQUZaO0FBR0UsZUFBVyxFQUFDLG9CQUhkO0FBSUUsU0FBSyxFQUFDLGNBSlI7QUFLRSxZQUFRLEVBQUUsR0FMWjtBQU1FLGNBQVUsRUFBRUksK0VBQVVBO0FBTnhCLElBREYsRUFTRSw4RUFURixFQVVFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSxvREFBQywwRkFBRDtBQUNFLFNBQUssRUFBRWIsS0FEVDtBQUVFLFlBQVEsRUFBRWMsbUZBQUssQ0FBQ0MsUUFGbEI7QUFHRSxZQUFRLEVBQUVELG1GQUFLLENBQUNFO0FBSGxCLElBREYsQ0FWRixFQWlCRSxvREFBQyxzRkFBRDtBQUFRLFdBQU8sRUFBRUw7QUFBakIsbUJBakJGLEVBa0JFLG9EQUFDLGVBQUQ7QUFDRSxXQUFPLEVBQUVNLGdEQURYO0FBRUUsU0FBSyxFQUFFQyxpREFGVCxDQUdFOztBQUhGLElBbEJGLENBREY7QUEwQkQsQ0ExQ007O2NBQU1kLEs7O2VBNENFQSxLO0FBQUE7Ozs7Ozs7Ozs7MEJBcERUTCxlOzBCQVFPSyxLIiwiZmlsZSI6ImQ0NGQ2OTAtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAcmVhY3QtcGFnZS9jb3JlL2xpYi9pbmRleC5jc3MnOyAvLyB3ZSBhbHNvIHdhbnQgdG8gbG9hZCB0aGUgc3R5bGVzaGVldHNcclxuaW1wb3J0IEVkaXRvciBmcm9tICdAcmVhY3QtcGFnZS9lZGl0b3InO1xyXG5pbXBvcnQgJ0ByZWFjdC1wYWdlL3VpL2xpYi9pbmRleC5jc3MnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIFRoZSBjb250ZW50IHN0YXRlXHJcbmltcG9ydCBjb250ZW50cyBmcm9tICcuL2NvbnRlbnRzJztcclxuaW1wb3J0IHsgcGx1Z2lucyB9IGZyb20gJy4vcGx1Z2lucyc7XHJcbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XHJcbmltcG9ydCBTbGF0ZUVkaXRvciwge1xyXG4gIFNsYXRlRWRpdG9yT25DaGFuZ2VIYW5kbGVyLFxyXG59IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9jb21tb24vY29tcG9uZW50cy9zbGF0ZUVkaXRvci9TbGF0ZUVkaXRvcic7XHJcbmltcG9ydCB7IHNsYXRlRW1wdHlWYWx1ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9jb21tb24vY29tcG9uZW50cy9zbGF0ZUVkaXRvci9zbGF0ZUVtcHR5VmFsdWUnO1xyXG5pbXBvcnQgU2xhdGVSZW5kZXJlciBmcm9tICcuLi8uLi8uLi8uLi9saWIvY29tbW9uL2NvbXBvbmVudHMvc2xhdGVSZW5kZXJlci9TbGF0ZVJlbmRlcmVyJztcclxuaW1wb3J0IHJ1bGVzIGZyb20gJy4uLy4uLy4uLy4uL2xpYi9jb21tb24vY29tcG9uZW50cy9zbGF0ZVJlbmRlcmVyL3J1bGVzJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnZ3Vlc3RiZWxsLWZvcm1zL2J1aWxkL2NvbXBvbmVudHMvYnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCBtaWdyYXRpb25zIGZyb20gJy4uLy4uLy4uLy4uL2xpYi9jb21tb24vc2xhdGVNaWdyYXRpb25zL21pZ3JhdGlvbnMnO1xyXG5cclxuaWYgKFxyXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcclxuICBwcm9jZXNzLmVudi5SRUFDVF9BUFBfVFJBQ0VfVVBEQVRFU1xyXG4pIHtcclxuICBjb25zdCB7IHdoeURpZFlvdVVwZGF0ZSB9ID0gcmVxdWlyZSgnd2h5LWRpZC15b3UtdXBkYXRlJyk7XHJcbiAgd2h5RGlkWW91VXBkYXRlKFJlYWN0KTtcclxufVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG5jb25zdCBLZWVwU3RhdGVFZGl0b3IgPSAoeyB2YWx1ZSwgLi4ucHJvcHMgfTogYW55KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh2YWx1ZSk7XHJcbiAgcmV0dXJuIDxFZGl0b3Igey4uLnByb3BzfSB2YWx1ZT17c3RhdGV9IG9uQ2hhbmdlPXtzZXRTdGF0ZX0gLz47XHJcbn07XHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFzaWNQcm9wcyB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXNpY1N0YXRlIHt9XHJcblxyXG5leHBvcnQgY29uc3QgQmFzaWM6IFJlYWN0LkZDPEJhc2ljUHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZTxhbnk+KFtcclxuICAgIHtcclxuICAgICAgdHlwZTogJ1BBUkFHUkFQSCcsXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXSk7XHJcbiAgY29uc3Qgb25DaGFuZ2U6IFNsYXRlRWRpdG9yT25DaGFuZ2VIYW5kbGVyID0gdmFsID0+IHNldFZhbHVlKHZhbC52YWx1ZSk7XHJcbiAgY29uc3QgcmVzZXRWYWx1ZSA9ICgpID0+IHtcclxuICAgIHNldFZhbHVlKHNsYXRlRW1wdHlWYWx1ZSgpKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8U2xhdGVFZGl0b3JcclxuICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiQ3VzdG9tIHBsYWNlaG9sZGVyXCJcclxuICAgICAgICBsYWJlbD1cIlNsYXRlIGVkaXRvclwiXHJcbiAgICAgICAgbWF4Q2hhcnM9ezEwMH1cclxuICAgICAgICBtaWdyYXRpb25zPXttaWdyYXRpb25zfVxyXG4gICAgICAvPlxyXG4gICAgICA8aDM+UHVyZSByZW5kZXI8L2gzPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPlxyXG4gICAgICAgIDxTbGF0ZVJlbmRlcmVyXHJcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICBub2RlUnVsZT17cnVsZXMubm9kZVJ1bGV9XHJcbiAgICAgICAgICB0ZXh0UnVsZT17cnVsZXMudGV4dFJ1bGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxCdXR0b24gb25DbGljaz17cmVzZXRWYWx1ZX0+UmVzZXQgdmFsdWU8L0J1dHRvbj5cclxuICAgICAgPEtlZXBTdGF0ZUVkaXRvclxyXG4gICAgICAgIHBsdWdpbnM9e3BsdWdpbnN9XHJcbiAgICAgICAgdmFsdWU9e2NvbnRlbnRzfVxyXG4gICAgICAgIC8vIG9uQ2hhbmdlPXtzID0+IGNvbnNvbGUubG9nKCdvbiBjaGFuZ2UsIG5ldyBzdGF0ZScsIHMpfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2ljO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9