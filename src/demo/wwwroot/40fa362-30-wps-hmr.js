webpackHotUpdate(30,{

/***/ "./src/lib/slate-new/plugins/color/withColors.ts":
/*!*******************************************************!*\
  !*** ./src/lib/slate-new/plugins/color/withColors.ts ***!
  \*******************************************************/
/*! exports provided: isColorActive, withColors, addColorStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isColorActive", function() { return isColorActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withColors", function() { return withColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addColorStyles", function() { return addColorStyles; });
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slate */ "./node_modules/slate/dist/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



var isColorActive = function isColorActive(editor) {
  var _Editor$elements = slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].elements(editor, {
    match: {
      type: 'color'
    },
    mode: 'all'
  }),
      _Editor$elements2 = _slicedToArray(_Editor$elements, 1),
      node = _Editor$elements2[0];

  return !!node;
};

var unwrapColor = function unwrapColor(editor) {
  slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].unwrapNodes(editor, {
    match: {
      type: 'color'
    }
  });
};

var wrapColor = function wrapColor(editor, color) {
  var isActive = isColorActive(editor);
  var c = {
    type: 'color',
    color: color,
    children: []
  }; // Wrap no matter what because if it's active, it splits the inline correctly

  slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].wrapNodes(editor, c, {
    split: true
  });

  if (isActive) {
    // Unwrap the new wrap
    unwrapColor(editor); // Unwrap the original color

    unwrapColor(editor); // Wrap to give it the new color

    slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].wrapNodes(editor, c, {
      split: true
    });
  } // Editor.collapse(editor, { edge: 'end' });

};

var withColors = function withColors(editor) {
  var exec = editor.exec,
      isInline = editor.isInline;

  editor.isInline = function (element) {
    return element.type === 'color' ? true : isInline(element);
  };

  editor.exec = function (command) {
    if (command.type === 'set_color') {
      var color = command.color;

      if (editor.selection) {
        wrapColor(editor, color);
      }

      return;
    }

    if (command.type === 'clear_color') {
      if (editor.selection) {
        unwrapColor(editor);
      }

      return;
    }

    exec(command);
  };

  return editor;
};
var addColorStyles = function addColorStyles(element, children) {
  var color = element.color;

  if (!color) {
    return children;
  }

  return children && react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    style: _objectSpread({}, children && children.props && children.props.style, {
      color: "rgba(".concat(color.r, ",").concat(color.g, ",").concat(color.b, ",").concat(color.a, ")")
    })
  });
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(isColorActive, "isColorActive", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate-new\\plugins\\color\\withColors.ts");
  reactHotLoader.register(unwrapColor, "unwrapColor", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate-new\\plugins\\color\\withColors.ts");
  reactHotLoader.register(wrapColor, "wrapColor", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate-new\\plugins\\color\\withColors.ts");
  reactHotLoader.register(withColors, "withColors", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate-new\\plugins\\color\\withColors.ts");
  reactHotLoader.register(addColorStyles, "addColorStyles", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\slate-new\\plugins\\color\\withColors.ts");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3NsYXRlLW5ldy9wbHVnaW5zL2NvbG9yL3dpdGhDb2xvcnMudHMiXSwibmFtZXMiOlsiaXNDb2xvckFjdGl2ZSIsImVkaXRvciIsIkVkaXRvciIsImVsZW1lbnRzIiwibWF0Y2giLCJ0eXBlIiwibW9kZSIsIm5vZGUiLCJ1bndyYXBDb2xvciIsInVud3JhcE5vZGVzIiwid3JhcENvbG9yIiwiY29sb3IiLCJpc0FjdGl2ZSIsImMiLCJjaGlsZHJlbiIsIndyYXBOb2RlcyIsInNwbGl0Iiwid2l0aENvbG9ycyIsImV4ZWMiLCJpc0lubGluZSIsImVsZW1lbnQiLCJjb21tYW5kIiwic2VsZWN0aW9uIiwiYWRkQ29sb3JTdHlsZXMiLCJSZWFjdCIsImNsb25lRWxlbWVudCIsInN0eWxlIiwicHJvcHMiLCJyIiwiZyIsImIiLCJhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdPLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsTUFBRCxFQUFvQjtBQUFBLHlCQUNoQ0MsNENBQU0sQ0FBQ0MsUUFBUCxDQUFnQkYsTUFBaEIsRUFBd0I7QUFDckNHLFNBQUssRUFBRTtBQUFFQyxVQUFJLEVBQUU7QUFBUixLQUQ4QjtBQUVyQ0MsUUFBSSxFQUFFO0FBRitCLEdBQXhCLENBRGdDO0FBQUE7QUFBQSxNQUN4Q0MsSUFEd0M7O0FBSy9DLFNBQU8sQ0FBQyxDQUFDQSxJQUFUO0FBQ0QsQ0FOTTs7QUFRUCxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDUCxNQUFELEVBQW9CO0FBQ3RDQyw4Q0FBTSxDQUFDTyxXQUFQLENBQW1CUixNQUFuQixFQUEyQjtBQUFFRyxTQUFLLEVBQUU7QUFBRUMsVUFBSSxFQUFFO0FBQVI7QUFBVCxHQUEzQjtBQUNELENBRkQ7O0FBSUEsSUFBTUssU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ1QsTUFBRCxFQUFpQlUsS0FBakIsRUFBcUM7QUFDckQsTUFBTUMsUUFBUSxHQUFHWixhQUFhLENBQUNDLE1BQUQsQ0FBOUI7QUFFQSxNQUFNWSxDQUFDLEdBQUc7QUFBRVIsUUFBSSxFQUFFLE9BQVI7QUFBaUJNLFNBQUssRUFBTEEsS0FBakI7QUFBd0JHLFlBQVEsRUFBRTtBQUFsQyxHQUFWLENBSHFELENBSXJEOztBQUNBWiw4Q0FBTSxDQUFDYSxTQUFQLENBQWlCZCxNQUFqQixFQUF5QlksQ0FBekIsRUFBNEI7QUFBRUcsU0FBSyxFQUFFO0FBQVQsR0FBNUI7O0FBQ0EsTUFBSUosUUFBSixFQUFjO0FBQ1o7QUFDQUosZUFBVyxDQUFDUCxNQUFELENBQVgsQ0FGWSxDQUdaOztBQUNBTyxlQUFXLENBQUNQLE1BQUQsQ0FBWCxDQUpZLENBS1o7O0FBQ0FDLGdEQUFNLENBQUNhLFNBQVAsQ0FBaUJkLE1BQWpCLEVBQXlCWSxDQUF6QixFQUE0QjtBQUFFRyxXQUFLLEVBQUU7QUFBVCxLQUE1QjtBQUNELEdBYm9ELENBY3JEOztBQUNELENBZkQ7O0FBaUJPLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNoQixNQUFELEVBQW9CO0FBQUEsTUFDcENpQixJQURvQyxHQUNqQmpCLE1BRGlCLENBQ3BDaUIsSUFEb0M7QUFBQSxNQUM5QkMsUUFEOEIsR0FDakJsQixNQURpQixDQUM5QmtCLFFBRDhCOztBQUc1Q2xCLFFBQU0sQ0FBQ2tCLFFBQVAsR0FBa0IsVUFBQUMsT0FBTyxFQUFJO0FBQzNCLFdBQU9BLE9BQU8sQ0FBQ2YsSUFBUixLQUFpQixPQUFqQixHQUEyQixJQUEzQixHQUFrQ2MsUUFBUSxDQUFDQyxPQUFELENBQWpEO0FBQ0QsR0FGRDs7QUFJQW5CLFFBQU0sQ0FBQ2lCLElBQVAsR0FBYyxVQUFBRyxPQUFPLEVBQUk7QUFDdkIsUUFBSUEsT0FBTyxDQUFDaEIsSUFBUixLQUFpQixXQUFyQixFQUFrQztBQUFBLFVBQ3hCTSxLQUR3QixHQUNkVSxPQURjLENBQ3hCVixLQUR3Qjs7QUFHaEMsVUFBSVYsTUFBTSxDQUFDcUIsU0FBWCxFQUFzQjtBQUNwQlosaUJBQVMsQ0FBQ1QsTUFBRCxFQUFTVSxLQUFULENBQVQ7QUFDRDs7QUFFRDtBQUNEOztBQUVELFFBQUlVLE9BQU8sQ0FBQ2hCLElBQVIsS0FBaUIsYUFBckIsRUFBb0M7QUFDbEMsVUFBSUosTUFBTSxDQUFDcUIsU0FBWCxFQUFzQjtBQUNwQmQsbUJBQVcsQ0FBQ1AsTUFBRCxDQUFYO0FBQ0Q7O0FBRUQ7QUFDRDs7QUFDRGlCLFFBQUksQ0FBQ0csT0FBRCxDQUFKO0FBQ0QsR0FuQkQ7O0FBcUJBLFNBQU9wQixNQUFQO0FBQ0QsQ0E3Qk07QUErQkEsSUFBTXNCLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0gsT0FBRCxFQUFnQk4sUUFBaEIsRUFBMEM7QUFBQSxNQUM5REgsS0FEOEQsR0FDcERTLE9BRG9ELENBQzlEVCxLQUQ4RDs7QUFFdEUsTUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDVixXQUFPRyxRQUFQO0FBQ0Q7O0FBQ0QsU0FDRUEsUUFBUSxJQUNSVSw0Q0FBSyxDQUFDQyxZQUFOLENBQW1CWCxRQUFuQixFQUE2QjtBQUMzQlksU0FBSyxvQkFDQ1osUUFBUSxJQUFJQSxRQUFRLENBQUNhLEtBQXJCLElBQThCYixRQUFRLENBQUNhLEtBQVQsQ0FBZUQsS0FEOUM7QUFFSGYsV0FBSyxpQkFBVUEsS0FBSyxDQUFDaUIsQ0FBaEIsY0FBcUJqQixLQUFLLENBQUNrQixDQUEzQixjQUFnQ2xCLEtBQUssQ0FBQ21CLENBQXRDLGNBQTJDbkIsS0FBSyxDQUFDb0IsQ0FBakQ7QUFGRjtBQURzQixHQUE3QixDQUZGO0FBU0QsQ0FkTTs7Ozs7Ozs7OzswQkE1RE0vQixhOzBCQVFQUSxXOzBCQUlBRSxTOzBCQWlCT08sVTswQkErQkFNLGMiLCJmaWxlIjoiNDBmYTM2Mi0zMC13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWRpdG9yLCBNYXJrIH0gZnJvbSAnc2xhdGUnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSR0JDb2xvciB9IGZyb20gJ3JlYWN0LWNvbG9yJztcclxuXHJcbmV4cG9ydCBjb25zdCBpc0NvbG9yQWN0aXZlID0gKGVkaXRvcjogRWRpdG9yKSA9PiB7XHJcbiAgY29uc3QgW25vZGVdID0gRWRpdG9yLmVsZW1lbnRzKGVkaXRvciwge1xyXG4gICAgbWF0Y2g6IHsgdHlwZTogJ2NvbG9yJyB9LFxyXG4gICAgbW9kZTogJ2FsbCcsXHJcbiAgfSk7XHJcbiAgcmV0dXJuICEhbm9kZTtcclxufTtcclxuXHJcbmNvbnN0IHVud3JhcENvbG9yID0gKGVkaXRvcjogRWRpdG9yKSA9PiB7XHJcbiAgRWRpdG9yLnVud3JhcE5vZGVzKGVkaXRvciwgeyBtYXRjaDogeyB0eXBlOiAnY29sb3InIH0gfSk7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwQ29sb3IgPSAoZWRpdG9yOiBFZGl0b3IsIGNvbG9yOiBSR0JDb2xvcikgPT4ge1xyXG4gIGNvbnN0IGlzQWN0aXZlID0gaXNDb2xvckFjdGl2ZShlZGl0b3IpO1xyXG5cclxuICBjb25zdCBjID0geyB0eXBlOiAnY29sb3InLCBjb2xvciwgY2hpbGRyZW46IFtdIH07XHJcbiAgLy8gV3JhcCBubyBtYXR0ZXIgd2hhdCBiZWNhdXNlIGlmIGl0J3MgYWN0aXZlLCBpdCBzcGxpdHMgdGhlIGlubGluZSBjb3JyZWN0bHlcclxuICBFZGl0b3Iud3JhcE5vZGVzKGVkaXRvciwgYywgeyBzcGxpdDogdHJ1ZSB9KTtcclxuICBpZiAoaXNBY3RpdmUpIHtcclxuICAgIC8vIFVud3JhcCB0aGUgbmV3IHdyYXBcclxuICAgIHVud3JhcENvbG9yKGVkaXRvcik7XHJcbiAgICAvLyBVbndyYXAgdGhlIG9yaWdpbmFsIGNvbG9yXHJcbiAgICB1bndyYXBDb2xvcihlZGl0b3IpO1xyXG4gICAgLy8gV3JhcCB0byBnaXZlIGl0IHRoZSBuZXcgY29sb3JcclxuICAgIEVkaXRvci53cmFwTm9kZXMoZWRpdG9yLCBjLCB7IHNwbGl0OiB0cnVlIH0pO1xyXG4gIH1cclxuICAvLyBFZGl0b3IuY29sbGFwc2UoZWRpdG9yLCB7IGVkZ2U6ICdlbmQnIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHdpdGhDb2xvcnMgPSAoZWRpdG9yOiBFZGl0b3IpID0+IHtcclxuICBjb25zdCB7IGV4ZWMsIGlzSW5saW5lIH0gPSBlZGl0b3I7XHJcblxyXG4gIGVkaXRvci5pc0lubGluZSA9IGVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIGVsZW1lbnQudHlwZSA9PT0gJ2NvbG9yJyA/IHRydWUgOiBpc0lubGluZShlbGVtZW50KTtcclxuICB9O1xyXG5cclxuICBlZGl0b3IuZXhlYyA9IGNvbW1hbmQgPT4ge1xyXG4gICAgaWYgKGNvbW1hbmQudHlwZSA9PT0gJ3NldF9jb2xvcicpIHtcclxuICAgICAgY29uc3QgeyBjb2xvciB9ID0gY29tbWFuZDtcclxuXHJcbiAgICAgIGlmIChlZGl0b3Iuc2VsZWN0aW9uKSB7XHJcbiAgICAgICAgd3JhcENvbG9yKGVkaXRvciwgY29sb3IpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbW1hbmQudHlwZSA9PT0gJ2NsZWFyX2NvbG9yJykge1xyXG4gICAgICBpZiAoZWRpdG9yLnNlbGVjdGlvbikge1xyXG4gICAgICAgIHVud3JhcENvbG9yKGVkaXRvcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGV4ZWMoY29tbWFuZCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGVkaXRvcjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb2xvclN0eWxlcyA9IChlbGVtZW50OiBNYXJrLCBjaGlsZHJlbjogSlNYLkVsZW1lbnQpID0+IHtcclxuICBjb25zdCB7IGNvbG9yIH0gPSBlbGVtZW50O1xyXG4gIGlmICghY29sb3IpIHtcclxuICAgIHJldHVybiBjaGlsZHJlbjtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIGNoaWxkcmVuICYmXHJcbiAgICBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcclxuICAgICAgc3R5bGU6IHtcclxuICAgICAgICAuLi4oY2hpbGRyZW4gJiYgY2hpbGRyZW4ucHJvcHMgJiYgY2hpbGRyZW4ucHJvcHMuc3R5bGUpLFxyXG4gICAgICAgIGNvbG9yOiBgcmdiYSgke2NvbG9yLnJ9LCR7Y29sb3IuZ30sJHtjb2xvci5ifSwke2NvbG9yLmF9KWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=