webpackHotUpdate("main",{

/***/ "./src/lib/slate/Controls/SlateDefaultControls.tsx":
/*!*********************************************************!*\
  !*** ./src/lib/slate/Controls/SlateDefaultControls.tsx ***!
  \*********************************************************/
/*! exports provided: renderElement, renderLeaf, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderElement", function() { return renderElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderLeaf", function() { return renderLeaf; });
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
/* harmony import */ var _plugins_alignment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../plugins/alignment */ "./src/lib/slate/plugins/alignment/index.ts");
/* harmony import */ var _plugins_heading_Heading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../plugins/heading/Heading */ "./src/lib/slate/plugins/heading/Heading.tsx");
/* harmony import */ var _plugins_paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../plugins/paragraph/Paragraph */ "./src/lib/slate/plugins/paragraph/Paragraph.tsx");
/* harmony import */ var _plugins_heading_withHeadings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../plugins/heading/withHeadings */ "./src/lib/slate/plugins/heading/withHeadings.ts");
/* harmony import */ var _plugins_lists_List__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../plugins/lists/List */ "./src/lib/slate/plugins/lists/List.tsx");
/* harmony import */ var _plugins_lists_withLists__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../plugins/lists/withLists */ "./src/lib/slate/plugins/lists/withLists.ts");
/* harmony import */ var _plugins_lists_ListButtons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../plugins/lists/ListButtons */ "./src/lib/slate/plugins/lists/ListButtons.tsx");
/* harmony import */ var _plugins_fontSize__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../plugins/fontSize */ "./src/lib/slate/plugins/fontSize/index.ts");
/* harmony import */ var _plugins_color_ColorButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../plugins/color/ColorButton */ "./src/lib/slate/plugins/color/ColorButton.tsx");
/* harmony import */ var _plugins_color_withColors__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../plugins/color/withColors */ "./src/lib/slate/plugins/color/withColors.ts");
/* harmony import */ var _plugins_color_ColorElement__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../plugins/color/ColorElement */ "./src/lib/slate/plugins/color/ColorElement.tsx");
/* harmony import */ var _plugins_quote_withQuotes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../plugins/quote/withQuotes */ "./src/lib/slate/plugins/quote/withQuotes.ts");
/* harmony import */ var _plugins_quote_Quote__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../plugins/quote/Quote */ "./src/lib/slate/plugins/quote/Quote.tsx");
/* harmony import */ var _plugins_quote_QuoteButton__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../plugins/quote/QuoteButton */ "./src/lib/slate/plugins/quote/QuoteButton.tsx");
/* harmony import */ var _common_components_bottomToolbar_BottomToolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../common/components/bottomToolbar/BottomToolbar */ "./src/lib/common/components/bottomToolbar/BottomToolbar.tsx");
/* harmony import */ var _plugins_htmlPaste_withHtmlPaste__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../plugins/htmlPaste/withHtmlPaste */ "./src/lib/slate/plugins/htmlPaste/withHtmlPaste.ts");
/* harmony import */ var _plugins_links_LinkButton__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../plugins/links/LinkButton */ "./src/lib/slate/plugins/links/LinkButton.tsx");
/* harmony import */ var _plugins_heading_HeadingButtonCompact__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../plugins/heading/HeadingButtonCompact */ "./src/lib/slate/plugins/heading/HeadingButtonCompact.tsx");
/* harmony import */ var _plugins_emphasize_EmphasizeButton__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../plugins/emphasize/EmphasizeButton */ "./src/lib/slate/plugins/emphasize/EmphasizeButton.tsx");
/* harmony import */ var _plugins_emphasize_emphasizeTypes__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../plugins/emphasize/emphasizeTypes */ "./src/lib/slate/plugins/emphasize/emphasizeTypes.ts");
/* harmony import */ var _common_components_slateEditor_slateEmptyValue__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../common/components/slateEditor/slateEmptyValue */ "./src/lib/common/components/slateEditor/slateEmptyValue.ts");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! slate-history */ "./node_modules/slate-history/dist/index.es.js");
/* harmony import */ var _common_slateMigrations_migrations__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../common/slateMigrations/migrations */ "./src/lib/common/slateMigrations/migrations.ts");
/* harmony import */ var _common_slateMigrations_Migrator__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../common/slateMigrations/Migrator */ "./src/lib/common/slateMigrations/Migrator.ts");
/* harmony import */ var _common_utils_PaddingComponent__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../common/utils/PaddingComponent */ "./src/lib/common/utils/PaddingComponent.tsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






































var allHotkeys = _objectSpread({}, _plugins_emphasize_withEmphasize__WEBPACK_IMPORTED_MODULE_5__["MARK_HOTKEYS"]);

var renderElement = function renderElement(props) {
  var element = props.element;
  var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_1__["useEditor"])();
  var comp = Object(_plugins_links_Link__WEBPACK_IMPORTED_MODULE_8__["Link"])(props) || Object(_plugins_heading_Heading__WEBPACK_IMPORTED_MODULE_12__["Heading"])(props) || Object(_plugins_lists_List__WEBPACK_IMPORTED_MODULE_15__["List"])(props) || Object(_plugins_color_ColorElement__WEBPACK_IMPORTED_MODULE_21__["ColorElement"])(props) || Object(_plugins_quote_Quote__WEBPACK_IMPORTED_MODULE_23__["Quote"])(props) || Object(_plugins_paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_13__["Paragraph"])(props);
  return Object(_plugins_fontSize__WEBPACK_IMPORTED_MODULE_18__["addFontSizeStyles"])(editor.fontSizeConfig, element, Object(_plugins_alignment__WEBPACK_IMPORTED_MODULE_11__["addAlignmentStyles"])(element, comp));
};

__signature__(renderElement, "useEditor{editor}", function () {
  return [slate_react__WEBPACK_IMPORTED_MODULE_1__["useEditor"]];
});

var renderLeaf = function renderLeaf(props) {
  var attributes = props.attributes;
  var children = Object(_plugins_emphasize_Emphasize__WEBPACK_IMPORTED_MODULE_6__["Emphasize"])(props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", attributes, children);
};

var SlateDefaultControls = function SlateDefaultControls(props) {
  var readOnly = props.readOnly,
      focused = props.focused,
      remove = props.remove,
      translations = props.translations,
      onChange = props.onChange;
  var editor = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](Object(slate_history__WEBPACK_IMPORTED_MODULE_32__["withHistory"])(Object(_plugins_htmlPaste_withHtmlPaste__WEBPACK_IMPORTED_MODULE_26__["withHtml"])(Object(_plugins_quote_withQuotes__WEBPACK_IMPORTED_MODULE_22__["withQuotes"])()(Object(_plugins_color_withColors__WEBPACK_IMPORTED_MODULE_20__["withColors"])(Object(_plugins_fontSize__WEBPACK_IMPORTED_MODULE_18__["withFontSizes"])()(Object(_plugins_lists_withLists__WEBPACK_IMPORTED_MODULE_16__["withLists"])(Object(_plugins_heading_withHeadings__WEBPACK_IMPORTED_MODULE_14__["withHeadings"])()(Object(_plugins_alignment__WEBPACK_IMPORTED_MODULE_11__["withAlignments"])(Object(_plugins_links_withLinks__WEBPACK_IMPORTED_MODULE_7__["withLinks"])(Object(_plugins_emphasize_withEmphasize__WEBPACK_IMPORTED_MODULE_5__["withEmphasize"])(Object(slate_react__WEBPACK_IMPORTED_MODULE_1__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_2__["createEditor"])())))))))))))).current;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.state.value && Array.isArray(props.state.value) && props.state.value.every(function (node) {
    return slate__WEBPACK_IMPORTED_MODULE_2__["Node"].isNode(node);
  }) && props.state.value || Object(_common_components_slateEditor_slateEmptyValue__WEBPACK_IMPORTED_MODULE_31__["slateEmptyValue"])()),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var debouncedOnChange = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(onChange, 500, {
    leading: false,
    trailing: true
  })).current;
  var stateChanged = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (slateState) {
    setValue(slateState);
    debouncedOnChange({
      value: slateState
    });
  }, []); // This is the initial check and/or migration

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    var isDirty = false;
    var newValue = props.state.value;

    if (!value || !Array.isArray(value) || !value.every(function (node) {
      return slate__WEBPACK_IMPORTED_MODULE_2__["Node"].isNode(node);
    })) {
      newValue = Object(_common_components_slateEditor_slateEmptyValue__WEBPACK_IMPORTED_MODULE_31__["slateEmptyValue"])();
      isDirty = true;
    } else {
      var migrationResult = _common_slateMigrations_Migrator__WEBPACK_IMPORTED_MODULE_34__["Migrator"].migrateState(props.state.version, props.state.value, _common_slateMigrations_migrations__WEBPACK_IMPORTED_MODULE_33__["default"]);
      isDirty = migrationResult.changed;
      newValue = migrationResult.migratedState;
    }

    if (isDirty) {
      stateChanged(newValue);
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_utils_PaddingComponent__WEBPACK_IMPORTED_MODULE_35__["default"], {
    state: props.state
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "slateControls ory-prevent-blur"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](slate_react__WEBPACK_IMPORTED_MODULE_1__["Slate"], {
    editor: editor,
    value: value,
    onChange: stateChanged,
    migrations: _common_slateMigrations_migrations__WEBPACK_IMPORTED_MODULE_33__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](slate_react__WEBPACK_IMPORTED_MODULE_1__["Editable"], {
    readOnly: props.readOnly,
    placeholder: translations.textPlaceholder,
    renderLeaf: renderLeaf,
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
  }), !readOnly && focused && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_hoveringToolbar_HoveringToolbar__WEBPACK_IMPORTED_MODULE_4__["HoveringToolbar"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_emphasize_EmphasizeButton__WEBPACK_IMPORTED_MODULE_29__["EmphasizeButton"], {
    type: _plugins_emphasize_emphasizeTypes__WEBPACK_IMPORTED_MODULE_30__["EmphasizeTypes"].Bold
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_emphasize_EmphasizeButton__WEBPACK_IMPORTED_MODULE_29__["EmphasizeButton"], {
    type: _plugins_emphasize_emphasizeTypes__WEBPACK_IMPORTED_MODULE_30__["EmphasizeTypes"].Italic
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_emphasize_EmphasizeButton__WEBPACK_IMPORTED_MODULE_29__["EmphasizeButton"], {
    type: _plugins_emphasize_emphasizeTypes__WEBPACK_IMPORTED_MODULE_30__["EmphasizeTypes"].Underline
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_links_LinkButton__WEBPACK_IMPORTED_MODULE_27__["LinkButton"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_color_ColorButton__WEBPACK_IMPORTED_MODULE_19__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_bottomToolbar_BottomToolbar__WEBPACK_IMPORTED_MODULE_25__["default"], _extends({
    icon: props.IconComponent,
    open: props.focused,
    title: props.translations.pluginName,
    onDelete: remove
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_heading_HeadingButtonCompact__WEBPACK_IMPORTED_MODULE_28__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_color_ColorButton__WEBPACK_IMPORTED_MODULE_19__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_alignment_AlignmentButtons__WEBPACK_IMPORTED_MODULE_10__["AlignmentButtons"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_lists_ListButtons__WEBPACK_IMPORTED_MODULE_17__["ListButtons"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_links_LinkButton__WEBPACK_IMPORTED_MODULE_27__["LinkButton"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_quote_QuoteButton__WEBPACK_IMPORTED_MODULE_24__["QuoteButton"], null))))));
};

__signature__(SlateDefaultControls, "useRef{}\nuseState{[value, setValue]((props.state.value &&\r\n      Array.isArray(props.state.value) &&\r\n      props.state.value.every(node => Node.isNode(node)) &&\r\n      props.state.value) ||\r\n      slateEmptyValue())}\nuseRef{}\nuseCallback{stateChanged}\nuseEffect{}");

var _default = SlateDefaultControls;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(allHotkeys, "allHotkeys", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\Controls\\SlateDefaultControls.tsx");
  reactHotLoader.register(renderElement, "renderElement", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\Controls\\SlateDefaultControls.tsx");
  reactHotLoader.register(renderLeaf, "renderLeaf", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\Controls\\SlateDefaultControls.tsx");
  reactHotLoader.register(SlateDefaultControls, "SlateDefaultControls", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\Controls\\SlateDefaultControls.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\Controls\\SlateDefaultControls.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3NsYXRlL0NvbnRyb2xzL1NsYXRlRGVmYXVsdENvbnRyb2xzLnRzeCJdLCJuYW1lcyI6WyJhbGxIb3RrZXlzIiwiTUFSS19IT1RLRVlTIiwicmVuZGVyRWxlbWVudCIsInByb3BzIiwiZWxlbWVudCIsImVkaXRvciIsInVzZUVkaXRvciIsImNvbXAiLCJMaW5rIiwiSGVhZGluZyIsIkxpc3QiLCJDb2xvckVsZW1lbnQiLCJRdW90ZSIsIlBhcmFncmFwaCIsImFkZEZvbnRTaXplU3R5bGVzIiwiZm9udFNpemVDb25maWciLCJhZGRBbGlnbm1lbnRTdHlsZXMiLCJyZW5kZXJMZWFmIiwiYXR0cmlidXRlcyIsImNoaWxkcmVuIiwiRW1waGFzaXplIiwiU2xhdGVEZWZhdWx0Q29udHJvbHMiLCJyZWFkT25seSIsImZvY3VzZWQiLCJyZW1vdmUiLCJ0cmFuc2xhdGlvbnMiLCJvbkNoYW5nZSIsIlJlYWN0Iiwid2l0aEhpc3RvcnkiLCJ3aXRoSHRtbCIsIndpdGhRdW90ZXMiLCJ3aXRoQ29sb3JzIiwid2l0aEZvbnRTaXplcyIsIndpdGhMaXN0cyIsIndpdGhIZWFkaW5ncyIsIndpdGhBbGlnbm1lbnRzIiwid2l0aExpbmtzIiwid2l0aEVtcGhhc2l6ZSIsIndpdGhSZWFjdCIsImNyZWF0ZUVkaXRvciIsImN1cnJlbnQiLCJzdGF0ZSIsInZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwiZXZlcnkiLCJub2RlIiwiTm9kZSIsImlzTm9kZSIsInNsYXRlRW1wdHlWYWx1ZSIsInNldFZhbHVlIiwiZGVib3VuY2VkT25DaGFuZ2UiLCJkZWJvdW5jZSIsImxlYWRpbmciLCJ0cmFpbGluZyIsInN0YXRlQ2hhbmdlZCIsInNsYXRlU3RhdGUiLCJpc0RpcnR5IiwibmV3VmFsdWUiLCJtaWdyYXRpb25SZXN1bHQiLCJNaWdyYXRvciIsIm1pZ3JhdGVTdGF0ZSIsInZlcnNpb24iLCJtaWdyYXRpb25zIiwiY2hhbmdlZCIsIm1pZ3JhdGVkU3RhdGUiLCJ0ZXh0UGxhY2Vob2xkZXIiLCJldmVudCIsImhvdGtleSIsImlzSG90a2V5IiwicHJldmVudERlZmF1bHQiLCJleGVjIiwidHlwZSIsIkVtcGhhc2l6ZUNvbW1hbmRzIiwiVG9nZ2xlRW1waGFzaXplIiwibWFyayIsInRleHQiLCJFbXBoYXNpemVUeXBlcyIsIkJvbGQiLCJJdGFsaWMiLCJVbmRlcmxpbmUiLCJJY29uQ29tcG9uZW50IiwicGx1Z2luTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUlBLElBQU1BLFVBQVUscUJBQVFDLDZFQUFSLENBQWhCOztBQUVPLElBQU1DLGFBQTJDLEdBQUcsU0FBOUNBLGFBQThDLENBQUFDLEtBQUssRUFBSTtBQUFBLE1BQzFEQyxPQUQwRCxHQUM5Q0QsS0FEOEMsQ0FDMURDLE9BRDBEO0FBRWxFLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxJQUFJLEdBQ1JDLGdFQUFJLENBQUNMLEtBQUQsQ0FBSixJQUNBTSx5RUFBTyxDQUFDTixLQUFELENBRFAsSUFFQU8saUVBQUksQ0FBQ1AsS0FBRCxDQUZKLElBR0FRLGlGQUFZLENBQUNSLEtBQUQsQ0FIWixJQUlBUyxtRUFBSyxDQUFDVCxLQUFELENBSkwsSUFLQVUsK0VBQVMsQ0FBQ1YsS0FBRCxDQU5YO0FBT0EsU0FBT1csNEVBQWlCLENBQ3RCVCxNQUFNLENBQUNVLGNBRGUsRUFFdEJYLE9BRnNCLEVBR3RCWSw4RUFBa0Is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dXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IFNsYXRlQ29udHJvbHNQcm9wcyBhcyBTbGF0ZUNvbnRyb2xzQ3VzdG9tUHJvcHMgfSBmcm9tICcuLi90eXBlcy9jb250cm9scyc7XHJcbmltcG9ydCB7XHJcbiAgd2l0aFJlYWN0LFxyXG4gIFNsYXRlLFxyXG4gIEVkaXRhYmxlLFxyXG4gIFJlbmRlckVsZW1lbnRQcm9wcyxcclxuICB1c2VFZGl0b3IsXHJcbiAgUmVuZGVyTGVhZlByb3BzLFxyXG4gIFJlYWN0RWRpdG9yLFxyXG59IGZyb20gJ3NsYXRlLXJlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlRWRpdG9yLCBOb2RlIH0gZnJvbSAnc2xhdGUnO1xyXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoL2RlYm91bmNlJztcclxuaW1wb3J0IHsgSG92ZXJpbmdUb29sYmFyIH0gZnJvbSAnLi9ob3ZlcmluZ1Rvb2xiYXIvSG92ZXJpbmdUb29sYmFyJztcclxuaW1wb3J0IHtcclxuICB3aXRoRW1waGFzaXplLFxyXG4gIE1BUktfSE9US0VZUyxcclxuICBFbXBoYXNpemVDb21tYW5kcyxcclxufSBmcm9tICcuLi9wbHVnaW5zL2VtcGhhc2l6ZS93aXRoRW1waGFzaXplJztcclxuaW1wb3J0IHsgRW1waGFzaXplIH0gZnJvbSAnLi4vcGx1Z2lucy9lbXBoYXNpemUvRW1waGFzaXplJztcclxuaW1wb3J0IHsgd2l0aExpbmtzIH0gZnJvbSAnLi4vcGx1Z2lucy9saW5rcy93aXRoTGlua3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcGx1Z2lucy9saW5rcy9MaW5rJztcclxuaW1wb3J0IGlzSG90a2V5IGZyb20gJ2lzLWhvdGtleSc7XHJcbmltcG9ydCB7IEFsaWdubWVudEJ1dHRvbnMgfSBmcm9tICcuLi9wbHVnaW5zL2FsaWdubWVudC9BbGlnbm1lbnRCdXR0b25zJztcclxuaW1wb3J0IHsgd2l0aEFsaWdubWVudHMsIGFkZEFsaWdubWVudFN0eWxlcyB9IGZyb20gJy4uL3BsdWdpbnMvYWxpZ25tZW50JztcclxuaW1wb3J0IHsgSGVhZGluZyB9IGZyb20gJy4uL3BsdWdpbnMvaGVhZGluZy9IZWFkaW5nJztcclxuaW1wb3J0IHsgUGFyYWdyYXBoIH0gZnJvbSAnLi4vcGx1Z2lucy9wYXJhZ3JhcGgvUGFyYWdyYXBoJztcclxuaW1wb3J0IHsgd2l0aEhlYWRpbmdzIH0gZnJvbSAnLi4vcGx1Z2lucy9oZWFkaW5nL3dpdGhIZWFkaW5ncyc7XHJcbmltcG9ydCB7IExpc3QgfSBmcm9tICcuLi9wbHVnaW5zL2xpc3RzL0xpc3QnO1xyXG5pbXBvcnQgeyB3aXRoTGlzdHMgfSBmcm9tICcuLi9wbHVnaW5zL2xpc3RzL3dpdGhMaXN0cyc7XHJcbmltcG9ydCB7IExpc3RCdXR0b25zIH0gZnJvbSAnLi4vcGx1Z2lucy9saXN0cy9MaXN0QnV0dG9ucyc7XHJcbmltcG9ydCB7IHdpdGhGb250U2l6ZXMsIGFkZEZvbnRTaXplU3R5bGVzIH0gZnJvbSAnLi4vcGx1Z2lucy9mb250U2l6ZSc7XHJcbmltcG9ydCBDb2xvckJ1dHRvbiBmcm9tICcuLi9wbHVnaW5zL2NvbG9yL0NvbG9yQnV0dG9uJztcclxuaW1wb3J0IHsgd2l0aENvbG9ycyB9IGZyb20gJy4uL3BsdWdpbnMvY29sb3Ivd2l0aENvbG9ycyc7XHJcbmltcG9ydCB7IENvbG9yRWxlbWVudCB9IGZyb20gJy4uL3BsdWdpbnMvY29sb3IvQ29sb3JFbGVtZW50JztcclxuaW1wb3J0IHsgd2l0aFF1b3RlcyB9IGZyb20gJy4uL3BsdWdpbnMvcXVvdGUvd2l0aFF1b3Rlcyc7XHJcbmltcG9ydCB7IFF1b3RlIH0gZnJvbSAnLi4vcGx1Z2lucy9xdW90ZS9RdW90ZSc7XHJcbmltcG9ydCB7IFF1b3RlQnV0dG9uIH0gZnJvbSAnLi4vcGx1Z2lucy9xdW90ZS9RdW90ZUJ1dHRvbic7XHJcbmltcG9ydCBCb3R0b21Ub29sYmFyIGZyb20gJy4uLy4uL2NvbW1vbi9jb21wb25lbnRzL2JvdHRvbVRvb2xiYXIvQm90dG9tVG9vbGJhcic7XHJcbmltcG9ydCB7IHdpdGhIdG1sIH0gZnJvbSAnLi4vcGx1Z2lucy9odG1sUGFzdGUvd2l0aEh0bWxQYXN0ZSc7XHJcbmltcG9ydCB7IExpbmtCdXR0b24gfSBmcm9tICcuLi9wbHVnaW5zL2xpbmtzL0xpbmtCdXR0b24nO1xyXG5pbXBvcnQgSGVhZGluZ0J1dHRvbkNvbXBhY3QgZnJvbSAnLi4vcGx1Z2lucy9oZWFkaW5nL0hlYWRpbmdCdXR0b25Db21wYWN0JztcclxuaW1wb3J0IHsgRW1waGFzaXplQnV0dG9uIH0gZnJvbSAnLi4vcGx1Z2lucy9lbXBoYXNpemUvRW1waGFzaXplQnV0dG9uJztcclxuaW1wb3J0IHsgRW1waGFzaXplVHlwZXMgfSBmcm9tICcuLi9wbHVnaW5zL2VtcGhhc2l6ZS9lbXBoYXNpemVUeXBlcyc7XHJcbmltcG9ydCB7IHNsYXRlRW1wdHlWYWx1ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9jb21wb25lbnRzL3NsYXRlRWRpdG9yL3NsYXRlRW1wdHlWYWx1ZSc7XHJcbmltcG9ydCB7IHdpdGhIaXN0b3J5IH0gZnJvbSAnc2xhdGUtaGlzdG9yeSc7XHJcbmltcG9ydCBtaWdyYXRpb25zIGZyb20gJy4uLy4uL2NvbW1vbi9zbGF0ZU1pZ3JhdGlvbnMvbWlncmF0aW9ucyc7XHJcbmltcG9ydCB7IFNsYXRlVmFsdWUgfSBmcm9tICcuLi8uLi9jb21tb24vdHlwZXMvc2xhdGUvU2xhdGVWYWx1ZSc7XHJcbmltcG9ydCB7IE1pZ3JhdG9yIH0gZnJvbSAnLi4vLi4vY29tbW9uL3NsYXRlTWlncmF0aW9ucy9NaWdyYXRvcic7XHJcbmltcG9ydCBQYWRkaW5nQ29tcG9uZW50IGZyb20gJy4uLy4uL2NvbW1vbi91dGlscy9QYWRkaW5nQ29tcG9uZW50JztcclxuXHJcbnR5cGUgU2xhdGVDb250cm9sc1Byb3BzID0gU2xhdGVDb250cm9sc0N1c3RvbVByb3BzO1xyXG5cclxuY29uc3QgYWxsSG90a2V5cyA9IHsgLi4uTUFSS19IT1RLRVlTIH07XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyRWxlbWVudDogUmVhY3QuRkM8UmVuZGVyRWxlbWVudFByb3BzPiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGVsZW1lbnQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGVkaXRvciA9IHVzZUVkaXRvcigpO1xyXG4gIGNvbnN0IGNvbXAgPVxyXG4gICAgTGluayhwcm9wcykgfHxcclxuICAgIEhlYWRpbmcocHJvcHMpIHx8XHJcbiAgICBMaXN0KHByb3BzKSB8fFxyXG4gICAgQ29sb3JFbGVtZW50KHByb3BzKSB8fFxyXG4gICAgUXVvdGUocHJvcHMpIHx8XHJcbiAgICBQYXJhZ3JhcGgocHJvcHMpO1xyXG4gIHJldHVybiBhZGRGb250U2l6ZVN0eWxlcyhcclxuICAgIGVkaXRvci5mb250U2l6ZUNvbmZpZyxcclxuICAgIGVsZW1lbnQsXHJcbiAgICBhZGRBbGlnbm1lbnRTdHlsZXMoZWxlbWVudCwgY29tcClcclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckxlYWY6IFJlYWN0LkZDPFJlbmRlckxlYWZQcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBhdHRyaWJ1dGVzIH0gPSBwcm9wcztcclxuICBjb25zdCBjaGlsZHJlbiA9IEVtcGhhc2l6ZShwcm9wcyk7XHJcbiAgcmV0dXJuIDxzcGFuIHsuLi5hdHRyaWJ1dGVzfT57Y2hpbGRyZW59PC9zcGFuPjtcclxufTtcclxuXHJcbmNvbnN0IFNsYXRlRGVmYXVsdENvbnRyb2xzOiBSZWFjdC5TRkM8U2xhdGVDb250cm9sc1Byb3BzPiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IHJlYWRPbmx5LCBmb2N1c2VkLCByZW1vdmUsIHRyYW5zbGF0aW9ucywgb25DaGFuZ2UgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGVkaXRvciA9IFJlYWN0LnVzZVJlZihcclxuICAgIHdpdGhIaXN0b3J5PFJlYWN0RWRpdG9yPihcclxuICAgICAgd2l0aEh0bWwoXHJcbiAgICAgICAgd2l0aFF1b3RlcygpKFxyXG4gICAgICAgICAgd2l0aENvbG9ycyhcclxuICAgICAgICAgICAgd2l0aEZvbnRTaXplcygpKFxyXG4gICAgICAgICAgICAgIHdpdGhMaXN0cyhcclxuICAgICAgICAgICAgICAgIHdpdGhIZWFkaW5ncygpKFxyXG4gICAgICAgICAgICAgICAgICB3aXRoQWxpZ25tZW50cyhcclxuICAgICAgICAgICAgICAgICAgICB3aXRoTGlua3Mod2l0aEVtcGhhc2l6ZSh3aXRoUmVhY3QoY3JlYXRlRWRpdG9yKCkpKSlcclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIClcclxuICAgICAgKVxyXG4gICAgKVxyXG4gICkuY3VycmVudDtcclxuXHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShcclxuICAgIChwcm9wcy5zdGF0ZS52YWx1ZSAmJlxyXG4gICAgICBBcnJheS5pc0FycmF5KHByb3BzLnN0YXRlLnZhbHVlKSAmJlxyXG4gICAgICBwcm9wcy5zdGF0ZS52YWx1ZS5ldmVyeShub2RlID0+IE5vZGUuaXNOb2RlKG5vZGUpKSAmJlxyXG4gICAgICBwcm9wcy5zdGF0ZS52YWx1ZSkgfHxcclxuICAgICAgc2xhdGVFbXB0eVZhbHVlKClcclxuICApO1xyXG5cclxuICBjb25zdCBkZWJvdW5jZWRPbkNoYW5nZSA9IFJlYWN0LnVzZVJlZihcclxuICAgIGRlYm91bmNlKG9uQ2hhbmdlLCA1MDAsIHsgbGVhZGluZzogZmFsc2UsIHRyYWlsaW5nOiB0cnVlIH0pXHJcbiAgKS5jdXJyZW50O1xyXG5cclxuICBjb25zdCBzdGF0ZUNoYW5nZWQgPSBSZWFjdC51c2VDYWxsYmFjaygoc2xhdGVTdGF0ZTogU2xhdGVWYWx1ZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUoc2xhdGVTdGF0ZSk7XHJcbiAgICBkZWJvdW5jZWRPbkNoYW5nZSh7IHZhbHVlOiBzbGF0ZVN0YXRlIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gVGhpcyBpcyB0aGUgaW5pdGlhbCBjaGVjayBhbmQvb3IgbWlncmF0aW9uXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpc0RpcnR5ID0gZmFsc2U7XHJcbiAgICBsZXQgbmV3VmFsdWU6IFNsYXRlVmFsdWUgPSBwcm9wcy5zdGF0ZS52YWx1ZTtcclxuICAgIGlmIChcclxuICAgICAgIXZhbHVlIHx8XHJcbiAgICAgICFBcnJheS5pc0FycmF5KHZhbHVlKSB8fFxyXG4gICAgICAhdmFsdWUuZXZlcnkobm9kZSA9PiBOb2RlLmlzTm9kZShub2RlKSlcclxuICAgICkge1xyXG4gICAgICBuZXdWYWx1ZSA9IHNsYXRlRW1wdHlWYWx1ZSgpO1xyXG4gICAgICBpc0RpcnR5ID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG1pZ3JhdGlvblJlc3VsdCA9IE1pZ3JhdG9yLm1pZ3JhdGVTdGF0ZShcclxuICAgICAgICBwcm9wcy5zdGF0ZS52ZXJzaW9uLFxyXG4gICAgICAgIHByb3BzLnN0YXRlLnZhbHVlLFxyXG4gICAgICAgIG1pZ3JhdGlvbnNcclxuICAgICAgKTtcclxuICAgICAgaXNEaXJ0eSA9IG1pZ3JhdGlvblJlc3VsdC5jaGFuZ2VkO1xyXG4gICAgICBuZXdWYWx1ZSA9IG1pZ3JhdGlvblJlc3VsdC5taWdyYXRlZFN0YXRlO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzRGlydHkpIHtcclxuICAgICAgc3RhdGVDaGFuZ2VkKG5ld1ZhbHVlKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFkZGluZ0NvbXBvbmVudCBzdGF0ZT17cHJvcHMuc3RhdGV9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsYXRlQ29udHJvbHMgb3J5LXByZXZlbnQtYmx1clwiPlxyXG4gICAgICAgIDxTbGF0ZVxyXG4gICAgICAgICAgZWRpdG9yPXtlZGl0b3J9XHJcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17c3RhdGVDaGFuZ2VkfVxyXG4gICAgICAgICAgbWlncmF0aW9ucz17bWlncmF0aW9uc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RWRpdGFibGVcclxuICAgICAgICAgICAgcmVhZE9ubHk9e3Byb3BzLnJlYWRPbmx5fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17dHJhbnNsYXRpb25zLnRleHRQbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgcmVuZGVyTGVhZj17cmVuZGVyTGVhZn1cclxuICAgICAgICAgICAgcmVuZGVyRWxlbWVudD17cmVuZGVyRWxlbWVudH1cclxuICAgICAgICAgICAgb25LZXlEb3duPXtldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBob3RrZXkgaW4gYWxsSG90a2V5cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzSG90a2V5KGhvdGtleSwgKGV2ZW50IGFzIHVua25vd24pIGFzIEtleWJvYXJkRXZlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgIGVkaXRvci5leGVjKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBFbXBoYXNpemVDb21tYW5kcy5Ub2dnbGVFbXBoYXNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyazogeyB0eXBlOiBNQVJLX0hPVEtFWVNbaG90a2V5XSB9LFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgaXNIb3RrZXkoJ3NoaWZ0K2VudGVyJywgKGV2ZW50IGFzIHVua25vd24pIGFzIEtleWJvYXJkRXZlbnQpXHJcbiAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZWRpdG9yLmV4ZWMoe1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnaW5zZXJ0X3RleHQnLFxyXG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnXFxuJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7IXJlYWRPbmx5ICYmIGZvY3VzZWQgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxIb3ZlcmluZ1Rvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICA8RW1waGFzaXplQnV0dG9uIHR5cGU9e0VtcGhhc2l6ZVR5cGVzLkJvbGR9IC8+XHJcbiAgICAgICAgICAgICAgICA8RW1waGFzaXplQnV0dG9uIHR5cGU9e0VtcGhhc2l6ZVR5cGVzLkl0YWxpY30gLz5cclxuICAgICAgICAgICAgICAgIDxFbXBoYXNpemVCdXR0b24gdHlwZT17RW1waGFzaXplVHlwZXMuVW5kZXJsaW5lfSAvPlxyXG4gICAgICAgICAgICAgICAgPExpbmtCdXR0b24gLz5cclxuICAgICAgICAgICAgICAgIDxDb2xvckJ1dHRvbiAvPlxyXG4gICAgICAgICAgICAgIDwvSG92ZXJpbmdUb29sYmFyPlxyXG4gICAgICAgICAgICAgIDxCb3R0b21Ub29sYmFyXHJcbiAgICAgICAgICAgICAgICBpY29uPXtwcm9wcy5JY29uQ29tcG9uZW50fVxyXG4gICAgICAgICAgICAgICAgb3Blbj17cHJvcHMuZm9jdXNlZH1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9wcy50cmFuc2xhdGlvbnMucGx1Z2luTmFtZX1cclxuICAgICAgICAgICAgICAgIG9uRGVsZXRlPXtyZW1vdmV9XHJcbiAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmdCdXR0b25Db21wYWN0IC8+XHJcbiAgICAgICAgICAgICAgICB7Lyo8Rm9udFNpemVCdXR0b24gLz4qL31cclxuICAgICAgICAgICAgICAgIDxDb2xvckJ1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgPEFsaWdubWVudEJ1dHRvbnMgLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0QnV0dG9ucyAvPlxyXG4gICAgICAgICAgICAgICAgPExpbmtCdXR0b24gLz5cclxuICAgICAgICAgICAgICAgIDxRdW90ZUJ1dHRvbiAvPlxyXG4gICAgICAgICAgICAgIDwvQm90dG9tVG9vbGJhcj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgey8qPHByZT57SlNPTi5zdHJpbmdpZnkocHJvcHMuc3RhdGUuc2xhdGVTdGF0ZSwgbnVsbCwgMil9PC9wcmU+Ki99XHJcbiAgICAgICAgPC9TbGF0ZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1BhZGRpbmdDb21wb25lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsYXRlRGVmYXVsdENvbnRyb2xzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9