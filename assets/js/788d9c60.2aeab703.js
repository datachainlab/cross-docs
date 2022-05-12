"use strict";(self.webpackChunkcross_docs=self.webpackChunkcross_docs||[]).push([[994],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=l(r),h=a,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(m,i(i({ref:e},p),{},{components:r})):n.createElement(m,i({ref:e},p))}));function h(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5930:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:5,id:"state-store"},c="State store",l={unversionedId:"docs/architecture/state-store",id:"docs/architecture/state-store",title:"State store",description:"State store is an abstract KVS, or key-value store, class that persists the state of smart contracts on each chain. It supports the following elements:",source:"@site/docs/01-docs/03-architecture/05-state-store.md",sourceDirName:"01-docs/03-architecture",slug:"/docs/architecture/state-store",permalink:"/cross-docs/docs/architecture/state-store",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"state-store"},sidebar:"tutorialSidebar",previous:{title:"Atomic commit protocol",permalink:"/cross-docs/docs/architecture/atomic-commit-protocol"},next:{title:"Overview",permalink:"/cross-docs/tutorial/overview"}},p={},u=[{value:"Lock Store",id:"lock-store",level:2},{value:"CDT(Conflict-free Data Types) Store",id:"cdtconflict-free-data-types-store",level:2}],d={toc:u};function h(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"state-store"},"State store"),(0,o.kt)("p",null,"State store is an abstract KVS, or key-value store, class that persists the state of smart contracts on each chain. It supports the following elements:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Saving operations that change state"),(0,o.kt)("li",{parentName:"ol"},"Applying or discarding saved changes"),(0,o.kt)("li",{parentName:"ol"},"Locking mechanism for state access")),(0,o.kt)("p",null,"In general, executing contract functions sequentially in a single blockchain can reflect the changes in the store after each update operation. However, the state of contracts in chains needs to be updated atomically in a cross-chain application. If any contracts in one chain fail, the execution of all other related contracts must be interrupted. Therefore, the State store supports (1) the storage of state change operations and (2) the application and destruction of stored changes."),(0,o.kt)("p",null,"In addition, cross-chain transactions are executed cooperatively among blockchains, which means that they are divided into multiple transactions within a given chain. Therefore, there can be transactions operating in parallel in the same state. Cross Framework introduces the locking mechanism in (3) to guarantee the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Serializability"},"serializability")," of transactions. The following describes a state store implementation that supports the currently provided two types of locking mechanisms."),(0,o.kt)("h2",{id:"lock-store"},"Lock Store"),(0,o.kt)("p",null,"Lock Store is a store that provides simple APIs such as Get, Set, etc., to obtain Read-Write lock."),(0,o.kt)("p",null,"The following operations are supported:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Get(K): Returns the value corresponding to the Key specified by ",(0,o.kt)("inlineCode",{parentName:"li"},"K")),(0,o.kt)("li",{parentName:"ul"},"Set(K,V): Set the value specified by ",(0,o.kt)("inlineCode",{parentName:"li"},"V")," to the key specified by ",(0,o.kt)("inlineCode",{parentName:"li"},"K")),(0,o.kt)("li",{parentName:"ul"},"Delete(K): Deletes a Key and its corresponding Value specified by ",(0,o.kt)("inlineCode",{parentName:"li"},"K"))),(0,o.kt)("p",null,"The store also acquires the following locks for each operation."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"State store operations"),(0,o.kt)("th",{parentName:"tr",align:null},"locks to be acquired"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Get(K)"),(0,o.kt)("td",{parentName:"tr",align:null},"Shared lock on K")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Set(K, V)"),(0,o.kt)("td",{parentName:"tr",align:null},"Exclusive lock on K")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Delete(K)"),(0,o.kt)("td",{parentName:"tr",align:null},"Exclusive lock to K")))),(0,o.kt)("h2",{id:"cdtconflict-free-data-types-store"},"CDT(Conflict-free Data Types) Store"),(0,o.kt)("p",null,"CDT Store is a store that implements a data structure called ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datachainlab/cross-cdt"},"CDT")," that allows concurrent operations under certain conditions."),(0,o.kt)("p",null,"CDT defines multiple data types and currently supports Integer, Grow-only Set; Integer supports Add, Sub, and Compare functions, which can be used to implement ERC20 with concurrent operations. For more information, check here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datachainlab/cross-cdt"},"https://github.com/datachainlab/cross-cdt")))}h.isMDXComponent=!0}}]);