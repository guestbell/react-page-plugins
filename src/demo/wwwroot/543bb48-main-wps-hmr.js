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
/* harmony import */ var _slate_plugins_marks_withMarks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../slate/plugins/marks/withMarks */ "./src/lib/slate/plugins/marks/withMarks.ts");
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
/* harmony import */ var _slate_plugins_marks_MarkButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../slate/plugins/marks/MarkButton */ "./src/lib/slate/plugins/marks/MarkButton.tsx");
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

var allHotkeys = _objectSpread({}, _slate_plugins_marks_withMarks__WEBPACK_IMPORTED_MODULE_7__["MARK_HOTKEYS"]);

var SlateEditor = function SlateEditor(props) {
  var _classNames2;

  var classes = props.classes;
  var editor = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](Object(slate_history__WEBPACK_IMPORTED_MODULE_24__["withHistory"])(Object(_slate_plugins_fontSize_withFontSizes__WEBPACK_IMPORTED_MODULE_2__["withFontSizes"])()(Object(_slate_plugins_lists_withLists__WEBPACK_IMPORTED_MODULE_3__["withLists"])(Object(_slate_plugins_heading_withHeadings__WEBPACK_IMPORTED_MODULE_4__["withHeadings"])()(Object(_slate_plugins_alignment_withAlignments__WEBPACK_IMPORTED_MODULE_5__["withAlignments"])(Object(_slate_plugins_links_withLinks__WEBPACK_IMPORTED_MODULE_6__["withLinks"])(Object(_slate_plugins_marks_withMarks__WEBPACK_IMPORTED_MODULE_7__["withMarks"])(Object(slate_react__WEBPACK_IMPORTED_MODULE_8__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_1__["createEditor"])()))))))))).current;

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

  var onChange = function onChange(val) {
    return props.onChange({
      value: val,
      isValid: allowNewChar,
      isDirty: true
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](guestbell_forms_build_components_inputGroup__WEBPACK_IMPORTED_MODULE_21___default.a, {
    title: props.title
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](slate_react__WEBPACK_IMPORTED_MODULE_8__["Slate"], {
    editor: editor,
    defaultValue: props.value,
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
    className: classes.editable,
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
            type: 'toggle_mark',
            mark: {
              type: _slate_plugins_marks_withMarks__WEBPACK_IMPORTED_MODULE_7__["MARK_HOTKEYS"][hotkey]
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
  }, chars, "/", props.maxChars), editor.selection && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_Controls_hoveringToolbar_HoveringToolbar__WEBPACK_IMPORTED_MODULE_11__["HoveringToolbar"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_marks_MarkButton__WEBPACK_IMPORTED_MODULE_17__["MarkButton"], {
    type: _slate_plugins_marks_withMarks__WEBPACK_IMPORTED_MODULE_7__["MarkTypes"].Bold
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_marks_MarkButton__WEBPACK_IMPORTED_MODULE_17__["MarkButton"], {
    type: _slate_plugins_marks_withMarks__WEBPACK_IMPORTED_MODULE_7__["MarkTypes"].Italic
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_marks_MarkButton__WEBPACK_IMPORTED_MODULE_17__["MarkButton"], {
    type: _slate_plugins_marks_withMarks__WEBPACK_IMPORTED_MODULE_7__["MarkTypes"].Underline
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_slate_plugins_links_LinkButton__WEBPACK_IMPORTED_MODULE_16__["LinkButton"], null))))));
};

__signature__(SlateEditor, "useRef{}\nuseState{[hasFocus, setHasFocus](false)}");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbW1vbi9jb21wb25lbnRzL3NsYXRlRWRpdG9yL1NsYXRlRWRpdG9yLnRzeCJdLCJuYW1lcyI6WyJzdHlsZXMiLCJzcGFjaW5nIiwicGFsZXR0ZSIsInR5cG9ncmFwaHkiLCJjcmVhdGVTdHlsZXMiLCJ0b29sYmFyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJsYWJlbCIsInBhZGRpbmciLCJmb250U2l6ZSIsInRyYW5zaXRpb24iLCJsYWJlbEZvY3VzZWQiLCJjb2xvciIsInByaW1hcnkiLCJtYWluIiwiZWRpdGFibGUiLCJiYWNrZ3JvdW5kIiwiZ3JleSIsImNoYXJhY3RlckNvdW50Q29udGFpbmVyIiwicG9zaXRpb24iLCJyaWdodCIsImJvdHRvbSIsImNhcHRpb24iLCJjaGFyYWN0ZXJDb3VudENvbnRhaW5lcldhcm5pbmciLCJ5ZWxsb3ciLCJjaGFyYWN0ZXJDb3VudENvbnRhaW5lckVycm9yIiwicmVkIiwicm9vdCIsImFsbEhvdGtleXMiLCJNQVJLX0hPVEtFWVMiLCJTbGF0ZUVkaXRvciIsInByb3BzIiwiY2xhc3NlcyIsImVkaXRvciIsIlJlYWN0Iiwid2l0aEhpc3RvcnkiLCJ3aXRoRm9udFNpemVzIiwid2l0aExpc3RzIiwid2l0aEhlYWRpbmdzIiwid2l0aEFsaWdubWVudHMiLCJ3aXRoTGlua3MiLCJ3aXRoTWFya3MiLCJ3aXRoUmVhY3QiLCJjcmVhdGVFZGl0b3IiLCJjdXJyZW50IiwiaGFzRm9jdXMiLCJzZXRIYXNGb2N1cyIsIm9uRm9jdXMiLCJvbkJsdXIiLCJhbGxvd05ld0NoYXIiLCJjaGFycyIsImNoYXJzTGVmdCIsInByb2dyZXNzIiwibWF4Q2hhcnMiLCJFZGl0b3IiLCJ0ZXh0IiwiYW5jaG9yIiwic3RhcnQiLCJmb2N1cyIsImVuZCIsImxlbmd0aCIsImVycm9yIiwib25DaGFuZ2UiLCJ2YWwiLCJ2YWx1ZSIsImlzVmFsaWQiLCJpc0RpcnR5IiwidGl0bGUiLCJjbGFzc05hbWVzIiwicmVuZGVyTWFyayIsInJlbmRlckVsZW1lbnQiLCJldmVudCIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsImhvdGtleSIsImlzSG90a2V5IiwiZXhlYyIsInR5cGUiLCJtYXJrIiwic2VsZWN0aW9uIiwiTWFya1R5cGVzIiwiQm9sZCIsIkl0YWxpYyIsIlVuZGVybGluZSIsIndpdGhTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQWtCQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLE1BQUdDLE9BQUgsUUFBR0EsT0FBSDtBQUFBLE1BQVlDLE9BQVosUUFBWUEsT0FBWjtBQUFBLE1BQXFCQyxVQUFyQixRQUFxQkEsVUFBckI7QUFBQSxTQUNiQyw2RUFBWSxDQUFDO0FBQ1hDLFdBQU8sRUFBRTtBQUNQQyxhQUFPLEVBQUUsTUFERjtBQUVQQyxnQkFBVSxFQUFFO0FBRkwsS0FERTtBQUtYQyxTQUFLLEVBQUU7QUFDTEYsYUFBTyxFQUFFLE1BREo7QUFFTEMsZ0JBQVUsRUFBRSxRQUZQO0FBR0xFLGFBQU8sRUFBRVIsT0FBTyxFQUhYO0FBSUxTLGNBQVEsRUFBRSxRQUpMO0FBS0xDLGdCQUFVLEVBQUU7QUFMUCxLQUxJO0FBWVhDLGdCQUFZLEVBQUU7QUFDWkMsV0FBSyxFQUFFWCxPQUFPLENBQUNZLE9BQVIsQ0FBZ0JDO0FBRFgsS0FaSDtBQWVYQyxZQUFRLEVBQUU7QUFDUlAsYUFBTyxFQUFFUixPQUFPLENBQUMsQ0FBRCxDQURSO0FBRVJnQixnQkFBVSxFQUFFZixPQUFPLENBQUNnQixJQUFSLENBQWEsR0FBYjtBQUZKLEtBZkM7QUFtQlhDLDJCQUF1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LENBREY7QUFxRkQsQ0E3SEQ7O2NBQU1yRCxXOztlQStIU3NELCtFQUFVLENBQUNyRixNQUFELENBQVYsQ0FBbUIrQixXQUFuQixDOztBQUFBOzs7Ozs7Ozs7OzBCQTFLVC9CLE07MEJBdUNBNkIsVTswQkFJQUUsVyIsImZpbGUiOiI1NDNiYjQ4LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTm9kZSwgY3JlYXRlRWRpdG9yLCBFZGl0b3IgfSBmcm9tICdzbGF0ZSc7XHJcbmltcG9ydCB7IHdpdGhGb250U2l6ZXMgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2ZvbnRTaXplL3dpdGhGb250U2l6ZXMnO1xyXG5pbXBvcnQgeyB3aXRoTGlzdHMgfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2xpc3RzL3dpdGhMaXN0cyc7XHJcbmltcG9ydCB7IHdpdGhIZWFkaW5ncyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvaGVhZGluZy93aXRoSGVhZGluZ3MnO1xyXG5pbXBvcnQgeyB3aXRoQWxpZ25tZW50cyB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvYWxpZ25tZW50L3dpdGhBbGlnbm1lbnRzJztcclxuaW1wb3J0IHsgd2l0aExpbmtzIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9saW5rcy93aXRoTGlua3MnO1xyXG5pbXBvcnQge1xyXG4gIHdpdGhNYXJrcyxcclxuICBNQVJLX0hPVEtFWVMsXHJcbiAgTWFya1R5cGVzLFxyXG59IGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvbWFya3Mvd2l0aE1hcmtzJztcclxuaW1wb3J0IHsgd2l0aFJlYWN0LCBTbGF0ZSwgRWRpdGFibGUgfSBmcm9tICdzbGF0ZS1yZWFjdCc7XHJcbmltcG9ydCBpc0hvdGtleSBmcm9tICdpcy1ob3RrZXknO1xyXG5pbXBvcnQge1xyXG4gIHJlbmRlck1hcmssXHJcbiAgcmVuZGVyRWxlbWVudCxcclxufSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9Db250cm9scy9TbGF0ZURlZmF1bHRDb250cm9scyc7XHJcbmltcG9ydCB7IEhvdmVyaW5nVG9vbGJhciB9IGZyb20gJy4uLy4uLy4uL3NsYXRlL0NvbnRyb2xzL2hvdmVyaW5nVG9vbGJhci9Ib3ZlcmluZ1Rvb2xiYXInO1xyXG5pbXBvcnQgSGVhZGluZ0J1dHRvbkNvbXBhY3QgZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9oZWFkaW5nL0hlYWRpbmdCdXR0b25Db21wYWN0JztcclxuaW1wb3J0IEZvbnRTaXplQnV0dG9uIGZyb20gJy4uLy4uLy4uL3NsYXRlL3BsdWdpbnMvZm9udFNpemUvRm9udFNpemVCdXR0b24nO1xyXG5pbXBvcnQgeyBBbGlnbm1lbnRCdXR0b25zIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9hbGlnbm1lbnQvQWxpZ25tZW50QnV0dG9ucyc7XHJcbmltcG9ydCB7IExpc3RCdXR0b25zIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9saXN0cy9MaXN0QnV0dG9ucyc7XHJcbmltcG9ydCB7IExpbmtCdXR0b24gfSBmcm9tICcuLi8uLi8uLi9zbGF0ZS9wbHVnaW5zL2xpbmtzL0xpbmtCdXR0b24nO1xyXG5pbXBvcnQgeyBNYXJrQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vc2xhdGUvcGx1Z2lucy9tYXJrcy9NYXJrQnV0dG9uJztcclxuaW1wb3J0IGNyZWF0ZVN0eWxlcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY3JlYXRlU3R5bGVzJztcclxuaW1wb3J0IHdpdGhTdHlsZXMsIHsgV2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMvd2l0aFN0eWxlcyc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IElucHV0R3JvdXAgZnJvbSAnZ3Vlc3RiZWxsLWZvcm1zL2J1aWxkL2NvbXBvbmVudHMvaW5wdXRHcm91cCc7XHJcbmltcG9ydCB5ZWxsb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3llbGxvdyc7XHJcbmltcG9ydCByZWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3JlZCc7XHJcbmltcG9ydCB7IHdpdGhIaXN0b3J5IH0gZnJvbSAnc2xhdGUtaGlzdG9yeSc7XHJcblxyXG5leHBvcnQgdHlwZSBTbGF0ZUVkaXRvck9uQ2hhbmdlSGFuZGxlciA9ICh2YWw6IHtcclxuICB2YWx1ZTogTm9kZVtdO1xyXG4gIGlzRGlydHk6IGJvb2xlYW47XHJcbiAgaXNWYWxpZDogYm9vbGVhbjtcclxufSkgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xhdGVFZGl0b3JDdXN0b21Qcm9wcyB7XHJcbiAgdmFsdWU6IE5vZGVbXTtcclxuICBpbml0aWFsVmFsdWU/OiBOb2RlW107XHJcbiAgb25DaGFuZ2U6IFNsYXRlRWRpdG9yT25DaGFuZ2VIYW5kbGVyO1xyXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG4gIGxhYmVsPzogSlNYLkVsZW1lbnQgfCBzdHJpbmc7XHJcbiAgdGl0bGU/OiBKU1guRWxlbWVudCB8IHN0cmluZztcclxuICBtYXhDaGFycz86IG51bWJlcjtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0gKHsgc3BhY2luZywgcGFsZXR0ZSwgdHlwb2dyYXBoeSB9OiBUaGVtZSkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgdG9vbGJhcjoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGxhYmVsOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIHBhZGRpbmc6IHNwYWNpbmcoKSxcclxuICAgICAgZm9udFNpemU6ICcxLjJyZW0nLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnMC41cyBjb2xvcicsXHJcbiAgICB9LFxyXG4gICAgbGFiZWxGb2N1c2VkOiB7XHJcbiAgICAgIGNvbG9yOiBwYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgIH0sXHJcbiAgICBlZGl0YWJsZToge1xyXG4gICAgICBwYWRkaW5nOiBzcGFjaW5nKDIpLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLmdyZXlbMTAwXSxcclxuICAgIH0sXHJcbiAgICBjaGFyYWN0ZXJDb3VudENvbnRhaW5lcjoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgcmlnaHQ6IDMsXHJcbiAgICAgIGJvdHRvbTogMyxcclxuICAgICAgZm9udFNpemU6IHR5cG9ncmFwaHkuY2FwdGlvbi5mb250U2l6ZSxcclxuICAgICAgY29sb3I6IHBhbGV0dGUuZ3JleVs1MDBdLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnMC41cyBjb2xvcicsXHJcbiAgICB9LFxyXG4gICAgY2hhcmFjdGVyQ291bnRDb250YWluZXJXYXJuaW5nOiB7XHJcbiAgICAgIGNvbG9yOiB5ZWxsb3dbNzAwXSxcclxuICAgIH0sXHJcbiAgICBjaGFyYWN0ZXJDb3VudENvbnRhaW5lckVycm9yOiB7XHJcbiAgICAgIGNvbG9yOiByZWRbNzAwXSxcclxuICAgIH0sXHJcbiAgICByb290OiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbmNvbnN0IGFsbEhvdGtleXMgPSB7IC4uLk1BUktfSE9US0VZUyB9O1xyXG5cclxudHlwZSBTbGF0ZUVkaXRvclByb3BzID0gU2xhdGVFZGl0b3JDdXN0b21Qcm9wcyAmIFdpdGhTdHlsZXM8dHlwZW9mIHN0eWxlcz47XHJcblxyXG5jb25zdCBTbGF0ZUVkaXRvcjogUmVhY3QuU0ZDPFNsYXRlRWRpdG9yUHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgZWRpdG9yID0gUmVhY3QudXNlUmVmKFxyXG4gICAgd2l0aEhpc3RvcnkoXHJcbiAgICAgIHdpdGhGb250U2l6ZXMoKShcclxuICAgICAgICB3aXRoTGlzdHMoXHJcbiAgICAgICAgICB3aXRoSGVhZGluZ3MoKShcclxuICAgICAgICAgICAgd2l0aEFsaWdubWVudHMod2l0aExpbmtzKHdpdGhNYXJrcyh3aXRoUmVhY3QoY3JlYXRlRWRpdG9yKCkpKSkpXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcbiAgICApXHJcbiAgKS5jdXJyZW50O1xyXG4gIGNvbnN0IFtoYXNGb2N1cywgc2V0SGFzRm9jdXNdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG9uRm9jdXMgPSAoKSA9PiBzZXRIYXNGb2N1cyh0cnVlKTtcclxuICBjb25zdCBvbkJsdXIgPSAoKSA9PiBzZXRIYXNGb2N1cyhmYWxzZSk7XHJcblxyXG4gIGxldCBhbGxvd05ld0NoYXIgPSB0cnVlO1xyXG4gIGxldCBjaGFycyA9IDA7XHJcbiAgbGV0IGNoYXJzTGVmdCA9IDA7XHJcbiAgbGV0IHByb2dyZXNzID0gMDtcclxuICBpZiAocHJvcHMubWF4Q2hhcnMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNoYXJzID0gRWRpdG9yLnRleHQoZWRpdG9yLCB7XHJcbiAgICAgICAgYW5jaG9yOiBFZGl0b3Iuc3RhcnQoZWRpdG9yLCBbXSksXHJcbiAgICAgICAgZm9jdXM6IEVkaXRvci5lbmQoZWRpdG9yLCBbXSksXHJcbiAgICAgIH0pLmxlbmd0aDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNoYXJzID0gMDtcclxuICAgIH1cclxuICAgIGNoYXJzTGVmdCA9IHByb3BzLm1heENoYXJzIC0gY2hhcnM7XHJcbiAgICBwcm9ncmVzcyA9IChjaGFyc0xlZnQgLyBwcm9wcy5tYXhDaGFycykgKiAxMDA7XHJcbiAgICBpZiAoY2hhcnNMZWZ0ID09PSAwKSB7XHJcbiAgICAgIGFsbG93TmV3Q2hhciA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSAodmFsOiBOb2RlW10pID0+XHJcbiAgICBwcm9wcy5vbkNoYW5nZSh7IHZhbHVlOiB2YWwsIGlzVmFsaWQ6IGFsbG93TmV3Q2hhciwgaXNEaXJ0eTogdHJ1ZSB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxJbnB1dEdyb3VwIHRpdGxlPXtwcm9wcy50aXRsZX0+XHJcbiAgICAgIDxTbGF0ZSBlZGl0b3I9e2VkaXRvcn0gZGVmYXVsdFZhbHVlPXtwcm9wcy52YWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnc2xhdGUtZWRpdG9yJywgY2xhc3Nlcy5yb290KX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfT5cclxuICAgICAgICAgICAge3Byb3BzLmxhYmVsICYmIChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3NsYXRlLWVkaXRvcl9fbGFiZWwnLCBjbGFzc2VzLmxhYmVsLCB7XHJcbiAgICAgICAgICAgICAgICAgICdzbGF0ZS1lZGl0b3JfX2xhYmVsLS1hY3RpdmUnOiBoYXNGb2N1cyxcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzZXMubGFiZWxGb2N1c2VkXTogaGFzRm9jdXMsXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMubGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxIZWFkaW5nQnV0dG9uQ29tcGFjdCAvPlxyXG4gICAgICAgICAgICA8Rm9udFNpemVCdXR0b24gLz5cclxuICAgICAgICAgICAgPEFsaWdubWVudEJ1dHRvbnMgLz5cclxuICAgICAgICAgICAgPExpc3RCdXR0b25zIC8+XHJcbiAgICAgICAgICAgIDxMaW5rQnV0dG9uIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxFZGl0YWJsZVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZWRpdGFibGV9XHJcbiAgICAgICAgICAgIHJlbmRlck1hcms9e3JlbmRlck1hcmt9XHJcbiAgICAgICAgICAgIHJlbmRlckVsZW1lbnQ9e3JlbmRlckVsZW1lbnR9XHJcbiAgICAgICAgICAgIG9uS2V5RG93bj17ZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICghYWxsb3dOZXdDaGFyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShldmVudC5rZXlDb2RlID09PSA4IHx8IGV2ZW50LmtleUNvZGUgPT09IDQ2KSkge1xyXG4gICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGZvciAoY29uc3QgaG90a2V5IGluIGFsbEhvdGtleXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0hvdGtleShob3RrZXksIChldmVudCBhcyB1bmtub3duKSBhcyBLZXlib2FyZEV2ZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICBlZGl0b3IuZXhlYyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RvZ2dsZV9tYXJrJyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJrOiB7IHR5cGU6IE1BUktfSE9US0VZU1tob3RrZXldIH0sXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBpc0hvdGtleSgnc2hpZnQrZW50ZXInLCAoZXZlbnQgYXMgdW5rbm93bikgYXMgS2V5Ym9hcmRFdmVudClcclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlZGl0b3IuZXhlYyh7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdpbnNlcnRfdGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdcXG4nLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkZvY3VzPXtvbkZvY3VzfVxyXG4gICAgICAgICAgICBvbkJsdXI9e29uQmx1cn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7cHJvcHMubWF4Q2hhcnMgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgJ3NsYXRlLWVkaXRvcl9fY2hhci1jb3VudCcsXHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzLmNoYXJhY3RlckNvdW50Q29udGFpbmVyLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBbY2xhc3Nlcy5jaGFyYWN0ZXJDb3VudENvbnRhaW5lcldhcm5pbmddOiBwcm9ncmVzcyA8PSAxMCxcclxuICAgICAgICAgICAgICAgICAgJ3NsYXRlLWVkaXRvcl9fY2hhci1jb3VudC0td2FybmluZyc6IHByb2dyZXNzIDw9IDEwLFxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3Nlcy5jaGFyYWN0ZXJDb3VudENvbnRhaW5lckVycm9yXTogcHJvZ3Jlc3MgPD0gMCxcclxuICAgICAgICAgICAgICAgICAgJ3NsYXRlLWVkaXRvcl9fY2hhci1jb3VudC0tZXJyb3InOiBwcm9ncmVzcyA8PSAwLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7Y2hhcnN9L3twcm9wcy5tYXhDaGFyc31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2VkaXRvci5zZWxlY3Rpb24gJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxIb3ZlcmluZ1Rvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICA8TWFya0J1dHRvbiB0eXBlPXtNYXJrVHlwZXMuQm9sZH0gLz5cclxuICAgICAgICAgICAgICAgIDxNYXJrQnV0dG9uIHR5cGU9e01hcmtUeXBlcy5JdGFsaWN9IC8+XHJcbiAgICAgICAgICAgICAgICA8TWFya0J1dHRvbiB0eXBlPXtNYXJrVHlwZXMuVW5kZXJsaW5lfSAvPlxyXG4gICAgICAgICAgICAgICAgPExpbmtCdXR0b24gLz5cclxuICAgICAgICAgICAgICA8L0hvdmVyaW5nVG9vbGJhcj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgey8qPHByZT57SlNPTi5zdHJpbmdpZnkocHJvcHMuc3RhdGUuc2xhdGVTdGF0ZSwgbnVsbCwgMil9PC9wcmU+Ki99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvU2xhdGU+XHJcbiAgICA8L0lucHV0R3JvdXA+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShTbGF0ZUVkaXRvcik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=