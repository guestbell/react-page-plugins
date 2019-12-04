webpackHotUpdate("main",{

/***/ "./src/lib/slate/Controls/SlateDefaultControls.tsx":
/*!*********************************************************!*\
  !*** ./src/lib/slate/Controls/SlateDefaultControls.tsx ***!
  \*********************************************************/
/*! exports provided: renderElement, renderMark, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderElement", function() { return renderElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderMark", function() { return renderMark; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate-react */ "./node_modules/slate-react/dist/index.es.js");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate */ "./node_modules/slate/dist/index.es.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hoveringToolbar_HoveringToolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hoveringToolbar/HoveringToolbar */ "./src/lib/slate/Controls/hoveringToolbar/HoveringToolbar.tsx");
/* harmony import */ var _plugins_marks_withMarks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../plugins/marks/withMarks */ "./src/lib/slate/plugins/marks/withMarks.ts");
/* harmony import */ var _plugins_marks_Mark__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../plugins/marks/Mark */ "./src/lib/slate/plugins/marks/Mark.tsx");
/* harmony import */ var _plugins_links_withLinks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../plugins/links/withLinks */ "./src/lib/slate/plugins/links/withLinks.ts");
/* harmony import */ var _plugins_links_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../plugins/links/Link */ "./src/lib/slate/plugins/links/Link.tsx");
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! is-hotkey */ "./node_modules/is-hotkey/lib/index.js");
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(is_hotkey__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _plugins_alignment_AlignmentButtons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../plugins/alignment/AlignmentButtons */ "./src/lib/slate/plugins/alignment/AlignmentButtons.tsx");
/* harmony import */ var _plugins_alignment_withAlignments__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../plugins/alignment/withAlignments */ "./src/lib/slate/plugins/alignment/withAlignments.ts");
/* harmony import */ var _plugins_heading_Heading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../plugins/heading/Heading */ "./src/lib/slate/plugins/heading/Heading.tsx");
/* harmony import */ var _plugins_paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../plugins/paragraph/Paragraph */ "./src/lib/slate/plugins/paragraph/Paragraph.tsx");
/* harmony import */ var _plugins_heading_withHeadings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../plugins/heading/withHeadings */ "./src/lib/slate/plugins/heading/withHeadings.ts");
/* harmony import */ var _plugins_lists_List__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../plugins/lists/List */ "./src/lib/slate/plugins/lists/List.tsx");
/* harmony import */ var _plugins_lists_withLists__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../plugins/lists/withLists */ "./src/lib/slate/plugins/lists/withLists.ts");
/* harmony import */ var _plugins_lists_ListButtons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../plugins/lists/ListButtons */ "./src/lib/slate/plugins/lists/ListButtons.tsx");
/* harmony import */ var _plugins_fontSize_withFontSizes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../plugins/fontSize/withFontSizes */ "./src/lib/slate/plugins/fontSize/withFontSizes.ts");
/* harmony import */ var _plugins_fontSize_FontSizeButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../plugins/fontSize/FontSizeButton */ "./src/lib/slate/plugins/fontSize/FontSizeButton.tsx");
/* harmony import */ var _plugins_color_ColorButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../plugins/color/ColorButton */ "./src/lib/slate/plugins/color/ColorButton.tsx");
/* harmony import */ var _plugins_color_withColors__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../plugins/color/withColors */ "./src/lib/slate/plugins/color/withColors.ts");
/* harmony import */ var _plugins_color_ColorElement__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../plugins/color/ColorElement */ "./src/lib/slate/plugins/color/ColorElement.tsx");
/* harmony import */ var _plugins_quote_withQuotes__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../plugins/quote/withQuotes */ "./src/lib/slate/plugins/quote/withQuotes.ts");
/* harmony import */ var _plugins_quote_Quote__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../plugins/quote/Quote */ "./src/lib/slate/plugins/quote/Quote.tsx");
/* harmony import */ var _plugins_quote_QuoteButton__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../plugins/quote/QuoteButton */ "./src/lib/slate/plugins/quote/QuoteButton.tsx");
/* harmony import */ var _common_components_bottomToolbar_BottomToolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../common/components/bottomToolbar/BottomToolbar */ "./src/lib/common/components/bottomToolbar/BottomToolbar.tsx");
/* harmony import */ var _plugins_htmlPaste_withHtmlPaste__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../plugins/htmlPaste/withHtmlPaste */ "./src/lib/slate/plugins/htmlPaste/withHtmlPaste.ts");
/* harmony import */ var _plugins_links_LinkButton__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../plugins/links/LinkButton */ "./src/lib/slate/plugins/links/LinkButton.tsx");
/* harmony import */ var _plugins_heading_HeadingButtonCompact__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../plugins/heading/HeadingButtonCompact */ "./src/lib/slate/plugins/heading/HeadingButtonCompact.tsx");
/* harmony import */ var _plugins_marks_MarkButton__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../plugins/marks/MarkButton */ "./src/lib/slate/plugins/marks/MarkButton.tsx");
/* harmony import */ var _common_components_slateEditor_slateEmptyValue__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../common/components/slateEditor/slateEmptyValue */ "./src/lib/common/components/slateEditor/slateEmptyValue.ts");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



































var allHotkeys = _objectSpread({}, _plugins_marks_withMarks__WEBPACK_IMPORTED_MODULE_5__["MARK_HOTKEYS"]);

var renderElement = function renderElement(props) {
  var element = props.element;
  var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_1__["useEditor"])();
  var comp = Object(_plugins_links_Link__WEBPACK_IMPORTED_MODULE_8__["Link"])(props) || Object(_plugins_heading_Heading__WEBPACK_IMPORTED_MODULE_12__["Heading"])(props) || Object(_plugins_lists_List__WEBPACK_IMPORTED_MODULE_15__["List"])(props) || Object(_plugins_color_ColorElement__WEBPACK_IMPORTED_MODULE_22__["ColorElement"])(props) || Object(_plugins_quote_Quote__WEBPACK_IMPORTED_MODULE_24__["Quote"])(props) || Object(_plugins_paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_13__["Paragraph"])(props);
  return Object(_plugins_fontSize_withFontSizes__WEBPACK_IMPORTED_MODULE_18__["addFontSizeStyles"])(editor, element, Object(_plugins_alignment_withAlignments__WEBPACK_IMPORTED_MODULE_11__["addAlignmentStyles"])(element, comp));
};

__signature__(renderElement, "useEditor{editor}", function () {
  return [slate_react__WEBPACK_IMPORTED_MODULE_1__["useEditor"]];
});

var renderMark = function renderMark(props) {
  var comp = Object(_plugins_marks_Mark__WEBPACK_IMPORTED_MODULE_6__["Mark"])(props);
  return comp;
};

var SlateDefaultControls = function SlateDefaultControls(props) {
  var defaultValue = props.state.slateState || _common_components_slateEditor_slateEmptyValue__WEBPACK_IMPORTED_MODULE_31__["slateEmptyValue"];
  var readOnly = props.readOnly,
      focused = props.focused,
      remove = props.remove,
      translations = props.translations,
      onChange = props.onChange;
  var editor = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](Object(_plugins_htmlPaste_withHtmlPaste__WEBPACK_IMPORTED_MODULE_27__["withHtml"])(Object(_plugins_quote_withQuotes__WEBPACK_IMPORTED_MODULE_23__["withQuotes"])(Object(_plugins_color_withColors__WEBPACK_IMPORTED_MODULE_21__["withColors"])(Object(_plugins_fontSize_withFontSizes__WEBPACK_IMPORTED_MODULE_18__["withFontSizes"])()(Object(_plugins_lists_withLists__WEBPACK_IMPORTED_MODULE_16__["withLists"])(Object(_plugins_heading_withHeadings__WEBPACK_IMPORTED_MODULE_14__["withHeadings"])()(Object(_plugins_alignment_withAlignments__WEBPACK_IMPORTED_MODULE_11__["withAlignments"])(Object(_plugins_links_withLinks__WEBPACK_IMPORTED_MODULE_7__["withLinks"])(Object(_plugins_marks_withMarks__WEBPACK_IMPORTED_MODULE_5__["withMarks"])(Object(slate_react__WEBPACK_IMPORTED_MODULE_1__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_2__["createEditor"])()))))))))))).current;

  var stateChanged = function stateChanged(slateState) {
    return onChange({
      slateState: slateState
    });
  };

  var debouncedOnChange = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(stateChanged, 2000, {
    leading: false,
    trailing: true
  })).current;
  /*React.useEffect(() => {
    setTimeout(
      () =>
        onChange({
          slateState: defaultValue2,
          slateStateTimestamp: new Date().getTime(),
        }),
      1000
    );
  }, []);*/

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "slateControls ory-prevent-blur"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](slate_react__WEBPACK_IMPORTED_MODULE_1__["Slate"], {
    key: props.state.slateStateTimestamp,
    editor: editor,
    defaultValue: defaultValue,
    onChange: debouncedOnChange
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](slate_react__WEBPACK_IMPORTED_MODULE_1__["Editable"], {
    readOnly: props.readOnly,
    placeholder: translations.textPlaceholder,
    renderMark: renderMark,
    renderElement: renderElement,
    onKeyDown: function onKeyDown(event) {
      for (var hotkey in allHotkeys) {
        if (is_hotkey__WEBPACK_IMPORTED_MODULE_9___default()(hotkey, event)) {
          event.preventDefault();
          editor.exec({
            type: 'toggle_mark',
            mark: {
              type: _plugins_marks_withMarks__WEBPACK_IMPORTED_MODULE_5__["MARK_HOTKEYS"][hotkey]
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
    }
  }), !readOnly && focused && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_hoveringToolbar_HoveringToolbar__WEBPACK_IMPORTED_MODULE_4__["HoveringToolbar"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_marks_MarkButton__WEBPACK_IMPORTED_MODULE_30__["MarkButton"], {
    type: _plugins_marks_withMarks__WEBPACK_IMPORTED_MODULE_5__["MarkTypes"].Bold
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_marks_MarkButton__WEBPACK_IMPORTED_MODULE_30__["MarkButton"], {
    type: _plugins_marks_withMarks__WEBPACK_IMPORTED_MODULE_5__["MarkTypes"].Italic
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_marks_MarkButton__WEBPACK_IMPORTED_MODULE_30__["MarkButton"], {
    type: _plugins_marks_withMarks__WEBPACK_IMPORTED_MODULE_5__["MarkTypes"].Underline
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_links_LinkButton__WEBPACK_IMPORTED_MODULE_28__["LinkButton"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_color_ColorButton__WEBPACK_IMPORTED_MODULE_20__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_bottomToolbar_BottomToolbar__WEBPACK_IMPORTED_MODULE_26__["default"], _extends({
    icon: props.IconComponent,
    open: props.focused,
    title: props.translations.pluginName,
    onDelete: remove
  }, props, {
    theme: props.theme
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_heading_HeadingButtonCompact__WEBPACK_IMPORTED_MODULE_29__["default"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_fontSize_FontSizeButton__WEBPACK_IMPORTED_MODULE_19__["default"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_color_ColorButton__WEBPACK_IMPORTED_MODULE_20__["default"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_alignment_AlignmentButtons__WEBPACK_IMPORTED_MODULE_10__["AlignmentButtons"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_lists_ListButtons__WEBPACK_IMPORTED_MODULE_17__["ListButtons"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_links_LinkButton__WEBPACK_IMPORTED_MODULE_28__["LinkButton"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_quote_QuoteButton__WEBPACK_IMPORTED_MODULE_25__["QuoteButton"], null))))));
};

__signature__(SlateDefaultControls, "useRef{}\nuseRef{}");

var _default = SlateDefaultControls;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(allHotkeys, "allHotkeys", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\Controls\\SlateDefaultControls.tsx");
  reactHotLoader.register(renderElement, "renderElement", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\Controls\\SlateDefaultControls.tsx");
  reactHotLoader.register(renderMark, "renderMark", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\Controls\\SlateDefaultControls.tsx");
  reactHotLoader.register(SlateDefaultControls, "SlateDefaultControls", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\Controls\\SlateDefaultControls.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\Controls\\SlateDefaultControls.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3NsYXRlL0NvbnRyb2xzL1NsYXRlRGVmYXVsdENvbnRyb2xzLnRzeCJdLCJuYW1lcyI6WyJhbGxIb3RrZXlzIiwiTUFSS19IT1RLRVlTIiwicmVuZGVyRWxlbWVudCIsInByb3BzIiwiZWxlbWVudCIsImVkaXRvciIsInVzZUVkaXRvciIsImNvbXAiLCJMaW5rIiwiSGVhZGluZyIsIkxpc3QiLCJDb2xvckVsZW1lbnQiLCJRdW90ZSIsIlBhcmFncmFwaCIsImFkZEZvbnRTaXplU3R5bGVzIiwiYWRkQWxpZ25tZW50U3R5bGVzIiwicmVuZGVyTWFyayIsIk1hcmsiLCJTbGF0ZURlZmF1bHRDb250cm9scyIsImRlZmF1bHRWYWx1ZSIsInN0YXRlIiwic2xhdGVTdGF0ZSIsInNsYXRlRW1wdHlWYWx1ZSIsInJlYWRPbmx5IiwiZm9jdXNlZCIsInJlbW92ZSIsInRyYW5zbGF0aW9ucyIsIm9uQ2hhbmdlIiwiUmVhY3QiLCJ3aXRoSHRtbCIsIndpdGhRdW90ZXMiLCJ3aXRoQ29sb3JzIiwid2l0aEZvbnRTaXplcyIsIndpdGhMaXN0cyIsIndpdGhIZWFkaW5ncyIsIndpdGhBbGlnbm1lbnRzIiwid2l0aExpbmtzIiwid2l0aE1hcmtzIiwid2l0aFJlYWN0IiwiY3JlYXRlRWRpdG9yIiwiY3VycmVudCIsInN0YXRlQ2hhbmdlZCIsImRlYm91bmNlZE9uQ2hhbmdlIiwiZGVib3VuY2UiLCJsZWFkaW5nIiwidHJhaWxpbmciLCJzbGF0ZVN0YXRlVGltZXN0YW1wIiwidGV4dFBsYWNlaG9sZGVyIiwiZXZlbnQiLCJob3RrZXkiLCJpc0hvdGtleSIsInByZXZlbnREZWZhdWx0IiwiZXhlYyIsInR5cGUiLCJtYXJrIiwidGV4dCIsIk1hcmtUeXBlcyIsIkJvbGQiLCJJdGFsaWMiLCJVbmRlcmxpbmUiLCJJY29uQ29tcG9uZW50IiwicGx1Z2luTmFtZSIsInRoZW1lIiwiZGlzcGxheSIsImFsaWduSXRlbXMiXSwibWFwcGluZ3MiOiI7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QUFJLEVBQUV4RCxLQUFLLENBQUN5RCxhQURkO0FBRUUsUUFBSSxFQUFFekQsS0FBSyxDQUFDcUIsT0FGZDtBQUdFLFNBQUssRUFBRXJCLEtBQUssQ0FBQ3VCLFlBQU4sQ0FBbUJtQyxVQUg1QjtBQUlFLFlBQVEsRUFBRXBDO0FBSlosS0FLTXRCLEtBTE47QUFNRSxTQUFLLEVBQUVBLEtBQUssQ0FBQzJEO0FBTmYsTUFRRTtBQUFLLFNBQUssRUFBRTtBQUFFQyxhQUFPLEVBQUUsTUFBWDtBQUFtQkMsZ0JBQVUsRUFBRTtBQUEvQjtBQUFaLEtBQ0Usb0RBQUMsOEVBQUQsT0FERixFQUVFLG9EQUFDLHlFQUFELE9BRkYsRUFHRSxvREFBQyxtRUFBRCxPQUhGLEVBSUUsb0RBQUMscUZBQUQsT0FKRixFQUtFLG9EQUFDLHVFQUFELE9BTEYsRUFNRSxvREFBQyxxRUFBRCxPQU5GLEVBT0Usb0RBQUMsdUVBQUQsT0FQRixDQVJGLENBUkYsQ0EvQkosQ0FERixDQURGO0FBaUVELENBdEdEOztjQUFNOUMsb0I7O2VBd0dTQSxvQjtBQUFBOzs7Ozs7Ozs7OzBCQTVIVGxCLFU7MEJBRU9FLGE7MEJBYUFjLFU7MEJBS1BFLG9CIiwiZmlsZSI6IjU0M2JiNDgtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgU2xhdGVDb250cm9sc1Byb3BzIGFzIFNsYXRlQ29udHJvbHNDdXN0b21Qcm9wcyB9IGZyb20gJy4uL3R5cGVzL2NvbnRyb2xzJztcclxuaW1wb3J0IHtcclxuICB3aXRoUmVhY3QsXHJcbiAgU2xhdGUsXHJcbiAgRWRpdGFibGUsXHJcbiAgUmVuZGVyRWxlbWVudFByb3BzLFxyXG4gIHVzZUVkaXRvcixcclxuICBSZW5kZXJNYXJrUHJvcHMsXHJcbn0gZnJvbSAnc2xhdGUtcmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVFZGl0b3IsIE5vZGUgfSBmcm9tICdzbGF0ZSc7XHJcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2gvZGVib3VuY2UnO1xyXG5pbXBvcnQgeyBIb3ZlcmluZ1Rvb2xiYXIgfSBmcm9tICcuL2hvdmVyaW5nVG9vbGJhci9Ib3ZlcmluZ1Rvb2xiYXInO1xyXG5pbXBvcnQgeyB3aXRoTWFya3MsIE1BUktfSE9US0VZUyB9IGZyb20gJy4uL3BsdWdpbnMvbWFya3Mvd2l0aE1hcmtzJztcclxuaW1wb3J0IHsgTWFyayB9IGZyb20gJy4uL3BsdWdpbnMvbWFya3MvTWFyayc7XHJcbmltcG9ydCB7IHdpdGhMaW5rcyB9IGZyb20gJy4uL3BsdWdpbnMvbGlua3Mvd2l0aExpbmtzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3BsdWdpbnMvbGlua3MvTGluayc7XHJcbmltcG9ydCBpc0hvdGtleSBmcm9tICdpcy1ob3RrZXknO1xyXG5pbXBvcnQgeyBBbGlnbm1lbnRCdXR0b25zIH0gZnJvbSAnLi4vcGx1Z2lucy9hbGlnbm1lbnQvQWxpZ25tZW50QnV0dG9ucyc7XHJcbmltcG9ydCB7XHJcbiAgd2l0aEFsaWdubWVudHMsXHJcbiAgYWRkQWxpZ25tZW50U3R5bGVzLFxyXG59IGZyb20gJy4uL3BsdWdpbnMvYWxpZ25tZW50L3dpdGhBbGlnbm1lbnRzJztcclxuaW1wb3J0IHsgSGVhZGluZyB9IGZyb20gJy4uL3BsdWdpbnMvaGVhZGluZy9IZWFkaW5nJztcclxuaW1wb3J0IHsgUGFyYWdyYXBoIH0gZnJvbSAnLi4vcGx1Z2lucy9wYXJhZ3JhcGgvUGFyYWdyYXBoJztcclxuaW1wb3J0IHsgd2l0aEhlYWRpbmdzIH0gZnJvbSAnLi4vcGx1Z2lucy9oZWFkaW5nL3dpdGhIZWFkaW5ncyc7XHJcbmltcG9ydCB7IExpc3QgfSBmcm9tICcuLi9wbHVnaW5zL2xpc3RzL0xpc3QnO1xyXG5pbXBvcnQgeyB3aXRoTGlzdHMgfSBmcm9tICcuLi9wbHVnaW5zL2xpc3RzL3dpdGhMaXN0cyc7XHJcbmltcG9ydCB7IExpc3RCdXR0b25zIH0gZnJvbSAnLi4vcGx1Z2lucy9saXN0cy9MaXN0QnV0dG9ucyc7XHJcbmltcG9ydCB7XHJcbiAgd2l0aEZvbnRTaXplcyxcclxuICBhZGRGb250U2l6ZVN0eWxlcyxcclxufSBmcm9tICcuLi9wbHVnaW5zL2ZvbnRTaXplL3dpdGhGb250U2l6ZXMnO1xyXG5pbXBvcnQgRm9udFNpemVCdXR0b24gZnJvbSAnLi4vcGx1Z2lucy9mb250U2l6ZS9Gb250U2l6ZUJ1dHRvbic7XHJcbmltcG9ydCBDb2xvckJ1dHRvbiBmcm9tICcuLi9wbHVnaW5zL2NvbG9yL0NvbG9yQnV0dG9uJztcclxuaW1wb3J0IHsgd2l0aENvbG9ycyB9IGZyb20gJy4uL3BsdWdpbnMvY29sb3Ivd2l0aENvbG9ycyc7XHJcbmltcG9ydCB7IENvbG9yRWxlbWVudCB9IGZyb20gJy4uL3BsdWdpbnMvY29sb3IvQ29sb3JFbGVtZW50JztcclxuaW1wb3J0IHsgd2l0aFF1b3RlcyB9IGZyb20gJy4uL3BsdWdpbnMvcXVvdGUvd2l0aFF1b3Rlcyc7XHJcbmltcG9ydCB7IFF1b3RlIH0gZnJvbSAnLi4vcGx1Z2lucy9xdW90ZS9RdW90ZSc7XHJcbmltcG9ydCB7IFF1b3RlQnV0dG9uIH0gZnJvbSAnLi4vcGx1Z2lucy9xdW90ZS9RdW90ZUJ1dHRvbic7XHJcbmltcG9ydCBCb3R0b21Ub29sYmFyIGZyb20gJy4uLy4uL2NvbW1vbi9jb21wb25lbnRzL2JvdHRvbVRvb2xiYXIvQm90dG9tVG9vbGJhcic7XHJcbmltcG9ydCB7IHdpdGhIdG1sIH0gZnJvbSAnLi4vcGx1Z2lucy9odG1sUGFzdGUvd2l0aEh0bWxQYXN0ZSc7XHJcbmltcG9ydCB7IExpbmtCdXR0b24gfSBmcm9tICcuLi9wbHVnaW5zL2xpbmtzL0xpbmtCdXR0b24nO1xyXG5pbXBvcnQgSGVhZGluZ0J1dHRvbkNvbXBhY3QgZnJvbSAnLi4vcGx1Z2lucy9oZWFkaW5nL0hlYWRpbmdCdXR0b25Db21wYWN0JztcclxuaW1wb3J0IHsgTWFya0J1dHRvbiB9IGZyb20gJy4uL3BsdWdpbnMvbWFya3MvTWFya0J1dHRvbic7XHJcbmltcG9ydCB7IE1hcmtUeXBlcyB9IGZyb20gJy4uL3BsdWdpbnMvbWFya3Mvd2l0aE1hcmtzJztcclxuaW1wb3J0IHsgc2xhdGVFbXB0eVZhbHVlIH0gZnJvbSAnLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvc2xhdGVFZGl0b3Ivc2xhdGVFbXB0eVZhbHVlJztcclxuXHJcbnR5cGUgU2xhdGVDb250cm9sc1Byb3BzID0gU2xhdGVDb250cm9sc0N1c3RvbVByb3BzO1xyXG5cclxuY29uc3QgYWxsSG90a2V5cyA9IHsgLi4uTUFSS19IT1RLRVlTIH07XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyRWxlbWVudDogUmVhY3QuRkM8UmVuZGVyRWxlbWVudFByb3BzPiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGVsZW1lbnQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGVkaXRvciA9IHVzZUVkaXRvcigpO1xyXG4gIGNvbnN0IGNvbXAgPVxyXG4gICAgTGluayhwcm9wcykgfHxcclxuICAgIEhlYWRpbmcocHJvcHMpIHx8XHJcbiAgICBMaXN0KHByb3BzKSB8fFxyXG4gICAgQ29sb3JFbGVtZW50KHByb3BzKSB8fFxyXG4gICAgUXVvdGUocHJvcHMpIHx8XHJcbiAgICBQYXJhZ3JhcGgocHJvcHMpO1xyXG4gIHJldHVybiBhZGRGb250U2l6ZVN0eWxlcyhlZGl0b3IsIGVsZW1lbnQsIGFkZEFsaWdubWVudFN0eWxlcyhlbGVtZW50LCBjb21wKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyTWFyazogUmVhY3QuRkM8UmVuZGVyTWFya1Byb3BzPiA9IHByb3BzID0+IHtcclxuICBjb25zdCBjb21wID0gTWFyayhwcm9wcyk7XHJcbiAgcmV0dXJuIGNvbXA7XHJcbn07XHJcblxyXG5jb25zdCBTbGF0ZURlZmF1bHRDb250cm9sczogUmVhY3QuU0ZDPFNsYXRlQ29udHJvbHNQcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgZGVmYXVsdFZhbHVlID0gcHJvcHMuc3RhdGUuc2xhdGVTdGF0ZSB8fCBzbGF0ZUVtcHR5VmFsdWU7XHJcblxyXG4gIGNvbnN0IHsgcmVhZE9ubHksIGZvY3VzZWQsIHJlbW92ZSwgdHJhbnNsYXRpb25zLCBvbkNoYW5nZSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgZWRpdG9yID0gUmVhY3QudXNlUmVmKFxyXG4gICAgd2l0aEh0bWwoXHJcbiAgICAgIHdpdGhRdW90ZXMoXHJcbiAgICAgICAgd2l0aENvbG9ycyhcclxuICAgICAgICAgIHdpdGhGb250U2l6ZXMoKShcclxuICAgICAgICAgICAgd2l0aExpc3RzKFxyXG4gICAgICAgICAgICAgIHdpdGhIZWFkaW5ncygpKFxyXG4gICAgICAgICAgICAgICAgd2l0aEFsaWdubWVudHMod2l0aExpbmtzKHdpdGhNYXJrcyh3aXRoUmVhY3QoY3JlYXRlRWRpdG9yKCkpKSkpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcbiAgICApXHJcbiAgKS5jdXJyZW50O1xyXG5cclxuICBjb25zdCBzdGF0ZUNoYW5nZWQgPSAoc2xhdGVTdGF0ZTogTm9kZVtdKSA9PiBvbkNoYW5nZSh7IHNsYXRlU3RhdGUgfSk7XHJcblxyXG4gIGNvbnN0IGRlYm91bmNlZE9uQ2hhbmdlID0gUmVhY3QudXNlUmVmKFxyXG4gICAgZGVib3VuY2Uoc3RhdGVDaGFuZ2VkLCAyMDAwLCB7IGxlYWRpbmc6IGZhbHNlLCB0cmFpbGluZzogdHJ1ZSB9KVxyXG4gICkuY3VycmVudDtcclxuXHJcbiAgLypSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dChcclxuICAgICAgKCkgPT5cclxuICAgICAgICBvbkNoYW5nZSh7XHJcbiAgICAgICAgICBzbGF0ZVN0YXRlOiBkZWZhdWx0VmFsdWUyLFxyXG4gICAgICAgICAgc2xhdGVTdGF0ZVRpbWVzdGFtcDogbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcbiAgICAgICAgfSksXHJcbiAgICAgIDEwMDBcclxuICAgICk7XHJcbiAgfSwgW10pOyovXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNsYXRlQ29udHJvbHMgb3J5LXByZXZlbnQtYmx1clwiPlxyXG4gICAgICA8U2xhdGVcclxuICAgICAgICBrZXk9e3Byb3BzLnN0YXRlLnNsYXRlU3RhdGVUaW1lc3RhbXB9XHJcbiAgICAgICAgZWRpdG9yPXtlZGl0b3J9XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XHJcbiAgICAgICAgb25DaGFuZ2U9e2RlYm91bmNlZE9uQ2hhbmdlfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEVkaXRhYmxlXHJcbiAgICAgICAgICByZWFkT25seT17cHJvcHMucmVhZE9ubHl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17dHJhbnNsYXRpb25zLnRleHRQbGFjZWhvbGRlcn1cclxuICAgICAgICAgIHJlbmRlck1hcms9e3JlbmRlck1hcmt9XHJcbiAgICAgICAgICByZW5kZXJFbGVtZW50PXtyZW5kZXJFbGVtZW50fVxyXG4gICAgICAgICAgb25LZXlEb3duPXtldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaG90a2V5IGluIGFsbEhvdGtleXMpIHtcclxuICAgICAgICAgICAgICBpZiAoaXNIb3RrZXkoaG90a2V5LCAoZXZlbnQgYXMgdW5rbm93bikgYXMgS2V5Ym9hcmRFdmVudCkpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlZGl0b3IuZXhlYyh7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICd0b2dnbGVfbWFyaycsXHJcbiAgICAgICAgICAgICAgICAgIG1hcms6IHsgdHlwZTogTUFSS19IT1RLRVlTW2hvdGtleV0gfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNIb3RrZXkoJ3NoaWZ0K2VudGVyJywgKGV2ZW50IGFzIHVua25vd24pIGFzIEtleWJvYXJkRXZlbnQpKSB7XHJcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBlZGl0b3IuZXhlYyh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW5zZXJ0X3RleHQnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1xcbicsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7IXJlYWRPbmx5ICYmIGZvY3VzZWQgJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhvdmVyaW5nVG9vbGJhcj5cclxuICAgICAgICAgICAgICA8TWFya0J1dHRvbiB0eXBlPXtNYXJrVHlwZXMuQm9sZH0gLz5cclxuICAgICAgICAgICAgICA8TWFya0J1dHRvbiB0eXBlPXtNYXJrVHlwZXMuSXRhbGljfSAvPlxyXG4gICAgICAgICAgICAgIDxNYXJrQnV0dG9uIHR5cGU9e01hcmtUeXBlcy5VbmRlcmxpbmV9IC8+XHJcbiAgICAgICAgICAgICAgPExpbmtCdXR0b24gLz5cclxuICAgICAgICAgICAgICA8Q29sb3JCdXR0b24gLz5cclxuICAgICAgICAgICAgPC9Ib3ZlcmluZ1Rvb2xiYXI+XHJcbiAgICAgICAgICAgIDxCb3R0b21Ub29sYmFyXHJcbiAgICAgICAgICAgICAgaWNvbj17cHJvcHMuSWNvbkNvbXBvbmVudH1cclxuICAgICAgICAgICAgICBvcGVuPXtwcm9wcy5mb2N1c2VkfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtwcm9wcy50cmFuc2xhdGlvbnMucGx1Z2luTmFtZX1cclxuICAgICAgICAgICAgICBvbkRlbGV0ZT17cmVtb3ZlfVxyXG4gICAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAgICAgICB0aGVtZT17cHJvcHMudGhlbWV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZ0J1dHRvbkNvbXBhY3QgLz5cclxuICAgICAgICAgICAgICAgIDxGb250U2l6ZUJ1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgPENvbG9yQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgICA8QWxpZ25tZW50QnV0dG9ucyAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RCdXR0b25zIC8+XHJcbiAgICAgICAgICAgICAgICA8TGlua0J1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgPFF1b3RlQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQm90dG9tVG9vbGJhcj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgey8qPHByZT57SlNPTi5zdHJpbmdpZnkocHJvcHMuc3RhdGUuc2xhdGVTdGF0ZSwgbnVsbCwgMil9PC9wcmU+Ki99XHJcbiAgICAgIDwvU2xhdGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xhdGVEZWZhdWx0Q29udHJvbHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=