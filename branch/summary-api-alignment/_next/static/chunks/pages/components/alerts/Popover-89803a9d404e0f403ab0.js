_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[39],{"+KXO":function(t,e,n){var r=n("ax0f"),o=n("N9G2"),i=n("DEeE");r({target:"Object",stat:!0,forced:n("ct80")((function(){i(1)}))},{keys:function(t){return i(o(t))}})},"+kY7":function(t,e,n){var r=n("q9+l").f,o=n("8aeu"),i=n("fVMg")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},"+oxZ":function(t,e,n){var r=n("9JhN"),o=n("Ew2P"),i=n("6OVi"),c=n("WxKw");for(var a in o){var f=r[a],s=f&&f.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(u){s.forEach=i}}},"1t7P":function(t,e,n){"use strict";var r=n("ax0f"),o=n("9JhN"),i=n("VCi3"),c=n("DpO5"),a=n("1Mu/"),f=n("56Cj"),s=n("TbR9"),u=n("ct80"),l=n("8aeu"),p=n("xt6W"),h=n("dSaG"),y=n("FXyv"),d=n("N9G2"),b=n("N4z3"),g=n("CD8Q"),v=n("lhjL"),m=n("guiJ"),O=n("DEeE"),E=n("ZdBB"),P=n("7lg/"),w=n("JAL5"),L=n("GFpt"),S=n("q9+l"),T=n("4Sk5"),j=n("WxKw"),R=n("uLp7"),M=n("TN3B"),N=n("MyxS"),k=n("1odi"),x=n("HYrn"),A=n("fVMg"),D=n("TkGI"),G=n("aokA"),I=n("+kY7"),C=n("zc29"),_=n("0FSu").forEach,V=N("hidden"),B=A("toPrimitive"),F=C.set,H=C.getterFor("Symbol"),z=Object.prototype,X=o.Symbol,Y=i("JSON","stringify"),J=L.f,K=S.f,Z=P.f,q=T.f,U=M("symbols"),W=M("op-symbols"),Q=M("string-to-symbol-registry"),$=M("symbol-to-string-registry"),tt=M("wks"),et=o.QObject,nt=!et||!et.prototype||!et.prototype.findChild,rt=a&&u((function(){return 7!=m(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=J(z,e);r&&delete z[e],K(t,e,n),r&&t!==z&&K(z,e,r)}:K,ot=function(t,e){var n=U[t]=m(X.prototype);return F(n,{type:"Symbol",tag:t,description:e}),a||(n.description=e),n},it=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof X},ct=function(t,e,n){t===z&&ct(W,e,n),y(t);var r=g(e,!0);return y(n),l(U,r)?(n.enumerable?(l(t,V)&&t[V][r]&&(t[V][r]=!1),n=m(n,{enumerable:v(0,!1)})):(l(t,V)||K(t,V,v(1,{})),t[V][r]=!0),rt(t,r,n)):K(t,r,n)},at=function(t,e){y(t);var n=b(e),r=O(n).concat(lt(n));return _(r,(function(e){a&&!ft.call(n,e)||ct(t,e,n[e])})),t},ft=function(t){var e=g(t,!0),n=q.call(this,e);return!(this===z&&l(U,e)&&!l(W,e))&&(!(n||!l(this,e)||!l(U,e)||l(this,V)&&this[V][e])||n)},st=function(t,e){var n=b(t),r=g(e,!0);if(n!==z||!l(U,r)||l(W,r)){var o=J(n,r);return!o||!l(U,r)||l(n,V)&&n[V][r]||(o.enumerable=!0),o}},ut=function(t){var e=Z(b(t)),n=[];return _(e,(function(t){l(U,t)||l(k,t)||n.push(t)})),n},lt=function(t){var e=t===z,n=Z(e?W:b(t)),r=[];return _(n,(function(t){!l(U,t)||e&&!l(z,t)||r.push(U[t])})),r};(f||(R((X=function(){if(this instanceof X)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=x(t),n=function(t){this===z&&n.call(W,t),l(this,V)&&l(this[V],e)&&(this[V][e]=!1),rt(this,e,v(1,t))};return a&&nt&&rt(z,e,{configurable:!0,set:n}),ot(e,t)}).prototype,"toString",(function(){return H(this).tag})),R(X,"withoutSetter",(function(t){return ot(x(t),t)})),T.f=ft,S.f=ct,L.f=st,E.f=P.f=ut,w.f=lt,D.f=function(t){return ot(A(t),t)},a&&(K(X.prototype,"description",{configurable:!0,get:function(){return H(this).description}}),c||R(z,"propertyIsEnumerable",ft,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:X}),_(O(tt),(function(t){G(t)})),r({target:"Symbol",stat:!0,forced:!f},{for:function(t){var e=String(t);if(l(Q,e))return Q[e];var n=X(e);return Q[e]=n,$[n]=e,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(l($,t))return $[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),r({target:"Object",stat:!0,forced:!f,sham:!a},{create:function(t,e){return void 0===e?m(t):at(m(t),e)},defineProperty:ct,defineProperties:at,getOwnPropertyDescriptor:st}),r({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:ut,getOwnPropertySymbols:lt}),r({target:"Object",stat:!0,forced:u((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(d(t))}}),Y)&&r({target:"JSON",stat:!0,forced:!f||u((function(){var t=X();return"[null]"!=Y([t])||"{}"!=Y({a:t})||"{}"!=Y(Object(t))}))},{stringify:function(t,e,n){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=e,(h(e)||void 0!==t)&&!it(t))return p(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!it(e))return e}),o[1]=e,Y.apply(null,o)}});X.prototype[B]||j(X.prototype,B,X.prototype.valueOf),I(X,"Symbol"),k[V]=!0},"6OVi":function(t,e,n){"use strict";var r=n("0FSu").forEach,o=n("f4p7"),i=n("znGZ"),c=o("forEach"),a=i("forEach");t.exports=c&&a?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"7lg/":function(t,e,n){var r=n("N4z3"),o=n("ZdBB").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(e){return c.slice()}}(t):o(r(t))}},"91IA":function(t,e,n){},"97Jx":function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n.apply(this,arguments)}t.exports=n},Ew2P:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},FtHn:function(t,e,n){var r=n("ax0f"),o=n("1Mu/"),i=n("oD4t"),c=n("N4z3"),a=n("GFpt"),f=n("2sZ7");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){for(var e,n,r=c(t),o=a.f,s=i(r),u={},l=0;s.length>l;)void 0!==(n=o(r,e=s[l++]))&&f(u,e,n);return u}})},HRvm:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return l})),n.d(e,"default",(function(){return h}));var r=n("cxan"),o=n("HbGN"),i=n("ERkP"),c=n.n(i),a=n("ZVZ0"),f=n("Qi1R"),s=n("b1ss"),u=n("SP0Y"),l=(c.a.createElement,{name:"Popover"}),p={meta:l};function h(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(a.a)("wrapper",Object(r.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(a.a)(f.b,{code:'<Popover\n  title="I am the Popover title"\n  content="Lorem ipsum dolor sit amet"\n  preferredPlacement={Popover.Placement.BOTTOM}\n>\n  <Button\n    onClick={() => console.log(\'clicked\')}\n    disabled={false}\n    block={false}\n    size={Button.Size.Medium}\n  >\n    Click here to Open Popover!\n  </Button>\n</Popover>;\n',scope:{Popover:s.a,Button:u.a},mdxType:"LiveEditorBlock"}),Object(a.a)(f.a,{componentName:"Popover",mdxType:"GeneratePropsTable"}))}h.isMDXComponent=!0},LdEA:function(t,e){t.exports=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}},LxGA:function(t,e,n){},O94r:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&t.push(c)}else if("object"===i)for(var a in r)n.call(r,a)&&r[a]&&t.push(a)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},SP0Y:function(t,e,n){"use strict";var r=n("97Jx"),o=n.n(r),i=n("m3Bd"),c=n.n(i),a=n("ERkP"),f=n.n(a),s=n("O94r"),u=n.n(s),l=(n("j+zR"),n("91IA"),{PRIMARY:"primary",PAY:"pay",SECONDARY:"secondary",DANGER:"danger",LINK:"link"}),p=n("VehP"),h=function(t){var e=t.className,n=t.block,r=t.children,i=t.disabled,a=t.htmlType,s=t.loading,h=t.size,y=t.type,d=c()(t,["className","block","children","disabled","htmlType","loading","size","type"]),b=u()("btn btn-".concat(h),"tw-btn tw-btn-".concat(h),{"btn-loading":s,"btn-primary":y===l.PRIMARY,"btn-success":y===l.PAY,"btn-default":y===l.SECONDARY,"btn-danger":y===l.DANGER,"btn-link":y===l.LINK,"btn-block tw-btn-block":n},e);return p.a.EXTRA_SMALL,f.a.createElement("button",o()({type:a,className:b,disabled:i||s},d),r,s&&f.a.createElement("span",{className:u()("btn-loader",{"m-l-2":!n})}))};h.Type=l,h.Size={EXTRA_SMALL:p.a.EXTRA_SMALL,SMALL:p.a.SMALL,MEDIUM:p.a.MEDIUM,LARGE:p.a.LARGE},h.defaultProps={className:null,size:h.Size.MEDIUM,type:h.Type.PRIMARY,disabled:!1,block:!1,loading:!1,htmlType:"button"};e.a=h},TkGI:function(t,e,n){var r=n("fVMg");e.f=r},VehP:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},aokA:function(t,e,n){var r=n("PjZX"),o=n("8aeu"),i=n("TkGI"),c=n("q9+l").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},b1ss:function(t,e,n){"use strict";n.d(e,"a",(function(){return B}));n("1t7P"),n("LW0h"),n("jwue"),n("daRM"),n("FtHn"),n("+KXO"),n("7x/C"),n("OZaJ"),n("DZ+c"),n("+oxZ");var r=n("VrFO"),o=n.n(r),i=n("Y9Ll"),c=n.n(i),a=n("1Pcy"),f=n.n(a),s=n("5Yy7"),u=n.n(s),l=n("N+ot"),p=n.n(l),h=n("AuHH"),y=n.n(h),d=n("KEM+"),b=n.n(d),g=n("ERkP"),v=n.n(g),m=n("O94r"),O=n.n(m),E=n("eKd8");function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var w=E.b.TOP,L=E.b.RIGHT,S=E.b.BOTTOM,T=E.b.BOTTOM_RIGHT,j=E.b.BOTTOM_LEFT,R=E.b.LEFT,M=E.b.RIGHT_TOP,N=E.b.LEFT_TOP;function k(t,e){return t?function(t,e,n){var r=x(e,L,n),o=x(e,R,n);if(!r.overflowsRight&&!o.overflowsLeft)return t;if(r.overflowsRight&&o.overflowsLeft)return function(t,e){var n=x(t,S,e);return n.overflowsLeft&&!n.overflowsRight?T:n.overflowsRight&&!n.overflowsLeft?j:S}(e,n);if(r.overflowsRight){if(t===L)return R;if(t===M)return N;if(t===S||t===T)return j}if(o.overflowsLeft){if(t===R)return L;if(t===N)return M;if(t===S||t===j)return T}return t}(e,t,{right:document.documentElement.clientWidth,left:0}):""}function x(t,e,n){var r=function(t,e){return t?A(t,e,t.previousElementSibling.getBoundingClientRect()):{}}(t,e);return{overflowsRight:r.right>n.right,overflowsLeft:r.left<n.left}}function A(t,e,n){var r=t.offsetWidth,o=t.offsetHeight;return e===w?D({top:n.top-o,left:n.left+n.width/2-r/2},r):e===L?D({top:n.top+n.height/2-o/2,left:n.left+n.width},r):e===S?D({top:n.top+n.height,left:n.left+n.width/2-r/2},r):e===T?D({top:n.top+n.height,left:n.left+n.width/2-30},r):e===j?D({top:n.top+n.height,left:n.left+n.width/2-r+30},r):e===R?D({top:n.top+n.height/2-o/2,left:n.left-r},r):e===M?D({top:n.top+n.height/2-30,left:n.left+n.width},r):e===N?D({top:n.top+n.height/2-30,left:n.left-r},r):{}}function D(t,e){return function(t){for(var e,n=1;n<arguments.length;n++)e=null==arguments[n]?{}:arguments[n],n%2?P(Object(e),!0).forEach((function(n){b()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):P(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}));return t}({right:t.left+e},t)}var G=n("6gor"),I=n("XksX");n("LxGA");function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _(t){for(var e,n=1;n<arguments.length;n++)e=null==arguments[n]?{}:arguments[n],n%2?C(Object(e),!0).forEach((function(n){b()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):C(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}));return t}function V(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=y()(t);if(e){var o=y()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p()(this,n)}}var B=function(t){function e(){var t;return o()(this,e),t=n.call(this),b()(f()(t),"closePopoverOnOutsideClick",(function(e){var n=t.popoverElement.contains(e.target),r=t.triggerElement.contains(e.target);n||r||t.close()})),b()(f()(t),"handleKeyUp",(function(e){"BUTTON"!==e.target.nodeName&&e.keyCode===G.a.ENTER&&t.toggle()})),b()(f()(t),"open",(function(){t.setState({isOpen:!0}),Object(I.a)(),document.addEventListener("click",t.closePopoverOnOutsideClick,!0)})),b()(f()(t),"close",(function(){t.setState({isOpen:!1}),Object(I.b)(),document.removeEventListener("click",t.closePopoverOnOutsideClick,!0)})),b()(f()(t),"toggle",(function(){return t.state.isOpen?t.close():t.open()})),b()(f()(t),"createTrigger",(function(){var e=t.props,n=e.children,r=e.containsFocusableElement,o=t.state.isOpen,i=function(t){return function(t){return"string"==typeof t.type}(t)?t:v.a.createElement("span",null,t)}(n);return Object(g.cloneElement)(i,_(_({},!r&&{tabIndex:0,role:"button","aria-expanded":o}),{},{"data-toggle":"popover",onClick:t.toggle,onKeyUp:t.handleKeyUp,ref:function(e){t.triggerElement=e}}))})),b()(f()(t),"style",(function(e){return t.props.classNames[e]||e})),t.state={isOpen:!1},t}u()(e,t);var n=V(e);return c()(e,[{key:"componentWillUnmount",value:function(){this.close()}},{key:"render",value:function(){var t=this,e=this.props,n=e.title,r=e.content,o=e.preferredPlacement,i=this.state.isOpen,c=this.createTrigger(),a=k(this.popoverElement,o),f=O()("tw-popover",this.style("popover"),this.style("animate"),this.style("in"),b()({},this.style("scale-down"),!i),this.style(a)),s=function(t,e){if(!t)return{};var n=t.previousElementSibling;return A(t,e,{top:n.offsetTop,left:n.offsetLeft,width:n.offsetWidth,height:n.offsetHeight})}(this.popoverElement,a),u=s.top,l=s.left;return v.a.createElement(v.a.Fragment,null,c,v.a.createElement("div",{className:f,ref:function(e){t.popoverElement=e},style:{top:u,left:l}},n&&v.a.createElement("h3",{className:O()(this.style("popover-title"))},n),v.a.createElement("p",{className:O()(this.style("popover-content"),this.style("m-b-0"))},"function"==typeof r?r({isOpen:i,close:this.close.bind(this)}):r)))}}]),e}(g.Component);b()(B,"Placement",E.b),B.defaultProps={title:null,containsFocusableElement:!1,preferredPlacement:B.Placement.RIGHT,classNames:{}}},daRM:function(t,e,n){var r=n("ax0f"),o=n("ct80"),i=n("N4z3"),c=n("GFpt").f,a=n("1Mu/"),f=o((function(){c(1)}));r({target:"Object",stat:!0,forced:!a||f,sham:!a},{getOwnPropertyDescriptor:function(t,e){return c(i(t),e)}})},"j+zR":function(t,e){t.exports=function(t,e){return function(n,r,o){if("function"!==typeof t)return new Error("Invalid react-required-if prop type supplied to "+o+". Validation failed.");if("function"!==typeof e)return new Error("Invalid react-required-if condition supplied to "+o+". Validation failed.");var i=e(n)?t.isRequired:t;return i.apply(this,arguments)}}},jwue:function(t,e,n){"use strict";var r=n("ax0f"),o=n("6OVi");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},m3Bd:function(t,e,n){var r=n("LdEA");t.exports=function(t,e){if(null==t)return{};var n,o,i=r(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(o=0;o<c.length;o++)n=c[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}},qh8L:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alerts/Popover",function(){return n("HRvm")}])}},[["qh8L",0,1,2,3,5,7,9,4]]]);