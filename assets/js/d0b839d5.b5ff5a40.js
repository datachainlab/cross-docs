"use strict";(self.webpackChunkcross_docs=self.webpackChunkcross_docs||[]).push([[107],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return r?a.createElement(h,o(o({ref:t},s),{},{components:r})):a.createElement(h,o({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[m]="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},589:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:4,id:"create-blockchain-app"},o="Create Blockchain Applications",c={unversionedId:"tutorial/create-blockchain-app",id:"tutorial/create-blockchain-app",title:"Create Blockchain Applications",description:"This part explains how to develop Blockchain Application with Cross Framework.",source:"@site/docs/02-tutorial/04-create-blockchain-app.md",sourceDirName:"02-tutorial",slug:"/tutorial/create-blockchain-app",permalink:"/cross-docs/tutorial/create-blockchain-app",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"create-blockchain-app"},sidebar:"tutorialSidebar",previous:{title:"Create contract modules",permalink:"/cross-docs/tutorial/create-contract-module"},next:{title:"Create Command CLI",permalink:"/cross-docs/tutorial/create-command-cli"}},p={},l=[{value:"Features",id:"features",level:2}],s={toc:l},m="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-blockchain-applications"},"Create Blockchain Applications"),(0,n.kt)("p",null,"This part explains how to develop Blockchain Application with Cross Framework.\nIn ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datachainlab/fabric-tendermint-cross-demo"},"fabric-tendermint-cross-demo"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Tendermint based blockchain")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Hyperledger Fabric")," are used for Cross-chain."),(0,n.kt)("p",null,"Each of application explanations in demo are as the below."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/demo/chains/fabric"},"Fabric"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/demo/chains/fabric/chaincode/fabibc"},"Fabibc Application")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/demo/chains/tendermint"},"Tendermint Application"))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("p",null,"These applications are implemented using ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk"},"Cosmos SDK"),". First of all, understanding of ",(0,n.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/master/core/baseapp.html"},"BaseApp")," is required."),(0,n.kt)("p",null,"As explanation between ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/demo/chains/fabric/chaincode/fabibc"},"Fabric Application")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/demo/chains/tendermint"},"Tendermint Application"),", regardless of the blockchain difference, the way how to modify is exactly the same."))}d.isMDXComponent=!0}}]);