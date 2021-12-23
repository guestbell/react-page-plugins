webpackHotUpdate("main",{

/***/ "./src/lib/image/Renderer/ImageHtmlRenderer.tsx":
/*!******************************************************!*\
  !*** ./src/lib/image/Renderer/ImageHtmlRenderer.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../common/styles */ "./src/lib/image/common/styles.ts");
/* harmony import */ var _react_page_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-page/editor */ "./node_modules/@react-page/editor/lib-es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _types_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/state */ "./src/lib/image/types/state.ts");
/* harmony import */ var _common_utils_PaddingComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/utils/PaddingComponent */ "./src/lib/common/utils/PaddingComponent.tsx");
/* harmony import */ var _common_utils_urlUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/utils/urlUtil */ "./src/lib/common/utils/urlUtil.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};









var ImageIcon = Object(_react_page_editor__WEBPACK_IMPORTED_MODULE_2__["lazyLoad"])(function () {
  return __webpack_require__.e(/*! import() */ 21).then(__webpack_require__.t.bind(null, /*! @material-ui/icons/Landscape */ "./node_modules/@material-ui/icons/Landscape.js", 7));
});

var ImageHtmlRenderer = function ImageHtmlRenderer(props) {
  var isEditMode = props.isEditMode,
      data = props.data;

  if (!data.image && !data.src) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "ory-plugins-content-image-placeholder"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ImageIcon, {
      style: _common_styles__WEBPACK_IMPORTED_MODULE_1__["iconStyle"]
    })));
  }

  var Image;
  var className = classnames__WEBPACK_IMPORTED_MODULE_3___default()('ory-plugins-content-image', {
    'ory-plugins-content-image--fw': data.constraintMode === undefined || data.constraintMode === _types_state__WEBPACK_IMPORTED_MODULE_4__["ImageConstraintMode"].FullWidth,
    'ory-plugins-content-image--small-height': data.constraintMode === _types_state__WEBPACK_IMPORTED_MODULE_4__["ImageConstraintMode"].SmallHeight,
    'ory-plugins-content-image--medium-height': data.constraintMode === _types_state__WEBPACK_IMPORTED_MODULE_4__["ImageConstraintMode"].MediumHeight,
    'ory-plugins-content-image--big-height': data.constraintMode === _types_state__WEBPACK_IMPORTED_MODULE_4__["ImageConstraintMode"].BigHeight
  });

  if (data.image) {
    Image = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
      className: className,
      src: data.image.src,
      srcSet: data.image.srcSet
    });
  } else {
    Image = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
      className: className,
      src: data.src,
      srcSet: data.srcSet
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_utils_PaddingComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
    state: props.data
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "ory-plugins-content-image__container"
  }, data.href && !isEditMode ? Object(_common_utils_urlUtil__WEBPACK_IMPORTED_MODULE_6__["isSamePageUrl"])(data.href) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
    to: data.href
  }, Image) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: data.href
  }, Image) : Image));
};

var _default = ImageHtmlRenderer;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ImageIcon, "ImageIcon", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\image\\Renderer\\ImageHtmlRenderer.tsx");
  reactHotLoader.register(ImageHtmlRenderer, "ImageHtmlRenderer", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\image\\Renderer\\ImageHtmlRenderer.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\image\\Renderer\\ImageHtmlRenderer.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2ltYWdlL1JlbmRlcmVyL0ltYWdlSHRtbFJlbmRlcmVyLnRzeCJdLCJuYW1lcyI6WyJJbWFnZUljb24iLCJsYXp5TG9hZCIsIkltYWdlSHRtbFJlbmRlcmVyIiwicHJvcHMiLCJpc0VkaXRNb2RlIiwiZGF0YSIsImltYWdlIiwic3JjIiwiaWNvblN0eWxlIiwiSW1hZ2UiLCJjbGFzc05hbWUiLCJjbGFzc05hbWVzIiwiY29uc3RyYWludE1vZGUiLCJ1bmRlZmluZWQiLCJJbWFnZUNvbnN0cmFpbnRNb2RlIiwiRnVsbFdpZHRoIiwiU21hbGxIZWlnaHQiLCJNZWRpdW1IZWlnaHQiLCJCaWdIZWlnaHQiLCJzcmNTZXQiLCJocmVmIiwiaXNTYW1lUGFnZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsbUVBQVEsQ0FBQztBQUFBLFNBQU0seUtBQU47QUFBQSxDQUFELENBQTFCOztBQUVBLElBQU1DLGlCQUErQyxHQUFHLFNBQWxEQSxpQkFBa0QsQ0FBQUMsS0FBSyxFQUFJO0FBQy9ELE1BQVFDLFVBQVIsR0FBNkJELEtBQTdCLENBQVFDLFVBQVI7QUFBQSxNQUFvQkMsSUFBcEIsR0FBNkJGLEtBQTdCLENBQW9CRSxJQUFwQjs7QUFDQSxNQUFJLENBQUNBLElBQUksQ0FBQ0MsS0FBTixJQUFlLENBQUNELElBQUksQ0FBQ0UsR0FBekIsRUFBOEI7QUFDNUIsd0JBQ0UsOEVBQ0U7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDRSxvREFBQyxTQUFEO0FBQVcsV0FBSyxFQUFFQyx3REFBU0E7QUFBM0IsTUFERixDQURGLENBREY7QUFPRDs7QUFDRCxNQUFJQyxLQUFKO0FBQ0EsTUFBTUMsU0FBUyxHQUFHQyxpREFBVSxDQUFDLDJCQUFELEVBQThCO0FBQ3hELHFDQUNFTixJQUFJLENBQUNPLGNBQUwsS0FBd0JDLFNBQXhCLElBQ0FSLElBQUksQ0FBQ08sY0FBTCxLQUF3QkUsZ0VBQW1CLENBQUNDLFNBSFU7QUFJeEQsK0NBQ0VWLElBQUksQ0FBQ08sY0FBTCxLQUF3QkUsZ0VBQW1CLENBQUNFLFdBTFU7QUFNeEQsZ0RBQ0VYLElBQUksQ0FBQ08sY0FBTCxLQUF3QkUsZ0VBQW1CLENBQUNHLFlBUFU7QUFReEQsNkNBQ0VaLElBQUksQ0FBQ08sY0FBTCxLQUF3QkUsZ0VBQW1CLENBQUNJO0FBVFUsR0FBOUIsQ0FBNUI7O0FBV0EsTUFBSWIsSUFBSSxDQUFDQyxLQUFULEVBQWdCO0FBQ2RHLFNBQUssZ0JBQ0g7QUFDRSxlQUFTLEVBQUVDLFNBRGI7QUFFRSxTQUFHLEVBQUVMLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxHQUZsQjtBQUdFLFlBQU0sRUFBRUYsSUFBSSxDQUFDQyxLQUFMLENBQVdhO0FBSHJCLE1BREY7QUFPRCxHQVJELE1BUU87QUFDTFYsU0FBSyxnQkFBRztBQUFLLGVBQVMsRUFBRUMsU0FBaEI7QUFBMkIsU0FBRyxFQUFFTCxJQUFJLENBQUNFLEdBQXJDO0FBQTBDLFlBQU0sRUFBRUYsSUFBSSxDQUFDYztBQUF2RCxNQUFSO0FBQ0Q7O0FBQ0Qsc0JBQ0Usb0RBQUMsc0VBQUQ7QUFBa0IsU0FBSyxFQUFFaEIsS0FBSyxDQUFDRTtBQUEvQixrQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0dBLElBQUksQ0FBQ2UsSUFBTCxJQUFhLENBQUNoQixVQUFkLEdBQ0NpQiwyRUFBYSxDQUFDaEIsSUFBSSxDQUFDZSxJQUFOLENBQWIsZ0JBQ0Usb0RBQUMscURBQUQ7QUFBTSxNQUFFLEVBQUVmLElBQUksQ0FBQ2U7QUFBZixLQUFzQlgsS0FBdEIsQ0FERixnQkFHRTtBQUFHLFFBQUksRUFBRUosSUFBSSxDQUFDZTtBQUFkLEtBQXFCWCxLQUFyQixDQUpILEdBT0NBLEtBUkosQ0FERixDQURGO0FBZUQsQ0FqREQ7O2VBbURlUCxpQjtBQUFBOzs7Ozs7Ozs7OzBCQXJEVEYsUzswQkFFQUUsaUIiLCJmaWxlIjoiYmIxYTJlNS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEltYWdlUmVuZGVyZXJQcm9wcyB9IGZyb20gJy4uL3R5cGVzL3JlbmRlcmVyJztcclxuaW1wb3J0IHsgaWNvblN0eWxlIH0gZnJvbSAnLi8uLi9jb21tb24vc3R5bGVzJztcclxuaW1wb3J0IHsgbGF6eUxvYWQgfSBmcm9tICdAcmVhY3QtcGFnZS9lZGl0b3InO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgSW1hZ2VDb25zdHJhaW50TW9kZSB9IGZyb20gJy4uL3R5cGVzL3N0YXRlJztcclxuaW1wb3J0IFBhZGRpbmdDb21wb25lbnQgZnJvbSAnLi4vLi4vY29tbW9uL3V0aWxzL1BhZGRpbmdDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBpc1NhbWVQYWdlVXJsIH0gZnJvbSAnLi4vLi4vY29tbW9uL3V0aWxzL3VybFV0aWwnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBJbWFnZUljb24gPSBsYXp5TG9hZCgoKSA9PiBpbXBvcnQoJ0BtYXRlcmlhbC11aS9pY29ucy9MYW5kc2NhcGUnKSk7XHJcblxyXG5jb25zdCBJbWFnZUh0bWxSZW5kZXJlcjogUmVhY3QuRkM8SW1hZ2VSZW5kZXJlclByb3BzPiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGlzRWRpdE1vZGUsIGRhdGEgfSA9IHByb3BzO1xyXG4gIGlmICghZGF0YS5pbWFnZSAmJiAhZGF0YS5zcmMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcnktcGx1Z2lucy1jb250ZW50LWltYWdlLXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICA8SW1hZ2VJY29uIHN0eWxlPXtpY29uU3R5bGV9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbiAgbGV0IEltYWdlOiBKU1guRWxlbWVudDtcclxuICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVzKCdvcnktcGx1Z2lucy1jb250ZW50LWltYWdlJywge1xyXG4gICAgJ29yeS1wbHVnaW5zLWNvbnRlbnQtaW1hZ2UtLWZ3JzpcclxuICAgICAgZGF0YS5jb25zdHJhaW50TW9kZSA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgIGRhdGEuY29uc3RyYWludE1vZGUgPT09IEltYWdlQ29uc3RyYWludE1vZGUuRnVsbFdpZHRoLFxyXG4gICAgJ29yeS1wbHVnaW5zLWNvbnRlbnQtaW1hZ2UtLXNtYWxsLWhlaWdodCc6XHJcbiAgICAgIGRhdGEuY29uc3RyYWludE1vZGUgPT09IEltYWdlQ29uc3RyYWludE1vZGUuU21hbGxIZWlnaHQsXHJcbiAgICAnb3J5LXBsdWdpbnMtY29udGVudC1pbWFnZS0tbWVkaXVtLWhlaWdodCc6XHJcbiAgICAgIGRhdGEuY29uc3RyYWludE1vZGUgPT09IEltYWdlQ29uc3RyYWludE1vZGUuTWVkaXVtSGVpZ2h0LFxyXG4gICAgJ29yeS1wbHVnaW5zLWNvbnRlbnQtaW1hZ2UtLWJpZy1oZWlnaHQnOlxyXG4gICAgICBkYXRhLmNvbnN0cmFpbnRNb2RlID09PSBJbWFnZUNvbnN0cmFpbnRNb2RlLkJpZ0hlaWdodCxcclxuICB9KTtcclxuICBpZiAoZGF0YS5pbWFnZSkge1xyXG4gICAgSW1hZ2UgPSAoXHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgICBzcmM9e2RhdGEuaW1hZ2Uuc3JjfVxyXG4gICAgICAgIHNyY1NldD17ZGF0YS5pbWFnZS5zcmNTZXR9XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBJbWFnZSA9IDxpbWcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHNyYz17ZGF0YS5zcmN9IHNyY1NldD17ZGF0YS5zcmNTZXR9IC8+O1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPFBhZGRpbmdDb21wb25lbnQgc3RhdGU9e3Byb3BzLmRhdGF9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yeS1wbHVnaW5zLWNvbnRlbnQtaW1hZ2VfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgIHtkYXRhLmhyZWYgJiYgIWlzRWRpdE1vZGUgPyAoXHJcbiAgICAgICAgICBpc1NhbWVQYWdlVXJsKGRhdGEuaHJlZikgPyAoXHJcbiAgICAgICAgICAgIDxMaW5rIHRvPXtkYXRhLmhyZWZ9PntJbWFnZX08L0xpbms+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8YSBocmVmPXtkYXRhLmhyZWZ9PntJbWFnZX08L2E+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIEltYWdlXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1BhZGRpbmdDb21wb25lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlSHRtbFJlbmRlcmVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9