/*! For license information please see 15.8f1a87346c1d6f5cc2cb.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15,38],{1502:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(1488),c=n(232),i=n(669),u=n(1489),a=n(398);n.d(e,"darkTheme",(function(){return a.a}));var p,s=(p=function(t,e){return(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}p(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),f=Object(u.a)({disableGlobal:!0,productionPrefix:"ory"}),l=Object(o.a)({}),d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.render=function(){return r.createElement(c.b,{injectFirst:!0,generateClassName:f},r.createElement(i.a,{theme:this.props.theme||l},this.props.children))},e}(r.Component);e.default=d},1503:function(t,e,n){"use strict";n.r(e),n.d(e,"useEditor",(function(){return l}));var r,o=n(11),c=n(0),i=n(88),u=n(95),a=n.n(u),p=n(1502),s=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),f=c.createContext(null),l=function(){return c.useContext(f)},d=function(t){function e(e){return t.call(this,e)||this}return s(e,t),e.prototype.render=function(){var t=this.props,e=t.editor,n=t.children,r=void 0===n?[]:n;return c.createElement(i.DndProvider,{backend:a.a},c.createElement(o.d,{store:e.store},c.createElement(f.Provider,{value:e},c.createElement(p.default,null,r))))},e}(c.Component);e.default=d}}]);