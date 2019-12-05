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
  }, [props.value]);
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](guestbell_forms_build_components_inputGroup__WEBPACK_IMPORTED_MODULE_21___default.a, {
    title: props.title,
    key: key
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbW1vbi9jb21wb25lbnRzL3NsYXRlRWRpdG9yL1NsYXRlRWRpdG9yLnRzeCJdLCJuYW1lcyI6WyJzdHlsZXMiLCJzcGFjaW5nIiwicGFsZXR0ZSIsInR5cG9ncmFwaHkiLCJjcmVhdGVTdHlsZXMiLCJ0b29sYmFyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJsYWJlbCIsInBhZGRpbmciLCJmb250U2l6ZSIsInRyYW5zaXRpb24iLCJsYWJlbEZvY3VzZWQiLCJjb2xvciIsInByaW1hcnkiLCJtYWluIiwiZWRpdGFibGUiLCJlZGl0YWJsZUVkaXRhYmxlIiwiYmFja2dyb3VuZCIsImdyZXkiLCJjaGFyYWN0ZXJDb3VudENvbnRhaW5lciIsInBvc2l0aW9uIiwicmlnaHQiLCJib3R0b20iLCJjYXB0aW9uIiwiY2hhcmFjdGVyQ291bnRDb250YWluZXJXYXJuaW5nIiwieWVsbG93IiwiY2hhcmFjdGVyQ291bnRDb250YWluZXJFcnJvciIsInJlZCIsInJvb3QiLCJhbGxIb3RrZXlzIiwiTUFSS19IT1RLRVlTIiwiU2xhdGVFZGl0b3IiLCJwcm9wcyIsImNsYXNzZXMiLCJlZGl0b3IiLCJSZWFjdCIsIndpdGhIaXN0b3J5Iiwid2l0aEZvbnRTaXplcyIsIndpdGhMaXN0cyIsIndpdGhIZWFkaW5ncyIsIndpdGhBbGlnbm1lbnRzIiwid2l0aExpbmtzIiwid2l0aEVtcGhhc2l6ZSIsIndpdGhSZWFjdCIsImNyZWF0ZUVkaXRvciIsImN1cnJlbnQiLCJoYXNGb2N1cyIsInNldEhhc0ZvY3VzIiwib25Gb2N1cyIsIm9uQmx1ciIsImFsbG93TmV3Q2hhciIsImNoYXJzIiwiY2hhcnNMZWZ0IiwicHJvZ3Jlc3MiLCJtYXhDaGFycyIsInJlYWRPbmx5IiwiRWRpdG9yIiwidGV4dCIsImFuY2hvciIsInN0YXJ0IiwiZm9jdXMiLCJlbmQiLCJsZW5ndGgiLCJlcnJvciIsIm9uQ2hhbmdlIiwidmFsIiwidmFsdWUiLCJpc1ZhbGlkIiwiaXNEaXJ0eSIsImtleSIsInNldEtleSIsInRpdGxlIiwiY2xhc3NOYW1lcyIsInJlbmRlck1hcmsiLCJyZW5kZXJFbGVtZW50IiwiZXZlbnQiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJob3RrZXkiLCJpc0hvdGtleSIsImV4ZWMiLCJ0eXBlIiwiRW1waGFzaXplQ29tbWFuZHMiLCJUb2dnbGVFbXBoYXNpemUiLCJtYXJrIiwic2VsZWN0aW9uIiwiRW1waGFzaXplVHlwZXMiLCJCb2xkIiwiSXRhbGljIiwiVW5kZXJsaW5lIiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBbUJBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsTUFBWUMsT0FBWixRQUFZQSxPQUFaO0FBQUEsTUFBcUJDLFVBQXJCLFFBQXFCQSxVQUFyQjtBQUFBLFNBQ2JDLDZFQUFZLENBQUM7QUFDWEMsV0FBTyxFQUFFO0FBQ1BDLGFBQU8sRUFBRSxNQURGO0FBRVBDLGdCQUFVLEVBQUU7QUFGTCxLQURFO0FBS1hDLFNBQUssRUFBRTtBQUNMRixhQUFPLEVBQUUsTUFESjtBQUVMQyxnQkFBVSxFQUFFLFFBRlA7QUFHTEUsYUFBTyxFQUFFUixPQUFPLEVBSFg7QUFJTFMsY0FBUSxFQUFFLFFBSkw7QUFLTEMsZ0JBQVUsRUFBRTtBQUxQLEtBTEk7QUFZWEMsZ0JBQVksRUFBRTtBQUNaQyxXQUFLLEVBQUVYLE9BQU8sQ0FBQ1ksT0FBUixDQUFnQkM7QUFEWCxLQVpIO0FBZVhDLFlBQVEsRUFBRTtBQUNSUCxhQUFPLEVB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QUN1QixRQUF6QixJQUNDO0FBQ0UsYUFBUyxFQUFFaUIsa0RBQVUsQ0FDbkIsMEJBRG1CLEVBRW5CdkMsT0FBTyxDQUFDZCx1QkFGVyxvREFJaEJjLE9BQU8sQ0FBQ1QsOEJBSlEsRUFJeUI2QixRQUFRLElBQUksRUFKckMsaUNBS2pCLG1DQUxpQixFQUtvQkEsUUFBUSxJQUFJLEVBTGhDLGlDQU1oQnBCLE9BQU8sQ0FBQ1AsNEJBTlEsRUFNdUIyQixRQUFRLElBQUksQ0FObkMsaUNBT2pCLGlDQVBpQixFQU9rQkEsUUFBUSxJQUFJLENBUDlCO0FBRHZCLEtBWUdGLEtBWkgsT0FZV25CLEtBQUssQ0FBQ3NCLFFBWmpCLENBekRKLEVBd0VHcEIsTUFBTSxDQUFDbUQsU0FBUCxJQUFvQixDQUFDckQsS0FBSyxDQUFDdUIsUUFBM0IsSUFDQywwR0FDRSxvREFBQyxnR0FBRCxRQUNFLG9EQUFDLHlGQUFEO0FBQWlCLFFBQUksRUFBRStCLHFGQUFjLENBQUNDO0FBQXRDLElBREYsRUFFRSxvREFBQyx5RkFBRDtBQUFpQixRQUFJLEVBQUVELHFGQUFjLENBQUNFO0FBQXRDLElBRkYsRUFHRSxvREFBQyx5RkFBRDtBQUFpQixRQUFJLEVBQUVGLHFGQUFjLENBQUNHO0FBQXRDLElBSEYsRUFJRSxvREFBQywyRUFBRCxPQUpGLENBREYsQ0F6RUosQ0FERixDQURGLENBREY7QUEwRkQsQ0FwSUQ7O2NBQU0xRCxXOztlQXNJUzJELCtFQUFVLENBQUMzRixNQUFELENBQVYsQ0FBbUJnQyxXQUFuQixDOztBQUFBOzs7Ozs7Ozs7OzBCQW5MVGhDLE07MEJBeUNBOEIsVTswQkFJQUUsVyIsImZpbGUiOiJkZmQ0MWQwLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTm9kZSwgY3JlYXRlRWRpdG9yLCBFZGl0b3IgfSBmcm9tICdzbGF0ZSc7XHJcbmltcG9ydCB7IHdpdGhGb250U2l6ZXMgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2ZvbnRTaXplL3dpdGhGb250U2l6ZXMnO1xyXG5pbXBvcnQgeyB3aXRoTGlzdHMgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2xpc3RzL3dpdGhMaXN0cyc7XHJcbmltcG9ydCB7IHdpdGhIZWFkaW5ncyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvaGVhZGluZy93aXRoSGVhZGluZ3MnO1xyXG5pbXBvcnQgeyB3aXRoQWxpZ25tZW50cyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvYWxpZ25tZW50L3dpdGhBbGlnbm1lbnRzJztcclxuaW1wb3J0IHsgd2l0aExpbmtzIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9saW5rcy93aXRoTGlua3MnO1xyXG5pbXBvcnQge1xyXG4gIHdpdGhFbXBoYXNpemUsXHJcbiAgTUFSS19IT1RLRVlTLFxyXG4gIEVtcGhhc2l6ZVR5cGVzLFxyXG4gIEVtcGhhc2l6ZUNvbW1hbmRzLFxyXG59IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvZW1waGFzaXplL3dpdGhFbXBoYXNpemUnO1xyXG5pbXBvcnQgeyB3aXRoUmVhY3QsIFNsYXRlLCBFZGl0YWJsZSB9IGZyb20gJ3NsYXRlLXJlYWN0JztcclxuaW1wb3J0IGlzSG90a2V5IGZyb20gJ2lzLWhvdGtleSc7XHJcbmltcG9ydCB7XHJcbiAgcmVuZGVyTWFyayxcclxuICByZW5kZXJFbGVtZW50LFxyXG59IGZyb20gJy4uLy4uLy4uL3NsYXRlL0NvbnRyb2xzL1NsYXRlRGVmYXVsdENvbnRyb2xzJztcclxuaW1wb3J0IHsgSG92ZXJpbmdUb29sYmFyIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvQ29udHJvbHMvaG92ZXJpbmdUb29sYmFyL0hvdmVyaW5nVG9vbGJhcic7XHJcbmltcG9ydCBIZWFkaW5nQnV0dG9uQ29tcGFjdCBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2hlYWRpbmcvSGVhZGluZ0J1dHRvbkNvbXBhY3QnO1xyXG5pbXBvcnQgRm9udFNpemVCdXR0b24gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9mb250U2l6ZS9Gb250U2l6ZUJ1dHRvbic7XHJcbmltcG9ydCB7IEFsaWdubWVudEJ1dHRvbnMgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2FsaWdubWVudC9BbGlnbm1lbnRCdXR0b25zJztcclxuaW1wb3J0IHsgTGlzdEJ1dHRvbnMgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2xpc3RzL0xpc3RCdXR0b25zJztcclxuaW1wb3J0IHsgTGlua0J1dHRvbiB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvbGlua3MvTGlua0J1dHRvbic7XHJcbmltcG9ydCB7IEVtcGhhc2l6ZUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvZW1waGFzaXplL0VtcGhhc2l6ZUJ1dHRvbic7XHJcbmltcG9ydCBjcmVhdGVTdHlsZXMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NyZWF0ZVN0eWxlcyc7XHJcbmltcG9ydCB3aXRoU3R5bGVzLCB7IFdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzL3dpdGhTdHlsZXMnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY3JlYXRlTXVpVGhlbWUnO1xyXG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tICdndWVzdGJlbGwtZm9ybXMvYnVpbGQvY29tcG9uZW50cy9pbnB1dEdyb3VwJztcclxuaW1wb3J0IHllbGxvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMveWVsbG93JztcclxuaW1wb3J0IHJlZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvcmVkJztcclxuaW1wb3J0IHsgd2l0aEhpc3RvcnkgfSBmcm9tICdzbGF0ZS1oaXN0b3J5JztcclxuXHJcbmV4cG9ydCB0eXBlIFNsYXRlRWRpdG9yT25DaGFuZ2VIYW5kbGVyID0gKHZhbDoge1xyXG4gIHZhbHVlOiBOb2RlW107XHJcbiAgaXNEaXJ0eTogYm9vbGVhbjtcclxuICBpc1ZhbGlkOiBib29sZWFuO1xyXG59KSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbGF0ZUVkaXRvckN1c3RvbVByb3BzIHtcclxuICB2YWx1ZTogTm9kZVtdO1xyXG4gIGluaXRpYWxWYWx1ZT86IE5vZGVbXTtcclxuICBvbkNoYW5nZT86IFNsYXRlRWRpdG9yT25DaGFuZ2VIYW5kbGVyO1xyXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG4gIGxhYmVsPzogSlNYLkVsZW1lbnQgfCBzdHJpbmc7XHJcbiAgdGl0bGU/OiBKU1guRWxlbWVudCB8IHN0cmluZztcclxuICBtYXhDaGFycz86IG51bWJlcjtcclxuICByZWFkT25seT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9ICh7IHNwYWNpbmcsIHBhbGV0dGUsIHR5cG9ncmFwaHkgfTogVGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIHRvb2xiYXI6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBsYWJlbDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBwYWRkaW5nOiBzcGFjaW5nKCksXHJcbiAgICAgIGZvbnRTaXplOiAnMS4ycmVtJyxcclxuICAgICAgdHJhbnNpdGlvbjogJzAuNXMgY29sb3InLFxyXG4gICAgfSxcclxuICAgIGxhYmVsRm9jdXNlZDoge1xyXG4gICAgICBjb2xvcjogcGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICB9LFxyXG4gICAgZWRpdGFibGU6IHtcclxuICAgICAgcGFkZGluZzogc3BhY2luZygyKSxcclxuICAgIH0sXHJcbiAgICBlZGl0YWJsZUVkaXRhYmxlOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHBhbGV0dGUuZ3JleVsxMDBdLFxyXG4gICAgfSxcclxuICAgIGNoYXJhY3RlckNvdW50Q29udGFpbmVyOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICByaWdodDogMyxcclxuICAgICAgYm90dG9tOiAzLFxyXG4gICAgICBmb250U2l6ZTogdHlwb2dyYXBoeS5jYXB0aW9uLmZvbnRTaXplLFxyXG4gICAgICBjb2xvcjogcGFsZXR0ZS5ncmV5WzUwMF0sXHJcbiAgICAgIHRyYW5zaXRpb246ICcwLjVzIGNvbG9yJyxcclxuICAgIH0sXHJcbiAgICBjaGFyYWN0ZXJDb3VudENvbnRhaW5lcldhcm5pbmc6IHtcclxuICAgICAgY29sb3I6IHllbGxvd1s3MDBdLFxyXG4gICAgfSxcclxuICAgIGNoYXJhY3RlckNvdW50Q29udGFpbmVyRXJyb3I6IHtcclxuICAgICAgY29sb3I6IHJlZFs3MDBdLFxyXG4gICAgfSxcclxuICAgIHJvb3Q6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuY29uc3QgYWxsSG90a2V5cyA9IHsgLi4uTUFSS19IT1RLRVlTIH07XHJcblxyXG50eXBlIFNsYXRlRWRpdG9yUHJvcHMgPSBTbGF0ZUVkaXRvckN1c3RvbVByb3BzICYgV2l0aFN0eWxlczx0eXBlb2Ygc3R5bGVzPjtcclxuXHJcbmNvbnN0IFNsYXRlRWRpdG9yOiBSZWFjdC5TRkM8U2xhdGVFZGl0b3JQcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBjbGFzc2VzIH0gPSBwcm9wcztcclxuICBjb25zdCBlZGl0b3IgPSBSZWFjdC51c2VSZWYoXHJcbiAgICB3aXRoSGlzdG9yeShcclxuICAgICAgd2l0aEZvbnRTaXplcygpKFxyXG4gICAgICAgIHdpdGhMaXN0cyhcclxuICAgICAgICAgIHdpdGhIZWFkaW5ncygpKFxyXG4gICAgICAgICAgICB3aXRoQWxpZ25tZW50cyh3aXRoTGlua3Mod2l0aEVtcGhhc2l6ZSh3aXRoUmVhY3QoY3JlYXRlRWRpdG9yKCkpKSkpXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcbiAgICApXHJcbiAgKS5jdXJyZW50O1xyXG4gIGNvbnN0IFtoYXNGb2N1cywgc2V0SGFzRm9jdXNdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG9uRm9jdXMgPSAoKSA9PiBzZXRIYXNGb2N1cyh0cnVlKTtcclxuICBjb25zdCBvbkJsdXIgPSAoKSA9PiBzZXRIYXNGb2N1cyhmYWxzZSk7XHJcblxyXG4gIGxldCBhbGxvd05ld0NoYXIgPSB0cnVlO1xyXG4gIGxldCBjaGFycyA9IDA7XHJcbiAgbGV0IGNoYXJzTGVmdCA9IDA7XHJcbiAgbGV0IHByb2dyZXNzID0gMDtcclxuICBpZiAocHJvcHMubWF4Q2hhcnMgJiYgIXByb3BzLnJlYWRPbmx5KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjaGFycyA9IEVkaXRvci50ZXh0KGVkaXRvciwge1xyXG4gICAgICAgIGFuY2hvcjogRWRpdG9yLnN0YXJ0KGVkaXRvciwgW10pLFxyXG4gICAgICAgIGZvY3VzOiBFZGl0b3IuZW5kKGVkaXRvciwgW10pLFxyXG4gICAgICB9KS5sZW5ndGg7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjaGFycyA9IDA7XHJcbiAgICB9XHJcbiAgICBjaGFyc0xlZnQgPSBwcm9wcy5tYXhDaGFycyAtIGNoYXJzO1xyXG4gICAgcHJvZ3Jlc3MgPSAoY2hhcnNMZWZ0IC8gcHJvcHMubWF4Q2hhcnMpICogMTAwO1xyXG4gICAgaWYgKGNoYXJzTGVmdCA9PT0gMCkge1xyXG4gICAgICBhbGxvd05ld0NoYXIgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKHZhbDogTm9kZVtdKSA9PlxyXG4gICAgcHJvcHMub25DaGFuZ2UoeyB2YWx1ZTogdmFsLCBpc1ZhbGlkOiBhbGxvd05ld0NoYXIsIGlzRGlydHk6IHRydWUgfSk7XHJcblxyXG4gIGNvbnN0IFtrZXksIHNldEtleV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gc2V0S2V5KGtleSArIDEpLCBbcHJvcHMudmFsdWVdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPElucHV0R3JvdXAgdGl0bGU9e3Byb3BzLnRpdGxlfSBrZXk9e2tleX0+XHJcbiAgICAgIDxTbGF0ZSBlZGl0b3I9e2VkaXRvcn0gZGVmYXVsdFZhbHVlPXtwcm9wcy52YWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnc2xhdGUtZWRpdG9yJywgY2xhc3Nlcy5yb290KX0+XHJcbiAgICAgICAgICB7IXByb3BzLnJlYWRPbmx5ICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0+XHJcbiAgICAgICAgICAgICAge3Byb3BzLmxhYmVsICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdzbGF0ZS1lZGl0b3JfX2xhYmVsJywgY2xhc3Nlcy5sYWJlbCwge1xyXG4gICAgICAgICAgICAgICAgICAgICdzbGF0ZS1lZGl0b3JfX2xhYmVsLS1hY3RpdmUnOiBoYXNGb2N1cyxcclxuICAgICAgICAgICAgICAgICAgICBbY2xhc3Nlcy5sYWJlbEZvY3VzZWRdOiBoYXNGb2N1cyxcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9wcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPEhlYWRpbmdCdXR0b25Db21wYWN0IC8+XHJcbiAgICAgICAgICAgICAgPEZvbnRTaXplQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgPEFsaWdubWVudEJ1dHRvbnMgLz5cclxuICAgICAgICAgICAgICA8TGlzdEJ1dHRvbnMgLz5cclxuICAgICAgICAgICAgICA8TGlua0J1dHRvbiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8RWRpdGFibGVcclxuICAgICAgICAgICAgcmVhZE9ubHk9e3Byb3BzLnJlYWRPbmx5fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5lZGl0YWJsZSwge1xyXG4gICAgICAgICAgICAgIFtjbGFzc2VzLmVkaXRhYmxlRWRpdGFibGVdOiAhcHJvcHMucmVhZE9ubHksXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICByZW5kZXJNYXJrPXtyZW5kZXJNYXJrfVxyXG4gICAgICAgICAgICByZW5kZXJFbGVtZW50PXtyZW5kZXJFbGVtZW50fVxyXG4gICAgICAgICAgICBvbktleURvd249e2V2ZW50ID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIWFsbG93TmV3Q2hhcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoZXZlbnQua2V5Q29kZSA9PT0gOCB8fCBldmVudC5rZXlDb2RlID09PSA0NikpIHtcclxuICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBmb3IgKGNvbnN0IGhvdGtleSBpbiBhbGxIb3RrZXlzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNIb3RrZXkoaG90a2V5LCAoZXZlbnQgYXMgdW5rbm93bikgYXMgS2V5Ym9hcmRFdmVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgZWRpdG9yLmV4ZWMoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEVtcGhhc2l6ZUNvbW1hbmRzLlRvZ2dsZUVtcGhhc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICBtYXJrOiB7IHR5cGU6IE1BUktfSE9US0VZU1tob3RrZXldIH0sXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBpc0hvdGtleSgnc2hpZnQrZW50ZXInLCAoZXZlbnQgYXMgdW5rbm93bikgYXMgS2V5Ym9hcmRFdmVudClcclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlZGl0b3IuZXhlYyh7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdpbnNlcnRfdGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdcXG4nLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkZvY3VzPXtvbkZvY3VzfVxyXG4gICAgICAgICAgICBvbkJsdXI9e29uQmx1cn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7cHJvcHMubWF4Q2hhcnMgJiYgIXByb3BzLnJlYWRPbmx5ICYmIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICdzbGF0ZS1lZGl0b3JfX2NoYXItY291bnQnLFxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcy5jaGFyYWN0ZXJDb3VudENvbnRhaW5lcixcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzZXMuY2hhcmFjdGVyQ291bnRDb250YWluZXJXYXJuaW5nXTogcHJvZ3Jlc3MgPD0gMTAsXHJcbiAgICAgICAgICAgICAgICAgICdzbGF0ZS1lZGl0b3JfX2NoYXItY291bnQtLXdhcm5pbmcnOiBwcm9ncmVzcyA8PSAxMCxcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzZXMuY2hhcmFjdGVyQ291bnRDb250YWluZXJFcnJvcl06IHByb2dyZXNzIDw9IDAsXHJcbiAgICAgICAgICAgICAgICAgICdzbGF0ZS1lZGl0b3JfX2NoYXItY291bnQtLWVycm9yJzogcHJvZ3Jlc3MgPD0gMCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2NoYXJzfS97cHJvcHMubWF4Q2hhcnN9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtlZGl0b3Iuc2VsZWN0aW9uICYmICFwcm9wcy5yZWFkT25seSAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPEhvdmVyaW5nVG9vbGJhcj5cclxuICAgICAgICAgICAgICAgIDxFbXBoYXNpemVCdXR0b24gdHlwZT17RW1waGFzaXplVHlwZXMuQm9sZH0gLz5cclxuICAgICAgICAgICAgICAgIDxFbXBoYXNpemVCdXR0b24gdHlwZT17RW1waGFzaXplVHlwZXMuSXRhbGljfSAvPlxyXG4gICAgICAgICAgICAgICAgPEVtcGhhc2l6ZUJ1dHRvbiB0eXBlPXtFbXBoYXNpemVUeXBlcy5VbmRlcmxpbmV9IC8+XHJcbiAgICAgICAgICAgICAgICA8TGlua0J1dHRvbiAvPlxyXG4gICAgICAgICAgICAgIDwvSG92ZXJpbmdUb29sYmFyPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7Lyo8cHJlPntKU09OLnN0cmluZ2lmeShwcm9wcy5zdGF0ZS5zbGF0ZVN0YXRlLCBudWxsLCAyKX08L3ByZT4qL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TbGF0ZT5cclxuICAgIDwvSW5wdXRHcm91cD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFNsYXRlRWRpdG9yKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==