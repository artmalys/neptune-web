_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[93],{"+KXO":function(t,e,n){var o=n("ax0f"),r=n("N9G2"),a=n("DEeE");o({target:"Object",stat:!0,forced:n("ct80")((function(){a(1)}))},{keys:function(t){return a(r(t))}})},"1Pcy":function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},"2G9S":function(t,e,n){"use strict";var o=n("ax0f"),r=n("ct80"),a=n("xt6W"),i=n("dSaG"),c=n("N9G2"),l=n("tJVe"),u=n("2sZ7"),s=n("aoZ+"),f=n("GJtw"),p=n("fVMg"),m=n("T+0C"),v=p("isConcatSpreadable"),d=m>=51||!r((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),h=f("concat"),g=function(t){if(!i(t))return!1;var e=t[v];return void 0!==e?!!e:a(t)};o({target:"Array",proto:!0,forced:!d||!h},{concat:function(t){var e,n,o,r,a,i=c(this),f=s(i,0),p=0;for(e=-1,o=arguments.length;e<o;e++)if(g(a=-1===e?i:arguments[e])){if(p+(r=l(a.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<r;n++,p++)n in a&&u(f,p,a[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");u(f,p++,a)}return f.length=p,f}})},"2gZs":function(t,e,n){var o=n("POz8"),r=n("amH4"),a=n("fVMg")("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=o?r:function(t){var e,n,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(n){}}(e=Object(t),a))?n:i?r(e):"Object"==(o=r(e))&&"function"==typeof e.callee?"Arguments":o}},"2sZ7":function(t,e,n){"use strict";var o=n("CD8Q"),r=n("q9+l"),a=n("lhjL");t.exports=function(t,e,n){var i=o(e);i in t?r.f(t,i,a(0,n)):t[i]=n}},"3IAW":function(t,e,n){"use strict";var o=n("ERkP"),r=n.n(o),a=n("O94r"),i=n.n(a),c=n("EUyq"),l=function(t){var e=t.theme,n=t.onGoBack;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:i()("logo","logo-3","hidden-xs",{"logo-primary":e===c.a.LIGHT,"logo-inverse":e===c.a.DARK})}),r.a.createElement("div",{className:i()("flag","flag-info","logo-3","visible-xs",{"flag--hidden":n})}))};l.defaultProps={theme:c.a.LIGHT,onGoBack:null};var u=l;e.a=u},"5Yy7":function(t,e,n){var o=n("695J");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},"695J":function(t,e){function n(e,o){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,o)}t.exports=n},"7CQW":function(t,e,n){"use strict";n("2G9S"),n("7x/C"),n("DZ+c");var o=n("VrFO"),r=n.n(o),a=n("Y9Ll"),i=n.n(a),c=n("1Pcy"),l=n.n(c),u=n("5Yy7"),s=n.n(u),f=n("N+ot"),p=n.n(f),m=n("AuHH"),v=n.n(m),d=n("KEM+"),h=n.n(d),g=n("ERkP"),y=n.n(g),b=n("eKd8");n("7gtC");function E(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=v()(t);if(e){var r=v()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return p()(this,n)}}var w=function(t){function e(){var t;return r()(this,e),t=n.call(this),h()(l()(t),"ensureHidden",(function(e){t.state.show||(e.stopPropagation(),t.hide())})),t.state={show:!1,tooltipId:null},t}s()(e,t);var n=E(e);return i()(e,[{key:"componentDidMount",value:function(){this.setState({tooltipId:Math.random().toString(36).substring(7)})}},{key:"show",value:function(){this.setState((function(){return{show:!0}}))}},{key:"hide",value:function(){this.setState((function(){return{show:!1}}))}},{key:"render",value:function(){var t=this,e=this.state.tooltipId,n=this.props,o=n.position,r=n.children,a=n.label,i=n.offset,c=this.elementReference&&this.tooltipReference?function(t,e,n,o){return n===b.a.TOP?{top:"".concat(t.offsetTop-e.offsetHeight-o,"px"),left:"".concat(t.offsetLeft+t.offsetWidth/2-e.offsetWidth/2,"px")}:n===b.a.LEFT?{top:"".concat(t.offsetTop+t.offsetHeight/2-e.offsetHeight/2,"px"),left:"".concat(t.offsetLeft-e.offsetWidth-o,"px")}:n===b.a.RIGHT?{top:"".concat(t.offsetTop+t.offsetHeight/2-e.offsetHeight/2,"px"),left:"".concat(t.offsetLeft+t.offsetWidth+o,"px")}:n===b.a.BOTTOM?{top:"".concat(t.offsetTop+t.offsetHeight+o,"px"),left:"".concat(t.offsetLeft+t.offsetWidth/2-e.offsetWidth/2,"px")}:{}}(this.elementReference,this.tooltipReference,o,i):{};return y.a.createElement("span",{onMouseOver:function(){return t.show()},onFocus:function(){return t.show()},onMouseOut:function(){return t.hide()},onBlur:function(){return t.hide()},ref:function(e){t.elementReference=e},"aria-describedby":e,className:"tw-tooltip-container"},y.a.createElement("div",{onMouseOver:this.ensureHidden,onFocus:this.ensureHidden,className:"tooltip fade ".concat(o," ").concat(this.state.show?"in":""),role:"tooltip",style:c,ref:function(e){t.tooltipReference=e},id:e},y.a.createElement("div",{className:"tooltip-arrow"}),y.a.createElement("div",{className:"tooltip-inner"},a)),r)}}]),e}(g.Component);w.Position=b.a,w.defaultProps={position:w.Position.TOP,offset:0};var x=w;e.a=x},"7x/C":function(t,e,n){var o=n("POz8"),r=n("uLp7"),a=n("UmhL");o||r(Object.prototype,"toString",a,{unsafe:!0})},"7xRU":function(t,e,n){"use strict";var o=n("ax0f"),r=n("g6a+"),a=n("N4z3"),i=n("f4p7"),c=[].join,l=r!=Object,u=i("join",",");o({target:"Array",proto:!0,forced:l||!u},{join:function(t){return c.call(a(this),void 0===t?",":t)}})},"8+RD":function(t,e,n){var o=n("dSaG");t.exports=function(t){if(!o(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},"9YZu":function(t,e,n){"use strict";var o=n("ERkP"),r=n.n(o),a=n("O94r"),i=n.n(a),c=n("VehP"),l=n("EUyq"),u=(n("DGa2"),function(t){var e=t.backgroundColor,n=t.children,o=t.className,a=t.outlined,c=t.size,l=t.theme,u=t.type;return r.a.createElement("div",{className:i()("tw-avatar",o,"tw-avatar--".concat(c),"tw-avatar--".concat(u),"tw-avatar--".concat(l),{"tw-avatar--outlined":a})},r.a.createElement("div",{className:"tw-avatar__content",style:{backgroundColor:e||void 0}},n))});u.Size={SMALL:c.a.SMALL,MEDIUM:c.a.MEDIUM,LARGE:c.a.LARGE},u.Theme=l.a,u.Type={THUMBNAIL:"thumbnail",ICON:"icon",EMOJI:"emoji",INITIALS:"initials"},u.defaultProps={backgroundColor:null,children:null,className:null,outlined:!1,size:u.Size.MEDIUM,theme:l.a.LIGHT,type:u.Type.THUMBNAIL},e.a=u},AuHH:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},BAoe:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var o,r,a=n("D57K"),i=n("ERkP"),c=n("yGPN"),l=n("ymT0");!function(t){t.formatDate="FormattedDate",t.formatTime="FormattedTime",t.formatNumber="FormattedNumber",t.formatList="FormattedList",t.formatDisplayName="FormattedDisplayName"}(o||(o={})),function(t){t.formatDate="FormattedDateParts",t.formatTime="FormattedTimeParts",t.formatNumber="FormattedNumberParts",t.formatList="FormattedListParts"}(r||(r={}));function u(t){var e=function(e){return i.createElement(l.a.Consumer,null,(function(n){Object(c.c)(n);var o=e.value,r=e.children,i=Object(a.c)(e,["value","children"]),l="string"===typeof o?new Date(o||0):o;return r("formatDate"===t?n.formatDateToParts(l,i):n.formatTimeToParts(l,i))}))};return e.displayName=r[t],e}function s(t){var e=function(e){return i.createElement(l.a.Consumer,null,(function(n){Object(c.c)(n);var o=e.value,r=e.children,l=Object(a.c)(e,["value","children"]),u=n[t](o,l);if("function"===typeof r)return r(u);var s=n.textComponent||i.Fragment;return i.createElement(s,null,u)}))};return e.displayName=o[t],e}function f(t){return t}s("formatDate"),s("formatTime"),s("formatNumber"),s("formatList"),s("formatDisplayName"),u("formatDate"),u("formatTime")},Ch6y:function(t,e,n){"use strict";var o=n("VCi3"),r=n("q9+l"),a=n("fVMg"),i=n("1Mu/"),c=a("species");t.exports=function(t){var e=o(t),n=r.f;i&&e&&!e[c]&&n(e,c,{configurable:!0,get:function(){return this}})}},DEeE:function(t,e,n){var o=n("yRya"),r=n("sX5C");t.exports=Object.keys||function(t){return o(t,r)}},"DZ+c":function(t,e,n){"use strict";var o=n("uLp7"),r=n("FXyv"),a=n("ct80"),i=n("q/0V"),c=RegExp.prototype,l=c.toString,u=a((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),s="toString"!=l.name;(u||s)&&o(RegExp.prototype,"toString",(function(){var t=r(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in c)?i.call(t):n)}),{unsafe:!0})},EUyq:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o={LIGHT:"light",DARK:"dark"}},FYta:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return A})),n.d(e,"default",(function(){return F}));var o=n("cxan"),r=n("HbGN"),a=n("ERkP"),i=n.n(a),c=n("ZVZ0"),l=n("Qi1R"),u=n("O94r"),s=n.n(u),f=n("Ohp4"),p=(n("z84I"),n("VrFO")),m=n.n(p),v=n("Y9Ll"),d=n.n(v),h=n("5Yy7"),g=n.n(h),y=n("N+ot"),b=n.n(y),E=n("AuHH"),w=n.n(E),x=n("KEM+"),S=n.n(x),N=n("05Xt");n("ePcE");function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=w()(t);if(e){var r=w()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return b()(this,n)}}var O=function(){return i.a.createElement("svg",{width:"20",height:"16",viewBox:"0 0 20 16",xmlns:"http://www.w3.org/2000/svg",className:"m-t-1"},i.a.createElement("title",null,"ICON: Back"),i.a.createElement("path",{d:"M0 8l8-8 1.5 1.5L4 7h16v2H4l5.5 5.5L8 16",fill:"#00B9FF",fillRule:"evenodd"}))},P=function(t){function e(t){var o;return m()(this,e),(o=n.call(this,t)).state={activeStep:t.activeStep,isMovingBackward:!1},o}g()(e,t);var n=T(e);return d()(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.steps,o=e.activeStep,r=e.onGoBack;return i.a.createElement("button",{type:"button",className:"btn-unstyled visible-xs tw-flow-navigation__back-button ".concat(r?"":"tw-flow-navigation__back-button--hidden"),onClick:function(){return r&&r()}},i.a.createElement("div",{className:"tw-flow-navigation__back-arrow"},i.a.createElement(O,null)),n.map((function(e,n){var r=e.label;return i.a.createElement(N.a,{key:n,in:n===o-1,timeout:450,classNames:"tw-flow-navigation__back-text",unmountOnExit:!0},i.a.createElement("span",{className:"tw-flow-navigation__back-text ".concat(t.state.isMovingBackward?"tw-flow-navigation__back-text--moving-backward":""),"aria-hidden":n!==o-1},r))})))}}]),e}(a.Component);S()(P,"getDerivedStateFromProps",(function(t,e){return{isMovingBackward:t.activeStep<e.activeStep,activeStep:t.activeStep}})),P.defaultProps={onGoBack:null};var k=P,_=n("f1t8"),R=n("3IAW"),C=n("ToGa"),M=n("Fr7r"),L=n("EUyq"),j=n("GW4H"),I=(n("7ndt"),function t(e){var n=e.steps,o=e.activeStep,r=e.avatarUrl,a=e.done,c=e.profileType,l=e.onClose,u=e.onGoBack,p=e.theme,m=a?null:i.a.createElement(_.a,{url:r,profileType:c}),v=l&&i.a.createElement(f.a,{onClick:l,className:s()("m-l-3",{"close-button-with-avatar":!a})});return i.a.createElement(M.a,{leftContent:i.a.createElement("div",{className:"m-lg-t-1"},i.a.createElement(R.a,{theme:p,onGoBack:u}),i.a.createElement(k,{steps:n,activeStep:o,onGoBack:u})),rightContent:i.a.createElement("div",{className:"tw-flow-navigation__right-content m-lg-t-1"},m,v),bottomContent:a||p===L.a.DARK?null:i.a.createElement("div",{className:"tw-flow-navigation__stepper m-lg-t-1"},i.a.createElement(C.a,{activeStep:o,steps:n})),className:s()("tw-flow-navigation","tw-flow-navigation__wrapper",{"tw-flow-navigation--done":a,"tw-flow-navigation--inverse":p===t.Theme.DARK})})});I.ProfileType=j.a,I.Theme=L.a,I.defaultProps={activeStep:0,avatarUrl:"",done:!1,profileType:I.ProfileType.PERSONAL,onGoBack:null,onClose:null,theme:L.a.LIGHT};var D=I,A=(i.a.createElement,{name:"FlowNavigation"}),G={meta:A};function F(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(c.a)("wrapper",Object(o.a)({},G,n,{components:e,mdxType:"MDXLayout"}),Object(c.a)(l.b,{code:"() => {\n  const [activeStep, setActiveStep] = React.useState(1);\n  const updateActiveStep = (step) => () => setActiveStep(step);\n\n  return (\n    <FlowNavigation\n      activeStep={activeStep}\n      onClose={() => alert('Close clicked')}\n      avatarUrl=\"https://github.com/transferwise.png\"\n      done={false}\n      profileType={FlowNavigation.ProfileType.BUSINESS}\n      theme={FlowNavigation.Theme.LIGHT}\n      onGoBack={() => alert('If onGoBack is null, the arrow is replaced with a flag')}\n      showCloseButton\n      steps={[\n        {\n          label: 'Amount',\n          hoverLabel: (\n            <>\n              <div>\n                <strong>100 GBP</strong>\n              </div>\n              0.2351 ETH\n            </>\n          ),\n          onClick: updateActiveStep(0),\n        },\n        {\n          label: 'My details',\n          hoverLabel: (\n            <>\n              <div>\n                <strong>Diana Jaramillo</strong>\n              </div>\n              dianajarm123@gmail.com\n            </>\n          ),\n          onClick: updateActiveStep(1),\n        },\n        { label: 'Recipient', hoverLabel: 'Some person/dog', onClick: updateActiveStep(2) },\n        { label: 'Something', hoverLabel: 'Cool', onClick: updateActiveStep(3) },\n      ]}\n    />\n  );\n};\n",scope:{FlowNavigation:D},display:"vertical",mdxType:"LiveEditorBlock"}),Object(c.a)(l.a,{componentName:"FlowNavigation",mdxType:"GeneratePropsTable"}))}F.isMDXComponent=!0},Fr7r:function(t,e,n){"use strict";var o=n("ERkP"),r=n.n(o),a=n("O94r"),i=n.n(a),c=function(t){var e=t.leftContent,n=t.rightContent,o=t.bottomContent,a=t.className;return r.a.createElement("div",{className:i()(a)},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row p-t-3 "},r.a.createElement("div",{className:"col-lg-2 col-xs-6"},e),r.a.createElement("div",{className:"col-lg-2 col-xs-6 col-lg-push-8 text-xs-right"},n),r.a.createElement("div",{className:"col-xs-12 col-lg-6 col-lg-pull-2 col-lg-offset-1 p-x-0"},o))))};c.defaultProps={leftContent:null,rightContent:null,bottomContent:null,className:null},e.a=c},GW4H:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o={BUSINESS:"BUSINESS",PERSONAL:"PERSONAL"}},"N+ot":function(t,e,n){var o=n("T0aG"),r=n("1Pcy");t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?r(t):e}},Ohp4:function(t,e,n){"use strict";var o=n("ERkP"),r=n.n(o),a=n("O94r"),i=n.n(a),c=n("kQwz"),l=n("/Vl7"),u=n("BAoe"),s=Object(u.a)({ariaLabel:{id:"neptune.CloseButton.ariaLabel"}}),f=(n("ryiH"),function(t){var e=t.onClick,n=t.className,o=Object(c.a)();return r.a.createElement("button",{type:"button",className:i()("tw-close-button","btn-link","text-no-decoration",n),"aria-label":o.formatMessage(s.ariaLabel),onClick:e},r.a.createElement(l.i,{size:24}))});f.defaultProps={className:null};e.a=f},POz8:function(t,e,n){var o={};o[n("fVMg")("toStringTag")]="z",t.exports="[object z]"===String(o)},T0aG:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},ToGa:function(t,e,n){"use strict";n("2G9S"),n("z84I");var o=n("ERkP"),r=n.n(o),a=(n("//SO"),n("7CQW"));n("7xRU"),n("iKE+"),n("KqXw"),n("DZ+c"),n("WNMA");function i(){return function(){var t=void 0!==window.ontouchstart,e="undefined"!=typeof navigator&&navigator.maxTouchPoints,n=window.DocumentTouch&&document instanceof window.DocumentTouch;return!!(t||e||n)}()||function(){var t=["android","iemobile","iphone","ipad","ipod","blackberry","bada"].map((function(t){return"(".concat(t,")")})).join("|"),e=new RegExp(t,"ig");return"undefined"!=typeof navigator&&!!navigator.userAgent.match(e)}()}var c=function(t){var e=t.steps,n=t.activeStep;if(0===e.length)return null;var o=function(t,e,n){return Math.max(Math.min(e,n),t)}(0,e.length-1,n),c=1/(e.length-1),l=o/(e.length-1),u=Math.max(l-c,0),s=Math.min(o,1)*c;return r.a.createElement("div",{className:"tw-stepper"},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar-filler",style:{width:"".concat(100*u,"%")}}),r.a.createElement("div",{className:"progress-bar-ending",style:{width:"".concat(100*s,"%")}})),r.a.createElement("ul",{className:"tw-stepper-steps p-t-1 m-b-0"},e.map((function(t,e){var n=e===o,l=t.onClick&&!n,u=r.a.createElement("button",{type:"button",className:"btn-unstyled tw-stepper__step-label",disabled:!l,onClick:function(){return l&&t.onClick()}},r.a.createElement("small",null,t.label));return r.a.createElement("li",{key:e,style:{left:"".concat(e*c*100,"%")},className:"\n          hidden-xs\n          tw-stepper__step\n          ".concat(n?"tw-stepper__step--active":"","\n          ").concat(l?"tw-stepper__step--clickable":"","\n        ")},t.hoverLabel&&!i()?r.a.createElement(a.a,{position:a.a.Position.BOTTOM,label:t.hoverLabel},u):u)}))))};c.defaultProps={activeStep:0};var l=c;e.a=l},Ua7V:function(t,e){t.exports=function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,r=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(o=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);o=!0);}catch(l){r=!0,a=l}finally{try{o||null==c.return||c.return()}finally{if(r)throw a}}return n}}},UmhL:function(t,e,n){"use strict";var o=n("POz8"),r=n("2gZs");t.exports=o?{}.toString:function(){return"[object "+r(this)+"]"}},VrFO:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},WNMA:function(t,e,n){"use strict";var o=n("lbJE"),r=n("FXyv"),a=n("tJVe"),i=n("cww3"),c=n("4/YM"),l=n("34wW");o("match",1,(function(t,e,n){return[function(e){var n=i(this),o=void 0==e?void 0:e[t];return void 0!==o?o.call(e,n):new RegExp(e)[t](String(n))},function(t){var o=n(e,t,this);if(o.done)return o.value;var i=r(t),u=String(this);if(!i.global)return l(i,u);var s=i.unicode;i.lastIndex=0;for(var f,p=[],m=0;null!==(f=l(i,u));){var v=String(f[0]);p[m]=v,""===v&&(i.lastIndex=c(u,a(i.lastIndex),s)),m++}return 0===m?null:p}]}))},Y9Ll:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}},ddV6:function(t,e,n){var o=n("qPgQ"),r=n("Ua7V"),a=n("peMk"),i=n("f2kJ");t.exports=function(t,e){return o(t)||r(t,e)||a(t,e)||i()}},eKd8:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top",CENTER:"center"}},f1t8:function(t,e,n){"use strict";n("+KXO");var o=n("ddV6"),r=n.n(o),a=n("ERkP"),i=n.n(a),c=n("/Vl7"),l=n("9YZu"),u="BUSINESS",s="PERSONAL";function f(t){var e=t.url,n=t.profileType,o=Object(a.useState)(!1),s=r()(o,2),f=s[0],p=s[1],m=e&&!f,v=n===u;return Object(a.useEffect)((function(){return p(!1)}),[e]),i.a.createElement(i.a.Fragment,null,v&&i.a.createElement(l.a,{type:l.a.Type.ICON,size:l.a.Size.MEDIUM},i.a.createElement(c.c,null)),!v&&!m&&i.a.createElement(l.a,{type:l.a.Type.ICON,size:l.a.Size.MEDIUM},i.a.createElement(c.s,null)),!v&&m&&i.a.createElement(l.a,{type:l.a.Type.THUMBNAIL,size:l.a.Size.MEDIUM},m&&i.a.createElement("img",{src:e,alt:"avatar",onError:function(){return p(!0)}})))}f.defaultProps={url:"",profileType:s};e.a=f},f2kJ:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},gxsa:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigation/FlowNavigation",function(){return n("FYta")}])},"iKE+":function(t,e,n){var o=n("1Mu/"),r=n("9JhN"),a=n("66wQ"),i=n("j6nH"),c=n("q9+l").f,l=n("ZdBB").f,u=n("jl0/"),s=n("q/0V"),f=n("L2rT"),p=n("uLp7"),m=n("ct80"),v=n("zc29").set,d=n("Ch6y"),h=n("fVMg")("match"),g=r.RegExp,y=g.prototype,b=/a/g,E=/a/g,w=new g(b)!==b,x=f.UNSUPPORTED_Y;if(o&&a("RegExp",!w||x||m((function(){return E[h]=!1,g(b)!=b||g(E)==E||"/a/i"!=g(b,"i")})))){for(var S=function(t,e){var n,o=this instanceof S,r=u(t),a=void 0===e;if(!o&&r&&t.constructor===S&&a)return t;w?r&&!a&&(t=t.source):t instanceof S&&(a&&(e=s.call(t)),t=t.source),x&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var c=i(w?new g(t,e):g(t,e),o?this:y,S);return x&&n&&v(c,{sticky:n}),c},N=function(t){t in S||c(S,t,{configurable:!0,get:function(){return g[t]},set:function(e){g[t]=e}})},T=l(g),O=0;T.length>O;)N(T[O++]);y.constructor=S,S.prototype=y,p(r,"RegExp",S)}d("RegExp")},iQ7j:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}},j6nH:function(t,e,n){var o=n("dSaG"),r=n("waID");t.exports=function(t,e,n){var a,i;return r&&"function"==typeof(a=e.constructor)&&a!==n&&o(i=a.prototype)&&i!==n.prototype&&r(t,i),t}},kQwz:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n("ERkP"),r=n("ymT0"),a=n("yGPN");function i(){var t=o.useContext(r.a);return Object(a.c)(t),t}},peMk:function(t,e,n){var o=n("iQ7j");t.exports=function(t,e){if(t){if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}},qPgQ:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},waID:function(t,e,n){var o=n("FXyv"),r=n("8+RD");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(a){}return function(n,a){return o(n),r(a),e?t.call(n,a):n.__proto__=a,n}}():void 0)},z84I:function(t,e,n){"use strict";var o=n("ax0f"),r=n("0FSu").map,a=n("GJtw"),i=n("znGZ"),c=a("map"),l=i("map");o({target:"Array",proto:!0,forced:!c||!l},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})}},[["gxsa",0,1,2,6,3,5,7,8,9,4]]]);