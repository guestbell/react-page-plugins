/*! For license information please see 15.53a09d86ec2ccf559088.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15,16,38],{1513:function(e,t,o){"use strict";o.r(t),o.d(t,"useEditor",(function(){return p}));var r,n=o(11),a=o(0),i=o(88),c=o(96),s=o.n(c),l=o(1514),u=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),d=a.createContext(null),p=function(){return a.useContext(d)},h=function(e){function t(t){return e.call(this,t)||this}return u(t,e),t.prototype.render=function(){var e=this.props,t=e.editor,o=e.children,r=void 0===o?[]:o,c=e.dndBackend,u=void 0===c?s.a:c;return a.createElement(i.DndProvider,{backend:u},a.createElement(n.c,{store:t.store},a.createElement(d.Provider,{value:t},a.createElement(l.default,null,r))))},t}(a.Component);t.default=h},1514:function(e,t,o){"use strict";o.r(t);var r=o(0),n=o(1494),a=o(1798),i=o(1504),c=o(1792),s=o(401);o.d(t,"darkTheme",(function(){return s.a}));var l,u=(l=function(e,t){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}l(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),d=Object(c.a)({disableGlobal:!0,productionPrefix:"ory"}),p=Object(n.a)({}),h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u(t,e),t.prototype.render=function(){return r.createElement(a.b,{injectFirst:!0,generateClassName:d},r.createElement(i.a,{theme:this.props.theme||p},this.props.children))},t}(r.Component);t.default=h},1517:function(e,t,o){"use strict";o.r(t);var r,n=o(1730),a=o(403),i=o.n(a),c=o(11),s=o(26),l=o.n(s),u=o(170),d=o.n(u),p=o(0),h=o(88),b=o(39),f=o(1513),m=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),g=function(){for(var e=0,t=0,o=arguments.length;t<o;t++)e+=arguments[t].length;var r=Array(e),n=0;for(t=0;t<o;t++)for(var a=arguments[t],i=0,c=a.length;i<c;i++,n++)r[n]=a[i];return r},y={hover:d()((function(e,t){var o=t.getItem();t.isOver({shallow:!0})&&o.clearHover()}),200,{trailing:!1}),drop:function(e,t){var o=t.getItem();!t.didDrop()&&t.isOver({shallow:!0})&&e.removeCell(o.id)}},v=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return m(t,e),t.prototype.render=function(){var e=this.props,t=e.connectDropTarget,o=e.isOverCurrent;return t(p.createElement("div",{className:l()("ory-controls-trash",{"ory-controls-trash-active":this.props.isLayoutMode})},p.createElement(n.a,{color:"secondary",disabled:!o},p.createElement(i.a,null))))},t}(p.Component),w={removeCell:c.a.Cell.removeCell},O=Object(b.createStructuredSelector)(c.d.Display),C=Object(c.e)(O,w)(Object(h.DropTarget)((function(e){var t=e.editor,o=g(Object.keys(t.plugins.plugins.layout),Object.keys(t.plugins.plugins.content)).map((function(e){return t.plugins.plugins.content[e]&&t.plugins.plugins.content[e].name||t.plugins.plugins.layout[e]&&t.plugins.plugins.layout[e].name}));return t.plugins.hasNativePlugin()&&o.push(t.plugins.getNativePlugin()().name),o}),y,(function(e,t){return{connectDropTarget:e.dropTarget(),isOverCurrent:t.isOver({shallow:!0})}}))(v));t.default=function(){var e=Object(f.useEditor)();return p.createElement(C,{editor:e})}},1730:function(e,t,o){"use strict";var r=o(6),n=o(2),a=o(0),i=o.n(a),c=(o(9),o(8)),s=o(1584),l=o(1800),u=o(1585),d=i.a.forwardRef((function(e,t){var o=e.children,a=e.classes,s=e.className,d=e.color,p=void 0===d?"default":d,h=e.component,b=void 0===h?"button":h,f=e.disabled,m=void 0!==f&&f,g=e.disableFocusRipple,y=void 0!==g&&g,v=e.focusVisibleClassName,w=e.size,O=void 0===w?"large":w,C=e.variant,_=void 0===C?"round":C,j=Object(r.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return i.a.createElement(l.a,Object(n.a)({className:Object(c.a)(a.root,s,"round"!==_&&a.extended,"large"!==O&&a["size".concat(Object(u.a)(O))],m&&a.disabled,{primary:a.primary,secondary:a.secondary,inherit:a.colorInherit}[p]),component:b,disabled:m,focusRipple:!y,focusVisibleClassName:Object(c.a)(a.focusVisible,v),ref:t},j),i.a.createElement("span",{className:a.label},o))}));t.a=Object(s.a)((function(e){return{root:Object(n.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&$focusVisible":{boxShadow:e.shadows[6]},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(d)}}]);