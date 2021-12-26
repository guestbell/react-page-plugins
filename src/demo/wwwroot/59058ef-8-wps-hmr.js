webpackHotUpdate(8,{

/***/ "./src/lib/image/Controls/ImageDefaultControls.tsx":
/*!*********************************************************!*\
  !*** ./src/lib/image/Controls/ImageDefaultControls.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_components_imageOrSrc_ImageOrSrc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/components/imageOrSrc/ImageOrSrc */ "./src/lib/common/components/imageOrSrc/ImageOrSrc.tsx");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _types_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/state */ "./src/lib/image/types/state.ts");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
var _modeNames;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};











var allModes = Object.keys(_types_state__WEBPACK_IMPORTED_MODULE_4__["ImageConstraintMode"]).filter(function (k) {
  return typeof _types_state__WEBPACK_IMPORTED_MODULE_4__["ImageConstraintMode"][k] === 'number';
}).map(function (item) {
  return _types_state__WEBPACK_IMPORTED_MODULE_4__["ImageConstraintMode"][item];
});
var modeNames = (_modeNames = {}, _defineProperty(_modeNames, _types_state__WEBPACK_IMPORTED_MODULE_4__["ImageConstraintMode"].FullWidth, 'Full width'), _defineProperty(_modeNames, _types_state__WEBPACK_IMPORTED_MODULE_4__["ImageConstraintMode"].SmallHeight, 'Small height'), _defineProperty(_modeNames, _types_state__WEBPACK_IMPORTED_MODULE_4__["ImageConstraintMode"].MediumHeight, 'Medium height'), _defineProperty(_modeNames, _types_state__WEBPACK_IMPORTED_MODULE_4__["ImageConstraintMode"].BigHeight, 'Big height'), _modeNames);

var ImageDefaultControls = function ImageDefaultControls(props) {
  var onChange = props.onChange,
      readOnly = props.readOnly,
      focused = props.focused,
      _props$data = props.data,
      _props$data$constrain = _props$data.constraintMode,
      constraintMode = _props$data$constrain === void 0 ? _types_state__WEBPACK_IMPORTED_MODULE_4__["ImageConstraintMode"].FullWidth : _props$data$constrain,
      _props$data$href = _props$data.href,
      href = _props$data$href === void 0 ? '' : _props$data$href,
      _props$data$hasMargin = _props$data.hasMargin,
      hasMargin = _props$data$hasMargin === void 0 ? true : _props$data$hasMargin;
  var onConstraintModeChange = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (e) {
    return onChange({
      constraintMode: Number(e.target.value)
    });
  }, [onChange]);
  var onHrefChange = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (e) {
    return onChange({
      href: e.target.value
    });
  }, [onChange]);
  var handleChangeHasPadding = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (e) {
    return onChange({
      hasMargin: e.target.checked
    });
  }, [onChange]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "imageControls ory-prevent-blur"
  }, !readOnly && focused && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_imageOrSrc_ImageOrSrc__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onChange: onChange,
    state: props.data,
    UploadImageField: props.UploadImageField
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Size mode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "mb-1",
    value: constraintMode,
    onChange: onConstraintModeChange
  }, allModes.map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: key,
      value: item
    }, modeNames[item]);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "mb-1",
    label: "Link url",
    onChange: onHrefChange,
    value: href
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onChange: handleChangeHasPadding,
      checked: hasMargin
    }),
    label: "Use margin"
  }))));
};

__signature__(ImageDefaultControls, "useCallback{onConstraintModeChange}\nuseCallback{onHrefChange}\nuseCallback{handleChangeHasPadding}");

var _default = ImageDefaultControls;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(allModes, "allModes", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\image\\Controls\\ImageDefaultControls.tsx");
  reactHotLoader.register(modeNames, "modeNames", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\image\\Controls\\ImageDefaultControls.tsx");
  reactHotLoader.register(ImageDefaultControls, "ImageDefaultControls", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\image\\Controls\\ImageDefaultControls.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\image\\Controls\\ImageDefaultControls.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2ltYWdlL0NvbnRyb2xzL0ltYWdlRGVmYXVsdENvbnRyb2xzLnRzeCJdLCJuYW1lcyI6WyJhbGxNb2RlcyIsIk9iamVjdCIsImtleXMiLCJJbWFnZUNvbnN0cmFpbnRNb2RlIiwiZmlsdGVyIiwiayIsIm1hcCIsIml0ZW0iLCJtb2RlTmFtZXMiLCJGdWxsV2lkdGgiLCJTbWFsbEhlaWdodCIsIk1lZGl1bUhlaWdodCIsIkJpZ0hlaWdodCIsIkltYWdlRGVmYXVsdENvbnRyb2xzIiwicHJvcHMiLCJvbkNoYW5nZSIsInJlYWRPbmx5IiwiZm9jdXNlZCIsImRhdGEiLCJjb25zdHJhaW50TW9kZSIsImhyZWYiLCJoYXNNYXJnaW4iLCJvbkNvbnN0cmFpbnRNb2RlQ2hhbmdlIiwiUmVhY3QiLCJlIiwiTnVtYmVyIiwidGFyZ2V0IiwidmFsdWUiLCJvbkhyZWZDaGFuZ2UiLCJoYW5kbGVDaGFuZ2VIYXNQYWRkaW5nIiwiY2hlY2tlZCIsIlVwbG9hZEltYWdlRmllbGQiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxRQUErQixHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUMsZ0VBQVosRUFDckNDLE1BRHFDLENBQzlCLFVBQUFDLENBQUM7QUFBQSxTQUFJLE9BQU9GLGdFQUFtQixDQUFDRSxDQUFELENBQTFCLEtBQWtDLFFBQXRDO0FBQUEsQ0FENkIsRUFFckNDLEdBRnFDLENBRWpDLFVBQUFDLElBQUk7QUFBQSxTQUFJSixnRUFBbUIsQ0FBQ0ksSUFBRCxDQUF2QjtBQUFBLENBRjZCLENBQXhDO0FBSUEsSUFBTUMsU0FBUyxpREFDWkwsZ0VBQW1CLENBQUNNLFNBRFIsRUFDb0IsWUFEcEIsK0JBRVpOLGdFQUFtQixDQUFDTyxXQUZSLEVBRXNCLGNBRnRCLCtCQUdaUCxnRUFBbUIsQ0FBQ1EsWUFIUixFQUd1QixlQUh2QiwrQkFJWlIsZ0VBQW1CLENBQUNTLFNBSlIsRUFJb0IsWUFKcEIsY0FBZjs7QUFPQSxJQUFNQyxvQkFBa0QsR0FBRyxTQUFyREEsb0JBQXFELENBQUFDLEtBQUssRUFBSTtBQUNsRSxNQUNFQyxRQURGLEdBU0lELEtBVEosQ0FDRUMsUUFERjtBQUFBLE1BRUVDLFFBRkYsR0FTSUYsS0FUSixDQUVFRSxRQUZGO0FBQUEsTUFHRUMsT0FIRixHQVNJSCxLQVRKLENBR0VHLE9BSEY7QUFBQSxvQkFTSUgsS0FUSixDQUlFSSxJQUpGO0FBQUEsMENBS0lDLGNBTEo7QUFBQSxNQUtJQSxjQUxKLHNDQUtxQmhCLGdFQUFtQixDQUFDTSxTQUx6QztBQUFBLHFDQU1JVyxJQU5KO0FBQUEsTUFNSUEsSUFOSixpQ0FNVyxFQU5YO0FBQUEsMENBT0lDLFNBUEo7QUFBQSxNQU9JQSxTQVBKLHNDQU9nQixJQVBoQjtBQVVBLE1BQU1DLHNCQUFzQixHQUFHQyxpREFBQSxDQUM3QixVQUFDQyxDQUFEO0FBQUEsV0FDRVQsUUFBUSxDQUFDO0FBQUVJLG9CQUFjLEVBQUVNLE1BQU0sQ0FBQ0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVY7QUFBeEIsS0FBRCxDQURWO0FBQUEsR0FENkIsRUFHN0IsQ0FBQ1osUUFBRCxDQUg2QixDQUEvQjtBQUtBLE1BQU1hLFlBQVksR0FBR0wsaURBQUEsQ0FDbkIsVUFBQ0MsQ0FBRDtBQUFBLFdBQ0VULFFBQVEsQ0FBQztBQUFFSyxVQUFJLEVBQUVJLENBQUMsQ0FBQ0UsTUFBRixDQUFTQztBQUFqQixLQUFELENBRFY7QUFBQSxHQURtQixFQUduQixDQUFDWixRQUFELENBSG1CLENBQXJCO0FBS0EsTUFBTWMsc0JBQXNCLEdBQUdOLGlEQUFBLENBQzdCLFVBQUNDLENBQUQ7QUFBQSxXQUNFVCxRQUFRLENBQUM7QUFBRU0sZUFBUyxFQUFFRyxDQUFDLENBQUNFLE1BQUYsQ0FBU0k7QUFBdEIsS0FBRCxDQURWO0FBQUEsR0FENkIsRUFHN0IsQ0FBQ2YsUUFBRCxDQUg2QixDQUEvQjtBQUtBLHNCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRyxDQUFDQyxRQUFELElBQWFDLE9BQWIsaUJBQ0MsdUhBQ0Usb0RBQUMsZ0ZBQUQ7QUFDRSxZQUFRLEVBQUVGLFFBRFo7QUFFRSxTQUFLLEVBQUVELEtBQUssQ0FBQ0ksSUFGZjtBQUdFLG9CQUFnQixFQUFFSixLQUFLLENBQUNpQjtBQUgxQixJQURGLGVBTUUsb0RBQUMscUVBQUQscUJBQ0Usb0RBQUMsb0VBQUQsb0JBREYsZUFFRSxvREFBQyxnRUFBRDtBQUNFLGFBQVMsRUFBQyxNQURaO0FBRUUsU0FBSyxFQUFFWixjQUZUO0FBR0UsWUFBUSxFQUFFRztBQUhaLEtBS0d0QixRQUFRLENBQUNNLEdBQVQsQ0FBYSxVQUFDQyxJQUFELEVBQU95QixHQUFQO0FBQUEsd0JBQ1osb0RBQUMsa0VBQUQ7QUFBVSxTQUFHLEVBQUVBLEdBQWY7QUFBb0IsV0FBSyxFQUFFekI7QUFBM0IsT0FDR0MsU0FBUyxDQUFDRCxJQUFELENBRFosQ0FEWTtBQUFBLEdBQWIsQ0FMSCxDQUZGLGVBYUUsb0RBQUMsbUVBQUQ7QUFDRSxhQUFTLEVBQUMsTUFEWjtBQUVFLFNBQUssRUFBQyxVQUZSO0FBR0UsWUFBUSxFQUFFcUIsWUFIWjtBQUlFLFNBQUssRUFBRVI7QUFKVCxJQWJGLGVBbUJFLG9EQUFDLDBFQUFEO0FBQ0UsV0FBTyxlQUNMLG9EQUFDLGdFQUFEO0FBQVEsY0FBUSxFQUFFUyxzQkFBbEI7QUFBMEMsYUFBTyxFQUFFUjtBQUFuRCxNQUZKO0FBSUUsU0FBSyxFQUFDO0FBSlIsSUFuQkYsQ0FORixDQUZKLENBREY7QUF1Q0QsQ0FqRUQ7O2NBQU1SLG9COztlQW1FU0Esb0I7QUFBQTs7Ozs7Ozs7OzswQkE5RVRiLFE7MEJBSUFRLFM7MEJBT0FLLG9CIiwiZmlsZSI6IjU5MDU4ZWYtOC13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgSW1hZ2VDb250cm9sc1Byb3BzIGFzIEltYWdlQ29udHJvbHNDdXN0b21Qcm9wcyB9IGZyb20gJy4uL3R5cGVzL2NvbnRyb2xzJztcclxuaW1wb3J0IEltYWdlT3JTcmMgZnJvbSAnLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvaW1hZ2VPclNyYy9JbWFnZU9yU3JjJztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3QnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgeyBJbWFnZUNvbnN0cmFpbnRNb2RlIH0gZnJvbSAnLi4vdHlwZXMvc3RhdGUnO1xyXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsJztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcclxuaW1wb3J0IFN3aXRjaCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2gnO1xyXG5cclxudHlwZSBJbWFnZUNvbnRyb2xzUHJvcHMgPSBJbWFnZUNvbnRyb2xzQ3VzdG9tUHJvcHM7XHJcblxyXG5jb25zdCBhbGxNb2RlczogSW1hZ2VDb25zdHJhaW50TW9kZVtdID0gT2JqZWN0LmtleXMoSW1hZ2VDb25zdHJhaW50TW9kZSlcclxuICAuZmlsdGVyKGsgPT4gdHlwZW9mIEltYWdlQ29uc3RyYWludE1vZGVba10gPT09ICdudW1iZXInKVxyXG4gIC5tYXAoaXRlbSA9PiBJbWFnZUNvbnN0cmFpbnRNb2RlW2l0ZW1dKTtcclxuXHJcbmNvbnN0IG1vZGVOYW1lcyA9IHtcclxuICBbSW1hZ2VDb25zdHJhaW50TW9kZS5GdWxsV2lkdGhdOiAnRnVsbCB3aWR0aCcsXHJcbiAgW0ltYWdlQ29uc3RyYWludE1vZGUuU21hbGxIZWlnaHRdOiAnU21hbGwgaGVpZ2h0JyxcclxuICBbSW1hZ2VDb25zdHJhaW50TW9kZS5NZWRpdW1IZWlnaHRdOiAnTWVkaXVtIGhlaWdodCcsXHJcbiAgW0ltYWdlQ29uc3RyYWludE1vZGUuQmlnSGVpZ2h0XTogJ0JpZyBoZWlnaHQnLFxyXG59O1xyXG5cclxuY29uc3QgSW1hZ2VEZWZhdWx0Q29udHJvbHM6IFJlYWN0LkZDPEltYWdlQ29udHJvbHNQcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgb25DaGFuZ2UsXHJcbiAgICByZWFkT25seSxcclxuICAgIGZvY3VzZWQsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGNvbnN0cmFpbnRNb2RlID0gSW1hZ2VDb25zdHJhaW50TW9kZS5GdWxsV2lkdGgsXHJcbiAgICAgIGhyZWYgPSAnJyxcclxuICAgICAgaGFzTWFyZ2luID0gdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IG9uQ29uc3RyYWludE1vZGVDaGFuZ2UgPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgIChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+XHJcbiAgICAgIG9uQ2hhbmdlKHsgY29uc3RyYWludE1vZGU6IE51bWJlcihlLnRhcmdldC52YWx1ZSkgfSksXHJcbiAgICBbb25DaGFuZ2VdXHJcbiAgKTtcclxuICBjb25zdCBvbkhyZWZDaGFuZ2UgPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgIChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cclxuICAgICAgb25DaGFuZ2UoeyBocmVmOiBlLnRhcmdldC52YWx1ZSB9KSxcclxuICAgIFtvbkNoYW5nZV1cclxuICApO1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUhhc1BhZGRpbmcgPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgIChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cclxuICAgICAgb25DaGFuZ2UoeyBoYXNNYXJnaW46IGUudGFyZ2V0LmNoZWNrZWQgfSksXHJcbiAgICBbb25DaGFuZ2VdXHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZUNvbnRyb2xzIG9yeS1wcmV2ZW50LWJsdXJcIj5cclxuICAgICAgeyFyZWFkT25seSAmJiBmb2N1c2VkICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPEltYWdlT3JTcmNcclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICBzdGF0ZT17cHJvcHMuZGF0YX1cclxuICAgICAgICAgICAgVXBsb2FkSW1hZ2VGaWVsZD17cHJvcHMuVXBsb2FkSW1hZ2VGaWVsZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDxJbnB1dExhYmVsPlNpemUgbW9kZTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTFcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb25zdHJhaW50TW9kZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25Db25zdHJhaW50TW9kZUNoYW5nZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHthbGxNb2Rlcy5tYXAoKGl0ZW0sIGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17a2V5fSB2YWx1ZT17aXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgIHttb2RlTmFtZXNbaXRlbV19XHJcbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTFcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGluayB1cmxcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkhyZWZDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2hyZWZ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICA8U3dpdGNoIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VIYXNQYWRkaW5nfSBjaGVja2VkPXtoYXNNYXJnaW59IC8+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiVXNlIG1hcmdpblwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlRGVmYXVsdENvbnRyb2xzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9