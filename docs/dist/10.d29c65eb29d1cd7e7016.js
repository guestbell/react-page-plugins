(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1105:function(e,t,i){"use strict";i.r(t);var o=i(0),n=i(1310),a=i.n(n),s=i(1325),r=i(1309),c=function(e){var t=e.description,i=e.icon,n=e.onClick,a=e.active,c=e.disabled;return o.createElement("div",{className:"ory-controls-mode-toggle-button"},o.createElement("div",{className:"ory-controls-mode-toggle-button-inner"},o.createElement(s.a,{color:a?"secondary":"default",size:r.a.mobile?"small":"large",onClick:n,disabled:c},i)),o.createElement("div",{className:"ory-controls-mode-toggle-button-description"},t))},l=i(9),d=i(29),u=Object(d.createStructuredSelector)({isEditMode:l.h.Display.isEditMode}),h={editMode:l.a.Display.editMode},f=Object(l.i)(u,h)((function(e){return o.createElement(c,{icon:o.createElement(a.a,null),description:e.label,active:e.isEditMode,onClick:e.editMode})})),m=i(1311),p=i.n(m),v=Object(d.createStructuredSelector)({isInsertMode:l.h.Display.isInsertMode}),b={insertMode:l.a.Display.insertMode},g=Object(l.i)(v,b)((function(e){return o.createElement(c,{icon:o.createElement(p.a,null),description:e.label,active:e.isInsertMode,onClick:e.insertMode})})),w=i(1312),y=i.n(w),C=Object(d.createStructuredSelector)({isLayoutMode:l.h.Display.isLayoutMode}),k={layoutMode:l.a.Display.layoutMode},x=Object(l.i)(C,k)((function(e){return o.createElement(c,{icon:o.createElement(y.a,null),description:e.label,active:e.isLayoutMode,onClick:e.layoutMode})})),M=i(1313),E=i.n(M),O=Object(d.createStructuredSelector)({isPreviewMode:l.h.Display.isPreviewMode}),N={previewMode:l.a.Display.previewMode},j=Object(l.i)(O,N)((function(e){return o.createElement(c,{icon:o.createElement(E.a,null),description:e.label,active:e.isPreviewMode,onClick:e.previewMode})})),T=i(1314),z=i.n(T),P=Object(d.createStructuredSelector)({isResizeMode:l.h.Display.isResizeMode}),S={resizeMode:l.a.Display.resizeMode},A=Object(l.i)(P,S)((function(e){return o.createElement(c,{icon:o.createElement(z.a,null),description:e.label,active:e.isResizeMode,onClick:e.resizeMode})})),L=function(){return(L=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},D={edit:"Edit things",insert:"Add things",layout:"Move things",resize:"Resize things",preview:"Preview result"};t.default=function(e){var t,i=e.stickyNess,n=e.translations,a=void 0===n?D:n;return o.createElement("div",{className:"ory-controls-mode-toggle-control-group",style:L({position:"fixed",zIndex:10001,bottom:0,right:0,display:"flex",maxHeight:"100%"},(t=i,t&&(t.shouldStickToBottom||t.shouldStickToTop)?{position:"absolute",bottom:t.shouldStickToBottom?0:"auto",top:t.shouldStickToTop?0:"auto",right:-t.rightOffset||0}:{position:"fixed"}))},o.createElement("div",{ref:i.stickyElRef,style:{padding:16,position:"relative",flexFlow:"column wrap",direction:"rtl",display:"flex"}},o.createElement("div",{className:"ory-controls-mode-toggle-control"},o.createElement(f,{label:a.edit}),o.createElement("div",{className:"ory-controls-mode-toggle-clearfix"})),o.createElement("div",{className:"ory-controls-mode-toggle-control"},o.createElement(g,{label:a.insert}),o.createElement("div",{className:"ory-controls-mode-toggle-clearfix"})),o.createElement("div",{className:"ory-controls-mode-toggle-control"},o.createElement(x,{label:a.layout}),o.createElement("div",{className:"ory-controls-mode-toggle-clearfix"})),o.createElement("div",{className:"ory-controls-mode-toggle-control"},o.createElement(A,{label:a.resize}),o.createElement("div",{className:"ory-controls-mode-toggle-clearfix"})),o.createElement("div",{className:"ory-controls-mode-toggle-control"},o.createElement(j,{label:a.preview}),o.createElement("div",{className:"ory-controls-mode-toggle-clearfix"}))))}},1309:function(e,t,i){"use strict";(function(e){i.d(t,"a",(function(){return Q}));var o="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};function n(e,t){return e(t={exports:{}},t.exports),t.exports}var a=n((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+e.className+" ").indexOf(" "+t+" ")},e.exports=t.default})),s=n((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){e.classList?e.classList.add(t):(0,o.default)(e)||(e.className=e.className+" "+t)};var i,o=(i=a)&&i.__esModule?i:{default:i};e.exports=t.default})),r=function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")},c=n((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.hasClass=t.removeClass=t.addClass=void 0;var i=c(s),o=c(r),n=c(a);function c(e){return e&&e.__esModule?e:{default:e}}t.addClass=i.default,t.removeClass=o.default,t.hasClass=n.default,t.default={addClass:i.default,removeClass:o.default,hasClass:n.default}})),l=c.removeClass,d=c.addClass;var u=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},h="object"==typeof o&&o&&o.Object===Object&&o,f="object"==typeof self&&self&&self.Object===Object&&self,m=h||f||Function("return this")(),p=function(){return m.Date.now()},v=m.Symbol,b=Object.prototype,g=b.hasOwnProperty,w=b.toString,y=v?v.toStringTag:void 0;var C=function(e){var t=g.call(e,y),i=e[y];try{e[y]=void 0;var o=!0}catch(e){}var n=w.call(e);return o&&(t?e[y]=i:delete e[y]),n},k=Object.prototype.toString;var x=function(e){return k.call(e)},M=v?v.toStringTag:void 0;var E=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":M&&M in Object(e)?C(e):x(e)};var O=function(e){return null!=e&&"object"==typeof e};var N=function(e){return"symbol"==typeof e||O(e)&&"[object Symbol]"==E(e)},j=/^\s+|\s+$/g,T=/^[-+]0x[0-9a-f]+$/i,z=/^0b[01]+$/i,P=/^0o[0-7]+$/i,S=parseInt;var A=function(e){if("number"==typeof e)return e;if(N(e))return NaN;if(u(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=u(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(j,"");var i=z.test(e);return i||P.test(e)?S(e.slice(2),i?2:8):T.test(e)?NaN:+e},L=Math.max,D=Math.min;var _=function(e,t,i){var o,n,a,s,r,c,l=0,d=!1,h=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var i=o,a=n;return o=n=void 0,l=t,s=e.apply(a,i)}function v(e){return l=e,r=setTimeout(g,t),d?m(e):s}function b(e){var i=e-c;return void 0===c||i>=t||i<0||h&&e-l>=a}function g(){var e=p();if(b(e))return w(e);r=setTimeout(g,function(e){var i=t-(e-c);return h?D(i,a-(e-l)):i}(e))}function w(e){return r=void 0,f&&o?m(e):(o=n=void 0,s)}function y(){var e=p(),i=b(e);if(o=arguments,n=this,c=e,i){if(void 0===r)return v(c);if(h)return r=setTimeout(g,t),m(c)}return void 0===r&&(r=setTimeout(g,t)),s}return t=A(t)||0,u(i)&&(d=!!i.leading,a=(h="maxWait"in i)?L(A(i.maxWait)||0,t):a,f="trailing"in i?!!i.trailing:f),y.cancel=function(){void 0!==r&&clearTimeout(r),l=0,o=c=n=r=void 0},y.flush=function(){return void 0===r?s:w(p())},y};var R=function(e,t,i){var o=!0,n=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return u(i)&&(o="leading"in i?!!i.leading:o,n="trailing"in i?!!i.trailing:n),_(e,t,{leading:o,maxWait:t,trailing:n})},V=null,H=[],W=function(){V&&(clearTimeout(V),V=null)},$=function(e){if(e&&H.push(e),"undefined"==typeof document)W(),setTimeout((function(){$()}),100);else{W();for(var t=0,i=H.length;t<i;t++)H[t](document);H.length=0}},B=function(e){return RegExp("msie"+(isNaN(e)?"":"\\s"+e),"i").test(navigator.userAgent)},I=null,F=function(e){var t=this;void 0===e&&(e=null),this.state={addedClasses:!1},this.matchCache={},this.featureCache={},this.classes="",this.setUserAgent(e),this.callback=null,"undefined"!=typeof document||this.userAgent||$((function(){t.setUserAgent()}))},U={features:{},deviceorientation:{},ie9:{},touchDevice:{},touch:{},ios:{},iphone:{},ipod:{},ipad:{},android:{},androidPhone:{},androidTablet:{},blackberry:{},blackberryPhone:{},blackberryTablet:{},windows:{},ie10:{},windowsPhone:{},windowsTablet:{},fxos:{},fxosPhone:{},fxosTablet:{},meego:{},cordova:{},nodeWebkit:{},mobile:{},tablet:{},desktop:{},television:{},portrait:{},landscape:{}},J={device:{}};J.device.get=function(){return I||(I=new F),I},F.prototype.match=function(e){return this.matchCache[e]||(this.matchCache[e]=this.userAgent.indexOf(e)>-1),this.matchCache[e]},F.prototype.feature=function(e){return this.featureCache[e]},F.prototype.addFeature=function(e,t){return this.featureCache[e]||(this.featureCache[e]=t),t},F.prototype.setUserAgent=function(e){void 0===e&&(e=null),this.userAgent=e||this.userAgent||("undefined"!=typeof document?window.navigator.userAgent:""),this.userAgent&&(W(),this.matchCache={},this.userAgent=this.userAgent.toLowerCase())},F.prototype.onOrientationChange=function(e){},F.prototype.getClasses=function(){return this.classes||(this.userAgent||this.setUserAgent(),this.landscape?this.classes+="landscape ":this.classes+="portrait ",this.touch&&(this.classes+="touch "),this.ios?this.ipad?this.classes+="ios ipad tablet ":this.iphone?this.classes+="ios iphone mobile ":this.ipod&&(this.classes+="ios ipod mobile "):this.android?this.androidTablet?this.classes+="android tablet ":this.classes+="android mobile ":this.blackberry?this.blackberryTablet?this.classes+="blackberry tablet ":this.classes+="blackberry mobile ":this.windows?this.windowsTablet?this.classes+="windows tablet ":this.windowsPhone?this.classes+="windows mobile ":this.classes+="windows desktop ":this.fxos?this.fxosTablet?this.classes+="fxos tablet ":this.classes+="fxos mobile ":this.meego?this.classes+="meego mobile ":this.nodeWebkit?this.classes+="node-webkit ":this.television?this.classes+="television ":this.desktop&&(this.classes+="desktop "),this.cordova&&(this.classes+="cordova "),!this.desktop&&this.deviceorientation&&(this.classes+="deviceorientation "),this.classes=this.classes.slice(0,-1)),this.classes},F.prototype.addClasses=function(e){if(!this.targetNode){if(this.targetNode=e,e||"undefined"==typeof document||(this.targetNode=document.documentElement),!this.targetNode)return;this.userAgent||this.setUserAgent(),this.commitClasses(),this.addListener()}},F.prototype.addListener=function(){var e=this;if(!this.hasListener){this.hasListener=!0,this.handleOrientation=this.handleOrientation.bind(this),this.onResize=R(this.handleOrientation,200);var t=function(){setTimeout((function(){e.handleOrientation()}),10)};"onorientationchange"in window?window.addEventListener("orientationchange",t,!1):window.addEventListener("resize",this.onResize,!1),t()}},F.prototype.handleOrientation=function(){this.onOrientationChange(this.landscape),this.targetNode&&(this.landscape?(l(this.targetNode,"portrait"),d(this.targetNode,"landscape")):(l(this.targetNode,"landscape"),d(this.targetNode,"portrait")))},F.prototype.commitClasses=function(){!this.state.addedClasses&&this.targetNode&&(this.state.addedClasses=!0,this.targetNode.className+=this.getClasses())},U.features.get=function(){return{wheelEvent:this.feature("wheelEvent")||this.addFeature("wheelEvent","onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll")}},U.deviceorientation.get=function(){return this.canOrientate||(this.canOrientate="ondeviceorientation"in window||"deviceorientation"in window),!this.desktop&&this.canOrientate},U.ie9.get=function(){return this.matchCache.ie9||"undefined"!=typeof document&&(this.matchCache.ie9=this.windows&&B(10)),this.matchCache.ie9||!1},U.touchDevice.get=function(){return this.matchCache.touchDevice||"undefined"!=typeof document&&(this.matchCache.touchDevice=!(!navigator||!navigator.userAgent)&&navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/)),this.matchCache.touchDevice||!1},U.touch.get=function(){return this.matchCache.touch||"undefined"!=typeof document&&(this.matchCache.touch="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator&&navigator.msMaxTouchPoints>0||navigator&&navigator.maxTouchPoints),this.matchCache.touch||!1},U.ios.get=function(){return this.iphone||this.ipod||this.ipad},U.iphone.get=function(){return!this.windows&&this.match("iphone")},U.ipod.get=function(){return this.match("ipod")},U.ipad.get=function(){return this.match("ipad")},U.android.get=function(){return!this.windows&&this.match("android")},U.androidPhone.get=function(){return this.android&&this.match("mobile")},U.androidTablet.get=function(){return this.android&&!this.match("mobile")},U.blackberry.get=function(){return this.match("blackberry")||this.match("bb10")||this.match("rim")},U.blackberryPhone.get=function(){return this.blackberry&&!this.match("tablet")},U.blackberryTablet.get=function(){return this.blackberry&&this.match("tablet")},U.windows.get=function(){return this.match("windows")},U.ie10.get=function(){return this.matchCache.ie10||"undefined"!=typeof document&&(this.matchCache.ie10=this.windows&&B(10)),this.matchCache.ie10||!1},U.windowsPhone.get=function(){return this.windows&&this.match("phone")},U.windowsTablet.get=function(){return this.windows&&this.match("touch")&&!this.windowsPhone},U.fxos.get=function(){return(this.match("(mobile;")||this.match("(tablet;"))&&this.match("; rv:")},U.fxosPhone.get=function(){return this.fxos&&this.match("mobile")},U.fxosTablet.get=function(){return this.fxos&&this.match("tablet")},U.meego.get=function(){return this.match("meego")},U.cordova.get=function(){return window.cordova&&"file:"===location.protocol},U.nodeWebkit.get=function(){return"object"==typeof window.process},U.mobile.get=function(){return this.androidPhone||this.iphone||this.ipod||this.windowsPhone||this.blackberryPhone||this.fxosPhone||this.meego},U.tablet.get=function(){return this.ipad||this.androidTablet||this.blackberryTablet||this.windowsTablet||this.fxosTablet},U.desktop.get=function(){return!this.tablet&&!this.mobile},U.television.get=function(){var e,t=["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","roku","pov_tv","hbbtv","ce-html"];for(e=0;e++<t.length;)if(this.match(t[e]))return!0;return!1},U.portrait.get=function(){return"orientation"in window?0===window.orientation:"undefined"!=typeof window&&window.innerHeight/window.innerWidth>1},U.landscape.get=function(){return"undefined"!=typeof window&&("orientation"in window?0!==window.orientation:window.innerHeight/window.innerWidth<1)},Object.defineProperties(F.prototype,U),Object.defineProperties(F,J);var Q=new F}).call(this,i(77))},1310:function(e,t,i){"use strict";var o=i(41);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(i(0)),a=(0,o(i(1173)).default)(n.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Create");t.default=a},1311:function(e,t,i){"use strict";var o=i(41);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(i(0)),a=(0,o(i(1173)).default)(n.default.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=a},1312:function(e,t,i){"use strict";var o=i(41);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(i(0)),a=(0,o(i(1173)).default)(n.default.createElement("path",{d:"M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"}),"ViewQuilt");t.default=a},1313:function(e,t,i){"use strict";var o=i(41);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(i(0)),a=(0,o(i(1173)).default)(n.default.createElement("path",{d:"M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"}),"Devices");t.default=a},1314:function(e,t,i){"use strict";var o=i(41);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(i(0)),a=(0,o(i(1173)).default)(n.default.createElement("path",{d:"M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"}),"SettingsOverscan");t.default=a},1325:function(e,t,i){"use strict";var o=i(4),n=i(1),a=i(0),s=i.n(a),r=(i(7),i(1170)),c=i(1171),l=i(1407),d=i(1172),u=s.a.forwardRef((function(e,t){var i=e.children,a=e.classes,c=e.className,u=e.color,h=void 0===u?"default":u,f=e.component,m=void 0===f?"button":f,p=e.disabled,v=void 0!==p&&p,b=e.disableFocusRipple,g=void 0!==b&&b,w=e.focusVisibleClassName,y=e.size,C=void 0===y?"large":y,k=e.variant,x=void 0===k?"round":k,M=Object(o.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return s.a.createElement(l.a,Object(n.a)({className:Object(r.a)(a.root,c,"round"!==x&&a.extended,"large"!==C&&a["size".concat(Object(d.a)(C))],v&&a.disabled,{primary:a.primary,secondary:a.secondary,inherit:a.colorInherit}[h]),component:m,disabled:v,focusRipple:!g,focusVisibleClassName:Object(r.a)(a.focusVisible,w),ref:t},M),s.a.createElement("span",{className:a.label},i))}));t.a=Object(c.a)((function(e){return{root:Object(n.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&$focusVisible":{boxShadow:e.shadows[6]},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(u)}}]);