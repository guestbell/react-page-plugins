(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1521:function(e,t,r){"use strict";r.r(t),function(e){var n,o,a=r(0),l=r(398),i=r(1605),u=r(1566),c=r(676),s=r(201),f=r(1567),p=r(1565);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var g,b,y=Object.keys(s.a).filter((function(e){return"number"==typeof s.a[e]})).map((function(e){return s.a[e]})),h=(m(n={},s.a.FullWidth,"Full width"),m(n,s.a.SmallHeight,"Small height"),m(n,s.a.MediumHeight,"Medium height"),m(n,s.a.BigHeight,"Big height"),n),v=function(e){var t=e.Renderer,r=e.onChange,n=e.readOnly,o=e.focused,m=e.remove,g=e.state.constraintMode,b=void 0===g?s.a.FullWidth:g;return a.createElement("div",{className:"imageControls ory-prevent-blur"},a.createElement(t,e),!n&&o&&a.createElement(l.a,d({icon:e.IconComponent,open:e.focused,title:e.translations.pluginName,onDelete:m},e),a.createElement(i.a,{onChange:r,state:e.state,UploadImageField:e.UploadImageField}),a.createElement(p.a,null,a.createElement(f.a,null,"Size mode"),a.createElement(u.a,{value:b,onChange:function(e){return r({constraintMode:Number(e.target.value)})}},y.map((function(e,t){return a.createElement(c.a,{key:t,value:e},h[e])}))))))},O=v;t.default=O,(g=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(g.register(y,"allModes","C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\image\\Controls\\ImageDefaultControls.tsx"),g.register(h,"modeNames","C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\image\\Controls\\ImageDefaultControls.tsx"),g.register(v,"ImageDefaultControls","C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\image\\Controls\\ImageDefaultControls.tsx"),g.register(O,"default","C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\image\\Controls\\ImageDefaultControls.tsx")),(b=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&b(e)}.call(this,r(7)(e))},1580:function(e,t,r){"use strict";var n=r(63);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(0)),a=(0,n(r(296)).default)(o.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Create");t.default=a},1605:function(e,t,r){"use strict";(function(e){var n,o=r(0),a=r(294),l=r(181),i=r(1580),u=r.n(i),c=r(1610),s=r.n(c),f=r(1606),p=r.n(f),d=r(1609),m=r.n(d),g=r(405),b=r.n(g),y=r(298),h=r.n(y);function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&n(e);var C,w="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},j=function(e){var t=e.palette,r=e.spacing;return Object(a.a)({root:{position:"relative"},switchImageButton:{position:"absolute !important",right:-r(2),top:"50%",transform:"translateY(-50%)",color:t.action.active+" !important"},warningContainer:{display:"flex",flexDirection:"row",alignItems:"center",padding:r(2),backgroundColor:b.a[300],marginBottom:r(2)}})};!function(e){e[e.ImageUploadButton=0]="ImageUploadButton",e[e.ImageSrc=1]="ImageSrc"}(C||(C={}));var S=function(e){var t,r,n=e.classes,a=e.onChange,l=O(o.useState(C.ImageUploadButton),2),i=l[0],c=l[1];return o.createElement("div",{className:n.root},(t={},v(t,C.ImageUploadButton,o.createElement(e.UploadImageField,{label:"Choose image",className:"d-flex",onChange:function(e,t){return a({imageId:e,image:t})},imageId:e.state.imageId,existingImage:e.state.image,chooseImageButtonProps:{className:"ory-prevent-blur"},uploadImageButtonProps:{className:"ory-prevent-blur"}})),v(t,C.ImageSrc,o.createElement(o.Fragment,null,o.createElement("div",{className:n.warningContainer},o.createElement(m.a,{style:{color:b.a[700]}}),o.createElement("p",null,"Using externally hosted images is unsafe. Consider uploading your content to GusteBell instead.")),!e.hideSrcField&&o.createElement(p.a,{label:"Url",value:e.state.src,onChange:function(t){return e.onChange({src:t.target.value})}}),!e.hideSrcSetField&&o.createElement(p.a,{tooltip:o.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images",target:"_blank"},"Learn more about srcset"),label:"Html srcset",value:e.state.srcSet,onChange:function(t){return e.onChange({srcSet:t.target.value})}}))),t)[i],o.createElement(h.a,{circular:!0,noShadow:!0,onClick:function(e){e.preventDefault(),c(i===C.ImageSrc?C.ImageUploadButton:C.ImageSrc)},className:n.switchImageButton},(r={},v(r,C.ImageUploadButton,o.createElement(u.a,null)),v(r,C.ImageSrc,o.createElement(s.a,null)),r)[i]))};w(S,"useState{[imageTab, setImageTab](ImageTabEnum.ImageUploadButton)}");var P,I,E=Object(l.a)(j)(S);t.a=E,(P=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(P.register(j,"styles","C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\imageOrSrc\\ImageOrSrc.tsx"),P.register(S,"ImageOrSrc","C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\imageOrSrc\\ImageOrSrc.tsx"),P.register(E,"default","C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\imageOrSrc\\ImageOrSrc.tsx")),(I=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&I(e)}).call(this,r(7)(e))},1606:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Text=t.TextRaw=void 0;var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==c(e)&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(0)),a=(n=r(679))&&n.__esModule?n:{default:n},l=r(680),i=r(1607);function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=p(t).call(this,e),r=!o||"object"!==c(o)&&"function"!=typeof o?d(n):o,g(d(r),"containerClick",(function(e){return r.props.stopClickPropagation&&e.stopPropagation()})),g(d(r),"onKeyDown",(function(e){return r.props.onKeyDown&&r.props.onKeyDown(e)})),r}var r,n,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){return o.createElement(a.default,{title:this.props.title,tooltip:this.props.tooltip},o.createElement("div",{className:"input__base text-input ".concat(this.getValidationClass()," \n                    ").concat(this.props.readOnly?"text-input--readOnly":""," ").concat(this.props.className?this.props.className:""),onClick:this.containerClick,ref:this.containerRef},o.createElement("input",s({},this.props.id&&{id:this.props.id},{ref:this.inputRef,placeholder:this.props.placeholder,disabled:this.getDisabled(),required:this.props.required,className:this.state.value?"filled":"",onChange:this.handleChange,value:this.state.value,onBlur:this.handleBlur,onFocus:this.handleFocus,readOnly:this.props.readOnly,onKeyDown:this.onKeyDown,type:this.props.type})),o.createElement("span",{className:"highlight"}),o.createElement("span",{className:"bar"}),this.renderDefaultValidation(),this.props.label&&o.createElement("label",{className:this.props.readOnly?"label--focused":""},this.renderLabel())))}}])&&f(r.prototype,n),l&&f(r,l),t}(l.BaseInput);t.TextRaw=b,g(b,"defaultProps",Object.assign({},l.BaseInput.defaultProps,{type:"text",placeholder:"",stopClickPropagation:!0,readOnly:!1}));var y=(0,i.withFormContext)(b);t.Text=y;var h=y;t.default=h},1607:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withFormContext=function(e){return o.forwardRef((function(t,r){return o.createElement(a.FormContextConsumer,null,(function(n){return o.createElement(e,i({ref:r},t,{formContext:n}))}))}))};var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(0)),a=r(1608);function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}},1608:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.FormContextConsumer=t.FormContextProvider=void 0;var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var i=a?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}r.default=e,t&&t.set(e,r);return r}(r(0)).createContext(void 0),l=a.Provider;t.FormContextProvider=l;var i=a.Consumer;t.FormContextConsumer=i},1609:function(e,t,r){"use strict";var n=r(63);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(0)),a=(0,n(r(296)).default)(o.default.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");t.default=a},1610:function(e,t,r){"use strict";var n=r(63);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(0)),a=(0,n(r(296)).default)(o.default.createElement("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"}),"Image");t.default=a}}]);