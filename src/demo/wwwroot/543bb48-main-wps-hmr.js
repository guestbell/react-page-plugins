webpackHotUpdate("main",{

/***/ "./node_modules/@material-ui/core/colors/red.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/core/colors/red.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};
var _default = red;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/colors/yellow.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/colors/yellow.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var yellow = {
  50: '#fffde7',
  100: '#fff9c4',
  200: '#fff59d',
  300: '#fff176',
  400: '#ffee58',
  500: '#ffeb3b',
  600: '#fdd835',
  700: '#fbc02d',
  800: '#f9a825',
  900: '#f57f17',
  A100: '#ffff8d',
  A200: '#ffff00',
  A400: '#ffea00',
  A700: '#ffd600'
};
var _default = yellow;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/createStyles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/styles/createStyles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createStyles;

var _styles = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");

// let warnOnce = false;
// To remove in v5
function createStyles(styles) {
  // warning(
  //   warnOnce,
  //   [
  //     'Material-UI: createStyles from @material-ui/core/styles is deprecated.',
  //     'Please use @material-ui/styles/createStyles',
  //   ].join('\n'),
  // );
  // warnOnce = true;
  return (0, _styles.createStyles)(styles);
}

/***/ }),

/***/ "./node_modules/@react-page/ui/lib-es/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@react-page/ui/lib-es/index.js ***!
  \*****************************************************/
/*! exports provided: default, EditorUI, Provider, Trash, Toolbar, DisplayModeToggle, BottomToolbar, ThemeProvider, darkTheme, ImageUpload, ColorPicker, colorToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorUI", function() { return EditorUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trash", function() { return Trash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return Toolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayModeToggle", function() { return DisplayModeToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomToolbar", function() { return BottomToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUpload", function() { return ImageUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPicker", function() { return ColorPicker; });
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
/* harmony import */ var _ColorPicker_colorToString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorPicker/colorToString */ "./node_modules/@react-page/ui/lib-es/ColorPicker/colorToString.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorToString", function() { return _ColorPicker_colorToString__WEBPACK_IMPORTED_MODULE_1__["colorToString"]; });

/* harmony import */ var _ThemeProvider_DarkTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThemeProvider/DarkTheme */ "./node_modules/@react-page/ui/lib-es/ThemeProvider/DarkTheme/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "darkTheme", function() { return _ThemeProvider_DarkTheme__WEBPACK_IMPORTED_MODULE_2__["default"]; });

// something is wrong with lerna, typescript and this import: import { lazyLoad } from '@react-page/core';



var Trash = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_0__["default"])(function () { return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ./Trash/index */ "./node_modules/@react-page/ui/lib-es/Trash/index.js")); });
var Toolbar = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_0__["default"])(function () { return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./Toolbar/index */ "./node_modules/@react-page/ui/lib-es/Toolbar/index.js")); });
var DisplayModeToggle = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_0__["default"])(function () { return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./DisplayModeToggle/index */ "./node_modules/@react-page/ui/lib-es/DisplayModeToggle/index.js")); });
var BottomToolbar = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_0__["default"])(function () { return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./BottomToolbar/index */ "./node_modules/@react-page/ui/lib-es/BottomToolbar/index.js")); });
var EditorUI = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_0__["default"])(function () { return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, /*! ./EditorUI/index */ "./node_modules/@react-page/ui/lib-es/EditorUI/index.js")); });
var ThemeProvider = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_0__["default"])(function () { return __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ./ThemeProvider/index */ "./node_modules/@react-page/ui/lib-es/ThemeProvider/index.js")); });
var ImageUpload = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_0__["default"])(function () { return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ./ImageUpload/index */ "./node_modules/@react-page/ui/lib-es/ImageUpload/index.js")); });
var ColorPicker = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_0__["default"])(function () { return __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! ./ColorPicker/index */ "./node_modules/@react-page/ui/lib-es/ColorPicker/index.js")); });
var Provider = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_0__["default"])(function () { return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ./Provider */ "./node_modules/@react-page/ui/lib-es/Provider/index.js")); });
/* harmony default export */ __webpack_exports__["default"] = (EditorUI);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/guestbell-forms/build/components/base/input/BaseInput.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/guestbell-forms/build/components/base/input/BaseInput.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BaseInput = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var ReactDOM = _interopRequireWildcard(__webpack_require__(/*! react-dom */ "./node_modules/@hot-loader/react-dom/index.js"));

var _react2 = _interopRequireDefault(__webpack_require__(/*! @tippy.js/react */ "./node_modules/@tippy.js/react/esm/index.js"));

var Validators = _interopRequireWildcard(__webpack_require__(/*! ../../../validators */ "./node_modules/guestbell-forms/build/validators/index.js"));

var _Guid = _interopRequireDefault(__webpack_require__(/*! ../../utils/Guid */ "./node_modules/guestbell-forms/build/components/utils/Guid.js"));

var _ShallowEqual = __webpack_require__(/*! ../../utils/ShallowEqual */ "./node_modules/guestbell-forms/build/components/utils/ShallowEqual.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BaseInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BaseInput, _React$Component);

  function BaseInput(props) {
    var _this;

    var subscribe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    _classCallCheck(this, BaseInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BaseInput).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "componentId", (0, _Guid.default)());

    _defineProperty(_assertThisInitialized(_this), "inputRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "containerRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "lastValidation", void 0);

    var res = _this.handleValueChange(_this.props.value, true, [], props, true);

    _this.state = {
      isValid: res.isValid,
      errors: res.errors,
      value: props.value ? props.value : '',
      touched: false,
      disabled: false,
      focused: false,
      handleValueChangeEnabled: true
    };
    _this.containerRef = React.createRef();
    _this.inputRef = React.createRef();
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_this));
    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_this));
    _this.setValid = _this.setValid.bind(_assertThisInitialized(_this));
    _this.focus = _this.focus.bind(_assertThisInitialized(_this));
    _this.scrollTo = _this.scrollTo.bind(_assertThisInitialized(_this));
    _this.setInvalid = _this.setInvalid.bind(_assertThisInitialized(_this));
    _this.disableComponent = _this.disableComponent.bind(_assertThisInitialized(_this));
    _this.enableComponent = _this.enableComponent.bind(_assertThisInitialized(_this));
    _this.touch = _this.touch.bind(_assertThisInitialized(_this));
    _this.unTouch = _this.unTouch.bind(_assertThisInitialized(_this));

    if (subscribe) {
      _this.subscribeSelf(props);
    }

    return _this;
  }

  _createClass(BaseInput, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!this.props.ignoreContext) {
        this.props.formContext && this.props.formContext.unSubscribe(this.componentId);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      if (oldProps.value !== this.props.value || oldProps.validators !== this.props.validators || oldProps.customValidators !== this.props.customValidators || oldProps.required !== this.props.required) {
        this.handleValueChange(this.props.value, true, [], this.props);
      }
    }
  }, {
    key: "scrollTo",
    value: function scrollTo() {
      var domNode = ReactDOM.findDOMNode(this.containerRef.current);
      domNode && domNode.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, {
    key: "touch",
    value: function touch() {
      this.setState({
        touched: true
      });
      this.handleValueChange(this.state.value || '');
    }
  }, {
    key: "unTouch",
    value: function unTouch() {
      this.setState({
        touched: false
      });
    }
  }, {
    key: "disableComponent",
    value: function disableComponent() {
      this.setState({
        disabled: true
      });
    }
  }, {
    key: "enableComponent",
    value: function enableComponent() {
      this.setState({
        disabled: false
      });
    }
  }, {
    key: "focus",
    value: function focus() {
      if (this.inputRef) {
        var domNode = ReactDOM.findDOMNode(this.inputRef.current);
        domNode && domNode.focus();
      }

      this.touch();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var shouldUpdate = !(0, _ShallowEqual.shallowEqual)(this.props, nextProps, !this.props.reRendersWhenContextChanges ? 'formContext' : undefined) || !(0, _ShallowEqual.shallowEqual)(this.state, nextState);
      return shouldUpdate;
    }
  }, {
    key: "getValidationClass",
    value: function getValidationClass(extraErrors) {
      if (!this.props.showValidation || !this.state.touched) {
        return 'validation__success';
      }

      return this.state.isValid && (!this.props.errors || this.props.errors.length === 0) && (!this.state.errors || this.state.errors.length === 0) && (!extraErrors || extraErrors.length === 0) ? 'validation__success' : 'validation__error';
    }
  }, {
    key: "renderDefaultValidation",
    value: function renderDefaultValidation(extraErrors) {
      if (this.props.disabled) {
        return null;
      }

      if (!this.props.showValidation) {
        return null;
      }

      var finalErrors = this.state.errors;

      if (!finalErrors) {
        finalErrors = [];
      }

      if (extraErrors) {
        finalErrors = finalErrors.concat(extraErrors);
      }

      if (this.props.errors) {
        finalErrors = finalErrors.concat(this.props.errors);
      }

      finalErrors = finalErrors.filter(function (i) {
        return i;
      });

      if (finalErrors.length > 0) {
        this.lastValidation = finalErrors.map(function (item, index) {
          return React.createElement("li", {
            key: index,
            className: "validation__item"
          }, item);
        });
      }

      return React.createElement("div", {
        className: "validation__container"
      }, React.createElement("ul", {
        className: "validation__ul"
      }, this.lastValidation));
    }
  }, {
    key: "handleChange",
    value: function handleChange(event, isValid) {
      var errors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var value = event.target.value;

      if (!this.props.onTheFlightValidate || this.props.onTheFlightValidate && this.props.onTheFlightValidate(value)) {
        var res = this.handleValueChange(value, isValid, errors);

        if (this.props.onChange) {
          this.props.onChange(event, res.isValid);
        }
      }
    }
  }, {
    key: "subscribeSelf",
    value: function subscribeSelf(props) {
      if (!props.ignoreContext && props.formContext) {
        props.formContext.subscribe(this.componentId, {
          componentApi: {
            disableComponent: this.disableComponent,
            enableComponent: this.enableComponent,
            touch: this.touch,
            unTouch: this.unTouch,
            scrollTo: this.scrollTo,
            focus: this.focus
          },
          validation: {
            isValid: this.state.isValid,
            errors: this.state.errors,
            name: this.props.validationName ? this.props.validationName : this.props.title ? this.props.title : this.props.label
          }
        });
      }
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(e) {
      this.props.onBlur && this.props.onBlur();
      var state = {
        focused: false
      };

      if (!this.state.touched && this.props.touchOn === 'blur') {
        state = Object.assign(state, {
          touched: true
        });
        this.handleValueChange(this.state.value);
      }

      this.setState(state);
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(e) {
      if (!this.props.disabled) {
        this.props.onFocus && this.props.onFocus(e);
        var state = {
          focused: true
        };

        if (!this.state.touched && this.props.touchOn === 'focus') {
          state = Object.assign(state, {
            touched: true
          });
          this.handleValueChange(this.state.value);
        }

        this.setState(state);
      }
    }
  }, {
    key: "getDisabled",
    value: function getDisabled() {
      return this.state.disabled ? this.state.disabled : this.props.disabled;
    }
  }, {
    key: "setValid",
    value: function setValid() {
      var _this2 = this;

      this.setState(function () {
        return {
          isValid: true,
          errors: []
        };
      }, function () {
        if (!_this2.props.ignoreContext) {
          _this2.props.formContext && _this2.props.formContext.updateCallback(_this2.componentId, {
            validation: {
              isValid: true,
              errors: []
            }
          });
        }
      });
    }
  }, {
    key: "setInvalid",
    value: function setInvalid() {
      var _this3 = this;

      var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.setState(function () {
        return {
          isValid: false,
          errors: errors
        };
      }, function () {
        if (!_this3.props.ignoreContext) {
          _this3.props.formContext && _this3.props.formContext.updateCallback(_this3.componentId, {
            validation: {
              isValid: false,
              errors: errors
            }
          });
        }
      });
    }
  }, {
    key: "renderLabel",
    value: function renderLabel() {
      var touchable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!this.props.tooltip || this.props.tooltip && this.props.title) {
        return React.createElement("span", {
          className: touchable ? '' : 'label--no-touch'
        }, this.props.label);
      }

      return React.createElement(React.Fragment, null, React.createElement("span", {
        className: touchable ? '' : 'label--no-touch'
      }, this.props.label), this.renderTooltip());
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      if (!this.props.tooltip) {
        return this.props.title;
      }

      return React.createElement(React.Fragment, null, this.props.title, this.renderTooltip());
    }
  }, {
    key: "handleValueChange",
    value: function handleValueChange(value) {
      var isValid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var errors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var props = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.props;
      var initializing = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      if (!initializing && !this.state.handleValueChangeEnabled) {
        return {
          isValid: isValid,
          errors: []
        };
      }

      if (props.required && !value) {
        errors.push('Required');
        isValid = false;
      } else {
        if (!props.required && !value) {
          isValid = true;
        } else {
          if (props.validators) {
            isValid = true;
            props.validators.forEach(function (validator) {
              var validInner = false;

              switch (validator) {
                case 'email':
                  validInner = new Validators.EmailValidator().Validate(value, props.required, function (error) {
                    return errors.push(error);
                  });
                  break;

                case 'number':
                  validInner = new Validators.NumberValidator().Validate(value, props.required, function (error) {
                    return errors.push(error);
                  });
                  break;

                case 'latitude':
                  validInner = new Validators.LatitudeValidator().Validate(value, props.required, function (error) {
                    return errors.push(error);
                  });
                  break;

                case 'longitude':
                  validInner = new Validators.LongitudeValidator().Validate(value, props.required, function (error) {
                    return errors.push(error);
                  });
                  break;

                case 'url':
                  validInner = new Validators.UrlValidator().Validate(value, props.required, function (error) {
                    return errors.push(error);
                  });
                  break;

                default:
                  throw new Error("Validator ".concat(validator, " not implemented"));
              }

              if (isValid && !validInner) {
                isValid = validInner;
              }
            });
          }

          if (props.customValidators) {
            props.customValidators.forEach(function (customValidator) {
              var validInner = false;
              validInner = customValidator.Validate(value, props.required, function (error) {
                return errors.push(error);
              });

              if (isValid && !validInner) {
                isValid = validInner;
              }
            });
          }
        }
      }

      props.onErrorsChanged && props.onErrorsChanged(errors);

      if (!initializing) {
        this.setState({
          value: value,
          isValid: isValid,
          errors: errors
        });

        if (!props.ignoreContext) {
          props.formContext && props.formContext.updateCallback(this.componentId, {
            validation: {
              isValid: isValid,
              errors: errors
            }
          });
        }
      }

      return {
        isValid: isValid,
        errors: errors
      };
    }
  }, {
    key: "renderTooltip",
    value: function renderTooltip() {
      var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : React.createElement("span", {
        className: "label--help-icon"
      }, "?");
      return this.props.tooltip ? React.createElement(_react2.default, _extends({
        content: this.props.tooltip,
        placement: "bottom",
        trigger: "mouseenter",
        interactive: true,
        animateFill: false
      }, this.props.tooltipProps), content) : content;
    }
  }]);

  return BaseInput;
}(React.Component);

exports.BaseInput = BaseInput;

_defineProperty(BaseInput, "defaultProps", {
  className: undefined,
  required: false,
  label: undefined,
  disabled: false,
  touchOn: 'focus',
  ignoreContext: false,
  showValidation: true,
  formContext: undefined,
  reRendersWhenContextChanges: false
});

var _default = BaseInput;
exports.default = _default;
//# sourceMappingURL=BaseInput.js.map

/***/ }),

/***/ "./node_modules/guestbell-forms/build/components/inputGroup/InputGroup.js":
/*!********************************************************************************!*\
  !*** ./node_modules/guestbell-forms/build/components/inputGroup/InputGroup.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.InputGroup = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _BaseInput2 = __webpack_require__(/*! ../base/input/BaseInput */ "./node_modules/guestbell-forms/build/components/base/input/BaseInput.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InputGroup =
/*#__PURE__*/
function (_BaseInput) {
  _inherits(InputGroup, _BaseInput);

  // tslint:disable-next-line:no-any
  function InputGroup(props) {
    _classCallCheck(this, InputGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(InputGroup).call(this, props));
  }

  _createClass(InputGroup, [{
    key: "render",
    value: function render() {
      return this.props.title ? React.createElement("div", {
        className: "inputGroup input__group__border " + (this.props.className ? this.props.className : '')
      }, this.props.title && React.createElement("div", {
        className: "inputGroup__header"
      }, this.renderTitle()), React.Children.count(this.props.children) > 0 && React.createElement("div", {
        className: "inputGroup__body"
      }, this.props.children)) : this.props.children;
    }
  }]);

  return InputGroup;
}(_BaseInput2.BaseInput);

exports.InputGroup = InputGroup;

_defineProperty(InputGroup, "defaultProps", {
  ignoreContext: true
});

var _default = InputGroup;
exports.default = _default;
//# sourceMappingURL=InputGroup.js.map

/***/ }),

/***/ "./node_modules/guestbell-forms/build/components/inputGroup/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/guestbell-forms/build/components/inputGroup/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _InputGroup.default;
  }
});

var _InputGroup = _interopRequireWildcard(__webpack_require__(/*! ./InputGroup */ "./node_modules/guestbell-forms/build/components/inputGroup/InputGroup.js"));

Object.keys(_InputGroup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InputGroup[key];
    }
  });
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/guestbell-forms/build/components/utils/Guid.js":
/*!*********************************************************************!*\
  !*** ./node_modules/guestbell-forms/build/components/utils/Guid.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var guid = function guid() {
  var s4 = function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  };

  return "".concat(s4() + s4(), "-").concat(s4(), "-").concat(s4(), "-").concat(s4(), "-").concat(s4() + s4() + s4());
};

var _default = guid;
exports.default = _default;
//# sourceMappingURL=Guid.js.map

/***/ }),

/***/ "./node_modules/guestbell-forms/build/components/utils/ShallowEqual.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/guestbell-forms/build/components/utils/ShallowEqual.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shallowEqual = shallowEqual;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule shallowEqual
 * @typechecks
 * @flow
 */

/*eslint-disable no-self-compare */
var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
// tslint:disable-next-line:no-any

function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}
/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */


function shallowEqual(objA, objB, ignoreKey) {
  if (is(objA, objB)) {
    return true;
  }

  if (_typeof(objA) !== 'object' || objA === null || _typeof(objB) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA).filter(function (k) {
    return k !== ignoreKey;
  });
  var keysB = Object.keys(objB).filter(function (k) {
    return k !== ignoreKey;
  });

  if (keysA.length !== keysB.length) {
    return false;
  } // Test for A's keys different from B.


  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}
//# sourceMappingURL=ShallowEqual.js.map

/***/ }),

/***/ "./node_modules/guestbell-forms/build/validators/EmailValidator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/guestbell-forms/build/validators/EmailValidator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmailValidator = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EmailValidator =
/*#__PURE__*/
function () {
  function EmailValidator() {
    _classCallCheck(this, EmailValidator);
  }

  _createClass(EmailValidator, [{
    key: "Validate",
    value: function Validate(value, isRequired, addError) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        return true;
      }

      addError('Invalid email');
      return false;
    }
  }]);

  return EmailValidator;
}();

exports.EmailValidator = EmailValidator;
//# sourceMappingURL=EmailValidator.js.map

/***/ }),

/***/ "./node_modules/guestbell-forms/build/validators/LatitudeValidator.js":
/*!****************************************************************************!*\
  !*** ./node_modules/guestbell-forms/build/validators/LatitudeValidator.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LatitudeValidator = void 0;

var _NumberValidator = __webpack_require__(/*! ./NumberValidator */ "./node_modules/guestbell-forms/build/validators/NumberValidator.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LatitudeValidator =
/*#__PURE__*/
function () {
  function LatitudeValidator() {
    _classCallCheck(this, LatitudeValidator);
  }

  _createClass(LatitudeValidator, [{
    key: "Validate",
    value: function Validate(value, isRequired, addError) {
      var validNumber = new _NumberValidator.NumberValidator().Validate(value, isRequired, addError);

      if (validNumber) {
        var num = Number(value);

        if (-90 > num || num > 90) {
          addError('Invalid latitude');
          return false;
        }

        return true;
      }

      return false;
    }
  }]);

  return LatitudeValidator;
}();

exports.LatitudeValidator = LatitudeValidator;
//# sourceMappingURL=LatitudeValidator.js.map

/***/ }),

/***/ "./node_modules/guestbell-forms/build/validators/LongitudeValidator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/guestbell-forms/build/validators/LongitudeValidator.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LongitudeValidator = void 0;

var _NumberValidator = __webpack_require__(/*! ./NumberValidator */ "./node_modules/guestbell-forms/build/validators/NumberValidator.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LongitudeValidator =
/*#__PURE__*/
function () {
  function LongitudeValidator() {
    _classCallCheck(this, LongitudeValidator);
  }

  _createClass(LongitudeValidator, [{
    key: "Validate",
    value: function Validate(value, isRequired, addError) {
      var validNumber = new _NumberValidator.NumberValidator().Validate(value, isRequired, addError);

      if (validNumber) {
        var num = Number(value);

        if (-180 > num || num > 180) {
          addError('Invalid longitude');
          return false;
        }

        return true;
      }

      return false;
    }
  }]);

  return LongitudeValidator;
}();

exports.LongitudeValidator = LongitudeValidator;
//# sourceMappingURL=LongitudeValidator.js.map

/***/ }),

/***/ "./node_modules/guestbell-forms/build/validators/NumberValidator.js":
/*!**************************************************************************!*\
  !*** ./node_modules/guestbell-forms/build/validators/NumberValidator.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberValidator = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NumberValidator =
/*#__PURE__*/
function () {
  function NumberValidator() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      min: undefined,
      max: undefined
    };

    _classCallCheck(this, NumberValidator);

    _defineProperty(this, "config", void 0);

    this.config = config;
  }

  _createClass(NumberValidator, [{
    key: "Validate",
    value: function Validate(value, isRequired, addError) {
      var num = Number(value);

      if (!isNaN(num)) {
        if (this.config.min !== undefined && num <= this.config.min) {
          addError('Min: ' + this.config.min);
          return false;
        }

        if (this.config.max !== undefined && num >= this.config.max) {
          addError('Max: ' + (this.config.max - 1));
          return false;
        }

        return true;
      }

      addError('Invalid number');
      return false;
    }
  }]);

  return NumberValidator;
}();

exports.NumberValidator = NumberValidator;
//# sourceMappingURL=NumberValidator.js.map

/***/ }),

/***/ "./node_modules/guestbell-forms/build/validators/UrlValidator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/guestbell-forms/build/validators/UrlValidator.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UrlValidator = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UrlValidator =
/*#__PURE__*/
function () {
  function UrlValidator() {
    _classCallCheck(this, UrlValidator);
  }

  _createClass(UrlValidator, [{
    key: "Validate",
    value: function Validate(value, isRequired, addError) {
      if ( // tslint:disable-next-line:max-line-length
      /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.‌​-]+(:[0-9]+)?|(?:www‌​.|[-;:&=\+\$,\w]+@)[‌​A-Za-z0-9.-]+)((?:\/‌​[\+~%\/.\w-_]*)?\??(‌​?:[-\+=&;%@.\w_]*)#?‌​(?:[\w]*))?)/.test(value)) {
        return true;
      }

      addError('Invalid url');
      return false;
    }
  }]);

  return UrlValidator;
}();

exports.UrlValidator = UrlValidator;
//# sourceMappingURL=UrlValidator.js.map

/***/ }),

/***/ "./node_modules/guestbell-forms/build/validators/base.js":
/*!***************************************************************!*\
  !*** ./node_modules/guestbell-forms/build/validators/base.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=base.js.map

/***/ }),

/***/ "./node_modules/guestbell-forms/build/validators/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/guestbell-forms/build/validators/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  EmailValidator: true,
  LatitudeValidator: true,
  LongitudeValidator: true,
  NumberValidator: true,
  UrlValidator: true
};
Object.defineProperty(exports, "EmailValidator", {
  enumerable: true,
  get: function get() {
    return _EmailValidator.EmailValidator;
  }
});
Object.defineProperty(exports, "LatitudeValidator", {
  enumerable: true,
  get: function get() {
    return _LatitudeValidator.LatitudeValidator;
  }
});
Object.defineProperty(exports, "LongitudeValidator", {
  enumerable: true,
  get: function get() {
    return _LongitudeValidator.LongitudeValidator;
  }
});
Object.defineProperty(exports, "NumberValidator", {
  enumerable: true,
  get: function get() {
    return _NumberValidator.NumberValidator;
  }
});
Object.defineProperty(exports, "UrlValidator", {
  enumerable: true,
  get: function get() {
    return _UrlValidator.UrlValidator;
  }
});

var _base = __webpack_require__(/*! ./base */ "./node_modules/guestbell-forms/build/validators/base.js");

Object.keys(_base).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _base[key];
    }
  });
});

var _EmailValidator = __webpack_require__(/*! ./EmailValidator */ "./node_modules/guestbell-forms/build/validators/EmailValidator.js");

var _LatitudeValidator = __webpack_require__(/*! ./LatitudeValidator */ "./node_modules/guestbell-forms/build/validators/LatitudeValidator.js");

var _LongitudeValidator = __webpack_require__(/*! ./LongitudeValidator */ "./node_modules/guestbell-forms/build/validators/LongitudeValidator.js");

var _NumberValidator = __webpack_require__(/*! ./NumberValidator */ "./node_modules/guestbell-forms/build/validators/NumberValidator.js");

var _UrlValidator = __webpack_require__(/*! ./UrlValidator */ "./node_modules/guestbell-forms/build/validators/UrlValidator.js");
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/lib/common/components/slateEditor/SlateEditor.tsx":
/*!***************************************************************!*\
  !*** ./src/lib/common/components/slateEditor/SlateEditor.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ "./node_modules/slate/dist/index.es.js");
/* harmony import */ var _slate_plugins_fontSize_withFontSizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../slate/plugins/fontSize/withFontSizes */ "./src/lib/slate/plugins/fontSize/withFontSizes.ts");
/* harmony import */ var _slate_plugins_lists_withLists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../slate/plugins/lists/withLists */ "./src/lib/slate/plugins/lists/withLists.ts");
/* harmony import */ var _slate_plugins_heading_withHeadings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../slate/plugins/heading/withHeadings */ "./src/lib/slate/plugins/heading/withHeadings.ts");
/* harmony import */ var _slate_plugins_alignment_withAlignments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../slate/plugins/alignment/withAlignments */ "./src/lib/slate/plugins/alignment/withAlignments.ts");
/* harmony import */ var _slate_plugins_links_withLinks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../slate/plugins/links/withLinks */ "./src/lib/slate/plugins/links/withLinks.ts");
/* harmony import */ var _slate_plugins_marks_withMarks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../slate/plugins/marks/withMarks */ "./src/lib/slate/plugins/marks/withMarks.ts");
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! slate-react */ "./node_modules/slate-react/dist/index.es.js");
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! is-hotkey */ "./node_modules/is-hotkey/lib/index.js");
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(is_hotkey__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _slate_Controls_SlateDefaultControls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../slate/Controls/SlateDefaultControls */ "./src/lib/slate/Controls/SlateDefaultControls.tsx");
/* harmony import */ var _slate_Controls_hoveringToolbar_HoveringToolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../slate/Controls/hoveringToolbar/HoveringToolbar */ "./src/lib/slate/Controls/hoveringToolbar/HoveringToolbar.tsx");
/* harmony import */ var _slate_plugins_heading_HeadingButtonCompact__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../slate/plugins/heading/HeadingButtonCompact */ "./src/lib/slate/plugins/heading/HeadingButtonCompact.tsx");
/* harmony import */ var _slate_plugins_fontSize_FontSizeButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../slate/plugins/fontSize/FontSizeButton */ "./src/lib/slate/plugins/fontSize/FontSizeButton.tsx");
/* harmony import */ var _slate_plugins_alignment_AlignmentButtons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../slate/plugins/alignment/AlignmentButtons */ "./src/lib/slate/plugins/alignment/AlignmentButtons.tsx");
/* harmony import */ var _slate_plugins_lists_ListButtons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../slate/plugins/lists/ListButtons */ "./src/lib/slate/plugins/lists/ListButtons.tsx");
/* harmony import */ var _slate_plugins_links_LinkButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../slate/plugins/links/LinkButton */ "./src/lib/slate/plugins/links/LinkButton.tsx");
/* harmony import */ var _slate_plugins_marks_MarkButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../slate/plugins/marks/MarkButton */ "./src/lib/slate/plugins/marks/MarkButton.tsx");
/* harmony import */ var _material_ui_core_styles_createStyles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/styles/createStyles */ "./node_modules/@material-ui/core/styles/createStyles.js");
/* harmony import */ var _material_ui_core_styles_createStyles__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_createStyles__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_styles_withStyles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/styles/withStyles */ "./node_modules/@material-ui/styles/esm/withStyles/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var guestbell_forms_build_components_inputGroup__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! guestbell-forms/build/components/inputGroup */ "./node_modules/guestbell-forms/build/components/inputGroup/index.js");
/* harmony import */ var guestbell_forms_build_components_inputGroup__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(guestbell_forms_build_components_inputGroup__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/colors/yellow */ "./node_modules/@material-ui/core/colors/yellow.js");
/* harmony import */ var _material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/colors/red */ "./node_modules/@material-ui/core/colors/red.js");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_23__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};


























var styles = function styles(_ref) {
  var spacing = _ref.spacing,
      palette = _ref.palette,
      typography = _ref.typography;
  return _material_ui_core_styles_createStyles__WEBPACK_IMPORTED_MODULE_18___default()({
    toolbar: {
      display: 'flex',
      alignItems: 'center'
    },
    label: {
      display: 'flex',
      alignItems: 'center',
      padding: spacing(),
      fontSize: '1.2rem',
      transition: '0.5s color'
    },
    labelFocused: {
      color: palette.primary.main
    },
    editable: {
      padding: spacing(2),
      background: palette.grey[100]
    },
    characterCountContainer: {
      position: 'absolute',
      right: 3,
      bottom: 3,
      fontSize: typography.caption.fontSize,
      color: palette.grey[500],
      transition: '0.5s color'
    },
    characterCountContainerWarning: {
      color: _material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_22___default.a[700]
    },
    characterCountContainerError: {
      color: _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_23___default.a[700]
    },
    root: {
      position: 'relative'
    }
  });
};

var allHotkeys = _objectSpread({}, _slate_plugins_marks_withMarks__WEBPACK_IMPORTED_MODULE_7__["MARK_HOTKEYS"]);

var SlateEditor = function SlateEditor(props) {
  var _classNames2;

  var classes = props.classes;
  var editor = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](Object(_slate_plugins_fontSize_withFontSizes__WEBPACK_IMPORTED_MODULE_2__["withFontSizes"])()(Object(_slate_plugins_lists_withLists__WEBPACK_IMPORTED_MODULE_3__["withLists"])(Object(_slate_plugins_heading_withHeadings__WEBPACK_IMPORTED_MODULE_4__["withHeadings"])()(Object(_slate_plugins_alignment_withAlignments__WEBPACK_IMPORTED_MODULE_5__["withAlignments"])(Object(_slate_plugins_links_withLinks__WEBPACK_IMPORTED_MODULE_6__["withLinks"])(Object(_slate_plugins_marks_withMarks__WEBPACK_IMPORTED_MODULE_7__["withMarks"])(Object(slate_react__WEBPACK_IMPORTED_MODULE_8__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_1__["createEditor"])())))))))).current;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      hasFocus = _React$useState2[0],
      setHasFocus = _React$useState2[1];

  var onFocus = function onFocus() {
    return setHasFocus(true);
  };

  var onBlur = function onBlur() {
    return setHasFocus(false);
  };

  var allowNewChar = true;
  var chars = 0;
  var charsLeft = 0;
  var progress = 0;

  if (props.maxChars) {
    try {
      chars = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].text(editor, {
        anchor: slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].start(editor, []),
        focus: slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].end(editor, [])
      }).length;
    } catch (error) {
      chars = 0;
    }

    charsLeft = props.maxChars - chars;
    progress = charsLeft / props.maxChars * 100;

    if (charsLeft === 0) {
      allowNewChar = false;
    }
  }

  var onChange = function onChange(val) {
    return props.onChange({
      value: val,
      isValid: allowNewChar,
      isDirty: true
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](guestbell_forms_build_components_inputGroup__WEBPACK_IMPORTED_MODULE_21___default.a, {
    title: props.title
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](slate_react__WEBPACK_IMPORTED_MODULE_8__["Slate"], {
    editor: editor,
    defaultValue: props.value,
    onChange: onChange
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_20___default()('slate-editor', classes.root)
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classes.toolbar
  }, props.label && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_20___default()('slate-editor__label', classes.label, _defineProperty({
      'slate-editor__label--active': hasFocus
    }, classes.labelFocused, hasFocus))
  }, props.label), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_heading_HeadingButtonCompact__WEBPACK_IMPORTED_MODULE_12__["default"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_fontSize_FontSizeButton__WEBPACK_IMPORTED_MODULE_13__["default"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_alignment_AlignmentButtons__WEBPACK_IMPORTED_MODULE_14__["AlignmentButtons"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_lists_ListButtons__WEBPACK_IMPORTED_MODULE_15__["ListButtons"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_links_LinkButton__WEBPACK_IMPORTED_MODULE_16__["LinkButton"], null)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](slate_react__WEBPACK_IMPORTED_MODULE_8__["Editable"], {
    className: classes.editable,
    renderMark: _slate_Controls_SlateDefaultControls__WEBPACK_IMPORTED_MODULE_10__["renderMark"],
    renderElement: _slate_Controls_SlateDefaultControls__WEBPACK_IMPORTED_MODULE_10__["renderElement"],
    onKeyDown: function onKeyDown(event) {
      if (!allowNewChar) {
        if (!(event.keyCode === 8 || event.keyCode === 46)) {
          event.preventDefault();
          return;
        }
      }

      for (var hotkey in allHotkeys) {
        if (is_hotkey__WEBPACK_IMPORTED_MODULE_9___default()(hotkey, event)) {
          event.preventDefault();
          editor.exec({
            type: 'toggle_mark',
            mark: {
              type: _slate_plugins_marks_withMarks__WEBPACK_IMPORTED_MODULE_7__["MARK_HOTKEYS"][hotkey]
            }
          });
        }
      }

      if (is_hotkey__WEBPACK_IMPORTED_MODULE_9___default()('shift+enter', event)) {
        event.preventDefault();
        editor.exec({
          type: 'insert_text',
          text: '\n'
        });
      }
    },
    onFocus: onFocus,
    onBlur: onBlur
  }), props.maxChars && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_20___default()('slate-editor__char-count', classes.characterCountContainer, (_classNames2 = {}, _defineProperty(_classNames2, classes.characterCountContainerWarning, progress <= 10), _defineProperty(_classNames2, 'slate-editor__char-count--warning', progress <= 10), _defineProperty(_classNames2, classes.characterCountContainerError, progress <= 0), _defineProperty(_classNames2, 'slate-editor__char-count--error', progress <= 0), _classNames2))
  }, chars, "/", props.maxChars), editor.selection && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_Controls_hoveringToolbar_HoveringToolbar__WEBPACK_IMPORTED_MODULE_11__["HoveringToolbar"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_marks_MarkButton__WEBPACK_IMPORTED_MODULE_17__["MarkButton"], {
    type: _slate_plugins_marks_withMarks__WEBPACK_IMPORTED_MODULE_7__["MarkTypes"].Bold
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_marks_MarkButton__WEBPACK_IMPORTED_MODULE_17__["MarkButton"], {
    type: _slate_plugins_marks_withMarks__WEBPACK_IMPORTED_MODULE_7__["MarkTypes"].Italic
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_marks_MarkButton__WEBPACK_IMPORTED_MODULE_17__["MarkButton"], {
    type: _slate_plugins_marks_withMarks__WEBPACK_IMPORTED_MODULE_7__["MarkTypes"].Underline
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_links_LinkButton__WEBPACK_IMPORTED_MODULE_16__["LinkButton"], null))))));
};

__signature__(SlateEditor, "useRef{}\nuseState{[hasFocus, setHasFocus](false)}");

var _default = Object(_material_ui_styles_withStyles__WEBPACK_IMPORTED_MODULE_19__["default"])(styles)(SlateEditor);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\slateEditor\\SlateEditor.tsx");
  reactHotLoader.register(allHotkeys, "allHotkeys", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\slateEditor\\SlateEditor.tsx");
  reactHotLoader.register(SlateEditor, "SlateEditor", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\slateEditor\\SlateEditor.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\slateEditor\\SlateEditor.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/lib/slate/index.ts":
/*!********************************!*\
  !*** ./src/lib/slate/index.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _createPlugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPlugin */ "./src/lib/slate/createPlugin.tsx");
/* harmony import */ var _react_page_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-page/core */ "./node_modules/@react-page/core/lib-es/index.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
 // import SlateHtmlRenderer from './Renderer/SlateHtmlRenderer';


var SlateDefaultControls = Object(_react_page_core__WEBPACK_IMPORTED_MODULE_1__["lazyLoad"])(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./Controls/SlateDefaultControls */ "./src/lib/slate/Controls/SlateDefaultControls.tsx"));
});

var _default = function _default(settings) {
  var plugin = Object(_createPlugin__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread({
    Renderer: SlateDefaultControls,
    Controls: SlateDefaultControls
  }, settings));
  return plugin;
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SlateDefaultControls, "SlateDefaultControls", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\index.ts");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\index.ts");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3JlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3llbGxvdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NyZWF0ZVN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHJlYWN0LXBhZ2UvdWkvbGliLWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ndWVzdGJlbGwtZm9ybXMvYnVpbGQvY29tcG9uZW50cy9iYXNlL2lucHV0L0Jhc2VJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ3Vlc3RiZWxsLWZvcm1zL2J1aWxkL2NvbXBvbmVudHMvaW5wdXRHcm91cC9JbnB1dEdyb3VwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ndWVzdGJlbGwtZm9ybXMvYnVpbGQvY29tcG9uZW50cy9pbnB1dEdyb3VwL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ndWVzdGJlbGwtZm9ybXMvYnVpbGQvY29tcG9uZW50cy91dGlscy9HdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ndWVzdGJlbGwtZm9ybXMvYnVpbGQvY29tcG9uZW50cy91dGlscy9TaGFsbG93RXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2d1ZXN0YmVsbC1mb3Jtcy9idWlsZC92YWxpZGF0b3JzL0VtYWlsVmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ndWVzdGJlbGwtZm9ybXMvYnVpbGQvdmFsaWRhdG9ycy9MYXRpdHVkZVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ3Vlc3RiZWxsLWZvcm1zL2J1aWxkL3ZhbGlkYXRvcnMvTG9uZ2l0dWRlVmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ndWVzdGJlbGwtZm9ybXMvYnVpbGQvdmFsaWRhdG9ycy9OdW1iZXJWYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2d1ZXN0YmVsbC1mb3Jtcy9idWlsZC92YWxpZGF0b3JzL1VybFZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ3Vlc3RiZWxsLWZvcm1zL2J1aWxkL3ZhbGlkYXRvcnMvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ3Vlc3RiZWxsLWZvcm1zL2J1aWxkL3ZhbGlkYXRvcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jb21tb24vY29tcG9uZW50cy9zbGF0ZUVkaXRvci9TbGF0ZUVkaXRvci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zbGF0ZS9pbmRleC50cyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJzcGFjaW5nIiwicGFsZXR0ZSIsInR5cG9ncmFwaHkiLCJjcmVhdGVTdHlsZXMiLCJ0b29sYmFyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJsYWJlbCIsInBhZGRpbmciLCJmb250U2l6ZSIsInRyYW5zaXRpb24iLCJsYWJlbEZvY3VzZWQiLCJjb2xvciIsInByaW1hcnkiLCJtYWluIiwiZWRpdGFibGUiLCJiYWNrZ3JvdW5kIiwiZ3JleSIsImNoYXJhY3RlckNvdW50Q29udGFpbmVyIiwicG9zaXRpb24iLCJyaWdodCIsImJvdHRvbSIsImNhcHRpb24iLCJjaGFyYWN0ZXJDb3VudENvbnRhaW5lcldhcm5pbmciLCJ5ZWxsb3ciLCJjaGFyYWN0ZXJDb3VudENvbnRhaW5lckVycm9yIiwicmVkIiwicm9vdCIsImFsbEhvdGtleXMiLCJNQVJLX0hPVEtFWVMiLCJTbGF0ZUVkaXRvciIsInByb3BzIiwiY2xhc3NlcyIsImVkaXRvciIsIlJlYWN0Iiwid2l0aEZvbnRTaXplcyIsIndpdGhMaXN0cyIsIndpdGhIZWFkaW5ncyIsIndpdGhBbGlnbm1lbnRzIiwid2l0aExpbmtzIiwid2l0aE1hcmtzIiwid2l0aFJlYWN0IiwiY3JlYXRlRWRpdG9yIiwiY3VycmVudCIsImhhc0ZvY3VzIiwic2V0SGFzRm9jdXMiLCJvbkZvY3VzIiwib25CbHVyIiwiYWxsb3dOZXdDaGFyIiwiY2hhcnMiLCJjaGFyc0xlZnQiLCJwcm9ncmVzcyIsIm1heENoYXJzIiwiRWRpdG9yIiwidGV4dCIsImFuY2hvciIsInN0YXJ0IiwiZm9jdXMiLCJlbmQiLCJsZW5ndGgiLCJlcnJvciIsIm9uQ2hhbmdlIiwidmFsIiwidmFsdWUiLCJpc1ZhbGlkIiwiaXNEaXJ0eSIsInRpdGxlIiwiY2xhc3NOYW1lcyIsInJlbmRlck1hcmsiLCJyZW5kZXJFbGVtZW50IiwiZXZlbnQiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJob3RrZXkiLCJpc0hvdGtleSIsImV4ZWMiLCJ0eXBlIiwibWFyayIsInNlbGVjdGlvbiIsIk1hcmtUeXBlcyIsIkJvbGQiLCJJdGFsaWMiLCJVbmRlcmxpbmUiLCJ3aXRoU3R5bGVzIiwiU2xhdGVEZWZhdWx0Q29udHJvbHMiLCJsYXp5TG9hZCIsInNldHRpbmdzIiwicGx1Z2luIiwiY3JlYXRlUGx1Z2luIiwiUmVuZGVyZXIiLCJDb250cm9scyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkI7Ozs7Ozs7Ozs7OztBQ3ZCYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCOzs7Ozs7Ozs7Ozs7QUN2QmE7O0FBRWI7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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LENBM0hEOztjQUFNcEQsVzs7ZUE2SFNxRCwrRUFBVSxDQUFDcEYsTUFBRCxDQUFWLENBQW1CK0IsV0FBbkIsQzs7QUFBQTs7Ozs7Ozs7OzswQkF4S1QvQixNOzBCQXVDQTZCLFU7MEJBSUFFLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRk47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXVCQTs7QUFDQTtBQUlBLElBQU1zRCxvQkFBb0IsR0FBR0MsaUVBQVEsQ0FBQztBQUFBLFNBQ3BDLGlLQURvQztBQUFBLENBQUQsQ0FBckM7O2VBSWUsa0JBQ2JDLFFBRGEsRUFFVjtBQUNILE1BQU1DLE1BQU0sR0FBR0MsNkRBQVk7QUFDekJDLFlBQVEsRUFBRUwsb0JBRGU7QUFFekJNLFlBQVEsRUFBRU47QUFGZSxLQUd0QkUsUUFIc0IsRUFBM0I7QUFLQSxTQUFPQyxNQUFQO0FBQ0QsQzs7QUFUYzs7Ozs7Ozs7OzswQkFKVEgsb0IiLCJmaWxlIjoiNTQzYmI0OC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciByZWQgPSB7XG4gIDUwOiAnI2ZmZWJlZScsXG4gIDEwMDogJyNmZmNkZDInLFxuICAyMDA6ICcjZWY5YTlhJyxcbiAgMzAwOiAnI2U1NzM3MycsXG4gIDQwMDogJyNlZjUzNTAnLFxuICA1MDA6ICcjZjQ0MzM2JyxcbiAgNjAwOiAnI2U1MzkzNScsXG4gIDcwMDogJyNkMzJmMmYnLFxuICA4MDA6ICcjYzYyODI4JyxcbiAgOTAwOiAnI2I3MWMxYycsXG4gIEExMDA6ICcjZmY4YTgwJyxcbiAgQTIwMDogJyNmZjUyNTInLFxuICBBNDAwOiAnI2ZmMTc0NCcsXG4gIEE3MDA6ICcjZDUwMDAwJ1xufTtcbnZhciBfZGVmYXVsdCA9IHJlZDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIHllbGxvdyA9IHtcbiAgNTA6ICcjZmZmZGU3JyxcbiAgMTAwOiAnI2ZmZjljNCcsXG4gIDIwMDogJyNmZmY1OWQnLFxuICAzMDA6ICcjZmZmMTc2JyxcbiAgNDAwOiAnI2ZmZWU1OCcsXG4gIDUwMDogJyNmZmViM2InLFxuICA2MDA6ICcjZmRkODM1JyxcbiAgNzAwOiAnI2ZiYzAyZCcsXG4gIDgwMDogJyNmOWE4MjUnLFxuICA5MDA6ICcjZjU3ZjE3JyxcbiAgQTEwMDogJyNmZmZmOGQnLFxuICBBMjAwOiAnI2ZmZmYwMCcsXG4gIEE0MDA6ICcjZmZlYTAwJyxcbiAgQTcwMDogJyNmZmQ2MDAnXG59O1xudmFyIF9kZWZhdWx0ID0geWVsbG93O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVTdHlsZXM7XG5cbnZhciBfc3R5bGVzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9zdHlsZXNcIik7XG5cbi8vIGxldCB3YXJuT25jZSA9IGZhbHNlO1xuLy8gVG8gcmVtb3ZlIGluIHY1XG5mdW5jdGlvbiBjcmVhdGVTdHlsZXMoc3R5bGVzKSB7XG4gIC8vIHdhcm5pbmcoXG4gIC8vICAgd2Fybk9uY2UsXG4gIC8vICAgW1xuICAvLyAgICAgJ01hdGVyaWFsLVVJOiBjcmVhdGVTdHlsZXMgZnJvbSBAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMgaXMgZGVwcmVjYXRlZC4nLFxuICAvLyAgICAgJ1BsZWFzZSB1c2UgQG1hdGVyaWFsLXVpL3N0eWxlcy9jcmVhdGVTdHlsZXMnLFxuICAvLyAgIF0uam9pbignXFxuJyksXG4gIC8vICk7XG4gIC8vIHdhcm5PbmNlID0gdHJ1ZTtcbiAgcmV0dXJuICgwLCBfc3R5bGVzLmNyZWF0ZVN0eWxlcykoc3R5bGVzKTtcbn0iLCIvLyBzb21ldGhpbmcgaXMgd3Jvbmcgd2l0aCBsZXJuYSwgdHlwZXNjcmlwdCBhbmQgdGhpcyBpbXBvcnQ6IGltcG9ydCB7IGxhenlMb2FkIH0gZnJvbSAnQHJlYWN0LXBhZ2UvY29yZSc7XG5pbXBvcnQgbG9hZGFibGUgZnJvbSAnQGxvYWRhYmxlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBjb2xvclRvU3RyaW5nIH0gZnJvbSAnLi9Db2xvclBpY2tlci9jb2xvclRvU3RyaW5nJztcbmltcG9ydCBkYXJrVGhlbWUgZnJvbSAnLi9UaGVtZVByb3ZpZGVyL0RhcmtUaGVtZSc7XG52YXIgVHJhc2ggPSBsb2FkYWJsZShmdW5jdGlvbiAoKSB7IHJldHVybiBpbXBvcnQoJy4vVHJhc2gvaW5kZXgnKTsgfSk7XG52YXIgVG9vbGJhciA9IGxvYWRhYmxlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGltcG9ydCgnLi9Ub29sYmFyL2luZGV4Jyk7IH0pO1xudmFyIERpc3BsYXlNb2RlVG9nZ2xlID0gbG9hZGFibGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gaW1wb3J0KCcuL0Rpc3BsYXlNb2RlVG9nZ2xlL2luZGV4Jyk7IH0pO1xudmFyIEJvdHRvbVRvb2xiYXIgPSBsb2FkYWJsZShmdW5jdGlvbiAoKSB7IHJldHVybiBpbXBvcnQoJy4vQm90dG9tVG9vbGJhci9pbmRleCcpOyB9KTtcbnZhciBFZGl0b3JVSSA9IGxvYWRhYmxlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGltcG9ydCgnLi9FZGl0b3JVSS9pbmRleCcpOyB9KTtcbnZhciBUaGVtZVByb3ZpZGVyID0gbG9hZGFibGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gaW1wb3J0KCcuL1RoZW1lUHJvdmlkZXIvaW5kZXgnKTsgfSk7XG52YXIgSW1hZ2VVcGxvYWQgPSBsb2FkYWJsZShmdW5jdGlvbiAoKSB7IHJldHVybiBpbXBvcnQoJy4vSW1hZ2VVcGxvYWQvaW5kZXgnKTsgfSk7XG52YXIgQ29sb3JQaWNrZXIgPSBsb2FkYWJsZShmdW5jdGlvbiAoKSB7IHJldHVybiBpbXBvcnQoJy4vQ29sb3JQaWNrZXIvaW5kZXgnKTsgfSk7XG52YXIgUHJvdmlkZXIgPSBsb2FkYWJsZShmdW5jdGlvbiAoKSB7IHJldHVybiBpbXBvcnQoJy4vUHJvdmlkZXInKTsgfSk7XG5leHBvcnQgZGVmYXVsdCBFZGl0b3JVSTtcbmV4cG9ydCB7IEVkaXRvclVJLCBQcm92aWRlciwgVHJhc2gsIFRvb2xiYXIsIERpc3BsYXlNb2RlVG9nZ2xlLCBCb3R0b21Ub29sYmFyLCBUaGVtZVByb3ZpZGVyLCBkYXJrVGhlbWUsIEltYWdlVXBsb2FkLCBDb2xvclBpY2tlciwgY29sb3JUb1N0cmluZyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLkJhc2VJbnB1dCA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIFJlYWN0RE9NID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQHRpcHB5LmpzL3JlYWN0XCIpKTtcblxudmFyIFZhbGlkYXRvcnMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vLi4vLi4vdmFsaWRhdG9yc1wiKSk7XG5cbnZhciBfR3VpZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL3V0aWxzL0d1aWRcIikpO1xuXG52YXIgX1NoYWxsb3dFcXVhbCA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy9TaGFsbG93RXF1YWxcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge307IGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBCYXNlSW5wdXQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEJhc2VJbnB1dCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQmFzZUlucHV0KHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgdmFyIHN1YnNjcmliZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdHJ1ZTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCYXNlSW5wdXQpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoQmFzZUlucHV0KS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY29tcG9uZW50SWRcIiwgKDAsIF9HdWlkLmRlZmF1bHQpKCkpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImlucHV0UmVmXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY29udGFpbmVyUmVmXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwibGFzdFZhbGlkYXRpb25cIiwgdm9pZCAwKTtcblxuICAgIHZhciByZXMgPSBfdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZShfdGhpcy5wcm9wcy52YWx1ZSwgdHJ1ZSwgW10sIHByb3BzLCB0cnVlKTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNWYWxpZDogcmVzLmlzVmFsaWQsXG4gICAgICBlcnJvcnM6IHJlcy5lcnJvcnMsXG4gICAgICB2YWx1ZTogcHJvcHMudmFsdWUgPyBwcm9wcy52YWx1ZSA6ICcnLFxuICAgICAgdG91Y2hlZDogZmFsc2UsXG4gICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICBmb2N1c2VkOiBmYWxzZSxcbiAgICAgIGhhbmRsZVZhbHVlQ2hhbmdlRW5hYmxlZDogdHJ1ZVxuICAgIH07XG4gICAgX3RoaXMuY29udGFpbmVyUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgX3RoaXMuaW5wdXRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICBfdGhpcy5oYW5kbGVDaGFuZ2UgPSBfdGhpcy5oYW5kbGVDaGFuZ2UuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlQmx1ciA9IF90aGlzLmhhbmRsZUJsdXIuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlRm9jdXMgPSBfdGhpcy5oYW5kbGVGb2N1cy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5zZXRWYWxpZCA9IF90aGlzLnNldFZhbGlkLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmZvY3VzID0gX3RoaXMuZm9jdXMuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuc2Nyb2xsVG8gPSBfdGhpcy5zY3JvbGxUby5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5zZXRJbnZhbGlkID0gX3RoaXMuc2V0SW52YWxpZC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5kaXNhYmxlQ29tcG9uZW50ID0gX3RoaXMuZGlzYWJsZUNvbXBvbmVudC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5lbmFibGVDb21wb25lbnQgPSBfdGhpcy5lbmFibGVDb21wb25lbnQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMudG91Y2ggPSBfdGhpcy50b3VjaC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy51blRvdWNoID0gX3RoaXMudW5Ub3VjaC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcblxuICAgIGlmIChzdWJzY3JpYmUpIHtcbiAgICAgIF90aGlzLnN1YnNjcmliZVNlbGYocHJvcHMpO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhCYXNlSW5wdXQsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmlnbm9yZUNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5mb3JtQ29udGV4dCAmJiB0aGlzLnByb3BzLmZvcm1Db250ZXh0LnVuU3Vic2NyaWJlKHRoaXMuY29tcG9uZW50SWQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKG9sZFByb3BzKSB7XG4gICAgICBpZiAob2xkUHJvcHMudmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUgfHwgb2xkUHJvcHMudmFsaWRhdG9ycyAhPT0gdGhpcy5wcm9wcy52YWxpZGF0b3JzIHx8IG9sZFByb3BzLmN1c3RvbVZhbGlkYXRvcnMgIT09IHRoaXMucHJvcHMuY3VzdG9tVmFsaWRhdG9ycyB8fCBvbGRQcm9wcy5yZXF1aXJlZCAhPT0gdGhpcy5wcm9wcy5yZXF1aXJlZCkge1xuICAgICAgICB0aGlzLmhhbmRsZVZhbHVlQ2hhbmdlKHRoaXMucHJvcHMudmFsdWUsIHRydWUsIFtdLCB0aGlzLnByb3BzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2Nyb2xsVG9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2Nyb2xsVG8oKSB7XG4gICAgICB2YXIgZG9tTm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMuY29udGFpbmVyUmVmLmN1cnJlbnQpO1xuICAgICAgZG9tTm9kZSAmJiBkb21Ob2RlLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidG91Y2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG91Y2goKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdG91Y2hlZDogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLmhhbmRsZVZhbHVlQ2hhbmdlKHRoaXMuc3RhdGUudmFsdWUgfHwgJycpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1blRvdWNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuVG91Y2goKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdG91Y2hlZDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkaXNhYmxlQ29tcG9uZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2FibGVDb21wb25lbnQoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGlzYWJsZWQ6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJlbmFibGVDb21wb25lbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5hYmxlQ29tcG9uZW50KCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRpc2FibGVkOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvY3VzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgICAgaWYgKHRoaXMuaW5wdXRSZWYpIHtcbiAgICAgICAgdmFyIGRvbU5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLmlucHV0UmVmLmN1cnJlbnQpO1xuICAgICAgICBkb21Ob2RlICYmIGRvbU5vZGUuZm9jdXMoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy50b3VjaCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzaG91bGRDb21wb25lbnRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICB2YXIgc2hvdWxkVXBkYXRlID0gISgwLCBfU2hhbGxvd0VxdWFsLnNoYWxsb3dFcXVhbCkodGhpcy5wcm9wcywgbmV4dFByb3BzLCAhdGhpcy5wcm9wcy5yZVJlbmRlcnNXaGVuQ29udGV4dENoYW5nZXMgPyAnZm9ybUNvbnRleHQnIDogdW5kZWZpbmVkKSB8fCAhKDAsIF9TaGFsbG93RXF1YWwuc2hhbGxvd0VxdWFsKSh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpO1xuICAgICAgcmV0dXJuIHNob3VsZFVwZGF0ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0VmFsaWRhdGlvbkNsYXNzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbGlkYXRpb25DbGFzcyhleHRyYUVycm9ycykge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLnNob3dWYWxpZGF0aW9uIHx8ICF0aGlzLnN0YXRlLnRvdWNoZWQpIHtcbiAgICAgICAgcmV0dXJuICd2YWxpZGF0aW9uX19zdWNjZXNzJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXNWYWxpZCAmJiAoIXRoaXMucHJvcHMuZXJyb3JzIHx8IHRoaXMucHJvcHMuZXJyb3JzLmxlbmd0aCA9PT0gMCkgJiYgKCF0aGlzLnN0YXRlLmVycm9ycyB8fCB0aGlzLnN0YXRlLmVycm9ycy5sZW5ndGggPT09IDApICYmICghZXh0cmFFcnJvcnMgfHwgZXh0cmFFcnJvcnMubGVuZ3RoID09PSAwKSA/ICd2YWxpZGF0aW9uX19zdWNjZXNzJyA6ICd2YWxpZGF0aW9uX19lcnJvcic7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckRlZmF1bHRWYWxpZGF0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckRlZmF1bHRWYWxpZGF0aW9uKGV4dHJhRXJyb3JzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLnByb3BzLnNob3dWYWxpZGF0aW9uKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgZmluYWxFcnJvcnMgPSB0aGlzLnN0YXRlLmVycm9ycztcblxuICAgICAgaWYgKCFmaW5hbEVycm9ycykge1xuICAgICAgICBmaW5hbEVycm9ycyA9IFtdO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXh0cmFFcnJvcnMpIHtcbiAgICAgICAgZmluYWxFcnJvcnMgPSBmaW5hbEVycm9ycy5jb25jYXQoZXh0cmFFcnJvcnMpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5lcnJvcnMpIHtcbiAgICAgICAgZmluYWxFcnJvcnMgPSBmaW5hbEVycm9ycy5jb25jYXQodGhpcy5wcm9wcy5lcnJvcnMpO1xuICAgICAgfVxuXG4gICAgICBmaW5hbEVycm9ycyA9IGZpbmFsRXJyb3JzLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZmluYWxFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmxhc3RWYWxpZGF0aW9uID0gZmluYWxFcnJvcnMubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge1xuICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJ2YWxpZGF0aW9uX19pdGVtXCJcbiAgICAgICAgICB9LCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcInZhbGlkYXRpb25fX2NvbnRhaW5lclwiXG4gICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwidmFsaWRhdGlvbl9fdWxcIlxuICAgICAgfSwgdGhpcy5sYXN0VmFsaWRhdGlvbikpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVDaGFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50LCBpc1ZhbGlkKSB7XG4gICAgICB2YXIgZXJyb3JzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBbXTtcbiAgICAgIHZhciB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgaWYgKCF0aGlzLnByb3BzLm9uVGhlRmxpZ2h0VmFsaWRhdGUgfHwgdGhpcy5wcm9wcy5vblRoZUZsaWdodFZhbGlkYXRlICYmIHRoaXMucHJvcHMub25UaGVGbGlnaHRWYWxpZGF0ZSh2YWx1ZSkpIHtcbiAgICAgICAgdmFyIHJlcyA9IHRoaXMuaGFuZGxlVmFsdWVDaGFuZ2UodmFsdWUsIGlzVmFsaWQsIGVycm9ycyk7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCByZXMuaXNWYWxpZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3Vic2NyaWJlU2VsZlwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmVTZWxmKHByb3BzKSB7XG4gICAgICBpZiAoIXByb3BzLmlnbm9yZUNvbnRleHQgJiYgcHJvcHMuZm9ybUNvbnRleHQpIHtcbiAgICAgICAgcHJvcHMuZm9ybUNvbnRleHQuc3Vic2NyaWJlKHRoaXMuY29tcG9uZW50SWQsIHtcbiAgICAgICAgICBjb21wb25lbnRBcGk6IHtcbiAgICAgICAgICAgIGRpc2FibGVDb21wb25lbnQ6IHRoaXMuZGlzYWJsZUNvbXBvbmVudCxcbiAgICAgICAgICAgIGVuYWJsZUNvbXBvbmVudDogdGhpcy5lbmFibGVDb21wb25lbnQsXG4gICAgICAgICAgICB0b3VjaDogdGhpcy50b3VjaCxcbiAgICAgICAgICAgIHVuVG91Y2g6IHRoaXMudW5Ub3VjaCxcbiAgICAgICAgICAgIHNjcm9sbFRvOiB0aGlzLnNjcm9sbFRvLFxuICAgICAgICAgICAgZm9jdXM6IHRoaXMuZm9jdXNcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZhbGlkYXRpb246IHtcbiAgICAgICAgICAgIGlzVmFsaWQ6IHRoaXMuc3RhdGUuaXNWYWxpZCxcbiAgICAgICAgICAgIGVycm9yczogdGhpcy5zdGF0ZS5lcnJvcnMsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLnByb3BzLnZhbGlkYXRpb25OYW1lID8gdGhpcy5wcm9wcy52YWxpZGF0aW9uTmFtZSA6IHRoaXMucHJvcHMudGl0bGUgPyB0aGlzLnByb3BzLnRpdGxlIDogdGhpcy5wcm9wcy5sYWJlbFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZUJsdXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlQmx1cihlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQmx1ciAmJiB0aGlzLnByb3BzLm9uQmx1cigpO1xuICAgICAgdmFyIHN0YXRlID0ge1xuICAgICAgICBmb2N1c2VkOiBmYWxzZVxuICAgICAgfTtcblxuICAgICAgaWYgKCF0aGlzLnN0YXRlLnRvdWNoZWQgJiYgdGhpcy5wcm9wcy50b3VjaE9uID09PSAnYmx1cicpIHtcbiAgICAgICAgc3RhdGUgPSBPYmplY3QuYXNzaWduKHN0YXRlLCB7XG4gICAgICAgICAgdG91Y2hlZDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZSh0aGlzLnN0YXRlLnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZUZvY3VzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUZvY3VzKGUpIHtcbiAgICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uRm9jdXMgJiYgdGhpcy5wcm9wcy5vbkZvY3VzKGUpO1xuICAgICAgICB2YXIgc3RhdGUgPSB7XG4gICAgICAgICAgZm9jdXNlZDogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS50b3VjaGVkICYmIHRoaXMucHJvcHMudG91Y2hPbiA9PT0gJ2ZvY3VzJykge1xuICAgICAgICAgIHN0YXRlID0gT2JqZWN0LmFzc2lnbihzdGF0ZSwge1xuICAgICAgICAgICAgdG91Y2hlZDogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuaGFuZGxlVmFsdWVDaGFuZ2UodGhpcy5zdGF0ZS52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RGlzYWJsZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGlzYWJsZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5kaXNhYmxlZCA/IHRoaXMuc3RhdGUuZGlzYWJsZWQgOiB0aGlzLnByb3BzLmRpc2FibGVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRWYWxpZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRWYWxpZCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpc1ZhbGlkOiB0cnVlLFxuICAgICAgICAgIGVycm9yczogW11cbiAgICAgICAgfTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFfdGhpczIucHJvcHMuaWdub3JlQ29udGV4dCkge1xuICAgICAgICAgIF90aGlzMi5wcm9wcy5mb3JtQ29udGV4dCAmJiBfdGhpczIucHJvcHMuZm9ybUNvbnRleHQudXBkYXRlQ2FsbGJhY2soX3RoaXMyLmNvbXBvbmVudElkLCB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uOiB7XG4gICAgICAgICAgICAgIGlzVmFsaWQ6IHRydWUsXG4gICAgICAgICAgICAgIGVycm9yczogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldEludmFsaWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0SW52YWxpZCgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgZXJyb3JzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbXTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxuICAgICAgICAgIGVycm9yczogZXJyb3JzXG4gICAgICAgIH07XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghX3RoaXMzLnByb3BzLmlnbm9yZUNvbnRleHQpIHtcbiAgICAgICAgICBfdGhpczMucHJvcHMuZm9ybUNvbnRleHQgJiYgX3RoaXMzLnByb3BzLmZvcm1Db250ZXh0LnVwZGF0ZUNhbGxiYWNrKF90aGlzMy5jb21wb25lbnRJZCwge1xuICAgICAgICAgICAgdmFsaWRhdGlvbjoge1xuICAgICAgICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcbiAgICAgICAgICAgICAgZXJyb3JzOiBlcnJvcnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckxhYmVsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckxhYmVsKCkge1xuICAgICAgdmFyIHRvdWNoYWJsZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG5cbiAgICAgIGlmICghdGhpcy5wcm9wcy50b29sdGlwIHx8IHRoaXMucHJvcHMudG9vbHRpcCAmJiB0aGlzLnByb3BzLnRpdGxlKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiB0b3VjaGFibGUgPyAnJyA6ICdsYWJlbC0tbm8tdG91Y2gnXG4gICAgICAgIH0sIHRoaXMucHJvcHMubGFiZWwpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IHRvdWNoYWJsZSA/ICcnIDogJ2xhYmVsLS1uby10b3VjaCdcbiAgICAgIH0sIHRoaXMucHJvcHMubGFiZWwpLCB0aGlzLnJlbmRlclRvb2x0aXAoKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclRpdGxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclRpdGxlKCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLnRvb2x0aXApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMudGl0bGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCB0aGlzLnByb3BzLnRpdGxlLCB0aGlzLnJlbmRlclRvb2x0aXAoKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZVZhbHVlQ2hhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVZhbHVlQ2hhbmdlKHZhbHVlKSB7XG4gICAgICB2YXIgaXNWYWxpZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdHJ1ZTtcbiAgICAgIHZhciBlcnJvcnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IFtdO1xuICAgICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB0aGlzLnByb3BzO1xuICAgICAgdmFyIGluaXRpYWxpemluZyA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDogZmFsc2U7XG5cbiAgICAgIGlmICghaW5pdGlhbGl6aW5nICYmICF0aGlzLnN0YXRlLmhhbmRsZVZhbHVlQ2hhbmdlRW5hYmxlZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlzVmFsaWQ6IGlzVmFsaWQsXG4gICAgICAgICAgZXJyb3JzOiBbXVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMucmVxdWlyZWQgJiYgIXZhbHVlKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKCdSZXF1aXJlZCcpO1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXByb3BzLnJlcXVpcmVkICYmICF2YWx1ZSkge1xuICAgICAgICAgIGlzVmFsaWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChwcm9wcy52YWxpZGF0b3JzKSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIHByb3BzLnZhbGlkYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgIHZhciB2YWxpZElubmVyID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgc3dpdGNoICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgICAgICAgICAgICB2YWxpZElubmVyID0gbmV3IFZhbGlkYXRvcnMuRW1haWxWYWxpZGF0b3IoKS5WYWxpZGF0ZSh2YWx1ZSwgcHJvcHMucmVxdWlyZWQsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgICB2YWxpZElubmVyID0gbmV3IFZhbGlkYXRvcnMuTnVtYmVyVmFsaWRhdG9yKCkuVmFsaWRhdGUodmFsdWUsIHByb3BzLnJlcXVpcmVkLCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdsYXRpdHVkZSc6XG4gICAgICAgICAgICAgICAgICB2YWxpZElubmVyID0gbmV3IFZhbGlkYXRvcnMuTGF0aXR1ZGVWYWxpZGF0b3IoKS5WYWxpZGF0ZSh2YWx1ZSwgcHJvcHMucmVxdWlyZWQsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2xvbmdpdHVkZSc6XG4gICAgICAgICAgICAgICAgICB2YWxpZElubmVyID0gbmV3IFZhbGlkYXRvcnMuTG9uZ2l0dWRlVmFsaWRhdG9yKCkuVmFsaWRhdGUodmFsdWUsIHByb3BzLnJlcXVpcmVkLCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICd1cmwnOlxuICAgICAgICAgICAgICAgICAgdmFsaWRJbm5lciA9IG5ldyBWYWxpZGF0b3JzLlVybFZhbGlkYXRvcigpLlZhbGlkYXRlKHZhbHVlLCBwcm9wcy5yZXF1aXJlZCwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcnMucHVzaChlcnJvcik7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlZhbGlkYXRvciBcIi5jb25jYXQodmFsaWRhdG9yLCBcIiBub3QgaW1wbGVtZW50ZWRcIikpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGlzVmFsaWQgJiYgIXZhbGlkSW5uZXIpIHtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gdmFsaWRJbm5lcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHByb3BzLmN1c3RvbVZhbGlkYXRvcnMpIHtcbiAgICAgICAgICAgIHByb3BzLmN1c3RvbVZhbGlkYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAoY3VzdG9tVmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgIHZhciB2YWxpZElubmVyID0gZmFsc2U7XG4gICAgICAgICAgICAgIHZhbGlkSW5uZXIgPSBjdXN0b21WYWxpZGF0b3IuVmFsaWRhdGUodmFsdWUsIHByb3BzLnJlcXVpcmVkLCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBpZiAoaXNWYWxpZCAmJiAhdmFsaWRJbm5lcikge1xuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSB2YWxpZElubmVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJvcHMub25FcnJvcnNDaGFuZ2VkICYmIHByb3BzLm9uRXJyb3JzQ2hhbmdlZChlcnJvcnMpO1xuXG4gICAgICBpZiAoIWluaXRpYWxpemluZykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgaXNWYWxpZDogaXNWYWxpZCxcbiAgICAgICAgICBlcnJvcnM6IGVycm9yc1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXByb3BzLmlnbm9yZUNvbnRleHQpIHtcbiAgICAgICAgICBwcm9wcy5mb3JtQ29udGV4dCAmJiBwcm9wcy5mb3JtQ29udGV4dC51cGRhdGVDYWxsYmFjayh0aGlzLmNvbXBvbmVudElkLCB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uOiB7XG4gICAgICAgICAgICAgIGlzVmFsaWQ6IGlzVmFsaWQsXG4gICAgICAgICAgICAgIGVycm9yczogZXJyb3JzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNWYWxpZDogaXNWYWxpZCxcbiAgICAgICAgZXJyb3JzOiBlcnJvcnNcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclRvb2x0aXBcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyVG9vbHRpcCgpIHtcbiAgICAgIHZhciBjb250ZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJsYWJlbC0taGVscC1pY29uXCJcbiAgICAgIH0sIFwiP1wiKTtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnRvb2x0aXAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KF9yZWFjdDIuZGVmYXVsdCwgX2V4dGVuZHMoe1xuICAgICAgICBjb250ZW50OiB0aGlzLnByb3BzLnRvb2x0aXAsXG4gICAgICAgIHBsYWNlbWVudDogXCJib3R0b21cIixcbiAgICAgICAgdHJpZ2dlcjogXCJtb3VzZWVudGVyXCIsXG4gICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgICAgICBhbmltYXRlRmlsbDogZmFsc2VcbiAgICAgIH0sIHRoaXMucHJvcHMudG9vbHRpcFByb3BzKSwgY29udGVudCkgOiBjb250ZW50O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBCYXNlSW5wdXQ7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuQmFzZUlucHV0ID0gQmFzZUlucHV0O1xuXG5fZGVmaW5lUHJvcGVydHkoQmFzZUlucHV0LCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICByZXF1aXJlZDogZmFsc2UsXG4gIGxhYmVsOiB1bmRlZmluZWQsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgdG91Y2hPbjogJ2ZvY3VzJyxcbiAgaWdub3JlQ29udGV4dDogZmFsc2UsXG4gIHNob3dWYWxpZGF0aW9uOiB0cnVlLFxuICBmb3JtQ29udGV4dDogdW5kZWZpbmVkLFxuICByZVJlbmRlcnNXaGVuQ29udGV4dENoYW5nZXM6IGZhbHNlXG59KTtcblxudmFyIF9kZWZhdWx0ID0gQmFzZUlucHV0O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1CYXNlSW5wdXQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLklucHV0R3JvdXAgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfQmFzZUlucHV0MiA9IHJlcXVpcmUoXCIuLi9iYXNlL2lucHV0L0Jhc2VJbnB1dFwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIElucHV0R3JvdXAgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9CYXNlSW5wdXQpIHtcbiAgX2luaGVyaXRzKElucHV0R3JvdXAsIF9CYXNlSW5wdXQpO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgZnVuY3Rpb24gSW5wdXRHcm91cChwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnB1dEdyb3VwKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoSW5wdXRHcm91cCkuY2FsbCh0aGlzLCBwcm9wcykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKElucHV0R3JvdXAsIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy50aXRsZSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiaW5wdXRHcm91cCBpbnB1dF9fZ3JvdXBfX2JvcmRlciBcIiArICh0aGlzLnByb3BzLmNsYXNzTmFtZSA/IHRoaXMucHJvcHMuY2xhc3NOYW1lIDogJycpXG4gICAgICB9LCB0aGlzLnByb3BzLnRpdGxlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiaW5wdXRHcm91cF9faGVhZGVyXCJcbiAgICAgIH0sIHRoaXMucmVuZGVyVGl0bGUoKSksIFJlYWN0LkNoaWxkcmVuLmNvdW50KHRoaXMucHJvcHMuY2hpbGRyZW4pID4gMCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImlucHV0R3JvdXBfX2JvZHlcIlxuICAgICAgfSwgdGhpcy5wcm9wcy5jaGlsZHJlbikpIDogdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSW5wdXRHcm91cDtcbn0oX0Jhc2VJbnB1dDIuQmFzZUlucHV0KTtcblxuZXhwb3J0cy5JbnB1dEdyb3VwID0gSW5wdXRHcm91cDtcblxuX2RlZmluZVByb3BlcnR5KElucHV0R3JvdXAsIFwiZGVmYXVsdFByb3BzXCIsIHtcbiAgaWdub3JlQ29udGV4dDogdHJ1ZVxufSk7XG5cbnZhciBfZGVmYXVsdCA9IElucHV0R3JvdXA7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlucHV0R3JvdXAuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgX2V4cG9ydE5hbWVzID0ge307XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWZhdWx0XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9JbnB1dEdyb3VwLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX0lucHV0R3JvdXAgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9JbnB1dEdyb3VwXCIpKTtcblxuT2JqZWN0LmtleXMoX0lucHV0R3JvdXApLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX2V4cG9ydE5hbWVzLCBrZXkpKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9JbnB1dEdyb3VwW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIGd1aWQgPSBmdW5jdGlvbiBndWlkKCkge1xuICB2YXIgczQgPSBmdW5jdGlvbiBzNCgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtcbiAgfTtcblxuICByZXR1cm4gXCJcIi5jb25jYXQoczQoKSArIHM0KCksIFwiLVwiKS5jb25jYXQoczQoKSwgXCItXCIpLmNvbmNhdChzNCgpLCBcIi1cIikuY29uY2F0KHM0KCksIFwiLVwiKS5jb25jYXQoczQoKSArIHM0KCkgKyBzNCgpKTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IGd1aWQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUd1aWQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnNoYWxsb3dFcXVhbCA9IHNoYWxsb3dFcXVhbDtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuLyoqXHJcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxyXG4gKlxyXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcclxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxyXG4gKlxyXG4gKiBAcHJvdmlkZXNNb2R1bGUgc2hhbGxvd0VxdWFsXHJcbiAqIEB0eXBlY2hlY2tzXHJcbiAqIEBmbG93XHJcbiAqL1xuXG4vKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSAqL1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbi8qKlxyXG4gKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXHJcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xyXG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcblxuZnVuY3Rpb24gaXMoeCwgeSkge1xuICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gIGlmICh4ID09PSB5KSB7XG4gICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAvLyBBZGRlZCB0aGUgbm9uemVybyB5IGNoZWNrIHRvIG1ha2UgRmxvdyBoYXBweSwgYnV0IGl0IGlzIHJlZHVuZGFudFxuICAgIHJldHVybiB4ICE9PSAwIHx8IHkgIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICB9IGVsc2Uge1xuICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgfVxufVxuLyoqXHJcbiAqIFBlcmZvcm1zIGVxdWFsaXR5IGJ5IGl0ZXJhdGluZyB0aHJvdWdoIGtleXMgb24gYW4gb2JqZWN0IGFuZCByZXR1cm5pbmcgZmFsc2VcclxuICogd2hlbiBhbnkga2V5IGhhcyB2YWx1ZXMgd2hpY2ggYXJlIG5vdCBzdHJpY3RseSBlcXVhbCBiZXR3ZWVuIHRoZSBhcmd1bWVudHMuXHJcbiAqIFJldHVybnMgdHJ1ZSB3aGVuIHRoZSB2YWx1ZXMgb2YgYWxsIGtleXMgYXJlIHN0cmljdGx5IGVxdWFsLlxyXG4gKi9cblxuXG5mdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQiwgaWdub3JlS2V5KSB7XG4gIGlmIChpcyhvYmpBLCBvYmpCKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKF90eXBlb2Yob2JqQSkgIT09ICdvYmplY3QnIHx8IG9iakEgPT09IG51bGwgfHwgX3R5cGVvZihvYmpCKSAhPT0gJ29iamVjdCcgfHwgb2JqQiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpLmZpbHRlcihmdW5jdGlvbiAoaykge1xuICAgIHJldHVybiBrICE9PSBpZ25vcmVLZXk7XG4gIH0pO1xuICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKS5maWx0ZXIoZnVuY3Rpb24gKGspIHtcbiAgICByZXR1cm4gayAhPT0gaWdub3JlS2V5O1xuICB9KTtcblxuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gLy8gVGVzdCBmb3IgQSdzIGtleXMgZGlmZmVyZW50IGZyb20gQi5cblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5c0EubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIWhhc093blByb3BlcnR5LmNhbGwob2JqQiwga2V5c0FbaV0pIHx8ICFpcyhvYmpBW2tleXNBW2ldXSwgb2JqQltrZXlzQVtpXV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TaGFsbG93RXF1YWwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkVtYWlsVmFsaWRhdG9yID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbnZhciBFbWFpbFZhbGlkYXRvciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEVtYWlsVmFsaWRhdG9yKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFbWFpbFZhbGlkYXRvcik7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRW1haWxWYWxpZGF0b3IsIFt7XG4gICAga2V5OiBcIlZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIFZhbGlkYXRlKHZhbHVlLCBpc1JlcXVpcmVkLCBhZGRFcnJvcikge1xuICAgICAgaWYgKC9eXFx3KyhbXFwuLV0/XFx3KykqQFxcdysoW1xcLi1dP1xcdyspKihcXC5cXHd7MiwzfSkrJC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGFkZEVycm9yKCdJbnZhbGlkIGVtYWlsJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEVtYWlsVmFsaWRhdG9yO1xufSgpO1xuXG5leHBvcnRzLkVtYWlsVmFsaWRhdG9yID0gRW1haWxWYWxpZGF0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1FbWFpbFZhbGlkYXRvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuTGF0aXR1ZGVWYWxpZGF0b3IgPSB2b2lkIDA7XG5cbnZhciBfTnVtYmVyVmFsaWRhdG9yID0gcmVxdWlyZShcIi4vTnVtYmVyVmFsaWRhdG9yXCIpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbnZhciBMYXRpdHVkZVZhbGlkYXRvciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIExhdGl0dWRlVmFsaWRhdG9yKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMYXRpdHVkZVZhbGlkYXRvcik7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTGF0aXR1ZGVWYWxpZGF0b3IsIFt7XG4gICAga2V5OiBcIlZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIFZhbGlkYXRlKHZhbHVlLCBpc1JlcXVpcmVkLCBhZGRFcnJvcikge1xuICAgICAgdmFyIHZhbGlkTnVtYmVyID0gbmV3IF9OdW1iZXJWYWxpZGF0b3IuTnVtYmVyVmFsaWRhdG9yKCkuVmFsaWRhdGUodmFsdWUsIGlzUmVxdWlyZWQsIGFkZEVycm9yKTtcblxuICAgICAgaWYgKHZhbGlkTnVtYmVyKSB7XG4gICAgICAgIHZhciBudW0gPSBOdW1iZXIodmFsdWUpO1xuXG4gICAgICAgIGlmICgtOTAgPiBudW0gfHwgbnVtID4gOTApIHtcbiAgICAgICAgICBhZGRFcnJvcignSW52YWxpZCBsYXRpdHVkZScpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExhdGl0dWRlVmFsaWRhdG9yO1xufSgpO1xuXG5leHBvcnRzLkxhdGl0dWRlVmFsaWRhdG9yID0gTGF0aXR1ZGVWYWxpZGF0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1MYXRpdHVkZVZhbGlkYXRvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuTG9uZ2l0dWRlVmFsaWRhdG9yID0gdm9pZCAwO1xuXG52YXIgX051bWJlclZhbGlkYXRvciA9IHJlcXVpcmUoXCIuL051bWJlclZhbGlkYXRvclwiKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG52YXIgTG9uZ2l0dWRlVmFsaWRhdG9yID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTG9uZ2l0dWRlVmFsaWRhdG9yKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMb25naXR1ZGVWYWxpZGF0b3IpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExvbmdpdHVkZVZhbGlkYXRvciwgW3tcbiAgICBrZXk6IFwiVmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gVmFsaWRhdGUodmFsdWUsIGlzUmVxdWlyZWQsIGFkZEVycm9yKSB7XG4gICAgICB2YXIgdmFsaWROdW1iZXIgPSBuZXcgX051bWJlclZhbGlkYXRvci5OdW1iZXJWYWxpZGF0b3IoKS5WYWxpZGF0ZSh2YWx1ZSwgaXNSZXF1aXJlZCwgYWRkRXJyb3IpO1xuXG4gICAgICBpZiAodmFsaWROdW1iZXIpIHtcbiAgICAgICAgdmFyIG51bSA9IE51bWJlcih2YWx1ZSk7XG5cbiAgICAgICAgaWYgKC0xODAgPiBudW0gfHwgbnVtID4gMTgwKSB7XG4gICAgICAgICAgYWRkRXJyb3IoJ0ludmFsaWQgbG9uZ2l0dWRlJyk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTG9uZ2l0dWRlVmFsaWRhdG9yO1xufSgpO1xuXG5leHBvcnRzLkxvbmdpdHVkZVZhbGlkYXRvciA9IExvbmdpdHVkZVZhbGlkYXRvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUxvbmdpdHVkZVZhbGlkYXRvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuTnVtYmVyVmFsaWRhdG9yID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBOdW1iZXJWYWxpZGF0b3IgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBOdW1iZXJWYWxpZGF0b3IoKSB7XG4gICAgdmFyIGNvbmZpZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge1xuICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICBtYXg6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTnVtYmVyVmFsaWRhdG9yKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNvbmZpZ1wiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTnVtYmVyVmFsaWRhdG9yLCBbe1xuICAgIGtleTogXCJWYWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBWYWxpZGF0ZSh2YWx1ZSwgaXNSZXF1aXJlZCwgYWRkRXJyb3IpIHtcbiAgICAgIHZhciBudW0gPSBOdW1iZXIodmFsdWUpO1xuXG4gICAgICBpZiAoIWlzTmFOKG51bSkpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLm1pbiAhPT0gdW5kZWZpbmVkICYmIG51bSA8PSB0aGlzLmNvbmZpZy5taW4pIHtcbiAgICAgICAgICBhZGRFcnJvcignTWluOiAnICsgdGhpcy5jb25maWcubWluKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb25maWcubWF4ICE9PSB1bmRlZmluZWQgJiYgbnVtID49IHRoaXMuY29uZmlnLm1heCkge1xuICAgICAgICAgIGFkZEVycm9yKCdNYXg6ICcgKyAodGhpcy5jb25maWcubWF4IC0gMSkpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBhZGRFcnJvcignSW52YWxpZCBudW1iZXInKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTnVtYmVyVmFsaWRhdG9yO1xufSgpO1xuXG5leHBvcnRzLk51bWJlclZhbGlkYXRvciA9IE51bWJlclZhbGlkYXRvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU51bWJlclZhbGlkYXRvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVXJsVmFsaWRhdG9yID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbnZhciBVcmxWYWxpZGF0b3IgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBVcmxWYWxpZGF0b3IoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFVybFZhbGlkYXRvcik7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVXJsVmFsaWRhdG9yLCBbe1xuICAgIGtleTogXCJWYWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBWYWxpZGF0ZSh2YWx1ZSwgaXNSZXF1aXJlZCwgYWRkRXJyb3IpIHtcbiAgICAgIGlmICggLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgLygoKFtBLVphLXpdezMsOX06KD86XFwvXFwvKT8pKD86Wy07OiY9XFwrXFwkLFxcd10rQCk/W0EtWmEtejAtOS7igIzigIstXSsoOlswLTldKyk/fCg/Ond3d+KAjOKAiy58Wy07OiY9XFwrXFwkLFxcd10rQClb4oCM4oCLQS1aYS16MC05Li1dKykoKD86XFwv4oCM4oCLW1xcK34lXFwvLlxcdy1fXSopP1xcPz8o4oCM4oCLPzpbLVxcKz0mOyVALlxcd19dKikjP+KAjOKAiyg/OltcXHddKikpPykvLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBhZGRFcnJvcignSW52YWxpZCB1cmwnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVXJsVmFsaWRhdG9yO1xufSgpO1xuXG5leHBvcnRzLlVybFZhbGlkYXRvciA9IFVybFZhbGlkYXRvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVVybFZhbGlkYXRvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhc2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgX2V4cG9ydE5hbWVzID0ge1xuICBFbWFpbFZhbGlkYXRvcjogdHJ1ZSxcbiAgTGF0aXR1ZGVWYWxpZGF0b3I6IHRydWUsXG4gIExvbmdpdHVkZVZhbGlkYXRvcjogdHJ1ZSxcbiAgTnVtYmVyVmFsaWRhdG9yOiB0cnVlLFxuICBVcmxWYWxpZGF0b3I6IHRydWVcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJFbWFpbFZhbGlkYXRvclwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfRW1haWxWYWxpZGF0b3IuRW1haWxWYWxpZGF0b3I7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTGF0aXR1ZGVWYWxpZGF0b3JcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX0xhdGl0dWRlVmFsaWRhdG9yLkxhdGl0dWRlVmFsaWRhdG9yO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkxvbmdpdHVkZVZhbGlkYXRvclwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfTG9uZ2l0dWRlVmFsaWRhdG9yLkxvbmdpdHVkZVZhbGlkYXRvcjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJOdW1iZXJWYWxpZGF0b3JcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX051bWJlclZhbGlkYXRvci5OdW1iZXJWYWxpZGF0b3I7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiVXJsVmFsaWRhdG9yXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9VcmxWYWxpZGF0b3IuVXJsVmFsaWRhdG9yO1xuICB9XG59KTtcblxudmFyIF9iYXNlID0gcmVxdWlyZShcIi4vYmFzZVwiKTtcblxuT2JqZWN0LmtleXMoX2Jhc2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX2V4cG9ydE5hbWVzLCBrZXkpKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9iYXNlW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX0VtYWlsVmFsaWRhdG9yID0gcmVxdWlyZShcIi4vRW1haWxWYWxpZGF0b3JcIik7XG5cbnZhciBfTGF0aXR1ZGVWYWxpZGF0b3IgPSByZXF1aXJlKFwiLi9MYXRpdHVkZVZhbGlkYXRvclwiKTtcblxudmFyIF9Mb25naXR1ZGVWYWxpZGF0b3IgPSByZXF1aXJlKFwiLi9Mb25naXR1ZGVWYWxpZGF0b3JcIik7XG5cbnZhciBfTnVtYmVyVmFsaWRhdG9yID0gcmVxdWlyZShcIi4vTnVtYmVyVmFsaWRhdG9yXCIpO1xuXG52YXIgX1VybFZhbGlkYXRvciA9IHJlcXVpcmUoXCIuL1VybFZhbGlkYXRvclwiKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTm9kZSwgY3JlYXRlRWRpdG9yLCBFZGl0b3IgfSBmcm9tICdzbGF0ZSc7XHJcbmltcG9ydCB7IHdpdGhGb250U2l6ZXMgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2ZvbnRTaXplL3dpdGhGb250U2l6ZXMnO1xyXG5pbXBvcnQgeyB3aXRoTGlzdHMgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2xpc3RzL3dpdGhMaXN0cyc7XHJcbmltcG9ydCB7IHdpdGhIZWFkaW5ncyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvaGVhZGluZy93aXRoSGVhZGluZ3MnO1xyXG5pbXBvcnQgeyB3aXRoQWxpZ25tZW50cyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvYWxpZ25tZW50L3dpdGhBbGlnbm1lbnRzJztcclxuaW1wb3J0IHsgd2l0aExpbmtzIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9saW5rcy93aXRoTGlua3MnO1xyXG5pbXBvcnQge1xyXG4gIHdpdGhNYXJrcyxcclxuICBNQVJLX0hPVEtFWVMsXHJcbiAgTWFya1R5cGVzLFxyXG59IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvbWFya3Mvd2l0aE1hcmtzJztcclxuaW1wb3J0IHsgd2l0aFJlYWN0LCBTbGF0ZSwgRWRpdGFibGUgfSBmcm9tICdzbGF0ZS1yZWFjdCc7XHJcbmltcG9ydCBpc0hvdGtleSBmcm9tICdpcy1ob3RrZXknO1xyXG5pbXBvcnQge1xyXG4gIHJlbmRlck1hcmssXHJcbiAgcmVuZGVyRWxlbWVudCxcclxufSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9Db250cm9scy9TbGF0ZURlZmF1bHRDb250cm9scyc7XHJcbmltcG9ydCB7IEhvdmVyaW5nVG9vbGJhciB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL0NvbnRyb2xzL2hvdmVyaW5nVG9vbGJhci9Ib3ZlcmluZ1Rvb2xiYXInO1xyXG5pbXBvcnQgSGVhZGluZ0J1dHRvbkNvbXBhY3QgZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9oZWFkaW5nL0hlYWRpbmdCdXR0b25Db21wYWN0JztcclxuaW1wb3J0IEZvbnRTaXplQnV0dG9uIGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvZm9udFNpemUvRm9udFNpemVCdXR0b24nO1xyXG5pbXBvcnQgeyBBbGlnbm1lbnRCdXR0b25zIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9hbGlnbm1lbnQvQWxpZ25tZW50QnV0dG9ucyc7XHJcbmltcG9ydCB7IExpc3RCdXR0b25zIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9saXN0cy9MaXN0QnV0dG9ucyc7XHJcbmltcG9ydCB7IExpbmtCdXR0b24gfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2xpbmtzL0xpbmtCdXR0b24nO1xyXG5pbXBvcnQgeyBNYXJrQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9tYXJrcy9NYXJrQnV0dG9uJztcclxuaW1wb3J0IGNyZWF0ZVN0eWxlcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY3JlYXRlU3R5bGVzJztcclxuaW1wb3J0IHdpdGhTdHlsZXMsIHsgV2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMvd2l0aFN0eWxlcyc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IElucHV0R3JvdXAgZnJvbSAnZ3Vlc3RiZWxsLWZvcm1zL2J1aWxkL2NvbXBvbmVudHMvaW5wdXRHcm91cCc7XHJcbmltcG9ydCB5ZWxsb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3llbGxvdyc7XHJcbmltcG9ydCByZWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3JlZCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNsYXRlRWRpdG9yQ3VzdG9tUHJvcHMge1xyXG4gIHZhbHVlOiBOb2RlW107XHJcbiAgaW5pdGlhbFZhbHVlPzogTm9kZVtdO1xyXG4gIG9uQ2hhbmdlOiAodmFsOiB7XHJcbiAgICB2YWx1ZTogTm9kZVtdO1xyXG4gICAgaXNEaXJ0eTogYm9vbGVhbjtcclxuICAgIGlzVmFsaWQ6IGJvb2xlYW47XHJcbiAgfSkgPT4gdm9pZDtcclxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcclxuICBsYWJlbD86IEpTWC5FbGVtZW50IHwgc3RyaW5nO1xyXG4gIHRpdGxlPzogSlNYLkVsZW1lbnQgfCBzdHJpbmc7XHJcbiAgbWF4Q2hhcnM/OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9ICh7IHNwYWNpbmcsIHBhbGV0dGUsIHR5cG9ncmFwaHkgfTogVGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIHRvb2xiYXI6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBsYWJlbDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBwYWRkaW5nOiBzcGFjaW5nKCksXHJcbiAgICAgIGZvbnRTaXplOiAnMS4ycmVtJyxcclxuICAgICAgdHJhbnNpdGlvbjogJzAuNXMgY29sb3InLFxyXG4gICAgfSxcclxuICAgIGxhYmVsRm9jdXNlZDoge1xyXG4gICAgICBjb2xvcjogcGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICB9LFxyXG4gICAgZWRpdGFibGU6IHtcclxuICAgICAgcGFkZGluZzogc3BhY2luZygyKSxcclxuICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS5ncmV5WzEwMF0sXHJcbiAgICB9LFxyXG4gICAgY2hhcmFjdGVyQ291bnRDb250YWluZXI6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHJpZ2h0OiAzLFxyXG4gICAgICBib3R0b206IDMsXHJcbiAgICAgIGZvbnRTaXplOiB0eXBvZ3JhcGh5LmNhcHRpb24uZm9udFNpemUsXHJcbiAgICAgIGNvbG9yOiBwYWxldHRlLmdyZXlbNTAwXSxcclxuICAgICAgdHJhbnNpdGlvbjogJzAuNXMgY29sb3InLFxyXG4gICAgfSxcclxuICAgIGNoYXJhY3RlckNvdW50Q29udGFpbmVyV2FybmluZzoge1xyXG4gICAgICBjb2xvcjogeWVsbG93WzcwMF0sXHJcbiAgICB9LFxyXG4gICAgY2hhcmFjdGVyQ291bnRDb250YWluZXJFcnJvcjoge1xyXG4gICAgICBjb2xvcjogcmVkWzcwMF0sXHJcbiAgICB9LFxyXG4gICAgcm9vdDoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG5jb25zdCBhbGxIb3RrZXlzID0geyAuLi5NQVJLX0hPVEtFWVMgfTtcclxuXHJcbnR5cGUgU2xhdGVFZGl0b3JQcm9wcyA9IFNsYXRlRWRpdG9yQ3VzdG9tUHJvcHMgJiBXaXRoU3R5bGVzPHR5cGVvZiBzdHlsZXM+O1xyXG5cclxuY29uc3QgU2xhdGVFZGl0b3I6IFJlYWN0LlNGQzxTbGF0ZUVkaXRvclByb3BzPiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGNsYXNzZXMgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGVkaXRvciA9IFJlYWN0LnVzZVJlZihcclxuICAgIHdpdGhGb250U2l6ZXMoKShcclxuICAgICAgd2l0aExpc3RzKFxyXG4gICAgICAgIHdpdGhIZWFkaW5ncygpKFxyXG4gICAgICAgICAgd2l0aEFsaWdubWVudHMod2l0aExpbmtzKHdpdGhNYXJrcyh3aXRoUmVhY3QoY3JlYXRlRWRpdG9yKCkpKSkpXHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcbiAgICApXHJcbiAgKS5jdXJyZW50O1xyXG4gIGNvbnN0IFtoYXNGb2N1cywgc2V0SGFzRm9jdXNdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG9uRm9jdXMgPSAoKSA9PiBzZXRIYXNGb2N1cyh0cnVlKTtcclxuICBjb25zdCBvbkJsdXIgPSAoKSA9PiBzZXRIYXNGb2N1cyhmYWxzZSk7XHJcblxyXG4gIGxldCBhbGxvd05ld0NoYXIgPSB0cnVlO1xyXG4gIGxldCBjaGFycyA9IDA7XHJcbiAgbGV0IGNoYXJzTGVmdCA9IDA7XHJcbiAgbGV0IHByb2dyZXNzID0gMDtcclxuICBpZiAocHJvcHMubWF4Q2hhcnMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNoYXJzID0gRWRpdG9yLnRleHQoZWRpdG9yLCB7XHJcbiAgICAgICAgYW5jaG9yOiBFZGl0b3Iuc3RhcnQoZWRpdG9yLCBbXSksXHJcbiAgICAgICAgZm9jdXM6IEVkaXRvci5lbmQoZWRpdG9yLCBbXSksXHJcbiAgICAgIH0pLmxlbmd0aDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNoYXJzID0gMDtcclxuICAgIH1cclxuICAgIGNoYXJzTGVmdCA9IHByb3BzLm1heENoYXJzIC0gY2hhcnM7XHJcbiAgICBwcm9ncmVzcyA9IChjaGFyc0xlZnQgLyBwcm9wcy5tYXhDaGFycykgKiAxMDA7XHJcbiAgICBpZiAoY2hhcnNMZWZ0ID09PSAwKSB7XHJcbiAgICAgIGFsbG93TmV3Q2hhciA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSAodmFsOiBOb2RlW10pID0+XHJcbiAgICBwcm9wcy5vbkNoYW5nZSh7IHZhbHVlOiB2YWwsIGlzVmFsaWQ6IGFsbG93TmV3Q2hhciwgaXNEaXJ0eTogdHJ1ZSB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxJbnB1dEdyb3VwIHRpdGxlPXtwcm9wcy50aXRsZX0+XHJcbiAgICAgIDxTbGF0ZSBlZGl0b3I9e2VkaXRvcn0gZGVmYXVsdFZhbHVlPXtwcm9wcy52YWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnc2xhdGUtZWRpdG9yJywgY2xhc3Nlcy5yb290KX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfT5cclxuICAgICAgICAgICAge3Byb3BzLmxhYmVsICYmIChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3NsYXRlLWVkaXRvcl9fbGFiZWwnLCBjbGFzc2VzLmxhYmVsLCB7XHJcbiAgICAgICAgICAgICAgICAgICdzbGF0ZS1lZGl0b3JfX2xhYmVsLS1hY3RpdmUnOiBoYXNGb2N1cyxcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzZXMubGFiZWxGb2N1c2VkXTogaGFzRm9jdXMsXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMubGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxIZWFkaW5nQnV0dG9uQ29tcGFjdCAvPlxyXG4gICAgICAgICAgICA8Rm9udFNpemVCdXR0b24gLz5cclxuICAgICAgICAgICAgPEFsaWdubWVudEJ1dHRvbnMgLz5cclxuICAgICAgICAgICAgPExpc3RCdXR0b25zIC8+XHJcbiAgICAgICAgICAgIDxMaW5rQnV0dG9uIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxFZGl0YWJsZVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZWRpdGFibGV9XHJcbiAgICAgICAgICAgIHJlbmRlck1hcms9e3JlbmRlck1hcmt9XHJcbiAgICAgICAgICAgIHJlbmRlckVsZW1lbnQ9e3JlbmRlckVsZW1lbnR9XHJcbiAgICAgICAgICAgIG9uS2V5RG93bj17ZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICghYWxsb3dOZXdDaGFyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShldmVudC5rZXlDb2RlID09PSA4IHx8IGV2ZW50LmtleUNvZGUgPT09IDQ2KSkge1xyXG4gICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGZvciAoY29uc3QgaG90a2V5IGluIGFsbEhvdGtleXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0hvdGtleShob3RrZXksIChldmVudCBhcyB1bmtub3duKSBhcyBLZXlib2FyZEV2ZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICBlZGl0b3IuZXhlYyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RvZ2dsZV9tYXJrJyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJrOiB7IHR5cGU6IE1BUktfSE9US0VZU1tob3RrZXldIH0sXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBpc0hvdGtleSgnc2hpZnQrZW50ZXInLCAoZXZlbnQgYXMgdW5rbm93bikgYXMgS2V5Ym9hcmRFdmVudClcclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlZGl0b3IuZXhlYyh7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdpbnNlcnRfdGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdcXG4nLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkZvY3VzPXtvbkZvY3VzfVxyXG4gICAgICAgICAgICBvbkJsdXI9e29uQmx1cn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7cHJvcHMubWF4Q2hhcnMgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgJ3NsYXRlLWVkaXRvcl9fY2hhci1jb3VudCcsXHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzLmNoYXJhY3RlckNvdW50Q29udGFpbmVyLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBbY2xhc3Nlcy5jaGFyYWN0ZXJDb3VudENvbnRhaW5lcldhcm5pbmddOiBwcm9ncmVzcyA8PSAxMCxcclxuICAgICAgICAgICAgICAgICAgJ3NsYXRlLWVkaXRvcl9fY2hhci1jb3VudC0td2FybmluZyc6IHByb2dyZXNzIDw9IDEwLFxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3Nlcy5jaGFyYWN0ZXJDb3VudENvbnRhaW5lckVycm9yXTogcHJvZ3Jlc3MgPD0gMCxcclxuICAgICAgICAgICAgICAgICAgJ3NsYXRlLWVkaXRvcl9fY2hhci1jb3VudC0tZXJyb3InOiBwcm9ncmVzcyA8PSAwLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7Y2hhcnN9L3twcm9wcy5tYXhDaGFyc31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2VkaXRvci5zZWxlY3Rpb24gJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxIb3ZlcmluZ1Rvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICA8TWFya0J1dHRvbiB0eXBlPXtNYXJrVHlwZXMuQm9sZH0gLz5cclxuICAgICAgICAgICAgICAgIDxNYXJrQnV0dG9uIHR5cGU9e01hcmtUeXBlcy5JdGFsaWN9IC8+XHJcbiAgICAgICAgICAgICAgICA8TWFya0J1dHRvbiB0eXBlPXtNYXJrVHlwZXMuVW5kZXJsaW5lfSAvPlxyXG4gICAgICAgICAgICAgICAgPExpbmtCdXR0b24gLz5cclxuICAgICAgICAgICAgICA8L0hvdmVyaW5nVG9vbGJhcj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgey8qPHByZT57SlNPTi5zdHJpbmdpZnkocHJvcHMuc3RhdGUuc2xhdGVTdGF0ZSwgbnVsbCwgMil9PC9wcmU+Ki99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvU2xhdGU+XHJcbiAgICA8L0lucHV0R3JvdXA+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShTbGF0ZUVkaXRvcik7XHJcbiIsIi8qXHJcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIE9SWSBFZGl0b3IuXHJcbiAqXHJcbiAqIE9SWSBFZGl0b3IgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxyXG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcclxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cclxuICpcclxuICogT1JZIEVkaXRvciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxyXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxyXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXHJcbiAqIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcclxuICogYWxvbmcgd2l0aCBPUlkgRWRpdG9yLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxyXG4gKlxyXG4gKiBAbGljZW5zZSBMR1BMLTMuMFxyXG4gKiBAY29weXJpZ2h0IDIwMTYtMjAxOCBBZW5lYXMgUmVra2FzXHJcbiAqIEBhdXRob3IgQWVuZWFzIFJla2thcyA8YWVuZWFzK29zc0BhZW5lYXMuaW8+XHJcbiAqXHJcbiAqL1xyXG5cclxuaW1wb3J0IGNyZWF0ZVBsdWdpbiBmcm9tICcuL2NyZWF0ZVBsdWdpbic7XHJcbi8vIGltcG9ydCBTbGF0ZUh0bWxSZW5kZXJlciBmcm9tICcuL1JlbmRlcmVyL1NsYXRlSHRtbFJlbmRlcmVyJztcclxuaW1wb3J0IHsgbGF6eUxvYWQgfSBmcm9tICdAcmVhY3QtcGFnZS9jb3JlJztcclxuaW1wb3J0IHsgTWFrZU9wdGlvbmFsIH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzL21ha2VPcHRpb25hbCc7XHJcbmltcG9ydCB7IFNsYXRlU2V0dGluZ3MgfSBmcm9tICcuL3R5cGVzL3NldHRpbmdzJztcclxuXHJcbmNvbnN0IFNsYXRlRGVmYXVsdENvbnRyb2xzID0gbGF6eUxvYWQoKCkgPT5cclxuICBpbXBvcnQoJy4vQ29udHJvbHMvU2xhdGVEZWZhdWx0Q29udHJvbHMnKVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKFxyXG4gIHNldHRpbmdzOiBNYWtlT3B0aW9uYWw8U2xhdGVTZXR0aW5ncywgJ1JlbmRlcmVyJyB8ICdDb250cm9scyc+XHJcbikgPT4ge1xyXG4gIGNvbnN0IHBsdWdpbiA9IGNyZWF0ZVBsdWdpbih7XHJcbiAgICBSZW5kZXJlcjogU2xhdGVEZWZhdWx0Q29udHJvbHMsXHJcbiAgICBDb250cm9sczogU2xhdGVEZWZhdWx0Q29udHJvbHMsXHJcbiAgICAuLi5zZXR0aW5ncyxcclxuICB9KTtcclxuICByZXR1cm4gcGx1Z2luO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9