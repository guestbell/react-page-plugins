"use strict";
self["webpackHotUpdate_guestbell_react_page_plugins"]("main",{

/***/ "./src/lib/common/components/slateEditor/SlateEditor.tsx":
/*!***************************************************************!*\
  !*** ./src/lib/common/components/slateEditor/SlateEditor.tsx ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HoverButtonTypes": () => (/* binding */ HoverButtonTypes),
/* harmony export */   "ToolbarButtonTypes": () => (/* binding */ ToolbarButtonTypes),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! slate */ "./node_modules/slate/dist/index.es.js");
/* harmony import */ var _slate_plugins_fontSize_withFontSizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../slate/plugins/fontSize/withFontSizes */ "./src/lib/slate/plugins/fontSize/withFontSizes.ts");
/* harmony import */ var _slate_plugins_lists_withLists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../slate/plugins/lists/withLists */ "./src/lib/slate/plugins/lists/withLists.ts");
/* harmony import */ var _slate_plugins_heading_withHeadings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../slate/plugins/heading/withHeadings */ "./src/lib/slate/plugins/heading/withHeadings.ts");
/* harmony import */ var _slate_plugins_alignment_withAlignments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../slate/plugins/alignment/withAlignments */ "./src/lib/slate/plugins/alignment/withAlignments.ts");
/* harmony import */ var _slate_plugins_links_withLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../slate/plugins/links/withLinks */ "./src/lib/slate/plugins/links/withLinks.ts");
/* harmony import */ var _slate_plugins_emphasize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../slate/plugins/emphasize */ "./src/lib/slate/plugins/emphasize/index.ts");
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! slate-react */ "./node_modules/slate-react/dist/index.es.js");
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! is-hotkey */ "./node_modules/is-hotkey/lib/index.js");
/* harmony import */ var _HoveringToolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HoveringToolbar */ "./src/lib/common/components/slateEditor/HoveringToolbar.tsx");
/* harmony import */ var _slate_plugins_fontSize_FontSizeButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../slate/plugins/fontSize/FontSizeButton */ "./src/lib/slate/plugins/fontSize/FontSizeButton.tsx");
/* harmony import */ var _slate_plugins_alignment_AlignmentButtons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../slate/plugins/alignment/AlignmentButtons */ "./src/lib/slate/plugins/alignment/AlignmentButtons.tsx");
/* harmony import */ var _slate_plugins_emphasize_EmphasizeButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../slate/plugins/emphasize/EmphasizeButton */ "./src/lib/slate/plugins/emphasize/EmphasizeButton.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var guestbell_forms_build_components_inputGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! guestbell-forms/build/components/inputGroup */ "./node_modules/guestbell-forms/build/components/inputGroup/index.js");
/* harmony import */ var guestbell_forms_build_components_inputGroup__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(guestbell_forms_build_components_inputGroup__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! slate-history */ "./node_modules/slate-history/dist/index.es.js");
/* harmony import */ var _slateMigrations_Migrator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../slateMigrations/Migrator */ "./src/lib/common/slateMigrations/Migrator.ts");
/* harmony import */ var _slateEmptyValue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./slateEmptyValue */ "./src/lib/common/components/slateEditor/slateEmptyValue.ts");
/* harmony import */ var _slate_plugins_color__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../slate/plugins/color */ "./src/lib/slate/plugins/color/index.ts");
/* harmony import */ var _slate_plugins_color_ColorButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../slate/plugins/color/ColorButton */ "./src/lib/slate/plugins/color/ColorButton.tsx");
/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/styles/makeStyles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");
/* harmony import */ var _slate_plugins_htmlPaste_withHtmlPaste__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../slate/plugins/htmlPaste/withHtmlPaste */ "./src/lib/slate/plugins/htmlPaste/withHtmlPaste.ts");
/* harmony import */ var _slate_plugins_quote__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../slate/plugins/quote */ "./src/lib/slate/plugins/quote/index.ts");
/* harmony import */ var _slate_plugins_heading_HeadingButtonCompact__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../slate/plugins/heading/HeadingButtonCompact */ "./src/lib/slate/plugins/heading/HeadingButtonCompact.tsx");
/* harmony import */ var _slate_plugins_lists_ListButtons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../slate/plugins/lists/ListButtons */ "./src/lib/slate/plugins/lists/ListButtons.tsx");
/* harmony import */ var _slate_plugins_links_LinkButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../slate/plugins/links/LinkButton */ "./src/lib/slate/plugins/links/LinkButton.tsx");
/* harmony import */ var _slate_plugins_quote_QuoteButton__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../slate/plugins/quote/QuoteButton */ "./src/lib/slate/plugins/quote/QuoteButton.tsx");
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Components */ "./src/lib/common/components/slateEditor/Components.tsx");
/* harmony import */ var _SelectionToolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./SelectionToolbar */ "./src/lib/common/components/slateEditor/SelectionToolbar.tsx");
/* harmony import */ var _mui_material_Divider_Divider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/material/Divider/Divider */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material_Grid_Grid__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/material/Grid/Grid */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/colors */ "./node_modules/@mui/material/colors/yellow.js");
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/colors */ "./node_modules/@mui/material/colors/red.js");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

































var ToolbarButtonTypes = /*#__PURE__*/function (ToolbarButtonTypes) {
  ToolbarButtonTypes[ToolbarButtonTypes["Link"] = 1] = "Link";
  ToolbarButtonTypes[ToolbarButtonTypes["Heading"] = 2] = "Heading";
  ToolbarButtonTypes[ToolbarButtonTypes["Lists"] = 4] = "Lists";
  ToolbarButtonTypes[ToolbarButtonTypes["Color"] = 8] = "Color";
  ToolbarButtonTypes[ToolbarButtonTypes["Alignment"] = 16] = "Alignment";
  ToolbarButtonTypes[ToolbarButtonTypes["Quote"] = 32] = "Quote";
  ToolbarButtonTypes[ToolbarButtonTypes["FontSize"] = 64] = "FontSize";
  return ToolbarButtonTypes;
}({});
var HoverButtonTypes = /*#__PURE__*/function (HoverButtonTypes) {
  HoverButtonTypes[HoverButtonTypes["Bold"] = 1] = "Bold";
  HoverButtonTypes[HoverButtonTypes["Italic"] = 2] = "Italic";
  HoverButtonTypes[HoverButtonTypes["Underline"] = 4] = "Underline";
  HoverButtonTypes[HoverButtonTypes["Link"] = 8] = "Link";
  HoverButtonTypes[HoverButtonTypes["Color"] = 16] = "Color";
  return HoverButtonTypes;
}({});
var useStyles = (0,_mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_26__["default"])(function (_ref) {
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
      padding: spacing(2)
      // background: palette.grey[100],
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
      color: _mui_material_colors__WEBPACK_IMPORTED_MODULE_27__["default"][700]
    },
    characterCountContainerError: {
      color: _mui_material_colors__WEBPACK_IMPORTED_MODULE_28__["default"][700]
    },
    root: {
      position: 'relative'
    }
  };
});
var resetEditor = function resetEditor(editor, nodes) {
  var selection = editor.selection;
  editor.removeNodes({
    at: {
      anchor: editor.start([]),
      focus: editor.end([])
    }
  });
  if (nodes) editor.insertNodes(slate__WEBPACK_IMPORTED_MODULE_29__.Node.isNode(nodes) ? [nodes] : nodes);
  editor.select(selection !== null && selection !== void 0 ? selection : editor.end([]));
};
var allHotkeys = _objectSpread({}, _slate_plugins_emphasize__WEBPACK_IMPORTED_MODULE_6__.MARK_HOTKEYS);
var SlateEditor = function SlateEditor(props) {
  var migrations = props.migrations,
    extraToolbarButtons = props.extraToolbarButtons,
    version = props.version,
    _props$toolbarButtons = props.toolbarButtons,
    toolbarButtons = _props$toolbarButtons === void 0 ? ToolbarButtonTypes.FontSize | ToolbarButtonTypes.Alignment : _props$toolbarButtons,
    _props$hoverButtons = props.hoverButtons,
    hoverButtons = _props$hoverButtons === void 0 ? HoverButtonTypes.Bold | HoverButtonTypes.Italic | HoverButtonTypes.Underline | HoverButtonTypes.Color : _props$hoverButtons,
    className = props.className,
    hideToolbar = props.hideToolbar;
  var classes = useStyles();
  var editor = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return (0,slate_history__WEBPACK_IMPORTED_MODULE_30__.withHistory)((0,_slate_plugins_htmlPaste_withHtmlPaste__WEBPACK_IMPORTED_MODULE_18__.withHtml)((0,_slate_plugins_quote__WEBPACK_IMPORTED_MODULE_19__.withQuotes)()((0,_slate_plugins_color__WEBPACK_IMPORTED_MODULE_16__.withColors)((0,_slate_plugins_fontSize_withFontSizes__WEBPACK_IMPORTED_MODULE_1__.withFontSizes)()((0,_slate_plugins_lists_withLists__WEBPACK_IMPORTED_MODULE_2__.withLists)((0,_slate_plugins_heading_withHeadings__WEBPACK_IMPORTED_MODULE_3__.withHeadings)()((0,_slate_plugins_alignment_withAlignments__WEBPACK_IMPORTED_MODULE_4__.withAlignments)((0,_slate_plugins_links_withLinks__WEBPACK_IMPORTED_MODULE_5__.withLinks)((0,_slate_plugins_emphasize__WEBPACK_IMPORTED_MODULE_6__.withEmphasize)((0,slate_react__WEBPACK_IMPORTED_MODULE_31__.withReact)((0,slate__WEBPACK_IMPORTED_MODULE_29__.createEditor)())))))))))));
  }, []);
  var allowNewChar = true;
  var chars = 0;
  var charsLeft = 0;
  var progress = 0;
  if (props.maxChars) {
    try {
      chars = slate__WEBPACK_IMPORTED_MODULE_29__.Editor.string(editor, {
        anchor: slate__WEBPACK_IMPORTED_MODULE_29__.Editor.start(editor, []),
        focus: slate__WEBPACK_IMPORTED_MODULE_29__.Editor.end(editor, [])
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
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.value),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    value = _React$useState2[0],
    setValue = _React$useState2[1];

  // This is the initial check and/or migration
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    var isDirty = false;
    var newValue = props.value;
    if (!value || !Array.isArray(value) || !value.every(function (node) {
      return slate__WEBPACK_IMPORTED_MODULE_29__.Node.isNode(node);
    })) {
      newValue = (0,_slateEmptyValue__WEBPACK_IMPORTED_MODULE_15__.slateEmptyValue)();
      isDirty = true;
    } else {
      var migrationResult = _slateMigrations_Migrator__WEBPACK_IMPORTED_MODULE_14__.Migrator.migrateState(version, props.value, migrations);
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
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (value !== null && props.value !== value) {
      setValue(props.value);
      resetEditor(editor, props.value);
    }
  }, [props.value]);
  var onChange = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (val) {
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
  return value ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((guestbell_forms_build_components_inputGroup__WEBPACK_IMPORTED_MODULE_13___default()), {
    title: props.title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(slate_react__WEBPACK_IMPORTED_MODULE_31__.Slate, {
    editor: editor,
    initialValue: value,
    onChange: onChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_12___default()('slate-editor', className, classes.root)
  }, !hideToolbar && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.toolbar
  }, props.label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_12___default()('slate-editor__label', classes.label, _defineProperty({
      'slate-editor__label--active': false
    }, classes.labelFocused, false))
  }, props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid_Grid__WEBPACK_IMPORTED_MODULE_32__["default"], {
    container: true,
    alignItems: "center",
    className: classes.root
  }, (toolbarButtons & ToolbarButtonTypes.Heading) !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_slate_plugins_heading_HeadingButtonCompact__WEBPACK_IMPORTED_MODULE_20__["default"], null), (toolbarButtons & ToolbarButtonTypes.FontSize) !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_slate_plugins_fontSize_FontSizeButton__WEBPACK_IMPORTED_MODULE_9__["default"], null), (toolbarButtons & ToolbarButtonTypes.Color) !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_slate_plugins_color_ColorButton__WEBPACK_IMPORTED_MODULE_17__["default"], null), (toolbarButtons & ToolbarButtonTypes.Alignment) !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_slate_plugins_alignment_AlignmentButtons__WEBPACK_IMPORTED_MODULE_10__.AlignmentButtons, null), (toolbarButtons & ToolbarButtonTypes.Lists) !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_slate_plugins_lists_ListButtons__WEBPACK_IMPORTED_MODULE_21__.ListButtons, null), (toolbarButtons & ToolbarButtonTypes.Link) !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_slate_plugins_links_LinkButton__WEBPACK_IMPORTED_MODULE_22__.LinkButton, null), (toolbarButtons & ToolbarButtonTypes.Quote) !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_slate_plugins_quote_QuoteButton__WEBPACK_IMPORTED_MODULE_23__.QuoteButton, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SelectionToolbar__WEBPACK_IMPORTED_MODULE_25__.SelectionToolbar, null, function (enabled) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Divider_Divider__WEBPACK_IMPORTED_MODULE_33__["default"], {
      orientation: "vertical",
      flexItem: true
    }), (hoverButtons & HoverButtonTypes.Bold) !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_slate_plugins_emphasize_EmphasizeButton__WEBPACK_IMPORTED_MODULE_11__.EmphasizeButton, {
      type: _slate_plugins_emphasize__WEBPACK_IMPORTED_MODULE_6__.EmphasizeTypes.Bold,
      disabled: !enabled
    }), (hoverButtons & HoverButtonTypes.Italic) !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_slate_plugins_emphasize_EmphasizeButton__WEBPACK_IMPORTED_MODULE_11__.EmphasizeButton, {
      type: _slate_plugins_emphasize__WEBPACK_IMPORTED_MODULE_6__.EmphasizeTypes.Italic,
      disabled: !enabled
    }), (hoverButtons & HoverButtonTypes.Underline) !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_slate_plugins_emphasize_EmphasizeButton__WEBPACK_IMPORTED_MODULE_11__.EmphasizeButton, {
      type: _slate_plugins_emphasize__WEBPACK_IMPORTED_MODULE_6__.EmphasizeTypes.Underline,
      disabled: !enabled
    }), (hoverButtons & HoverButtonTypes.Link) !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_slate_plugins_links_LinkButton__WEBPACK_IMPORTED_MODULE_22__.LinkButton, {
      disabled: !enabled
    }), (hoverButtons & HoverButtonTypes.Color) !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_slate_plugins_color_ColorButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
      disabled: !enabled
    }));
  }), extraToolbarButtons)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(slate_react__WEBPACK_IMPORTED_MODULE_31__.Editable, {
    className: classnames__WEBPACK_IMPORTED_MODULE_12___default()('slate-editable', classes.editable),
    renderLeaf: _Components__WEBPACK_IMPORTED_MODULE_24__.renderLeaf,
    renderElement: _Components__WEBPACK_IMPORTED_MODULE_24__.renderElement,
    onKeyDown: function onKeyDown(event) {
      if (!allowNewChar) {
        if (!(event.keyCode === 8 || event.keyCode === 46)) {
          event.preventDefault();
          return;
        }
      }
      for (var hotkey in allHotkeys) {
        if ((0,is_hotkey__WEBPACK_IMPORTED_MODULE_7__["default"])(hotkey, event)) {
          event.preventDefault();
          editor.toggleEmphasis(_slate_plugins_emphasize__WEBPACK_IMPORTED_MODULE_6__.MARK_HOTKEYS[hotkey]);
        }
      }
      if ((0,is_hotkey__WEBPACK_IMPORTED_MODULE_7__["default"])('shift+enter', event)) {
        event.preventDefault();
        editor.insertText('\n');
      }
    }
  }), props.maxChars && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_12___default()('slate-editor__char-count', classes.characterCountContainer, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, classes.characterCountContainerWarning, progress <= 10), 'slate-editor__char-count--warning', progress <= 10), classes.characterCountContainerError, progress <= 0), 'slate-editor__char-count--error', progress <= 0))
  }, chars, "/", props.maxChars),  false && /*#__PURE__*/0))) : null;
};
__signature__(SlateEditor, "useStyles{classes}\nuseMemo{editor}\nuseState{[value, setValue](props.value)}\nuseEffect{}\nuseEffect{}\nuseCallback{onChange}", function () {
  return [useStyles];
});
var _default = SlateEditor;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(useStyles, "useStyles", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\slateEditor\\SlateEditor.tsx");
  reactHotLoader.register(resetEditor, "resetEditor", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\slateEditor\\SlateEditor.tsx");
  reactHotLoader.register(allHotkeys, "allHotkeys", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\slateEditor\\SlateEditor.tsx");
  reactHotLoader.register(SlateEditor, "SlateEditor", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\slateEditor\\SlateEditor.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\slateEditor\\SlateEditor.tsx");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c43fc3fafe72090e3db6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUMsRUFBRUEsUUFBUSxJQUFJLEVBQUUsR0FDbERMLE9BQU8sQ0FBQ2xDLDRCQUE0QixFQUFHdUMsUUFBUSxJQUFJLENBQUMsR0FDckQsaUNBQWlDLEVBQUVBLFFBQVEsSUFBSSxDQUFDLENBRXBEO0VBQUUsR0FFREYsS0FBSyxFQUFDLEdBQUMsRUFBQ25CLEtBQUssQ0FBQ3NCLFFBQ1osQ0FDTixFQUNBLE1BQUssaUJBQ0o5RyxDQWdCQyxDQUNBLENBQ0csQ0FBQyxHQUNYLElBQUk7QUFDVixDQUFDO0FBQUNnSyxhQUFBLENBcFBJekUsV0FBdUM7RUFBQSxRQWEzQjVDLFNBQVM7QUFBQTtBQUFBLElBQUFzSCxRQUFBLEdBeU9aMUUsV0FBVztBQUExQixpRUFBQTBFLFFBQUE7QUFBMkI7QUFBQTtFQUFBLElBQUFDLGNBQUEsVUFBQUMsb0JBQUEsbUJBQUFBLG9CQUFBLENBQUFDLE9BQUEsR0FBQUMsU0FBQTtFQUFBLEtBQUFILGNBQUE7SUFBQTtFQUFBO0VBQUFBLGNBQUEsQ0FBQUksUUFBQSxDQWhUckIzSCxTQUFTO0VBQUF1SCxjQUFBLENBQUFJLFFBQUEsQ0F1Q1Q5RixXQUFXO0VBQUEwRixjQUFBLENBQUFJLFFBQUEsQ0FlWGpGLFVBQVU7RUFBQTZFLGNBQUEsQ0FBQUksUUFBQSxDQUlWL0UsV0FBdUM7RUFBQTJFLGNBQUEsQ0FBQUksUUFBQSxDQUFBTCxRQUFBO0FBQUE7QUFBQTtBQUFBO0VBQUEsSUFBQU0sV0FBQSxVQUFBSixvQkFBQSxtQkFBQUEsb0JBQUEsQ0FBQUksV0FBQSxHQUFBRixTQUFBO0VBQUFFLFdBQUEsSUFBQUEsV0FBQSxDQUFBQyxNQUFBO0FBQUE7Ozs7Ozs7O1VDN0k3QyIsInNvdXJjZXMiOlsid2VicGFjazovL0BndWVzdGJlbGwvcmVhY3QtcGFnZS1wbHVnaW5zLy4vc3JjL2xpYi9jb21tb24vY29tcG9uZW50cy9zbGF0ZUVkaXRvci9TbGF0ZUVkaXRvci50c3giLCJ3ZWJwYWNrOi8vQGd1ZXN0YmVsbC9yZWFjdC1wYWdlLXBsdWdpbnMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTm9kZSwgY3JlYXRlRWRpdG9yLCBFZGl0b3IgfSBmcm9tICdzbGF0ZSc7XHJcbmltcG9ydCB7IHdpdGhGb250U2l6ZXMgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2ZvbnRTaXplL3dpdGhGb250U2l6ZXMnO1xyXG5pbXBvcnQgeyB3aXRoTGlzdHMgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2xpc3RzL3dpdGhMaXN0cyc7XHJcbmltcG9ydCB7IHdpdGhIZWFkaW5ncyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvaGVhZGluZy93aXRoSGVhZGluZ3MnO1xyXG5pbXBvcnQgeyB3aXRoQWxpZ25tZW50cyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvYWxpZ25tZW50L3dpdGhBbGlnbm1lbnRzJztcclxuaW1wb3J0IHsgd2l0aExpbmtzIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9saW5rcy93aXRoTGlua3MnO1xyXG5pbXBvcnQge1xyXG4gIHdpdGhFbXBoYXNpemUsXHJcbiAgTUFSS19IT1RLRVlTLFxyXG4gIEVtcGhhc2l6ZVR5cGVzLFxyXG59IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvZW1waGFzaXplJztcclxuaW1wb3J0IHsgd2l0aFJlYWN0LCBTbGF0ZSwgRWRpdGFibGUgfSBmcm9tICdzbGF0ZS1yZWFjdCc7XHJcbmltcG9ydCBpc0hvdGtleSBmcm9tICdpcy1ob3RrZXknO1xyXG5pbXBvcnQgeyBIb3ZlcmluZ1Rvb2xiYXIgfSBmcm9tICcuL0hvdmVyaW5nVG9vbGJhcic7XHJcbmltcG9ydCBGb250U2l6ZUJ1dHRvbiBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2ZvbnRTaXplL0ZvbnRTaXplQnV0dG9uJztcclxuaW1wb3J0IHsgQWxpZ25tZW50QnV0dG9ucyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvYWxpZ25tZW50L0FsaWdubWVudEJ1dHRvbnMnO1xyXG5pbXBvcnQgeyBFbXBoYXNpemVCdXR0b24gfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2VtcGhhc2l6ZS9FbXBoYXNpemVCdXR0b24nO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcbmltcG9ydCBJbnB1dEdyb3VwIGZyb20gJ2d1ZXN0YmVsbC1mb3Jtcy9idWlsZC9jb21wb25lbnRzL2lucHV0R3JvdXAnO1xyXG5pbXBvcnQgeyB3aXRoSGlzdG9yeSB9IGZyb20gJ3NsYXRlLWhpc3RvcnknO1xyXG5pbXBvcnQgeyBTbGF0ZVZhbHVlIH0gZnJvbSAnLi4vLi4vdHlwZXMvc2xhdGUvU2xhdGVWYWx1ZSc7XHJcbmltcG9ydCB7IE1pZ3JhdG9yIH0gZnJvbSAnLi4vLi4vc2xhdGVNaWdyYXRpb25zL01pZ3JhdG9yJztcclxuaW1wb3J0IHsgTWlncmF0aW9uIH0gZnJvbSAnLi4vLi4vc2xhdGVNaWdyYXRpb25zL01pZ3JhdGlvbic7XHJcbmltcG9ydCB7IHNsYXRlRW1wdHlWYWx1ZSB9IGZyb20gJy4vc2xhdGVFbXB0eVZhbHVlJztcclxuaW1wb3J0IHsgd2l0aENvbG9ycyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvY29sb3InO1xyXG5pbXBvcnQgQ29sb3JCdXR0b24gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9jb2xvci9Db2xvckJ1dHRvbic7XHJcbmltcG9ydCBtYWtlU3R5bGVzIGZyb20gJ0BtdWkvc3R5bGVzL21ha2VTdHlsZXMnO1xyXG5pbXBvcnQgeyB3aXRoSHRtbCB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvaHRtbFBhc3RlL3dpdGhIdG1sUGFzdGUnO1xyXG5pbXBvcnQgeyB3aXRoUXVvdGVzIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9xdW90ZSc7XHJcbmltcG9ydCBIZWFkaW5nQnV0dG9uQ29tcGFjdCBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2hlYWRpbmcvSGVhZGluZ0J1dHRvbkNvbXBhY3QnO1xyXG5pbXBvcnQgeyBMaXN0QnV0dG9ucyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvbGlzdHMvTGlzdEJ1dHRvbnMnO1xyXG5pbXBvcnQgeyBMaW5rQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9saW5rcy9MaW5rQnV0dG9uJztcclxuaW1wb3J0IHsgUXVvdGVCdXR0b24gfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL3F1b3RlL1F1b3RlQnV0dG9uJztcclxuaW1wb3J0IHsgcmVuZGVyRWxlbWVudCwgcmVuZGVyTGVhZiB9IGZyb20gJy4vQ29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFNlbGVjdGlvblRvb2xiYXIgfSBmcm9tICcuL1NlbGVjdGlvblRvb2xiYXInO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbXVpL21hdGVyaWFsL0RpdmlkZXIvRGl2aWRlcic7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvR3JpZC9HcmlkJztcclxuXHJcbmltcG9ydCB7IHllbGxvdywgcmVkIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9jb2xvcnMnO1xyXG5cclxuZXhwb3J0IHR5cGUgU2xhdGVFZGl0b3JPbkNoYW5nZUhhbmRsZXIgPSAodmFsOiB7XHJcbiAgdmFsdWU6IFNsYXRlVmFsdWU7XHJcbiAgaXNEaXJ0eTogYm9vbGVhbjtcclxuICBpc1ZhbGlkOiBib29sZWFuO1xyXG59KSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGVudW0gVG9vbGJhckJ1dHRvblR5cGVzIHtcclxuICBMaW5rID0gMSxcclxuICBIZWFkaW5nID0gMixcclxuICBMaXN0cyA9IDQsXHJcbiAgQ29sb3IgPSA4LFxyXG4gIEFsaWdubWVudCA9IDE2LFxyXG4gIFF1b3RlID0gMzIsXHJcbiAgRm9udFNpemUgPSA2NCxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSG92ZXJCdXR0b25UeXBlcyB7XHJcbiAgQm9sZCA9IDEsXHJcbiAgSXRhbGljID0gMixcclxuICBVbmRlcmxpbmUgPSA0LFxyXG4gIExpbmsgPSA4LFxyXG4gIENvbG9yID0gMTYsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xhdGVFZGl0b3JDdXN0b21Qcm9wcyB7XHJcbiAgdmFsdWU6IFNsYXRlVmFsdWU7XHJcbiAgb25DaGFuZ2U6IFNsYXRlRWRpdG9yT25DaGFuZ2VIYW5kbGVyO1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcclxuICBsYWJlbD86IEpTWC5FbGVtZW50IHwgc3RyaW5nO1xyXG4gIHRpdGxlPzogSlNYLkVsZW1lbnQgfCBzdHJpbmc7XHJcbiAgbWF4Q2hhcnM/OiBudW1iZXI7XHJcbiAgdmVyc2lvbj86IG51bWJlcjtcclxuICBtaWdyYXRpb25zPzogTWlncmF0aW9uW107XHJcbiAgZXh0cmFUb29sYmFyQnV0dG9ucz86IEpTWC5FbGVtZW50O1xyXG4gIGV4dHJhSG92ZXJCdXR0b25zPzogSlNYLkVsZW1lbnQ7XHJcbiAgdG9vbGJhckJ1dHRvbnM/OiBUb29sYmFyQnV0dG9uVHlwZXM7XHJcbiAgaG92ZXJCdXR0b25zPzogSG92ZXJCdXR0b25UeXBlcztcclxuICBoaWRlVG9vbGJhcj86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHsgc3BhY2luZywgcGFsZXR0ZSwgdHlwb2dyYXBoeSB9OiBUaGVtZSkgPT4gKHtcclxuICB0b29sYmFyOiB7XHJcbiAgICAvLyBtYXJnaW5Cb3R0b206IHNwYWNpbmcoMyksXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogcGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gIH0sXHJcbiAgbGFiZWw6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgcGFkZGluZzogc3BhY2luZygpLFxyXG4gICAgZm9udFNpemU6ICcxLjJyZW0nLFxyXG4gICAgdHJhbnNpdGlvbjogJzAuNXMgY29sb3InLFxyXG4gIH0sXHJcbiAgbGFiZWxGb2N1c2VkOiB7XHJcbiAgICBjb2xvcjogcGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgfSxcclxuICBlZGl0YWJsZToge1xyXG4gICAgcGFkZGluZzogc3BhY2luZygyKSxcclxuICAgIC8vIGJhY2tncm91bmQ6IHBhbGV0dGUuZ3JleVsxMDBdLFxyXG4gIH0sXHJcbiAgY2hhcmFjdGVyQ291bnRDb250YWluZXI6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgcmlnaHQ6IDMsXHJcbiAgICBib3R0b206IDMsXHJcbiAgICBmb250U2l6ZTogdHlwb2dyYXBoeS5jYXB0aW9uLmZvbnRTaXplLFxyXG4gICAgY29sb3I6IHBhbGV0dGUuZ3JleVs1MDBdLFxyXG4gICAgdHJhbnNpdGlvbjogJzAuNXMgY29sb3InLFxyXG4gIH0sXHJcbiAgY2hhcmFjdGVyQ291bnRDb250YWluZXJXYXJuaW5nOiB7XHJcbiAgICBjb2xvcjogeWVsbG93WzcwMF0sXHJcbiAgfSxcclxuICBjaGFyYWN0ZXJDb3VudENvbnRhaW5lckVycm9yOiB7XHJcbiAgICBjb2xvcjogcmVkWzcwMF0sXHJcbiAgfSxcclxuICByb290OiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCByZXNldEVkaXRvciA9IDxUIGV4dGVuZHMgTm9kZSA9IE5vZGU+KFxyXG4gIGVkaXRvcjogRWRpdG9yLFxyXG4gIG5vZGVzPzogVCB8IFRbXVxyXG4pID0+IHtcclxuICBjb25zdCB7IHNlbGVjdGlvbiB9ID0gZWRpdG9yO1xyXG5cclxuICBlZGl0b3IucmVtb3ZlTm9kZXMoe1xyXG4gICAgYXQ6IHsgYW5jaG9yOiBlZGl0b3Iuc3RhcnQoW10pLCBmb2N1czogZWRpdG9yLmVuZChbXSkgfSxcclxuICB9KTtcclxuXHJcbiAgaWYgKG5vZGVzKSBlZGl0b3IuaW5zZXJ0Tm9kZXMoTm9kZS5pc05vZGUobm9kZXMpID8gW25vZGVzXSA6IG5vZGVzKTtcclxuXHJcbiAgZWRpdG9yLnNlbGVjdChzZWxlY3Rpb24gPz8gZWRpdG9yLmVuZChbXSkpO1xyXG59O1xyXG5cclxuY29uc3QgYWxsSG90a2V5cyA9IHsgLi4uTUFSS19IT1RLRVlTIH07XHJcblxyXG50eXBlIFNsYXRlRWRpdG9yUHJvcHMgPSBTbGF0ZUVkaXRvckN1c3RvbVByb3BzO1xyXG5cclxuY29uc3QgU2xhdGVFZGl0b3I6IFJlYWN0LkZDPFNsYXRlRWRpdG9yUHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIG1pZ3JhdGlvbnMsXHJcbiAgICBleHRyYVRvb2xiYXJCdXR0b25zLFxyXG4gICAgdmVyc2lvbixcclxuICAgIHRvb2xiYXJCdXR0b25zID0gVG9vbGJhckJ1dHRvblR5cGVzLkZvbnRTaXplIHwgVG9vbGJhckJ1dHRvblR5cGVzLkFsaWdubWVudCxcclxuICAgIGhvdmVyQnV0dG9ucyA9IEhvdmVyQnV0dG9uVHlwZXMuQm9sZCB8XHJcbiAgICAgIEhvdmVyQnV0dG9uVHlwZXMuSXRhbGljIHxcclxuICAgICAgSG92ZXJCdXR0b25UeXBlcy5VbmRlcmxpbmUgfFxyXG4gICAgICBIb3ZlckJ1dHRvblR5cGVzLkNvbG9yLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgaGlkZVRvb2xiYXIsXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBlZGl0b3IgPSBSZWFjdC51c2VNZW1vKFxyXG4gICAgKCkgPT5cclxuICAgICAgd2l0aEhpc3RvcnkoXHJcbiAgICAgICAgd2l0aEh0bWwoXHJcbiAgICAgICAgICB3aXRoUXVvdGVzKCkoXHJcbiAgICAgICAgICAgIHdpdGhDb2xvcnMoXHJcbiAgICAgICAgICAgICAgd2l0aEZvbnRTaXplcygpKFxyXG4gICAgICAgICAgICAgICAgd2l0aExpc3RzKFxyXG4gICAgICAgICAgICAgICAgICB3aXRoSGVhZGluZ3MoKShcclxuICAgICAgICAgICAgICAgICAgICB3aXRoQWxpZ25tZW50cyhcclxuICAgICAgICAgICAgICAgICAgICAgIHdpdGhMaW5rcyh3aXRoRW1waGFzaXplKHdpdGhSZWFjdChjcmVhdGVFZGl0b3IoKSkpKVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIClcclxuICAgICAgKSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgbGV0IGFsbG93TmV3Q2hhciA9IHRydWU7XHJcbiAgbGV0IGNoYXJzID0gMDtcclxuICBsZXQgY2hhcnNMZWZ0ID0gMDtcclxuICBsZXQgcHJvZ3Jlc3MgPSAwO1xyXG4gIGlmIChwcm9wcy5tYXhDaGFycykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY2hhcnMgPSBFZGl0b3Iuc3RyaW5nKGVkaXRvciwge1xyXG4gICAgICAgIGFuY2hvcjogRWRpdG9yLnN0YXJ0KGVkaXRvciwgW10pLFxyXG4gICAgICAgIGZvY3VzOiBFZGl0b3IuZW5kKGVkaXRvciwgW10pLFxyXG4gICAgICB9KS5sZW5ndGg7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjaGFycyA9IDA7XHJcbiAgICB9XHJcbiAgICBjaGFyc0xlZnQgPSBwcm9wcy5tYXhDaGFycyAtIGNoYXJzO1xyXG4gICAgcHJvZ3Jlc3MgPSAoY2hhcnNMZWZ0IC8gcHJvcHMubWF4Q2hhcnMpICogMTAwO1xyXG4gICAgaWYgKGNoYXJzTGVmdCA9PT0gMCkge1xyXG4gICAgICBhbGxvd05ld0NoYXIgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGU8U2xhdGVWYWx1ZSB8IG51bGw+KHByb3BzLnZhbHVlKTtcclxuXHJcbiAgLy8gVGhpcyBpcyB0aGUgaW5pdGlhbCBjaGVjayBhbmQvb3IgbWlncmF0aW9uXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpc0RpcnR5ID0gZmFsc2U7XHJcbiAgICBsZXQgbmV3VmFsdWU6IFNsYXRlVmFsdWUgPSBwcm9wcy52YWx1ZTtcclxuICAgIGlmIChcclxuICAgICAgIXZhbHVlIHx8XHJcbiAgICAgICFBcnJheS5pc0FycmF5KHZhbHVlKSB8fFxyXG4gICAgICAhdmFsdWUuZXZlcnkobm9kZSA9PiBOb2RlLmlzTm9kZShub2RlKSlcclxuICAgICkge1xyXG4gICAgICBuZXdWYWx1ZSA9IHNsYXRlRW1wdHlWYWx1ZSgpO1xyXG4gICAgICBpc0RpcnR5ID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG1pZ3JhdGlvblJlc3VsdCA9IE1pZ3JhdG9yLm1pZ3JhdGVTdGF0ZShcclxuICAgICAgICB2ZXJzaW9uLFxyXG4gICAgICAgIHByb3BzLnZhbHVlLFxyXG4gICAgICAgIG1pZ3JhdGlvbnNcclxuICAgICAgKTtcclxuICAgICAgaXNEaXJ0eSA9IG1pZ3JhdGlvblJlc3VsdC5jaGFuZ2VkO1xyXG4gICAgICBuZXdWYWx1ZSA9IG1pZ3JhdGlvblJlc3VsdC5taWdyYXRlZFN0YXRlO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzRGlydHkpIHtcclxuICAgICAgcHJvcHMub25DaGFuZ2Uoe1xyXG4gICAgICAgIHZhbHVlOiBuZXdWYWx1ZSxcclxuICAgICAgICBpc1ZhbGlkOiBhbGxvd05ld0NoYXIsXHJcbiAgICAgICAgaXNEaXJ0eSxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodmFsdWUgIT09IG51bGwgJiYgcHJvcHMudmFsdWUgIT09IHZhbHVlKSB7XHJcbiAgICAgIHNldFZhbHVlKHByb3BzLnZhbHVlKTtcclxuICAgICAgcmVzZXRFZGl0b3IoZWRpdG9yLCBwcm9wcy52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW3Byb3BzLnZhbHVlXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICAodmFsOiBTbGF0ZVZhbHVlKSA9PiB7XHJcbiAgICAgIC8vIFRoaXMgbWlnaHQgcG9zc2libHkgYmUgc3R1cGlkIGJ1dCByaWdodCBub3csIGl0IHRyaWdnZXJzIG9uIGV2ZXJ5IGZvY3VzIHdoaWNoIGNhdXNlc1xyXG4gICAgICAvLyBwcm9ibGVtcyB3aXRoIHJlLXJlbmRlcmluZyBjb21wb25lbnRzIGFuZCBsb3NpbmcgZm9jdXMgaW4gbW9kYWxzIChsaW5rLCBjb2xvcilcclxuICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHZhbHVlKSAhPT0gSlNPTi5zdHJpbmdpZnkodmFsKSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlOiBTbGF0ZVZhbHVlID0gdmFsO1xyXG4gICAgICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICAgICAgICBwcm9wcy5vbkNoYW5nZSh7XHJcbiAgICAgICAgICB2YWx1ZTogbmV3VmFsdWUsXHJcbiAgICAgICAgICBpc1ZhbGlkOiBhbGxvd05ld0NoYXIsXHJcbiAgICAgICAgICBpc0RpcnR5OiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW3Byb3BzLm9uQ2hhbmdlLCB2YWx1ZV1cclxuICApO1xyXG4gIHJldHVybiB2YWx1ZSA/IChcclxuICAgIDxJbnB1dEdyb3VwIHRpdGxlPXtwcm9wcy50aXRsZX0+XHJcbiAgICAgIDxTbGF0ZSBlZGl0b3I9e2VkaXRvcn0gaW5pdGlhbFZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnc2xhdGUtZWRpdG9yJywgY2xhc3NOYW1lLCBjbGFzc2VzLnJvb3QpfT5cclxuICAgICAgICAgIHshaGlkZVRvb2xiYXIgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfT5cclxuICAgICAgICAgICAgICB7cHJvcHMubGFiZWwgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3NsYXRlLWVkaXRvcl9fbGFiZWwnLCBjbGFzc2VzLmxhYmVsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3NsYXRlLWVkaXRvcl9fbGFiZWwtLWFjdGl2ZSc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzc2VzLmxhYmVsRm9jdXNlZF06IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3Byb3BzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgICAgIHsodG9vbGJhckJ1dHRvbnMgJiBUb29sYmFyQnV0dG9uVHlwZXMuSGVhZGluZykgIT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGluZ0J1dHRvbkNvbXBhY3QgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7KHRvb2xiYXJCdXR0b25zICYgVG9vbGJhckJ1dHRvblR5cGVzLkZvbnRTaXplKSAhPT0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxGb250U2l6ZUJ1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHsodG9vbGJhckJ1dHRvbnMgJiBUb29sYmFyQnV0dG9uVHlwZXMuQ29sb3IpICE9PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgPENvbG9yQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgeyh0b29sYmFyQnV0dG9ucyAmIFRvb2xiYXJCdXR0b25UeXBlcy5BbGlnbm1lbnQpICE9PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgPEFsaWdubWVudEJ1dHRvbnMgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7KHRvb2xiYXJCdXR0b25zICYgVG9vbGJhckJ1dHRvblR5cGVzLkxpc3RzKSAhPT0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0QnV0dG9ucyAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHsodG9vbGJhckJ1dHRvbnMgJiBUb29sYmFyQnV0dG9uVHlwZXMuTGluaykgIT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8TGlua0J1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHsodG9vbGJhckJ1dHRvbnMgJiBUb29sYmFyQnV0dG9uVHlwZXMuUXVvdGUpICE9PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgPFF1b3RlQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdGlvblRvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICAgIHtlbmFibGVkID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIGZsZXhJdGVtPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgeyhob3ZlckJ1dHRvbnMgJiBIb3ZlckJ1dHRvblR5cGVzLkJvbGQpICE9PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVtcGhhc2l6ZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e0VtcGhhc2l6ZVR5cGVzLkJvbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFlbmFibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHsoaG92ZXJCdXR0b25zICYgSG92ZXJCdXR0b25UeXBlcy5JdGFsaWMpICE9PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVtcGhhc2l6ZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e0VtcGhhc2l6ZVR5cGVzLkl0YWxpY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWVuYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgeyhob3ZlckJ1dHRvbnMgJiBIb3ZlckJ1dHRvblR5cGVzLlVuZGVybGluZSkgIT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RW1waGFzaXplQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17RW1waGFzaXplVHlwZXMuVW5kZXJsaW5lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZW5hYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7KGhvdmVyQnV0dG9ucyAmIEhvdmVyQnV0dG9uVHlwZXMuTGluaykgIT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua0J1dHRvbiBkaXNhYmxlZD17IWVuYWJsZWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgeyhob3ZlckJ1dHRvbnMgJiBIb3ZlckJ1dHRvblR5cGVzLkNvbG9yKSAhPT0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xvckJ1dHRvbiBkaXNhYmxlZD17IWVuYWJsZWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Rpb25Ub29sYmFyPlxyXG4gICAgICAgICAgICAgICAge2V4dHJhVG9vbGJhckJ1dHRvbnN9XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8RWRpdGFibGVcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdzbGF0ZS1lZGl0YWJsZScsIGNsYXNzZXMuZWRpdGFibGUpfVxyXG4gICAgICAgICAgICByZW5kZXJMZWFmPXtyZW5kZXJMZWFmfVxyXG4gICAgICAgICAgICByZW5kZXJFbGVtZW50PXtyZW5kZXJFbGVtZW50fVxyXG4gICAgICAgICAgICBvbktleURvd249e2V2ZW50ID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIWFsbG93TmV3Q2hhcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoZXZlbnQua2V5Q29kZSA9PT0gOCB8fCBldmVudC5rZXlDb2RlID09PSA0NikpIHtcclxuICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBmb3IgKGNvbnN0IGhvdGtleSBpbiBhbGxIb3RrZXlzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNIb3RrZXkoaG90a2V5LCBldmVudCBhcyB1bmtub3duIGFzIEtleWJvYXJkRXZlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgIGVkaXRvci50b2dnbGVFbXBoYXNpcyhNQVJLX0hPVEtFWVNbaG90a2V5XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChpc0hvdGtleSgnc2hpZnQrZW50ZXInLCBldmVudCBhcyB1bmtub3duIGFzIEtleWJvYXJkRXZlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZWRpdG9yLmluc2VydFRleHQoJ1xcbicpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7cHJvcHMubWF4Q2hhcnMgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgJ3NsYXRlLWVkaXRvcl9fY2hhci1jb3VudCcsXHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzLmNoYXJhY3RlckNvdW50Q29udGFpbmVyLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBbY2xhc3Nlcy5jaGFyYWN0ZXJDb3VudENvbnRhaW5lcldhcm5pbmddOiBwcm9ncmVzcyA8PSAxMCxcclxuICAgICAgICAgICAgICAgICAgJ3NsYXRlLWVkaXRvcl9fY2hhci1jb3VudC0td2FybmluZyc6IHByb2dyZXNzIDw9IDEwLFxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3Nlcy5jaGFyYWN0ZXJDb3VudENvbnRhaW5lckVycm9yXTogcHJvZ3Jlc3MgPD0gMCxcclxuICAgICAgICAgICAgICAgICAgJ3NsYXRlLWVkaXRvcl9fY2hhci1jb3VudC0tZXJyb3InOiBwcm9ncmVzcyA8PSAwLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7Y2hhcnN9L3twcm9wcy5tYXhDaGFyc31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2ZhbHNlICYmIChcclxuICAgICAgICAgICAgPEhvdmVyaW5nVG9vbGJhcj5cclxuICAgICAgICAgICAgICB7KGhvdmVyQnV0dG9ucyAmIEhvdmVyQnV0dG9uVHlwZXMuQm9sZCkgIT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgPEVtcGhhc2l6ZUJ1dHRvbiB0eXBlPXtFbXBoYXNpemVUeXBlcy5Cb2xkfSAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgeyhob3ZlckJ1dHRvbnMgJiBIb3ZlckJ1dHRvblR5cGVzLkl0YWxpYykgIT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgPEVtcGhhc2l6ZUJ1dHRvbiB0eXBlPXtFbXBoYXNpemVUeXBlcy5JdGFsaWN9IC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7KGhvdmVyQnV0dG9ucyAmIEhvdmVyQnV0dG9uVHlwZXMuVW5kZXJsaW5lKSAhPT0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8RW1waGFzaXplQnV0dG9uIHR5cGU9e0VtcGhhc2l6ZVR5cGVzLlVuZGVybGluZX0gLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHsoaG92ZXJCdXR0b25zICYgSG92ZXJCdXR0b25UeXBlcy5MaW5rKSAhPT0gMCAmJiA8TGlua0J1dHRvbiAvPn1cclxuICAgICAgICAgICAgICB7KGhvdmVyQnV0dG9ucyAmIEhvdmVyQnV0dG9uVHlwZXMuQ29sb3IpICE9PSAwICYmIDxDb2xvckJ1dHRvbiAvPn1cclxuICAgICAgICAgICAgICB7cHJvcHMuZXh0cmFIb3ZlckJ1dHRvbnN9XHJcbiAgICAgICAgICAgIDwvSG92ZXJpbmdUb29sYmFyPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHsvKjxwcmU+e0pTT04uc3RyaW5naWZ5KHByb3BzLnN0YXRlLnNsYXRlU3RhdGUsIG51bGwsIDIpfTwvcHJlPiovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1NsYXRlPlxyXG4gICAgPC9JbnB1dEdyb3VwPlxyXG4gICkgOiBudWxsO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xhdGVFZGl0b3I7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImM0M2ZjM2ZhZmU3MjA5MGUzZGI2XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiTm9kZSIsImNyZWF0ZUVkaXRvciIsIkVkaXRvciIsIndpdGhGb250U2l6ZXMiLCJ3aXRoTGlzdHMiLCJ3aXRoSGVhZGluZ3MiLCJ3aXRoQWxpZ25tZW50cyIsIndpdGhMaW5rcyIsIndpdGhFbXBoYXNpemUiLCJNQVJLX0hPVEtFWVMiLCJFbXBoYXNpemVUeXBlcyIsIndpdGhSZWFjdCIsIlNsYXRlIiwiRWRpdGFibGUiLCJpc0hvdGtleSIsIkhvdmVyaW5nVG9vbGJhciIsIkZvbnRTaXplQnV0dG9uIiwiQWxpZ25tZW50QnV0dG9ucyIsIkVtcGhhc2l6ZUJ1dHRvbiIsImNsYXNzTmFtZXMiLCJJbnB1dEdyb3VwIiwid2l0aEhpc3RvcnkiLCJNaWdyYXRvciIsInNsYXRlRW1wdHlWYWx1ZSIsIndpdGhDb2xvcnMiLCJDb2xvckJ1dHRvbiIsIm1ha2VTdHlsZXMiLCJ3aXRoSHRtbCIsIndpdGhRdW90ZXMiLCJIZWFkaW5nQnV0dG9uQ29tcGFjdCIsIkxpc3RCdXR0b25zIiwiTGlua0J1dHRvbiIsIlF1b3RlQnV0dG9uIiwicmVuZGVyRWxlbWVudCIsInJlbmRlckxlYWYiLCJTZWxlY3Rpb25Ub29sYmFyIiwiRGl2aWRlciIsIkdyaWQiLCJ5ZWxsb3ciLCJyZWQiLCJUb29sYmFyQnV0dG9uVHlwZXMiLCJIb3ZlckJ1dHRvblR5cGVzIiwidXNlU3R5bGVzIiwiX3JlZiIsInNwYWNpbmciLCJwYWxldHRlIiwidHlwb2dyYXBoeSIsInRvb2xiYXIiLCJhbGlnbkl0ZW1zIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZCIsInBhcGVyIiwibGFiZWwiLCJkaXNwbGF5IiwicGFkZGluZyIsImZvbnRTaXplIiwidHJhbnNpdGlvbiIsImxhYmVsRm9jdXNlZCIsImNvbG9yIiwicHJpbWFyeSIsIm1haW4iLCJlZGl0YWJsZSIsImNoYXJhY3RlckNvdW50Q29udGFpbmVyIiwicG9zaXRpb24iLCJyaWdodCIsImJvdHRvbSIsImNhcHRpb24iLCJncmV5IiwiY2hhcmFjdGVyQ291bnRDb250YWluZXJXYXJuaW5nIiwiY2hhcmFjdGVyQ291bnRDb250YWluZXJFcnJvciIsInJvb3QiLCJyZXNldEVkaXRvciIsImVkaXRvciIsIm5vZGVzIiwic2VsZWN0aW9uIiwicmVtb3ZlTm9kZXMiLCJhdCIsImFuY2hvciIsInN0YXJ0IiwiZm9jdXMiLCJlbmQiLCJpbnNlcnROb2RlcyIsImlzTm9kZSIsInNlbGVjdCIsImFsbEhvdGtleXMiLCJfb2JqZWN0U3ByZWFkIiwiU2xhdGVFZGl0b3IiLCJwcm9wcyIsIm1pZ3JhdGlvbnMiLCJleHRyYVRvb2xiYXJCdXR0b25zIiwidmVyc2lvbiIsIl9wcm9wcyR0b29sYmFyQnV0dG9ucyIsInRvb2xiYXJCdXR0b25zIiwiRm9udFNpemUiLCJBbGlnbm1lbnQiLCJfcHJvcHMkaG92ZXJCdXR0b25zIiwiaG92ZXJCdXR0b25zIiwiQm9sZCIsIkl0YWxpYyIsIlVuZGVybGluZSIsIkNvbG9yIiwiY2xhc3NOYW1lIiwiaGlkZVRvb2xiYXIiLCJjbGFzc2VzIiwidXNlTWVtbyIsImFsbG93TmV3Q2hhciIsImNoYXJzIiwiY2hhcnNMZWZ0IiwicHJvZ3Jlc3MiLCJtYXhDaGFycyIsInN0cmluZyIsImxlbmd0aCIsImVycm9yIiwiX1JlYWN0JHVzZVN0YXRlIiwidXNlU3RhdGUiLCJ2YWx1ZSIsIl9SZWFjdCR1c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNldFZhbHVlIiwidXNlRWZmZWN0IiwiaXNEaXJ0eSIsIm5ld1ZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwiZXZlcnkiLCJub2RlIiwibWlncmF0aW9uUmVzdWx0IiwibWlncmF0ZVN0YXRlIiwiY2hhbmdlZCIsIm1pZ3JhdGVkU3RhdGUiLCJvbkNoYW5nZSIsImlzVmFsaWQiLCJ1c2VDYWxsYmFjayIsInZhbCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjcmVhdGVFbGVtZW50IiwidGl0bGUiLCJpbml0aWFsVmFsdWUiLCJfZGVmaW5lUHJvcGVydHkiLCJjb250YWluZXIiLCJIZWFkaW5nIiwiTGlzdHMiLCJMaW5rIiwiUXVvdGUiLCJlbmFibGVkIiwiRnJhZ21lbnQiLCJvcmllbnRhdGlvbiIsImZsZXhJdGVtIiwidHlwZSIsImRpc2FibGVkIiwib25LZXlEb3duIiwiZXZlbnQiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJob3RrZXkiLCJ0b2dnbGVFbXBoYXNpcyIsImluc2VydFRleHQiLCJleHRyYUhvdmVyQnV0dG9ucyIsIl9fc2lnbmF0dXJlX18iLCJfZGVmYXVsdCIsInJlYWN0SG90TG9hZGVyIiwicmVhY3RIb3RMb2FkZXJHbG9iYWwiLCJkZWZhdWx0IiwidW5kZWZpbmVkIiwicmVnaXN0ZXIiLCJsZWF2ZU1vZHVsZSIsIm1vZHVsZSJdLCJzb3VyY2VSb290IjoiIn0=