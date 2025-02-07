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
  slate__WEBPACK_IMPORTED_MODULE_29__.Editor.withoutNormalizing(editor, function () {
    // Remove all nodes
    editor.children = nodes !== null && nodes !== void 0 ? nodes : [];

    // Reset the selection to the start of the document
    slate__WEBPACK_IMPORTED_MODULE_29__.Transforms.select(editor, [0, 0]);

    // Normalize the editor state
    editor.onChange();
  });
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
/******/ 	__webpack_require__.h = () => ("2f28b75ef9824f473eb9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q04sRUFDQSxNQUFLLGlCQUNKekcsQ0FnQkMsQ0FDQSxDQUNHLENBQUMsR0FDWCxJQUFJO0FBQ1YsQ0FBQztBQUFDK0osYUFBQSxDQXBQSTdFLFdBQXVDO0VBQUEsUUFhM0J0QyxTQUFTO0FBQUE7QUFBQSxJQUFBb0gsUUFBQSxHQXlPWjlFLFdBQVc7QUFBMUIsaUVBQUE4RSxRQUFBO0FBQTJCO0FBQUE7RUFBQSxJQUFBQyxjQUFBLFVBQUFDLG9CQUFBLG1CQUFBQSxvQkFBQSxDQUFBQyxPQUFBLEdBQUFDLFNBQUE7RUFBQSxLQUFBSCxjQUFBO0lBQUE7RUFBQTtFQUFBQSxjQUFBLENBQUFJLFFBQUEsQ0FqVHJCekgsU0FBUztFQUFBcUgsY0FBQSxDQUFBSSxRQUFBLENBdUNUNUYsV0FBVztFQUFBd0YsY0FBQSxDQUFBSSxRQUFBLENBZ0JYckYsVUFBVTtFQUFBaUYsY0FBQSxDQUFBSSxRQUFBLENBSVZuRixXQUF1QztFQUFBK0UsY0FBQSxDQUFBSSxRQUFBLENBQUFMLFFBQUE7QUFBQTtBQUFBO0FBQUE7RUFBQSxJQUFBTSxXQUFBLFVBQUFKLG9CQUFBLG1CQUFBQSxvQkFBQSxDQUFBSSxXQUFBLEdBQUFGLFNBQUE7RUFBQUUsV0FBQSxJQUFBQSxXQUFBLENBQUFDLE1BQUE7QUFBQTs7Ozs7Ozs7VUM5STdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGd1ZXN0YmVsbC9yZWFjdC1wYWdlLXBsdWdpbnMvLi9zcmMvbGliL2NvbW1vbi9jb21wb25lbnRzL3NsYXRlRWRpdG9yL1NsYXRlRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9AZ3Vlc3RiZWxsL3JlYWN0LXBhZ2UtcGx1Z2lucy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOb2RlLCBjcmVhdGVFZGl0b3IsIEVkaXRvciwgVHJhbnNmb3JtcyB9IGZyb20gJ3NsYXRlJztcclxuaW1wb3J0IHsgd2l0aEZvbnRTaXplcyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvZm9udFNpemUvd2l0aEZvbnRTaXplcyc7XHJcbmltcG9ydCB7IHdpdGhMaXN0cyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvbGlzdHMvd2l0aExpc3RzJztcclxuaW1wb3J0IHsgd2l0aEhlYWRpbmdzIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9oZWFkaW5nL3dpdGhIZWFkaW5ncyc7XHJcbmltcG9ydCB7IHdpdGhBbGlnbm1lbnRzIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9hbGlnbm1lbnQvd2l0aEFsaWdubWVudHMnO1xyXG5pbXBvcnQgeyB3aXRoTGlua3MgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2xpbmtzL3dpdGhMaW5rcyc7XHJcbmltcG9ydCB7XHJcbiAgd2l0aEVtcGhhc2l6ZSxcclxuICBNQVJLX0hPVEtFWVMsXHJcbiAgRW1waGFzaXplVHlwZXMsXHJcbn0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9lbXBoYXNpemUnO1xyXG5pbXBvcnQgeyB3aXRoUmVhY3QsIFNsYXRlLCBFZGl0YWJsZSB9IGZyb20gJ3NsYXRlLXJlYWN0JztcclxuaW1wb3J0IGlzSG90a2V5IGZyb20gJ2lzLWhvdGtleSc7XHJcbmltcG9ydCB7IEhvdmVyaW5nVG9vbGJhciB9IGZyb20gJy4vSG92ZXJpbmdUb29sYmFyJztcclxuaW1wb3J0IEZvbnRTaXplQnV0dG9uIGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvZm9udFNpemUvRm9udFNpemVCdXR0b24nO1xyXG5pbXBvcnQgeyBBbGlnbm1lbnRCdXR0b25zIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9hbGlnbm1lbnQvQWxpZ25tZW50QnV0dG9ucyc7XHJcbmltcG9ydCB7IEVtcGhhc2l6ZUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvZW1waGFzaXplL0VtcGhhc2l6ZUJ1dHRvbic7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcclxuaW1wb3J0IElucHV0R3JvdXAgZnJvbSAnZ3Vlc3RiZWxsLWZvcm1zL2J1aWxkL2NvbXBvbmVudHMvaW5wdXRHcm91cCc7XHJcbmltcG9ydCB7IHdpdGhIaXN0b3J5IH0gZnJvbSAnc2xhdGUtaGlzdG9yeSc7XHJcbmltcG9ydCB7IFNsYXRlVmFsdWUgfSBmcm9tICcuLi8uLi90eXBlcy9zbGF0ZS9TbGF0ZVZhbHVlJztcclxuaW1wb3J0IHsgTWlncmF0b3IgfSBmcm9tICcuLi8uLi9zbGF0ZU1pZ3JhdGlvbnMvTWlncmF0b3InO1xyXG5pbXBvcnQgeyBNaWdyYXRpb24gfSBmcm9tICcuLi8uLi9zbGF0ZU1pZ3JhdGlvbnMvTWlncmF0aW9uJztcclxuaW1wb3J0IHsgc2xhdGVFbXB0eVZhbHVlIH0gZnJvbSAnLi9zbGF0ZUVtcHR5VmFsdWUnO1xyXG5pbXBvcnQgeyB3aXRoQ29sb3JzIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9jb2xvcic7XHJcbmltcG9ydCBDb2xvckJ1dHRvbiBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2NvbG9yL0NvbG9yQnV0dG9uJztcclxuaW1wb3J0IG1ha2VTdHlsZXMgZnJvbSAnQG11aS9zdHlsZXMvbWFrZVN0eWxlcyc7XHJcbmltcG9ydCB7IHdpdGhIdG1sIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9odG1sUGFzdGUvd2l0aEh0bWxQYXN0ZSc7XHJcbmltcG9ydCB7IHdpdGhRdW90ZXMgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL3F1b3RlJztcclxuaW1wb3J0IEhlYWRpbmdCdXR0b25Db21wYWN0IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvaGVhZGluZy9IZWFkaW5nQnV0dG9uQ29tcGFjdCc7XHJcbmltcG9ydCB7IExpc3RCdXR0b25zIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9saXN0cy9MaXN0QnV0dG9ucyc7XHJcbmltcG9ydCB7IExpbmtCdXR0b24gfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2xpbmtzL0xpbmtCdXR0b24nO1xyXG5pbXBvcnQgeyBRdW90ZUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvcXVvdGUvUXVvdGVCdXR0b24nO1xyXG5pbXBvcnQgeyByZW5kZXJFbGVtZW50LCByZW5kZXJMZWFmIH0gZnJvbSAnLi9Db21wb25lbnRzJztcclxuaW1wb3J0IHsgU2VsZWN0aW9uVG9vbGJhciB9IGZyb20gJy4vU2VsZWN0aW9uVG9vbGJhcic7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGl2aWRlci9EaXZpZGVyJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkL0dyaWQnO1xyXG5cclxuaW1wb3J0IHsgeWVsbG93LCByZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsL2NvbG9ycyc7XHJcblxyXG5leHBvcnQgdHlwZSBTbGF0ZUVkaXRvck9uQ2hhbmdlSGFuZGxlciA9ICh2YWw6IHtcclxuICB2YWx1ZTogU2xhdGVWYWx1ZTtcclxuICBpc0RpcnR5OiBib29sZWFuO1xyXG4gIGlzVmFsaWQ6IGJvb2xlYW47XHJcbn0pID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgZW51bSBUb29sYmFyQnV0dG9uVHlwZXMge1xyXG4gIExpbmsgPSAxLFxyXG4gIEhlYWRpbmcgPSAyLFxyXG4gIExpc3RzID0gNCxcclxuICBDb2xvciA9IDgsXHJcbiAgQWxpZ25tZW50ID0gMTYsXHJcbiAgUXVvdGUgPSAzMixcclxuICBGb250U2l6ZSA9IDY0LFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBIb3ZlckJ1dHRvblR5cGVzIHtcclxuICBCb2xkID0gMSxcclxuICBJdGFsaWMgPSAyLFxyXG4gIFVuZGVybGluZSA9IDQsXHJcbiAgTGluayA9IDgsXHJcbiAgQ29sb3IgPSAxNixcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbGF0ZUVkaXRvckN1c3RvbVByb3BzIHtcclxuICB2YWx1ZTogU2xhdGVWYWx1ZTtcclxuICBvbkNoYW5nZTogU2xhdGVFZGl0b3JPbkNoYW5nZUhhbmRsZXI7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG4gIGxhYmVsPzogSlNYLkVsZW1lbnQgfCBzdHJpbmc7XHJcbiAgdGl0bGU/OiBKU1guRWxlbWVudCB8IHN0cmluZztcclxuICBtYXhDaGFycz86IG51bWJlcjtcclxuICB2ZXJzaW9uPzogbnVtYmVyO1xyXG4gIG1pZ3JhdGlvbnM/OiBNaWdyYXRpb25bXTtcclxuICBleHRyYVRvb2xiYXJCdXR0b25zPzogSlNYLkVsZW1lbnQ7XHJcbiAgZXh0cmFIb3ZlckJ1dHRvbnM/OiBKU1guRWxlbWVudDtcclxuICB0b29sYmFyQnV0dG9ucz86IFRvb2xiYXJCdXR0b25UeXBlcztcclxuICBob3ZlckJ1dHRvbnM/OiBIb3ZlckJ1dHRvblR5cGVzO1xyXG4gIGhpZGVUb29sYmFyPzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoeyBzcGFjaW5nLCBwYWxldHRlLCB0eXBvZ3JhcGh5IH06IFRoZW1lKSA9PiAoe1xyXG4gIHRvb2xiYXI6IHtcclxuICAgIC8vIG1hcmdpbkJvdHRvbTogc3BhY2luZygzKSxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBwYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgfSxcclxuICBsYWJlbDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBwYWRkaW5nOiBzcGFjaW5nKCksXHJcbiAgICBmb250U2l6ZTogJzEuMnJlbScsXHJcbiAgICB0cmFuc2l0aW9uOiAnMC41cyBjb2xvcicsXHJcbiAgfSxcclxuICBsYWJlbEZvY3VzZWQ6IHtcclxuICAgIGNvbG9yOiBwYWxldHRlLnByaW1hcnkubWFpbixcclxuICB9LFxyXG4gIGVkaXRhYmxlOiB7XHJcbiAgICBwYWRkaW5nOiBzcGFjaW5nKDIpLFxyXG4gICAgLy8gYmFja2dyb3VuZDogcGFsZXR0ZS5ncmV5WzEwMF0sXHJcbiAgfSxcclxuICBjaGFyYWN0ZXJDb3VudENvbnRhaW5lcjoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICByaWdodDogMyxcclxuICAgIGJvdHRvbTogMyxcclxuICAgIGZvbnRTaXplOiB0eXBvZ3JhcGh5LmNhcHRpb24uZm9udFNpemUsXHJcbiAgICBjb2xvcjogcGFsZXR0ZS5ncmV5WzUwMF0sXHJcbiAgICB0cmFuc2l0aW9uOiAnMC41cyBjb2xvcicsXHJcbiAgfSxcclxuICBjaGFyYWN0ZXJDb3VudENvbnRhaW5lcldhcm5pbmc6IHtcclxuICAgIGNvbG9yOiB5ZWxsb3dbNzAwXSxcclxuICB9LFxyXG4gIGNoYXJhY3RlckNvdW50Q29udGFpbmVyRXJyb3I6IHtcclxuICAgIGNvbG9yOiByZWRbNzAwXSxcclxuICB9LFxyXG4gIHJvb3Q6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IHJlc2V0RWRpdG9yID0gPFQgZXh0ZW5kcyBOb2RlID0gTm9kZT4oXHJcbiAgZWRpdG9yOiBFZGl0b3IsXHJcbiAgbm9kZXM/OiBTbGF0ZVZhbHVlXHJcbikgPT4ge1xyXG4gIEVkaXRvci53aXRob3V0Tm9ybWFsaXppbmcoZWRpdG9yLCAoKSA9PiB7XHJcbiAgICAvLyBSZW1vdmUgYWxsIG5vZGVzXHJcbiAgICBlZGl0b3IuY2hpbGRyZW4gPSBub2RlcyA/PyBbXTtcclxuXHJcbiAgICAvLyBSZXNldCB0aGUgc2VsZWN0aW9uIHRvIHRoZSBzdGFydCBvZiB0aGUgZG9jdW1lbnRcclxuICAgIFRyYW5zZm9ybXMuc2VsZWN0KGVkaXRvciwgWzAsIDBdKTtcclxuXHJcbiAgICAvLyBOb3JtYWxpemUgdGhlIGVkaXRvciBzdGF0ZVxyXG4gICAgZWRpdG9yLm9uQ2hhbmdlKCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBhbGxIb3RrZXlzID0geyAuLi5NQVJLX0hPVEtFWVMgfTtcclxuXHJcbnR5cGUgU2xhdGVFZGl0b3JQcm9wcyA9IFNsYXRlRWRpdG9yQ3VzdG9tUHJvcHM7XHJcblxyXG5jb25zdCBTbGF0ZUVkaXRvcjogUmVhY3QuRkM8U2xhdGVFZGl0b3JQcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgbWlncmF0aW9ucyxcclxuICAgIGV4dHJhVG9vbGJhckJ1dHRvbnMsXHJcbiAgICB2ZXJzaW9uLFxyXG4gICAgdG9vbGJhckJ1dHRvbnMgPSBUb29sYmFyQnV0dG9uVHlwZXMuRm9udFNpemUgfCBUb29sYmFyQnV0dG9uVHlwZXMuQWxpZ25tZW50LFxyXG4gICAgaG92ZXJCdXR0b25zID0gSG92ZXJCdXR0b25UeXBlcy5Cb2xkIHxcclxuICAgICAgSG92ZXJCdXR0b25UeXBlcy5JdGFsaWMgfFxyXG4gICAgICBIb3ZlckJ1dHRvblR5cGVzLlVuZGVybGluZSB8XHJcbiAgICAgIEhvdmVyQnV0dG9uVHlwZXMuQ29sb3IsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICBoaWRlVG9vbGJhcixcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IGVkaXRvciA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAoKSA9PlxyXG4gICAgICB3aXRoSGlzdG9yeShcclxuICAgICAgICB3aXRoSHRtbChcclxuICAgICAgICAgIHdpdGhRdW90ZXMoKShcclxuICAgICAgICAgICAgd2l0aENvbG9ycyhcclxuICAgICAgICAgICAgICB3aXRoRm9udFNpemVzKCkoXHJcbiAgICAgICAgICAgICAgICB3aXRoTGlzdHMoXHJcbiAgICAgICAgICAgICAgICAgIHdpdGhIZWFkaW5ncygpKFxyXG4gICAgICAgICAgICAgICAgICAgIHdpdGhBbGlnbm1lbnRzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2l0aExpbmtzKHdpdGhFbXBoYXNpemUod2l0aFJlYWN0KGNyZWF0ZUVkaXRvcigpKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKVxyXG4gICAgICApLFxyXG4gICAgW11cclxuICApO1xyXG5cclxuICBsZXQgYWxsb3dOZXdDaGFyID0gdHJ1ZTtcclxuICBsZXQgY2hhcnMgPSAwO1xyXG4gIGxldCBjaGFyc0xlZnQgPSAwO1xyXG4gIGxldCBwcm9ncmVzcyA9IDA7XHJcbiAgaWYgKHByb3BzLm1heENoYXJzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjaGFycyA9IEVkaXRvci5zdHJpbmcoZWRpdG9yLCB7XHJcbiAgICAgICAgYW5jaG9yOiBFZGl0b3Iuc3RhcnQoZWRpdG9yLCBbXSksXHJcbiAgICAgICAgZm9jdXM6IEVkaXRvci5lbmQoZWRpdG9yLCBbXSksXHJcbiAgICAgIH0pLmxlbmd0aDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNoYXJzID0gMDtcclxuICAgIH1cclxuICAgIGNoYXJzTGVmdCA9IHByb3BzLm1heENoYXJzIC0gY2hhcnM7XHJcbiAgICBwcm9ncmVzcyA9IChjaGFyc0xlZnQgLyBwcm9wcy5tYXhDaGFycykgKiAxMDA7XHJcbiAgICBpZiAoY2hhcnNMZWZ0ID09PSAwKSB7XHJcbiAgICAgIGFsbG93TmV3Q2hhciA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZTxTbGF0ZVZhbHVlIHwgbnVsbD4ocHJvcHMudmFsdWUpO1xyXG5cclxuICAvLyBUaGlzIGlzIHRoZSBpbml0aWFsIGNoZWNrIGFuZC9vciBtaWdyYXRpb25cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGlzRGlydHkgPSBmYWxzZTtcclxuICAgIGxldCBuZXdWYWx1ZTogU2xhdGVWYWx1ZSA9IHByb3BzLnZhbHVlO1xyXG4gICAgaWYgKFxyXG4gICAgICAhdmFsdWUgfHxcclxuICAgICAgIUFycmF5LmlzQXJyYXkodmFsdWUpIHx8XHJcbiAgICAgICF2YWx1ZS5ldmVyeShub2RlID0+IE5vZGUuaXNOb2RlKG5vZGUpKVxyXG4gICAgKSB7XHJcbiAgICAgIG5ld1ZhbHVlID0gc2xhdGVFbXB0eVZhbHVlKCk7XHJcbiAgICAgIGlzRGlydHkgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbWlncmF0aW9uUmVzdWx0ID0gTWlncmF0b3IubWlncmF0ZVN0YXRlKFxyXG4gICAgICAgIHZlcnNpb24sXHJcbiAgICAgICAgcHJvcHMudmFsdWUsXHJcbiAgICAgICAgbWlncmF0aW9uc1xyXG4gICAgICApO1xyXG4gICAgICBpc0RpcnR5ID0gbWlncmF0aW9uUmVzdWx0LmNoYW5nZWQ7XHJcbiAgICAgIG5ld1ZhbHVlID0gbWlncmF0aW9uUmVzdWx0Lm1pZ3JhdGVkU3RhdGU7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNEaXJ0eSkge1xyXG4gICAgICBwcm9wcy5vbkNoYW5nZSh7XHJcbiAgICAgICAgdmFsdWU6IG5ld1ZhbHVlLFxyXG4gICAgICAgIGlzVmFsaWQ6IGFsbG93TmV3Q2hhcixcclxuICAgICAgICBpc0RpcnR5LFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiBwcm9wcy52YWx1ZSAhPT0gdmFsdWUpIHtcclxuICAgICAgc2V0VmFsdWUocHJvcHMudmFsdWUpO1xyXG4gICAgICByZXNldEVkaXRvcihlZGl0b3IsIHByb3BzLnZhbHVlKTtcclxuICAgIH1cclxuICB9LCBbcHJvcHMudmFsdWVdKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgICh2YWw6IFNsYXRlVmFsdWUpID0+IHtcclxuICAgICAgLy8gVGhpcyBtaWdodCBwb3NzaWJseSBiZSBzdHVwaWQgYnV0IHJpZ2h0IG5vdywgaXQgdHJpZ2dlcnMgb24gZXZlcnkgZm9jdXMgd2hpY2ggY2F1c2VzXHJcbiAgICAgIC8vIHByb2JsZW1zIHdpdGggcmUtcmVuZGVyaW5nIGNvbXBvbmVudHMgYW5kIGxvc2luZyBmb2N1cyBpbiBtb2RhbHMgKGxpbmssIGNvbG9yKVxyXG4gICAgICBpZiAoSlNPTi5zdHJpbmdpZnkodmFsdWUpICE9PSBKU09OLnN0cmluZ2lmeSh2YWwpKSB7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWU6IFNsYXRlVmFsdWUgPSB2YWw7XHJcbiAgICAgICAgc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gICAgICAgIHByb3BzLm9uQ2hhbmdlKHtcclxuICAgICAgICAgIHZhbHVlOiBuZXdWYWx1ZSxcclxuICAgICAgICAgIGlzVmFsaWQ6IGFsbG93TmV3Q2hhcixcclxuICAgICAgICAgIGlzRGlydHk6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbcHJvcHMub25DaGFuZ2UsIHZhbHVlXVxyXG4gICk7XHJcbiAgcmV0dXJuIHZhbHVlID8gKFxyXG4gICAgPElucHV0R3JvdXAgdGl0bGU9e3Byb3BzLnRpdGxlfT5cclxuICAgICAgPFNsYXRlIGVkaXRvcj17ZWRpdG9yfSBpbml0aWFsVmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdzbGF0ZS1lZGl0b3InLCBjbGFzc05hbWUsIGNsYXNzZXMucm9vdCl9PlxyXG4gICAgICAgICAgeyFoaWRlVG9vbGJhciAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9PlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5sYWJlbCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnc2xhdGUtZWRpdG9yX19sYWJlbCcsIGNsYXNzZXMubGFiZWwsIHtcclxuICAgICAgICAgICAgICAgICAgICAnc2xhdGUtZWRpdG9yX19sYWJlbC0tYWN0aXZlJzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzZXMubGFiZWxGb2N1c2VkXTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7cHJvcHMubGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICAgICAgeyh0b29sYmFyQnV0dG9ucyAmIFRvb2xiYXJCdXR0b25UeXBlcy5IZWFkaW5nKSAhPT0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxIZWFkaW5nQnV0dG9uQ29tcGFjdCAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHsodG9vbGJhckJ1dHRvbnMgJiBUb29sYmFyQnV0dG9uVHlwZXMuRm9udFNpemUpICE9PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgPEZvbnRTaXplQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgeyh0b29sYmFyQnV0dG9ucyAmIFRvb2xiYXJCdXR0b25UeXBlcy5Db2xvcikgIT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8Q29sb3JCdXR0b24gLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7KHRvb2xiYXJCdXR0b25zICYgVG9vbGJhckJ1dHRvblR5cGVzLkFsaWdubWVudCkgIT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8QWxpZ25tZW50QnV0dG9ucyAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHsodG9vbGJhckJ1dHRvbnMgJiBUb29sYmFyQnV0dG9uVHlwZXMuTGlzdHMpICE9PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgPExpc3RCdXR0b25zIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgeyh0b29sYmFyQnV0dG9ucyAmIFRvb2xiYXJCdXR0b25UeXBlcy5MaW5rKSAhPT0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgeyh0b29sYmFyQnV0dG9ucyAmIFRvb2xiYXJCdXR0b25UeXBlcy5RdW90ZSkgIT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8UXVvdGVCdXR0b24gLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0aW9uVG9vbGJhcj5cclxuICAgICAgICAgICAgICAgICAge2VuYWJsZWQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgZmxleEl0ZW09e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7KGhvdmVyQnV0dG9ucyAmIEhvdmVyQnV0dG9uVHlwZXMuQm9sZCkgIT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RW1waGFzaXplQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17RW1waGFzaXplVHlwZXMuQm9sZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWVuYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgeyhob3ZlckJ1dHRvbnMgJiBIb3ZlckJ1dHRvblR5cGVzLkl0YWxpYykgIT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RW1waGFzaXplQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17RW1waGFzaXplVHlwZXMuSXRhbGljfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZW5hYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7KGhvdmVyQnV0dG9ucyAmIEhvdmVyQnV0dG9uVHlwZXMuVW5kZXJsaW5lKSAhPT0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFbXBoYXNpemVCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtFbXBoYXNpemVUeXBlcy5VbmRlcmxpbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFlbmFibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHsoaG92ZXJCdXR0b25zICYgSG92ZXJCdXR0b25UeXBlcy5MaW5rKSAhPT0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rQnV0dG9uIGRpc2FibGVkPXshZW5hYmxlZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7KGhvdmVyQnV0dG9ucyAmIEhvdmVyQnV0dG9uVHlwZXMuQ29sb3IpICE9PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbG9yQnV0dG9uIGRpc2FibGVkPXshZW5hYmxlZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdGlvblRvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICB7ZXh0cmFUb29sYmFyQnV0dG9uc31cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxFZGl0YWJsZVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3NsYXRlLWVkaXRhYmxlJywgY2xhc3Nlcy5lZGl0YWJsZSl9XHJcbiAgICAgICAgICAgIHJlbmRlckxlYWY9e3JlbmRlckxlYWZ9XHJcbiAgICAgICAgICAgIHJlbmRlckVsZW1lbnQ9e3JlbmRlckVsZW1lbnR9XHJcbiAgICAgICAgICAgIG9uS2V5RG93bj17ZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICghYWxsb3dOZXdDaGFyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShldmVudC5rZXlDb2RlID09PSA4IHx8IGV2ZW50LmtleUNvZGUgPT09IDQ2KSkge1xyXG4gICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGZvciAoY29uc3QgaG90a2V5IGluIGFsbEhvdGtleXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0hvdGtleShob3RrZXksIGV2ZW50IGFzIHVua25vd24gYXMgS2V5Ym9hcmRFdmVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgZWRpdG9yLnRvZ2dsZUVtcGhhc2lzKE1BUktfSE9US0VZU1tob3RrZXldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKGlzSG90a2V5KCdzaGlmdCtlbnRlcicsIGV2ZW50IGFzIHVua25vd24gYXMgS2V5Ym9hcmRFdmVudCkpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlZGl0b3IuaW5zZXJ0VGV4dCgnXFxuJyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtwcm9wcy5tYXhDaGFycyAmJiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAnc2xhdGUtZWRpdG9yX19jaGFyLWNvdW50JyxcclxuICAgICAgICAgICAgICAgIGNsYXNzZXMuY2hhcmFjdGVyQ291bnRDb250YWluZXIsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzc2VzLmNoYXJhY3RlckNvdW50Q29udGFpbmVyV2FybmluZ106IHByb2dyZXNzIDw9IDEwLFxyXG4gICAgICAgICAgICAgICAgICAnc2xhdGUtZWRpdG9yX19jaGFyLWNvdW50LS13YXJuaW5nJzogcHJvZ3Jlc3MgPD0gMTAsXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzc2VzLmNoYXJhY3RlckNvdW50Q29udGFpbmVyRXJyb3JdOiBwcm9ncmVzcyA8PSAwLFxyXG4gICAgICAgICAgICAgICAgICAnc2xhdGUtZWRpdG9yX19jaGFyLWNvdW50LS1lcnJvcic6IHByb2dyZXNzIDw9IDAsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtjaGFyc30ve3Byb3BzLm1heENoYXJzfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7ZmFsc2UgJiYgKFxyXG4gICAgICAgICAgICA8SG92ZXJpbmdUb29sYmFyPlxyXG4gICAgICAgICAgICAgIHsoaG92ZXJCdXR0b25zICYgSG92ZXJCdXR0b25UeXBlcy5Cb2xkKSAhPT0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8RW1waGFzaXplQnV0dG9uIHR5cGU9e0VtcGhhc2l6ZVR5cGVzLkJvbGR9IC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7KGhvdmVyQnV0dG9ucyAmIEhvdmVyQnV0dG9uVHlwZXMuSXRhbGljKSAhPT0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8RW1waGFzaXplQnV0dG9uIHR5cGU9e0VtcGhhc2l6ZVR5cGVzLkl0YWxpY30gLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHsoaG92ZXJCdXR0b25zICYgSG92ZXJCdXR0b25UeXBlcy5VbmRlcmxpbmUpICE9PSAwICYmIChcclxuICAgICAgICAgICAgICAgIDxFbXBoYXNpemVCdXR0b24gdHlwZT17RW1waGFzaXplVHlwZXMuVW5kZXJsaW5lfSAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgeyhob3ZlckJ1dHRvbnMgJiBIb3ZlckJ1dHRvblR5cGVzLkxpbmspICE9PSAwICYmIDxMaW5rQnV0dG9uIC8+fVxyXG4gICAgICAgICAgICAgIHsoaG92ZXJCdXR0b25zICYgSG92ZXJCdXR0b25UeXBlcy5Db2xvcikgIT09IDAgJiYgPENvbG9yQnV0dG9uIC8+fVxyXG4gICAgICAgICAgICAgIHtwcm9wcy5leHRyYUhvdmVyQnV0dG9uc31cclxuICAgICAgICAgICAgPC9Ib3ZlcmluZ1Rvb2xiYXI+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgey8qPHByZT57SlNPTi5zdHJpbmdpZnkocHJvcHMuc3RhdGUuc2xhdGVTdGF0ZSwgbnVsbCwgMil9PC9wcmU+Ki99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvU2xhdGU+XHJcbiAgICA8L0lucHV0R3JvdXA+XHJcbiAgKSA6IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGF0ZUVkaXRvcjtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMmYyOGI3NWVmOTgyNGY0NzNlYjlcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJOb2RlIiwiY3JlYXRlRWRpdG9yIiwiRWRpdG9yIiwiVHJhbnNmb3JtcyIsIndpdGhGb250U2l6ZXMiLCJ3aXRoTGlzdHMiLCJ3aXRoSGVhZGluZ3MiLCJ3aXRoQWxpZ25tZW50cyIsIndpdGhMaW5rcyIsIndpdGhFbXBoYXNpemUiLCJNQVJLX0hPVEtFWVMiLCJFbXBoYXNpemVUeXBlcyIsIndpdGhSZWFjdCIsIlNsYXRlIiwiRWRpdGFibGUiLCJpc0hvdGtleSIsIkhvdmVyaW5nVG9vbGJhciIsIkZvbnRTaXplQnV0dG9uIiwiQWxpZ25tZW50QnV0dG9ucyIsIkVtcGhhc2l6ZUJ1dHRvbiIsImNsYXNzTmFtZXMiLCJJbnB1dEdyb3VwIiwid2l0aEhpc3RvcnkiLCJNaWdyYXRvciIsInNsYXRlRW1wdHlWYWx1ZSIsIndpdGhDb2xvcnMiLCJDb2xvckJ1dHRvbiIsIm1ha2VTdHlsZXMiLCJ3aXRoSHRtbCIsIndpdGhRdW90ZXMiLCJIZWFkaW5nQnV0dG9uQ29tcGFjdCIsIkxpc3RCdXR0b25zIiwiTGlua0J1dHRvbiIsIlF1b3RlQnV0dG9uIiwicmVuZGVyRWxlbWVudCIsInJlbmRlckxlYWYiLCJTZWxlY3Rpb25Ub29sYmFyIiwiRGl2aWRlciIsIkdyaWQiLCJ5ZWxsb3ciLCJyZWQiLCJUb29sYmFyQnV0dG9uVHlwZXMiLCJIb3ZlckJ1dHRvblR5cGVzIiwidXNlU3R5bGVzIiwiX3JlZiIsInNwYWNpbmciLCJwYWxldHRlIiwidHlwb2dyYXBoeSIsInRvb2xiYXIiLCJhbGlnbkl0ZW1zIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZCIsInBhcGVyIiwibGFiZWwiLCJkaXNwbGF5IiwicGFkZGluZyIsImZvbnRTaXplIiwidHJhbnNpdGlvbiIsImxhYmVsRm9jdXNlZCIsImNvbG9yIiwicHJpbWFyeSIsIm1haW4iLCJlZGl0YWJsZSIsImNoYXJhY3RlckNvdW50Q29udGFpbmVyIiwicG9zaXRpb24iLCJyaWdodCIsImJvdHRvbSIsImNhcHRpb24iLCJncmV5IiwiY2hhcmFjdGVyQ291bnRDb250YWluZXJXYXJuaW5nIiwiY2hhcmFjdGVyQ291bnRDb250YWluZXJFcnJvciIsInJvb3QiLCJyZXNldEVkaXRvciIsImVkaXRvciIsIm5vZGVzIiwid2l0aG91dE5vcm1hbGl6aW5nIiwiY2hpbGRyZW4iLCJzZWxlY3QiLCJvbkNoYW5nZSIsImFsbEhvdGtleXMiLCJfb2JqZWN0U3ByZWFkIiwiU2xhdGVFZGl0b3IiLCJwcm9wcyIsIm1pZ3JhdGlvbnMiLCJleHRyYVRvb2xiYXJCdXR0b25zIiwidmVyc2lvbiIsIl9wcm9wcyR0b29sYmFyQnV0dG9ucyIsInRvb2xiYXJCdXR0b25zIiwiRm9udFNpemUiLCJBbGlnbm1lbnQiLCJfcHJvcHMkaG92ZXJCdXR0b25zIiwiaG92ZXJCdXR0b25zIiwiQm9sZCIsIkl0YWxpYyIsIlVuZGVybGluZSIsIkNvbG9yIiwiY2xhc3NOYW1lIiwiaGlkZVRvb2xiYXIiLCJjbGFzc2VzIiwidXNlTWVtbyIsImFsbG93TmV3Q2hhciIsImNoYXJzIiwiY2hhcnNMZWZ0IiwicHJvZ3Jlc3MiLCJtYXhDaGFycyIsInN0cmluZyIsImFuY2hvciIsInN0YXJ0IiwiZm9jdXMiLCJlbmQiLCJsZW5ndGgiLCJlcnJvciIsIl9SZWFjdCR1c2VTdGF0ZSIsInVzZVN0YXRlIiwidmFsdWUiLCJfUmVhY3QkdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzZXRWYWx1ZSIsInVzZUVmZmVjdCIsImlzRGlydHkiLCJuZXdWYWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsImV2ZXJ5Iiwibm9kZSIsImlzTm9kZSIsIm1pZ3JhdGlvblJlc3VsdCIsIm1pZ3JhdGVTdGF0ZSIsImNoYW5nZWQiLCJtaWdyYXRlZFN0YXRlIiwiaXNWYWxpZCIsInVzZUNhbGxiYWNrIiwidmFsIiwiSlNPTiIsInN0cmluZ2lmeSIsImNyZWF0ZUVsZW1lbnQiLCJ0aXRsZSIsImluaXRpYWxWYWx1ZSIsIl9kZWZpbmVQcm9wZXJ0eSIsImNvbnRhaW5lciIsIkhlYWRpbmciLCJMaXN0cyIsIkxpbmsiLCJRdW90ZSIsImVuYWJsZWQiLCJGcmFnbWVudCIsIm9yaWVudGF0aW9uIiwiZmxleEl0ZW0iLCJ0eXBlIiwiZGlzYWJsZWQiLCJvbktleURvd24iLCJldmVudCIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsImhvdGtleSIsInRvZ2dsZUVtcGhhc2lzIiwiaW5zZXJ0VGV4dCIsImV4dHJhSG92ZXJCdXR0b25zIiwiX19zaWduYXR1cmVfXyIsIl9kZWZhdWx0IiwicmVhY3RIb3RMb2FkZXIiLCJyZWFjdEhvdExvYWRlckdsb2JhbCIsImRlZmF1bHQiLCJ1bmRlZmluZWQiLCJyZWdpc3RlciIsImxlYXZlTW9kdWxlIiwibW9kdWxlIl0sInNvdXJjZVJvb3QiOiIifQ==