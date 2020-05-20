webpackHotUpdate("main",{

/***/ "./src/lib/common/components/paddingButton/PaddingButton.tsx":
/*!*******************************************************************!*\
  !*** ./src/lib/common/components/paddingButton/PaddingButton.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _react_page_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-page/core */ "./node_modules/@react-page/core/lib-es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/lib/index.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _PaddingSlider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PaddingSlider */ "./src/lib/common/components/paddingButton/PaddingSlider.tsx");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _react_page_core_lib_actions_cell__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @react-page/core/lib/actions/cell */ "./node_modules/@react-page/core/lib/actions/cell/index.js");
/* harmony import */ var _react_page_core_lib_actions_cell__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_react_page_core_lib_actions_cell__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_VerticalAlignCenter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/VerticalAlignCenter */ "./node_modules/@material-ui/icons/VerticalAlignCenter.js");
/* harmony import */ var _material_ui_icons_VerticalAlignCenter__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VerticalAlignCenter__WEBPACK_IMPORTED_MODULE_12__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};















var PaddingButton = function PaddingButton(props) {
  var _node$content, _ref, _node$content2, _ref2, _node$layout, _ref3, _node$content3, _ref4, _node$layout2;

  var node = props.node,
      updateCellContent = props.updateCellContent,
      updateCellLayout = props.updateCellLayout;
  var isContentCell = Boolean(node === null || node === void 0 ? void 0 : (_node$content = node.content) === null || _node$content === void 0 ? void 0 : _node$content.state);
  var updateCell = isContentCell ? updateCellContent : updateCellLayout;
  var nodeAbove = ((_ref = node === null || node === void 0 ? void 0 : (_node$content2 = node.content) === null || _node$content2 === void 0 ? void 0 : _node$content2.state) === null || _ref === void 0 ? void 0 : _ref.above) || ((_ref2 = node === null || node === void 0 ? void 0 : (_node$layout = node.layout) === null || _node$layout === void 0 ? void 0 : _node$layout.state) === null || _ref2 === void 0 ? void 0 : _ref2.above);
  var nodeBelow = ((_ref3 = node === null || node === void 0 ? void 0 : (_node$content3 = node.content) === null || _node$content3 === void 0 ? void 0 : _node$content3.state) === null || _ref3 === void 0 ? void 0 : _ref3.below) || ((_ref4 = node === null || node === void 0 ? void 0 : (_node$layout2 = node.layout) === null || _node$layout2 === void 0 ? void 0 : _node$layout2.state) === null || _ref4 === void 0 ? void 0 : _ref4.below);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"]({
    above: nodeAbove,
    below: nodeBelow
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      initialState = _React$useState2[0],
      setInitialState = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isModalOpen = _React$useState4[0],
      setIsModalOpen = _React$useState4[1];

  var resetState = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
    setSpaceAbove(nodeAbove);
    setSpaceBelow(nodeBelow);
  }, [isModalOpen, nodeAbove, nodeBelow]);
  var closeModal = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
    setIsModalOpen(false);
    resetState();
  }, [resetState]);
  var openModal = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
    setIsModalOpen(true);
    resetState();
  }, [resetState]);

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2__["useState"](nodeAbove),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      spaceAbove = _React$useState6[0],
      setSpaceAbove = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2__["useState"](nodeBelow),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      spaceBelow = _React$useState8[0],
      setSpaceBelow = _React$useState8[1];

  var onSpaceAboveChange = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (val) {
    setSpaceAbove(val);
    updateCell({
      above: val,
      below: spaceBelow
    });
  }, [spaceBelow, updateCell]);
  var onSpaceBelowChange = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (val) {
    setSpaceBelow(val);
    updateCell({
      above: spaceAbove,
      below: val
    });
  }, [spaceAbove, updateCell]);
  var onCancelClick = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
    closeModal();
    updateCell(initialState);
  }, [closeModal, initialState, updateCell]);
  var onOkClick = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
    var newState = {
      above: spaceAbove,
      below: spaceBelow
    };
    updateCell(newState);
    setInitialState(_objectSpread({}, newState));
    closeModal();
  }, [closeModal, updateCell, updateCell, spaceAbove, spaceBelow]);
  return node ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_0__["default"], {
    onClick: openModal,
    color: "default",
    title: "Padding"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_icons_VerticalAlignCenter__WEBPACK_IMPORTED_MODULE_12___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__["default"], {
    open: isModalOpen,
    onClose: onCancelClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "responsive-dialog-title"
  }, "Add space around your content"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_PaddingSlider__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "Space above",
    value: spaceAbove,
    onValueChange: onSpaceAboveChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_PaddingSlider__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "Space below",
    value: spaceBelow,
    onValueChange: onSpaceBelowChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: onCancelClick,
    color: "default"
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: onOkClick,
    color: "primary"
  }, "Ok")))) : null;
};

__signature__(PaddingButton, "useState{[initialState, setInitialState]({\r\n    above: nodeAbove,\r\n    below: nodeBelow,\r\n  })}\nuseState{[isModalOpen, setIsModalOpen](false)}\nuseCallback{resetState}\nuseCallback{closeModal}\nuseCallback{openModal}\nuseState{[spaceAbove, setSpaceAbove](nodeAbove)}\nuseState{[spaceBelow, setSpaceBelow](nodeBelow)}\nuseCallback{onSpaceAboveChange}\nuseCallback{onSpaceBelowChange}\nuseCallback{onCancelClick}\nuseCallback{onOkClick}");

var mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_3__["createStructuredSelector"])({
  node: _react_page_core__WEBPACK_IMPORTED_MODULE_1__["Selectors"].Editable.node
});

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref5) {
  var id = _ref5.id;
  return Object(redux__WEBPACK_IMPORTED_MODULE_10__["bindActionCreators"])({
    updateCellContent: Object(_react_page_core_lib_actions_cell__WEBPACK_IMPORTED_MODULE_11__["updateCellContent"])(id),
    updateCellLayout: Object(_react_page_core_lib_actions_cell__WEBPACK_IMPORTED_MODULE_11__["updateCellLayout"])(id)
  }, // tslint:disable-next-line:no-any
  dispatch);
};

var _default = Object(_react_page_core__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(PaddingButton);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PaddingButton, "PaddingButton", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\paddingButton\\PaddingButton.tsx");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\paddingButton\\PaddingButton.tsx");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\paddingButton\\PaddingButton.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\paddingButton\\PaddingButton.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbW1vbi9jb21wb25lbnRzL3BhZGRpbmdCdXR0b24vUGFkZGluZ0J1dHRvbi50c3giXSwibmFtZXMiOlsiUGFkZGluZ0J1dHRvbiIsInByb3BzIiwibm9kZSIsInVwZGF0ZUNlbGxDb250ZW50IiwidXBkYXRlQ2VsbExheW91dCIsImlzQ29udGVudENlbGwiLCJCb29sZWFuIiwiY29udGVudCIsInN0YXRlIiwidXBkYXRlQ2VsbCIsIm5vZGVBYm92ZSIsImFib3ZlIiwibGF5b3V0Iiwibm9kZUJlbG93IiwiYmVsb3ciLCJSZWFjdCIsImluaXRpYWxTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsImlzTW9kYWxPcGVuIiwic2V0SXNNb2RhbE9wZW4iLCJyZXNldFN0YXRlIiwic2V0U3BhY2VBYm92ZSIsInNldFNwYWNlQmVsb3ciLCJjbG9zZU1vZGFsIiwib3Blbk1vZGFsIiwic3BhY2VBYm92ZSIsInNwYWNlQmVsb3ciLCJvblNwYWNlQWJvdmVDaGFuZ2UiLCJ2YWwiLCJvblNwYWNlQmVsb3dDaGFuZ2UiLCJvbkNhbmNlbENsaWNrIiwib25Pa0NsaWNrIiwibmV3U3RhdGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IiLCJTZWxlY3RvcnMiLCJFZGl0YWJsZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiaWQiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJ1cGRhdGVDZWxsQ29udGVudEludGVybmFsIiwidXBkYXRlQ2VsbExheW91dEludGVybmFsIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BOztBQW9CQSxJQUFNQSxhQUEyQyxHQUFHLFNBQTlDQSxhQUE4QyxD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QUFIakIsSUFORixDQUpGLGVBZ0JFLG9EQUFDLHVFQUFELHFCQUNFLG9EQUFDLGdFQUFEO0FBQVEsV0FBTyxFQUFFQyxhQUFqQjtBQUFnQyxTQUFLLEVBQUM7QUFBdEMsY0FERixlQUlFLG9EQUFDLGdFQUFEO0FBQVEsV0FBTyxFQUFFQyxTQUFqQjtBQUE0QixTQUFLLEVBQUM7QUFBbEMsVUFKRixDQWhCRixDQUpGLENBRFMsR0ErQlAsSUEvQko7QUFnQ0QsQ0F4RkQ7O2NBQU0vQixhOztBQTBGTixJQUFNaUMsZUFBZSxHQUFHQyx5RUFBd0IsQ0FBQztBQUMvQ2hDLE1BQUksRUFBRWlDLDBEQUFTLENBQUNDLFFBQVYsQ0FBbUJsQztBQURzQixDQUFELENBQWhEOztBQUlBLElBQU1tQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQ3pCQyxRQUR5QjtBQUFBLE1BRXZCQyxFQUZ1QixTQUV2QkEsRUFGdUI7QUFBQSxTQUl6QkMsaUVBQWtCLENBQ2hCO0FBQ0VyQyxxQkFBaUIsRUFBRXNDLDRGQUF5QixDQUFDRixFQUFELENBRDlDO0FBRUVuQyxvQkFBZ0IsRUFBRXNDLDJGQUF3QixDQUFDSCxFQUFEO0FBRjVDLEdBRGdCLEVBS2hCO0FBQ0FELFVBTmdCLENBSk87QUFBQSxDQUEzQjs7ZUFhZUssZ0VBQU8sQ0FDcEJWLGVBRG9CLEVBRXBCSSxrQkFGb0IsQ0FBUCxDQUdickMsYUFIYSxDOztBQUFBOzs7Ozs7Ozs7OzBCQTNHVEEsYTswQkEwRkFpQyxlOzBCQUlBSSxrQiIsImZpbGUiOiIzZjZhNzk1LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBTZWxlY3RvcnMsIENlbGwgfSBmcm9tICdAcmVhY3QtcGFnZS9jb3JlJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCc7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcclxuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlJztcclxuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XHJcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBQYWRkaW5nU2xpZGVyIGZyb20gJy4vUGFkZGluZ1NsaWRlcic7XHJcbmltcG9ydCB7IERpc3BhdGNoLCBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7XHJcbiAgVXBkYXRlQ2VsbENvbnRlbnRBY3Rpb24sXHJcbiAgdXBkYXRlQ2VsbENvbnRlbnQgYXMgdXBkYXRlQ2VsbENvbnRlbnRJbnRlcm5hbCxcclxuICB1cGRhdGVDZWxsTGF5b3V0IGFzIHVwZGF0ZUNlbGxMYXlvdXRJbnRlcm5hbCxcclxufSBmcm9tICdAcmVhY3QtcGFnZS9jb3JlL2xpYi9hY3Rpb25zL2NlbGwnO1xyXG5pbXBvcnQgeyBDb21wb25ldGl6ZWRDZWxsIH0gZnJvbSAnQHJlYWN0LXBhZ2UvY29yZS9saWIvdHlwZXMvZWRpdGFibGUnO1xyXG5pbXBvcnQgeyBQYWRkaW5nU3RhdGUgfSBmcm9tICcuLi8uLi90eXBlcy9wYWRkaW5nL1BhZGRpbmdTdGF0ZSc7XHJcbmltcG9ydCBWZXJ0aWNhbEFsaWduQ2VudGVySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVmVydGljYWxBbGlnbkNlbnRlcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhZGRpbmdCdXR0b25DdXN0b21Qcm9wcyB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBlZGl0YWJsZTogc3RyaW5nO1xyXG4gIGZvY3VzZWRDZWxsQ2xhc3NOYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG50eXBlIFJlZHV4UHJvcHMgPSB7XHJcbiAgbm9kZT86IENlbGw7XHJcbiAgdXBkYXRlQ2VsbENvbnRlbnQ6IChzdGF0ZTogUGFkZGluZ1N0YXRlKSA9PiB2b2lkO1xyXG4gIHVwZGF0ZUNlbGxMYXlvdXQ6IChzdGF0ZTogUGFkZGluZ1N0YXRlKSA9PiB2b2lkO1xyXG59O1xyXG5cclxudHlwZSBBY3Rpb25DcmVhdG9yc1R5cGVzID0ge307XHJcblxyXG50eXBlIFBhZGRpbmdCdXR0b25Qcm9wcyA9IFBhZGRpbmdCdXR0b25DdXN0b21Qcm9wcyAmXHJcbiAgUmVkdXhQcm9wcyAmXHJcbiAgQWN0aW9uQ3JlYXRvcnNUeXBlcztcclxuXHJcbmNvbnN0IFBhZGRpbmdCdXR0b246IFJlYWN0LkZDPFBhZGRpbmdCdXR0b25Qcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBub2RlLCB1cGRhdGVDZWxsQ29udGVudCwgdXBkYXRlQ2VsbExheW91dCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgaXNDb250ZW50Q2VsbCA9IEJvb2xlYW4obm9kZT8uY29udGVudD8uc3RhdGUpO1xyXG4gIGNvbnN0IHVwZGF0ZUNlbGwgPSBpc0NvbnRlbnRDZWxsID8gdXBkYXRlQ2VsbENvbnRlbnQgOiB1cGRhdGVDZWxsTGF5b3V0O1xyXG4gIGNvbnN0IG5vZGVBYm92ZSA9XHJcbiAgICAobm9kZT8uY29udGVudD8uc3RhdGUgYXMgUGFkZGluZ1N0YXRlKT8uYWJvdmUgfHxcclxuICAgIChub2RlPy5sYXlvdXQ/LnN0YXRlIGFzIFBhZGRpbmdTdGF0ZSk/LmFib3ZlO1xyXG4gIGNvbnN0IG5vZGVCZWxvdyA9XHJcbiAgICAobm9kZT8uY29udGVudD8uc3RhdGUgYXMgUGFkZGluZ1N0YXRlKT8uYmVsb3cgfHxcclxuICAgIChub2RlPy5sYXlvdXQ/LnN0YXRlIGFzIFBhZGRpbmdTdGF0ZSk/LmJlbG93O1xyXG5cclxuICBjb25zdCBbaW5pdGlhbFN0YXRlLCBzZXRJbml0aWFsU3RhdGVdID0gUmVhY3QudXNlU3RhdGU8UGFkZGluZ1N0YXRlPih7XHJcbiAgICBhYm92ZTogbm9kZUFib3ZlLFxyXG4gICAgYmVsb3c6IG5vZGVCZWxvdyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRJc01vZGFsT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgcmVzZXRTdGF0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldFNwYWNlQWJvdmUobm9kZUFib3ZlKTtcclxuICAgIHNldFNwYWNlQmVsb3cobm9kZUJlbG93KTtcclxuICB9LCBbaXNNb2RhbE9wZW4sIG5vZGVBYm92ZSwgbm9kZUJlbG93XSk7XHJcbiAgY29uc3QgY2xvc2VNb2RhbCA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldElzTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIHJlc2V0U3RhdGUoKTtcclxuICB9LCBbcmVzZXRTdGF0ZV0pO1xyXG4gIGNvbnN0IG9wZW5Nb2RhbCA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldElzTW9kYWxPcGVuKHRydWUpO1xyXG4gICAgcmVzZXRTdGF0ZSgpO1xyXG4gIH0sIFtyZXNldFN0YXRlXSk7XHJcbiAgY29uc3QgW3NwYWNlQWJvdmUsIHNldFNwYWNlQWJvdmVdID0gUmVhY3QudXNlU3RhdGUobm9kZUFib3ZlKTtcclxuICBjb25zdCBbc3BhY2VCZWxvdywgc2V0U3BhY2VCZWxvd10gPSBSZWFjdC51c2VTdGF0ZShub2RlQmVsb3cpO1xyXG4gIGNvbnN0IG9uU3BhY2VBYm92ZUNoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgdmFsID0+IHtcclxuICAgICAgc2V0U3BhY2VBYm92ZSh2YWwpO1xyXG4gICAgICB1cGRhdGVDZWxsKHsgYWJvdmU6IHZhbCwgYmVsb3c6IHNwYWNlQmVsb3cgfSk7XHJcbiAgICB9LFxyXG4gICAgW3NwYWNlQmVsb3csIHVwZGF0ZUNlbGxdXHJcbiAgKTtcclxuICBjb25zdCBvblNwYWNlQmVsb3dDaGFuZ2UgPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgIHZhbCA9PiB7XHJcbiAgICAgIHNldFNwYWNlQmVsb3codmFsKTtcclxuICAgICAgdXBkYXRlQ2VsbCh7IGFib3ZlOiBzcGFjZUFib3ZlLCBiZWxvdzogdmFsIH0pO1xyXG4gICAgfSxcclxuICAgIFtzcGFjZUFib3ZlLCB1cGRhdGVDZWxsXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG9uQ2FuY2VsQ2xpY2sgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjbG9zZU1vZGFsKCk7XHJcbiAgICB1cGRhdGVDZWxsKGluaXRpYWxTdGF0ZSk7XHJcbiAgfSwgW2Nsb3NlTW9kYWwsIGluaXRpYWxTdGF0ZSwgdXBkYXRlQ2VsbF0pO1xyXG4gIGNvbnN0IG9uT2tDbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnN0IG5ld1N0YXRlID0geyBhYm92ZTogc3BhY2VBYm92ZSwgYmVsb3c6IHNwYWNlQmVsb3cgfTtcclxuICAgIHVwZGF0ZUNlbGwobmV3U3RhdGUpO1xyXG4gICAgc2V0SW5pdGlhbFN0YXRlKHsgLi4ubmV3U3RhdGUgfSk7XHJcbiAgICBjbG9zZU1vZGFsKCk7XHJcbiAgfSwgW2Nsb3NlTW9kYWwsIHVwZGF0ZUNlbGwsIHVwZGF0ZUNlbGwsIHNwYWNlQWJvdmUsIHNwYWNlQmVsb3ddKTtcclxuICByZXR1cm4gbm9kZSA/IChcclxuICAgIDw+XHJcbiAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e29wZW5Nb2RhbH0gY29sb3I9XCJkZWZhdWx0XCIgdGl0bGU9XCJQYWRkaW5nXCI+XHJcbiAgICAgICAgPFZlcnRpY2FsQWxpZ25DZW50ZXJJY29uIC8+XHJcbiAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgPERpYWxvZyBvcGVuPXtpc01vZGFsT3Blbn0gb25DbG9zZT17b25DYW5jZWxDbGlja30+XHJcbiAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwicmVzcG9uc2l2ZS1kaWFsb2ctdGl0bGVcIj5cclxuICAgICAgICAgIEFkZCBzcGFjZSBhcm91bmQgeW91ciBjb250ZW50XHJcbiAgICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgIDxQYWRkaW5nU2xpZGVyXHJcbiAgICAgICAgICAgIHRpdGxlPVwiU3BhY2UgYWJvdmVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17c3BhY2VBYm92ZX1cclxuICAgICAgICAgICAgb25WYWx1ZUNoYW5nZT17b25TcGFjZUFib3ZlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxQYWRkaW5nU2xpZGVyXHJcbiAgICAgICAgICAgIHRpdGxlPVwiU3BhY2UgYmVsb3dcIlxyXG4gICAgICAgICAgICB2YWx1ZT17c3BhY2VCZWxvd31cclxuICAgICAgICAgICAgb25WYWx1ZUNoYW5nZT17b25TcGFjZUJlbG93Q2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2FuY2VsQ2xpY2t9IGNvbG9yPVwiZGVmYXVsdFwiPlxyXG4gICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbk9rQ2xpY2t9IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICBPa1xyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICA8L0RpYWxvZz5cclxuICAgIDwvPlxyXG4gICkgOiBudWxsO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yKHtcclxuICBub2RlOiBTZWxlY3RvcnMuRWRpdGFibGUubm9kZSxcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoXHJcbiAgZGlzcGF0Y2g6IERpc3BhdGNoPFVwZGF0ZUNlbGxDb250ZW50QWN0aW9uPixcclxuICB7IGlkIH06IENvbXBvbmV0aXplZENlbGxcclxuKSA9PlxyXG4gIGJpbmRBY3Rpb25DcmVhdG9ycyhcclxuICAgIHtcclxuICAgICAgdXBkYXRlQ2VsbENvbnRlbnQ6IHVwZGF0ZUNlbGxDb250ZW50SW50ZXJuYWwoaWQpLFxyXG4gICAgICB1cGRhdGVDZWxsTGF5b3V0OiB1cGRhdGVDZWxsTGF5b3V0SW50ZXJuYWwoaWQpLFxyXG4gICAgfSxcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgIGRpc3BhdGNoIGFzIGFueVxyXG4gICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShQYWRkaW5nQnV0dG9uKSBhcyBSZWFjdC5GQzxQYWRkaW5nQnV0dG9uQ3VzdG9tUHJvcHM+O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9