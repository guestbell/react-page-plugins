webpackHotUpdate(30,{

/***/ "./src/lib/slate/Renderer/SlateHtmlRenderer.tsx":
/*!******************************************************!*\
  !*** ./src/lib/slate/Renderer/SlateHtmlRenderer.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_components_slateRenderer_SlateRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/components/slateRenderer/SlateRenderer */ "./src/lib/common/components/slateRenderer/SlateRenderer.tsx");
/* harmony import */ var _common_components_slateRenderer_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/components/slateRenderer/rules */ "./src/lib/common/components/slateRenderer/rules.tsx");
/* harmony import */ var _common_slateMigrations_migrations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/slateMigrations/migrations */ "./src/lib/common/slateMigrations/migrations.ts");
/* harmony import */ var _common_utils_PaddingComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/utils/PaddingComponent */ "./src/lib/common/utils/PaddingComponent.tsx");
/* harmony import */ var _common_components_slateEditor_SlateEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/components/slateEditor/SlateEditor */ "./src/lib/common/components/slateEditor/SlateEditor.tsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};








var SlateHtmlRenderer = function SlateHtmlRenderer(props) {
  var onChange = props.onChange,
      _props$data = props.data;
  _props$data = _props$data === void 0 ? {} : _props$data;
  var value = _props$data.value,
      version = _props$data.version,
      toolbarButtons = props.toolbarButtons,
      hoverButtons = props.hoverButtons;
  var onChangeInternal = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (_ref) {
    var value = _ref.value;
    return onChange({
      value: value
    });
  }, [onChange]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_utils_PaddingComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    state: props.data
  }, !props.isEditMode ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_slateRenderer_SlateRenderer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    value: value,
    nodeRule: _common_components_slateRenderer_rules__WEBPACK_IMPORTED_MODULE_2__["default"].nodeRule,
    textRule: _common_components_slateRenderer_rules__WEBPACK_IMPORTED_MODULE_2__["default"].textRule,
    version: version,
    migrations: _common_slateMigrations_migrations__WEBPACK_IMPORTED_MODULE_3__["default"]
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_slateEditor_SlateEditor__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: props.data.value,
    onChange: onChangeInternal,
    version: version,
    migrations: _common_slateMigrations_migrations__WEBPACK_IMPORTED_MODULE_3__["default"],
    toolbarButtons: toolbarButtons,
    hoverButtons: hoverButtons,
    hideToolbar: !props.focused
  }));
};

__signature__(SlateHtmlRenderer, "useCallback{onChangeInternal}");

var _default = SlateHtmlRenderer;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SlateHtmlRenderer, "SlateHtmlRenderer", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\Renderer\\SlateHtmlRenderer.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\Renderer\\SlateHtmlRenderer.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3NsYXRlL1JlbmRlcmVyL1NsYXRlSHRtbFJlbmRlcmVyLnRzeCJdLCJuYW1lcyI6WyJTbGF0ZUh0bWxSZW5kZXJlciIsInByb3BzIiwib25DaGFuZ2UiLCJkYXRhIiwidmFsdWUiLCJ2ZXJzaW9uIiwidG9vbGJhckJ1dHRvbnMiLCJob3ZlckJ1dHRvbnMiLCJvbkNoYW5nZUludGVybmFsIiwiUmVhY3QiLCJpc0VkaXRNb2RlIiwicnVsZXMiLCJub2RlUnVsZSIsInRleHRSdWxlIiwibWlncmF0aW9ucyIsImZvY3VzZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxpQkFBK0MsR0FBRyxTQUFsREEsaUJBQWtELENBQUFDLEtBQUssRUFBSTtBQUMvRCxNQUNFQyxRQURGLEdBS0lELEtBTEosQ0FDRUMsUUFERjtBQUFBLG9CQUtJRCxLQUxKLENBRUVFLElBRkY7QUFBQSx5Q0FFNkIsRUFGN0I7QUFBQSxNQUVVQyxLQUZWLGVBRVVBLEtBRlY7QUFBQSxNQUVpQkMsT0FGakIsZUFFaUJBLE9BRmpCO0FBQUEsTUFHRUMsY0FIRixHQUtJTCxLQUxKLENBR0VLLGNBSEY7QUFBQSxNQUlFQyxZQUpGLEdBS0lOLEtBTEosQ0FJRU0sWUFKRjtBQU1BLE1BQU1DLGdCQUFnQixHQUFHQyxpREFBQSxDQUN2QjtBQUFBLFFBQUdMLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFdBQWVGLFFBQVEsQ0FBQztBQUFFRSxXQUFLLEVBQUxBO0FBQUYsS0FBRCxDQUF2QjtBQUFBLEdBRHVCLEVBRXZCLENBQUNGLFFBQUQsQ0FGdUIsQ0FBekI7QUFJQSxzQkFDRSxvREFBQyxzRUFBRDtBQUFrQixTQUFLLEVBQUVELEtBQUssQ0FBQ0U7QUFBL0IsS0FDRyxDQUFDRixLQUFLLENBQUNTLFVBQVAsZ0JBQ0Msb0RBQUMsc0ZBQUQ7QUFDRSxTQUFLLEVBQUVOLEtBRFQ7QUFFRSxZQUFRLEVBQUVPLDhFQUFLLENBQUNDLFFBRmxCO0FBR0UsWUFBUSxFQUFFRCw4RUFBSyxDQUFDRSxRQUhsQjtBQUlFLFdBQU8sRUFBRVIsT0FKWDtBQUtFLGNBQVUsRUFBRVMsMEVBQVVBO0FBTHhCLElBREQsZ0JBU0Msb0RBQUMsa0ZBQUQ7QUFDRSxTQUFLLEVBQUViLEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxLQURwQjtBQUVFLFlBQVEsRUFBRUksZ0JBRlo7QUFHRSxXQUFPLEVBQUVILE9BSFg7QUFJRSxjQUFVLEVBQUVTLDBFQUpkO0FBS0Usa0JBQWMsRUFBRVIsY0FMbEI7QUFNRSxnQkFBWSxFQUFFQyxZQU5oQjtBQU9FLGVBQVcsRUFBRSxDQUFDTixLQUFLLENBQUNjO0FBUHRCLElBVkosQ0FERjtBQXVCRCxDQWxDRDs7Y0FBTWYsaUI7O2VBb0NTQSxpQjtBQUFBOzs7Ozs7Ozs7OzBCQXBDVEEsaUIiLCJmaWxlIjoiZDMxYWMyNS0zMC13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTbGF0ZVJlbmRlcmVyUHJvcHMgfSBmcm9tICcuLi90eXBlcy9yZW5kZXJlcic7XHJcbmltcG9ydCBTbGF0ZVJlbmRlcmVyIGZyb20gJy4uLy4uL2NvbW1vbi9jb21wb25lbnRzL3NsYXRlUmVuZGVyZXIvU2xhdGVSZW5kZXJlcic7XHJcbmltcG9ydCBydWxlcyBmcm9tICcuLi8uLi9jb21tb24vY29tcG9uZW50cy9zbGF0ZVJlbmRlcmVyL3J1bGVzJztcclxuaW1wb3J0IG1pZ3JhdGlvbnMgZnJvbSAnLi4vLi4vY29tbW9uL3NsYXRlTWlncmF0aW9ucy9taWdyYXRpb25zJztcclxuaW1wb3J0IFBhZGRpbmdDb21wb25lbnQgZnJvbSAnLi4vLi4vY29tbW9uL3V0aWxzL1BhZGRpbmdDb21wb25lbnQnO1xyXG5pbXBvcnQgU2xhdGVFZGl0b3IsIHtcclxuICBTbGF0ZUVkaXRvck9uQ2hhbmdlSGFuZGxlcixcclxufSBmcm9tICcuLi8uLi9jb21tb24vY29tcG9uZW50cy9zbGF0ZUVkaXRvci9TbGF0ZUVkaXRvcic7XHJcblxyXG5jb25zdCBTbGF0ZUh0bWxSZW5kZXJlcjogUmVhY3QuRkM8U2xhdGVSZW5kZXJlclByb3BzPiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBvbkNoYW5nZSxcclxuICAgIGRhdGE6IHsgdmFsdWUsIHZlcnNpb24gfSA9IHt9LFxyXG4gICAgdG9vbGJhckJ1dHRvbnMsXHJcbiAgICBob3ZlckJ1dHRvbnMsXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IG9uQ2hhbmdlSW50ZXJuYWwgPSBSZWFjdC51c2VDYWxsYmFjazxTbGF0ZUVkaXRvck9uQ2hhbmdlSGFuZGxlcj4oXHJcbiAgICAoeyB2YWx1ZSB9KSA9PiBvbkNoYW5nZSh7IHZhbHVlIH0pLFxyXG4gICAgW29uQ2hhbmdlXVxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWRkaW5nQ29tcG9uZW50IHN0YXRlPXtwcm9wcy5kYXRhfT5cclxuICAgICAgeyFwcm9wcy5pc0VkaXRNb2RlID8gKFxyXG4gICAgICAgIDxTbGF0ZVJlbmRlcmVyXHJcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICBub2RlUnVsZT17cnVsZXMubm9kZVJ1bGV9XHJcbiAgICAgICAgICB0ZXh0UnVsZT17cnVsZXMudGV4dFJ1bGV9XHJcbiAgICAgICAgICB2ZXJzaW9uPXt2ZXJzaW9ufVxyXG4gICAgICAgICAgbWlncmF0aW9ucz17bWlncmF0aW9uc31cclxuICAgICAgICAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxTbGF0ZUVkaXRvclxyXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLmRhdGEudmFsdWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbnRlcm5hbH1cclxuICAgICAgICAgIHZlcnNpb249e3ZlcnNpb259XHJcbiAgICAgICAgICBtaWdyYXRpb25zPXttaWdyYXRpb25zfVxyXG4gICAgICAgICAgdG9vbGJhckJ1dHRvbnM9e3Rvb2xiYXJCdXR0b25zfVxyXG4gICAgICAgICAgaG92ZXJCdXR0b25zPXtob3ZlckJ1dHRvbnN9XHJcbiAgICAgICAgICBoaWRlVG9vbGJhcj17IXByb3BzLmZvY3VzZWR9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvUGFkZGluZ0NvbXBvbmVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xhdGVIdG1sUmVuZGVyZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=