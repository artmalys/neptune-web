(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"41gN":function(e,n,t){},"6XZG":function(e,n,t){},"9YZu":function(e,n,t){"use strict";var i=t("ERkP"),a=t.n(i),l=t("O94r"),r=t.n(l),o=t("VehP"),c=t("EUyq"),s=(t("DGa2"),function(e){var n=e.backgroundColor,t=e.children,i=e.className,l=e.outlined,o=e.size,c=e.theme,s=e.type;return a.a.createElement("div",{className:r()("tw-avatar",i,"tw-avatar--".concat(o),"tw-avatar--".concat(s),"tw-avatar--".concat(c),{"tw-avatar--outlined":l})},a.a.createElement("div",{className:"tw-avatar__content",style:{backgroundColor:n||void 0}},t))});s.Size={SMALL:o.a.SMALL,MEDIUM:o.a.MEDIUM,LARGE:o.a.LARGE},s.Theme=c.a,s.Type={THUMBNAIL:"thumbnail",ICON:"icon",EMOJI:"emoji",INITIALS:"initials"},s.defaultProps={backgroundColor:null,children:null,className:null,outlined:!1,size:s.Size.MEDIUM,theme:c.a.LIGHT,type:s.Type.THUMBNAIL},n.a=s},DGa2:function(e,n,t){},EUyq:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var i={LIGHT:"light",DARK:"dark"}},"Lw4+":function(e,n,t){"use strict";var i=t("ERkP"),a=t.n(i),l=t("O94r"),r=t.n(l),o=(t("j+zR"),t("X+z2"),function(e){var n=e.as,t=e.href,i=e.media,l=e.title,o=e.content,c=e.onClick,s=e.htmlFor,u=e.disabled,d=e.button,m=e.decision,f=e.complex,p=e.className,v=e.inverseMediaCircle,b=e.showMediaAtAllSizes,h=e.showMediaCircle;return a.a.createElement(n,{className:r()(p,"media",{"decision-complex":f,decision:m,disabled:u,"tw-option__sm-media":b}),href:t,onClick:c,htmlFor:s,disabled:u&&"button"===n},i&&a.a.createElement("div",{className:"media-left"},h?a.a.createElement("div",{className:r()("circle circle-sm text-primary",{"circle-inverse":v})},i):a.a.createElement("div",{className:"tw-option__no-media-circle"},i)),a.a.createElement("div",{className:"media-body"},a.a.createElement("div",{className:"h5"},l),o&&a.a.createElement("div",{className:"decision__content"},o)),a.a.createElement("div",{className:"media-right"},d))});o.defaultProps={as:"label",media:"",content:null,htmlFor:null,disabled:!1,button:null,onClick:null,href:null,decision:!0,complex:!1,inverseMediaCircle:!0,className:null,showMediaAtAllSizes:!1,showMediaCircle:!0},n.a=o},"X+z2":function(e,n,t){},XORh:function(e,n,t){(function(n){var t=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,r=parseInt,o="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,s=o||c||Function("return this")(),u=Object.prototype.toString,d=Math.max,m=Math.min,f=function(){return s.Date.now()};function p(e,n,t){var i,a,l,r,o,c,s=0,u=!1,p=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function M(n){var t=i,l=a;return i=a=void 0,s=n,r=e.apply(l,t)}function y(e){return s=e,o=setTimeout(E,n),u?M(e):r}function k(e){var t=e-c;return void 0===c||t>=n||t<0||p&&e-s>=l}function E(){var e=f();if(k(e))return N(e);o=setTimeout(E,function(e){var t=n-(e-c);return p?m(t,l-(e-s)):t}(e))}function N(e){return o=void 0,h&&i?M(e):(i=a=void 0,r)}function w(){var e=f(),t=k(e);if(i=arguments,a=this,c=e,t){if(void 0===o)return y(c);if(p)return o=setTimeout(E,n),M(c)}return void 0===o&&(o=setTimeout(E,n)),r}return n=b(n)||0,v(t)&&(u=!!t.leading,l=(p="maxWait"in t)?d(b(t.maxWait)||0,n):l,h="trailing"in t?!!t.trailing:h),w.cancel=function(){void 0!==o&&clearTimeout(o),s=0,i=c=a=o=void 0},w.flush=function(){return void 0===o?r:N(f())},w}function v(e){var n=typeof e;return!!e&&("object"==n||"function"==n)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(v(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=v(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var o=a.test(e);return o||l.test(e)?r(e.slice(2),o?2:8):i.test(e)?NaN:+e}e.exports=function(e,n,t){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(t)&&(i="leading"in t?!!t.leading:i,a="trailing"in t?!!t.trailing:a),p(e,n,{leading:i,maxWait:n,trailing:a})}}).call(this,t("lpmq"))},bOjP:function(e,n,t){"use strict";var i=t("97Jx"),a=t.n(i),l=t("ERkP"),r=t.n(l),o=(t("j+zR"),t("O94r")),c=t.n(o),s=t("Hi8P"),u=t("Lw4+"),d=(t("41gN"),function(e){var n=e.as,t=e.media,i=e.href,l=e.title,o=e.content,d=e.onClick,m=e.complex,f=e.disabled,p=e.showMediaAtAllSizes,v=e.showMediaCircle,b=e.className,h={as:n,media:t,href:i,title:l,content:o,complex:m,disabled:f,showMediaAtAllSizes:p,showMediaCircle:v,className:c()("tw-navigation-option",b)};return i&&(h.as="a"),r.a.createElement(u.a,a()({},h,{onClick:function(e){f||d(e)},button:r.a.createElement(s.a,{orientation:s.a.Orientation.RIGHT,disabled:f,className:"d-block"})}))});d.defaultProps={as:"button",media:null,content:null,complex:!1,onClick:null,href:void 0,disabled:!1,showMediaAtAllSizes:!1,showMediaCircle:!0,className:null},n.a=d},iRuI:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return S})),t.d(n,"default",(function(){return g}));var i=t("cxan"),a=t("HbGN"),l=t("ERkP"),r=t.n(l),o=t("ZVZ0"),c=t("Qi1R"),s=(t("1t7P"),t("jQ/y"),t("jwue"),t("z84I"),t("+oxZ"),t("j+zR"),t("O94r")),u=t.n(s),d=(t("LW0h"),t("1IsZ"),t("ddV6")),m=t.n(d),f=t("5BfY"),p=t("XORh"),v=t.n(p),b=l.useLayoutEffect,h=function(e){var n=e.ref,t=e.throttleMs,i=void 0===t?100:t,a=Object(l.useState)(null),r=m()(a,2),o=r[0],c=r[1],s=function(){n&&n.current&&c(n.current.clientWidth)};return b((function(){return window.addEventListener("resize",v()(s,i)),s(),function(){return window.removeEventListener("resize",s)}}),[]),[o]};h.THROTTLE_MS=100;var M={COLUMN:"COLUMN"},y=function(e){var n=e.items;if(!n||!n.length)return null;var t=Object(l.useRef)(null),i=h({ref:t}),a=m()(i,1)[0],o=[];return a?o=n.filter((function(e){var n=e.breakpoint;return a>=(void 0===n?0:n)})).pop():o.items=n.map((function(e){var n=e.items;return Object.values(n)})),r.a.createElement("div",{className:u()("np-size-swapper d-flex",{"flex-column":o&&o.layout===M.COLUMN}),style:{visibility:a?"visible":"hidden"},ref:t},o&&o.items)};y.Breakpoint=f.a,y.Layout=M;var k=y,E=t("bOjP"),N=(t("vrRf"),{ENTER:"Enter",SPACE:[" ","Spacebar"]}),w=t("VehP"),L=(t("6XZG"),function e(n){var t=n.className,i=n.description,a=n.disabled,l=n.href,o=n.media,c=n.onClick,s=n.size,d=n.title,m=s===e.Size.SMALL;return r.a.createElement("a",{className:u()("decision","flex-column","np-tile","text-no-decoration","text-xs-center",t,{"p-y-5 p-x-4":!m,"np-tile--small p-a-2":m,disabled:a}),href:l,onClick:a?null:c,onKeyDown:a?null:function(e){var n=e.key;(n===N.ENTER||-1<N.SPACE.indexOf(n))&&c()},"aria-label":d},r.a.createElement("div",{className:"np-tile__media d-flex justify-content-center"},o),r.a.createElement("div",{className:"np-tile__title"},d),i&&r.a.createElement("div",{className:"np-tile__description"},i))});L.Size=w.a,L.defaultProps={className:"",description:null,disabled:!1,size:L.Size.MEDIUM};var A=L,O=(t("mMO2"),function e(n){var t=n.options,i=n.presentation,a=n.type,l=n.size;if(a===e.Type.NAVIGATION){if(i===e.Presentation.LIST_BLOCK){var o=l===e.Size.SMALL,c=[{items:[],layout:k.Layout.COLUMN},{items:[],breakpoint:o?k.Breakpoint.EXTRA_SMALL:k.Breakpoint.SMALL}];return t.forEach((function(e,n){var t=e.description,i=e.disabled,a=e.href,l=e.media,s=l.block,u=l.list,d=e.onClick,m=e.title;c[0].items.push(r.a.createElement(E.a,{complex:!1,content:t,disabled:i,href:a,key:"nav-".concat(n),media:u,onClick:d,showMediaAtAllSizes:!0,title:m})),c[1].items.push(r.a.createElement(A,{className:"np-decision__tile".concat(o?"--small":""),description:t,disabled:i,href:a,key:"tile-".concat(n),media:s,onClick:d,size:o?A.Size.SMALL:A.Size.MEDIUM,title:m}))})),r.a.createElement("div",{className:u()("np-decision",{"np-decision--small":o})},r.a.createElement(k,{items:c}))}return t.map((function(e,n){var t=e.title,i=e.description,a=e.disabled,l=e.href,o=e.media.list,c=e.onClick;return r.a.createElement(E.a,{complex:!1,content:i,disabled:a,href:l,key:"nav-".concat(n),media:o,onClick:c,showMediaAtAllSizes:!0,title:t})}))}return r.a.createElement(r.a.Fragment,null)});O.Size={SMALL:w.a.SMALL,MEDIUM:w.a.MEDIUM},O.Presentation={LIST:"LIST",LIST_BLOCK:"LIST_BLOCK"},O.Type={NAVIGATION:"NAVIGATION"},O.defaultProps={presentation:O.Presentation.LIST,size:O.Size.MEDIUM,type:O.Type.NAVIGATION};var C=O,T=t("9YZu"),S=(r.a.createElement,{name:"Decision"}),I={meta:S};function g(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(i.a)({},I,t,{components:n,mdxType:"MDXLayout"}),Object(o.a)("p",null,"Decision can be used for illustrating major decisions for the user.\nBecause blocks will not wrap onto multiple lines, we suggest keeping the number of options under four when using presentation ",Object(o.a)("inlineCode",{parentName:"p"},"LIST_BLOCK"),"."),Object(o.a)(c.b,{code:'() => (\n  <Decision\n    options={[\n      {\n        description:\n          "Click here to send money to Hank Miller. Money will be sent directly to Hank Miller\'s multi-currency account.",\n        onClick: () => console.log(\'clicked\'),\n        disabled: false,\n        href: \'#href1\',\n        media: {\n          block: (\n            <img\n              src="https://transferwise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"\n              alt="alt"\n            />\n          ),\n          list: (\n            <Avatar size="md" type="initials">\n              HM\n            </Avatar>\n          ),\n        },\n        title: \'Hank Miller\',\n      },\n      {\n        description:\n          "Click here to send money to Hank Miller. Money will be sent directly to Hank Miller\'s multi-currency account.",\n        onClick: () => console.log(\'clicked\'),\n        disabled: false,\n        href: \'#href2\',\n        media: {\n          block: (\n            <img\n              src="https://transferwise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"\n              alt="alt"\n            />\n          ),\n          list: (\n            <Avatar size="md" type="initials">\n              HM\n            </Avatar>\n          ),\n        },\n        title: \'Hank Miller\',\n      },\n      {\n        description:\n          "Click here to send money to Hank Miller. Money will be sent directly to Hank Miller\'s multi-currency account.",\n        onClick: () => console.log(\'clicked\'),\n        href: \'#href3\',\n        media: {\n          block: (\n            <img\n              src="https://transferwise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"\n              alt="alt"\n            />\n          ),\n          list: (\n            <Avatar size="md" type="initials">\n              HM\n            </Avatar>\n          ),\n        },\n        disabled: false,\n        title: \'Hank Miller\',\n      },\n    ]}\n    presentation={Decision.Presentation.LIST_BLOCK}\n    type={Decision.Type.NAVIGATION}\n  />\n);\n',scope:{Decision:C,Avatar:T.a},display:"vertical",mdxType:"LiveEditorBlock"}),Object(o.a)(c.a,{componentName:"Decision",mdxType:"GeneratePropsTable"}))}g.isMDXComponent=!0},mMO2:function(e,n,t){}}]);