"use strict";(self.webpackChunk_guestbell_react_page_plugins=self.webpackChunk_guestbell_react_page_plugins||[]).push([[652],{75058:(e,t,r)=>{var a=r(64836);t.Z=void 0;var n=a(r(64938)),o=r(85893);t.Z=(0,n.default)((0,o.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Create")},56693:(e,t,r)=>{var a=r(64836);t.Z=void 0;var n=a(r(64938)),o=r(85893);t.Z=(0,n.default)((0,o.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"}),"Image")},62177:(e,t,r)=>{var a=r(64836);t.Z=void 0;var n=a(r(64938)),o=r(85893);t.Z=(0,n.default)((0,o.jsx)("path",{d:"M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z"}),"Warning")},73536:(e,t,r)=>{r.d(t,{Z:()=>S});var a,n=r(67294),o=r(75058),l=r(56693),i=r(92197),u=r(62177),c=r(59587),s=r(94235),m=r(20025);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function d(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=g(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=g(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==g(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,o,l,i=[],u=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(a=o.call(r)).done)&&(i.push(a.value),i.length!==t);u=!0);}catch(e){c=!0,n=e}finally{try{if(!u&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(c)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=Array(t);r<t;r++)a[r]=e[r];return a}e=r.hmd(e),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},v=(0,s.Z)((function(e){var t=e.palette,r=e.spacing;return{root:{position:"relative",paddingRight:"1.5rem"},switchImageButton:{position:"absolute !important",right:r(-1),top:"50%",transform:"translateY(-50%)",color:t.action.active+" !important"},warningContainer:{display:"flex",flexDirection:"row",alignItems:"center",padding:r(2),backgroundColor:m.Z[300],marginBottom:r(2)}}})),h=function(e){return e[e.ImageUploadButton=0]="ImageUploadButton",e[e.ImageSrc=1]="ImageSrc",e}(h||{}),y=function(e){var t=e.onChange,r=v(),a=f(n.useState(h.ImageUploadButton),2),s=a[0],g=a[1];return n.createElement("div",{className:r.root},d(d({},h.ImageUploadButton,n.createElement(e.UploadImageField,{label:"Choose image",className:"d-flex",onChange:function(e,r){return t({imageId:e,image:r})},imageId:e.state.imageId,existingImage:e.state.image,chooseImageButtonProps:{className:"ory-prevent-blur"},uploadImageButtonProps:{className:"ory-prevent-blur"}})),h.ImageSrc,n.createElement(n.Fragment,null,n.createElement("div",{className:r.warningContainer},n.createElement(u.Z,{style:{color:m.Z[700]}}),n.createElement("p",null,"Using externally hosted images is unsafe. Consider uploading your content to GusteBell instead.")),!e.hideSrcField&&n.createElement(i.default,{label:"Url",value:e.state.src,onChange:function(t){return e.onChange({src:t.target.value})}}),!e.hideSrcSetField&&n.createElement(i.default,{tooltip:n.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images",target:"_blank",rel:"noreferrer"},"Learn more about srcset"),label:"Html srcset",value:e.state.srcSet,onChange:function(t){return e.onChange({srcSet:t.target.value})}})))[s],n.createElement(c.default,{circular:!0,noShadow:!0,onClick:function(e){e.preventDefault(),g(s===h.ImageSrc?h.ImageUploadButton:h.ImageSrc)},className:r.switchImageButton},d(d({},h.ImageUploadButton,n.createElement(o.Z,null)),h.ImageSrc,n.createElement(l.Z,null))[s]))};p(y,"useStyles{classes}\nuseState{[imageTab, setImageTab](ImageTabEnum.ImageUploadButton)}",(function(){return[v]}));var C=y;const S=C;var I,E;(I="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(I.register(v,"useStyles","C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\imageOrSrc\\ImageOrSrc.tsx"),I.register(y,"ImageOrSrc","C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\imageOrSrc\\ImageOrSrc.tsx"),I.register(C,"default","C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\common\\components\\imageOrSrc\\ImageOrSrc.tsx")),(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&E(e)},74652:(e,t,r)=>{r.r(t),r.d(t,{default:()=>S});var a,n=r(67294),o=r(73536),l=r(97920),i=r(5305),u=r(7836),c=r(47665),s=r(76446),m=r(94659),g=r(50542),d=r(89149);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function b(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=f(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=f(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==f(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}e=r.hmd(e),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},v=Object.keys(u.n).filter((function(e){return"number"==typeof u.n[e]})).map((function(e){return u.n[e]})),h=b(b(b(b({},u.n.FullWidth,"Full width"),u.n.SmallHeight,"Small height"),u.n.MediumHeight,"Medium height"),u.n.BigHeight,"Big height"),y=function(e){var t=e.onChange,r=e.readOnly,a=e.focused,f=e.data,b=f.constraintMode,p=void 0===b?u.n.FullWidth:b,y=f.href,C=void 0===y?"":y,S=f.hasMargin,I=void 0===S||S,E=n.useCallback((function(e){return t({constraintMode:Number(e.target.value)})}),[t]),H=n.useCallback((function(e){return t({href:e.target.value})}),[t]),G=n.useCallback((function(e){return t({hasMargin:e.target.checked})}),[t]);return n.createElement("div",{className:"imageControls ory-prevent-blur"},!r&&a&&n.createElement(n.Fragment,null,n.createElement(o.Z,{onChange:t,state:e.data,UploadImageField:e.UploadImageField}),n.createElement(s.Z,null,n.createElement(c.Z,null,"Size mode"),n.createElement(l.Z,{className:"mb-1",value:null==p?void 0:p.toString(),onChange:E},v.map((function(e,t){return n.createElement(i.Z,{key:t,value:e},h[e])}))),n.createElement(m.Z,{className:"mb-1",label:"Link url",onChange:H,value:C}),n.createElement(g.Z,{control:n.createElement(d.Z,{onChange:G,checked:I}),label:"Use margin"}))))};p(y,"useCallback{onConstraintModeChange}\nuseCallback{onHrefChange}\nuseCallback{handleChangeHasPadding}");var C=y;const S=C;var I,E;(I="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(I.register(v,"allModes","C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\image\\Controls\\ImageDefaultControls.tsx"),I.register(h,"modeNames","C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\image\\Controls\\ImageDefaultControls.tsx"),I.register(y,"ImageDefaultControls","C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\image\\Controls\\ImageDefaultControls.tsx"),I.register(C,"default","C:\\Coding\\GuestBell\\guestbell-react-page-plugins\\src\\lib\\image\\Controls\\ImageDefaultControls.tsx")),(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&E(e)}}]);