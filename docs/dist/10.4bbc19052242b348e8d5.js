(window.webpackJsonp=window.webpackJsonp||[]).push([[10,37],{1099:function(e,t,a){"use strict";a.r(t),a.d(t,"darkTheme",(function(){return s.a}));var n,r=a(0),o=a(1080),i=a(187),l=a(1085),c=a(1082),s=a(334),d=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),u=Object(c.a)({disableGlobal:!0,productionPrefix:"ory"}),p=Object(o.a)({}),m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),t.prototype.render=function(){return r.createElement(i.b,{injectFirst:!0,generateClassName:u},r.createElement(l.a,{theme:this.props.theme||p},this.props.children))},t}(r.Component);t.default=m},1139:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(4),o=a(0),i=a.n(o),l=(a(7),a(1167)),c=a(1168),s=a(180),d=i.a.forwardRef((function(e,t){var a=e.absolute,o=void 0!==a&&a,c=e.classes,s=e.className,d=e.component,u=void 0===d?"hr":d,p=e.light,m=void 0!==p&&p,f=e.orientation,b=void 0===f?"horizontal":f,h=e.role,g=void 0===h?"hr"!==u?"separator":void 0:h,v=e.variant,y=void 0===v?"fullWidth":v,x=Object(r.a)(e,["absolute","classes","className","component","light","orientation","role","variant"]);return i.a.createElement(u,Object(n.a)({className:Object(l.a)(c.root,s,"fullWidth"!==y&&c[y],o&&c.absolute,m&&c.light,{vertical:c.vertical}[b]),role:g,ref:t},x))})),u=Object(c.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(s.b)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1}}}),{name:"MuiDivider"})(d),p=[0,1,2,3,4,5,6,7,8,9,10],m=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var b=i.a.forwardRef((function(e,t){var a=e.alignContent,o=void 0===a?"stretch":a,c=e.alignItems,s=void 0===c?"stretch":c,d=e.classes,u=e.className,p=e.component,m=void 0===p?"div":p,f=e.container,b=void 0!==f&&f,h=e.direction,g=void 0===h?"row":h,v=e.item,y=void 0!==v&&v,x=e.justify,O=void 0===x?"flex-start":x,j=e.lg,w=void 0!==j&&j,E=e.md,k=void 0!==E&&E,C=e.sm,S=void 0!==C&&C,T=e.spacing,R=void 0===T?0:T,z=e.wrap,M=void 0===z?"wrap":z,P=e.xl,N=void 0!==P&&P,$=e.xs,I=void 0!==$&&$,F=e.zeroMinWidth,L=void 0!==F&&F,B=Object(r.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),W=Object(l.a)(d.root,u,b&&[d.container,0!==R&&d["spacing-xs-".concat(String(R))]],y&&d.item,L&&d.zeroMinWidth,"row"!==g&&d["direction-xs-".concat(String(g))],"wrap"!==M&&d["wrap-xs-".concat(String(M))],"stretch"!==s&&d["align-items-xs-".concat(String(s))],"stretch"!==o&&d["align-content-xs-".concat(String(o))],"flex-start"!==O&&d["justify-xs-".concat(String(O))],!1!==I&&d["grid-xs-".concat(String(I))],!1!==S&&d["grid-sm-".concat(String(S))],!1!==k&&d["grid-md-".concat(String(k))],!1!==w&&d["grid-lg-".concat(String(w))],!1!==N&&d["grid-xl-".concat(String(N))]);return i.a.createElement(m,Object(n.a)({className:W,ref:t},B))})),h=Object(c.a)((function(e){return Object(n.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return p.forEach((function(n){var r=e.spacing(n);0!==r&&(a["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(f(r,2)),width:"calc(100% + ".concat(f(r),")"),"& > $item":{padding:f(r,2)}})})),a}(e,"xs"),{},e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var r={};m.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var n="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:n,flexGrow:0,maxWidth:n}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object(n.a)(e,r):e[t.breakpoints.up(a)]=r}(t,e,a),t}),{}))}),{name:"MuiGrid"})(b),g=a(1379),v=a(1380),y=a(27),x=a(14),O=a.n(x),j=a(1170),w=a(1383),E=a(257),k=a(327),C=a(1382),S=a(1203),T=a(1191),R=a(1171);function z(e){return"function"==typeof e?e():e}var M="undefined"!=typeof window?i.a.useLayoutEffect:i.a.useEffect,P={},N=i.a.forwardRef((function(e,t){var a=e.anchorEl,o=e.children,l=e.container,c=e.disablePortal,s=void 0!==c&&c,d=e.keepMounted,u=void 0!==d&&d,p=e.modifiers,m=e.open,f=e.placement,b=void 0===f?"bottom":f,h=e.popperOptions,g=void 0===h?P:h,v=e.popperRef,y=e.transition,x=void 0!==y&&y,O=Object(r.a)(e,["anchorEl","children","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition"]),j=i.a.useRef(null),w=Object(R.a)(j,t),N=i.a.useRef(null),$=Object(R.a)(N,v),I=i.a.useRef($);M((function(){I.current=$}),[$]),i.a.useImperativeHandle(v,(function(){return N.current}),[]);var F=i.a.useState(!0),L=F[0],B=F[1],W=function(e,t){if("ltr"===(t&&t.direction||"ltr"))return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(b,Object(k.a)()),D=i.a.useState(W),_=D[0],V=D[1],H=i.a.useCallback((function(){if(j.current&&a&&m){N.current&&(N.current.destroy(),I.current(null));var e=function(e){V(e.placement)},t=(z(a),new E.a(z(a),j.current,Object(n.a)({placement:W},g,{modifiers:Object(n.a)({},s?{}:{preventOverflow:{boundariesElement:"window"}},{},p,{},g.modifiers),onCreate:Object(S.a)(e,g.onCreate),onUpdate:Object(S.a)(e,g.onUpdate)})));I.current(t)}}),[a,s,p,m,W,g]),A=i.a.useCallback((function(e){Object(T.a)(w,e),H()}),[w,H]),G=function(){N.current&&(N.current.destroy(),I.current(null))};if(i.a.useEffect((function(){H()}),[H]),i.a.useEffect((function(){return function(){G()}}),[]),i.a.useEffect((function(){m||x||G()}),[m,x]),!u&&!m&&(!x||L))return null;var q={placement:_};return x&&(q.TransitionProps={in:m,onEnter:function(){B(!1)},onExited:function(){B(!0),G()}}),i.a.createElement(C.a,{disablePortal:s,container:l},i.a.createElement("div",Object(n.a)({ref:A,role:"tooltip"},O,{style:Object(n.a)({position:"fixed",top:0,left:0},O.style)}),"function"==typeof o?o(q):o))})),$=a(1249),I=a(1182);function F(e){return Math.round(1e5*e)/1e5}var L=!1,B=null;var W=i.a.forwardRef((function(e,t){var a=e.arrow,o=void 0!==a&&a,c=e.children,s=e.classes,d=e.disableFocusListener,u=void 0!==d&&d,p=e.disableHoverListener,m=void 0!==p&&p,f=e.disableTouchListener,b=void 0!==f&&f,h=e.enterDelay,g=void 0===h?0:h,v=e.enterTouchDelay,y=void 0===v?700:v,x=e.id,E=e.interactive,k=void 0!==E&&E,C=e.leaveDelay,S=void 0===C?0:C,z=e.leaveTouchDelay,M=void 0===z?1500:z,P=e.onClose,F=e.onOpen,W=e.open,D=e.placement,_=void 0===D?"bottom":D,V=e.PopperProps,H=e.title,A=e.TransitionComponent,G=void 0===A?w.a:A,q=e.TransitionProps,J=Object(r.a)(e,["arrow","children","classes","disableFocusListener","disableHoverListener","disableTouchListener","enterDelay","enterTouchDelay","id","interactive","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperProps","title","TransitionComponent","TransitionProps"]),U=Object(I.a)(),X=i.a.useState(),K=X[0],Q=X[1],Y=i.a.useState(null),Z=Y[0],ee=Y[1],te=i.a.useRef(!1),ae=i.a.useRef(),ne=i.a.useRef(),re=i.a.useRef(),oe=i.a.useRef(),ie=i.a.useRef(null!=W).current,le=i.a.useState(!1),ce=le[0],se=le[1],de=ie?W:ce;var ue=i.a.useState(),pe=ue[0],me=ue[1],fe=x||pe;i.a.useEffect((function(){de&&!pe&&me("mui-tooltip-".concat(Math.round(1e5*Math.random())))}),[de,pe]),i.a.useEffect((function(){return function(){clearTimeout(ae.current),clearTimeout(ne.current),clearTimeout(re.current),clearTimeout(oe.current)}}),[]);var be=function(e){clearTimeout(B),L=!0,ie||se(!0),F&&F(e)},he=function(e){var t=c.props;"mouseover"===e.type&&t.onMouseOver&&t.onMouseOver(e),te.current&&"touchstart"!==e.type||(K&&K.removeAttribute("title"),clearTimeout(ne.current),clearTimeout(re.current),g&&!L?(e.persist(),ne.current=setTimeout((function(){be(e)}),g)):be(e))},ge=Object($.a)(),ve=ge.isFocusVisible,ye=ge.onBlurVisible,xe=ge.ref,Oe=i.a.useState(!1),je=Oe[0],we=Oe[1],Ee=function(e){clearTimeout(B),B=setTimeout((function(){L=!1}),500),ie||se(!1),P&&P(e),clearTimeout(ae.current),ae.current=setTimeout((function(){te.current=!1}),U.transitions.duration.shortest)},ke=function(e){var t=c.props;"blur"===e.type&&(t.onBlur&&t.onBlur(e),je&&(we(!1),ye())),"mouseleave"===e.type&&t.onMouseLeave&&t.onMouseLeave(e),clearTimeout(ne.current),clearTimeout(re.current),e.persist(),re.current=setTimeout((function(){Ee(e)}),S)},Ce=Object(R.a)(Q,t),Se=Object(R.a)(xe,Ce),Te=i.a.useCallback((function(e){Object(T.a)(Se,O.a.findDOMNode(e))}),[Se]),Re=Object(R.a)(c.ref,Te);""===H&&(de=!1);var ze=!de&&!m,Me=Object(n.a)({"aria-describedby":de?fe:null,title:ze&&"string"==typeof H?H:null},J,{},c.props,{className:Object(l.a)(J.className,c.props.className)});b||(Me.onTouchStart=function(e){te.current=!0;var t=c.props;t.onTouchStart&&t.onTouchStart(e),clearTimeout(re.current),clearTimeout(ae.current),clearTimeout(oe.current),e.persist(),oe.current=setTimeout((function(){he(e)}),y)},Me.onTouchEnd=function(e){c.props.onTouchEnd&&c.props.onTouchEnd(e),clearTimeout(oe.current),clearTimeout(re.current),e.persist(),re.current=setTimeout((function(){Ee(e)}),M)}),m||(Me.onMouseOver=he,Me.onMouseLeave=ke),u||(Me.onFocus=function(e){K||Q(e.currentTarget),ve(e)&&(we(!0),he(e));var t=c.props;t.onFocus&&t.onFocus(e)},Me.onBlur=ke);var Pe=k?{onMouseOver:Me.onMouseOver,onMouseLeave:Me.onMouseLeave,onFocus:Me.onFocus,onBlur:Me.onBlur}:{};return i.a.createElement(i.a.Fragment,null,i.a.cloneElement(c,Object(n.a)({ref:Re},Me)),i.a.createElement(N,Object(n.a)({className:Object(l.a)(s.popper,k&&s.popperInteractive,o&&s.popperArrow),placement:_,anchorEl:K,open:!!K&&de,id:Me["aria-describedby"],transition:!0,popperOptions:{modifiers:{arrow:{enabled:Boolean(Z),element:Z}}}},Pe,V),(function(e){var t=e.placement,a=e.TransitionProps;return i.a.createElement(G,Object(n.a)({timeout:U.transitions.duration.shorter},a,q),i.a.createElement("div",{className:Object(l.a)(s.tooltip,s["tooltipPlacement".concat(Object(j.a)(t.split("-")[0]))],te.current&&s.touch,o&&s.tooltipArrow)},H,o?i.a.createElement("span",{className:s.arrow,ref:ee}):null))})))})),D=Object(c.a)((function(e){return{popper:{zIndex:e.zIndex.tooltip,pointerEvents:"none",flip:!1},popperInteractive:{pointerEvents:"auto"},popperArrow:{'&[x-placement*="bottom"] $arrow':{top:0,left:0,marginTop:"-0.95em",width:"2em",height:"1em","&::before":{borderWidth:"0 1em 1em 1em",borderColor:"transparent transparent currentcolor transparent"}},'&[x-placement*="top"] $arrow':{bottom:0,left:0,marginBottom:"-0.95em",width:"2em",height:"1em","&::before":{borderWidth:"1em 1em 0 1em",borderColor:"currentcolor transparent transparent transparent"}},'&[x-placement*="right"] $arrow':{left:0,marginLeft:"-0.95em",height:"2em",width:"1em","&::before":{borderWidth:"1em 1em 1em 0",borderColor:"transparent currentcolor transparent transparent"}},'&[x-placement*="left"] $arrow':{right:0,marginRight:"-0.95em",height:"2em",width:"1em","&::before":{borderWidth:"1em 0 1em 1em",borderColor:"transparent transparent transparent currentcolor"}}},tooltip:{backgroundColor:Object(s.b)(e.palette.grey[700],.9),borderRadius:e.shape.borderRadius,color:e.palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(10),lineHeight:"".concat(F(1.4),"em"),maxWidth:300,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},tooltipArrow:{position:"relative",margin:"0"},arrow:{position:"absolute",fontSize:6,color:Object(s.b)(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:0,height:0,borderStyle:"solid"}},touch:{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:"".concat(F(16/14),"em"),fontWeight:e.typography.fontWeightRegular},tooltipPlacementLeft:Object(y.a)({transformOrigin:"right center",margin:"0 24px "},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementRight:Object(y.a)({transformOrigin:"left center",margin:"0 24px"},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementTop:Object(y.a)({transformOrigin:"center bottom",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"}),tooltipPlacementBottom:Object(y.a)({transformOrigin:"center top",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"})}}),{name:"MuiTooltip"})(W),_=a(1385),V=i.a.forwardRef((function(e,t){var a=e.edge,o=void 0!==a&&a,c=e.children,s=e.classes,d=e.className,u=e.color,p=void 0===u?"default":u,m=e.disabled,f=void 0!==m&&m,b=e.disableFocusRipple,h=void 0!==b&&b,g=e.size,v=void 0===g?"medium":g,y=Object(r.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return i.a.createElement(_.a,Object(n.a)({className:Object(l.a)(s.root,d,"default"!==p&&s["color".concat(Object(j.a)(p))],f&&s.disabled,{small:s["size".concat(Object(j.a)(v))]}[v],{start:s.edgeStart,end:s.edgeEnd}[o]),centerRipple:!0,focusRipple:!h,disabled:f,ref:t},y),i.a.createElement("span",{className:s.label},c))})),H=Object(c.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(s.b)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(V),A=a(1386),G=a(1192),q=a.n(G),J=a(1346),U=a.n(J),X=a(1190),K=i.a.forwardRef((function(e,t){e.checked;var a=e.classes,o=e.className,c=e.control,s=e.disabled,d=(e.inputRef,e.label),u=e.labelPlacement,p=void 0===u?"end":u,m=(e.name,e.onChange,e.value,Object(r.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),f=Object(X.a)(),b=s;void 0===b&&void 0!==c.props.disabled&&(b=c.props.disabled),void 0===b&&f&&(b=f.disabled);var h={disabled:b};return["checked","name","onChange","value","inputRef"].forEach((function(t){void 0===c.props[t]&&void 0!==e[t]&&(h[t]=e[t])})),i.a.createElement("label",Object(n.a)({className:Object(l.a)(a.root,o,"end"!==p&&a["labelPlacement".concat(Object(j.a)(p))],b&&a.disabled),ref:t},m),i.a.cloneElement(c,h),i.a.createElement(v.a,{component:"span",className:Object(l.a)(a.label,b&&a.disabled)},d))})),Q=Object(c.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(K),Y=i.a.forwardRef((function(e,t){var a=e.autoFocus,o=e.checked,c=e.checkedIcon,s=e.classes,d=e.className,u=e.defaultChecked,p=e.disabled,m=e.icon,f=e.id,b=e.inputProps,h=e.inputRef,g=e.name,v=e.onBlur,y=e.onChange,x=e.onFocus,O=e.readOnly,j=e.required,w=e.tabIndex,E=e.type,k=e.value,C=Object(r.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),S=i.a.useRef(null!=o).current,T=i.a.useState(Boolean(u)),R=T[0],z=T[1],M=S?o:R,P=Object(X.a)(),N=p;P&&void 0===N&&(N=P.disabled);var $="checkbox"===E||"radio"===E;return i.a.createElement(H,Object(n.a)({component:"span",className:Object(l.a)(s.root,d,M&&s.checked,N&&s.disabled),disabled:N,tabIndex:null,role:void 0,onFocus:function(e){x&&x(e),P&&P.onFocus&&P.onFocus(e)},onBlur:function(e){v&&v(e),P&&P.onBlur&&P.onBlur(e)},ref:t},C),i.a.createElement("input",Object(n.a)({autoFocus:a,checked:o,defaultChecked:u,className:s.input,disabled:N,id:$&&f,name:g,onChange:function(e){var t=e.target.checked;S||z(t),y&&y(e,t)},readOnly:O,ref:h,required:j,tabIndex:w,type:E,value:k},b)),M?c:m)})),Z=Object(c.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(Y),ee=i.a.forwardRef((function(e,t){var a=e.classes,o=e.className,c=e.color,s=void 0===c?"secondary":c,d=e.disabled,u=void 0!==d&&d,p=e.edge,m=void 0!==p&&p,f=e.size,b=void 0===f?"medium":f,h=Object(r.a)(e,["classes","className","color","disabled","edge","size"]),g=i.a.createElement("span",{className:a.thumb});return i.a.createElement("span",{className:Object(l.a)(a.root,o,{start:a.edgeStart,end:a.edgeEnd}[m],{small:a["size".concat(Object(j.a)(b))]}[b])},i.a.createElement(Z,Object(n.a)({type:"checkbox",icon:g,checkedIcon:g,classes:{root:Object(l.a)(a.switchBase,a["color".concat(Object(j.a)(s))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t,disabled:u},h)),i.a.createElement("span",{className:a.track}))})),te=Object(c.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle"},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(ee),ae=a(1343),ne=a.n(ae),re=a(1342),oe=a.n(re),ie=a(9),le=a(25),ce=Object(le.createStructuredSelector)({node:ie.h.Editable.node}),se={setDraft:ie.a.Cell.updateCellIsDraft},de=Object(ie.i)(ce,se)((function(e){var t=e.id,a=e.node,n=e.setDraft;return a?i.a.createElement(D,{title:a.isDraft?"Content is draft":"Content is visible"},i.a.createElement(Q,{style:{marginRight:5},labelPlacement:"start",control:i.a.createElement(te,{color:"primary",checked:!a.isDraft,onChange:function(e){return n(t,!e.target.checked)}}),label:a.isDraft?i.a.createElement(oe.a,{style:{marginTop:5}}):i.a.createElement(ne.a,{style:{marginTop:5}})})):null})),ue=a(1344),pe=a.n(ue),me=Object(le.createStructuredSelector)({node:ie.h.Editable.node}),fe={duplicateCell:ie.a.Cell.duplicateCell},be=Object(ie.i)(me,fe)((function(e){e.id;var t=e.node,a=e.duplicateCell;return t?i.a.createElement(D,{title:"Duplicate Plugin"},i.a.createElement(H,{onClick:function(){return a(t,t)},"aria-label":"delete",color:"default"},i.a.createElement(pe.a,null))):null})),he=a(1099),ge=a(1345),ve=a.n(ge),ye=a(143),xe=a(170),Oe=a(419),je=function(){return(je=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},we=function(e,t){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var n,r,o=a.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(e){r={error:e}}finally{try{n&&!n.done&&(a=o.return)&&a.call(o)}finally{if(r)throw r.error}}return i},Ee=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(we(arguments[t]));return e},ke=function(e,t){var a=e.id,n=e.rows,r=void 0===n?[]:n,o=e.cells,i=void 0===o?[]:o;if(a===t.id)return e;var l=void 0;return Ee(r,i).find((function(e){var a=ke(e,t);return a&&(l=a),Boolean(a)})),l?je(je({},l),{ancestors:Ee(l.ancestors||[],[e])}):l},Ce=Object(le.createStructuredSelector)({parentId:function(e,t){var a,n,r=Object(Oe.editable)(e,{id:t.editable});if(!r)throw new Error("Could not find editable: "+t.editable);return null===(n=((null===(a=ke(r,t))||void 0===a?void 0:a.ancestors)||[]).find((function(e){return e.content||e.layout})))||void 0===n?void 0:n.id}}),Se=Object(ie.i)(Ce,(function(e,t){return Object(ye.a)({focusCell:function(e){return Object(xe.focusCell)(e,!0)()}},e)}))((function(e){var t=e.parentId,a=e.focusCell,n=o.useCallback((function(){return a(t)}),[t]);return t?o.createElement(H,{className:"bottomToolbar__selectParentButton",onClick:n,color:"default",title:"Select parent"},o.createElement(ve.a,null)):null})),Te=function(e,t){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var n,r,o=a.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(e){r={error:e}}finally{try{n&&!n.done&&(a=o.return)&&a.call(o)}finally{if(r)throw r.error}}return i},Re=[1,.8,.6,1.2],ze=Re[0];t.default=o.memo((function(e){var t=e.open,a=void 0!==t&&t,n=e.children,r=e.className,i=e.dark,l=void 0!==i&&i,c=e.theme,s=e.anchor,d=void 0===s?"bottom":s,p=e.onDelete,m=void 0===p?null:p,f=e.title,b=e.icon,y=void 0===b?null:b,x=e.id,O=e.editable,j=Te(o.useState(ze),2),w=j[0],E=j[1];return o.createElement(he.default,{theme:c||(l?he.darkTheme:null)},o.createElement(A.a,{SlideProps:{unmountOnExit:!0},variant:"persistent",className:r,open:a,anchor:d,PaperProps:{style:{backgroundColor:"transparent",border:"none",overflow:"visible",pointerEvents:"none"}}},o.createElement("div",{style:{pointerEvents:"all",border:(l?"rgba(0, 0, 0, 0.87)":"rgba(0, 0, 0, 0.12)")+" 1px solid",borderRadius:"4px 4px 0 0",backgroundColor:l?"rgba(0, 0, 0, 0.87)":"rgba(255,255,255, 0.98)",padding:"12px 24px",margin:"auto",boxShadow:"0px 1px 8px -1px rgba(0,0,0,0.4)",position:"relative",minWidth:"50vw",maxWidth:"calc(100vw - 220px)",transformOrigin:"bottom",transform:"scale("+w+")",transition:"0.3s"}},n,o.createElement(u,{style:{marginLeft:-24,marginRight:-24,marginTop:12,marginBottom:12}}),o.createElement(o.Fragment,null,o.createElement(h,{container:!0,direction:"row",alignItems:"center"},y||f?o.createElement(h,{item:!0},o.createElement(g.a,{children:y||(f?f[0]:""),style:{marginRight:16}})):null,o.createElement(h,{item:!0},o.createElement(v.a,{variant:"subtitle1"},f)),o.createElement(h,{item:!0}," ",o.createElement(D,{title:"Toggle Size"},o.createElement(H,{onClick:function(){var e=Re[(Re.indexOf(w)+1)%Re.length];E(e),ze=e},"aria-label":"toggle Size",color:"primary"},o.createElement(U.a,null)))),o.createElement(h,{item:!0,style:{marginLeft:"auto"}},o.createElement(de,{id:x,editable:O}),o.createElement(be,{id:x,editable:O}),o.createElement(Se,{id:x,editable:O}),m?o.createElement(D,{title:"Remove Plugin"},o.createElement(H,{onClick:m,"aria-label":"delete",color:"secondary"},o.createElement(q.a,null))):null))))))}))},1192:function(e,t,a){"use strict";var n=a(41);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(1169)).default)(r.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=o},1342:function(e,t,a){"use strict";var n=a(41);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(1169)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"m0 0h24v24H0z"}),r.default.createElement("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"})),"VisibilityOff");t.default=o},1343:function(e,t,a){"use strict";var n=a(41);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(1169)).default)(r.default.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=o},1344:function(e,t,a){"use strict";var n=a(41);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(1169)).default)(r.default.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"}),"FileCopy");t.default=o},1345:function(e,t,a){"use strict";var n=a(41);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(1169)).default)(r.default.createElement("path",{d:"M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"}),"VerticalAlignTop");t.default=o},1346:function(e,t,a){"use strict";var n=a(41);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(1169)).default)(r.default.createElement("path",{d:"M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z"}),"FormatSize");t.default=o}}]);