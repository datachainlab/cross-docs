"use strict";(self.webpackChunkcross_docs=self.webpackChunkcross_docs||[]).push([[753],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>k});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=a.createContext({}),s=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},p=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=s(r),m=n,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(k,l(l({ref:e},p),{},{components:r})):a.createElement(k,l({ref:e},p))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[u]="string"==typeof t?t:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8354:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:5,id:"state-store"},l="State store",i={unversionedId:"docs/architecture/state-store",id:"docs/architecture/state-store",title:"State store",description:"State store\u306f\u3001\u5404\u30c1\u30a7\u30fc\u30f3\u4e0a\u306eSmart Contract\u306e\u72b6\u614b\u3092\u6c38\u7d9a\u5316\u3059\u308b\u62bd\u8c61\u7684\u306aKVS\u306e\u30af\u30e9\u30b9\u3067\u3042\u308b\u3002\u3053\u308c\u306f\u4ee5\u4e0b\u306e\u8981\u7d20\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/01-docs/03-architecture/05-state-store.md",sourceDirName:"01-docs/03-architecture",slug:"/docs/architecture/state-store",permalink:"/cross-docs/ja/docs/architecture/state-store",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"state-store"},sidebar:"tutorialSidebar",previous:{title:"Atomic commit protocol",permalink:"/cross-docs/ja/docs/architecture/atomic-commit-protocol"},next:{title:"Overview",permalink:"/cross-docs/ja/tutorial/overview"}},c={},s=[{value:"Lock Store",id:"lock-store",level:2},{value:"CDT(Conflict-free Data Types) Store",id:"cdtconflict-free-data-types-store",level:2}],p={toc:s},u="wrapper";function d(t){let{components:e,...r}=t;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"state-store"},"State store"),(0,n.kt)("p",null,"State store\u306f\u3001\u5404\u30c1\u30a7\u30fc\u30f3\u4e0a\u306eSmart Contract\u306e\u72b6\u614b\u3092\u6c38\u7d9a\u5316\u3059\u308b\u62bd\u8c61\u7684\u306aKVS\u306e\u30af\u30e9\u30b9\u3067\u3042\u308b\u3002\u3053\u308c\u306f\u4ee5\u4e0b\u306e\u8981\u7d20\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u72b6\u614b\u306e\u5909\u66f4\u64cd\u4f5c\u306e\u4fdd\u5b58"),(0,n.kt)("li",{parentName:"ol"},"\u4fdd\u5b58\u3057\u305f\u5909\u66f4\u306e\u9069\u7528\u3082\u3057\u304f\u306f\u7834\u68c4\u64cd\u4f5c"),(0,n.kt)("li",{parentName:"ol"},"\u72b6\u614b\u306e\u30a2\u30af\u30bb\u30b9\u3078\u306e\u30ed\u30c3\u30af\u6a5f\u69cb")),(0,n.kt)("p",null,"\u4e00\u822c\u7684\u306b\u3001\u5358\u4e00\u306e\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u306b\u304a\u3044\u3066\u9010\u6b21\u7684\u306bContract\u95a2\u6570\u3092\u5b9f\u884c\u3059\u308b\u4e0a\u3067\u306f\u3001\u66f4\u65b0\u64cd\u4f5c\u306e\u305f\u3073\u306b\u5909\u66f4\u3092Store\u306b\u53cd\u6620\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002\u3057\u304b\u3057\u3001\u30af\u30ed\u30b9\u30c1\u30a7\u30fc\u30f3\u306b\u304a\u3044\u3066\u306f\u3001\u3059\u3079\u3066\u306eChain\u306eContract\u306e\u72b6\u614b\u306e\u66f4\u65b0\u3092Atomic\u306b\u884c\u3046\u5fc5\u8981\u304c\u3042\u308b\u305f\u3081\u3001\u3044\u305a\u308c\u304b\u306eChain\u306eContract\u304c\u5931\u6557\u3057\u305f\u5834\u5408\u3001\u4ed6\u306e\u5168\u3066\u306eContract\u306e\u5b9f\u884c\u3092\u4e2d\u65ad\u3067\u304d\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002\u305d\u306e\u305f\u3081\u3001State store\u306f(1)\u72b6\u614b\u306e\u5909\u66f4\u64cd\u4f5c\u306e\u4fdd\u5b58\u3068(2)\u4fdd\u5b58\u3057\u305f\u5909\u66f4\u306e\u9069\u7528\u3084\u7834\u68c4\u64cd\u4f5c\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u3002"),(0,n.kt)("p",null,"\u307e\u305f\u3001Cross-chain transaction\u306f\u3001\u8907\u6570\u306e\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u9593\u3067\u5354\u8abf\u3057\u3066\u5b9f\u884c\u3055\u308c\u308b\u305f\u3081\u3001\u3042\u308b\u30c1\u30a7\u30fc\u30f3\u306e\u4e2d\u3067\u8907\u6570\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306b\u5206\u304b\u308c\u308b\u3053\u3068\u306b\u306a\u308b\u3002\u305d\u306e\u305f\u3081\u3001\u540c\u3058\u72b6\u614b\u306b\u5bfe\u3057\u3066\u4e26\u884c\u3057\u3066\u64cd\u4f5c\u3059\u308b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u304c\u5b58\u5728\u3057\u3046\u308b\u3002Cross Framework\u3067\u306f\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Serializability"},"\u76f4\u5217\u5316\u53ef\u80fd\u6027"),"\u3092\u4fdd\u8a3c\u3059\u308b\u305f\u3081\u306b(3)\u306e\u30ed\u30c3\u30af\u6a5f\u69cb\u3092\u5c0e\u5165\u3059\u308b\u3002\u4ee5\u4e0b\u3067\u306f\u3001\u73fe\u5728\u63d0\u4f9b\u3055\u308c\u3066\u3044\u308b2\u7a2e\u985e\u306e\u30ed\u30c3\u30af\u6a5f\u69cb\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308bState Store\u306e\u5b9f\u88c5\u306b\u3064\u3044\u3066\u8ff0\u3079\u308b\u3002"),(0,n.kt)("h2",{id:"lock-store"},"Lock Store"),(0,n.kt)("p",null,"Lock Store\u306f\u3001Get, Set\u306a\u3069\u306e\u5358\u7d14\u306aAPI\u3092\u63d0\u4f9b\u3057\u3001Read-Write Lock\u3092\u53d6\u5f97\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308bStore\u3067\u3042\u308b\u3002"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u306e\u64cd\u4f5c\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u308b:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Get(K): ",(0,n.kt)("inlineCode",{parentName:"li"},"K"),"\u3067\u6307\u5b9a\u3057\u305fKey\u306b\u5bfe\u5fdc\u3059\u308bValue\u3092\u8fd4\u3059"),(0,n.kt)("li",{parentName:"ul"},"Set(K,V): ",(0,n.kt)("inlineCode",{parentName:"li"},"K"),"\u3067\u6307\u5b9a\u3057\u305fKey\u306b\u5bfe\u3057\u3066",(0,n.kt)("inlineCode",{parentName:"li"},"V"),"\u3067\u6307\u5b9a\u3057\u305fValue\u3092\u30bb\u30c3\u30c8\u3059\u308b"),(0,n.kt)("li",{parentName:"ul"},"Delete(K): ",(0,n.kt)("inlineCode",{parentName:"li"},"K"),"\u3067\u6307\u5b9a\u3057\u305fKey\u3068\u5bfe\u5fdc\u3059\u308bValue\u3092\u524a\u9664\u3059\u308b")),(0,n.kt)("p",null,"\u307e\u305f\u3001Store\u306f\u5404\u64cd\u4f5c\u306b\u5bfe\u3057\u3066\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30ed\u30c3\u30af\u3092\u53d6\u5f97\u3059\u308b\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"State store\u3078\u306e\u64cd\u4f5c"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53d6\u5f97\u3059\u308b\u30ed\u30c3\u30af"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Get(K)"),(0,n.kt)("td",{parentName:"tr",align:null},"K\u3078\u306e\u5171\u6709\u30ed\u30c3\u30af")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Set(K, V)"),(0,n.kt)("td",{parentName:"tr",align:null},"K\u3078\u306e\u6392\u4ed6\u30ed\u30c3\u30af")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Delete(K)"),(0,n.kt)("td",{parentName:"tr",align:null},"K\u3078\u306e\u6392\u4ed6\u30ed\u30c3\u30af")))),(0,n.kt)("h2",{id:"cdtconflict-free-data-types-store"},"CDT(Conflict-free Data Types) Store"),(0,n.kt)("p",null,"CDT Store\u306f\u3001",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datachainlab/cross-cdt"},"CDT"),"\u3068\u547c\u3070\u308c\u308b\u7279\u5b9a\u306e\u6761\u4ef6\u4e0b\u3067\u4e26\u884c\u3059\u308b\u64cd\u4f5c\u3092\u53ef\u80fd\u306b\u3059\u308b\u30c7\u30fc\u30bf\u69cb\u9020\u3092\u5b9f\u88c5\u3057\u305fStore\u3067\u3042\u308b\u3002"),(0,n.kt)("p",null,"CDT\u306f\u8907\u6570\u306e\u30c7\u30fc\u30bf\u578b\u3092\u5b9a\u7fa9\u3057\u3066\u304a\u308a\u3001\u73fe\u5728Integer, Grow-only Set\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u3002Integer\u306f\u3001Add, Sub, Compare\u95a2\u6570\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u304a\u308a\u3001\u3053\u308c\u3092\u7528\u3044\u3066\u4e26\u884c\u3059\u308b\u64cd\u4f5c\u304c\u53ef\u80fd\u306aERC20\u3092\u5b9f\u88c5\u53ef\u80fd\u3067\u3042\u308b\u3002\u8a73\u7d30\u306f\u3053\u3061\u3089\u3092\u78ba\u8a8d\u3002",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datachainlab/cross-cdt"},"https://github.com/datachainlab/cross-cdt")))}d.isMDXComponent=!0}}]);