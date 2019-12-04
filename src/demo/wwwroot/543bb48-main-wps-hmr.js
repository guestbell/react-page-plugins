webpackHotUpdate("main",{

/***/ "./src/lib/slate/plugins/heading/HeadingButtonCompact.tsx":
/*!****************************************************************!*\
  !*** ./src/lib/slate/plugins/heading/HeadingButtonCompact.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate-react */ "./node_modules/slate-react/dist/index.es.js");
/* harmony import */ var _withHeadings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withHeadings */ "./src/lib/slate/plugins/heading/withHeadings.ts");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _react_page_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-page/core */ "./node_modules/@react-page/core/lib-es/index.js");
/* harmony import */ var _material_ui_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles/withStyles */ "./node_modules/@material-ui/styles/esm/withStyles/index.js");
/* harmony import */ var _material_ui_styles_createStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles/createStyles */ "./node_modules/@material-ui/styles/esm/createStyles/index.js");
/* harmony import */ var _Controls_buttons_SlateButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Controls/buttons/SlateButton */ "./src/lib/slate/Controls/buttons/SlateButton.tsx");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};










var TitleIcon = Object(_react_page_core__WEBPACK_IMPORTED_MODULE_4__["lazyLoad"])(function () {
  return __webpack_require__.e(/*! import() */ 32).then(__webpack_require__.t.bind(null, /*! @material-ui/icons/Title */ "./node_modules/@material-ui/icons/Title.js", 7));
});

var styles = function styles(_ref) {
  var palette = _ref.palette;
  return Object(_material_ui_styles_createStyles__WEBPACK_IMPORTED_MODULE_6__["default"])({
    selected: {
      backgroundColor: "".concat(palette.primary.main, " !important"),
      color: "".concat(palette.getContrastText(palette.primary.main), " !important")
    }
  });
};

var HeadingButtonRaw = function HeadingButtonRaw(props) {
  var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_1__["useSlate"])();
  var config = editor.headingsConfig;
  var activeHeadings = Object(_withHeadings__WEBPACK_IMPORTED_MODULE_2__["getActiveHeadings"])(editor);
  var hasValue = activeHeadings.length > 0;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchor = _React$useState2[0],
      setAnchor = _React$useState2[1];

  function handleClose() {
    setAnchor(null);
  }

  function handleClick(event) {
    event.preventDefault();
    setAnchor(event.currentTarget);
  }

  var handleMenuItemClick = function handleMenuItemClick(level) {
    return function (event) {
      editor.exec({
        type: 'toggle_heading',
        level: level
      });
      handleClose();
    };
  };

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Controls_buttons_SlateButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isActive: hasValue,
    onClick: handleClick,
    icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TitleIcon, null),
    title: "Heading"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_8__["default"], {
    anchorEl: anchor,
    keepMounted: true,
    open: Boolean(anchor),
    onClose: handleClose
  }, config.allowedHeadings.map(function (heading) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      selected: Object(_withHeadings__WEBPACK_IMPORTED_MODULE_2__["isHeadingActive"])(editor, heading),
      key: heading,
      value: heading,
      onClick: handleMenuItemClick(heading),
      classes: {
        selected: props.classes.selected
      }
    }, config.headingsNames && config.headingsNames[heading] || heading);
  })));
};

__signature__(HeadingButtonRaw, "useSlate{editor}\nuseState{[anchor, setAnchor](null)}", function () {
  return [slate_react__WEBPACK_IMPORTED_MODULE_1__["useSlate"]];
});

var _default = Object(_material_ui_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles)(HeadingButtonRaw);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TitleIcon, "TitleIcon", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\plugins\\heading\\HeadingButtonCompact.tsx");
  reactHotLoader.register(styles, "styles", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\plugins\\heading\\HeadingButtonCompact.tsx");
  reactHotLoader.register(HeadingButtonRaw, "HeadingButtonRaw", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\plugins\\heading\\HeadingButtonCompact.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\plugins\\heading\\HeadingButtonCompact.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3NsYXRlL3BsdWdpbnMvaGVhZGluZy9IZWFkaW5nQnV0dG9uQ29tcGFjdC50c3giXSwibmFtZXMiOlsiVGl0bGVJY29uIiwibGF6eUxvYWQiLCJzdHlsZXMiLCJwYWxldHRlIiwiY3JlYXRlU3R5bGVzIiwic2VsZWN0ZWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcmltYXJ5IiwibWFpbiIsImNvbG9yIiwiZ2V0Q29udHJhc3RUZXh0IiwiSGVhZGluZ0J1dHRvblJhdyIsInByb3BzIiwiZWRpdG9yIiwidXNlU2xhdGUiLCJjb25maWciLCJoZWFkaW5nc0NvbmZpZyIsImFjdGl2ZUhlYWRpbmdzIiwiZ2V0QWN0aXZlSGVhZGluZ3MiLCJoYXNWYWx1ZSIsImxlbmd0aCIsIlJlYWN0IiwiYW5jaG9yIiwic2V0QW5jaG9yIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlTWVudUl0ZW1DbGljayIsImxldmVsIiwiZXhlYyIsInR5cGUiLCJCb29sZWFuIiwiYWxsb3dlZEhlYWRpbmdzIiwibWFwIiwiaGVhZGluZyIsImlzSGVhZGluZ0FjdGl2ZSIsImNsYXNzZXMiLCJoZWFkaW5nc05hbWVzIiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQSxJQUFNQSxTQUFTLEdBQUdDLGlFQUFRLENBQUM7QUFBQSxTQUFNLGlLQUFOO0FBQUEsQ0FBRCxDQUExQjs7QUFFQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLE1BQUdDLE9BQUgsUUFBR0EsT0FBSDtBQUFBLFNBQ2JDLGdGQUFZLENBQUM7QUFDWEMsWUFBUSxFQUFFO0FBQ1JDLHFCQUFlLFlBQUtILE9BQU8sQ0FBQ0ksT0FBUixDQUFnQkMsSUFBckIsZ0JBRFA7QUFFUkMsV0FBSyxZQUFLTixPQUFPLENBQUNPLGVBQVIsQ0FBd0JQLE9BQU8sQ0FBQ0ksT0FBUixDQUFnQkMsSUFBeEMsQ0FBTDtBQUZHO0FBREMsR0FBRCxDQURDO0FBQUEsQ0FBZjs7QUFVQSxJQUFNRyxnQkFBOEMsR0FBRyxTQUFqREEsZ0JBQWlELENBQUFDLEtBQUssRUFBSTtBQUM5RCxNQUFNQyxNQUFNLEdBQUdDLDREQUFRLEVBQXZCO0FBQ0EsTUFBTUMsTUFBNEIsR0FBR0YsTUFBTSxDQUFDRyxjQUE1QztBQUNBLE1BQU1DLGNBQWMsR0FBR0MsdUVBQWlCLENBQUNMLE1BQUQsQ0FBeEM7QUFDQSxNQUFNTSxRQUFRLEdBQUdGLGNBQWMsQ0FBQ0csTUFBZixHQUF3QixDQUF6Qzs7QUFKOEQsd0JBS2xDQyw4Q0FBQSxDQUFtQyxJQUFuQyxDQUxrQztBQUFBO0FBQUEsTUFLdkRDLE1BTHVEO0FBQUEsTUFLL0NDLFNBTCtDOztBQU05RCxXQUFTQyxXQUFULEdBQXVCO0FBQ3JCRCxhQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0Q7O0FBQ0QsV0FBU0UsV0FBVCxDQUFxQkMsS0FBckIsRUFBaUU7QUFDL0RBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBSixhQUFTLENBQUNHLEtBQUssQ0FBQ0UsYUFBUCxDQUFUO0FBQ0Q7O0FBQ0QsTUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxLQUFEO0FBQUEsV0FBbUIsVUFDN0NKLEtBRDZDLEVBRTFDO0FBQ0hiLFlBQU0sQ0FBQ2tCLElBQVAsQ0FBWTtBQUFFQyxZQUFJLEVBQUUsZ0JBQVI7QUFBMEJGLGFBQUssRUFBTEE7QUFBMUIsT0FBWjtBQUNBTixpQkFBVztBQUNaLEtBTDJCO0FBQUEsR0FBNUI7O0FBTUEsU0FDRSwwR0FDRSxvREFBQyxxRUFBRDtBQUNFLFlBQVEsRUFBRUwsUUFEWjtBQUVFLFdBQU8sRUFBRU0sV0FGWDtBQUdFLFFBQUksRUFBRSxvREFBQyxTQUFELE9BSFI7QUFJRSxTQUFLLEVBQUM7QUFKUixJQURGLEVBT0Usb0RBQUMsOERBQUQ7QUFDRSxZQUFRLEVBQUVILE1BRFo7QUFFRSxlQUFXLEVBQUUsSUFGZjtBQUdFLFFBQUksRUFBRVcsT0FBTyxDQUFDWCxNQUFELENBSGY7QUFJRSxXQUFPLEVBQUVFO0FBSlgsS0FNR1QsTUFBTSxDQUFDbUIsZUFBUCxDQUF1QkMsR0FBdkIsQ0FBMkIsVUFBQUMsT0FBTztBQUFBLFdBQ2pDLG9EQUFDLGtFQUFEO0FBQ0UsY0FBUSxFQUFFQyxxRUFBZSxDQUFDeEIsTUFBRCxFQUFTdUIsT0FBVCxDQUQzQjtBQUVFLFNBQUcsRUFBRUEsT0FGUDtBQUdFLFdBQUssRUFBRUEsT0FIVDtBQUlFLGFBQU8sRUFBRVAsbUJBQW1CLENBQUNPLE9BQUQsQ0FKOUI7QUFLRSxhQUFPLEVBQUU7QUFBRS9CLGdCQUFRLEVBQUVPLEtBQUssQ0FBQzBCLE9BQU4sQ0FBY2pDO0FBQTFCO0FBTFgsT0FPSVUsTUFBTSxDQUFDd0IsYUFBUCxJQUF3QnhCLE1BQU0sQ0FBQ3dCLGFBQVAsQ0FBcUJILE9BQXJCLENBQXpCLElBQTJEQSxPQVA5RCxDQURpQztBQUFBLEdBQWxDLENBTkgsQ0FQRixDQURGO0FBNEJELENBL0NEOztjQUFNekIsZ0I7VUFDV0csb0Q7OztlQWdERjBCLDhFQUFVLENBQUN0QyxNQUFELENBQVYsQ0FBbUJTLGdCQUFuQixDOztBQUFBOzs7Ozs7Ozs7OzBCQTdEVFgsUzswQkFFQUUsTTswQkFVQVMsZ0IiLCJmaWxlIjoiNTQzYmI0OC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNsYXRlIH0gZnJvbSAnc2xhdGUtcmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIEhlYWRpbmdQbHVnaW5PcHRpb25zLFxyXG4gIGdldEFjdGl2ZUhlYWRpbmdzLFxyXG4gIGlzSGVhZGluZ0FjdGl2ZSxcclxufSBmcm9tICcuL3dpdGhIZWFkaW5ncyc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCB7IGxhenlMb2FkIH0gZnJvbSAnQHJlYWN0LXBhZ2UvY29yZSc7XHJcbmltcG9ydCB3aXRoU3R5bGVzLCB7IFdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzL3dpdGhTdHlsZXMnO1xyXG5pbXBvcnQgY3JlYXRlU3R5bGVzIGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMvY3JlYXRlU3R5bGVzJztcclxuaW1wb3J0IFNsYXRlQnV0dG9uIGZyb20gJy4uLy4uL0NvbnRyb2xzL2J1dHRvbnMvU2xhdGVCdXR0b24nO1xyXG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY3JlYXRlTXVpVGhlbWUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIZWFkaW5nQnV0dG9uQ3VzdG9tUHJvcHMge31cclxuXHJcbmNvbnN0IFRpdGxlSWNvbiA9IGxhenlMb2FkKCgpID0+IGltcG9ydCgnQG1hdGVyaWFsLXVpL2ljb25zL1RpdGxlJykpO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gKHsgcGFsZXR0ZSB9OiBUaGVtZSkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgc2VsZWN0ZWQ6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHtwYWxldHRlLnByaW1hcnkubWFpbn0gIWltcG9ydGFudGAsXHJcbiAgICAgIGNvbG9yOiBgJHtwYWxldHRlLmdldENvbnRyYXN0VGV4dChwYWxldHRlLnByaW1hcnkubWFpbil9ICFpbXBvcnRhbnRgLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbnR5cGUgSGVhZGluZ0J1dHRvblByb3BzID0gSGVhZGluZ0J1dHRvbkN1c3RvbVByb3BzICYgV2l0aFN0eWxlczx0eXBlb2Ygc3R5bGVzPjtcclxuXHJcbmNvbnN0IEhlYWRpbmdCdXR0b25SYXc6IFJlYWN0LkZDPEhlYWRpbmdCdXR0b25Qcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgZWRpdG9yID0gdXNlU2xhdGUoKTtcclxuICBjb25zdCBjb25maWc6IEhlYWRpbmdQbHVnaW5PcHRpb25zID0gZWRpdG9yLmhlYWRpbmdzQ29uZmlnO1xyXG4gIGNvbnN0IGFjdGl2ZUhlYWRpbmdzID0gZ2V0QWN0aXZlSGVhZGluZ3MoZWRpdG9yKTtcclxuICBjb25zdCBoYXNWYWx1ZSA9IGFjdGl2ZUhlYWRpbmdzLmxlbmd0aCA+IDA7XHJcbiAgY29uc3QgW2FuY2hvciwgc2V0QW5jaG9yXSA9IFJlYWN0LnVzZVN0YXRlPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbCk7XHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2xvc2UoKSB7XHJcbiAgICBzZXRBbmNob3IobnVsbCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pikge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldEFuY2hvcihldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlTWVudUl0ZW1DbGljayA9IChsZXZlbDogbnVtYmVyKSA9PiAoXHJcbiAgICBldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD5cclxuICApID0+IHtcclxuICAgIGVkaXRvci5leGVjKHsgdHlwZTogJ3RvZ2dsZV9oZWFkaW5nJywgbGV2ZWwgfSk7XHJcbiAgICBoYW5kbGVDbG9zZSgpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTbGF0ZUJ1dHRvblxyXG4gICAgICAgIGlzQWN0aXZlPXtoYXNWYWx1ZX1cclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICBpY29uPXs8VGl0bGVJY29uIC8+fVxyXG4gICAgICAgIHRpdGxlPVwiSGVhZGluZ1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxNZW51XHJcbiAgICAgICAgYW5jaG9yRWw9e2FuY2hvcn1cclxuICAgICAgICBrZWVwTW91bnRlZD17dHJ1ZX1cclxuICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvcil9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgID5cclxuICAgICAgICB7Y29uZmlnLmFsbG93ZWRIZWFkaW5ncy5tYXAoaGVhZGluZyA9PiAoXHJcbiAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgc2VsZWN0ZWQ9e2lzSGVhZGluZ0FjdGl2ZShlZGl0b3IsIGhlYWRpbmcpfVxyXG4gICAgICAgICAgICBrZXk9e2hlYWRpbmd9XHJcbiAgICAgICAgICAgIHZhbHVlPXtoZWFkaW5nfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNZW51SXRlbUNsaWNrKGhlYWRpbmcpfVxyXG4gICAgICAgICAgICBjbGFzc2VzPXt7IHNlbGVjdGVkOiBwcm9wcy5jbGFzc2VzLnNlbGVjdGVkIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsoY29uZmlnLmhlYWRpbmdzTmFtZXMgJiYgY29uZmlnLmhlYWRpbmdzTmFtZXNbaGVhZGluZ10pIHx8IGhlYWRpbmd9XHJcbiAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L01lbnU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEhlYWRpbmdCdXR0b25SYXcpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9