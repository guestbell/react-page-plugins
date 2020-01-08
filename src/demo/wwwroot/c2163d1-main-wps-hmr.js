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
/* harmony import */ var _react_page_ui_lib_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-page/ui/lib/index.css */ "./node_modules/@react-page/ui/lib/index.css");
/* harmony import */ var _react_page_ui_lib_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_page_ui_lib_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contents */ "./src/demo/ClientApp/pages/basic/contents.ts");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugins */ "./src/demo/ClientApp/pages/basic/plugins.ts");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.scss */ "./src/demo/ClientApp/pages/basic/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_common_components_slateEditor_SlateEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../lib/common/components/slateEditor/SlateEditor */ "./src/lib/common/components/slateEditor/SlateEditor.tsx");
/* harmony import */ var _lib_common_components_slateEditor_slateEmptyValue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../lib/common/components/slateEditor/slateEmptyValue */ "./src/lib/common/components/slateEditor/slateEmptyValue.ts");
/* harmony import */ var _lib_common_components_slateRenderer_SlateRenderer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../lib/common/components/slateRenderer/SlateRenderer */ "./src/lib/common/components/slateRenderer/SlateRenderer.tsx");
/* harmony import */ var _lib_common_components_slateRenderer_rules__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../lib/common/components/slateRenderer/rules */ "./src/lib/common/components/slateRenderer/rules.tsx");
/* harmony import */ var guestbell_forms_build_components_button_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! guestbell-forms/build/components/button/Button */ "./node_modules/guestbell-forms/build/components/button/Button.js");
/* harmony import */ var guestbell_forms_build_components_button_Button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(guestbell_forms_build_components_button_Button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_common_slateMigrations_migrations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../lib/common/slateMigrations/migrations */ "./src/lib/common/slateMigrations/migrations.ts");
/* harmony import */ var _react_page_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @react-page/core */ "./node_modules/@react-page/core/lib-es/index.js");
/* harmony import */ var _react_page_renderer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @react-page/renderer */ "./node_modules/@react-page/renderer/lib-es/index.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

 // we also want to load the stylesheets


 // The content state













if ( true && process.env.REACT_APP_TRACE_UPDATES) {
  var _require = __webpack_require__(/*! why-did-you-update */ "./node_modules/why-did-you-update/lib/index.js"),
      whyDidYouUpdate = _require.whyDidYouUpdate;

  whyDidYouUpdate(react__WEBPACK_IMPORTED_MODULE_2__);
} // tslint:disable-next-line:no-any

/*const KeepStateEditor = ({ value, ...props }: any) => {
  const [state, setState] = React.useState(value);
  return <Editor {...props} value={state} onChange={setState} />;
};*/


var editor = new _react_page_core__WEBPACK_IMPORTED_MODULE_12__["default"]({
  plugins: _plugins__WEBPACK_IMPORTED_MODULE_4__["plugins"],
  defaultPlugin: _plugins__WEBPACK_IMPORTED_MODULE_4__["plugins"].content.find(function (c) {
    return c.name === 'ory/editor/core/content/slate';
  }),
  editables: [_contents__WEBPACK_IMPORTED_MODULE_3__["default"]]
});
editor.trigger.mode.edit();
var Basic = function Basic(props) {
  // tslint:disable-next-line: no-any
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"]([{
    type: 'PARAGRAPH',
    children: [{
      text: ''
    }]
  }]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var onChange = function onChange(val) {
    return setValue(val.value);
  };

  var resetValue = function resetValue() {
    setValue(Object(_lib_common_components_slateEditor_slateEmptyValue__WEBPACK_IMPORTED_MODULE_7__["slateEmptyValue"])());
  };

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__["useState"](_contents__WEBPACK_IMPORTED_MODULE_3__["default"]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      content = _React$useState4[0],
      setContent = _React$useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_lib_common_components_slateEditor_SlateEditor__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: value,
    onChange: onChange,
    placeholder: "Custom placeholder",
    label: "Slate editor",
    maxChars: 100,
    migrations: _lib_common_slateMigrations_migrations__WEBPACK_IMPORTED_MODULE_11__["default"]
  }),  false && false, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("h3", null, "Pure render"), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: "p-3"
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_lib_common_components_slateRenderer_SlateRenderer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: value,
    nodeRule: _lib_common_components_slateRenderer_rules__WEBPACK_IMPORTED_MODULE_9__["default"].nodeRule,
    textRule: _lib_common_components_slateRenderer_rules__WEBPACK_IMPORTED_MODULE_9__["default"].textRule
  })), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](guestbell_forms_build_components_button_Button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    onClick: resetValue,
    className: "mb-3"
  }, "Reset value"),  false && false, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_react_page_core__WEBPACK_IMPORTED_MODULE_12__["Editable"], {
    editor: editor,
    id: _contents__WEBPACK_IMPORTED_MODULE_3__["default"].id,
    onChange: function onChange(s) {
      return setContent(s);
    }
  }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_react_page_renderer__WEBPACK_IMPORTED_MODULE_13__["HTMLRenderer"], {
    plugins: _plugins__WEBPACK_IMPORTED_MODULE_4__["plugins"],
    state: content
  }));
};

__signature__(Basic, "useState{[value, setValue]([\r\n    {\r\n      type: 'PARAGRAPH',\r\n      children: [\r\n        {\r\n          text: '',\r\n        },\r\n      ],\r\n    },\r\n  ])}\nuseState{[content, setContent](contents)}");

var _default = Basic;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(editor, "editor", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\demo\\ClientApp\\pages\\basic\\Basic.tsx");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DbGllbnRBcHAvcGFnZXMvYmFzaWMvQmFzaWMudHN4Il0sIm5hbWVzIjpbInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfVFJBQ0VfVVBEQVRFUyIsInJlcXVpcmUiLCJ3aHlEaWRZb3VVcGRhdGUiLCJSZWFjdCIsImVkaXRvciIsIkVkaXRvciIsInBsdWdpbnMiLCJkZWZhdWx0UGx1Z2luIiwiY29udGVudCIsImZpbmQiLCJjIiwibmFtZSIsImVkaXRhYmxlcyIsImNvbnRlbnRzIiwidHJpZ2dlciIsIm1vZGUiLCJlZGl0IiwiQmFzaWMiLCJwcm9wcyIsInR5cGUiLCJjaGlsZHJlbiIsInRleHQiLCJ2YWx1ZSIsInNldFZhbHVlIiwib25DaGFuZ2UiLCJ2YWwiLCJyZXNldFZhbHVlIiwic2xhdGVFbXB0eVZhbHVlIiwic2V0Q29udGVudCIsIm1pZ3JhdGlvbnMiLCJydWxlcyIsIm5vZGVSdWxlIiwidGV4dFJ1bGUiLCJpZCIsInMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUF5Qzs7QUFDekM7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQ0VBLEtBQUEsSUFDQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLHVCQUZkLEVBR0U7QUFBQSxpQkFDNEJDLG1CQUFPLENBQUMsMEVBQUQsQ0FEbkM7QUFBQSxNQUNRQyxlQURSLFlBQ1FBLGVBRFI7O0FBRUFBLGlCQUFlLENBQUNDLGtDQUFELENBQWY7QUFDRCxDLENBRUQ7O0FBQ0E7Ozs7OztBQU9BLElBQU1DLE1BQU0sR0FBRyxJQUFJQyx5REFBSixDQUFXO0FBQ3hCQyxTQUFPLEVBQUVBLGdEQURlO0FBRXhCQyxlQUFhLEVBQUVELGdEQUFPLENBQUNFLE9BQVIsQ0FBZ0JDLElBQWhCLENBQ2IsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0MsSUFBRixLQUFXLCtCQUFmO0FBQUEsR0FEWSxDQUZTO0FBS3hCQyxXQUFTLEVBQUUsQ0FBQ0MsaURBQUQ7QUFMYSxDQUFYLENBQWY7QUFPQVQsTUFBTSxDQUFDVSxPQUFQLENBQWVDLElBQWYsQ0FBb0JDLElBQXBCO0FBQ08sSUFBTUMsS0FBMkIsR0FBRyxTQUE5QkEsS0FBOEIsQ0FBQUMsS0FBSyxFQUFJO0FBQ2xEO0FBRGtELHdCQUV4QmYsOENBQUEsQ0FBb0IsQ0FDNUM7QUFDRWdCLFFBQUksRUFBRSxXQURSO0FBRUVDLFlBQVEsRUFBRSxDQUNSO0FBQ0VDLFVBQUksRUFBRTtBQURSLEtBRFE7QUFGWixHQUQ0QyxDQUFwQixDQUZ3QjtBQUFBO0FBQUEsTUFFM0NDLEtBRjJDO0FBQUEsTUFFcENDLFFBRm9DOztBQVlsRCxNQUFNQyxRQUFvQyxHQUFHLFNBQXZDQSxRQUF1QyxDQUFBQyxHQUFHO0FBQUEsV0FBSUYsUUFBUSxDQUFDRSxHQUFHLENBQUNILEtBQUwsQ0FBWjtBQUFBLEdBQWhEOztBQUNBLE1BQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJILFlBQVEsQ0FBQ0ksMEdBQWUsRUFBaEIsQ0FBUjtBQUNELEdBRkQ7O0FBYmtELHlCQWdCcEJ4Qiw4Q0FBQSxDQUFlVSxpREFBZixDQWhCb0I7QUFBQTtBQUFBLE1BZ0IzQ0wsT0FoQjJDO0FBQUEsTUFnQmxDb0IsVUFoQmtDOztBQWlCbEQsU0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0Usb0RBQUMsc0ZBQUQ7QUFDRSxTQUFLLEVBQUVOLEtBRFQ7QUFFRSxZQUFRLEVBQUVFLFFBRlo7QUFHRSxlQUFXLEVBQUMsb0JBSGQ7QUFJRSxTQUFLLEVBQUMsY0FKUjtBQUtFLFlBQVEsRUFBRSxHQUxaO0FBTUUsY0FBVSxFQUFFSywrRUFBVUE7QUFOeEIsSUFERixFQVNHLE1BQUssSUFBSSxLQVRaLEVBVUUsOEVBVkYsRUFXRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0Usb0RBQUMsMEZBQUQ7QUFDRSxTQUFLLEVBQUVQLEtBRFQ7QUFFRSxZQUFRLEVBQUVRLGtGQUFLLENBQUNDLFFBRmxCO0FBR0UsWUFBUSxFQUFFRCxrRkFBSyxDQUFDRTtBQUhsQixJQURGLENBWEYsRUFrQkUsb0RBQUMsc0ZBQUQ7QUFBUSxXQUFPLEVBQUVOLFVBQWpCO0FBQTZCLGFBQVMsRUFBQztBQUF2QyxtQkFsQkYsRUFxQkcsTUFBSyxJQUFJLEtBckJaLEVBc0JFLG9EQUFDLDBEQUFEO0FBQ0UsVUFBTSxFQUFFdEIsTUFEVjtBQUVFLE1BQUUsRUFBRVMsaURBQVEsQ0FBQ29CLEVBRmY7QUFHRSxZQUFRLEVBQUUsa0JBQUFDLENBQUM7QUFBQSxhQUFJTixVQUFVLENBQUNNLENBQUQsQ0FBZDtBQUFBO0FBSGIsSUF0QkYsRUEyQkUsb0RBQUMsa0VBQUQ7QUFBYyxXQUFPLEVBQUU1QixnREFBdkI7QUFBZ0MsU0FBSyxFQUFFRTtBQUF2QyxJQTNCRixDQURGO0FBZ0NELENBakRNOztjQUFNUyxLOztlQW1ERUEsSztBQUFBOzs7Ozs7Ozs7OzBCQTNEVGIsTTswQkFRT2EsSyIsImZpbGUiOiJjMjE2M2QxLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQHJlYWN0LXBhZ2UvY29yZS9saWIvaW5kZXguY3NzJzsgLy8gd2UgYWxzbyB3YW50IHRvIGxvYWQgdGhlIHN0eWxlc2hlZXRzXHJcbmltcG9ydCAnQHJlYWN0LXBhZ2UvdWkvbGliL2luZGV4LmNzcyc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gVGhlIGNvbnRlbnQgc3RhdGVcclxuaW1wb3J0IGNvbnRlbnRzIGZyb20gJy4vY29udGVudHMnO1xyXG5pbXBvcnQgeyBwbHVnaW5zIH0gZnJvbSAnLi9wbHVnaW5zJztcclxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcclxuaW1wb3J0IFNsYXRlRWRpdG9yLCB7XHJcbiAgU2xhdGVFZGl0b3JPbkNoYW5nZUhhbmRsZXIsXHJcbn0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2NvbW1vbi9jb21wb25lbnRzL3NsYXRlRWRpdG9yL1NsYXRlRWRpdG9yJztcclxuaW1wb3J0IHsgc2xhdGVFbXB0eVZhbHVlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2NvbW1vbi9jb21wb25lbnRzL3NsYXRlRWRpdG9yL3NsYXRlRW1wdHlWYWx1ZSc7XHJcbmltcG9ydCBTbGF0ZVJlbmRlcmVyIGZyb20gJy4uLy4uLy4uLy4uL2xpYi9jb21tb24vY29tcG9uZW50cy9zbGF0ZVJlbmRlcmVyL1NsYXRlUmVuZGVyZXInO1xyXG5pbXBvcnQgcnVsZXMgZnJvbSAnLi4vLi4vLi4vLi4vbGliL2NvbW1vbi9jb21wb25lbnRzL3NsYXRlUmVuZGVyZXIvcnVsZXMnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdndWVzdGJlbGwtZm9ybXMvYnVpbGQvY29tcG9uZW50cy9idXR0b24vQnV0dG9uJztcclxuaW1wb3J0IG1pZ3JhdGlvbnMgZnJvbSAnLi4vLi4vLi4vLi4vbGliL2NvbW1vbi9zbGF0ZU1pZ3JhdGlvbnMvbWlncmF0aW9ucyc7XHJcbmltcG9ydCBFZGl0b3IsIHsgRWRpdGFibGUgfSBmcm9tICdAcmVhY3QtcGFnZS9jb3JlJztcclxuaW1wb3J0IHsgSFRNTFJlbmRlcmVyIH0gZnJvbSAnQHJlYWN0LXBhZ2UvcmVuZGVyZXInO1xyXG5cclxuaWYgKFxyXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcclxuICBwcm9jZXNzLmVudi5SRUFDVF9BUFBfVFJBQ0VfVVBEQVRFU1xyXG4pIHtcclxuICBjb25zdCB7IHdoeURpZFlvdVVwZGF0ZSB9ID0gcmVxdWlyZSgnd2h5LWRpZC15b3UtdXBkYXRlJyk7XHJcbiAgd2h5RGlkWW91VXBkYXRlKFJlYWN0KTtcclxufVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4vKmNvbnN0IEtlZXBTdGF0ZUVkaXRvciA9ICh7IHZhbHVlLCAuLi5wcm9wcyB9OiBhbnkpID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHZhbHVlKTtcclxuICByZXR1cm4gPEVkaXRvciB7Li4ucHJvcHN9IHZhbHVlPXtzdGF0ZX0gb25DaGFuZ2U9e3NldFN0YXRlfSAvPjtcclxufTsqL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXNpY1Byb3BzIHt9XHJcblxyXG5jb25zdCBlZGl0b3IgPSBuZXcgRWRpdG9yKHtcclxuICBwbHVnaW5zOiBwbHVnaW5zLFxyXG4gIGRlZmF1bHRQbHVnaW46IHBsdWdpbnMuY29udGVudC5maW5kKFxyXG4gICAgYyA9PiBjLm5hbWUgPT09ICdvcnkvZWRpdG9yL2NvcmUvY29udGVudC9zbGF0ZSdcclxuICApLFxyXG4gIGVkaXRhYmxlczogW2NvbnRlbnRzXSxcclxufSk7XHJcbmVkaXRvci50cmlnZ2VyLm1vZGUuZWRpdCgpO1xyXG5leHBvcnQgY29uc3QgQmFzaWM6IFJlYWN0LkZDPEJhc2ljUHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZTxhbnk+KFtcclxuICAgIHtcclxuICAgICAgdHlwZTogJ1BBUkFHUkFQSCcsXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXSk7XHJcbiAgY29uc3Qgb25DaGFuZ2U6IFNsYXRlRWRpdG9yT25DaGFuZ2VIYW5kbGVyID0gdmFsID0+IHNldFZhbHVlKHZhbC52YWx1ZSk7XHJcbiAgY29uc3QgcmVzZXRWYWx1ZSA9ICgpID0+IHtcclxuICAgIHNldFZhbHVlKHNsYXRlRW1wdHlWYWx1ZSgpKTtcclxuICB9O1xyXG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IFJlYWN0LnVzZVN0YXRlKGNvbnRlbnRzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPFNsYXRlRWRpdG9yXHJcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkN1c3RvbSBwbGFjZWhvbGRlclwiXHJcbiAgICAgICAgbGFiZWw9XCJTbGF0ZSBlZGl0b3JcIlxyXG4gICAgICAgIG1heENoYXJzPXsxMDB9XHJcbiAgICAgICAgbWlncmF0aW9ucz17bWlncmF0aW9uc31cclxuICAgICAgLz5cclxuICAgICAge2ZhbHNlICYmIDxwcmU+e0pTT04uc3RyaW5naWZ5KHZhbHVlLCBudWxsLCAxKX08L3ByZT59XHJcbiAgICAgIDxoMz5QdXJlIHJlbmRlcjwvaDM+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zXCI+XHJcbiAgICAgICAgPFNsYXRlUmVuZGVyZXJcclxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgIG5vZGVSdWxlPXtydWxlcy5ub2RlUnVsZX1cclxuICAgICAgICAgIHRleHRSdWxlPXtydWxlcy50ZXh0UnVsZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtyZXNldFZhbHVlfSBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgUmVzZXQgdmFsdWVcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIHtmYWxzZSAmJiA8cHJlPntKU09OLnN0cmluZ2lmeShjb250ZW50LCBudWxsLCAxKX08L3ByZT59XHJcbiAgICAgIDxFZGl0YWJsZVxyXG4gICAgICAgIGVkaXRvcj17ZWRpdG9yfVxyXG4gICAgICAgIGlkPXtjb250ZW50cy5pZH1cclxuICAgICAgICBvbkNoYW5nZT17cyA9PiBzZXRDb250ZW50KHMpfVxyXG4gICAgICAvPlxyXG4gICAgICA8SFRNTFJlbmRlcmVyIHBsdWdpbnM9e3BsdWdpbnN9IHN0YXRlPXtjb250ZW50fSAvPlxyXG4gICAgICB7Lyo8cHJlPntKU09OLnN0cmluZ2lmeShjb250ZW50LCBudWxsLCAyKX08L3ByZT4qL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNpYztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==