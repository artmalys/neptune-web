(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"3ZQK":function(e,a,t){"use strict";t.r(a),t.d(a,"defaultLocale",(function(){return f})),t.d(a,"localeOptions",(function(){return b})),t.d(a,"meta",(function(){return v})),t.d(a,"default",(function(){return y}));var n=t("cxan"),r=t("HbGN"),o=t("ERkP"),i=t.n(o),l=t("ZVZ0"),s=t("6sB8"),u=t("Qi1R"),c=t("mqq0"),p=t("RmhF"),m={en:t("p7AC"),de:t("l6dk"),es:t("I+G5"),fr:t("BAW9"),hu:t("RC/W"),id:t("vQkq"),it:t("PlQb"),ja:t("fiUL"),pl:t("elIb"),pt:t("LdYE"),ro:t("GLGp"),ru:t("cPsM"),tr:t("trZC"),"zh-HK":t("On6t")},g=t("BAoe"),d=Object(g.a)({ariaLabel:{id:"neptune.CloseButton.ariaLabel"}}),f=(i.a.createElement,"en"),b=Object.keys(m).map((function(e){return{value:e,label:e}})),v={name:"Provider"},L={defaultLocale:f,meta:v};function y(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(l.a)("wrapper",Object(n.a)({},L,t,{components:a,mdxType:"MDXLayout"}),Object(l.a)("p",null,"Provides contextual data such as translations to components. See the ",Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"https://transferwise.github.io/neptune-web/branch/i18y/about/Setup#usage"}),"usage guide")," for more."),Object(l.a)(u.b,{code:'() => {\n  const [i18n, setI18n] = React.useState({\n    locale: defaultLocale,\n    messages: supportedLanguages[defaultLocale],\n  });\n  const [selectedLocale, setSelectedLocale] = React.useState(localeOptions[0]);\n\n  return (\n    <Provider i18n={i18n}>\n      <label htmlFor="locales">\n        Supported locales:\n      </label>\n      <Select\n        id="locales"\n        selected={selectedLocale}\n        onChange={(item) => {\n          setI18n({ locale: item.value, messages: supportedLanguages[item.value] });\n          setSelectedLocale(item);\n        }}\n        options={localeOptions}\n      />\n      <br /><br />\n      Translated message: <FormattedMessage {...messages.ariaLabel} />\n    </Provider>\n  );\n}\n',scope:{Provider:c.a,Select:p.a,FormattedMessage:s.a,messages:d,supportedLanguages:m,localeOptions:b,defaultLocale:f},mdxType:"LiveEditorBlock"}),Object(l.a)(u.a,{componentName:"Provider",mdxType:"GeneratePropsTable"}))}y.isMDXComponent=!0},"6sB8":function(e,a,t){"use strict";var n=t("D57K"),r=t("ERkP"),o=t("ymT0"),i=t("yGPN"),l=t("nChe"),s=t.n(l).a||l,u=function(e){function a(){return null!==e&&e.apply(this,arguments)||this}return Object(n.b)(a,e),a.prototype.shouldComponentUpdate=function(e){var a=this.props,t=a.values,r=Object(n.c)(a,["values"]),o=e.values,i=Object(n.c)(e,["values"]);return!s(o,t)||!s(r,i)},a.prototype.render=function(){var e=this;return r.createElement(o.a.Consumer,null,(function(a){Object(i.c)(a);var t=a.formatMessage,o=a.textComponent,l=void 0===o?r.Fragment:o,s=e.props,u=s.id,c=s.description,p=s.defaultMessage,m=s.values,g=s.children,d=s.tagName,f=void 0===d?l:d,b=t({id:u,description:c,defaultMessage:p},m,{ignoreTag:s.ignoreTag});return Array.isArray(b)||(b=[b]),"function"===typeof g?g(b):f?r.createElement.apply(r,Object(n.d)([f,null],b)):b}))},a.displayName="FormattedMessage",a}(r.Component);a.a=u},BAW9:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Fermer","neptune.Pagination.ariaLabel":"Navigation par pagination","neptune.PaginationLink.ariaLabel.active":"Aller \xe0 la page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Page actuelle, page {pageNumber}"}')},GLGp:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},"I+G5":function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Cierra","neptune.MoneyInput.Select.placeholder":"Selecciona una opci\xf3n...","neptune.Pagination.ariaLabel":"Navegaci\xf3n por las p\xe1ginas","neptune.PaginationLink.ariaLabel.active":"Ve a la p\xe1gina {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"P\xe1gina actual, p\xe1gina {pageNumber}","neptune.Upload.csButtonText":"Cargar otro archivo","neptune.Upload.csFailureText":"La carga del archivo ha fallado. Por favor, int\xe9ntalo de nuevo","neptune.Upload.csSuccessText":"\xa1Se ha subido el archivo!","neptune.Upload.csTooLargeMessage":"Por favor, sube un archivo de menos de 5 MB","neptune.Upload.csWrongTypeMessage":"Tipo de archivo no aceptado. Por favor, int\xe9ntalo de nuevo con un archivo diferente","neptune.Upload.psButtonText":"Cancela","neptune.Upload.psProcessingText":"Subiendo...","neptune.Upload.usButtonText":"O selecciona un archivo","neptune.Upload.usDropMessage":"Arrastra un archivo para subirlo","neptune.Upload.usPlaceholder":"Arrastra y suelta un archivo menor de 5MB"}')},LdYE:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},On6t:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"\u524d\u5f80\u7b2c{pageNumber} \u9801","neptune.PaginationLink.ariaLabel.inactive":"\u7576\u524d\u9801\u9762\uff0c\u7b2c{pageNumber} \u9801"}')},PlQb:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Chiudi","neptune.Pagination.ariaLabel":"Navigazione","neptune.PaginationLink.ariaLabel.active":"Via a pagina {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Pagina corrente, pagina {pageNumber}"}')},"RC/W":function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Bez\xe1r\xe1s","neptune.MoneyInput.Select.placeholder":"V\xe1lassz ki egy lehet\u0151s\xe9get...","neptune.Pagination.ariaLabel":"Lapsz\xe1mos navig\xe1ci\xf3","neptune.PaginationLink.ariaLabel.active":"Ugr\xe1s a(z) {pageNumber} oldalra","neptune.PaginationLink.ariaLabel.inactive":"Ez az oldal, {pageNumber} oldal","neptune.Upload.csButtonText":"M\xe1sik f\xe1jl felt\xf6lt\xe9se?","neptune.Upload.csFailureText":"Felt\xf6lt\xe9s sikertelen. K\xe9r\xfcnk, pr\xf3b\xe1ld \xfajra","neptune.Upload.csSuccessText":"Felt\xf6lt\xe9s sikeres","neptune.Upload.csTooLargeMessage":"K\xe9r\xfcnk, 5 MB-n\xe1l kisebb f\xe1jlt t\xf6lts fel","neptune.Upload.csWrongTypeMessage":"Nem t\xe1mogatott f\xe1jlt\xedpus. K\xe9r\xfcnk, pr\xf3b\xe1ld \xfajra m\xe1sik f\xe1jllal","neptune.Upload.psButtonText":"M\xe9gsem","neptune.Upload.psProcessingText":"Felt\xf6lt\xe9s...","neptune.Upload.usButtonText":"Vagy f\xe1jl kiv\xe1laszt\xe1sa","neptune.Upload.usDropMessage":"H\xfazd ide a f\xe1jlokat a felt\xf6lt\xe9shez","neptune.Upload.usPlaceholder":"H\xfazz ide egy 5MB-n\xe1l kisebb f\xe1jlt"}')},cPsM:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},elIb:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},fiUL:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"\u9589\u3058\u308b","neptune.MoneyInput.Select.placeholder":"\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044...","neptune.Pagination.ariaLabel":"\u30da\u30fc\u30b8\u30cd\u30fc\u30b7\u30e7\u30f3\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3","neptune.PaginationLink.ariaLabel.active":"{pageNumber}\u306e\u30da\u30fc\u30b8\u3078\u79fb\u52d5\u3057\u307e\u3059","neptune.PaginationLink.ariaLabel.inactive":"\u73fe\u5728\u306e\u30da\u30fc\u30b8\u3001{pageNumber}\u30da\u30fc\u30b8","neptune.Upload.csButtonText":"\u5225\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u307e\u3059\u304b\uff1f","neptune.Upload.csFailureText":"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u3082\u3046\u4e00\u5ea6\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002","neptune.Upload.csSuccessText":"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u304c\u5b8c\u4e86\u3057\u307e\u3057\u305f\u3002","neptune.Upload.csTooLargeMessage":"5MB\u3088\u308a\u3082\u5c0f\u3055\u3044\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u304f\u3060\u3055\u3044","neptune.Upload.csWrongTypeMessage":"\u30d5\u30a1\u30a4\u30eb\u306e\u7a2e\u985e\u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002\u5225\u306e\u30d5\u30a1\u30a4\u30eb\u3067\u518d\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044","neptune.Upload.psButtonText":"\u30ad\u30e3\u30f3\u30bb\u30eb","neptune.Upload.psProcessingText":"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u4e2d\u2026","neptune.Upload.usButtonText":"\u307e\u305f\u306f\u3001\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3059\u308b","neptune.Upload.usDropMessage":"\u30d5\u30a1\u30a4\u30eb\u3092\u30c9\u30ed\u30c3\u30d7\u3057\u3066\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b","neptune.Upload.usPlaceholder":"5MB\u4ee5\u4e0b\u306e\u30d5\u30a1\u30a4\u30eb\u306e\u307f\u30c9\u30e9\u30c3\u30b0&\u30c9\u30ed\u30c3\u30d7\u304c\u53ef\u80fd\u3067\u3059"}')},l6dk:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},mqq0:function(e,a,t){"use strict";var n=t("ERkP"),r=t.n(n),o=t("qiww"),i=t("ueEL"),l=t("ymT0"),s=t("rw2m"),u=(t("jQ3i"),t("M+/F"),["en","de","es","fr","hu","id","it","ja","pl","pt","ro","ru","tr","zh-HK"]);function c(e){var a,t=e.i18n,n=e.children,c=Object(o.c)(),p=t.locale,m=t.messages;null===function(e){if(u.includes(e))return e;var a=e.slice(0,2);return u.includes(a)?a:null}(p)?(console.warn("Unsupported locale value was provided: '".concat(p,"', defaulting to 'en'")),a={locale:"en",messages:s}):a={locale:p,messages:m};var g=Object(i.a)(a,c);return r.a.createElement(l.b,{value:g},n)}c.defaultProps={children:void 0};a.a=c},nChe:function(e,a,t){"use strict";e.exports=function(e,a){if(e===a)return!0;if(!e||!a)return!1;var t=Object.keys(e),n=Object.keys(a),r=t.length;if(n.length!==r)return!1;for(var o=0;o<r;o++){var i=t[o];if(e[i]!==a[i]||!Object.prototype.hasOwnProperty.call(a,i))return!1}return!0}},p7AC:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},rw2m:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},trZC:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Kapat","neptune.MoneyInput.Select.placeholder":"Bir se\xe7enek se\xe7in...","neptune.Pagination.ariaLabel":"Sayfaland\u0131rma gezintisi","neptune.PaginationLink.ariaLabel.active":"{pageNumber} numaral\u0131 sayfaya git","neptune.PaginationLink.ariaLabel.inactive":"Mevcut sayfa, sayfa {pageNumber}","neptune.Upload.csButtonText":"Ba\u015fka bir dosya y\xfckleyin?","neptune.Upload.csFailureText":"Y\xfckleme ba\u015far\u0131s\u0131z. L\xfctfen yine deneyin","neptune.Upload.csSuccessText":"Y\xfckleme tamamland\u0131!","neptune.Upload.csTooLargeMessage":"L\xfctfen 5 MB\'den h\xfc\xe7\xfck bir dosya sa\u011flay\u0131n","neptune.Upload.csWrongTypeMessage":"Desteklenmeyen dosya bi\xe7imi. L\xfctfen ba\u015fka bir dosyayla tekrar deneyin","neptune.Upload.psButtonText":"\u0130ptal edin","neptune.Upload.psProcessingText":"Y\xfckleniyor...","neptune.Upload.usButtonText":"Veya bir dosya se\xe7in","neptune.Upload.usDropMessage":"Y\xfcklemeyi ba\u015flatmak i\xe7in dosyay\u0131 b\u0131rak\u0131n","neptune.Upload.usPlaceholder":"5 MB\'den k\xfc\xe7\xfck bir dosya s\xfcr\xfckleyin ve b\u0131rak\u0131n"}')},ueEL:function(e,a,t){"use strict";t.d(a,"a",(function(){return W}));var n,r,o=t("D57K"),i=t("ERkP"),l=t("ymT0"),s=t("yGPN"),u=t("mUED"),c=t("mjvE"),p=t("LYaP");function m(e,a){return Object.keys(e).reduce((function(t,n){return t[n]=Object(o.a)({timeZone:a},e[n]),t}),{})}function g(e,a){return Object.keys(Object(o.a)(Object(o.a)({},e),a)).reduce((function(t,n){return t[n]=Object(o.a)(Object(o.a)({},e[n]||{}),a[n]||{}),t}),{})}function d(e,a){if(!a)return e;var t=c.a.formats;return Object(o.a)(Object(o.a)(Object(o.a)({},t),e),{date:g(m(t.date,a),m(e.date||{},a)),time:g(m(t.time,a),m(e.time||{},a))})}function f(e,a,t,r,i){var l=e.locale,s=e.formats,c=e.messages,m=e.defaultLocale,g=e.defaultFormats,f=e.onError,b=e.timeZone,v=e.defaultRichTextElements;void 0===t&&(t={id:""});var L=t.id,y=t.defaultMessage;Object(u.a)(!!L,"[@formatjs/intl] An `id` must be provided to format a message.");var h=String(L),O=c&&Object.prototype.hasOwnProperty.call(c,h)&&c[h];if(Array.isArray(O)&&1===O.length&&O[0].type===n.literal)return O[0].value;if(!r&&O&&"string"===typeof O&&!v)return O.replace(/'\{(.*?)\}'/gi,"{$1}");if(r=Object(o.a)(Object(o.a)({},v),r||{}),s=d(s,b),g=d(g,b),!O){if((!y||l&&l.toLowerCase()!==m.toLowerCase())&&f(new p.e(t,l)),y)try{return a.getMessageFormat(y,m,g,i).format(r)}catch(P){return f(new p.c('Error formatting default message for: "'+h+'", rendering default message verbatim',l,t,P)),"string"===typeof y?y:h}return h}try{return a.getMessageFormat(O,l,s,Object(o.a)({formatters:a},i||{})).format(r)}catch(P){f(new p.c('Error formatting message: "'+h+'", using '+(y?"default message":"id")+" as fallback.",l,t,P))}if(y)try{return a.getMessageFormat(y,m,g,i).format(r)}catch(P){f(new p.c('Error formatting the default message for: "'+h+'", rendering message verbatim',l,t,P))}return"string"===typeof O?O:"string"===typeof y?y:h}!function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"}(n||(n={})),function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"}(r||(r={}));var b=t("qiww"),v=["localeMatcher","style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay"];function L(e,a,t){var n=e.locale,r=e.formats,o=e.onError;void 0===t&&(t={});var i=t.format,l=i&&Object(b.e)(r,"number",i,o)||{};return a(n,Object(b.d)(t,v,l))}function y(e,a,t,n){void 0===n&&(n={});try{return L(e,a,n).format(t)}catch(r){e.onError(new p.a("FORMAT_ERROR","Error formatting number.",r))}return String(t)}function h(e,a,t,n){void 0===n&&(n={});try{return L(e,a,n).formatToParts(t)}catch(r){e.onError(new p.a("FORMAT_ERROR","Error formatting number.",r))}return[]}var O=t("EOOJ"),P=["numeric","style"];function j(e,a,t,n,r){void 0===r&&(r={}),n||(n="second"),Intl.RelativeTimeFormat||e.onError(new O.a('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',"MISSING_INTL_API"));try{return function(e,a,t){var n=e.locale,r=e.formats,o=e.onError;void 0===t&&(t={});var i=t.format,l=!!i&&Object(b.e)(r,"relative",i,o)||{};return a(n,Object(b.d)(t,P,l))}(e,a,r).format(t,n)}catch(o){e.onError(new p.c("Error formatting relative time.",o))}return String(t)}var T=["localeMatcher","formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","fractionalSecondDigits","calendar","numberingSystem"];function k(e,a,t,n){var r=e.locale,i=e.formats,l=e.onError,s=e.timeZone;void 0===n&&(n={});var u=n.format,c=Object(o.a)(Object(o.a)({},s&&{timeZone:s}),u&&Object(b.e)(i,a,u,l)),p=Object(b.d)(n,T,c);return"time"!==a||p.hour||p.minute||p.second||p.timeStyle||p.dateStyle||(p=Object(o.a)(Object(o.a)({},p),{hour:"numeric",minute:"numeric"})),t(r,p)}function N(e,a){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var r=t[0],o=t[1],i=void 0===o?{}:o,l="string"===typeof r?new Date(r||0):r;try{return k(e,"date",a,i).format(l)}catch(s){e.onError(new p.a("FORMAT_ERROR","Error formatting date.",s))}return String(l)}function E(e,a){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var r=t[0],o=t[1],i=void 0===o?{}:o,l="string"===typeof r?new Date(r||0):r;try{return k(e,"time",a,i).format(l)}catch(s){e.onError(new p.a("FORMAT_ERROR","Error formatting time.",s))}return String(l)}function S(e,a){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var r=t[0],o=t[1],i=t[2],l=void 0===i?{}:i,s=e.timeZone,u=e.locale,c=e.onError,m=Object(b.d)(l,T,s?{timeZone:s}:{});try{return a(u,m).formatRange(r,o)}catch(g){c(new p.a("FORMAT_ERROR","Error formatting date time range.",g))}return String(r)}function M(e,a){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var r=t[0],o=t[1],i=void 0===o?{}:o,l="string"===typeof r?new Date(r||0):r;try{return k(e,"date",a,i).formatToParts(l)}catch(s){e.onError(new p.a("FORMAT_ERROR","Error formatting date.",s))}return[]}function R(e,a){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var r=t[0],o=t[1],i=void 0===o?{}:o,l="string"===typeof r?new Date(r||0):r;try{return k(e,"time",a,i).formatToParts(l)}catch(s){e.onError(new p.a("FORMAT_ERROR","Error formatting time.",s))}return[]}var C=["localeMatcher","type"];function x(e,a,t,n){var r=e.locale,o=e.onError;void 0===n&&(n={}),Intl.PluralRules||o(new O.a('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',"MISSING_INTL_API"));var i=Object(b.d)(n,C);try{return a(r,i).select(t)}catch(l){o(new p.c("Error formatting plural.",l))}return"other"}var w=["localeMatcher","type","style"],F=Date.now();function U(e,a,t,n){var r=e.locale,o=e.onError;void 0===n&&(n={}),Intl.ListFormat||o(new O.a('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',"MISSING_INTL_API"));var i=Object(b.d)(n,w);try{var l={},s=t.map((function(e,a){if("object"===typeof e){var t=function(e){return F+"_"+e+"_"+F}(a);return l[t]=e,t}return String(e)}));return Object.keys(l).length?a(r,i).formatToParts(s).reduce((function(e,a){var t=a.value;return l[t]?e.push(l[t]):"string"===typeof e[e.length-1]?e[e.length-1]+=t:e.push(t),e}),[]):a(r,i).format(s)}catch(u){o(new p.a("FORMAT_ERROR","Error formatting list.",u))}return t}var B=["localeMatcher","style","type","fallback"];function D(e,a,t,n){var r=e.locale,o=e.onError;Intl.DisplayNames||o(new O.a('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',"MISSING_INTL_API"));var i=Object(b.d)(n,B);try{return a(r,i).of(t)}catch(l){o(new p.a("FORMAT_ERROR","Error formatting display name.",l))}}function I(e){var a=e?e[Object.keys(e)[0]]:void 0;return"object"===typeof a&&!!a}function A(e,a){var t=Object(b.b)(a),n=Object(o.a)(Object(o.a)({},b.a),e),r=n.locale,i=n.defaultLocale,l=n.onError;return r?!Intl.NumberFormat.supportedLocalesOf(r).length&&l?l(new p.d('Missing locale data for locale: "'+r+'" in Intl.NumberFormat. Using default locale: "'+i+'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')):!Intl.DateTimeFormat.supportedLocalesOf(r).length&&l&&l(new p.d('Missing locale data for locale: "'+r+'" in Intl.DateTimeFormat. Using default locale: "'+i+'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')):(l&&l(new p.b('"locale" was not configured, using "'+i+'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details')),n.locale=n.defaultLocale||"en"),function(e){e.defaultRichTextElements&&!I(e.messages||{})&&console.warn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')}(n),Object(o.a)(Object(o.a)({},n),{formatters:t,formatNumber:y.bind(null,n,t.getNumberFormat),formatNumberToParts:h.bind(null,n,t.getNumberFormat),formatRelativeTime:j.bind(null,n,t.getRelativeTimeFormat),formatDate:N.bind(null,n,t.getDateTimeFormat),formatDateToParts:M.bind(null,n,t.getDateTimeFormat),formatTime:E.bind(null,n,t.getDateTimeFormat),formatDateTimeRange:S.bind(null,n,t.getDateTimeFormat),formatTimeToParts:R.bind(null,n,t.getDateTimeFormat),formatPlural:x.bind(null,n,t.getPluralRules),formatMessage:f.bind(null,n,t),formatList:U.bind(null,n,t.getListFormat),formatDisplayName:D.bind(null,n,t.getDisplayNames),__addMessages:function(a){var t=I(n.messages),r=I(a);e.onError&&(t&&!r||!t&&r)&&e.onError(new p.b("Cannot mix AST & non-AST messages for locale "+n.locale)),n.messages=Object(o.a)(Object(o.a)({},n.messages),a)}})}var _=t("nChe"),G=t.n(_),J=t("9AS4"),Z=G.a||_;function z(e){return{locale:e.locale,timeZone:e.timeZone,formats:e.formats,textComponent:e.textComponent,messages:e.messages,defaultLocale:e.defaultLocale,defaultFormats:e.defaultFormats,onError:e.onError,wrapRichTextChunksInFragment:e.wrapRichTextChunksInFragment,defaultRichTextElements:e.defaultRichTextElements}}function q(e){return e?Object.keys(e).reduce((function(a,t){var n=e[t];return a[t]=Object(J.b)(n)?Object(s.b)(n):n,a}),{}):e}var K=function(e,a,t,n){var r=f(e,a,t,q(n));return Array.isArray(r)?i.Children.toArray(r):r},W=function(e,a){var t=e.defaultRichTextElements,n=Object(o.c)(e,["defaultRichTextElements"]),r=q(t),i=A(Object(o.a)(Object(o.a)(Object(o.a)({},s.a),n),{defaultRichTextElements:r}),a);return Object(o.a)(Object(o.a)({},i),{formatMessage:K.bind(null,{locale:i.locale,timeZone:i.timeZone,formats:i.formats,defaultLocale:i.defaultLocale,defaultFormats:i.defaultFormats,messages:i.messages,onError:i.onError,defaultRichTextElements:r},i.formatters)})};!function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return a.cache=Object(b.c)(),a.state={cache:a.cache,intl:W(z(a.props),a.cache),prevConfig:z(a.props)},a}Object(o.b)(a,e),a.getDerivedStateFromProps=function(e,a){var t=a.prevConfig,n=a.cache,r=z(e);return Z(t,r)?null:{intl:W(r,n),prevConfig:r}},a.prototype.render=function(){return Object(s.c)(this.state.intl),i.createElement(l.b,{value:this.state.intl},this.props.children)},a.displayName="IntlProvider",a.defaultProps=s.a}(i.PureComponent)},vQkq:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')}}]);