_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[45],{"/ZZR":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/DefinitionList",function(){return e("t7/X")}])},"0FSu":function(n,t,e){var r=e("IRf+"),i=e("g6a+"),o=e("N9G2"),a=e("tJVe"),u=e("aoZ+"),c=[].push,f=function(n){var t=1==n,e=2==n,f=3==n,s=4==n,l=6==n,p=5==n||l;return function(d,O,v,m){for(var y,L,E=o(d),_=i(E),T=r(O,v,3),N=a(_.length),A=0,x=m||u,I=t?x(d,N):e?x(d,0):void 0;N>A;A++)if((p||A in _)&&(L=T(y=_[A],A,E),n))if(t)I[A]=L;else if(L)switch(n){case 3:return!0;case 5:return y;case 6:return A;case 2:c.call(I,y)}else if(s)return!1;return l?-1:f||s?s:I}};n.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},"56Cj":function(n,t,e){var r=e("ct80");n.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},"7J1Q":function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r={VERTICAL_TWO_COLUMN:"VERTICAL_TWO_COLUMN",VERTICAL_ONE_COLUMN:"VERTICAL_ONE_COLUMN",HORIZONTAL_JUSTIFIED:"HORIZONTAL_JUSTIFIED",HORIZONTAL_LEFT_ALIGNED:"HORIZONTAL_LEFT_ALIGNED",HORIZONTAL_RIGHT_ALIGNED:"HORIZONTAL_RIGHT_ALIGNED"}},GJtw:function(n,t,e){var r=e("ct80"),i=e("fVMg"),o=e("T+0C"),a=i("species");n.exports=function(n){return o>=51||!r((function(){var t=[];return(t.constructor={})[a]=function(){return{foo:1}},1!==t[n](Boolean).foo}))}},"IRf+":function(n,t,e){var r=e("hpdy");n.exports=function(n,t,e){if(r(n),void 0===t)return n;switch(e){case 0:return function(){return n.call(t)};case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,i){return n.call(t,e,r,i)}}return function(){return n.apply(t,arguments)}}},"KEM+":function(n,t){n.exports=function(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}},N9G2:function(n,t,e){var r=e("cww3");n.exports=function(n){return Object(r(n))}},O94r:function(n,t,e){var r;!function(){"use strict";var e={}.hasOwnProperty;function i(){for(var n=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)n.push(r);else if(Array.isArray(r)&&r.length){var a=i.apply(null,r);a&&n.push(a)}else if("object"===o)for(var u in r)e.call(r,u)&&r[u]&&n.push(u)}}return n.join(" ")}n.exports?(i.default=i,n.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(n.exports=r)}()},"T+0C":function(n,t,e){var r,i,o=e("9JhN"),a=e("ZORK"),u=o.process,c=u&&u.versions,f=c&&c.v8;f?i=(r=f.split("."))[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(i=r[1]),n.exports=i&&+i},TbR9:function(n,t,e){var r=e("56Cj");n.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},WuAH:function(n,t,e){"use strict";e("vrRf"),e("z84I");var r,i=e("KEM+"),o=e.n(i),a=e("ERkP"),u=e.n(a),c=e("O94r"),f=e.n(c),s=e("7J1Q"),l=(e("alEp"),function(n){return 0<=[s.a.HORIZONTAL_LEFT_ALIGNED,s.a.HORIZONTAL_RIGHT_ALIGNED,s.a.HORIZONTAL_JUSTIFIED].indexOf(n)}),p=(r={},o()(r,s.a.HORIZONTAL_RIGHT_ALIGNED,"text-sm-right"),o()(r,s.a.HORIZONTAL_JUSTIFIED,"text-sm-justify"),r),d=function(n){var t=n.definitions,e=n.layout,r=n.muted;return u.a.createElement("dl",{className:f()("tw-definition-list d-flex ",{"text-muted":r,"flex-column":e===s.a.VERTICAL_ONE_COLUMN,"tw-definition-list--columns flex-column flex-row--sm":e===s.a.VERTICAL_TWO_COLUMN,"tw-definition-list--horizontal flex-column":l(e)})},t.map((function(n){var t=n.title,r=n.value,i=n.key;return u.a.createElement("div",{className:"tw-definition-list__item",key:i},u.a.createElement("dt",null,t),u.a.createElement("dd",{className:p[e]||""},r))})))};d.Layout=s.a,d.defaultProps={definitions:[],layout:d.Layout.VERTICAL_TWO_COLUMN,muted:!1},d.Layout=s.a,t.a=d},ZORK:function(n,t,e){var r=e("VCi3");n.exports=r("navigator","userAgent")||""},alEp:function(n,t,e){},"aoZ+":function(n,t,e){var r=e("dSaG"),i=e("xt6W"),o=e("fVMg")("species");n.exports=function(n,t){var e;return i(n)&&("function"!=typeof(e=n.constructor)||e!==Array&&!i(e.prototype)?r(e)&&null===(e=e[o])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===t?0:t)}},f4p7:function(n,t,e){"use strict";var r=e("ct80");n.exports=function(n,t){var e=[][n];return!!e&&r((function(){e.call(null,t||function(){throw 1},1)}))}},fVMg:function(n,t,e){var r=e("9JhN"),i=e("TN3B"),o=e("8aeu"),a=e("HYrn"),u=e("56Cj"),c=e("TbR9"),f=i("wks"),s=r.Symbol,l=c?s:s&&s.withoutSetter||a;n.exports=function(n){return o(f,n)||(u&&o(s,n)?f[n]=s[n]:f[n]=l("Symbol."+n)),f[n]}},hpdy:function(n,t){n.exports=function(n){if("function"!=typeof n)throw TypeError(String(n)+" is not a function");return n}},"t7/X":function(n,t,e){"use strict";e.r(t),e.d(t,"meta",(function(){return s})),e.d(t,"default",(function(){return p}));var r=e("cxan"),i=e("HbGN"),o=e("ERkP"),a=e.n(o),u=e("ZVZ0"),c=e("Qi1R"),f=e("WuAH"),s=(a.a.createElement,{name:"DefinitionList"}),l={meta:s};function p(n){var t=n.components,e=Object(i.a)(n,["components"]);return Object(u.a)("wrapper",Object(r.a)({},l,e,{components:t,mdxType:"MDXLayout"}),Object(u.a)(c.b,{code:"<DefinitionList\n  layout={DefinitionList.Layout.VERTICAL_TWO_COLUMN}\n  muted={false}\n  definitions={[\n    {\n      title: 'A simple title',\n      value: 'A simple value',\n      key: 'first',\n    },\n    {\n      title: <span>Use wrapper elements to style</span>,\n      value: <span className=\"h3\">89.45GBP</span>,\n      key: 'second',\n    },\n    {\n      title: 'Long strings will wrap',\n      value: 'And values with long words will eventuallybreakontothenextline',\n      key: 'third',\n    },\n  ]}\n/>;\n",scope:{DefinitionList:f.a},mdxType:"LiveEditorBlock"}),Object(u.a)(c.a,{componentName:"DefinitionList",mdxType:"GeneratePropsTable"}))}p.isMDXComponent=!0},vrRf:function(n,t,e){"use strict";var r=e("ax0f"),i=e("H17f").indexOf,o=e("f4p7"),a=e("znGZ"),u=[].indexOf,c=!!u&&1/[1].indexOf(1,-0)<0,f=o("indexOf"),s=a("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:c||!f||!s},{indexOf:function(n){return c?u.apply(this,arguments)||0:i(this,n,arguments.length>1?arguments[1]:void 0)}})},xt6W:function(n,t,e){var r=e("amH4");n.exports=Array.isArray||function(n){return"Array"==r(n)}},z84I:function(n,t,e){"use strict";var r=e("ax0f"),i=e("0FSu").map,o=e("GJtw"),a=e("znGZ"),u=o("map"),c=a("map");r({target:"Array",proto:!0,forced:!u||!c},{map:function(n){return i(this,n,arguments.length>1?arguments[1]:void 0)}})},znGZ:function(n,t,e){var r=e("1Mu/"),i=e("ct80"),o=e("8aeu"),a=Object.defineProperty,u={},c=function(n){throw n};n.exports=function(n,t){if(o(u,n))return u[n];t||(t={});var e=[][n],f=!!o(t,"ACCESSORS")&&t.ACCESSORS,s=o(t,0)?t[0]:c,l=o(t,1)?t[1]:void 0;return u[n]=!!e&&!i((function(){if(f&&!r)return!0;var n={length:-1};f?a(n,1,{enumerable:!0,get:c}):n[1]=1,e.call(n,s,l)}))}}},[["/ZZR",0,1,2,3,4]]]);