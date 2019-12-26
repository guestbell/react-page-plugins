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

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
      newValue = Object(_slateEmptyValue__WEBPACK_IMPORTED_MODULE_26__["slateEmptyValue"])();
      isDirty = true;
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
    }
  }, [props.value]);
  var onChange = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (val) {
    var newValue = val;
    setValue(newValue);
    props.onChange({
      value: newValue,
      isValid: allowNewChar,
      isDirty: true
    });
  }, [props.onChange]);
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
      'slate-editor__label--active': false
    }, classes.labelFocused, false))
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
    }
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

__signature__(SlateEditor, "useRef{}\nuseState{[value, setValue](props.value)}\nuseEffect{}\nuseEffect{}\nuseCallback{onChange}");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbW1vbi9jb21wb25lbnRzL3NsYXRlRWRpdG9yL1NsYXRlRWRpdG9yLnRzeCJdLCJuYW1lcyI6WyJzdHlsZXMiLCJzcGFjaW5nIiwicGFsZXR0ZSIsInR5cG9ncmFwaHkiLCJjcmVhdGVTdHlsZXMiLCJ0b29sYmFyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJsYWJlbCIsInBhZGRpbmciLCJmb250U2l6ZSIsInRyYW5zaXRpb24iLCJsYWJlbEZvY3VzZWQiLCJjb2xvciIsInByaW1hcnkiLCJtYWluIiwiZWRpdGFibGUiLCJiYWNrZ3JvdW5kIiwiZ3JleSIsImNoYXJhY3RlckNvdW50Q29udGFpbmVyIiwicG9zaXRpb24iLCJyaWdodCIsImJvdHRvbSIsImNhcHRpb24iLCJjaGFyYWN0ZXJDb3VudENvbnRhaW5lcldhcm5pbmciLCJ5ZWxsb3ciLCJjaGFyYWN0ZXJDb3VudENvbnRhaW5lckVycm9yIiwicmVkIiwicm9vdCIsImFsbEhvdGtleXMiLCJNQVJLX0hPVEtFWVMiLCJTbGF0ZUVkaXRvciIsInByb3BzIiwiY2xhc3NlcyIsIm1pZ3JhdGlvbnMiLCJleHRyYVRvb2xiYXJCdXR0b25zIiwidmVyc2lvbiIsImVkaXRvciIsIlJlYWN0Iiwid2l0aEhpc3RvcnkiLCJ3aXRoRm9udFNpemVzIiwid2l0aExpc3RzIiwid2l0aEhlYWRpbmdzIiwid2l0aEFsaWdubWVudHMiLCJ3aXRoTGlua3MiLCJ3aXRoRW1waGFzaXplIiwid2l0aFJlYWN0IiwiY3JlYXRlRWRpdG9yIiwiY3VycmVudCIsImFsbG93TmV3Q2hhciIsImNoYXJzIiwiY2hhcnNMZWZ0IiwicHJvZ3Jlc3MiLCJtYXhDaGFycyIsIkVkaXRvciIsInN0cmluZyIsImFuY2hvciIsInN0YXJ0IiwiZm9jdXMiLCJlbmQiLCJsZW5ndGgiLCJlcnJvciIsInZhbHVlIiwic2V0VmFsdWUiLCJpc0RpcnR5IiwibmV3VmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJldmVyeSIsIm5vZGUiLCJOb2RlIiwiaXNOb2RlIiwic2xhdGVFbXB0eVZhbHVlIiwibWlncmF0aW9uUmVzdWx0IiwiTWlncmF0b3IiLCJtaWdyYXRlU3RhdGUiLCJjaGFuZ2VkIiwibWlncmF0ZWRTdGF0ZSIsIm9uQ2hhbmdlIiwiaXNWYWxpZCIsInZhbCIsInRpdGxlIiwiY2xhc3NOYW1lcyIsInJlbmRlckxlYWYiLCJyZW5kZXJFbGVtZW50IiwiZXZlbnQiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJob3RrZXkiLCJpc0hvdGtleSIsImV4ZWMiLCJ0eXBlIiwiRW1waGFzaXplQ29tbWFuZHMiLCJUb2dnbGVFbXBoYXNpemUiLCJtYXJrIiwidGV4dCIsInNlbGVjdGlvbiIsIkVtcGhhc2l6ZVR5cGVzIiwiQm9sZCIsIkl0YWxpYyIsIlVuZGVybGluZSIsIndpdGhTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQW9CQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLE1BQUdDLE9BQUgsUUFBR0EsT0FBSDtBQUFBLE1BQVlDLE9BQVosUUFBWUEsT0FBWjtBQUFBLE1BQXFCQyxVQUFyQixRQUFxQkEsVUFBckI7QUFBQSxTQUNiQyw2RUFBWSxDQUFDO0FBQ1hDLFdBQU8sRUFBRTtBQUNQQyxhQUFPLEVBQUUsTUFERjtBQUVQQyxnQkFBVSxFQUFFO0FBRkwsS0FERTtBQUtYQyxTQUFLLEVBQUU7QUFDTEYsYUFBTyxFQUFFLE1BREo7QUFFTEMsZ0JBQVUsRUFBRSxRQUZQO0FBR0xFLGFBQU8sRUFBRVIsT0FBTyxFQUhYO0FBSUxTLGNB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QVpILE9BWVdsQixLQUFLLENBQUNxQixRQVpqQixDQW5ESixFQWtFR2hCLE1BQU0sQ0FBQzJELFNBQVAsSUFDQyxvREFBQyxnR0FBRCxRQUNFLG9EQUFDLHlGQUFEO0FBQWlCLFFBQUksRUFBRUMsdUVBQWMsQ0FBQ0M7QUFBdEMsSUFERixFQUVFLG9EQUFDLHlGQUFEO0FBQWlCLFFBQUksRUFBRUQsdUVBQWMsQ0FBQ0U7QUFBdEMsSUFGRixFQUdFLG9EQUFDLHlGQUFEO0FBQWlCLFFBQUksRUFBRUYsdUVBQWMsQ0FBQ0c7QUFBdEMsSUFIRixFQUlFLG9EQUFDLDJFQUFELE9BSkYsQ0FuRUosQ0FERixDQURGLENBRko7QUFvRkQsQ0F6S0Q7O2NBQU1yRSxXOztlQTJLU3NFLCtFQUFVLENBQUNyRyxNQUFELENBQVYsQ0FBbUIrQixXQUFuQixDOztBQUFBOzs7Ozs7Ozs7OzBCQXROVC9CLE07MEJBdUNBNkIsVTswQkFJQUUsVyIsImZpbGUiOiJjYjFiZjM1LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTm9kZSwgY3JlYXRlRWRpdG9yLCBFZGl0b3IgfSBmcm9tICdzbGF0ZSc7XHJcbmltcG9ydCB7IHdpdGhGb250U2l6ZXMgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2ZvbnRTaXplL3dpdGhGb250U2l6ZXMnO1xyXG5pbXBvcnQgeyB3aXRoTGlzdHMgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2xpc3RzL3dpdGhMaXN0cyc7XHJcbmltcG9ydCB7IHdpdGhIZWFkaW5ncyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvaGVhZGluZy93aXRoSGVhZGluZ3MnO1xyXG5pbXBvcnQgeyB3aXRoQWxpZ25tZW50cyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvYWxpZ25tZW50L3dpdGhBbGlnbm1lbnRzJztcclxuaW1wb3J0IHsgd2l0aExpbmtzIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9saW5rcy93aXRoTGlua3MnO1xyXG5pbXBvcnQge1xyXG4gIHdpdGhFbXBoYXNpemUsXHJcbiAgTUFSS19IT1RLRVlTLFxyXG4gIEVtcGhhc2l6ZVR5cGVzLFxyXG4gIEVtcGhhc2l6ZUNvbW1hbmRzLFxyXG59IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvZW1waGFzaXplJztcclxuaW1wb3J0IHsgd2l0aFJlYWN0LCBTbGF0ZSwgRWRpdGFibGUsIFJlYWN0RWRpdG9yIH0gZnJvbSAnc2xhdGUtcmVhY3QnO1xyXG5pbXBvcnQgaXNIb3RrZXkgZnJvbSAnaXMtaG90a2V5JztcclxuaW1wb3J0IHtcclxuICByZW5kZXJMZWFmLFxyXG4gIHJlbmRlckVsZW1lbnQsXHJcbn0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvQ29udHJvbHMvU2xhdGVEZWZhdWx0Q29udHJvbHMnO1xyXG5pbXBvcnQgeyBIb3ZlcmluZ1Rvb2xiYXIgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9Db250cm9scy9ob3ZlcmluZ1Rvb2xiYXIvSG92ZXJpbmdUb29sYmFyJztcclxuaW1wb3J0IEhlYWRpbmdCdXR0b25Db21wYWN0IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvaGVhZGluZy9IZWFkaW5nQnV0dG9uQ29tcGFjdCc7XHJcbmltcG9ydCBGb250U2l6ZUJ1dHRvbiBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2ZvbnRTaXplL0ZvbnRTaXplQnV0dG9uJztcclxuaW1wb3J0IHsgQWxpZ25tZW50QnV0dG9ucyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvYWxpZ25tZW50L0FsaWdubWVudEJ1dHRvbnMnO1xyXG5pbXBvcnQgeyBMaXN0QnV0dG9ucyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvbGlzdHMvTGlzdEJ1dHRvbnMnO1xyXG5pbXBvcnQgeyBMaW5rQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9saW5rcy9MaW5rQnV0dG9uJztcclxuaW1wb3J0IHsgRW1waGFzaXplQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9lbXBoYXNpemUvRW1waGFzaXplQnV0dG9uJztcclxuaW1wb3J0IGNyZWF0ZVN0eWxlcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY3JlYXRlU3R5bGVzJztcclxuaW1wb3J0IHdpdGhTdHlsZXMsIHsgV2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMvd2l0aFN0eWxlcyc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jcmVhdGVNdWlUaGVtZSc7XHJcbmltcG9ydCBJbnB1dEdyb3VwIGZyb20gJ2d1ZXN0YmVsbC1mb3Jtcy9idWlsZC9jb21wb25lbnRzL2lucHV0R3JvdXAnO1xyXG5pbXBvcnQgeWVsbG93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy95ZWxsb3cnO1xyXG5pbXBvcnQgcmVkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9yZWQnO1xyXG5pbXBvcnQgeyB3aXRoSGlzdG9yeSB9IGZyb20gJ3NsYXRlLWhpc3RvcnknO1xyXG5pbXBvcnQgeyBTbGF0ZVZhbHVlIH0gZnJvbSAnLi4vLi4vdHlwZXMvc2xhdGUvU2xhdGVWYWx1ZSc7XHJcbmltcG9ydCB7IE1pZ3JhdG9yIH0gZnJvbSAnLi4vLi4vc2xhdGVNaWdyYXRpb25zL01pZ3JhdG9yJztcclxuaW1wb3J0IHsgTWlncmF0aW9uIH0gZnJvbSAnLi4vLi4vc2xhdGVNaWdyYXRpb25zL01pZ3JhdGlvbic7XHJcbmltcG9ydCB7IHNsYXRlRW1wdHlWYWx1ZSB9IGZyb20gJy4vc2xhdGVFbXB0eVZhbHVlJztcclxuXHJcbmV4cG9ydCB0eXBlIFNsYXRlRWRpdG9yT25DaGFuZ2VIYW5kbGVyID0gKHZhbDoge1xyXG4gIHZhbHVlOiBTbGF0ZVZhbHVlO1xyXG4gIGlzRGlydHk6IGJvb2xlYW47XHJcbiAgaXNWYWxpZDogYm9vbGVhbjtcclxufSkgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xhdGVFZGl0b3JDdXN0b21Qcm9wcyB7XHJcbiAgdmFsdWU6IFNsYXRlVmFsdWU7XHJcbiAgb25DaGFuZ2U6IFNsYXRlRWRpdG9yT25DaGFuZ2VIYW5kbGVyO1xyXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG4gIGxhYmVsPzogSlNYLkVsZW1lbnQgfCBzdHJpbmc7XHJcbiAgdGl0bGU/OiBKU1guRWxlbWVudCB8IHN0cmluZztcclxuICBtYXhDaGFycz86IG51bWJlcjtcclxuICB2ZXJzaW9uPzogbnVtYmVyO1xyXG4gIG1pZ3JhdGlvbnM/OiBNaWdyYXRpb25bXTtcclxuICBleHRyYVRvb2xiYXJCdXR0b25zPzogSlNYLkVsZW1lbnQ7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9ICh7IHNwYWNpbmcsIHBhbGV0dGUsIHR5cG9ncmFwaHkgfTogVGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIHRvb2xiYXI6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBsYWJlbDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBwYWRkaW5nOiBzcGFjaW5nKCksXHJcbiAgICAgIGZvbnRTaXplOiAnMS4ycmVtJyxcclxuICAgICAgdHJhbnNpdGlvbjogJzAuNXMgY29sb3InLFxyXG4gICAgfSxcclxuICAgIGxhYmVsRm9jdXNlZDoge1xyXG4gICAgICBjb2xvcjogcGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICB9LFxyXG4gICAgZWRpdGFibGU6IHtcclxuICAgICAgcGFkZGluZzogc3BhY2luZygyKSxcclxuICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS5ncmV5WzEwMF0sXHJcbiAgICB9LFxyXG4gICAgY2hhcmFjdGVyQ291bnRDb250YWluZXI6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHJpZ2h0OiAzLFxyXG4gICAgICBib3R0b206IDMsXHJcbiAgICAgIGZvbnRTaXplOiB0eXBvZ3JhcGh5LmNhcHRpb24uZm9udFNpemUsXHJcbiAgICAgIGNvbG9yOiBwYWxldHRlLmdyZXlbNTAwXSxcclxuICAgICAgdHJhbnNpdGlvbjogJzAuNXMgY29sb3InLFxyXG4gICAgfSxcclxuICAgIGNoYXJhY3RlckNvdW50Q29udGFpbmVyV2FybmluZzoge1xyXG4gICAgICBjb2xvcjogeWVsbG93WzcwMF0sXHJcbiAgICB9LFxyXG4gICAgY2hhcmFjdGVyQ291bnRDb250YWluZXJFcnJvcjoge1xyXG4gICAgICBjb2xvcjogcmVkWzcwMF0sXHJcbiAgICB9LFxyXG4gICAgcm9vdDoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG5jb25zdCBhbGxIb3RrZXlzID0geyAuLi5NQVJLX0hPVEtFWVMgfTtcclxuXHJcbnR5cGUgU2xhdGVFZGl0b3JQcm9wcyA9IFNsYXRlRWRpdG9yQ3VzdG9tUHJvcHMgJiBXaXRoU3R5bGVzPHR5cGVvZiBzdHlsZXM+O1xyXG5cclxuY29uc3QgU2xhdGVFZGl0b3I6IFJlYWN0LkZDPFNsYXRlRWRpdG9yUHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgY2xhc3NlcywgbWlncmF0aW9ucywgZXh0cmFUb29sYmFyQnV0dG9ucywgdmVyc2lvbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgZWRpdG9yOiBSZWFjdEVkaXRvciA9IFJlYWN0LnVzZVJlZihcclxuICAgIHdpdGhIaXN0b3J5PFJlYWN0RWRpdG9yPihcclxuICAgICAgd2l0aEZvbnRTaXplcygpKFxyXG4gICAgICAgIHdpdGhMaXN0cyhcclxuICAgICAgICAgIHdpdGhIZWFkaW5ncygpKFxyXG4gICAgICAgICAgICB3aXRoQWxpZ25tZW50cyh3aXRoTGlua3Mod2l0aEVtcGhhc2l6ZSh3aXRoUmVhY3QoY3JlYXRlRWRpdG9yKCkpKSkpXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcbiAgICApXHJcbiAgKS5jdXJyZW50O1xyXG5cclxuICBsZXQgYWxsb3dOZXdDaGFyID0gdHJ1ZTtcclxuICBsZXQgY2hhcnMgPSAwO1xyXG4gIGxldCBjaGFyc0xlZnQgPSAwO1xyXG4gIGxldCBwcm9ncmVzcyA9IDA7XHJcbiAgaWYgKHByb3BzLm1heENoYXJzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjaGFycyA9IEVkaXRvci5zdHJpbmcoZWRpdG9yLCB7XHJcbiAgICAgICAgYW5jaG9yOiBFZGl0b3Iuc3RhcnQoZWRpdG9yLCBbXSksXHJcbiAgICAgICAgZm9jdXM6IEVkaXRvci5lbmQoZWRpdG9yLCBbXSksXHJcbiAgICAgIH0pLmxlbmd0aDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNoYXJzID0gMDtcclxuICAgIH1cclxuICAgIGNoYXJzTGVmdCA9IHByb3BzLm1heENoYXJzIC0gY2hhcnM7XHJcbiAgICBwcm9ncmVzcyA9IChjaGFyc0xlZnQgLyBwcm9wcy5tYXhDaGFycykgKiAxMDA7XHJcbiAgICBpZiAoY2hhcnNMZWZ0ID09PSAwKSB7XHJcbiAgICAgIGFsbG93TmV3Q2hhciA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZTxTbGF0ZVZhbHVlIHwgbnVsbD4ocHJvcHMudmFsdWUpO1xyXG5cclxuICAvLyBUaGlzIGlzIHRoZSBpbml0aWFsIGNoZWNrIGFuZC9vciBtaWdyYXRpb25cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGlzRGlydHkgPSBmYWxzZTtcclxuICAgIGxldCBuZXdWYWx1ZTogU2xhdGVWYWx1ZSA9IHByb3BzLnZhbHVlO1xyXG4gICAgaWYgKFxyXG4gICAgICAhdmFsdWUgfHxcclxuICAgICAgIUFycmF5LmlzQXJyYXkodmFsdWUpIHx8XHJcbiAgICAgICF2YWx1ZS5ldmVyeShub2RlID0+IE5vZGUuaXNOb2RlKG5vZGUpKVxyXG4gICAgKSB7XHJcbiAgICAgIG5ld1ZhbHVlID0gc2xhdGVFbXB0eVZhbHVlKCk7XHJcbiAgICAgIGlzRGlydHkgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbWlncmF0aW9uUmVzdWx0ID0gTWlncmF0b3IubWlncmF0ZVN0YXRlKFxyXG4gICAgICAgIHZlcnNpb24sXHJcbiAgICAgICAgcHJvcHMudmFsdWUsXHJcbiAgICAgICAgbWlncmF0aW9uc1xyXG4gICAgICApO1xyXG4gICAgICBpc0RpcnR5ID0gbWlncmF0aW9uUmVzdWx0LmNoYW5nZWQ7XHJcbiAgICAgIG5ld1ZhbHVlID0gbWlncmF0aW9uUmVzdWx0Lm1pZ3JhdGVkU3RhdGU7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNEaXJ0eSkge1xyXG4gICAgICBwcm9wcy5vbkNoYW5nZSh7XHJcbiAgICAgICAgdmFsdWU6IG5ld1ZhbHVlLFxyXG4gICAgICAgIGlzVmFsaWQ6IGFsbG93TmV3Q2hhcixcclxuICAgICAgICBpc0RpcnR5LFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiBwcm9wcy52YWx1ZSAhPT0gdmFsdWUpIHtcclxuICAgICAgc2V0VmFsdWUocHJvcHMudmFsdWUpO1xyXG4gICAgfVxyXG4gIH0sIFtwcm9wcy52YWx1ZV0pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgKHZhbDogTm9kZVtdKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld1ZhbHVlOiBTbGF0ZVZhbHVlID0gdmFsO1xyXG4gICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICAgIHByb3BzLm9uQ2hhbmdlKHtcclxuICAgICAgICB2YWx1ZTogbmV3VmFsdWUsXHJcbiAgICAgICAgaXNWYWxpZDogYWxsb3dOZXdDaGFyLFxyXG4gICAgICAgIGlzRGlydHk6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtwcm9wcy5vbkNoYW5nZV1cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgdmFsdWUgJiYgKFxyXG4gICAgICA8SW5wdXRHcm91cCB0aXRsZT17cHJvcHMudGl0bGV9PlxyXG4gICAgICAgIDxTbGF0ZSBlZGl0b3I9e2VkaXRvcn0gdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3NsYXRlLWVkaXRvcicsIGNsYXNzZXMucm9vdCl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfT5cclxuICAgICAgICAgICAgICB7cHJvcHMubGFiZWwgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3NsYXRlLWVkaXRvcl9fbGFiZWwnLCBjbGFzc2VzLmxhYmVsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3NsYXRlLWVkaXRvcl9fbGFiZWwtLWFjdGl2ZSc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzc2VzLmxhYmVsRm9jdXNlZF06IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3Byb3BzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8SGVhZGluZ0J1dHRvbkNvbXBhY3QgLz5cclxuICAgICAgICAgICAgICA8Rm9udFNpemVCdXR0b24gLz5cclxuICAgICAgICAgICAgICA8QWxpZ25tZW50QnV0dG9ucyAvPlxyXG4gICAgICAgICAgICAgIDxMaXN0QnV0dG9ucyAvPlxyXG4gICAgICAgICAgICAgIDxMaW5rQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAge2V4dHJhVG9vbGJhckJ1dHRvbnN9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8RWRpdGFibGVcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5lZGl0YWJsZSl9XHJcbiAgICAgICAgICAgICAgcmVuZGVyTGVhZj17cmVuZGVyTGVhZn1cclxuICAgICAgICAgICAgICByZW5kZXJFbGVtZW50PXtyZW5kZXJFbGVtZW50fVxyXG4gICAgICAgICAgICAgIG9uS2V5RG93bj17ZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhbGxvd05ld0NoYXIpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKCEoZXZlbnQua2V5Q29kZSA9PT0gOCB8fCBldmVudC5rZXlDb2RlID09PSA0NikpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBob3RrZXkgaW4gYWxsSG90a2V5cykge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoaXNIb3RrZXkoaG90a2V5LCAoZXZlbnQgYXMgdW5rbm93bikgYXMgS2V5Ym9hcmRFdmVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRvci5leGVjKHtcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEVtcGhhc2l6ZUNvbW1hbmRzLlRvZ2dsZUVtcGhhc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcms6IHsgdHlwZTogTUFSS19IT1RLRVlTW2hvdGtleV0gfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICBpc0hvdGtleSgnc2hpZnQrZW50ZXInLCAoZXZlbnQgYXMgdW5rbm93bikgYXMgS2V5Ym9hcmRFdmVudClcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICBlZGl0b3IuZXhlYyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2luc2VydF90ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnXFxuJyxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge3Byb3BzLm1heENoYXJzICYmIChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICdzbGF0ZS1lZGl0b3JfX2NoYXItY291bnQnLFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzLmNoYXJhY3RlckNvdW50Q29udGFpbmVyLFxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzZXMuY2hhcmFjdGVyQ291bnRDb250YWluZXJXYXJuaW5nXTogcHJvZ3Jlc3MgPD0gMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NsYXRlLWVkaXRvcl9fY2hhci1jb3VudC0td2FybmluZyc6IHByb2dyZXNzIDw9IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzc2VzLmNoYXJhY3RlckNvdW50Q29udGFpbmVyRXJyb3JdOiBwcm9ncmVzcyA8PSAwLFxyXG4gICAgICAgICAgICAgICAgICAgICdzbGF0ZS1lZGl0b3JfX2NoYXItY291bnQtLWVycm9yJzogcHJvZ3Jlc3MgPD0gMCxcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y2hhcnN9L3twcm9wcy5tYXhDaGFyc31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2VkaXRvci5zZWxlY3Rpb24gJiYgKFxyXG4gICAgICAgICAgICAgIDxIb3ZlcmluZ1Rvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICA8RW1waGFzaXplQnV0dG9uIHR5cGU9e0VtcGhhc2l6ZVR5cGVzLkJvbGR9IC8+XHJcbiAgICAgICAgICAgICAgICA8RW1waGFzaXplQnV0dG9uIHR5cGU9e0VtcGhhc2l6ZVR5cGVzLkl0YWxpY30gLz5cclxuICAgICAgICAgICAgICAgIDxFbXBoYXNpemVCdXR0b24gdHlwZT17RW1waGFzaXplVHlwZXMuVW5kZXJsaW5lfSAvPlxyXG4gICAgICAgICAgICAgICAgPExpbmtCdXR0b24gLz5cclxuICAgICAgICAgICAgICA8L0hvdmVyaW5nVG9vbGJhcj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgey8qPHByZT57SlNPTi5zdHJpbmdpZnkocHJvcHMuc3RhdGUuc2xhdGVTdGF0ZSwgbnVsbCwgMil9PC9wcmU+Ki99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1NsYXRlPlxyXG4gICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICApXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShTbGF0ZUVkaXRvcikgYXMgUmVhY3QuQ29tcG9uZW50VHlwZTxcclxuICBTbGF0ZUVkaXRvckN1c3RvbVByb3BzICYgUGFydGlhbDxXaXRoU3R5bGVzPHR5cGVvZiBzdHlsZXM+PlxyXG4+O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9