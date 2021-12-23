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
      href = _props$data$href === void 0 ? '' : _props$data$href;
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
  }))));
};

__signature__(ImageDefaultControls, "useCallback{onConstraintModeChange}\nuseCallback{onHrefChange}");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2ltYWdlL0NvbnRyb2xzL0ltYWdlRGVmYXVsdENvbnRyb2xzLnRzeCJdLCJuYW1lcyI6WyJhbGxNb2RlcyIsIk9iamVjdCIsImtleXMiLCJJbWFnZUNvbnN0cmFpbnRNb2RlIiwiZmlsdGVyIiwiayIsIm1hcCIsIml0ZW0iLCJtb2RlTmFtZXMiLCJGdWxsV2lkdGgiLCJTbWFsbEhlaWdodCIsIk1lZGl1bUhlaWdodCIsIkJpZ0hlaWdodCIsIkltYWdlRGVmYXVsdENvbnRyb2xzIiwicHJvcHMiLCJvbkNoYW5nZSIsInJlYWRPbmx5IiwiZm9jdXNlZCIsImRhdGEiLCJjb25zdHJhaW50TW9kZSIsImhyZWYiLCJvbkNvbnN0cmFpbnRNb2RlQ2hhbmdlIiwiUmVhY3QiLCJlIiwiTnVtYmVyIiwidGFyZ2V0IiwidmFsdWUiLCJvbkhyZWZDaGFuZ2UiLCJVcGxvYWRJbWFnZUZpZWxkIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsUUFBK0IsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlDLGdFQUFaLEVBQ3JDQyxNQURxQyxDQUM5QixVQUFBQyxDQUFDO0FBQUEsU0FBSSxPQUFPRixnRUFBbUIsQ0FBQ0UsQ0FBRCxDQUExQixLQUFrQyxRQUF0QztBQUFBLENBRDZCLEVBRXJDQyxHQUZxQyxDQUVqQyxVQUFBQyxJQUFJO0FBQUEsU0FBSUosZ0VBQW1CLENBQUNJLElBQUQsQ0FBdkI7QUFBQSxDQUY2QixDQUF4QztBQUlBLElBQU1DLFNBQVMsaURBQ1pMLGdFQUFtQixDQUFDTSxTQURSLEVBQ29CLFlBRHBCLCtCQUVaTixnRUFBbUIsQ0FBQ08sV0FGUixFQUVzQixjQUZ0QiwrQkFHWlAsZ0VBQW1CLENBQUNRLFlBSFIsRUFHdUIsZUFIdkIsK0JBSVpSLGdFQUFtQixDQUFDUyxTQUpSLEVBSW9CLFlBSnBCLGNBQWY7O0FBT0EsSUFBTUMsb0JBQWtELEdBQUcsU0FBckRBLG9CQUFxRCxDQUFBQyxLQUFLLEVBQUk7QUFDbEUsTUFDRUMsUUFERixHQUtJRCxLQUxKLENBQ0VDLFFBREY7QUFBQSxNQUVFQyxRQUZGLEdBS0lGLEtBTEosQ0FFRUUsUUFGRjtBQUFBLE1BR0VDLE9BSEYsR0FLSUgsS0FMSixDQUdFRyxPQUhGO0FBQUEsb0JBS0lILEtBTEosQ0FJRUksSUFKRjtBQUFBLDBDQUlVQyxjQUpWO0FBQUEsTUFJVUEsY0FKVixzQ0FJMkJoQixnRUFBbUIsQ0FBQ00sU0FKL0M7QUFBQSxxQ0FJMERXLElBSjFEO0FBQUEsTUFJMERBLElBSjFELGlDQUlpRSxFQUpqRTtBQU1BLE1BQU1DLHNCQUFzQixHQUFHQyxpREFBQSxDQUM3QixVQUFDQyxDQUFEO0FBQUEsV0FDRVIsUUFBUSxDQUFDO0FBQUVJLG9CQUFjLEVBQUVLLE1BQU0sQ0FBQ0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVY7QUFBeEIsS0FBRCxDQURWO0FBQUEsR0FENkIsRUFHN0IsQ0FBQ1gsUUFBRCxDQUg2QixDQUEvQjtBQUtBLE1BQU1ZLFlBQVksR0FBR0wsaURBQUEsQ0FDbkIsVUFBQ0MsQ0FBRDtBQUFBLFdBQ0VSLFFBQVEsQ0FBQztBQUFFSyxVQUFJLEVBQUVHLENBQUMsQ0FBQ0UsTUFBRixDQUFTQztBQUFqQixLQUFELENBRFY7QUFBQSxHQURtQixFQUduQixDQUFDWCxRQUFELENBSG1CLENBQXJCO0FBS0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHLENBQUNDLFFBQUQsSUFBYUMsT0FBYixpQkFDQyx1SEFDRSxvREFBQyxnRkFBRDtBQUNFLFlBQVEsRUFBRUYsUUFEWjtBQUVFLFNBQUssRUFBRUQsS0FBSyxDQUFDSSxJQUZmO0FBR0Usb0JBQWdCLEVBQUVKLEtBQUssQ0FBQ2M7QUFIMUIsSUFERixlQU1FLG9EQUFDLHFFQUFELHFCQUNFLG9EQUFDLG9FQUFELG9CQURGLGVBRUUsb0RBQUMsZ0VBQUQ7QUFDRSxhQUFTLEVBQUMsTUFEWjtBQUVFLFNBQUssRUFBRVQsY0FGVDtBQUdFLFlBQVEsRUFBRUU7QUFIWixLQUtHckIsUUFBUSxDQUFDTSxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFPc0IsR0FBUDtBQUFBLHdCQUNaLG9EQUFDLGtFQUFEO0FBQVUsU0FBRyxFQUFFQSxHQUFmO0FBQW9CLFdBQUssRUFBRXRCO0FBQTNCLE9BQ0dDLFNBQVMsQ0FBQ0QsSUFBRCxDQURaLENBRFk7QUFBQSxHQUFiLENBTEgsQ0FGRixlQWFFLG9EQUFDLG1FQUFEO0FBQ0UsYUFBUyxFQUFDLE1BRFo7QUFFRSxTQUFLLEVBQUMsVUFGUjtBQUdFLFlBQVEsRUFBRW9CLFlBSFo7QUFJRSxTQUFLLEVBQUVQO0FBSlQsSUFiRixDQU5GLENBRkosQ0FERjtBQWlDRCxDQWxERDs7Y0FBTVAsb0I7O2VBb0RTQSxvQjtBQUFBOzs7Ozs7Ozs7OzBCQS9EVGIsUTswQkFJQVEsUzswQkFPQUssb0IiLCJmaWxlIjoiYmIxYTJlNS04LXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBJbWFnZUNvbnRyb2xzUHJvcHMgYXMgSW1hZ2VDb250cm9sc0N1c3RvbVByb3BzIH0gZnJvbSAnLi4vdHlwZXMvY29udHJvbHMnO1xyXG5pbXBvcnQgSW1hZ2VPclNyYyBmcm9tICcuLi8uLi9jb21tb24vY29tcG9uZW50cy9pbWFnZU9yU3JjL0ltYWdlT3JTcmMnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCB7IEltYWdlQ29uc3RyYWludE1vZGUgfSBmcm9tICcuLi90eXBlcy9zdGF0ZSc7XHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWwnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcblxyXG50eXBlIEltYWdlQ29udHJvbHNQcm9wcyA9IEltYWdlQ29udHJvbHNDdXN0b21Qcm9wcztcclxuXHJcbmNvbnN0IGFsbE1vZGVzOiBJbWFnZUNvbnN0cmFpbnRNb2RlW10gPSBPYmplY3Qua2V5cyhJbWFnZUNvbnN0cmFpbnRNb2RlKVxyXG4gIC5maWx0ZXIoayA9PiB0eXBlb2YgSW1hZ2VDb25zdHJhaW50TW9kZVtrXSA9PT0gJ251bWJlcicpXHJcbiAgLm1hcChpdGVtID0+IEltYWdlQ29uc3RyYWludE1vZGVbaXRlbV0pO1xyXG5cclxuY29uc3QgbW9kZU5hbWVzID0ge1xyXG4gIFtJbWFnZUNvbnN0cmFpbnRNb2RlLkZ1bGxXaWR0aF06ICdGdWxsIHdpZHRoJyxcclxuICBbSW1hZ2VDb25zdHJhaW50TW9kZS5TbWFsbEhlaWdodF06ICdTbWFsbCBoZWlnaHQnLFxyXG4gIFtJbWFnZUNvbnN0cmFpbnRNb2RlLk1lZGl1bUhlaWdodF06ICdNZWRpdW0gaGVpZ2h0JyxcclxuICBbSW1hZ2VDb25zdHJhaW50TW9kZS5CaWdIZWlnaHRdOiAnQmlnIGhlaWdodCcsXHJcbn07XHJcblxyXG5jb25zdCBJbWFnZURlZmF1bHRDb250cm9sczogUmVhY3QuRkM8SW1hZ2VDb250cm9sc1Byb3BzPiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBvbkNoYW5nZSxcclxuICAgIHJlYWRPbmx5LFxyXG4gICAgZm9jdXNlZCxcclxuICAgIGRhdGE6IHsgY29uc3RyYWludE1vZGUgPSBJbWFnZUNvbnN0cmFpbnRNb2RlLkZ1bGxXaWR0aCwgaHJlZiA9ICcnIH0sXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IG9uQ29uc3RyYWludE1vZGVDaGFuZ2UgPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgIChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+XHJcbiAgICAgIG9uQ2hhbmdlKHsgY29uc3RyYWludE1vZGU6IE51bWJlcihlLnRhcmdldC52YWx1ZSkgfSksXHJcbiAgICBbb25DaGFuZ2VdXHJcbiAgKTtcclxuICBjb25zdCBvbkhyZWZDaGFuZ2UgPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgIChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cclxuICAgICAgb25DaGFuZ2UoeyBocmVmOiBlLnRhcmdldC52YWx1ZSB9KSxcclxuICAgIFtvbkNoYW5nZV1cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlQ29udHJvbHMgb3J5LXByZXZlbnQtYmx1clwiPlxyXG4gICAgICB7IXJlYWRPbmx5ICYmIGZvY3VzZWQgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8SW1hZ2VPclNyY1xyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgIHN0YXRlPXtwcm9wcy5kYXRhfVxyXG4gICAgICAgICAgICBVcGxvYWRJbWFnZUZpZWxkPXtwcm9wcy5VcGxvYWRJbWFnZUZpZWxkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPElucHV0TGFiZWw+U2l6ZSBtb2RlPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItMVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbnN0cmFpbnRNb2RlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNvbnN0cmFpbnRNb2RlQ2hhbmdlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2FsbE1vZGVzLm1hcCgoaXRlbSwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtrZXl9IHZhbHVlPXtpdGVtfT5cclxuICAgICAgICAgICAgICAgICAge21vZGVOYW1lc1tpdGVtXX1cclxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItMVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJMaW5rIHVybFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSHJlZkNoYW5nZX1cclxuICAgICAgICAgICAgICB2YWx1ZT17aHJlZn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VEZWZhdWx0Q29udHJvbHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=