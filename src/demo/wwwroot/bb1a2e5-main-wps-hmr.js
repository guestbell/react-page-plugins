webpackHotUpdate("main",{

/***/ "./src/lib/slate/plugins/links/Link.tsx":
/*!**********************************************!*\
  !*** ./src/lib/slate/plugins/links/Link.tsx ***!
  \**********************************************/
/*! exports provided: Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_utils_urlUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/utils/urlUtil */ "./src/lib/common/utils/urlUtil.ts");
/* harmony import */ var _linkType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linkType */ "./src/lib/slate/plugins/links/linkType.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





var Link = function Link(_ref) {
  var attributes = _ref.attributes,
      children = _ref.children,
      element = _ref.element;

  switch (element.type) {
    case _linkType__WEBPACK_IMPORTED_MODULE_2__["LinkType"]:
      if (Object(_common_utils_urlUtil__WEBPACK_IMPORTED_MODULE_1__["isSamePageUrl"])(element.url)) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], _extends({}, attributes, {
          to: Object(_common_utils_urlUtil__WEBPACK_IMPORTED_MODULE_1__["getPathname"])(element.url)
        }), children);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", _extends({}, attributes, {
        href: element.url
      }), children);

    default:
      return null;
  }
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Link, "Link", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\plugins\\links\\Link.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3NsYXRlL3BsdWdpbnMvbGlua3MvTGluay50c3giXSwibmFtZXMiOlsiTGluayIsImF0dHJpYnV0ZXMiLCJjaGlsZHJlbiIsImVsZW1lbnQiLCJ0eXBlIiwiTGlua1R5cGUiLCJpc1NhbWVQYWdlVXJsIiwidXJsIiwiZ2V0UGF0aG5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLElBQWtDLEdBQUcsU0FBckNBLElBQXFDLE9BSTVDO0FBQUEsTUFISkMsVUFHSSxRQUhKQSxVQUdJO0FBQUEsTUFGSkMsUUFFSSxRQUZKQSxRQUVJO0FBQUEsTUFESkMsT0FDSSxRQURKQSxPQUNJOztBQUNKLFVBQVFBLE9BQU8sQ0FBQ0MsSUFBaEI7QUFDRSxTQUFLQyxrREFBTDtBQUNFLFVBQUlDLDJFQUFhLENBQUNILE9BQU8sQ0FBQ0ksR0FBVCxDQUFqQixFQUFnQztBQUM5Qiw0QkFDRSxvREFBQyxxREFBRCxlQUFnQk4sVUFBaEI7QUFBNEIsWUFBRSxFQUFFTyx5RUFBVyxDQUFDTCxPQUFPLENBQUNJLEdBQVQ7QUFBM0MsWUFDR0wsUUFESCxDQURGO0FBS0Q7O0FBQ0QsMEJBQ0Usc0VBQU9ELFVBQVA7QUFBbUIsWUFBSSxFQUFFRSxPQUFPLENBQUNJO0FBQWpDLFVBQ0dMLFFBREgsQ0FERjs7QUFLRjtBQUNFLGFBQU8sSUFBUDtBQWZKO0FBaUJELENBdEJNOzs7Ozs7Ozs7OzBCQUFNRixJIiwiZmlsZSI6ImJiMWEyZTUtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSZW5kZXJFbGVtZW50UHJvcHMgfSBmcm9tICdzbGF0ZS1yZWFjdCc7XHJcbmltcG9ydCB7IGdldFBhdGhuYW1lLCBpc1NhbWVQYWdlVXJsIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3VybFV0aWwnO1xyXG5pbXBvcnQgeyBMaW5rVHlwZSB9IGZyb20gJy4vbGlua1R5cGUnO1xyXG5pbXBvcnQgeyBMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rOiBSZWFjdC5GQzxSZW5kZXJFbGVtZW50UHJvcHM+ID0gKHtcclxuICBhdHRyaWJ1dGVzLFxyXG4gIGNoaWxkcmVuLFxyXG4gIGVsZW1lbnQsXHJcbn0pID0+IHtcclxuICBzd2l0Y2ggKGVsZW1lbnQudHlwZSkge1xyXG4gICAgY2FzZSBMaW5rVHlwZTpcclxuICAgICAgaWYgKGlzU2FtZVBhZ2VVcmwoZWxlbWVudC51cmwpKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxSb3V0ZXJMaW5rIHsuLi5hdHRyaWJ1dGVzfSB0bz17Z2V0UGF0aG5hbWUoZWxlbWVudC51cmwpfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPC9Sb3V0ZXJMaW5rPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8YSB7Li4uYXR0cmlidXRlc30gaHJlZj17ZWxlbWVudC51cmx9PlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgKTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==