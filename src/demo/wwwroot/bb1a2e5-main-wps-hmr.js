webpackHotUpdate("main",{

/***/ "./src/lib/common/utils/urlUtil.ts":
/*!*****************************************!*\
  !*** ./src/lib/common/utils/urlUtil.ts ***!
  \*****************************************/
/*! exports provided: isSamePageUrl, isExternalUrl, getPathname */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSamePageUrl", function() { return isSamePageUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExternalUrl", function() { return isExternalUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPathname", function() { return getPathname; });
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var isSamePageUrl = function isSamePageUrl(urlStr) {
  return !isExternalUrl(urlStr);
};
var isExternalUrl = function isExternalUrl(urlStr) {
  try {
    var url = new URL(urlStr); // THROW ON MISSING SCHEME
    // DOES THIS URL ORIGINATE FROM THIS WEBSITE?

    if (url.origin !== new URL(document.URL, document.baseURI).origin) {
      return true; // IS EXTERNAL URL
    }
  } catch (_e) {
    // THROWS WHEN URL DOES NOT HAVE A SCHEME
    try {
      new URL(urlStr, document.baseURI); // THROW AN EXCEPTION IF THE URL IS TRULY MALFORMED IN SOME WAY
    } catch (_e) {}
  }

  return false;
};
var getPathname = function getPathname(urlStr) {
  return urlStr === null || urlStr === void 0 ? void 0 : urlStr.replace(document.location.origin, '');
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(isSamePageUrl, "isSamePageUrl", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\utils\\urlUtil.ts");
  reactHotLoader.register(isExternalUrl, "isExternalUrl", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\utils\\urlUtil.ts");
  reactHotLoader.register(getPathname, "getPathname", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\utils\\urlUtil.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbW1vbi91dGlscy91cmxVdGlsLnRzIl0sIm5hbWVzIjpbImlzU2FtZVBhZ2VVcmwiLCJ1cmxTdHIiLCJpc0V4dGVybmFsVXJsIiwidXJsIiwiVVJMIiwib3JpZ2luIiwiZG9jdW1lbnQiLCJiYXNlVVJJIiwiX2UiLCJnZXRQYXRobmFtZSIsInJlcGxhY2UiLCJsb2NhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLE1BQUQ7QUFBQSxTQUFvQixDQUFDQyxhQUFhLENBQUNELE1BQUQsQ0FBbEM7QUFBQSxDQUF0QjtBQUVBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0QsTUFBRCxFQUFvQjtBQUMvQyxNQUFJO0FBQ0YsUUFBTUUsR0FBRyxHQUFHLElBQUlDLEdBQUosQ0FBUUgsTUFBUixDQUFaLENBREUsQ0FDMkI7QUFFN0I7O0FBQ0EsUUFBSUUsR0FBRyxDQUFDRSxNQUFKLEtBQWUsSUFBSUQsR0FBSixDQUFRRSxRQUFRLENBQUNGLEdBQWpCLEVBQXNCRSxRQUFRLENBQUNDLE9BQS9CLEVBQXdDRixNQUEzRCxFQUFtRTtBQUNqRSxhQUFPLElBQVAsQ0FEaUUsQ0FDcEQ7QUFDZDtBQUNGLEdBUEQsQ0FPRSxPQUFPRyxFQUFQLEVBQVc7QUFDWDtBQUNBLFFBQUk7QUFDRixVQUFJSixHQUFKLENBQVFILE1BQVIsRUFBZ0JLLFFBQVEsQ0FBQ0MsT0FBekIsRUFERSxDQUNpQztBQUNwQyxLQUZELENBRUUsT0FBT0MsRUFBUCxFQUFXLENBQUU7QUFDaEI7O0FBRUQsU0FBTyxLQUFQO0FBQ0QsQ0FoQk07QUFrQkEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ1IsTUFBRDtBQUFBLFNBQ3pCQSxNQUR5QixhQUN6QkEsTUFEeUIsdUJBQ3pCQSxNQUFNLENBQUVTLE9BQVIsQ0FBZ0JKLFFBQVEsQ0FBQ0ssUUFBVCxDQUFrQk4sTUFBbEMsRUFBMEMsRUFBMUMsQ0FEeUI7QUFBQSxDQUFwQjs7Ozs7Ozs7OzswQkFwQk1MLGE7MEJBRUFFLGE7MEJBa0JBTyxXIiwiZmlsZSI6ImJiMWEyZTUtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGlzU2FtZVBhZ2VVcmwgPSAodXJsU3RyOiBzdHJpbmcpID0+ICFpc0V4dGVybmFsVXJsKHVybFN0cik7XG5cbmV4cG9ydCBjb25zdCBpc0V4dGVybmFsVXJsID0gKHVybFN0cjogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTCh1cmxTdHIpOyAvLyBUSFJPVyBPTiBNSVNTSU5HIFNDSEVNRVxuXG4gICAgLy8gRE9FUyBUSElTIFVSTCBPUklHSU5BVEUgRlJPTSBUSElTIFdFQlNJVEU/XG4gICAgaWYgKHVybC5vcmlnaW4gIT09IG5ldyBVUkwoZG9jdW1lbnQuVVJMLCBkb2N1bWVudC5iYXNlVVJJKS5vcmlnaW4pIHtcbiAgICAgIHJldHVybiB0cnVlOyAvLyBJUyBFWFRFUk5BTCBVUkxcbiAgICB9XG4gIH0gY2F0Y2ggKF9lKSB7XG4gICAgLy8gVEhST1dTIFdIRU4gVVJMIERPRVMgTk9UIEhBVkUgQSBTQ0hFTUVcbiAgICB0cnkge1xuICAgICAgbmV3IFVSTCh1cmxTdHIsIGRvY3VtZW50LmJhc2VVUkkpOyAvLyBUSFJPVyBBTiBFWENFUFRJT04gSUYgVEhFIFVSTCBJUyBUUlVMWSBNQUxGT1JNRUQgSU4gU09NRSBXQVlcbiAgICB9IGNhdGNoIChfZSkge31cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQYXRobmFtZSA9ICh1cmxTdHI6IHN0cmluZykgPT5cbiAgdXJsU3RyPy5yZXBsYWNlKGRvY3VtZW50LmxvY2F0aW9uLm9yaWdpbiwgJycpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==