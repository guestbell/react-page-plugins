"use strict";
self["webpackHotUpdate_guestbell_react_page_plugins"]("main",{

/***/ "./src/lib/spacer/Renderer/SpacerResizable.tsx":
/*!*****************************************************!*\
  !*** ./src/lib/spacer/Renderer/SpacerResizable.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_resizable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-resizable */ "./node_modules/react-resizable/index.js");
/* harmony import */ var react_resizable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_resizable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _default_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../default/state */ "./src/lib/spacer/default/state.ts");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




var SpacerDefaultControls = function SpacerDefaultControls(props) {
  var _ref;
  var isPreviewMode = props.isPreviewMode,
    onChange = props.onChange,
    _props$data = props.data,
    _props$data2 = _props$data === void 0 ? _default_state__WEBPACK_IMPORTED_MODULE_3__.defaultSpacerState : _props$data,
    height = _props$data2.height;
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(height),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    heightPreview = _React$useState2[0],
    setHeightPreview = _React$useState2[1];
  var changeHeightPreview = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function (h) {
    if (!h || h < 24) {
      h = 24;
    }
    setHeightPreview(h);
  }, []);
  var commitHeight = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function (h) {
    if (!h || h < 24) {
      h = 24;
    }
    setHeightPreview(h);
    onChange({
      height: h
    });
  }, [onChange]);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
    if (heightPreview !== height) {
      setHeightPreview(height);
      onChange({
        height: height
      });
    }
  }, [height, commitHeight]);
  var finalHeight = (_ref = heightPreview !== null && heightPreview !== void 0 ? heightPreview : height) !== null && _ref !== void 0 ? _ref : 0;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('ory-plugins-content-spacer', {
      'ory-plugins-content-spacer-read-only': isPreviewMode
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_resizable__WEBPACK_IMPORTED_MODULE_2__.Resizable, {
    onResize: function onResize(e, data) {
      return changeHeightPreview(data.size.height);
    },
    onResizeStop: function onResizeStop(e, data) {
      return commitHeight(data.size.height);
    },
    height: finalHeight,
    width: 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    style: {
      height: finalHeight,
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "ory-plugins-content-spacer__handle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("svg", {
    viewBox: "0 0 24 24",
    style: {
      color: 'white',
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
    d: "M20 9H4v2h16V9zM4 15h16v-2H4v2z"
  }))))));
};
__signature__(SpacerDefaultControls, "useState{[heightPreview, setHeightPreview](height)}\nuseCallback{changeHeightPreview}\nuseCallback{commitHeight}\nuseEffect{}");
var _default = SpacerDefaultControls;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(SpacerDefaultControls, "SpacerDefaultControls", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\spacer\\Renderer\\SpacerResizable.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\spacer\\Renderer\\SpacerResizable.tsx");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "0a2f1d3f01750fbb53b8"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O01BQUVKLEtBQUssRUFBRSxFQUFFO01BQUVuQixNQUFNLEVBQUU7SUFBRztFQUFFLGdCQUVqRFgsZ0RBQUE7SUFBTW1DLENBQUMsRUFBQztFQUFpQyxDQUFFLENBQ3hDLENBQ0YsQ0FDRixDQUNJLENBQ1IsQ0FBQztBQUVWLENBQUM7QUFBQ0MsYUFBQSxDQXhESWpDLHFCQUFvRDtBQUFBLElBQUFrQyxRQUFBLEdBMEQzQ2xDLHFCQUFxQjtBQUFwQywrREFBQWtDLFFBQUE7QUFBcUM7QUFBQTtFQUFBLElBQUFDLGNBQUEsVUFBQUMsb0JBQUEsbUJBQUFBLG9CQUFBLENBQUFDLE9BQUEsR0FBQUMsU0FBQTtFQUFBLEtBQUFILGNBQUE7SUFBQTtFQUFBO0VBQUFBLGNBQUEsQ0FBQUksUUFBQSxDQTFEL0J2QyxxQkFBb0Q7RUFBQW1DLGNBQUEsQ0FBQUksUUFBQSxDQUFBTCxRQUFBO0FBQUE7QUFBQTtBQUFBO0VBQUEsSUFBQU0sV0FBQSxVQUFBSixvQkFBQSxtQkFBQUEsb0JBQUEsQ0FBQUksV0FBQSxHQUFBRixTQUFBO0VBQUFFLFdBQUEsSUFBQUEsV0FBQSxDQUFBQyxNQUFBO0FBQUE7Ozs7Ozs7O1VDTjFELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BndWVzdGJlbGwvcmVhY3QtcGFnZS1wbHVnaW5zLy4vc3JjL2xpYi9zcGFjZXIvUmVuZGVyZXIvU3BhY2VyUmVzaXphYmxlLnRzeCIsIndlYnBhY2s6Ly9AZ3Vlc3RiZWxsL3JlYWN0LXBhZ2UtcGx1Z2lucy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUmVzaXphYmxlIH0gZnJvbSAncmVhY3QtcmVzaXphYmxlJztcclxuaW1wb3J0IHsgU3BhY2VyQ29udHJvbHNQcm9wcyB9IGZyb20gJy4uL3R5cGVzL2NvbnRyb2xzJztcclxuaW1wb3J0IHsgZGVmYXVsdFNwYWNlclN0YXRlIH0gZnJvbSAnLi8uLi9kZWZhdWx0L3N0YXRlJztcclxuXHJcbmNvbnN0IFNwYWNlckRlZmF1bHRDb250cm9sczogUmVhY3QuRkM8U3BhY2VyQ29udHJvbHNQcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgaXNQcmV2aWV3TW9kZSxcclxuICAgIG9uQ2hhbmdlLFxyXG4gICAgZGF0YTogeyBoZWlnaHQgfSA9IGRlZmF1bHRTcGFjZXJTdGF0ZSxcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2hlaWdodFByZXZpZXcsIHNldEhlaWdodFByZXZpZXddID0gUmVhY3QudXNlU3RhdGUoaGVpZ2h0KTtcclxuICBjb25zdCBjaGFuZ2VIZWlnaHRQcmV2aWV3ID0gUmVhY3QudXNlQ2FsbGJhY2soKGg6IG51bWJlcikgPT4ge1xyXG4gICAgaWYgKCFoIHx8IGggPCAyNCkge1xyXG4gICAgICBoID0gMjQ7XHJcbiAgICB9XHJcbiAgICBzZXRIZWlnaHRQcmV2aWV3KGgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgY29tbWl0SGVpZ2h0ID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICAoaDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGlmICghaCB8fCBoIDwgMjQpIHtcclxuICAgICAgICBoID0gMjQ7XHJcbiAgICAgIH1cclxuICAgICAgc2V0SGVpZ2h0UHJldmlldyhoKTtcclxuICAgICAgb25DaGFuZ2UoeyBoZWlnaHQ6IGggfSk7XHJcbiAgICB9LFxyXG4gICAgW29uQ2hhbmdlXVxyXG4gICk7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChoZWlnaHRQcmV2aWV3ICE9PSBoZWlnaHQpIHtcclxuICAgICAgc2V0SGVpZ2h0UHJldmlldyhoZWlnaHQpO1xyXG4gICAgICBvbkNoYW5nZSh7IGhlaWdodCB9KTtcclxuICAgIH1cclxuICB9LCBbaGVpZ2h0LCBjb21taXRIZWlnaHRdKTtcclxuICBjb25zdCBmaW5hbEhlaWdodCA9IGhlaWdodFByZXZpZXcgPz8gaGVpZ2h0ID8/IDA7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdvcnktcGx1Z2lucy1jb250ZW50LXNwYWNlcicsIHtcclxuICAgICAgICAnb3J5LXBsdWdpbnMtY29udGVudC1zcGFjZXItcmVhZC1vbmx5JzogaXNQcmV2aWV3TW9kZSxcclxuICAgICAgfSl9XHJcbiAgICA+XHJcbiAgICAgIDxSZXNpemFibGVcclxuICAgICAgICBvblJlc2l6ZT17KGUsIGRhdGEpID0+IGNoYW5nZUhlaWdodFByZXZpZXcoZGF0YS5zaXplLmhlaWdodCl9XHJcbiAgICAgICAgb25SZXNpemVTdG9wPXsoZSwgZGF0YSkgPT4gY29tbWl0SGVpZ2h0KGRhdGEuc2l6ZS5oZWlnaHQpfVxyXG4gICAgICAgIGhlaWdodD17ZmluYWxIZWlnaHR9XHJcbiAgICAgICAgd2lkdGg9ezB9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogZmluYWxIZWlnaHQsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcnktcGx1Z2lucy1jb250ZW50LXNwYWNlcl9faGFuZGxlXCI+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDI0IH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIwIDlINHYyaDE2Vjl6TTQgMTVoMTZ2LTJINHYyelwiIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUmVzaXphYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwYWNlckRlZmF1bHRDb250cm9scztcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjBhMmYxZDNmMDE3NTBmYmI1M2I4XCI7IH0iXSwibmFtZXMiOlsiY2xhc3NOYW1lcyIsIlJlYWN0IiwiUmVzaXphYmxlIiwiZGVmYXVsdFNwYWNlclN0YXRlIiwiU3BhY2VyRGVmYXVsdENvbnRyb2xzIiwicHJvcHMiLCJfcmVmIiwiaXNQcmV2aWV3TW9kZSIsIm9uQ2hhbmdlIiwiX3Byb3BzJGRhdGEiLCJkYXRhIiwiX3Byb3BzJGRhdGEyIiwiaGVpZ2h0IiwiX1JlYWN0JHVzZVN0YXRlIiwidXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJoZWlnaHRQcmV2aWV3Iiwic2V0SGVpZ2h0UHJldmlldyIsImNoYW5nZUhlaWdodFByZXZpZXciLCJ1c2VDYWxsYmFjayIsImgiLCJjb21taXRIZWlnaHQiLCJ1c2VFZmZlY3QiLCJmaW5hbEhlaWdodCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvblJlc2l6ZSIsImUiLCJzaXplIiwib25SZXNpemVTdG9wIiwid2lkdGgiLCJzdHlsZSIsInBvc2l0aW9uIiwidmlld0JveCIsImNvbG9yIiwiZCIsIl9fc2lnbmF0dXJlX18iLCJfZGVmYXVsdCIsInJlYWN0SG90TG9hZGVyIiwicmVhY3RIb3RMb2FkZXJHbG9iYWwiLCJkZWZhdWx0IiwidW5kZWZpbmVkIiwicmVnaXN0ZXIiLCJsZWF2ZU1vZHVsZSIsIm1vZHVsZSJdLCJzb3VyY2VSb290IjoiIn0=