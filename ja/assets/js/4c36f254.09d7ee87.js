"use strict";(self.webpackChunkcross_docs=self.webpackChunkcross_docs||[]).push([[470],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7011:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],c={sidebar_position:4,id:"create-blockchain-app"},p="Create Blockchain Applications",l={unversionedId:"tutorial/create-blockchain-app",id:"tutorial/create-blockchain-app",title:"Create Blockchain Applications",description:"\u3053\u3053\u3067\u306f\u3001Cross Framework \u6a5f\u80fd\u3092\u6301\u3064\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u3069\u306e\u3088\u3046\u306b\u958b\u767a\u3057\u3066\u3044\u304f\u304b\u3001\u306b\u3064\u3044\u3066\u8ff0\u3079\u308b\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/02-tutorial/04-create-blockchain-app.md",sourceDirName:"02-tutorial",slug:"/tutorial/create-blockchain-app",permalink:"/cross-docs/ja/tutorial/create-blockchain-app",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"create-blockchain-app"},sidebar:"tutorialSidebar",previous:{title:"Create contract modules",permalink:"/cross-docs/ja/tutorial/create-contract-module"},next:{title:"Create Command CLI",permalink:"/cross-docs/ja/tutorial/create-command-cli"}},s={},u=[{value:"Features",id:"features",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-blockchain-applications"},"Create Blockchain Applications"),(0,o.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001Cross Framework \u6a5f\u80fd\u3092\u6301\u3064\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u3069\u306e\u3088\u3046\u306b\u958b\u767a\u3057\u3066\u3044\u304f\u304b\u3001\u306b\u3064\u3044\u3066\u8ff0\u3079\u308b\u3002\nDemo \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datachainlab/fabric-tendermint-cross-demo"},"fabric-tendermint-cross-demo")," \u306b\u304a\u3044\u3066\u306f\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Tendermint\u57fa\u76e4\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3")," \u3068 ",(0,o.kt)("inlineCode",{parentName:"p"},"Hyperledger Fabric")," \u306b\u3088\u308b",(0,o.kt)("inlineCode",{parentName:"p"},"Cross-chain"),"\u3092\u5b9f\u73fe\u3057\u3066\u3044\u308b\u3002"),(0,o.kt)("p",null,"\u305d\u308c\u305e\u308c\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u8aac\u660e\u306b\u3064\u3044\u3066\u306f\u4ee5\u4e0b\u3092\u53c2\u7167\u306e\u3053\u3068\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/demo/chains/fabric"},"Fabric"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/demo/chains/fabric/chaincode/fabibc"},"Fabibc Application")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/demo/chains/tendermint"},"Tendermint Application"))),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("p",null,"\u3053\u308c\u3089\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk"},"Cosmos SDK"),"\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u30d9\u30fc\u30b9\u306b\u958b\u767a\u3055\u308c\u3066\u3044\u308b\u3002\n\u305d\u306e\u305f\u3081\u3001\u6700\u521d\u306b ",(0,o.kt)("inlineCode",{parentName:"p"},"Cosmos SDK")," \u306e\u57fa\u5e79\u3068\u306a\u308b ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/master/core/baseapp.html"},"BaseApp")," \u306b\u3064\u3044\u3066\u306e\u7406\u89e3\u304c\u5fc5\u8981\u3068\u306a\u308b\u3002"),(0,o.kt)("p",null,"\u307e\u305f\u3001\u305d\u308c\u305e\u308c\u306e README.md \u306e ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/demo/chains/fabric/chaincode/fabibc"},"Fabric Application")," \u3068 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/demo/chains/tendermint"},"Tendermint Application")," \u3092\u898b\u3066\u308f\u304b\u308b\u901a\u308a\u3001\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u306e\u4ed5\u69d8\u306e\u5dee\u7570\u306b\u3088\u3063\u3066\u3001 ",(0,o.kt)("inlineCode",{parentName:"p"},"Contract Module")," \u306e\u7d44\u307f\u8fbc\u307f\u65b9\u6cd5\u304c\u5909\u308f\u308b\u3053\u3068\u306f\u306a\u3044\u3002"))}d.isMDXComponent=!0}}]);