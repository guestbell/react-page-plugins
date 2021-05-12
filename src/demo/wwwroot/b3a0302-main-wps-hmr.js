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
  }, data.href && !isEditMode ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
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

/***/ }),

/***/ "./src/lib/image/common/styles.ts":
/*!****************************************!*\
  !*** ./src/lib/image/common/styles.ts ***!
  \****************************************/
/*! exports provided: iconStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconStyle", function() { return iconStyle; });
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
// material icons isn't allowing us to override style properties with className/styleName
var iconStyle = {
  width: '100%',
  height: 'auto',
  padding: '0',
  color: '#aaa',
  textAlign: 'center',
  minWidth: 64,
  minHeight: 64,
  maxHeight: 256
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(iconStyle, "iconStyle", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\image\\common\\styles.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/lib/image/createPlugin.tsx":
/*!****************************************!*\
  !*** ./src/lib/image/createPlugin.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _default_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default/settings */ "./src/lib/image/default/settings.tsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




var createPlugin = function createPlugin(settings) {
  var mergedSettings = _objectSpread(_objectSpread({}, _default_settings__WEBPACK_IMPORTED_MODULE_1__["defaultSettings"]), settings);

  var Controls = mergedSettings.Controls;
  return {
    controls: {
      type: 'custom',
      Component: function Component(props) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Controls, _extends({}, props, {
          translations: mergedSettings.translations,
          UploadImageField: mergedSettings.UploadImageField
        }));
      }
    },
    Renderer: mergedSettings.Renderer,
    id: 'ory/editor/core/content/image',
    version: 1,
    icon: mergedSettings.icon,
    title: mergedSettings.translations.pluginName,
    isInlineable: true,
    description: mergedSettings.translations.pluginDescription
  };
};

var _default = createPlugin;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(createPlugin, "createPlugin", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\image\\createPlugin.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\image\\createPlugin.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/lib/image/default/settings.tsx":
/*!********************************************!*\
  !*** ./src/lib/image/default/settings.tsx ***!
  \********************************************/
/*! exports provided: defaultTranslations, defaultSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTranslations", function() { return defaultTranslations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSettings", function() { return defaultSettings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_page_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-page/editor */ "./node_modules/@react-page/editor/lib-es/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



var Panorama = Object(_react_page_editor__WEBPACK_IMPORTED_MODULE_1__["lazyLoad"])(function () {
  return __webpack_require__.e(/*! import() */ 23).then(__webpack_require__.t.bind(null, /*! @material-ui/icons/Panorama */ "./node_modules/@material-ui/icons/Panorama.js", 7));
});
var defaultTranslations = {
  pluginName: 'Image',
  pluginDescription: 'Loads an image from an url.',
  or: 'OR',
  haveUrl: 'I have a URL',
  imageUrl: 'Image URL',
  hrefPlaceholder: 'http://example.com',
  hrefLabel: 'Link location (url)',
  openNewWindow: 'Open in new window',
  srcPlaceholder: 'http://example.com/image.png'
};
var defaultSettings = {
  Controls: function Controls() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, "Controls for this plugin were not provided");
  },
  Renderer: function Renderer() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, "Renderer; for this plugin was not provided ");
  },
  translations: defaultTranslations,
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Panorama, null),
  UploadImageField: function UploadImageField() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, "Upload image field was not provided");
  }
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Panorama, "Panorama", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\image\\default\\settings.tsx");
  reactHotLoader.register(defaultTranslations, "defaultTranslations", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\image\\default\\settings.tsx");
  reactHotLoader.register(defaultSettings, "defaultSettings", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\image\\default\\settings.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/lib/image/index.tsx":
/*!*********************************!*\
  !*** ./src/lib/image/index.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _createPlugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPlugin */ "./src/lib/image/createPlugin.tsx");
/* harmony import */ var _react_page_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-page/editor */ "./node_modules/@react-page/editor/lib-es/index.js");
/* harmony import */ var _Renderer_ImageHtmlRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Renderer/ImageHtmlRenderer */ "./src/lib/image/Renderer/ImageHtmlRenderer.tsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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



var ImageDefaultControls = Object(_react_page_editor__WEBPACK_IMPORTED_MODULE_1__["lazyLoad"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ./Controls/ImageDefaultControls */ "./src/lib/image/Controls/ImageDefaultControls.tsx"));
});

var _default = function _default(settings) {
  var plugin = Object(_createPlugin__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread({
    Renderer: _Renderer_ImageHtmlRenderer__WEBPACK_IMPORTED_MODULE_2__["default"],
    Controls: ImageDefaultControls
  }, settings));
  return plugin;
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ImageDefaultControls, "ImageDefaultControls", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\image\\index.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\image\\index.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/lib/image/types/state.ts":
/*!**************************************!*\
  !*** ./src/lib/image/types/state.ts ***!
  \**************************************/
/*! exports provided: ImageConstraintMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageConstraintMode", function() { return ImageConstraintMode; });
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var ImageConstraintMode;

(function (ImageConstraintMode) {
  ImageConstraintMode[ImageConstraintMode["FullWidth"] = 0] = "FullWidth";
  ImageConstraintMode[ImageConstraintMode["BigHeight"] = 1] = "BigHeight";
  ImageConstraintMode[ImageConstraintMode["MediumHeight"] = 2] = "MediumHeight";
  ImageConstraintMode[ImageConstraintMode["SmallHeight"] = 3] = "SmallHeight";
})(ImageConstraintMode || (ImageConstraintMode = {}));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2ltYWdlL1JlbmRlcmVyL0ltYWdlSHRtbFJlbmRlcmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2ltYWdlL2NvbW1vbi9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9pbWFnZS9jcmVhdGVQbHVnaW4udHN4Iiwid2VicGFjazovLy8uL3NyYy9saWIvaW1hZ2UvZGVmYXVsdC9zZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9pbWFnZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9pbWFnZS90eXBlcy9zdGF0ZS50cyJdLCJuYW1lcyI6WyJJbWFnZUljb24iLCJsYXp5TG9hZCIsIkltYWdlSHRtbFJlbmRlcmVyIiwicHJvcHMiLCJpc0VkaXRNb2RlIiwiZGF0YSIsImltYWdlIiwic3JjIiwiaWNvblN0eWxlIiwiSW1hZ2UiLCJjbGFzc05hbWUiLCJjbGFzc05hbWVzIiwiY29uc3RyYWludE1vZGUiLCJ1bmRlZmluZWQiLCJJbWFnZUNvbnN0cmFpbnRNb2RlIiwiRnVsbFdpZHRoIiwiU21hbGxIZWlnaHQiLCJNZWRpdW1IZWlnaHQiLCJCaWdIZWlnaHQiLCJzcmNTZXQiLCJocmVmIiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsImNyZWF0ZVBsdWdpbiIsInNldHRpbmdzIiwibWVyZ2VkU2V0dGluZ3MiLCJkZWZhdWx0U2V0dGluZ3MiLCJDb250cm9scyIsImNvbnRyb2xzIiwidHlwZSIsIkNvbXBvbmVudCIsInRyYW5zbGF0aW9ucyIsIlVwbG9hZEltYWdlRmllbGQiLCJSZW5kZXJlciIsImlkIiwidmVyc2lvbiIsImljb24iLCJ0aXRsZSIsInBsdWdpbk5hbWUiLCJpc0lubGluZWFibGUiLCJkZXNjcmlwdGlvbiIsInBsdWdpbkRlc2NyaXB0aW9uIiwiUGFub3JhbWEiLCJkZWZhdWx0VHJhbnNsYXRpb25zIiwib3IiLCJoYXZlVXJsIiwiaW1hZ2VVcmwiLCJocmVmUGxhY2Vob2xkZXIiLCJocmVmTGFiZWwiLCJvcGVuTmV3V2luZG93Iiwic3JjUGxhY2Vob2xkZXIiLCJJbWFnZURlZmF1bHRDb250cm9scyIsInBsdWdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsbUVBQVEsQ0FBQztBQUFBLFNBQU0seUtBQU47QUFBQSxDQUFELENBQTFCOztBQUVBLElBQU1DLGlCQUFnRCxHQUFHLFNBQW5EQSxpQkFBbUQsQ0FBQUMsS0FBSyxFQUFJO0FBQ2hFLE1BQVFDLFVBQVIsR0FBNkJELEtBQTdCLENBQVFDLFVBQVI7QUFBQSxNQUFvQkMsSUFBcEIsR0FBNkJGLEtBQTdCLENBQW9CRSxJQUFwQjs7QUFDQSxNQUFJLENBQUNBLElBQUksQ0FBQ0MsS0FBTixJQUFlLENBQUNELElBQUksQ0FBQ0UsR0FBekIsRUFBOEI7QUFDNUIsd0JBQ0UsOEVBQ0U7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDRSxvREFBQyxTQUFEO0FBQVcsV0FBSyxFQUFFQyx3REFBU0E7QUFBM0IsTUFERixDQURGLENBREY7QUFPRDs7QUFDRCxNQUFJQyxLQUFKO0FBQ0EsTUFBTUMsU0FBUyxHQUFHQyxpREFBVSxDQUFDLDJCQUFELEVBQThCO0FBQ3hELHFDQUNFTixJQUFJLENBQUNPLGNBQUwsS0FBd0JDLFNBQXhCLElBQ0FSLElBQUksQ0FBQ08sY0FBTCxLQUF3QkUsZ0VBQW1CLENBQUNDLFNBSFU7QUFJeEQsK0NBQ0VWLElBQUksQ0FBQ08sY0FBTCxLQUF3QkUsZ0VBQW1CLENBQUNFLFdBTFU7QUFNeEQsZ0RBQ0VYLElBQUksQ0FBQ08sY0FBTCxLQUF3QkUsZ0VBQW1CLENBQUNHLFlBUFU7QUFReEQsNkNBQ0VaLElBQUksQ0FBQ08sY0FBTCxLQUF3QkUsZ0VBQW1CLENBQUNJO0FB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QUFBLHFCLENBQUFBLG1CO0FBQUFBLHFCLENBQUFBLG1CO0FBQUFBLHFCLENBQUFBLG1CO0FBQUFBLHFCLENBQUFBLG1CO0dBQUFBLG1CLEtBQUFBLG1CIiwiZmlsZSI6ImIzYTAzMDItbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJbWFnZVJlbmRlcmVyUHJvcHMgfSBmcm9tICcuLi90eXBlcy9yZW5kZXJlcic7XHJcbmltcG9ydCB7IGljb25TdHlsZSB9IGZyb20gJy4vLi4vY29tbW9uL3N0eWxlcyc7XHJcbmltcG9ydCB7IGxhenlMb2FkIH0gZnJvbSAnQHJlYWN0LXBhZ2UvZWRpdG9yJztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IEltYWdlQ29uc3RyYWludE1vZGUgfSBmcm9tICcuLi90eXBlcy9zdGF0ZSc7XHJcbmltcG9ydCBQYWRkaW5nQ29tcG9uZW50IGZyb20gJy4uLy4uL2NvbW1vbi91dGlscy9QYWRkaW5nQ29tcG9uZW50JztcclxuXHJcbmNvbnN0IEltYWdlSWNvbiA9IGxhenlMb2FkKCgpID0+IGltcG9ydCgnQG1hdGVyaWFsLXVpL2ljb25zL0xhbmRzY2FwZScpKTtcclxuXHJcbmNvbnN0IEltYWdlSHRtbFJlbmRlcmVyOiBSZWFjdC5TRkM8SW1hZ2VSZW5kZXJlclByb3BzPiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGlzRWRpdE1vZGUsIGRhdGEgfSA9IHByb3BzO1xyXG4gIGlmICghZGF0YS5pbWFnZSAmJiAhZGF0YS5zcmMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcnktcGx1Z2lucy1jb250ZW50LWltYWdlLXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICA8SW1hZ2VJY29uIHN0eWxlPXtpY29uU3R5bGV9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbiAgbGV0IEltYWdlOiBKU1guRWxlbWVudDtcclxuICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVzKCdvcnktcGx1Z2lucy1jb250ZW50LWltYWdlJywge1xyXG4gICAgJ29yeS1wbHVnaW5zLWNvbnRlbnQtaW1hZ2UtLWZ3JzpcclxuICAgICAgZGF0YS5jb25zdHJhaW50TW9kZSA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgIGRhdGEuY29uc3RyYWludE1vZGUgPT09IEltYWdlQ29uc3RyYWludE1vZGUuRnVsbFdpZHRoLFxyXG4gICAgJ29yeS1wbHVnaW5zLWNvbnRlbnQtaW1hZ2UtLXNtYWxsLWhlaWdodCc6XHJcbiAgICAgIGRhdGEuY29uc3RyYWludE1vZGUgPT09IEltYWdlQ29uc3RyYWludE1vZGUuU21hbGxIZWlnaHQsXHJcbiAgICAnb3J5LXBsdWdpbnMtY29udGVudC1pbWFnZS0tbWVkaXVtLWhlaWdodCc6XHJcbiAgICAgIGRhdGEuY29uc3RyYWludE1vZGUgPT09IEltYWdlQ29uc3RyYWludE1vZGUuTWVkaXVtSGVpZ2h0LFxyXG4gICAgJ29yeS1wbHVnaW5zLWNvbnRlbnQtaW1hZ2UtLWJpZy1oZWlnaHQnOlxyXG4gICAgICBkYXRhLmNvbnN0cmFpbnRNb2RlID09PSBJbWFnZUNvbnN0cmFpbnRNb2RlLkJpZ0hlaWdodCxcclxuICB9KTtcclxuICBpZiAoZGF0YS5pbWFnZSkge1xyXG4gICAgSW1hZ2UgPSAoXHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgICBzcmM9e2RhdGEuaW1hZ2Uuc3JjfVxyXG4gICAgICAgIHNyY1NldD17ZGF0YS5pbWFnZS5zcmNTZXR9XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBJbWFnZSA9IDxpbWcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHNyYz17ZGF0YS5zcmN9IHNyY1NldD17ZGF0YS5zcmNTZXR9IC8+O1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPFBhZGRpbmdDb21wb25lbnQgc3RhdGU9e3Byb3BzLmRhdGF9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yeS1wbHVnaW5zLWNvbnRlbnQtaW1hZ2VfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgIHtkYXRhLmhyZWYgJiYgIWlzRWRpdE1vZGUgPyA8YSBocmVmPXtkYXRhLmhyZWZ9PntJbWFnZX08L2E+IDogSW1hZ2V9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9QYWRkaW5nQ29tcG9uZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUh0bWxSZW5kZXJlcjtcclxuIiwiLypcclxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgT1JZIEVkaXRvci5cclxuICpcclxuICogT1JZIEVkaXRvciBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XHJcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxyXG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxyXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxyXG4gKlxyXG4gKiBPUlkgRWRpdG9yIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXHJcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXHJcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcclxuICogR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxyXG4gKiBhbG9uZyB3aXRoIE9SWSBFZGl0b3IuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXHJcbiAqXHJcbiAqIEBsaWNlbnNlIExHUEwtMy4wXHJcbiAqIEBjb3B5cmlnaHQgMjAxNi0yMDE4IEFlbmVhcyBSZWtrYXNcclxuICogQGF1dGhvciBBZW5lYXMgUmVra2FzIDxhZW5lYXMrb3NzQGFlbmVhcy5pbz5cclxuICpcclxuICovXHJcblxyXG4vLyBtYXRlcmlhbCBpY29ucyBpc24ndCBhbGxvd2luZyB1cyB0byBvdmVycmlkZSBzdHlsZSBwcm9wZXJ0aWVzIHdpdGggY2xhc3NOYW1lL3N0eWxlTmFtZVxyXG5leHBvcnQgY29uc3QgaWNvblN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG4gIHdpZHRoOiAnMTAwJScsXHJcbiAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgcGFkZGluZzogJzAnLFxyXG4gIGNvbG9yOiAnI2FhYScsXHJcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICBtaW5XaWR0aDogNjQsXHJcbiAgbWluSGVpZ2h0OiA2NCxcclxuICBtYXhIZWlnaHQ6IDI1NixcclxufTtcclxuIiwiaW1wb3J0IHsgQ2VsbFBsdWdpbiB9IGZyb20gJ0ByZWFjdC1wYWdlL2VkaXRvcic7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGRlZmF1bHRTZXR0aW5ncyB9IGZyb20gJy4vZGVmYXVsdC9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IEltYWdlU2V0dGluZ3MgfSBmcm9tICcuL3R5cGVzL3NldHRpbmdzJztcclxuaW1wb3J0IHsgSW1hZ2VTdGF0ZSB9IGZyb20gJy4vdHlwZXMvc3RhdGUnO1xyXG5cclxuY29uc3QgY3JlYXRlUGx1Z2luID0gKHNldHRpbmdzPzogSW1hZ2VTZXR0aW5ncyk6IENlbGxQbHVnaW48SW1hZ2VTdGF0ZT4gPT4ge1xyXG4gIGNvbnN0IG1lcmdlZFNldHRpbmdzID0geyAuLi5kZWZhdWx0U2V0dGluZ3MsIC4uLnNldHRpbmdzIH07XHJcbiAgY29uc3QgQ29udHJvbHMgPSBtZXJnZWRTZXR0aW5ncy5Db250cm9scztcclxuICByZXR1cm4ge1xyXG4gICAgY29udHJvbHM6IHtcclxuICAgICAgdHlwZTogJ2N1c3RvbScsXHJcbiAgICAgIENvbXBvbmVudDogcHJvcHMgPT4gKFxyXG4gICAgICAgIDxDb250cm9sc1xyXG4gICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgdHJhbnNsYXRpb25zPXttZXJnZWRTZXR0aW5ncy50cmFuc2xhdGlvbnN9XHJcbiAgICAgICAgICBVcGxvYWRJbWFnZUZpZWxkPXttZXJnZWRTZXR0aW5ncy5VcGxvYWRJbWFnZUZpZWxkfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICksXHJcbiAgICB9LFxyXG4gICAgUmVuZGVyZXI6IG1lcmdlZFNldHRpbmdzLlJlbmRlcmVyLFxyXG4gICAgaWQ6ICdvcnkvZWRpdG9yL2NvcmUvY29udGVudC9pbWFnZScsXHJcbiAgICB2ZXJzaW9uOiAxLFxyXG4gICAgaWNvbjogbWVyZ2VkU2V0dGluZ3MuaWNvbixcclxuICAgIHRpdGxlOiBtZXJnZWRTZXR0aW5ncy50cmFuc2xhdGlvbnMucGx1Z2luTmFtZSxcclxuICAgIGlzSW5saW5lYWJsZTogdHJ1ZSxcclxuICAgIGRlc2NyaXB0aW9uOiBtZXJnZWRTZXR0aW5ncy50cmFuc2xhdGlvbnMucGx1Z2luRGVzY3JpcHRpb24sXHJcbiAgfTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGx1Z2luO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEltYWdlU2V0dGluZ3MgfSBmcm9tICcuLi90eXBlcy9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IGxhenlMb2FkIH0gZnJvbSAnQHJlYWN0LXBhZ2UvZWRpdG9yJztcclxuY29uc3QgUGFub3JhbWEgPSBsYXp5TG9hZCgoKSA9PiBpbXBvcnQoJ0BtYXRlcmlhbC11aS9pY29ucy9QYW5vcmFtYScpKTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0VHJhbnNsYXRpb25zID0ge1xyXG4gIHBsdWdpbk5hbWU6ICdJbWFnZScsXHJcbiAgcGx1Z2luRGVzY3JpcHRpb246ICdMb2FkcyBhbiBpbWFnZSBmcm9tIGFuIHVybC4nLFxyXG4gIG9yOiAnT1InLFxyXG4gIGhhdmVVcmw6ICdJIGhhdmUgYSBVUkwnLFxyXG4gIGltYWdlVXJsOiAnSW1hZ2UgVVJMJyxcclxuICBocmVmUGxhY2Vob2xkZXI6ICdodHRwOi8vZXhhbXBsZS5jb20nLFxyXG4gIGhyZWZMYWJlbDogJ0xpbmsgbG9jYXRpb24gKHVybCknLFxyXG4gIG9wZW5OZXdXaW5kb3c6ICdPcGVuIGluIG5ldyB3aW5kb3cnLFxyXG4gIHNyY1BsYWNlaG9sZGVyOiAnaHR0cDovL2V4YW1wbGUuY29tL2ltYWdlLnBuZycsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdFNldHRpbmdzOiBJbWFnZVNldHRpbmdzID0ge1xyXG4gIENvbnRyb2xzOiAoKSA9PiA8PkNvbnRyb2xzIGZvciB0aGlzIHBsdWdpbiB3ZXJlIG5vdCBwcm92aWRlZDwvPixcclxuICBSZW5kZXJlcjogKCkgPT4gPD5SZW5kZXJlcjsgZm9yIHRoaXMgcGx1Z2luIHdhcyBub3QgcHJvdmlkZWQgPC8+LFxyXG4gIHRyYW5zbGF0aW9uczogZGVmYXVsdFRyYW5zbGF0aW9ucyxcclxuICBpY29uOiA8UGFub3JhbWEgLz4sXHJcbiAgVXBsb2FkSW1hZ2VGaWVsZDogKCkgPT4gPD5VcGxvYWQgaW1hZ2UgZmllbGQgd2FzIG5vdCBwcm92aWRlZDwvPixcclxufTtcclxuIiwiLypcclxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgT1JZIEVkaXRvci5cclxuICpcclxuICogT1JZIEVkaXRvciBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XHJcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxyXG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxyXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxyXG4gKlxyXG4gKiBPUlkgRWRpdG9yIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXHJcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXHJcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcclxuICogR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxyXG4gKiBhbG9uZyB3aXRoIE9SWSBFZGl0b3IuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXHJcbiAqXHJcbiAqIEBsaWNlbnNlIExHUEwtMy4wXHJcbiAqIEBjb3B5cmlnaHQgMjAxNi0yMDE4IEFlbmVhcyBSZWtrYXNcclxuICogQGF1dGhvciBBZW5lYXMgUmVra2FzIDxhZW5lYXMrb3NzQGFlbmVhcy5pbz5cclxuICpcclxuICovXHJcblxyXG5pbXBvcnQgY3JlYXRlUGx1Z2luIGZyb20gJy4vY3JlYXRlUGx1Z2luJztcclxuXHJcbmltcG9ydCB7IGxhenlMb2FkIH0gZnJvbSAnQHJlYWN0LXBhZ2UvZWRpdG9yJztcclxuXHJcbmltcG9ydCBJbWFnZUh0bWxSZW5kZXJlciBmcm9tICcuL1JlbmRlcmVyL0ltYWdlSHRtbFJlbmRlcmVyJztcclxuaW1wb3J0IHsgSW1hZ2VTZXR0aW5ncyB9IGZyb20gJy4vdHlwZXMvc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBNYWtlT3B0aW9uYWwgfSBmcm9tICcuLi9jb21tb24vdHlwZXMvbWFrZU9wdGlvbmFsJztcclxuXHJcbmNvbnN0IEltYWdlRGVmYXVsdENvbnRyb2xzID0gbGF6eUxvYWQoKCkgPT5cclxuICBpbXBvcnQoJy4vQ29udHJvbHMvSW1hZ2VEZWZhdWx0Q29udHJvbHMnKVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKFxyXG4gIHNldHRpbmdzPzogTWFrZU9wdGlvbmFsPEltYWdlU2V0dGluZ3MsICdSZW5kZXJlcicgfCAnQ29udHJvbHMnPlxyXG4pID0+IHtcclxuICBjb25zdCBwbHVnaW4gPSBjcmVhdGVQbHVnaW4oe1xyXG4gICAgUmVuZGVyZXI6IEltYWdlSHRtbFJlbmRlcmVyLFxyXG4gICAgQ29udHJvbHM6IEltYWdlRGVmYXVsdENvbnRyb2xzLFxyXG4gICAgLi4uc2V0dGluZ3MsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHBsdWdpbjtcclxufTtcclxuIiwiaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICcuLi8uLi9jb21tb24vdHlwZXMvaW1hZ2UvSW1hZ2UnO1xyXG5pbXBvcnQgeyBQYWRkaW5nU3RhdGUgfSBmcm9tICcuLi8uLi9jb21tb24vdHlwZXMvcGFkZGluZy9QYWRkaW5nU3RhdGUnO1xyXG5cclxuZXhwb3J0IGVudW0gSW1hZ2VDb25zdHJhaW50TW9kZSB7XHJcbiAgRnVsbFdpZHRoID0gMCxcclxuICBCaWdIZWlnaHQgPSAxLFxyXG4gIE1lZGl1bUhlaWdodCA9IDIsXHJcbiAgU21hbGxIZWlnaHQgPSAzLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlU3RhdGUgZXh0ZW5kcyBQYWRkaW5nU3RhdGUge1xyXG4gIGltYWdlSWQ/OiBudW1iZXI7XHJcbiAgaW1hZ2U/OiBJbWFnZTtcclxuICBzcmM/OiBzdHJpbmc7XHJcbiAgc3JjU2V0Pzogc3RyaW5nO1xyXG4gIGhyZWY/OiBzdHJpbmc7XHJcbiAgY29uc3RyYWludE1vZGU/OiBJbWFnZUNvbnN0cmFpbnRNb2RlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=