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
/* harmony import */ var _plugins_emphasize_withEmphasize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../plugins/emphasize/withEmphasize */ "./src/lib/slate/plugins/emphasize/withEmphasize.ts");
/* harmony import */ var _plugins_emphasize_Emphasize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../plugins/emphasize/Emphasize */ "./src/lib/slate/plugins/emphasize/Emphasize.tsx");
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
/* harmony import */ var _plugins_emphasize_EmphasizeButton__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../plugins/emphasize/EmphasizeButton */ "./src/lib/slate/plugins/emphasize/EmphasizeButton.tsx");
/* harmony import */ var _common_components_slateEditor_slateEmptyValue__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../common/components/slateEditor/slateEmptyValue */ "./src/lib/common/components/slateEditor/slateEmptyValue.ts");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! slate-history */ "./node_modules/slate-history/dist/index.es.js");
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




































var allHotkeys = _objectSpread({}, _plugins_emphasize_withEmphasize__WEBPACK_IMPORTED_MODULE_5__["MARK_HOTKEYS"]);

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
  var comp = Object(_plugins_emphasize_Emphasize__WEBPACK_IMPORTED_MODULE_6__["Emphasize"])(props);
  return comp;
};

var SlateDefaultControls = function SlateDefaultControls(props) {
  var defaultValue = props.state.slateState || Object(_common_components_slateEditor_slateEmptyValue__WEBPACK_IMPORTED_MODULE_31__["slateEmptyValue"])();
  var readOnly = props.readOnly,
      focused = props.focused,
      remove = props.remove,
      translations = props.translations,
      onChange = props.onChange;
  var editor = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](Object(slate_history__WEBPACK_IMPORTED_MODULE_32__["withHistory"])(Object(_plugins_htmlPaste_withHtmlPaste__WEBPACK_IMPORTED_MODULE_27__["withHtml"])(Object(_plugins_quote_withQuotes__WEBPACK_IMPORTED_MODULE_23__["withQuotes"])()(Object(_plugins_color_withColors__WEBPACK_IMPORTED_MODULE_21__["withColors"])(Object(_plugins_fontSize_withFontSizes__WEBPACK_IMPORTED_MODULE_18__["withFontSizes"])()(Object(_plugins_lists_withLists__WEBPACK_IMPORTED_MODULE_16__["withLists"])(Object(_plugins_heading_withHeadings__WEBPACK_IMPORTED_MODULE_14__["withHeadings"])()(Object(_plugins_alignment_withAlignments__WEBPACK_IMPORTED_MODULE_11__["withAlignments"])(Object(_plugins_links_withLinks__WEBPACK_IMPORTED_MODULE_7__["withLinks"])(Object(_plugins_emphasize_withEmphasize__WEBPACK_IMPORTED_MODULE_5__["withEmphasize"])(Object(slate_react__WEBPACK_IMPORTED_MODULE_1__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_2__["createEditor"])())))))))))))).current;

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
            type: _plugins_emphasize_withEmphasize__WEBPACK_IMPORTED_MODULE_5__["EmphasizeCommands"].ToggleEmphasize,
            mark: {
              type: _plugins_emphasize_withEmphasize__WEBPACK_IMPORTED_MODULE_5__["MARK_HOTKEYS"][hotkey]
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
  }), !readOnly && focused && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_hoveringToolbar_HoveringToolbar__WEBPACK_IMPORTED_MODULE_4__["HoveringToolbar"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_emphasize_EmphasizeButton__WEBPACK_IMPORTED_MODULE_30__["EmphasizeButton"], {
    type: _plugins_emphasize_withEmphasize__WEBPACK_IMPORTED_MODULE_5__["EmphasizeTypes"].Bold
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_emphasize_EmphasizeButton__WEBPACK_IMPORTED_MODULE_30__["EmphasizeButton"], {
    type: _plugins_emphasize_withEmphasize__WEBPACK_IMPORTED_MODULE_5__["EmphasizeTypes"].Italic
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_emphasize_EmphasizeButton__WEBPACK_IMPORTED_MODULE_30__["EmphasizeButton"], {
    type: _plugins_emphasize_withEmphasize__WEBPACK_IMPORTED_MODULE_5__["EmphasizeTypes"].Underline
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3NsYXRlL0NvbnRyb2xzL1NsYXRlRGVmYXVsdENvbnRyb2xzLnRzeCJdLCJuYW1lcyI6WyJhbGxIb3RrZXlzIiwiTUFSS19IT1RLRVlTIiwicmVuZGVyRWxlbWVudCIsInByb3BzIiwiZWxlbWVudCIsImVkaXRvciIsInVzZUVkaXRvciIsImNvbXAiLCJMaW5rIiwiSGVhZGluZyIsIkxpc3QiLCJDb2xvckVsZW1lbnQiLCJRdW90ZSIsIlBhcmFncmFwaCIsImFkZEZvbnRTaXplU3R5bGVzIiwiYWRkQWxpZ25tZW50U3R5bGVzIiwicmVuZGVyTWFyayIsIkVtcGhhc2l6ZSIsIlNsYXRlRGVmYXVsdENvbnRyb2xzIiwiZGVmYXVsdFZhbHVlIiwic3RhdGUiLCJzbGF0ZVN0YXRlIiwic2xhdGVFbXB0eVZhbHVlIiwicmVhZE9ubHkiLCJmb2N1c2VkIiwicmVtb3ZlIiwidHJhbnNsYXRpb25zIiwib25DaGFuZ2UiLCJSZWFjdCIsIndpdGhIaXN0b3J5Iiwid2l0aEh0bWwiLCJ3aXRoUXVvdGVzIiwid2l0aENvbG9ycyIsIndpdGhGb250U2l6ZXMiLCJ3aXRoTGlzdHMiLCJ3aXRoSGVhZGluZ3MiLCJ3aXRoQWxpZ25tZW50cyIsIndpdGhMaW5rcyIsIndpdGhFbXBoYXNpemUiLCJ3aXRoUmVhY3QiLCJjcmVhdGVFZGl0b3IiLCJjdXJyZW50Iiwic3RhdGVDaGFuZ2VkIiwiZGVib3VuY2VkT25DaGFuZ2UiLCJkZWJvdW5jZSIsImxlYWRpbmciLCJ0cmFpbGluZyIsInNsYXRlU3RhdGVUaW1lc3RhbXAiLCJ0ZXh0UGxhY2Vob2xkZXIiLCJldmVudCIsImhvdGtleSIsImlzSG90a2V5IiwicHJldmVudERlZmF1bHQiLCJleGVjIiwidHlwZSIsIkVtcGhhc2l6ZUNvbW1hbmRzIiwiVG9nZ2xlRW1waGFzaXplIiwibWFyayIsInRleHQiLCJFbXBoYXNpemVUeXBlcyIsIkJvbGQiLCJJdGFsaWMiLCJVbmRlcmxpbmUiLCJJY29uQ29t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RDtBQUFpQixRQUFJLEVBQUVGLCtFQUFjLENBQUNHO0FBQXRDLElBSEYsRUFJRSxvREFBQyxxRUFBRCxPQUpGLEVBS0Usb0RBQUMsbUVBQUQsT0FMRixDQURGLEVBUUUsb0RBQUMsdUZBQUQ7QUFDRSxRQUFJLEVBQUUzRCxLQUFLLENBQUM0RCxhQURkO0FBRUUsUUFBSSxFQUFFNUQsS0FBSyxDQUFDcUIsT0FGZDtBQUdFLFNBQUssRUFBRXJCLEtBQUssQ0FBQ3VCLFlBQU4sQ0FBbUJzQyxVQUg1QjtBQUlFLFlBQVEsRUFBRXZDO0FBSlosS0FLTXRCLEtBTE47QUFNRSxTQUFLLEVBQUVBLEtBQUssQ0FBQzhEO0FBTmYsTUFRRTtBQUFLLFNBQUssRUFBRTtBQUFFQyxhQUFPLEVBQUUsTUFBWDtBQUFtQkMsZ0JBQVUsRUFBRTtBQUEvQjtBQUFaLEtBQ0Usb0RBQUMsOEVBQUQsT0FERixFQUVFLG9EQUFDLHlFQUFELE9BRkYsRUFHRSxvREFBQyxtRUFBRCxPQUhGLEVBSUUsb0RBQUMscUZBQUQsT0FKRixFQUtFLG9EQUFDLHVFQUFELE9BTEYsRUFNRSxvREFBQyxxRUFBRCxPQU5GLEVBT0Usb0RBQUMsdUVBQUQsT0FQRixDQVJGLENBUkYsQ0EvQkosQ0FERixDQURGO0FBaUVELENBMUdEOztjQUFNakQsb0I7O2VBNEdTQSxvQjtBQUFBOzs7Ozs7Ozs7OzBCQWhJVGxCLFU7MEJBRU9FLGE7MEJBYUFjLFU7MEJBS1BFLG9CIiwiZmlsZSI6IjU0M2JiNDgtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgU2xhdGVDb250cm9sc1Byb3BzIGFzIFNsYXRlQ29udHJvbHNDdXN0b21Qcm9wcyB9IGZyb20gJy4uL3R5cGVzL2NvbnRyb2xzJztcclxuaW1wb3J0IHtcclxuICB3aXRoUmVhY3QsXHJcbiAgU2xhdGUsXHJcbiAgRWRpdGFibGUsXHJcbiAgUmVuZGVyRWxlbWVudFByb3BzLFxyXG4gIHVzZUVkaXRvcixcclxuICBSZW5kZXJNYXJrUHJvcHMsXHJcbn0gZnJvbSAnc2xhdGUtcmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVFZGl0b3IsIE5vZGUgfSBmcm9tICdzbGF0ZSc7XHJcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2gvZGVib3VuY2UnO1xyXG5pbXBvcnQgeyBIb3ZlcmluZ1Rvb2xiYXIgfSBmcm9tICcuL2hvdmVyaW5nVG9vbGJhci9Ib3ZlcmluZ1Rvb2xiYXInO1xyXG5pbXBvcnQge1xyXG4gIHdpdGhFbXBoYXNpemUsXHJcbiAgTUFSS19IT1RLRVlTLFxyXG4gIEVtcGhhc2l6ZUNvbW1hbmRzLFxyXG59IGZyb20gJy4uL3BsdWdpbnMvZW1waGFzaXplL3dpdGhFbXBoYXNpemUnO1xyXG5pbXBvcnQgeyBFbXBoYXNpemUgfSBmcm9tICcuLi9wbHVnaW5zL2VtcGhhc2l6ZS9FbXBoYXNpemUnO1xyXG5pbXBvcnQgeyB3aXRoTGlua3MgfSBmcm9tICcuLi9wbHVnaW5zL2xpbmtzL3dpdGhMaW5rcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9wbHVnaW5zL2xpbmtzL0xpbmsnO1xyXG5pbXBvcnQgaXNIb3RrZXkgZnJvbSAnaXMtaG90a2V5JztcclxuaW1wb3J0IHsgQWxpZ25tZW50QnV0dG9ucyB9IGZyb20gJy4uL3BsdWdpbnMvYWxpZ25tZW50L0FsaWdubWVudEJ1dHRvbnMnO1xyXG5pbXBvcnQge1xyXG4gIHdpdGhBbGlnbm1lbnRzLFxyXG4gIGFkZEFsaWdubWVudFN0eWxlcyxcclxufSBmcm9tICcuLi9wbHVnaW5zL2FsaWdubWVudC93aXRoQWxpZ25tZW50cyc7XHJcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tICcuLi9wbHVnaW5zL2hlYWRpbmcvSGVhZGluZyc7XHJcbmltcG9ydCB7IFBhcmFncmFwaCB9IGZyb20gJy4uL3BsdWdpbnMvcGFyYWdyYXBoL1BhcmFncmFwaCc7XHJcbmltcG9ydCB7IHdpdGhIZWFkaW5ncyB9IGZyb20gJy4uL3BsdWdpbnMvaGVhZGluZy93aXRoSGVhZGluZ3MnO1xyXG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi4vcGx1Z2lucy9saXN0cy9MaXN0JztcclxuaW1wb3J0IHsgd2l0aExpc3RzIH0gZnJvbSAnLi4vcGx1Z2lucy9saXN0cy93aXRoTGlzdHMnO1xyXG5pbXBvcnQgeyBMaXN0QnV0dG9ucyB9IGZyb20gJy4uL3BsdWdpbnMvbGlzdHMvTGlzdEJ1dHRvbnMnO1xyXG5pbXBvcnQge1xyXG4gIHdpdGhGb250U2l6ZXMsXHJcbiAgYWRkRm9udFNpemVTdHlsZXMsXHJcbn0gZnJvbSAnLi4vcGx1Z2lucy9mb250U2l6ZS93aXRoRm9udFNpemVzJztcclxuaW1wb3J0IEZvbnRTaXplQnV0dG9uIGZyb20gJy4uL3BsdWdpbnMvZm9udFNpemUvRm9udFNpemVCdXR0b24nO1xyXG5pbXBvcnQgQ29sb3JCdXR0b24gZnJvbSAnLi4vcGx1Z2lucy9jb2xvci9Db2xvckJ1dHRvbic7XHJcbmltcG9ydCB7IHdpdGhDb2xvcnMgfSBmcm9tICcuLi9wbHVnaW5zL2NvbG9yL3dpdGhDb2xvcnMnO1xyXG5pbXBvcnQgeyBDb2xvckVsZW1lbnQgfSBmcm9tICcuLi9wbHVnaW5zL2NvbG9yL0NvbG9yRWxlbWVudCc7XHJcbmltcG9ydCB7IHdpdGhRdW90ZXMgfSBmcm9tICcuLi9wbHVnaW5zL3F1b3RlL3dpdGhRdW90ZXMnO1xyXG5pbXBvcnQgeyBRdW90ZSB9IGZyb20gJy4uL3BsdWdpbnMvcXVvdGUvUXVvdGUnO1xyXG5pbXBvcnQgeyBRdW90ZUJ1dHRvbiB9IGZyb20gJy4uL3BsdWdpbnMvcXVvdGUvUXVvdGVCdXR0b24nO1xyXG5pbXBvcnQgQm90dG9tVG9vbGJhciBmcm9tICcuLi8uLi9jb21tb24vY29tcG9uZW50cy9ib3R0b21Ub29sYmFyL0JvdHRvbVRvb2xiYXInO1xyXG5pbXBvcnQgeyB3aXRoSHRtbCB9IGZyb20gJy4uL3BsdWdpbnMvaHRtbFBhc3RlL3dpdGhIdG1sUGFzdGUnO1xyXG5pbXBvcnQgeyBMaW5rQnV0dG9uIH0gZnJvbSAnLi4vcGx1Z2lucy9saW5rcy9MaW5rQnV0dG9uJztcclxuaW1wb3J0IEhlYWRpbmdCdXR0b25Db21wYWN0IGZyb20gJy4uL3BsdWdpbnMvaGVhZGluZy9IZWFkaW5nQnV0dG9uQ29tcGFjdCc7XHJcbmltcG9ydCB7IEVtcGhhc2l6ZUJ1dHRvbiB9IGZyb20gJy4uL3BsdWdpbnMvZW1waGFzaXplL0VtcGhhc2l6ZUJ1dHRvbic7XHJcbmltcG9ydCB7IEVtcGhhc2l6ZVR5cGVzIH0gZnJvbSAnLi4vcGx1Z2lucy9lbXBoYXNpemUvd2l0aEVtcGhhc2l6ZSc7XHJcbmltcG9ydCB7IHNsYXRlRW1wdHlWYWx1ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9jb21wb25lbnRzL3NsYXRlRWRpdG9yL3NsYXRlRW1wdHlWYWx1ZSc7XHJcbmltcG9ydCB7IHdpdGhIaXN0b3J5IH0gZnJvbSAnc2xhdGUtaGlzdG9yeSc7XHJcblxyXG50eXBlIFNsYXRlQ29udHJvbHNQcm9wcyA9IFNsYXRlQ29udHJvbHNDdXN0b21Qcm9wcztcclxuXHJcbmNvbnN0IGFsbEhvdGtleXMgPSB7IC4uLk1BUktfSE9US0VZUyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckVsZW1lbnQ6IFJlYWN0LkZDPFJlbmRlckVsZW1lbnRQcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBlbGVtZW50IH0gPSBwcm9wcztcclxuICBjb25zdCBlZGl0b3IgPSB1c2VFZGl0b3IoKTtcclxuICBjb25zdCBjb21wID1cclxuICAgIExpbmsocHJvcHMpIHx8XHJcbiAgICBIZWFkaW5nKHByb3BzKSB8fFxyXG4gICAgTGlzdChwcm9wcykgfHxcclxuICAgIENvbG9yRWxlbWVudChwcm9wcykgfHxcclxuICAgIFF1b3RlKHByb3BzKSB8fFxyXG4gICAgUGFyYWdyYXBoKHByb3BzKTtcclxuICByZXR1cm4gYWRkRm9udFNpemVTdHlsZXMoZWRpdG9yLCBlbGVtZW50LCBhZGRBbGlnbm1lbnRTdHlsZXMoZWxlbWVudCwgY29tcCkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlck1hcms6IFJlYWN0LkZDPFJlbmRlck1hcmtQcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgY29tcCA9IEVtcGhhc2l6ZShwcm9wcyk7XHJcbiAgcmV0dXJuIGNvbXA7XHJcbn07XHJcblxyXG5jb25zdCBTbGF0ZURlZmF1bHRDb250cm9sczogUmVhY3QuU0ZDPFNsYXRlQ29udHJvbHNQcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgZGVmYXVsdFZhbHVlID0gcHJvcHMuc3RhdGUuc2xhdGVTdGF0ZSB8fCBzbGF0ZUVtcHR5VmFsdWUoKTtcclxuXHJcbiAgY29uc3QgeyByZWFkT25seSwgZm9jdXNlZCwgcmVtb3ZlLCB0cmFuc2xhdGlvbnMsIG9uQ2hhbmdlIH0gPSBwcm9wcztcclxuICBjb25zdCBlZGl0b3IgPSBSZWFjdC51c2VSZWYoXHJcbiAgICB3aXRoSGlzdG9yeShcclxuICAgICAgd2l0aEh0bWwoXHJcbiAgICAgICAgd2l0aFF1b3RlcygpKFxyXG4gICAgICAgICAgd2l0aENvbG9ycyhcclxuICAgICAgICAgICAgd2l0aEZvbnRTaXplcygpKFxyXG4gICAgICAgICAgICAgIHdpdGhMaXN0cyhcclxuICAgICAgICAgICAgICAgIHdpdGhIZWFkaW5ncygpKFxyXG4gICAgICAgICAgICAgICAgICB3aXRoQWxpZ25tZW50cyhcclxuICAgICAgICAgICAgICAgICAgICB3aXRoTGlua3Mod2l0aEVtcGhhc2l6ZSh3aXRoUmVhY3QoY3JlYXRlRWRpdG9yKCkpKSlcclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIClcclxuICAgICAgKVxyXG4gICAgKVxyXG4gICkuY3VycmVudDtcclxuXHJcbiAgY29uc3Qgc3RhdGVDaGFuZ2VkID0gKHNsYXRlU3RhdGU6IE5vZGVbXSkgPT4gb25DaGFuZ2UoeyBzbGF0ZVN0YXRlIH0pO1xyXG5cclxuICBjb25zdCBkZWJvdW5jZWRPbkNoYW5nZSA9IFJlYWN0LnVzZVJlZihcclxuICAgIGRlYm91bmNlKHN0YXRlQ2hhbmdlZCwgMjAwMCwgeyBsZWFkaW5nOiBmYWxzZSwgdHJhaWxpbmc6IHRydWUgfSlcclxuICApLmN1cnJlbnQ7XHJcblxyXG4gIC8qUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICgpID0+XHJcbiAgICAgICAgb25DaGFuZ2Uoe1xyXG4gICAgICAgICAgc2xhdGVTdGF0ZTogZGVmYXVsdFZhbHVlMixcclxuICAgICAgICAgIHNsYXRlU3RhdGVUaW1lc3RhbXA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAxMDAwXHJcbiAgICApO1xyXG4gIH0sIFtdKTsqL1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzbGF0ZUNvbnRyb2xzIG9yeS1wcmV2ZW50LWJsdXJcIj5cclxuICAgICAgPFNsYXRlXHJcbiAgICAgICAga2V5PXtwcm9wcy5zdGF0ZS5zbGF0ZVN0YXRlVGltZXN0YW1wfVxyXG4gICAgICAgIGVkaXRvcj17ZWRpdG9yfVxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtkZWJvdW5jZWRPbkNoYW5nZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxFZGl0YWJsZVxyXG4gICAgICAgICAgcmVhZE9ubHk9e3Byb3BzLnJlYWRPbmx5fVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3RyYW5zbGF0aW9ucy50ZXh0UGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICByZW5kZXJNYXJrPXtyZW5kZXJNYXJrfVxyXG4gICAgICAgICAgcmVuZGVyRWxlbWVudD17cmVuZGVyRWxlbWVudH1cclxuICAgICAgICAgIG9uS2V5RG93bj17ZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGhvdGtleSBpbiBhbGxIb3RrZXlzKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGlzSG90a2V5KGhvdGtleSwgKGV2ZW50IGFzIHVua25vd24pIGFzIEtleWJvYXJkRXZlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZWRpdG9yLmV4ZWMoe1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBFbXBoYXNpemVDb21tYW5kcy5Ub2dnbGVFbXBoYXNpemUsXHJcbiAgICAgICAgICAgICAgICAgIG1hcms6IHsgdHlwZTogTUFSS19IT1RLRVlTW2hvdGtleV0gfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNIb3RrZXkoJ3NoaWZ0K2VudGVyJywgKGV2ZW50IGFzIHVua25vd24pIGFzIEtleWJvYXJkRXZlbnQpKSB7XHJcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBlZGl0b3IuZXhlYyh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW5zZXJ0X3RleHQnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1xcbicsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7IXJlYWRPbmx5ICYmIGZvY3VzZWQgJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhvdmVyaW5nVG9vbGJhcj5cclxuICAgICAgICAgICAgICA8RW1waGFzaXplQnV0dG9uIHR5cGU9e0VtcGhhc2l6ZVR5cGVzLkJvbGR9IC8+XHJcbiAgICAgICAgICAgICAgPEVtcGhhc2l6ZUJ1dHRvbiB0eXBlPXtFbXBoYXNpemVUeXBlcy5JdGFsaWN9IC8+XHJcbiAgICAgICAgICAgICAgPEVtcGhhc2l6ZUJ1dHRvbiB0eXBlPXtFbXBoYXNpemVUeXBlcy5VbmRlcmxpbmV9IC8+XHJcbiAgICAgICAgICAgICAgPExpbmtCdXR0b24gLz5cclxuICAgICAgICAgICAgICA8Q29sb3JCdXR0b24gLz5cclxuICAgICAgICAgICAgPC9Ib3ZlcmluZ1Rvb2xiYXI+XHJcbiAgICAgICAgICAgIDxCb3R0b21Ub29sYmFyXHJcbiAgICAgICAgICAgICAgaWNvbj17cHJvcHMuSWNvbkNvbXBvbmVudH1cclxuICAgICAgICAgICAgICBvcGVuPXtwcm9wcy5mb2N1c2VkfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtwcm9wcy50cmFuc2xhdGlvbnMucGx1Z2luTmFtZX1cclxuICAgICAgICAgICAgICBvbkRlbGV0ZT17cmVtb3ZlfVxyXG4gICAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAgICAgICB0aGVtZT17cHJvcHMudGhlbWV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZ0J1dHRvbkNvbXBhY3QgLz5cclxuICAgICAgICAgICAgICAgIDxGb250U2l6ZUJ1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgPENvbG9yQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgICA8QWxpZ25tZW50QnV0dG9ucyAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RCdXR0b25zIC8+XHJcbiAgICAgICAgICAgICAgICA8TGlua0J1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgPFF1b3RlQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQm90dG9tVG9vbGJhcj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgey8qPHByZT57SlNPTi5zdHJpbmdpZnkocHJvcHMuc3RhdGUuc2xhdGVTdGF0ZSwgbnVsbCwgMil9PC9wcmU+Ki99XHJcbiAgICAgIDwvU2xhdGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xhdGVEZWZhdWx0Q29udHJvbHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=