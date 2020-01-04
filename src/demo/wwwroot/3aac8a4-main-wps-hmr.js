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
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _draftSwitch_DraftSwitch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../draftSwitch/DraftSwitch */ "./src/lib/common/components/draftSwitch/DraftSwitch.tsx");
/* harmony import */ var _duplicateButton_DuplicateButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../duplicateButton/DuplicateButton */ "./src/lib/common/components/duplicateButton/DuplicateButton.tsx");
/* harmony import */ var _material_ui_styles_createStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/styles/createStyles */ "./node_modules/@material-ui/styles/esm/createStyles/index.js");
/* harmony import */ var _material_ui_styles_withStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/styles/withStyles */ "./node_modules/@material-ui/styles/esm/withStyles/index.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
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

var styles = function styles(theme) {
  return Object(_material_ui_styles_createStyles__WEBPACK_IMPORTED_MODULE_10__["default"])({
    childrenContainer: {// width: '100%',
      // overflow: 'auto',
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
      marginRight: '1rem'
    },
    bottomGrid: {
      overflow: 'auto'
    },
    pluginName: {
      marginRight: 'auto'
    }
  });
};

var BottomToolbar = function BottomToolbar(_ref) {
  var _ref$open = _ref.open,
      open = _ref$open === void 0 ? false : _ref$open,
      children = _ref.children,
      className = _ref.className,
      _ref$classes = _ref.classes,
      avatar = _ref$classes.avatar,
      divider = _ref$classes.divider,
      paper = _ref$classes.paper,
      childrenContainer = _ref$classes.childrenContainer,
      bottomGrid = _ref$classes.bottomGrid,
      pluginName = _ref$classes.pluginName,
      _ref$anchor = _ref.anchor,
      anchor = _ref$anchor === void 0 ? 'bottom' : _ref$anchor,
      _ref$onDelete = _ref.onDelete,
      onDelete = _ref$onDelete === void 0 ? null : _ref$onDelete,
      title = _ref.title,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? null : _ref$icon,
      id = _ref.id,
      editable = _ref.editable;
  return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    SlideProps: drawerSlideProps,
    variant: "persistent",
    className: className,
    open: open,
    anchor: anchor,
    PaperProps: drawerPaperProps
  }, react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: paper
  }, react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("div", {
    className: childrenContainer
  }, children), react__WEBPACK_IMPORTED_MODULE_7__["Children"].count(children) > 0 && react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: divider
  }), react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    direction: "row",
    alignItems: "center",
    wrap: "nowrap",
    className: bottomGrid
  }, icon || title ? react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_0__["default"], {
    children: icon || (title ? title[0] : ''),
    className: avatar
  }) : null, react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_draftSwitch_DraftSwitch__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: id,
    editable: editable
  }), react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_duplicateButton_DuplicateButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: id,
    editable: editable
  }), onDelete ? react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: onDelete,
    "aria-label": "delete",
    color: "secondary",
    title: "Delete"
  }, react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6___default.a, null)) : null)));
};

var _default = Object(_material_ui_styles_withStyles__WEBPACK_IMPORTED_MODULE_11__["default"])(styles)(BottomToolbar);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(drawerSlideProps, "drawerSlideProps", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\bottomToolbar\\BottomToolbar.tsx");
  reactHotLoader.register(drawerPaperProps, "drawerPaperProps", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\bottomToolbar\\BottomToolbar.tsx");
  reactHotLoader.register(styles, "styles", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\bottomToolbar\\BottomToolbar.tsx");
  reactHotLoader.register(BottomToolbar, "BottomToolbar", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\bottomToolbar\\BottomToolbar.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\bottomToolbar\\BottomToolbar.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbW1vbi9jb21wb25lbnRzL2JvdHRvbVRvb2xiYXIvQm90dG9tVG9vbGJhci50c3giXSwibmFtZXMiOlsiZHJhd2VyU2xpZGVQcm9wcyIsInVubW91bnRPbkV4aXQiLCJkcmF3ZXJQYXBlclByb3BzIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJvdmVyZmxvdyIsInBvaW50ZXJFdmVudHMiLCJzdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsImNoaWxkcmVuQ29udGFpbmVyIiwicGFwZXIiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJtYXJnaW4iLCJwb3NpdGlvbiIsIm1heFdpZHRoIiwiZGl2aWRlciIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImF2YXRhciIsImJvdHRvbUdyaWQiLCJwbHVnaW5OYW1lIiwiQm90dG9tVG9vbGJhciIsIm9wZW4iLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImNsYXNzZXMiLCJhbmNob3IiLCJvbkRlbGV0ZSIsInRpdGxlIiwiaWNvbiIsImlkIiwiZWRpdGFibGUiLCJSZWFjdCIsImNvdW50Iiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFpQkEsSUFBTUEsZ0JBQXFDLEdBQUc7QUFDNUNDLGVBQWEsRUFBRTtBQUQ2QixDQUE5QztBQUlBLElBQU1DLGdCQUFxQyxHQUFHO0FBQzVDQyxPQUFLLEVBQUU7QUFDTEMsbUJBQWUsRUFBRSxhQURaO0FBRUxDLFVBQU0sRUFBRSxNQUZIO0FBR0xDLFlBQVEsRUFBRSxTQUhMO0FBSUxDLGlCQUFhLEVBQUU7QUFKVjtBQURxQyxDQUE5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RUFBRDtBQUFpQixNQUFFLEVBQUVELEVBQXJCO0FBQXlCLFlBQVEsRUFBRUM7QUFBbkMsSUFqQkYsRUFrQkdKLFFBQVEsR0FDUCxvREFBQyxvRUFBRDtBQUNFLFdBQU8sRUFBRUEsUUFEWDtBQUVFLGtCQUFXLFFBRmI7QUFHRSxTQUFLLEVBQUMsV0FIUjtBQUlFLFNBQUssRUFBQztBQUpSLEtBTUUsb0RBQUMsZ0VBQUQsT0FORixDQURPLEdBU0wsSUEzQk4sQ0FIRixDQVJGLENBREY7QUE0Q0QsQ0FqRUQ7O2VBbUVlTywrRUFBVSxDQUFDakMsTUFBRCxDQUFWLENBQW1Cb0IsYUFBbkIsQzs7QUFBQTs7Ozs7Ozs7OzswQkFsSFQ1QixnQjswQkFJQUUsZ0I7MEJBU0FNLE07MEJBa0NBb0IsYSIsImZpbGUiOiIzYWFjOGE0LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NyZWF0ZU11aVRoZW1lJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG4vLyBpbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IFBhcGVyLCB7IFBhcGVyUHJvcHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBEcmF3ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyJztcclxuaW1wb3J0IERlbGV0ZSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRHJhZnRTd2l0Y2ggZnJvbSAnLi4vZHJhZnRTd2l0Y2gvRHJhZnRTd2l0Y2gnO1xyXG5pbXBvcnQgRHVwbGljYXRlQnV0dG9uIGZyb20gJy4uL2R1cGxpY2F0ZUJ1dHRvbi9EdXBsaWNhdGVCdXR0b24nO1xyXG5pbXBvcnQgeyBTbGlkZVByb3BzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGUnO1xyXG5pbXBvcnQgY3JlYXRlU3R5bGVzIGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMvY3JlYXRlU3R5bGVzJztcclxuaW1wb3J0IHdpdGhTdHlsZXMsIHsgV2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMvd2l0aFN0eWxlcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJvdHRvbVRvb2xiYXJQcm9wcyB7XHJcbiAgb3Blbj86IGJvb2xlYW47XHJcblxyXG4gIGNoaWxkcmVuPzogT2JqZWN0O1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICB0aXRsZT86IHN0cmluZztcclxuICBhbmNob3I/OiAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JztcclxuICBvbkRlbGV0ZT86ICgpID0+IHZvaWQ7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGljb24/OiBhbnk7XHJcbiAgLy8gRklYTUU6IHNlZW1zIGxpa2Ugd2UgdXNlIG1vcmUgYW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgY2VsbC4gd2Ugc2hvdWxkIHJlZmFjdG9yIHRoaXNcclxuICBpZDogc3RyaW5nO1xyXG4gIGVkaXRhYmxlPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBkcmF3ZXJTbGlkZVByb3BzOiBQYXJ0aWFsPFNsaWRlUHJvcHM+ID0ge1xyXG4gIHVubW91bnRPbkV4aXQ6IHRydWUsXHJcbn07XHJcblxyXG5jb25zdCBkcmF3ZXJQYXBlclByb3BzOiBQYXJ0aWFsPFBhcGVyUHJvcHM+ID0ge1xyXG4gIHN0eWxlOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICBib3JkZXI6ICdub25lJyxcclxuICAgIG92ZXJmbG93OiAndmlzaWJsZScsXHJcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIGNoaWxkcmVuQ29udGFpbmVyOiB7XHJcbiAgICAgIC8vIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIC8vIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICB9LFxyXG4gICAgcGFwZXI6IHtcclxuICAgICAgcG9pbnRlckV2ZW50czogJ2FsbCcsXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzRweCA0cHggMCAwJyxcclxuICAgICAgcGFkZGluZzogJzFyZW0nLFxyXG4gICAgICBwYWRkaW5nQm90dG9tOiAnMC41cmVtJyxcclxuICAgICAgcGFkZGluZ1RvcDogJzAuNXJlbScsXHJcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxyXG4gICAgICAvLyBib3hTaGFkb3c6ICcwcHggMXB4IDhweCAtMXB4IHJnYmEoMCwwLDAsMC40KScsXHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICBtYXhXaWR0aDogJ2NhbGMoMTAwdncgLSAycmVtKScsXHJcbiAgICB9LFxyXG4gICAgZGl2aWRlcjoge1xyXG4gICAgICBtYXJnaW5MZWZ0OiAnLTFyZW0nLFxyXG4gICAgICBtYXJnaW5SaWdodDogJy0xcmVtJyxcclxuICAgICAgbWFyZ2luVG9wOiAnMC41cmVtJyxcclxuICAgICAgbWFyZ2luQm90dG9tOiAnMC41cmVtJyxcclxuICAgIH0sXHJcbiAgICBhdmF0YXI6IHtcclxuICAgICAgbWFyZ2luUmlnaHQ6ICcxcmVtJyxcclxuICAgIH0sXHJcbiAgICBib3R0b21HcmlkOiB7XHJcbiAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICB9LFxyXG4gICAgcGx1Z2luTmFtZToge1xyXG4gICAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbmNvbnN0IEJvdHRvbVRvb2xiYXI6IFJlYWN0LkZDPFxyXG4gIEJvdHRvbVRvb2xiYXJQcm9wcyAmIFdpdGhTdHlsZXM8dHlwZW9mIHN0eWxlcz5cclxuPiA9ICh7XHJcbiAgb3BlbiA9IGZhbHNlLFxyXG4gIGNoaWxkcmVuLFxyXG4gIGNsYXNzTmFtZSxcclxuICBjbGFzc2VzOiB7XHJcbiAgICBhdmF0YXIsXHJcbiAgICBkaXZpZGVyLFxyXG4gICAgcGFwZXIsXHJcbiAgICBjaGlsZHJlbkNvbnRhaW5lcixcclxuICAgIGJvdHRvbUdyaWQsXHJcbiAgICBwbHVnaW5OYW1lLFxyXG4gIH0sXHJcbiAgYW5jaG9yID0gJ2JvdHRvbScsXHJcbiAgb25EZWxldGUgPSBudWxsLFxyXG4gIHRpdGxlLFxyXG4gIGljb24gPSBudWxsLFxyXG4gIGlkLFxyXG4gIGVkaXRhYmxlLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcmF3ZXJcclxuICAgICAgU2xpZGVQcm9wcz17ZHJhd2VyU2xpZGVQcm9wc31cclxuICAgICAgdmFyaWFudD1cInBlcnNpc3RlbnRcIlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgYW5jaG9yPXthbmNob3J9XHJcbiAgICAgIFBhcGVyUHJvcHM9e2RyYXdlclBhcGVyUHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxQYXBlciBjbGFzc05hbWU9e3BhcGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2hpbGRyZW5Db250YWluZXJ9PntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgICB7UmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pID4gMCAmJiA8RGl2aWRlciBjbGFzc05hbWU9e2RpdmlkZXJ9IC8+fVxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBjb250YWluZXI9e3RydWV9XHJcbiAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICB3cmFwPVwibm93cmFwXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17Ym90dG9tR3JpZH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aWNvbiB8fCB0aXRsZSA/IChcclxuICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuPXtpY29uIHx8ICh0aXRsZSA/IHRpdGxlWzBdIDogJycpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YXZhdGFyfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICB7Lyo8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY2xhc3NOYW1lPXtwbHVnaW5OYW1lfT5cclxuICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PiovfVxyXG4gICAgICAgICAgPERyYWZ0U3dpdGNoIGlkPXtpZH0gZWRpdGFibGU9e2VkaXRhYmxlfSAvPlxyXG4gICAgICAgICAgPER1cGxpY2F0ZUJ1dHRvbiBpZD17aWR9IGVkaXRhYmxlPXtlZGl0YWJsZX0gLz5cclxuICAgICAgICAgIHtvbkRlbGV0ZSA/IChcclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkRlbGV0ZX1cclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiZGVsZXRlXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJEZWxldGVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPERlbGV0ZSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICA8L0RyYXdlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEJvdHRvbVRvb2xiYXIpIGFzIFJlYWN0LkZDPFxyXG4gIEJvdHRvbVRvb2xiYXJQcm9wc1xyXG4+O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9