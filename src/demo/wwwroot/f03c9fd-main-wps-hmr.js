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
/* harmony import */ var _slate_plugins_fontSize_FontSizeButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../slate/plugins/fontSize/FontSizeButton */ "./src/lib/slate/plugins/fontSize/FontSizeButton.tsx");
/* harmony import */ var _slate_plugins_alignment_AlignmentButtons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../slate/plugins/alignment/AlignmentButtons */ "./src/lib/slate/plugins/alignment/AlignmentButtons.tsx");
/* harmony import */ var _slate_plugins_emphasize_EmphasizeButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../slate/plugins/emphasize/EmphasizeButton */ "./src/lib/slate/plugins/emphasize/EmphasizeButton.tsx");
/* harmony import */ var _material_ui_core_styles_createStyles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/styles/createStyles */ "./node_modules/@material-ui/core/styles/createStyles.js");
/* harmony import */ var _material_ui_core_styles_createStyles__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_createStyles__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var guestbell_forms_build_components_inputGroup__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! guestbell-forms/build/components/inputGroup */ "./node_modules/guestbell-forms/build/components/inputGroup/index.js");
/* harmony import */ var guestbell_forms_build_components_inputGroup__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(guestbell_forms_build_components_inputGroup__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/colors/yellow */ "./node_modules/@material-ui/core/colors/yellow.js");
/* harmony import */ var _material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/colors/red */ "./node_modules/@material-ui/core/colors/red.js");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! slate-history */ "./node_modules/slate-history/dist/index.es.js");
/* harmony import */ var _slateMigrations_Migrator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../slateMigrations/Migrator */ "./src/lib/common/slateMigrations/Migrator.ts");
/* harmony import */ var _slateEmptyValue__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./slateEmptyValue */ "./src/lib/common/components/slateEditor/slateEmptyValue.ts");
/* harmony import */ var _slate_plugins_color__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../slate/plugins/color */ "./src/lib/slate/plugins/color/index.ts");
/* harmony import */ var _slate_plugins_color_ColorButton__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../slate/plugins/color/ColorButton */ "./src/lib/slate/plugins/color/ColorButton.tsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

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




























var styles = function styles(_ref) {
  var spacing = _ref.spacing,
      palette = _ref.palette,
      typography = _ref.typography;
  return _material_ui_core_styles_createStyles__WEBPACK_IMPORTED_MODULE_15___default()({
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
      color: _material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_19___default.a[700]
    },
    characterCountContainerError: {
      color: _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_20___default.a[700]
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
  var editor = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](Object(slate_history__WEBPACK_IMPORTED_MODULE_21__["withHistory"])(Object(_slate_plugins_fontSize_withFontSizes__WEBPACK_IMPORTED_MODULE_2__["withFontSizes"])()(Object(_slate_plugins_lists_withLists__WEBPACK_IMPORTED_MODULE_3__["withLists"])(Object(_slate_plugins_color__WEBPACK_IMPORTED_MODULE_24__["withColors"])(Object(_slate_plugins_heading_withHeadings__WEBPACK_IMPORTED_MODULE_4__["withHeadings"])()(Object(_slate_plugins_alignment_withAlignments__WEBPACK_IMPORTED_MODULE_5__["withAlignments"])(Object(_slate_plugins_links_withLinks__WEBPACK_IMPORTED_MODULE_6__["withLinks"])(Object(_slate_plugins_emphasize__WEBPACK_IMPORTED_MODULE_7__["withEmphasize"])(Object(slate_react__WEBPACK_IMPORTED_MODULE_8__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_1__["createEditor"])())))))))))).current;
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
      newValue = Object(_slateEmptyValue__WEBPACK_IMPORTED_MODULE_23__["slateEmptyValue"])();
      isDirty = true;
    } else {
      var migrationResult = _slateMigrations_Migrator__WEBPACK_IMPORTED_MODULE_22__["Migrator"].migrateState(version, props.value, migrations);
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
  return value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](guestbell_forms_build_components_inputGroup__WEBPACK_IMPORTED_MODULE_18___default.a, {
    title: props.title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](slate_react__WEBPACK_IMPORTED_MODULE_8__["Slate"], {
    editor: editor,
    value: value,
    onChange: onChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_17___default()('slate-editor', classes.root)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classes.toolbar
  }, props.label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_17___default()('slate-editor__label', classes.label, _defineProperty({
      'slate-editor__label--active': false
    }, classes.labelFocused, false))
  }, props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_fontSize_FontSizeButton__WEBPACK_IMPORTED_MODULE_12__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_alignment_AlignmentButtons__WEBPACK_IMPORTED_MODULE_13__["AlignmentButtons"], null), extraToolbarButtons), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](slate_react__WEBPACK_IMPORTED_MODULE_8__["Editable"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_17___default()(classes.editable),
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
    }
  }), props.maxChars && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_17___default()('slate-editor__char-count', classes.characterCountContainer, (_classNames2 = {}, _defineProperty(_classNames2, classes.characterCountContainerWarning, progress <= 10), _defineProperty(_classNames2, 'slate-editor__char-count--warning', progress <= 10), _defineProperty(_classNames2, classes.characterCountContainerError, progress <= 0), _defineProperty(_classNames2, 'slate-editor__char-count--error', progress <= 0), _classNames2))
  }, chars, "/", props.maxChars), editor.selection && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_Controls_hoveringToolbar_HoveringToolbar__WEBPACK_IMPORTED_MODULE_11__["HoveringToolbar"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_emphasize_EmphasizeButton__WEBPACK_IMPORTED_MODULE_14__["EmphasizeButton"], {
    type: _slate_plugins_emphasize__WEBPACK_IMPORTED_MODULE_7__["EmphasizeTypes"].Bold
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_emphasize_EmphasizeButton__WEBPACK_IMPORTED_MODULE_14__["EmphasizeButton"], {
    type: _slate_plugins_emphasize__WEBPACK_IMPORTED_MODULE_7__["EmphasizeTypes"].Italic
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_emphasize_EmphasizeButton__WEBPACK_IMPORTED_MODULE_14__["EmphasizeButton"], {
    type: _slate_plugins_emphasize__WEBPACK_IMPORTED_MODULE_7__["EmphasizeTypes"].Underline
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_color_ColorButton__WEBPACK_IMPORTED_MODULE_25__["default"], null)))));
};

__signature__(SlateEditor, "useRef{}\nuseState{[value, setValue](props.value)}\nuseEffect{}\nuseEffect{}\nuseCallback{onChange}");

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_16___default()(styles)(SlateEditor);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

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
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbW1vbi9jb21wb25lbnRzL3NsYXRlRWRpdG9yL1NsYXRlRWRpdG9yLnRzeCJdLCJuYW1lcyI6WyJzdHlsZXMiLCJzcGFjaW5nIiwicGFsZXR0ZSIsInR5cG9ncmFwaHkiLCJjcmVhdGVTdHlsZXMiLCJ0b29sYmFyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJsYWJlbCIsInBhZGRpbmciLCJmb250U2l6ZSIsInRyYW5zaXRpb24iLCJsYWJlbEZvY3VzZWQiLCJjb2xvciIsInByaW1hcnkiLCJtYWluIiwiZWRpdGFibGUiLCJiYWNrZ3JvdW5kIiwiZ3JleSIsImNoYXJhY3RlckNvdW50Q29udGFpbmVyIiwicG9zaXRpb24iLCJyaWdodCIsImJvdHRvbSIsImNhcHRpb24iLCJjaGFyYWN0ZXJDb3VudENvbnRhaW5lcldhcm5pbmciLCJ5ZWxsb3ciLCJjaGFyYWN0ZXJDb3VudENvbnRhaW5lckVycm9yIiwicmVkIiwicm9vdCIsImFsbEhvdGtleXMiLCJNQVJLX0hPVEtFWVMiLCJTbGF0ZUVkaXRvciIsInByb3BzIiwiY2xhc3NlcyIsIm1pZ3JhdGlvbnMiLCJleHRyYVRvb2xiYXJCdXR0b25zIiwidmVyc2lvbiIsImVkaXRvciIsIlJlYWN0Iiwid2l0aEhpc3RvcnkiLCJ3aXRoRm9udFNpemVzIiwid2l0aExpc3RzIiwid2l0aENvbG9ycyIsIndpdGhIZWFkaW5ncyIsIndpdGhBbGlnbm1lbnRzIiwid2l0aExpbmtzIiwid2l0aEVtcGhhc2l6ZSIsIndpdGhSZWFjdCIsImNyZWF0ZUVkaXRvciIsImN1cnJlbnQiLCJhbGxvd05ld0NoYXIiLCJjaGFycyIsImNoYXJzTGVmdCIsInByb2dyZXNzIiwibWF4Q2hhcnMiLCJFZGl0b3IiLCJzdHJpbmciLCJhbmNob3IiLCJzdGFydCIsImZvY3VzIiwiZW5kIiwibGVuZ3RoIiwiZXJyb3IiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaXNEaXJ0eSIsIm5ld1ZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwiZXZlcnkiLCJub2RlIiwiTm9kZSIsImlzTm9kZSIsInNsYXRlRW1wdHlWYWx1ZSIsIm1pZ3JhdGlvblJlc3VsdCIsIk1pZ3JhdG9yIiwibWlncmF0ZVN0YXRlIiwiY2hhbmdlZCIsIm1pZ3JhdGVkU3RhdGUiLCJvbkNoYW5nZSIsImlzVmFsaWQiLCJ2YWwiLCJKU09OIiwic3RyaW5naWZ5IiwidGl0bGUiLCJjbGFzc05hbWVzIiwicmVuZGVyTGVhZiIsInJlbmRlckVsZW1lbnQiLCJldmVudCIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsImhvdGtleSIsImlzSG90a2V5IiwiZXhlYyIsInR5cGUiLCJFbXBoYXNpemVDb21tYW5kcyIsIlRvZ2dsZUVtcGhhc2l6ZSIsIm1hcmsiLCJ0ZXh0Iiwic2VsZWN0aW9uIiwiRW1waGFzaXplVHlwZXMiLCJCb2xkIiwiSXRhbGljIiwiVW5kZXJsaW5lIiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFvQkEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxNQUFHQyxPQUFILFFBQUdBLE9BQUg7QUFBQSxNQUFZQyxPQUFaLFFBQVlBLE9BQVo7QUFBQSxNQUFxQkMsVUFBckIsUUFBcUJBLFVBQXJCO0FBQUEsU0FDYkMsNkVBQVksQ0FBQztBQUNYQyxXQUFPLEVBQUU7QUFDUEMsYUFBTyxFQUFFLE1BREY7QUFFUEMsZ0JBQVUsRUFBRTtBQUZMLEtBREU7QUFLWEMsU0FBSyxFQUFFO0FBQ0xGLGFBQU8sRUFBRSxNQURKO0FBRUxDLGdCQUFVLEVBQUUsUUFGUDtBQUdM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QUxoQyxpQ0FNaEJwQixPQUFPLENBQUNQLDRCQU5RLEVBTXVCMkIsUUFBUSxJQUFJLENBTm5DLGlDQU9qQixpQ0FQaUIsRUFPa0JBLFFBQVEsSUFBSSxDQVA5QjtBQUR2QixLQVlHRixLQVpILE9BWVduQixLQUFLLENBQUNzQixRQVpqQixDQW5ESixFQWtFR2pCLE1BQU0sQ0FBQzhELFNBQVAsaUJBQ0Msb0RBQUMsZ0dBQUQscUJBQ0Usb0RBQUMseUZBQUQ7QUFBaUIsUUFBSSxFQUFFQyx1RUFBYyxDQUFDQztBQUF0QyxJQURGLGVBRUUsb0RBQUMseUZBQUQ7QUFBaUIsUUFBSSxFQUFFRCx1RUFBYyxDQUFDRTtBQUF0QyxJQUZGLGVBR0Usb0RBQUMseUZBQUQ7QUFBaUIsUUFBSSxFQUFFRix1RUFBYyxDQUFDRztBQUF0QyxJQUhGLGVBS0Usb0RBQUMseUVBQUQsT0FMRixDQW5FSixDQURGLENBREYsQ0FGSjtBQXFGRCxDQWxMRDs7Y0FBTXhFLFc7O2VBb0xTeUUsMkVBQVUsQ0FBQ3hHLE1BQUQsQ0FBVixDQUFtQitCLFdBQW5CLEM7O0FBQUE7Ozs7Ozs7Ozs7MEJBL05UL0IsTTswQkF1Q0E2QixVOzBCQUlBRSxXIiwiZmlsZSI6ImYwM2M5ZmQtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOb2RlLCBjcmVhdGVFZGl0b3IsIEVkaXRvciB9IGZyb20gJ3NsYXRlJztcclxuaW1wb3J0IHsgd2l0aEZvbnRTaXplcyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvZm9udFNpemUvd2l0aEZvbnRTaXplcyc7XHJcbmltcG9ydCB7IHdpdGhMaXN0cyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvbGlzdHMvd2l0aExpc3RzJztcclxuaW1wb3J0IHsgd2l0aEhlYWRpbmdzIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9oZWFkaW5nL3dpdGhIZWFkaW5ncyc7XHJcbmltcG9ydCB7IHdpdGhBbGlnbm1lbnRzIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9hbGlnbm1lbnQvd2l0aEFsaWdubWVudHMnO1xyXG5pbXBvcnQgeyB3aXRoTGlua3MgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2xpbmtzL3dpdGhMaW5rcyc7XHJcbmltcG9ydCB7XHJcbiAgd2l0aEVtcGhhc2l6ZSxcclxuICBNQVJLX0hPVEtFWVMsXHJcbiAgRW1waGFzaXplVHlwZXMsXHJcbiAgRW1waGFzaXplQ29tbWFuZHMsXHJcbn0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9lbXBoYXNpemUnO1xyXG5pbXBvcnQgeyB3aXRoUmVhY3QsIFNsYXRlLCBFZGl0YWJsZSwgUmVhY3RFZGl0b3IgfSBmcm9tICdzbGF0ZS1yZWFjdCc7XHJcbmltcG9ydCBpc0hvdGtleSBmcm9tICdpcy1ob3RrZXknO1xyXG5pbXBvcnQge1xyXG4gIHJlbmRlckxlYWYsXHJcbiAgcmVuZGVyRWxlbWVudCxcclxufSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9Db250cm9scy9TbGF0ZURlZmF1bHRDb250cm9scyc7XHJcbmltcG9ydCB7IEhvdmVyaW5nVG9vbGJhciB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL0NvbnRyb2xzL2hvdmVyaW5nVG9vbGJhci9Ib3ZlcmluZ1Rvb2xiYXInO1xyXG5pbXBvcnQgRm9udFNpemVCdXR0b24gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9mb250U2l6ZS9Gb250U2l6ZUJ1dHRvbic7XHJcbmltcG9ydCB7IEFsaWdubWVudEJ1dHRvbnMgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2FsaWdubWVudC9BbGlnbm1lbnRCdXR0b25zJztcclxuaW1wb3J0IHsgRW1waGFzaXplQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9lbXBoYXNpemUvRW1waGFzaXplQnV0dG9uJztcclxuaW1wb3J0IGNyZWF0ZVN0eWxlcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY3JlYXRlU3R5bGVzJztcclxuaW1wb3J0IHdpdGhTdHlsZXMsIHsgV2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzJztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NyZWF0ZU11aVRoZW1lJztcclxuaW1wb3J0IElucHV0R3JvdXAgZnJvbSAnZ3Vlc3RiZWxsLWZvcm1zL2J1aWxkL2NvbXBvbmVudHMvaW5wdXRHcm91cCc7XHJcbmltcG9ydCB5ZWxsb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3llbGxvdyc7XHJcbmltcG9ydCByZWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3JlZCc7XHJcbmltcG9ydCB7IHdpdGhIaXN0b3J5IH0gZnJvbSAnc2xhdGUtaGlzdG9yeSc7XHJcbmltcG9ydCB7IFNsYXRlVmFsdWUgfSBmcm9tICcuLi8uLi90eXBlcy9zbGF0ZS9TbGF0ZVZhbHVlJztcclxuaW1wb3J0IHsgTWlncmF0b3IgfSBmcm9tICcuLi8uLi9zbGF0ZU1pZ3JhdGlvbnMvTWlncmF0b3InO1xyXG5pbXBvcnQgeyBNaWdyYXRpb24gfSBmcm9tICcuLi8uLi9zbGF0ZU1pZ3JhdGlvbnMvTWlncmF0aW9uJztcclxuaW1wb3J0IHsgc2xhdGVFbXB0eVZhbHVlIH0gZnJvbSAnLi9zbGF0ZUVtcHR5VmFsdWUnO1xyXG5pbXBvcnQgeyB3aXRoQ29sb3JzIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9jb2xvcic7XHJcbmltcG9ydCBDb2xvckJ1dHRvbiBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2NvbG9yL0NvbG9yQnV0dG9uJztcclxuXHJcbmV4cG9ydCB0eXBlIFNsYXRlRWRpdG9yT25DaGFuZ2VIYW5kbGVyID0gKHZhbDoge1xyXG4gIHZhbHVlOiBTbGF0ZVZhbHVlO1xyXG4gIGlzRGlydHk6IGJvb2xlYW47XHJcbiAgaXNWYWxpZDogYm9vbGVhbjtcclxufSkgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xhdGVFZGl0b3JDdXN0b21Qcm9wcyB7XHJcbiAgdmFsdWU6IFNsYXRlVmFsdWU7XHJcbiAgb25DaGFuZ2U6IFNsYXRlRWRpdG9yT25DaGFuZ2VIYW5kbGVyO1xyXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG4gIGxhYmVsPzogSlNYLkVsZW1lbnQgfCBzdHJpbmc7XHJcbiAgdGl0bGU/OiBKU1guRWxlbWVudCB8IHN0cmluZztcclxuICBtYXhDaGFycz86IG51bWJlcjtcclxuICB2ZXJzaW9uPzogbnVtYmVyO1xyXG4gIG1pZ3JhdGlvbnM/OiBNaWdyYXRpb25bXTtcclxuICBleHRyYVRvb2xiYXJCdXR0b25zPzogSlNYLkVsZW1lbnQ7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9ICh7IHNwYWNpbmcsIHBhbGV0dGUsIHR5cG9ncmFwaHkgfTogVGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIHRvb2xiYXI6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBsYWJlbDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBwYWRkaW5nOiBzcGFjaW5nKCksXHJcbiAgICAgIGZvbnRTaXplOiAnMS4ycmVtJyxcclxuICAgICAgdHJhbnNpdGlvbjogJzAuNXMgY29sb3InLFxyXG4gICAgfSxcclxuICAgIGxhYmVsRm9jdXNlZDoge1xyXG4gICAgICBjb2xvcjogcGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICB9LFxyXG4gICAgZWRpdGFibGU6IHtcclxuICAgICAgcGFkZGluZzogc3BhY2luZygyKSxcclxuICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS5ncmV5WzEwMF0sXHJcbiAgICB9LFxyXG4gICAgY2hhcmFjdGVyQ291bnRDb250YWluZXI6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHJpZ2h0OiAzLFxyXG4gICAgICBib3R0b206IDMsXHJcbiAgICAgIGZvbnRTaXplOiB0eXBvZ3JhcGh5LmNhcHRpb24uZm9udFNpemUsXHJcbiAgICAgIGNvbG9yOiBwYWxldHRlLmdyZXlbNTAwXSxcclxuICAgICAgdHJhbnNpdGlvbjogJzAuNXMgY29sb3InLFxyXG4gICAgfSxcclxuICAgIGNoYXJhY3RlckNvdW50Q29udGFpbmVyV2FybmluZzoge1xyXG4gICAgICBjb2xvcjogeWVsbG93WzcwMF0sXHJcbiAgICB9LFxyXG4gICAgY2hhcmFjdGVyQ291bnRDb250YWluZXJFcnJvcjoge1xyXG4gICAgICBjb2xvcjogcmVkWzcwMF0sXHJcbiAgICB9LFxyXG4gICAgcm9vdDoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG5jb25zdCBhbGxIb3RrZXlzID0geyAuLi5NQVJLX0hPVEtFWVMgfTtcclxuXHJcbnR5cGUgU2xhdGVFZGl0b3JQcm9wcyA9IFNsYXRlRWRpdG9yQ3VzdG9tUHJvcHMgJiBXaXRoU3R5bGVzPHR5cGVvZiBzdHlsZXM+O1xyXG5cclxuY29uc3QgU2xhdGVFZGl0b3I6IFJlYWN0LkZDPFNsYXRlRWRpdG9yUHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgY2xhc3NlcywgbWlncmF0aW9ucywgZXh0cmFUb29sYmFyQnV0dG9ucywgdmVyc2lvbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgZWRpdG9yOiBSZWFjdEVkaXRvciA9IFJlYWN0LnVzZVJlZihcclxuICAgIHdpdGhIaXN0b3J5PFJlYWN0RWRpdG9yPihcclxuICAgICAgd2l0aEZvbnRTaXplcygpKFxyXG4gICAgICAgIHdpdGhMaXN0cyhcclxuICAgICAgICAgIHdpdGhDb2xvcnMoXHJcbiAgICAgICAgICAgIHdpdGhIZWFkaW5ncygpKFxyXG4gICAgICAgICAgICAgIHdpdGhBbGlnbm1lbnRzKFxyXG4gICAgICAgICAgICAgICAgd2l0aExpbmtzKHdpdGhFbXBoYXNpemUod2l0aFJlYWN0KGNyZWF0ZUVkaXRvcigpKSkpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcbiAgICApXHJcbiAgKS5jdXJyZW50O1xyXG5cclxuICBsZXQgYWxsb3dOZXdDaGFyID0gdHJ1ZTtcclxuICBsZXQgY2hhcnMgPSAwO1xyXG4gIGxldCBjaGFyc0xlZnQgPSAwO1xyXG4gIGxldCBwcm9ncmVzcyA9IDA7XHJcbiAgaWYgKHByb3BzLm1heENoYXJzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjaGFycyA9IEVkaXRvci5zdHJpbmcoZWRpdG9yLCB7XHJcbiAgICAgICAgYW5jaG9yOiBFZGl0b3Iuc3RhcnQoZWRpdG9yLCBbXSksXHJcbiAgICAgICAgZm9jdXM6IEVkaXRvci5lbmQoZWRpdG9yLCBbXSksXHJcbiAgICAgIH0pLmxlbmd0aDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNoYXJzID0gMDtcclxuICAgIH1cclxuICAgIGNoYXJzTGVmdCA9IHByb3BzLm1heENoYXJzIC0gY2hhcnM7XHJcbiAgICBwcm9ncmVzcyA9IChjaGFyc0xlZnQgLyBwcm9wcy5tYXhDaGFycykgKiAxMDA7XHJcbiAgICBpZiAoY2hhcnNMZWZ0ID09PSAwKSB7XHJcbiAgICAgIGFsbG93TmV3Q2hhciA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZTxTbGF0ZVZhbHVlIHwgbnVsbD4ocHJvcHMudmFsdWUpO1xyXG5cclxuICAvLyBUaGlzIGlzIHRoZSBpbml0aWFsIGNoZWNrIGFuZC9vciBtaWdyYXRpb25cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGlzRGlydHkgPSBmYWxzZTtcclxuICAgIGxldCBuZXdWYWx1ZTogU2xhdGVWYWx1ZSA9IHByb3BzLnZhbHVlO1xyXG4gICAgaWYgKFxyXG4gICAgICAhdmFsdWUgfHxcclxuICAgICAgIUFycmF5LmlzQXJyYXkodmFsdWUpIHx8XHJcbiAgICAgICF2YWx1ZS5ldmVyeShub2RlID0+IE5vZGUuaXNOb2RlKG5vZGUpKVxyXG4gICAgKSB7XHJcbiAgICAgIG5ld1ZhbHVlID0gc2xhdGVFbXB0eVZhbHVlKCk7XHJcbiAgICAgIGlzRGlydHkgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbWlncmF0aW9uUmVzdWx0ID0gTWlncmF0b3IubWlncmF0ZVN0YXRlKFxyXG4gICAgICAgIHZlcnNpb24sXHJcbiAgICAgICAgcHJvcHMudmFsdWUsXHJcbiAgICAgICAgbWlncmF0aW9uc1xyXG4gICAgICApO1xyXG4gICAgICBpc0RpcnR5ID0gbWlncmF0aW9uUmVzdWx0LmNoYW5nZWQ7XHJcbiAgICAgIG5ld1ZhbHVlID0gbWlncmF0aW9uUmVzdWx0Lm1pZ3JhdGVkU3RhdGU7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNEaXJ0eSkge1xyXG4gICAgICBwcm9wcy5vbkNoYW5nZSh7XHJcbiAgICAgICAgdmFsdWU6IG5ld1ZhbHVlLFxyXG4gICAgICAgIGlzVmFsaWQ6IGFsbG93TmV3Q2hhcixcclxuICAgICAgICBpc0RpcnR5LFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiBwcm9wcy52YWx1ZSAhPT0gdmFsdWUpIHtcclxuICAgICAgc2V0VmFsdWUocHJvcHMudmFsdWUpO1xyXG4gICAgfVxyXG4gIH0sIFtwcm9wcy52YWx1ZV0pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgKHZhbDogTm9kZVtdKSA9PiB7XHJcbiAgICAgIC8vIFRoaXMgbWlnaHQgcG9zc2libHkgYmUgc3R1cGlkIGJ1dCByaWdodCBub3csIGl0IHRyaWdnZXJzIG9uIGV2ZXJ5IGZvY3VzIHdoaWNoIGNhdXNlc1xyXG4gICAgICAvLyBwcm9ibGVtcyB3aXRoIHJlLXJlbmRlcmluZyBjb21wb25lbnRzIGFuZCBsb3NpbmcgZm9jdXMgaW4gbW9kYWxzIChsaW5rLCBjb2xvcilcclxuICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHZhbHVlKSAhPT0gSlNPTi5zdHJpbmdpZnkodmFsKSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlOiBTbGF0ZVZhbHVlID0gdmFsO1xyXG4gICAgICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICAgICAgICBwcm9wcy5vbkNoYW5nZSh7XHJcbiAgICAgICAgICB2YWx1ZTogbmV3VmFsdWUsXHJcbiAgICAgICAgICBpc1ZhbGlkOiBhbGxvd05ld0NoYXIsXHJcbiAgICAgICAgICBpc0RpcnR5OiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW3Byb3BzLm9uQ2hhbmdlLCB2YWx1ZV1cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgdmFsdWUgJiYgKFxyXG4gICAgICA8SW5wdXRHcm91cCB0aXRsZT17cHJvcHMudGl0bGV9PlxyXG4gICAgICAgIDxTbGF0ZSBlZGl0b3I9e2VkaXRvcn0gdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3NsYXRlLWVkaXRvcicsIGNsYXNzZXMucm9vdCl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfT5cclxuICAgICAgICAgICAgICB7cHJvcHMubGFiZWwgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3NsYXRlLWVkaXRvcl9fbGFiZWwnLCBjbGFzc2VzLmxhYmVsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3NsYXRlLWVkaXRvcl9fbGFiZWwtLWFjdGl2ZSc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzc2VzLmxhYmVsRm9jdXNlZF06IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3Byb3BzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7Lyo8SGVhZGluZ0J1dHRvbkNvbXBhY3QgLz4qL31cclxuICAgICAgICAgICAgICA8Rm9udFNpemVCdXR0b24gLz5cclxuICAgICAgICAgICAgICA8QWxpZ25tZW50QnV0dG9ucyAvPlxyXG4gICAgICAgICAgICAgIHsvKjxMaXN0QnV0dG9ucyAvPiovfVxyXG4gICAgICAgICAgICAgIHsvKjxMaW5rQnV0dG9uIC8+Ki99XHJcbiAgICAgICAgICAgICAge2V4dHJhVG9vbGJhckJ1dHRvbnN9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8RWRpdGFibGVcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5lZGl0YWJsZSl9XHJcbiAgICAgICAgICAgICAgcmVuZGVyTGVhZj17cmVuZGVyTGVhZn1cclxuICAgICAgICAgICAgICByZW5kZXJFbGVtZW50PXtyZW5kZXJFbGVtZW50fVxyXG4gICAgICAgICAgICAgIG9uS2V5RG93bj17ZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhbGxvd05ld0NoYXIpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKCEoZXZlbnQua2V5Q29kZSA9PT0gOCB8fCBldmVudC5rZXlDb2RlID09PSA0NikpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBob3RrZXkgaW4gYWxsSG90a2V5cykge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoaXNIb3RrZXkoaG90a2V5LCAoZXZlbnQgYXMgdW5rbm93bikgYXMgS2V5Ym9hcmRFdmVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRvci5leGVjKHtcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEVtcGhhc2l6ZUNvbW1hbmRzLlRvZ2dsZUVtcGhhc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcms6IHsgdHlwZTogTUFSS19IT1RLRVlTW2hvdGtleV0gfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICBpc0hvdGtleSgnc2hpZnQrZW50ZXInLCAoZXZlbnQgYXMgdW5rbm93bikgYXMgS2V5Ym9hcmRFdmVudClcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICBlZGl0b3IuZXhlYyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2luc2VydF90ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnXFxuJyxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge3Byb3BzLm1heENoYXJzICYmIChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICdzbGF0ZS1lZGl0b3JfX2NoYXItY291bnQnLFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzLmNoYXJhY3RlckNvdW50Q29udGFpbmVyLFxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzZXMuY2hhcmFjdGVyQ291bnRDb250YWluZXJXYXJuaW5nXTogcHJvZ3Jlc3MgPD0gMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NsYXRlLWVkaXRvcl9fY2hhci1jb3VudC0td2FybmluZyc6IHByb2dyZXNzIDw9IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzc2VzLmNoYXJhY3RlckNvdW50Q29udGFpbmVyRXJyb3JdOiBwcm9ncmVzcyA8PSAwLFxyXG4gICAgICAgICAgICAgICAgICAgICdzbGF0ZS1lZGl0b3JfX2NoYXItY291bnQtLWVycm9yJzogcHJvZ3Jlc3MgPD0gMCxcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y2hhcnN9L3twcm9wcy5tYXhDaGFyc31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2VkaXRvci5zZWxlY3Rpb24gJiYgKFxyXG4gICAgICAgICAgICAgIDxIb3ZlcmluZ1Rvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICA8RW1waGFzaXplQnV0dG9uIHR5cGU9e0VtcGhhc2l6ZVR5cGVzLkJvbGR9IC8+XHJcbiAgICAgICAgICAgICAgICA8RW1waGFzaXplQnV0dG9uIHR5cGU9e0VtcGhhc2l6ZVR5cGVzLkl0YWxpY30gLz5cclxuICAgICAgICAgICAgICAgIDxFbXBoYXNpemVCdXR0b24gdHlwZT17RW1waGFzaXplVHlwZXMuVW5kZXJsaW5lfSAvPlxyXG4gICAgICAgICAgICAgICAgey8qPExpbmtCdXR0b24gLz4qL31cclxuICAgICAgICAgICAgICAgIDxDb2xvckJ1dHRvbiAvPlxyXG4gICAgICAgICAgICAgIDwvSG92ZXJpbmdUb29sYmFyPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7Lyo8cHJlPntKU09OLnN0cmluZ2lmeShwcm9wcy5zdGF0ZS5zbGF0ZVN0YXRlLCBudWxsLCAyKX08L3ByZT4qL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU2xhdGU+XHJcbiAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgIClcclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFNsYXRlRWRpdG9yKSBhcyBSZWFjdC5Db21wb25lbnRUeXBlPFxyXG4gIFNsYXRlRWRpdG9yQ3VzdG9tUHJvcHMgJiBQYXJ0aWFsPFdpdGhTdHlsZXM8dHlwZW9mIHN0eWxlcz4+XHJcbj47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=