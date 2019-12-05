webpackHotUpdate(38,{

/***/ "./src/lib/common/components/imageOrSrc/ImageOrSrc.tsx":
/*!*************************************************************!*\
  !*** ./src/lib/common/components/imageOrSrc/ImageOrSrc.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles_createStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles/createStyles */ "./node_modules/@material-ui/styles/esm/createStyles/index.js");
/* harmony import */ var _material_ui_styles_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles/withStyles */ "./node_modules/@material-ui/styles/esm/withStyles/index.js");
/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Create */ "./node_modules/@material-ui/icons/Create.js");
/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Image */ "./node_modules/@material-ui/icons/Image.js");
/* harmony import */ var _material_ui_icons_Image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var guestbell_forms_build_components_text_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! guestbell-forms/build/components/text/Text */ "./node_modules/guestbell-forms/build/components/text/Text.js");
/* harmony import */ var guestbell_forms_build_components_text_Text__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(guestbell_forms_build_components_text_Text__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Warning */ "./node_modules/@material-ui/icons/Warning.js");
/* harmony import */ var _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/colors/yellow */ "./node_modules/@material-ui/core/colors/yellow.js");
/* harmony import */ var _material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var guestbell_forms_build_components_button_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! guestbell-forms/build/components/button/Button */ "./node_modules/guestbell-forms/build/components/button/Button.js");
/* harmony import */ var guestbell_forms_build_components_button_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(guestbell_forms_build_components_button_Button__WEBPACK_IMPORTED_MODULE_8__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};











var styles = function styles(_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing;
  return Object(_material_ui_styles_createStyles__WEBPACK_IMPORTED_MODULE_1__["default"])({
    root: {
      position: 'relative'
    },
    switchImageButton: {
      // tslint:disable-next-line: no-any
      position: 'absolute !important',
      right: -spacing(2),
      top: '50%',
      transform: 'translateY(-50%)',
      color: palette.action.active + ' !important'
    },
    warningContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: spacing(2),
      backgroundColor: _material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_7___default.a[300]
    }
  });
};

var ImageTabEnum;

(function (ImageTabEnum) {
  ImageTabEnum[ImageTabEnum["ImageUploadButton"] = 0] = "ImageUploadButton";
  ImageTabEnum[ImageTabEnum["ImageSrc"] = 1] = "ImageSrc";
})(ImageTabEnum || (ImageTabEnum = {}));

var ImageOrSrc = function ImageOrSrc(props) {
  var _ImageTabEnum$ImageUp, _ImageTabEnum$ImageUp2;

  var classes = props.classes,
      _onChange = props.onChange;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](ImageTabEnum.ImageUploadButton),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      imageTab = _React$useState2[0],
      setImageTab = _React$useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classes.root
  }, (_ImageTabEnum$ImageUp = {}, _defineProperty(_ImageTabEnum$ImageUp, ImageTabEnum.ImageUploadButton, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](props.UploadImageField, {
    label: "Choose image",
    className: "d-flex",
    onChange: function onChange(imageId, image) {
      return _onChange({
        imageId: imageId,
        image: image
      });
    },
    imageId: props.state.imageId,
    existingImage: props.state.image,
    chooseImageButtonProps: {
      className: 'ory-prevent-blur'
    },
    uploadImageButtonProps: {
      className: 'ory-prevent-blur'
    }
  })), _defineProperty(_ImageTabEnum$ImageUp, ImageTabEnum.ImageSrc, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classes.warningContainer
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      color: _material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_7___default.a[700]
    }
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Using externally hosted images is unsafe. Consider uploading your content to GusteBell instead.")), !props.hideSrcField && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](guestbell_forms_build_components_text_Text__WEBPACK_IMPORTED_MODULE_5___default.a, {
    label: "Url",
    value: props.state.src,
    onChange: function onChange(e) {
      return props.onChange({
        src: e.target.value
      });
    }
  }), !props.hideSrcSetField && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](guestbell_forms_build_components_text_Text__WEBPACK_IMPORTED_MODULE_5___default.a, {
    tooltip: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
      href: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images",
      target: "_blank"
    }, "Learn more about srcset"),
    label: "Html srcset",
    value: props.state.srcSet,
    onChange: function onChange(e) {
      return props.onChange({
        srcSet: e.target.value
      });
    }
  }))), _ImageTabEnum$ImageUp)[imageTab], react__WEBPACK_IMPORTED_MODULE_0__["createElement"](guestbell_forms_build_components_button_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
    circular: true,
    noShadow: true,
    onClick: function onClick(e) {
      e.preventDefault();
      setImageTab(imageTab === ImageTabEnum.ImageSrc ? ImageTabEnum.ImageUploadButton : ImageTabEnum.ImageSrc);
    },
    className: classes.switchImageButton
  }, (_ImageTabEnum$ImageUp2 = {}, _defineProperty(_ImageTabEnum$ImageUp2, ImageTabEnum.ImageUploadButton, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_3___default.a, null)), _defineProperty(_ImageTabEnum$ImageUp2, ImageTabEnum.ImageSrc, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons_Image__WEBPACK_IMPORTED_MODULE_4___default.a, null)), _ImageTabEnum$ImageUp2)[imageTab]));
};

__signature__(ImageOrSrc, "useState{[imageTab, setImageTab](ImageTabEnum.ImageUploadButton)}");

var _default = Object(_material_ui_styles_withStyles__WEBPACK_IMPORTED_MODULE_2__["default"])(styles)(ImageOrSrc);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\imageOrSrc\\ImageOrSrc.tsx");
  reactHotLoader.register(ImageOrSrc, "ImageOrSrc", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\imageOrSrc\\ImageOrSrc.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\imageOrSrc\\ImageOrSrc.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbW1vbi9jb21wb25lbnRzL2ltYWdlT3JTcmMvSW1hZ2VPclNyYy50c3giXSwibmFtZXMiOlsic3R5bGVzIiwicGFsZXR0ZSIsInNwYWNpbmciLCJjcmVhdGVTdHlsZXMiLCJyb290IiwicG9zaXRpb24iLCJzd2l0Y2hJbWFnZUJ1dHRvbiIsInJpZ2h0IiwidG9wIiwidHJhbnNmb3JtIiwiY29sb3IiLCJhY3Rpb24iLCJhY3RpdmUiLCJ3YXJuaW5nQ29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsInllbGxvdyIsIkltYWdlVGFiRW51bSIsIkltYWdlT3JTcmMiLCJwcm9wcyIsImNsYXNzZXMiLCJvbkNoYW5nZSIsIlJlYWN0IiwiSW1hZ2VVcGxvYWRCdXR0b24iLCJpbWFnZVRhYiIsInNldEltYWdlVGFiIiwiaW1hZ2VJZCIsImltYWdlIiwic3RhdGUiLCJjbGFzc05hbWUiLCJJbWFnZVNyYyIsImhpZGVTcmNGaWVsZCIsInNyYyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhpZGVTcmNTZXRGaWVsZCIsInNyY1NldCIsInByZXZlbnREZWZhdWx0Iiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFpQkEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxNQUFHQyxPQUFILFFBQUdBLE9BQUg7QUFBQSxNQUFZQyxPQUFaLFFBQVlBLE9BQVo7QUFBQSxTQUNiQyxnRkFBWSxDQUFDO0FBQ1hDLFFBQUksRUFBRTtBQUNKQyxjQUFRLEVBQUU7QUFETixLQURLO0FBSVhDLHFCQUFpQixFQUFFO0FBQ2pCO0FBQ0FELGNBQVEsRUFBRSxxQkFGTztBQUdqQkUsV0FB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SiwwQkFpREVYLFFBakRGLENBRkosRUFxREUsb0RBQUMscUZBQUQ7QUFDRSxZQUFRLEVBQUUsSUFEWjtBQUVFLFlBQVEsRUFBRSxJQUZaO0FBR0UsV0FBTyxFQUFFLGlCQUFBUyxDQUFDLEVBQUk7QUFDWkEsT0FBQyxDQUFDSyxjQUFGO0FBQ0FiLGlCQUFXLENBQ1RELFFBQVEsS0FBS1AsWUFBWSxDQUFDYSxRQUExQixHQUNJYixZQUFZLENBQUNNLGlCQURqQixHQUVJTixZQUFZLENBQUNhLFFBSFIsQ0FBWDtBQUtELEtBVkg7QUFXRSxhQUFTLEVBQUVWLE9BQU8sQ0FBQ2pCO0FBWHJCLEtBY0ksc0VBQ0djLFlBQVksQ0FBQ00saUJBRGhCLEVBQ29DLG9EQUFDLGdFQUFELE9BRHBDLDJDQUVHTixZQUFZLENBQUNhLFFBRmhCLEVBRTJCLG9EQUFDLCtEQUFELE9BRjNCLDJCQUdFTixRQUhGLENBZEosQ0FyREYsQ0FERjtBQTRFRCxDQWpGRDs7Y0FBTU4sVTs7ZUFtRlNxQiw4RUFBVSxDQUFDMUMsTUFBRCxDQUFWLENBQW1CcUIsVUFBbkIsQzs7QUFBQTs7Ozs7Ozs7OzswQkFoSFRyQixNOzBCQTZCQXFCLFUiLCJmaWxlIjoiNTQzYmI0OC0zOC13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY3JlYXRlU3R5bGVzIGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMvY3JlYXRlU3R5bGVzJztcclxuaW1wb3J0IHdpdGhTdHlsZXMsIHsgV2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMvd2l0aFN0eWxlcyc7XHJcbmltcG9ydCBDcmVhdGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DcmVhdGUnO1xyXG5pbXBvcnQgSW1hZ2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9JbWFnZSc7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBVcGxvYWRJbWFnZUZpZWxkIH0gZnJvbSAnLi4vdXBsb2FkSW1hZ2VGaWVsZC9VcGxvYWRJbWFnZUZpZWxkJztcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICcuLi8uLi90eXBlcy9pbWFnZS9JbWFnZSc7XHJcbmltcG9ydCBUZXh0IGZyb20gJ2d1ZXN0YmVsbC1mb3Jtcy9idWlsZC9jb21wb25lbnRzL3RleHQvVGV4dCc7XHJcbmltcG9ydCBXYXJuaW5nSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvV2FybmluZyc7XHJcbmltcG9ydCB5ZWxsb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3llbGxvdyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnZ3Vlc3RiZWxsLWZvcm1zL2J1aWxkL2NvbXBvbmVudHMvYnV0dG9uL0J1dHRvbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlT3JTcmNPcnlTdGF0ZSB7XHJcbiAgaW1hZ2VJZD86IG51bWJlcjtcclxuICBpbWFnZT86IEltYWdlO1xyXG4gIHNyYz86IHN0cmluZztcclxuICBzcmNTZXQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VPclNyY0N1c3RvbVByb3BzIHtcclxuICBVcGxvYWRJbWFnZUZpZWxkOiBVcGxvYWRJbWFnZUZpZWxkO1xyXG4gIHN0YXRlOiBJbWFnZU9yU3JjT3J5U3RhdGU7XHJcbiAgb25DaGFuZ2U6IChzdGF0ZTogUGFydGlhbDxJbWFnZU9yU3JjT3J5U3RhdGU+KSA9PiB2b2lkO1xyXG4gIGhpZGVTcmNGaWVsZD86IGJvb2xlYW47XHJcbiAgaGlkZVNyY1NldEZpZWxkPzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0gKHsgcGFsZXR0ZSwgc3BhY2luZyB9OiBUaGVtZSkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIH0sXHJcbiAgICBzd2l0Y2hJbWFnZUJ1dHRvbjoge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueVxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlICFpbXBvcnRhbnQnIGFzIGFueSxcclxuICAgICAgcmlnaHQ6IC1zcGFjaW5nKDIpLFxyXG4gICAgICB0b3A6ICc1MCUnLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcclxuICAgICAgY29sb3I6IHBhbGV0dGUuYWN0aW9uLmFjdGl2ZSArICcgIWltcG9ydGFudCcsXHJcbiAgICB9LFxyXG4gICAgd2FybmluZ0NvbnRhaW5lcjoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgcGFkZGluZzogc3BhY2luZygyKSxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB5ZWxsb3dbMzAwXSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG5leHBvcnQgdHlwZSBJbWFnZU9yU3JjUHJvcHMgPSBJbWFnZU9yU3JjQ3VzdG9tUHJvcHMgJiBXaXRoU3R5bGVzPHR5cGVvZiBzdHlsZXM+O1xyXG5cclxuZW51bSBJbWFnZVRhYkVudW0ge1xyXG4gIEltYWdlVXBsb2FkQnV0dG9uID0gMCxcclxuICBJbWFnZVNyYyA9IDEsXHJcbn1cclxuXHJcbmNvbnN0IEltYWdlT3JTcmM6IFJlYWN0LlNGQzxJbWFnZU9yU3JjUHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgY2xhc3Nlcywgb25DaGFuZ2UgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtpbWFnZVRhYiwgc2V0SW1hZ2VUYWJdID0gUmVhY3QudXNlU3RhdGU8SW1hZ2VUYWJFbnVtPihcclxuICAgIEltYWdlVGFiRW51bS5JbWFnZVVwbG9hZEJ1dHRvblxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICB7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgW0ltYWdlVGFiRW51bS5JbWFnZVVwbG9hZEJ1dHRvbl06IChcclxuICAgICAgICAgICAgPHByb3BzLlVwbG9hZEltYWdlRmllbGRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkNob29zZSBpbWFnZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4XCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGltYWdlSWQsIGltYWdlKSA9PiBvbkNoYW5nZSh7IGltYWdlSWQsIGltYWdlIH0pfVxyXG4gICAgICAgICAgICAgIGltYWdlSWQ9e3Byb3BzLnN0YXRlLmltYWdlSWR9XHJcbiAgICAgICAgICAgICAgZXhpc3RpbmdJbWFnZT17cHJvcHMuc3RhdGUuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgY2hvb3NlSW1hZ2VCdXR0b25Qcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnb3J5LXByZXZlbnQtYmx1cicsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICB1cGxvYWRJbWFnZUJ1dHRvblByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdvcnktcHJldmVudC1ibHVyJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIFtJbWFnZVRhYkVudW0uSW1hZ2VTcmNdOiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud2FybmluZ0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8V2FybmluZ0ljb24gc3R5bGU9e3sgY29sb3I6IHllbGxvd1s3MDBdIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgVXNpbmcgZXh0ZXJuYWxseSBob3N0ZWQgaW1hZ2VzIGlzIHVuc2FmZS4gQ29uc2lkZXIgdXBsb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgIHlvdXIgY29udGVudCB0byBHdXN0ZUJlbGwgaW5zdGVhZC5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7IXByb3BzLmhpZGVTcmNGaWVsZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlVybFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5zdGF0ZS5zcmN9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHByb3BzLm9uQ2hhbmdlKHsgc3JjOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7IXByb3BzLmhpZGVTcmNTZXRGaWVsZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICB0b29sdGlwPXtcclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvTGVhcm4vSFRNTC9NdWx0aW1lZGlhX2FuZF9lbWJlZGRpbmcvUmVzcG9uc2l2ZV9pbWFnZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBMZWFybiBtb3JlIGFib3V0IHNyY3NldFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkh0bWwgc3Jjc2V0XCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnN0YXRlLnNyY1NldH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gcHJvcHMub25DaGFuZ2UoeyBzcmNTZXQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICksXHJcbiAgICAgICAgfVtpbWFnZVRhYl1cclxuICAgICAgfVxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgY2lyY3VsYXI9e3RydWV9XHJcbiAgICAgICAgbm9TaGFkb3c9e3RydWV9XHJcbiAgICAgICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBzZXRJbWFnZVRhYihcclxuICAgICAgICAgICAgaW1hZ2VUYWIgPT09IEltYWdlVGFiRW51bS5JbWFnZVNyY1xyXG4gICAgICAgICAgICAgID8gSW1hZ2VUYWJFbnVtLkltYWdlVXBsb2FkQnV0dG9uXHJcbiAgICAgICAgICAgICAgOiBJbWFnZVRhYkVudW0uSW1hZ2VTcmNcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3dpdGNoSW1hZ2VCdXR0b259XHJcbiAgICAgID5cclxuICAgICAgICB7XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFtJbWFnZVRhYkVudW0uSW1hZ2VVcGxvYWRCdXR0b25dOiA8Q3JlYXRlSWNvbiAvPixcclxuICAgICAgICAgICAgW0ltYWdlVGFiRW51bS5JbWFnZVNyY106IDxJbWFnZUljb24gLz4sXHJcbiAgICAgICAgICB9W2ltYWdlVGFiXVxyXG4gICAgICAgIH1cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEltYWdlT3JTcmMpIGFzIFJlYWN0LkNvbXBvbmVudFR5cGU8XHJcbiAgSW1hZ2VPclNyY0N1c3RvbVByb3BzXHJcbj47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=