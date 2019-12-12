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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    return _defineProperty({}, _emphasize_emphasizeTypes__WEBPACK_IMPORTED_MODULE_7__["EmphasizeTypes"].Italic, true);
  },
  I: function I() {
    return _defineProperty({}, _emphasize_emphasizeTypes__WEBPACK_IMPORTED_MODULE_7__["EmphasizeTypes"].Italic, true);
  },
  STRONG: function STRONG() {
    return _defineProperty({}, _emphasize_emphasizeTypes__WEBPACK_IMPORTED_MODULE_7__["EmphasizeTypes"].Bold, true);
  },
  U: function U() {
    return _defineProperty({}, _emphasize_emphasizeTypes__WEBPACK_IMPORTED_MODULE_7__["EmphasizeTypes"].Underline, true);
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
      children.slice(1);
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
        var parsed = new DOMParser().parseFromString(html, 'text/html'); // tslint:disable-next-line: no-any

        var fragment = deserialize(parsed.body);
        var selection = editor.selection;
        var selectedNode = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].node(editor, selection)[0];
        var selectedNodeEmpty = selectedNode && selectedNode.text !== undefined && selectedNode.text.length === 0 ? true : false;

        if (!selectedNodeEmpty && fragment.length > 1) {
          fragment = fragment.slice(1);
        } // tslint:disable-next-line: no-any


        slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].insertFragment(editor, fragment);

        if (selectedNodeEmpty && fragment.length > 1) {
          slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].select(editor, selection);
          slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].delete(editor);
        }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3NsYXRlL3BsdWdpbnMvaHRtbFBhc3RlL3dpdGhIdG1sUGFzdGUudHMiXSwibmFtZXMiOlsiRUxFTUVOVF9UQUdTIiwiQSIsImVsIiwidHlwZSIsIkxpbmtUeXBlIiwidXJsIiwiZ2V0QXR0cmlidXRlIiwiQkxPQ0tRVU9URSIsIlF1b3RlVHlwZSIsIkgxIiwiSGVhZGluZ1R5cGUiLCJsZXZlbCIsIkgyIiwiSDMiLCJINCIsIkg1IiwiSDYiLCJMSSIsIkxpc3RUeXBlcyIsIk9MIiwiUCIsIlBhcmFncmFwaFR5cGUiLCJVTCIsIk1BUktfVEFHUyIsIkVNIiwiRW1waGFzaXplVHlwZXMiLCJJdGFsaWMiLCJJIiwiU1RST05HIiwiQm9sZCIsIlUiLCJVbmRlcmxpbmUiLCJjaGVja0VtcHR5IiwicG90ZW50aWFsU3RyaW5nIiwibGVuZ3RoIiwidGVzdCIsImRlc2VyaWFsaXplIiwibm9kZVR5cGUiLCJ0ZXh0Q29udGVudCIsInJlcGxhY2UiLCJub2RlTmFtZSIsInBhcmVudCIsImNoaWxkcmVuIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGROb2RlcyIsIm1hcCIsInNsaWNlIiwicG9wIiwianN4IiwiYXR0cnMiLCJ3aXRoSHRtbCIsImVkaXRvciIsImV4ZWMiLCJpc0lubGluZSIsImlzVm9pZCIsImVsZW1lbnQiLCJjb21tYW5kIiwiZGF0YSIsImh0bWwiLCJnZXREYXRhIiwicGFyc2VkIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiZnJhZ21lbnQiLCJib2R5Iiwic2VsZWN0aW9uIiwic2VsZWN0ZWROb2RlIiwiRWRpdG9yIiwibm9kZSIsInNlbGVjdGVkTm9kZUVtcHR5IiwidGV4dCIsInVuZGVmaW5lZCIsImluc2VydEZyYWdtZW50Iiwic2VsZWN0IiwiZGVsZXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0FBQ2MsU0FBekI7QUFFQSxZQUFNQyxZQUFZLEdBQUdDLDRDQUFNLENBQUNDLElBQVAsQ0FBWWpCLE1BQVosRUFBb0JjLFNBQXBCLEVBQStCLENBQS9CLENBQXJCO0FBQ0EsWUFBTUksaUJBQWlCLEdBQ3JCSCxZQUFZLElBQ1pBLFlBQVksQ0FBQ0ksSUFBYixLQUFzQkMsU0FEdEIsSUFFQUwsWUFBWSxDQUFDSSxJQUFiLENBQWtCckMsTUFBbEIsS0FBNkIsQ0FGN0IsR0FHSSxJQUhKLEdBSUksS0FMTjs7QUFNQSxZQUFJLENBQUNvQyxpQkFBRCxJQUFzQk4sUUFBUSxDQUFDOUIsTUFBVCxHQUFrQixDQUE1QyxFQUErQztBQUM3QzhCLGtCQUFRLEdBQUdBLFFBQVEsQ0FBQ2pCLEtBQVQsQ0FBZSxDQUFmLENBQVg7QUFDRCxTQWZPLENBZ0JSOzs7QUFDQXFCLG9EQUFNLENBQUNLLGNBQVAsQ0FBc0JyQixNQUF0QixFQUE4QlksUUFBOUI7O0FBQ0EsWUFBSU0saUJBQWlCLElBQUlOLFFBQVEsQ0FBQzlCLE1BQVQsR0FBa0IsQ0FBM0MsRUFBOEM7QUFDNUNrQyxzREFBTSxDQUFDTSxNQUFQLENBQWN0QixNQUFkLEVBQXNCYyxTQUF0QjtBQUNBRSxzREFBTSxDQUFDTyxNQUFQLENBQWN2QixNQUFkO0FBQ0Q7O0FBQ0Q7QUFDRDtBQUNGOztBQUVEQyxRQUFJLENBQUNJLE9BQUQsQ0FBSjtBQUNELEdBaENEOztBQWtDQSxTQUFPTCxNQUFQO0FBQ0QsQ0E5Q007Ozs7Ozs7Ozs7MEJBcEVEcEQsWTswQkFlQXVCLFM7MEJBT0FTLFU7MEJBUU9JLFc7MEJBc0NBZSxRIiwiZmlsZSI6Ijg4Y2YzYmUtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsganN4IH0gZnJvbSAnc2xhdGUtaHlwZXJzY3JpcHQnO1xyXG5pbXBvcnQgeyBFZGl0b3IgfSBmcm9tICdzbGF0ZSc7XHJcbmltcG9ydCB7IFBhcmFncmFwaFR5cGUgfSBmcm9tICcuLi9wYXJhZ3JhcGgvd2l0aFBhcmFncmFwaCc7XHJcbmltcG9ydCB7IExpc3RUeXBlcyB9IGZyb20gJy4uL2xpc3RzL2xpc3RUeXBlcyc7XHJcbmltcG9ydCB7IEhlYWRpbmdUeXBlIH0gZnJvbSAnLi4vaGVhZGluZy9oZWFkaW5nVHlwZSc7XHJcbmltcG9ydCB7IFF1b3RlVHlwZSB9IGZyb20gJy4uL3F1b3RlL3F1b3RlVHlwZSc7XHJcbmltcG9ydCB7IExpbmtUeXBlIH0gZnJvbSAnLi4vbGlua3MvbGlua1R5cGUnO1xyXG5pbXBvcnQgeyBFbXBoYXNpemVUeXBlcyB9IGZyb20gJy4uL2VtcGhhc2l6ZS9lbXBoYXNpemVUeXBlcyc7XHJcblxyXG5jb25zdCBFTEVNRU5UX1RBR1MgPSB7XHJcbiAgQTogZWwgPT4gKHsgdHlwZTogTGlua1R5cGUsIHVybDogZWwuZ2V0QXR0cmlidXRlKCdocmVmJykgfSksXHJcbiAgQkxPQ0tRVU9URTogKCkgPT4gKHsgdHlwZTogUXVvdGVUeXBlIH0pLFxyXG4gIEgxOiAoKSA9PiAoeyB0eXBlOiBIZWFkaW5nVHlwZSwgbGV2ZWw6IDEgfSksXHJcbiAgSDI6ICgpID0+ICh7IHR5cGU6IEhlYWRpbmdUeXBlLCBsZXZlbDogMiB9KSxcclxuICBIMzogKCkgPT4gKHsgdHlwZTogSGVhZGluZ1R5cGUsIGxldmVsOiAzIH0pLFxyXG4gIEg0OiAoKSA9PiAoeyB0eXBlOiBIZWFkaW5nVHlwZSwgbGV2ZWw6IDMgfSksXHJcbiAgSDU6ICgpID0+ICh7IHR5cGU6IEhlYWRpbmdUeXBlLCBsZXZlbDogMyB9KSxcclxuICBINjogKCkgPT4gKHsgdHlwZTogSGVhZGluZ1R5cGUsIGxldmVsOiAzIH0pLFxyXG4gIExJOiAoKSA9PiAoeyB0eXBlOiBMaXN0VHlwZXMuTEkgfSksXHJcbiAgT0w6ICgpID0+ICh7IHR5cGU6IExpc3RUeXBlcy5PTCB9KSxcclxuICBQOiAoKSA9PiAoeyB0eXBlOiBQYXJhZ3JhcGhUeXBlIH0pLFxyXG4gIFVMOiAoKSA9PiAoeyB0eXBlOiBMaXN0VHlwZXMuVUwgfSksXHJcbn07XHJcblxyXG5jb25zdCBNQVJLX1RBR1MgPSB7XHJcbiAgRU06ICgpID0+ICh7IFtFbXBoYXNpemVUeXBlcy5JdGFsaWNdOiB0cnVlIH0pLFxyXG4gIEk6ICgpID0+ICh7IFtFbXBoYXNpemVUeXBlcy5JdGFsaWNdOiB0cnVlIH0pLFxyXG4gIFNUUk9ORzogKCkgPT4gKHsgW0VtcGhhc2l6ZVR5cGVzLkJvbGRdOiB0cnVlIH0pLFxyXG4gIFU6ICgpID0+ICh7IFtFbXBoYXNpemVUeXBlcy5VbmRlcmxpbmVdOiB0cnVlIH0pLFxyXG59O1xyXG5cclxuY29uc3QgY2hlY2tFbXB0eSA9IHBvdGVudGlhbFN0cmluZyA9PlxyXG4gICEoXHJcbiAgICBwb3RlbnRpYWxTdHJpbmcgJiZcclxuICAgIHR5cGVvZiBwb3RlbnRpYWxTdHJpbmcgPT09ICdzdHJpbmcnICYmXHJcbiAgICBwb3RlbnRpYWxTdHJpbmcubGVuZ3RoID4gMCAmJlxyXG4gICAgIS9eKFxcclxcbnxcXHJ8XFxuKSQvLnRlc3QocG90ZW50aWFsU3RyaW5nKVxyXG4gICk7XHJcblxyXG5leHBvcnQgY29uc3QgZGVzZXJpYWxpemUgPSAoZWw6IE5vZGUpID0+IHtcclxuICBpZiAoZWwubm9kZVR5cGUgPT09IDMpIHtcclxuICAgIHJldHVybiBlbC50ZXh0Q29udGVudCAmJiBlbC50ZXh0Q29udGVudC5yZXBsYWNlKCdcXG4nLCAnJyk7XHJcbiAgfSBlbHNlIGlmIChlbC5ub2RlVHlwZSAhPT0gMSkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfSBlbHNlIGlmIChlbC5ub2RlTmFtZSA9PT0gJ0JSJykge1xyXG4gICAgcmV0dXJuICdcXG4nO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZWw7XHJcbiAgbGV0IHBhcmVudCA9IGVsO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueVxyXG4gIGxldCBjaGlsZHJlbjogYW55W10gPSBBcnJheS5mcm9tKHBhcmVudC5jaGlsZE5vZGVzKS5tYXAoZGVzZXJpYWxpemUpO1xyXG5cclxuICBpZiAoZWwubm9kZU5hbWUgPT09ICdCT0RZJykge1xyXG4gICAgaWYgKCFjaGVja0VtcHR5KGNoaWxkcmVuWzBdKSkge1xyXG4gICAgICBjaGlsZHJlbi5zbGljZSgxKTtcclxuICAgIH1cclxuICAgIGlmIChjaGVja0VtcHR5KGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aCAtIDFdKSkge1xyXG4gICAgICBjaGlsZHJlbi5wb3AoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBqc3goJ2ZyYWdtZW50Jywge30sIGNoaWxkcmVuKTtcclxuICB9XHJcblxyXG4gIGlmIChFTEVNRU5UX1RBR1Nbbm9kZU5hbWVdKSB7XHJcbiAgICBjb25zdCBhdHRycyA9IEVMRU1FTlRfVEFHU1tub2RlTmFtZV0oZWwpO1xyXG4gICAgcmV0dXJuIGpzeCgnZWxlbWVudCcsIGF0dHJzLCBjaGlsZHJlbik7XHJcbiAgfVxyXG5cclxuICBpZiAoTUFSS19UQUdTW25vZGVOYW1lXSkge1xyXG4gICAgY29uc3QgYXR0cnMgPSBNQVJLX1RBR1Nbbm9kZU5hbWVdKGVsKTtcclxuICAgIHJldHVybiBqc3goJ3RleHQnLCBhdHRycywgY2hpbGRyZW4pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNoaWxkcmVuO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHdpdGhIdG1sID0gKGVkaXRvcjogRWRpdG9yKSA9PiB7XHJcbiAgY29uc3QgeyBleGVjLCBpc0lubGluZSwgaXNWb2lkIH0gPSBlZGl0b3I7XHJcblxyXG4gIGVkaXRvci5pc0lubGluZSA9IGVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIGVsZW1lbnQudHlwZSA9PT0gTGlua1R5cGUgPyB0cnVlIDogaXNJbmxpbmUoZWxlbWVudCk7XHJcbiAgfTtcclxuXHJcbiAgZWRpdG9yLmlzVm9pZCA9IGVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIGVsZW1lbnQudHlwZSA9PT0gJ2ltYWdlJyA/IHRydWUgOiBpc1ZvaWQoZWxlbWVudCk7XHJcbiAgfTtcclxuXHJcbiAgZWRpdG9yLmV4ZWMgPSBjb21tYW5kID0+IHtcclxuICAgIGlmIChjb21tYW5kLnR5cGUgPT09ICdpbnNlcnRfZGF0YScpIHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBjb21tYW5kO1xyXG4gICAgICBjb25zdCBodG1sID0gZGF0YS5nZXREYXRhKCd0ZXh0L2h0bWwnKTtcclxuXHJcbiAgICAgIGlmIChodG1sKSB7XHJcbiAgICAgICAgY29uc3QgcGFyc2VkID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhodG1sLCAndGV4dC9odG1sJyk7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnlcclxuICAgICAgICBsZXQgZnJhZ21lbnQgPSAoZGVzZXJpYWxpemUocGFyc2VkLmJvZHkpIGFzIHVua25vd24pIGFzIGFueVtdO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGVkaXRvci5zZWxlY3Rpb247XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkTm9kZSA9IEVkaXRvci5ub2RlKGVkaXRvciwgc2VsZWN0aW9uKVswXTtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZE5vZGVFbXB0eSA9XHJcbiAgICAgICAgICBzZWxlY3RlZE5vZGUgJiZcclxuICAgICAgICAgIHNlbGVjdGVkTm9kZS50ZXh0ICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgIHNlbGVjdGVkTm9kZS50ZXh0Lmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgOiBmYWxzZTtcclxuICAgICAgICBpZiAoIXNlbGVjdGVkTm9kZUVtcHR5ICYmIGZyYWdtZW50Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgIGZyYWdtZW50ID0gZnJhZ21lbnQuc2xpY2UoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55XHJcbiAgICAgICAgRWRpdG9yLmluc2VydEZyYWdtZW50KGVkaXRvciwgZnJhZ21lbnQgYXMgYW55KTtcclxuICAgICAgICBpZiAoc2VsZWN0ZWROb2RlRW1wdHkgJiYgZnJhZ21lbnQubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgRWRpdG9yLnNlbGVjdChlZGl0b3IsIHNlbGVjdGlvbik7XHJcbiAgICAgICAgICBFZGl0b3IuZGVsZXRlKGVkaXRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4ZWMoY29tbWFuZCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGVkaXRvcjtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==