webpackHotUpdate("main",{

/***/ "./src/lib/common/components/slateRenderer/SlateRenderer.tsx":
/*!*******************************************************************!*\
  !*** ./src/lib/common/components/slateRenderer/SlateRenderer.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ "./node_modules/slate/dist/index.es.js");
/* harmony import */ var _slateMigrations_Migrator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../slateMigrations/Migrator */ "./src/lib/common/slateMigrations/Migrator.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





var RendererRecursive = function RendererRecursive(_ref) {
  var node = _ref.node,
      textRule = _ref.textRule,
      nodeRule = _ref.nodeRule;

  if (slate__WEBPACK_IMPORTED_MODULE_1__["Text"].isText(node)) {
    return textRule(node);
  }

  if (slate__WEBPACK_IMPORTED_MODULE_1__["Element"].isElement(node)) {
    return nodeRule(node, node.children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, node.children.map(function (n, key) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](RendererRecursive, {
        nodeRule: nodeRule,
        textRule: textRule,
        node: n,
        key: key
      });
    })));
  }
};

var SlateRenderer = function SlateRenderer(props) {
  var value = props.value,
      nodeRule = props.nodeRule,
      textRule = props.textRule,
      migrations = props.migrations,
      version = props.version;
  var migratedValue = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () {
    var migrationResult = _slateMigrations_Migrator__WEBPACK_IMPORTED_MODULE_2__["Migrator"].migrateState(version, value, migrations);
    return migrationResult.migratedState;
  }, [props.value]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "slateRenderer__container"
  }, migratedValue && Array.isArray(migratedValue) && migratedValue.map(function (node, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](RendererRecursive, {
      nodeRule: nodeRule,
      textRule: textRule,
      node: node,
      key: key
    });
  }));
};

__signature__(SlateRenderer, "useMemo{migratedValue}");

var _default = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["memo"](SlateRenderer);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RendererRecursive, "RendererRecursive", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\slateRenderer\\SlateRenderer.tsx");
  reactHotLoader.register(SlateRenderer, "SlateRenderer", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\slateRenderer\\SlateRenderer.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\slateRenderer\\SlateRenderer.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbW1vbi9jb21wb25lbnRzL3NsYXRlUmVuZGVyZXIvU2xhdGVSZW5kZXJlci50c3giXSwibmFtZXMiOlsiUmVuZGVyZXJSZWN1cnNpdmUiLCJub2RlIiwidGV4dFJ1bGUiLCJub2RlUnVsZSIsIlRleHQiLCJpc1RleHQiLCJFbGVtZW50IiwiaXNFbGVtZW50IiwiY2hpbGRyZW4iLCJtYXAiLCJuIiwia2V5IiwiU2xhdGVSZW5kZXJlciIsInByb3BzIiwidmFsdWUiLCJtaWdyYXRpb25zIiwidmVyc2lvbiIsIm1pZ3JhdGVkVmFsdWUiLCJSZWFjdCIsIm1pZ3JhdGlvblJlc3VsdCIsIk1pZ3JhdG9yIiwibWlncmF0ZVN0YXRlIiwibWlncmF0ZWRTdGF0ZSIsIkFycmF5IiwiaXNBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQW9CQSxJQUFNQSxpQkFBbUQsR0FBRyxTQUF0REEsaUJBQXNELE9BSXREO0FBQUEsTUFISkMsSUFHSSxRQUhKQSxJQUdJO0FBQUEsTUFGSkMsUUFFSSxRQUZKQSxRQUVJO0FBQUEsTUFESkMsUUFDSSxRQURKQSxRQUNJOztBQUNKLE1BQUlDLDBDQUFJLENBQUNDLE1BQUwsQ0FBWUosSUFBWixDQUFKLEVBQXVCO0FBQ3JCLFdBQU9DLFFBQVEsQ0FBQ0QsSUFBRCxDQUFmO0FBQ0Q7O0FBQ0QsTUFBSUssNkNBQU8sQ0FBQ0MsU0FBUixDQUFrQk4sSUFBbEIsQ0FBSixFQUE2QjtBQUMzQixXQUFPRSxRQUFRLENBQ2JGLElBRGEsRUFFYkEsSUFBSSxDQUFDTyxRQUFMLGlCQUNFLDBHQUNHUCxJQUFJLENBQUNPLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQixVQUFDQyxDQUFELEVBQUlDLEdBQUo7QUFBQSwwQkFDakIsb0RBQUMsaUJBQUQ7QUFDRSxnQkFBUSxFQUFFUixRQURaO0FBRUUsZ0JBQVEsRUFBRUQsUUFGWjtBQUdFLFlBQUksRUFBRVEsQ0FIUjtBQUlFLFdBQUcsRUFBRUM7QUFKUCxRQURpQjtBQUFBLEtBQWxCLENBREgsQ0FIVyxDQUFmO0FBZUQ7QUFDRixDQXpCRDs7QUEyQkEsSUFBTUMsYUFBMkMsR0FBRyxTQUE5Q0EsYUFBOEMsQ0FBQUMsS0FBSyxFQUFJO0FBQzNELE1BQVFDLEtBQVIsR0FBMkRELEtBQTNELENBQVFDLEtBQVI7QUFBQSxNQUFlWCxRQUFmLEdBQTJEVSxLQUEzRCxDQUFlVixRQUFmO0FBQUEsTUFBeUJELFFBQXpCLEdBQTJEVyxLQUEzRCxDQUF5QlgsUUFBekI7QUFBQSxNQUFtQ2EsVUFBbkMsR0FBMkRGLEtBQTNELENBQW1DRSxVQUFuQztBQUFBLE1BQStDQyxPQUEvQyxHQUEyREgsS0FBM0QsQ0FBK0NHLE9BQS9DO0FBRUEsTUFBTUMsYUFBYSxHQUFHQyw2Q0FBQSxDQUFjLFlBQU07QUFDeEMsUUFBTUMsZUFBZSxHQUFHQyxrRUFBUSxDQUFDQyxZQUFULENBQXNCTCxPQUF0QixFQUErQkYsS0FBL0IsRUFBc0NDLFVBQXRDLENBQXhCO0FBQ0EsV0FBT0ksZUFBZSxDQUFDRyxhQUF2QjtBQUNELEdBSHFCLEVBR25CLENBQUNULEtBQUssQ0FBQ0MsS0FBUCxDQUhtQixDQUF0QjtBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDR0csYUFBYSxJQUNaTSxLQUFLLENBQUNDLE9BQU4sQ0FBY1AsYUFBZCxDQURELElBRUNBLGFBQWEsQ0FBQ1IsR0FBZCxDQUFrQixVQUFDUixJQUFELEVBQU9VLEdBQVA7QUFBQSx3QkFDaEIsb0RBQUMsaUJBQUQ7QUFDRSxjQUFRLEVBQUVSLFFBRFo7QUFFRSxjQUFRLEVBQUVELFFBRlo7QUFHRSxVQUFJLEVBQUVELElBSFI7QUFJRSxTQUFHLEVBQUVVO0FBSlAsTUFEZ0I7QUFBQSxHQUFsQixDQUhKLENBREY7QUFlRCxDQXRCRDs7Y0FBTUMsYTs7NEJBd0JTTSwwQ0FBQSxDQUFXTixhQUFYLEM7O0FBQUE7Ozs7Ozs7Ozs7MEJBbkRUWixpQjswQkEyQkFZLGEiLCJmaWxlIjoiNTkwNThlZi1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5vZGUsIEVsZW1lbnQsIFRleHQgfSBmcm9tICdzbGF0ZSc7XHJcbmltcG9ydCB7IFNsYXRlVmFsdWUgfSBmcm9tICcuLi8uLi90eXBlcy9zbGF0ZS9TbGF0ZVZhbHVlJztcclxuaW1wb3J0IHsgTWlncmF0b3IgfSBmcm9tICcuLi8uLi9zbGF0ZU1pZ3JhdGlvbnMvTWlncmF0b3InO1xyXG5pbXBvcnQgeyBNaWdyYXRpb24gfSBmcm9tICcuLi8uLi9zbGF0ZU1pZ3JhdGlvbnMvTWlncmF0aW9uJztcclxuXHJcbmV4cG9ydCB0eXBlIFRleHRSdWxlVHlwZSA9ICh0ZXh0OiBUZXh0KSA9PiBKU1guRWxlbWVudDtcclxuZXhwb3J0IHR5cGUgTm9kZVJ1bGVUeXBlID0gKG5vZGU6IE5vZGUsIGNoaWxkcmVuOiBKU1guRWxlbWVudCkgPT4gSlNYLkVsZW1lbnQ7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNsYXRlUmVuZGVyZXJQcm9wcyB7XHJcbiAgdmFsdWU6IFNsYXRlVmFsdWU7XHJcbiAgdGV4dFJ1bGU6IFRleHRSdWxlVHlwZTtcclxuICBub2RlUnVsZTogTm9kZVJ1bGVUeXBlO1xyXG4gIHZlcnNpb24/OiBudW1iZXI7XHJcbiAgbWlncmF0aW9ucz86IE1pZ3JhdGlvbltdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlbmRlcmVyUmVjdXJzaXZlUHJvcHMge1xyXG4gIG5vZGU6IE5vZGU7XHJcbiAgdGV4dFJ1bGU6IFRleHRSdWxlVHlwZTtcclxuICBub2RlUnVsZTogTm9kZVJ1bGVUeXBlO1xyXG59XHJcblxyXG5jb25zdCBSZW5kZXJlclJlY3Vyc2l2ZTogUmVhY3QuRkM8UmVuZGVyZXJSZWN1cnNpdmVQcm9wcz4gPSAoe1xyXG4gIG5vZGUsXHJcbiAgdGV4dFJ1bGUsXHJcbiAgbm9kZVJ1bGUsXHJcbn0pID0+IHtcclxuICBpZiAoVGV4dC5pc1RleHQobm9kZSkpIHtcclxuICAgIHJldHVybiB0ZXh0UnVsZShub2RlKTtcclxuICB9XHJcbiAgaWYgKEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpKSB7XHJcbiAgICByZXR1cm4gbm9kZVJ1bGUoXHJcbiAgICAgIG5vZGUsXHJcbiAgICAgIG5vZGUuY2hpbGRyZW4gJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7bm9kZS5jaGlsZHJlbi5tYXAoKG4sIGtleSkgPT4gKFxyXG4gICAgICAgICAgICA8UmVuZGVyZXJSZWN1cnNpdmVcclxuICAgICAgICAgICAgICBub2RlUnVsZT17bm9kZVJ1bGV9XHJcbiAgICAgICAgICAgICAgdGV4dFJ1bGU9e3RleHRSdWxlfVxyXG4gICAgICAgICAgICAgIG5vZGU9e259XHJcbiAgICAgICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBTbGF0ZVJlbmRlcmVyOiBSZWFjdC5GQzxTbGF0ZVJlbmRlcmVyUHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgdmFsdWUsIG5vZGVSdWxlLCB0ZXh0UnVsZSwgbWlncmF0aW9ucywgdmVyc2lvbiB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IG1pZ3JhdGVkVmFsdWUgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IG1pZ3JhdGlvblJlc3VsdCA9IE1pZ3JhdG9yLm1pZ3JhdGVTdGF0ZSh2ZXJzaW9uLCB2YWx1ZSwgbWlncmF0aW9ucyk7XHJcbiAgICByZXR1cm4gbWlncmF0aW9uUmVzdWx0Lm1pZ3JhdGVkU3RhdGU7XHJcbiAgfSwgW3Byb3BzLnZhbHVlXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2xhdGVSZW5kZXJlcl9fY29udGFpbmVyXCI+XHJcbiAgICAgIHttaWdyYXRlZFZhbHVlICYmXHJcbiAgICAgICAgQXJyYXkuaXNBcnJheShtaWdyYXRlZFZhbHVlKSAmJlxyXG4gICAgICAgIG1pZ3JhdGVkVmFsdWUubWFwKChub2RlLCBrZXkpID0+IChcclxuICAgICAgICAgIDxSZW5kZXJlclJlY3Vyc2l2ZVxyXG4gICAgICAgICAgICBub2RlUnVsZT17bm9kZVJ1bGV9XHJcbiAgICAgICAgICAgIHRleHRSdWxlPXt0ZXh0UnVsZX1cclxuICAgICAgICAgICAgbm9kZT17bm9kZX1cclxuICAgICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICB7Lyo8cHJlPntKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgMSl9PC9wcmU+Ki99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTbGF0ZVJlbmRlcmVyKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==