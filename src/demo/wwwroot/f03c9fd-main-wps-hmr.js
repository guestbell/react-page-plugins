webpackHotUpdate("main",{

/***/ "./src/lib/slate/plugins/color/ColorButton.tsx":
/*!*****************************************************!*\
  !*** ./src/lib/slate/plugins/color/ColorButton.tsx ***!
  \*****************************************************/
/*! exports provided: ColorButtonRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorButtonRaw", function() { return ColorButtonRaw; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate-react */ "./node_modules/slate-react/dist/index.es.js");
/* harmony import */ var _Controls_buttons_SlateButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Controls/buttons/SlateButton */ "./src/lib/slate/Controls/buttons/SlateButton.tsx");
/* harmony import */ var _withColors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withColors */ "./src/lib/slate/plugins/color/withColors.ts");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _react_page_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-page/core */ "./node_modules/@react-page/core/lib-es/index.js");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-color */ "./node_modules/react-color/lib/index.js");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_styles_createStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles/createStyles */ "./node_modules/@material-ui/core/styles/createStyles.js");
/* harmony import */ var _material_ui_core_styles_createStyles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_createStyles__WEBPACK_IMPORTED_MODULE_11__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};













var styles = _material_ui_core_styles_createStyles__WEBPACK_IMPORTED_MODULE_11___default()({
  chromePicker: {
    boxShadow: 'none !important'
  }
}); // Because types are broken and not accepting className
// tslint:disable-next-line: no-any

var ChromePickerUntyped = react_color__WEBPACK_IMPORTED_MODULE_9__["ChromePicker"];
var FormatColorTextIcon = Object(_react_page_core__WEBPACK_IMPORTED_MODULE_8__["lazyLoad"])(function () {
  return __webpack_require__.e(/*! import() */ 26).then(__webpack_require__.t.bind(null, /*! @material-ui/icons/FormatColorText */ "./node_modules/@material-ui/icons/FormatColorText.js", 7));
});
var ColorButtonRaw = function ColorButtonRaw(props) {
  var classes = props.classes;
  var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_1__["useSlate"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__["useState"](editor.selection),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      selection = _React$useState4[0],
      setSelection = _React$useState4[1];

  var handleClickOpen = function handleClickOpen() {
    var colors = Object(_withColors__WEBPACK_IMPORTED_MODULE_3__["getActiveColors"])(editor);

    if (colors && colors[0]) {
      setColor(colors[0]);
    }

    setSelection(editor.selection);
    setOpen(true);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  var changeColor = function changeColor(colorResult) {
    setColor(colorResult.rgb);
  };

  var clearColor = function clearColor() {
    editor.selection = selection;
    editor.exec({
      type: _withColors__WEBPACK_IMPORTED_MODULE_3__["ColorCommands"].ClearColor
    });
    handleClose();
  };

  var commitColor = function commitColor() {
    editor.selection = selection;
    editor.exec({
      type: _withColors__WEBPACK_IMPORTED_MODULE_3__["ColorCommands"].SetColor,
      color: color
    });
    handleClose();
  };

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({
    r: 16,
    g: 189,
    b: 199,
    a: 1
  }),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      color = _React$useState6[0],
      setColor = _React$useState6[1];

  var isActive = Object(_withColors__WEBPACK_IMPORTED_MODULE_3__["isColorActive"])(editor);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Controls_buttons_SlateButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isActive: isActive,
    onClick: handleClickOpen,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FormatColorTextIcon, null),
    title: "Text color"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClose: handleClose,
    open: open
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ChromePickerUntyped, {
    className: classes.chromePicker,
    onChange: changeColor,
    color: color
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: clearColor,
    disabled: !isActive
  }, "Clear"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: commitColor,
    color: "primary"
  }, "OK"))));
};

__signature__(ColorButtonRaw, "useSlate{editor}\nuseState{[open, setOpen](false)}\nuseState{[selection, setSelection](editor.selection)}\nuseState{[color, setColor]({\r\n    r: 16,\r\n    g: 189,\r\n    b: 199,\r\n    a: 1,\r\n  })}", function () {
  return [slate_react__WEBPACK_IMPORTED_MODULE_1__["useSlate"]];
});

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_10___default()(styles)(ColorButtonRaw);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\plugins\\color\\ColorButton.tsx");
  reactHotLoader.register(ChromePickerUntyped, "ChromePickerUntyped", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\plugins\\color\\ColorButton.tsx");
  reactHotLoader.register(FormatColorTextIcon, "FormatColorTextIcon", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\plugins\\color\\ColorButton.tsx");
  reactHotLoader.register(ColorButtonRaw, "ColorButtonRaw", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\plugins\\color\\ColorButton.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\plugins\\color\\ColorButton.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3NsYXRlL3BsdWdpbnMvY29sb3IvQ29sb3JCdXR0b24udHN4Il0sIm5hbWVzIjpbInN0eWxlcyIsImNyZWF0ZVN0eWxlcyIsImNocm9tZVBpY2tlciIsImJveFNoYWRvdyIsIkNocm9tZVBpY2tlclVudHlwZWQiLCJDaHJvbWVQaWNrZXIiLCJGb3JtYXRDb2xvclRleHRJY29uIiwibGF6eUxvYWQiLCJDb2xvckJ1dHRvblJhdyIsInByb3BzIiwiY2xhc3NlcyIsImVkaXRvciIsInVzZVNsYXRlIiwiUmVhY3QiLCJvcGVuIiwic2V0T3BlbiIsInNlbGVjdGlvbiIsInNldFNlbGVjdGlvbiIsImhhbmRsZUNsaWNrT3BlbiIsImNvbG9ycyIsImdldEFjdGl2ZUNvbG9ycyIsInNldENvbG9yIiwiaGFuZGxlQ2xvc2UiLCJjaGFuZ2VDb2xvciIsImNvbG9yUmVzdWx0IiwicmdiIiwiY2xlYXJDb2xvciIsImV4ZWMiLCJ0eXBlIiwiQ29sb3JDb21tYW5kcyIsIkNsZWFyQ29sb3IiLCJjb21taXRDb2xvciIsIlNldENvbG9yIiwiY29sb3IiLCJyIiwiZyIsImIiLCJhIiwiaXNBY3RpdmUiLCJpc0NvbG9yQWN0aXZlIiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBLElBQU1BLE1BQU0sR0FBR0MsNkVBQVksQ0FBQztBQUMxQkMsY0FBWSxFQUFFO0FBQ1pDLGFBQVMsRUFBRTtBQURDO0FBRFksQ0FBRCxDQUEzQixDLENBTUE7QUFDQTs7QUFDQSxJQUFNQyxtQkFBbUIsR0FBR0Msd0RBQTVCO0FBSUEsSUFBTUMsbUJBQW1CLEdBQUdDLGlFQUFRLENBQUM7QUFBQSxTQUNuQyxxTEFEbUM7QUFBQSxDQUFELENBQXBDO0FBSU8sSUFB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cEVNOztjQUFNdkIsYztVQUVJSSxvRDs7O2VBb0VGNEIsMkVBQVUsQ0FBQ3hDLE1BQUQsQ0FBVixDQUFtQlEsY0FBbkIsQzs7QUFBQTs7Ozs7Ozs7OzswQkF0RlRSLE07MEJBUUFJLG1COzBCQUlBRSxtQjswQkFJT0UsYyIsImZpbGUiOiJmMDNjOWZkLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2xhdGUgfSBmcm9tICdzbGF0ZS1yZWFjdCc7XHJcbmltcG9ydCBTbGF0ZUJ1dHRvbiBmcm9tICcuLi8uLi9Db250cm9scy9idXR0b25zL1NsYXRlQnV0dG9uJztcclxuaW1wb3J0IHsgaXNDb2xvckFjdGl2ZSwgQ29sb3JDb21tYW5kcywgZ2V0QWN0aXZlQ29sb3JzIH0gZnJvbSAnLi93aXRoQ29sb3JzJztcclxuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcclxuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgbGF6eUxvYWQgfSBmcm9tICdAcmVhY3QtcGFnZS9jb3JlJztcclxuaW1wb3J0IHsgQ2hyb21lUGlja2VyLCBDb2xvciwgQ29sb3JSZXN1bHQgfSBmcm9tICdyZWFjdC1jb2xvcic7XHJcbmltcG9ydCB3aXRoU3R5bGVzLCB7IFdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlcyc7XHJcbmltcG9ydCBjcmVhdGVTdHlsZXMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NyZWF0ZVN0eWxlcyc7XHJcbmltcG9ydCB7IFJhbmdlIH0gZnJvbSAnc2xhdGUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2xvckJ1dHRvbkN1c3RvbVByb3BzIHt9XHJcblxyXG5jb25zdCBzdHlsZXMgPSBjcmVhdGVTdHlsZXMoe1xyXG4gIGNocm9tZVBpY2tlcjoge1xyXG4gICAgYm94U2hhZG93OiAnbm9uZSAhaW1wb3J0YW50JyxcclxuICB9LFxyXG59KTtcclxuXHJcbi8vIEJlY2F1c2UgdHlwZXMgYXJlIGJyb2tlbiBhbmQgbm90IGFjY2VwdGluZyBjbGFzc05hbWVcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnlcclxuY29uc3QgQ2hyb21lUGlja2VyVW50eXBlZCA9IENocm9tZVBpY2tlciBhcyBhbnk7XHJcblxyXG50eXBlIENvbG9yQnV0dG9uUHJvcHMgPSBDb2xvckJ1dHRvbkN1c3RvbVByb3BzICYgV2l0aFN0eWxlczx0eXBlb2Ygc3R5bGVzPjtcclxuXHJcbmNvbnN0IEZvcm1hdENvbG9yVGV4dEljb24gPSBsYXp5TG9hZCgoKSA9PlxyXG4gIGltcG9ydCgnQG1hdGVyaWFsLXVpL2ljb25zL0Zvcm1hdENvbG9yVGV4dCcpXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgQ29sb3JCdXR0b25SYXc6IFJlYWN0LkZDPENvbG9yQnV0dG9uUHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgZWRpdG9yID0gdXNlU2xhdGUoKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlbGVjdGlvbiwgc2V0U2VsZWN0aW9uXSA9IFJlYWN0LnVzZVN0YXRlPFJhbmdlPihlZGl0b3Iuc2VsZWN0aW9uKTtcclxuICBjb25zdCBoYW5kbGVDbGlja09wZW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb2xvcnMgPSBnZXRBY3RpdmVDb2xvcnMoZWRpdG9yKTtcclxuICAgIGlmIChjb2xvcnMgJiYgY29sb3JzWzBdKSB7XHJcbiAgICAgIHNldENvbG9yKGNvbG9yc1swXSk7XHJcbiAgICB9XHJcbiAgICBzZXRTZWxlY3Rpb24oZWRpdG9yLnNlbGVjdGlvbik7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlQ29sb3IgPSAoY29sb3JSZXN1bHQ6IENvbG9yUmVzdWx0KSA9PiB7XHJcbiAgICBzZXRDb2xvcihjb2xvclJlc3VsdC5yZ2IpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsZWFyQ29sb3IgPSAoKSA9PiB7XHJcbiAgICBlZGl0b3Iuc2VsZWN0aW9uID0gc2VsZWN0aW9uO1xyXG4gICAgZWRpdG9yLmV4ZWMoeyB0eXBlOiBDb2xvckNvbW1hbmRzLkNsZWFyQ29sb3IgfSk7XHJcbiAgICBoYW5kbGVDbG9zZSgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbW1pdENvbG9yID0gKCkgPT4ge1xyXG4gICAgZWRpdG9yLnNlbGVjdGlvbiA9IHNlbGVjdGlvbjtcclxuICAgIGVkaXRvci5leGVjKHsgdHlwZTogQ29sb3JDb21tYW5kcy5TZXRDb2xvciwgY29sb3I6IGNvbG9yIH0pO1xyXG4gICAgaGFuZGxlQ2xvc2UoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IFJlYWN0LnVzZVN0YXRlPENvbG9yPih7XHJcbiAgICByOiAxNixcclxuICAgIGc6IDE4OSxcclxuICAgIGI6IDE5OSxcclxuICAgIGE6IDEsXHJcbiAgfSk7XHJcbiAgY29uc3QgaXNBY3RpdmUgPSBpc0NvbG9yQWN0aXZlKGVkaXRvcik7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTbGF0ZUJ1dHRvblxyXG4gICAgICAgIGlzQWN0aXZlPXtpc0FjdGl2ZX1cclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja09wZW59XHJcbiAgICAgICAgaWNvbj17PEZvcm1hdENvbG9yVGV4dEljb24gLz59XHJcbiAgICAgICAgdGl0bGU9XCJUZXh0IGNvbG9yXCJcclxuICAgICAgLz5cclxuICAgICAgPERpYWxvZyBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gb3Blbj17b3Blbn0+XHJcbiAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICA8Q2hyb21lUGlja2VyVW50eXBlZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2hyb21lUGlja2VyfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlQ29sb3J9XHJcbiAgICAgICAgICAgIGNvbG9yPXtjb2xvcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtjbGVhckNvbG9yfSBkaXNhYmxlZD17IWlzQWN0aXZlfT5cclxuICAgICAgICAgICAgQ2xlYXJcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtjb21taXRDb2xvcn0gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIE9LXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgIDwvRGlhbG9nPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShDb2xvckJ1dHRvblJhdyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=