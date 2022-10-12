webpackHotUpdate("main",{

/***/ "./src/lib/slate/plugins/htmlPaste/withHtmlPaste.ts":
/*!**********************************************************!*\
  !*** ./src/lib/slate/plugins/htmlPaste/withHtmlPaste.ts ***!
  \**********************************************************/
/*! exports provided: deserialize, imageType, withHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserialize", function() { return deserialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageType", function() { return imageType; });
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
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
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
  var parent = el;
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

    return children.map(function (child) {
      return Object(slate_hyperscript__WEBPACK_IMPORTED_MODULE_0__["jsx"])('text', _attrs, child);
    });
  }

  return children;
};
var imageType = 'image';
var withHtml = function withHtml(editor) {
  var isInline = editor.isInline,
      isVoid = editor.isVoid,
      insertData = editor.insertData;

  editor.isInline = function (element) {
    return element.type === _links_linkType__WEBPACK_IMPORTED_MODULE_6__["LinkType"] ? true : isInline(element);
  };

  editor.isVoid = function (element) {
    return element.type === 'image' ? true : isVoid(element);
  };

  editor.insertData = function (data) {
    var html = data.getData('text/html');

    if (html) {
      var parsed = new DOMParser().parseFromString(html, 'text/html');
      var fragment = deserialize(parsed.body);
      var selection = editor.selection;
      var selectedNode = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].node(editor, selection)[0];
      var selectedNodeEmpty = selectedNode && selectedNode.text !== undefined && selectedNode.text.length === 0 ? true : false;

      if (!selectedNodeEmpty && fragment.length > 1) {
        fragment = fragment.slice(1);
      }

      slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].insertFragment(editor, fragment);

      if (selectedNodeEmpty && fragment.length > 1) {
        editor.selection = selection;
        editor.deleteFragment();
      }

      return;
    }

    insertData(data);
  };

  return editor;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ELEMENT_TAGS, "ELEMENT_TAGS", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\plugins\\htmlPaste\\withHtmlPaste.ts");
  reactHotLoader.register(MARK_TAGS, "MARK_TAGS", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\plugins\\htmlPaste\\withHtmlPaste.ts");
  reactHotLoader.register(checkEmpty, "checkEmpty", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\plugins\\htmlPaste\\withHtmlPaste.ts");
  reactHotLoader.register(deserialize, "deserialize", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\plugins\\htmlPaste\\withHtmlPaste.ts");
  reactHotLoader.register(imageType, "imageType", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\plugins\\htmlPaste\\withHtmlPaste.ts");
  reactHotLoader.register(withHtml, "withHtml", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate\\plugins\\htmlPaste\\withHtmlPaste.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3NsYXRlL3BsdWdpbnMvaHRtbFBhc3RlL3dpdGhIdG1sUGFzdGUudHMiXSwibmFtZXMiOlsiRUxFTUVOVF9UQUdTIiwiQSIsImVsIiwidHlwZSIsIkxpbmtUeXBlIiwidXJsIiwiZ2V0QXR0cmlidXRlIiwiQkxPQ0tRVU9URSIsIlF1b3RlVHlwZSIsIkgxIiwiSGVhZGluZ1R5cGUiLCJsZXZlbCIsIkgyIiwiSDMiLCJINCIsIkg1IiwiSDYiLCJMSSIsIkxpc3RUeXBlcyIsIk9MIiwiUCIsIlBhcmFncmFwaFR5cGUiLCJVTCIsIk1BUktfVEFHUyIsIkVNIiwiRW1waGFzaXplVHlwZXMiLCJJdGFsaWMiLCJJIiwiU1RST05HIiwiQm9sZCIsIlUiLCJVbmRlcmxpbmUiLCJjaGVja0VtcHR5IiwicG90ZW50aWFsU3RyaW5nIiwibGVuZ3RoIiwidGVzdCIsImRlc2VyaWFsaXplIiwibm9kZVR5cGUiLCJ0ZXh0Q29udGVudCIsInJlcGxhY2UiLCJub2RlTmFtZSIsInBhcmVudCIsImNoaWxkcmVuIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGROb2RlcyIsIm1hcCIsInNsaWNlIiwicG9wIiwianN4IiwiYXR0cnMiLCJjaGlsZCIsImltYWdlVHlwZSIsIndpdGhIdG1sIiwiZWRpdG9yIiwiaXNJbmxpbmUiLCJpc1ZvaWQiLCJpbnNlcnREYXRhIiwiZWxlbWVudCIsImRhdGEiLCJodG1sIiwiZ2V0RGF0YSIsInBhcnNlZCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsImZyYWdtZW50IiwiYm9keSIsInNlbGVjdGlvbiIsInNlbGVjdGVkTm9kZSIsIkVkaXRvciIsIm5vZGUiLCJzZWxlY3RlZE5vZGVFbXB0eSIsInRleHQiLCJ1bmRlZmluZWQiLCJpbnNlcnRGcmFnbWVudCIsImRlbGV0ZUZyYWdtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtB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QUVBLFVBQU1DLFlBQVksR0FBR0MsNENBQU0sQ0FBQ0MsSUFBUCxDQUFZaEIsTUFBWixFQUFvQmEsU0FBcEIsRUFBK0IsQ0FBL0IsQ0FBckI7QUFDQSxVQUFNSSxpQkFBaUIsR0FDckJILFlBQVksSUFDWkEsWUFBWSxDQUFDSSxJQUFiLEtBQXNCQyxTQUR0QixJQUVBTCxZQUFZLENBQUNJLElBQWIsQ0FBa0J0QyxNQUFsQixLQUE2QixDQUY3QixHQUdJLElBSEosR0FJSSxLQUxOOztBQU1BLFVBQUksQ0FBQ3FDLGlCQUFELElBQXNCTixRQUFRLENBQUMvQixNQUFULEdBQWtCLENBQTVDLEVBQStDO0FBQzdDK0IsZ0JBQVEsR0FBR0EsUUFBUSxDQUFDbEIsS0FBVCxDQUFlLENBQWYsQ0FBWDtBQUNEOztBQUNEc0Isa0RBQU0sQ0FBQ0ssY0FBUCxDQUFzQnBCLE1BQXRCLEVBQThCVyxRQUE5Qjs7QUFDQSxVQUFJTSxpQkFBaUIsSUFBSU4sUUFBUSxDQUFDL0IsTUFBVCxHQUFrQixDQUEzQyxFQUE4QztBQUM1Q29CLGNBQU0sQ0FBQ2EsU0FBUCxHQUFtQkEsU0FBbkI7QUFDQWIsY0FBTSxDQUFDcUIsY0FBUDtBQUNEOztBQUNEO0FBQ0Q7O0FBQ0RsQixjQUFVLENBQUNFLElBQUQsQ0FBVjtBQUNELEdBMUJEOztBQTJCQSxTQUFPTCxNQUFQO0FBQ0QsQ0F0Q007Ozs7Ozs7Ozs7MEJBdkVEdEQsWTswQkFlQXVCLFM7MEJBT0FTLFU7MEJBUU9JLFc7MEJBcUNBZ0IsUzswQkFJQUMsUSIsImZpbGUiOiIzYTJmYzFjLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzeCB9IGZyb20gJ3NsYXRlLWh5cGVyc2NyaXB0JztcclxuaW1wb3J0IHsgRWRpdG9yLCBUZXh0LCBOb2RlIGFzIFNsYXRlTm9kZSB9IGZyb20gJ3NsYXRlJztcclxuaW1wb3J0IHsgUGFyYWdyYXBoVHlwZSB9IGZyb20gJy4uL3BhcmFncmFwaC93aXRoUGFyYWdyYXBoJztcclxuaW1wb3J0IHsgTGlzdFR5cGVzIH0gZnJvbSAnLi4vbGlzdHMvbGlzdFR5cGVzJztcclxuaW1wb3J0IHsgSGVhZGluZ1R5cGUgfSBmcm9tICcuLi9oZWFkaW5nL2hlYWRpbmdUeXBlJztcclxuaW1wb3J0IHsgUXVvdGVUeXBlIH0gZnJvbSAnLi4vcXVvdGUvcXVvdGVUeXBlJztcclxuaW1wb3J0IHsgTGlua1R5cGUgfSBmcm9tICcuLi9saW5rcy9saW5rVHlwZSc7XHJcbmltcG9ydCB7IEVtcGhhc2l6ZVR5cGVzIH0gZnJvbSAnLi4vZW1waGFzaXplL2VtcGhhc2l6ZVR5cGVzJztcclxuXHJcbmNvbnN0IEVMRU1FTlRfVEFHUyA9IHtcclxuICBBOiAoZWw6IEhUTUxFbGVtZW50KSA9PiAoeyB0eXBlOiBMaW5rVHlwZSwgdXJsOiBlbC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB9KSxcclxuICBCTE9DS1FVT1RFOiAoKSA9PiAoeyB0eXBlOiBRdW90ZVR5cGUgfSksXHJcbiAgSDE6ICgpID0+ICh7IHR5cGU6IEhlYWRpbmdUeXBlLCBsZXZlbDogMSB9KSxcclxuICBIMjogKCkgPT4gKHsgdHlwZTogSGVhZGluZ1R5cGUsIGxldmVsOiAyIH0pLFxyXG4gIEgzOiAoKSA9PiAoeyB0eXBlOiBIZWFkaW5nVHlwZSwgbGV2ZWw6IDMgfSksXHJcbiAgSDQ6ICgpID0+ICh7IHR5cGU6IEhlYWRpbmdUeXBlLCBsZXZlbDogMyB9KSxcclxuICBINTogKCkgPT4gKHsgdHlwZTogSGVhZGluZ1R5cGUsIGxldmVsOiAzIH0pLFxyXG4gIEg2OiAoKSA9PiAoeyB0eXBlOiBIZWFkaW5nVHlwZSwgbGV2ZWw6IDMgfSksXHJcbiAgTEk6ICgpID0+ICh7IHR5cGU6IExpc3RUeXBlcy5MSSB9KSxcclxuICBPTDogKCkgPT4gKHsgdHlwZTogTGlzdFR5cGVzLk9MIH0pLFxyXG4gIFA6ICgpID0+ICh7IHR5cGU6IFBhcmFncmFwaFR5cGUgfSksXHJcbiAgVUw6ICgpID0+ICh7IHR5cGU6IExpc3RUeXBlcy5VTCB9KSxcclxufTtcclxuXHJcbmNvbnN0IE1BUktfVEFHUyA9IHtcclxuICBFTTogKCkgPT4gKHsgW0VtcGhhc2l6ZVR5cGVzLkl0YWxpY106IHRydWUgfSksXHJcbiAgSTogKCkgPT4gKHsgW0VtcGhhc2l6ZVR5cGVzLkl0YWxpY106IHRydWUgfSksXHJcbiAgU1RST05HOiAoKSA9PiAoeyBbRW1waGFzaXplVHlwZXMuQm9sZF06IHRydWUgfSksXHJcbiAgVTogKCkgPT4gKHsgW0VtcGhhc2l6ZVR5cGVzLlVuZGVybGluZV06IHRydWUgfSksXHJcbn07XHJcblxyXG5jb25zdCBjaGVja0VtcHR5ID0gcG90ZW50aWFsU3RyaW5nID0+XHJcbiAgIShcclxuICAgIHBvdGVudGlhbFN0cmluZyAmJlxyXG4gICAgdHlwZW9mIHBvdGVudGlhbFN0cmluZyA9PT0gJ3N0cmluZycgJiZcclxuICAgIHBvdGVudGlhbFN0cmluZy5sZW5ndGggPiAwICYmXHJcbiAgICAhL14oXFxyXFxufFxccnxcXG4pJC8udGVzdChwb3RlbnRpYWxTdHJpbmcpXHJcbiAgKTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZXNlcmlhbGl6ZSA9IChlbDogTm9kZSkgPT4ge1xyXG4gIGlmIChlbC5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgcmV0dXJuIGVsLnRleHRDb250ZW50ICYmIGVsLnRleHRDb250ZW50LnJlcGxhY2UoJ1xcbicsICcnKTtcclxuICB9IGVsc2UgaWYgKGVsLm5vZGVUeXBlICE9PSAxKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9IGVsc2UgaWYgKGVsLm5vZGVOYW1lID09PSAnQlInKSB7XHJcbiAgICByZXR1cm4gJ1xcbic7XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlbDtcclxuICBjb25zdCBwYXJlbnQgPSBlbDtcclxuXHJcbiAgY29uc3QgY2hpbGRyZW46IHVua25vd25bXSA9IEFycmF5LmZyb20ocGFyZW50LmNoaWxkTm9kZXMpLm1hcChkZXNlcmlhbGl6ZSk7XHJcblxyXG4gIGlmIChlbC5ub2RlTmFtZSA9PT0gJ0JPRFknKSB7XHJcbiAgICBpZiAoIWNoZWNrRW1wdHkoY2hpbGRyZW5bMF0pKSB7XHJcbiAgICAgIGNoaWxkcmVuLnNsaWNlKDEpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoZWNrRW1wdHkoY2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoIC0gMV0pKSB7XHJcbiAgICAgIGNoaWxkcmVuLnBvcCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGpzeCgnZnJhZ21lbnQnLCB7fSwgY2hpbGRyZW4pO1xyXG4gIH1cclxuXHJcbiAgaWYgKEVMRU1FTlRfVEFHU1tub2RlTmFtZV0pIHtcclxuICAgIGNvbnN0IGF0dHJzID0gRUxFTUVOVF9UQUdTW25vZGVOYW1lXShlbCk7XHJcbiAgICByZXR1cm4ganN4KCdlbGVtZW50JywgYXR0cnMsIGNoaWxkcmVuKTtcclxuICB9XHJcblxyXG4gIGlmIChNQVJLX1RBR1Nbbm9kZU5hbWVdKSB7XHJcbiAgICBjb25zdCBhdHRycyA9IE1BUktfVEFHU1tub2RlTmFtZV0oZWwpO1xyXG4gICAgcmV0dXJuIGNoaWxkcmVuLm1hcChjaGlsZCA9PiBqc3goJ3RleHQnLCBhdHRycywgY2hpbGQpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjaGlsZHJlbjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbWFnZVR5cGUgPSAnaW1hZ2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIdG1sRWRpdG9yIHt9XHJcblxyXG5leHBvcnQgY29uc3Qgd2l0aEh0bWwgPSAoZWRpdG9yOiBFZGl0b3IpID0+IHtcclxuICBjb25zdCB7IGlzSW5saW5lLCBpc1ZvaWQsIGluc2VydERhdGEgfSA9IGVkaXRvcjtcclxuXHJcbiAgZWRpdG9yLmlzSW5saW5lID0gZWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gZWxlbWVudC50eXBlID09PSBMaW5rVHlwZSA/IHRydWUgOiBpc0lubGluZShlbGVtZW50KTtcclxuICB9O1xyXG5cclxuICBlZGl0b3IuaXNWb2lkID0gZWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gZWxlbWVudC50eXBlID09PSAnaW1hZ2UnID8gdHJ1ZSA6IGlzVm9pZChlbGVtZW50KTtcclxuICB9O1xyXG4gIGVkaXRvci5pbnNlcnREYXRhID0gZGF0YSA9PiB7XHJcbiAgICBjb25zdCBodG1sID0gZGF0YS5nZXREYXRhKCd0ZXh0L2h0bWwnKTtcclxuXHJcbiAgICBpZiAoaHRtbCkge1xyXG4gICAgICBjb25zdCBwYXJzZWQgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGh0bWwsICd0ZXh0L2h0bWwnKTtcclxuICAgICAgbGV0IGZyYWdtZW50ID0gKGRlc2VyaWFsaXplKHBhcnNlZC5ib2R5KSBhcyB1bmtub3duKSBhcyBTbGF0ZU5vZGVbXTtcclxuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZWRpdG9yLnNlbGVjdGlvbjtcclxuXHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkTm9kZSA9IEVkaXRvci5ub2RlKGVkaXRvciwgc2VsZWN0aW9uKVswXSBhcyBUZXh0O1xyXG4gICAgICBjb25zdCBzZWxlY3RlZE5vZGVFbXB0eSA9XHJcbiAgICAgICAgc2VsZWN0ZWROb2RlICYmXHJcbiAgICAgICAgc2VsZWN0ZWROb2RlLnRleHQgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgIHNlbGVjdGVkTm9kZS50ZXh0Lmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICA6IGZhbHNlO1xyXG4gICAgICBpZiAoIXNlbGVjdGVkTm9kZUVtcHR5ICYmIGZyYWdtZW50Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBmcmFnbWVudCA9IGZyYWdtZW50LnNsaWNlKDEpO1xyXG4gICAgICB9XHJcbiAgICAgIEVkaXRvci5pbnNlcnRGcmFnbWVudChlZGl0b3IsIGZyYWdtZW50KTtcclxuICAgICAgaWYgKHNlbGVjdGVkTm9kZUVtcHR5ICYmIGZyYWdtZW50Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBlZGl0b3Iuc2VsZWN0aW9uID0gc2VsZWN0aW9uO1xyXG4gICAgICAgIGVkaXRvci5kZWxldGVGcmFnbWVudCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGluc2VydERhdGEoZGF0YSk7XHJcbiAgfTtcclxuICByZXR1cm4gZWRpdG9yO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9