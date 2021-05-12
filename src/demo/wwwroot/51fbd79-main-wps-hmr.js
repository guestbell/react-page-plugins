webpackHotUpdate("main",{

/***/ "./src/lib/common/components/bottomToolbar/BottomToolbar.tsx":
/*!*******************************************************************!*\
  !*** ./src/lib/common/components/bottomToolbar/BottomToolbar.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _draftSwitch_DraftSwitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../draftSwitch/DraftSwitch */ "./src/lib/common/components/draftSwitch/DraftSwitch.tsx");
/* harmony import */ var _duplicateButton_DuplicateButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../duplicateButton/DuplicateButton */ "./src/lib/common/components/duplicateButton/DuplicateButton.tsx");
/* harmony import */ var _paddingButton_PaddingButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../paddingButton/PaddingButton */ "./src/lib/common/components/paddingButton/PaddingButton.tsx");
/* harmony import */ var _selectParentButton_SelectParentButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../selectParentButton/SelectParentButton */ "./src/lib/common/components/selectParentButton/SelectParentButton.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _deleteButton_DeleteButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../deleteButton/DeleteButton */ "./src/lib/common/components/deleteButton/DeleteButton.tsx");
/* harmony import */ var _material_ui_core_Portal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Portal */ "./node_modules/@material-ui/core/esm/Portal/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _react_page_editor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @react-page/editor */ "./node_modules/@react-page/editor/lib-es/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



 // import Typography from '@material-ui/core/Typography';













var drawerSlideProps = {
  unmountOnExit: true
};
var drawerPaperProps = {
  style: {
    backgroundColor: 'transparent',
    border: 'none',
    overflow: 'visible',
    pointerEvents: 'none'
  }
};
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["makeStyles"])(function (theme) {
  return {
    childrenContainer: {
      // width: '100%',
      // overflow: 'auto',
      '& > div > div': {
        flex: 'initial !important',
        overflow: 'initial !important'
      }
    },
    paper: {
      pointerEvents: 'all',
      borderRadius: '4px 4px 0 0',
      padding: '1rem',
      paddingBottom: '0.5rem',
      paddingTop: '0.5rem',
      margin: 'auto',
      // boxShadow: '0px 1px 8px -1px rgba(0,0,0,0.4)',
      position: 'relative',
      maxWidth: 'calc(100vw - 2rem)'
    },
    divider: {
      marginLeft: '-1rem',
      marginRight: '-1rem',
      marginTop: '0.5rem',
      marginBottom: '0.5rem'
    },
    avatar: {
      marginRight: 'auto'
    },
    bottomGrid: {
      overflow: 'auto'
    },
    pluginName: {
      marginRight: 'auto'
    }
  };
});

var BottomToolbar = function BottomToolbar(_ref) {
  var _usePluginOfCell;

  var _ref$open = _ref.open,
      open = _ref$open === void 0 ? false : _ref$open,
      children = _ref.children,
      className = _ref.className,
      _ref$anchor = _ref.anchor,
      anchor = _ref$anchor === void 0 ? 'bottom' : _ref$anchor,
      pluginControls = _ref.pluginControls,
      nodeId = _ref.nodeId;

  var _useStyles = useStyles(),
      paper = _useStyles.paper,
      avatar = _useStyles.avatar,
      bottomGrid = _useStyles.bottomGrid,
      childrenContainer = _useStyles.childrenContainer,
      divider = _useStyles.divider;

  var _ref2 = (_usePluginOfCell = Object(_react_page_editor__WEBPACK_IMPORTED_MODULE_14__["usePluginOfCell"])(nodeId)) !== null && _usePluginOfCell !== void 0 ? _usePluginOfCell : {},
      title = _ref2.title,
      icon = _ref2.icon;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_Portal__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    SlideProps: drawerSlideProps,
    variant: "persistent",
    className: className,
    open: open,
    anchor: anchor,
    PaperProps: drawerPaperProps
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(paper, 'bottomToolbar')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    className: childrenContainer
  }, children, pluginControls), react__WEBPACK_IMPORTED_MODULE_5__["Children"].count(children) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: divider
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    direction: "row",
    alignItems: "center",
    wrap: "nowrap",
    className: bottomGrid
  }, icon || title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_0__["default"], {
    children: icon || (title ? title[0] : ''),
    className: avatar
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_draftSwitch_DraftSwitch__WEBPACK_IMPORTED_MODULE_6__["DraftSwitch"], {
    nodeId: nodeId
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_paddingButton_PaddingButton__WEBPACK_IMPORTED_MODULE_8__["PaddingButton"], {
    nodeId: nodeId
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_selectParentButton_SelectParentButton__WEBPACK_IMPORTED_MODULE_9__["SelectParentButton"], {
    nodeId: nodeId
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_duplicateButton_DuplicateButton__WEBPACK_IMPORTED_MODULE_7__["DuplicateButton"], {
    nodeId: nodeId
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_deleteButton_DeleteButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
    nodeId: nodeId
  })))));
};

__signature__(BottomToolbar, "useStyles{{ paper, avatar, bottomGrid, childrenContainer, divider }}\nusePluginOfCell{}", function () {
  return [useStyles, _react_page_editor__WEBPACK_IMPORTED_MODULE_14__["usePluginOfCell"]];
});

var _default = BottomToolbar;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(drawerSlideProps, "drawerSlideProps", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\bottomToolbar\\BottomToolbar.tsx");
  reactHotLoader.register(drawerPaperProps, "drawerPaperProps", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\bottomToolbar\\BottomToolbar.tsx");
  reactHotLoader.register(useStyles, "useStyles", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\bottomToolbar\\BottomToolbar.tsx");
  reactHotLoader.register(BottomToolbar, "BottomToolbar", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\bottomToolbar\\BottomToolbar.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\bottomToolbar\\BottomToolbar.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbW1vbi9jb21wb25lbnRzL2JvdHRvbVRvb2xiYXIvQm90dG9tVG9vbGJhci50c3giXSwibmFtZXMiOlsiZHJhd2VyU2xpZGVQcm9wcyIsInVubW91bnRPbkV4aXQiLCJkcmF3ZXJQYXBlclByb3BzIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJvdmVyZmxvdyIsInBvaW50ZXJFdmVudHMiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjaGlsZHJlbkNvbnRhaW5lciIsImZsZXgiLCJwYXBlciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1RvcCIsIm1hcmdpbiIsInBvc2l0aW9uIiwibWF4V2lkdGgiLCJkaXZpZGVyIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiYXZhdGFyIiwiYm90dG9tR3JpZCIsInBsdWdpbk5hbWUiLCJCb3R0b21Ub29sYmFyIiwib3BlbiIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiYW5jaG9yIiwicGx1Z2luQ29udHJvbHMiLCJub2RlSWQiLCJ1c2VQbHVnaW5PZkNlbGwiLCJ0aXRsZSIsImljb24iLCJjbGFzc05hbWVzIiwiUmVhY3QiLCJjb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxnQkFBcUMsR0FBRztBQUM1Q0MsZUFBYSxFQUFFO0FBRDZCLENBQTlDO0FBSUEsSUFBTUMsZ0JBQXFDLEdBQUc7QUFDNUNDLE9BQUssRUFBRTtBQUNMQyxtQkFBZSxFQUFFLGFBRFo7QUFFTEMsVUFBTSxFQUFFLE1BRkg7QUFHTEMsWUFBUSxFQUFFLFNBSEw7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eEIsQ0FEaEI7QUFFRSxhQUFTLEVBQUVYO0FBRmIsSUFERCxHQUtHLElBWk4sZUFhRSxvREFBQyxvRUFBRDtBQUFhLFVBQU0sRUFBRVM7QUFBckIsSUFiRixlQWNFLG9EQUFDLDBFQUFEO0FBQWUsVUFBTSxFQUFFQTtBQUF2QixJQWRGLGVBZUUsb0RBQUMseUZBQUQ7QUFBb0IsVUFBTSxFQUFFQTtBQUE1QixJQWZGLGVBZ0JFLG9EQUFDLGdGQUFEO0FBQWlCLFVBQU0sRUFBRUE7QUFBekIsSUFoQkYsZUFpQkUsb0RBQUMsbUVBQUQ7QUFBYyxVQUFNLEVBQUVBO0FBQXRCLElBakJGLENBUkYsQ0FSRixDQURGLENBREY7QUF5Q0QsQ0FuREQ7O2NBQU1OLGE7VUFROERyQixTLEVBQzFDNEIsbUU7OztlQTRDWFAsYTtBQUFBOzs7Ozs7Ozs7OzBCQXZHVDdCLGdCOzBCQUlBRSxnQjswQkFTQU0sUzswQkFxQ0FxQixhIiwiZmlsZSI6IjUxZmJkNzktbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY3JlYXRlTXVpVGhlbWUnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuLy8gaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBQYXBlciwgeyBQYXBlclByb3BzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RyYXdlcic7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRHJhZnRTd2l0Y2ggfSBmcm9tICcuLi9kcmFmdFN3aXRjaC9EcmFmdFN3aXRjaCc7XHJcbmltcG9ydCB7IER1cGxpY2F0ZUJ1dHRvbiB9IGZyb20gJy4uL2R1cGxpY2F0ZUJ1dHRvbi9EdXBsaWNhdGVCdXR0b24nO1xyXG5pbXBvcnQgeyBTbGlkZVByb3BzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGUnO1xyXG5pbXBvcnQgeyBQYWRkaW5nQnV0dG9uIH0gZnJvbSAnLi4vcGFkZGluZ0J1dHRvbi9QYWRkaW5nQnV0dG9uJztcclxuaW1wb3J0IHsgU2VsZWN0UGFyZW50QnV0dG9uIH0gZnJvbSAnLi4vc2VsZWN0UGFyZW50QnV0dG9uL1NlbGVjdFBhcmVudEJ1dHRvbic7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgRGVsZXRlQnV0dG9uIGZyb20gJy4uL2RlbGV0ZUJ1dHRvbi9EZWxldGVCdXR0b24nO1xyXG5pbXBvcnQgUG9ydGFsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BvcnRhbCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IEJvdHRvbVRvb2xiYXJQcm9wcywgdXNlUGx1Z2luT2ZDZWxsIH0gZnJvbSAnQHJlYWN0LXBhZ2UvZWRpdG9yJztcclxuXHJcbmNvbnN0IGRyYXdlclNsaWRlUHJvcHM6IFBhcnRpYWw8U2xpZGVQcm9wcz4gPSB7XHJcbiAgdW5tb3VudE9uRXhpdDogdHJ1ZSxcclxufTtcclxuXHJcbmNvbnN0IGRyYXdlclBhcGVyUHJvcHM6IFBhcnRpYWw8UGFwZXJQcm9wcz4gPSB7XHJcbiAgc3R5bGU6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgb3ZlcmZsb3c6ICd2aXNpYmxlJyxcclxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PiAoe1xyXG4gIGNoaWxkcmVuQ29udGFpbmVyOiB7XHJcbiAgICAvLyB3aWR0aDogJzEwMCUnLFxyXG4gICAgLy8gb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICcmID4gZGl2ID4gZGl2Jzoge1xyXG4gICAgICBmbGV4OiAnaW5pdGlhbCAhaW1wb3J0YW50JyxcclxuICAgICAgb3ZlcmZsb3c6ICdpbml0aWFsICFpbXBvcnRhbnQnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICBwb2ludGVyRXZlbnRzOiAnYWxsJyxcclxuICAgIGJvcmRlclJhZGl1czogJzRweCA0cHggMCAwJyxcclxuICAgIHBhZGRpbmc6ICcxcmVtJyxcclxuICAgIHBhZGRpbmdCb3R0b206ICcwLjVyZW0nLFxyXG4gICAgcGFkZGluZ1RvcDogJzAuNXJlbScsXHJcbiAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgIC8vIGJveFNoYWRvdzogJzBweCAxcHggOHB4IC0xcHggcmdiYSgwLDAsMCwwLjQpJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgbWF4V2lkdGg6ICdjYWxjKDEwMHZ3IC0gMnJlbSknLFxyXG4gIH0sXHJcbiAgZGl2aWRlcjoge1xyXG4gICAgbWFyZ2luTGVmdDogJy0xcmVtJyxcclxuICAgIG1hcmdpblJpZ2h0OiAnLTFyZW0nLFxyXG4gICAgbWFyZ2luVG9wOiAnMC41cmVtJyxcclxuICAgIG1hcmdpbkJvdHRvbTogJzAuNXJlbScsXHJcbiAgfSxcclxuICBhdmF0YXI6IHtcclxuICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXHJcbiAgfSxcclxuICBib3R0b21HcmlkOiB7XHJcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gIH0sXHJcbiAgcGx1Z2luTmFtZToge1xyXG4gICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBCb3R0b21Ub29sYmFyOiBSZWFjdC5GQzxCb3R0b21Ub29sYmFyUHJvcHM+ID0gKHtcclxuICBvcGVuID0gZmFsc2UsXHJcbiAgY2hpbGRyZW4sXHJcbiAgY2xhc3NOYW1lLFxyXG4gIGFuY2hvciA9ICdib3R0b20nLFxyXG4gIHBsdWdpbkNvbnRyb2xzLFxyXG4gIG5vZGVJZCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHsgcGFwZXIsIGF2YXRhciwgYm90dG9tR3JpZCwgY2hpbGRyZW5Db250YWluZXIsIGRpdmlkZXIgfSA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgdGl0bGUsIGljb24gfSA9IHVzZVBsdWdpbk9mQ2VsbChub2RlSWQpID8/IHt9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8UG9ydGFsPlxyXG4gICAgICA8RHJhd2VyXHJcbiAgICAgICAgU2xpZGVQcm9wcz17ZHJhd2VyU2xpZGVQcm9wc31cclxuICAgICAgICB2YXJpYW50PVwicGVyc2lzdGVudFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBhbmNob3I9e2FuY2hvcn1cclxuICAgICAgICBQYXBlclByb3BzPXtkcmF3ZXJQYXBlclByb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhwYXBlciwgJ2JvdHRvbVRvb2xiYXInKX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2hpbGRyZW5Db250YWluZXJ9PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIHtwbHVnaW5Db250cm9sc31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge1JlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSA+IDAgJiYgKFxyXG4gICAgICAgICAgICA8RGl2aWRlciBjbGFzc05hbWU9e2RpdmlkZXJ9IC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgY29udGFpbmVyPXt0cnVlfVxyXG4gICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgd3JhcD1cIm5vd3JhcFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Ym90dG9tR3JpZH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2ljb24gfHwgdGl0bGUgPyAoXHJcbiAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW49e2ljb24gfHwgKHRpdGxlID8gdGl0bGVbMF0gOiAnJyl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2F2YXRhcn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPERyYWZ0U3dpdGNoIG5vZGVJZD17bm9kZUlkfSAvPlxyXG4gICAgICAgICAgICA8UGFkZGluZ0J1dHRvbiBub2RlSWQ9e25vZGVJZH0gLz5cclxuICAgICAgICAgICAgPFNlbGVjdFBhcmVudEJ1dHRvbiBub2RlSWQ9e25vZGVJZH0gLz5cclxuICAgICAgICAgICAgPER1cGxpY2F0ZUJ1dHRvbiBub2RlSWQ9e25vZGVJZH0gLz5cclxuICAgICAgICAgICAgPERlbGV0ZUJ1dHRvbiBub2RlSWQ9e25vZGVJZH0gLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L1BhcGVyPlxyXG4gICAgICA8L0RyYXdlcj5cclxuICAgIDwvUG9ydGFsPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb3R0b21Ub29sYmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9