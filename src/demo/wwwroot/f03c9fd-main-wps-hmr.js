webpackHotUpdate("main",{

/***/ "./node_modules/@material-ui/icons/VerticalAlignTop.js":
false,

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
/* harmony import */ var _material_ui_icons_Panorama__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Panorama */ "./node_modules/@material-ui/icons/Panorama.js");
/* harmony import */ var _material_ui_icons_Panorama__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Panorama__WEBPACK_IMPORTED_MODULE_4__);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons_Panorama__WEBPACK_IMPORTED_MODULE_4___default.a, null)) : null;
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

/***/ }),

/***/ "./src/lib/image/default/settings.tsx":
/*!********************************************!*\
  !*** ./src/lib/image/default/settings.tsx ***!
  \********************************************/
/*! exports provided: defaultTranslations, defaultSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTranslations", function() { return defaultTranslations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSettings", function() { return defaultSettings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_page_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-page/core */ "./node_modules/@react-page/core/lib-es/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



var Panorama = Object(_react_page_core__WEBPACK_IMPORTED_MODULE_1__["lazyLoad"])(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! @material-ui/icons/Panorama */ "./node_modules/@material-ui/icons/Panorama.js", 7));
});
var defaultTranslations = {
  pluginName: 'Image',
  pluginDescription: 'Loads an image from an url.',
  or: 'OR',
  haveUrl: 'I have a URL',
  imageUrl: 'Image URL',
  hrefPlaceholder: 'http://example.com',
  hrefLabel: 'Link location (url)',
  openNewWindow: 'Open in new window',
  srcPlaceholder: 'http://example.com/image.png'
};
var defaultSettings = {
  Controls: function Controls() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, "Controls for this plugin were not provided");
  },
  Renderer: function Renderer() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, "Renderer; for this plugin was not provided ");
  },
  translations: defaultTranslations,
  IconComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Panorama, null),
  UploadImageField: function UploadImageField() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, "Upload image field was not provided");
  }
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Panorama, "Panorama", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\image\\default\\settings.tsx");
  reactHotLoader.register(defaultTranslations, "defaultTranslations", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\image\\default\\settings.tsx");
  reactHotLoader.register(defaultSettings, "defaultSettings", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\image\\default\\settings.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbW1vbi9jb21wb25lbnRzL3NlbGVjdFBhcmVudEJ1dHRvbi9TZWxlY3RQYXJlbnRCdXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy9saWIvaW1hZ2UvZGVmYXVsdC9zZXR0aW5ncy50c3giXSwibmFtZXMiOlsiU2VsZWN0UGFyZW50QnV0dG9uIiwicHJvcHMiLCJwYXJlbnRJZCIsImZvY3VzQ2VsbCIsIm9uQ2xpY2siLCJSZWFjdCIsInBhcmVudElubmVyIiwiY3VycmVudCIsImlkIiwicm93cyIsImNlbGxzIiwiZm91bmQiLCJ1bmRlZmluZWQiLCJmaW5kIiwibiIsImYiLCJCb29sZWFuIiwiYW5jZXN0b3JzIiwicGFyZW50SWRTZWxlY3RvciIsInN0YXRlIiwidHJlZSIsImVkaXRhYmxlIiwiRXJyb3IiLCJwYXJlbnQiLCJhbmNlc3RvciIsImEiLCJjb250ZW50IiwibGF5b3V0IiwibWFwU3RhdGVUb1Byb3BzIiwiY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJmb2N1c0NlbGxJbnRlcm5hbCIsImNvbm5lY3QiLCJQYW5vcmFtYSIsImxhenlMb2FkIiwiZGVmYXVsdFRyYW5zbGF0aW9ucyIsInBsdWdpbk5hbWUiLCJwbHVnaW5EZXNjcmlwdGlvbiIsIm9yIiwiaGF2ZVVybCIsImltYWdlVXJsIiwiaHJlZlBsYWNlaG9sZGVyIiwiaHJlZkxhYmVsIiwib3Blbk5ld1dpbmRvdyIsInNyY1BsYWNlaG9sZGVyIiwiZGVmYXVsdFNldHRpbmdzIiwiQ29udHJvbHMiLCJSZW5kZXJlciIsInRyYW5zbGF0aW9ucyIsIkljb25Db21wb25lbnQiLCJVcGxvYWRJbWFnZUZpZWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7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OzBCQUVPRSxtQjswQkFZQVUsZSIsImZpbGUiOiJmMDNjOWZkLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCwgUm9vdFN0YXRlIH0gZnJvbSAnQHJlYWN0LXBhZ2UvY29yZSc7XHJcbmltcG9ydCB7IGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0JztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBQYW5vcmFtYUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Bhbm9yYW1hJztcclxuaW1wb3J0IHsgRGlzcGF0Y2gsIGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHtcclxuICBDb21wb25ldGl6ZWRDZWxsLFxyXG4gIENlbGwsXHJcbiAgUm93LFxyXG59IGZyb20gJ0ByZWFjdC1wYWdlL2NvcmUvbGliL3R5cGVzL2VkaXRhYmxlJztcclxuaW1wb3J0IHsgZm9jdXNDZWxsIGFzIGZvY3VzQ2VsbEludGVybmFsIH0gZnJvbSAnQHJlYWN0LXBhZ2UvY29yZS9saWIvYWN0aW9ucy9jZWxsJztcclxuaW1wb3J0IHsgTm9kZVByb3BzLCBlZGl0YWJsZSB9IGZyb20gJ0ByZWFjdC1wYWdlL2NvcmUvbGliL3NlbGVjdG9yL2VkaXRhYmxlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0UGFyZW50QnV0dG9uQ3VzdG9tUHJvcHMge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgZWRpdGFibGU6IHN0cmluZztcclxufVxyXG5cclxudHlwZSBSZWR1eFByb3BzID0ge1xyXG4gIHBhcmVudElkPzogc3RyaW5nO1xyXG59O1xyXG5cclxudHlwZSBBY3Rpb25DcmVhdG9yc1R5cGVzID0ge1xyXG4gIGZvY3VzQ2VsbDogKGlkOiBzdHJpbmcpID0+IHZvaWQ7XHJcbn07XHJcblxyXG50eXBlIFNlbGVjdFBhcmVudEJ1dHRvblByb3BzID0gU2VsZWN0UGFyZW50QnV0dG9uQ3VzdG9tUHJvcHMgJlxyXG4gIFJlZHV4UHJvcHMgJlxyXG4gIEFjdGlvbkNyZWF0b3JzVHlwZXM7XHJcblxyXG5jb25zdCBTZWxlY3RQYXJlbnRCdXR0b246IFJlYWN0LkZDPFNlbGVjdFBhcmVudEJ1dHRvblByb3BzPiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IHBhcmVudElkLCBmb2N1c0NlbGwgfSA9IHByb3BzO1xyXG4gIGNvbnN0IG9uQ2xpY2sgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiBmb2N1c0NlbGwocGFyZW50SWQpLCBbcGFyZW50SWRdKTtcclxuICByZXR1cm4gcGFyZW50SWQgPyAoXHJcbiAgICA8SWNvbkJ1dHRvblxyXG4gICAgICBjbGFzc05hbWU9XCJib3R0b21Ub29sYmFyX19zZWxlY3RQYXJlbnRCdXR0b25cIlxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICBjb2xvcj1cImRlZmF1bHRcIlxyXG4gICAgICB0aXRsZT1cIlNlbGVjdCBiYWNrZ3JvdW5kXCJcclxuICAgID5cclxuICAgICAgPFBhbm9yYW1hSWNvbiAvPlxyXG4gICAgPC9JY29uQnV0dG9uPlxyXG4gICkgOiBudWxsO1xyXG59O1xyXG5cclxudHlwZSBXaXRoQW5jZXN0b3JzID0gQ2VsbCAmIFJvdyAmIHsgYW5jZXN0b3JzPzogKENlbGwgfCBSb3cpW10gfTtcclxuXHJcbmNvbnN0IHBhcmVudElubmVyID0gKFxyXG4gIGN1cnJlbnQ6IFdpdGhBbmNlc3RvcnMsXHJcbiAgcHJvcHM6IHsgaWQ6IHN0cmluZyB9XHJcbik6IFdpdGhBbmNlc3RvcnMgPT4ge1xyXG4gIGNvbnN0IHsgaWQsIHJvd3MgPSBbXSwgY2VsbHMgPSBbXSB9ID0gY3VycmVudDtcclxuICBpZiAoaWQgPT09IHByb3BzLmlkKSB7XHJcbiAgICByZXR1cm4gY3VycmVudDtcclxuICB9XHJcblxyXG4gIGxldCBmb3VuZDogV2l0aEFuY2VzdG9ycyA9IHVuZGVmaW5lZDtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgWy4uLnJvd3MsIC4uLmNlbGxzXS5maW5kKG4gPT4ge1xyXG4gICAgY29uc3QgZiA9IHBhcmVudElubmVyKG4sIHByb3BzKTtcclxuICAgIGlmIChmKSB7XHJcbiAgICAgIGZvdW5kID0gZjtcclxuICAgIH1cclxuICAgIHJldHVybiBCb29sZWFuKGYpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZm91bmRcclxuICAgID8geyAuLi5mb3VuZCwgYW5jZXN0b3JzOiBbLi4uKGZvdW5kLmFuY2VzdG9ycyB8fCBbXSksIGN1cnJlbnRdIH1cclxuICAgIDogZm91bmQ7XHJcbn07XHJcblxyXG5jb25zdCBwYXJlbnRJZFNlbGVjdG9yID0gKFxyXG4gIHN0YXRlOiBSb290U3RhdGUsXHJcbiAgcHJvcHM6IE5vZGVQcm9wc1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuKTogc3RyaW5nID0+IHtcclxuICBjb25zdCB0cmVlID0gZWRpdGFibGUoc3RhdGUsIHsgaWQ6IHByb3BzLmVkaXRhYmxlIH0pO1xyXG4gIGlmICghdHJlZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmluZCBlZGl0YWJsZTogJHtwcm9wcy5lZGl0YWJsZX1gKTtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55XHJcbiAgY29uc3QgcGFyZW50ID0gcGFyZW50SW5uZXIodHJlZSBhcyBhbnksIHByb3BzKTtcclxuICBjb25zdCBhbmNlc3RvciA9IChwYXJlbnQ/LmFuY2VzdG9ycyB8fCBbXSkuZmluZChcclxuICAgIGEgPT4gKGEgYXMgQ2VsbCkuY29udGVudCB8fCAoYSBhcyBDZWxsKS5sYXlvdXRcclxuICApO1xyXG4gIHJldHVybiBhbmNlc3Rvcj8uaWQ7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3Ioe1xyXG4gIHBhcmVudElkOiBwYXJlbnRJZFNlbGVjdG9yLFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaDogRGlzcGF0Y2gsIHByb3BzOiBDb21wb25ldGl6ZWRDZWxsKSA9PiB7XHJcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhcclxuICAgIHtcclxuICAgICAgZm9jdXNDZWxsOiAoaWQ6IHN0cmluZykgPT4gZm9jdXNDZWxsSW50ZXJuYWwoaWQsIHRydWUpKCksXHJcbiAgICB9LFxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgZGlzcGF0Y2ggYXMgYW55XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKFNlbGVjdFBhcmVudEJ1dHRvbikgYXMgUmVhY3QuRkM8U2VsZWN0UGFyZW50QnV0dG9uQ3VzdG9tUHJvcHM+O1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEltYWdlU2V0dGluZ3MgfSBmcm9tICcuLi90eXBlcy9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IGxhenlMb2FkIH0gZnJvbSAnQHJlYWN0LXBhZ2UvY29yZSc7XHJcbmNvbnN0IFBhbm9yYW1hID0gbGF6eUxvYWQoKCkgPT4gaW1wb3J0KCdAbWF0ZXJpYWwtdWkvaWNvbnMvUGFub3JhbWEnKSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdFRyYW5zbGF0aW9ucyA9IHtcclxuICBwbHVnaW5OYW1lOiAnSW1hZ2UnLFxyXG4gIHBsdWdpbkRlc2NyaXB0aW9uOiAnTG9hZHMgYW4gaW1hZ2UgZnJvbSBhbiB1cmwuJyxcclxuICBvcjogJ09SJyxcclxuICBoYXZlVXJsOiAnSSBoYXZlIGEgVVJMJyxcclxuICBpbWFnZVVybDogJ0ltYWdlIFVSTCcsXHJcbiAgaHJlZlBsYWNlaG9sZGVyOiAnaHR0cDovL2V4YW1wbGUuY29tJyxcclxuICBocmVmTGFiZWw6ICdMaW5rIGxvY2F0aW9uICh1cmwpJyxcclxuICBvcGVuTmV3V2luZG93OiAnT3BlbiBpbiBuZXcgd2luZG93JyxcclxuICBzcmNQbGFjZWhvbGRlcjogJ2h0dHA6Ly9leGFtcGxlLmNvbS9pbWFnZS5wbmcnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRTZXR0aW5nczogSW1hZ2VTZXR0aW5ncyA9IHtcclxuICBDb250cm9sczogKCkgPT4gPD5Db250cm9scyBmb3IgdGhpcyBwbHVnaW4gd2VyZSBub3QgcHJvdmlkZWQ8Lz4sXHJcbiAgUmVuZGVyZXI6ICgpID0+IDw+UmVuZGVyZXI7IGZvciB0aGlzIHBsdWdpbiB3YXMgbm90IHByb3ZpZGVkIDwvPixcclxuICB0cmFuc2xhdGlvbnM6IGRlZmF1bHRUcmFuc2xhdGlvbnMsXHJcbiAgSWNvbkNvbXBvbmVudDogPFBhbm9yYW1hIC8+LFxyXG4gIFVwbG9hZEltYWdlRmllbGQ6ICgpID0+IDw+VXBsb2FkIGltYWdlIGZpZWxkIHdhcyBub3QgcHJvdmlkZWQ8Lz4sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=