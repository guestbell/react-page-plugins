webpackHotUpdate(42,{

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
/* harmony import */ var _withFontSizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withFontSizes */ "./src/lib/slate/plugins/fontSize/withFontSizes.ts");
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










var FormatSizeIcon = Object(_react_page_core__WEBPACK_IMPORTED_MODULE_4__["lazyLoad"])(function () {
  return __webpack_require__.e(/*! import() */ 21).then(__webpack_require__.t.bind(null, /*! @material-ui/icons/TextFields */ "./node_modules/@material-ui/icons/TextFields.js", 7));
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

var FontSizeButtonRaw = function FontSizeButtonRaw(props) {
  var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_1__["useSlate"])();
  var config = editor.fontSizeConfig;
  var activeFontSizes = Object(_withFontSizes__WEBPACK_IMPORTED_MODULE_2__["getActiveFontSizes"])(editor);
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
        type: 'change_fontsize',
        fontSize: fontSize
      });
      handleClose();
    };
  };

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Controls_buttons_SlateButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isActive: hasValue,
    onClick: handleClick,
    icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FormatSizeIcon, null),
    title: "Font size"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_8__["default"], {
    anchorEl: anchor,
    keepMounted: true,
    open: Boolean(anchor),
    onClose: handleClose
  }, config.allowedFontSizes.map(function (fontSize) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      selected: Object(_withFontSizes__WEBPACK_IMPORTED_MODULE_2__["isFontSizeActive"])(editor, fontSize),
      key: fontSize,
      value: fontSize,
      onClick: handleMenuItemClick(fontSize),
      classes: {
        selected: props.classes.selected
      }
    }, config.fontSizesNames && config.fontSizesNames[fontSize] || fontSize);
  })));
};

__signature__(FontSizeButtonRaw, "useSlate{editor}\nuseState{[anchor, setAnchor](null)}", function () {
  return [slate_react__WEBPACK_IMPORTED_MODULE_1__["useSlate"]];
});

var _default = Object(_material_ui_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles)(FontSizeButtonRaw);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

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
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3NsYXRlL3BsdWdpbnMvZm9udFNpemUvRm9udFNpemVCdXR0b24udHN4Il0sIm5hbWVzIjpbIkZvcm1hdFNpemVJY29uIiwibGF6eUxvYWQiLCJzdHlsZXMiLCJwYWxldHRlIiwiY3JlYXRlU3R5bGVzIiwic2VsZWN0ZWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcmltYXJ5IiwibWFpbiIsImNvbG9yIiwiZ2V0Q29udHJhc3RUZXh0IiwiRm9udFNpemVCdXR0b25SYXciLCJwcm9wcyIsImVkaXRvciIsInVzZVNsYXRlIiwiY29uZmlnIiwiZm9udFNpemVDb25maWciLCJhY3RpdmVGb250U2l6ZXMiLCJnZXRBY3RpdmVGb250U2l6ZXMiLCJoYXNWYWx1ZSIsImxlbmd0aCIsIlJlYWN0IiwiYW5jaG9yIiwic2V0QW5jaG9yIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhbmRsZU1lbnVJdGVtQ2xpY2siLCJmb250U2l6ZSIsImV4ZWMiLCJ0eXBlIiwiQm9vbGVhbiIsImFsbG93ZWRGb250U2l6ZXMiLCJtYXAiLCJpc0ZvbnRTaXplQWN0aXZlIiwiY2xhc3NlcyIsImZvbnRTaXplc05hbWVzIiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQSxJQUFNQSxjQUFjLEdBQUdDLGlFQUFRLENBQUM7QUFBQSxTQUFNLDJLQUFOO0FBQUEsQ0FBRCxDQUEvQjs7QUFFQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLE1BQUdDLE9BQUgsUUFBR0EsT0FBSDtBQUFBLFNBQ2JDLGdGQUFZLENBQUM7QUFDWEMsWUFBUSxFQUFFO0FBQ1JDLHFCQUFlLFlBQUtILE9BQU8sQ0FBQ0ksT0FBUixDQUFnQkMsSUFBckIsZ0JBRFA7QUFFUkMsV0FBSyxZQUFLTixPQUFPLENBQUNPLGVBQVIsQ0FBd0JQLE9BQU8sQ0FBQ0ksT0FBUixDQUFnQkMsSUFBeEMsQ0FBTDtBQUZHO0FBREMsR0FBRCxDQURDO0FBQUEsQ0FBZjs7QUFXQSxJQUFNRyxpQkFBZ0QsR0FBRyxTQUFuREEsaUJBQW1ELENBQUFDLEtBQUssRUFBSTtBQUNoRSxNQUFNQyxNQUFNLEdBQUdDLDREQUFRLEVBQXZCO0FBQ0EsTUFBTUMsTUFBNkIsR0FBR0YsTUFBTSxDQUFDRyxjQUE3QztBQUNBLE1BQU1DLGVBQWUsR0FBR0MseUVBQWtCLENBQUNMLE1BQUQsQ0FBMUM7QUFDQSxNQUFNTSxRQUFRLEdBQUdGLGVBQWUsQ0FBQ0csTUFBaEIsR0FBeUIsQ0FBMUM7O0FBSmdFLHdCQUtwQ0MsOENBQUEsQ0FBbUMsSUFBbkMsQ0FMb0M7QUFBQTtBQUFBLE1BS3pEQyxNQUx5RDtBQUFBLE1BS2pEQyxTQUxpRDs7QUFNaEUsV0FBU0MsV0FBVCxHQUF1QjtBQUNyQkQsYUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNEOztBQUNELFdBQVNFLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQWlFO0FBQy9ESCxhQUFTLENBQUNHLEtBQUssQ0FBQ0MsYUFBUCxDQUFUO0FBQ0Q7O0FBQ0QsTUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxRQUFEO0FBQUEsV0FBc0IsVUFDaERILEtBRGdELEVBRTdDO0FBQ0hiLFlBQU0sQ0FBQ2lCLElBQVAsQ0FBWTtBQUFFQyxZQUFJLEVBQUUsaUJBQVI7QUFBMkJGLGdCQUFRLEVBQVJBO0FBQTNCLE9BQVo7QUFDQUwsaUJBQVc7QUFDWixLQUwyQjtBQUFBLEdBQTVCOztBQU1BLFNBQ0UsMEdBQ0Usb0RBQUMscUVBQUQ7QUFDRSxZQUFRLEVBQUVMLFFBRFo7QUFFRSxXQUFPLEVBQUVNLFdBRlg7QUFHRSxRQUFJLEVBQUUsb0RBQUMsY0FBRCxPQUhSO0FBSUUsU0FBSyxFQUFDO0FBSlIsSUFERixFQU9FLG9EQUFDLDhEQUFEO0FBQ0UsWUFBUSxFQUFFSCxNQURaO0FBRUUsZUFBVyxFQUFFLElBRmY7QUFHRSxRQUFJLEVBQUVVLE9BQU8sQ0FBQ1YsTUFBRCxDQUhmO0FBSUUsV0FBTyxFQUFFRTtBQUpYLEtBTUdULE1BQU0sQ0FBQ2tCLGdCQUFQLENBQXdCQyxHQUF4QixDQUE0QixVQUFBTCxRQUFRO0FBQUEsV0FDbkMsb0RBQUMsa0VBQUQ7QUFDRSxjQUFRLEVBQUVNLHVFQUFnQixDQUFDdEIsTUFBRCxFQUFTZ0IsUUFBVCxDQUQ1QjtBQUVFLFNBQUcsRUFBRUEsUUFGUDtBQUdFLFdBQUssRUFBRUEsUUFIVDtBQUlFLGFBQU8sRUFBRUQsbUJBQW1CLENBQUNDLFFBQUQsQ0FKOUI7QUFLRSxhQUFPLEVBQUU7QUFBRXhCLGdCQUFRLEVBQUVPLEtBQUssQ0FBQ3dCLE9BQU4sQ0FBYy9CO0FBQTFCO0FBTFgsT0FPSVUsTUFBTSxDQUFDc0IsY0FBUCxJQUF5QnRCLE1BQU0sQ0FBQ3NCLGNBQVAsQ0FBc0JSLFFBQXRCLENBQTFCLElBQ0NBLFFBUkosQ0FEbUM7QUFBQSxHQUFwQyxDQU5ILENBUEYsQ0FERjtBQTZCRCxDQS9DRDs7Y0FBTWxCLGlCO1VBQ1dHLG9EOzs7ZUFnREZ3Qiw4RUFBVSxDQUFDcEMsTUFBRCxDQUFWLENBQW1CUyxpQkFBbkIsQzs7QUFBQTs7Ozs7Ozs7OzswQkE5RFRYLGM7MEJBRUFFLE07MEJBV0FTLGlCIiwiZmlsZSI6IjIxNWUxM2UtNDItd3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2xhdGUgfSBmcm9tICdzbGF0ZS1yZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgRm9udFNpemVQbHVnaW5PcHRpb25zLFxyXG4gIGdldEFjdGl2ZUZvbnRTaXplcyxcclxuICBpc0ZvbnRTaXplQWN0aXZlLFxyXG59IGZyb20gJy4vd2l0aEZvbnRTaXplcyc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCB7IGxhenlMb2FkIH0gZnJvbSAnQHJlYWN0LXBhZ2UvY29yZSc7XHJcbmltcG9ydCB3aXRoU3R5bGVzLCB7IFdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzL3dpdGhTdHlsZXMnO1xyXG5pbXBvcnQgY3JlYXRlU3R5bGVzIGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMvY3JlYXRlU3R5bGVzJztcclxuaW1wb3J0IFNsYXRlQnV0dG9uIGZyb20gJy4uLy4uL0NvbnRyb2xzL2J1dHRvbnMvU2xhdGVCdXR0b24nO1xyXG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY3JlYXRlTXVpVGhlbWUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGb250U2l6ZUJ1dHRvbkN1c3RvbVByb3BzIHt9XHJcblxyXG5jb25zdCBGb3JtYXRTaXplSWNvbiA9IGxhenlMb2FkKCgpID0+IGltcG9ydCgnQG1hdGVyaWFsLXVpL2ljb25zL1RleHRGaWVsZHMnKSk7XHJcblxyXG5jb25zdCBzdHlsZXMgPSAoeyBwYWxldHRlIH06IFRoZW1lKSA9PlxyXG4gIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICBzZWxlY3RlZDoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3BhbGV0dGUucHJpbWFyeS5tYWlufSAhaW1wb3J0YW50YCxcclxuICAgICAgY29sb3I6IGAke3BhbGV0dGUuZ2V0Q29udHJhc3RUZXh0KHBhbGV0dGUucHJpbWFyeS5tYWluKX0gIWltcG9ydGFudGAsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxudHlwZSBGb250U2l6ZUJ1dHRvblByb3BzID0gRm9udFNpemVCdXR0b25DdXN0b21Qcm9wcyAmXHJcbiAgV2l0aFN0eWxlczx0eXBlb2Ygc3R5bGVzPjtcclxuXHJcbmNvbnN0IEZvbnRTaXplQnV0dG9uUmF3OiBSZWFjdC5GQzxGb250U2l6ZUJ1dHRvblByb3BzPiA9IHByb3BzID0+IHtcclxuICBjb25zdCBlZGl0b3IgPSB1c2VTbGF0ZSgpO1xyXG4gIGNvbnN0IGNvbmZpZzogRm9udFNpemVQbHVnaW5PcHRpb25zID0gZWRpdG9yLmZvbnRTaXplQ29uZmlnO1xyXG4gIGNvbnN0IGFjdGl2ZUZvbnRTaXplcyA9IGdldEFjdGl2ZUZvbnRTaXplcyhlZGl0b3IpO1xyXG4gIGNvbnN0IGhhc1ZhbHVlID0gYWN0aXZlRm9udFNpemVzLmxlbmd0aCA+IDA7XHJcbiAgY29uc3QgW2FuY2hvciwgc2V0QW5jaG9yXSA9IFJlYWN0LnVzZVN0YXRlPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbCk7XHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2xvc2UoKSB7XHJcbiAgICBzZXRBbmNob3IobnVsbCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pikge1xyXG4gICAgc2V0QW5jaG9yKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVNZW51SXRlbUNsaWNrID0gKGZvbnRTaXplOiBudW1iZXIpID0+IChcclxuICAgIGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PlxyXG4gICkgPT4ge1xyXG4gICAgZWRpdG9yLmV4ZWMoeyB0eXBlOiAnY2hhbmdlX2ZvbnRzaXplJywgZm9udFNpemUgfSk7XHJcbiAgICBoYW5kbGVDbG9zZSgpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTbGF0ZUJ1dHRvblxyXG4gICAgICAgIGlzQWN0aXZlPXtoYXNWYWx1ZX1cclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICBpY29uPXs8Rm9ybWF0U2l6ZUljb24gLz59XHJcbiAgICAgICAgdGl0bGU9XCJGb250IHNpemVcIlxyXG4gICAgICAvPlxyXG4gICAgICA8TWVudVxyXG4gICAgICAgIGFuY2hvckVsPXthbmNob3J9XHJcbiAgICAgICAga2VlcE1vdW50ZWQ9e3RydWV9XHJcbiAgICAgICAgb3Blbj17Qm9vbGVhbihhbmNob3IpfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICA+XHJcbiAgICAgICAge2NvbmZpZy5hbGxvd2VkRm9udFNpemVzLm1hcChmb250U2l6ZSA9PiAoXHJcbiAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgc2VsZWN0ZWQ9e2lzRm9udFNpemVBY3RpdmUoZWRpdG9yLCBmb250U2l6ZSl9XHJcbiAgICAgICAgICAgIGtleT17Zm9udFNpemV9XHJcbiAgICAgICAgICAgIHZhbHVlPXtmb250U2l6ZX1cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTWVudUl0ZW1DbGljayhmb250U2l6ZSl9XHJcbiAgICAgICAgICAgIGNsYXNzZXM9e3sgc2VsZWN0ZWQ6IHByb3BzLmNsYXNzZXMuc2VsZWN0ZWQgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgeyhjb25maWcuZm9udFNpemVzTmFtZXMgJiYgY29uZmlnLmZvbnRTaXplc05hbWVzW2ZvbnRTaXplXSkgfHxcclxuICAgICAgICAgICAgICBmb250U2l6ZX1cclxuICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvTWVudT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoRm9udFNpemVCdXR0b25SYXcpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9