_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[83],{"/4xM":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/overlays/Modal",function(){return n("LR2r")}])},"1Pcy":function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},"2G9S":function(t,e,n){"use strict";var o=n("ax0f"),r=n("ct80"),i=n("xt6W"),a=n("dSaG"),c=n("N9G2"),l=n("tJVe"),s=n("2sZ7"),u=n("aoZ+"),p=n("GJtw"),f=n("fVMg"),d=n("T+0C"),h=f("isConcatSpreadable"),m=d>=51||!r((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),y=p("concat"),b=function(t){if(!a(t))return!1;var e=t[h];return void 0!==e?!!e:i(t)};o({target:"Array",proto:!0,forced:!m||!y},{concat:function(t){var e,n,o,r,i,a=c(this),p=u(a,0),f=0;for(e=-1,o=arguments.length;e<o;e++)if(b(i=-1===e?a:arguments[e])){if(f+(r=l(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<r;n++,f++)n in i&&s(p,f,i[n])}else{if(f>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(p,f++,i)}return p.length=f,p}})},"2lU4":function(t,e,n){},"5Yy7":function(t,e,n){var o=n("695J");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},"695J":function(t,e){function n(e,o){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,o)}t.exports=n},"6gor":function(t,e,n){"use strict";e.a={DOWN:40,UP:38,LEFT:37,RIGHT:39,ENTER:13,ESCAPE:27,TAB:9,SPACE:32,BACKSPACE:8}},"91IA":function(t,e,n){},"97Jx":function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},n.apply(this,arguments)}t.exports=n},AuHH:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},LR2r:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return G})),n.d(e,"default",(function(){return J}));var o=n("cxan"),r=n("HbGN"),i=n("ERkP"),a=n.n(i),c=n("ZVZ0"),l=n("Qi1R"),s=(n("2G9S"),n("vrRf"),n("7x/C"),n("OZaJ"),n("KqXw"),n("DZ+c"),n("Ysgh"),n("97Jx")),u=n.n(s),p=n("m3Bd"),f=n.n(p),d=n("VrFO"),h=n.n(d),m=n("Y9Ll"),y=n.n(m),b=n("1Pcy"),v=n.n(b),E=n("5Yy7"),g=n.n(E),x=n("N+ot"),w=n.n(x),O=n("AuHH"),R=n.n(O),C=n("KEM+"),S=n.n(C),k=n("O94r"),M=n.n(k),N=n("05Xt"),A=n("/Vl7"),P=n("6gor"),L=(n("2lU4"),n("bRoR")),T=n("VehP"),_=n("P8nL");function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=R()(t);if(e){var r=R()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return w()(this,n)}}var z=function(t){function e(){var t;h()(this,e);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return t=n.call.apply(n,[this].concat(r)),S()(v()(t),"onEscape",(function(e){var n=t.props.onClose;e&&(e.keyCode===P.a.ESCAPE||"Escape"===e.key)&&n&&n(e)})),S()(v()(t),"handleOnClick",(function(e){var n=t.props,o=n.onClose,r=n.closeOnClick;e.target===e.currentTarget&&o&&r&&o(e)})),S()(v()(t),"handleOnEnter",(function(){Object(L.a)()})),S()(v()(t),"handleOnClose",(function(){Object(L.b)()})),S()(v()(t),"checkSpecialClasses",(function(e){return-1!==t.props.className.split(" ").indexOf(e)})),t}g()(e,t);var n=j(e);return y()(e,[{key:"componentDidMount",value:function(){this.modalDialog&&this.modalDialog.focus(),document.addEventListener("keydown",this.onEscape)}},{key:"componentWillUnmount",value:function(){this.props.open&&Object(L.b)(),document.removeEventListener("keydown",this.onEscape)}},{key:"render",value:function(){var t=this,e=this.props,n=e.title,o=e.body,r=e.footer,i=e.onClose,c=e.className,l=e.open,s=(e.size,e.closeOnClick,f()(e,["title","body","footer","onClose","className","open","size","closeOnClick"])),p=this.checkSpecialClasses("compact"),d=this.checkSpecialClasses("no-divider");return a.a.createElement(_.a,{open:l},a.a.createElement(N.a,{appear:!0,in:l,onEnter:this.handleOnEnter,onExited:this.handleOnClose,classNames:{enterDone:"in"},timeout:150,unmountOnExit:!0},a.a.createElement("div",u()({className:"tw-modal fade ".concat(c),tabIndex:"-1",role:"presentation",ref:function(e){t.modalDialog=e},onKeyDown:this.onEscape,onClick:this.handleOnClick},s),a.a.createElement("div",{className:M()("tw-modal-dialog",S()({},"tw-modal-".concat(this.props.size),this.props.size)),"aria-modal":!0,role:"dialog"},a.a.createElement("div",{className:M()("tw-modal-content",{"tw-modal-compact":p,"tw-modal-no-title":!n})},a.a.createElement("div",{className:M()("tw-modal-header",{"modal--withoutborder":!n||d})},a.a.createElement("h4",{className:"tw-modal-title"},n),a.a.createElement("button",{type:"button",onClick:i,className:"close","aria-label":"close"},a.a.createElement(A.h,{size:24}))),a.a.createElement("div",{className:"tw-modal-body"},o),r&&a.a.createElement("div",{className:M()("tw-modal-footer",{"modal--withoutborder":d})},r))))))}}]),e}(i.Component);S()(z,"Size",T.a),z.defaultProps={title:null,footer:null,size:z.Size.MEDIUM,className:"",closeOnClick:!0};var I=z,D=n("SP0Y"),G=(a.a.createElement,{name:"Modal"}),Y={meta:G};function J(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(c.a)("wrapper",Object(o.a)({},Y,n,{components:e,mdxType:"MDXLayout"}),Object(c.a)(l.b,{code:'() => {\n  const [open, setOpen] = React.useState(false);\n  return (\n    <>\n      <Button onClick={() => setOpen(true)}>Open Modal</Button>\n      <Modal\n        body="Lorem Ipsum is simply dummy text of the printing 1500s, when an"\n        open={open}\n        onClose={() => setOpen(false)}\n        size={Modal.Size.MEDIUM}\n        title="title"\n        className=""\n        footer={\n          <Button block onClick={() => alert(\'clicked\')}>\n            Action\n          </Button>\n        }\n        closeOnClick\n      />\n    </>\n  );\n};\n',scope:{Modal:I,Button:D.a},mdxType:"LiveEditorBlock"}),Object(c.a)(l.a,{componentName:"Modal",mdxType:"GeneratePropsTable"}))}J.isMDXComponent=!0},"N+ot":function(t,e,n){var o=n("T0aG"),r=n("1Pcy");t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?r(t):e}},OZaJ:function(t,e,n){var o=n("ax0f"),r=n("VCi3"),i=n("hpdy"),a=n("FXyv"),c=n("dSaG"),l=n("guiJ"),s=n("zh11"),u=n("ct80"),p=r("Reflect","construct"),f=u((function(){function t(){}return!(p((function(){}),[],t)instanceof t)})),d=!u((function(){p((function(){}))})),h=f||d;o({target:"Reflect",stat:!0,forced:h,sham:h},{construct:function(t,e){i(t),a(e);var n=arguments.length<3?t:i(arguments[2]);if(d&&!f)return p(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var o=[null];return o.push.apply(o,e),new(s.apply(t,o))}var r=n.prototype,u=l(c(r)?r:Object.prototype),h=Function.apply.call(t,u,e);return c(h)?h:u}})},Qzre:function(t,e,n){var o=n("FXyv"),r=n("hpdy"),i=n("fVMg")("species");t.exports=function(t,e){var n,a=o(t).constructor;return void 0===a||void 0==(n=o(a)[i])?e:r(n)}},SP0Y:function(t,e,n){"use strict";var o=n("97Jx"),r=n.n(o),i=n("m3Bd"),a=n.n(i),c=n("ERkP"),l=n.n(c),s=n("O94r"),u=n.n(s),p=(n("j+zR"),n("91IA"),{PRIMARY:"primary",PAY:"pay",SECONDARY:"secondary",DANGER:"danger",LINK:"link"}),f=n("VehP"),d=function(t){var e=t.className,n=t.block,o=t.children,i=t.disabled,c=t.htmlType,s=t.loading,d=t.size,h=t.type,m=a()(t,["className","block","children","disabled","htmlType","loading","size","type"]),y=u()("btn btn-".concat(d),"tw-btn tw-btn-".concat(d),{"btn-loading":s,"btn-primary":h===p.PRIMARY,"btn-success":h===p.PAY,"btn-default":h===p.SECONDARY,"btn-danger":h===p.DANGER,"btn-link":h===p.LINK,"btn-block tw-btn-block":n},e);return f.a.EXTRA_SMALL,l.a.createElement("button",r()({type:c,className:y,disabled:i||s},m),o,s&&l.a.createElement("span",{className:u()("btn-loader",{"m-l-2":!n})}))};d.Type=p,d.Size={EXTRA_SMALL:f.a.EXTRA_SMALL,SMALL:f.a.SMALL,MEDIUM:f.a.MEDIUM,LARGE:f.a.LARGE},d.defaultProps={className:null,size:d.Size.MEDIUM,type:d.Type.PRIMARY,disabled:!1,block:!1,loading:!1,htmlType:"button"};e.a=d},T0aG:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},VrFO:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},Y9Ll:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}},Ysgh:function(t,e,n){"use strict";var o=n("lbJE"),r=n("jl0/"),i=n("FXyv"),a=n("cww3"),c=n("Qzre"),l=n("4/YM"),s=n("tJVe"),u=n("34wW"),p=n("QsUS"),f=n("ct80"),d=[].push,h=Math.min,m=!f((function(){return!RegExp(4294967295,"y")}));o("split",2,(function(t,e,n){var o;return o="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var o=String(a(this)),i=void 0===n?4294967295:n>>>0;if(0===i)return[];if(void 0===t)return[o];if(!r(t))return e.call(o,t,i);for(var c,l,s,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,m=new RegExp(t.source,f+"g");(c=p.call(m,o))&&!((l=m.lastIndex)>h&&(u.push(o.slice(h,c.index)),c.length>1&&c.index<o.length&&d.apply(u,c.slice(1)),s=c[0].length,h=l,u.length>=i));)m.lastIndex===c.index&&m.lastIndex++;return h===o.length?!s&&m.test("")||u.push(""):u.push(o.slice(h)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=a(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,r,n):o.call(String(r),e,n)},function(t,r){var a=n(o,t,this,r,o!==e);if(a.done)return a.value;var p=i(t),f=String(this),d=c(p,RegExp),y=p.unicode,b=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(m?"y":"g"),v=new d(m?p:"^(?:"+p.source+")",b),E=void 0===r?4294967295:r>>>0;if(0===E)return[];if(0===f.length)return null===u(v,f)?[f]:[];for(var g=0,x=0,w=[];x<f.length;){v.lastIndex=m?x:0;var O,R=u(v,m?f:f.slice(x));if(null===R||(O=h(s(v.lastIndex+(m?0:x)),f.length))===g)x=l(f,x,y);else{if(w.push(f.slice(g,x)),w.length===E)return w;for(var C=1;C<=R.length-1;C++)if(w.push(R[C]),w.length===E)return w;x=g=O}}return w.push(f.slice(g)),w}]}),!m)},bRoR:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o=function(){document.body.classList.add("no-scroll")},r=function(){document.body.classList.remove("no-scroll")}},"j+zR":function(t,e){t.exports=function(t,e){return function(n,o,r){if("function"!==typeof t)return new Error("Invalid react-required-if prop type supplied to "+r+". Validation failed.");if("function"!==typeof e)return new Error("Invalid react-required-if condition supplied to "+r+". Validation failed.");var i=e(n)?t.isRequired:t;return i.apply(this,arguments)}}},vrRf:function(t,e,n){"use strict";var o=n("ax0f"),r=n("H17f").indexOf,i=n("f4p7"),a=n("znGZ"),c=[].indexOf,l=!!c&&1/[1].indexOf(1,-0)<0,s=i("indexOf"),u=a("indexOf",{ACCESSORS:!0,1:0});o({target:"Array",proto:!0,forced:l||!s||!u},{indexOf:function(t){return l?c.apply(this,arguments)||0:r(this,t,arguments.length>1?arguments[1]:void 0)}})},zh11:function(t,e,n){"use strict";var o=n("hpdy"),r=n("dSaG"),i=[].slice,a={},c=function(t,e,n){if(!(e in a)){for(var o=[],r=0;r<e;r++)o[r]="a["+r+"]";a[e]=Function("C,a","return new C("+o.join(",")+")")}return a[e](t,n)};t.exports=Function.bind||function(t){var e=o(this),n=i.call(arguments,1),a=function(){var o=n.concat(i.call(arguments));return this instanceof a?c(e,o.length,o):e.apply(t,o)};return r(e.prototype)&&(a.prototype=e.prototype),a}}},[["/4xM",0,1,2,6,3,5,7,8,11,4]]]);