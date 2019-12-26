/*! For license information please see 14.8f1a87346c1d6f5cc2cb.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14,15,38],{1502:function(e,t,r){"use strict";r.r(t);var o=r(0),n=r(1488),a=r(232),i=r(669),c=r(1489),s=r(398);r.d(t,"darkTheme",(function(){return s.a}));var l,u=(l=function(e,t){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}l(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),d=Object(c.a)({disableGlobal:!0,productionPrefix:"ory"}),p=Object(n.a)({}),h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u(t,e),t.prototype.render=function(){return o.createElement(a.b,{injectFirst:!0,generateClassName:d},o.createElement(i.a,{theme:this.props.theme||p},this.props.children))},t}(o.Component);t.default=h},1503:function(e,t,r){"use strict";r.r(t),r.d(t,"useEditor",(function(){return p}));var o,n=r(11),a=r(0),i=r(88),c=r(95),s=r.n(c),l=r(1502),u=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),d=a.createContext(null),p=function(){return a.useContext(d)},h=function(e){function t(t){return e.call(this,t)||this}return u(t,e),t.prototype.render=function(){var e=this.props,t=e.editor,r=e.children,o=void 0===r?[]:r;return a.createElement(i.DndProvider,{backend:s.a},a.createElement(n.d,{store:t.store},a.createElement(d.Provider,{value:t},a.createElement(l.default,null,o))))},t}(a.Component);t.default=h},1506:function(e,t,r){"use strict";r.r(t);var o,n=r(1645),a=r(400),i=r.n(a),c=r(11),s=r(26),l=r.n(s),u=r(168),d=r.n(u),p=r(0),h=r(88),b=r(39),f=r(1503),m=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),g=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var o=Array(e),n=0;for(t=0;t<r;t++)for(var a=arguments[t],i=0,c=a.length;i<c;i++,n++)o[n]=a[i];return o},y={hover:d()((function(e,t){var r=t.getItem();t.isOver({shallow:!0})&&r.clearHover()}),200,{trailing:!1}),drop:function(e,t){var r=t.getItem();!t.didDrop()&&t.isOver({shallow:!0})&&e.removeCell(r.id)}},v=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return m(t,e),t.prototype.render=function(){var e=this.props,t=e.connectDropTarget,r=e.isOverCurrent;return t(p.createElement("div",{className:l()("ory-controls-trash",{"ory-controls-trash-active":this.props.isLayoutMode})},p.createElement(n.a,{color:"secondary",disabled:!r},p.createElement(i.a,null))))},t}(p.Component),w={removeCell:c.a.Cell.removeCell},O=Object(b.createStructuredSelector)(c.e.Display),C=Object(c.f)(O,w)(Object(h.DropTarget)((function(e){var t=e.editor,r=g(Object.keys(t.plugins.plugins.layout),Object.keys(t.plugins.plugins.content)).map((function(e){return t.plugins.plugins.content[e].name||t.plugins.plugins.layout[e].name}));return t.plugins.hasNativePlugin()&&r.push(t.plugins.getNativePlugin()().name),r}),y,(function(e,t){return{connectDropTarget:e.dropTarget(),isOverCurrent:t.isOver({shallow:!0})}}))(v));t.default=function(){var e=Object(f.useEditor)();return p.createElement(C,{editor:e})}},1645:function(e,t,r){"use strict";var o=r(6),n=r(2),a=r(0),i=r.n(a),c=(r(9),r(8)),s=r(1570),l=r(1770),u=r(1571),d=i.a.forwardRef((function(e,t){var r=e.children,a=e.classes,s=e.className,d=e.color,p=void 0===d?"default":d,h=e.component,b=void 0===h?"button":h,f=e.disabled,m=void 0!==f&&f,g=e.disableFocusRipple,y=void 0!==g&&g,v=e.focusVisibleClassName,w=e.size,O=void 0===w?"large":w,C=e.variant,_=void 0===C?"round":C,j=Object(o.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return i.a.createElement(l.a,Object(n.a)({className:Object(c.a)(a.root,s,"round"!==_&&a.extended,"large"!==O&&a["size".concat(Object(u.a)(O))],m&&a.disabled,{primary:a.primary,secondary:a.secondary,inherit:a.colorInherit}[p]),component:b,disabled:m,focusRipple:!y,focusVisibleClassName:Object(c.a)(a.focusVisible,v),ref:t},j),i.a.createElement("span",{className:a.label},r))}));t.a=Object(s.a)((function(e){return{root:Object(n.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&$focusVisible":{boxShadow:e.shadows[6]},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(d)}}]);