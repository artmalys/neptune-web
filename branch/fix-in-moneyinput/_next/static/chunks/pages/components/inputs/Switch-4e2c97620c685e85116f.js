_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[66],{"5s8o":function(e,n,t){},"6gor":function(e,n,t){"use strict";n.a={DOWN:40,UP:38,LEFT:37,RIGHT:39,ENTER:13,ESCAPE:27,TAB:9,SPACE:32,BACKSPACE:8}},O94r:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function c(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var r=c.apply(null,a);r&&e.push(r)}else if("object"===i)for(var l in a)t.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(a=function(){return c}.apply(n,[]))||(e.exports=a)}()},cGSD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/inputs/Switch",function(){return t("cjIA")}])},cjIA:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return b})),t.d(n,"default",(function(){return m}));var a=t("cxan"),c=t("HbGN"),i=t("ERkP"),r=t.n(i),l=t("ZVZ0"),o=t("Qi1R"),s=t("O94r"),u=t.n(s),d=(t("j+zR"),t("5s8o"),t("/Vl7")),p=t("6gor"),f=function(e){var n=e.checked,t=e.className,a=e.id,c=e.onClick;return r.a.createElement("span",{className:u()("switch",{"switch--unchecked":!n,"switch--checked":n},t),onClick:c,onKeyDown:function(e){(32===e.code||e.keyCode===p.a.SPACE)&&(e.preventDefault(),c())},tabIndex:0,role:"switch","aria-checked":n,"aria-labelledby":e["aria-labelledby"],"aria-label":e["aria-label"],id:a},r.a.createElement("span",{className:"switch--thumb"},n?r.a.createElement(d.d,{filled:!0,size:24}):r.a.createElement(d.i,{filled:!0,size:24})),r.a.createElement("input",{type:"checkbox",checked:n,readOnly:!0}))};f.defaultProps={"aria-label":null,"aria-labelledby":null,checked:!1,className:null,id:null};var h=f,b=(r.a.createElement,{name:"Switch"}),w={meta:b};function m(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(l.a)("wrapper",Object(a.a)({},w,t,{components:n,mdxType:"MDXLayout"}),Object(l.a)(o.b,{code:'() => {\n  const [checked, setCheck] = React.useState(false);\n\n  return (\n    <>\n      <label id="labelID" htmlFor="switchId">\n        A switch with a label\n      </label>\n      <Switch\n        checked={checked}\n        className="a-class-name"\n        onClick={() => setCheck(!checked)}\n        aria-labelledby="labelID"\n        id="switchId"\n      />\n    </>\n  );\n};\n',scope:{Switch:h},mdxType:"LiveEditorBlock"}),Object(l.a)(o.a,{componentName:"Switch",mdxType:"GeneratePropsTable"}))}m.isMDXComponent=!0},"j+zR":function(e,n){e.exports=function(e,n){return function(t,a,c){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+c+". Validation failed.");if("function"!==typeof n)return new Error("Invalid react-required-if condition supplied to "+c+". Validation failed.");var i=n(t)?e.isRequired:e;return i.apply(this,arguments)}}}},[["cGSD",0,1,2,6,3,4]]]);