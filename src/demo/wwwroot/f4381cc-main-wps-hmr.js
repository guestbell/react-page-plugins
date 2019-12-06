webpackHotUpdate("main",{

/***/ "./src/lib/common/components/slateRenderer/rules.tsx":
/*!***********************************************************!*\
  !*** ./src/lib/common/components/slateRenderer/rules.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slate_plugins_quote_quoteType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../slate/plugins/quote/quoteType */ "./src/lib/slate/plugins/quote/quoteType.ts");
/* harmony import */ var _slate_plugins_heading_headingType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../slate/plugins/heading/headingType */ "./src/lib/slate/plugins/heading/headingType.ts");
/* harmony import */ var _slate_plugins_paragraph_withParagraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../slate/plugins/paragraph/withParagraph */ "./src/lib/slate/plugins/paragraph/withParagraph.tsx");
/* harmony import */ var _slate_plugins_lists_listTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../slate/plugins/lists/listTypes */ "./src/lib/slate/plugins/lists/listTypes.ts");
/* harmony import */ var _slate_plugins_emphasize_emphasizeTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../slate/plugins/emphasize/emphasizeTypes */ "./src/lib/slate/plugins/emphasize/emphasizeTypes.ts");
/* harmony import */ var _slate_plugins_alignment_addAlignmentStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../slate/plugins/alignment/addAlignmentStyles */ "./src/lib/slate/plugins/alignment/addAlignmentStyles.ts");
/* harmony import */ var _slate_plugins_fontSize_addFontSizeStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../slate/plugins/fontSize/addFontSizeStyles */ "./src/lib/slate/plugins/fontSize/addFontSizeStyles.ts");
/* harmony import */ var _slate_plugins_fontSize_fontSizeConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../slate/plugins/fontSize/fontSizeConfig */ "./src/lib/slate/plugins/fontSize/fontSizeConfig.ts");
/* harmony import */ var _slate_plugins_links_linkType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../slate/plugins/links/linkType */ "./src/lib/slate/plugins/links/linkType.ts");
/* harmony import */ var _slate_plugins_color_colorType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../slate/plugins/color/colorType */ "./src/lib/slate/plugins/color/colorType.ts");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};












var BLOCK_TAGS = {
  a: _slate_plugins_links_linkType__WEBPACK_IMPORTED_MODULE_9__["LinkType"],
  blockquote: _slate_plugins_quote_quoteType__WEBPACK_IMPORTED_MODULE_1__["QuoteType"],
  h: _slate_plugins_heading_headingType__WEBPACK_IMPORTED_MODULE_2__["HeadingType"],
  color: _slate_plugins_color_colorType__WEBPACK_IMPORTED_MODULE_10__["ColorType"],
  p: _slate_plugins_paragraph_withParagraph__WEBPACK_IMPORTED_MODULE_3__["ParagraphType"],
  ul: _slate_plugins_lists_listTypes__WEBPACK_IMPORTED_MODULE_4__["ListTypes"].UL,
  ol: _slate_plugins_lists_listTypes__WEBPACK_IMPORTED_MODULE_4__["ListTypes"].OL,
  li: _slate_plugins_lists_listTypes__WEBPACK_IMPORTED_MODULE_4__["ListTypes"].LI
}; // Add a dictionary of mark tags.

var MARK_TAGS = {
  em: _slate_plugins_emphasize_emphasizeTypes__WEBPACK_IMPORTED_MODULE_5__["EmphasizeTypes"].Italic,
  strong: _slate_plugins_emphasize_emphasizeTypes__WEBPACK_IMPORTED_MODULE_5__["EmphasizeTypes"].Bold,
  u: _slate_plugins_emphasize_emphasizeTypes__WEBPACK_IMPORTED_MODULE_5__["EmphasizeTypes"].Underline
};

var TEXT_RULE = function TEXT_RULE(text) {
  var children = text.text;

  if (text[MARK_TAGS.em]) {
    children = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", null, children);
  }

  if (text[MARK_TAGS.strong]) {
    children = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, children);
  }

  if (text[MARK_TAGS.u]) {
    children = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("u", null, children);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, children);
};

var BLOCK_RULE = function BLOCK_RULE(node, children) {
  var comp;

  switch (node.type) {
    case BLOCK_TAGS.color:
      var color = node.color;
      comp = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        style: color && {
          color: "rgba(".concat(color.r, ",").concat(color.g, ",").concat(color.b, ",").concat(color.a, ")")
        }
      }, children);
      break;

    case BLOCK_TAGS.a:
      comp = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
        href: node.url
      }, children);
      break;

    case BLOCK_TAGS.p:
      comp = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, children);
      break;

    case BLOCK_TAGS.p:
      comp = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, children);
      break;

    case BLOCK_TAGS.h:
      var level = node.level;

      if (level === 2) {
        comp = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, children);
      } else if (level === 3) {
        comp = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, children);
      } else if (level === 4) {
        comp = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", null, children);
      } else if (level === 5) {
        comp = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", null, children);
      } else if (level === 6) {
        comp = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", null, children);
      } else {
        comp = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, children);
      }

      break;

    case BLOCK_TAGS.blockquote:
      comp = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("blockquote", null, children);
      break;

    case BLOCK_TAGS.ol:
      comp = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ol", null, children);
      break;

    case BLOCK_TAGS.ul:
      comp = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null, children);
      break;

    case BLOCK_TAGS.li:
      comp = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null, children);
      break;

    default:
      comp = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, children);
      break;
  }

  return Object(_slate_plugins_fontSize_addFontSizeStyles__WEBPACK_IMPORTED_MODULE_7__["addFontSizeStyles"])(_slate_plugins_fontSize_fontSizeConfig__WEBPACK_IMPORTED_MODULE_8__["defaultConfig"], node, Object(_slate_plugins_alignment_addAlignmentStyles__WEBPACK_IMPORTED_MODULE_6__["addAlignmentStyles"])(node, comp));
};

var rules = {
  textRule: TEXT_RULE,
  nodeRule: BLOCK_RULE
};
var _default = rules;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BLOCK_TAGS, "BLOCK_TAGS", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\slateRenderer\\rules.tsx");
  reactHotLoader.register(MARK_TAGS, "MARK_TAGS", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\slateRenderer\\rules.tsx");
  reactHotLoader.register(TEXT_RULE, "TEXT_RULE", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\slateRenderer\\rules.tsx");
  reactHotLoader.register(BLOCK_RULE, "BLOCK_RULE", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\slateRenderer\\rules.tsx");
  reactHotLoader.register(rules, "rules", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\slateRenderer\\rules.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\slateRenderer\\rules.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbW1vbi9jb21wb25lbnRzL3NsYXRlUmVuZGVyZXIvcnVsZXMudHN4Il0sIm5hbWVzIjpbIkJMT0NLX1RBR1MiLCJhIiwiTGlua1R5cGUiLCJibG9ja3F1b3RlIiwiUXVvdGVUeXBlIiwiaCIsIkhlYWRpbmdUeXBlIiwiY29sb3IiLCJDb2xvclR5cGUiLCJwIiwiUGFyYWdyYXBoVHlwZSIsInVsIiwiTGlzdFR5cGVzIiwiVUwiLCJvbCIsIk9MIiwibGkiLCJMSSIsIk1BUktfVEFHUyIsImVtIiwiRW1waGFzaXplVHlwZXMiLCJJdGFsaWMiLCJzdHJvbmciLCJCb2xkIiwidSIsIlVuZGVybGluZSIsIlRFWFRfUlVMRSIsInRleHQiLCJjaGlsZHJlbiIsIkJMT0NLX1JVTEUiLCJub2RlIiwiY29tcCIsInR5cGUiLCJyIiwiZyIsImIiLCJ1cmwiLCJsZXZlbCIsImFkZEZvbnRTaXplU3R5bGVzIiwiZGVmYXVsdENvbmZpZyIsImFkZEFsaWdubWVudFN0eWxlcyIsInJ1bGVzIiwidGV4dFJ1bGUiLCJub2RlUnVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHO0FBQ2pCQyxHQUFDLEVBQUVDLHNFQURjO0FBRWpCQyxZQUFVLEVBQUVDLHdFQUZLO0FBR2pCQyxHQUFDLEVBQUVDLDhFQUhjO0FBSWpCQyxPQUFLLEVBQUVDLHlFQUpVO0FBS2pCQyxHQUFDLEVBQUVDLG9GQUxjO0FBTWpCQyxJQUFFLEVBQUVDLHdFQUFTLENBQUNDLEVBTkc7QUFPakJDLElBQUUsRUFBRUYsd0VBQVMsQ0FBQ0csRUFQRztBQVFqQkMsSUFBRSxFQUFFSix3RUFBUyxDQUFDSztBQVJHLENBQW5CLEMsQ0FXQTs7QUFDQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEJDLElBQUUsRUFB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QUFDQTs7QUFDRixTQUFLNUIsVUFBVSxDQUFDZ0IsRUFBaEI7QUFDRWUsVUFBSSxHQUFHLGdFQUFLSCxRQUFMLENBQVA7QUFDQTs7QUFDRjtBQUNFRyxVQUFJLEdBQUcsK0RBQUlILFFBQUosQ0FBUDtBQUNBO0FBdERKOztBQXdEQSxTQUFPVSxtR0FBaUIsQ0FBQ0Msb0ZBQUQsRUFBZ0JULElBQWhCLEVBQXNCVSxzR0FBa0IsQ0FBQ1YsSUFBRCxFQUFPQyxJQUFQLENBQXhDLENBQXhCO0FBQ0QsQ0EzREQ7O0FBNkRBLElBQU1VLEtBQUssR0FBRztBQUNaQyxVQUFRLEVBQUVoQixTQURFO0FBRVppQixVQUFRLEVBQUVkO0FBRkUsQ0FBZDtlQUtlWSxLO0FBQUE7Ozs7Ozs7Ozs7MEJBbEdUekMsVTswQkFZQWtCLFM7MEJBTUFRLFM7MEJBY0FHLFU7MEJBNkRBWSxLIiwiZmlsZSI6ImY0MzgxY2MtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBRdW90ZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL3F1b3RlL3F1b3RlVHlwZSc7XHJcbmltcG9ydCB7IEhlYWRpbmdUeXBlIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9oZWFkaW5nL2hlYWRpbmdUeXBlJztcclxuaW1wb3J0IHsgUGFyYWdyYXBoVHlwZSB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvcGFyYWdyYXBoL3dpdGhQYXJhZ3JhcGgnO1xyXG5pbXBvcnQgeyBMaXN0VHlwZXMgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2xpc3RzL2xpc3RUeXBlcyc7XHJcbmltcG9ydCB7IEVtcGhhc2l6ZVR5cGVzIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9lbXBoYXNpemUvZW1waGFzaXplVHlwZXMnO1xyXG5pbXBvcnQgeyBUZXh0LCBFbGVtZW50IH0gZnJvbSAnc2xhdGUnO1xyXG5pbXBvcnQgeyBhZGRBbGlnbm1lbnRTdHlsZXMgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2FsaWdubWVudC9hZGRBbGlnbm1lbnRTdHlsZXMnO1xyXG5pbXBvcnQgeyBhZGRGb250U2l6ZVN0eWxlcyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvZm9udFNpemUvYWRkRm9udFNpemVTdHlsZXMnO1xyXG5pbXBvcnQgeyBkZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9mb250U2l6ZS9mb250U2l6ZUNvbmZpZyc7XHJcbmltcG9ydCB7IExpbmtUeXBlIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9saW5rcy9saW5rVHlwZSc7XHJcbmltcG9ydCB7IENvbG9yVHlwZSB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvY29sb3IvY29sb3JUeXBlJztcclxuXHJcbmNvbnN0IEJMT0NLX1RBR1MgPSB7XHJcbiAgYTogTGlua1R5cGUsXHJcbiAgYmxvY2txdW90ZTogUXVvdGVUeXBlLFxyXG4gIGg6IEhlYWRpbmdUeXBlLFxyXG4gIGNvbG9yOiBDb2xvclR5cGUsXHJcbiAgcDogUGFyYWdyYXBoVHlwZSxcclxuICB1bDogTGlzdFR5cGVzLlVMLFxyXG4gIG9sOiBMaXN0VHlwZXMuT0wsXHJcbiAgbGk6IExpc3RUeXBlcy5MSSxcclxufTtcclxuXHJcbi8vIEFkZCBhIGRpY3Rpb25hcnkgb2YgbWFyayB0YWdzLlxyXG5jb25zdCBNQVJLX1RBR1MgPSB7XHJcbiAgZW06IEVtcGhhc2l6ZVR5cGVzLkl0YWxpYyxcclxuICBzdHJvbmc6IEVtcGhhc2l6ZVR5cGVzLkJvbGQsXHJcbiAgdTogRW1waGFzaXplVHlwZXMuVW5kZXJsaW5lLFxyXG59O1xyXG5cclxuY29uc3QgVEVYVF9SVUxFID0gKHRleHQ6IFRleHQpID0+IHtcclxuICBsZXQgY2hpbGRyZW46IEpTWC5FbGVtZW50IHwgc3RyaW5nID0gdGV4dC50ZXh0O1xyXG4gIGlmICh0ZXh0W01BUktfVEFHUy5lbV0pIHtcclxuICAgIGNoaWxkcmVuID0gPGk+e2NoaWxkcmVufTwvaT47XHJcbiAgfVxyXG4gIGlmICh0ZXh0W01BUktfVEFHUy5zdHJvbmddKSB7XHJcbiAgICBjaGlsZHJlbiA9IDxiPntjaGlsZHJlbn08L2I+O1xyXG4gIH1cclxuICBpZiAodGV4dFtNQVJLX1RBR1MudV0pIHtcclxuICAgIGNoaWxkcmVuID0gPHU+e2NoaWxkcmVufTwvdT47XHJcbiAgfVxyXG4gIHJldHVybiA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPjtcclxufTtcclxuXHJcbmNvbnN0IEJMT0NLX1JVTEUgPSAobm9kZTogRWxlbWVudCwgY2hpbGRyZW46IEpTWC5FbGVtZW50KSA9PiB7XHJcbiAgbGV0IGNvbXA6IEpTWC5FbGVtZW50O1xyXG4gIHN3aXRjaCAobm9kZS50eXBlKSB7XHJcbiAgICBjYXNlIEJMT0NLX1RBR1MuY29sb3I6XHJcbiAgICAgIGNvbnN0IGNvbG9yID0gbm9kZS5jb2xvcjtcclxuICAgICAgY29tcCA9IChcclxuICAgICAgICA8c3BhblxyXG4gICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICBjb2xvciAmJiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IGByZ2JhKCR7Y29sb3Iucn0sJHtjb2xvci5nfSwke2NvbG9yLmJ9LCR7Y29sb3IuYX0pYCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBCTE9DS19UQUdTLmE6XHJcbiAgICAgIGNvbXAgPSA8YSBocmVmPXtub2RlLnVybH0+e2NoaWxkcmVufTwvYT47XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBCTE9DS19UQUdTLnA6XHJcbiAgICAgIGNvbXAgPSA8cD57Y2hpbGRyZW59PC9wPjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEJMT0NLX1RBR1MucDpcclxuICAgICAgY29tcCA9IDxwPntjaGlsZHJlbn08L3A+O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQkxPQ0tfVEFHUy5oOlxyXG4gICAgICBjb25zdCBsZXZlbCA9IG5vZGUubGV2ZWw7XHJcbiAgICAgIGlmIChsZXZlbCA9PT0gMikge1xyXG4gICAgICAgIGNvbXAgPSA8aDI+e2NoaWxkcmVufTwvaDI+O1xyXG4gICAgICB9IGVsc2UgaWYgKGxldmVsID09PSAzKSB7XHJcbiAgICAgICAgY29tcCA9IDxoMz57Y2hpbGRyZW59PC9oMz47XHJcbiAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPT09IDQpIHtcclxuICAgICAgICBjb21wID0gPGg0PntjaGlsZHJlbn08L2g0PjtcclxuICAgICAgfSBlbHNlIGlmIChsZXZlbCA9PT0gNSkge1xyXG4gICAgICAgIGNvbXAgPSA8aDU+e2NoaWxkcmVufTwvaDU+O1xyXG4gICAgICB9IGVsc2UgaWYgKGxldmVsID09PSA2KSB7XHJcbiAgICAgICAgY29tcCA9IDxoNj57Y2hpbGRyZW59PC9oNj47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29tcCA9IDxoMT57Y2hpbGRyZW59PC9oMT47XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEJMT0NLX1RBR1MuYmxvY2txdW90ZTpcclxuICAgICAgY29tcCA9IDxibG9ja3F1b3RlPntjaGlsZHJlbn08L2Jsb2NrcXVvdGU+O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQkxPQ0tfVEFHUy5vbDpcclxuICAgICAgY29tcCA9IDxvbD57Y2hpbGRyZW59PC9vbD47XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBCTE9DS19UQUdTLnVsOlxyXG4gICAgICBjb21wID0gPHVsPntjaGlsZHJlbn08L3VsPjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEJMT0NLX1RBR1MubGk6XHJcbiAgICAgIGNvbXAgPSA8bGk+e2NoaWxkcmVufTwvbGk+O1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGNvbXAgPSA8cD57Y2hpbGRyZW59PC9wPjtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIHJldHVybiBhZGRGb250U2l6ZVN0eWxlcyhkZWZhdWx0Q29uZmlnLCBub2RlLCBhZGRBbGlnbm1lbnRTdHlsZXMobm9kZSwgY29tcCkpO1xyXG59O1xyXG5cclxuY29uc3QgcnVsZXMgPSB7XHJcbiAgdGV4dFJ1bGU6IFRFWFRfUlVMRSxcclxuICBub2RlUnVsZTogQkxPQ0tfUlVMRSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJ1bGVzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9