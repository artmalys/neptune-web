(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"41gN":function(e,t,n){},"6XZG":function(e,t,n){},"9YZu":function(e,t,n){"use strict";var i=n("ERkP"),a=n.n(i),l=n("O94r"),r=n.n(l),o=n("VehP"),c=n("EUyq"),s=(n("DGa2"),function(e){var t=e.backgroundColor,n=e.children,i=e.className,l=e.outlined,o=e.size,c=e.theme,s=e.type;return a.a.createElement("div",{className:r()("tw-avatar",i,"tw-avatar--".concat(o),"tw-avatar--".concat(s),"tw-avatar--".concat(c),{"tw-avatar--outlined":l})},a.a.createElement("div",{className:"tw-avatar__content",style:{backgroundColor:t||void 0}},n))});s.Size={SMALL:o.a.SMALL,MEDIUM:o.a.MEDIUM,LARGE:o.a.LARGE},s.Theme=c.a,s.Type={THUMBNAIL:"thumbnail",ICON:"icon",EMOJI:"emoji",INITIALS:"initials"},s.defaultProps={backgroundColor:null,children:null,className:null,outlined:!1,size:s.Size.MEDIUM,theme:c.a.LIGHT,type:s.Type.THUMBNAIL},t.a=s},DGa2:function(e,t,n){},EUyq:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i={LIGHT:"light",DARK:"dark"}},"Lw4+":function(e,t,n){"use strict";var i=n("ERkP"),a=n.n(i),l=n("O94r"),r=n.n(l),o=(n("j+zR"),n("X+z2"),function(e){var t=e.as,n=e.href,i=e.media,l=e.title,o=e.content,c=e.onClick,s=e.htmlFor,u=e.disabled,d=e.button,m=e.decision,f=e.complex,p=e.className,b=e.inverseMediaCircle,v=e.showMediaAtAllSizes,h=e.showMediaCircle;return a.a.createElement(t,{className:r()(p,"media",{"decision-complex":f,decision:m,disabled:u,"tw-option__sm-media":v}),href:n,onClick:c,htmlFor:s},i&&a.a.createElement("div",{className:"media-left"},h?a.a.createElement("div",{className:r()("circle circle-sm text-primary",{"circle-inverse":b})},i):a.a.createElement("div",{className:"tw-option__no-media-circle"},i)),a.a.createElement("div",{className:"media-body"},a.a.createElement("div",{className:"h5"},l),o&&a.a.createElement("div",{className:"decision__content"},o)),a.a.createElement("div",{className:"media-right"},d))});o.defaultProps={as:"label",media:"",content:null,htmlFor:null,disabled:!1,button:null,onClick:null,href:null,decision:!0,complex:!1,inverseMediaCircle:!0,className:null,showMediaAtAllSizes:!1,showMediaCircle:!0},t.a=o},"X+z2":function(e,t,n){},XORh:function(e,t,n){(function(t){var n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,r=parseInt,o="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,s=o||c||Function("return this")(),u=Object.prototype.toString,d=Math.max,m=Math.min,f=function(){return s.Date.now()};function p(e,t,n){var i,a,l,r,o,c,s=0,u=!1,p=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function M(t){var n=i,l=a;return i=a=void 0,s=t,r=e.apply(l,n)}function y(e){return s=e,o=setTimeout(E,t),u?M(e):r}function k(e){var n=e-c;return void 0===c||n>=t||n<0||p&&e-s>=l}function E(){var e=f();if(k(e))return N(e);o=setTimeout(E,function(e){var n=t-(e-c);return p?m(n,l-(e-s)):n}(e))}function N(e){return o=void 0,h&&i?M(e):(i=a=void 0,r)}function w(){var e=f(),n=k(e);if(i=arguments,a=this,c=e,n){if(void 0===o)return y(c);if(p)return o=setTimeout(E,t),M(c)}return void 0===o&&(o=setTimeout(E,t)),r}return t=v(t)||0,b(n)&&(u=!!n.leading,l=(p="maxWait"in n)?d(v(n.maxWait)||0,t):l,h="trailing"in n?!!n.trailing:h),w.cancel=function(){void 0!==o&&clearTimeout(o),s=0,i=c=a=o=void 0},w.flush=function(){return void 0===o?r:N(f())},w}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var o=a.test(e);return o||l.test(e)?r(e.slice(2),o?2:8):i.test(e)?NaN:+e}e.exports=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),p(e,t,{leading:i,maxWait:t,trailing:a})}}).call(this,n("lpmq"))},bOjP:function(e,t,n){"use strict";var i=n("97Jx"),a=n.n(i),l=n("ERkP"),r=n.n(l),o=(n("j+zR"),n("O94r")),c=n.n(o),s=n("Hi8P"),u=n("Lw4+"),d=(n("41gN"),function(e){var t=e.as,n=e.media,i=e.href,l=e.title,o=e.content,d=e.onClick,m=e.complex,f=e.disabled,p=e.showMediaAtAllSizes,b=e.showMediaCircle,v=e.className,h={as:t,media:n,href:i,title:l,content:o,complex:m,disabled:f,showMediaAtAllSizes:p,showMediaCircle:b,className:c()("tw-navigation-option",v)};return i&&(h.as="a"),r.a.createElement(u.a,a()({},h,{onClick:function(e){f||d(e)},button:r.a.createElement(s.a,{orientation:s.a.Orientation.RIGHT,disabled:f,className:"d-block"})}))});d.defaultProps={as:"button",media:null,content:null,complex:!1,onClick:null,href:void 0,disabled:!1,showMediaAtAllSizes:!1,showMediaCircle:!0,className:null},t.a=d},iRuI:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return I})),n.d(t,"default",(function(){return g}));var i=n("cxan"),a=n("HbGN"),l=n("ERkP"),r=n.n(l),o=n("ZVZ0"),c=n("Qi1R"),s=(n("1t7P"),n("jQ/y"),n("jwue"),n("z84I"),n("+oxZ"),n("j+zR"),n("O94r")),u=n.n(s),d=(n("LW0h"),n("M+/F"),n("ddV6")),m=n.n(d),f=n("5BfY"),p=n("XORh"),b=n.n(p),v=l.useLayoutEffect,h=function(e){var t=e.ref,n=e.throttleMs,i=void 0===n?100:n,a=Object(l.useState)(null),r=m()(a,2),o=r[0],c=r[1],s=function(){t&&t.current&&c(t.current.clientWidth)};return v((function(){return window.addEventListener("resize",b()(s,i)),s(),function(){return window.removeEventListener("resize",s)}}),[]),[o]};h.THROTTLE_MS=100;var M={COLUMN:"COLUMN"},y=function(e){var t=e.items;if(!t||!t.length)return null;var n=Object(l.useRef)(null),i=h({ref:n}),a=m()(i,1)[0],o=t.filter((function(e){var t=e.breakpoint;return a>=(void 0===t?0:t)})).slice(-1)[0];return r.a.createElement("div",{className:u()("np-size-swapper d-flex",{"flex-column":o&&o.layout===M.COLUMN}),ref:n},o&&o.items)};y.Breakpoint=f.a,y.Layout=M;var k=y,E=n("bOjP"),N=(n("vrRf"),{ENTER:"Enter",SPACE:[" ","Spacebar"]}),w=n("VehP"),O=(n("6XZG"),function e(t){var n=t.className,i=t.description,a=t.disabled,l=t.href,o=t.media,c=t.onClick,s=t.size,d=t.title,m=s===e.Size.SMALL;return r.a.createElement("a",{className:u()("decision","flex-column","np-tile","text-no-decoration","text-xs-center",n,{"p-y-5 p-x-4":!m,"np-tile--small p-a-2":m,disabled:a}),href:l,onClick:a?null:c,onKeyDown:a?null:function(e){var t=e.key;(t===N.ENTER||-1<N.SPACE.indexOf(t))&&c()},"aria-label":d},r.a.createElement("div",{className:"np-tile__media d-flex justify-content-center"},o),r.a.createElement("div",{className:"np-tile__title"},d),i&&r.a.createElement("div",{className:"np-tile__description"},i))});O.Size=w.a,O.defaultProps={className:"",description:null,disabled:!1,size:O.Size.MEDIUM};var L=O,T=(n("mMO2"),function e(t){var n=t.options,i=t.presentation,a=t.type,l=t.size;if(a===e.Type.NAVIGATION){if(i===e.Presentation.LIST_BLOCK){var o=l===e.Size.SMALL,c=[{items:[],layout:k.Layout.COLUMN},{items:[],breakpoint:k.Breakpoint.MEDIUM}];return n.forEach((function(e,t){var n=e.description,i=e.disabled,a=e.href,l=e.media,s=l.block,u=l.list,d=e.onClick,m=e.title;c[0].items.push(r.a.createElement(E.a,{complex:!1,content:n,disabled:i,href:a,key:"nav-".concat(t),media:u,onClick:d,showMediaAtAllSizes:!0,title:m})),c[1].items.push(r.a.createElement(L,{className:"np-decision__tile".concat(o?"--small":""),description:n,disabled:i,href:a,key:"tile-".concat(t),media:s,onClick:d,size:o?L.Size.SMALL:L.Size.MEDIUM,title:m}))})),r.a.createElement("div",{className:u()("np-decision",{"np-decision--small":o})},r.a.createElement(k,{items:c}))}return n.map((function(e,t){var n=e.title,i=e.description,a=e.disabled,l=e.href,o=e.media.list,c=e.onClick;return r.a.createElement(E.a,{complex:!1,content:i,disabled:a,href:l,key:"nav-".concat(t),media:o,onClick:c,showMediaAtAllSizes:!0,title:n})}))}return r.a.createElement(r.a.Fragment,null)});T.Size={SMALL:w.a.SMALL,MEDIUM:w.a.MEDIUM},T.Presentation={LIST:"LIST",LIST_BLOCK:"LIST_BLOCK"},T.Type={NAVIGATION:"NAVIGATION"},T.defaultProps={presentation:T.Presentation.LIST,size:T.Size.MEDIUM,type:T.Type.NAVIGATION};var C=T,A=n("9YZu"),I=(r.a.createElement,{name:"Decision"}),S={meta:I};function g(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(i.a)({},S,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"Decision can be used for illustrating major decisions for the user.\nBecause blocks will not wrap onto multiple lines, we suggest keeping the number of options under four when using presentation ",Object(o.a)("inlineCode",{parentName:"p"},"LIST_BLOCK"),"."),Object(o.a)(C,{options:[{description:"Click here to send money to Hank Miller. Money will be sent directly to Hank Miller's multi-currency account.",onClick:function(){return console.log("clicked")},disabled:!1,href:"#href1",media:{block:Object(o.a)("img",{src:"https://transferwise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg",alt:"alt"}),list:Object(o.a)(A.a,{size:"md",type:"initials",mdxType:"Avatar"},"HM")},title:"Hank Miller"},{description:"Click here to send money to Hank Miller. Money will be sent directly to Hank Miller's multi-currency account.",onClick:function(){return console.log("clicked")},disabled:!1,href:"#href2",media:{block:Object(o.a)("img",{src:"https://transferwise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg",alt:"alt"}),list:Object(o.a)(A.a,{size:"md",type:"initials",mdxType:"Avatar"},"HM")},title:"Hank Miller"},{description:"Click here to send money to Hank Miller. Money will be sent directly to Hank Miller's multi-currency account.",onClick:function(){return console.log("clicked")},href:"#href3",media:{block:Object(o.a)("img",{src:"https://transferwise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg",alt:"alt"}),list:Object(o.a)(A.a,{size:"md",type:"initials",mdxType:"Avatar"},"HM")},disabled:!1,title:"Hank Miller"}],presentation:C.Presentation.LIST_BLOCK,type:C.Type.NAVIGATION,mdxType:"Decision"}),Object(o.a)(c.a,{componentName:"Decision",mdxType:"GeneratePropsTable"}))}g.isMDXComponent=!0},mMO2:function(e,t,n){}}]);