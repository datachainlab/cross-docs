"use strict";(self.webpackChunkcross_docs=self.webpackChunkcross_docs||[]).push([[949],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(r),u=n,h=p["".concat(s,".").concat(u)]||p[u]||d[u]||o;return r?a.createElement(h,i(i({ref:t},m),{},{components:r})):a.createElement(h,i({ref:t},m))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5553:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:5,id:"create-command-cli"},i="Create Command CLI",c={unversionedId:"tutorial/create-command-cli",id:"tutorial/create-command-cli",title:"Create Command CLI",description:"This part explains how to develop CLI to run Cross-chain transactions in atomic.",source:"@site/docs/02-tutorial/05-create-command-cli.md",sourceDirName:"02-tutorial",slug:"/tutorial/create-command-cli",permalink:"/cross-docs/tutorial/create-command-cli",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"create-command-cli"},sidebar:"tutorialSidebar",previous:{title:"Create Blockchain Applications",permalink:"/cross-docs/tutorial/create-blockchain-app"},next:{title:"Execution",permalink:"/cross-docs/tutorial/execution"}},s={},l=[{value:"Cross Framework functionalities as CLI",id:"cross-framework-functionalities-as-cli",level:2},{value:"Coordinator/Participant chain",id:"coordinatorparticipant-chain",level:3},{value:"Participant only chain",id:"participant-only-chain",level:3},{value:"Each of CLI source code for Cross Framework",id:"each-of-cli-source-code-for-cross-framework",level:3}],m={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-command-cli"},"Create Command CLI"),(0,n.kt)("p",null,"This part explains how to develop CLI to run Cross-chain transactions in atomic.\nSee README.md respectively."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/cmds/alpha"},"Tendermint Comamand")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/cmds/beta"},"Fabric Command"))),(0,n.kt)("h2",{id:"cross-framework-functionalities-as-cli"},"Cross Framework functionalities as CLI"),(0,n.kt)("p",null,"As precondition, demo project works by ",(0,n.kt)("a",{parentName:"p",href:"/cross-docs/docs/architecture/atomic-commit-protocol#simple-commit-protocol"},"Simple commit protocol")," as ",(0,n.kt)("a",{parentName:"p",href:"/cross-docs/docs/architecture/atomic-commit-protocol#atomic-commit-protocol"},"Atomic commit protocol"),".",(0,n.kt)("br",{parentName:"p"}),"\n","Required functionalities as CLI depend on Chain specific architecture. And the functionalities for Cross-chain are different between the ",(0,n.kt)("inlineCode",{parentName:"p"},"Coordinator/Participant")," chain and the ",(0,n.kt)("inlineCode",{parentName:"p"},"Participant only")," chain."),(0,n.kt)("h3",{id:"coordinatorparticipant-chain"},"Coordinator/Participant chain"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Coordinator/Participant")," chain is in charge of ",(0,n.kt)("inlineCode",{parentName:"p"},"Transaction Initiator"),". So CLI includes ",(0,n.kt)("inlineCode",{parentName:"p"},"create-initiate-tx")," commnad to create ",(0,n.kt)("a",{parentName:"p",href:"/cross-docs/docs/architecture/cross-chain-transaction#initiate-transaction"},"Initiate Transaction"),"."),(0,n.kt)("p",null,"Tendermint Command reference in the demo is ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/cmds/alpha"},"here"),"."),(0,n.kt)("h3",{id:"participant-only-chain"},"Participant only chain"),(0,n.kt)("p",null,"CLI includes ",(0,n.kt)("inlineCode",{parentName:"p"},"ibc-signtx")," command to create ",(0,n.kt)("a",{parentName:"p",href:"/cross-docs/docs/architecture/cross-chain-transaction"},"IBCSignTx")," due to that ",(0,n.kt)("a",{parentName:"p",href:"/cross-docs/docs/architecture/cross-chain-transaction"},"IBCSignTx")," is used in demo."),(0,n.kt)("p",null,"Fabric Command reference in the demo is ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datachainlab/fabric-tendermint-cross-demo/tree/main/cmds/beta"},"here"),"."),(0,n.kt)("h3",{id:"each-of-cli-source-code-for-cross-framework"},"Each of CLI source code for Cross Framework"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/datachainlab/fabric-tendermint-cross-demo/blob/main/cmds/alpha/cmd/cross.go"},"Code for Tendermint")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/datachainlab/fabric-tendermint-cross-demo/blob/main/cmds/beta/cmd/cross.go"},"Code for Fabric"))))}d.isMDXComponent=!0}}]);