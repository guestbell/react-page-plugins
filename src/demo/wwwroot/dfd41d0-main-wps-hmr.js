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
/* harmony import */ var _slate_plugins_emphasize_withEmphasize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../slate/plugins/emphasize/withEmphasize */ "./src/lib/slate/plugins/emphasize/withEmphasize.ts");
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
      padding: spacing(2)
    },
    editableEditable: {
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

var allHotkeys = _objectSpread({}, _slate_plugins_emphasize_withEmphasize__WEBPACK_IMPORTED_MODULE_7__["MARK_HOTKEYS"]);

var SlateEditor = function SlateEditor(props) {
  var _classNames3;

  var classes = props.classes;
  var editor = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](Object(slate_history__WEBPACK_IMPORTED_MODULE_24__["withHistory"])(Object(_slate_plugins_fontSize_withFontSizes__WEBPACK_IMPORTED_MODULE_2__["withFontSizes"])()(Object(_slate_plugins_lists_withLists__WEBPACK_IMPORTED_MODULE_3__["withLists"])(Object(_slate_plugins_heading_withHeadings__WEBPACK_IMPORTED_MODULE_4__["withHeadings"])()(Object(_slate_plugins_alignment_withAlignments__WEBPACK_IMPORTED_MODULE_5__["withAlignments"])(Object(_slate_plugins_links_withLinks__WEBPACK_IMPORTED_MODULE_6__["withLinks"])(Object(_slate_plugins_emphasize_withEmphasize__WEBPACK_IMPORTED_MODULE_7__["withEmphasize"])(Object(slate_react__WEBPACK_IMPORTED_MODULE_8__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_1__["createEditor"])()))))))))).current;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      hasFocus = _React$useState2[0],
      setHasFocus = _React$useState2[1];

  var onFocus = function onFocus() {
    return setHasFocus(true);
  };

  var onBlur = function onBlur() {
    return setHasFocus(false);
  };

  var allowNewChar = true;
  var chars = 0;
  var charsLeft = 0;
  var progress = 0;

  if (props.maxChars && !props.readOnly) {
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

  var onChange = function onChange(val) {
    return props.onChange({
      value: val,
      isValid: allowNewChar,
      isDirty: true
    });
  };

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__["useState"](0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      key = _React$useState4[0],
      setKey = _React$useState4[1];

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    return setKey(key + 1);
  }, [props.readOnly && props.value]);
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](guestbell_forms_build_components_inputGroup__WEBPACK_IMPORTED_MODULE_21___default.a, {
    title: props.title,
    key: props.readOnly ? key : undefined
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](slate_react__WEBPACK_IMPORTED_MODULE_8__["Slate"], {
    editor: editor,
    defaultValue: props.value,
    onChange: onChange
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_20___default()('slate-editor', classes.root)
  }, !props.readOnly && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classes.toolbar
  }, props.label && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_20___default()('slate-editor__label', classes.label, _defineProperty({
      'slate-editor__label--active': hasFocus
    }, classes.labelFocused, hasFocus))
  }, props.label), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_heading_HeadingButtonCompact__WEBPACK_IMPORTED_MODULE_12__["default"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_fontSize_FontSizeButton__WEBPACK_IMPORTED_MODULE_13__["default"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_alignment_AlignmentButtons__WEBPACK_IMPORTED_MODULE_14__["AlignmentButtons"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_lists_ListButtons__WEBPACK_IMPORTED_MODULE_15__["ListButtons"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_links_LinkButton__WEBPACK_IMPORTED_MODULE_16__["LinkButton"], null)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](slate_react__WEBPACK_IMPORTED_MODULE_8__["Editable"], {
    readOnly: props.readOnly,
    className: classnames__WEBPACK_IMPORTED_MODULE_20___default()(classes.editable, _defineProperty({}, classes.editableEditable, !props.readOnly)),
    renderMark: _slate_Controls_SlateDefaultControls__WEBPACK_IMPORTED_MODULE_10__["renderMark"],
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
            type: _slate_plugins_emphasize_withEmphasize__WEBPACK_IMPORTED_MODULE_7__["EmphasizeCommands"].ToggleEmphasize,
            mark: {
              type: _slate_plugins_emphasize_withEmphasize__WEBPACK_IMPORTED_MODULE_7__["MARK_HOTKEYS"][hotkey]
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
  }), props.maxChars && !props.readOnly && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_20___default()('slate-editor__char-count', classes.characterCountContainer, (_classNames3 = {}, _defineProperty(_classNames3, classes.characterCountContainerWarning, progress <= 10), _defineProperty(_classNames3, 'slate-editor__char-count--warning', progress <= 10), _defineProperty(_classNames3, classes.characterCountContainerError, progress <= 0), _defineProperty(_classNames3, 'slate-editor__char-count--error', progress <= 0), _classNames3))
  }, chars, "/", props.maxChars), editor.selection && !props.readOnly && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_Controls_hoveringToolbar_HoveringToolbar__WEBPACK_IMPORTED_MODULE_11__["HoveringToolbar"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_emphasize_EmphasizeButton__WEBPACK_IMPORTED_MODULE_17__["EmphasizeButton"], {
    type: _slate_plugins_emphasize_withEmphasize__WEBPACK_IMPORTED_MODULE_7__["EmphasizeTypes"].Bold
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_emphasize_EmphasizeButton__WEBPACK_IMPORTED_MODULE_17__["EmphasizeButton"], {
    type: _slate_plugins_emphasize_withEmphasize__WEBPACK_IMPORTED_MODULE_7__["EmphasizeTypes"].Italic
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_emphasize_EmphasizeButton__WEBPACK_IMPORTED_MODULE_17__["EmphasizeButton"], {
    type: _slate_plugins_emphasize_withEmphasize__WEBPACK_IMPORTED_MODULE_7__["EmphasizeTypes"].Underline
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_links_LinkButton__WEBPACK_IMPORTED_MODULE_16__["LinkButton"], null))))));
};

__signature__(SlateEditor, "useRef{}\nuseState{[hasFocus, setHasFocus](false)}\nuseState{[key, setKey](0)}\nuseEffect{}");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbW1vbi9jb21wb25lbnRzL3NsYXRlRWRpdG9yL1NsYXRlRWRpdG9yLnRzeCJdLCJuYW1lcyI6WyJzdHlsZXMiLCJzcGFjaW5nIiwicGFsZXR0ZSIsInR5cG9ncmFwaHkiLCJjcmVhdGVTdHlsZXMiLCJ0b29sYmFyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJsYWJlbCIsInBhZGRpbmciLCJmb250U2l6ZSIsInRyYW5zaXRpb24iLCJsYWJlbEZvY3VzZWQiLCJjb2xvciIsInByaW1hcnkiLCJtYWluIiwiZWRpdGFibGUiLCJlZGl0YWJsZUVkaXRhYmxlIiwiYmFja2dyb3VuZCIsImdyZXkiLCJjaGFyYWN0ZXJDb3VudENvbnRhaW5lciIsInBvc2l0aW9uIiwicmlnaHQiLCJib3R0b20iLCJjYXB0aW9uIiwiY2hhcmFjdGVyQ291bnRDb250YWluZXJXYXJuaW5nIiwieWVsbG93IiwiY2hhcmFjdGVyQ291bnRDb250YWluZXJFcnJvciIsInJlZCIsInJvb3QiLCJhbGxIb3RrZXlzIiwiTUFSS19IT1RLRVlTIiwiU2xhdGVFZGl0b3IiLCJwcm9wcyIsImNsYXNzZXMiLCJlZGl0b3IiLCJSZWFjdCIsIndpdGhIaXN0b3J5Iiwid2l0aEZvbnRTaXplcyIsIndpdGhMaXN0cyIsIndpdGhIZWFkaW5ncyIsIndpdGhBbGlnbm1lbnRzIiwid2l0aExpbmtzIiwid2l0aEVtcGhhc2l6ZSIsIndpdGhSZWFjdCIsImNyZWF0ZUVkaXRvciIsImN1cnJlbnQiLCJoYXNGb2N1cyIsInNldEhhc0ZvY3VzIiwib25Gb2N1cyIsIm9uQmx1ciIsImFsbG93TmV3Q2hhciIsImNoYXJzIiwiY2hhcnNMZWZ0IiwicHJvZ3Jlc3MiLCJtYXhDaGFycyIsInJlYWRPbmx5IiwiRWRpdG9yIiwidGV4dCIsImFuY2hvciIsInN0YXJ0IiwiZm9jdXMiLCJlbmQiLCJsZW5ndGgiLCJlcnJvciIsIm9uQ2hhbmdlIiwidmFsIiwidmFsdWUiLCJpc1ZhbGlkIiwiaXNEaXJ0eSIsImtleSIsInNldEtleSIsInRpdGxlIiwidW5kZWZpbmVkIiwiY2xhc3NOYW1lcyIsInJlbmRlck1hcmsiLCJyZW5kZXJFbGVtZW50IiwiZXZlbnQiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJob3RrZXkiLCJpc0hvdGtleSIsImV4ZWMiLCJ0eXBlIiwiRW1waGFzaXplQ29tbWFuZHMiLCJUb2dnbGVFbXBoYXNpemUiLCJtYXJrIiwic2VsZWN0aW9uIiwiRW1waGFzaXplVHlwZXMiLCJCb2xkIiwiSXRhbGljIiwiVW5kZXJsaW5lIiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBbUJBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsTUFBWUMsT0FBWixRQUFZQSxPQUFaO0FBQUEsTUFBcUJDLFVBQXJCLFFBQXFCQSxVQUFyQjtBQUFBLFNBQ2JDLDZFQUFZLENBQUM7QUFDWEMsV0FBTyxFQUFFO0FBQ1BDLGFBQU8sRUFBRSxNQURGO0FBRVBDLGdCQUFVLEVBQUU7QUFGTCxLQURFO0FBS1hDLFNBQUssRUFBRTtBQUNMRixhQUFPLEVBQUUsTUFESjtBQUVMQyxnQkFBVSxFQUFFLFFBRlA7QUFHTEUsYUFBTyxFQUFFUixPQUFPLEVBSFg7QUFJTFMsY0FBUSxFQUFFLFFBSkw7QUFLTEMsZ0JBQVUsRUFBRTtBQUxQLEtBTEk7QUFZWEMsZ0JBQVksRUFBRTtBQUNaQyxXQUFLLEVBQUVYLE9BQU8sQ0FBQ1ksT0FBUixDQUFnQkM7QUFEWCxLQVpIO0FBZVhDLFlBQVEsRUFBRTtB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WDtBQWtDRSxVQUFNLEVBQUVDO0FBbENWLElBcEJGLEVBd0RHakIsS0FBSyxDQUFDc0IsUUFBTixJQUFrQixDQUFDdEIsS0FBSyxDQUFDdUIsUUFBekIsSUFDQztBQUNFLGFBQVMsRUFBRWtCLGtEQUFVLENBQ25CLDBCQURtQixFQUVuQnhDLE9BQU8sQ0FBQ2QsdUJBRlcsb0RBSWhCYyxPQUFPLENBQUNULDhCQUpRLEVBSXlCNkIsUUFBUSxJQUFJLEVBSnJDLGlDQUtqQixtQ0FMaUIsRUFLb0JBLFFBQVEsSUFBSSxFQUxoQyxpQ0FNaEJwQixPQUFPLENBQUNQLDRCQU5RLEVBTXVCMkIsUUFBUSxJQUFJLENBTm5DLGlDQU9qQixpQ0FQaUIsRUFPa0JBLFFBQVEsSUFBSSxDQVA5QjtBQUR2QixLQVlHRixLQVpILE9BWVduQixLQUFLLENBQUNzQixRQVpqQixDQXpESixFQXdFR3BCLE1BQU0sQ0FBQ29ELFNBQVAsSUFBb0IsQ0FBQ3RELEtBQUssQ0FBQ3VCLFFBQTNCLElBQ0MsMEdBQ0Usb0RBQUMsZ0dBQUQsUUFDRSxvREFBQyx5RkFBRDtBQUFpQixRQUFJLEVBQUVnQyxxRkFBYyxDQUFDQztBQUF0QyxJQURGLEVBRUUsb0RBQUMseUZBQUQ7QUFBaUIsUUFBSSxFQUFFRCxxRkFBYyxDQUFDRTtBQUF0QyxJQUZGLEVBR0Usb0RBQUMseUZBQUQ7QUFBaUIsUUFBSSxFQUFFRixxRkFBYyxDQUFDRztBQUF0QyxJQUhGLEVBSUUsb0RBQUMsMkVBQUQsT0FKRixDQURGLENBekVKLENBREYsQ0FERixDQURGO0FBMEZELENBcElEOztjQUFNM0QsVzs7ZUFzSVM0RCwrRUFBVSxDQUFDNUYsTUFBRCxDQUFWLENBQW1CZ0MsV0FBbkIsQzs7QUFBQTs7Ozs7Ozs7OzswQkFuTFRoQyxNOzBCQXlDQThCLFU7MEJBSUFFLFciLCJmaWxlIjoiZGZkNDFkMC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5vZGUsIGNyZWF0ZUVkaXRvciwgRWRpdG9yIH0gZnJvbSAnc2xhdGUnO1xyXG5pbXBvcnQgeyB3aXRoRm9udFNpemVzIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9mb250U2l6ZS93aXRoRm9udFNpemVzJztcclxuaW1wb3J0IHsgd2l0aExpc3RzIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9saXN0cy93aXRoTGlzdHMnO1xyXG5pbXBvcnQgeyB3aXRoSGVhZGluZ3MgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2hlYWRpbmcvd2l0aEhlYWRpbmdzJztcclxuaW1wb3J0IHsgd2l0aEFsaWdubWVudHMgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2FsaWdubWVudC93aXRoQWxpZ25tZW50cyc7XHJcbmltcG9ydCB7IHdpdGhMaW5rcyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvbGlua3Mvd2l0aExpbmtzJztcclxuaW1wb3J0IHtcclxuICB3aXRoRW1waGFzaXplLFxyXG4gIE1BUktfSE9US0VZUyxcclxuICBFbXBoYXNpemVUeXBlcyxcclxuICBFbXBoYXNpemVDb21tYW5kcyxcclxufSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2VtcGhhc2l6ZS93aXRoRW1waGFzaXplJztcclxuaW1wb3J0IHsgd2l0aFJlYWN0LCBTbGF0ZSwgRWRpdGFibGUgfSBmcm9tICdzbGF0ZS1yZWFjdCc7XHJcbmltcG9ydCBpc0hvdGtleSBmcm9tICdpcy1ob3RrZXknO1xyXG5pbXBvcnQge1xyXG4gIHJlbmRlck1hcmssXHJcbiAgcmVuZGVyRWxlbWVudCxcclxufSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9Db250cm9scy9TbGF0ZURlZmF1bHRDb250cm9scyc7XHJcbmltcG9ydCB7IEhvdmVyaW5nVG9vbGJhciB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL0NvbnRyb2xzL2hvdmVyaW5nVG9vbGJhci9Ib3ZlcmluZ1Rvb2xiYXInO1xyXG5pbXBvcnQgSGVhZGluZ0J1dHRvbkNvbXBhY3QgZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9oZWFkaW5nL0hlYWRpbmdCdXR0b25Db21wYWN0JztcclxuaW1wb3J0IEZvbnRTaXplQnV0dG9uIGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvZm9udFNpemUvRm9udFNpemVCdXR0b24nO1xyXG5pbXBvcnQgeyBBbGlnbm1lbnRCdXR0b25zIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9hbGlnbm1lbnQvQWxpZ25tZW50QnV0dG9ucyc7XHJcbmltcG9ydCB7IExpc3RCdXR0b25zIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9saXN0cy9MaXN0QnV0dG9ucyc7XHJcbmltcG9ydCB7IExpbmtCdXR0b24gfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2xpbmtzL0xpbmtCdXR0b24nO1xyXG5pbXBvcnQgeyBFbXBoYXNpemVCdXR0b24gfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2VtcGhhc2l6ZS9FbXBoYXNpemVCdXR0b24nO1xyXG5pbXBvcnQgY3JlYXRlU3R5bGVzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jcmVhdGVTdHlsZXMnO1xyXG5pbXBvcnQgd2l0aFN0eWxlcywgeyBXaXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcy93aXRoU3R5bGVzJztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NyZWF0ZU11aVRoZW1lJztcclxuaW1wb3J0IElucHV0R3JvdXAgZnJvbSAnZ3Vlc3RiZWxsLWZvcm1zL2J1aWxkL2NvbXBvbmVudHMvaW5wdXRHcm91cCc7XHJcbmltcG9ydCB5ZWxsb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3llbGxvdyc7XHJcbmltcG9ydCByZWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3JlZCc7XHJcbmltcG9ydCB7IHdpdGhIaXN0b3J5IH0gZnJvbSAnc2xhdGUtaGlzdG9yeSc7XHJcblxyXG5leHBvcnQgdHlwZSBTbGF0ZUVkaXRvck9uQ2hhbmdlSGFuZGxlciA9ICh2YWw6IHtcclxuICB2YWx1ZTogTm9kZVtdO1xyXG4gIGlzRGlydHk6IGJvb2xlYW47XHJcbiAgaXNWYWxpZDogYm9vbGVhbjtcclxufSkgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xhdGVFZGl0b3JDdXN0b21Qcm9wcyB7XHJcbiAgdmFsdWU6IE5vZGVbXTtcclxuICBpbml0aWFsVmFsdWU/OiBOb2RlW107XHJcbiAgb25DaGFuZ2U/OiBTbGF0ZUVkaXRvck9uQ2hhbmdlSGFuZGxlcjtcclxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcclxuICBsYWJlbD86IEpTWC5FbGVtZW50IHwgc3RyaW5nO1xyXG4gIHRpdGxlPzogSlNYLkVsZW1lbnQgfCBzdHJpbmc7XHJcbiAgbWF4Q2hhcnM/OiBudW1iZXI7XHJcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSAoeyBzcGFjaW5nLCBwYWxldHRlLCB0eXBvZ3JhcGh5IH06IFRoZW1lKSA9PlxyXG4gIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICB0b29sYmFyOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgbGFiZWw6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgcGFkZGluZzogc3BhY2luZygpLFxyXG4gICAgICBmb250U2l6ZTogJzEuMnJlbScsXHJcbiAgICAgIHRyYW5zaXRpb246ICcwLjVzIGNvbG9yJyxcclxuICAgIH0sXHJcbiAgICBsYWJlbEZvY3VzZWQ6IHtcclxuICAgICAgY29sb3I6IHBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgfSxcclxuICAgIGVkaXRhYmxlOiB7XHJcbiAgICAgIHBhZGRpbmc6IHNwYWNpbmcoMiksXHJcbiAgICB9LFxyXG4gICAgZWRpdGFibGVFZGl0YWJsZToge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLmdyZXlbMTAwXSxcclxuICAgIH0sXHJcbiAgICBjaGFyYWN0ZXJDb3VudENvbnRhaW5lcjoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgcmlnaHQ6IDMsXHJcbiAgICAgIGJvdHRvbTogMyxcclxuICAgICAgZm9udFNpemU6IHR5cG9ncmFwaHkuY2FwdGlvbi5mb250U2l6ZSxcclxuICAgICAgY29sb3I6IHBhbGV0dGUuZ3JleVs1MDBdLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnMC41cyBjb2xvcicsXHJcbiAgICB9LFxyXG4gICAgY2hhcmFjdGVyQ291bnRDb250YWluZXJXYXJuaW5nOiB7XHJcbiAgICAgIGNvbG9yOiB5ZWxsb3dbNzAwXSxcclxuICAgIH0sXHJcbiAgICBjaGFyYWN0ZXJDb3VudENvbnRhaW5lckVycm9yOiB7XHJcbiAgICAgIGNvbG9yOiByZWRbNzAwXSxcclxuICAgIH0sXHJcbiAgICByb290OiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbmNvbnN0IGFsbEhvdGtleXMgPSB7IC4uLk1BUktfSE9US0VZUyB9O1xyXG5cclxudHlwZSBTbGF0ZUVkaXRvclByb3BzID0gU2xhdGVFZGl0b3JDdXN0b21Qcm9wcyAmIFdpdGhTdHlsZXM8dHlwZW9mIHN0eWxlcz47XHJcblxyXG5jb25zdCBTbGF0ZUVkaXRvcjogUmVhY3QuU0ZDPFNsYXRlRWRpdG9yUHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgZWRpdG9yID0gUmVhY3QudXNlUmVmKFxyXG4gICAgd2l0aEhpc3RvcnkoXHJcbiAgICAgIHdpdGhGb250U2l6ZXMoKShcclxuICAgICAgICB3aXRoTGlzdHMoXHJcbiAgICAgICAgICB3aXRoSGVhZGluZ3MoKShcclxuICAgICAgICAgICAgd2l0aEFsaWdubWVudHMod2l0aExpbmtzKHdpdGhFbXBoYXNpemUod2l0aFJlYWN0KGNyZWF0ZUVkaXRvcigpKSkpKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIClcclxuICAgICAgKVxyXG4gICAgKVxyXG4gICkuY3VycmVudDtcclxuICBjb25zdCBbaGFzRm9jdXMsIHNldEhhc0ZvY3VzXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBvbkZvY3VzID0gKCkgPT4gc2V0SGFzRm9jdXModHJ1ZSk7XHJcbiAgY29uc3Qgb25CbHVyID0gKCkgPT4gc2V0SGFzRm9jdXMoZmFsc2UpO1xyXG5cclxuICBsZXQgYWxsb3dOZXdDaGFyID0gdHJ1ZTtcclxuICBsZXQgY2hhcnMgPSAwO1xyXG4gIGxldCBjaGFyc0xlZnQgPSAwO1xyXG4gIGxldCBwcm9ncmVzcyA9IDA7XHJcbiAgaWYgKHByb3BzLm1heENoYXJzICYmICFwcm9wcy5yZWFkT25seSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY2hhcnMgPSBFZGl0b3IudGV4dChlZGl0b3IsIHtcclxuICAgICAgICBhbmNob3I6IEVkaXRvci5zdGFydChlZGl0b3IsIFtdKSxcclxuICAgICAgICBmb2N1czogRWRpdG9yLmVuZChlZGl0b3IsIFtdKSxcclxuICAgICAgfSkubGVuZ3RoO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY2hhcnMgPSAwO1xyXG4gICAgfVxyXG4gICAgY2hhcnNMZWZ0ID0gcHJvcHMubWF4Q2hhcnMgLSBjaGFycztcclxuICAgIHByb2dyZXNzID0gKGNoYXJzTGVmdCAvIHByb3BzLm1heENoYXJzKSAqIDEwMDtcclxuICAgIGlmIChjaGFyc0xlZnQgPT09IDApIHtcclxuICAgICAgYWxsb3dOZXdDaGFyID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9ICh2YWw6IE5vZGVbXSkgPT5cclxuICAgIHByb3BzLm9uQ2hhbmdlKHsgdmFsdWU6IHZhbCwgaXNWYWxpZDogYWxsb3dOZXdDaGFyLCBpc0RpcnR5OiB0cnVlIH0pO1xyXG5cclxuICBjb25zdCBba2V5LCBzZXRLZXldID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHNldEtleShrZXkgKyAxKSwgW3Byb3BzLnJlYWRPbmx5ICYmIHByb3BzLnZhbHVlXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxJbnB1dEdyb3VwIHRpdGxlPXtwcm9wcy50aXRsZX0ga2V5PXtwcm9wcy5yZWFkT25seSA/IGtleSA6IHVuZGVmaW5lZH0+XHJcbiAgICAgIDxTbGF0ZSBlZGl0b3I9e2VkaXRvcn0gZGVmYXVsdFZhbHVlPXtwcm9wcy52YWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnc2xhdGUtZWRpdG9yJywgY2xhc3Nlcy5yb290KX0+XHJcbiAgICAgICAgICB7IXByb3BzLnJlYWRPbmx5ICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0+XHJcbiAgICAgICAgICAgICAge3Byb3BzLmxhYmVsICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdzbGF0ZS1lZGl0b3JfX2xhYmVsJywgY2xhc3Nlcy5sYWJlbCwge1xyXG4gICAgICAgICAgICAgICAgICAgICdzbGF0ZS1lZGl0b3JfX2xhYmVsLS1hY3RpdmUnOiBoYXNGb2N1cyxcclxuICAgICAgICAgICAgICAgICAgICBbY2xhc3Nlcy5sYWJlbEZvY3VzZWRdOiBoYXNGb2N1cyxcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9wcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPEhlYWRpbmdCdXR0b25Db21wYWN0IC8+XHJcbiAgICAgICAgICAgICAgPEZvbnRTaXplQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgPEFsaWdubWVudEJ1dHRvbnMgLz5cclxuICAgICAgICAgICAgICA8TGlzdEJ1dHRvbnMgLz5cclxuICAgICAgICAgICAgICA8TGlua0J1dHRvbiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8RWRpdGFibGVcclxuICAgICAgICAgICAgcmVhZE9ubHk9e3Byb3BzLnJlYWRPbmx5fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5lZGl0YWJsZSwge1xyXG4gICAgICAgICAgICAgIFtjbGFzc2VzLmVkaXRhYmxlRWRpdGFibGVdOiAhcHJvcHMucmVhZE9ubHksXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICByZW5kZXJNYXJrPXtyZW5kZXJNYXJrfVxyXG4gICAgICAgICAgICByZW5kZXJFbGVtZW50PXtyZW5kZXJFbGVtZW50fVxyXG4gICAgICAgICAgICBvbktleURvd249e2V2ZW50ID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIWFsbG93TmV3Q2hhcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoZXZlbnQua2V5Q29kZSA9PT0gOCB8fCBldmVudC5rZXlDb2RlID09PSA0NikpIHtcclxuICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBmb3IgKGNvbnN0IGhvdGtleSBpbiBhbGxIb3RrZXlzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNIb3RrZXkoaG90a2V5LCAoZXZlbnQgYXMgdW5rbm93bikgYXMgS2V5Ym9hcmRFdmVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgZWRpdG9yLmV4ZWMoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEVtcGhhc2l6ZUNvbW1hbmRzLlRvZ2dsZUVtcGhhc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICBtYXJrOiB7IHR5cGU6IE1BUktfSE9US0VZU1tob3RrZXldIH0sXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBpc0hvdGtleSgnc2hpZnQrZW50ZXInLCAoZXZlbnQgYXMgdW5rbm93bikgYXMgS2V5Ym9hcmRFdmVudClcclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlZGl0b3IuZXhlYyh7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdpbnNlcnRfdGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdcXG4nLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkZvY3VzPXtvbkZvY3VzfVxyXG4gICAgICAgICAgICBvbkJsdXI9e29uQmx1cn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7cHJvcHMubWF4Q2hhcnMgJiYgIXByb3BzLnJlYWRPbmx5ICYmIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICdzbGF0ZS1lZGl0b3JfX2NoYXItY291bnQnLFxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcy5jaGFyYWN0ZXJDb3VudENvbnRhaW5lcixcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzZXMuY2hhcmFjdGVyQ291bnRDb250YWluZXJXYXJuaW5nXTogcHJvZ3Jlc3MgPD0gMTAsXHJcbiAgICAgICAgICAgICAgICAgICdzbGF0ZS1lZGl0b3JfX2NoYXItY291bnQtLXdhcm5pbmcnOiBwcm9ncmVzcyA8PSAxMCxcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzZXMuY2hhcmFjdGVyQ291bnRDb250YWluZXJFcnJvcl06IHByb2dyZXNzIDw9IDAsXHJcbiAgICAgICAgICAgICAgICAgICdzbGF0ZS1lZGl0b3JfX2NoYXItY291bnQtLWVycm9yJzogcHJvZ3Jlc3MgPD0gMCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2NoYXJzfS97cHJvcHMubWF4Q2hhcnN9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtlZGl0b3Iuc2VsZWN0aW9uICYmICFwcm9wcy5yZWFkT25seSAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPEhvdmVyaW5nVG9vbGJhcj5cclxuICAgICAgICAgICAgICAgIDxFbXBoYXNpemVCdXR0b24gdHlwZT17RW1waGFzaXplVHlwZXMuQm9sZH0gLz5cclxuICAgICAgICAgICAgICAgIDxFbXBoYXNpemVCdXR0b24gdHlwZT17RW1waGFzaXplVHlwZXMuSXRhbGljfSAvPlxyXG4gICAgICAgICAgICAgICAgPEVtcGhhc2l6ZUJ1dHRvbiB0eXBlPXtFbXBoYXNpemVUeXBlcy5VbmRlcmxpbmV9IC8+XHJcbiAgICAgICAgICAgICAgICA8TGlua0J1dHRvbiAvPlxyXG4gICAgICAgICAgICAgIDwvSG92ZXJpbmdUb29sYmFyPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7Lyo8cHJlPntKU09OLnN0cmluZ2lmeShwcm9wcy5zdGF0ZS5zbGF0ZVN0YXRlLCBudWxsLCAyKX08L3ByZT4qL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TbGF0ZT5cclxuICAgIDwvSW5wdXRHcm91cD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFNsYXRlRWRpdG9yKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==