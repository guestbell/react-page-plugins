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
/* harmony import */ var _plugins_emphasize_emphasizeTypes__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../plugins/emphasize/emphasizeTypes */ "./src/lib/slate/plugins/emphasize/emphasizeTypes.ts");
/* harmony import */ var _common_components_slateEditor_slateEmptyValue__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../common/components/slateEditor/slateEmptyValue */ "./src/lib/common/components/slateEditor/slateEmptyValue.ts");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! slate-history */ "./node_modules/slate-history/dist/index.es.js");
/* harmony import */ var _common_slateMigrations_migrations__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../common/slateMigrations/migrations */ "./src/lib/common/slateMigrations/migrations.ts");
/* harmony import */ var _common_slateMigrations_Migrator__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../common/slateMigrations/Migrator */ "./src/lib/common/slateMigrations/Migrator.ts");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
  var comp = Object(_plugins_links_Link__WEBPACK_IMPORTED_MODULE_8__["Link"])(props) || Object(_plugins_heading_Heading__WEBPACK_IMPORTED_MODULE_12__["Heading"])(props) || Object(_plugins_lists_List__WEBPACK_IMPORTED_MODULE_15__["List"])(props) || Object(_plugins_color_ColorElement__WEBPACK_IMPORTED_MODULE_22__["ColorElement"])(props) || Object(_plugins_quote_Quote__WEBPACK_IMPORTED_MODULE_24__["Quote"])(props) || Object(_plugins_paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_13__["Paragraph"])(props);
  return Object(_plugins_fontSize__WEBPACK_IMPORTED_MODULE_18__["addFontSizeStyles"])(editor.fontSizeConfig, element, Object(_plugins_alignment__WEBPACK_IMPORTED_MODULE_11__["addAlignmentStyles"])(element, comp));
};

__signature__(renderElement, "useEditor{editor}", function () {
  return [slate_react__WEBPACK_IMPORTED_MODULE_1__["useEditor"]];
});

var renderLeaf = function renderLeaf(props) {
  var attributes = props.attributes;
  var children = Object(_plugins_emphasize_Emphasize__WEBPACK_IMPORTED_MODULE_6__["Emphasize"])(props);
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", attributes, children);
};

var SlateDefaultControls = function SlateDefaultControls(props) {
  var readOnly = props.readOnly,
      focused = props.focused,
      remove = props.remove,
      translations = props.translations,
      onChange = props.onChange;
  var editor = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](Object(slate_history__WEBPACK_IMPORTED_MODULE_33__["withHistory"])(Object(_plugins_htmlPaste_withHtmlPaste__WEBPACK_IMPORTED_MODULE_27__["withHtml"])(Object(_plugins_quote_withQuotes__WEBPACK_IMPORTED_MODULE_23__["withQuotes"])()(Object(_plugins_color_withColors__WEBPACK_IMPORTED_MODULE_21__["withColors"])(Object(_plugins_fontSize__WEBPACK_IMPORTED_MODULE_18__["withFontSizes"])()(Object(_plugins_lists_withLists__WEBPACK_IMPORTED_MODULE_16__["withLists"])(Object(_plugins_heading_withHeadings__WEBPACK_IMPORTED_MODULE_14__["withHeadings"])()(Object(_plugins_alignment__WEBPACK_IMPORTED_MODULE_11__["withAlignments"])(Object(_plugins_links_withLinks__WEBPACK_IMPORTED_MODULE_7__["withLinks"])(Object(_plugins_emphasize_withEmphasize__WEBPACK_IMPORTED_MODULE_5__["withEmphasize"])(Object(slate_react__WEBPACK_IMPORTED_MODULE_1__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_2__["createEditor"])())))))))))))).current;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.state.value && Array.isArray(props.state.value) && props.state.value.every(function (node) {
    return slate__WEBPACK_IMPORTED_MODULE_2__["Node"].isNode(node);
  }) && props.state.value || Object(_common_components_slateEditor_slateEmptyValue__WEBPACK_IMPORTED_MODULE_32__["slateEmptyValue"])()),
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
      newValue = Object(_common_components_slateEditor_slateEmptyValue__WEBPACK_IMPORTED_MODULE_32__["slateEmptyValue"])();
      isDirty = true;
    } else {
      var migrationResult = _common_slateMigrations_Migrator__WEBPACK_IMPORTED_MODULE_35__["Migrator"].migrateState(props.state.version, props.state.value, _common_slateMigrations_migrations__WEBPACK_IMPORTED_MODULE_34__["default"]);
      isDirty = migrationResult.changed;
      newValue = migrationResult.migratedState;
    }

    if (isDirty) {
      stateChanged(newValue);
    }
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "slateControls ory-prevent-blur"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](slate_react__WEBPACK_IMPORTED_MODULE_1__["Slate"], {
    editor: editor,
    value: value,
    onChange: stateChanged,
    migrations: _common_slateMigrations_migrations__WEBPACK_IMPORTED_MODULE_34__["default"]
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](slate_react__WEBPACK_IMPORTED_MODULE_1__["Editable"], {
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
  }), !readOnly && focused && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_hoveringToolbar_HoveringToolbar__WEBPACK_IMPORTED_MODULE_4__["HoveringToolbar"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_emphasize_EmphasizeButton__WEBPACK_IMPORTED_MODULE_30__["EmphasizeButton"], {
    type: _plugins_emphasize_emphasizeTypes__WEBPACK_IMPORTED_MODULE_31__["EmphasizeTypes"].Bold
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_emphasize_EmphasizeButton__WEBPACK_IMPORTED_MODULE_30__["EmphasizeButton"], {
    type: _plugins_emphasize_emphasizeTypes__WEBPACK_IMPORTED_MODULE_31__["EmphasizeTypes"].Italic
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_emphasize_EmphasizeButton__WEBPACK_IMPORTED_MODULE_30__["EmphasizeButton"], {
    type: _plugins_emphasize_emphasizeTypes__WEBPACK_IMPORTED_MODULE_31__["EmphasizeTypes"].Underline
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_links_LinkButton__WEBPACK_IMPORTED_MODULE_28__["LinkButton"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_color_ColorButton__WEBPACK_IMPORTED_MODULE_20__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_bottomToolbar_BottomToolbar__WEBPACK_IMPORTED_MODULE_26__["default"], _extends({
    icon: props.IconComponent,
    open: props.focused,
    title: props.translations.pluginName,
    onDelete: remove
  }, props), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_heading_HeadingButtonCompact__WEBPACK_IMPORTED_MODULE_29__["default"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_fontSize_FontSizeButton__WEBPACK_IMPORTED_MODULE_19__["default"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_color_ColorButton__WEBPACK_IMPORTED_MODULE_20__["default"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_alignment_AlignmentButtons__WEBPACK_IMPORTED_MODULE_10__["AlignmentButtons"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_lists_ListButtons__WEBPACK_IMPORTED_MODULE_17__["ListButtons"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_links_LinkButton__WEBPACK_IMPORTED_MODULE_28__["LinkButton"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plugins_quote_QuoteButton__WEBPACK_IMPORTED_MODULE_25__["QuoteButton"], null)))));
};

__signature__(SlateDefaultControls, "useRef{}\nuseState{[value, setValue]((props.state.value &&\r\n      Array.isArray(props.state.value) &&\r\n      props.state.value.every(node => Node.isNode(node)) &&\r\n      props.state.value) ||\r\n      slateEmptyValue())}\nuseRef{}\nuseCallback{stateChanged}\nuseEffect{}");

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
  reactHotLoader.register(renderLeaf, "renderLeaf", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\Controls\\SlateDefaultControls.tsx");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3NsYXRlL0NvbnRyb2xzL1NsYXRlRGVmYXVsdENvbnRyb2xzLnRzeCJdLCJuYW1lcyI6WyJhbGxIb3RrZXlzIiwiTUFSS19IT1RLRVlTIiwicmVuZGVyRWxlbWVudCIsInByb3BzIiwiZWxlbWVudCIsImVkaXRvciIsInVzZUVkaXRvciIsImNvbXAiLCJMaW5rIiwiSGVhZGluZyIsIkxpc3QiLCJDb2xvckVsZW1lbnQiLCJRdW90ZSIsIlBhcmFncmFwaCIsImFkZEZvbnRTaXplU3R5bGVzIiwiZm9udFNpemVDb25maWciLCJhZGRBbGlnbm1lbnRTdHlsZXMiLCJyZW5kZXJMZWFmIiwiYXR0cmlidXRlcyIsImNoaWxkcmVuIiwiRW1waGFzaXplIiwiU2xhdGVEZWZhdWx0Q29udHJvbHMiLCJyZWFkT25seSIsImZvY3VzZWQiLCJyZW1vdmUiLCJ0cmFuc2xhdGlvbnMiLCJvbkNoYW5nZSIsIlJlYWN0Iiwid2l0aEhpc3RvcnkiLCJ3aXRoSHRtbCIsIndpdGhRdW90ZXMiLCJ3aXRoQ29sb3JzIiwid2l0aEZvbnRTaXplcyIsIndpdGhMaXN0cyIsIndpdGhIZWFkaW5ncyIsIndpdGhBbGlnbm1lbnRzIiwid2l0aExpbmtzIiwid2l0aEVtcGhhc2l6ZSIsIndpdGhSZWFjdCIsImNyZWF0ZUVkaXRvciIsImN1cnJlbnQiLCJzdGF0ZSIsInZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwiZXZlcnkiLCJub2RlIiwiTm9kZSIsImlzTm9kZSIsInNsYXRlRW1wdHlWYWx1ZSIsInNldFZhbHVlIiwiZGVib3VuY2VkT25DaGFuZ2UiLCJkZWJvdW5jZSIsImxlYWRpbmciLCJ0cmFpbGluZyIsInN0YXRlQ2hhbmdlZCIsInNsYXRlU3RhdGUiLCJpc0RpcnR5IiwibmV3VmFsdWUiLCJtaWdyYXRpb25SZXN1bHQiLCJNaWdyYXRvciIsIm1pZ3JhdGVTdGF0ZSIsInZlcnNpb24iLCJtaWdyYXRpb25zIiwiY2hhbmdlZCIsIm1pZ3JhdGVkU3RhdGUiLCJ0ZXh0UGxhY2Vob2xkZXIiLCJldmVudCIsImhvdGtleSIsImlzSG90a2V5IiwicHJldmVudERlZmF1bHQiLCJleGVjIiwidHlwZSIsIkVtcGhhc2l6ZUNvbW1hbmRzIiwiVG9nZ2xlRW1waGFzaXplIiwibWFyayIsInRleHQiLCJFbXBoYXNpemVUeXBlcyIsIkJvbGQiLCJJdGFsaWMiLCJVbmRlcmxpbmUiLCJJY29uQ29tcG9uZW50IiwicGx1Z2luTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBSUEsSUFBTUEsVUFBVSxxQkFBUUMsNkVBQVIsQ0FBaEI7O0FBRU8sSUFBTUMsYUFBMkMsR0FBRyxTQUE5Q0EsYUFBOEMsQ0FBQUMsS0FBSyxFQUFJO0FBQUEsTUFDMURDLE9BRDBELEdBQzlDRCxLQUQ4QyxDQUMxREMsT0FEMEQ7QUFFbEUsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLElBQUksR0FDUkMsZ0VBQUksQ0FBQ0wsS0FBRCxDQUFKLElBQ0FNLHlFQUFPLENBQUNOLEtBQUQsQ0FEUCxJQUVBTyxpRUFBSSxDQUFDUCxLQUFELENBRkosSUFHQVEsaUZBQVksQ0FBQ1IsS0FBRCxDQUhaLElBSUFTLG1FQUFLLENBQUNULEtBQUQsQ0FKTCxJQUtBVSwrRUFBUyxDQUFDVixLQUFELENBTlg7QUFPQSxTQUFPVyw0RUFBaUIsQ0FDdEJULE1BQU0sQ0FBQ1UsY0FEZSxFQUV0QlgsT0FGc0IsRUFHdEJZLDhFQUFrQixDQUFD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LGFBQUssQ0FBQ0csY0FBTjtBQUNBakUsY0FBTSxDQUFDa0UsSUFBUCxDQUFZO0FBQ1ZDLGNBQUksRUFBRSxhQURJO0FBRVZJLGNBQUksRUFBRTtBQUZJLFNBQVo7QUFJRDtBQUNGO0FBdEJILElBTkYsRUE4QkcsQ0FBQ3RELFFBQUQsSUFBYUMsT0FBYixJQUNDLDBHQUNFLG9EQUFDLGdGQUFELFFBQ0Usb0RBQUMsbUZBQUQ7QUFBaUIsUUFBSSxFQUFFc0QsaUZBQWMsQ0FBQ0M7QUFBdEMsSUFERixFQUVFLG9EQUFDLG1GQUFEO0FBQWlCLFFBQUksRUFBRUQsaUZBQWMsQ0FBQ0U7QUFBdEMsSUFGRixFQUdFLG9EQUFDLG1GQUFEO0FBQWlCLFFBQUksRUFBRUYsaUZBQWMsQ0FBQ0c7QUFBdEMsSUFIRixFQUlFLG9EQUFDLHFFQUFELE9BSkYsRUFLRSxvREFBQyxtRUFBRCxPQUxGLENBREYsRUFRRSxvREFBQyx1RkFBRDtBQUNFLFFBQUksRUFBRTdFLEtBQUssQ0FBQzhFLGFBRGQ7QUFFRSxRQUFJLEVBQUU5RSxLQUFLLENBQUNvQixPQUZkO0FBR0UsU0FBSyxFQUFFcEIsS0FBSyxDQUFDc0IsWUFBTixDQUFtQnlELFVBSDVCO0FBSUUsWUFBUSxFQUFFMUQ7QUFKWixLQUtNckIsS0FMTixHQU9FLG9EQUFDLDhFQUFELE9BUEYsRUFRRSxvREFBQyx5RUFBRCxPQVJGLEVBU0Usb0RBQUMsbUVBQUQsT0FURixFQVVFLG9EQUFDLHFGQUFELE9BVkYsRUFXRSxvREFBQyx1RUFBRCxPQVhGLEVBWUUsb0RBQUMscUVBQUQsT0FaRixFQWFFLG9EQUFDLHVFQUFELE9BYkYsQ0FSRixDQS9CSixDQURGLENBREY7QUE4REQsQ0E5SEQ7O2NBQU1rQixvQjs7ZUFnSVNBLG9CO0FBQUE7Ozs7Ozs7Ozs7MEJBekpUckIsVTswQkFFT0UsYTswQkFpQkFlLFU7MEJBTVBJLG9CIiwiZmlsZSI6ImMyMTYzZDEtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgU2xhdGVDb250cm9sc1Byb3BzIGFzIFNsYXRlQ29udHJvbHNDdXN0b21Qcm9wcyB9IGZyb20gJy4uL3R5cGVzL2NvbnRyb2xzJztcclxuaW1wb3J0IHtcclxuICB3aXRoUmVhY3QsXHJcbiAgU2xhdGUsXHJcbiAgRWRpdGFibGUsXHJcbiAgUmVuZGVyRWxlbWVudFByb3BzLFxyXG4gIHVzZUVkaXRvcixcclxuICBSZW5kZXJMZWFmUHJvcHMsXHJcbiAgUmVhY3RFZGl0b3IsXHJcbn0gZnJvbSAnc2xhdGUtcmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVFZGl0b3IsIE5vZGUgfSBmcm9tICdzbGF0ZSc7XHJcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2gvZGVib3VuY2UnO1xyXG5pbXBvcnQgeyBIb3ZlcmluZ1Rvb2xiYXIgfSBmcm9tICcuL2hvdmVyaW5nVG9vbGJhci9Ib3ZlcmluZ1Rvb2xiYXInO1xyXG5pbXBvcnQge1xyXG4gIHdpdGhFbXBoYXNpemUsXHJcbiAgTUFSS19IT1RLRVlTLFxyXG4gIEVtcGhhc2l6ZUNvbW1hbmRzLFxyXG59IGZyb20gJy4uL3BsdWdpbnMvZW1waGFzaXplL3dpdGhFbXBoYXNpemUnO1xyXG5pbXBvcnQgeyBFbXBoYXNpemUgfSBmcm9tICcuLi9wbHVnaW5zL2VtcGhhc2l6ZS9FbXBoYXNpemUnO1xyXG5pbXBvcnQgeyB3aXRoTGlua3MgfSBmcm9tICcuLi9wbHVnaW5zL2xpbmtzL3dpdGhMaW5rcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9wbHVnaW5zL2xpbmtzL0xpbmsnO1xyXG5pbXBvcnQgaXNIb3RrZXkgZnJvbSAnaXMtaG90a2V5JztcclxuaW1wb3J0IHsgQWxpZ25tZW50QnV0dG9ucyB9IGZyb20gJy4uL3BsdWdpbnMvYWxpZ25tZW50L0FsaWdubWVudEJ1dHRvbnMnO1xyXG5pbXBvcnQgeyB3aXRoQWxpZ25tZW50cywgYWRkQWxpZ25tZW50U3R5bGVzIH0gZnJvbSAnLi4vcGx1Z2lucy9hbGlnbm1lbnQnO1xyXG5pbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSAnLi4vcGx1Z2lucy9oZWFkaW5nL0hlYWRpbmcnO1xyXG5pbXBvcnQgeyBQYXJhZ3JhcGggfSBmcm9tICcuLi9wbHVnaW5zL3BhcmFncmFwaC9QYXJhZ3JhcGgnO1xyXG5pbXBvcnQgeyB3aXRoSGVhZGluZ3MgfSBmcm9tICcuLi9wbHVnaW5zL2hlYWRpbmcvd2l0aEhlYWRpbmdzJztcclxuaW1wb3J0IHsgTGlzdCB9IGZyb20gJy4uL3BsdWdpbnMvbGlzdHMvTGlzdCc7XHJcbmltcG9ydCB7IHdpdGhMaXN0cyB9IGZyb20gJy4uL3BsdWdpbnMvbGlzdHMvd2l0aExpc3RzJztcclxuaW1wb3J0IHsgTGlzdEJ1dHRvbnMgfSBmcm9tICcuLi9wbHVnaW5zL2xpc3RzL0xpc3RCdXR0b25zJztcclxuaW1wb3J0IHsgd2l0aEZvbnRTaXplcywgYWRkRm9udFNpemVTdHlsZXMgfSBmcm9tICcuLi9wbHVnaW5zL2ZvbnRTaXplJztcclxuaW1wb3J0IEZvbnRTaXplQnV0dG9uIGZyb20gJy4uL3BsdWdpbnMvZm9udFNpemUvRm9udFNpemVCdXR0b24nO1xyXG5pbXBvcnQgQ29sb3JCdXR0b24gZnJvbSAnLi4vcGx1Z2lucy9jb2xvci9Db2xvckJ1dHRvbic7XHJcbmltcG9ydCB7IHdpdGhDb2xvcnMgfSBmcm9tICcuLi9wbHVnaW5zL2NvbG9yL3dpdGhDb2xvcnMnO1xyXG5pbXBvcnQgeyBDb2xvckVsZW1lbnQgfSBmcm9tICcuLi9wbHVnaW5zL2NvbG9yL0NvbG9yRWxlbWVudCc7XHJcbmltcG9ydCB7IHdpdGhRdW90ZXMgfSBmcm9tICcuLi9wbHVnaW5zL3F1b3RlL3dpdGhRdW90ZXMnO1xyXG5pbXBvcnQgeyBRdW90ZSB9IGZyb20gJy4uL3BsdWdpbnMvcXVvdGUvUXVvdGUnO1xyXG5pbXBvcnQgeyBRdW90ZUJ1dHRvbiB9IGZyb20gJy4uL3BsdWdpbnMvcXVvdGUvUXVvdGVCdXR0b24nO1xyXG5pbXBvcnQgQm90dG9tVG9vbGJhciBmcm9tICcuLi8uLi9jb21tb24vY29tcG9uZW50cy9ib3R0b21Ub29sYmFyL0JvdHRvbVRvb2xiYXInO1xyXG5pbXBvcnQgeyB3aXRoSHRtbCB9IGZyb20gJy4uL3BsdWdpbnMvaHRtbFBhc3RlL3dpdGhIdG1sUGFzdGUnO1xyXG5pbXBvcnQgeyBMaW5rQnV0dG9uIH0gZnJvbSAnLi4vcGx1Z2lucy9saW5rcy9MaW5rQnV0dG9uJztcclxuaW1wb3J0IEhlYWRpbmdCdXR0b25Db21wYWN0IGZyb20gJy4uL3BsdWdpbnMvaGVhZGluZy9IZWFkaW5nQnV0dG9uQ29tcGFjdCc7XHJcbmltcG9ydCB7IEVtcGhhc2l6ZUJ1dHRvbiB9IGZyb20gJy4uL3BsdWdpbnMvZW1waGFzaXplL0VtcGhhc2l6ZUJ1dHRvbic7XHJcbmltcG9ydCB7IEVtcGhhc2l6ZVR5cGVzIH0gZnJvbSAnLi4vcGx1Z2lucy9lbXBoYXNpemUvZW1waGFzaXplVHlwZXMnO1xyXG5pbXBvcnQgeyBzbGF0ZUVtcHR5VmFsdWUgfSBmcm9tICcuLi8uLi9jb21tb24vY29tcG9uZW50cy9zbGF0ZUVkaXRvci9zbGF0ZUVtcHR5VmFsdWUnO1xyXG5pbXBvcnQgeyB3aXRoSGlzdG9yeSB9IGZyb20gJ3NsYXRlLWhpc3RvcnknO1xyXG5pbXBvcnQgbWlncmF0aW9ucyBmcm9tICcuLi8uLi9jb21tb24vc2xhdGVNaWdyYXRpb25zL21pZ3JhdGlvbnMnO1xyXG5pbXBvcnQgeyBTbGF0ZVZhbHVlIH0gZnJvbSAnLi4vLi4vY29tbW9uL3R5cGVzL3NsYXRlL1NsYXRlVmFsdWUnO1xyXG5pbXBvcnQgeyBNaWdyYXRvciB9IGZyb20gJy4uLy4uL2NvbW1vbi9zbGF0ZU1pZ3JhdGlvbnMvTWlncmF0b3InO1xyXG5cclxudHlwZSBTbGF0ZUNvbnRyb2xzUHJvcHMgPSBTbGF0ZUNvbnRyb2xzQ3VzdG9tUHJvcHM7XHJcblxyXG5jb25zdCBhbGxIb3RrZXlzID0geyAuLi5NQVJLX0hPVEtFWVMgfTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJFbGVtZW50OiBSZWFjdC5GQzxSZW5kZXJFbGVtZW50UHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgZWxlbWVudCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgZWRpdG9yID0gdXNlRWRpdG9yKCk7XHJcbiAgY29uc3QgY29tcCA9XHJcbiAgICBMaW5rKHByb3BzKSB8fFxyXG4gICAgSGVhZGluZyhwcm9wcykgfHxcclxuICAgIExpc3QocHJvcHMpIHx8XHJcbiAgICBDb2xvckVsZW1lbnQocHJvcHMpIHx8XHJcbiAgICBRdW90ZShwcm9wcykgfHxcclxuICAgIFBhcmFncmFwaChwcm9wcyk7XHJcbiAgcmV0dXJuIGFkZEZvbnRTaXplU3R5bGVzKFxyXG4gICAgZWRpdG9yLmZvbnRTaXplQ29uZmlnLFxyXG4gICAgZWxlbWVudCxcclxuICAgIGFkZEFsaWdubWVudFN0eWxlcyhlbGVtZW50LCBjb21wKVxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyTGVhZjogUmVhY3QuRkM8UmVuZGVyTGVhZlByb3BzPiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGF0dHJpYnV0ZXMgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGNoaWxkcmVuID0gRW1waGFzaXplKHByb3BzKTtcclxuICByZXR1cm4gPHNwYW4gey4uLmF0dHJpYnV0ZXN9PntjaGlsZHJlbn08L3NwYW4+O1xyXG59O1xyXG5cclxuY29uc3QgU2xhdGVEZWZhdWx0Q29udHJvbHM6IFJlYWN0LlNGQzxTbGF0ZUNvbnRyb2xzUHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgcmVhZE9ubHksIGZvY3VzZWQsIHJlbW92ZSwgdHJhbnNsYXRpb25zLCBvbkNoYW5nZSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgZWRpdG9yID0gUmVhY3QudXNlUmVmKFxyXG4gICAgd2l0aEhpc3Rvcnk8UmVhY3RFZGl0b3I+KFxyXG4gICAgICB3aXRoSHRtbChcclxuICAgICAgICB3aXRoUXVvdGVzKCkoXHJcbiAgICAgICAgICB3aXRoQ29sb3JzKFxyXG4gICAgICAgICAgICB3aXRoRm9udFNpemVzKCkoXHJcbiAgICAgICAgICAgICAgd2l0aExpc3RzKFxyXG4gICAgICAgICAgICAgICAgd2l0aEhlYWRpbmdzKCkoXHJcbiAgICAgICAgICAgICAgICAgIHdpdGhBbGlnbm1lbnRzKFxyXG4gICAgICAgICAgICAgICAgICAgIHdpdGhMaW5rcyh3aXRoRW1waGFzaXplKHdpdGhSZWFjdChjcmVhdGVFZGl0b3IoKSkpKVxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcbiAgICApXHJcbiAgKS5jdXJyZW50O1xyXG5cclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKFxyXG4gICAgKHByb3BzLnN0YXRlLnZhbHVlICYmXHJcbiAgICAgIEFycmF5LmlzQXJyYXkocHJvcHMuc3RhdGUudmFsdWUpICYmXHJcbiAgICAgIHByb3BzLnN0YXRlLnZhbHVlLmV2ZXJ5KG5vZGUgPT4gTm9kZS5pc05vZGUobm9kZSkpICYmXHJcbiAgICAgIHByb3BzLnN0YXRlLnZhbHVlKSB8fFxyXG4gICAgICBzbGF0ZUVtcHR5VmFsdWUoKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGRlYm91bmNlZE9uQ2hhbmdlID0gUmVhY3QudXNlUmVmKFxyXG4gICAgZGVib3VuY2Uob25DaGFuZ2UsIDUwMCwgeyBsZWFkaW5nOiBmYWxzZSwgdHJhaWxpbmc6IHRydWUgfSlcclxuICApLmN1cnJlbnQ7XHJcblxyXG4gIGNvbnN0IHN0YXRlQ2hhbmdlZCA9IFJlYWN0LnVzZUNhbGxiYWNrKChzbGF0ZVN0YXRlOiBTbGF0ZVZhbHVlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZShzbGF0ZVN0YXRlKTtcclxuICAgIGRlYm91bmNlZE9uQ2hhbmdlKHsgdmFsdWU6IHNsYXRlU3RhdGUgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBUaGlzIGlzIHRoZSBpbml0aWFsIGNoZWNrIGFuZC9vciBtaWdyYXRpb25cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGlzRGlydHkgPSBmYWxzZTtcclxuICAgIGxldCBuZXdWYWx1ZTogU2xhdGVWYWx1ZSA9IHByb3BzLnN0YXRlLnZhbHVlO1xyXG4gICAgaWYgKFxyXG4gICAgICAhdmFsdWUgfHxcclxuICAgICAgIUFycmF5LmlzQXJyYXkodmFsdWUpIHx8XHJcbiAgICAgICF2YWx1ZS5ldmVyeShub2RlID0+IE5vZGUuaXNOb2RlKG5vZGUpKVxyXG4gICAgKSB7XHJcbiAgICAgIG5ld1ZhbHVlID0gc2xhdGVFbXB0eVZhbHVlKCk7XHJcbiAgICAgIGlzRGlydHkgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbWlncmF0aW9uUmVzdWx0ID0gTWlncmF0b3IubWlncmF0ZVN0YXRlKFxyXG4gICAgICAgIHByb3BzLnN0YXRlLnZlcnNpb24sXHJcbiAgICAgICAgcHJvcHMuc3RhdGUudmFsdWUsXHJcbiAgICAgICAgbWlncmF0aW9uc1xyXG4gICAgICApO1xyXG4gICAgICBpc0RpcnR5ID0gbWlncmF0aW9uUmVzdWx0LmNoYW5nZWQ7XHJcbiAgICAgIG5ld1ZhbHVlID0gbWlncmF0aW9uUmVzdWx0Lm1pZ3JhdGVkU3RhdGU7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNEaXJ0eSkge1xyXG4gICAgICBzdGF0ZUNoYW5nZWQobmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2xhdGVDb250cm9scyBvcnktcHJldmVudC1ibHVyXCI+XHJcbiAgICAgIDxTbGF0ZVxyXG4gICAgICAgIGVkaXRvcj17ZWRpdG9yfVxyXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICBvbkNoYW5nZT17c3RhdGVDaGFuZ2VkfVxyXG4gICAgICAgIG1pZ3JhdGlvbnM9e21pZ3JhdGlvbnN9XHJcbiAgICAgID5cclxuICAgICAgICA8RWRpdGFibGVcclxuICAgICAgICAgIHJlYWRPbmx5PXtwcm9wcy5yZWFkT25seX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPXt0cmFuc2xhdGlvbnMudGV4dFBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgcmVuZGVyTGVhZj17cmVuZGVyTGVhZn1cclxuICAgICAgICAgIHJlbmRlckVsZW1lbnQ9e3JlbmRlckVsZW1lbnR9XHJcbiAgICAgICAgICBvbktleURvd249e2V2ZW50ID0+IHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBob3RrZXkgaW4gYWxsSG90a2V5cykge1xyXG4gICAgICAgICAgICAgIGlmIChpc0hvdGtleShob3RrZXksIChldmVudCBhcyB1bmtub3duKSBhcyBLZXlib2FyZEV2ZW50KSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGVkaXRvci5leGVjKHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogRW1waGFzaXplQ29tbWFuZHMuVG9nZ2xlRW1waGFzaXplLFxyXG4gICAgICAgICAgICAgICAgICBtYXJrOiB7IHR5cGU6IE1BUktfSE9US0VZU1tob3RrZXldIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzSG90a2V5KCdzaGlmdCtlbnRlcicsIChldmVudCBhcyB1bmtub3duKSBhcyBLZXlib2FyZEV2ZW50KSkge1xyXG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgZWRpdG9yLmV4ZWMoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2luc2VydF90ZXh0JyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdcXG4nLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgeyFyZWFkT25seSAmJiBmb2N1c2VkICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIb3ZlcmluZ1Rvb2xiYXI+XHJcbiAgICAgICAgICAgICAgPEVtcGhhc2l6ZUJ1dHRvbiB0eXBlPXtFbXBoYXNpemVUeXBlcy5Cb2xkfSAvPlxyXG4gICAgICAgICAgICAgIDxFbXBoYXNpemVCdXR0b24gdHlwZT17RW1waGFzaXplVHlwZXMuSXRhbGljfSAvPlxyXG4gICAgICAgICAgICAgIDxFbXBoYXNpemVCdXR0b24gdHlwZT17RW1waGFzaXplVHlwZXMuVW5kZXJsaW5lfSAvPlxyXG4gICAgICAgICAgICAgIDxMaW5rQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgPENvbG9yQnV0dG9uIC8+XHJcbiAgICAgICAgICAgIDwvSG92ZXJpbmdUb29sYmFyPlxyXG4gICAgICAgICAgICA8Qm90dG9tVG9vbGJhclxyXG4gICAgICAgICAgICAgIGljb249e3Byb3BzLkljb25Db21wb25lbnR9XHJcbiAgICAgICAgICAgICAgb3Blbj17cHJvcHMuZm9jdXNlZH1cclxuICAgICAgICAgICAgICB0aXRsZT17cHJvcHMudHJhbnNsYXRpb25zLnBsdWdpbk5hbWV9XHJcbiAgICAgICAgICAgICAgb25EZWxldGU9e3JlbW92ZX1cclxuICAgICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SGVhZGluZ0J1dHRvbkNvbXBhY3QgLz5cclxuICAgICAgICAgICAgICA8Rm9udFNpemVCdXR0b24gLz5cclxuICAgICAgICAgICAgICA8Q29sb3JCdXR0b24gLz5cclxuICAgICAgICAgICAgICA8QWxpZ25tZW50QnV0dG9ucyAvPlxyXG4gICAgICAgICAgICAgIDxMaXN0QnV0dG9ucyAvPlxyXG4gICAgICAgICAgICAgIDxMaW5rQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgPFF1b3RlQnV0dG9uIC8+XHJcbiAgICAgICAgICAgIDwvQm90dG9tVG9vbGJhcj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgey8qPHByZT57SlNPTi5zdHJpbmdpZnkocHJvcHMuc3RhdGUuc2xhdGVTdGF0ZSwgbnVsbCwgMil9PC9wcmU+Ki99XHJcbiAgICAgIDwvU2xhdGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xhdGVEZWZhdWx0Q29udHJvbHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=