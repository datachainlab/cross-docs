"use strict";(self.webpackChunkcross_docs=self.webpackChunkcross_docs||[]).push([[136],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(u,".").concat(d)]||m[d]||l[d]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5175:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),a=["components"],c={sidebar_position:6,id:"execution"},u="Execution",s={unversionedId:"tutorial/execution",id:"tutorial/execution",title:"Execution",description:"\u3053\u3053\u3067\u306f\u3001fabric-tendermint-cross-demo\u4e0a\u3067\u306e Tendermint \u3068 Hyperledger Fabric \u306b\u3088\u308b Cross-chain \u74b0\u5883\u306e\u69cb\u7bc9\u65b9\u6cd5\u53ca\u3073\u3001\u30b7\u30ca\u30ea\u30aa\u306b\u6cbf\u3063\u3066 Cross-chain transaction \u3092\u5b9f\u884c\u3059\u308b\u4f8b\u306b\u3064\u3044\u3066\u8ff0\u3079\u308b\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/02-tutorial/06-execution.md",sourceDirName:"02-tutorial",slug:"/tutorial/execution",permalink:"/cross-docs/ja/tutorial/execution",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,id:"execution"},sidebar:"tutorialSidebar",previous:{title:"Create Command CLI",permalink:"/cross-docs/ja/tutorial/create-command-cli"}},p={},l=[{value:"Setup network",id:"setup-network",level:2},{value:"Execute Cross-chain demo",id:"execute-cross-chain-demo",level:2}],m={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"execution"},"Execution"),(0,i.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datachainlab/fabric-tendermint-cross-demo"},"fabric-tendermint-cross-demo"),"\u4e0a\u3067\u306e Tendermint \u3068 Hyperledger Fabric \u306b\u3088\u308b Cross-chain \u74b0\u5883\u306e\u69cb\u7bc9\u65b9\u6cd5\u53ca\u3073\u3001\u30b7\u30ca\u30ea\u30aa\u306b\u6cbf\u3063\u3066 Cross-chain transaction \u3092\u5b9f\u884c\u3059\u308b\u4f8b\u306b\u3064\u3044\u3066\u8ff0\u3079\u308b\u3002"),(0,i.kt)("h2",{id:"setup-network"},"Setup network"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/demo#setup-network"},"Setup Network"),"\u306e\u624b\u9806\u306b\u5f93\u3044\u74b0\u5883\u3092\u69cb\u7bc9\u3059\u308b\u3002"),(0,i.kt)("h2",{id:"execute-cross-chain-demo"},"Execute Cross-chain demo"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/datachainlab/fabric-tendermint-cross-demo/blob/main/demo/scripts/scenario/sample-scenario"},"\u5b9f\u884c\u30b5\u30f3\u30d7\u30eb script"),"\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u305d\u3061\u3089\u3092\u5b9f\u884c\u3059\u308b\u3002\u8a73\u3057\u3044\u8aac\u660e\u306b\u3064\u3044\u3066\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/demo#about-sample-scenario"},"About sample-scenario"),"\u306e\u9805\u3092\u53c2\u7167\u3002"))}d.isMDXComponent=!0}}]);