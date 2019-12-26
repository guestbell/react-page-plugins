(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1514:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1493),_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1501),_sub_Color__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1679),_sub_LinearGradient__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1680),_sub_Image__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1681),_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1769),_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1765),_material_ui_icons_Landscape__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(1505),_material_ui_icons_Landscape__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_material_ui_icons_Landscape__WEBPACK_IMPORTED_MODULE_8__),_material_ui_icons_ColorLens__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(1682),_material_ui_icons_ColorLens__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_material_ui_icons_ColorLens__WEBPACK_IMPORTED_MODULE_9__),_material_ui_icons_Gradient__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(1683),_material_ui_icons_Gradient__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_material_ui_icons_Gradient__WEBPACK_IMPORTED_MODULE_10__),_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(674),_types_ModeEnum__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(170),_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(1774),_common_components_bottomToolbar_BottomToolbar__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(399),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _extends(){return(_extends=Object.assign||function(e){for(var _=1;_<arguments.length;_++){var t=arguments[_];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function _classCallCheck(e,_){if(!(e instanceof _))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,_){for(var t=0;t<_.length;t++){var r=_[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,_,t){return _&&_defineProperties(e.prototype,_),t&&_defineProperties(e,t),e}function _possibleConstructorReturn(e,_){return!_||"object"!==_typeof(_)&&"function"!=typeof _?_assertThisInitialized(e):_}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,_){if("function"!=typeof _&&null!==_)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(_&&_.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),_&&_setPrototypeOf(e,_)}function _setPrototypeOf(e,_){return(_setPrototypeOf=Object.setPrototypeOf||function(e,_){return e.__proto__=_,e})(e,_)}enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},BackgroundControls=function(_React$Component){function BackgroundControls(e){var _;return _classCallCheck(this,BackgroundControls),(_=_possibleConstructorReturn(this,_getPrototypeOf(BackgroundControls).call(this,e))).renderModeSwitch=function(){var e=_.props.state.modeFlag,t=void 0===e?_.props.defaultModeFlag:e,r="ON/OFF";switch(_.state.mode){case _types_ModeEnum__WEBPACK_IMPORTED_MODULE_12__.a.COLOR_MODE_FLAG:case _types_ModeEnum__WEBPACK_IMPORTED_MODULE_12__.a.IMAGE_MODE_FLAG:case _types_ModeEnum__WEBPACK_IMPORTED_MODULE_12__.a.GRADIENT_MODE_FLAG:break;default:r="Unknown mode"}return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_1__.a,{control:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_2__.a,{onChange:_.props.handleChangeModeSwitch(_.state.mode,t),checked:Boolean(t&_.state.mode)}),label:r}))},_.renderUI=function(){switch(_.state.mode){case _types_ModeEnum__WEBPACK_IMPORTED_MODULE_12__.a.COLOR_MODE_FLAG:return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,_.renderModeSwitch(),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_sub_Color__WEBPACK_IMPORTED_MODULE_3__.a,_extends({},_.props,{ensureModeOn:_.ensureModeOn(_types_ModeEnum__WEBPACK_IMPORTED_MODULE_12__.a.COLOR_MODE_FLAG),onChangeBackgroundColorPreview:_.props.handleChangeBackgroundColorPreview,backgroundColorPreview:_.props.backgroundColorPreview})));case _types_ModeEnum__WEBPACK_IMPORTED_MODULE_12__.a.GRADIENT_MODE_FLAG:return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,_.renderModeSwitch(),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_sub_LinearGradient__WEBPACK_IMPORTED_MODULE_4__.a,_extends({},_.props,{ensureModeOn:_.ensureModeOn(_types_ModeEnum__WEBPACK_IMPORTED_MODULE_12__.a.GRADIENT_MODE_FLAG),gradientDegPreview:_.props.gradientDegPreview,gradientDegPreviewIndex:_.props.gradientDegPreviewIndex,gradientOpacityPreview:_.props.gradientOpacityPreview,gradientOpacityPreviewIndex:_.props.gradientOpacityPreviewIndex,gradientColorPreview:_.props.gradientColorPreview,gradientColorPreviewIndex:_.props.gradientColorPreviewIndex,gradientColorPreviewColorIndex:_.props.gradientColorPreviewColorIndex,onChangeGradientDegPreview:_.props.handleChangeGradientDegPreview,onChangeGradientOpacityPreview:_.props.handleChangeGradientOpacityPreview,onChangeGradientColorPreview:_.props.handleChangeGradientColorPreview})));case _types_ModeEnum__WEBPACK_IMPORTED_MODULE_12__.a.IMAGE_MODE_FLAG:default:return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,_.renderModeSwitch(),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_sub_Image__WEBPACK_IMPORTED_MODULE_5__.a,_extends({},_.props,{ensureModeOn:_.ensureModeOn(_types_ModeEnum__WEBPACK_IMPORTED_MODULE_12__.a.IMAGE_MODE_FLAG)})))}},_.ensureModeOn=function(e){return function(){var t=_.props.state.modeFlag,r=void 0===t?_.props.defaultModeFlag:t;0==(r&e)&&_.props.handleChangeModeSwitch(e,r)()}},_.handleChangeMode=function(e,t){return _.setState({mode:t})},_.state={mode:e.defaultMode},_}return _inherits(BackgroundControls,_React$Component),_createClass(BackgroundControls,[{key:"render",value:function(){var e=this,_=this.props,t=_.focused,r=_.remove,o=_.state,a=o.hasPadding,n=void 0===a?this.props.defaultHasPadding:a,i=o.modeFlag,l=void 0===i?this.props.defaultModeFlag:i,c=o.darken,u=void 0===c?this.props.defaultDarken:c,s=o.lighten,d=void 0===s?this.props.defaultLighten:s,p=void 0!==this.props.darkenPreview?this.props.darkenPreview:u,E=void 0!==this.props.lightenPreview?this.props.lightenPreview:d;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"backgroundControls"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_bottomToolbar_BottomToolbar__WEBPACK_IMPORTED_MODULE_14__.a,_extends({open:t,title:this.props.translations.pluginName,icon:this.props.IconComponent,onDelete:r},this.props,{theme:this.props.theme}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_6__.a,{value:this.state.mode,onChange:this.handleChangeMode,centered:!0},(this.props.enabledModes&_types_ModeEnum__WEBPACK_IMPORTED_MODULE_12__.a.IMAGE_MODE_FLAG)>0&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__.a,{icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Landscape__WEBPACK_IMPORTED_MODULE_8___default.a,{color:(l&_types_ModeEnum__WEBPACK_IMPORTED_MODULE_12__.a.IMAGE_MODE_FLAG)>0?"secondary":void 0}),label:"Image",value:_types_ModeEnum__WEBPACK_IMPORTED_MODULE_12__.a.IMAGE_MODE_FLAG}),(this.props.enabledModes&_types_ModeEnum__WEBPACK_IMPORTED_MODULE_12__.a.COLOR_MODE_FLAG)>0&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__.a,{icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_ColorLens__WEBPACK_IMPORTED_MODULE_9___default.a,{color:(l&_types_ModeEnum__WEBPACK_IMPORTED_MODULE_12__.a.COLOR_MODE_FLAG)>0?"secondary":void 0}),label:"Color",value:_types_ModeEnum__WEBPACK_IMPORTED_MODULE_12__.a.COLOR_MODE_FLAG}),(this.props.enabledModes&_types_ModeEnum__WEBPACK_IMPORTED_MODULE_12__.a.GRADIENT_MODE_FLAG)>0&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__.a,{icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Gradient__WEBPACK_IMPORTED_MODULE_10___default.a,{color:(l&_types_ModeEnum__WEBPACK_IMPORTED_MODULE_12__.a.GRADIENT_MODE_FLAG)>0?"secondary":void 0}),label:"Gradient",value:_types_ModeEnum__WEBPACK_IMPORTED_MODULE_12__.a.GRADIENT_MODE_FLAG})),this.renderUI(),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{flex:"1",marginRight:"8px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.a,{variant:"body1",id:"linear-gradient-darken-label"},"Darken (",(100*p).toFixed(0),"%)"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_13__.a,{"aria-labelledby":"linear-gradient-darken-label",value:p,onChange:function(_,t){return e.props.handleChangeDarkenPreview(t instanceof Array?t[0]:t)},onChangeCommitted:this.props.handleChangeDarken,step:.01,min:0,max:1})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{flex:"1",marginLeft:"8px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.a,{variant:"body1",id:"linear-gradient-lighten-label"},"Lighten (",(100*E).toFixed(0),"%)"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_13__.a,{"aria-labelledby":"linear-gradient-lighten-label",value:E,onChange:function(_,t){return e.props.handleChangeLightenPreview(t instanceof Array?t[0]:t)},onChangeCommitted:this.props.handleChangeLighten,step:.01,min:0,max:1}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_1__.a,{control:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_2__.a,{onChange:this.props.handleChangeHasPadding,checked:n}),label:"Use padding"}))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),BackgroundControls}(react__WEBPACK_IMPORTED_MODULE_0__.Component),_default=BackgroundControls,reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default,reactHotLoader&&(reactHotLoader.register(BackgroundControls,"BackgroundControls","C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\background\\Controls\\BackgroundDefaultControls.tsx"),reactHotLoader.register(_default,"default","C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\background\\Controls\\BackgroundDefaultControls.tsx")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(7)(module))},1605:function(e,_,t){"use strict";(function(e){var r,o=t(0),a=t(397),n=t(204),i=t(1580),l=t.n(i),c=t(1610),u=t.n(c),s=t(1606),d=t.n(s),p=t(1609),E=t.n(p),O=t(406),P=t.n(O),C=t(299),g=t.n(C);function f(e,_,t){return _ in e?Object.defineProperty(e,_,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[_]=t,e}function M(e,_){return function(e){if(Array.isArray(e))return e}(e)||function(e,_){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],r=!0,o=!1,a=void 0;try{for(var n,i=e[Symbol.iterator]();!(r=(n=i.next()).done)&&(t.push(n.value),!_||t.length!==_);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return t}(e,_)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).enterModule)&&r(e);var m,D="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},b=function(e){var _=e.palette,t=e.spacing;return Object(a.a)({root:{position:"relative"},switchImageButton:{position:"absolute !important",right:-t(2),top:"50%",transform:"translateY(-50%)",color:_.action.active+" !important"},warningContainer:{display:"flex",flexDirection:"row",alignItems:"center",padding:t(2),backgroundColor:P.a[300],marginBottom:t(2)}})};!function(e){e[e.ImageUploadButton=0]="ImageUploadButton",e[e.ImageSrc=1]="ImageSrc"}(m||(m={}));var y=function(e){var _,t,r=e.classes,a=e.onChange,n=M(o.useState(m.ImageUploadButton),2),i=n[0],c=n[1];return o.createElement("div",{className:r.root},(_={},f(_,m.ImageUploadButton,o.createElement(e.UploadImageField,{label:"Choose image",className:"d-flex",onChange:function(e,_){return a({imageId:e,image:_})},imageId:e.state.imageId,existingImage:e.state.image,chooseImageButtonProps:{className:"ory-prevent-blur"},uploadImageButtonProps:{className:"ory-prevent-blur"}})),f(_,m.ImageSrc,o.createElement(o.Fragment,null,o.createElement("div",{className:r.warningContainer},o.createElement(E.a,{style:{color:P.a[700]}}),o.createElement("p",null,"Using externally hosted images is unsafe. Consider uploading your content to GusteBell instead.")),!e.hideSrcField&&o.createElement(d.a,{label:"Url",value:e.state.src,onChange:function(_){return e.onChange({src:_.target.value})}}),!e.hideSrcSetField&&o.createElement(d.a,{tooltip:o.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images",target:"_blank"},"Learn more about srcset"),label:"Html srcset",value:e.state.srcSet,onChange:function(_){return e.onChange({srcSet:_.target.value})}}))),_)[i],o.createElement(g.a,{circular:!0,noShadow:!0,onClick:function(e){e.preventDefault(),c(i===m.ImageSrc?m.ImageUploadButton:m.ImageSrc)},className:r.switchImageButton},(t={},f(t,m.ImageUploadButton,o.createElement(l.a,null)),f(t,m.ImageSrc,o.createElement(u.a,null)),t)[i]))};D(y,"useState{[imageTab, setImageTab](ImageTabEnum.ImageUploadButton)}");var h,L,I=Object(n.a)(b)(y);_.a=I,(h=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).default)&&(h.register(b,"styles","C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\imageOrSrc\\ImageOrSrc.tsx"),h.register(y,"ImageOrSrc","C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\imageOrSrc\\ImageOrSrc.tsx"),h.register(I,"default","C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\imageOrSrc\\ImageOrSrc.tsx")),(L=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).leaveModule)&&L(e)}).call(this,t(7)(e))},1679:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_react_page_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(231),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,_){if(!(e instanceof _))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,_){for(var t=0;t<_.length;t++){var r=_[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,_,t){return _&&_defineProperties(e.prototype,_),t&&_defineProperties(e,t),e}function _possibleConstructorReturn(e,_){return!_||"object"!==_typeof(_)&&"function"!=typeof _?_assertThisInitialized(e):_}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,_){if("function"!=typeof _&&null!==_)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(_&&_.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),_&&_setPrototypeOf(e,_)}function _setPrototypeOf(e,_){return(_setPrototypeOf=Object.setPrototypeOf||function(e,_){return e.__proto__=_,e})(e,_)}enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},ColorComponent=function(_React$Component){function ColorComponent(){var e,_;_classCallCheck(this,ColorComponent);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(_=_possibleConstructorReturn(this,(e=_getPrototypeOf(ColorComponent)).call.apply(e,[this].concat(r)))).handleChangePickerBackgroundColor=function(e){return _.props.onChangeBackgroundColorPreview&&_.props.onChangeBackgroundColorPreview(e)},_.handleChangePickerBackgroundColorComplete=function(e){_.props.onChangeBackgroundColorPreview&&_.props.onChangeBackgroundColorPreview(void 0),_.props.onChange({backgroundColor:e})},_}return _inherits(ColorComponent,_React$Component),_createClass(ColorComponent,[{key:"render",value:function(){var e=this.props,_=e.backgroundColorPreview,t=e.state.backgroundColor,r=void 0===t?this.props.defaultBackgroundColor:t;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_page_ui__WEBPACK_IMPORTED_MODULE_1__.a,{color:_||r,onChange:this.handleChangePickerBackgroundColor,onDialogOpen:this.props.ensureModeOn,onChangeComplete:this.handleChangePickerBackgroundColorComplete,style:{margin:"auto"}}))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),ColorComponent}(react__WEBPACK_IMPORTED_MODULE_0__.Component),_default=ColorComponent,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default,reactHotLoader&&(reactHotLoader.register(ColorComponent,"ColorComponent","C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\background\\Controls\\sub\\Color.tsx"),reactHotLoader.register(_default,"default","C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\background\\Controls\\sub\\Color.tsx")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(7)(module))},1680:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(295),_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1774),_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(674),_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(675),_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(400),_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5__),_react_page_ui__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(231),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ownKeys(e,_){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);_&&(r=r.filter((function(_){return Object.getOwnPropertyDescriptor(e,_).enumerable}))),t.push.apply(t,r)}return t}function _objectSpread(e){for(var _=1;_<arguments.length;_++){var t=null!=arguments[_]?arguments[_]:{};_%2?ownKeys(Object(t),!0).forEach((function(_){_defineProperty(e,_,t[_])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(_){Object.defineProperty(e,_,Object.getOwnPropertyDescriptor(t,_))}))}return e}function _defineProperty(e,_,t){return _ in e?Object.defineProperty(e,_,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[_]=t,e}function _classCallCheck(e,_){if(!(e instanceof _))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,_){for(var t=0;t<_.length;t++){var r=_[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,_,t){return _&&_defineProperties(e.prototype,_),t&&_defineProperties(e,t),e}function _possibleConstructorReturn(e,_){return!_||"object"!==_typeof(_)&&"function"!=typeof _?_assertThisInitialized(e):_}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,_){if("function"!=typeof _&&null!==_)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(_&&_.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),_&&_setPrototypeOf(e,_)}function _setPrototypeOf(e,_){return(_setPrototypeOf=Object.setPrototypeOf||function(e,_){return e.__proto__=_,e})(e,_)}enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},LinearGradientComponent=function(_React$Component){function LinearGradientComponent(){var e,_;_classCallCheck(this,LinearGradientComponent);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(_=_possibleConstructorReturn(this,(e=_getPrototypeOf(LinearGradientComponent)).call.apply(e,[this].concat(r)))).addGradient=function(){_.props.ensureModeOn(),_.props.onChange({gradients:(_.props.state.gradients?_.props.state.gradients:[]).concat({deg:45,opacity:1})})},_.handleChangeDeg=function(e,t){return function(){_.props.onChangeGradientDegPreview&&_.props.onChangeGradientDegPreview(void 0,void 0),_.props.onChange({gradients:(_.props.state.gradients?_.props.state.gradients:[]).map((function(_,r){return r===e?_objectSpread({},_,{deg:t}):_}))})}},_.handleChangeDegPreview=function(e){return function(t,r){_.props.onChangeGradientDegPreview&&_.props.onChangeGradientDegPreview(r,e)}},_.handleChangeOpacity=function(e,t){return function(){_.props.onChangeGradientOpacityPreview&&_.props.onChangeGradientOpacityPreview(void 0,void 0),_.props.onChange({gradients:(_.props.state.gradients?_.props.state.gradients:[]).map((function(_,r){return r===e?_objectSpread({},_,{opacity:t}):_}))})}},_.handleChangeOpacityPreview=function(e){return function(t,r){_.props.onChangeGradientOpacityPreview&&_.props.onChangeGradientOpacityPreview(r,e)}},_.handleChangeGradientColor=function(e,t){return function(r){_.props.onChangeGradientColorPreview&&_.props.onChangeGradientColorPreview(void 0,void 0,void 0),_.props.onChange({gradients:[].concat(_.props.state.gradients?_.props.state.gradients:[]).map((function(_,o){return o===e?_objectSpread({},_,{colors:(_.colors?_.colors:[]).map((function(e,_){return _===t?_objectSpread({},e,{color:r}):e}))}):_}))})}},_.handleChangeGradientColorPreview=function(e,t){return function(r){_.props.onChangeGradientColorPreview&&_.props.onChangeGradientColorPreview(r,e,t)}},_.addColor=function(e){return function(){_.props.ensureModeOn(),_.props.onChange({gradients:(_.props.state.gradients?_.props.state.gradients:[]).map((function(t,r){return r===e?_objectSpread({},t,{colors:(t.colors?t.colors:[]).concat({color:(t.colors?t.colors:[]).length%2==e%2?_.props.defaultGradientColor:_.props.defaultGradientSecondaryColor})}):t}))})}},_.removeColor=function(e,t){return function(){_.props.onChange({gradients:[].concat(_.props.state.gradients?_.props.state.gradients:[]).map((function(_,r){return r===e?_objectSpread({},_,{colors:(_.colors?_.colors:[]).filter((function(e,_){return _!==t}))}):_}))})}},_.removeGradient=function(e){return function(){_.props.onChange({gradients:[].concat(_.props.state.gradients?_.props.state.gradients:[]).filter((function(_,t){return t!==e}))})}},_}return _inherits(LinearGradientComponent,_React$Component),_createClass(LinearGradientComponent,[{key:"render",value:function(){var e=this,_=this.props,t=_.gradientDegPreview,r=_.gradientDegPreviewIndex,o=_.gradientOpacityPreview,a=_.gradientOpacityPreviewIndex,n=_.gradientColorPreview,i=_.gradientColorPreviewIndex,l=_.gradientColorPreviewColorIndex,c=_.state.gradients,u=void 0===c?[]:c;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,u.map((function(_,c){var u=_.colors?_.colors:[],s=c===r&&void 0!==t?t:_.deg,d=c===a&&void 0!==o?o:_.opacity;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{key:c,style:{marginBottom:"8px",borderLeft:"2px",borderLeftStyle:"solid",paddingLeft:"8px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__.a,{variant:"body1",id:"linear-gradient-degree-label"},"Gradient rotation (",s,"deg)"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_2__.a,{"aria-labelledby":"linear-gradient-degree-label",value:s,onChange:e.handleChangeDegPreview(c),onDragEnd:e.handleChangeDeg(c,s),step:5,min:0,max:360})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__.a,{variant:"body1",id:"linear-gradient-opacity-label"},"Gradient opacity (",(100*d).toFixed(0),"%)"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_2__.a,{"aria-labelledby":"linear-gradient-opacity-label",value:d,onChange:e.handleChangeOpacityPreview(c),onDragEnd:e.handleChangeOpacity(c,d),step:.01,min:0,max:1})),u.map((function(_,t){var r=c===i&&t===l&&void 0!==n?n:_.color;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{key:t},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_page_ui__WEBPACK_IMPORTED_MODULE_6__.a,{style:{marginLeft:"8px"},color:r,onChange:e.handleChangeGradientColorPreview(c,t),onChangeComplete:e.handleChangeGradientColor(c,t)}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__.a,{"aria-label":"Delete",onClick:e.removeColor(c,t)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5___default.a,null)))})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__.a,{variant:"contained",onClick:e.addColor(c),style:{marginLeft:"8px"}},"Add color"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__.a,{"aria-label":"Delete",onClick:e.removeGradient(c)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5___default.a,null)))})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__.a,{style:{margin:"auto"},variant:"contained",onClick:this.addGradient,disabled:u.length>5},"Add gradient")))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),LinearGradientComponent}(react__WEBPACK_IMPORTED_MODULE_0__.Component),_default=LinearGradientComponent,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default,reactHotLoader&&(reactHotLoader.register(LinearGradientComponent,"LinearGradientComponent","C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\background\\Controls\\sub\\LinearGradient.tsx"),reactHotLoader.register(_default,"default","C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\background\\Controls\\sub\\LinearGradient.tsx")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(7)(module))},1681:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1501),_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1493),_common_components_imageOrSrc_ImageOrSrc__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1605),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,_){if(!(e instanceof _))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,_){for(var t=0;t<_.length;t++){var r=_[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,_,t){return _&&_defineProperties(e.prototype,_),t&&_defineProperties(e,t),e}function _possibleConstructorReturn(e,_){return!_||"object"!==_typeof(_)&&"function"!=typeof _?_assertThisInitialized(e):_}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,_){if("function"!=typeof _&&null!==_)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(_&&_.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),_&&_setPrototypeOf(e,_)}function _setPrototypeOf(e,_){return(_setPrototypeOf=Object.setPrototypeOf||function(e,_){return e.__proto__=_,e})(e,_)}enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},ImageComponent=function(_React$Component){function ImageComponent(){var e,_;_classCallCheck(this,ImageComponent);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(_=_possibleConstructorReturn(this,(e=_getPrototypeOf(ImageComponent)).call.apply(e,[this].concat(r)))).handleChangeIsParallax=function(e){_.props.ensureModeOn(),_.props.onChange({isParallax:void 0!==_.props.state.isParallax&&!_.props.state.isParallax})},_.imageOrSrcOnChange=function(e){_.props.onChange({bgImage:e.image,bgImageId:e.imageId,bgSrc:e.src})},_}return _inherits(ImageComponent,_React$Component),_createClass(ImageComponent,[{key:"render",value:function(){var e=this.props.state.isParallax,_=void 0===e||e;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"w-100"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_imageOrSrc_ImageOrSrc__WEBPACK_IMPORTED_MODULE_3__.a,{onChange:this.imageOrSrcOnChange,state:{imageId:this.props.state.bgImageId,image:this.props.state.bgImage,src:this.props.state.bgSrc},UploadImageField:this.props.UploadImageField,hideSrcSetField:!0})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_2__.a,{control:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_1__.a,{onChange:this.handleChangeIsParallax,checked:_}),label:"Is parallax"})))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),ImageComponent}(react__WEBPACK_IMPORTED_MODULE_0__.Component),_default=ImageComponent,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default,reactHotLoader&&(reactHotLoader.register(ImageComponent,"ImageComponent","C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\background\\Controls\\sub\\Image.tsx"),reactHotLoader.register(_default,"default","C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\background\\Controls\\sub\\Image.tsx")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(7)(module))}}]);