webpackHotUpdate("main",{

/***/ "./src/demo/ClientApp/components/header/Header.tsx":
/*!*********************************************************!*\
  !*** ./src/demo/ClientApp/components/header/Header.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/logo.svg */ "./src/demo/ClientApp/assets/images/logo.svg");
/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_1__);
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

__webpack_require__(/*! ./header.scss */ "./src/demo/ClientApp/components/header/header.scss");




var Header =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Header, _React$PureComponent);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "navbar z-depth-1 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
        href: "https://guestbell.com",
        className: "navbar__logo text-center p-3"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
        src: _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_1__,
        className: "navbar__logo text-left",
        alt: "Logo"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: "navbar__text"
      }, " react-page plugins")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
        href: "https://github.com/guestbell/react-page-plugins",
        className: "github-corner",
        "aria-label": "View source on GitHub"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", {
        width: "80",
        height: "80",
        viewBox: "0 0 250 250",
        "aria-hidden": "true"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
        d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
        // tslint:disable-next-line: max-line-length
        d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
        fill: "currentColor",
        className: "octo-arm"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
        // tslint:disable-next-line: max-line-length
        d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
        fill: "currentColor",
        className: "octo-body"
      }))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);


;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Header, "Header", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\demo\\ClientApp\\components\\header\\Header.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DbGllbnRBcHAvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLnRzeCJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiSGVhZGVyIiwibG9nbyIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLG1CQUFPLENBQUMseUVBQUQsQ0FBUDs7QUFDQTtBQUNBOztJQUlxQkMsTTs7Ozs7Ozs7Ozs7Ozs2QkFDSDtBQUNkLGFBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUNFLFlBQUksRUFBQyx1QkFEUDtBQUVFLGlCQUFTLEVBQUM7QUFGWixTQUlFO0FBQUssV0FBRyxFQUFFQyxvREFBVjtBQUFnQixpQkFBUyxFQUFDLHdCQUExQjtBQUFtRCxXQUFHLEVBQUM7QUFBdkQsUUFKRixFQUtFO0FBQU0saUJBQVMsRUFBQztBQUFoQiwrQkFMRixDQURGLEVBUUU7QUFDRSxZQUFJLEVBQUMsaURBRFA7QUFFRSxpQkFBUyxFQUFDLGVBRlo7QUFHRSxzQkFBVztBQUhiLFNBS0U7QUFBSyxhQUFLLEVBQUMsSUFBWDtBQUFnQixjQUFNLEVBQUMsSUFBdkI7QUFBNEIsZUFBTyxFQUFDLGFBQXBDO0FBQWtELHVCQUFZO0FBQTlELFNBQ0U7QUFBTSxTQUFDLEVBQUM7QUFBUixRQURGLEVBRUU7QUFDRTtBQUNBLFNBQUMsRUFBQywwTEFGSjtBQUdFLFlBQUksRUFBQyxjQUhQO0FBSUUsaUJBQVMsRUFBQztBQUpaLFFBRkYsRUFRRTtBQUNFO0FBQ0EsU0FBQyxFQUFDLHFoQkFGSjtBQUdFLFlBQUksRUFBQyxjQUhQO0FBSUUsaUJBQVMsRUFBQztBQUpaLFFBUkYsQ0FMRixDQVJGLENBREY7QUFnQ0Q7Ozs7Ozs7Ozs7O0VBbENpQ0MsbUQ7Ozs7Ozs7Ozs7OzswQkFBZkYsTSIsImZpbGUiOiJmNDM4MWNjLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4vaGVhZGVyLnNjc3MnKTtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBsb2dvIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nby5zdmcnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIZWFkZXJDdXN0b21Qcm9wcyB7fVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxIZWFkZXJDdXN0b21Qcm9wcywge30+IHtcclxuICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXIgei1kZXB0aC0xIHAtMFwiPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9ndWVzdGJlbGwuY29tXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhcl9fbG9nbyB0ZXh0LWNlbnRlciBwLTNcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBjbGFzc05hbWU9XCJuYXZiYXJfX2xvZ28gdGV4dC1sZWZ0XCIgYWx0PVwiTG9nb1wiIC8+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXJfX3RleHRcIj4gcmVhY3QtcGFnZSBwbHVnaW5zPC9zcGFuPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ndWVzdGJlbGwvcmVhY3QtcGFnZS1wbHVnaW5zXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImdpdGh1Yi1jb3JuZXJcIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlZpZXcgc291cmNlIG9uIEdpdEh1YlwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN2ZyB3aWR0aD1cIjgwXCIgaGVpZ2h0PVwiODBcIiB2aWV3Qm94PVwiMCAwIDI1MCAyNTBcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0wLDAgTDExNSwxMTUgTDEzMCwxMTUgTDE0MiwxNDIgTDI1MCwyNTAgTDI1MCwwIFpcIiAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgICAgICAgICAgZD1cIk0xMjguMywxMDkuMCBDMTEzLjgsOTkuNyAxMTkuMCw4OS42IDExOS4wLDg5LjYgQzEyMi4wLDgyLjcgMTIwLjUsNzguNiAxMjAuNSw3OC42IEMxMTkuMiw3Mi4wIDEyMy40LDc2LjMgMTIzLjQsNzYuMyBDMTI3LjMsODAuOSAxMjUuNSw4Ny4zIDEyNS41LDg3LjMgQzEyMi45LDk3LjYgMTMwLjYsMTAxLjkgMTM0LjQsMTAzLjJcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9jdG8tYXJtXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxyXG4gICAgICAgICAgICAgIGQ9XCJNMTE1LjAsMTE1LjAgQzExNC45LDExNS4xIDExOC43LDExNi41IDExOS44LDExNS40IEwxMzMuNywxMDEuNiBDMTM2LjksOTkuMiAxMzkuOSw5OC40IDE0Mi4yLDk4LjYgQzEzMy44LDg4LjAgMTI3LjUsNzQuNCAxNDMuOCw1OC4wIEMxNDguNSw1My40IDE1NC4wLDUxLjIgMTU5LjcsNTEuMCBDMTYwLjMsNDkuNCAxNjMuMiw0My42IDE3MS40LDQwLjEgQzE3MS40LDQwLjEgMTc2LjEsNDIuNSAxNzguOCw1Ni4yIEMxODMuMSw1OC42IDE4Ny4yLDYxLjggMTkwLjksNjUuNCBDMTk0LjUsNjkuMCAxOTcuNyw3My4yIDIwMC4xLDc3LjYgQzIxMy44LDgwLjIgMjE2LjMsODQuOSAyMTYuMyw4NC45IEMyMTIuNyw5My4xIDIwNi45LDk2LjAgMjA1LjQsOTYuNiBDMjA1LjEsMTAyLjQgMjAzLjAsMTA3LjggMTk4LjMsMTEyLjUgQzE4MS45LDEyOC45IDE2OC4zLDEyMi41IDE1Ny43LDExNC4xIEMxNTcuOSwxMTYuOSAxNTYuNywxMjAuOSAxNTIuNywxMjQuOSBMMTQxLjAsMTM2LjUgQzEzOS44LDEzNy43IDE0MS42LDE0MS45IDE0MS44LDE0MS44IFpcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9jdG8tYm9keVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==