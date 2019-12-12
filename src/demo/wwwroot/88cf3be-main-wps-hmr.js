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
    if (!checkEmpty(children[0])) {
      children.unshift('\n');
    } else {
      children[0] = '\n';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3NsYXRlL3BsdWdpbnMvaHRtbFBhc3RlL3dpdGhIdG1sUGFzdGUudHMiXSwibmFtZXMiOlsiRUxFTUVOVF9UQUdTIiwiQSIsImVsIiwidHlwZSIsIkxpbmtUeXBlIiwidXJsIiwiZ2V0QXR0cmlidXRlIiwiQkxPQ0tRVU9URSIsIlF1b3RlVHlwZSIsIkgxIiwiSGVhZGluZ1R5cGUiLCJsZXZlbCIsIkgyIiwiSDMiLCJINCIsIkg1IiwiSDYiLCJMSSIsIkxpc3RUeXBlcyIsIk9MIiwiUCIsIlBhcmFncmFwaFR5cGUiLCJVTCIsIk1BUktfVEFHUyIsIkVNIiwiRW1waGFzaXplVHlwZXMiLCJJdGFsaWMiLCJJIiwiU1RST05HIiwiQm9sZCIsIlUiLCJVbmRlcmxpbmUiLCJjaGVja0VtcHR5IiwicG90ZW50aWFsU3RyaW5nIiwibGVuZ3RoIiwidGVzdCIsImRlc2VyaWFsaXplIiwibm9kZVR5cGUiLCJ0ZXh0Q29udGVudCIsInJlcGxhY2UiLCJub2RlTmFtZSIsInBhcmVudCIsImNoaWxkcmVuIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGROb2RlcyIsIm1hcCIsInVuc2hpZnQiLCJwb3AiLCJqc3giLCJhdHRycyIsIndpdGhIdG1sIiwiZWRpdG9yIiwiZXhlYyIsImlzSW5saW5lIiwiaXNWb2lkIiwiZWxlbWVudCIsImNvbW1hbmQiLCJkYXRhIiwiaHRtbCIsImdldERhdGEiLCJwYXJzZWQiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJmcmFnbWVudCIsImJvZHkiLCJzZWxlY3Rpb24iLCJFZGl0b3IiLCJpbnNlcnRGcmFnbWVudCIsInNlbGVjdCIsImRlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsR0FBQyxFQUFFLFdBQUFDLEVBQUU7QUFBQSxXQUFL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QUFNQyxTQUFTLEdBQUdkLE1BQU0sQ0FBQ2MsU0FBekIsQ0FIUSxDQUlSOztBQUNBQyxvREFBTSxDQUFDQyxjQUFQLENBQXNCaEIsTUFBdEIsRUFBOEJZLFFBQTlCO0FBQ0FHLG9EQUFNLENBQUNFLE1BQVAsQ0FBY2pCLE1BQWQsRUFBc0JjLFNBQXRCO0FBQ0FDLG9EQUFNLENBQUNHLE1BQVAsQ0FBY2xCLE1BQWQ7QUFDQTtBQUNEO0FBQ0Y7O0FBRURDLFFBQUksQ0FBQ0ksT0FBRCxDQUFKO0FBQ0QsR0FsQkQ7O0FBb0JBLFNBQU9MLE1BQVA7QUFDRCxDQWhDTTs7Ozs7Ozs7OzswQkF0RURwRCxZOzBCQWVBdUIsUzswQkFPQVMsVTswQkFRT0ksVzswQkF3Q0FlLFEiLCJmaWxlIjoiODhjZjNiZS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3ggfSBmcm9tICdzbGF0ZS1oeXBlcnNjcmlwdCc7XHJcbmltcG9ydCB7IEVkaXRvciB9IGZyb20gJ3NsYXRlJztcclxuaW1wb3J0IHsgUGFyYWdyYXBoVHlwZSB9IGZyb20gJy4uL3BhcmFncmFwaC93aXRoUGFyYWdyYXBoJztcclxuaW1wb3J0IHsgTGlzdFR5cGVzIH0gZnJvbSAnLi4vbGlzdHMvbGlzdFR5cGVzJztcclxuaW1wb3J0IHsgSGVhZGluZ1R5cGUgfSBmcm9tICcuLi9oZWFkaW5nL2hlYWRpbmdUeXBlJztcclxuaW1wb3J0IHsgUXVvdGVUeXBlIH0gZnJvbSAnLi4vcXVvdGUvcXVvdGVUeXBlJztcclxuaW1wb3J0IHsgTGlua1R5cGUgfSBmcm9tICcuLi9saW5rcy9saW5rVHlwZSc7XHJcbmltcG9ydCB7IEVtcGhhc2l6ZVR5cGVzIH0gZnJvbSAnLi4vZW1waGFzaXplL2VtcGhhc2l6ZVR5cGVzJztcclxuXHJcbmNvbnN0IEVMRU1FTlRfVEFHUyA9IHtcclxuICBBOiBlbCA9PiAoeyB0eXBlOiBMaW5rVHlwZSwgdXJsOiBlbC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB9KSxcclxuICBCTE9DS1FVT1RFOiAoKSA9PiAoeyB0eXBlOiBRdW90ZVR5cGUgfSksXHJcbiAgSDE6ICgpID0+ICh7IHR5cGU6IEhlYWRpbmdUeXBlLCBsZXZlbDogMSB9KSxcclxuICBIMjogKCkgPT4gKHsgdHlwZTogSGVhZGluZ1R5cGUsIGxldmVsOiAyIH0pLFxyXG4gIEgzOiAoKSA9PiAoeyB0eXBlOiBIZWFkaW5nVHlwZSwgbGV2ZWw6IDMgfSksXHJcbiAgSDQ6ICgpID0+ICh7IHR5cGU6IEhlYWRpbmdUeXBlLCBsZXZlbDogMyB9KSxcclxuICBINTogKCkgPT4gKHsgdHlwZTogSGVhZGluZ1R5cGUsIGxldmVsOiAzIH0pLFxyXG4gIEg2OiAoKSA9PiAoeyB0eXBlOiBIZWFkaW5nVHlwZSwgbGV2ZWw6IDMgfSksXHJcbiAgTEk6ICgpID0+ICh7IHR5cGU6IExpc3RUeXBlcy5MSSB9KSxcclxuICBPTDogKCkgPT4gKHsgdHlwZTogTGlzdFR5cGVzLk9MIH0pLFxyXG4gIFA6ICgpID0+ICh7IHR5cGU6IFBhcmFncmFwaFR5cGUgfSksXHJcbiAgVUw6ICgpID0+ICh7IHR5cGU6IExpc3RUeXBlcy5VTCB9KSxcclxufTtcclxuXHJcbmNvbnN0IE1BUktfVEFHUyA9IHtcclxuICBFTTogKCkgPT4gKHsgdHlwZTogRW1waGFzaXplVHlwZXMuSXRhbGljIH0pLFxyXG4gIEk6ICgpID0+ICh7IHR5cGU6IEVtcGhhc2l6ZVR5cGVzLkl0YWxpYyB9KSxcclxuICBTVFJPTkc6ICgpID0+ICh7IHR5cGU6IEVtcGhhc2l6ZVR5cGVzLkJvbGQgfSksXHJcbiAgVTogKCkgPT4gKHsgdHlwZTogRW1waGFzaXplVHlwZXMuVW5kZXJsaW5lIH0pLFxyXG59O1xyXG5cclxuY29uc3QgY2hlY2tFbXB0eSA9IHBvdGVudGlhbFN0cmluZyA9PlxyXG4gICEoXHJcbiAgICBwb3RlbnRpYWxTdHJpbmcgJiZcclxuICAgIHR5cGVvZiBwb3RlbnRpYWxTdHJpbmcgPT09ICdzdHJpbmcnICYmXHJcbiAgICBwb3RlbnRpYWxTdHJpbmcubGVuZ3RoID4gMCAmJlxyXG4gICAgIS9eKFxcclxcbnxcXHJ8XFxuKSQvLnRlc3QocG90ZW50aWFsU3RyaW5nKVxyXG4gICk7XHJcblxyXG5leHBvcnQgY29uc3QgZGVzZXJpYWxpemUgPSAoZWw6IE5vZGUpID0+IHtcclxuICBpZiAoZWwubm9kZVR5cGUgPT09IDMpIHtcclxuICAgIHJldHVybiBlbC50ZXh0Q29udGVudCAmJiBlbC50ZXh0Q29udGVudC5yZXBsYWNlKCdcXG4nLCAnJyk7XHJcbiAgfSBlbHNlIGlmIChlbC5ub2RlVHlwZSAhPT0gMSkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfSBlbHNlIGlmIChlbC5ub2RlTmFtZSA9PT0gJ0JSJykge1xyXG4gICAgcmV0dXJuICdcXG4nO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZWw7XHJcbiAgbGV0IHBhcmVudCA9IGVsO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueVxyXG4gIGxldCBjaGlsZHJlbjogYW55W10gPSBBcnJheS5mcm9tKHBhcmVudC5jaGlsZE5vZGVzKS5tYXAoZGVzZXJpYWxpemUpO1xyXG5cclxuICBpZiAoZWwubm9kZU5hbWUgPT09ICdCT0RZJykge1xyXG4gICAgaWYgKCFjaGVja0VtcHR5KGNoaWxkcmVuWzBdKSkge1xyXG4gICAgICBjaGlsZHJlbi51bnNoaWZ0KCdcXG4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNoaWxkcmVuWzBdID0gJ1xcbic7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hlY2tFbXB0eShjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGggLSAxXSkpIHtcclxuICAgICAgY2hpbGRyZW4ucG9wKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ganN4KCdmcmFnbWVudCcsIHt9LCBjaGlsZHJlbik7XHJcbiAgfVxyXG5cclxuICBpZiAoRUxFTUVOVF9UQUdTW25vZGVOYW1lXSkge1xyXG4gICAgY29uc3QgYXR0cnMgPSBFTEVNRU5UX1RBR1Nbbm9kZU5hbWVdKGVsKTtcclxuICAgIHJldHVybiBqc3goJ2VsZW1lbnQnLCBhdHRycywgY2hpbGRyZW4pO1xyXG4gIH1cclxuXHJcbiAgaWYgKE1BUktfVEFHU1tub2RlTmFtZV0pIHtcclxuICAgIGNvbnN0IGF0dHJzID0gTUFSS19UQUdTW25vZGVOYW1lXShlbCk7XHJcbiAgICByZXR1cm4ganN4KCd0ZXh0JywgYXR0cnMsIGNoaWxkcmVuKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjaGlsZHJlbjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB3aXRoSHRtbCA9IChlZGl0b3I6IEVkaXRvcikgPT4ge1xyXG4gIGNvbnN0IHsgZXhlYywgaXNJbmxpbmUsIGlzVm9pZCB9ID0gZWRpdG9yO1xyXG5cclxuICBlZGl0b3IuaXNJbmxpbmUgPSBlbGVtZW50ID0+IHtcclxuICAgIHJldHVybiBlbGVtZW50LnR5cGUgPT09IExpbmtUeXBlID8gdHJ1ZSA6IGlzSW5saW5lKGVsZW1lbnQpO1xyXG4gIH07XHJcblxyXG4gIGVkaXRvci5pc1ZvaWQgPSBlbGVtZW50ID0+IHtcclxuICAgIHJldHVybiBlbGVtZW50LnR5cGUgPT09ICdpbWFnZScgPyB0cnVlIDogaXNWb2lkKGVsZW1lbnQpO1xyXG4gIH07XHJcblxyXG4gIGVkaXRvci5leGVjID0gY29tbWFuZCA9PiB7XHJcbiAgICBpZiAoY29tbWFuZC50eXBlID09PSAnaW5zZXJ0X2RhdGEnKSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gY29tbWFuZDtcclxuICAgICAgY29uc3QgaHRtbCA9IGRhdGEuZ2V0RGF0YSgndGV4dC9odG1sJyk7XHJcblxyXG4gICAgICBpZiAoaHRtbCkge1xyXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoaHRtbCwgJ3RleHQvaHRtbCcpO1xyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZGVzZXJpYWxpemUocGFyc2VkLmJvZHkpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGVkaXRvci5zZWxlY3Rpb247XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnlcclxuICAgICAgICBFZGl0b3IuaW5zZXJ0RnJhZ21lbnQoZWRpdG9yLCBmcmFnbWVudCBhcyBhbnkpO1xyXG4gICAgICAgIEVkaXRvci5zZWxlY3QoZWRpdG9yLCBzZWxlY3Rpb24pO1xyXG4gICAgICAgIEVkaXRvci5kZWxldGUoZWRpdG9yKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleGVjKGNvbW1hbmQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBlZGl0b3I7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=