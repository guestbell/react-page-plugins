webpackHotUpdate(9,{

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
/* harmony import */ var _mui_icons_material_Create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/icons-material/Create */ "./node_modules/@mui/icons-material/Create.js");
/* harmony import */ var _mui_icons_material_Create__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Create__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Image */ "./node_modules/@mui/icons-material/Image.js");
/* harmony import */ var _mui_icons_material_Image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var guestbell_forms_build_components_text_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! guestbell-forms/build/components/text/Text */ "./node_modules/guestbell-forms/build/components/text/Text.js");
/* harmony import */ var guestbell_forms_build_components_text_Text__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(guestbell_forms_build_components_text_Text__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Warning */ "./node_modules/@mui/icons-material/Warning.js");
/* harmony import */ var _mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var guestbell_forms_build_components_button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! guestbell-forms/build/components/button/Button */ "./node_modules/guestbell-forms/build/components/button/Button.js");
/* harmony import */ var guestbell_forms_build_components_button_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(guestbell_forms_build_components_button_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/index.js");
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/colors */ "./node_modules/@mui/material/colors/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};









var useStyles = Object(_mui_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing;
  return {
    root: {
      position: 'relative',
      paddingRight: '1.5rem'
    },
    switchImageButton: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      position: 'absolute !important',
      right: spacing(-1),
      top: '50%',
      transform: 'translateY(-50%)',
      color: palette.action.active + ' !important'
    },
    warningContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: spacing(2),
      backgroundColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_7__["yellow"][300],
      marginBottom: spacing(2)
    }
  };
});
var ImageTabEnum;

(function (ImageTabEnum) {
  ImageTabEnum[ImageTabEnum["ImageUploadButton"] = 0] = "ImageUploadButton";
  ImageTabEnum[ImageTabEnum["ImageSrc"] = 1] = "ImageSrc";
})(ImageTabEnum || (ImageTabEnum = {}));

var ImageOrSrc = function ImageOrSrc(props) {
  var _ImageTabEnum$ImageUp, _ImageTabEnum$ImageUp2;

  var _onChange = props.onChange;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](ImageTabEnum.ImageUploadButton),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      imageTab = _React$useState2[0],
      setImageTab = _React$useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classes.root
  }, (_ImageTabEnum$ImageUp = {}, _defineProperty(_ImageTabEnum$ImageUp, ImageTabEnum.ImageUploadButton, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](props.UploadImageField, {
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
  })), _defineProperty(_ImageTabEnum$ImageUp, ImageTabEnum.ImageSrc, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classes.warningContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      color: _mui_material_colors__WEBPACK_IMPORTED_MODULE_7__["yellow"][700]
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Using externally hosted images is unsafe. Consider uploading your content to GusteBell instead.")), !props.hideSrcField && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](guestbell_forms_build_components_text_Text__WEBPACK_IMPORTED_MODULE_3___default.a, {
    label: "Url",
    value: props.state.src,
    onChange: function onChange(e) {
      return props.onChange({
        src: e.target.value
      });
    }
  }), !props.hideSrcSetField && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](guestbell_forms_build_components_text_Text__WEBPACK_IMPORTED_MODULE_3___default.a, {
    tooltip: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
      href: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images",
      target: "_blank",
      rel: "noreferrer"
    }, "Learn more about srcset"),
    label: "Html srcset",
    value: props.state.srcSet,
    onChange: function onChange(e) {
      return props.onChange({
        srcSet: e.target.value
      });
    }
  }))), _ImageTabEnum$ImageUp)[imageTab], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](guestbell_forms_build_components_button_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    circular: true,
    noShadow: true,
    onClick: function onClick(e) {
      e.preventDefault();
      setImageTab(imageTab === ImageTabEnum.ImageSrc ? ImageTabEnum.ImageUploadButton : ImageTabEnum.ImageSrc);
    },
    className: classes.switchImageButton
  }, (_ImageTabEnum$ImageUp2 = {}, _defineProperty(_ImageTabEnum$ImageUp2, ImageTabEnum.ImageUploadButton, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_icons_material_Create__WEBPACK_IMPORTED_MODULE_1___default.a, null)), _defineProperty(_ImageTabEnum$ImageUp2, ImageTabEnum.ImageSrc, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_icons_material_Image__WEBPACK_IMPORTED_MODULE_2___default.a, null)), _ImageTabEnum$ImageUp2)[imageTab]));
};

__signature__(ImageOrSrc, "useStyles{classes}\nuseState{[imageTab, setImageTab](ImageTabEnum.ImageUploadButton)}", function () {
  return [useStyles];
});

var _default = ImageOrSrc;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useStyles, "useStyles", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\imageOrSrc\\ImageOrSrc.tsx");
  reactHotLoader.register(ImageOrSrc, "ImageOrSrc", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\imageOrSrc\\ImageOrSrc.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\imageOrSrc\\ImageOrSrc.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbW1vbi9jb21wb25lbnRzL2ltYWdlT3JTcmMvSW1hZ2VPclNyYy50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInBhbGV0dGUiLCJzcGFjaW5nIiwicm9vdCIsInBvc2l0aW9uIiwicGFkZGluZ1JpZ2h0Iiwic3dpdGNoSW1hZ2VCdXR0b24iLCJyaWdodCIsInRvcCIsInRyYW5zZm9ybSIsImNvbG9yIiwiYWN0aW9uIiwiYWN0aXZlIiwid2FybmluZ0NvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJ5ZWxsb3ciLCJtYXJnaW5Cb3R0b20iLCJJbWFnZVRhYkVudW0iLCJJbWFnZU9yU3JjIiwicHJvcHMiLCJvbkNoYW5nZSIsImNsYXNzZXMiLCJSZWFjdCIsIkltYWdlVXBsb2FkQnV0dG9uIiwiaW1hZ2VUYWIiLCJzZXRJbWFnZVRhYiIsImltYWdlSWQiLCJpbWFnZSIsInN0YXRlIiwiY2xhc3NOYW1lIiwiSW1hZ2VTcmMiLCJoaWRlU3JjRmllbGQiLCJzcmMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoaWRlU3JjU2V0RmllbGQiLCJzcmNTZXQiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWlCQSxJQUFNQSxTQUFTLEdBQUdDLDhEQUFVLENBQUM7QUFBQSxNQUFHQyxPQUFILFFBQUdBLE9BQUg7QUFBQSxNQUFZQyxPQUFaLFFBQVlBLE9BQVo7QUFBQSxTQUFrQztBQUM3REMsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRSxVQUROO0FBRUpDLGtCQUFZLEVBQUU7QUFGVixLQUR1RDtBQUs3REMscUJBQWlCLEVBQUU7QUFDakI7QUFD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TixDQUFlO0FBQUVpQixjQUFNLEVBQUVKLENBQUMsQ0FBQ0MsTUFBRixDQUFTQztBQUFuQixPQUFmLENBQUo7QUFBQTtBQVpiLElBaEJKLENBakJKLDBCQWtERVgsUUFsREYsQ0FGSixlQXNERSxvREFBQyxxRkFBRDtBQUNFLFlBQVEsRUFBRSxJQURaO0FBRUUsWUFBUSxFQUFFLElBRlo7QUFHRSxXQUFPLEVBQUUsaUJBQUFTLENBQUMsRUFBSTtBQUNaQSxPQUFDLENBQUNLLGNBQUY7QUFDQWIsaUJBQVcsQ0FDVEQsUUFBUSxLQUFLUCxZQUFZLENBQUNhLFFBQTFCLEdBQ0liLFlBQVksQ0FBQ00saUJBRGpCLEdBRUlOLFlBQVksQ0FBQ2EsUUFIUixDQUFYO0FBS0QsS0FWSDtBQVdFLGFBQVMsRUFBRVQsT0FBTyxDQUFDbkI7QUFYckIsS0FjSSxzRUFDR2UsWUFBWSxDQUFDTSxpQkFEaEIsZUFDb0Msb0RBQUMsaUVBQUQsT0FEcEMsMkNBRUdOLFlBQVksQ0FBQ2EsUUFGaEIsZUFFMkIsb0RBQUMsZ0VBQUQsT0FGM0IsMkJBR0VOLFFBSEYsQ0FkSixDQXRERixDQURGO0FBNkVELENBbkZEOztjQUFNTixVO1VBRVl2QixTOzs7ZUFtRkh1QixVO0FBQUE7Ozs7Ozs7Ozs7MEJBbkhUdkIsUzswQkE4QkF1QixVIiwiZmlsZSI6IjEyYTVhY2ItOS13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ3JlYXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NyZWF0ZSc7XHJcbmltcG9ydCBJbWFnZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9JbWFnZSc7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xyXG5pbXBvcnQgeyBVcGxvYWRJbWFnZUZpZWxkIH0gZnJvbSAnLi4vdXBsb2FkSW1hZ2VGaWVsZC9VcGxvYWRJbWFnZUZpZWxkJztcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICcuLi8uLi90eXBlcy9pbWFnZS9JbWFnZSc7XHJcbmltcG9ydCBUZXh0IGZyb20gJ2d1ZXN0YmVsbC1mb3Jtcy9idWlsZC9jb21wb25lbnRzL3RleHQvVGV4dCc7XHJcbmltcG9ydCBXYXJuaW5nSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1dhcm5pbmcnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ2d1ZXN0YmVsbC1mb3Jtcy9idWlsZC9jb21wb25lbnRzL2J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG11aS9zdHlsZXMnO1xyXG5pbXBvcnQgeyB5ZWxsb3cgfSBmcm9tICdAbXVpL21hdGVyaWFsL2NvbG9ycyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlT3JTcmNPcnlTdGF0ZSB7XHJcbiAgaW1hZ2VJZD86IG51bWJlcjtcclxuICBpbWFnZT86IEltYWdlO1xyXG4gIHNyYz86IHN0cmluZztcclxuICBzcmNTZXQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VPclNyY0N1c3RvbVByb3BzIHtcclxuICBVcGxvYWRJbWFnZUZpZWxkOiBVcGxvYWRJbWFnZUZpZWxkO1xyXG4gIHN0YXRlOiBJbWFnZU9yU3JjT3J5U3RhdGU7XHJcbiAgb25DaGFuZ2U6IChzdGF0ZTogUGFydGlhbDxJbWFnZU9yU3JjT3J5U3RhdGU+KSA9PiB2b2lkO1xyXG4gIGhpZGVTcmNGaWVsZD86IGJvb2xlYW47XHJcbiAgaGlkZVNyY1NldEZpZWxkPzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoeyBwYWxldHRlLCBzcGFjaW5nIH06IFRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiAnMS41cmVtJyxcclxuICB9LFxyXG4gIHN3aXRjaEltYWdlQnV0dG9uOiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZSAhaW1wb3J0YW50JyBhcyBhbnksXHJcbiAgICByaWdodDogc3BhY2luZygtMSksXHJcbiAgICB0b3A6ICc1MCUnLFxyXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXHJcbiAgICBjb2xvcjogcGFsZXR0ZS5hY3Rpb24uYWN0aXZlICsgJyAhaW1wb3J0YW50JyxcclxuICB9LFxyXG4gIHdhcm5pbmdDb250YWluZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBwYWRkaW5nOiBzcGFjaW5nKDIpLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB5ZWxsb3dbMzAwXSxcclxuICAgIG1hcmdpbkJvdHRvbTogc3BhY2luZygyKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgdHlwZSBJbWFnZU9yU3JjUHJvcHMgPSBJbWFnZU9yU3JjQ3VzdG9tUHJvcHM7XHJcblxyXG5lbnVtIEltYWdlVGFiRW51bSB7XHJcbiAgSW1hZ2VVcGxvYWRCdXR0b24gPSAwLFxyXG4gIEltYWdlU3JjID0gMSxcclxufVxyXG5cclxuY29uc3QgSW1hZ2VPclNyYzogUmVhY3QuRkM8SW1hZ2VPclNyY1Byb3BzPiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IG9uQ2hhbmdlIH0gPSBwcm9wcztcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW2ltYWdlVGFiLCBzZXRJbWFnZVRhYl0gPSBSZWFjdC51c2VTdGF0ZTxJbWFnZVRhYkVudW0+KFxyXG4gICAgSW1hZ2VUYWJFbnVtLkltYWdlVXBsb2FkQnV0dG9uXHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIHtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBbSW1hZ2VUYWJFbnVtLkltYWdlVXBsb2FkQnV0dG9uXTogKFxyXG4gICAgICAgICAgICA8cHJvcHMuVXBsb2FkSW1hZ2VGaWVsZFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ2hvb3NlIGltYWdlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXhcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaW1hZ2VJZCwgaW1hZ2UpID0+IG9uQ2hhbmdlKHsgaW1hZ2VJZCwgaW1hZ2UgfSl9XHJcbiAgICAgICAgICAgICAgaW1hZ2VJZD17cHJvcHMuc3RhdGUuaW1hZ2VJZH1cclxuICAgICAgICAgICAgICBleGlzdGluZ0ltYWdlPXtwcm9wcy5zdGF0ZS5pbWFnZX1cclxuICAgICAgICAgICAgICBjaG9vc2VJbWFnZUJ1dHRvblByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdvcnktcHJldmVudC1ibHVyJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHVwbG9hZEltYWdlQnV0dG9uUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ29yeS1wcmV2ZW50LWJsdXInLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgW0ltYWdlVGFiRW51bS5JbWFnZVNyY106IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53YXJuaW5nQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxXYXJuaW5nSWNvbiBzdHlsZT17eyBjb2xvcjogeWVsbG93WzcwMF0gfX0gLz5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBVc2luZyBleHRlcm5hbGx5IGhvc3RlZCBpbWFnZXMgaXMgdW5zYWZlLiBDb25zaWRlciB1cGxvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgeW91ciBjb250ZW50IHRvIEd1c3RlQmVsbCBpbnN0ZWFkLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHshcHJvcHMuaGlkZVNyY0ZpZWxkICYmIChcclxuICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVXJsXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnN0YXRlLnNyY31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gcHJvcHMub25DaGFuZ2UoeyBzcmM6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHshcHJvcHMuaGlkZVNyY1NldEZpZWxkICYmIChcclxuICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgIHRvb2x0aXA9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9MZWFybi9IVE1ML011bHRpbWVkaWFfYW5kX2VtYmVkZGluZy9SZXNwb25zaXZlX2ltYWdlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTGVhcm4gbW9yZSBhYm91dCBzcmNzZXRcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJIdG1sIHNyY3NldFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5zdGF0ZS5zcmNTZXR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHByb3BzLm9uQ2hhbmdlKHsgc3JjU2V0OiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApLFxyXG4gICAgICAgIH1baW1hZ2VUYWJdXHJcbiAgICAgIH1cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGNpcmN1bGFyPXt0cnVlfVxyXG4gICAgICAgIG5vU2hhZG93PXt0cnVlfVxyXG4gICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgc2V0SW1hZ2VUYWIoXHJcbiAgICAgICAgICAgIGltYWdlVGFiID09PSBJbWFnZVRhYkVudW0uSW1hZ2VTcmNcclxuICAgICAgICAgICAgICA/IEltYWdlVGFiRW51bS5JbWFnZVVwbG9hZEJ1dHRvblxyXG4gICAgICAgICAgICAgIDogSW1hZ2VUYWJFbnVtLkltYWdlU3JjXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN3aXRjaEltYWdlQnV0dG9ufVxyXG4gICAgICA+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBbSW1hZ2VUYWJFbnVtLkltYWdlVXBsb2FkQnV0dG9uXTogPENyZWF0ZUljb24gLz4sXHJcbiAgICAgICAgICAgIFtJbWFnZVRhYkVudW0uSW1hZ2VTcmNdOiA8SW1hZ2VJY29uIC8+LFxyXG4gICAgICAgICAgfVtpbWFnZVRhYl1cclxuICAgICAgICB9XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlT3JTcmM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=