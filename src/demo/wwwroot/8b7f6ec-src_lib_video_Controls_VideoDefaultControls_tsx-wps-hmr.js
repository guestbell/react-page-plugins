"use strict";
self["webpackHotUpdate_guestbell_react_page_plugins"]("src_lib_video_Controls_VideoDefaultControls_tsx",{

/***/ "./src/lib/video/Controls/VideoDefaultControls.tsx":
/*!*********************************************************!*\
  !*** ./src/lib/video/Controls/VideoDefaultControls.tsx ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _default_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../default/state */ "./src/lib/video/default/state.ts");
/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Tabs */ "./node_modules/@mui/material/Tabs/Tabs.js");
/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Tab */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _types_enum_VideoTypeEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/enum/VideoTypeEnum */ "./src/lib/video/types/enum/VideoTypeEnum.ts");
/* harmony import */ var _mui_icons_material_YouTube__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/YouTube */ "./node_modules/@mui/icons-material/YouTube.js");
/* harmony import */ var _mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/PlayArrow */ "./node_modules/@mui/icons-material/PlayArrow.js");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
/*
 * This file is part of ORY Editor.
 *
 * ORY Editor is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ORY Editor is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ORY Editor.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @license LGPL-3.0
 * @copyright 2016-2018 Aeneas Rekkas
 * @author Aeneas Rekkas <aeneas+oss@aeneas.io>
 *
 */









var Form = function Form(props) {
  var readOnly = props.readOnly,
    onChange = props.onChange,
    _props$data = props.data,
    _props$data2 = _props$data === void 0 ? _default_state__WEBPACK_IMPORTED_MODULE_1__.defaultVideoState : _props$data,
    _props$data2$type = _props$data2.type,
    type = _props$data2$type === void 0 ? props.defaultType : _props$data2$type,
    _props$data2$embedded = _props$data2.embeddedSrc,
    embeddedSrc = _props$data2$embedded === void 0 ? '' : _props$data2$embedded,
    _props$data2$uploaded = _props$data2.uploadedSrc,
    uploadedSrc = _props$data2$uploaded === void 0 ? '' : _props$data2$uploaded;
  var changeEmbeddedSrc = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (src) {
    onChange({
      embeddedSrc: src
    });
  }, [onChange]);
  var changeUploadedSrc = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (src) {
    onChange({
      uploadedSrc: src
    });
  }, [onChange]);
  var changeType = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (type) {
    onChange({
      type: type
    });
  }, [onChange]);
  var handleTabTypeChange = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (e, tabType) {
    return changeType(tabType);
  }, [changeType]);
  var handleEmbeddedSrcChange = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (e) {
    return changeEmbeddedSrc(e.target.value);
  }, [changeEmbeddedSrc]);
  var handleUploadedSrcChange = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (e) {
    return changeUploadedSrc(e.target.value);
  }, [changeUploadedSrc]);
  return !readOnly ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: type,
    onChange: handleTabTypeChange,
    centered: true
  }, (props.enabledTypes & _types_enum_VideoTypeEnum__WEBPACK_IMPORTED_MODULE_2__.VideoTypeEnum.Embedded) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_YouTube__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: (type & _types_enum_VideoTypeEnum__WEBPACK_IMPORTED_MODULE_2__.VideoTypeEnum.Embedded) > 0 ? 'primary' : 'action'
    }),
    label: "Embedded",
    value: _types_enum_VideoTypeEnum__WEBPACK_IMPORTED_MODULE_2__.VideoTypeEnum.Embedded
  }), (props.enabledTypes & _types_enum_VideoTypeEnum__WEBPACK_IMPORTED_MODULE_2__.VideoTypeEnum.Uploaded) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_6__["default"], {
      color: (type & _types_enum_VideoTypeEnum__WEBPACK_IMPORTED_MODULE_2__.VideoTypeEnum.Uploaded) > 0 ? 'primary' : 'action'
    }),
    label: "Uploaded",
    value: _types_enum_VideoTypeEnum__WEBPACK_IMPORTED_MODULE_2__.VideoTypeEnum.Uploaded
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "p-3"
  }, type === _types_enum_VideoTypeEnum__WEBPACK_IMPORTED_MODULE_2__.VideoTypeEnum.Embedded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fullWidth: true,
    placeholder: props.translations.embeddedPlaceholder,
    label: props.translations.embeddedLabel,
    value: embeddedSrc,
    onChange: handleEmbeddedSrcChange
  })), type === _types_enum_VideoTypeEnum__WEBPACK_IMPORTED_MODULE_2__.VideoTypeEnum.Uploaded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fullWidth: true,
    placeholder: props.translations.uploadedPlaceholder,
    label: props.translations.uploadedLabel,
    value: uploadedSrc,
    onChange: handleUploadedSrcChange
  })))) : null;
};
__signature__(Form, "useCallback{changeEmbeddedSrc}\nuseCallback{changeUploadedSrc}\nuseCallback{changeType}\nuseCallback{handleTabTypeChange}\nuseCallback{handleEmbeddedSrcChange}\nuseCallback{handleUploadedSrcChange}");
var _default = Form;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(Form, "Form", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\video\\Controls\\VideoDefaultControls.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\video\\Controls\\VideoDefaultControls.tsx");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOGI3ZjZlYy1zcmNfbGliX3ZpZGVvX0NvbnRyb2xzX1ZpZGVvRGVmYXVsdENvbnRyb2xzX3RzeC13cHMtaG1yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZ0Q7QUFDakI7QUFDc0I7QUFFZjtBQUNGO0FBQ3dCO0FBQ0w7QUFDRTtBQUV6RCxJQUFNUSxJQUFrQyxHQUFHLFNBQXJDQSxJQUFrQ0EsQ0FBR0MsS0FBSyxFQUFJO0VBQ2xELElBQ0VDLFFBQVEsR0FPTkQsS0FBSyxDQVBQQyxRQUFRO0lBQ1JDLFFBQVEsR0FNTkYsS0FBSyxDQU5QRSxRQUFRO0lBQUFDLFdBQUEsR0FNTkgsS0FBSyxDQUxQSSxJQUFJO0lBQUFDLFlBQUEsR0FBQUYsV0FBQSxjQUlBViw2REFBaUIsR0FBQVUsV0FBQTtJQUFBRyxpQkFBQSxHQUFBRCxZQUFBLENBSG5CRSxJQUFJO0lBQUpBLElBQUksR0FBQUQsaUJBQUEsY0FBR04sS0FBSyxDQUFDUSxXQUFXLEdBQUFGLGlCQUFBO0lBQUFHLHFCQUFBLEdBQUFKLFlBQUEsQ0FDeEJLLFdBQVc7SUFBWEEsV0FBVyxHQUFBRCxxQkFBQSxjQUFHLEVBQUUsR0FBQUEscUJBQUE7SUFBQUUscUJBQUEsR0FBQU4sWUFBQSxDQUNoQk8sV0FBVztJQUFYQSxXQUFXLEdBQUFELHFCQUFBLGNBQUcsRUFBRSxHQUFBQSxxQkFBQTtFQUlwQixJQUFNRSxpQkFBaUIsR0FBR3JCLDhDQUFpQixDQUN6QyxVQUFDdUIsR0FBVyxFQUFLO0lBQ2ZiLFFBQVEsQ0FBQztNQUFFUSxXQUFXLEVBQUVLO0lBQUksQ0FBQyxDQUFDO0VBQ2hDLENBQUMsRUFDRCxDQUFDYixRQUFRLENBQ1gsQ0FBQztFQUVELElBQU1jLGlCQUFpQixHQUFHeEIsOENBQWlCLENBQ3pDLFVBQUN1QixHQUFXLEVBQUs7SUFDZmIsUUFBUSxDQUFDO01BQUVVLFdBQVcsRUFBRUc7SUFBSSxDQUFDLENBQUM7RUFDaEMsQ0FBQyxFQUNELENBQUNiLFFBQVEsQ0FDWCxDQUFDO0VBRUQsSUFBTWUsVUFBVSxHQUFHekIsOENBQWlCLENBQ2xDLFVBQUNlLElBQW1CLEVBQUs7SUFDdkJMLFFBQVEsQ0FBQztNQUFFSyxJQUFJLEVBQUpBO0lBQUssQ0FBQyxDQUFDO0VBQ3BCLENBQUMsRUFDRCxDQUFDTCxRQUFRLENBQ1gsQ0FBQztFQUVELElBQU1nQixtQkFBbUIsR0FBRzFCLDhDQUFpQixDQUMzQyxVQUFDMkIsQ0FBb0IsRUFBRUMsT0FBZTtJQUFBLE9BQUtILFVBQVUsQ0FBQ0csT0FBTyxDQUFDO0VBQUEsR0FDOUQsQ0FBQ0gsVUFBVSxDQUNiLENBQUM7RUFFRCxJQUFNSSx1QkFBdUIsR0FBRzdCLDhDQUFpQixDQUMvQyxVQUFDMkIsQ0FBc0M7SUFBQSxPQUNyQ04saUJBQWlCLENBQUNNLENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxLQUFLLENBQUM7RUFBQSxHQUNuQyxDQUFDVixpQkFBaUIsQ0FDcEIsQ0FBQztFQUVELElBQU1XLHVCQUF1QixHQUFHaEMsOENBQWlCLENBQy9DLFVBQUMyQixDQUFzQztJQUFBLE9BQ3JDSCxpQkFBaUIsQ0FBQ0csQ0FBQyxDQUFDRyxNQUFNLENBQUNDLEtBQUssQ0FBQztFQUFBLEdBQ25DLENBQUNQLGlCQUFpQixDQUNwQixDQUFDO0VBRUQsT0FBTyxDQUFDZixRQUFRLGdCQUNkVCxnREFBQSxDQUFBQSwyQ0FBQSxxQkFDRUEsZ0RBQUEsQ0FBQ0UsMERBQUk7SUFBQzZCLEtBQUssRUFBRWhCLElBQUs7SUFBQ0wsUUFBUSxFQUFFZ0IsbUJBQW9CO0lBQUNTLFFBQVEsRUFBRTtFQUFLLEdBQzlELENBQUMzQixLQUFLLENBQUM0QixZQUFZLEdBQUdoQyw2RUFBc0IsSUFBSSxDQUFDLGlCQUNoREosZ0RBQUEsQ0FBQ0cseURBQUc7SUFDRm1DLElBQUksZUFDRnRDLGdEQUFBLENBQUNLLG1FQUFZO01BQ1hrQyxLQUFLLEVBQ0gsQ0FBQ3hCLElBQUksR0FBR1gsNkVBQXNCLElBQUksQ0FBQyxHQUFHLFNBQVMsR0FBRztJQUNuRCxDQUNGLENBQ0Y7SUFDRG9DLEtBQUssRUFBQyxVQUFVO0lBQ2hCVCxLQUFLLEVBQUUzQiw2RUFBc0JpQztFQUFDLENBQy9CLENBQ0YsRUFDQSxDQUFDN0IsS0FBSyxDQUFDNEIsWUFBWSxHQUFHaEMsNkVBQXNCLElBQUksQ0FBQyxpQkFDaERKLGdEQUFBLENBQUNHLHlEQUFHO0lBQ0ZtQyxJQUFJLGVBQ0Z0QyxnREFBQSxDQUFDTSxxRUFBWTtNQUNYaUMsS0FBSyxFQUNILENBQUN4QixJQUFJLEdBQUdYLDZFQUFzQixJQUFJLENBQUMsR0FBRyxTQUFTLEdBQUc7SUFDbkQsQ0FDRixDQUNGO0lBQ0RvQyxLQUFLLEVBQUMsVUFBVTtJQUNoQlQsS0FBSyxFQUFFM0IsNkVBQXNCcUM7RUFBQyxDQUMvQixDQUVDLENBQUMsZUFDUHpDLGdEQUFBO0lBQUswQyxTQUFTLEVBQUM7RUFBSyxHQUNqQjNCLElBQUksS0FBS1gsNkVBQXNCLGlCQUM5QkosZ0RBQUEsQ0FBQUEsMkNBQUEscUJBQ0VBLGdEQUFBLENBQUNELCtEQUFTO0lBQ1I0QyxTQUFTLEVBQUUsSUFBSztJQUNoQkMsV0FBVyxFQUFFcEMsS0FBSyxDQUFDcUMsWUFBWSxDQUFDQyxtQkFBb0I7SUFDcEROLEtBQUssRUFBRWhDLEtBQUssQ0FBQ3FDLFlBQVksQ0FBQ0UsYUFBYztJQUN4Q2hCLEtBQUssRUFBRWIsV0FBWTtJQUNuQlIsUUFBUSxFQUFFbUI7RUFBd0IsQ0FDbkMsQ0FDRCxDQUNILEVBQ0FkLElBQUksS0FBS1gsNkVBQXNCLGlCQUM5QkosZ0RBQUEsQ0FBQUEsMkNBQUEscUJBQ0VBLGdEQUFBLENBQUNELCtEQUFTO0lBQ1I0QyxTQUFTLEVBQUUsSUFBSztJQUNoQkMsV0FBVyxFQUFFcEMsS0FBSyxDQUFDcUMsWUFBWSxDQUFDRyxtQkFBb0I7SUFDcERSLEtBQUssRUFBRWhDLEtBQUssQ0FBQ3FDLFlBQVksQ0FBQ0ksYUFBYztJQUN4Q2xCLEtBQUssRUFBRVgsV0FBWTtJQUNuQlYsUUFBUSxFQUFFc0I7RUFBd0IsQ0FDbkMsQ0FDRCxDQUVELENBQ0wsQ0FBQyxHQUNELElBQUk7QUFDVixDQUFDO0FBQUNrQixhQUFBLENBekdJM0MsSUFBa0M7QUFBQSxJQUFBNEMsUUFBQSxHQTJHekI1QyxJQUFJO0FBQW5CLGlFQUFBNEMsUUFBQTtBQUFvQjtBQUFBO0VBQUEsSUFBQUMsY0FBQSxVQUFBQyxvQkFBQSxtQkFBQUEsb0JBQUEsQ0FBQUMsT0FBQSxHQUFBQyxTQUFBO0VBQUEsS0FBQUgsY0FBQTtJQUFBO0VBQUE7RUFBQUEsY0FBQSxDQUFBSSxRQUFBLENBM0dkakQsSUFBa0M7RUFBQTZDLGNBQUEsQ0FBQUksUUFBQSxDQUFBTCxRQUFBO0FBQUE7QUFBQTtBQUFBO0VBQUEsSUFBQU0sV0FBQSxVQUFBSixvQkFBQSxtQkFBQUEsb0JBQUEsQ0FBQUksV0FBQSxHQUFBRixTQUFBO0VBQUFFLFdBQUEsSUFBQUEsV0FBQSxDQUFBQyxNQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZ3Vlc3RiZWxsL3JlYWN0LXBhZ2UtcGx1Z2lucy8uL3NyYy9saWIvdmlkZW8vQ29udHJvbHMvVmlkZW9EZWZhdWx0Q29udHJvbHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIE9SWSBFZGl0b3IuXHJcbiAqXHJcbiAqIE9SWSBFZGl0b3IgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxyXG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcclxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cclxuICpcclxuICogT1JZIEVkaXRvciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxyXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxyXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXHJcbiAqIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcclxuICogYWxvbmcgd2l0aCBPUlkgRWRpdG9yLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxyXG4gKlxyXG4gKiBAbGljZW5zZSBMR1BMLTMuMFxyXG4gKiBAY29weXJpZ2h0IDIwMTYtMjAxOCBBZW5lYXMgUmVra2FzXHJcbiAqIEBhdXRob3IgQWVuZWFzIFJla2thcyA8YWVuZWFzK29zc0BhZW5lYXMuaW8+XHJcbiAqXHJcbiAqL1xyXG5cclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbXVpL21hdGVyaWFsL1RleHRGaWVsZCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZGVmYXVsdFZpZGVvU3RhdGUgfSBmcm9tICcuLi9kZWZhdWx0L3N0YXRlJztcclxuaW1wb3J0IHsgVmlkZW9Db250cm9sc1Byb3BzIH0gZnJvbSAnLi4vdHlwZXMvY29udHJvbHMnO1xyXG5pbXBvcnQgVGFicyBmcm9tICdAbXVpL21hdGVyaWFsL1RhYnMnO1xyXG5pbXBvcnQgVGFiIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFiJztcclxuaW1wb3J0IHsgVmlkZW9UeXBlRW51bSB9IGZyb20gJy4uL3R5cGVzL2VudW0vVmlkZW9UeXBlRW51bSc7XHJcbmltcG9ydCBFbWJlZGRlZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Zb3VUdWJlJztcclxuaW1wb3J0IFVwbG9hZGVkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1BsYXlBcnJvdyc7XHJcblxyXG5jb25zdCBGb3JtOiBSZWFjdC5GQzxWaWRlb0NvbnRyb2xzUHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHJlYWRPbmx5LFxyXG4gICAgb25DaGFuZ2UsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHR5cGUgPSBwcm9wcy5kZWZhdWx0VHlwZSxcclxuICAgICAgZW1iZWRkZWRTcmMgPSAnJyxcclxuICAgICAgdXBsb2FkZWRTcmMgPSAnJyxcclxuICAgIH0gPSBkZWZhdWx0VmlkZW9TdGF0ZSxcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNoYW5nZUVtYmVkZGVkU3JjID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICAoc3JjOiBzdHJpbmcpID0+IHtcclxuICAgICAgb25DaGFuZ2UoeyBlbWJlZGRlZFNyYzogc3JjIH0pO1xyXG4gICAgfSxcclxuICAgIFtvbkNoYW5nZV1cclxuICApO1xyXG5cclxuICBjb25zdCBjaGFuZ2VVcGxvYWRlZFNyYyA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgKHNyYzogc3RyaW5nKSA9PiB7XHJcbiAgICAgIG9uQ2hhbmdlKHsgdXBsb2FkZWRTcmM6IHNyYyB9KTtcclxuICAgIH0sXHJcbiAgICBbb25DaGFuZ2VdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlVHlwZSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgKHR5cGU6IFZpZGVvVHlwZUVudW0pID0+IHtcclxuICAgICAgb25DaGFuZ2UoeyB0eXBlIH0pO1xyXG4gICAgfSxcclxuICAgIFtvbkNoYW5nZV1cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVUYWJUeXBlQ2hhbmdlID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICAoZTogUmVhY3QuQ2hhbmdlRXZlbnQsIHRhYlR5cGU6IG51bWJlcikgPT4gY2hhbmdlVHlwZSh0YWJUeXBlKSxcclxuICAgIFtjaGFuZ2VUeXBlXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVtYmVkZGVkU3JjQ2hhbmdlID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XHJcbiAgICAgIGNoYW5nZUVtYmVkZGVkU3JjKGUudGFyZ2V0LnZhbHVlKSxcclxuICAgIFtjaGFuZ2VFbWJlZGRlZFNyY11cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVVcGxvYWRlZFNyY0NoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxyXG4gICAgICBjaGFuZ2VVcGxvYWRlZFNyYyhlLnRhcmdldC52YWx1ZSksXHJcbiAgICBbY2hhbmdlVXBsb2FkZWRTcmNdXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuICFyZWFkT25seSA/IChcclxuICAgIDw+XHJcbiAgICAgIDxUYWJzIHZhbHVlPXt0eXBlfSBvbkNoYW5nZT17aGFuZGxlVGFiVHlwZUNoYW5nZX0gY2VudGVyZWQ9e3RydWV9PlxyXG4gICAgICAgIHsocHJvcHMuZW5hYmxlZFR5cGVzICYgVmlkZW9UeXBlRW51bS5FbWJlZGRlZCkgPiAwICYmIChcclxuICAgICAgICAgIDxUYWJcclxuICAgICAgICAgICAgaWNvbj17XHJcbiAgICAgICAgICAgICAgPEVtYmVkZGVkSWNvblxyXG4gICAgICAgICAgICAgICAgY29sb3I9e1xyXG4gICAgICAgICAgICAgICAgICAodHlwZSAmIFZpZGVvVHlwZUVudW0uRW1iZWRkZWQpID4gMCA/ICdwcmltYXJ5JyA6ICdhY3Rpb24nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYWJlbD1cIkVtYmVkZGVkXCJcclxuICAgICAgICAgICAgdmFsdWU9e1ZpZGVvVHlwZUVudW0uRW1iZWRkZWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgeyhwcm9wcy5lbmFibGVkVHlwZXMgJiBWaWRlb1R5cGVFbnVtLlVwbG9hZGVkKSA+IDAgJiYgKFxyXG4gICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICBpY29uPXtcclxuICAgICAgICAgICAgICA8VXBsb2FkZWRJY29uXHJcbiAgICAgICAgICAgICAgICBjb2xvcj17XHJcbiAgICAgICAgICAgICAgICAgICh0eXBlICYgVmlkZW9UeXBlRW51bS5VcGxvYWRlZCkgPiAwID8gJ3ByaW1hcnknIDogJ2FjdGlvbidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhYmVsPVwiVXBsb2FkZWRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17VmlkZW9UeXBlRW51bS5VcGxvYWRlZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9UYWJzPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPlxyXG4gICAgICAgIHt0eXBlID09PSBWaWRlb1R5cGVFbnVtLkVtYmVkZGVkICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnRyYW5zbGF0aW9ucy5lbWJlZGRlZFBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgIGxhYmVsPXtwcm9wcy50cmFuc2xhdGlvbnMuZW1iZWRkZWRMYWJlbH1cclxuICAgICAgICAgICAgICB2YWx1ZT17ZW1iZWRkZWRTcmN9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUVtYmVkZGVkU3JjQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7dHlwZSA9PT0gVmlkZW9UeXBlRW51bS5VcGxvYWRlZCAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy50cmFuc2xhdGlvbnMudXBsb2FkZWRQbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICBsYWJlbD17cHJvcHMudHJhbnNsYXRpb25zLnVwbG9hZGVkTGFiZWx9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3VwbG9hZGVkU3JjfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVVcGxvYWRlZFNyY0NoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKSA6IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iXSwibmFtZXMiOlsiVGV4dEZpZWxkIiwiUmVhY3QiLCJkZWZhdWx0VmlkZW9TdGF0ZSIsIlRhYnMiLCJUYWIiLCJWaWRlb1R5cGVFbnVtIiwiRW1iZWRkZWRJY29uIiwiVXBsb2FkZWRJY29uIiwiRm9ybSIsInByb3BzIiwicmVhZE9ubHkiLCJvbkNoYW5nZSIsIl9wcm9wcyRkYXRhIiwiZGF0YSIsIl9wcm9wcyRkYXRhMiIsIl9wcm9wcyRkYXRhMiR0eXBlIiwidHlwZSIsImRlZmF1bHRUeXBlIiwiX3Byb3BzJGRhdGEyJGVtYmVkZGVkIiwiZW1iZWRkZWRTcmMiLCJfcHJvcHMkZGF0YTIkdXBsb2FkZWQiLCJ1cGxvYWRlZFNyYyIsImNoYW5nZUVtYmVkZGVkU3JjIiwidXNlQ2FsbGJhY2siLCJzcmMiLCJjaGFuZ2VVcGxvYWRlZFNyYyIsImNoYW5nZVR5cGUiLCJoYW5kbGVUYWJUeXBlQ2hhbmdlIiwiZSIsInRhYlR5cGUiLCJoYW5kbGVFbWJlZGRlZFNyY0NoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlVXBsb2FkZWRTcmNDaGFuZ2UiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjZW50ZXJlZCIsImVuYWJsZWRUeXBlcyIsIkVtYmVkZGVkIiwiaWNvbiIsImNvbG9yIiwibGFiZWwiLCJVcGxvYWRlZCIsImNsYXNzTmFtZSIsImZ1bGxXaWR0aCIsInBsYWNlaG9sZGVyIiwidHJhbnNsYXRpb25zIiwiZW1iZWRkZWRQbGFjZWhvbGRlciIsImVtYmVkZGVkTGFiZWwiLCJ1cGxvYWRlZFBsYWNlaG9sZGVyIiwidXBsb2FkZWRMYWJlbCIsIl9fc2lnbmF0dXJlX18iLCJfZGVmYXVsdCIsInJlYWN0SG90TG9hZGVyIiwicmVhY3RIb3RMb2FkZXJHbG9iYWwiLCJkZWZhdWx0IiwidW5kZWZpbmVkIiwicmVnaXN0ZXIiLCJsZWF2ZU1vZHVsZSIsIm1vZHVsZSJdLCJzb3VyY2VSb290IjoiIn0=