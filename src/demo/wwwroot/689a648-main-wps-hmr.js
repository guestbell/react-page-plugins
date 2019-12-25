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
      migrations = props.migrations,
      extraToolbarButtons = props.extraToolbarButtons,
      version = props.version;
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

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      value = _React$useState4[0],
      setValue = _React$useState4[1]; // This is the initial check and/or migration


  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    var isDirty = false;
    var newValue = props.value;

    if (!props.value || !Array.isArray(props.value) || !props.value.every(function (node) {
      return slate__WEBPACK_IMPORTED_MODULE_1__["Node"].isNode(node);
    })) {
      newValue = Object(_slateEmptyValue__WEBPACK_IMPORTED_MODULE_26__["slateEmptyValue"])();
    } else {
      var migrationResult = _slateMigrations_Migrator__WEBPACK_IMPORTED_MODULE_25__["Migrator"].migrateState(version, props.value, migrations);
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
      editor.selection = null;
    }
  }, [props.value]);
  var onChange = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](function (val) {
    var newValue = val;
    setValue(newValue);
    props.onChange({
      value: newValue,
      isValid: allowNewChar,
      isDirty: true
    });
  }).current;
  return value && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](guestbell_forms_build_components_inputGroup__WEBPACK_IMPORTED_MODULE_21___default.a, {
    title: props.title
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](slate_react__WEBPACK_IMPORTED_MODULE_8__["Slate"], {
    editor: editor,
    value: value,
    onChange: onChange
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_20___default()('slate-editor', classes.root)
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classes.toolbar
  }, props.label && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_20___default()('slate-editor__label', classes.label, _defineProperty({
      'slate-editor__label--active': hasFocus
    }, classes.labelFocused, hasFocus))
  }, props.label), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_heading_HeadingButtonCompact__WEBPACK_IMPORTED_MODULE_12__["default"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_fontSize_FontSizeButton__WEBPACK_IMPORTED_MODULE_13__["default"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_alignment_AlignmentButtons__WEBPACK_IMPORTED_MODULE_14__["AlignmentButtons"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_lists_ListButtons__WEBPACK_IMPORTED_MODULE_15__["ListButtons"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_links_LinkButton__WEBPACK_IMPORTED_MODULE_16__["LinkButton"], null), extraToolbarButtons), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](slate_react__WEBPACK_IMPORTED_MODULE_8__["Editable"], {
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

__signature__(SlateEditor, "useRef{}\nuseState{[hasFocus, setHasFocus](false)}\nuseRef{}\nuseRef{}\nuseState{[value, setValue](null)}\nuseEffect{}\nuseEffect{}\nuseRef{}");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbW1vbi9jb21wb25lbnRzL3NsYXRlRWRpdG9yL1NsYXRlRWRpdG9yLnRzeCJdLCJuYW1lcyI6WyJzdHlsZXMiLCJzcGFjaW5nIiwicGFsZXR0ZSIsInR5cG9ncmFwaHkiLCJjcmVhdGVTdHlsZXMiLCJ0b29sYmFyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJsYWJlbCIsInBhZGRpbmciLCJmb250U2l6ZSIsInRyYW5zaXRpb24iLCJsYWJlbEZvY3VzZWQiLCJjb2xvciIsInByaW1hcnkiLCJtYWluIiwiZWRpdGFibGUiLCJiYWNrZ3JvdW5kIiwiZ3JleSIsImNoYXJhY3RlckNvdW50Q29udGFpbmVyIiwicG9zaXRpb24iLCJyaWdodCIsImJvdHRvbSIsImNhcHRpb24iLCJjaGFyYWN0ZXJDb3VudENvbnRhaW5lcldhcm5pbmciLCJ5ZWxsb3ciLCJjaGFyYWN0ZXJDb3VudENvbnRhaW5lckVycm9yIiwicmVkIiwicm9vdCIsImFsbEhvdGtleXMiLCJNQVJLX0hPVEtFWVMiLCJTbGF0ZUVkaXRvciIsInByb3BzIiwiY2xhc3NlcyIsIm1pZ3JhdGlvbnMiLCJleHRyYVRvb2xiYXJCdXR0b25zIiwidmVyc2lvbiIsImVkaXRvciIsIlJlYWN0Iiwid2l0aEhpc3RvcnkiLCJ3aXRoRm9udFNpemVzIiwid2l0aExpc3RzIiwid2l0aEhlYWRpbmdzIiwid2l0aEFsaWdubWVudHMiLCJ3aXRoTGlua3MiLCJ3aXRoRW1waGFzaXplIiwid2l0aFJlYWN0IiwiY3JlYXRlRWRpdG9yIiwiY3VycmVudCIsImhhc0ZvY3VzIiwic2V0SGFzRm9jdXMiLCJvbkZvY3VzIiwib25CbHVyIiwiYWxsb3dOZXdDaGFyIiwiY2hhcnMiLCJjaGFyc0xlZnQiLCJwcm9ncmVzcyIsIm1heENoYXJzIiwiRWRpdG9yIiwic3RyaW5nIiwiYW5jaG9yIiwic3RhcnQiLCJmb2N1cyIsImVuZCIsImxlbmd0aCIsImVycm9yIiwidmFsdWUiLCJzZXRWYWx1ZSIsImlzRGlydHkiLCJuZXdWYWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsImV2ZXJ5Iiwibm9kZSIsIk5vZGUiLCJpc05vZGUiLCJzbGF0ZUVtcHR5VmFsdWUiLCJtaWdyYXRpb25SZXN1bHQiLCJNaWdyYXRvciIsIm1pZ3JhdGVTdGF0ZSIsImNoYW5nZWQiLCJtaWdyYXRlZFN0YXRlIiwib25DaGFuZ2UiLCJpc1ZhbGlkIiwic2VsZWN0aW9uIiwidmFsIiwidGl0bGUiLCJjbGFzc05hbWVzIiwicmVuZGVyTGVhZiIsInJlbmRlckVsZW1lbnQiLCJldmVudCIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsImhvdGtleSIsImlzSG90a2V5IiwiZXhlYyIsInR5cGUiLCJFbXBoYXNpemVDb21tYW5kcyIsIlRvZ2dsZUVtcGhhc2l6ZSIsIm1hcmsiLCJ0ZXh0IiwiRW1waGFzaXplVHlwZXMiLCJCb2xkIiwiSXRhbGljIiwiVW5kZXJsaW5lIiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBb0JBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsTUFBWUMsT0FBWixRQUFZQSxPQUFaO0FBQUEsTUFBcUJDLFVBQXJCLFFBQXFCQSxVQUFyQjtBQUFBLFNBQ2JDLDZFQUFZLENBQUM7QUFDWEMsV0FBTyxFQUFFO0FBQ1BDLGFBQU8sRUFBRSxNQURGO0FBRVBDLGdCQUFVLEVBQUU7QUFGTCxLQURFO0FBS1hDLFNBQUssRUFBRTtBQUNMRixhQUFPLEVBQUUsTUFESjtBQUVMQyxnQkFBVSxF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QUVWSSxjQUFJLEVBQUU7QUFGSSxTQUFaO0FBSUQ7QUFDRixLQTdCSDtBQThCRSxXQUFPLEVBQUVqRCxPQTlCWDtBQStCRSxVQUFNLEVBQUVDO0FBL0JWLElBbkJGLEVBb0RHcEIsS0FBSyxDQUFDeUIsUUFBTixJQUNDO0FBQ0UsYUFBUyxFQUFFOEIsa0RBQVUsQ0FDbkIsMEJBRG1CLEVBRW5CdEQsT0FBTyxDQUFDZCx1QkFGVyxvREFJaEJjLE9BQU8sQ0FBQ1QsOEJBSlEsRUFJeUJnQyxRQUFRLElBQUksRUFKckMsaUNBS2pCLG1DQUxpQixFQUtvQkEsUUFBUSxJQUFJLEVBTGhDLGlDQU1oQnZCLE9BQU8sQ0FBQ1AsNEJBTlEsRUFNdUI4QixRQUFRLElBQUksQ0FObkMsaUNBT2pCLGlDQVBpQixFQU9rQkEsUUFBUSxJQUFJLENBUDlCO0FBRHZCLEtBWUdGLEtBWkgsT0FZV3RCLEtBQUssQ0FBQ3lCLFFBWmpCLENBckRKLEVBb0VHcEIsTUFBTSxDQUFDK0MsU0FBUCxJQUNDLG9EQUFDLGdHQUFELFFBQ0Usb0RBQUMseUZBQUQ7QUFBaUIsUUFBSSxFQUFFaUIsdUVBQWMsQ0FBQ0M7QUFBdEMsSUFERixFQUVFLG9EQUFDLHlGQUFEO0FBQWlCLFFBQUksRUFBRUQsdUVBQWMsQ0FBQ0U7QUFBdEMsSUFGRixFQUdFLG9EQUFDLHlGQUFEO0FBQWlCLFFBQUksRUFBRUYsdUVBQWMsQ0FBQ0c7QUFBdEMsSUFIRixFQUlFLG9EQUFDLDJFQUFELE9BSkYsQ0FyRUosQ0FERixDQURGLENBRko7QUFzRkQsQ0EzS0Q7O2NBQU16RSxXOztlQTZLUzBFLCtFQUFVLENBQUN6RyxNQUFELENBQVYsQ0FBbUIrQixXQUFuQixDOztBQUFBOzs7Ozs7Ozs7OzBCQXhOVC9CLE07MEJBdUNBNkIsVTswQkFJQUUsVyIsImZpbGUiOiI2ODlhNjQ4LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTm9kZSwgY3JlYXRlRWRpdG9yLCBFZGl0b3IgfSBmcm9tICdzbGF0ZSc7XHJcbmltcG9ydCB7IHdpdGhGb250U2l6ZXMgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2ZvbnRTaXplL3dpdGhGb250U2l6ZXMnO1xyXG5pbXBvcnQgeyB3aXRoTGlzdHMgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2xpc3RzL3dpdGhMaXN0cyc7XHJcbmltcG9ydCB7IHdpdGhIZWFkaW5ncyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvaGVhZGluZy93aXRoSGVhZGluZ3MnO1xyXG5pbXBvcnQgeyB3aXRoQWxpZ25tZW50cyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvYWxpZ25tZW50L3dpdGhBbGlnbm1lbnRzJztcclxuaW1wb3J0IHsgd2l0aExpbmtzIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9saW5rcy93aXRoTGlua3MnO1xyXG5pbXBvcnQge1xyXG4gIHdpdGhFbXBoYXNpemUsXHJcbiAgTUFSS19IT1RLRVlTLFxyXG4gIEVtcGhhc2l6ZVR5cGVzLFxyXG4gIEVtcGhhc2l6ZUNvbW1hbmRzLFxyXG59IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvZW1waGFzaXplJztcclxuaW1wb3J0IHsgd2l0aFJlYWN0LCBTbGF0ZSwgRWRpdGFibGUsIFJlYWN0RWRpdG9yIH0gZnJvbSAnc2xhdGUtcmVhY3QnO1xyXG5pbXBvcnQgaXNIb3RrZXkgZnJvbSAnaXMtaG90a2V5JztcclxuaW1wb3J0IHtcclxuICByZW5kZXJMZWFmLFxyXG4gIHJlbmRlckVsZW1lbnQsXHJcbn0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvQ29udHJvbHMvU2xhdGVEZWZhdWx0Q29udHJvbHMnO1xyXG5pbXBvcnQgeyBIb3ZlcmluZ1Rvb2xiYXIgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9Db250cm9scy9ob3ZlcmluZ1Rvb2xiYXIvSG92ZXJpbmdUb29sYmFyJztcclxuaW1wb3J0IEhlYWRpbmdCdXR0b25Db21wYWN0IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvaGVhZGluZy9IZWFkaW5nQnV0dG9uQ29tcGFjdCc7XHJcbmltcG9ydCBGb250U2l6ZUJ1dHRvbiBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2ZvbnRTaXplL0ZvbnRTaXplQnV0dG9uJztcclxuaW1wb3J0IHsgQWxpZ25tZW50QnV0dG9ucyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvYWxpZ25tZW50L0FsaWdubWVudEJ1dHRvbnMnO1xyXG5pbXBvcnQgeyBMaXN0QnV0dG9ucyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvbGlzdHMvTGlzdEJ1dHRvbnMnO1xyXG5pbXBvcnQgeyBMaW5rQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9saW5rcy9MaW5rQnV0dG9uJztcclxuaW1wb3J0IHsgRW1waGFzaXplQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9lbXBoYXNpemUvRW1waGFzaXplQnV0dG9uJztcclxuaW1wb3J0IGNyZWF0ZVN0eWxlcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY3JlYXRlU3R5bGVzJztcclxuaW1wb3J0IHdpdGhTdHlsZXMsIHsgV2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMvd2l0aFN0eWxlcyc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jcmVhdGVNdWlUaGVtZSc7XHJcbmltcG9ydCBJbnB1dEdyb3VwIGZyb20gJ2d1ZXN0YmVsbC1mb3Jtcy9idWlsZC9jb21wb25lbnRzL2lucHV0R3JvdXAnO1xyXG5pbXBvcnQgeWVsbG93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy95ZWxsb3cnO1xyXG5pbXBvcnQgcmVkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9yZWQnO1xyXG5pbXBvcnQgeyB3aXRoSGlzdG9yeSB9IGZyb20gJ3NsYXRlLWhpc3RvcnknO1xyXG5pbXBvcnQgeyBTbGF0ZVZhbHVlIH0gZnJvbSAnLi4vLi4vdHlwZXMvc2xhdGUvU2xhdGVWYWx1ZSc7XHJcbmltcG9ydCB7IE1pZ3JhdG9yIH0gZnJvbSAnLi4vLi4vc2xhdGVNaWdyYXRpb25zL01pZ3JhdG9yJztcclxuaW1wb3J0IHsgTWlncmF0aW9uIH0gZnJvbSAnLi4vLi4vc2xhdGVNaWdyYXRpb25zL01pZ3JhdGlvbic7XHJcbmltcG9ydCB7IHNsYXRlRW1wdHlWYWx1ZSB9IGZyb20gJy4vc2xhdGVFbXB0eVZhbHVlJztcclxuXHJcbmV4cG9ydCB0eXBlIFNsYXRlRWRpdG9yT25DaGFuZ2VIYW5kbGVyID0gKHZhbDoge1xyXG4gIHZhbHVlOiBTbGF0ZVZhbHVlO1xyXG4gIGlzRGlydHk6IGJvb2xlYW47XHJcbiAgaXNWYWxpZDogYm9vbGVhbjtcclxufSkgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xhdGVFZGl0b3JDdXN0b21Qcm9wcyB7XHJcbiAgdmFsdWU6IFNsYXRlVmFsdWU7XHJcbiAgb25DaGFuZ2U6IFNsYXRlRWRpdG9yT25DaGFuZ2VIYW5kbGVyO1xyXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG4gIGxhYmVsPzogSlNYLkVsZW1lbnQgfCBzdHJpbmc7XHJcbiAgdGl0bGU/OiBKU1guRWxlbWVudCB8IHN0cmluZztcclxuICBtYXhDaGFycz86IG51bWJlcjtcclxuICB2ZXJzaW9uPzogbnVtYmVyO1xyXG4gIG1pZ3JhdGlvbnM/OiBNaWdyYXRpb25bXTtcclxuICBleHRyYVRvb2xiYXJCdXR0b25zPzogSlNYLkVsZW1lbnQ7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9ICh7IHNwYWNpbmcsIHBhbGV0dGUsIHR5cG9ncmFwaHkgfTogVGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIHRvb2xiYXI6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBsYWJlbDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBwYWRkaW5nOiBzcGFjaW5nKCksXHJcbiAgICAgIGZvbnRTaXplOiAnMS4ycmVtJyxcclxuICAgICAgdHJhbnNpdGlvbjogJzAuNXMgY29sb3InLFxyXG4gICAgfSxcclxuICAgIGxhYmVsRm9jdXNlZDoge1xyXG4gICAgICBjb2xvcjogcGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICB9LFxyXG4gICAgZWRpdGFibGU6IHtcclxuICAgICAgcGFkZGluZzogc3BhY2luZygyKSxcclxuICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS5ncmV5WzEwMF0sXHJcbiAgICB9LFxyXG4gICAgY2hhcmFjdGVyQ291bnRDb250YWluZXI6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHJpZ2h0OiAzLFxyXG4gICAgICBib3R0b206IDMsXHJcbiAgICAgIGZvbnRTaXplOiB0eXBvZ3JhcGh5LmNhcHRpb24uZm9udFNpemUsXHJcbiAgICAgIGNvbG9yOiBwYWxldHRlLmdyZXlbNTAwXSxcclxuICAgICAgdHJhbnNpdGlvbjogJzAuNXMgY29sb3InLFxyXG4gICAgfSxcclxuICAgIGNoYXJhY3RlckNvdW50Q29udGFpbmVyV2FybmluZzoge1xyXG4gICAgICBjb2xvcjogeWVsbG93WzcwMF0sXHJcbiAgICB9LFxyXG4gICAgY2hhcmFjdGVyQ291bnRDb250YWluZXJFcnJvcjoge1xyXG4gICAgICBjb2xvcjogcmVkWzcwMF0sXHJcbiAgICB9LFxyXG4gICAgcm9vdDoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG5jb25zdCBhbGxIb3RrZXlzID0geyAuLi5NQVJLX0hPVEtFWVMgfTtcclxuXHJcbnR5cGUgU2xhdGVFZGl0b3JQcm9wcyA9IFNsYXRlRWRpdG9yQ3VzdG9tUHJvcHMgJiBXaXRoU3R5bGVzPHR5cGVvZiBzdHlsZXM+O1xyXG5cclxuY29uc3QgU2xhdGVFZGl0b3I6IFJlYWN0LkZDPFNsYXRlRWRpdG9yUHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgY2xhc3NlcywgbWlncmF0aW9ucywgZXh0cmFUb29sYmFyQnV0dG9ucywgdmVyc2lvbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgZWRpdG9yOiBSZWFjdEVkaXRvciA9IFJlYWN0LnVzZVJlZihcclxuICAgIHdpdGhIaXN0b3J5PFJlYWN0RWRpdG9yPihcclxuICAgICAgd2l0aEZvbnRTaXplcygpKFxyXG4gICAgICAgIHdpdGhMaXN0cyhcclxuICAgICAgICAgIHdpdGhIZWFkaW5ncygpKFxyXG4gICAgICAgICAgICB3aXRoQWxpZ25tZW50cyh3aXRoTGlua3Mod2l0aEVtcGhhc2l6ZSh3aXRoUmVhY3QoY3JlYXRlRWRpdG9yKCkpKSkpXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcbiAgICApXHJcbiAgKS5jdXJyZW50O1xyXG4gIGNvbnN0IFtoYXNGb2N1cywgc2V0SGFzRm9jdXNdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG9uRm9jdXMgPSBSZWFjdC51c2VSZWYoKCkgPT4gc2V0SGFzRm9jdXModHJ1ZSkpLmN1cnJlbnQ7XHJcbiAgY29uc3Qgb25CbHVyID0gUmVhY3QudXNlUmVmKCgpID0+IHNldEhhc0ZvY3VzKGZhbHNlKSkuY3VycmVudDtcclxuXHJcbiAgbGV0IGFsbG93TmV3Q2hhciA9IHRydWU7XHJcbiAgbGV0IGNoYXJzID0gMDtcclxuICBsZXQgY2hhcnNMZWZ0ID0gMDtcclxuICBsZXQgcHJvZ3Jlc3MgPSAwO1xyXG4gIGlmIChwcm9wcy5tYXhDaGFycykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY2hhcnMgPSBFZGl0b3Iuc3RyaW5nKGVkaXRvciwge1xyXG4gICAgICAgIGFuY2hvcjogRWRpdG9yLnN0YXJ0KGVkaXRvciwgW10pLFxyXG4gICAgICAgIGZvY3VzOiBFZGl0b3IuZW5kKGVkaXRvciwgW10pLFxyXG4gICAgICB9KS5sZW5ndGg7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjaGFycyA9IDA7XHJcbiAgICB9XHJcbiAgICBjaGFyc0xlZnQgPSBwcm9wcy5tYXhDaGFycyAtIGNoYXJzO1xyXG4gICAgcHJvZ3Jlc3MgPSAoY2hhcnNMZWZ0IC8gcHJvcHMubWF4Q2hhcnMpICogMTAwO1xyXG4gICAgaWYgKGNoYXJzTGVmdCA9PT0gMCkge1xyXG4gICAgICBhbGxvd05ld0NoYXIgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGU8U2xhdGVWYWx1ZSB8IG51bGw+KG51bGwpO1xyXG5cclxuICAvLyBUaGlzIGlzIHRoZSBpbml0aWFsIGNoZWNrIGFuZC9vciBtaWdyYXRpb25cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGlzRGlydHkgPSBmYWxzZTtcclxuICAgIGxldCBuZXdWYWx1ZTogU2xhdGVWYWx1ZSA9IHByb3BzLnZhbHVlO1xyXG4gICAgaWYgKFxyXG4gICAgICAhcHJvcHMudmFsdWUgfHxcclxuICAgICAgIUFycmF5LmlzQXJyYXkocHJvcHMudmFsdWUpIHx8XHJcbiAgICAgICFwcm9wcy52YWx1ZS5ldmVyeShub2RlID0+IE5vZGUuaXNOb2RlKG5vZGUpKVxyXG4gICAgKSB7XHJcbiAgICAgIG5ld1ZhbHVlID0gc2xhdGVFbXB0eVZhbHVlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBtaWdyYXRpb25SZXN1bHQgPSBNaWdyYXRvci5taWdyYXRlU3RhdGUoXHJcbiAgICAgICAgdmVyc2lvbixcclxuICAgICAgICBwcm9wcy52YWx1ZSxcclxuICAgICAgICBtaWdyYXRpb25zXHJcbiAgICAgICk7XHJcbiAgICAgIGlzRGlydHkgPSBtaWdyYXRpb25SZXN1bHQuY2hhbmdlZDtcclxuICAgICAgbmV3VmFsdWUgPSBtaWdyYXRpb25SZXN1bHQubWlncmF0ZWRTdGF0ZTtcclxuICAgIH1cclxuICAgIGlmIChpc0RpcnR5KSB7XHJcbiAgICAgIHByb3BzLm9uQ2hhbmdlKHtcclxuICAgICAgICB2YWx1ZTogbmV3VmFsdWUsXHJcbiAgICAgICAgaXNWYWxpZDogYWxsb3dOZXdDaGFyLFxyXG4gICAgICAgIGlzRGlydHksXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHZhbHVlICE9PSBudWxsICYmIHByb3BzLnZhbHVlICE9PSB2YWx1ZSkge1xyXG4gICAgICBzZXRWYWx1ZShwcm9wcy52YWx1ZSk7XHJcbiAgICAgIGVkaXRvci5zZWxlY3Rpb24gPSBudWxsO1xyXG4gICAgfVxyXG4gIH0sIFtwcm9wcy52YWx1ZV0pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IFJlYWN0LnVzZVJlZigodmFsOiBOb2RlW10pID0+IHtcclxuICAgIGNvbnN0IG5ld1ZhbHVlOiBTbGF0ZVZhbHVlID0gdmFsO1xyXG4gICAgc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gICAgcHJvcHMub25DaGFuZ2Uoe1xyXG4gICAgICB2YWx1ZTogbmV3VmFsdWUsXHJcbiAgICAgIGlzVmFsaWQ6IGFsbG93TmV3Q2hhcixcclxuICAgICAgaXNEaXJ0eTogdHJ1ZSxcclxuICAgIH0pO1xyXG4gIH0pLmN1cnJlbnQ7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICB2YWx1ZSAmJiAoXHJcbiAgICAgIDxJbnB1dEdyb3VwIHRpdGxlPXtwcm9wcy50aXRsZX0+XHJcbiAgICAgICAgPFNsYXRlIGVkaXRvcj17ZWRpdG9yfSB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnc2xhdGUtZWRpdG9yJywgY2xhc3Nlcy5yb290KX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9PlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5sYWJlbCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnc2xhdGUtZWRpdG9yX19sYWJlbCcsIGNsYXNzZXMubGFiZWwsIHtcclxuICAgICAgICAgICAgICAgICAgICAnc2xhdGUtZWRpdG9yX19sYWJlbC0tYWN0aXZlJzogaGFzRm9jdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzZXMubGFiZWxGb2N1c2VkXTogaGFzRm9jdXMsXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7cHJvcHMubGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxIZWFkaW5nQnV0dG9uQ29tcGFjdCAvPlxyXG4gICAgICAgICAgICAgIDxGb250U2l6ZUJ1dHRvbiAvPlxyXG4gICAgICAgICAgICAgIDxBbGlnbm1lbnRCdXR0b25zIC8+XHJcbiAgICAgICAgICAgICAgPExpc3RCdXR0b25zIC8+XHJcbiAgICAgICAgICAgICAgPExpbmtCdXR0b24gLz5cclxuICAgICAgICAgICAgICB7ZXh0cmFUb29sYmFyQnV0dG9uc31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxFZGl0YWJsZVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLmVkaXRhYmxlKX1cclxuICAgICAgICAgICAgICByZW5kZXJMZWFmPXtyZW5kZXJMZWFmfVxyXG4gICAgICAgICAgICAgIHJlbmRlckVsZW1lbnQ9e3JlbmRlckVsZW1lbnR9XHJcbiAgICAgICAgICAgICAgb25LZXlEb3duPXtldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFsbG93TmV3Q2hhcikge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoIShldmVudC5rZXlDb2RlID09PSA4IHx8IGV2ZW50LmtleUNvZGUgPT09IDQ2KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGhvdGtleSBpbiBhbGxIb3RrZXlzKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChpc0hvdGtleShob3RrZXksIChldmVudCBhcyB1bmtub3duKSBhcyBLZXlib2FyZEV2ZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdG9yLmV4ZWMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogRW1waGFzaXplQ29tbWFuZHMuVG9nZ2xlRW1waGFzaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyazogeyB0eXBlOiBNQVJLX0hPVEtFWVNbaG90a2V5XSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgIGlzSG90a2V5KCdzaGlmdCtlbnRlcicsIChldmVudCBhcyB1bmtub3duKSBhcyBLZXlib2FyZEV2ZW50KVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgIGVkaXRvci5leGVjKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaW5zZXJ0X3RleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdcXG4nLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uRm9jdXM9e29uRm9jdXN9XHJcbiAgICAgICAgICAgICAgb25CbHVyPXtvbkJsdXJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtwcm9wcy5tYXhDaGFycyAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAnc2xhdGUtZWRpdG9yX19jaGFyLWNvdW50JyxcclxuICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5jaGFyYWN0ZXJDb3VudENvbnRhaW5lcixcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzc2VzLmNoYXJhY3RlckNvdW50Q29udGFpbmVyV2FybmluZ106IHByb2dyZXNzIDw9IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICdzbGF0ZS1lZGl0b3JfX2NoYXItY291bnQtLXdhcm5pbmcnOiBwcm9ncmVzcyA8PSAxMCxcclxuICAgICAgICAgICAgICAgICAgICBbY2xhc3Nlcy5jaGFyYWN0ZXJDb3VudENvbnRhaW5lckVycm9yXTogcHJvZ3Jlc3MgPD0gMCxcclxuICAgICAgICAgICAgICAgICAgICAnc2xhdGUtZWRpdG9yX19jaGFyLWNvdW50LS1lcnJvcic6IHByb2dyZXNzIDw9IDAsXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2NoYXJzfS97cHJvcHMubWF4Q2hhcnN9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtlZGl0b3Iuc2VsZWN0aW9uICYmIChcclxuICAgICAgICAgICAgICA8SG92ZXJpbmdUb29sYmFyPlxyXG4gICAgICAgICAgICAgICAgPEVtcGhhc2l6ZUJ1dHRvbiB0eXBlPXtFbXBoYXNpemVUeXBlcy5Cb2xkfSAvPlxyXG4gICAgICAgICAgICAgICAgPEVtcGhhc2l6ZUJ1dHRvbiB0eXBlPXtFbXBoYXNpemVUeXBlcy5JdGFsaWN9IC8+XHJcbiAgICAgICAgICAgICAgICA8RW1waGFzaXplQnV0dG9uIHR5cGU9e0VtcGhhc2l6ZVR5cGVzLlVuZGVybGluZX0gLz5cclxuICAgICAgICAgICAgICAgIDxMaW5rQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgPC9Ib3ZlcmluZ1Rvb2xiYXI+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsvKjxwcmU+e0pTT04uc3RyaW5naWZ5KHByb3BzLnN0YXRlLnNsYXRlU3RhdGUsIG51bGwsIDIpfTwvcHJlPiovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TbGF0ZT5cclxuICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgKVxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoU2xhdGVFZGl0b3IpIGFzIFJlYWN0LkNvbXBvbmVudFR5cGU8XHJcbiAgU2xhdGVFZGl0b3JDdXN0b21Qcm9wcyAmIFBhcnRpYWw8V2l0aFN0eWxlczx0eXBlb2Ygc3R5bGVzPj5cclxuPjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==