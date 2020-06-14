webpackHotUpdate("main",{

/***/ "./node_modules/@material-ui/icons/HighLight.js":
false,

/***/ "./node_modules/@material-ui/icons/SelectAll.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/icons/SelectAll.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"
}), 'SelectAll');

exports.default = _default;

/***/ }),

/***/ "./src/lib/common/components/selectParentButton/SelectParentButton.tsx":
/*!*****************************************************************************!*\
  !*** ./src/lib/common/components/selectParentButton/SelectParentButton.tsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_page_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-page/core */ "./node_modules/@react-page/core/lib-es/index.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/lib/index.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_SelectAll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/SelectAll */ "./node_modules/@material-ui/icons/SelectAll.js");
/* harmony import */ var _material_ui_icons_SelectAll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SelectAll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _react_page_core_lib_actions_cell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-page/core/lib/actions/cell */ "./node_modules/@react-page/core/lib/actions/cell/index.js");
/* harmony import */ var _react_page_core_lib_actions_cell__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_react_page_core_lib_actions_cell__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _react_page_core_lib_selector_editable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-page/core/lib/selector/editable */ "./node_modules/@react-page/core/lib/selector/editable/index.js");
/* harmony import */ var _react_page_core_lib_selector_editable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_react_page_core_lib_selector_editable__WEBPACK_IMPORTED_MODULE_7__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};










var SelectParentButton = function SelectParentButton(props) {
  var parentId = props.parentId,
      focusCell = props.focusCell;
  var onClick = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function () {
    return focusCell(parentId);
  }, [parentId]);
  return parentId ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "bottomToolbar__selectParentButton",
    onClick: onClick,
    color: "default",
    title: "Select background"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons_SelectAll__WEBPACK_IMPORTED_MODULE_4___default.a, null)) : null;
};

__signature__(SelectParentButton, "useCallback{onClick}");

var parentInner = function parentInner(current, props) {
  var id = current.id,
      _current$rows = current.rows,
      rows = _current$rows === void 0 ? [] : _current$rows,
      _current$cells = current.cells,
      cells = _current$cells === void 0 ? [] : _current$cells;

  if (id === props.id) {
    return current;
  }

  var found = undefined; // tslint:disable-next-line:no-any

  [].concat(_toConsumableArray(rows), _toConsumableArray(cells)).find(function (n) {
    var f = parentInner(n, props);

    if (f) {
      found = f;
    }

    return Boolean(f);
  });
  return found ? _objectSpread(_objectSpread({}, found), {}, {
    ancestors: [].concat(_toConsumableArray(found.ancestors || []), [current])
  }) : found;
};

var parentIdSelector = function parentIdSelector(state, props) {
  var tree = Object(_react_page_core_lib_selector_editable__WEBPACK_IMPORTED_MODULE_7__["editable"])(state, {
    id: props.editable
  });

  if (!tree) {
    throw new Error("Could not find editable: ".concat(props.editable));
  } // tslint:disable-next-line: no-any


  var parent = parentInner(tree, props);
  var ancestor = ((parent === null || parent === void 0 ? void 0 : parent.ancestors) || []).find(function (a) {
    return a.content || a.layout;
  });
  return ancestor === null || ancestor === void 0 ? void 0 : ancestor.id;
};

var mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_2__["createStructuredSelector"])({
  parentId: parentIdSelector
});

var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_5__["bindActionCreators"])({
    focusCell: function focusCell(id) {
      return Object(_react_page_core_lib_actions_cell__WEBPACK_IMPORTED_MODULE_6__["focusCell"])(id, true)();
    }
  }, // tslint:disable-next-line:no-any
  dispatch);
};

var _default = Object(_react_page_core__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(SelectParentButton);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SelectParentButton, "SelectParentButton", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\selectParentButton\\SelectParentButton.tsx");
  reactHotLoader.register(parentInner, "parentInner", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\selectParentButton\\SelectParentButton.tsx");
  reactHotLoader.register(parentIdSelector, "parentIdSelector", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\selectParentButton\\SelectParentButton.tsx");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\selectParentButton\\SelectParentButton.tsx");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\selectParentButton\\SelectParentButton.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\selectParentButton\\SelectParentButton.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2ljb25zL1NlbGVjdEFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbW1vbi9jb21wb25lbnRzL3NlbGVjdFBhcmVudEJ1dHRvbi9TZWxlY3RQYXJlbnRCdXR0b24udHN4Il0sIm5hbWVzIjpbIlNlbGVjdFBhcmVudEJ1dHRvbiIsInByb3BzIiwicGFyZW50SWQiLCJmb2N1c0NlbGwiLCJvbkNsaWNrIiwiUmVhY3QiLCJwYXJlbnRJbm5lciIsImN1cnJlbnQiLCJpZCIsInJvd3MiLCJjZWxscyIsImZvdW5kIiwidW5kZWZpbmVkIiwiZmluZCIsIm4iLCJmIiwiQm9vbGVhbiIsImFuY2VzdG9ycyIsInBhcmVudElkU2VsZWN0b3IiLCJzdGF0ZSIsInRyZWUiLCJlZGl0YWJsZSIsIkVycm9yIiwicGFyZW50IiwiYW5jZXN0b3IiLCJhIiwiY29udGVudCIsImxheW91dCIsIm1hcFN0YXRlVG9Qcm9wcyIsImNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiZm9jdXNDZWxsSW50ZXJuYWwiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWE7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDOztBQUVuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLG9DQUFvQyxtQkFBTyxDQUFDLDRDQUFPOztBQUVuRCw0Q0FBNEMsbUJBQU8sQ0FBQyx1RkFBdUI7O0FBRTNFO0FBQ0E7QUFDQSxDQUFDOztBQUVELDJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBOztBQW1CQSxJQUFNQSxrQkFBcUQsR0FBRyxTQUF4REEsa0JBQXdELENBQUFDLEtBQUssRUFB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QWdCeUIsbUZBQWlCLENBQUN6QixFQUFELEVBQUssSUFBTCxDQUFqQixFQUFoQjtBQUFBO0FBRGIsR0FEdUIsRUFJdkI7QUFDQXVCLFVBTHVCLENBQXpCO0FBT0QsQ0FSRDs7ZUFVZUcsZ0VBQU8sQ0FDcEJOLGVBRG9CLEVBRXBCRSxrQkFGb0IsQ0FBUCxDQUdiOUIsa0JBSGEsQzs7QUFBQTs7Ozs7Ozs7OzswQkF6RVRBLGtCOzBCQWlCQU0sVzswQkF3QkFZLGdCOzBCQWtCQVUsZTswQkFJQUUsa0IiLCJmaWxlIjoiZjAzYzlmZC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KShfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTMgNWgyVjNjLTEuMSAwLTIgLjktMiAyem0wIDhoMnYtMkgzdjJ6bTQgOGgydi0ySDd2MnpNMyA5aDJWN0gzdjJ6bTEwLTZoLTJ2MmgyVjN6bTYgMHYyaDJjMC0xLjEtLjktMi0yLTJ6TTUgMjF2LTJIM2MwIDEuMS45IDIgMiAyem0tMi00aDJ2LTJIM3Yyek05IDNIN3YyaDJWM3ptMiAxOGgydi0yaC0ydjJ6bTgtOGgydi0yaC0ydjJ6bTAgOGMxLjEgMCAyLS45IDItMmgtMnYyem0wLTEyaDJWN2gtMnYyem0wIDhoMnYtMmgtMnYyem0tNCA0aDJ2LTJoLTJ2MnptMC0xNmgyVjNoLTJ2MnpNNyAxN2gxMFY3SDd2MTB6bTItOGg2djZIOVY5elwiXG59KSwgJ1NlbGVjdEFsbCcpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QsIFJvb3RTdGF0ZSB9IGZyb20gJ0ByZWFjdC1wYWdlL2NvcmUnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgU2VsZWN0QWxsIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWxlY3RBbGwnO1xyXG5pbXBvcnQgeyBEaXNwYXRjaCwgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQge1xyXG4gIENvbXBvbmV0aXplZENlbGwsXHJcbiAgQ2VsbCxcclxuICBSb3csXHJcbn0gZnJvbSAnQHJlYWN0LXBhZ2UvY29yZS9saWIvdHlwZXMvZWRpdGFibGUnO1xyXG5pbXBvcnQgeyBmb2N1c0NlbGwgYXMgZm9jdXNDZWxsSW50ZXJuYWwgfSBmcm9tICdAcmVhY3QtcGFnZS9jb3JlL2xpYi9hY3Rpb25zL2NlbGwnO1xyXG5pbXBvcnQgeyBOb2RlUHJvcHMsIGVkaXRhYmxlIH0gZnJvbSAnQHJlYWN0LXBhZ2UvY29yZS9saWIvc2VsZWN0b3IvZWRpdGFibGUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RQYXJlbnRCdXR0b25DdXN0b21Qcm9wcyB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBlZGl0YWJsZTogc3RyaW5nO1xyXG59XHJcblxyXG50eXBlIFJlZHV4UHJvcHMgPSB7XHJcbiAgcGFyZW50SWQ/OiBzdHJpbmc7XHJcbn07XHJcblxyXG50eXBlIEFjdGlvbkNyZWF0b3JzVHlwZXMgPSB7XHJcbiAgZm9jdXNDZWxsOiAoaWQ6IHN0cmluZykgPT4gdm9pZDtcclxufTtcclxuXHJcbnR5cGUgU2VsZWN0UGFyZW50QnV0dG9uUHJvcHMgPSBTZWxlY3RQYXJlbnRCdXR0b25DdXN0b21Qcm9wcyAmXHJcbiAgUmVkdXhQcm9wcyAmXHJcbiAgQWN0aW9uQ3JlYXRvcnNUeXBlcztcclxuXHJcbmNvbnN0IFNlbGVjdFBhcmVudEJ1dHRvbjogUmVhY3QuRkM8U2VsZWN0UGFyZW50QnV0dG9uUHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgcGFyZW50SWQsIGZvY3VzQ2VsbCB9ID0gcHJvcHM7XHJcbiAgY29uc3Qgb25DbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IGZvY3VzQ2VsbChwYXJlbnRJZCksIFtwYXJlbnRJZF0pO1xyXG4gIHJldHVybiBwYXJlbnRJZCA/IChcclxuICAgIDxJY29uQnV0dG9uXHJcbiAgICAgIGNsYXNzTmFtZT1cImJvdHRvbVRvb2xiYXJfX3NlbGVjdFBhcmVudEJ1dHRvblwiXHJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgIGNvbG9yPVwiZGVmYXVsdFwiXHJcbiAgICAgIHRpdGxlPVwiU2VsZWN0IGJhY2tncm91bmRcIlxyXG4gICAgPlxyXG4gICAgICA8U2VsZWN0QWxsIC8+XHJcbiAgICA8L0ljb25CdXR0b24+XHJcbiAgKSA6IG51bGw7XHJcbn07XHJcblxyXG50eXBlIFdpdGhBbmNlc3RvcnMgPSBDZWxsICYgUm93ICYgeyBhbmNlc3RvcnM/OiAoQ2VsbCB8IFJvdylbXSB9O1xyXG5cclxuY29uc3QgcGFyZW50SW5uZXIgPSAoXHJcbiAgY3VycmVudDogV2l0aEFuY2VzdG9ycyxcclxuICBwcm9wczogeyBpZDogc3RyaW5nIH1cclxuKTogV2l0aEFuY2VzdG9ycyA9PiB7XHJcbiAgY29uc3QgeyBpZCwgcm93cyA9IFtdLCBjZWxscyA9IFtdIH0gPSBjdXJyZW50O1xyXG4gIGlmIChpZCA9PT0gcHJvcHMuaWQpIHtcclxuICAgIHJldHVybiBjdXJyZW50O1xyXG4gIH1cclxuXHJcbiAgbGV0IGZvdW5kOiBXaXRoQW5jZXN0b3JzID0gdW5kZWZpbmVkO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBbLi4ucm93cywgLi4uY2VsbHNdLmZpbmQobiA9PiB7XHJcbiAgICBjb25zdCBmID0gcGFyZW50SW5uZXIobiwgcHJvcHMpO1xyXG4gICAgaWYgKGYpIHtcclxuICAgICAgZm91bmQgPSBmO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEJvb2xlYW4oZik7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBmb3VuZFxyXG4gICAgPyB7IC4uLmZvdW5kLCBhbmNlc3RvcnM6IFsuLi4oZm91bmQuYW5jZXN0b3JzIHx8IFtdKSwgY3VycmVudF0gfVxyXG4gICAgOiBmb3VuZDtcclxufTtcclxuXHJcbmNvbnN0IHBhcmVudElkU2VsZWN0b3IgPSAoXHJcbiAgc3RhdGU6IFJvb3RTdGF0ZSxcclxuICBwcm9wczogTm9kZVByb3BzXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4pOiBzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IHRyZWUgPSBlZGl0YWJsZShzdGF0ZSwgeyBpZDogcHJvcHMuZWRpdGFibGUgfSk7XHJcbiAgaWYgKCF0cmVlKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBmaW5kIGVkaXRhYmxlOiAke3Byb3BzLmVkaXRhYmxlfWApO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnlcclxuICBjb25zdCBwYXJlbnQgPSBwYXJlbnRJbm5lcih0cmVlIGFzIGFueSwgcHJvcHMpO1xyXG4gIGNvbnN0IGFuY2VzdG9yID0gKHBhcmVudD8uYW5jZXN0b3JzIHx8IFtdKS5maW5kKFxyXG4gICAgYSA9PiAoYSBhcyBDZWxsKS5jb250ZW50IHx8IChhIGFzIENlbGwpLmxheW91dFxyXG4gICk7XHJcbiAgcmV0dXJuIGFuY2VzdG9yPy5pZDtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3Rvcih7XHJcbiAgcGFyZW50SWQ6IHBhcmVudElkU2VsZWN0b3IsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiBEaXNwYXRjaCwgcHJvcHM6IENvbXBvbmV0aXplZENlbGwpID0+IHtcclxuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKFxyXG4gICAge1xyXG4gICAgICBmb2N1c0NlbGw6IChpZDogc3RyaW5nKSA9PiBmb2N1c0NlbGxJbnRlcm5hbChpZCwgdHJ1ZSkoKSxcclxuICAgIH0sXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICBkaXNwYXRjaCBhcyBhbnlcclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoU2VsZWN0UGFyZW50QnV0dG9uKSBhcyBSZWFjdC5GQzxTZWxlY3RQYXJlbnRCdXR0b25DdXN0b21Qcm9wcz47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=