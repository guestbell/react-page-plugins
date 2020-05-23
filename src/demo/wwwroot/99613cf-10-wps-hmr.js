webpackHotUpdate(10,{

/***/ "./src/lib/video/Controls/VideoDefaultControls.tsx":
/*!*********************************************************!*\
  !*** ./src/lib/video/Controls/VideoDefaultControls.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _default_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../default/state */ "./src/lib/video/default/state.ts");
/* harmony import */ var _common_components_bottomToolbar_BottomToolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/components/bottomToolbar/BottomToolbar */ "./src/lib/common/components/bottomToolbar/BottomToolbar.tsx");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _types_enum_VideoTypeEnum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types/enum/VideoTypeEnum */ "./src/lib/video/types/enum/VideoTypeEnum.ts");
/* harmony import */ var _material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/YouTube */ "./node_modules/@material-ui/icons/YouTube.js");
/* harmony import */ var _material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/PlayArrow */ "./node_modules/@material-ui/icons/PlayArrow.js");
/* harmony import */ var _material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_8__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
  var focused = props.focused,
      readOnly = props.readOnly,
      changeType = props.changeType,
      changeEmbeddedSrc = props.changeEmbeddedSrc,
      changeUploadedSrc = props.changeUploadedSrc,
      remove = props.remove,
      _props$state = props.state;
  _props$state = _props$state === void 0 ? _default_state__WEBPACK_IMPORTED_MODULE_2__["defaultVideoState"] : _props$state;
  var type = _props$state.type,
      embeddedSrc = _props$state.embeddedSrc,
      uploadedSrc = _props$state.uploadedSrc;
  var handleTabTypeChange = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (e, tabType) {
    return changeType(tabType);
  }, [changeType]);
  var handleEmbeddedSrcChange = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (e) {
    return changeEmbeddedSrc(e.target.value);
  }, [changeEmbeddedSrc]);
  var handleUploadedSrcChange = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (e) {
    return changeUploadedSrc(e.target.value);
  }, [changeUploadedSrc]);
  return !readOnly && focused ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_common_components_bottomToolbar_BottomToolbar__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    open: focused,
    title: props.translations.pluginName,
    icon: props.IconComponent,
    onDelete: remove
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: type,
    onChange: handleTabTypeChange,
    centered: true
  }, (props.enabledTypes & _types_enum_VideoTypeEnum__WEBPACK_IMPORTED_MODULE_6__["VideoTypeEnum"].Embedded) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_7___default.a, {
      color: (type & _types_enum_VideoTypeEnum__WEBPACK_IMPORTED_MODULE_6__["VideoTypeEnum"].Embedded) > 0 ? 'primary' : 'action'
    }),
    label: "Embedded",
    value: _types_enum_VideoTypeEnum__WEBPACK_IMPORTED_MODULE_6__["VideoTypeEnum"].Embedded
  }), (props.enabledTypes & _types_enum_VideoTypeEnum__WEBPACK_IMPORTED_MODULE_6__["VideoTypeEnum"].Uploaded) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_8___default.a, {
      color: (type & _types_enum_VideoTypeEnum__WEBPACK_IMPORTED_MODULE_6__["VideoTypeEnum"].Uploaded) > 0 ? 'primary' : 'action'
    }),
    label: "Uploaded",
    value: _types_enum_VideoTypeEnum__WEBPACK_IMPORTED_MODULE_6__["VideoTypeEnum"].Uploaded
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "p-3"
  }, type === _types_enum_VideoTypeEnum__WEBPACK_IMPORTED_MODULE_6__["VideoTypeEnum"].Embedded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_0__["default"], {
    fullWidth: true,
    placeholder: props.translations.embeddedPlaceholder,
    label: props.translations.embeddedLabel,
    value: embeddedSrc,
    onChange: handleEmbeddedSrcChange
  })), type === _types_enum_VideoTypeEnum__WEBPACK_IMPORTED_MODULE_6__["VideoTypeEnum"].Uploaded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_0__["default"], {
    fullWidth: true,
    placeholder: props.translations.uploadedPlaceholder,
    label: props.translations.uploadedLabel,
    value: uploadedSrc,
    onChange: handleUploadedSrcChange
  })))) : null;
};

__signature__(Form, "useCallback{handleTabTypeChange}\nuseCallback{handleEmbeddedSrcChange}\nuseCallback{handleUploadedSrcChange}");

var _default = Form;
/* harmony default export */ __webpack_exports__["default"] = (_default);
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3ZpZGVvL0NvbnRyb2xzL1ZpZGVvRGVmYXVsdENvbnRyb2xzLnRzeCJdLCJuYW1lcyI6WyJGb3JtIiwicHJvcHMiLCJmb2N1c2VkIiwicmVhZE9ubHkiLCJjaGFuZ2VUeXBlIiwiY2hhbmdlRW1iZWRkZWRTcmMiLCJjaGFuZ2VVcGxvYWRlZFNyYyIsInJlbW92ZSIsInN0YXRlIiwiZGVmYXVsdFZpZGVvU3RhdGUiLCJ0eXBlIiwiZW1iZWRkZWRTcmMiLCJ1cGxvYWRlZFNyYyIsImhhbmRsZVRhYlR5cGVDaGFuZ2UiLCJSZWFjdCIsImUiLCJ0YWJUeXBlIiwiaGFuZGxlRW1iZWRkZWRTcmNDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVVwbG9hZGVkU3JjQ2hhbmdlIiwidHJhbnNsYXRpb25zIiwicGx1Z2luTmFtZSIsIkljb25Db21wb25lbnQiLCJlbmFibGVkVHlwZXMiLCJWaWRlb1R5cGVFbnVtIiwiRW1iZWRkZWQiLCJVcGxvYWRlZCIsImVtYmVkZGVkUGxhY2Vob2xkZXIiLCJlbWJlZGRlZExhYmVsIiwidXBsb2FkZWRQbGFjZWhvbGRlciIsInVwbG9hZGVkTGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFtQyxHQUFHLFNBQXRDQSxJQUFzQyxDQUFBQyxLQUFLLEVBQUk7QUFBQSxNQUVqREMsT0FGaUQsR0FTL0NELEtBVCtDLENBRWpEQyxPQUZpRDtBQUFBLE1BR2pEQyxRQUhpRCxHQVMvQ0YsS0FUK0MsQ0FHakRFLFFBSGlEO0FBQUEsTUFJakRDLFVBSmlELEdBUy9DSCxLQVQrQyxDQUlqREcsVUFKaUQ7QUFBQSxNQUtqREMsaUJBTGlELEdBUy9DSixLQVQrQyxDQUtqREksaUJBTGlEO0FBQUEsTUFN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S0FBSyxDQUFDb0IsWUFBTixDQUFtQlMsbUJBRmxDO0FBR0UsU0FBSyxFQUFFN0IsS0FBSyxDQUFDb0IsWUFBTixDQUFtQlUsYUFINUI7QUFJRSxTQUFLLEVBQUVuQixXQUpUO0FBS0UsWUFBUSxFQUFFUTtBQUxaLElBREYsQ0FiSixDQW5DRixDQURLLEdBNkRILElBN0RKO0FBOERELENBMUZEOztjQUFNcEIsSTs7ZUE0RlNBLEk7QUFBQTs7Ozs7Ozs7OzswQkE1RlRBLEkiLCJmaWxlIjoiOTk2MTNjZi0xMC13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgT1JZIEVkaXRvci5cclxuICpcclxuICogT1JZIEVkaXRvciBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XHJcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxyXG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxyXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxyXG4gKlxyXG4gKiBPUlkgRWRpdG9yIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXHJcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXHJcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcclxuICogR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxyXG4gKiBhbG9uZyB3aXRoIE9SWSBFZGl0b3IuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXHJcbiAqXHJcbiAqIEBsaWNlbnNlIExHUEwtMy4wXHJcbiAqIEBjb3B5cmlnaHQgMjAxNi0yMDE4IEFlbmVhcyBSZWtrYXNcclxuICogQGF1dGhvciBBZW5lYXMgUmVra2FzIDxhZW5lYXMrb3NzQGFlbmVhcy5pbz5cclxuICpcclxuICovXHJcblxyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZGVmYXVsdFZpZGVvU3RhdGUgfSBmcm9tICcuLi9kZWZhdWx0L3N0YXRlJztcclxuaW1wb3J0IHsgVmlkZW9Db250cm9sc1Byb3BzIH0gZnJvbSAnLi4vdHlwZXMvY29udHJvbHMnO1xyXG5pbXBvcnQgQm90dG9tVG9vbGJhciBmcm9tICcuLi8uLi9jb21tb24vY29tcG9uZW50cy9ib3R0b21Ub29sYmFyL0JvdHRvbVRvb2xiYXInO1xyXG5pbXBvcnQgVGFicyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJzJztcclxuaW1wb3J0IFRhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWInO1xyXG5pbXBvcnQgeyBWaWRlb1R5cGVFbnVtIH0gZnJvbSAnLi4vdHlwZXMvZW51bS9WaWRlb1R5cGVFbnVtJztcclxuaW1wb3J0IEVtYmVkZGVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvWW91VHViZSc7XHJcbmltcG9ydCBVcGxvYWRlZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlBcnJvdyc7XHJcblxyXG5jb25zdCBGb3JtOiBSZWFjdC5TRkM8VmlkZW9Db250cm9sc1Byb3BzPiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBmb2N1c2VkLFxyXG4gICAgcmVhZE9ubHksXHJcbiAgICBjaGFuZ2VUeXBlLFxyXG4gICAgY2hhbmdlRW1iZWRkZWRTcmMsXHJcbiAgICBjaGFuZ2VVcGxvYWRlZFNyYyxcclxuICAgIHJlbW92ZSxcclxuICAgIHN0YXRlOiB7IHR5cGUsIGVtYmVkZGVkU3JjLCB1cGxvYWRlZFNyYyB9ID0gZGVmYXVsdFZpZGVvU3RhdGUsXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBoYW5kbGVUYWJUeXBlQ2hhbmdlID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICAoZTogUmVhY3QuQ2hhbmdlRXZlbnQsIHRhYlR5cGU6IG51bWJlcikgPT4gY2hhbmdlVHlwZSh0YWJUeXBlKSxcclxuICAgIFtjaGFuZ2VUeXBlXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVtYmVkZGVkU3JjQ2hhbmdlID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XHJcbiAgICAgIGNoYW5nZUVtYmVkZGVkU3JjKGUudGFyZ2V0LnZhbHVlKSxcclxuICAgIFtjaGFuZ2VFbWJlZGRlZFNyY11cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVVcGxvYWRlZFNyY0NoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxyXG4gICAgICBjaGFuZ2VVcGxvYWRlZFNyYyhlLnRhcmdldC52YWx1ZSksXHJcbiAgICBbY2hhbmdlVXBsb2FkZWRTcmNdXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuICFyZWFkT25seSAmJiBmb2N1c2VkID8gKFxyXG4gICAgPEJvdHRvbVRvb2xiYXJcclxuICAgICAgb3Blbj17Zm9jdXNlZH1cclxuICAgICAgdGl0bGU9e3Byb3BzLnRyYW5zbGF0aW9ucy5wbHVnaW5OYW1lfVxyXG4gICAgICBpY29uPXtwcm9wcy5JY29uQ29tcG9uZW50fVxyXG4gICAgICBvbkRlbGV0ZT17cmVtb3ZlfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxUYWJzIHZhbHVlPXt0eXBlfSBvbkNoYW5nZT17aGFuZGxlVGFiVHlwZUNoYW5nZX0gY2VudGVyZWQ9e3RydWV9PlxyXG4gICAgICAgIHsocHJvcHMuZW5hYmxlZFR5cGVzICYgVmlkZW9UeXBlRW51bS5FbWJlZGRlZCkgPiAwICYmIChcclxuICAgICAgICAgIDxUYWJcclxuICAgICAgICAgICAgaWNvbj17XHJcbiAgICAgICAgICAgICAgPEVtYmVkZGVkSWNvblxyXG4gICAgICAgICAgICAgICAgY29sb3I9e1xyXG4gICAgICAgICAgICAgICAgICAodHlwZSAmIFZpZGVvVHlwZUVudW0uRW1iZWRkZWQpID4gMCA/ICdwcmltYXJ5JyA6ICdhY3Rpb24nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYWJlbD1cIkVtYmVkZGVkXCJcclxuICAgICAgICAgICAgdmFsdWU9e1ZpZGVvVHlwZUVudW0uRW1iZWRkZWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgeyhwcm9wcy5lbmFibGVkVHlwZXMgJiBWaWRlb1R5cGVFbnVtLlVwbG9hZGVkKSA+IDAgJiYgKFxyXG4gICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICBpY29uPXtcclxuICAgICAgICAgICAgICA8VXBsb2FkZWRJY29uXHJcbiAgICAgICAgICAgICAgICBjb2xvcj17XHJcbiAgICAgICAgICAgICAgICAgICh0eXBlICYgVmlkZW9UeXBlRW51bS5VcGxvYWRlZCkgPiAwID8gJ3ByaW1hcnknIDogJ2FjdGlvbidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhYmVsPVwiVXBsb2FkZWRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17VmlkZW9UeXBlRW51bS5VcGxvYWRlZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9UYWJzPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPlxyXG4gICAgICAgIHt0eXBlID09PSBWaWRlb1R5cGVFbnVtLkVtYmVkZGVkICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnRyYW5zbGF0aW9ucy5lbWJlZGRlZFBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgIGxhYmVsPXtwcm9wcy50cmFuc2xhdGlvbnMuZW1iZWRkZWRMYWJlbH1cclxuICAgICAgICAgICAgICB2YWx1ZT17ZW1iZWRkZWRTcmN9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUVtYmVkZGVkU3JjQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7dHlwZSA9PT0gVmlkZW9UeXBlRW51bS5VcGxvYWRlZCAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy50cmFuc2xhdGlvbnMudXBsb2FkZWRQbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICBsYWJlbD17cHJvcHMudHJhbnNsYXRpb25zLnVwbG9hZGVkTGFiZWx9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3VwbG9hZGVkU3JjfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVVcGxvYWRlZFNyY0NoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Cb3R0b21Ub29sYmFyPlxyXG4gICkgOiBudWxsO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==