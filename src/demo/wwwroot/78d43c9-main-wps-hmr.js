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














var dialogClasses = {
  paper: 'bottomToolbar__paddingModal'
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
      above: val
    });
  }, [updateCell]);
  var onSpaceBelowChange = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (val) {
    setSpaceBelow(val);
    updateCell({
      below: val
    });
  }, [updateCell]);
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
    className: "bottomToolbar__paddingButton",
    onClick: openModal,
    color: "default",
    title: "Padding"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_icons_VerticalAlignCenter__WEBPACK_IMPORTED_MODULE_12___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__["default"], {
    classes: dialogClasses,
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
    className: "bottomToolbar__paddingButton__cancel",
    onClick: onCancelClick,
    color: "default"
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "bottomToolbar__paddingButton__ok",
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

  reactHotLoader.register(dialogClasses, "dialogClasses", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\paddingButton\\PaddingButton.tsx");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbW1vbi9jb21wb25lbnRzL3BhZGRpbmdCdXR0b24vUGFkZGluZ0J1dHRvbi50c3giXSwibmFtZXMiOlsiZGlhbG9nQ2xhc3NlcyIsInBhcGVyIiwiUGFkZGluZ0J1dHRvbiIsInByb3BzIiwibm9kZSIsInVwZGF0ZUNlbGxDb250ZW50IiwidXBkYXRlQ2VsbExheW91dCIsImlzQ29udGVudENlbGwiLCJCb29sZWFuIiwiY29udGVudCIsInN0YXRlIiwidXBkYXRlQ2VsbCIsIm5vZGVBYm92ZSIsImFib3ZlIiwibGF5b3V0Iiwibm9kZUJlbG93IiwiYmVsb3ciLCJSZWFjdCIsImluaXRpYWxTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsImlzTW9kYWxPcGVuIiwic2V0SXNNb2RhbE9wZW4iLCJyZXNldFN0YXRlIiwic2V0U3BhY2VBYm92ZSIsInNldFNwYWNlQmVsb3ciLCJjbG9zZU1vZGFsIiwib3Blbk1vZGFsIiwic3BhY2VBYm92ZSIsInNwYWNlQmVsb3ciLCJvblNwYWNlQWJvdmVDaGFuZ2UiLCJ2YWwiLCJvblNwYWNlQmVsb3dDaGFuZ2UiLCJvbkNhbmNlbENsaWNrIiwib25Pa0NsaWNrIiwibmV3U3RhdGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IiLCJTZWxlY3RvcnMiLCJFZGl0YWJsZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiaWQiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJ1cGRhdGVDZWxsQ29udGVudEludGVybmFsIiwidXBkYXRlQ2VsbExheW91dEludGVybmFsIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBb0JBLElBQU1BLGFB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UjtBQUVFLFNBQUssRUFBRUQsVUFGVDtBQUdFLGlCQUFhLEVBQUVHO0FBSGpCLElBTkYsQ0FSRixlQW9CRSxvREFBQyx1RUFBRCxxQkFDRSxvREFBQyxnRUFBRDtBQUNFLGFBQVMsRUFBQyxzQ0FEWjtBQUVFLFdBQU8sRUFBRUMsYUFGWDtBQUdFLFNBQUssRUFBQztBQUhSLGNBREYsZUFRRSxvREFBQyxnRUFBRDtBQUNFLGFBQVMsRUFBQyxrQ0FEWjtBQUVFLFdBQU8sRUFBRUMsU0FGWDtBQUdFLFNBQUssRUFBQztBQUhSLFVBUkYsQ0FwQkYsQ0FURixDQURTLEdBZ0RQLElBaERKO0FBaURELENBekdEOztjQUFNL0IsYTs7QUEyR04sSUFBTWlDLGVBQWUsR0FBR0MseUVBQXdCLENBQUM7QUFDL0NoQyxNQUFJLEVBQUVpQywwREFBUyxDQUFDQyxRQUFWLENBQW1CbEM7QUFEc0IsQ0FBRCxDQUFoRDs7QUFJQSxJQUFNbUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUN6QkMsUUFEeUI7QUFBQSxNQUV2QkMsRUFGdUIsU0FFdkJBLEVBRnVCO0FBQUEsU0FJekJDLGlFQUFrQixDQUNoQjtBQUNFckMscUJBQWlCLEVBQUVzQyw0RkFBeUIsQ0FBQ0YsRUFBRCxDQUQ5QztBQUVFbkMsb0JBQWdCLEVBQUVzQywyRkFBd0IsQ0FBQ0gsRUFBRDtBQUY1QyxHQURnQixFQUtoQjtBQUNBRCxVQU5nQixDQUpPO0FBQUEsQ0FBM0I7O2VBYWVLLGdFQUFPLENBQ3BCVixlQURvQixFQUVwQkksa0JBRm9CLENBQVAsQ0FHYnJDLGFBSGEsQzs7QUFBQTs7Ozs7Ozs7OzswQkE5SFRGLGE7MEJBRUFFLGE7MEJBMkdBaUMsZTswQkFJQUksa0IiLCJmaWxlIjoiNzhkNDNjOS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IHsgY29ubmVjdCwgU2VsZWN0b3JzLCBDZWxsIH0gZnJvbSAnQHJlYWN0LXBhZ2UvY29yZSc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xyXG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgUGFkZGluZ1NsaWRlciBmcm9tICcuL1BhZGRpbmdTbGlkZXInO1xyXG5pbXBvcnQgeyBEaXNwYXRjaCwgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQge1xyXG4gIFVwZGF0ZUNlbGxDb250ZW50QWN0aW9uLFxyXG4gIHVwZGF0ZUNlbGxDb250ZW50IGFzIHVwZGF0ZUNlbGxDb250ZW50SW50ZXJuYWwsXHJcbiAgdXBkYXRlQ2VsbExheW91dCBhcyB1cGRhdGVDZWxsTGF5b3V0SW50ZXJuYWwsXHJcbn0gZnJvbSAnQHJlYWN0LXBhZ2UvY29yZS9saWIvYWN0aW9ucy9jZWxsJztcclxuaW1wb3J0IHsgQ29tcG9uZXRpemVkQ2VsbCB9IGZyb20gJ0ByZWFjdC1wYWdlL2NvcmUvbGliL3R5cGVzL2VkaXRhYmxlJztcclxuaW1wb3J0IHsgUGFkZGluZ1N0YXRlIH0gZnJvbSAnLi4vLi4vdHlwZXMvcGFkZGluZy9QYWRkaW5nU3RhdGUnO1xyXG5pbXBvcnQgVmVydGljYWxBbGlnbkNlbnRlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1ZlcnRpY2FsQWxpZ25DZW50ZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYWRkaW5nQnV0dG9uQ3VzdG9tUHJvcHMge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgZWRpdGFibGU6IHN0cmluZztcclxuICBmb2N1c2VkQ2VsbENsYXNzTmFtZT86IHN0cmluZztcclxufVxyXG5cclxudHlwZSBSZWR1eFByb3BzID0ge1xyXG4gIG5vZGU/OiBDZWxsO1xyXG4gIHVwZGF0ZUNlbGxDb250ZW50OiAoc3RhdGU6IFBhZGRpbmdTdGF0ZSkgPT4gdm9pZDtcclxuICB1cGRhdGVDZWxsTGF5b3V0OiAoc3RhdGU6IFBhZGRpbmdTdGF0ZSkgPT4gdm9pZDtcclxufTtcclxuXHJcbnR5cGUgQWN0aW9uQ3JlYXRvcnNUeXBlcyA9IHt9O1xyXG5cclxudHlwZSBQYWRkaW5nQnV0dG9uUHJvcHMgPSBQYWRkaW5nQnV0dG9uQ3VzdG9tUHJvcHMgJlxyXG4gIFJlZHV4UHJvcHMgJlxyXG4gIEFjdGlvbkNyZWF0b3JzVHlwZXM7XHJcblxyXG5jb25zdCBkaWFsb2dDbGFzc2VzID0geyBwYXBlcjogJ2JvdHRvbVRvb2xiYXJfX3BhZGRpbmdNb2RhbCcgfTtcclxuXHJcbmNvbnN0IFBhZGRpbmdCdXR0b246IFJlYWN0LkZDPFBhZGRpbmdCdXR0b25Qcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBub2RlLCB1cGRhdGVDZWxsQ29udGVudCwgdXBkYXRlQ2VsbExheW91dCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgaXNDb250ZW50Q2VsbCA9IEJvb2xlYW4obm9kZT8uY29udGVudD8uc3RhdGUpO1xyXG4gIGNvbnN0IHVwZGF0ZUNlbGwgPSBpc0NvbnRlbnRDZWxsID8gdXBkYXRlQ2VsbENvbnRlbnQgOiB1cGRhdGVDZWxsTGF5b3V0O1xyXG4gIGNvbnN0IG5vZGVBYm92ZSA9XHJcbiAgICAobm9kZT8uY29udGVudD8uc3RhdGUgYXMgUGFkZGluZ1N0YXRlKT8uYWJvdmUgfHxcclxuICAgIChub2RlPy5sYXlvdXQ/LnN0YXRlIGFzIFBhZGRpbmdTdGF0ZSk/LmFib3ZlO1xyXG4gIGNvbnN0IG5vZGVCZWxvdyA9XHJcbiAgICAobm9kZT8uY29udGVudD8uc3RhdGUgYXMgUGFkZGluZ1N0YXRlKT8uYmVsb3cgfHxcclxuICAgIChub2RlPy5sYXlvdXQ/LnN0YXRlIGFzIFBhZGRpbmdTdGF0ZSk/LmJlbG93O1xyXG5cclxuICBjb25zdCBbaW5pdGlhbFN0YXRlLCBzZXRJbml0aWFsU3RhdGVdID0gUmVhY3QudXNlU3RhdGU8UGFkZGluZ1N0YXRlPih7XHJcbiAgICBhYm92ZTogbm9kZUFib3ZlLFxyXG4gICAgYmVsb3c6IG5vZGVCZWxvdyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRJc01vZGFsT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgcmVzZXRTdGF0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldFNwYWNlQWJvdmUobm9kZUFib3ZlKTtcclxuICAgIHNldFNwYWNlQmVsb3cobm9kZUJlbG93KTtcclxuICB9LCBbaXNNb2RhbE9wZW4sIG5vZGVBYm92ZSwgbm9kZUJlbG93XSk7XHJcbiAgY29uc3QgY2xvc2VNb2RhbCA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldElzTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIHJlc2V0U3RhdGUoKTtcclxuICB9LCBbcmVzZXRTdGF0ZV0pO1xyXG4gIGNvbnN0IG9wZW5Nb2RhbCA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldElzTW9kYWxPcGVuKHRydWUpO1xyXG4gICAgcmVzZXRTdGF0ZSgpO1xyXG4gIH0sIFtyZXNldFN0YXRlXSk7XHJcbiAgY29uc3QgW3NwYWNlQWJvdmUsIHNldFNwYWNlQWJvdmVdID0gUmVhY3QudXNlU3RhdGUobm9kZUFib3ZlKTtcclxuICBjb25zdCBbc3BhY2VCZWxvdywgc2V0U3BhY2VCZWxvd10gPSBSZWFjdC51c2VTdGF0ZShub2RlQmVsb3cpO1xyXG4gIGNvbnN0IG9uU3BhY2VBYm92ZUNoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgdmFsID0+IHtcclxuICAgICAgc2V0U3BhY2VBYm92ZSh2YWwpO1xyXG4gICAgICB1cGRhdGVDZWxsKHsgYWJvdmU6IHZhbCB9KTtcclxuICAgIH0sXHJcbiAgICBbdXBkYXRlQ2VsbF1cclxuICApO1xyXG4gIGNvbnN0IG9uU3BhY2VCZWxvd0NoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgdmFsID0+IHtcclxuICAgICAgc2V0U3BhY2VCZWxvdyh2YWwpO1xyXG4gICAgICB1cGRhdGVDZWxsKHsgYmVsb3c6IHZhbCB9KTtcclxuICAgIH0sXHJcbiAgICBbdXBkYXRlQ2VsbF1cclxuICApO1xyXG5cclxuICBjb25zdCBvbkNhbmNlbENsaWNrID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY2xvc2VNb2RhbCgpO1xyXG4gICAgdXBkYXRlQ2VsbChpbml0aWFsU3RhdGUpO1xyXG4gIH0sIFtjbG9zZU1vZGFsLCBpbml0aWFsU3RhdGUsIHVwZGF0ZUNlbGxdKTtcclxuICBjb25zdCBvbk9rQ2xpY2sgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHsgYWJvdmU6IHNwYWNlQWJvdmUsIGJlbG93OiBzcGFjZUJlbG93IH07XHJcbiAgICB1cGRhdGVDZWxsKG5ld1N0YXRlKTtcclxuICAgIHNldEluaXRpYWxTdGF0ZSh7IC4uLm5ld1N0YXRlIH0pO1xyXG4gICAgY2xvc2VNb2RhbCgpO1xyXG4gIH0sIFtjbG9zZU1vZGFsLCB1cGRhdGVDZWxsLCB1cGRhdGVDZWxsLCBzcGFjZUFib3ZlLCBzcGFjZUJlbG93XSk7XHJcbiAgcmV0dXJuIG5vZGUgPyAoXHJcbiAgICA8PlxyXG4gICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJvdHRvbVRvb2xiYXJfX3BhZGRpbmdCdXR0b25cIlxyXG4gICAgICAgIG9uQ2xpY2s9e29wZW5Nb2RhbH1cclxuICAgICAgICBjb2xvcj1cImRlZmF1bHRcIlxyXG4gICAgICAgIHRpdGxlPVwiUGFkZGluZ1wiXHJcbiAgICAgID5cclxuICAgICAgICA8VmVydGljYWxBbGlnbkNlbnRlckljb24gLz5cclxuICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICA8RGlhbG9nXHJcbiAgICAgICAgY2xhc3Nlcz17ZGlhbG9nQ2xhc3Nlc31cclxuICAgICAgICBvcGVuPXtpc01vZGFsT3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtvbkNhbmNlbENsaWNrfVxyXG4gICAgICA+XHJcbiAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwicmVzcG9uc2l2ZS1kaWFsb2ctdGl0bGVcIj5cclxuICAgICAgICAgIEFkZCBzcGFjZSBhcm91bmQgeW91ciBjb250ZW50XHJcbiAgICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgIDxQYWRkaW5nU2xpZGVyXHJcbiAgICAgICAgICAgIHRpdGxlPVwiU3BhY2UgYWJvdmVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17c3BhY2VBYm92ZX1cclxuICAgICAgICAgICAgb25WYWx1ZUNoYW5nZT17b25TcGFjZUFib3ZlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxQYWRkaW5nU2xpZGVyXHJcbiAgICAgICAgICAgIHRpdGxlPVwiU3BhY2UgYmVsb3dcIlxyXG4gICAgICAgICAgICB2YWx1ZT17c3BhY2VCZWxvd31cclxuICAgICAgICAgICAgb25WYWx1ZUNoYW5nZT17b25TcGFjZUJlbG93Q2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvdHRvbVRvb2xiYXJfX3BhZGRpbmdCdXR0b25fX2NhbmNlbFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2FuY2VsQ2xpY2t9XHJcbiAgICAgICAgICAgIGNvbG9yPVwiZGVmYXVsdFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvdHRvbVRvb2xiYXJfX3BhZGRpbmdCdXR0b25fX29rXCJcclxuICAgICAgICAgICAgb25DbGljaz17b25Pa0NsaWNrfVxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBPa1xyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICA8L0RpYWxvZz5cclxuICAgIDwvPlxyXG4gICkgOiBudWxsO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yKHtcclxuICBub2RlOiBTZWxlY3RvcnMuRWRpdGFibGUubm9kZSxcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoXHJcbiAgZGlzcGF0Y2g6IERpc3BhdGNoPFVwZGF0ZUNlbGxDb250ZW50QWN0aW9uPixcclxuICB7IGlkIH06IENvbXBvbmV0aXplZENlbGxcclxuKSA9PlxyXG4gIGJpbmRBY3Rpb25DcmVhdG9ycyhcclxuICAgIHtcclxuICAgICAgdXBkYXRlQ2VsbENvbnRlbnQ6IHVwZGF0ZUNlbGxDb250ZW50SW50ZXJuYWwoaWQpLFxyXG4gICAgICB1cGRhdGVDZWxsTGF5b3V0OiB1cGRhdGVDZWxsTGF5b3V0SW50ZXJuYWwoaWQpLFxyXG4gICAgfSxcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgIGRpc3BhdGNoIGFzIGFueVxyXG4gICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShQYWRkaW5nQnV0dG9uKSBhcyBSZWFjdC5GQzxQYWRkaW5nQnV0dG9uQ3VzdG9tUHJvcHM+O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9