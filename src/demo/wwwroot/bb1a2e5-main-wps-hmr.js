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
/* harmony import */ var _slate_plugins_color__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../slate/plugins/color */ "./src/lib/slate/plugins/color/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _utils_urlUtil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/urlUtil */ "./src/lib/common/utils/urlUtil.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
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
  var children;
  var isWrapped = false;

  if (text[MARK_TAGS.em]) {
    var _children;

    children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", null, (_children = children) !== null && _children !== void 0 ? _children : text.text);
    isWrapped = true;
  }

  if (text[MARK_TAGS.strong]) {
    var _children2;

    children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, (_children2 = children) !== null && _children2 !== void 0 ? _children2 : text.text);
    isWrapped = true;
  }

  if (text[MARK_TAGS.u]) {
    var _children3;

    children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("u", null, (_children3 = children) !== null && _children3 !== void 0 ? _children3 : text.text);
    isWrapped = true;
  }

  if (!isWrapped) {
    children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, text.text);
  }

  return Object(_slate_plugins_color__WEBPACK_IMPORTED_MODULE_11__["addColorStyles"])(text, children);
};

var BLOCK_RULE = function BLOCK_RULE(node, children) {
  var comp;

  switch (node.type) {
    case BLOCK_TAGS.a:
      if (Object(_utils_urlUtil__WEBPACK_IMPORTED_MODULE_13__["isSamePageUrl"])(node.url)) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
          to: node.url
        }, children);
      } else {
        comp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
          href: node.url
        }, children);
      }

      break;

    case BLOCK_TAGS.p:
      comp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, children);
      break;

    case BLOCK_TAGS.p:
      comp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, children);
      break;

    case BLOCK_TAGS.h:
      var level = node.level;

      if (level === 2) {
        comp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, children);
      } else if (level === 3) {
        comp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, children);
      } else if (level === 4) {
        comp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", null, children);
      } else if (level === 5) {
        comp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", null, children);
      } else if (level === 6) {
        comp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", null, children);
      } else {
        comp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, children);
      }

      break;

    case BLOCK_TAGS.blockquote:
      comp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("blockquote", null, children);
      break;

    case BLOCK_TAGS.ol:
      comp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ol", null, children);
      break;

    case BLOCK_TAGS.ul:
      comp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null, children);
      break;

    case BLOCK_TAGS.li:
      comp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null, children);
      break;

    default:
      comp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, children);
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
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

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
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbW1vbi9jb21wb25lbnRzL3NsYXRlUmVuZGVyZXIvcnVsZXMudHN4Il0sIm5hbWVzIjpbIkJMT0NLX1RBR1MiLCJhIiwiTGlua1R5cGUiLCJibG9ja3F1b3RlIiwiUXVvdGVUeXBlIiwiaCIsIkhlYWRpbmdUeXBlIiwiY29sb3IiLCJDb2xvclR5cGUiLCJwIiwiUGFyYWdyYXBoVHlwZSIsInVsIiwiTGlzdFR5cGVzIiwiVUwiLCJvbCIsIk9MIiwibGkiLCJMSSIsIk1BUktfVEFHUyIsImVtIiwiRW1waGFzaXplVHlwZXMiLCJJdGFsaWMiLCJzdHJvbmciLCJCb2xkIiwidSIsIlVuZGVybGluZSIsIlRFWFRfUlVMRSIsInRleHQiLCJjaGlsZHJlbiIsImlzV3JhcHBlZCIsImFkZENvbG9yU3R5bGVzIiwiQkxPQ0tfUlVMRSIsIm5vZGUiLCJjb21wIiwidHlwZSIsImlzU2FtZVBhZ2VVcmwiLCJ1cmwiLCJsZXZlbCIsImFkZEZvbnRTaXplU3R5bGVzIiwiZGVmYXVsdENvbmZpZyIsImFkZEFsaWdubWVudFN0eWxlcyIsInJ1bGVzIiwidGV4dFJ1bGUiLCJub2RlUnVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHO0FBQ2pCQyxHQUFDLEVBQUVDLHNFQURjO0FBRWpCQyxZQUFVLEVBQUVDLHdFQUZLO0FBR2pCQyxHQUFDLEVBQUVDLDhFQUhjO0FBSWpCQyxPQUFLLEVBQUVDLHlFQUpVO0FBS2pCQyxHQUFDLEVBQUVDLG9GQUxjO0FBTWpCQyxJQUFFLEVBQUVDLHdFQUFTLENBQUNDLEVBTkc7QUFPakJDLElBQUUsRUFBRUYsd0VBQVMsQ0FBQ0csRUFQRztBQVFqQkMsSUFBRSxFQUFFSix3RUFBUyxDQUFDSztBQVJH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QUFDRDs7QUFDRixTQUFLNUIsVUFBVSxDQUFDRyxVQUFoQjtBQUNFOEIsVUFBSSxnQkFBRyx3RUFBYUwsUUFBYixDQUFQO0FBQ0E7O0FBQ0YsU0FBSzVCLFVBQVUsQ0FBQ2MsRUFBaEI7QUFDRW1CLFVBQUksZ0JBQUcsZ0VBQUtMLFFBQUwsQ0FBUDtBQUNBOztBQUNGLFNBQUs1QixVQUFVLENBQUNXLEVBQWhCO0FBQ0VzQixVQUFJLGdCQUFHLGdFQUFLTCxRQUFMLENBQVA7QUFDQTs7QUFDRixTQUFLNUIsVUFBVSxDQUFDZ0IsRUFBaEI7QUFDRWlCLFVBQUksZ0JBQUcsZ0VBQUtMLFFBQUwsQ0FBUDtBQUNBOztBQUNGO0FBQ0VLLFVBQUksZ0JBQUcsK0RBQUlMLFFBQUosQ0FBUDtBQUNBO0FBNUNKOztBQThDQSxTQUFPVSxtR0FBaUIsQ0FBQ0Msb0ZBQUQsRUFBZ0JQLElBQWhCLEVBQXNCUSxzR0FBa0IsQ0FBQ1IsSUFBRCxFQUFPQyxJQUFQLENBQXhDLENBQXhCO0FBQ0QsQ0FqREQ7O0FBbURBLElBQU1RLEtBQUssR0FBRztBQUNaQyxVQUFRLEVBQUVoQixTQURFO0FBRVppQixVQUFRLEVBQUVaO0FBRkUsQ0FBZDtlQUtlVSxLO0FBQUE7Ozs7Ozs7Ozs7MEJBL0ZUekMsVTswQkFZQWtCLFM7MEJBTUFRLFM7MEJBcUJBSyxVOzBCQW1EQVUsSyIsImZpbGUiOiJiYjFhMmU1LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUXVvdGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9xdW90ZS9xdW90ZVR5cGUnO1xyXG5pbXBvcnQgeyBIZWFkaW5nVHlwZSB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvaGVhZGluZy9oZWFkaW5nVHlwZSc7XHJcbmltcG9ydCB7IFBhcmFncmFwaFR5cGUgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL3BhcmFncmFwaC93aXRoUGFyYWdyYXBoJztcclxuaW1wb3J0IHsgTGlzdFR5cGVzIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9saXN0cy9saXN0VHlwZXMnO1xyXG5pbXBvcnQgeyBFbXBoYXNpemVUeXBlcyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvZW1waGFzaXplL2VtcGhhc2l6ZVR5cGVzJztcclxuaW1wb3J0IHsgVGV4dCwgRWxlbWVudCB9IGZyb20gJ3NsYXRlJztcclxuaW1wb3J0IHsgYWRkQWxpZ25tZW50U3R5bGVzIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9hbGlnbm1lbnQvYWRkQWxpZ25tZW50U3R5bGVzJztcclxuaW1wb3J0IHsgYWRkRm9udFNpemVTdHlsZXMgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2ZvbnRTaXplL2FkZEZvbnRTaXplU3R5bGVzJztcclxuaW1wb3J0IHsgZGVmYXVsdENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvZm9udFNpemUvZm9udFNpemVDb25maWcnO1xyXG5pbXBvcnQgeyBMaW5rVHlwZSB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvbGlua3MvbGlua1R5cGUnO1xyXG5pbXBvcnQgeyBDb2xvclR5cGUgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2NvbG9yL2NvbG9yVHlwZSc7XHJcbmltcG9ydCB7IGFkZENvbG9yU3R5bGVzIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9jb2xvcic7XHJcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBpc1NhbWVQYWdlVXJsIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXJsVXRpbCc7XHJcblxyXG5jb25zdCBCTE9DS19UQUdTID0ge1xyXG4gIGE6IExpbmtUeXBlLFxyXG4gIGJsb2NrcXVvdGU6IFF1b3RlVHlwZSxcclxuICBoOiBIZWFkaW5nVHlwZSxcclxuICBjb2xvcjogQ29sb3JUeXBlLFxyXG4gIHA6IFBhcmFncmFwaFR5cGUsXHJcbiAgdWw6IExpc3RUeXBlcy5VTCxcclxuICBvbDogTGlzdFR5cGVzLk9MLFxyXG4gIGxpOiBMaXN0VHlwZXMuTEksXHJcbn07XHJcblxyXG4vLyBBZGQgYSBkaWN0aW9uYXJ5IG9mIG1hcmsgdGFncy5cclxuY29uc3QgTUFSS19UQUdTID0ge1xyXG4gIGVtOiBFbXBoYXNpemVUeXBlcy5JdGFsaWMsXHJcbiAgc3Ryb25nOiBFbXBoYXNpemVUeXBlcy5Cb2xkLFxyXG4gIHU6IEVtcGhhc2l6ZVR5cGVzLlVuZGVybGluZSxcclxufTtcclxuXHJcbmNvbnN0IFRFWFRfUlVMRSA9ICh0ZXh0OiBUZXh0KSA9PiB7XHJcbiAgbGV0IGNoaWxkcmVuOiBKU1guRWxlbWVudDtcclxuICBsZXQgaXNXcmFwcGVkID0gZmFsc2U7XHJcbiAgaWYgKHRleHRbTUFSS19UQUdTLmVtXSkge1xyXG4gICAgY2hpbGRyZW4gPSA8aT57Y2hpbGRyZW4gPz8gdGV4dC50ZXh0fTwvaT47XHJcbiAgICBpc1dyYXBwZWQgPSB0cnVlO1xyXG4gIH1cclxuICBpZiAodGV4dFtNQVJLX1RBR1Muc3Ryb25nXSkge1xyXG4gICAgY2hpbGRyZW4gPSA8Yj57Y2hpbGRyZW4gPz8gdGV4dC50ZXh0fTwvYj47XHJcbiAgICBpc1dyYXBwZWQgPSB0cnVlO1xyXG4gIH1cclxuICBpZiAodGV4dFtNQVJLX1RBR1MudV0pIHtcclxuICAgIGNoaWxkcmVuID0gPHU+e2NoaWxkcmVuID8/IHRleHQudGV4dH08L3U+O1xyXG4gICAgaXNXcmFwcGVkID0gdHJ1ZTtcclxuICB9XHJcbiAgaWYgKCFpc1dyYXBwZWQpIHtcclxuICAgIGNoaWxkcmVuID0gPHNwYW4+e3RleHQudGV4dH08L3NwYW4+O1xyXG4gIH1cclxuICByZXR1cm4gYWRkQ29sb3JTdHlsZXModGV4dCwgY2hpbGRyZW4pO1xyXG59O1xyXG5cclxuY29uc3QgQkxPQ0tfUlVMRSA9IChub2RlOiBFbGVtZW50LCBjaGlsZHJlbjogSlNYLkVsZW1lbnQpID0+IHtcclxuICBsZXQgY29tcDogSlNYLkVsZW1lbnQ7XHJcbiAgc3dpdGNoIChub2RlLnR5cGUpIHtcclxuICAgIGNhc2UgQkxPQ0tfVEFHUy5hOlxyXG4gICAgICBpZiAoaXNTYW1lUGFnZVVybChub2RlLnVybCkpIHtcclxuICAgICAgICByZXR1cm4gPFJvdXRlckxpbmsgdG89e25vZGUudXJsfT57Y2hpbGRyZW59PC9Sb3V0ZXJMaW5rPjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb21wID0gPGEgaHJlZj17bm9kZS51cmwgYXMgc3RyaW5nfT57Y2hpbGRyZW59PC9hPjtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQkxPQ0tfVEFHUy5wOlxyXG4gICAgICBjb21wID0gPHA+e2NoaWxkcmVufTwvcD47XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBCTE9DS19UQUdTLnA6XHJcbiAgICAgIGNvbXAgPSA8cD57Y2hpbGRyZW59PC9wPjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEJMT0NLX1RBR1MuaDpcclxuICAgICAgY29uc3QgbGV2ZWwgPSBub2RlLmxldmVsO1xyXG4gICAgICBpZiAobGV2ZWwgPT09IDIpIHtcclxuICAgICAgICBjb21wID0gPGgyPntjaGlsZHJlbn08L2gyPjtcclxuICAgICAgfSBlbHNlIGlmIChsZXZlbCA9PT0gMykge1xyXG4gICAgICAgIGNvbXAgPSA8aDM+e2NoaWxkcmVufTwvaDM+O1xyXG4gICAgICB9IGVsc2UgaWYgKGxldmVsID09PSA0KSB7XHJcbiAgICAgICAgY29tcCA9IDxoND57Y2hpbGRyZW59PC9oND47XHJcbiAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPT09IDUpIHtcclxuICAgICAgICBjb21wID0gPGg1PntjaGlsZHJlbn08L2g1PjtcclxuICAgICAgfSBlbHNlIGlmIChsZXZlbCA9PT0gNikge1xyXG4gICAgICAgIGNvbXAgPSA8aDY+e2NoaWxkcmVufTwvaDY+O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbXAgPSA8aDE+e2NoaWxkcmVufTwvaDE+O1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBCTE9DS19UQUdTLmJsb2NrcXVvdGU6XHJcbiAgICAgIGNvbXAgPSA8YmxvY2txdW90ZT57Y2hpbGRyZW59PC9ibG9ja3F1b3RlPjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEJMT0NLX1RBR1Mub2w6XHJcbiAgICAgIGNvbXAgPSA8b2w+e2NoaWxkcmVufTwvb2w+O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQkxPQ0tfVEFHUy51bDpcclxuICAgICAgY29tcCA9IDx1bD57Y2hpbGRyZW59PC91bD47XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBCTE9DS19UQUdTLmxpOlxyXG4gICAgICBjb21wID0gPGxpPntjaGlsZHJlbn08L2xpPjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBjb21wID0gPHA+e2NoaWxkcmVufTwvcD47XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuICByZXR1cm4gYWRkRm9udFNpemVTdHlsZXMoZGVmYXVsdENvbmZpZywgbm9kZSwgYWRkQWxpZ25tZW50U3R5bGVzKG5vZGUsIGNvbXApKTtcclxufTtcclxuXHJcbmNvbnN0IHJ1bGVzID0ge1xyXG4gIHRleHRSdWxlOiBURVhUX1JVTEUsXHJcbiAgbm9kZVJ1bGU6IEJMT0NLX1JVTEUsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBydWxlcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==