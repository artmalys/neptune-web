_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[72],{"1IsZ":function(e,t,n){var a=n("ax0f"),r=n("YAkj").values;a({target:"Object",stat:!0},{values:function(e){return r(e)}})},"7St7":function(e,t,n){var a=n("fVMg"),r=n("guiJ"),o=n("q9+l"),l=a("unscopables"),s=Array.prototype;void 0==s[l]&&o.f(s,l,{configurable:!0,value:r(null)}),e.exports=function(e){s[l][e]=!0}},DEeE:function(e,t,n){var a=n("yRya"),r=n("sX5C");e.exports=Object.keys||function(e){return a(e,r)}},LiCV:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return V})),n.d(t,"default",(function(){return z}));var a=n("cxan"),r=n("HbGN"),o=n("ERkP"),l=n.n(o),s=n("ZVZ0"),c=n("Qi1R"),u=(n("jwue"),n("z84I"),n("ho0z"),n("+KXO"),n("1IsZ"),n("+oxZ"),n("97Jx")),i=n.n(u),p=n("VrFO"),d=n.n(p),f=n("Y9Ll"),m=n.n(f),h=n("1Pcy"),v=n.n(h),y=n("5Yy7"),g=n.n(y),E=n("N+ot"),b=n.n(E),N=n("AuHH"),O=n.n(N),w=n("KEM+"),x=n.n(w),R=n("O94r"),F=n.n(R),T=n("tFYr"),k=n("ZrBu"),M=n("E+8c"),j=n("2k+G"),C=(n("1t7P"),n("jQ/y"),n("2G9S"),n("vrRf"),n("lTEL"),n("7xRU"),n("M+/F"),n("7x/C"),n("iKE+"),n("KqXw"),n("DZ+c"),n("Ysgh"),n("kYxP"),function(e){if(e.control)return e.control.toLowerCase();if(e.hidden)return"hidden";if(e.values&&e.values.length)return I(e);switch(e.type){case"string":return S(e.format);case"number":case"integer":return"number";case"boolean":return"checkbox";default:return"text"}}),S=function(e){return"date"===e?"date":"base64url"===e?"file":"password"===e?"password":"uri"===e||"email"===e?"text":"phone"===e?"tel":"text"},I=function(e){return e.control?e.control:"select"===e.type?"select":"radio"===e.type?"radio":e.values?3<e.values.length?"select":"radio":"select"},P=n("KVzC");function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=O()(e);if(t){var r=O()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return b()(this,n)}}var L={REQUIRED:"Required",PATTERN:"Incorrect format",MINLENGTH:"The value is too short",MAXLENGTH:"The value is too long",MIN:"The value is too low",MAX:"The value is too high"},X=function(e){function t(e){var a;return d()(this,t),a=n.call(this,e),x()(v()(a),"objectSizeOf",(function(e){return e?Object.keys(e).length:0})),a.state={focused:!1,changed:!1,error:e.errorMessage},a}g()(t,e);var n=A(t);return m()(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.errorMessage!==this.props.errorMessage&&this.setState({error:e.errorMessage})}},{key:"onFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({focused:!0})}},{key:"onBlur",value:function(e){console.log("temp");var t=this.props.onBlur;t&&t(e),this.setState({focused:!1})}},{key:"onChange",value:function(e){this.props.onChange(e),this.setState({changed:!0,focused:!0})}},{key:"validateValue",value:function(e){var t={},n=this.props.field;return Object(P.h)(e,n).forEach((function(e){var a=e.toLowerCase(),r=n.validationMessages&&n.validationMessages[a]||L[a.toUpperCase()];r&&(t[a]=r)})),t}},{key:"updateAlert",value:function(e){var t=this.props,n=t.value,a=t.field,r=t.errorMessage,o=t.warningMessage,s=this.state,c=s.focused,u=s.changed,i=s.error,p=u&&!c?this.validateValue(n):{};return 0<this.objectSizeOf(p)?{type:T.a.Type.ERROR,content:Object.keys(p).map((function(e){return l.a.createElement("div",{key:e},p[e])}))}:i&&r?{type:T.a.Type.ERROR,content:l.a.createElement(l.a.Fragment,null,r)}:o?{type:T.a.Type.WARNING,content:l.a.createElement(l.a.Fragment,null,o)}:c&&a.help&&a.help.message?{type:T.a.Type.INFO,content:l.a.createElement(l.a.Fragment,null,a.help.message)}:c&&a.help&&a.help.list&&0<a.help.list.length?{type:T.a.Type.INFO,content:a.help.list.map((function(e,t){return l.a.createElement("div",{key:t},e)}))}:c&&a.help&&a.help.do&&0<a.help.do.length&&a.help.dont&&0<a.help.dont.length?{type:T.a.Type.INFO,content:l.a.createElement("div",{className:"m-b-1"},l.a.createElement(k.a,{dos:a.help.do,donts:a.help.dont}))}:c&&e!==j.a.FILE&&a.help&&a.help.image?{type:T.a.Type.INFO,content:l.a.createElement("img",{className:"thumbnail m-y-2",src:"".concat(a.help.image),alt:a.label})}:{type:null,content:null}}},{key:"render",value:function(){var e=this,t=this.props,n=t.name,a=t.field,r=t.value,o=t.locale,s=t.label,c=a.control||C(a),u=this.updateAlert(c),p=!!u.content,d=c!==j.a.FILE&&c!==j.a.UPLOAD&&c!==j.a.CHECKBOX;return l.a.createElement("div",{className:F()("form-group","tw-field-".concat(n),{"has-info":u.type===T.a.Type.INFO&&p,"has-error":u.type===T.a.Type.ERROR&&p,"has-warning":u.type===T.a.Type.WARNING&&p,hidden:a.hidden})},d&&l.a.createElement("label",{className:"control-label"},s),l.a.createElement(M.a,i()({},a,{type:c,name:n,locale:o,value:r,onChange:function(t){return e.onChange(t)},onFocus:function(t){return e.onFocus(t)},onBlur:function(t){return e.onBlur(t)}})),p&&l.a.createElement(T.a,{type:u.type},u.content))}}]),t}(o.Component);X.defaultProps={locale:"en-GB",countryCode:null,value:null,errorMessage:null,warningMessage:null,onFocus:null,onBlur:null,label:null};var _=X,V=(l.a.createElement,{name:"Field"}),Z={meta:V};function z(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.a)("wrapper",Object(a.a)({},Z,n,{components:t,mdxType:"MDXLayout"}),Object(s.a)("p",null,Object(s.a)("strong",{parentName:"p"},"Note:")," This component is deprecated. It can now be found in ",Object(s.a)("inlineCode",{parentName:"p"},"@transferwise/dynamic-flows"),"."),Object(s.a)(c.b,{code:"() => {\n  const [value, setValue] = React.useState('a value');\n  return (\n    <Field\n      value={value}\n      errorMessage=\"\"\n      warningMessage=\"\"\n      label=\"label\"\n      name=\"text\"\n      field={{\n        control: 'text',\n        type: 'string',\n        displayPattern: '',\n        help: {\n          message: '',\n          image: '',\n          list: [],\n          do: ['good', 'much better'],\n          dont: ['not so good', 'erm no!'],\n        },\n        options: [\n          { label: 'Mars', value: 'mars' },\n          { label: 'Earth', value: 'earth' },\n        ],\n        label: 'a label',\n        required: false,\n        disabled: false,\n        hidden: false,\n        readOnly: false,\n        autoComplete: false,\n        placeholder: 'a placeholder',\n        searchPlaceholder: 'search',\n        minLength: null,\n        maxLength: null,\n        minimum: 10,\n        maximum: 99,\n        validationMessages: {\n          required: 'Number is required',\n          minimum: 'Must be 10 or greater',\n          maximum: 'Must be 99 or less',\n        },\n      }}\n      onChange={(value) => setValue(value)}\n    />\n  );\n};\n",scope:{Field:_},mdxType:"LiveEditorBlock"}),Object(s.a)(c.a,{componentName:"Field",mdxType:"GeneratePropsTable"}))}z.isMDXComponent=!0},T0YW:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/dynamicForms/Field",function(){return n("LiCV")}])},YAkj:function(e,t,n){var a=n("1Mu/"),r=n("DEeE"),o=n("N4z3"),l=n("4Sk5").f,s=function(e){return function(t){for(var n,s=o(t),c=r(s),u=c.length,i=0,p=[];u>i;)n=c[i++],a&&!l.call(s,n)||p.push(e?[n,s[n]]:s[n]);return p}};e.exports={entries:s(!0),values:s(!1)}},ZrBu:function(e,t,n){"use strict";n("z84I");var a=n("ERkP"),r=n.n(a),o=n("/Vl7"),l=(n("9s95"),function(e){var t=e.dos,n=e.donts;return r.a.createElement("div",{className:"tw-instructions"},t.map((function(e,t){return r.a.createElement("div",{className:"instruction m-t-1",key:t},r.a.createElement(o.f,{size:24,className:"do"}),r.a.createElement("p",{className:"m-l-2 m-b-0 text-primary"},e))})),n.map((function(e,t){return r.a.createElement("div",{className:"instruction m-t-1",key:t},r.a.createElement(o.k,{size:24,className:"dont"}),r.a.createElement("p",{className:"m-l-2 m-b-0 text-primary"},e))})))});l.defaultProps={dos:[],donts:[]};var s=l;t.a=s},guiJ:function(e,t,n){var a,r=n("FXyv"),o=n("uZvN"),l=n("sX5C"),s=n("1odi"),c=n("kySU"),u=n("8r/q"),i=n("MyxS"),p=i("IE_PROTO"),d=function(){},f=function(e){return"<script>"+e+"<\/script>"},m=function(){try{a=document.domain&&new ActiveXObject("htmlfile")}catch(t){}m=a?function(e){e.write(f("")),e.close();var t=e.parentWindow.Object;return e=null,t}(a):function(){var e,t=u("iframe");return t.style.display="none",c.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(f("document.F=Object")),e.close(),e.F}();for(var e=l.length;e--;)delete m.prototype[l[e]];return m()};s[p]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(d.prototype=r(e),n=new d,d.prototype=null,n[p]=e):n=m(),void 0===t?n:o(n,t)}},jQ3i:function(e,t,n){"use strict";var a=n("ax0f"),r=n("H17f").includes,o=n("7St7");a({target:"Array",proto:!0,forced:!n("znGZ")("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},kySU:function(e,t,n){var a=n("VCi3");e.exports=a("document","documentElement")},uZvN:function(e,t,n){var a=n("1Mu/"),r=n("q9+l"),o=n("FXyv"),l=n("DEeE");e.exports=a?Object.defineProperties:function(e,t){o(e);for(var n,a=l(t),s=a.length,c=0;s>c;)r.f(e,n=a[c++],t[n]);return e}}},[["T0YW",0,1,2,6,3,5,7,8,9,10,11,13,14,15,16,17,18,19,20,4]]]);