webpackHotUpdate("main",{

/***/ "./src/lib/common/components/slateEditor/SlateEditor.tsx":
/*!***************************************************************!*\
  !*** ./src/lib/common/components/slateEditor/SlateEditor.tsx ***!
  \***************************************************************/
/*! exports provided: ToolbarButtonTypes, HoverButtonTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarButtonTypes", function() { return ToolbarButtonTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoverButtonTypes", function() { return HoverButtonTypes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ "./node_modules/slate/dist/index.es.js");
/* harmony import */ var _slate_plugins_fontSize_withFontSizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../slate/plugins/fontSize/withFontSizes */ "./src/lib/slate/plugins/fontSize/withFontSizes.ts");
/* harmony import */ var _slate_plugins_lists_withLists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../slate/plugins/lists/withLists */ "./src/lib/slate/plugins/lists/withLists.ts");
/* harmony import */ var _slate_plugins_heading_withHeadings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../slate/plugins/heading/withHeadings */ "./src/lib/slate/plugins/heading/withHeadings.ts");
/* harmony import */ var _slate_plugins_alignment_withAlignments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../slate/plugins/alignment/withAlignments */ "./src/lib/slate/plugins/alignment/withAlignments.ts");
/* harmony import */ var _slate_plugins_links_withLinks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../slate/plugins/links/withLinks */ "./src/lib/slate/plugins/links/withLinks.ts");
/* harmony import */ var _slate_plugins_emphasize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../slate/plugins/emphasize */ "./src/lib/slate/plugins/emphasize/index.ts");
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! slate-react */ "./node_modules/slate-react/dist/index.es.js");
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! is-hotkey */ "./node_modules/is-hotkey/lib/index.js");
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(is_hotkey__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _HoveringToolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HoveringToolbar */ "./src/lib/common/components/slateEditor/HoveringToolbar.tsx");
/* harmony import */ var _slate_plugins_fontSize_FontSizeButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../slate/plugins/fontSize/FontSizeButton */ "./src/lib/slate/plugins/fontSize/FontSizeButton.tsx");
/* harmony import */ var _slate_plugins_alignment_AlignmentButtons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../slate/plugins/alignment/AlignmentButtons */ "./src/lib/slate/plugins/alignment/AlignmentButtons.tsx");
/* harmony import */ var _slate_plugins_emphasize_EmphasizeButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../slate/plugins/emphasize/EmphasizeButton */ "./src/lib/slate/plugins/emphasize/EmphasizeButton.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var guestbell_forms_build_components_inputGroup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! guestbell-forms/build/components/inputGroup */ "./node_modules/guestbell-forms/build/components/inputGroup/index.js");
/* harmony import */ var guestbell_forms_build_components_inputGroup__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(guestbell_forms_build_components_inputGroup__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/colors/yellow */ "./node_modules/@material-ui/core/colors/yellow.js");
/* harmony import */ var _material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/colors/red */ "./node_modules/@material-ui/core/colors/red.js");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! slate-history */ "./node_modules/slate-history/dist/index.es.js");
/* harmony import */ var _slateMigrations_Migrator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../slateMigrations/Migrator */ "./src/lib/common/slateMigrations/Migrator.ts");
/* harmony import */ var _slateEmptyValue__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./slateEmptyValue */ "./src/lib/common/components/slateEditor/slateEmptyValue.ts");
/* harmony import */ var _slate_plugins_color__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../slate/plugins/color */ "./src/lib/slate/plugins/color/index.ts");
/* harmony import */ var _slate_plugins_color_ColorButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../slate/plugins/color/ColorButton */ "./src/lib/slate/plugins/color/ColorButton.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _slate_plugins_htmlPaste_withHtmlPaste__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../slate/plugins/htmlPaste/withHtmlPaste */ "./src/lib/slate/plugins/htmlPaste/withHtmlPaste.ts");
/* harmony import */ var _slate_plugins_quote__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../slate/plugins/quote */ "./src/lib/slate/plugins/quote/index.ts");
/* harmony import */ var _slate_plugins_heading_HeadingButtonCompact__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../slate/plugins/heading/HeadingButtonCompact */ "./src/lib/slate/plugins/heading/HeadingButtonCompact.tsx");
/* harmony import */ var _slate_plugins_lists_ListButtons__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../slate/plugins/lists/ListButtons */ "./src/lib/slate/plugins/lists/ListButtons.tsx");
/* harmony import */ var _slate_plugins_links_LinkButton__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../slate/plugins/links/LinkButton */ "./src/lib/slate/plugins/links/LinkButton.tsx");
/* harmony import */ var _slate_plugins_quote_QuoteButton__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../slate/plugins/quote/QuoteButton */ "./src/lib/slate/plugins/quote/QuoteButton.tsx");
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Components */ "./src/lib/common/components/slateEditor/Components.tsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
































var ToolbarButtonTypes;

(function (ToolbarButtonTypes) {
  ToolbarButtonTypes[ToolbarButtonTypes["Link"] = 1] = "Link";
  ToolbarButtonTypes[ToolbarButtonTypes["Heading"] = 2] = "Heading";
  ToolbarButtonTypes[ToolbarButtonTypes["Lists"] = 4] = "Lists";
  ToolbarButtonTypes[ToolbarButtonTypes["Color"] = 8] = "Color";
  ToolbarButtonTypes[ToolbarButtonTypes["Alignment"] = 16] = "Alignment";
  ToolbarButtonTypes[ToolbarButtonTypes["Quote"] = 32] = "Quote";
  ToolbarButtonTypes[ToolbarButtonTypes["FontSize"] = 64] = "FontSize";
})(ToolbarButtonTypes || (ToolbarButtonTypes = {}));

var HoverButtonTypes;

(function (HoverButtonTypes) {
  HoverButtonTypes[HoverButtonTypes["Bold"] = 1] = "Bold";
  HoverButtonTypes[HoverButtonTypes["Italic"] = 2] = "Italic";
  HoverButtonTypes[HoverButtonTypes["Underline"] = 4] = "Underline";
  HoverButtonTypes[HoverButtonTypes["Link"] = 8] = "Link";
  HoverButtonTypes[HoverButtonTypes["Color"] = 16] = "Color";
})(HoverButtonTypes || (HoverButtonTypes = {}));

var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["makeStyles"])(function (_ref) {
  var spacing = _ref.spacing,
      palette = _ref.palette,
      typography = _ref.typography;
  return {
    toolbar: {
      // marginBottom: spacing(3),
      alignItems: 'center',
      backgroundColor: palette.background.paper
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
      paddingTop: spacing(4) // background: palette.grey[100],

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
      color: _material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_16___default.a[700]
    },
    characterCountContainerError: {
      color: _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_17___default.a[700]
    },
    root: {
      position: 'relative'
    }
  };
});

var allHotkeys = _objectSpread({}, _slate_plugins_emphasize__WEBPACK_IMPORTED_MODULE_7__["MARK_HOTKEYS"]);

var SlateEditor = function SlateEditor(props) {
  var _classNames2;

  var migrations = props.migrations,
      extraToolbarButtons = props.extraToolbarButtons,
      version = props.version,
      _props$toolbarButtons = props.toolbarButtons,
      toolbarButtons = _props$toolbarButtons === void 0 ? ToolbarButtonTypes.FontSize | ToolbarButtonTypes.Alignment : _props$toolbarButtons,
      _props$hoverButtons = props.hoverButtons,
      hoverButtons = _props$hoverButtons === void 0 ? HoverButtonTypes.Bold | HoverButtonTypes.Italic | HoverButtonTypes.Underline | HoverButtonTypes.Color : _props$hoverButtons,
      className = props.className;
  var classes = useStyles();
  var editor = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () {
    return Object(slate_history__WEBPACK_IMPORTED_MODULE_18__["withHistory"])(Object(_slate_plugins_htmlPaste_withHtmlPaste__WEBPACK_IMPORTED_MODULE_24__["withHtml"])(Object(_slate_plugins_quote__WEBPACK_IMPORTED_MODULE_25__["withQuotes"])()(Object(_slate_plugins_color__WEBPACK_IMPORTED_MODULE_21__["withColors"])(Object(_slate_plugins_fontSize_withFontSizes__WEBPACK_IMPORTED_MODULE_2__["withFontSizes"])()(Object(_slate_plugins_lists_withLists__WEBPACK_IMPORTED_MODULE_3__["withLists"])(Object(_slate_plugins_heading_withHeadings__WEBPACK_IMPORTED_MODULE_4__["withHeadings"])()(Object(_slate_plugins_alignment_withAlignments__WEBPACK_IMPORTED_MODULE_5__["withAlignments"])(Object(_slate_plugins_links_withLinks__WEBPACK_IMPORTED_MODULE_6__["withLinks"])(Object(_slate_plugins_emphasize__WEBPACK_IMPORTED_MODULE_7__["withEmphasize"])(Object(slate_react__WEBPACK_IMPORTED_MODULE_8__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_1__["createEditor"])())))))))))));
  }, []);
  var allowNewChar = true;
  var chars = 0;
  var charsLeft = 0;
  var progress = 0;

  if (props.maxChars) {
    try {
      chars = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].string(editor, {
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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.value),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1]; // This is the initial check and/or migration


  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    var isDirty = false;
    var newValue = props.value;

    if (!value || !Array.isArray(value) || !value.every(function (node) {
      return slate__WEBPACK_IMPORTED_MODULE_1__["Node"].isNode(node);
    })) {
      newValue = Object(_slateEmptyValue__WEBPACK_IMPORTED_MODULE_20__["slateEmptyValue"])();
      isDirty = true;
    } else {
      var migrationResult = _slateMigrations_Migrator__WEBPACK_IMPORTED_MODULE_19__["Migrator"].migrateState(version, props.value, migrations);
      isDirty = migrationResult.changed;
      newValue = migrationResult.migratedState;
    }

    if (isDirty) {
      props.onChange({
        value: newValue,
        isValid: allowNewChar,
        isDirty: isDirty
      });
      setValue(newValue);
    }
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    if (value !== null && props.value !== value) {
      setValue(props.value);
    }
  }, [props.value]);
  var onChange = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (val) {
    // This might possibly be stupid but right now, it triggers on every focus which causes
    // problems with re-rendering components and losing focus in modals (link, color)
    if (JSON.stringify(value) !== JSON.stringify(val)) {
      var newValue = val;
      setValue(newValue);
      props.onChange({
        value: newValue,
        isValid: allowNewChar,
        isDirty: true
      });
    }
  }, [props.onChange, value]);
  return value ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](guestbell_forms_build_components_inputGroup__WEBPACK_IMPORTED_MODULE_15___default.a, {
    title: props.title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](slate_react__WEBPACK_IMPORTED_MODULE_8__["Slate"], {
    editor: editor,
    value: value,
    onChange: onChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_14___default()('slate-editor', className, classes.root)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classes.toolbar
  }, props.label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_14___default()('slate-editor__label', classes.label, _defineProperty({
      'slate-editor__label--active': false
    }, classes.labelFocused, false))
  }, props.label), (toolbarButtons & ToolbarButtonTypes.Heading) !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_heading_HeadingButtonCompact__WEBPACK_IMPORTED_MODULE_26__["default"], null), (toolbarButtons & ToolbarButtonTypes.FontSize) !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_fontSize_FontSizeButton__WEBPACK_IMPORTED_MODULE_11__["default"], null), (toolbarButtons & ToolbarButtonTypes.Color) !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_color_ColorButton__WEBPACK_IMPORTED_MODULE_22__["default"], null), (toolbarButtons & ToolbarButtonTypes.Alignment) !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_alignment_AlignmentButtons__WEBPACK_IMPORTED_MODULE_12__["AlignmentButtons"], null), (toolbarButtons & ToolbarButtonTypes.Lists) !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_lists_ListButtons__WEBPACK_IMPORTED_MODULE_27__["ListButtons"], null), (toolbarButtons & ToolbarButtonTypes.Link) !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_links_LinkButton__WEBPACK_IMPORTED_MODULE_28__["LinkButton"], null), (toolbarButtons & ToolbarButtonTypes.Quote) !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_quote_QuoteButton__WEBPACK_IMPORTED_MODULE_29__["QuoteButton"], null), extraToolbarButtons), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](slate_react__WEBPACK_IMPORTED_MODULE_8__["Editable"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_14___default()('slate-editable', classes.editable),
    renderLeaf: _Components__WEBPACK_IMPORTED_MODULE_30__["renderLeaf"],
    renderElement: _Components__WEBPACK_IMPORTED_MODULE_30__["renderElement"],
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
          editor.toggleEmphasis(_slate_plugins_emphasize__WEBPACK_IMPORTED_MODULE_7__["MARK_HOTKEYS"][hotkey]);
        }
      }

      if (is_hotkey__WEBPACK_IMPORTED_MODULE_9___default()('shift+enter', event)) {
        event.preventDefault();
        editor.insertText('\n');
      }
    }
  }), props.maxChars && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_14___default()('slate-editor__char-count', classes.characterCountContainer, (_classNames2 = {}, _defineProperty(_classNames2, classes.characterCountContainerWarning, progress <= 10), _defineProperty(_classNames2, 'slate-editor__char-count--warning', progress <= 10), _defineProperty(_classNames2, classes.characterCountContainerError, progress <= 0), _defineProperty(_classNames2, 'slate-editor__char-count--error', progress <= 0), _classNames2))
  }, chars, "/", props.maxChars), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_HoveringToolbar__WEBPACK_IMPORTED_MODULE_10__["HoveringToolbar"], null, (hoverButtons & HoverButtonTypes.Bold) !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_emphasize_EmphasizeButton__WEBPACK_IMPORTED_MODULE_13__["EmphasizeButton"], {
    type: _slate_plugins_emphasize__WEBPACK_IMPORTED_MODULE_7__["EmphasizeTypes"].Bold
  }), (hoverButtons & HoverButtonTypes.Italic) !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_emphasize_EmphasizeButton__WEBPACK_IMPORTED_MODULE_13__["EmphasizeButton"], {
    type: _slate_plugins_emphasize__WEBPACK_IMPORTED_MODULE_7__["EmphasizeTypes"].Italic
  }), (hoverButtons & HoverButtonTypes.Underline) !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_emphasize_EmphasizeButton__WEBPACK_IMPORTED_MODULE_13__["EmphasizeButton"], {
    type: _slate_plugins_emphasize__WEBPACK_IMPORTED_MODULE_7__["EmphasizeTypes"].Underline
  }), (hoverButtons & HoverButtonTypes.Link) !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_links_LinkButton__WEBPACK_IMPORTED_MODULE_28__["LinkButton"], null), (hoverButtons & HoverButtonTypes.Color) !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_color_ColorButton__WEBPACK_IMPORTED_MODULE_22__["default"], null), props.extraHoverButtons)))) : null;
};

__signature__(SlateEditor, "useStyles{classes}\nuseMemo{editor}\nuseState{[value, setValue](props.value)}\nuseEffect{}\nuseEffect{}\nuseCallback{onChange}", function () {
  return [useStyles];
});

var _default = SlateEditor;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useStyles, "useStyles", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\slateEditor\\SlateEditor.tsx");
  reactHotLoader.register(allHotkeys, "allHotkeys", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\slateEditor\\SlateEditor.tsx");
  reactHotLoader.register(SlateEditor, "SlateEditor", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\slateEditor\\SlateEditor.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\slateEditor\\SlateEditor.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbW1vbi9jb21wb25lbnRzL3NsYXRlRWRpdG9yL1NsYXRlRWRpdG9yLnRzeCJdLCJuYW1lcyI6WyJUb29sYmFyQnV0dG9uVHlwZXMiLCJIb3ZlckJ1dHRvblR5cGVzIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInNwYWNpbmciLCJwYWxldHRlIiwidHlwb2dyYXBoeSIsInRvb2xiYXIiLCJhbGlnbkl0ZW1zIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZCIsInBhcGVyIiwibGFiZWwiLCJkaXNwbGF5IiwicGFkZGluZyIsImZvbnRTaXplIiwidHJhbnNpdGlvbiIsImxhYmVsRm9jdXNlZCIsImNvbG9yIiwicHJpbWFyeSIsIm1haW4iLCJlZGl0YWJsZSIsInBhZGRpbmdUb3AiLCJjaGFyYWN0ZXJDb3VudENvbnRhaW5lciIsInBvc2l0aW9uIiwicmlnaHQiLCJib3R0b20iLCJjYXB0aW9uIiwiZ3JleSIsImNoYXJhY3RlckNvdW50Q29udGFpbmVyV2FybmluZyIsInllbGxvdyIsImNoYXJhY3RlckNvdW50Q29udGFpbmVyRXJyb3IiLCJyZWQiLCJyb290IiwiYWxsSG90a2V5cyIsIk1BUktfSE9US0VZUyIsIlNsYXRlRWRpdG9yIiwicHJvcHMiLCJtaWdyYXRpb25zIiwiZXh0cmFUb29sYmFyQnV0dG9ucyIsInZlcnNpb24iLCJ0b29sYmFyQnV0dG9ucyIsIkZvbnRTaXplIiwiQWxpZ25tZW50IiwiaG92ZXJCdXR0b25zIiwiQm9sZCIsIkl0YWxpYyIsIlVuZGVybGluZSIsIkNvbG9yIiwiY2xhc3NOYW1lIiwiY2xhc3NlcyIsImVkaXRvciIsIlJlYWN0Iiwid2l0aEhpc3RvcnkiLCJ3aXRoSHRtbCIsIndpdGhRdW90ZXMiLCJ3aXRoQ29sb3JzIiwid2l0aEZvbnRTaXplcyIsIndpdGhMaXN0cyIsIndpdGhIZWFkaW5ncyIsIndpdGhBbGlnbm1lbnRzIiwid2l0aExpbmtzIiwid2l0aEVtcGhhc2l6ZSIsIndpdGhSZWFjdCIsImNyZWF0ZUVkaXRvciIsImFsbG93TmV3Q2hhciIsImNoYXJzIiwiY2hhcnNMZWZ0IiwicHJvZ3Jlc3MiLCJtYXhDaGFycyIsIkVkaXRvciIsInN0cmluZyIsImFuY2hvciIsInN0YXJ0IiwiZm9jdXMiLCJlbmQiLCJsZW5ndGgiLCJlcnJvciIsInZhbHVlIiwic2V0VmFsdWUiLCJpc0RpcnR5IiwibmV3VmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJldmVyeSIsIm5vZGUiLCJOb2RlIiwiaXNOb2RlIiwic2xhdGVFbXB0eVZhbHVlIiwibWlncmF0aW9uUmVzdWx0IiwiTWlncmF0b3IiLCJtaWdyYXRlU3RhdGUiLCJjaGFuZ2VkIiwibWlncmF0ZWRTdGF0ZSIsIm9uQ2hhbmdlIiwiaXNWYWxpZCIsInZhbCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aXRsZSIsImNsYXNzTmFtZXMiLCJIZWFkaW5nIiwiTGlzdHMiLCJMaW5rIiwiUXVvdGUiLCJyZW5kZXJMZWFmIiwicmVuZGVyRWxlbWVudCIsImV2ZW50Iiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0IiwiaG90a2V5IiwiaXNIb3RrZXkiLCJ0b2dnbGVFbXBoYXNpcyIsImluc2VydFRleHQiLCJFbXBoYXNpemVUeXBlcyIsImV4dHJhSG92ZXJCdXR0b25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUU8sSUFBS0Esa0JBQVo7O1dBQVlBLGtCO0FBQUFBLG9CLENBQUFBLGtCO0FBQUFBLG9CLENBQUFBLGtCO0FBQUFBLG9CLENBQUFBLGtCO0FBQUFBLG9CLENBQUFBLGtCO0FBQUFBLG9CLENBQUFBLGtCO0FBQUFBLG9CLENBQUFBLGtCO0FBQUFBLG9CLENBQUFBLGtCO0dBQUFBLGtCLEtBQUFBLGtCOztBQVVMLElBQUtDLGdCQUFaOztXQUFZQSxnQjtBQUFBQSxrQixDQUFBQSxnQjtBQUFBQSxrQixDQUFBQSxnQjtBQUFBQSxrQixDQUFBQSxnQjtBQUFBQSxrQixDQUFBQSxnQjtBQUFBQSxrQixDQUFBQSxnQjtHQUFBQSxnQixLQUFBQSxnQjs7QUF3QlosSUFBTUMsU0FBUyxHQUFHQyxxRUFBVSxDQUFDO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsTUFBWUMsT0FBWixRQUFZQSxPQUFaO0FBQUEsTUFBcUJDLFVBQXJCLFFBQXFCQSxVQUFyQjtBQUFBLFNBQThDO0FBQ3pFQyxXQUFPLEVBQUU7QUFDUDtBQUNBQyxnQkFBVSxFQUFFLFFBRkw7QUFHUEMscUJBQWUsRUFBRUosT0FBTyxDQUFDSyxVQUFSLENBQW1CQztBQUg3QixLQURnRTtBQU16RUMsU0FBSyxFQUFFO0FBQ0xDLGFBQU8sRUFBRSxNQURKO0FBRUxMLGdCQUFVLEVBQUUsUUFGUDtBQUdMTSxhQUFPLEVBQUVWLE9BQU8sRUFIWDtBQUlMVyxjQUFRLEVBQUUsUUFKTDtBQUtMQyxnQkFBVSxFQUFFO0FBTFAsS0FOa0U7QUFhekVDLGdCQUFZLEVBQUU7QUFDWkMsV0FBSyxFQUFFYixPQUFPLENBQUNjLE9BQVIsQ0FBZ0JDO0FBRFgsS0FiMkQ7QUFnQnpFQyxZQUFRLEVBQUU7QUFDUlAsYUFBTyxFQUFFVixPQUFPLENBQUMsQ0FBRCxDQURSO0FBRVJrQixnQkFBVSxFQUFFbEIsT0FBTyxDQUFDLENBQUQsQ0FGWCxDQUdSOztBQUhRLEtBaEIrRDtBQXFCekVtQiwyQkFBdUIsRUFBRTtBQUN2QkMsY0FBUSxFQUFFLFVBRGE7QUFFdkJDLFdBQUssRUFBRSxDQUZnQjtBQUd2QkMsWUFBTSxFQUFFLENBSGU7QUFJdkJYLGNBQVEsRUFBRVQsVUFBVSxDQUFDcUIsT0FBWCxDQUFtQlosUUFKTjtBQUt2QkcsV0FBSyxFQUFFYixPQUFPLENBQUN1QixJQUFSLENBQWEsR0FBYixDQUxnQjtBQU12QlosZ0JBQVUsRUFBRTtBQU5XLEtBckJnRDtBQTZCekVhLGtDQUE4QixFQUFFO0FBQzlCWCxXQUFLLEVBQUVZLHVFQUFNLENBQUMsR0FBRDtBQURpQixLQTdCeUM7QUFnQ3pFQyxnQ0FBNEIsRUFBRTtBQUM1QmIsV0FBSyxFQUFFYyxvRUFBRyxDQUFDLEdBQUQ7QUFEa0IsS0FoQzJDO0FBbUN6RUMsUUFBSSxFQUFFO0FBQ0pULGNBQVEsRUFBRTtBQUROO0FBbkNtRSxHQUE5QztBQUFBLENBQUQsQ0FBNUI7O0FBd0NBLElBQU1VLFVBQVUscUJBQVFDLHFFQUFSLENBQWhCOztBQUlBLElBQU1DLFdBQXVDLEdBQUcsU0FBMUNBLFdBQTBDLENBQUFDLEtBQUssRUFBSTtBQUFBOztBQUN2RCxNQUNFQyxVQURGLEdBVUlELEtBVkosQ0FDRUMsVUFERjtBQUFBLE1BRUVDLG1CQUZGLEdBVUlGLEtBVkosQ0FFRUUsbUJBRkY7QUFBQSxNQUdFQyxPQUhGLEdBVUlILEtBVkosQ0FHRUcsT0FIRjtBQUFBLDhCQVVJSCxLQVZKLENBSUVJLGNBSkY7QUFBQSxNQUlFQSxjQUpGLHNDQUltQnpDLGtCQUFrQixDQUFDMEMsUUFBbkIsR0FBOEIxQyxrQkFBa0IsQ0FBQzJDLFNBSnBFO0FBQUEsNEJBVUlOLEtBVkosQ0FLRU8sWUFMRjtBQUFBLE1BS0VBLFlBTEYsb0NBS2lCM0MsZ0JBQWdCLENBQUM0QyxJQUFqQixHQUNiNUMsZ0JBQWdCLENBQUM2QyxNQURKLEdBRWI3QyxnQkFBZ0IsQ0FBQzhDLFNBRkosR0FHYjlDLGdCQUFnQixDQUFDK0MsS0FSckI7QUFBQSxNQVNFQyxTQVRGLEdBVUlaLEtBVkosQ0FTRVksU0FURjtBQVdBLE1BQU1DLE9BQU8sR0FBR2hELFNBQVMsRUFBekI7QUFDQSxNQUFNaUQsTUFBTSxHQUFHQyw2Q0FBQSxDQUNiO0FBQUEsV0FDRUMsa0VBQVcsQ0FDVEMsd0ZBQVEsQ0FDTkMsd0VBQVUsR0FDUkMsd0VBQVUsQ0FDUkMsMkZBQWEsR0FDWEMsZ0ZBQVMsQ0FDUEMsd0ZBQVksR0FDVkMsOEZBQWMsQ0FDWkMsZ0ZBQVMsQ0FBQ0MsOEVBQWEsQ0FBQ0MsNkRBQVMsQ0FBQ0MsMERBQVksRUFBYixDQUFWLENBQWQsQ0FERyxDQURKLENBREwsQ0FERSxDQURMLENBREYsQ0FESixDQURDLENBRGI7QUFBQSxHQURhLEVBbUJiLEVBbkJhLENBQWY7QUFzQkEsTUFBSUMsWUFBWSxHQUFHLElBQW5CO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLENBQVo7QUFDQSxNQUFJQyxTQUFTLEdBQUcsQ0FBaEI7QUFDQSxNQUFJQyxRQUFRLEdBQUcsQ0FBZjs7QUFDQSxNQUFJL0IsS0FBSyxDQUFDZ0MsUUFBVixFQUFvQjtBQUNsQixRQUFJO0FBQ0ZILFdBQUssR0FBR0ksNENBQU0sQ0FBQ0MsTUFBUCxDQUFjcEIsTUFBZCxFQUFzQjtBQUM1QnFCLGNBQU0sRUFBRUYsNENBQU0sQ0FBQ0csS0FBUCxDQUFhdEIsTUFBYixFQUFxQixFQUFyQixDQURvQjtBQUU1QnVCLGFBQUssRUFBRUosNENBQU0sQ0FBQ0ssR0FBUCxDQUFXeEIsTUFBWCxFQUFtQixFQUFuQjtBQUZxQixPQUF0QixFQUdMeUIsTUFISDtBQUlELEtBTEQsQ0FLRSxPQUFPQyxLQUFQLEVBQWM7QUFDZFgsV0FBSyxHQUFHLENBQVI7QUFDRDs7QUFDREMsYUFBUyxHQUFHOUIsS0FBSyxDQUFDZ0MsUUFBTixHQUFpQkgsS0FBN0I7QUFDQUUsWUFBUSxHQUFJRCxTQUFTLEdBQUc5QixLQUFLLENBQUNnQyxRQUFuQixHQUErQixHQUExQzs7QUFDQSxRQUFJRixTQUFTLEtBQUssQ0FBbEIsRUFBcUI7QUFDbkJGLGtCQUFZLEdBQUcsS0FBZjtBQUNEO0FBQ0Y7O0FBRUQsd0JBQTBCYiw4Q0FBQSxDQUFrQ2YsS0FBSyxDQUFDeUMsS0FBeEMsQ0FBMUI7QUFBQTtBQUFBLE1BQU9BLEtBQVA7QUFBQSxNQUFjQyxRQUFkLHVCQXZEdUQsQ0F5RHZEOzs7QUFDQTNCLGlEQUFBLENBQWdCLFlBQU07QUFDcEIsUUFBSTRCLE9BQU8sR0FBRyxLQUFkO0FBQ0EsUUFBSUMsUUFBb0IsR0FBRzVDLEtBQUssQ0FBQ3lDLEtBQWpDOztBQUNBLFFBQ0UsQ0FBQ0EsS0FBRCxJQUNBLENBQUNJLEtBQUssQ0FBQ0MsT0FBTixDQUFjTCxLQUFkLENBREQsSUFFQSxDQUFDQSxLQUFLLENBQUNNLEtBQU4sQ0FBWSxVQUFBQyxJQUFJO0FBQUEsYUFBSUMsMENBQUksQ0FBQ0MsTUFBTCxDQUFZRixJQUFaLENBQUo7QUFBQSxLQUFoQixDQUhILEVBSUU7QUFDQUosY0FBUSxHQUFHTyx5RUFBZSxFQUExQjtBQUNBUixhQUFPLEdBQUcsSUFBVjtBQUNELEtBUEQsTUFPTztBQUNMLFVBQU1TLGVBQWUsR0FBR0MsbUVBQVEsQ0FBQ0MsWUFBVCxDQUN0Qm5ELE9BRHNCLEVBRXRCSCxLQUFLLENBQUN5QyxLQUZnQixFQUd0QnhDLFVBSHNCLENBQXhCO0FBS0EwQyxhQUFPLEdBQUdTLGVBQWUsQ0FBQ0csT0FBMUI7QUFDQVgsY0FBUSxHQUFHUSxlQUFlLENBQUNJLGFBQTNCO0FBQ0Q7O0FBQ0QsUUFBSWIsT0FBSixFQUFhO0FBQ1gzQyxXQUFLLENBQUN5RCxRQUFOLENBQWU7QUFDYmhCLGFBQUssRUFBRUcsUUFETTtBQUViYyxlQUFPLEVBQUU5QixZQUZJO0FBR2JlLGVBQU8sRUFBUEE7QUFIYSxPQUFmO0FBS0FELGNBQVEsQ0FBQ0UsUUFBRCxDQUFSO0FBQ0Q7QUFDRixHQTNCRCxFQTJCRyxFQTNCSDtBQTZCQTdCLGlEQUFBLENBQWdCLFlBQU07QUFDcEIsUUFBSTBCLEtBQUssS0FBSyxJQUFWLElBQWtCekMsS0FBSyxDQUFDeUMsS0FBTixLQUFnQkEsS0FBdEMsRUFBNkM7QUFDM0NDLGNBQVEsQ0FBQzFDLEtBQUssQ0FBQ3lDLEtBQVAsQ0FBUjtBQUNEO0FBQ0YsR0FKRCxFQUlHLENBQUN6QyxLQUFLLENBQUN5QyxLQUFQLENBSkg7QUFNQSxNQUFNZ0IsUUFBUSxHQUFHMUMsaURBQUEsQ0FDZixVQUFDNEMsR0FBRCxFQUFxQjtBQUNuQjtBQUNBO0FBQ0EsUUFBSUMsSUFBSSxDQUFDQyxTQUFMLENBQWVwQixLQUFmLE1BQTBCbUIsSUFBSSxDQUFDQyxTQUFMLENBQWVGLEdBQWYsQ0FBOUIsRUFBbUQ7QUFDakQsVUFBTWYsUUFBb0IsR0FBR2UsR0FBN0I7QUFDQWpCLGNBQVEsQ0FBQ0UsUUFBRCxDQUFSO0FBQ0E1QyxXQUFLLENBQUN5RCxRQUFOLENBQWU7QUFDYmhCLGFBQUssRUFBRUcsUUFETTtBQUViYyxlQUFPLEVBQUU5QixZQUZJO0FBR2JlLGVBQU8sRUFBRTtBQUhJLE9BQWY7QUFLRDtBQUNGLEdBYmMsRUFjZixDQUFDM0MsS0FBSyxDQUFDeUQsUUFBUCxFQUFpQmhCLEtBQWpCLENBZGUsQ0FBakI7QUFnQkEsU0FBT0EsS0FBSyxnQkFDVixvREFBQyxtRkFBRDtBQUFZLFNBQUssRUFBRXpDLEtBQUssQ0FBQzhEO0FBQXpCLGtCQUNFLG9EQUFDLGlEQUFEO0FBQU8sVUFBTSxFQUFFaEQsTUFBZjtBQUF1QixTQUFLLEVBQUUyQixLQUE5QjtBQUFxQyxZQUFRLEVBQUVnQjtBQUEvQyxrQkFDRTtBQUFLLGFBQVMsRUFBRU0sa0RBQVUsQ0FBQyxjQUFELEVBQWlCbkQsU0FBakIsRUFBNEJDLE9BQU8sQ0FBQ2pCLElBQXBDO0FBQTFCLGtCQUNFO0FBQUssYUFBUyxFQUFFaUIsT0FBTyxDQUFDM0M7QUFBeEIsS0FDRzhCLEtBQUssQ0FBQ3pCLEtBQU4saUJBQ0M7QUFDRSxhQUFTLEVBQUV3RixrREFBVSxDQUFDLHFCQUFELEVBQXdCbEQsT0FBTyxDQUFDdEMsS0FBaEM7QUFDbkIscUNBQStCO0FBRFosT0FFbEJzQyxPQUFPLENBQUNqQyxZQUZVLEVBRUssS0FGTDtBQUR2QixLQU1Hb0IsS0FBSyxDQUFDekIsS0FOVCxDQUZKLEVBV0csQ0FBQzZCLGNBQWMsR0FBR3pDLGtCQUFrQixDQUFDcUcsT0FBckMsTUFBa0QsQ0FBbEQsaUJBQ0Msb0RBQUMsb0ZBQUQsT0FaSixFQWNHLENBQUM1RCxjQUFjLEdBQUd6QyxrQkFBa0IsQ0FBQzBDLFFBQXJDLE1BQW1ELENBQW5ELGlCQUNDLG9EQUFDLCtFQUFELE9BZkosRUFpQkcsQ0FBQ0QsY0FBYyxHQUFHekMsa0JBQWtCLENBQUNnRCxLQUFyQyxNQUFnRCxDQUFoRCxpQkFDQyxvREFBQyx5RUFBRCxPQWxCSixFQW9CRyxDQUFDUCxjQUFjLEdBQUd6QyxrQkFBa0IsQ0FBQzJDLFNBQXJDLE1BQW9ELENBQXBELGlCQUNDLG9EQUFDLDJGQUFELE9BckJKLEVBdUJHLENBQUNGLGNBQWMsR0FBR3pDLGtCQUFrQixDQUFDc0csS0FBckMsTUFBZ0QsQ0FBaEQsaUJBQ0Msb0RBQUMsNkVBQUQsT0F4QkosRUEwQkcsQ0FBQzdELGNBQWMsR0FBR3pDLGtCQUFrQixDQUFDdUcsSUFBckMsTUFBK0MsQ0FBL0MsaUJBQW9ELG9EQUFDLDJFQUFELE9BMUJ2RCxFQTJCRyxDQUFDOUQsY0FBYyxHQUFHekMsa0JBQWtCLENBQUN3RyxLQUFyQyxNQUFnRCxDQUFoRCxpQkFDQyxvREFBQyw2RUFBRCxPQTVCSixFQThCR2pFLG1CQTlCSCxDQURGLGVBaUNFLG9EQUFDLG9EQUFEO0FBQ0UsYUFBUyxFQUFFNkQsa0RBQVUsQ0FBQyxnQkFBRCxFQUFtQmxELE9BQU8sQ0FBQzdCLFFBQTNCLENBRHZCO0FBRUUsY0FBVSxFQUFFb0YsdURBRmQ7QUFHRSxpQkFBYSxFQUFFQywwREFIakI7QUFJRSxhQUFTLEVBQUUsbUJBQUFDLEtBQUssRUFBSTtBQUNsQixVQUFJLENBQUMxQyxZQUFMLEVBQW1CO0FBQ2pCLFlBQUksRUFBRTBDLEtBQUssQ0FBQ0MsT0FBTixLQUFrQixDQUFsQixJQUF1QkQsS0FBSyxDQUFDQyxPQUFOLEtBQWtCLEVBQTNDLENBQUosRUFBb0Q7QUFDbERELGVBQUssQ0FBQ0UsY0FBTjtBQUNBO0FBQ0Q7QUFDRjs7QUFDRCxXQUFLLElBQU1DLE1BQVgsSUFBcUI1RSxVQUFyQixFQUFpQztBQUMvQixZQUFJNkUsZ0RBQVEsQ0FBQ0QsTUFBRCxFQUFVSCxLQUFWLENBQVosRUFBMkQ7QUFDekRBLGVBQUssQ0FBQ0UsY0FBTjtBQUNBMUQsZ0JBQU0sQ0FBQzZELGNBQVAsQ0FBc0I3RSxxRUFBWSxDQUFDMkUsTUFBRCxDQUFsQztBQUNEO0FBQ0Y7O0FBQ0QsVUFDRUMsZ0RBQVEsQ0FBQyxhQUFELEVBQWlCSixLQUFqQixDQURWLEVBRUU7QUFDQUEsYUFBSyxDQUFDRSxjQUFOO0FBQ0ExRCxjQUFNLENBQUM4RCxVQUFQLENBQWtCLElBQWxCO0FBQ0Q7QUFDRjtBQXZCSCxJQWpDRixFQTBERzVFLEtBQUssQ0FBQ2dDLFFBQU4saUJBQ0M7QUFDRSxhQUFTLEVBQUUrQixrREFBVSxDQUNuQiwwQkFEbUIsRUFFbkJsRCxPQUFPLENBQUMzQix1QkFGVyxvREFJaEIyQixPQUFPLENBQUNyQiw4QkFKUSxFQUl5QnVDLFFBQVEsSUFBSSxFQUpyQyxpQ0FLakIsbUNBTGlCLEVBS29CQSxRQUFRLElBQUksRUFMaEMsaUNBTWhCbEIsT0FBTyxDQUFDbkIsNEJBTlEsRUFNdUJxQyxRQUFRLElBQUksQ0FObkMsaUNBT2pCLGlDQVBpQixFQU9rQkEsUUFBUSxJQUFJLENBUDlCO0FBRHZCLEtBWUdGLEtBWkgsT0FZVzdCLEtBQUssQ0FBQ2dDLFFBWmpCLENBM0RKLGVBMEVFLG9EQUFDLGlFQUFELFFBQ0csQ0FBQ3pCLFlBQVksR0FBRzNDLGdCQUFnQixDQUFDNEMsSUFBakMsTUFBMkMsQ0FBM0MsaUJBQ0Msb0RBQUMseUZBQUQ7QUFBaUIsUUFBSSxFQUFFcUUsdUVBQWMsQ0FBQ3JFO0FBQXRDLElBRkosRUFJRyxDQUFDRCxZQUFZLEdBQUczQyxnQkFBZ0IsQ0FBQzZDLE1BQWpDLE1BQTZDLENBQTdDLGlCQUNDLG9EQUFDLHlGQUFEO0FBQWlCLFFBQUksRUFBRW9FLHVFQUFjLENBQUNwRTtBQUF0QyxJQUxKLEVBT0csQ0FBQ0YsWUFBWSxHQUFHM0MsZ0JBQWdCLENBQUM4QyxTQUFqQyxNQUFnRCxDQUFoRCxpQkFDQyxvREFBQyx5RkFBRDtBQUFpQixRQUFJLEVBQUVtRSx1RUFBYyxDQUFDbkU7QUFBdEMsSUFSSixFQVVHLENBQUNILFlBQVksR0FBRzNDLGdCQUFnQixDQUFDc0csSUFBakMsTUFBMkMsQ0FBM0MsaUJBQWdELG9EQUFDLDJFQUFELE9BVm5ELEVBV0csQ0FBQzNELFlBQVksR0FBRzNDLGdCQUFnQixDQUFDK0MsS0FBakMsTUFBNEMsQ0FBNUMsaUJBQWlELG9EQUFDLHlFQUFELE9BWHBELEVBWUdYLEtBQUssQ0FBQzhFLGlCQVpULENBMUVGLENBREYsQ0FERixDQURVLEdBK0ZSLElBL0ZKO0FBZ0dELENBN01EOztjQUFNL0UsVztVQVlZbEMsUzs7O2VBbU1Ia0MsVztBQUFBOzs7Ozs7Ozs7OzBCQTNQVGxDLFM7MEJBd0NBZ0MsVTswQkFJQUUsVyIsImZpbGUiOiJiM2EwMzAyLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTm9kZSwgY3JlYXRlRWRpdG9yLCBFZGl0b3IgfSBmcm9tICdzbGF0ZSc7XHJcbmltcG9ydCB7IHdpdGhGb250U2l6ZXMgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2ZvbnRTaXplL3dpdGhGb250U2l6ZXMnO1xyXG5pbXBvcnQgeyB3aXRoTGlzdHMgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2xpc3RzL3dpdGhMaXN0cyc7XHJcbmltcG9ydCB7IHdpdGhIZWFkaW5ncyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvaGVhZGluZy93aXRoSGVhZGluZ3MnO1xyXG5pbXBvcnQgeyB3aXRoQWxpZ25tZW50cyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvYWxpZ25tZW50L3dpdGhBbGlnbm1lbnRzJztcclxuaW1wb3J0IHsgd2l0aExpbmtzIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9saW5rcy93aXRoTGlua3MnO1xyXG5pbXBvcnQge1xyXG4gIHdpdGhFbXBoYXNpemUsXHJcbiAgTUFSS19IT1RLRVlTLFxyXG4gIEVtcGhhc2l6ZVR5cGVzLFxyXG59IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvZW1waGFzaXplJztcclxuaW1wb3J0IHsgd2l0aFJlYWN0LCBTbGF0ZSwgRWRpdGFibGUgfSBmcm9tICdzbGF0ZS1yZWFjdCc7XHJcbmltcG9ydCBpc0hvdGtleSBmcm9tICdpcy1ob3RrZXknO1xyXG5pbXBvcnQgeyBIb3ZlcmluZ1Rvb2xiYXIgfSBmcm9tICcuL0hvdmVyaW5nVG9vbGJhcic7XHJcbmltcG9ydCBGb250U2l6ZUJ1dHRvbiBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2ZvbnRTaXplL0ZvbnRTaXplQnV0dG9uJztcclxuaW1wb3J0IHsgQWxpZ25tZW50QnV0dG9ucyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvYWxpZ25tZW50L0FsaWdubWVudEJ1dHRvbnMnO1xyXG5pbXBvcnQgeyBFbXBoYXNpemVCdXR0b24gfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2VtcGhhc2l6ZS9FbXBoYXNpemVCdXR0b24nO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY3JlYXRlTXVpVGhlbWUnO1xyXG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tICdndWVzdGJlbGwtZm9ybXMvYnVpbGQvY29tcG9uZW50cy9pbnB1dEdyb3VwJztcclxuaW1wb3J0IHllbGxvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMveWVsbG93JztcclxuaW1wb3J0IHJlZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvcmVkJztcclxuaW1wb3J0IHsgd2l0aEhpc3RvcnkgfSBmcm9tICdzbGF0ZS1oaXN0b3J5JztcclxuaW1wb3J0IHsgU2xhdGVWYWx1ZSB9IGZyb20gJy4uLy4uL3R5cGVzL3NsYXRlL1NsYXRlVmFsdWUnO1xyXG5pbXBvcnQgeyBNaWdyYXRvciB9IGZyb20gJy4uLy4uL3NsYXRlTWlncmF0aW9ucy9NaWdyYXRvcic7XHJcbmltcG9ydCB7IE1pZ3JhdGlvbiB9IGZyb20gJy4uLy4uL3NsYXRlTWlncmF0aW9ucy9NaWdyYXRpb24nO1xyXG5pbXBvcnQgeyBzbGF0ZUVtcHR5VmFsdWUgfSBmcm9tICcuL3NsYXRlRW1wdHlWYWx1ZSc7XHJcbmltcG9ydCB7IHdpdGhDb2xvcnMgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2NvbG9yJztcclxuaW1wb3J0IENvbG9yQnV0dG9uIGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvY29sb3IvQ29sb3JCdXR0b24nO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyB3aXRoSHRtbCB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvaHRtbFBhc3RlL3dpdGhIdG1sUGFzdGUnO1xyXG5pbXBvcnQgeyB3aXRoUXVvdGVzIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9xdW90ZSc7XHJcbmltcG9ydCBIZWFkaW5nQnV0dG9uQ29tcGFjdCBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2hlYWRpbmcvSGVhZGluZ0J1dHRvbkNvbXBhY3QnO1xyXG5pbXBvcnQgeyBMaXN0QnV0dG9ucyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvbGlzdHMvTGlzdEJ1dHRvbnMnO1xyXG5pbXBvcnQgeyBMaW5rQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9saW5rcy9MaW5rQnV0dG9uJztcclxuaW1wb3J0IHsgUXVvdGVCdXR0b24gfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL3F1b3RlL1F1b3RlQnV0dG9uJztcclxuaW1wb3J0IHsgcmVuZGVyRWxlbWVudCwgcmVuZGVyTGVhZiB9IGZyb20gJy4vQ29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgdHlwZSBTbGF0ZUVkaXRvck9uQ2hhbmdlSGFuZGxlciA9ICh2YWw6IHtcclxuICB2YWx1ZTogU2xhdGVWYWx1ZTtcclxuICBpc0RpcnR5OiBib29sZWFuO1xyXG4gIGlzVmFsaWQ6IGJvb2xlYW47XHJcbn0pID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgZW51bSBUb29sYmFyQnV0dG9uVHlwZXMge1xyXG4gIExpbmsgPSAxLFxyXG4gIEhlYWRpbmcgPSAyLFxyXG4gIExpc3RzID0gNCxcclxuICBDb2xvciA9IDgsXHJcbiAgQWxpZ25tZW50ID0gMTYsXHJcbiAgUXVvdGUgPSAzMixcclxuICBGb250U2l6ZSA9IDY0LFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBIb3ZlckJ1dHRvblR5cGVzIHtcclxuICBCb2xkID0gMSxcclxuICBJdGFsaWMgPSAyLFxyXG4gIFVuZGVybGluZSA9IDQsXHJcbiAgTGluayA9IDgsXHJcbiAgQ29sb3IgPSAxNixcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbGF0ZUVkaXRvckN1c3RvbVByb3BzIHtcclxuICB2YWx1ZTogU2xhdGVWYWx1ZTtcclxuICBvbkNoYW5nZTogU2xhdGVFZGl0b3JPbkNoYW5nZUhhbmRsZXI7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG4gIGxhYmVsPzogSlNYLkVsZW1lbnQgfCBzdHJpbmc7XHJcbiAgdGl0bGU/OiBKU1guRWxlbWVudCB8IHN0cmluZztcclxuICBtYXhDaGFycz86IG51bWJlcjtcclxuICB2ZXJzaW9uPzogbnVtYmVyO1xyXG4gIG1pZ3JhdGlvbnM/OiBNaWdyYXRpb25bXTtcclxuICBleHRyYVRvb2xiYXJCdXR0b25zPzogSlNYLkVsZW1lbnQ7XHJcbiAgZXh0cmFIb3ZlckJ1dHRvbnM/OiBKU1guRWxlbWVudDtcclxuICB0b29sYmFyQnV0dG9ucz86IFRvb2xiYXJCdXR0b25UeXBlcztcclxuICBob3ZlckJ1dHRvbnM/OiBIb3ZlckJ1dHRvblR5cGVzO1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh7IHNwYWNpbmcsIHBhbGV0dGUsIHR5cG9ncmFwaHkgfTogVGhlbWUpID0+ICh7XHJcbiAgdG9vbGJhcjoge1xyXG4gICAgLy8gbWFyZ2luQm90dG9tOiBzcGFjaW5nKDMpLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICB9LFxyXG4gIGxhYmVsOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIHBhZGRpbmc6IHNwYWNpbmcoKSxcclxuICAgIGZvbnRTaXplOiAnMS4ycmVtJyxcclxuICAgIHRyYW5zaXRpb246ICcwLjVzIGNvbG9yJyxcclxuICB9LFxyXG4gIGxhYmVsRm9jdXNlZDoge1xyXG4gICAgY29sb3I6IHBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gIH0sXHJcbiAgZWRpdGFibGU6IHtcclxuICAgIHBhZGRpbmc6IHNwYWNpbmcoMiksXHJcbiAgICBwYWRkaW5nVG9wOiBzcGFjaW5nKDQpLFxyXG4gICAgLy8gYmFja2dyb3VuZDogcGFsZXR0ZS5ncmV5WzEwMF0sXHJcbiAgfSxcclxuICBjaGFyYWN0ZXJDb3VudENvbnRhaW5lcjoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICByaWdodDogMyxcclxuICAgIGJvdHRvbTogMyxcclxuICAgIGZvbnRTaXplOiB0eXBvZ3JhcGh5LmNhcHRpb24uZm9udFNpemUsXHJcbiAgICBjb2xvcjogcGFsZXR0ZS5ncmV5WzUwMF0sXHJcbiAgICB0cmFuc2l0aW9uOiAnMC41cyBjb2xvcicsXHJcbiAgfSxcclxuICBjaGFyYWN0ZXJDb3VudENvbnRhaW5lcldhcm5pbmc6IHtcclxuICAgIGNvbG9yOiB5ZWxsb3dbNzAwXSxcclxuICB9LFxyXG4gIGNoYXJhY3RlckNvdW50Q29udGFpbmVyRXJyb3I6IHtcclxuICAgIGNvbG9yOiByZWRbNzAwXSxcclxuICB9LFxyXG4gIHJvb3Q6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IGFsbEhvdGtleXMgPSB7IC4uLk1BUktfSE9US0VZUyB9O1xyXG5cclxudHlwZSBTbGF0ZUVkaXRvclByb3BzID0gU2xhdGVFZGl0b3JDdXN0b21Qcm9wcztcclxuXHJcbmNvbnN0IFNsYXRlRWRpdG9yOiBSZWFjdC5GQzxTbGF0ZUVkaXRvclByb3BzPiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBtaWdyYXRpb25zLFxyXG4gICAgZXh0cmFUb29sYmFyQnV0dG9ucyxcclxuICAgIHZlcnNpb24sXHJcbiAgICB0b29sYmFyQnV0dG9ucyA9IFRvb2xiYXJCdXR0b25UeXBlcy5Gb250U2l6ZSB8IFRvb2xiYXJCdXR0b25UeXBlcy5BbGlnbm1lbnQsXHJcbiAgICBob3ZlckJ1dHRvbnMgPSBIb3ZlckJ1dHRvblR5cGVzLkJvbGQgfFxyXG4gICAgICBIb3ZlckJ1dHRvblR5cGVzLkl0YWxpYyB8XHJcbiAgICAgIEhvdmVyQnV0dG9uVHlwZXMuVW5kZXJsaW5lIHxcclxuICAgICAgSG92ZXJCdXR0b25UeXBlcy5Db2xvcixcclxuICAgIGNsYXNzTmFtZSxcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IGVkaXRvciA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAoKSA9PlxyXG4gICAgICB3aXRoSGlzdG9yeShcclxuICAgICAgICB3aXRoSHRtbChcclxuICAgICAgICAgIHdpdGhRdW90ZXMoKShcclxuICAgICAgICAgICAgd2l0aENvbG9ycyhcclxuICAgICAgICAgICAgICB3aXRoRm9udFNpemVzKCkoXHJcbiAgICAgICAgICAgICAgICB3aXRoTGlzdHMoXHJcbiAgICAgICAgICAgICAgICAgIHdpdGhIZWFkaW5ncygpKFxyXG4gICAgICAgICAgICAgICAgICAgIHdpdGhBbGlnbm1lbnRzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2l0aExpbmtzKHdpdGhFbXBoYXNpemUod2l0aFJlYWN0KGNyZWF0ZUVkaXRvcigpKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKVxyXG4gICAgICApLFxyXG4gICAgW11cclxuICApO1xyXG5cclxuICBsZXQgYWxsb3dOZXdDaGFyID0gdHJ1ZTtcclxuICBsZXQgY2hhcnMgPSAwO1xyXG4gIGxldCBjaGFyc0xlZnQgPSAwO1xyXG4gIGxldCBwcm9ncmVzcyA9IDA7XHJcbiAgaWYgKHByb3BzLm1heENoYXJzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjaGFycyA9IEVkaXRvci5zdHJpbmcoZWRpdG9yLCB7XHJcbiAgICAgICAgYW5jaG9yOiBFZGl0b3Iuc3RhcnQoZWRpdG9yLCBbXSksXHJcbiAgICAgICAgZm9jdXM6IEVkaXRvci5lbmQoZWRpdG9yLCBbXSksXHJcbiAgICAgIH0pLmxlbmd0aDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNoYXJzID0gMDtcclxuICAgIH1cclxuICAgIGNoYXJzTGVmdCA9IHByb3BzLm1heENoYXJzIC0gY2hhcnM7XHJcbiAgICBwcm9ncmVzcyA9IChjaGFyc0xlZnQgLyBwcm9wcy5tYXhDaGFycykgKiAxMDA7XHJcbiAgICBpZiAoY2hhcnNMZWZ0ID09PSAwKSB7XHJcbiAgICAgIGFsbG93TmV3Q2hhciA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZTxTbGF0ZVZhbHVlIHwgbnVsbD4ocHJvcHMudmFsdWUpO1xyXG5cclxuICAvLyBUaGlzIGlzIHRoZSBpbml0aWFsIGNoZWNrIGFuZC9vciBtaWdyYXRpb25cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGlzRGlydHkgPSBmYWxzZTtcclxuICAgIGxldCBuZXdWYWx1ZTogU2xhdGVWYWx1ZSA9IHByb3BzLnZhbHVlO1xyXG4gICAgaWYgKFxyXG4gICAgICAhdmFsdWUgfHxcclxuICAgICAgIUFycmF5LmlzQXJyYXkodmFsdWUpIHx8XHJcbiAgICAgICF2YWx1ZS5ldmVyeShub2RlID0+IE5vZGUuaXNOb2RlKG5vZGUpKVxyXG4gICAgKSB7XHJcbiAgICAgIG5ld1ZhbHVlID0gc2xhdGVFbXB0eVZhbHVlKCk7XHJcbiAgICAgIGlzRGlydHkgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbWlncmF0aW9uUmVzdWx0ID0gTWlncmF0b3IubWlncmF0ZVN0YXRlKFxyXG4gICAgICAgIHZlcnNpb24sXHJcbiAgICAgICAgcHJvcHMudmFsdWUsXHJcbiAgICAgICAgbWlncmF0aW9uc1xyXG4gICAgICApO1xyXG4gICAgICBpc0RpcnR5ID0gbWlncmF0aW9uUmVzdWx0LmNoYW5nZWQ7XHJcbiAgICAgIG5ld1ZhbHVlID0gbWlncmF0aW9uUmVzdWx0Lm1pZ3JhdGVkU3RhdGU7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNEaXJ0eSkge1xyXG4gICAgICBwcm9wcy5vbkNoYW5nZSh7XHJcbiAgICAgICAgdmFsdWU6IG5ld1ZhbHVlLFxyXG4gICAgICAgIGlzVmFsaWQ6IGFsbG93TmV3Q2hhcixcclxuICAgICAgICBpc0RpcnR5LFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiBwcm9wcy52YWx1ZSAhPT0gdmFsdWUpIHtcclxuICAgICAgc2V0VmFsdWUocHJvcHMudmFsdWUpO1xyXG4gICAgfVxyXG4gIH0sIFtwcm9wcy52YWx1ZV0pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgKHZhbDogU2xhdGVWYWx1ZSkgPT4ge1xyXG4gICAgICAvLyBUaGlzIG1pZ2h0IHBvc3NpYmx5IGJlIHN0dXBpZCBidXQgcmlnaHQgbm93LCBpdCB0cmlnZ2VycyBvbiBldmVyeSBmb2N1cyB3aGljaCBjYXVzZXNcclxuICAgICAgLy8gcHJvYmxlbXMgd2l0aCByZS1yZW5kZXJpbmcgY29tcG9uZW50cyBhbmQgbG9zaW5nIGZvY3VzIGluIG1vZGFscyAobGluaywgY29sb3IpXHJcbiAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh2YWx1ZSkgIT09IEpTT04uc3RyaW5naWZ5KHZhbCkpIHtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZTogU2xhdGVWYWx1ZSA9IHZhbDtcclxuICAgICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgcHJvcHMub25DaGFuZ2Uoe1xyXG4gICAgICAgICAgdmFsdWU6IG5ld1ZhbHVlLFxyXG4gICAgICAgICAgaXNWYWxpZDogYWxsb3dOZXdDaGFyLFxyXG4gICAgICAgICAgaXNEaXJ0eTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFtwcm9wcy5vbkNoYW5nZSwgdmFsdWVdXHJcbiAgKTtcclxuICByZXR1cm4gdmFsdWUgPyAoXHJcbiAgICA8SW5wdXRHcm91cCB0aXRsZT17cHJvcHMudGl0bGV9PlxyXG4gICAgICA8U2xhdGUgZWRpdG9yPXtlZGl0b3J9IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnc2xhdGUtZWRpdG9yJywgY2xhc3NOYW1lLCBjbGFzc2VzLnJvb3QpfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9PlxyXG4gICAgICAgICAgICB7cHJvcHMubGFiZWwgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnc2xhdGUtZWRpdG9yX19sYWJlbCcsIGNsYXNzZXMubGFiZWwsIHtcclxuICAgICAgICAgICAgICAgICAgJ3NsYXRlLWVkaXRvcl9fbGFiZWwtLWFjdGl2ZSc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3Nlcy5sYWJlbEZvY3VzZWRdOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5sYWJlbH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgeyh0b29sYmFyQnV0dG9ucyAmIFRvb2xiYXJCdXR0b25UeXBlcy5IZWFkaW5nKSAhPT0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgPEhlYWRpbmdCdXR0b25Db21wYWN0IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsodG9vbGJhckJ1dHRvbnMgJiBUb29sYmFyQnV0dG9uVHlwZXMuRm9udFNpemUpICE9PSAwICYmIChcclxuICAgICAgICAgICAgICA8Rm9udFNpemVCdXR0b24gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgeyh0b29sYmFyQnV0dG9ucyAmIFRvb2xiYXJCdXR0b25UeXBlcy5Db2xvcikgIT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgIDxDb2xvckJ1dHRvbiAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7KHRvb2xiYXJCdXR0b25zICYgVG9vbGJhckJ1dHRvblR5cGVzLkFsaWdubWVudCkgIT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgIDxBbGlnbm1lbnRCdXR0b25zIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsodG9vbGJhckJ1dHRvbnMgJiBUb29sYmFyQnV0dG9uVHlwZXMuTGlzdHMpICE9PSAwICYmIChcclxuICAgICAgICAgICAgICA8TGlzdEJ1dHRvbnMgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgeyh0b29sYmFyQnV0dG9ucyAmIFRvb2xiYXJCdXR0b25UeXBlcy5MaW5rKSAhPT0gMCAmJiA8TGlua0J1dHRvbiAvPn1cclxuICAgICAgICAgICAgeyh0b29sYmFyQnV0dG9ucyAmIFRvb2xiYXJCdXR0b25UeXBlcy5RdW90ZSkgIT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgIDxRdW90ZUJ1dHRvbiAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7ZXh0cmFUb29sYmFyQnV0dG9uc31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEVkaXRhYmxlXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnc2xhdGUtZWRpdGFibGUnLCBjbGFzc2VzLmVkaXRhYmxlKX1cclxuICAgICAgICAgICAgcmVuZGVyTGVhZj17cmVuZGVyTGVhZn1cclxuICAgICAgICAgICAgcmVuZGVyRWxlbWVudD17cmVuZGVyRWxlbWVudH1cclxuICAgICAgICAgICAgb25LZXlEb3duPXtldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKCFhbGxvd05ld0NoYXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghKGV2ZW50LmtleUNvZGUgPT09IDggfHwgZXZlbnQua2V5Q29kZSA9PT0gNDYpKSB7XHJcbiAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBob3RrZXkgaW4gYWxsSG90a2V5cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzSG90a2V5KGhvdGtleSwgKGV2ZW50IGFzIHVua25vd24pIGFzIEtleWJvYXJkRXZlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgIGVkaXRvci50b2dnbGVFbXBoYXNpcyhNQVJLX0hPVEtFWVNbaG90a2V5XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGlzSG90a2V5KCdzaGlmdCtlbnRlcicsIChldmVudCBhcyB1bmtub3duKSBhcyBLZXlib2FyZEV2ZW50KVxyXG4gICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGVkaXRvci5pbnNlcnRUZXh0KCdcXG4nKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge3Byb3BzLm1heENoYXJzICYmIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICdzbGF0ZS1lZGl0b3JfX2NoYXItY291bnQnLFxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcy5jaGFyYWN0ZXJDb3VudENvbnRhaW5lcixcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzZXMuY2hhcmFjdGVyQ291bnRDb250YWluZXJXYXJuaW5nXTogcHJvZ3Jlc3MgPD0gMTAsXHJcbiAgICAgICAgICAgICAgICAgICdzbGF0ZS1lZGl0b3JfX2NoYXItY291bnQtLXdhcm5pbmcnOiBwcm9ncmVzcyA8PSAxMCxcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzZXMuY2hhcmFjdGVyQ291bnRDb250YWluZXJFcnJvcl06IHByb2dyZXNzIDw9IDAsXHJcbiAgICAgICAgICAgICAgICAgICdzbGF0ZS1lZGl0b3JfX2NoYXItY291bnQtLWVycm9yJzogcHJvZ3Jlc3MgPD0gMCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2NoYXJzfS97cHJvcHMubWF4Q2hhcnN9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxIb3ZlcmluZ1Rvb2xiYXI+XHJcbiAgICAgICAgICAgIHsoaG92ZXJCdXR0b25zICYgSG92ZXJCdXR0b25UeXBlcy5Cb2xkKSAhPT0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgPEVtcGhhc2l6ZUJ1dHRvbiB0eXBlPXtFbXBoYXNpemVUeXBlcy5Cb2xkfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7KGhvdmVyQnV0dG9ucyAmIEhvdmVyQnV0dG9uVHlwZXMuSXRhbGljKSAhPT0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgPEVtcGhhc2l6ZUJ1dHRvbiB0eXBlPXtFbXBoYXNpemVUeXBlcy5JdGFsaWN9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsoaG92ZXJCdXR0b25zICYgSG92ZXJCdXR0b25UeXBlcy5VbmRlcmxpbmUpICE9PSAwICYmIChcclxuICAgICAgICAgICAgICA8RW1waGFzaXplQnV0dG9uIHR5cGU9e0VtcGhhc2l6ZVR5cGVzLlVuZGVybGluZX0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgeyhob3ZlckJ1dHRvbnMgJiBIb3ZlckJ1dHRvblR5cGVzLkxpbmspICE9PSAwICYmIDxMaW5rQnV0dG9uIC8+fVxyXG4gICAgICAgICAgICB7KGhvdmVyQnV0dG9ucyAmIEhvdmVyQnV0dG9uVHlwZXMuQ29sb3IpICE9PSAwICYmIDxDb2xvckJ1dHRvbiAvPn1cclxuICAgICAgICAgICAge3Byb3BzLmV4dHJhSG92ZXJCdXR0b25zfVxyXG4gICAgICAgICAgPC9Ib3ZlcmluZ1Rvb2xiYXI+XHJcbiAgICAgICAgICB7Lyo8cHJlPntKU09OLnN0cmluZ2lmeShwcm9wcy5zdGF0ZS5zbGF0ZVN0YXRlLCBudWxsLCAyKX08L3ByZT4qL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TbGF0ZT5cclxuICAgIDwvSW5wdXRHcm91cD5cclxuICApIDogbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsYXRlRWRpdG9yO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9