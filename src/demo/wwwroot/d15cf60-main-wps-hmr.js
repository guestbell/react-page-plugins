webpackHotUpdate("main",{

/***/ "./src/lib/common/components/slateEditor/SlateEditor.tsx":
/*!***************************************************************!*\
  !*** ./src/lib/common/components/slateEditor/SlateEditor.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var _slate_Controls_SlateDefaultControls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../slate/Controls/SlateDefaultControls */ "./src/lib/slate/Controls/SlateDefaultControls.tsx");
/* harmony import */ var _slate_Controls_hoveringToolbar_HoveringToolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../slate/Controls/hoveringToolbar/HoveringToolbar */ "./src/lib/slate/Controls/hoveringToolbar/HoveringToolbar.tsx");
/* harmony import */ var _slate_plugins_heading_HeadingButtonCompact__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../slate/plugins/heading/HeadingButtonCompact */ "./src/lib/slate/plugins/heading/HeadingButtonCompact.tsx");
/* harmony import */ var _slate_plugins_fontSize_FontSizeButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../slate/plugins/fontSize/FontSizeButton */ "./src/lib/slate/plugins/fontSize/FontSizeButton.tsx");
/* harmony import */ var _slate_plugins_alignment_AlignmentButtons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../slate/plugins/alignment/AlignmentButtons */ "./src/lib/slate/plugins/alignment/AlignmentButtons.tsx");
/* harmony import */ var _slate_plugins_lists_ListButtons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../slate/plugins/lists/ListButtons */ "./src/lib/slate/plugins/lists/ListButtons.tsx");
/* harmony import */ var _slate_plugins_links_LinkButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../slate/plugins/links/LinkButton */ "./src/lib/slate/plugins/links/LinkButton.tsx");
/* harmony import */ var _slate_plugins_emphasize_EmphasizeButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../slate/plugins/emphasize/EmphasizeButton */ "./src/lib/slate/plugins/emphasize/EmphasizeButton.tsx");
/* harmony import */ var _material_ui_core_styles_createStyles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/styles/createStyles */ "./node_modules/@material-ui/core/styles/createStyles.js");
/* harmony import */ var _material_ui_core_styles_createStyles__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_createStyles__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_styles_withStyles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/styles/withStyles */ "./node_modules/@material-ui/styles/esm/withStyles/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var guestbell_forms_build_components_inputGroup__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! guestbell-forms/build/components/inputGroup */ "./node_modules/guestbell-forms/build/components/inputGroup/index.js");
/* harmony import */ var guestbell_forms_build_components_inputGroup__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(guestbell_forms_build_components_inputGroup__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/colors/yellow */ "./node_modules/@material-ui/core/colors/yellow.js");
/* harmony import */ var _material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/colors/red */ "./node_modules/@material-ui/core/colors/red.js");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! slate-history */ "./node_modules/slate-history/dist/index.es.js");
/* harmony import */ var _slateMigrations_Migrator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../slateMigrations/Migrator */ "./src/lib/common/slateMigrations/Migrator.ts");
/* harmony import */ var _slateEmptyValue__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./slateEmptyValue */ "./src/lib/common/components/slateEditor/slateEmptyValue.ts");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





























var styles = function styles(_ref) {
  var spacing = _ref.spacing,
      palette = _ref.palette,
      typography = _ref.typography;
  return _material_ui_core_styles_createStyles__WEBPACK_IMPORTED_MODULE_18___default()({
    toolbar: {
      display: 'flex',
      alignItems: 'center'
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
      background: palette.grey[100]
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
      color: _material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_22___default.a[700]
    },
    characterCountContainerError: {
      color: _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_23___default.a[700]
    },
    root: {
      position: 'relative'
    }
  });
};

var allHotkeys = _objectSpread({}, _slate_plugins_emphasize__WEBPACK_IMPORTED_MODULE_7__["MARK_HOTKEYS"]);

var SlateEditor = function SlateEditor(props) {
  var _classNames2;

  var classes = props.classes,
      migrations = props.migrations;
  var editor = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](Object(slate_history__WEBPACK_IMPORTED_MODULE_24__["withHistory"])(Object(_slate_plugins_fontSize_withFontSizes__WEBPACK_IMPORTED_MODULE_2__["withFontSizes"])()(Object(_slate_plugins_lists_withLists__WEBPACK_IMPORTED_MODULE_3__["withLists"])(Object(_slate_plugins_heading_withHeadings__WEBPACK_IMPORTED_MODULE_4__["withHeadings"])()(Object(_slate_plugins_alignment_withAlignments__WEBPACK_IMPORTED_MODULE_5__["withAlignments"])(Object(_slate_plugins_links_withLinks__WEBPACK_IMPORTED_MODULE_6__["withLinks"])(Object(_slate_plugins_emphasize__WEBPACK_IMPORTED_MODULE_7__["withEmphasize"])(Object(slate_react__WEBPACK_IMPORTED_MODULE_8__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_1__["createEditor"])()))))))))).current;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      hasFocus = _React$useState2[0],
      setHasFocus = _React$useState2[1];

  var onFocus = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](function () {
    return setHasFocus(true);
  }).current;
  var onBlur = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](function () {
    return setHasFocus(false);
  }).current;
  var allowNewChar = true;
  var chars = 0;
  var charsLeft = 0;
  var progress = 0;

  if (props.maxChars) {
    try {
      chars = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].text(editor, {
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

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      selection = _React$useState4[0],
      setSelection = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      value = _React$useState6[0],
      setValue = _React$useState6[1]; // This is the initial check and/or migration


  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    var isDirty = false;
    var newValue = props.value;

    if (!props.value || !props.value.data || !Array.isArray(props.value.data) || !props.value.data.every(function (node) {
      return slate__WEBPACK_IMPORTED_MODULE_1__["Node"].isNode(node);
    })) {
      newValue = Object(_slateEmptyValue__WEBPACK_IMPORTED_MODULE_26__["slateEmptyValue"])();
    } else {
      var migrationResult = _slateMigrations_Migrator__WEBPACK_IMPORTED_MODULE_25__["Migrator"].migrateState(props.value, migrations);
      isDirty = migrationResult.changed;
      newValue = migrationResult.migratedState;
    }

    props.onChange({
      value: newValue,
      isValid: allowNewChar,
      isDirty: isDirty
    });
    setValue(newValue);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    if (value !== null && props.value !== value) {
      setValue(props.value);
      setSelection(null);
    }
  }, [props.value]);
  var onChange = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](function (val, s) {
    var newValue = _objectSpread({}, props.value, {
      data: val
    });

    setValue(newValue);
    setSelection(s);
    props.onChange({
      value: newValue,
      isValid: allowNewChar,
      isDirty: true
    });
  }).current;
  return value && value.data && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](guestbell_forms_build_components_inputGroup__WEBPACK_IMPORTED_MODULE_21___default.a, {
    title: props.title
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](slate_react__WEBPACK_IMPORTED_MODULE_8__["Slate"], {
    editor: editor,
    value: value.data,
    selection: selection,
    onChange: onChange
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_20___default()('slate-editor', classes.root)
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classes.toolbar
  }, props.label && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_20___default()('slate-editor__label', classes.label, _defineProperty({
      'slate-editor__label--active': hasFocus
    }, classes.labelFocused, hasFocus))
  }, props.label), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_heading_HeadingButtonCompact__WEBPACK_IMPORTED_MODULE_12__["default"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_fontSize_FontSizeButton__WEBPACK_IMPORTED_MODULE_13__["default"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_alignment_AlignmentButtons__WEBPACK_IMPORTED_MODULE_14__["AlignmentButtons"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_lists_ListButtons__WEBPACK_IMPORTED_MODULE_15__["ListButtons"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_links_LinkButton__WEBPACK_IMPORTED_MODULE_16__["LinkButton"], null)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](slate_react__WEBPACK_IMPORTED_MODULE_8__["Editable"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_20___default()(classes.editable),
    renderLeaf: _slate_Controls_SlateDefaultControls__WEBPACK_IMPORTED_MODULE_10__["renderLeaf"],
    renderElement: _slate_Controls_SlateDefaultControls__WEBPACK_IMPORTED_MODULE_10__["renderElement"],
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
          editor.exec({
            type: _slate_plugins_emphasize__WEBPACK_IMPORTED_MODULE_7__["EmphasizeCommands"].ToggleEmphasize,
            mark: {
              type: _slate_plugins_emphasize__WEBPACK_IMPORTED_MODULE_7__["MARK_HOTKEYS"][hotkey]
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
    },
    onFocus: onFocus,
    onBlur: onBlur
  }), props.maxChars && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_20___default()('slate-editor__char-count', classes.characterCountContainer, (_classNames2 = {}, _defineProperty(_classNames2, classes.characterCountContainerWarning, progress <= 10), _defineProperty(_classNames2, 'slate-editor__char-count--warning', progress <= 10), _defineProperty(_classNames2, classes.characterCountContainerError, progress <= 0), _defineProperty(_classNames2, 'slate-editor__char-count--error', progress <= 0), _classNames2))
  }, chars, "/", props.maxChars), editor.selection && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_Controls_hoveringToolbar_HoveringToolbar__WEBPACK_IMPORTED_MODULE_11__["HoveringToolbar"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_emphasize_EmphasizeButton__WEBPACK_IMPORTED_MODULE_17__["EmphasizeButton"], {
    type: _slate_plugins_emphasize__WEBPACK_IMPORTED_MODULE_7__["EmphasizeTypes"].Bold
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_emphasize_EmphasizeButton__WEBPACK_IMPORTED_MODULE_17__["EmphasizeButton"], {
    type: _slate_plugins_emphasize__WEBPACK_IMPORTED_MODULE_7__["EmphasizeTypes"].Italic
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_emphasize_EmphasizeButton__WEBPACK_IMPORTED_MODULE_17__["EmphasizeButton"], {
    type: _slate_plugins_emphasize__WEBPACK_IMPORTED_MODULE_7__["EmphasizeTypes"].Underline
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_links_LinkButton__WEBPACK_IMPORTED_MODULE_16__["LinkButton"], null)))));
};

__signature__(SlateEditor, "useRef{}\nuseState{[hasFocus, setHasFocus](false)}\nuseRef{}\nuseRef{}\nuseState{[selection, setSelection](null)}\nuseState{[value, setValue](null)}\nuseEffect{}\nuseEffect{}\nuseRef{}");

var _default = Object(_material_ui_styles_withStyles__WEBPACK_IMPORTED_MODULE_19__["default"])(styles)(SlateEditor);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\slateEditor\\SlateEditor.tsx");
  reactHotLoader.register(allHotkeys, "allHotkeys", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\slateEditor\\SlateEditor.tsx");
  reactHotLoader.register(SlateEditor, "SlateEditor", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\slateEditor\\SlateEditor.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\slateEditor\\SlateEditor.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbW1vbi9jb21wb25lbnRzL3NsYXRlRWRpdG9yL1NsYXRlRWRpdG9yLnRzeCJdLCJuYW1lcyI6WyJzdHlsZXMiLCJzcGFjaW5nIiwicGFsZXR0ZSIsInR5cG9ncmFwaHkiLCJjcmVhdGVTdHlsZXMiLCJ0b29sYmFyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJsYWJlbCIsInBhZGRpbmciLCJmb250U2l6ZSIsInRyYW5zaXRpb24iLCJsYWJlbEZvY3VzZWQiLCJjb2xvciIsInByaW1hcnkiLCJtYWluIiwiZWRpdGFibGUiLCJiYWNrZ3JvdW5kIiwiZ3JleSIsImNoYXJhY3RlckNvdW50Q29udGFpbmVyIiwicG9zaXRpb24iLCJyaWdodCIsImJvdHRvbSIsImNhcHRpb24iLCJjaGFyYWN0ZXJDb3VudENvbnRhaW5lcldhcm5pbmciLCJ5ZWxsb3ciLCJjaGFyYWN0ZXJDb3VudENvbnRhaW5lckVycm9yIiwicmVkIiwicm9vdCIsImFsbEhvdGtleXMiLCJNQVJLX0hPVEtFWVMiLCJTbGF0ZUVkaXRvciIsInByb3BzIiwiY2xhc3NlcyIsIm1pZ3JhdGlvbnMiLCJlZGl0b3IiLCJSZWFjdCIsIndpdGhIaXN0b3J5Iiwid2l0aEZvbnRTaXplcyIsIndpdGhMaXN0cyIsIndpdGhIZWFkaW5ncyIsIndpdGhBbGlnbm1lbnRzIiwid2l0aExpbmtzIiwid2l0aEVtcGhhc2l6ZSIsIndpdGhSZWFjdCIsImNyZWF0ZUVkaXRvciIsImN1cnJlbnQiLCJoYXNGb2N1cyIsInNldEhhc0ZvY3VzIiwib25Gb2N1cyIsIm9uQmx1ciIsImFsbG93TmV3Q2hhciIsImNoYXJzIiwiY2hhcnNMZWZ0IiwicHJvZ3Jlc3MiLCJtYXhDaGFycyIsIkVkaXRvciIsInRleHQiLCJhbmNob3IiLCJzdGFydCIsImZvY3VzIiwiZW5kIiwibGVuZ3RoIiwiZXJyb3IiLCJzZWxlY3Rpb24iLCJzZXRTZWxlY3Rpb24iLCJ2YWx1ZSIsInNldFZhbHVlIiwiaXNEaXJ0eSIsIm5ld1ZhbHVlIiwiZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsImV2ZXJ5Iiwibm9kZSIsIk5vZGUiLCJpc05vZGUiLCJzbGF0ZUVtcHR5VmFsdWUiLCJtaWdyYXRpb25SZXN1bHQiLCJNaWdyYXRvciIsIm1pZ3JhdGVTdGF0ZSIsImNoYW5nZWQiLCJtaWdyYXRlZFN0YXRlIiwib25DaGFuZ2UiLCJpc1ZhbGlkIiwidmFsIiwicyIsInRpdGxlIiwiY2xhc3NOYW1lcyIsInJlbmRlckxlYWYiLCJyZW5kZXJFbGVtZW50IiwiZXZlbnQiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJob3RrZXkiLCJpc0hvdGtleSIsImV4ZWMiLCJ0eXBlIiwiRW1waGFzaXplQ29tbWFuZHMiLCJUb2dnbGVFbXBoYXNpemUiLCJtYXJrIiwiRW1waGFzaXplVHlwZXMiLCJCb2xkIiwiSXRhbGljIiwiVW5kZXJsaW5lIiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBa0JBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsTUFBWUMsT0FBWixRQUFZQSxPQUFaO0FBQUEsTUFBcUJDLFVBQXJCLFFBQXFCQSxVQUFyQjtBQUFBLFNBQ2JDLDZFQUFZLENBQUM7QUFDWEMsV0FBTyxFQUFFO0FBQ1BDLGFBQU8sRUFBRSxNQURGO0FBRVBDLGdCQUFVLEVBQUU7QUFGTCxLQURFO0FBS1hDLFNBQUssRUFBRTtBQUNMRixhQUFPLEVBQUUsTUFESjtBQUVMQyxnQkFBVSxFQUFFLFFBRlA7QUFHTEUs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RSxXIiwiZmlsZSI6ImQxNWNmNjAtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOb2RlLCBjcmVhdGVFZGl0b3IsIEVkaXRvciwgUmFuZ2UgfSBmcm9tICdzbGF0ZSc7XHJcbmltcG9ydCB7IHdpdGhGb250U2l6ZXMgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2ZvbnRTaXplL3dpdGhGb250U2l6ZXMnO1xyXG5pbXBvcnQgeyB3aXRoTGlzdHMgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2xpc3RzL3dpdGhMaXN0cyc7XHJcbmltcG9ydCB7IHdpdGhIZWFkaW5ncyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvaGVhZGluZy93aXRoSGVhZGluZ3MnO1xyXG5pbXBvcnQgeyB3aXRoQWxpZ25tZW50cyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvYWxpZ25tZW50L3dpdGhBbGlnbm1lbnRzJztcclxuaW1wb3J0IHsgd2l0aExpbmtzIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9saW5rcy93aXRoTGlua3MnO1xyXG5pbXBvcnQge1xyXG4gIHdpdGhFbXBoYXNpemUsXHJcbiAgTUFSS19IT1RLRVlTLFxyXG4gIEVtcGhhc2l6ZVR5cGVzLFxyXG4gIEVtcGhhc2l6ZUNvbW1hbmRzLFxyXG59IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvZW1waGFzaXplJztcclxuaW1wb3J0IHsgd2l0aFJlYWN0LCBTbGF0ZSwgRWRpdGFibGUgfSBmcm9tICdzbGF0ZS1yZWFjdCc7XHJcbmltcG9ydCBpc0hvdGtleSBmcm9tICdpcy1ob3RrZXknO1xyXG5pbXBvcnQge1xyXG4gIHJlbmRlckxlYWYsXHJcbiAgcmVuZGVyRWxlbWVudCxcclxufSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9Db250cm9scy9TbGF0ZURlZmF1bHRDb250cm9scyc7XHJcbmltcG9ydCB7IEhvdmVyaW5nVG9vbGJhciB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL0NvbnRyb2xzL2hvdmVyaW5nVG9vbGJhci9Ib3ZlcmluZ1Rvb2xiYXInO1xyXG5pbXBvcnQgSGVhZGluZ0J1dHRvbkNvbXBhY3QgZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9oZWFkaW5nL0hlYWRpbmdCdXR0b25Db21wYWN0JztcclxuaW1wb3J0IEZvbnRTaXplQnV0dG9uIGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvZm9udFNpemUvRm9udFNpemVCdXR0b24nO1xyXG5pbXBvcnQgeyBBbGlnbm1lbnRCdXR0b25zIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9hbGlnbm1lbnQvQWxpZ25tZW50QnV0dG9ucyc7XHJcbmltcG9ydCB7IExpc3RCdXR0b25zIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9saXN0cy9MaXN0QnV0dG9ucyc7XHJcbmltcG9ydCB7IExpbmtCdXR0b24gfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2xpbmtzL0xpbmtCdXR0b24nO1xyXG5pbXBvcnQgeyBFbXBoYXNpemVCdXR0b24gfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2VtcGhhc2l6ZS9FbXBoYXNpemVCdXR0b24nO1xyXG5pbXBvcnQgY3JlYXRlU3R5bGVzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jcmVhdGVTdHlsZXMnO1xyXG5pbXBvcnQgd2l0aFN0eWxlcywgeyBXaXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcy93aXRoU3R5bGVzJztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NyZWF0ZU11aVRoZW1lJztcclxuaW1wb3J0IElucHV0R3JvdXAgZnJvbSAnZ3Vlc3RiZWxsLWZvcm1zL2J1aWxkL2NvbXBvbmVudHMvaW5wdXRHcm91cCc7XHJcbmltcG9ydCB5ZWxsb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3llbGxvdyc7XHJcbmltcG9ydCByZWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3JlZCc7XHJcbmltcG9ydCB7IHdpdGhIaXN0b3J5IH0gZnJvbSAnc2xhdGUtaGlzdG9yeSc7XHJcbmltcG9ydCB7IFNsYXRlVmFsdWUgfSBmcm9tICcuLi8uLi90eXBlcy9zbGF0ZS9TbGF0ZVZhbHVlJztcclxuaW1wb3J0IHsgTWlncmF0b3IgfSBmcm9tICcuLi8uLi9zbGF0ZU1pZ3JhdGlvbnMvTWlncmF0b3InO1xyXG5pbXBvcnQgeyBNaWdyYXRpb24gfSBmcm9tICcuLi8uLi9zbGF0ZU1pZ3JhdGlvbnMvTWlncmF0aW9uJztcclxuaW1wb3J0IHsgc2xhdGVFbXB0eVZhbHVlIH0gZnJvbSAnLi9zbGF0ZUVtcHR5VmFsdWUnO1xyXG5cclxuZXhwb3J0IHR5cGUgU2xhdGVFZGl0b3JPbkNoYW5nZUhhbmRsZXIgPSAodmFsOiB7XHJcbiAgdmFsdWU6IFNsYXRlVmFsdWU7XHJcbiAgaXNEaXJ0eTogYm9vbGVhbjtcclxuICBpc1ZhbGlkOiBib29sZWFuO1xyXG59KSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbGF0ZUVkaXRvckN1c3RvbVByb3BzIHtcclxuICB2YWx1ZTogU2xhdGVWYWx1ZTtcclxuICBvbkNoYW5nZTogU2xhdGVFZGl0b3JPbkNoYW5nZUhhbmRsZXI7XHJcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbiAgbGFiZWw/OiBKU1guRWxlbWVudCB8IHN0cmluZztcclxuICB0aXRsZT86IEpTWC5FbGVtZW50IHwgc3RyaW5nO1xyXG4gIG1heENoYXJzPzogbnVtYmVyO1xyXG4gIG1pZ3JhdGlvbnM/OiBNaWdyYXRpb25bXTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0gKHsgc3BhY2luZywgcGFsZXR0ZSwgdHlwb2dyYXBoeSB9OiBUaGVtZSkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgdG9vbGJhcjoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGxhYmVsOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIHBhZGRpbmc6IHNwYWNpbmcoKSxcclxuICAgICAgZm9udFNpemU6ICcxLjJyZW0nLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnMC41cyBjb2xvcicsXHJcbiAgICB9LFxyXG4gICAgbGFiZWxGb2N1c2VkOiB7XHJcbiAgICAgIGNvbG9yOiBwYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgIH0sXHJcbiAgICBlZGl0YWJsZToge1xyXG4gICAgICBwYWRkaW5nOiBzcGFjaW5nKDIpLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLmdyZXlbMTAwXSxcclxuICAgIH0sXHJcbiAgICBjaGFyYWN0ZXJDb3VudENvbnRhaW5lcjoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgcmlnaHQ6IDMsXHJcbiAgICAgIGJvdHRvbTogMyxcclxuICAgICAgZm9udFNpemU6IHR5cG9ncmFwaHkuY2FwdGlvbi5mb250U2l6ZSxcclxuICAgICAgY29sb3I6IHBhbGV0dGUuZ3JleVs1MDBdLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnMC41cyBjb2xvcicsXHJcbiAgICB9LFxyXG4gICAgY2hhcmFjdGVyQ291bnRDb250YWluZXJXYXJuaW5nOiB7XHJcbiAgICAgIGNvbG9yOiB5ZWxsb3dbNzAwXSxcclxuICAgIH0sXHJcbiAgICBjaGFyYWN0ZXJDb3VudENvbnRhaW5lckVycm9yOiB7XHJcbiAgICAgIGNvbG9yOiByZWRbNzAwXSxcclxuICAgIH0sXHJcbiAgICByb290OiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbmNvbnN0IGFsbEhvdGtleXMgPSB7IC4uLk1BUktfSE9US0VZUyB9O1xyXG5cclxudHlwZSBTbGF0ZUVkaXRvclByb3BzID0gU2xhdGVFZGl0b3JDdXN0b21Qcm9wcyAmIFdpdGhTdHlsZXM8dHlwZW9mIHN0eWxlcz47XHJcblxyXG5jb25zdCBTbGF0ZUVkaXRvcjogUmVhY3QuU0ZDPFNsYXRlRWRpdG9yUHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgY2xhc3NlcywgbWlncmF0aW9ucyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgZWRpdG9yID0gUmVhY3QudXNlUmVmKFxyXG4gICAgd2l0aEhpc3RvcnkoXHJcbiAgICAgIHdpdGhGb250U2l6ZXMoKShcclxuICAgICAgICB3aXRoTGlzdHMoXHJcbiAgICAgICAgICB3aXRoSGVhZGluZ3MoKShcclxuICAgICAgICAgICAgd2l0aEFsaWdubWVudHMod2l0aExpbmtzKHdpdGhFbXBoYXNpemUod2l0aFJlYWN0KGNyZWF0ZUVkaXRvcigpKSkpKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIClcclxuICAgICAgKVxyXG4gICAgKVxyXG4gICkuY3VycmVudDtcclxuICBjb25zdCBbaGFzRm9jdXMsIHNldEhhc0ZvY3VzXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBvbkZvY3VzID0gUmVhY3QudXNlUmVmKCgpID0+IHNldEhhc0ZvY3VzKHRydWUpKS5jdXJyZW50O1xyXG4gIGNvbnN0IG9uQmx1ciA9IFJlYWN0LnVzZVJlZigoKSA9PiBzZXRIYXNGb2N1cyhmYWxzZSkpLmN1cnJlbnQ7XHJcblxyXG4gIGxldCBhbGxvd05ld0NoYXIgPSB0cnVlO1xyXG4gIGxldCBjaGFycyA9IDA7XHJcbiAgbGV0IGNoYXJzTGVmdCA9IDA7XHJcbiAgbGV0IHByb2dyZXNzID0gMDtcclxuICBpZiAocHJvcHMubWF4Q2hhcnMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNoYXJzID0gRWRpdG9yLnRleHQoZWRpdG9yLCB7XHJcbiAgICAgICAgYW5jaG9yOiBFZGl0b3Iuc3RhcnQoZWRpdG9yLCBbXSksXHJcbiAgICAgICAgZm9jdXM6IEVkaXRvci5lbmQoZWRpdG9yLCBbXSksXHJcbiAgICAgIH0pLmxlbmd0aDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNoYXJzID0gMDtcclxuICAgIH1cclxuICAgIGNoYXJzTGVmdCA9IHByb3BzLm1heENoYXJzIC0gY2hhcnM7XHJcbiAgICBwcm9ncmVzcyA9IChjaGFyc0xlZnQgLyBwcm9wcy5tYXhDaGFycykgKiAxMDA7XHJcbiAgICBpZiAoY2hhcnNMZWZ0ID09PSAwKSB7XHJcbiAgICAgIGFsbG93TmV3Q2hhciA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBbc2VsZWN0aW9uLCBzZXRTZWxlY3Rpb25dID0gUmVhY3QudXNlU3RhdGU8UmFuZ2UgfCBudWxsPihudWxsKTtcclxuXHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZTxTbGF0ZVZhbHVlIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIC8vIFRoaXMgaXMgdGhlIGluaXRpYWwgY2hlY2sgYW5kL29yIG1pZ3JhdGlvblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaXNEaXJ0eSA9IGZhbHNlO1xyXG4gICAgbGV0IG5ld1ZhbHVlOiBTbGF0ZVZhbHVlID0gcHJvcHMudmFsdWU7XHJcbiAgICBpZiAoXHJcbiAgICAgICFwcm9wcy52YWx1ZSB8fFxyXG4gICAgICAhcHJvcHMudmFsdWUuZGF0YSB8fFxyXG4gICAgICAhQXJyYXkuaXNBcnJheShwcm9wcy52YWx1ZS5kYXRhKSB8fFxyXG4gICAgICAhcHJvcHMudmFsdWUuZGF0YS5ldmVyeShub2RlID0+IE5vZGUuaXNOb2RlKG5vZGUpKVxyXG4gICAgKSB7XHJcbiAgICAgIG5ld1ZhbHVlID0gc2xhdGVFbXB0eVZhbHVlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBtaWdyYXRpb25SZXN1bHQgPSBNaWdyYXRvci5taWdyYXRlU3RhdGUocHJvcHMudmFsdWUsIG1pZ3JhdGlvbnMpO1xyXG4gICAgICBpc0RpcnR5ID0gbWlncmF0aW9uUmVzdWx0LmNoYW5nZWQ7XHJcbiAgICAgIG5ld1ZhbHVlID0gbWlncmF0aW9uUmVzdWx0Lm1pZ3JhdGVkU3RhdGU7XHJcbiAgICB9XHJcbiAgICBwcm9wcy5vbkNoYW5nZSh7XHJcbiAgICAgIHZhbHVlOiBuZXdWYWx1ZSxcclxuICAgICAgaXNWYWxpZDogYWxsb3dOZXdDaGFyLFxyXG4gICAgICBpc0RpcnR5LFxyXG4gICAgfSk7XHJcbiAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHZhbHVlICE9PSBudWxsICYmIHByb3BzLnZhbHVlICE9PSB2YWx1ZSkge1xyXG4gICAgICBzZXRWYWx1ZShwcm9wcy52YWx1ZSk7XHJcbiAgICAgIHNldFNlbGVjdGlvbihudWxsKTtcclxuICAgIH1cclxuICB9LCBbcHJvcHMudmFsdWVdKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSBSZWFjdC51c2VSZWYoKHZhbDogTm9kZVtdLCBzOiBSYW5nZSkgPT4ge1xyXG4gICAgY29uc3QgbmV3VmFsdWU6IFNsYXRlVmFsdWUgPSB7IC4uLnByb3BzLnZhbHVlLCBkYXRhOiB2YWwgfTtcclxuICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICAgIHNldFNlbGVjdGlvbihzKTtcclxuICAgIHByb3BzLm9uQ2hhbmdlKHtcclxuICAgICAgdmFsdWU6IG5ld1ZhbHVlLFxyXG4gICAgICBpc1ZhbGlkOiBhbGxvd05ld0NoYXIsXHJcbiAgICAgIGlzRGlydHk6IHRydWUsXHJcbiAgICB9KTtcclxuICB9KS5jdXJyZW50O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgdmFsdWUgJiZcclxuICAgIHZhbHVlLmRhdGEgJiYgKFxyXG4gICAgICA8SW5wdXRHcm91cCB0aXRsZT17cHJvcHMudGl0bGV9PlxyXG4gICAgICAgIDxTbGF0ZVxyXG4gICAgICAgICAgZWRpdG9yPXtlZGl0b3J9XHJcbiAgICAgICAgICB2YWx1ZT17dmFsdWUuZGF0YX1cclxuICAgICAgICAgIHNlbGVjdGlvbj17c2VsZWN0aW9ufVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdzbGF0ZS1lZGl0b3InLCBjbGFzc2VzLnJvb3QpfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0+XHJcbiAgICAgICAgICAgICAge3Byb3BzLmxhYmVsICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdzbGF0ZS1lZGl0b3JfX2xhYmVsJywgY2xhc3Nlcy5sYWJlbCwge1xyXG4gICAgICAgICAgICAgICAgICAgICdzbGF0ZS1lZGl0b3JfX2xhYmVsLS1hY3RpdmUnOiBoYXNGb2N1cyxcclxuICAgICAgICAgICAgICAgICAgICBbY2xhc3Nlcy5sYWJlbEZvY3VzZWRdOiBoYXNGb2N1cyxcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9wcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPEhlYWRpbmdCdXR0b25Db21wYWN0IC8+XHJcbiAgICAgICAgICAgICAgPEZvbnRTaXplQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgPEFsaWdubWVudEJ1dHRvbnMgLz5cclxuICAgICAgICAgICAgICA8TGlzdEJ1dHRvbnMgLz5cclxuICAgICAgICAgICAgICA8TGlua0J1dHRvbiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEVkaXRhYmxlXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMuZWRpdGFibGUpfVxyXG4gICAgICAgICAgICAgIHJlbmRlckxlYWY9e3JlbmRlckxlYWZ9XHJcbiAgICAgICAgICAgICAgcmVuZGVyRWxlbWVudD17cmVuZGVyRWxlbWVudH1cclxuICAgICAgICAgICAgICBvbktleURvd249e2V2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghYWxsb3dOZXdDaGFyKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICghKGV2ZW50LmtleUNvZGUgPT09IDggfHwgZXZlbnQua2V5Q29kZSA9PT0gNDYpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaG90a2V5IGluIGFsbEhvdGtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGlzSG90a2V5KGhvdGtleSwgKGV2ZW50IGFzIHVua25vd24pIGFzIEtleWJvYXJkRXZlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlZGl0b3IuZXhlYyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBFbXBoYXNpemVDb21tYW5kcy5Ub2dnbGVFbXBoYXNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJrOiB7IHR5cGU6IE1BUktfSE9US0VZU1tob3RrZXldIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgaXNIb3RrZXkoJ3NoaWZ0K2VudGVyJywgKGV2ZW50IGFzIHVua25vd24pIGFzIEtleWJvYXJkRXZlbnQpXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgZWRpdG9yLmV4ZWMoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdpbnNlcnRfdGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1xcbicsXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25Gb2N1cz17b25Gb2N1c31cclxuICAgICAgICAgICAgICBvbkJsdXI9e29uQmx1cn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge3Byb3BzLm1heENoYXJzICYmIChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICdzbGF0ZS1lZGl0b3JfX2NoYXItY291bnQnLFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzLmNoYXJhY3RlckNvdW50Q29udGFpbmVyLFxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzZXMuY2hhcmFjdGVyQ291bnRDb250YWluZXJXYXJuaW5nXTogcHJvZ3Jlc3MgPD0gMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NsYXRlLWVkaXRvcl9fY2hhci1jb3VudC0td2FybmluZyc6IHByb2dyZXNzIDw9IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzc2VzLmNoYXJhY3RlckNvdW50Q29udGFpbmVyRXJyb3JdOiBwcm9ncmVzcyA8PSAwLFxyXG4gICAgICAgICAgICAgICAgICAgICdzbGF0ZS1lZGl0b3JfX2NoYXItY291bnQtLWVycm9yJzogcHJvZ3Jlc3MgPD0gMCxcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y2hhcnN9L3twcm9wcy5tYXhDaGFyc31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2VkaXRvci5zZWxlY3Rpb24gJiYgKFxyXG4gICAgICAgICAgICAgIDxIb3ZlcmluZ1Rvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICA8RW1waGFzaXplQnV0dG9uIHR5cGU9e0VtcGhhc2l6ZVR5cGVzLkJvbGR9IC8+XHJcbiAgICAgICAgICAgICAgICA8RW1waGFzaXplQnV0dG9uIHR5cGU9e0VtcGhhc2l6ZVR5cGVzLkl0YWxpY30gLz5cclxuICAgICAgICAgICAgICAgIDxFbXBoYXNpemVCdXR0b24gdHlwZT17RW1waGFzaXplVHlwZXMuVW5kZXJsaW5lfSAvPlxyXG4gICAgICAgICAgICAgICAgPExpbmtCdXR0b24gLz5cclxuICAgICAgICAgICAgICA8L0hvdmVyaW5nVG9vbGJhcj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgey8qPHByZT57SlNPTi5zdHJpbmdpZnkocHJvcHMuc3RhdGUuc2xhdGVTdGF0ZSwgbnVsbCwgMil9PC9wcmU+Ki99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1NsYXRlPlxyXG4gICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICApXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShTbGF0ZUVkaXRvcik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=