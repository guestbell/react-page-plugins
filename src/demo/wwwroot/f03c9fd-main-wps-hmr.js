webpackHotUpdate("main",{

/***/ "./src/lib/slate/plugins/fontSize/FontSizeButton.tsx":
/*!***********************************************************!*\
  !*** ./src/lib/slate/plugins/fontSize/FontSizeButton.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate-react */ "./node_modules/slate-react/dist/index.es.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ */ "./src/lib/slate/plugins/fontSize/index.ts");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _react_page_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-page/core */ "./node_modules/@react-page/core/lib-es/index.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles_createStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles/createStyles */ "./node_modules/@material-ui/core/styles/createStyles.js");
/* harmony import */ var _material_ui_core_styles_createStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_createStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Controls_buttons_SlateButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Controls/buttons/SlateButton */ "./src/lib/slate/Controls/buttons/SlateButton.tsx");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
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










var FormatSizeIcon = Object(_react_page_core__WEBPACK_IMPORTED_MODULE_4__["lazyLoad"])(function () {
  return __webpack_require__.e(/*! import() */ 37).then(__webpack_require__.t.bind(null, /*! @material-ui/icons/TextFields */ "./node_modules/@material-ui/icons/TextFields.js", 7));
});

var styles = function styles(_ref) {
  var palette = _ref.palette;
  return _material_ui_core_styles_createStyles__WEBPACK_IMPORTED_MODULE_6___default()({
    /*selected: {
      backgroundColor: `${palette.primary.main} !important`,
      color: `${palette.getContrastText(palette.primary.main)} !important`,
    },*/
  });
};

var FontSizeButtonRaw = function FontSizeButtonRaw(props) {
  var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_1__["useSlate"])();
  var config = editor.fontSizeConfig;
  var activeFontSizes = Object(___WEBPACK_IMPORTED_MODULE_2__["getActiveFontSizes"])(editor);
  var hasValue = activeFontSizes.length > 0;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchor = _React$useState2[0],
      setAnchor = _React$useState2[1];

  function handleClose() {
    setAnchor(null);
  }

  function handleClick(event) {
    setAnchor(event.currentTarget);
  }

  var handleMenuItemClick = function handleMenuItemClick(fontSize) {
    return function (event) {
      editor.exec({
        type: ___WEBPACK_IMPORTED_MODULE_2__["FontSizeCommands"].ChangeFontSize,
        fontSize: fontSize
      });
      handleClose();
    };
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Controls_buttons_SlateButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isActive: hasValue,
    onClick: handleClick,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FormatSizeIcon, null),
    title: "Font size"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_8__["default"], {
    anchorEl: anchor,
    keepMounted: true,
    open: Boolean(anchor),
    onClose: handleClose
  }, config.allowedFontSizes.map(function (fontSize) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      selected: Object(___WEBPACK_IMPORTED_MODULE_2__["isFontSizeActive"])(editor, fontSize),
      key: fontSize,
      value: fontSize,
      onClick: handleMenuItemClick(fontSize)
    }, config.fontSizesNames && config.fontSizesNames[fontSize] || fontSize);
  })));
};

__signature__(FontSizeButtonRaw, "useSlate{editor}\nuseState{[anchor, setAnchor](null)}", function () {
  return [slate_react__WEBPACK_IMPORTED_MODULE_1__["useSlate"]];
});

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(styles)(FontSizeButtonRaw);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FormatSizeIcon, "FormatSizeIcon", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\plugins\\fontSize\\FontSizeButton.tsx");
  reactHotLoader.register(styles, "styles", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\plugins\\fontSize\\FontSizeButton.tsx");
  reactHotLoader.register(FontSizeButtonRaw, "FontSizeButtonRaw", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\plugins\\fontSize\\FontSizeButton.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\plugins\\fontSize\\FontSizeButton.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3NsYXRlL3BsdWdpbnMvZm9udFNpemUvRm9udFNpemVCdXR0b24udHN4Il0sIm5hbWVzIjpbIkZvcm1hdFNpemVJY29uIiwibGF6eUxvYWQiLCJzdHlsZXMiLCJwYWxldHRlIiwiY3JlYXRlU3R5bGVzIiwiRm9udFNpemVCdXR0b25SYXciLCJwcm9wcyIsImVkaXRvciIsInVzZVNsYXRlIiwiY29uZmlnIiwiZm9udFNpemVDb25maWciLCJhY3RpdmVGb250U2l6ZXMiLCJnZXRBY3RpdmVGb250U2l6ZXMiLCJoYXNWYWx1ZSIsImxlbmd0aCIsIlJlYWN0IiwiYW5jaG9yIiwic2V0QW5jaG9yIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhbmRsZU1lbnVJdGVtQ2xpY2siLCJmb250U2l6ZSIsImV4ZWMiLCJ0eXBlIiwiRm9udFNpemVDb21tYW5kcyIsIkNoYW5nZUZvbnRTaXplIiwiQm9vbGVhbiIsImFsbG93ZWRGb250U2l6ZXMiLCJtYXAiLCJpc0ZvbnRTaXplQWN0aXZlIiwiZm9udFNpemVzTmFtZXMiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBLElBQU1BLGNBQWMsR0FBR0MsaUVBQVEsQ0FBQztBQUFBLFNBQU0sMktBQU47QUFBQSxDQUFELENBQS9COztBQUVBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsU0FDYkMsNEVBQVksQ0FBQztBQUNYOzs7O0FBRFcsR0FBRCxDQURDO0FBQUEsQ0FBZjs7QUFXQSxJQUFNQyxpQkFBZ0QsR0FBRyxTQUFuREEsaUJBQW1ELENBQUFDLEtBQUssRUFBSTtBQUNoRSxNQUFNQyxNQUFNLEdBQUdDLDREQUFRLEVBQXZCO0FBQ0EsTUFBTUMsTUFBNEIsR0FBR0YsTUFBTSxDQUFDRyxjQUE1QztBQUNBLE1BQU1DLGVBQWUsR0FBR0MsNERBQWtCLENBQUNMLE1BQUQsQ0FBMUM7QUFDQSxNQUFNTSxRQUFRLEdBQUdGLGVBQWUsQ0FBQ0csTUFBaEIsR0FBeUIsQ0FBMUM7O0FBSmdFLHdCQUtwQ0MsOENBQUEsQ0FBbUMsSUFBbkMsQ0FMb0M7QUFBQTtBQUFBLE1BS3pEQyxNQUx5RDtBQUFBLE1BS2pEQyxTQUxpRDs7QUFNaEUsV0FBU0MsV0FBVCxHQUF1QjtBQUNyQkQsYUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNEOztBQUNELFdBQVNFLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQWlFO0FBQy9ESCxhQUFTLENBQUNHLEtBQUssQ0FBQ0MsYUFBUCxDQUFUO0FBQ0Q7O0FBQ0QsTUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxRQUFEO0FBQUEsV0FBc0IsVUFDaERILEtBRGdELEVBRTdDO0FBQ0hiLFlBQU0sQ0FBQ2lCLElBQVAsQ0FBWTtBQUFFQyxZQUFJLEVBQUVDLGtEQUFnQixDQUFDQyxjQUF6QjtBQUF5Q0osZ0JBQVEsRUFBUkE7QUFBekMsT0FBWjtBQUNBTCxpQkFBVztBQUNaLEtBTDJCO0FBQUEsR0FBNUI7O0FBTUEsc0JBQ0UsdUhBQ0Usb0RBQUMscUVBQUQ7QUFDRSxZQUFRLEVBQUVMLFFBRFo7QUFFRSxXQUFPLEVBQUVNLFdBRlg7QUFHRSxRQUFJLGVBQUUsb0RBQUMsY0FBRCxPQUhSO0FBSUUsU0FBSyxFQUFDO0FBSlIsSUFERixlQU9FLG9EQUFDLDhEQUFEO0FBQ0UsWUFBUSxFQUFFSCxNQURaO0FBRUUsZUFBVyxFQUFFLElBRmY7QUFHRSxRQUFJLEVBQUVZLE9BQU8sQ0FBQ1osTUFBRCxDQUhmO0FBSUUsV0FBTyxFQUFFRTtBQUpYLEtBTUdULE1BQU0sQ0FBQ29CLGdCQUFQLENBQXdCQyxHQUF4QixDQUE0QixVQUFBUCxRQUFRO0FBQUEsd0JBQ25DLG9EQUFDLGtFQUFEO0FBQ0UsY0FBUSxFQUFFUSwwREFBZ0IsQ0FBQ3hCLE1BQUQsRUFBU2dCLFFBQVQsQ0FENUI7QUFFRSxTQUFHLEVBQUVBLFFBRlA7QUFHRSxXQUFLLEVBQUVBLFFBSFQ7QUFJRSxhQUFPLEVBQUVELG1CQUFtQixDQUFDQyxRQUFEO0FBSjlCLE9BTUlkLE1BQU0sQ0FBQ3VCLGNBQVAsSUFBeUJ2QixNQUFNLENBQUN1QixjQUFQLENBQXNCVCxRQUF0QixDQUExQixJQUNDQSxRQVBKLENBRG1DO0FBQUEsR0FBcEMsQ0FOSCxDQVBGLENBREY7QUE0QkQsQ0E5Q0Q7O2NBQU1sQixpQjtVQUNXRyxvRDs7O2VBK0NGeUIsMEVBQVUsQ0FBQy9CLE1BQUQsQ0FBVixDQUFtQkcsaUJBQW5CLEM7O0FBQUE7Ozs7Ozs7Ozs7MEJBN0RUTCxjOzBCQUVBRSxNOzBCQVdBRyxpQiIsImZpbGUiOiJmMDNjOWZkLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2xhdGUgfSBmcm9tICdzbGF0ZS1yZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgRm9udFNpemVQbHVnaW5Db25maWcsXHJcbiAgZ2V0QWN0aXZlRm9udFNpemVzLFxyXG4gIGlzRm9udFNpemVBY3RpdmUsXHJcbiAgRm9udFNpemVDb21tYW5kcyxcclxufSBmcm9tICcuLyc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCB7IGxhenlMb2FkIH0gZnJvbSAnQHJlYWN0LXBhZ2UvY29yZSc7XHJcbmltcG9ydCB3aXRoU3R5bGVzLCB7IFdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlcyc7XHJcbmltcG9ydCBjcmVhdGVTdHlsZXMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NyZWF0ZVN0eWxlcyc7XHJcbmltcG9ydCBTbGF0ZUJ1dHRvbiBmcm9tICcuLi8uLi9Db250cm9scy9idXR0b25zL1NsYXRlQnV0dG9uJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NyZWF0ZU11aVRoZW1lJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRm9udFNpemVCdXR0b25DdXN0b21Qcm9wcyB7fVxyXG5cclxuY29uc3QgRm9ybWF0U2l6ZUljb24gPSBsYXp5TG9hZCgoKSA9PiBpbXBvcnQoJ0BtYXRlcmlhbC11aS9pY29ucy9UZXh0RmllbGRzJykpO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gKHsgcGFsZXR0ZSB9OiBUaGVtZSkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgLypzZWxlY3RlZDoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3BhbGV0dGUucHJpbWFyeS5tYWlufSAhaW1wb3J0YW50YCxcclxuICAgICAgY29sb3I6IGAke3BhbGV0dGUuZ2V0Q29udHJhc3RUZXh0KHBhbGV0dGUucHJpbWFyeS5tYWluKX0gIWltcG9ydGFudGAsXHJcbiAgICB9LCovXHJcbiAgfSk7XHJcblxyXG50eXBlIEZvbnRTaXplQnV0dG9uUHJvcHMgPSBGb250U2l6ZUJ1dHRvbkN1c3RvbVByb3BzICZcclxuICBXaXRoU3R5bGVzPHR5cGVvZiBzdHlsZXM+O1xyXG5cclxuY29uc3QgRm9udFNpemVCdXR0b25SYXc6IFJlYWN0LkZDPEZvbnRTaXplQnV0dG9uUHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IGVkaXRvciA9IHVzZVNsYXRlKCk7XHJcbiAgY29uc3QgY29uZmlnOiBGb250U2l6ZVBsdWdpbkNvbmZpZyA9IGVkaXRvci5mb250U2l6ZUNvbmZpZztcclxuICBjb25zdCBhY3RpdmVGb250U2l6ZXMgPSBnZXRBY3RpdmVGb250U2l6ZXMoZWRpdG9yKTtcclxuICBjb25zdCBoYXNWYWx1ZSA9IGFjdGl2ZUZvbnRTaXplcy5sZW5ndGggPiAwO1xyXG4gIGNvbnN0IFthbmNob3IsIHNldEFuY2hvcl0gPSBSZWFjdC51c2VTdGF0ZTxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpO1xyXG4gIGZ1bmN0aW9uIGhhbmRsZUNsb3NlKCkge1xyXG4gICAgc2V0QW5jaG9yKG51bGwpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pIHtcclxuICAgIHNldEFuY2hvcihldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlTWVudUl0ZW1DbGljayA9IChmb250U2l6ZTogbnVtYmVyKSA9PiAoXHJcbiAgICBldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD5cclxuICApID0+IHtcclxuICAgIGVkaXRvci5leGVjKHsgdHlwZTogRm9udFNpemVDb21tYW5kcy5DaGFuZ2VGb250U2l6ZSwgZm9udFNpemUgfSk7XHJcbiAgICBoYW5kbGVDbG9zZSgpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTbGF0ZUJ1dHRvblxyXG4gICAgICAgIGlzQWN0aXZlPXtoYXNWYWx1ZX1cclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICBpY29uPXs8Rm9ybWF0U2l6ZUljb24gLz59XHJcbiAgICAgICAgdGl0bGU9XCJGb250IHNpemVcIlxyXG4gICAgICAvPlxyXG4gICAgICA8TWVudVxyXG4gICAgICAgIGFuY2hvckVsPXthbmNob3J9XHJcbiAgICAgICAga2VlcE1vdW50ZWQ9e3RydWV9XHJcbiAgICAgICAgb3Blbj17Qm9vbGVhbihhbmNob3IpfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICA+XHJcbiAgICAgICAge2NvbmZpZy5hbGxvd2VkRm9udFNpemVzLm1hcChmb250U2l6ZSA9PiAoXHJcbiAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgc2VsZWN0ZWQ9e2lzRm9udFNpemVBY3RpdmUoZWRpdG9yLCBmb250U2l6ZSl9XHJcbiAgICAgICAgICAgIGtleT17Zm9udFNpemV9XHJcbiAgICAgICAgICAgIHZhbHVlPXtmb250U2l6ZX1cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTWVudUl0ZW1DbGljayhmb250U2l6ZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsoY29uZmlnLmZvbnRTaXplc05hbWVzICYmIGNvbmZpZy5mb250U2l6ZXNOYW1lc1tmb250U2l6ZV0pIHx8XHJcbiAgICAgICAgICAgICAgZm9udFNpemV9XHJcbiAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L01lbnU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEZvbnRTaXplQnV0dG9uUmF3KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==