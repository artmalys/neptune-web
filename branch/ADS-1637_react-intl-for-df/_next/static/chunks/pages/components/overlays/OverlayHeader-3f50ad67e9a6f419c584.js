_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[101],{"+4rU":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/overlays/OverlayHeader",function(){return a("XZBA")}])},"+KXO":function(e,t,a){var n=a("ax0f"),r=a("N9G2"),l=a("DEeE");n({target:"Object",stat:!0,forced:a("ct80")((function(){l(1)}))},{keys:function(e){return l(r(e))}})},"3IAW":function(e,t,a){"use strict";var n=a("ERkP"),r=a.n(n),l=a("O94r"),o=a.n(l),c=a("EUyq"),i=function(e){var t=e.theme,a=e.onGoBack;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:o()("logo","logo-3","hidden-xs",{"logo-primary":t===c.a.LIGHT,"logo-inverse":t===c.a.DARK})}),r.a.createElement("div",{className:o()("flag","flag-info","logo-3","visible-xs",{"flag--hidden":a})}))};i.defaultProps={theme:c.a.LIGHT,onGoBack:null};var s=i;t.a=s},"9YZu":function(e,t,a){"use strict";var n=a("ERkP"),r=a.n(n),l=a("O94r"),o=a.n(l),c=a("VehP"),i=a("EUyq"),s=(a("DGa2"),function(e){var t=e.backgroundColor,a=e.children,n=e.className,l=e.outlined,c=e.size,i=e.theme,s=e.type;return r.a.createElement("div",{className:o()("tw-avatar",n,"tw-avatar--".concat(c),"tw-avatar--".concat(s),"tw-avatar--".concat(i),{"tw-avatar--outlined":l})},r.a.createElement("div",{className:"tw-avatar__content",style:{backgroundColor:t||void 0}},a))});s.Size={SMALL:c.a.SMALL,MEDIUM:c.a.MEDIUM,LARGE:c.a.LARGE},s.Theme=i.a,s.Type={THUMBNAIL:"thumbnail",ICON:"icon",EMOJI:"emoji",INITIALS:"initials"},s.defaultProps={backgroundColor:null,children:null,className:null,outlined:!1,size:s.Size.MEDIUM,theme:i.a.LIGHT,type:s.Type.THUMBNAIL},t.a=s},DEeE:function(e,t,a){var n=a("yRya"),r=a("sX5C");e.exports=Object.keys||function(e){return n(e,r)}},EUyq:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={LIGHT:"light",DARK:"dark"}},Fr7r:function(e,t,a){"use strict";var n=a("ERkP"),r=a.n(n),l=a("O94r"),o=a.n(l),c=function(e){var t=e.leftContent,a=e.rightContent,n=e.bottomContent,l=e.className;return r.a.createElement("div",{className:o()(l)},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row p-t-3 "},r.a.createElement("div",{className:"col-lg-2 col-xs-6"},t),r.a.createElement("div",{className:"col-lg-2 col-xs-6 col-lg-push-8 text-xs-right"},a),r.a.createElement("div",{className:"col-xs-12 col-lg-6 col-lg-pull-2 col-lg-offset-1 p-x-0"},n))))};c.defaultProps={leftContent:null,rightContent:null,bottomContent:null,className:null},t.a=c},GW4H:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={BUSINESS:"BUSINESS",PERSONAL:"PERSONAL"}},N9G2:function(e,t,a){var n=a("cww3");e.exports=function(e){return Object(n(e))}},O94r:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===l)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},Ohp4:function(e,t,a){"use strict";var n=a("ERkP"),r=a.n(n),l=a("O94r"),o=a.n(l),c=a("kQwz"),i=a("/Vl7"),s=a("BAoe"),u=Object(s.a)({ariaLabel:{id:"neptune.CloseButton.ariaLabel"}}),m=(a("ryiH"),function(e){var t=e.onClick,a=e.className,n=Object(c.a)();return r.a.createElement("button",{type:"button",className:o()("tw-close-button","btn-link","text-no-decoration",a),"aria-label":n.formatMessage(u.ariaLabel),onClick:t},r.a.createElement(i.i,{size:24}))});m.defaultProps={className:null};t.a=m},Ua7V:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,l=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(i){r=!0,l=i}finally{try{n||null==c.return||c.return()}finally{if(r)throw l}}return a}}},VehP:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},XZBA:function(e,t,a){"use strict";a.r(t),a.d(t,"meta",(function(){return h})),a.d(t,"default",(function(){return j}));var n=a("cxan"),r=a("HbGN"),l=a("ERkP"),o=a.n(l),c=a("ZVZ0"),i=a("Qi1R"),s=a("O94r"),u=a.n(s),m=a("f1t8"),p=a("3IAW"),f=a("Fr7r"),d=a("Ohp4"),v=a("GW4H"),b=a("EUyq"),y=(a("7ndt"),function e(t){var a=t.avatar,n=t.profileType,r=t.onClose,l=t.theme,c=r&&o.a.createElement(d.a,{onClick:r,className:"m-l-3 close-button-with-avatar"});return o.a.createElement(f.a,{leftContent:o.a.createElement("div",{className:"m-lg-t-1"},o.a.createElement(p.a,{theme:l,onGoBack:null})),rightContent:o.a.createElement("div",{className:"tw-flow-navigation__right-content m-lg-t-1"},a&&o.a.createElement(m.a,{url:a.url,profileType:n}),c),className:u()("tw-flow-navigation","tw-flow-navigation__wrapper",{"tw-flow-navigation--inverse":l===e.Theme.DARK,"tw-flow-navigation--done":!a})})});y.ProfileType=v.a,y.Theme=b.a,y.defaultProps={avatar:{url:null},profileType:y.ProfileType.PERSONAL,onClose:null,theme:b.a.LIGHT};var E=y,O=a("/Vl7"),h=(o.a.createElement,{name:"OverlayHeader"}),g={meta:h};function j(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},g,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"Simple header component that displays a responsive logo an avatar and a close button."),Object(c.a)(i.b,{code:"<OverlayHeader\n  onClose={() => alert('Close clicked')}\n  avatar={{ url: 'https://github.com/transferwise.png' }}\n  profileType={OverlayHeader.ProfileType.PERSONAL}\n  theme={OverlayHeader.Theme.LIGHT}\n/>;\n",scope:{OverlayHeader:E},display:"vertical",mdxType:"LiveEditorBlock"}),Object(c.a)(i.a,{componentName:"OverlayHeader",mdxType:"GeneratePropsTable"}),Object(c.a)("h2",{id:"usage"},"Usage"),Object(c.a)("p",null,"Some elements can be toggled based on props values as per the table below."),Object(c.a)("div",{className:"scroll-table"},Object(c.a)("table",{className:"docs-table table"},Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"Prop"),Object(c.a)("th",null,"Logo"),Object(c.a)("th",null,"closeButton"),Object(c.a)("th",null,"avatar"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"closeButton = null"),Object(c.a)("td",{className:"text-center"},Object(c.a)(O.d,{mdxType:"CheckIcon"})),Object(c.a)("td",null,Object(c.a)(O.i,{mdxType:"CrossIcon"})),Object(c.a)("td",null,Object(c.a)(O.i,{mdxType:"CrossIcon"}))),Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"avatar = null"),Object(c.a)("td",null,Object(c.a)(O.d,{mdxType:"CheckIcon"})),Object(c.a)("td",null,Object(c.a)(O.d,{mdxType:"CheckIcon"})),Object(c.a)("td",null,Object(c.a)(O.i,{mdxType:"CrossIcon"})))))))}j.isMDXComponent=!0},ddV6:function(e,t,a){var n=a("qPgQ"),r=a("Ua7V"),l=a("peMk"),o=a("f2kJ");e.exports=function(e,t){return n(e)||r(e,t)||l(e,t)||o()}},f1t8:function(e,t,a){"use strict";a("+KXO");var n=a("ddV6"),r=a.n(n),l=a("ERkP"),o=a.n(l),c=a("/Vl7"),i=a("9YZu"),s="BUSINESS",u="PERSONAL";function m(e){var t=e.url,a=e.profileType,n=Object(l.useState)(!1),u=r()(n,2),m=u[0],p=u[1],f=t&&!m,d=a===s;return Object(l.useEffect)((function(){return p(!1)}),[t]),o.a.createElement(o.a.Fragment,null,d&&o.a.createElement(i.a,{type:i.a.Type.ICON,size:i.a.Size.MEDIUM},o.a.createElement(c.c,null)),!d&&!f&&o.a.createElement(i.a,{type:i.a.Type.ICON,size:i.a.Size.MEDIUM},o.a.createElement(c.s,null)),!d&&f&&o.a.createElement(i.a,{type:i.a.Type.THUMBNAIL,size:i.a.Size.MEDIUM},f&&o.a.createElement("img",{src:t,alt:"avatar",onError:function(){return p(!0)}})))}m.defaultProps={url:"",profileType:u};t.a=m},f2kJ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},iQ7j:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}},kQwz:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("ERkP"),r=a("ymT0"),l=a("yGPN");function o(){var e=n.useContext(r.a);return Object(l.c)(e),e}},peMk:function(e,t,a){var n=a("iQ7j");e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}},qPgQ:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}}},[["+4rU",0,1,2,6,3,5,13,4]]]);