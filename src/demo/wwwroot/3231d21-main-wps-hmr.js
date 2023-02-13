webpackHotUpdate("main",{

/***/ "./src/lib/background/Renderer/BackgroundHtmlRenderer.tsx":
/*!****************************************************************!*\
  !*** ./src/lib/background/Renderer/BackgroundHtmlRenderer.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _react_page_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-page/editor */ "./node_modules/@react-page/editor/lib-es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types_ModeEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/ModeEnum */ "./src/lib/background/types/ModeEnum.ts");
/* harmony import */ var _common_utils_PaddingComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/utils/PaddingComponent */ "./src/lib/common/utils/PaddingComponent.tsx");
/* harmony import */ var _Provider_BackgroundProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Provider/BackgroundProvider */ "./src/lib/background/Provider/BackgroundProvider.tsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







var getStyles = function getStyles(props, previewState) {
  var _props$data = props.data,
      bgImage = _props$data.bgImage,
      _props$data$modeFlag = _props$data.modeFlag,
      modeFlag = _props$data$modeFlag === void 0 ? props.defaultModeFlag : _props$data$modeFlag,
      _props$data$isParalla = _props$data.isParallax,
      isParallax = _props$data$isParalla === void 0 ? props.defaultIsParallax : _props$data$isParalla,
      _props$data$backgroun = _props$data.backgroundColor,
      backgroundColor = _props$data$backgroun === void 0 ? props.defaultBackgroundColor : _props$data$backgroun,
      _props$data$gradients = _props$data.gradients,
      gradients = _props$data$gradients === void 0 ? [] : _props$data$gradients;
  var styles = {};

  if (modeFlag & _types_ModeEnum__WEBPACK_IMPORTED_MODULE_2__["ModeEnum"].GRADIENT_MODE_FLAG) {
    var usedGradients = gradients.filter(function (g) {
      return g.colors && g.colors.length;
    });
    var usedGradientsString = usedGradients.map(function (g, i) {
      var firstColor = g.colors[0].color;
      var firstColorStr = Object(_react_page_editor__WEBPACK_IMPORTED_MODULE_0__["colorToString"])(firstColor);
      var deg = i === previewState.gradientDegPreviewIndex && previewState.gradientDegPreview !== undefined ? previewState.gradientDegPreview : g.deg;
      var opacity = i === previewState.gradientOpacityPreviewIndex && previewState.gradientOpacityPreview !== undefined ? previewState.gradientOpacityPreview : g.opacity;
      return 'linear-gradient(' + deg + 'deg, ' + (g.colors.length !== 1 ? g.colors.map(function (c, cpIndex) {
        var color = i === previewState.gradientColorPreviewIndex && cpIndex === previewState.gradientColorPreviewColorIndex && previewState.gradientColorPreview !== undefined ? previewState.gradientColorPreview : c.color;

        var colorWithOpacity = _objectSpread(_objectSpread({}, color), {}, {
          a: color.a !== undefined ? color.a * opacity : opacity
        });

        return Object(_react_page_editor__WEBPACK_IMPORTED_MODULE_0__["colorToString"])(colorWithOpacity);
      }).join(', ') : firstColorStr + ', ' + firstColorStr) + ')';
    }).join(', ');

    if (usedGradientsString !== '') {
      styles = _objectSpread(_objectSpread({}, styles), {}, {
        background: usedGradientsString
      });
    }
  }

  if (modeFlag & _types_ModeEnum__WEBPACK_IMPORTED_MODULE_2__["ModeEnum"].COLOR_MODE_FLAG) {
    var colorStr = Object(_react_page_editor__WEBPACK_IMPORTED_MODULE_0__["colorToString"])(previewState.backgroundColorPreview ? previewState.backgroundColorPreview : backgroundColor);
    var modeStr = "linear-gradient(".concat(colorStr, ", ").concat(colorStr, ")");
    styles = _objectSpread(_objectSpread({}, styles), {}, {
      background: styles.background ? styles.background + ', ' + modeStr : modeStr
    });
  }

  if ((modeFlag & _types_ModeEnum__WEBPACK_IMPORTED_MODULE_2__["ModeEnum"].IMAGE_MODE_FLAG) !== 0 && (bgImage || props.data.bgSrc)) {
    var backgroundFinal = bgImage ? bgImage.src : props.data.bgSrc;

    var _modeStr = "url('".concat(backgroundFinal, "') center / cover no-repeat") + (isParallax ? ' fixed' : '');

    styles = _objectSpread(_objectSpread({}, styles), {}, {
      background: styles.background ? styles.background + ', ' + _modeStr : _modeStr
    });
  }

  return styles;
};

var BackgroundHtmlRenderer = function BackgroundHtmlRenderer(props) {
  var children = props.children,
      _props$data2 = props.data,
      _props$data2$darken = _props$data2.darken,
      darken = _props$data2$darken === void 0 ? props.defaultDarken : _props$data2$darken,
      _props$data2$lighten = _props$data2.lighten,
      lighten = _props$data2$lighten === void 0 ? props.defaultLighten : _props$data2$lighten,
      _props$data2$hasPaddi = _props$data2.hasPadding,
      hasPadding = _props$data2$hasPaddi === void 0 ? props.defaultHasPadding : _props$data2$hasPaddi;
  var previewState = Object(_Provider_BackgroundProvider__WEBPACK_IMPORTED_MODULE_4__["useBackgroundPreviewState"])();
  var darkenFinal = previewState.darkenPreview !== undefined ? previewState.darkenPreview : darken;
  var lightenFinal = previewState.lightenPreview !== undefined ? previewState.lightenPreview : lighten;
  var containerStyles = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    return getStyles(props, previewState);
  }, [props, previewState]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "ory-plugins-layout-background",
    style: _objectSpread(_objectSpread({}, containerStyles), hasPadding ? {} : {
      padding: 0
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_common_utils_PaddingComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    state: props.data
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "ory-plugins-layout-background__backstretch",
    style: {
      // tslint:disable-next-line:max-line-length
      backgroundImage: "linear-gradient(rgba(0, 0, 0, ".concat(darkenFinal, "), rgba(0, 0, 0, ").concat(darkenFinal, ")),linear-gradient(rgba(255, 255, 255, ").concat(lightenFinal, "), rgba(255, 255, 255, ").concat(lightenFinal, "))")
    }
  }), children));
};

__signature__(BackgroundHtmlRenderer, "useBackgroundPreviewState{previewState}\nuseMemo{containerStyles}", function () {
  return [_Provider_BackgroundProvider__WEBPACK_IMPORTED_MODULE_4__["useBackgroundPreviewState"]];
});

var _default = BackgroundHtmlRenderer;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getStyles, "getStyles", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\background\\Renderer\\BackgroundHtmlRenderer.tsx");
  reactHotLoader.register(BackgroundHtmlRenderer, "BackgroundHtmlRenderer", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\background\\Renderer\\BackgroundHtmlRenderer.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\background\\Renderer\\BackgroundHtmlRenderer.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2JhY2tncm91bmQvUmVuZGVyZXIvQmFja2dyb3VuZEh0bWxSZW5kZXJlci50c3giXSwibmFtZXMiOlsiZ2V0U3R5bGVzIiwicHJvcHMiLCJwcmV2aWV3U3RhdGUiLCJkYXRhIiwiYmdJbWFnZSIsIm1vZGVGbGFnIiwiZGVmYXVsdE1vZGVGbGFnIiwiaXNQYXJhbGxheCIsImRlZmF1bHRJc1BhcmFsbGF4IiwiYmFja2dyb3VuZENvbG9yIiwiZGVmYXVsdEJhY2tncm91bmRDb2xvciIsImdyYWRpZW50cyIsInN0eWxlcyIsIk1vZGVFbnVtIiwiR1JBRElFTlRfTU9ERV9GTEFHIiwidXNlZEdyYWRpZW50cyIsImZpbHRlciIsImciLCJjb2xvcnMiLCJsZW5ndGgiLCJ1c2VkR3JhZGllbnRzU3RyaW5nIiwibWFwIiwiaSIsImZpcnN0Q29sb3IiLCJjb2xvciIsImZpcnN0Q29sb3JTdHIiLCJjb2xvclRvU3RyaW5nIiwiZGVnIiwiZ3JhZGllbnREZWdQcmV2aWV3SW5kZXgiLCJncmFkaWVudERlZ1ByZXZpZXciLCJ1bmRlZmluZWQiLCJvcGFjaXR5IiwiZ3JhZGllbnRPcGFjaXR5UHJldmlld0luZGV4IiwiZ3JhZGllbnRPcGFjaXR5UHJldmlldyIsImMiLCJjcEluZGV4IiwiZ3JhZGllbnRDb2xvclByZXZpZXdJbmRleCIsImdyYWRpZW50Q29sb3JQcmV2aWV3Q29sb3JJbmRleCIsImdyYWRpZW50Q29sb3JQcmV2aWV3IiwiY29sb3JXaXRoT3BhY2l0eSIsImEiLCJqb2luIiwiYmFja2dyb3VuZCIsIkNPTE9SX01PREVfRkxBRyIsImNvbG9yU3RyIiwiYmFja2dyb3VuZENvbG9yUHJldmlldyIsIm1vZGVTdHIiLCJJTUFHRV9NT0RFX0ZMQUciLCJiZ1NyYyIsImJhY2tncm91bmRGaW5hbCIsInNyYyIsIkJhY2tncm91bmRIdG1sUmVuZGVyZXIiLCJjaGlsZHJlbiIsImRhcmtlbiIsImRlZmF1bHREYXJrZW4iLCJsaWdodGVuIiwiZGVmYXVsdExpZ2h0ZW4iLCJoYXNQYWRkaW5nIiwiZGVmYXVsdEhhc1BhZGRpbmciLCJ1c2VCYWNrZ3JvdW5kUHJldmlld1N0YXRlIiwiZGFya2VuRmluYWwiLCJkYXJrZW5QcmV2aWV3IiwibGlnaHRlbkZpbmFsIiwibGlnaHRlblByZXZpZXciLCJjb250YWluZXJTdHlsZXMiLCJSZWFjdCIsInBhZGRpbmciLCJiYWNrZ3JvdW5kSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFJQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUNoQkMsS0FEZ0IsRUFFaEJDLFlBRmdCLEVBR2I7QUFDSCxvQkFRSUQsS0FSSixDQUNFRSxJQURGO0FBQUEsTUFFSUMsT0FGSixlQUVJQSxPQUZKO0FBQUEseUNBR0lDLFFBSEo7QUFBQSxNQUdJQSxRQUhKLHFDQUdlSixLQUFLLENBQUNLLGVBSHJCO0FBQUEsMENBSUlDLFVBSko7QUFBQSxNQUlJQSxVQUpKLHNDQUlpQk4sS0FBSyxDQUFDTyxpQkFKdkI7QUFBQSwwQ0FLSUMsZUFMSjtBQUFBLE1BS0lBLGVBTEosc0NBS3NCUixLQUFLLENBQUNTLHNCQUw1QjtBQUFBLDBDQU1JQyxTQU5KO0FBQUEsTUFNSUEsU0FOSixzQ0FNZ0IsRUFOaEI7QUFTQSxNQUFJQyxNQUEyQixHQUFHLEVBQWxDOztBQUNBLE1BQUlQLFFBQVEsR0FBR1Esd0RBQVEsQ0FBQ0Msa0JBQXhCLEVBQTRDO0FBQzFDLFFBQU1DLGFBQWEsR0FBR0osU0FBUyxDQUFDSyxNQUFWLENBQWlCLFVBQUFDLENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUNDLE1BQUYsSUFBWUQsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLE1BQXpCO0FBQUEsS0FBbEIsQ0FBdEI7QUFDQSxRQUFNQyxtQkFBbUIsR0FBR0wsYUFBYSxDQUN0Q00sR0FEeUIsQ0FDckIsVUFBQ0osQ0FBRCxFQUFJSyxDQUFKLEVBQVU7QUFDYixVQUFN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RTtBQUNFLGFBQVMsRUFBQyw0Q0FEWjtBQUVFLFNBQUssRUFBRTtBQUNMO0FBQ0FnRSxxQkFBZSwwQ0FBbUNQLFdBQW5DLDhCQUFrRUEsV0FBbEUsb0RBQXVIRSxZQUF2SCxvQ0FBNkpBLFlBQTdKO0FBRlY7QUFGVCxJQURGLEVBUUdWLFFBUkgsQ0FKRixDQURGO0FBaUJELENBdkNEOztjQUFNRCxzQjtVQVNpQlEsc0Y7OztlQWdDUlIsc0I7QUFBQTs7Ozs7Ozs7OzswQkFwSVRuRCxTOzBCQTJGQW1ELHNCIiwiZmlsZSI6IjMyMzFkMjEtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29sb3JUb1N0cmluZyB9IGZyb20gJ0ByZWFjdC1wYWdlL2VkaXRvcic7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTW9kZUVudW0gfSBmcm9tICcuLi90eXBlcy9Nb2RlRW51bSc7XHJcbmltcG9ydCB7IEJhY2tncm91bmRSZW5kZXJlclByb3BzIH0gZnJvbSAnLi4vdHlwZXMvcmVuZGVyZXInO1xyXG5pbXBvcnQgUGFkZGluZ0NvbXBvbmVudCBmcm9tICcuLi8uLi9jb21tb24vdXRpbHMvUGFkZGluZ0NvbXBvbmVudCc7XHJcbmltcG9ydCB7IHVzZUJhY2tncm91bmRQcmV2aWV3U3RhdGUgfSBmcm9tICcuLi9Qcm92aWRlci9CYWNrZ3JvdW5kUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBCYWNrZ3JvdW5kUHJldmlld1N0YXRlIH0gZnJvbSAnLi4vdHlwZXMvcHJldmlld1N0YXRlJztcclxuaW1wb3J0IHsgQmFja2dyb3VuZFByb3BzIH0gZnJvbSAnLi4vdHlwZXMvY29tcG9uZW50JztcclxuXHJcbmNvbnN0IGdldFN0eWxlcyA9IChcclxuICBwcm9wczogQmFja2dyb3VuZFByb3BzLFxyXG4gIHByZXZpZXdTdGF0ZTogQmFja2dyb3VuZFByZXZpZXdTdGF0ZVxyXG4pID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGJnSW1hZ2UsXHJcbiAgICAgIG1vZGVGbGFnID0gcHJvcHMuZGVmYXVsdE1vZGVGbGFnLFxyXG4gICAgICBpc1BhcmFsbGF4ID0gcHJvcHMuZGVmYXVsdElzUGFyYWxsYXgsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvciA9IHByb3BzLmRlZmF1bHRCYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgIGdyYWRpZW50cyA9IFtdLFxyXG4gICAgfSxcclxuICB9ID0gcHJvcHM7XHJcbiAgbGV0IHN0eWxlczogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHt9O1xyXG4gIGlmIChtb2RlRmxhZyAmIE1vZGVFbnVtLkdSQURJRU5UX01PREVfRkxBRykge1xyXG4gICAgY29uc3QgdXNlZEdyYWRpZW50cyA9IGdyYWRpZW50cy5maWx0ZXIoZyA9PiBnLmNvbG9ycyAmJiBnLmNvbG9ycy5sZW5ndGgpO1xyXG4gICAgY29uc3QgdXNlZEdyYWRpZW50c1N0cmluZyA9IHVzZWRHcmFkaWVudHNcclxuICAgICAgLm1hcCgoZywgaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0Q29sb3IgPSBnLmNvbG9yc1swXS5jb2xvcjtcclxuICAgICAgICBjb25zdCBmaXJzdENvbG9yU3RyID0gY29sb3JUb1N0cmluZyhmaXJzdENvbG9yKTtcclxuICAgICAgICBjb25zdCBkZWcgPVxyXG4gICAgICAgICAgaSA9PT0gcHJldmlld1N0YXRlLmdyYWRpZW50RGVnUHJldmlld0luZGV4ICYmXHJcbiAgICAgICAgICBwcmV2aWV3U3RhdGUuZ3JhZGllbnREZWdQcmV2aWV3ICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBwcmV2aWV3U3RhdGUuZ3JhZGllbnREZWdQcmV2aWV3XHJcbiAgICAgICAgICAgIDogZy5kZWc7XHJcbiAgICAgICAgY29uc3Qgb3BhY2l0eSA9XHJcbiAgICAgICAgICBpID09PSBwcmV2aWV3U3RhdGUuZ3JhZGllbnRPcGFjaXR5UHJldmlld0luZGV4ICYmXHJcbiAgICAgICAgICBwcmV2aWV3U3RhdGUuZ3JhZGllbnRPcGFjaXR5UHJldmlldyAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gcHJldmlld1N0YXRlLmdyYWRpZW50T3BhY2l0eVByZXZpZXdcclxuICAgICAgICAgICAgOiBnLm9wYWNpdHk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICdsaW5lYXItZ3JhZGllbnQoJyArXHJcbiAgICAgICAgICBkZWcgK1xyXG4gICAgICAgICAgJ2RlZywgJyArXHJcbiAgICAgICAgICAoZy5jb2xvcnMubGVuZ3RoICE9PSAxXHJcbiAgICAgICAgICAgID8gZy5jb2xvcnNcclxuICAgICAgICAgICAgICAgIC5tYXAoKGMsIGNwSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPVxyXG4gICAgICAgICAgICAgICAgICAgIGkgPT09IHByZXZpZXdTdGF0ZS5ncmFkaWVudENvbG9yUHJldmlld0luZGV4ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgY3BJbmRleCA9PT0gcHJldmlld1N0YXRlLmdyYWRpZW50Q29sb3JQcmV2aWV3Q29sb3JJbmRleCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXdTdGF0ZS5ncmFkaWVudENvbG9yUHJldmlldyAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IHByZXZpZXdTdGF0ZS5ncmFkaWVudENvbG9yUHJldmlld1xyXG4gICAgICAgICAgICAgICAgICAgICAgOiBjLmNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBjb2xvcldpdGhPcGFjaXR5ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGE6IGNvbG9yLmEgIT09IHVuZGVmaW5lZCA/IGNvbG9yLmEgKiBvcGFjaXR5IDogb3BhY2l0eSxcclxuICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yVG9TdHJpbmcoY29sb3JXaXRoT3BhY2l0eSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmpvaW4oJywgJylcclxuICAgICAgICAgICAgOiBmaXJzdENvbG9yU3RyICsgJywgJyArIGZpcnN0Q29sb3JTdHIpICtcclxuICAgICAgICAgICcpJ1xyXG4gICAgICAgICk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5qb2luKCcsICcpO1xyXG4gICAgaWYgKHVzZWRHcmFkaWVudHNTdHJpbmcgIT09ICcnKSB7XHJcbiAgICAgIHN0eWxlcyA9IHsgLi4uc3R5bGVzLCBiYWNrZ3JvdW5kOiB1c2VkR3JhZGllbnRzU3RyaW5nIH07XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChtb2RlRmxhZyAmIE1vZGVFbnVtLkNPTE9SX01PREVfRkxBRykge1xyXG4gICAgY29uc3QgY29sb3JTdHIgPSBjb2xvclRvU3RyaW5nKFxyXG4gICAgICBwcmV2aWV3U3RhdGUuYmFja2dyb3VuZENvbG9yUHJldmlld1xyXG4gICAgICAgID8gcHJldmlld1N0YXRlLmJhY2tncm91bmRDb2xvclByZXZpZXdcclxuICAgICAgICA6IGJhY2tncm91bmRDb2xvclxyXG4gICAgKTtcclxuICAgIGNvbnN0IG1vZGVTdHIgPSBgbGluZWFyLWdyYWRpZW50KCR7Y29sb3JTdHJ9LCAke2NvbG9yU3RyfSlgO1xyXG4gICAgc3R5bGVzID0ge1xyXG4gICAgICAuLi5zdHlsZXMsXHJcbiAgICAgIGJhY2tncm91bmQ6IHN0eWxlcy5iYWNrZ3JvdW5kXHJcbiAgICAgICAgPyBzdHlsZXMuYmFja2dyb3VuZCArICcsICcgKyBtb2RlU3RyXHJcbiAgICAgICAgOiBtb2RlU3RyLFxyXG4gICAgfTtcclxuICB9XHJcbiAgaWYgKFxyXG4gICAgKG1vZGVGbGFnICYgTW9kZUVudW0uSU1BR0VfTU9ERV9GTEFHKSAhPT0gMCAmJlxyXG4gICAgKGJnSW1hZ2UgfHwgcHJvcHMuZGF0YS5iZ1NyYylcclxuICApIHtcclxuICAgIGNvbnN0IGJhY2tncm91bmRGaW5hbCA9IGJnSW1hZ2UgPyBiZ0ltYWdlLnNyYyA6IHByb3BzLmRhdGEuYmdTcmM7XHJcbiAgICBjb25zdCBtb2RlU3RyID1cclxuICAgICAgYHVybCgnJHtiYWNrZ3JvdW5kRmluYWx9JykgY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0YCArXHJcbiAgICAgIChpc1BhcmFsbGF4ID8gJyBmaXhlZCcgOiAnJyk7XHJcbiAgICBzdHlsZXMgPSB7XHJcbiAgICAgIC4uLnN0eWxlcyxcclxuICAgICAgYmFja2dyb3VuZDogc3R5bGVzLmJhY2tncm91bmRcclxuICAgICAgICA/IHN0eWxlcy5iYWNrZ3JvdW5kICsgJywgJyArIG1vZGVTdHJcclxuICAgICAgICA6IG1vZGVTdHIsXHJcbiAgICB9O1xyXG4gIH1cclxuICByZXR1cm4gc3R5bGVzO1xyXG59O1xyXG5cclxuY29uc3QgQmFja2dyb3VuZEh0bWxSZW5kZXJlcjogUmVhY3QuRkM8QmFja2dyb3VuZFJlbmRlcmVyUHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBkYXJrZW4gPSBwcm9wcy5kZWZhdWx0RGFya2VuLFxyXG4gICAgICBsaWdodGVuID0gcHJvcHMuZGVmYXVsdExpZ2h0ZW4sXHJcbiAgICAgIGhhc1BhZGRpbmcgPSBwcm9wcy5kZWZhdWx0SGFzUGFkZGluZyxcclxuICAgIH0sXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHByZXZpZXdTdGF0ZSA9IHVzZUJhY2tncm91bmRQcmV2aWV3U3RhdGUoKTtcclxuICBjb25zdCBkYXJrZW5GaW5hbCA9XHJcbiAgICBwcmV2aWV3U3RhdGUuZGFya2VuUHJldmlldyAhPT0gdW5kZWZpbmVkXHJcbiAgICAgID8gcHJldmlld1N0YXRlLmRhcmtlblByZXZpZXdcclxuICAgICAgOiBkYXJrZW47XHJcbiAgY29uc3QgbGlnaHRlbkZpbmFsID1cclxuICAgIHByZXZpZXdTdGF0ZS5saWdodGVuUHJldmlldyAhPT0gdW5kZWZpbmVkXHJcbiAgICAgID8gcHJldmlld1N0YXRlLmxpZ2h0ZW5QcmV2aWV3XHJcbiAgICAgIDogbGlnaHRlbjtcclxuICBjb25zdCBjb250YWluZXJTdHlsZXMgPSBSZWFjdC51c2VNZW1vKCgpID0+IGdldFN0eWxlcyhwcm9wcywgcHJldmlld1N0YXRlKSwgW1xyXG4gICAgcHJvcHMsXHJcbiAgICBwcmV2aWV3U3RhdGUsXHJcbiAgXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwib3J5LXBsdWdpbnMtbGF5b3V0LWJhY2tncm91bmRcIlxyXG4gICAgICBzdHlsZT17eyAuLi5jb250YWluZXJTdHlsZXMsIC4uLihoYXNQYWRkaW5nID8ge30gOiB7IHBhZGRpbmc6IDAgfSkgfX1cclxuICAgID5cclxuICAgICAgPFBhZGRpbmdDb21wb25lbnQgc3RhdGU9e3Byb3BzLmRhdGF9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm9yeS1wbHVnaW5zLWxheW91dC1iYWNrZ3JvdW5kX19iYWNrc3RyZXRjaFwiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsICR7ZGFya2VuRmluYWx9KSwgcmdiYSgwLCAwLCAwLCAke2RhcmtlbkZpbmFsfSkpLGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsICR7bGlnaHRlbkZpbmFsfSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgJHtsaWdodGVuRmluYWx9KSlgLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9QYWRkaW5nQ29tcG9uZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmRIdG1sUmVuZGVyZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=