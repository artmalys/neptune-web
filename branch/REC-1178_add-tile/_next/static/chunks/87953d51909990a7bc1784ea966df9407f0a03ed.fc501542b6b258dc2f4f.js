(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{"41gN":function(e,t,n){},"6XZG":function(e,t,n){},"9YZu":function(e,t,n){"use strict";var i=n("ERkP"),a=n.n(i),o=n("O94r"),l=n.n(o),c=n("VehP"),r=n("EUyq"),s=(n("DGa2"),function(e){var t=e.backgroundColor,n=e.children,i=e.className,o=e.outlined,c=e.size,r=e.theme,s=e.type;return a.a.createElement("div",{className:l()("tw-avatar",i,"tw-avatar--".concat(c),"tw-avatar--".concat(s),"tw-avatar--".concat(r),{"tw-avatar--outlined":o})},a.a.createElement("div",{className:"tw-avatar__content",style:{backgroundColor:t||void 0}},n))});s.Size={SMALL:c.a.SMALL,MEDIUM:c.a.MEDIUM,LARGE:c.a.LARGE},s.Theme=r.a,s.Type={THUMBNAIL:"thumbnail",ICON:"icon",EMOJI:"emoji",INITIALS:"initials"},s.defaultProps={backgroundColor:null,children:null,className:null,outlined:!1,size:s.Size.MEDIUM,theme:r.a.LIGHT,type:s.Type.THUMBNAIL},t.a=s},DCNs:function(e,t,n){"use strict";n("1t7P"),n("jQ/y");var i=n("ERkP"),a=n.n(i),o=n("O94r"),l=n.n(o),c=n("VehP"),r=n("6gor"),s=(n("6XZG"),function e(t){var n=t.className,i=t.description,o=t.disabled,c=t.href,s=t.media,d=t.onClick,u=t.size,m=t.title,p=u===e.Size.SMALL;return a.a.createElement("div",{className:l()("decision","flex-column","m-x-1","m-b-4","media","np-tile","text-xs-center",n,{"np-tile--large p-y-5 p-x-4":!p,"np-tile--small p-a-2":p,disabled:o})},a.a.createElement("div",{className:"np-tile__media d-flex justify-content-center"},s),a.a.createElement("a",{href:c,className:"np-tile__link text-no-decoration",onClick:o?null:d,onKeyDown:function(e){(e.keyCode===r.a.ENTER||e.keyCode===r.a.SPACE||32===e.code)&&d()}},a.a.createElement("div",{className:l()({h5:p,h4:!p})},m)),i&&a.a.createElement("div",{className:"np-tile__description"},i))});s.Size=c.a,s.defaultProps={className:"",description:null,disabled:!1,size:s.Size.LARGE},t.a=s},DGa2:function(e,t,n){},EUyq:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i={LIGHT:"light",DARK:"dark"}},"Lw4+":function(e,t,n){"use strict";var i=n("ERkP"),a=n.n(i),o=n("O94r"),l=n.n(o),c=(n("j+zR"),n("X+z2"),function(e){var t=e.as,n=e.href,i=e.media,o=e.title,c=e.content,r=e.onClick,s=e.htmlFor,d=e.disabled,u=e.button,m=e.decision,p=e.complex,f=e.className,b=e.inverseMediaCircle,v=e.showMediaAtAllSizes,h=e.showMediaCircle;return a.a.createElement(t,{className:l()(f,"media",{"decision-complex":p,decision:m,disabled:d,"tw-option__sm-media":v}),href:n,onClick:r,htmlFor:s},i&&a.a.createElement("div",{className:"media-left"},h?a.a.createElement("div",{className:l()("circle circle-sm text-primary",{"circle-inverse":b})},i):a.a.createElement("div",{className:"tw-option__no-media-circle"},i)),a.a.createElement("div",{className:"media-body"},a.a.createElement("div",{className:"h5"},o),c),a.a.createElement("div",{className:"media-right"},u))});c.defaultProps={as:"label",media:"",content:null,htmlFor:null,disabled:!1,button:null,onClick:null,href:null,decision:!0,complex:!1,inverseMediaCircle:!0,className:null,showMediaAtAllSizes:!1,showMediaCircle:!0},t.a=c},"X+z2":function(e,t,n){},XORh:function(e,t,n){(function(t){var n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,o=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,r="object"==typeof self&&self&&self.Object===Object&&self,s=c||r||Function("return this")(),d=Object.prototype.toString,u=Math.max,m=Math.min,p=function(){return s.Date.now()};function f(e,t,n){var i,a,o,l,c,r,s=0,d=!1,f=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=a;return i=a=void 0,s=t,l=e.apply(o,n)}function O(e){return s=e,c=setTimeout(N,t),d?y(e):l}function k(e){var n=e-r;return void 0===r||n>=t||n<0||f&&e-s>=o}function N(){var e=p();if(k(e))return M(e);c=setTimeout(N,function(e){var n=t-(e-r);return f?m(n,o-(e-s)):n}(e))}function M(e){return c=void 0,h&&i?y(e):(i=a=void 0,l)}function j(){var e=p(),n=k(e);if(i=arguments,a=this,r=e,n){if(void 0===c)return O(r);if(f)return c=setTimeout(N,t),y(r)}return void 0===c&&(c=setTimeout(N,t)),l}return t=v(t)||0,b(n)&&(d=!!n.leading,o=(f="maxWait"in n)?u(v(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),j.cancel=function(){void 0!==c&&clearTimeout(c),s=0,i=r=a=c=void 0},j.flush=function(){return void 0===c?l:M(p())},j}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var c=a.test(e);return c||o.test(e)?l(e.slice(2),c?2:8):i.test(e)?NaN:+e}e.exports=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),f(e,t,{leading:i,maxWait:t,trailing:a})}}).call(this,n("lpmq"))},bOjP:function(e,t,n){"use strict";var i=n("97Jx"),a=n.n(i),o=n("ERkP"),l=n.n(o),c=(n("j+zR"),n("O94r")),r=n.n(c),s=n("Hi8P"),d=n("Lw4+"),u=(n("41gN"),function(e){var t=e.as,n=e.media,i=e.href,o=e.title,c=e.content,u=e.onClick,m=e.complex,p=e.disabled,f=e.showMediaAtAllSizes,b=e.showMediaCircle,v=e.className,h={as:t,media:n,href:i,title:o,content:c,complex:m,disabled:p,showMediaAtAllSizes:f,showMediaCircle:b,className:r()("tw-navigation-option",v)};return i&&(h.as="a"),l.a.createElement(d.a,a()({},h,{onClick:function(e){p||u(e)},button:l.a.createElement(s.a,{orientation:s.a.Orientation.RIGHT,disabled:p})}))});u.defaultProps={as:"button",media:null,content:null,complex:!1,onClick:null,href:void 0,disabled:!1,showMediaAtAllSizes:!1,showMediaCircle:!0,className:null},t.a=u},iRuI:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return L})),n.d(t,"default",(function(){return w}));var i=n("cxan"),a=n("HbGN"),o=n("ERkP"),l=n.n(o),c=n("ZVZ0"),r=n("Qi1R"),s=(n("1t7P"),n("jQ/y"),n("jwue"),n("z84I"),n("+oxZ"),n("j+zR"),n("LW0h"),n("M+/F"),n("ddV6")),d=n.n(s),u=n("O94r"),m=n.n(u),p=n("5BfY"),f=n("XORh"),b=n.n(f),v=function(e){var t=e.ref,n=e.debouncingDelay,i=void 0===n?100:n,a=Object(o.useState)(null),l=d()(a,2),c=l[0],r=l[1],s=function(){t&&t.current&&r(t.current.clientWidth)};return Object(o.useLayoutEffect)((function(){return window.addEventListener("resize",b()(s,i)),s(),function(){return window.removeEventListener("resize",s)}}),[]),[c]};v.DEBOUNCE_DELAY=100;var h={COLUMN:"COLUMN"},y=function(e){var t=e.items;if(!t||!t.length)return null;var n=Object(o.useRef)(null),i=v({ref:n}),a=d()(i,1)[0],c=t.filter((function(e){var t=e.breakpoint;return a>=(void 0===t?0:t)})).slice(-1)[0];return l.a.createElement("div",{className:m()("np-size-swapper d-flex",{"flex-column":c&&c.layout===h.COLUMN}),ref:n},c&&c.items)};y.Breakpoint=p.a,y.Layout=h;var O=y,k=n("bOjP"),N=n("DCNs"),M=(n("mMO2"),function e(t){var n=t.options,i=t.presentation;if(t.type===e.Type.NAVIGATION){var a=e.Presentation,o=a.LIST_BLOCK,c=a.LIST_BLOCK_SMALL;if(i===o||i===c){var r=[{items:[],layout:O.Layout.COLUMN},{items:[],breakpoint:O.Breakpoint.MEDIUM}];return n.forEach((function(e){var t=e.description,n=e.disabled,a=e.href,o=e.media,s=o.block,d=o.list,u=e.onClick,m=e.title;r[0].items.push(l.a.createElement(k.a,{content:t,disabled:n,href:a,key:"nav-".concat(a),media:d,onClick:u,title:m})),r[1].items.push(l.a.createElement(N.a,{description:t,disabled:n,href:a,key:"tile-".concat(a),media:s,onClick:u,size:i===c?N.a.Size.SMALL:N.a.Size.LARGE,title:m}))})),l.a.createElement("div",{className:"np-decision"},l.a.createElement(O,{items:r}))}return n.map((function(e){var t=e.title,n=e.description,i=e.disabled,a=e.href,o=e.media.list,c=e.onClick;return l.a.createElement(k.a,{complex:!1,content:n,disabled:i,href:a,key:"nav-".concat(a),media:o,onClick:c,title:t})}))}return l.a.createElement(l.a.Fragment,null)});M.Presentation={LIST:"LIST",LIST_BLOCK:"LIST_BLOCK",LIST_BLOCK_SMALL:"LIST_BLOCK_SMALL"},M.Type={NAVIGATION:"NAVIGATION"},M.defaultProps={presentation:M.Presentation.LIST,type:M.Type.NAVIGATION};var j=M,C=n("9YZu"),L=(l.a.createElement,{name:"Decision"}),g={meta:L};function w(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.a)("wrapper",Object(i.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)(r.b,{code:'() => (\n  <Decision\n    options={[\n      {\n        description:\n          "Click here to send money to Hank Miller. Money will be sent directly to Han Miller\'s multi-currency account.",\n        onClick: () => console.log(\'clicked\'),\n        disabled: false,\n        href: \'#href1\',\n        media: {\n          block: (\n            <img\n              src="https://transferwise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"\n              alt="alt"\n            />\n          ),\n          list: (\n            <Avatar size="md" type="initials">\n              HM\n            </Avatar>\n          ),\n        },\n        title: \'Hank Miller\',\n      },\n      {\n        description:\n          "Click here to send money to Hank Miller. Money will be sent directly to Han Miller\'s multi-currency account.",\n        onClick: () => console.log(\'clicked\'),\n        disabled: false,\n        href: \'#href2\',\n        media: {\n          block: (\n            <img\n              src="https://transferwise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"\n              alt="alt"\n            />\n          ),\n          list: (\n            <Avatar size="md" type="initials">\n              HM\n            </Avatar>\n          ),\n        },\n        title: \'Hank Miller\',\n      },\n      {\n        description:\n          "Click here to send money to Hank Miller. Money will be sent directly to Han Miller\'s multi-currency account.",\n        onClick: () => console.log(\'clicked\'),\n        href: \'#href3\',\n        media: {\n          block: (\n            <img\n              src="https://transferwise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"\n              alt="alt"\n            />\n          ),\n          list: (\n            <Avatar size="md" type="initials">\n              HM\n            </Avatar>\n          ),\n        },\n        disabled: false,\n        title: \'Hank Miller\',\n      },\n    ]}\n    presentation={Decision.Presentation.LIST_BLOCK}\n    type={Decision.Type.NAVIGATION}\n  />\n);\n',scope:{Decision:j,Avatar:C.a},display:"vertical",mdxType:"LiveEditorBlock"}),Object(c.a)(r.a,{componentName:"Decision",mdxType:"GeneratePropsTable"}),Object(c.a)("h2",{id:"usage"},"Usage"),Object(c.a)("p",null,"Decision can be used for illustrating major decisions for the user.\nIt is encouraged to keep the number of options in ",Object(c.a)("inlineCode",{parentName:"p"},"options")," under four."),Object(c.a)("p",null,"The ",Object(c.a)("inlineCode",{parentName:"p"},"type")," prop handles the kind of elements to display for each presentation style"),Object(c.a)("h3",{id:"navigation-type"},"Navigation type"),Object(c.a)("table",{className:"docs-table table table-condensed"},Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"Presentation"),Object(c.a)("th",null,"Mobile"),Object(c.a)("th",null,"Desktop"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,j.Presentation.LIST),Object(c.a)("td",null,Object(c.a)(k.a,{id:"navigation-option",name:"navigation-option",className:"custom-navigation-option",title:"Navigation option",content:"Button and icon are vertically centered.",onClick:function(){return alert("clicked")},media:Object(c.a)(C.a,{size:"md",type:"initials",mdxType:"Avatar"},"HM"),showMediaAtAllSizes:!1,showMediaCircle:!0,mdxType:"NavigationOption"})),Object(c.a)("td",null,Object(c.a)(k.a,{id:"navigation-option",name:"navigation-option",className:"custom-navigation-option",title:"Navigation option",content:"Button and icon are vertically centered.",onClick:function(){return alert("clicked")},media:Object(c.a)(C.a,{size:"md",type:"initials",mdxType:"Avatar"},"HM"),showMediaAtAllSizes:!1,showMediaCircle:!0,mdxType:"NavigationOption"}))),Object(c.a)("tr",null,Object(c.a)("td",null,j.Presentation.LIST_BLOCK),Object(c.a)("td",null,Object(c.a)(k.a,{id:"navigation-option",name:"navigation-option",className:"custom-navigation-option",title:"Navigation option",content:"Button and icon are vertically centered.",onClick:function(){return alert("clicked")},media:Object(c.a)(C.a,{size:"md",type:"initials",mdxType:"Avatar"},"HM"),showMediaAtAllSizes:!1,showMediaCircle:!0,mdxType:"NavigationOption"})),Object(c.a)("td",null,Object(c.a)(N.a,{media:Object(c.a)("img",{src:"https://transferwise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg",alt:"illustration",style:{width:"100%"}}),size:N.a.Size.LARGE,title:"Send money",content:"Content",onClick:function(){return alert("onClick")},mdxType:"Tile"}))),Object(c.a)("tr",null,Object(c.a)("td",null,j.Presentation.LIST_BLOCK_SMALL),Object(c.a)("td",null,Object(c.a)(k.a,{id:"navigation-option",name:"navigation-option",className:"custom-navigation-option",title:"Navigation option",content:"Button and icon are vertically centered.",onClick:function(){return alert("clicked")},media:Object(c.a)(C.a,{size:"md",type:"initials",mdxType:"Avatar"},"HM"),showMediaAtAllSizes:!1,showMediaCircle:!0,mdxType:"NavigationOption"})),Object(c.a)("td",null,Object(c.a)(N.a,{media:Object(c.a)("img",{src:"https://transferwise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg",alt:"illustration",style:{width:"100%"}}),size:N.a.Size.SMALL,title:"Send money",content:"Content",onClick:function(){return alert("onClick")},mdxType:"Tile"}))))))}w.isMDXComponent=!0},mMO2:function(e,t,n){}}]);