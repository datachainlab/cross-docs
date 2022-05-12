"use strict";(self.webpackChunkcross_docs=self.webpackChunkcross_docs||[]).push([[830],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),s=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},u=function(t){var e=s(t.components);return n.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,c(c({ref:e},u),{},{components:r})):n.createElement(f,c({ref:e},u))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4110:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),c=["components"],i={sidebar_position:3,id:"create-contract-module"},l="Create contract modules",s={unversionedId:"tutorial/create-contract-module",id:"tutorial/create-contract-module",title:"Create contract modules",description:"This part explains how to develop Contract Module.",source:"@site/docs/02-tutorial/03-create-contract-module.md",sourceDirName:"02-tutorial",slug:"/tutorial/create-contract-module",permalink:"/cross-docs/tutorial/create-contract-module",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"create-contract-module"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/cross-docs/tutorial/getting-started"},next:{title:"Create Blockchain Applications",permalink:"/cross-docs/tutorial/create-blockchain-app"}},u={},p=[{value:"Contract Module",id:"contract-module",level:2}],d={toc:p};function m(t){var e=t.components,r=(0,o.Z)(t,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-contract-modules"},"Create contract modules"),(0,a.kt)("p",null,"This part explains how to develop ",(0,a.kt)("a",{parentName:"p",href:"/cross-docs/docs/architecture/overview#contract-module"},"Contract Module"),".",(0,a.kt)("br",{parentName:"p"}),"\n","In the demo, ERC20 functionalities are additional.\nFirst, read about ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/contracts/erc20"},"ERC20 Contract")," of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/datachainlab/fabric-tendermint-cross-demo"},"fabric-tendermint-cross-demo"),"."),(0,a.kt)("h2",{id:"contract-module"},"Contract Module"),(0,a.kt)("p",null,"In general, modules need to satisfy specific interfaces as explained by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/contracts/erc20#erc20-contract"},"ERC20 Contract"),"."),(0,a.kt)("p",null,"As Cross Framework, modules need to satisfy ",(0,a.kt)("a",{parentName:"p",href:"/cross-docs/docs/architecture/overview#contract-module"},"ContractModule interface"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type ContractModule interface {\n    OnContractCall(ctx context.Context, signers []authtypes.Account, callInfo txtypes.ContractCallInfo) (*txtypes.ContractCallResult, error)\n}\n")),(0,a.kt)("p",null,"Implementation in demo is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/datachainlab/fabric-tendermint-cross-demo/blob/main/contracts/erc20/modules/erc20contract/module.go"},"here"),"."))}m.isMDXComponent=!0}}]);