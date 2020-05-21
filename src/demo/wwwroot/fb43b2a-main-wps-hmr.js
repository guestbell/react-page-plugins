webpackHotUpdate("main",{

/***/ "./src/lib/common/components/paddingButton/PaddingSlider.tsx":
/*!*******************************************************************!*\
  !*** ./src/lib/common/components/paddingButton/PaddingSlider.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "./node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Slider */ "./node_modules/@material-ui/core/esm/Slider/index.js");
/* harmony import */ var _material_ui_core_utils_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/utils/debounce */ "./node_modules/@material-ui/core/utils/debounce.js");
/* harmony import */ var _material_ui_core_utils_debounce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_utils_debounce__WEBPACK_IMPORTED_MODULE_6__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};








var useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4___default()({
  root: {
    width: 250
  },
  input: {
    width: 'auto'
  }
});

var PaddingSlider = function PaddingSlider(props) {
  var Icon = props.Icon,
      title = props.title,
      value = props.value,
      onValueChange = props.onValueChange,
      _props$min = props.min,
      min = _props$min === void 0 ? 0 : _props$min,
      _props$max = props.max,
      max = _props$max === void 0 ? 40 : _props$max,
      _props$step = props.step,
      step = _props$step === void 0 ? 1 : _props$step;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](value || 0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      innerValue = _React$useState2[0],
      setInnerValue = _React$useState2[1];

  var onValueChangeDebounced = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](_material_ui_core_utils_debounce__WEBPACK_IMPORTED_MODULE_6___default()(onValueChange, 100), [onValueChange]);
  var onSliderChange = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (e, val) {
    onValueChangeDebounced(val);
    setInnerValue(val);
    setTextValue(val.toFixed());
  }, [onValueChangeDebounced]);

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__["useState"]((value || 0).toFixed()),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      textValue = _React$useState4[0],
      setTextValue = _React$useState4[1];

  var onTextValueChange = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (e) {
    setTextValue(e.target.value);
    var val = Number(e.target.value);

    if (val < min) {
      val = min;
    } else if (val > max) {
      val = max;
    } else if (isNaN(val)) {
      val = innerValue;
    }

    setInnerValue(val || 0);
    onValueChangeDebounced(val || 0);
  }, [innerValue, min, max, setInnerValue]);
  var sliderCommitted = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function () {
    setTextValue((innerValue || 0).toFixed());
  }, [innerValue, setTextValue]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    gutterBottom: true
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: 2,
    alignItems: "center"
  }, Icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true
  }, Icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: innerValue || 0,
    onChange: onSliderChange,
    onChangeCommitted: sliderCommitted,
    min: min,
    max: max,
    step: step
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.input,
    value: textValue,
    margin: "dense",
    onChange: onTextValueChange,
    onBlur: sliderCommitted,
    inputProps: {
      step: step,
      min: min,
      max: max,
      type: 'number'
    }
  }))));
};

__signature__(PaddingSlider, "useStyles{classes}\nuseState{[innerValue, setInnerValue](value || 0)}\nuseCallback{onValueChangeDebounced}\nuseCallback{onSliderChange}\nuseState{[textValue, setTextValue]((value || 0).toFixed())}\nuseCallback{onTextValueChange}\nuseCallback{sliderCommitted}", function () {
  return [useStyles];
});

var _default = PaddingSlider;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useStyles, "useStyles", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\paddingButton\\PaddingSlider.tsx");
  reactHotLoader.register(PaddingSlider, "PaddingSlider", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\paddingButton\\PaddingSlider.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\paddingButton\\PaddingSlider.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbW1vbi9jb21wb25lbnRzL3BhZGRpbmdCdXR0b24vUGFkZGluZ1NsaWRlci50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJ3aWR0aCIsImlucHV0IiwiUGFkZGluZ1NsaWRlciIsInByb3BzIiwiSWNvbiIsInRpdGxlIiwidmFsdWUiLCJvblZhbHVlQ2hhbmdlIiwibWluIiwibWF4Iiwic3RlcCIsImNsYXNzZXMiLCJSZWFjdCIsImlubmVyVmFsdWUiLCJzZXRJbm5lclZhbHVlIiwib25WYWx1ZUNoYW5nZURlYm91bmNlZCIsImRlYm91bmNlIiwib25TbGlkZXJDaGFuZ2UiLCJlIiwidmFsIiwic2V0VGV4dFZhbHVlIiwidG9GaXhlZCIsInRleHRWYWx1ZSIsIm9uVGV4dFZhbHVlQ2hhbmdlIiwidGFyZ2V0IiwiTnVtYmVyIiwiaXNOYU4iLCJzbGlkZXJDb21taXR0ZWQiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVlBLElBQU1BLFNBQVMsR0FBR0MsMEVBQVUsQ0FBQztBQUMzQkMsTUFBSSxFQUFFO0FBQ0pDLFNBQUssRUFBRTtBQURILEdBRHFCO0FBSTNCQyxPQUFLLEVBQUU7QUFDTEQsU0FBSyxFQUFFO0FBREY7QUFKb0IsQ0FBRCxDQUE1Qjs7QUFTQSxJQUFNRSxhQUEyQyxHQUFHLFNBQTlDQSxhQUE4QyxDQUFBQyxLQUFLLEVBQUk7QUFBQSxNQUV6REMsSUFGeUQsR0FTdkRELEtBVHVELENBRXpEQyxJQUZ5RDtBQUFBLE1BR3pEQyxLQUh5RCxHQVN2REYsS0FUdUQsQ0FHekRFLEtBSHlEO0FBQUEsTUFJekRDLEtBSnlELEdBU3ZESCxLQVR1RCxDQUl6REcsS0FKeUQ7QUFBQSxNQUt6REMsYUFMeUQsR0FTdkRKLEtBVHVELENBS3pESSxh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QUFFVSxlQUhyQjtBQUlFLE9BQUcsRUFBRW5CLEdBSlA7QUFLRSxPQUFHLEVBQUVDLEdBTFA7QUFNRSxRQUFJLEVBQUVDO0FBTlIsSUFERixDQUZGLGVBWUUsb0RBQUMsOERBQUQ7QUFBTSxRQUFJLEVBQUU7QUFBWixrQkFDRSxvREFBQywrREFBRDtBQUNFLGFBQVMsRUFBRUMsT0FBTyxDQUFDVixLQURyQjtBQUVFLFNBQUssRUFBRXFCLFNBRlQ7QUFHRSxVQUFNLEVBQUMsT0FIVDtBQUlFLFlBQVEsRUFBRUMsaUJBSlo7QUFLRSxVQUFNLEVBQUVJLGVBTFY7QUFNRSxjQUFVLEVBQUU7QUFDVmpCLFVBQUksRUFBSkEsSUFEVTtBQUVWRixTQUFHLEVBQUhBLEdBRlU7QUFHVkMsU0FBRyxFQUFIQSxHQUhVO0FBSVZtQixVQUFJLEVBQUU7QUFKSTtBQU5kLElBREYsQ0FaRixDQUZGLENBREY7QUFpQ0QsQ0E5RUQ7O2NBQU0xQixhO1VBVVlMLFM7OztlQXNFSEssYTtBQUFBOzs7Ozs7Ozs7OzBCQXpGVEwsUzswQkFTQUssYSIsImZpbGUiOiJmYjQzYjJhLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXQnO1xyXG5pbXBvcnQgbWFrZVN0eWxlcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvbWFrZVN0eWxlcyc7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyJztcclxuaW1wb3J0IGRlYm91bmNlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3V0aWxzL2RlYm91bmNlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFkZGluZ1NsaWRlclByb3BzIHtcclxuICBJY29uPzogSlNYLkVsZW1lbnQ7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgb25WYWx1ZUNoYW5nZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgdmFsdWU6IG51bWJlcjtcclxuICBtaW4/OiBudW1iZXI7XHJcbiAgbWF4PzogbnVtYmVyO1xyXG4gIHN0ZXA/OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHdpZHRoOiAyNTAsXHJcbiAgfSxcclxuICBpbnB1dDoge1xyXG4gICAgd2lkdGg6ICdhdXRvJyxcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IFBhZGRpbmdTbGlkZXI6IFJlYWN0LkZDPFBhZGRpbmdTbGlkZXJQcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgSWNvbixcclxuICAgIHRpdGxlLFxyXG4gICAgdmFsdWUsXHJcbiAgICBvblZhbHVlQ2hhbmdlLFxyXG4gICAgbWluID0gMCxcclxuICAgIG1heCA9IDQwLFxyXG4gICAgc3RlcCA9IDEsXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbaW5uZXJWYWx1ZSwgc2V0SW5uZXJWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSh2YWx1ZSB8fCAwKTtcclxuICBjb25zdCBvblZhbHVlQ2hhbmdlRGVib3VuY2VkID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICBkZWJvdW5jZShvblZhbHVlQ2hhbmdlLCAxMDApLFxyXG4gICAgW29uVmFsdWVDaGFuZ2VdXHJcbiAgKTtcclxuICBjb25zdCBvblNsaWRlckNoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgKGU6IFJlYWN0LkNoYW5nZUV2ZW50LCB2YWw6IG51bWJlcikgPT4ge1xyXG4gICAgICBvblZhbHVlQ2hhbmdlRGVib3VuY2VkKHZhbCk7XHJcbiAgICAgIHNldElubmVyVmFsdWUodmFsKTtcclxuICAgICAgc2V0VGV4dFZhbHVlKHZhbC50b0ZpeGVkKCkpO1xyXG4gICAgfSxcclxuICAgIFtvblZhbHVlQ2hhbmdlRGVib3VuY2VkXVxyXG4gICk7XHJcbiAgY29uc3QgW3RleHRWYWx1ZSwgc2V0VGV4dFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCh2YWx1ZSB8fCAwKS50b0ZpeGVkKCkpO1xyXG4gIGNvbnN0IG9uVGV4dFZhbHVlQ2hhbmdlID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgICAgc2V0VGV4dFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgbGV0IHZhbCA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIGlmICh2YWwgPCBtaW4pIHtcclxuICAgICAgICB2YWwgPSBtaW47XHJcbiAgICAgIH0gZWxzZSBpZiAodmFsID4gbWF4KSB7XHJcbiAgICAgICAgdmFsID0gbWF4O1xyXG4gICAgICB9IGVsc2UgaWYgKGlzTmFOKHZhbCkpIHtcclxuICAgICAgICB2YWwgPSBpbm5lclZhbHVlO1xyXG4gICAgICB9XHJcbiAgICAgIHNldElubmVyVmFsdWUodmFsIHx8IDApO1xyXG4gICAgICBvblZhbHVlQ2hhbmdlRGVib3VuY2VkKHZhbCB8fCAwKTtcclxuICAgIH0sXHJcbiAgICBbaW5uZXJWYWx1ZSwgbWluLCBtYXgsIHNldElubmVyVmFsdWVdXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgc2xpZGVyQ29tbWl0dGVkID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0VGV4dFZhbHVlKChpbm5lclZhbHVlIHx8IDApLnRvRml4ZWQoKSk7XHJcbiAgfSwgW2lubmVyVmFsdWUsIHNldFRleHRWYWx1ZV0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7dGl0bGUgJiYgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tPXt0cnVlfT57dGl0bGV9PC9UeXBvZ3JhcGh5Pn1cclxuICAgICAgPEdyaWQgY29udGFpbmVyPXt0cnVlfSBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAge0ljb24gJiYgPEdyaWQgaXRlbT17dHJ1ZX0+e0ljb259PC9HcmlkPn1cclxuICAgICAgICA8R3JpZCBpdGVtPXt0cnVlfSB4cz17dHJ1ZX0+XHJcbiAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbm5lclZhbHVlIHx8IDB9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvblNsaWRlckNoYW5nZX1cclxuICAgICAgICAgICAgb25DaGFuZ2VDb21taXR0ZWQ9e3NsaWRlckNvbW1pdHRlZH1cclxuICAgICAgICAgICAgbWluPXttaW59XHJcbiAgICAgICAgICAgIG1heD17bWF4fVxyXG4gICAgICAgICAgICBzdGVwPXtzdGVwfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbT17dHJ1ZX0+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgICAgICB2YWx1ZT17dGV4dFZhbHVlfVxyXG4gICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvblRleHRWYWx1ZUNoYW5nZX1cclxuICAgICAgICAgICAgb25CbHVyPXtzbGlkZXJDb21taXR0ZWR9XHJcbiAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICBzdGVwLFxyXG4gICAgICAgICAgICAgIG1pbixcclxuICAgICAgICAgICAgICBtYXgsXHJcbiAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZGRpbmdTbGlkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=