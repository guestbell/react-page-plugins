webpackHotUpdate(37,{

/***/ "./src/lib/background/Controls/sub/Image.tsx":
/*!***************************************************!*\
  !*** ./src/lib/background/Controls/sub/Image.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _common_components_imageOrSrc_ImageOrSrc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/components/imageOrSrc/ImageOrSrc */ "./src/lib/common/components/imageOrSrc/ImageOrSrc.tsx");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






var ImageComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ImageComponent, _React$Component);

  function ImageComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ImageComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ImageComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleChangeIsParallax = function (e) {
      _this.props.ensureModeOn();

      _this.props.onChange({
        isParallax: _this.props.state.isParallax === undefined ? false : !_this.props.state.isParallax
      });
    };

    _this.imageOrSrcOnChange = function (state) {
      _this.props.onChange({
        bgImage: state.image,
        bgImageId: state.imageId,
        bgSrc: state.src
      });
    };

    return _this;
  }

  _createClass(ImageComponent, [{
    key: "render",
    value: function render() {
      var _this$props$state$isP = this.props.state.isParallax,
          isParallax = _this$props$state$isP === void 0 ? true : _this$props$state$isP;
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "w-100 fg--light"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_imageOrSrc_ImageOrSrc__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onChange: this.imageOrSrcOnChange,
        state: {
          imageId: this.props.state.bgImageId,
          image: this.props.state.bgImage,
          src: this.props.state.bgSrc
        },
        UploadImageField: this.props.UploadImageField,
        hideSrcSetField: true
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        style: {
          display: 'flex'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_2__["default"], {
        control: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_1__["default"], {
          onChange: this.handleChangeIsParallax,
          checked: isParallax
        }),
        label: "Is parallax"
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return ImageComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var _default = ImageComponent;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ImageComponent, "ImageComponent", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\background\\Controls\\sub\\Image.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\background\\Controls\\sub\\Image.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2JhY2tncm91bmQvQ29udHJvbHMvc3ViL0ltYWdlLnRzeCJdLCJuYW1lcyI6WyJJbWFnZUNvbXBvbmVudCIsImhhbmRsZUNoYW5nZUlzUGFyYWxsYXgiLCJlIiwicHJvcHMiLCJlbnN1cmVNb2RlT24iLCJvbkNoYW5nZSIsImlzUGFyYWxsYXgiLCJzdGF0ZSIsInVuZGVmaW5lZCIsImltYWdlT3JTcmNPbkNoYW5nZSIsImJnSW1hZ2UiLCJpbWFnZSIsImJnSW1hZ2VJZCIsImltYWdlSWQiLCJiZ1NyYyIsInNyYyIsIlVwbG9hZEltYWdlRmllbGQiLCJkaXNwbGF5IiwiUmVhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7SUFZTUEsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0pDLHNCLEdBQXlCLFVBQUNDLENBQUQsRUFBNEM7QUFDbkUsWUFBS0MsS0FBTCxDQUFXQyxZQUFYOztBQUNBLFlBQUtELEtBQUwsQ0FBV0UsUUFBWCxDQUFvQjtBQUNsQkMsa0JBQVUsRUFDUixNQUFLSCxLQUFMLENBQVdJLEtBQVgsQ0FBaUJELFVBQWpCLEtBQWdDRSxTQUFoQyxHQUNJLEtBREosR0FFSSxDQUFDLE1BQUtMLEtBQUwsQ0FBV0ksS0FBWCxDQUFpQkQ7QUFKTixPQUFwQjtBQU1ELEs7O1VBRURHLGtCLEdBQXFCLFVBQUNGLEtBQUQsRUFBK0I7QUFDbEQsWUFBS0osS0FBTCxDQUFXRSxRQUFYLENBQW9CO0FBQ2xCSyxlQUFPLEVBQUVILEtBQUssQ0FBQ0ksS0FERztBQUVsQkMsaUJBQVMsRUFBRUwsS0FBSyxDQUFDTSxPQUZDO0FBR2xCQyxhQUFLLEVBQUVQLEtBQUssQ0FBQ1E7QUFISyxPQUFwQjtBQUtELEs7Ozs7Ozs7NkJBRVE7QUFBQSxrQ0FHSCxLQUFLWixLQUhGLENBRUxJLEtBRkssQ0FFSUQsVUFGSjtBQUFBLFVBRUlBLFVBRkosc0NBRWlCLElBRmpCO0FBSVAsYUFDRSxpRUFDRSwrREFERixFQUVFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0Usb0RBQUMsZ0ZBQUQ7QUFDRSxnQkFBUSxFQUFFLEtBQUtHLGtCQURqQjtBQUVFLGFBQUssRUFBRTtBQUNMSSxpQkFBTyxFQUFFLEtBQUtWLEtBQUwsQ0FBV0ksS0FBWCxDQUFpQkssU0FEckI7QUFFTEQsZUFBSyxFQUFFLEtBQUtSLEtBQUwsQ0FBV0ksS0FBWCxDQUFpQkcsT0FGbkI7QUFHTEssYUFBRyxFQUFFLEtBQUtaLEtBQUwsQ0FBV0ksS0FBWCxDQUFpQk87QUFIakIsU0FGVDtBQU9FLHdCQUFnQixFQUFFLEtBQUtYLEtBQUwsQ0FBV2EsZ0JBUC9CO0FBUUUsdUJBQWUsRUFBRTtBQVJuQixRQURGLENBRkYsRUFjRSwrREFkRixFQWVFO0FBQUssYUFBSyxFQUFFO0FBQUVDLGlCQUFPLEVBQUU7QUFBWDtBQUFaLFNBQ0Usb0RBQUMsMEVBQUQ7QUFDRSxlQUFPLEVBQ0wsb0RBQUMsZ0VBQUQ7QUFDRSxrQkFBUSxFQUFFLEtBQUtoQixzQkFEakI7QUFFRSxpQkFBTyxFQUFFSztBQUZYLFVBRko7QUFPRSxhQUFLLEVBQUM7QUFQUixRQURGLENBZkYsQ0FERjtBQTZCRDs7Ozs7Ozs7Ozs7RUFwRDBCWSwrQzs7ZUF1RGRsQixjO0FBQUE7Ozs7Ozs7Ozs7MEJBdkRUQSxjIiwiZmlsZSI6IjU0M2JiNDgtMzctd3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFN3aXRjaCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2gnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcclxuaW1wb3J0IHsgQmFja2dyb3VuZFByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMvY29tcG9uZW50JztcclxuaW1wb3J0IEltYWdlT3JTcmMsIHtcclxuICBJbWFnZU9yU3JjT3J5U3RhdGUsXHJcbn0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvaW1hZ2VPclNyYy9JbWFnZU9yU3JjJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VDb21wb25lbnRQcm9wcyB7XHJcbiAgZW5zdXJlTW9kZU9uOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG50eXBlIEN1c3RvbVByb3BzID0gQmFja2dyb3VuZFByb3BzICYgSW1hZ2VDb21wb25lbnRQcm9wcztcclxuXHJcbmV4cG9ydCB0eXBlIEJnSW1hZ2VDb21wb25lbnRQcm9wcyA9IEN1c3RvbVByb3BzO1xyXG5cclxuY2xhc3MgSW1hZ2VDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8QmdJbWFnZUNvbXBvbmVudFByb3BzPiB7XHJcbiAgaGFuZGxlQ2hhbmdlSXNQYXJhbGxheCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5lbnN1cmVNb2RlT24oKTtcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xyXG4gICAgICBpc1BhcmFsbGF4OlxyXG4gICAgICAgIHRoaXMucHJvcHMuc3RhdGUuaXNQYXJhbGxheCA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICA/IGZhbHNlXHJcbiAgICAgICAgICA6ICF0aGlzLnByb3BzLnN0YXRlLmlzUGFyYWxsYXgsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBpbWFnZU9yU3JjT25DaGFuZ2UgPSAoc3RhdGU6IEltYWdlT3JTcmNPcnlTdGF0ZSkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XHJcbiAgICAgIGJnSW1hZ2U6IHN0YXRlLmltYWdlLFxyXG4gICAgICBiZ0ltYWdlSWQ6IHN0YXRlLmltYWdlSWQsXHJcbiAgICAgIGJnU3JjOiBzdGF0ZS5zcmMsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHN0YXRlOiB7IGlzUGFyYWxsYXggPSB0cnVlIH0sXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBmZy0tbGlnaHRcIj5cclxuICAgICAgICAgIDxJbWFnZU9yU3JjXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmltYWdlT3JTcmNPbkNoYW5nZX1cclxuICAgICAgICAgICAgc3RhdGU9e3tcclxuICAgICAgICAgICAgICBpbWFnZUlkOiB0aGlzLnByb3BzLnN0YXRlLmJnSW1hZ2VJZCxcclxuICAgICAgICAgICAgICBpbWFnZTogdGhpcy5wcm9wcy5zdGF0ZS5iZ0ltYWdlLFxyXG4gICAgICAgICAgICAgIHNyYzogdGhpcy5wcm9wcy5zdGF0ZS5iZ1NyYyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgVXBsb2FkSW1hZ2VGaWVsZD17dGhpcy5wcm9wcy5VcGxvYWRJbWFnZUZpZWxkfVxyXG4gICAgICAgICAgICBoaWRlU3JjU2V0RmllbGQ9e3RydWV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlSXNQYXJhbGxheH1cclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzUGFyYWxsYXh9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYWJlbD1cIklzIHBhcmFsbGF4XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlQ29tcG9uZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9