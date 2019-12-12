webpackHotUpdate("main",{

/***/ "./src/lib/slate/plugins/htmlPaste/withHtmlPaste.ts":
/*!**********************************************************!*\
  !*** ./src/lib/slate/plugins/htmlPaste/withHtmlPaste.ts ***!
  \**********************************************************/
/*! exports provided: deserialize, withHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserialize", function() { return deserialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withHtml", function() { return withHtml; });
/* harmony import */ var slate_hyperscript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slate-hyperscript */ "./node_modules/slate-hyperscript/dist/index.es.js");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ "./node_modules/slate/dist/index.es.js");
/* harmony import */ var _paragraph_withParagraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../paragraph/withParagraph */ "./src/lib/slate/plugins/paragraph/withParagraph.tsx");
/* harmony import */ var _lists_listTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lists/listTypes */ "./src/lib/slate/plugins/lists/listTypes.ts");
/* harmony import */ var _heading_headingType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../heading/headingType */ "./src/lib/slate/plugins/heading/headingType.ts");
/* harmony import */ var _quote_quoteType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../quote/quoteType */ "./src/lib/slate/plugins/quote/quoteType.ts");
/* harmony import */ var _links_linkType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../links/linkType */ "./src/lib/slate/plugins/links/linkType.ts");
/* harmony import */ var _emphasize_emphasizeTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../emphasize/emphasizeTypes */ "./src/lib/slate/plugins/emphasize/emphasizeTypes.ts");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};









var ELEMENT_TAGS = {
  A: function A(el) {
    return {
      type: _links_linkType__WEBPACK_IMPORTED_MODULE_6__["LinkType"],
      url: el.getAttribute('href')
    };
  },
  BLOCKQUOTE: function BLOCKQUOTE() {
    return {
      type: _quote_quoteType__WEBPACK_IMPORTED_MODULE_5__["QuoteType"]
    };
  },
  H1: function H1() {
    return {
      type: _heading_headingType__WEBPACK_IMPORTED_MODULE_4__["HeadingType"],
      level: 1
    };
  },
  H2: function H2() {
    return {
      type: _heading_headingType__WEBPACK_IMPORTED_MODULE_4__["HeadingType"],
      level: 2
    };
  },
  H3: function H3() {
    return {
      type: _heading_headingType__WEBPACK_IMPORTED_MODULE_4__["HeadingType"],
      level: 3
    };
  },
  H4: function H4() {
    return {
      type: _heading_headingType__WEBPACK_IMPORTED_MODULE_4__["HeadingType"],
      level: 3
    };
  },
  H5: function H5() {
    return {
      type: _heading_headingType__WEBPACK_IMPORTED_MODULE_4__["HeadingType"],
      level: 3
    };
  },
  H6: function H6() {
    return {
      type: _heading_headingType__WEBPACK_IMPORTED_MODULE_4__["HeadingType"],
      level: 3
    };
  },
  LI: function LI() {
    return {
      type: _lists_listTypes__WEBPACK_IMPORTED_MODULE_3__["ListTypes"].LI
    };
  },
  OL: function OL() {
    return {
      type: _lists_listTypes__WEBPACK_IMPORTED_MODULE_3__["ListTypes"].OL
    };
  },
  P: function P() {
    return {
      type: _paragraph_withParagraph__WEBPACK_IMPORTED_MODULE_2__["ParagraphType"]
    };
  },
  UL: function UL() {
    return {
      type: _lists_listTypes__WEBPACK_IMPORTED_MODULE_3__["ListTypes"].UL
    };
  }
};
var MARK_TAGS = {
  EM: function EM() {
    return {
      type: _emphasize_emphasizeTypes__WEBPACK_IMPORTED_MODULE_7__["EmphasizeTypes"].Italic
    };
  },
  I: function I() {
    return {
      type: _emphasize_emphasizeTypes__WEBPACK_IMPORTED_MODULE_7__["EmphasizeTypes"].Italic
    };
  },
  STRONG: function STRONG() {
    return {
      type: _emphasize_emphasizeTypes__WEBPACK_IMPORTED_MODULE_7__["EmphasizeTypes"].Bold
    };
  },
  U: function U() {
    return {
      type: _emphasize_emphasizeTypes__WEBPACK_IMPORTED_MODULE_7__["EmphasizeTypes"].Underline
    };
  }
};

var checkEmpty = function checkEmpty(potentialString) {
  return !(potentialString && typeof potentialString === 'string' && potentialString.length > 0 && !/^(\r\n|\r|\n)$/.test(potentialString));
};

var deserialize = function deserialize(el) {
  if (el.nodeType === 3) {
    return el.textContent && el.textContent.replace('\n', '');
  } else if (el.nodeType !== 1) {
    return null;
  } else if (el.nodeName === 'BR') {
    return '\n';
  }

  var nodeName = el.nodeName;
  var parent = el; // tslint:disable-next-line: no-any

  var children = Array.from(parent.childNodes).map(deserialize);

  if (el.nodeName === 'BODY') {
    if (checkEmpty(children[0])) {// children = children.slice(1);
    }

    if (checkEmpty(children[children.length - 1])) {
      children.pop();
    }

    return Object(slate_hyperscript__WEBPACK_IMPORTED_MODULE_0__["jsx"])('fragment', {}, children);
  }

  if (ELEMENT_TAGS[nodeName]) {
    var attrs = ELEMENT_TAGS[nodeName](el);
    return Object(slate_hyperscript__WEBPACK_IMPORTED_MODULE_0__["jsx"])('element', attrs, children);
  }

  if (MARK_TAGS[nodeName]) {
    var _attrs = MARK_TAGS[nodeName](el);

    return Object(slate_hyperscript__WEBPACK_IMPORTED_MODULE_0__["jsx"])('text', _attrs, children);
  }

  return children;
};
var withHtml = function withHtml(editor) {
  var exec = editor.exec,
      isInline = editor.isInline,
      isVoid = editor.isVoid;

  editor.isInline = function (element) {
    return element.type === _links_linkType__WEBPACK_IMPORTED_MODULE_6__["LinkType"] ? true : isInline(element);
  };

  editor.isVoid = function (element) {
    return element.type === 'image' ? true : isVoid(element);
  };

  editor.exec = function (command) {
    if (command.type === 'insert_data') {
      var data = command.data;
      var html = data.getData('text/html');

      if (html) {
        var parsed = new DOMParser().parseFromString(html, 'text/html');
        var fragment = deserialize(parsed.body);
        var selection = editor.selection; // tslint:disable-next-line: no-any

        slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].insertFragment(editor, fragment);
        slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].select(editor, selection);
        slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].delete(editor);
        return;
      }
    }

    exec(command);
  };

  return editor;
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ELEMENT_TAGS, "ELEMENT_TAGS", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\plugins\\htmlPaste\\withHtmlPaste.ts");
  reactHotLoader.register(MARK_TAGS, "MARK_TAGS", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\plugins\\htmlPaste\\withHtmlPaste.ts");
  reactHotLoader.register(checkEmpty, "checkEmpty", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\plugins\\htmlPaste\\withHtmlPaste.ts");
  reactHotLoader.register(deserialize, "deserialize", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\plugins\\htmlPaste\\withHtmlPaste.ts");
  reactHotLoader.register(withHtml, "withHtml", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\plugins\\htmlPaste\\withHtmlPaste.ts");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3NsYXRlL3BsdWdpbnMvaHRtbFBhc3RlL3dpdGhIdG1sUGFzdGUudHMiXSwibmFtZXMiOlsiRUxFTUVOVF9UQUdTIiwiQSIsImVsIiwidHlwZSIsIkxpbmtUeXBlIiwidXJsIiwiZ2V0QXR0cmlidXRlIiwiQkxPQ0tRVU9URSIsIlF1b3RlVHlwZSIsIkgxIiwiSGVhZGluZ1R5cGUiLCJsZXZlbCIsIkgyIiwiSDMiLCJINCIsIkg1IiwiSDYiLCJMSSIsIkxpc3RUeXBlcyIsIk9MIiwiUCIsIlBhcmFncmFwaFR5cGUiLCJVTCIsIk1BUktfVEFHUyIsIkVNIiwiRW1waGFzaXplVHlwZXMiLCJJdGFsaWMiLCJJIiwiU1RST05HIiwiQm9sZCIsIlUiLCJVbmRlcmxpbmUiLCJjaGVja0VtcHR5IiwicG90ZW50aWFsU3RyaW5nIiwibGVuZ3RoIiwidGVzdCIsImRlc2VyaWFsaXplIiwibm9kZVR5cGUiLCJ0ZXh0Q29udGVudCIsInJlcGxhY2UiLCJub2RlTmFtZSIsInBhcmVudCIsImNoaWxkcmVuIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGROb2RlcyIsIm1hcCIsInBvcCIsImpzeCIsImF0dHJzIiwid2l0aEh0bWwiLCJlZGl0b3IiLCJleGVjIiwiaXNJbmxpbmUiLCJpc1ZvaWQiLCJlbGVtZW50IiwiY29tbWFuZCIsImRhdGEiLCJodG1sIiwiZ2V0RGF0YSIsInBhcnNlZCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsImZyYWdtZW50IiwiYm9keSIsInNlbGVjdGlvbiIsIkVkaXRvciIsImluc2VydEZyYWdtZW50Iiwic2VsZWN0IiwiZGVsZXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxHQUFDLEVBQUUsV0FBQUMsRUFBRTtBQUFBLFdBQUs7QUFBRUMsVUFB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QUNBRyxvREFBTSxDQUFDRSxNQUFQLENBQWNqQixNQUFkLEVBQXNCYyxTQUF0QjtBQUNBQyxvREFBTSxDQUFDRyxNQUFQLENBQWNsQixNQUFkO0FBQ0E7QUFDRDtBQUNGOztBQUVEQyxRQUFJLENBQUNJLE9BQUQsQ0FBSjtBQUNELEdBbEJEOztBQW9CQSxTQUFPTCxNQUFQO0FBQ0QsQ0FoQ007Ozs7Ozs7Ozs7MEJBcEVEbkQsWTswQkFlQXVCLFM7MEJBT0FTLFU7MEJBUU9JLFc7MEJBc0NBYyxRIiwiZmlsZSI6Ijg4Y2YzYmUtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsganN4IH0gZnJvbSAnc2xhdGUtaHlwZXJzY3JpcHQnO1xyXG5pbXBvcnQgeyBFZGl0b3IgfSBmcm9tICdzbGF0ZSc7XHJcbmltcG9ydCB7IFBhcmFncmFwaFR5cGUgfSBmcm9tICcuLi9wYXJhZ3JhcGgvd2l0aFBhcmFncmFwaCc7XHJcbmltcG9ydCB7IExpc3RUeXBlcyB9IGZyb20gJy4uL2xpc3RzL2xpc3RUeXBlcyc7XHJcbmltcG9ydCB7IEhlYWRpbmdUeXBlIH0gZnJvbSAnLi4vaGVhZGluZy9oZWFkaW5nVHlwZSc7XHJcbmltcG9ydCB7IFF1b3RlVHlwZSB9IGZyb20gJy4uL3F1b3RlL3F1b3RlVHlwZSc7XHJcbmltcG9ydCB7IExpbmtUeXBlIH0gZnJvbSAnLi4vbGlua3MvbGlua1R5cGUnO1xyXG5pbXBvcnQgeyBFbXBoYXNpemVUeXBlcyB9IGZyb20gJy4uL2VtcGhhc2l6ZS9lbXBoYXNpemVUeXBlcyc7XHJcblxyXG5jb25zdCBFTEVNRU5UX1RBR1MgPSB7XHJcbiAgQTogZWwgPT4gKHsgdHlwZTogTGlua1R5cGUsIHVybDogZWwuZ2V0QXR0cmlidXRlKCdocmVmJykgfSksXHJcbiAgQkxPQ0tRVU9URTogKCkgPT4gKHsgdHlwZTogUXVvdGVUeXBlIH0pLFxyXG4gIEgxOiAoKSA9PiAoeyB0eXBlOiBIZWFkaW5nVHlwZSwgbGV2ZWw6IDEgfSksXHJcbiAgSDI6ICgpID0+ICh7IHR5cGU6IEhlYWRpbmdUeXBlLCBsZXZlbDogMiB9KSxcclxuICBIMzogKCkgPT4gKHsgdHlwZTogSGVhZGluZ1R5cGUsIGxldmVsOiAzIH0pLFxyXG4gIEg0OiAoKSA9PiAoeyB0eXBlOiBIZWFkaW5nVHlwZSwgbGV2ZWw6IDMgfSksXHJcbiAgSDU6ICgpID0+ICh7IHR5cGU6IEhlYWRpbmdUeXBlLCBsZXZlbDogMyB9KSxcclxuICBINjogKCkgPT4gKHsgdHlwZTogSGVhZGluZ1R5cGUsIGxldmVsOiAzIH0pLFxyXG4gIExJOiAoKSA9PiAoeyB0eXBlOiBMaXN0VHlwZXMuTEkgfSksXHJcbiAgT0w6ICgpID0+ICh7IHR5cGU6IExpc3RUeXBlcy5PTCB9KSxcclxuICBQOiAoKSA9PiAoeyB0eXBlOiBQYXJhZ3JhcGhUeXBlIH0pLFxyXG4gIFVMOiAoKSA9PiAoeyB0eXBlOiBMaXN0VHlwZXMuVUwgfSksXHJcbn07XHJcblxyXG5jb25zdCBNQVJLX1RBR1MgPSB7XHJcbiAgRU06ICgpID0+ICh7IHR5cGU6IEVtcGhhc2l6ZVR5cGVzLkl0YWxpYyB9KSxcclxuICBJOiAoKSA9PiAoeyB0eXBlOiBFbXBoYXNpemVUeXBlcy5JdGFsaWMgfSksXHJcbiAgU1RST05HOiAoKSA9PiAoeyB0eXBlOiBFbXBoYXNpemVUeXBlcy5Cb2xkIH0pLFxyXG4gIFU6ICgpID0+ICh7IHR5cGU6IEVtcGhhc2l6ZVR5cGVzLlVuZGVybGluZSB9KSxcclxufTtcclxuXHJcbmNvbnN0IGNoZWNrRW1wdHkgPSBwb3RlbnRpYWxTdHJpbmcgPT5cclxuICAhKFxyXG4gICAgcG90ZW50aWFsU3RyaW5nICYmXHJcbiAgICB0eXBlb2YgcG90ZW50aWFsU3RyaW5nID09PSAnc3RyaW5nJyAmJlxyXG4gICAgcG90ZW50aWFsU3RyaW5nLmxlbmd0aCA+IDAgJiZcclxuICAgICEvXihcXHJcXG58XFxyfFxcbikkLy50ZXN0KHBvdGVudGlhbFN0cmluZylcclxuICApO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlc2VyaWFsaXplID0gKGVsOiBOb2RlKSA9PiB7XHJcbiAgaWYgKGVsLm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICByZXR1cm4gZWwudGV4dENvbnRlbnQgJiYgZWwudGV4dENvbnRlbnQucmVwbGFjZSgnXFxuJywgJycpO1xyXG4gIH0gZWxzZSBpZiAoZWwubm9kZVR5cGUgIT09IDEpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH0gZWxzZSBpZiAoZWwubm9kZU5hbWUgPT09ICdCUicpIHtcclxuICAgIHJldHVybiAnXFxuJztcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGVsO1xyXG4gIGxldCBwYXJlbnQgPSBlbDtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnlcclxuICBsZXQgY2hpbGRyZW46IGFueVtdID0gQXJyYXkuZnJvbShwYXJlbnQuY2hpbGROb2RlcykubWFwKGRlc2VyaWFsaXplKTtcclxuXHJcbiAgaWYgKGVsLm5vZGVOYW1lID09PSAnQk9EWScpIHtcclxuICAgIGlmIChjaGVja0VtcHR5KGNoaWxkcmVuWzBdKSkge1xyXG4gICAgICAvLyBjaGlsZHJlbiA9IGNoaWxkcmVuLnNsaWNlKDEpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoZWNrRW1wdHkoY2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoIC0gMV0pKSB7XHJcbiAgICAgIGNoaWxkcmVuLnBvcCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGpzeCgnZnJhZ21lbnQnLCB7fSwgY2hpbGRyZW4pO1xyXG4gIH1cclxuXHJcbiAgaWYgKEVMRU1FTlRfVEFHU1tub2RlTmFtZV0pIHtcclxuICAgIGNvbnN0IGF0dHJzID0gRUxFTUVOVF9UQUdTW25vZGVOYW1lXShlbCk7XHJcbiAgICByZXR1cm4ganN4KCdlbGVtZW50JywgYXR0cnMsIGNoaWxkcmVuKTtcclxuICB9XHJcblxyXG4gIGlmIChNQVJLX1RBR1Nbbm9kZU5hbWVdKSB7XHJcbiAgICBjb25zdCBhdHRycyA9IE1BUktfVEFHU1tub2RlTmFtZV0oZWwpO1xyXG4gICAgcmV0dXJuIGpzeCgndGV4dCcsIGF0dHJzLCBjaGlsZHJlbik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY2hpbGRyZW47XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd2l0aEh0bWwgPSAoZWRpdG9yOiBFZGl0b3IpID0+IHtcclxuICBjb25zdCB7IGV4ZWMsIGlzSW5saW5lLCBpc1ZvaWQgfSA9IGVkaXRvcjtcclxuXHJcbiAgZWRpdG9yLmlzSW5saW5lID0gZWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gZWxlbWVudC50eXBlID09PSBMaW5rVHlwZSA/IHRydWUgOiBpc0lubGluZShlbGVtZW50KTtcclxuICB9O1xyXG5cclxuICBlZGl0b3IuaXNWb2lkID0gZWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gZWxlbWVudC50eXBlID09PSAnaW1hZ2UnID8gdHJ1ZSA6IGlzVm9pZChlbGVtZW50KTtcclxuICB9O1xyXG5cclxuICBlZGl0b3IuZXhlYyA9IGNvbW1hbmQgPT4ge1xyXG4gICAgaWYgKGNvbW1hbmQudHlwZSA9PT0gJ2luc2VydF9kYXRhJykge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGNvbW1hbmQ7XHJcbiAgICAgIGNvbnN0IGh0bWwgPSBkYXRhLmdldERhdGEoJ3RleHQvaHRtbCcpO1xyXG5cclxuICAgICAgaWYgKGh0bWwpIHtcclxuICAgICAgICBjb25zdCBwYXJzZWQgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGh0bWwsICd0ZXh0L2h0bWwnKTtcclxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IGRlc2VyaWFsaXplKHBhcnNlZC5ib2R5KTtcclxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBlZGl0b3Iuc2VsZWN0aW9uO1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55XHJcbiAgICAgICAgRWRpdG9yLmluc2VydEZyYWdtZW50KGVkaXRvciwgZnJhZ21lbnQgYXMgYW55KTtcclxuICAgICAgICBFZGl0b3Iuc2VsZWN0KGVkaXRvciwgc2VsZWN0aW9uKTtcclxuICAgICAgICBFZGl0b3IuZGVsZXRlKGVkaXRvcik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhlYyhjb21tYW5kKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gZWRpdG9yO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9